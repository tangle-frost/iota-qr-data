/**
 * Tests for Svg.
 */
import { QR } from "@tangle-frost/iota-qr-core/dist/qr";
import * as chai from "chai";
import fs from "fs";
import { Svg } from "../../src/renderTypes/svg";

describe("Svg", () => {
    it("can be created", () => {
        const obj = new Svg();
        chai.should().exist(obj);
    });

    describe("render", () => {
        it("can render data", async () => {
            const qr = new QR();
            qr.addData("This is a test");
            const data = qr.generate();

            const svg = await Svg.render(data);

            const expected = fs.readFileSync("./test/renderTypes/results/svg1.svg");

            chai.expect(svg).to.equal(expected.toString());
        });
    });
});
