---
title: "Document: getElementsByTagName()-Methode"
short-title: getElementsByTagName()
slug: Web/API/Document/getElementsByTagName
l10n:
  sourceCommit: a2a069e9e9a1a2375d57591e8b6cb878bd4dde97
---

{{APIRef("DOM")}}

Die **`getElementsByTagName`**-Methode der
{{domxref("Document")}}-Schnittstelle gibt eine
{{domxref("HTMLCollection")}} von Elementen mit dem angegebenen Tag-Namen zurück.

Das gesamte Dokument wird durchsucht, einschließlich des Wurzelknotens. Die zurückgegebene `HTMLCollection` ist live, was bedeutet, dass sie sich automatisch aktualisiert, um mit dem DOM-Baum synchron zu bleiben, ohne dass `document.getElementsByTagName()` erneut aufgerufen werden muss.

## Syntax

```js-nolint
getElementsByTagName(name)
```

### Parameter

- `name`
  - : Ein Zeichenfolgenwert, der den Namen der Elemente darstellt. Die spezielle
    Zeichenfolge `*` repräsentiert alle Elemente.

### Rückgabewert

Eine live {{domxref("HTMLCollection")}} der gefundenen Elemente in der Reihenfolge, in der sie im Baum erscheinen.

## Beispiele

Im folgenden Beispiel beginnt `getElementsByTagName()` von einem bestimmten
Elternelement und durchsucht rekursiv von oben nach unten durch das DOM ab diesem Elternelement, um eine Sammlung aller Nachkommenelemente zu erstellen, die dem Tag-`name`-Parameter entsprechen. Dies demonstriert sowohl
`document.getElementsByTagName()` als auch die funktional identische
{{domxref("Element.getElementsByTagName()")}}, die die Suche bei einem bestimmten
Element innerhalb des DOM-Baums startet.

Das Klicken auf die Schaltflächen verwendet `getElementsByTagName()`, um die Nachkommen
von Absatzelementen eines bestimmten Elternteils zu zählen (entweder das Dokument selbst oder eines von zwei
geschachtelten {{HTMLElement("div")}}-Elementen).

```html-nolint
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>getElementsByTagName example</title>
    <script>
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
    </script>
  </head>
  <body style="border: solid green 3px">
    <p>Some outer text</p>
    <p>Some outer text</p>

    <div id="div1" style="border: solid blue 3px">
      <p>Some div1 text</p>
      <p>Some div1 text</p>
      <p>Some div1 text</p>

      <div id="div2" style="border: solid red 3px">
        <p>Some div2 text</p>
        <p>Some div2 text</p>
      </div>
    </div>

    <p>Some outer text</p>
    <p>Some outer text</p>

    <button onclick="getAllParaElems();">
      Show all p elements in document
    </button>
    <br />

    <button onclick="div1ParaElems();">
      Show all p elements in div1 element
    </button>
    <br />

    <button onclick="div2ParaElems();">
      Show all p elements in div2 element
    </button>
  </body>
</html>
```

## Hinweise

Wenn `getElementsByTagName()` bei einem HTML-Dokument aufgerufen wird, wandelt es sein Argument vor dem Fortfahren in Kleinbuchstaben um. Dies ist unerwünscht, wenn versucht wird, {{Glossary("camel_case", "camel case")}} SVG-Elemente in einem Teilbaum eines HTML-Dokuments abzugleichen.
{{Domxref("document.getElementsByTagNameNS()")}} ist in diesem Fall nützlich. Siehe auch
[Firefox-Bug 499656](https://bugzil.la/499656).

`document.getElementsByTagName()` ähnelt
{{domxref("Element.getElementsByTagName()")}}, außer dass seine Suche das
gesamte Dokument umfasst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.getElementsByTagName()")}}
- {{domxref("document.getElementById()")}}, um einen Verweis auf ein Element anhand seiner
  `id` zu erhalten
- {{domxref("document.getElementsByName()")}}, um einen Verweis auf ein Element anhand
  seines `name` zu erhalten
- {{domxref("document.querySelector()")}} für leistungsstarke Selektoren über Abfragen wie
  `'div.myclass'`
