---
title: "HTMLInputElement: search Ereignis"
short-title: search
slug: Web/API/HTMLInputElement/search_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}{{non-standard_header}}

Das **`search`**-Ereignis wird ausgelöst, wenn eine Suche mit einem {{HTMLElement("input")}}-Element vom Typ `type="search"` initiiert wird.

Es gibt mehrere Möglichkeiten, eine Suche zu starten, zum Beispiel durch Drücken der <kbd>Enter</kbd>-Taste, während das {{HTMLElement("input")}}-Element fokussiert ist. Wenn das [`incremental`](/de/docs/Web/HTML/Reference/Elements/input#incremental)-Attribut vorhanden ist, wird das Ereignis nach einem vom UA definierten Timeout seit der letzten Tastenanschlages ausgelöst (wobei neue Tastenanschläge den Timeout zurücksetzen, sodass das Ereignis {{Glossary("debounce", "entprellt")}} wird).

Aktuelle UA-Implementierungen von `<input type="search">` haben eine zusätzliche Steuerung, um das Feld zu leeren. Die Verwendung dieses Steuerungselements löst ebenfalls das `search`-Ereignis aus. In diesem Fall ist der `value` des {{HTMLElement("input")}}-Elements der leere String.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("search", (event) => { })

onsearch = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
// addEventListener version
const input = document.querySelector('input[type="search"]');

input.addEventListener("search", () => {
  console.log(`The term searched for was ${input.value}`);
});
```

```js
// onsearch version
const input = document.querySelector('input[type="search"]');

input.onsearch = () => {
  console.log(`The term searched for was ${input.value}`);
};
```

## Spezifikationen

Dieses Ereignis ist Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}
