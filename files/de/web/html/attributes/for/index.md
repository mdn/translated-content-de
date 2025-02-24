---
title: "HTML-Attribut: for"
short-title: for
slug: Web/HTML/Attributes/for
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`for`**-Attribut ist ein erlaubtes Attribut für {{htmlelement("label")}} und {{htmlelement("output")}}. Wenn es bei einem `<label>`-Element verwendet wird, zeigt es das Formular-Element an, das dieses Label beschreibt. Wenn es bei einem `<output>`-Element verwendet wird, ermöglicht es eine explizite Beziehung zwischen den Elementen, die Werte darstellen, die im Output verwendet werden.

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
  color: rebbeccapurple;
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

## Nutzung

Wenn es als Attribut von `<label>` verwendet wird, hat das `for`-Attribut einen Wert, der die `id` des zugehörigen Formularelements ist.

```html
<label for="username">Your name</label> <input type="text" id="username" />
```

Wenn es als Attribut von `<output>` verwendet wird, hat das `for`-Attribut einen Wert, der eine durch Leerzeichen getrennte Liste der `id`-Werte der Elemente ist, die zur Erstellung des Outputs verwendet werden.

```html
<input type="range" id="b" name="b" value="50" /> +
<input type="number" id="a" name="a" value="10" /> =
<output name="result" for="a b">60</output>
```

## Beispiele

Siehe Anwendungsbeispiele auf den Elementseiten für {{htmlelement("label")}} und {{htmlelement("output")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
