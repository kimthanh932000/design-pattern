// https://leetcode.com/problems/describe-the-painting/description/
const isInOS = (point: number, RSSP: number, RSEP: number): boolean => {
    return (point >= RSSP && point < RSEP);
}

/*
* SP = start point
* EP = end point
* LS = left segment
* RS = right segment
* OS = overlapping segment
* */

/*
[1,4,5],[4,7,7],[1,7,9]
==5===
      ===7===
=====9=======
1-2-3-4-5-6-7-8-9-10
 */
export const splitPainting = (segments: number[][]): number[][] => {
    const OSs = [];
    const nonOSs = [];
    for (let i = 0; i < segments.length; i++) {
        for (let j = i + 1; j < segments.length; j++) {
            let OSSP = null;
            let OSEP = null;
            let LSSP = segments[i][0];
            let LSEP = segments[i][1];
            let RSSP = segments[j][0];
            let RSEP = segments[j][1];

            if (isInOS(LSSP, RSSP, RSEP)) {
                /*
                    ===5===         ||    ===5===
                    ===9======      ||  ====9=====
                */
                OSSP = LSSP;

                if (isInOS(LSEP, RSSP, RSEP)) {
                    OSEP = LSEP;
                } else {
                    /*
                         ===5====
                        ===9===
                    */
                    OSEP = RSEP;
                }
            }
            if (!isInOS(LSSP, RSSP, RSEP) && isInOS(LSEP, RSSP, RSEP)) {
                /*
                   ===5===
                       ===9====
                */
                OSSP = RSSP;
                OSEP = LSEP;
            }
            if (isInOS(RSSP, LSSP, LSEP) && isInOS(RSEP, LSSP, LSEP)) {
                /*
                  ====5=====
                    ==9===
                */
                OSSP = RSSP;
                OSEP = RSEP;
            }
        }
    }
    return [[]];
};

const segments = [[1,4,5],[4,7,7],[1,7,9]]
splitPainting(segments);

/*
* 1. Check if start point and end point of left segment belongs to the rest
* 2. If belong,
* */