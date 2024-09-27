---
title: "History: back() Methode"
short-title: back()
slug: Web/API/History/back
l10n:
  sourceCommit: fa980709ec5dd768d46b50b8c4833cc2f8346e21
---

{{APIRef("History API")}}

Die **`back()`**-Methode der [`History`](/de/docs/Web/API/History)-Schnittstelle veranlasst
den Browser, eine Seite in der Sitzungs-Historie zurückzugehen.

Sie hat die gleiche Wirkung wie ein Aufruf von [`history.go(-1)`](/de/docs/Web/API/History/go). Wenn es keine vorherige
Seite gibt, bewirkt dieser Methodenaufruf nichts.

Diese Methode ist [asynchron](/de/docs/Glossary/asynchronous). Fügen Sie einen Listener für das
[`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis hinzu, um zu bestimmen, wann die Navigation abgeschlossen ist.

## Syntax

```js-nolint
back()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das zugehörige Dokument nicht vollständig aktiv ist. Browser drosseln auch Navigationen und können diesen Fehler auslösen, eine Warnung generieren oder den Aufruf ignorieren, wenn er zu häufig erfolgt.

## Beispiele

Das folgende kurze Beispiel bewirkt, dass ein Button auf der Seite einen Eintrag in der
Sitzungs-Historie zurück navigiert.

### HTML

```html
<button id="go-back">Go back!</button>
```

### JavaScript

```js
document.getElementById("go-back").addEventListener("click", () => {
  history.back();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`History`](/de/docs/Web/API/History)
- [Arbeiten mit der History API](/de/docs/Web/API/History_API/Working_with_the_History_API)
