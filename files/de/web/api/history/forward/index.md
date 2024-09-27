---
title: "History: forward() Methode"
short-title: forward()
slug: Web/API/History/forward
l10n:
  sourceCommit: fa980709ec5dd768d46b50b8c4833cc2f8346e21
---

{{APIRef("History API")}}

Die **`forward()`**-Methode der [`History`](/de/docs/Web/API/History)-Schnittstelle bewirkt, dass der Browser um eine Seite in der Sitzungs-Historie vorwärts bewegt wird. Sie hat den gleichen Effekt wie der Aufruf von [`history.go(1)`](/de/docs/Web/API/History/go).

Diese Methode ist [asynchron](/de/docs/Glossary/asynchronous). Fügen Sie einen Listener für das [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis hinzu, um festzustellen, wann die Navigation abgeschlossen ist.

## Syntax

```js-nolint
forward()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Tritt auf, wenn das zugeordnete Dokument nicht vollständig aktiv ist. Browser drosseln auch Navigationsvorgänge und können diesen Fehler auslösen, eine Warnung generieren oder den Aufruf ignorieren, wenn er zu häufig ausgeführt wird.

## Beispiele

Die folgenden Beispiele erstellen einen Button, der einen Schritt in der Sitzungs-Historie vorwärts bewegt.

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
