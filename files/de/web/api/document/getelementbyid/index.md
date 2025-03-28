---
title: "Dokument: getElementById()-Methode"
short-title: getElementById()
slug: Web/API/Document/getElementById
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{ ApiRef("DOM") }}

Die **`getElementById()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt ein [`Element`](/de/docs/Web/API/Element)-Objekt zurück, das das Element darstellt, dessen [`id`](/de/docs/Web/API/Element/id)-Eigenschaft mit dem angegebenen String übereinstimmt. Da Element-IDs, wenn sie angegeben werden, einzigartig sein müssen, sind sie eine nützliche Möglichkeit, schnell auf ein bestimmtes Element zuzugreifen.

Wenn Sie Zugriff auf ein Element benötigen, das keine ID hat, können Sie [`querySelector()`](/de/docs/Web/API/Document/querySelector) verwenden, um das Element mit einem beliebigen {{Glossary("CSS_selector", "Selektor")}} zu finden.

> [!NOTE]
> IDs sollten innerhalb eines Dokuments eindeutig sein. Wenn zwei oder mehr Elemente in einem Dokument die gleiche ID haben, gibt diese Methode das erste gefundene Element zurück.

## Syntax

```js-nolint
getElementById(id)
```

> [!NOTE]
> Die Großschreibung von `"Id"` im Namen dieser Methode _muss_ korrekt sein, damit der Code funktioniert; `getElementByID()` ist _nicht_ gültig und wird nicht funktionieren, so natürlich es auch erscheinen mag.

### Parameter

- `id`
  - : Die ID des zu findenden Elements. Die ID ist ein groß-/kleinschreibungssensitiver String, der innerhalb des Dokuments eindeutig ist; nur ein Element sollte eine gegebene ID haben.

### Rückgabewert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt, das das DOM-Element beschreibt, das mit der angegebenen ID übereinstimmt, oder `null`, wenn kein übereinstimmendes Element im Dokument gefunden wurde.

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

## Verwendungshinweise

Im Gegensatz zu einigen anderen Methoden zur Element-Suche wie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) und [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) ist `getElementById()` nur als Methode des globalen `document`-Objekts verfügbar und _nicht_ als Methode auf allen Element-Objekten im DOM. Da ID-Werte im gesamten Dokument eindeutig sein müssen, gibt es keine Notwendigkeit für "lokale" Versionen der Funktion.

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

Wenn es kein Element mit der angegebenen `id` gibt, gibt diese Funktion `null` zurück. Beachten Sie, dass der `id`-Parameter groß-/kleinschreibungssensitiv ist, daher wird `document.getElementById("Main")` `null` zurückgeben, anstatt dem Element `<div id="main">`, da "M" und "m" für diese Methode unterschiedlich sind.

Elemente, die sich nicht im Dokument befinden, werden von `getElementById()` nicht durchsucht. Wenn Sie ein Element erstellen und ihm eine ID zuweisen, müssen Sie das Element mit [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) oder einer ähnlichen Methode in den Dokumentbaum einfügen, bevor Sie mit `getElementById()` darauf zugreifen können:

```js
const element = document.createElement("div");
element.id = "test";
const el = document.getElementById("test"); // el will be null!
```

In Nicht-HTML-Dokumenten muss die DOM-Implementierung Informationen darüber haben, welche Attribute vom Typ ID sind. Attribute mit dem Namen "id" sind nicht vom Typ ID, es sei denn, sie sind im DTD des Dokuments so definiert. Das `id`-Attribut ist für die gängigen Fälle von {{Glossary("XHTML", "XHTML")}}, XUL und anderen als vom Typ ID definiert. Implementierungen, die nicht wissen, ob Attribute vom Typ ID sind oder nicht, erwarten, dass `null` zurückgegeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document`](/de/docs/Web/API/Document)-Referenz für andere Methoden und Eigenschaften, die Sie verwenden können, um Referenzen zu Elementen im Dokument zu erhalten.
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) für Selektoren über Abfragen wie `'div.myclass'`.
- [`Document.evaluate()`](/de/docs/Web/API/Document/evaluate) - hat eine Dienstprogrammmethode zur Auswahl nach `xml:id` in {{Glossary("XML", "XML")}}-Dokumenten.
