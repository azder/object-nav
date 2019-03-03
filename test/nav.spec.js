import nav from '../src/index';

describe('nav', () => {

    describe('returns a function', () => {

        const values = [null, void 0, 'string', Number(), NaN, false, true, 0, Symbol(), {}];

        it('for chained properties as well', () => {

            for (const value of values) {
                expect([value, typeof nav(value)]).toEqual([value, 'function']);
                expect([value, '.a.b', typeof nav(value).a.b]).toEqual([value, '.a.b', 'function']);
            }
        });

        it('returns the enclosed value when invoked', () => {

            for (const value of values) {
                expect([value, nav(value)()]).toEqual([value, value]);
            }
        });

        it('propagates null and undefined to sub-properties', () => {

            expect([null, nav(null).a.b.c.d()]).toEqual([null, null]);
            expect([void 0, nav().a.b.c.d()]).toEqual([void 0, void 0]);
        });

        it('does deep retrieve of values', () => {

            const value = true;
            const o = {a: {b: {c: {d: value}}}};
            expect([o, '.a.b.c.d()', nav(o).a.b.c.d()]).toEqual([o, '.a.b.c.d()', value]);

        });


    });

});


