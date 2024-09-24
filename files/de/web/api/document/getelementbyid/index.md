---
title: "Document: Methode getElementById()"
short-title: getElementById()
slug: Web/API/Document/getElementById
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ ApiRef("DOM") }}

Die **`getElementById()`** Methode des {{domxref("Document")}}-Interfaces gibt ein {{domxref("Element")}}-Objekt zurück, das das Element repräsentiert, dessen {{domxref("Element.id", "id")}}-Eigenschaft mit dem angegebenen String übereinstimmt. Da Element-IDs, wenn sie angegeben sind, eindeutig sein müssen, sind sie eine nützliche Möglichkeit, schnell Zugriff auf ein bestimmtes Element zu erhalten.

Wenn Sie auf ein Element zugreifen müssen, das keine ID hat, können Sie {{domxref("Document.querySelector", "querySelector()")}} verwenden, um das Element mit einem beliebigen {{Glossary("CSS selector", "Selector")}} zu finden.

> [!NOTE]
> IDs sollten innerhalb eines Dokuments eindeutig sein. Wenn zwei oder mehr Elemente in einem Dokument dieselbe ID haben, gibt diese Methode das erste gefundene Element zurück.

## Syntax

```js-nolint
getElementById(id)
```

> [!NOTE]
> Die Groß- und Kleinschreibung von `"Id"` im Namen dieser Methode _muss_ korrekt sein, damit der Code funktioniert; `getElementByID()` ist _nicht_ gültig und wird nicht funktionieren, egal wie natürlich es erscheinen mag.

### Parameter

- `id`
  - : Die ID des zu lokalisierenden Elements. Die ID ist ein groß- und kleinsensitiver String, der innerhalb des Dokuments einzigartig ist; nur ein Element sollte eine gegebene ID haben.

### Rückgabewert

Ein {{domxref("Element")}}-Objekt, das das DOM-Elementobjekt beschreibt, das mit der angegebenen ID übereinstimmt, oder `null`, wenn kein übereinstimmendes Element im Dokument gefunden wurde.

## Beispiele

### HTML

```html
<html lang="en">
  <head>
    <title>getElementById example</title>
  </head>
  <body>
    <p id="para">Some text here</p>
    <button onclick="changeColor('blue');">blue</button>
    <button onclick="changeColor('red');">red</button>
  </body>
</html>
```

### JavaScript

```js
function changeColor(newColor) {
  const elem = document.getElementById("para");
  elem.style.color = newColor;
}
```

### Ergebnis

{{ EmbedLiveSample('Examples', 250, 120) }}

## Hinweise zur Verwendung

Im Gegensatz zu einigen anderen Methoden zur Suche nach Elementen wie {{domxref("Document.querySelector()")}} und {{domxref("Document.querySelectorAll()")}} ist `getElementById()` nur als Methode des globalen `document`-Objekts verfügbar und _nicht_ als Methode auf allen Elementobjekten im DOM verfügbar. Da ID-Werte im gesamten Dokument einzigartig sein müssen, gibt es keinen Bedarf für "lokale" Versionen der Funktion.

### Beispiel

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <div id="parent-id">
      <p>hello word1</p>
      <p id="test1">hello word2</p>
      <p>hello word3</p>
      <p>hello word4</p>
    </div>
    <script>
      const parentDOM = document.getElementById("parent-id");
      const test1 = parentDOM.getElementById("test1");
      // throw error
      // Uncaught TypeError: parentDOM.getElementById is not a function
    </script>
  </body>
</html>
```

Wenn es kein Element mit der angegebenen `id` gibt, gibt diese Funktion `null` zurück. Beachten Sie, dass der `id`-Parameter groß- und kleinsensitiv ist, sodass `document.getElementById("Main")` `null` zurückgeben wird, statt das Element `<div id="main">`, weil "M" und "m" für die Zwecke dieser Methode unterschiedlich sind.

Elemente, die sich nicht im Dokument befinden, werden von `getElementById()` nicht durchsucht. Beim Erstellen eines Elements und Zuweisen einer ID müssen Sie das Element mit {{domxref("Node.insertBefore()")}} oder einer ähnlichen Methode in den Dokumentbaum einfügen, bevor Sie mit `getElementById()` darauf zugreifen können:

```js
const element = document.createElement("div");
element.id = "testqq";
const el = document.getElementById("testqq"); // el wird null sein!
```

In Nicht-HTML-Dokumenten muss die DOM-Implementierung Informationen darüber haben, welche Attribute vom Typ ID sind. Attribute mit dem Namen "id" sind nicht vom Typ ID, es sei denn, sie sind im DTD des Dokuments so definiert. Das `id`-Attribut ist in den üblichen Fällen von [XHTML](/de/docs/Glossary/XHTML), XUL und anderen als ID-Typ definiert. Implementierungen, die nicht wissen, ob Attribute vom Typ ID sind oder nicht, sollten `null` zurückgeben.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("Document")}} Referenz für andere Methoden und Eigenschaften, die Sie verwenden können, um Referenzen zu Elementen im Dokument zu erhalten.
- {{domxref("Document.querySelector()")}} für Selektoren über Abfragen wie `'div.myclass'`
- {{domxref("Document.evaluate()")}} - hat eine Hilfsmethode zur Auswahl nach `xml:id` in {{glossary("XML")}} Dokumenten
