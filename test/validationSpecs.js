describe("validator", function () {
    beforeEach(function () {
        let elem = document.createElement('div');
        elem.id = "mycontainer";
        elem.innerHTML = `
        <input type="text" id="test" />
        `;
        document.body.appendChild(elem)
    });

    afterEach(function () {
        $('#mycontainer').remove();
    });

    it("validate element", function () {
        const test = document.getElementById('test');
        test.value = 'text';
        window.validate(test, 'text');
        expect(test.classList.contains('invalid')).toBe(false);
    });

    it("invalidate element", function () {
        const test = document.getElementById('test');
        test.value = 'text';
        window.validate(test, 'thing');
        expect(test.classList.contains('invalid')).toBe(true);
    });

    it("validate invalid element", function () {
        const test = document.getElementById('test');
        test.classList.add('invalid');
        test.value = 'text';
        window.validate(test, 'text');
        expect(test.classList.contains('invalid')).toBe(false);
    });

    it("Invalidate invalid element", function () {
        const test = document.getElementById('test');
        test.classList.add('invalid');
        test.value = 'text';
        window.validate(test, 'dsa');
        expect(test.classList.contains('invalid')).toBe(true);
    });

    it("Invalidate invalid element by regexp", function () {
        const test = document.getElementById('test');
        test.value = 'text';
        window.validate(test, /[t]+/g);
        expect(test.classList.contains('invalid')).toBe(false);
    });
});