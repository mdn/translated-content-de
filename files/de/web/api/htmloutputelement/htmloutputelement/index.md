---
title: "HTMLOutputElement: HTMLOutputElement() Konstruktor"
short-title: HTMLOutputElement()
slug: Web/API/HTMLOutputElement/HTMLOutputElement
l10n:
  sourceCommit: af9a8ff87cfa6563c9a082162ce4ed7ba0b204e1
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Der **`HTMLOutputElement()`** Konstruktor erstellt ein neues [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) Objekt.

> [!NOTE]
> Derzeit implementiert nur Safari diesen Konstruktor, daher wird die Verwendung von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) für eine breitere Kompatibilität empfohlen — siehe das [Beispiel unten](#programmgesteuertes_erstellen_eines_output-elements).

## Syntax

```js-nolint
new HTMLOutputElement()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird mit der Nachricht `"Illegal constructor"` in Browsern ausgelöst, die diesen Konstruktor nicht unterstützen.

## Beispiele

### Programmgesteuertes Erstellen eines output-Elements

> [!NOTE]
> In der Praxis würden Sie normalerweise {{htmlelement("output")}}-Elemente mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellen, anstatt diesen Konstruktor zu verwenden, da `createElement()` in allen Browsern unterstützt wird.

Dieses Beispiel erstellt ein {{htmlelement("output")}}-Element mit dem `HTMLOutputElement()` Konstruktor und fügt es in ein Formular ein, das zwei Zahlen addiert.

```html
<form id="my-form">
  <label>
    Number one
    <input type="number" id="a" value="5" />
  </label>
  +
  <label>
    Number two
    <input type="number" id="b" value="3" />
  </label>
  =
  <span id="output-container"></span>
</form>
<p id="warning" hidden>
  ⚠️ Your browser does not support the
  <code>HTMLOutputElement()</code> constructor.
</p>
```

```css hidden
body {
  font-family: system-ui;
}

input {
  width: 3rem;
  font-size: inherit;
}

p {
  padding: 0.25rem;
  background-color: #fff2cc;
}
```

```js
try {
  new HTMLOutputElement();
} catch {
  document.getElementById("warning").hidden = false;
}

const output = new HTMLOutputElement();
output.id = "result";
output.setAttribute("for", "a b");
document.getElementById("output-container").appendChild(output);

function updateResult() {
  const a = document.getElementById("a");
  const b = document.getElementById("b");
  output.value = a.valueAsNumber + b.valueAsNumber;
}

document.getElementById("my-form").addEventListener("input", updateResult);
updateResult();
```

{{EmbedLiveSample("creating_an_output_element_programmatically", "", "150")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement)
- {{HTMLElement("output")}}
- [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
