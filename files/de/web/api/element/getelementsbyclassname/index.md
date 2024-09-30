---
title: "Element: getElementsByClassName()-Methode"
short-title: getElementsByClassName()
slug: Web/API/Element/getElementsByClassName
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die Methode **`getElementsByClassName()`** des [`Element`](/de/docs/Web/API/Element)
gibt eine dynamische [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die jedes Nachfahrelement enthält, das die angegebenen Klassennamen hat.

Die Methode [`getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auf der [`Document`](/de/docs/Web/API/Document)-Schnittstelle funktioniert im Wesentlichen genauso, außer dass sie auf das gesamte Dokument vom Dokumentenknoten aus wirkt.

## Syntax

```js-nolint
getElementsByClassName(names)
```

### Parameter

- `names`
  - : Ein String, der einen oder mehrere zu matchende Klassennamen enthält, durch Leerzeichen getrennt.

### Rückgabewert

Eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), die eine dynamische Liste aller Elemente bereitstellt, die Mitglied jeder Klasse in `names` sind.

## Verwendungshinweise

Wie immer ist die zurückgegebene Sammlung _dynamisch_, was bedeutet, dass sie stets den aktuellen Zustand des DOM-Baums widerspiegelt, der an dem Element verwurzelt ist, auf dem die Funktion aufgerufen wurde. Wenn neue Elemente hinzugefügt werden, die `names` entsprechen, erscheinen sie sofort in der Sammlung. Ebenso erscheint ein bereits vorhandenes Element, das nicht `names` entspricht und dessen Klassensatz so angepasst wird, dass es übereinstimmt, sofort in der Sammlung.

Das Gegenteil gilt ebenfalls; sobald Elemente nicht mehr den Satz von Namen entsprechen, werden sie sofort aus der Sammlung entfernt.

> [!NOTE]
> Im [Quirks-Modus](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) werden die Klassennamen ohne Beachtung der Groß- und Kleinschreibung verglichen. Andernfalls wird die Groß- und Kleinschreibung berücksichtigt.

## Beispiele

### Übereinstimmen einer einzelnen Klasse

Um nach Elementen zu suchen, deren Klassen eine bestimmte Klasse umfassen, geben wir einfach diesen Klassennamen beim Aufruf von `getElementsByClassName()` an:

```js
element.getElementsByClassName("test");
```

Dieses Beispiel findet alle Elemente, die die Klasse `test` haben und ein Nachfahre des Elements mit der `id` `main` sind:

```js
document.getElementById("main").getElementsByClassName("test");
```

### Übereinstimmen mehrerer Klassen

Um Elemente zu finden, deren Klassenlisten sowohl die Klassen `red` als auch `test` enthalten:

```js
element.getElementsByClassName("red test");
```

### Untersuchung der Ergebnisse

Sie können entweder die [`item()`](/de/docs/Web/API/HTMLCollection/item)-Methode auf der zurückgegebenen `HTMLCollection` oder die Standard-Array-Syntax verwenden, um einzelne Elemente in der Sammlung zu untersuchen. Allerdings wird der folgende Code nicht wie erwartet funktionieren, da sich `"matches"` ändern wird, sobald eine `"colorbox"`-Klasse entfernt wird.

```js
const matches = element.getElementsByClassName("colorbox");

for (let i = 0; i < matches.length; i++) {
  matches[i].classList.remove("colorbox");
  matches.item(i).classList.add("hueframe");
}
```

Stattdessen verwenden Sie eine andere Methode, wie zum Beispiel:

```js
const matches = element.getElementsByClassName("colorbox");

while (matches.length > 0) {
  matches.item(0).classList.add("hueframe");
  matches[0].classList.remove("colorbox");
}
```

Dieser Code findet Nachfahrelemente mit der `"colorbox"`-Klasse, fügt die Klasse `"hueframe"` hinzu, indem `item(0)` aufgerufen wird, und entfernt dann `"colorbox"` (unter Verwendung der Array-Notation). Ein weiteres Element (falls noch welches vorhanden ist) wird dann zu `item(0)`.

### Filterung der Ergebnisse mit Array-Methoden

Wir können auch {{jsxref("Array")}}-Methoden auf einer [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) verwenden, indem wir die [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) als `this`-Wert der Methode übergeben. Hier werden wir alle {{HTMLElement("div")}}-Elemente finden, die die Klasse `test` haben:

```js
const testElements = document.getElementsByClassName("test");
const testDivs = Array.prototype.filter.call(
  testElements,
  (testElement) => testElement.nodeName === "DIV",
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
