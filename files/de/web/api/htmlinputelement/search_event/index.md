---
title: "HTMLInputElement: search Event"
short-title: search
slug: Web/API/HTMLInputElement/search_event
l10n:
  sourceCommit: 332bbd7d5079f418175e68a13db8c38f4636cee9
---

{{APIRef}}{{non-standard_header}}

Das **`search`**-Ereignis wird ausgelöst, wenn eine Suche mit einem {{HTMLElement("input")}}-Element vom Typ `type="search"` gestartet wird.

Es gibt mehrere Möglichkeiten, eine Suche zu initiieren, beispielsweise durch Drücken der <kbd>Enter</kbd>-Taste, während das {{HTMLElement("input")}} fokussiert ist, oder, wenn das [`incremental`](/de/docs/Web/HTML/Element/input#incremental) Attribut vorhanden ist, nachdem eine von der UA definierte Zeit seit dem letzten Tastendruck abgelaufen ist (wobei neue Tastendrücke die Zeitspanne zurücksetzen, sodass das Auslösen des Ereignisses {{Glossary("debounce", "debounced")}} wird).

Aktuelle Implementierungen von `<input type="search">` haben eine zusätzliche Steuerung, um das Feld zu löschen. Die Verwendung dieser Steuerung löst ebenfalls das `search`-Ereignis aus. In diesem Fall wird der `value` des {{HTMLElement("input")}}-Elements die leere Zeichenkette sein.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

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
