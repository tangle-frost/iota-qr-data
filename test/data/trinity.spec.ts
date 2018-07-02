/**
 * Tests for Trinity.
 */
import * as chai from "chai";
import { Trinity } from "../../src/data/trinity";

describe("Trinity", () => {
    it("can be created", () => {
        const obj = new Trinity();
        chai.should().exist(obj);
    });
});
