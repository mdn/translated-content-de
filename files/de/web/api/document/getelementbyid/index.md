---
title: "Document: getElementById()-Methode"
short-title: getElementById()
slug: Web/API/Document/getElementById
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ ApiRef("DOM") }}

Die **`getElementById()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt ein [`Element`](/de/docs/Web/API/Element)-Objekt zurück, das das Element repräsentiert, dessen [`id`](/de/docs/Web/API/Element/id)-Eigenschaft mit dem angegebenen String übereinstimmt. Da Element-IDs eindeutig sein müssen, wenn sie angegeben werden, sind sie eine nützliche Möglichkeit, schnell auf ein bestimmtes Element zuzugreifen.

Wenn Sie auf ein Element zugreifen müssen, das keine ID hat, können Sie [`querySelector()`](/de/docs/Web/API/Document/querySelector) verwenden, um das Element mit einem beliebigen [Selektor](/de/docs/Glossary/CSS_selector) zu finden.

> [!NOTE]
> IDs sollten innerhalb eines Dokuments einzigartig sein. Wenn zwei oder mehr Elemente in einem Dokument dieselbe ID haben, gibt diese Methode das zuerst gefundene Element zurück.

## Syntax

```js-nolint
getElementById(id)
```

> [!NOTE]
> Die Großschreibung von `"Id"` im Namen dieser Methode _muss_ korrekt sein, damit der Code funktioniert; `getElementByID()` ist _nicht_ gültig und wird nicht funktionieren, so natürlich es auch erscheinen mag.

### Parameter

- `id`
  - : Die ID des zu lokalisierenden Elements. Die ID ist eine groß- und kleinschreibungssensitive Zeichenkette, die innerhalb des Dokuments einzigartig ist; es sollte nur ein Element mit einer bestimmten ID geben.

### Rückgabewert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt, das das DOM-Element beschreibt, dessen ID mit der angegebenen ID übereinstimmt, oder `null`, wenn kein passendes Element im Dokument gefunden wurde.

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

Im Gegensatz zu einigen anderen Methoden zur Elementfindung, wie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) und [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll), ist `getElementById()` nur als Methode des globalen `document`-Objekts verfügbar und _nicht_ als Methode für alle Elementobjekte im DOM. Da ID-Werte im gesamten Dokument einzigartig sein müssen, gibt es keinen Bedarf für "lokale" Versionen der Funktion.

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

Wenn kein Element mit der angegebenen `id` vorhanden ist, gibt diese Funktion `null` zurück. Beachten Sie, dass der `id`-Parameter groß- und kleinschreibungssensitiv ist, daher wird `document.getElementById("Main")` `null` statt des Elements `<div id="main">` zurückgeben, da "M" und "m" in Bezug auf diese Methode unterschiedlich sind.

Elemente, die sich nicht im Dokument befinden, werden von `getElementById()` nicht durchsucht. Beim Erstellen eines Elements und Zuweisen einer ID müssen Sie das Element mit [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) oder einer ähnlichen Methode in den Dokumentenbaum einfügen, bevor Sie darauf mit `getElementById()` zugreifen können:

```js
const element = document.createElement("div");
element.id = "testqq";
const el = document.getElementById("testqq"); // el will be null!
```

In Nicht-HTML-Dokumenten muss die DOM-Implementierung Informationen darüber haben, welche Attribute vom Typ ID sind. Attribute mit dem Namen "id" sind nicht vom Typ ID, es sei denn, sie sind im DTD des Dokuments so definiert. Das `id`-Attribut ist in den gängigen Fällen von [XHTML](/de/docs/Glossary/XHTML), XUL und anderen als ID-Typ definiert. Implementierungen, die nicht wissen, ob Attribute vom Typ ID sind oder nicht, sollten `null` zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document`](/de/docs/Web/API/Document)-Referenz für andere Methoden und Eigenschaften, mit denen Sie Referenzen zu Elementen im Dokument erhalten können.
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) für Selektoren über Abfragen wie `'div.myclass'`
- [`Document.evaluate()`](/de/docs/Web/API/Document/evaluate) - hat eine Hilfsmethode zum Selektieren durch `xml:id` in [XML](/de/docs/Glossary/XML)-Dokumenten
