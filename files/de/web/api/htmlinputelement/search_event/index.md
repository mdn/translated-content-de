---
title: "HTMLInputElement: search-Ereignis"
short-title: search
slug: Web/API/HTMLInputElement/search_event
l10n:
  sourceCommit: 332bbd7d5079f418175e68a13db8c38f4636cee9
---

{{APIRef}}{{non-standard_header}}

Das **`search`**-Ereignis wird ausgelöst, wenn eine Suche mit einem {{HTMLElement("input")}}-Element vom Typ `type="search"` initiiert wird.

Es gibt mehrere Möglichkeiten, eine Suche zu initiieren, zum Beispiel durch Drücken der <kbd>Enter</kbd>-Taste, während das {{HTMLElement("input")}} fokussiert ist, oder, wenn das [`incremental`](/de/docs/Web/HTML/Element/input#incremental)-Attribut vorhanden ist, nachdem ein vom Benutzeragenten (UA) definierter Timeout abgelaufen ist, seit dem letzten Tastendruck (wobei neue Tastendrücke den Timeout zurücksetzen, sodass das Auslösen des Ereignisses [entprellt](/de/docs/Glossary/debounce) wird).

Aktuelle Benutzeragenten-Implementierungen von `<input type="search">` haben eine zusätzliche Steuerung, um das Feld zu leeren. Die Verwendung dieser Steuerung löst ebenfalls das `search`-Ereignis aus. In diesem Fall wird der `value` des {{HTMLElement("input")}}-Elements der leere String sein.

Dieses Ereignis ist nicht abbrechbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

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

Dieses Ereignis ist nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}
