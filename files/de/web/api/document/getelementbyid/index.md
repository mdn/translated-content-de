---
title: "Dokument: getElementById()-Methode"
short-title: getElementById()
slug: Web/API/Document/getElementById
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{ ApiRef("DOM") }}

Die **`getElementById()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt ein [`Element`](/de/docs/Web/API/Element)-Objekt zurück, das das Element darstellt, dessen [`id`](/de/docs/Web/API/Element/id)-Eigenschaft mit dem angegebenen String übereinstimmt. Da Element-IDs, falls angegeben, eindeutig sein müssen, sind sie eine nützliche Möglichkeit, schnell auf ein bestimmtes Element zuzugreifen.

Wenn Sie auf ein Element zugreifen müssen, das keine ID hat, können Sie [`querySelector()`](/de/docs/Web/API/Document/querySelector) verwenden, um das Element mit einem beliebigen {{Glossary("CSS_selector", "Selektor")}} zu finden.

> [!NOTE]
> IDs sollten innerhalb eines Dokuments eindeutig sein. Wenn zwei oder mehr Elemente in einem Dokument dieselbe ID haben, gibt diese Methode das erste gefundene Element zurück.

## Syntax

```js-nolint
getElementById(id)
```

> [!NOTE]
> Die Großschreibung von `"Id"` im Namen dieser Methode _muss_ korrekt sein, damit der Code funktioniert; `getElementByID()` ist _nicht_ gültig und wird nicht funktionieren, so natürlich es auch erscheinen mag.

### Parameter

- `id`
  - : Die ID des zu lokalisierenden Elements. Die ID ist ein groß-/klein-schrift-sensitiver String, der innerhalb des Dokuments einzigartig ist; nur ein Element sollte eine gegebene ID haben.

### Rückgabewert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt, das das DOM-Elementobjekt beschreibt, das der angegebenen ID entspricht, oder `null`, wenn kein übereinstimmendes Element im Dokument gefunden wurde.

## Beispiele

### HTML

```html
<p id="para">Some text here</p>
<button>blue</button>
<button>red</button>
```

### JavaScript

```js
function changeColor(newColor) {
  const elem = document.getElementById("para");
  elem.style.color = newColor;
}

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) => {
    changeColor(event.target.textContent.toLowerCase());
  });
});
```

### Ergebnis

{{ EmbedLiveSample('Examples', 250, 120) }}

## Verwendungshinweise

Im Gegensatz zu einigen anderen Methoden zur Elemente-Suche wie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) und [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) ist `getElementById()` nur als Methode des globalen `document`-Objekts verfügbar und _nicht_ als Methode für alle Elementobjekte im DOM verfügbar. Da ID-Werte im gesamten Dokument einzigartig sein müssen, gibt es keine Notwendigkeit für "lokale" Versionen der Funktion.

### Beispiel

```html
<div id="parent-id">
  <p>hello word1</p>
  <p id="test1">hello word2</p>
  <p>hello word3</p>
  <p>hello word4</p>
</div>
```

```js
const parentDOM = document.getElementById("parent-id");
const test1 = parentDOM.getElementById("test1");
```

Falls kein Element mit dem gegebenen `id` vorhanden ist, gibt diese Funktion `null` zurück. Beachten Sie, dass der `id`-Parameter groß-/klein-schrift-sensitiv ist. Daher wird `document.getElementById("Main")` `null` zurückgeben, anstatt das Element `<div id="main">`, da "M" und "m" für die Zwecke dieser Methode unterschiedlich sind.

Elemente, die nicht im Dokument sind, werden von `getElementById()` nicht gesucht. Wenn Sie ein Element erstellen und ihm eine ID zuweisen, müssen Sie das Element mit [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) oder einer ähnlichen Methode in den Dokumentbaum einfügen, bevor Sie mit `getElementById()` darauf zugreifen können:

```js
const element = document.createElement("div");
element.id = "test";
const el = document.getElementById("test"); // el will be null!
```

In Nicht-HTML-Dokumenten muss die DOM-Implementierung Information darüber haben, welche Attribute vom Typ ID sind. Attribute mit dem Namen "id" sind nicht vom Typ ID, es sei denn, dies ist in der DTD des Dokuments so definiert. Das `id`-Attribut ist in den häufigen Fällen von {{Glossary("XHTML", "XHTML")}}, XUL und anderen als ID-Typ definiert. Implementierungen, die nicht wissen, ob Attribute vom Typ ID sind oder nicht, sollten `null` zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document`](/de/docs/Web/API/Document)-Referenz für andere Methoden und Eigenschaften, die Sie verwenden können, um Referenzen auf Elemente im Dokument zu erhalten.
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) für Selektoren über Abfragen wie `'div.myclass'`
- [`Document.evaluate()`](/de/docs/Web/API/Document/evaluate) - enthält eine Hilfsmethode zur Auswahl durch `xml:id` in {{Glossary("XML", "XML")}}-Dokumenten
