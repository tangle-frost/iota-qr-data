/**
 * Tests for Txt.
 */
import { QR } from "@tangle-frost/iota-qr-core/dist/qr";
import * as chai from "chai";
import fs from "fs";
import { Txt } from "../../src/renderTypes/txt";

describe("Txt", () => {
    it("can be created", () => {
        const obj = new Txt();
        chai.should().exist(obj);
    });

    describe("render", () => {
        it("can render data", async () => {
            const qr = new QR();
            qr.addData("This is a test");
            const data = qr.generate();

            const txt = await Txt.render(data);

            const expected = fs.readFileSync("./test/renderTypes/results/txt1.txt");

            chai.expect(txt).to.equal(expected.toString());
        });
    });
});
