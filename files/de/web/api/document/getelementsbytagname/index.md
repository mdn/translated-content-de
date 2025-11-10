---
title: "Dokument: `getElementsByTagName()` Methode"
short-title: getElementsByTagName()
slug: Web/API/Document/getElementsByTagName
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

Die **`getElementsByTagName`** Methode des
[`Document`](/de/docs/Web/API/Document) Interface gibt eine
[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) von Elementen mit dem angegebenen Tag-Namen zurück.

Das gesamte Dokument wird durchsucht, einschließlich des Wurzelknotens. Die zurückgegebene `HTMLCollection`
ist live, das bedeutet, dass sie sich automatisch aktualisiert, um mit dem DOM-Baum synchron zu bleiben, ohne `document.getElementsByTagName()` erneut aufrufen zu müssen.

## Syntax

```js-nolint
getElementsByTagName(name)
```

### Parameter

- `name`
  - : Ein String, der den Namen der Elemente repräsentiert. Der spezielle
    String `*` repräsentiert alle Elemente.

### Rückgabewert

Eine live [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der gefundenen Elemente in der Reihenfolge, in der sie im Baum erscheinen.

## Beispiele

Im folgenden Beispiel beginnt `getElementsByTagName()` von einem bestimmten
Elternelement und durchsucht rekursiv von oben nach unten den DOM-Baum von diesem Elternelement aus, um eine Sammlung aller Nachkommenelemente zu erstellen, die mit dem Tag-Parameter `name` übereinstimmen. Dies demonstriert sowohl
`document.getElementsByTagName()` als auch das funktional identische
[`Element.getElementsByTagName()`](/de/docs/Web/API/Element/getElementsByTagName), das die Suche bei einem bestimmten
Element im DOM-Baum beginnt.

Das Klicken der Schaltflächen verwendet `getElementsByTagName()`, um die Nachkommen-Paragraphenelemente eines bestimmten Elternteils zu zählen (entweder das Dokument selbst oder eines von zwei verschachtelten {{HTMLElement("div")}} Elementen).

```html
<p>Some outer text</p>
<p>Some outer text</p>

<div id="div1">
  <p>Some div1 text</p>
  <p>Some div1 text</p>
  <p>Some div1 text</p>

  <div id="div2">
    <p>Some div2 text</p>
    <p>Some div2 text</p>
  </div>
</div>

<p>Some outer text</p>
<p>Some outer text</p>

<button id="btn1">Show all p elements in document</button>
<br />
<button id="btn2">Show all p elements in div1 element</button>
<br />
<button id="btn3">Show all p elements in div2 element</button>
```

```css
body {
  border: solid green 3px;
}

#div1 {
  border: solid blue 3px;
}

#div2 {
  border: solid red 3px;
}
```

```js
function getAllParaElems() {
  const allParas = document.getElementsByTagName("p");
  const num = allParas.length;
  alert(`There are ${num} paragraph in this document`);
}

function div1ParaElems() {
  const div1 = document.getElementById("div1");
  const div1Paras = div1.getElementsByTagName("p");
  const num = div1Paras.length;
  alert(`There are ${num} paragraph in #div1`);
}

function div2ParaElems() {
  const div2 = document.getElementById("div2");
  const div2Paras = div2.getElementsByTagName("p");
  const num = div2Paras.length;
  alert(`There are ${num} paragraph in #div2`);
}

document.getElementById("btn1").addEventListener("click", getAllParaElems);
document.getElementById("btn2").addEventListener("click", div1ParaElems);
document.getElementById("btn3").addEventListener("click", div2ParaElems);
```

## Anmerkungen

Wenn es auf ein HTML-Dokument angewendet wird, wird das Argument von `getElementsByTagName()` vor dem Fortfahren in Kleinbuchstaben umgewandelt. Dies ist unerwünscht, wenn man versucht, {{Glossary("camel_case", "camel case")}} SVG-Elemente in einem Unterbaum in einem HTML-Dokument abzugleichen.
[`document.getElementsByTagNameNS()`](/de/docs/Web/API/Document/getElementsByTagNameNS) ist in diesem Fall nützlich. Siehe auch
[Firefox Bug 499656](https://bugzil.la/499656).

`document.getElementsByTagName()` ist ähnlich wie
[`Element.getElementsByTagName()`](/de/docs/Web/API/Element/getElementsByTagName), außer dass seine Suche das
gesamte Dokument umfasst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.getElementsByTagName()`](/de/docs/Web/API/Element/getElementsByTagName)
- [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) um eine Referenz auf ein Element nach seiner
  `id` zurückzugeben
- [`document.getElementsByName()`](/de/docs/Web/API/Document/getElementsByName) um eine Referenz auf ein Element nach
  seinem `name` zurückzugeben
- [`document.querySelector()`](/de/docs/Web/API/Document/querySelector) für leistungsstarke Selektoren durch Abfragen wie
  `'div.myclass'`
