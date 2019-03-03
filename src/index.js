/** Created by azder on 2019-03-02. */

const VAL = Symbol();

const nav = (
    val => new Proxy(
        Object.assign(() => void 0, {[VAL]: val}),
        {
            apply: tar => Reflect.has(tar, VAL) ? tar[VAL] : tar,

            get: (tar, key) => {
                tar = Reflect.has(tar, VAL) ? tar[VAL] : tar;
                return nav(null === tar || void 0 === tar ? tar : tar[key]);
            }
        }
    )
);


// noinspection JSUnusedGlobalSymbols
export default nav;


