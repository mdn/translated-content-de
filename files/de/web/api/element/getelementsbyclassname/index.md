---
title: "Element: getElementsByClassName()-Methode"
short-title: getElementsByClassName()
slug: Web/API/Element/getElementsByClassName
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die Methode {{domxref("Element")}}
**`getElementsByClassName()`** gibt eine Live
{{domxref("HTMLCollection")}} zurück, die alle untergeordneten Elemente enthält, die die
angegebene(n) Klassenname(n) besitzen.

Die Methode {{domxref("Document.getElementsByClassName", "getElementsByClassName()")}}
auf der {{domxref("Document")}}-Schnittstelle funktioniert im Wesentlichen auf die gleiche Weise, außer dass sie auf das gesamte Dokument angewendet wird, beginnend beim Dokumentenstamm.

## Syntax

```js-nolint
getElementsByClassName(names)
```

### Parameter

- `names`
  - : Ein String, der einen oder mehrere zu matchende Klassennamen enthält, getrennt
    durch Leerzeichen.

### Rückgabewert

Eine {{domxref("HTMLCollection")}}, die eine sich live aktualisierende Liste von jedem Element bereitstellt, das Mitglied jeder Klasse in `names` ist.

## Verwendungshinweise

Wie immer ist die zurückgegebene Sammlung _live_, was bedeutet, dass sie immer den
aktuellen Zustand des DOM-Baums widerspiegelt, der beim Element verwurzelt ist, an dem die Funktion aufgerufen wurde. Wenn neue Elemente hinzugefügt werden, die `names` entsprechen, erscheinen sie sofort in der Sammlung. Ebenso, wenn ein vorhandenes Element, das nicht `names` entspricht, seine Klassen so anpasst, dass es passt, erscheint es sofort in der Sammlung.

Das Gegenteil ist auch der Fall; wenn Elemente nicht mehr mit den Namen übereinstimmen, werden sie sofort aus der Sammlung entfernt.

> [!NOTE]
> Im [Quirks-Modus](/de/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) werden die Klassennamen in einer nicht-fallunterscheidenden Weise verglichen. Andernfalls sind sie fallunterscheidend.

## Beispiele

### Übereinstimmung einer einzelnen Klasse

Um nach Elementen zu suchen, die unter ihren Klassen eine einzelne spezifizierte Klasse
haben, geben Sie einfach diesen Klassennamen beim Aufruf von `getElementsByClassName()` an:

```js
element.getElementsByClassName("test");
```

Dieses Beispiel findet alle Elemente, die eine Klasse von `test` haben und auch
ein Nachfahre des Elements sind, das die `id` von `main` hat:

```js
document.getElementById("main").getElementsByClassName("test");
```

### Übereinstimmung mehrerer Klassen

Um Elemente zu finden, deren Klassenlisten sowohl die Klassen `red` als auch `test` beinhalten:

```js
element.getElementsByClassName("red test");
```

### Untersuchung der Ergebnisse

Sie können entweder die Methode {{domxref("HTMLCollection.item", "item()")}} auf der
zurückgegebenen `HTMLCollection` oder die Standard-Array-Syntax verwenden, um einzelne
Elemente in der Sammlung zu untersuchen. Allerdings wird der folgende Code nicht
wie erwartet funktionieren, da sich `"matches"` ändern wird, sobald
eine `"colorbox"`-Klasse entfernt wird.

```js
const matches = element.getElementsByClassName("colorbox");

for (let i = 0; i < matches.length; i++) {
  matches[i].classList.remove("colorbox");
  matches.item(i).classList.add("hueframe");
}
```

Stattdessen nutzen Sie eine andere Methode, wie:

```js
const matches = element.getElementsByClassName("colorbox");

while (matches.length > 0) {
  matches.item(0).classList.add("hueframe");
  matches[0].classList.remove("colorbox");
}
```

Dieser Code findet Nachfahrelemente mit der `"colorbox"`-Klasse, fügt die
Klasse `"hueframe"` hinzu, indem er `item(0)` aufruft, und entfernt dann
`"colorbox"` (unter Verwendung der Array-Syntax). Ein weiteres Element (wenn noch vorhanden) wird
dann `item(0)`.

### Filtern der Ergebnisse mit Array-Methoden

Wir können auch {{jsxref("Array")}}-Methoden auf jede {{domxref("HTMLCollection")}} verwenden, indem wir die {{domxref("HTMLCollection")}} als `this`-Wert der Methode übergeben. Hier finden wir alle {{HTMLElement("div")}}-Elemente, die eine Klasse von `test` haben:

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
