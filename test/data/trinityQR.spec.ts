/**
 * Tests for TrinityPaymentQR.
 */
import * as chai from "chai";
import { TrinityPaymentQR } from "../../src/data/TrinityPaymentQR";

describe("TrinityPaymentQR", () => {
    it("can be created", () => {
        const obj = new TrinityPaymentQR();
        chai.should().exist(obj);
    });
});
