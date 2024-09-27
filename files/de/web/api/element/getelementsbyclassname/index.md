---
title: "Element: getElementsByClassName() Methode"
short-title: getElementsByClassName()
slug: Web/API/Element/getElementsByClassName
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die Methode **`getElementsByClassName()`** des [`Element`](/de/docs/Web/API/Element) gibt eine live
[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die jedes Nachfahrenelement enthält, das den
angegebenen Klassennamen oder die Klassennamen besitzt.

Die Methode [`getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName)
auf der [`Document`](/de/docs/Web/API/Document) Schnittstelle funktioniert im Wesentlichen auf die gleiche Weise, außer dass sie auf das gesamte Dokument angewendet wird und beim Dokumentstamm beginnt.

## Syntax

```js-nolint
getElementsByClassName(names)
```

### Parameter

- `names`
  - : Ein String, der einen oder mehrere Klassennamen enthält, die durch Leerzeichen getrennt sind.

### Rückgabewert

Eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), die eine live-aktualisierte Liste von jedem Element bereitstellt, das Mitglied jeder Klasse in `names` ist.

## Hinweise zur Verwendung

Wie immer ist die zurückgegebene Sammlung _live_, was bedeutet, dass sie immer den aktuellen Zustand des DOM-Baums widergibt, der im Element verwurzelt ist, auf dem die Funktion aufgerufen wurde. Wenn dem Unterbaum neue Elemente hinzugefügt werden, die mit `names` übereinstimmen, erscheinen sie sofort in der Sammlung. Ebenso erscheint ein bestehendes Element, das nicht mit `names` übereinstimmt und dessen Satz von Klassen so angepasst wird, dass es übereinstimmt, sofort in der Sammlung.

Das Gegenteil ist auch der Fall; wenn Elemente nicht mehr mit der Menge von Namen übereinstimmen, werden sie sofort aus der Sammlung entfernt.

> [!NOTE]
> Im [Quirks-Modus](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) werden die Klassennamen in einer case-insensitiven Weise verglichen. Andernfalls sind sie case-sensitiv.

## Beispiele

### Übereinstimmung mit einer einzelnen Klasse

Um nach Elementen zu suchen, die unter ihren Klassen eine bestimmte Klasse haben, geben wir einfach diesen Klassennamen beim Aufrufen von `getElementsByClassName()` an:

```js
element.getElementsByClassName("test");
```

Dieses Beispiel findet alle Elemente, die eine Klasse von `test` haben und auch Nachfahren des Elements sind, das die `id` von `main` hat:

```js
document.getElementById("main").getElementsByClassName("test");
```

### Übereinstimmung mit mehreren Klassen

Um Elemente zu finden, deren Klassenlisten sowohl die Klassen `red` als auch `test` enthalten:

```js
element.getElementsByClassName("red test");
```

### Untersuchung der Ergebnisse

Sie können entweder die [`item()`](/de/docs/Web/API/HTMLCollection/item) Methode auf der zurückgegebenen `HTMLCollection` oder die Standard-Array-Syntax verwenden, um einzelne Elemente in der Sammlung zu untersuchen. Der folgende Code wird jedoch nicht wie erwartet funktionieren, da sich `"matches"` ändert, sobald eine `"colorbox"` Klasse entfernt wird.

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

Dieser Code findet Nachfahrelemente mit der Klasse `"colorbox"`, fügt die Klasse `"hueframe"` hinzu, indem `item(0)` aufgerufen wird, und entfernt dann `"colorbox"` (unter Verwendung der Array-Notation). Ein anderes Element (falls noch eines übrig ist) wird dann `item(0)`.

### Filtern der Ergebnisse mittels Array-Methoden

Wir können auch {{jsxref("Array")}} Methoden auf einer [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) verwenden, indem wir die [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) als den `this` Wert der Methode übergeben. Hier finden wir alle {{HTMLElement("div")}} Elemente, die eine Klasse von `test` haben:

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
