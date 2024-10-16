---
title: "Element: getElementsByClassName() Methode"
short-title: getElementsByClassName()
slug: Web/API/Element/getElementsByClassName
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("DOM")}}

Die [`Element`](/de/docs/Web/API/Element)-Methode **`getElementsByClassName()`** gibt eine live
[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die jedes Nachfahrelement enthält, das den angegebenen Klassennamen oder die Klassennamen hat.

Die Methode [`getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName) auf der [`Document`](/de/docs/Web/API/Document)-Schnittstelle funktioniert im Wesentlichen auf die gleiche Weise, außer dass sie auf das gesamte Dokument wirkt, beginnend beim Dokument-Wurzelknoten.

## Syntax

```js-nolint
getElementsByClassName(names)
```

### Parameter

- `names`
  - : Ein String, der einen oder mehrere Klassennamen enthält, die durch Leerzeichen getrennt sind, um darauf abzugleichen.

### Rückgabewert

Eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), die eine sich live aktualisierende Liste von jedem Element bereitstellt, das Mitglied jeder Klasse in `names` ist.

## Nutzungshinweise

Wie immer ist die zurückgegebene Sammlung _live_, was bedeutet, dass sie immer den aktuellen Zustand des DOM-Baums widerspiegelt, der am Element verwurzelt ist, auf dem die Funktion aufgerufen wurde. Wenn neue Elemente, die mit `names` übereinstimmen, zum Unterbaum hinzugefügt werden, erscheinen sie sofort in der Sammlung. Ebenso, wenn ein vorhandenes Element, das nicht mit `names` übereinstimmt, seine Klassen so anpasst, dass es übereinstimmt, erscheint es sofort in der Sammlung.

Das Gegenteil ist auch wahr; sobald Elemente nicht mehr mit der Menge von Namen übereinstimmen, werden sie sofort aus der Sammlung entfernt.

> [!NOTE]
> Im [Quirks-Modus](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) werden die Klassennamen in einer nicht case-sensitiven Weise verglichen. Andernfalls sind sie case-sensitiv.

## Beispiele

### Übereinstimmung einer einzelnen Klasse

Um nach Elementen zu suchen, die unter ihren Klassen eine bestimmte Klasse einschließen, geben wir einfach diesen Klassennamen beim Aufruf von `getElementsByClassName()` an:

```js
element.getElementsByClassName("test");
```

Dieses Beispiel findet alle Elemente, die eine Klasse `test` haben und auch ein Nachfahre des Elements sind, das die `id` von `main` hat:

```js
document.getElementById("main").getElementsByClassName("test");
```

### Übereinstimmung mehrerer Klassen

Um Elemente zu finden, deren Klassenlisten sowohl die `red`- als auch die `test`-Klassen beinhalten:

```js
element.getElementsByClassName("red test");
```

### Untersuchung der Ergebnisse

Sie können entweder die [`item()`](/de/docs/Web/API/HTMLCollection/item)-Methode auf der zurückgegebenen `HTMLCollection` oder die Standard-Array-Syntax verwenden, um einzelne Elemente in der Sammlung zu untersuchen. Der folgende Code funktioniert jedoch nicht wie erwartet, da `"matches"` sich ändern wird, sobald eine `"color-box"`-Klasse entfernt wird.

```js
const matches = element.getElementsByClassName("color-box");

for (let i = 0; i < matches.length; i++) {
  matches[i].classList.remove("color-box");
  matches.item(i).classList.add("hue-frame");
}
```

Stattdessen verwenden Sie eine andere Methode, wie:

```js
const matches = element.getElementsByClassName("color-box");

while (matches.length > 0) {
  matches.item(0).classList.add("hue-frame");
  matches[0].classList.remove("color-box");
}
```

Dieser Code findet Nachfahrelemente mit der Klasse `"color-box"`, fügt die Klasse `"hue-frame"` hinzu, indem er `item(0)` aufruft, und entfernt dann `"color-box"` (unter Verwendung der Array-Notation). Ein weiteres Element (falls vorhanden) wird dann zu `item(0)`.

### Filtern der Ergebnisse mithilfe von Array-Methoden

Wir können auch {{jsxref("Array")}}-Methoden auf jede [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) anwenden, indem wir die [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) als `this`-Wert der Methode übergeben. Hier finden wir alle {{HTMLElement("div")}}-Elemente, die eine Klasse `test` haben:

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
