---
title: "History: forward() Methode"
short-title: forward()
slug: Web/API/History/forward
l10n:
  sourceCommit: fa980709ec5dd768d46b50b8c4833cc2f8346e21
---

{{APIRef("History API")}}

Die **`forward()`** Methode des [`History`](/de/docs/Web/API/History) Interfaces bewirkt, dass der Browser eine Seite im Sitzungsverlauf vorwärts geht. Sie hat denselben Effekt wie ein Aufruf von [`history.go(1)`](/de/docs/Web/API/History/go).

Diese Methode ist [asynchron](/de/docs/Glossary/asynchronous). Fügen Sie einen Listener für das [`popstate`](/de/docs/Web/API/Window/popstate_event) Ereignis hinzu, um festzustellen, wann die Navigation abgeschlossen ist.

## Syntax

```js-nolint
forward()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn das zugehörige Dokument nicht vollständig aktiv ist. Browser drosseln auch Navigationsaufrufe und können diesen Fehler auslösen, eine Warnung generieren oder den Aufruf ignorieren, wenn er zu häufig aufgerufen wird.

## Beispiele

Die folgenden Beispiele erzeugen einen Button, der einen Schritt im Sitzungsverlauf vorwärts geht.

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

- [`History`](/de/docs/Web/API/History)
- [`popstate`](/de/docs/Web/API/Window/popstate_event)
- [Arbeiten mit der History API](/de/docs/Web/API/History_API/Working_with_the_History_API)
