---
title: "History: forward()-Methode"
short-title: forward()
slug: Web/API/History/forward
l10n:
  sourceCommit: fa980709ec5dd768d46b50b8c4833cc2f8346e21
---

{{APIRef("History API")}}

Die **`forward()`**-Methode der {{domxref("History")}}-Schnittstelle veranlasst den Browser, eine Seite in der Sitzungsverlauf nach vorne zu gehen. Sie hat den gleichen Effekt wie der Aufruf von {{domxref("History.go", "history.go(1)")}}.

Diese Methode ist {{glossary("asynchronous")}}. Fügen Sie einen Listener für das {{domxref("Window/popstate_event", "popstate")}}-Ereignis hinzu, um festzustellen, wann die Navigation abgeschlossen ist.

## Syntax

```js-nolint
forward()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Ausgelöst, wenn das zugehörige Dokument nicht vollständig aktiv ist. Browser drosseln auch die Navigationen und können diesen Fehler auslösen, eine Warnung generieren oder den Aufruf ignorieren, wenn er zu häufig aufgerufen wird.

## Beispiele

Die folgenden Beispiele erstellen einen Button, der einen Schritt im Sitzungsverlauf nach vorne geht.

### HTML

```html
<button id="go-forward">Go Forward!</button>
```

### JavaScript

```js
document.getElementById("go-forward").addEventListener("click", (e) => {
  history.forward();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("History")}}
- {{domxref("Window/popstate_event", "popstate")}}
- [Arbeiten mit der History API](/de/docs/Web/API/History_API/Working_with_the_History_API)
