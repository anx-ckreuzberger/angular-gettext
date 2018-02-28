describe("HTMLParams", function () {
    it("Should allow html params", function () {
        return function () {
            browser.get("http://localhost:9000/test/fixtures/htmlparams.html");
            expect(element(by.css("body")).getText()).toContain("1 + 2 = 3");
        };
    });
});
