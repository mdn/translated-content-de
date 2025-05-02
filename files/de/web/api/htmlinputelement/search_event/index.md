---
title: "HTMLInputElement: search event"
short-title: search
slug: Web/API/HTMLInputElement/search_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{non-standard_header}}

Das **`search`** Ereignis wird ausgelöst, wenn eine Suche mit einem {{HTMLElement("input")}} Element vom Typ `type="search"` initiiert wird.

Es gibt mehrere Möglichkeiten, wie eine Suche initiiert werden kann, z.B. durch Drücken der <kbd>Enter</kbd>-Taste, während das {{HTMLElement("input")}} fokussiert ist, oder, wenn das [`incremental`](/de/docs/Web/HTML/Reference/Elements/input#incremental) Attribut vorhanden ist, nach einem vom UA definierten Timeout, das seit der letzten Tastatureingabe abgelaufen ist (wobei neue Tastatureingaben das Timeout zurücksetzen, sodass das Auslösen des Ereignisses {{Glossary("debounce", "entprellt")}} wird).

Aktuelle UA-Implementierungen von `<input type="search">` haben eine zusätzliche Steuerung zum Löschen des Feldes. Bei der Verwendung dieser Steuerung wird ebenfalls das `search` Ereignis ausgelöst. In diesem Fall wird der `value` des {{HTMLElement("input")}} Elements der leere String sein.

Dieses Ereignis ist nicht abbrechbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

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
