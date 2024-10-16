---
title: "Dokumentation: getElementsByTagNameNS() Methode"
short-title: getElementsByTagNameNS()
slug: Web/API/Document/getElementsByTagNameNS
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("DOM")}}

Gibt eine Liste von Elementen mit dem gegebenen Tag-Namen zurück, die zum angegebenen Namensraum gehören. Das gesamte Dokument wird durchsucht, einschließlich des Wurzelknotens.

## Syntax

```js-nolint
getElementsByTagNameNS(namespace, name)
```

### Parameter

- `namespace`
  - : Der Namensraum-URI der zu suchenden Elemente (siehe [`element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI)).
- `name`

  - : Entweder der lokale Name der zu suchenden Elemente oder der spezielle Wert `*`, der alle Elemente abgleicht (siehe [`element.localName`](/de/docs/Web/API/Element/localName)).

    > [!NOTE]
    > Im Gegensatz zu [`document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName) sind die Parameter für `getElementsByTagNameNS()` case-sensitiv.

### Rückgabewert

Ein Live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der gefundenen Elemente in der Reihenfolge, in der sie im Baum erscheinen.

## Beispiele

Im folgenden Beispiel beginnt `getElementsByTagNameNS` von einem bestimmten
Elternelement aus und sucht rekursiv von oben nach unten durch das DOM ab diesem
Elternelement, wobei nach Kindelementen gesucht wird, die dem Tag-`name`-Parameter entsprechen.

Beachten Sie, dass wenn der Knoten, auf dem `getElementsByTagName` aufgerufen wird, nicht
der `document`-Knoten ist, tatsächlich die
[`element.getElementsByTagNameNS`](/de/docs/Web/API/Element/getElementsByTagNameNS)-Methode verwendet wird.

Um das folgende Beispiel zu verwenden, kopieren Sie es einfach und fügen Sie es in eine neue Datei ein, die mit der .xhtml-Erweiterung gespeichert wird.

```html
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>getElementsByTagNameNS example</title>

    <script>
      function getAllParaElems() {
        const allParas = document.getElementsByTagNameNS(
          "http://www.w3.org/1999/xhtml",
          "p",
        );
        const num = allParas.length;
        alert(`There are ${num} &lt;p&gt; elements in this document`);
      }

      function div1ParaElems() {
        const div1 = document.getElementById("div1");
        const div1Paras = div1.getElementsByTagNameNS(
          "http://www.w3.org/1999/xhtml",
          "p",
        );
        const num = div1Paras.length;
        alert(`There are ${num} &lt;p&gt; elements in div1 element`);
      }

      function div2ParaElems() {
        const div2 = document.getElementById("div2");
        const div2Paras = div2.getElementsByTagNameNS(
          "http://www.w3.org/1999/xhtml",
          "p",
        );
        const num = div2Paras.length;
        alert(`There are ${num} &lt;p&gt; elements in div2 element`);
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
      show all p elements in div2 element
    </button>
  </body>
</html>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.getElementsByTagNameNS()`](/de/docs/Web/API/Element/getElementsByTagNameNS)
