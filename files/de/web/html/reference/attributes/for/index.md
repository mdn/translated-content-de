---
title: "HTML-Attribut: for"
short-title: for
slug: Web/HTML/Reference/Attributes/for
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`for`**-Attribut ist ein erlaubtes Attribut für {{htmlelement("label")}} und {{htmlelement("output")}}. Wenn es in einem `<label>`-Element verwendet wird, gibt es das Formularelement an, das dieses Label beschreibt. Wird es in einem `<output>`-Element verwendet, ermöglicht es eine explizite Beziehung zwischen den Elementen, deren Werte im Output verwendet werden.

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

## Verwendung

Wird das `for`-Attribut in einem `<label>`-Element genutzt, hat es einen Wert, der der `id` des zugehörigen Formularelements entspricht.

```html
<label for="username">Your name</label> <input type="text" id="username" />
```

Wird das `for`-Attribut in einem `<output>`-Element verwendet, hat es einen Wert, der eine durch Leerzeichen getrennte Liste der `id`-Werte der Elemente ist, die zur Erstellung des Outputs genutzt werden.

```html
<input type="range" id="b" name="b" value="50" /> +
<input type="number" id="a" name="a" value="10" /> =
<output name="result" for="a b">60</output>
```

## Beispiele

Beispiele zur Verwendung finden Sie auf den Elementseiten für {{htmlelement("label")}} und {{htmlelement("output")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
