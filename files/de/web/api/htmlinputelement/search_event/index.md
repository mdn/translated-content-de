---
title: "HTMLInputElement: search event"
short-title: search
slug: Web/API/HTMLInputElement/search_event
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef}}{{non-standard_header}}

Das **`search`** Ereignis wird ausgelöst, wenn eine Suche über ein {{HTMLElement("input")}}-Element mit `type="search"` initiiert wird.

Es gibt mehrere Möglichkeiten, eine Suche zu starten, zum Beispiel durch Drücken der <kbd>Enter</kbd>-Taste, während das {{HTMLElement("input")}} fokussiert ist, oder, falls das [`incremental`](/de/docs/Web/HTML/Reference/Elements/input#incremental)-Attribut vorhanden ist, nach einem vom Benutzer-Agent definierten Timeout, das seit dem letzten Tastendruck abgelaufen ist (wobei neue Tastendrücke das Timeout zurücksetzen, sodass das Auslösen des Ereignisses {{Glossary("debounce", "debounced")}} wird).

Aktuelle Implementierungen von `<input type="search">` durch Benutzer-Agenten haben ein zusätzliches Steuerelement, um das Feld zu leeren. Auch die Verwendung dieses Steuerelements löst das `search` Ereignis aus. In diesem Fall wird der `value` des {{HTMLElement("input")}}-Elements der leere String sein.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("search", (event) => {});

onsearch = (event) => {};
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
