---
title: "Document: getElementsByTagName()-Methode"
short-title: getElementsByTagName()
slug: Web/API/Document/getElementsByTagName
l10n:
  sourceCommit: a2a069e9e9a1a2375d57591e8b6cb878bd4dde97
---

{{APIRef("DOM")}}

Die **`getElementsByTagName`**-Methode der
[`Document`](/de/docs/Web/API/Document)-Schnittstelle gibt eine
[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) von Elementen mit dem angegebenen Tag-Namen zurück.

Das gesamte Dokument wird durchsucht, einschließlich des Wurzelknotens. Die zurückgegebene `HTMLCollection`
ist live, das heißt, sie aktualisiert sich automatisch, um mit dem DOM-Baum synchron zu bleiben, ohne dass `document.getElementsByTagName()` erneut aufgerufen werden muss.

## Syntax

```js-nolint
getElementsByTagName(name)
```

### Parameter

- `name`
  - : Ein String, der den Namen der Elemente repräsentiert. Der spezielle
    String `*` steht für alle Elemente.

### Rückgabewert

Eine live [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der gefundenen Elemente in der Reihenfolge, in der sie im Baum erscheinen.

## Beispiele

Im folgenden Beispiel startet `getElementsByTagName()` von einem bestimmten
Elternelement und sucht rekursiv von oben nach unten durch das DOM von diesem Elternelement,
wobei es eine Sammlung aller Nachfahren-Elemente erstellt, die zum Tag-`name`-Parameter passen. Dies zeigt sowohl
`document.getElementsByTagName()` als auch das funktional identische
[`Element.getElementsByTagName()`](/de/docs/Web/API/Element/getElementsByTagName), das die Suche an einem bestimmten
Element innerhalb des DOM-Baums startet.

Das Klicken auf die Schaltflächen verwendet `getElementsByTagName()`, um die Nachfahren-Absätze eines bestimmten Elternteils zu zählen (entweder des Dokuments selbst oder eines von zwei
verschachtelten {{HTMLElement("div")}}-Elementen).

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

Wenn `getElementsByTagName()` auf ein HTML-Dokument angewendet wird, wird sein
Argument in Kleinbuchstaben umgewandelt, bevor es fortfährt. Dies ist unerwünscht, wenn versucht wird, {{Glossary("camel_case", "Camel Case")}} SVG-Elemente in einem Unterbaum in einem HTML-Dokument zu finden.
[`document.getElementsByTagNameNS()`](/de/docs/Web/API/Document/getElementsByTagNameNS) ist in diesem Fall nützlich. Siehe auch
[Firefox-Bug 499656](https://bugzil.la/499656).

`document.getElementsByTagName()` ist ähnlich wie
[`Element.getElementsByTagName()`](/de/docs/Web/API/Element/getElementsByTagName), außer dass seine Suche das
gesamte Dokument umfasst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.getElementsByTagName()`](/de/docs/Web/API/Element/getElementsByTagName)
- [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) um eine Referenz auf ein Element anhand seiner
  `id` zu erhalten
- [`document.getElementsByName()`](/de/docs/Web/API/Document/getElementsByName) um eine Referenz auf ein Element anhand
  seines `name` zu erhalten
- [`document.querySelector()`](/de/docs/Web/API/Document/querySelector) für leistungsstarke Selektoren durch Abfragen wie
  `'div.myclass'`
