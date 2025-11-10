---
title: "Element: getElementsByClassName() Methode"
short-title: getElementsByClassName()
slug: Web/API/Element/getElementsByClassName
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("DOM")}}

Die Methode **`getElementsByClassName()`** des [`Element`](/de/docs/Web/API/Element) gibt eine Live-Ansicht einer [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die jedes nachfolgende Element enthält, welches den angegebenen Klassennamen oder die angegebenen Klassennamen hat.

Die Methode [`getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auf der [`Document`](/de/docs/Web/API/Document)-Schnittstelle funktioniert im Wesentlichen genauso, außer dass sie auf das gesamte Dokument angewandt wird, beginnend beim Dokumentstamm.

## Syntax

```js-nolint
getElementsByClassName(names)
```

### Parameter

- `names`
  - : Ein String, der einen oder mehrere Klassennamen enthält, getrennt durch Leerzeichen.

### Rückgabewert

Eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), die eine live-aktualisierte Liste von jedem Element bereitstellt, das Mitglied jeder Klasse in `names` ist.

## Verwendungshinweise

Wie immer ist die zurückgegebene Sammlung _live_, was bedeutet, dass sie stets den aktuellen Zustand des DOM-Baums widerspiegelt, der am Element verwurzelt ist, auf dem die Funktion aufgerufen wurde. Werden neue Elemente, die `names` entsprechen, in den Unterbaum eingefügt, erscheinen sie sofort in der Sammlung. Ebenso erscheint ein vorhandenes Element, das nicht `names` entspricht, aber durch Anpassung seines Klassensatzes übereinstimmt, ebenfalls sofort in der Sammlung.

Das Gegenteil gilt auch; sobald Elemente nicht mehr dem Satz von `names` entsprechen, werden sie sofort aus der Sammlung entfernt.

> [!NOTE]
> Im [Quirks-Modus](/de/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode) werden die Klassennamen in einer nicht casesensitiven Weise verglichen. Ansonsten sind sie case-sensitiv.

## Beispiele

### Übereinstimmung mit einer einzelnen Klasse

Um nach Elementen zu suchen, die unter ihren Klassen eine einzelne spezifizierte Klasse enthalten, geben wir einfach diesen Klassennamen beim Aufruf von `getElementsByClassName()` an:

```js
element.getElementsByClassName("test");
```

Dieses Beispiel findet alle Elemente, die eine Klasse `test` haben, und die auch ein Nachfahre des Elements sind, das die `id` `main` hat:

```js
document.getElementById("main").getElementsByClassName("test");
```

### Übereinstimmung mit mehreren Klassen

Um Elemente zu finden, deren Klassenlisten sowohl die Klasse `red` als auch `test` enthalten:

```js
element.getElementsByClassName("red test");
```

### Überprüfung der Ergebnisse

Sie können entweder die [`item()`](/de/docs/Web/API/HTMLCollection/item) Methode auf der zurückgegebenen `HTMLCollection` oder die standardmäßige Array-Syntax verwenden, um einzelne Elemente in der Sammlung zu überprüfen. Der folgende Code funktioniert jedoch nicht wie erwartet, da sich `"matches"` ändert, sobald eine `"color-box"` Klasse entfernt wird.

```js
const matches = element.getElementsByClassName("color-box");

for (let i = 0; i < matches.length; i++) {
  matches[i].classList.remove("color-box");
  matches.item(i).classList.add("hue-frame");
}
```

Stattdessen verwenden Sie eine andere Methode, wie zum Beispiel:

```js
const matches = element.getElementsByClassName("color-box");

while (matches.length > 0) {
  matches.item(0).classList.add("hue-frame");
  matches[0].classList.remove("color-box");
}
```

Dieser Code findet nachfolgende Elemente mit der Klasse `"color-box"`, fügt die Klasse `"hue-frame"` hinzu, indem `item(0)` aufgerufen wird, und entfernt dann `"color-box"` (unter Verwendung der Array-Notation). Ein anderes Element (sofern noch eines übrig ist) wird dann `item(0)`.

### Filtern der Ergebnisse mit Array-Methoden

Wir können auch {{jsxref("Array")}}-Methoden für jede [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) verwenden, indem wir die [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) als `this`-Wert der Methode übergeben. Hier finden wir alle {{HTMLElement("div")}}-Elemente, die eine Klasse `test` haben:

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
