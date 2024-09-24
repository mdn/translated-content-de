---
title: "HTMLInputElement: Suchereignis"
short-title: Suche
slug: Web/API/HTMLInputElement/search_event
l10n:
  sourceCommit: 332bbd7d5079f418175e68a13db8c38f4636cee9
---

{{APIRef}}{{non-standard_header}}

Das **`search`**-Ereignis wird ausgelöst, wenn eine Suche mit einem {{HTMLElement("input")}}-Element des Typs `type="search"` initiiert wird.

Es gibt mehrere Möglichkeiten, eine Suche zu starten, zum Beispiel durch Drücken der <kbd>Enter</kbd>-Taste, während das {{HTMLElement("input")}} fokussiert ist, oder, wenn das [`incremental`](/de/docs/Web/HTML/Element/input#incremental)-Attribut vorhanden ist, nachdem ein UA-definierter Timeout seit dem letzten Tastenschlag abgelaufen ist (wobei neue Tastenschläge den Timeout zurücksetzen, sodass das Auslösen des Ereignisses {{glossary("debounce", "entprellt")}} wird).

Aktuelle UA-Implementierungen von `<input type="search">` haben eine zusätzliche Steuerung zum Leeren des Feldes. Die Verwendung dieser Steuerung löst ebenfalls das `search`-Ereignis aus. In diesem Fall wird der `value` des {{HTMLElement("input")}}-Elements der leere String sein.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("search", (event) => {});

onsearch = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

```js
// addEventListener Version
const input = document.querySelector('input[type="search"]');

input.addEventListener("search", () => {
  console.log(`The term searched for was ${input.value}`);
});
```

```js
// onsearch Version
const input = document.querySelector('input[type="search"]');

input.onsearch = () => {
  console.log(`The term searched for was ${input.value}`);
};
```

## Spezifikationen

Dieses Ereignis ist Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}
