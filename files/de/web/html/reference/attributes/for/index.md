---
title: "HTML-Attribut: for"
short-title: for
slug: Web/HTML/Reference/Attributes/for
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`for`**-Attribut ist ein erlaubtes Attribut für {{htmlelement("label")}} und {{htmlelement("output")}}. Wenn es auf einem `<label>`-Element verwendet wird, gibt es das Formularelement an, das durch dieses Label beschrieben wird. Bei Verwendung auf einem `<output>`-Element ermöglicht es eine explizite Beziehung zwischen den Elementen, die Werte darstellen, die im Output verwendet werden.

{{InteractiveExample("HTML Demo: for", "tabbed-shorter")}}

```html interactive-example
<p>
  <label>First Name (no "for" attribute):</label>
  <input id="first" type="text" value="Jane" />
</p>
<p>
  <label for="last">Last Name (w/ "for" attribute):</label>
  <input id="last" type="text" value="Doe" />
</p>
<p id="result">
  <strong id="result-label">Full Name:</strong>
  <output for="first last" aria-labelledby="result-label" id="output"></output>
</p>
```

```css interactive-example
label[for="paragraph"] {
  color: rebeccapurple;
}

#result {
  text-align: center;
}

#result-label {
  font-size: 16pt;
}

#result-label,
#output {
  display: block;
}
```

```js interactive-example
const firstNameEl = document.getElementById("first");
const lastNameEl = document.getElementById("last");
const outputEl = document.getElementById("output");

function updateOutput() {
  const value = `${firstNameEl.value} ${lastNameEl.value}`;
  outputEl.innerText = value;
}

updateOutput();
firstNameEl.addEventListener("input", updateOutput);
lastNameEl.addEventListener("input", updateOutput);
```

## Nutzungshinweise

Wenn das `for`-Attribut als Attribut eines `<label>`-Elements verwendet wird, hat es einen Wert, der die `id` des zugehörigen Formularelements darstellt.

```html
<label for="username">Your name</label> <input type="text" id="username" />
```

Wenn das `for`-Attribut als Attribut eines `<output>`-Elements verwendet wird, hat es einen Wert, der eine durch Leerzeichen getrennte Liste der `id`-Werte der Elemente ist, die zur Erstellung des Outputs verwendet werden.

```html
<input type="range" id="b" name="b" value="50" /> +
<input type="number" id="a" name="a" value="10" /> =
<output name="result" for="a b">60</output>
```

## Beispiele

Siehe Beispiele für die Verwendung auf den Elementseiten für {{htmlelement("label")}} und {{htmlelement("output")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
