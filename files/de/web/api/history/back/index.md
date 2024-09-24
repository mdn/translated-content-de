---
title: "History: back()-Methode"
short-title: back()
slug: Web/API/History/back
l10n:
  sourceCommit: fa980709ec5dd768d46b50b8c4833cc2f8346e21
---

{{APIRef("History API")}}

Die **`back()`**-Methode des {{domxref("History")}}-Interfaces bewirkt, dass der Browser eine Seite zurück in der Sitzungsverlaufshistorie geht.

Sie hat denselben Effekt wie der Aufruf von {{domxref("History.go", "history.go(-1)")}}. Wenn es keine vorherige Seite gibt, hat dieser Methodenaufruf keine Wirkung.

Diese Methode ist {{glossary("asynchronous")}}. Fügen Sie einen Listener für das {{domxref("Window/popstate_event", "popstate")}}-Ereignis hinzu, um zu bestimmen, wann die Navigation abgeschlossen ist.

## Syntax

```js-nolint
back()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das zugehörige Dokument nicht vollständig aktiv ist. Browser drosseln auch die Navigation und können diesen Fehler auslösen, eine Warnung generieren oder den Aufruf ignorieren, wenn er zu häufig aufgerufen wird.

## Beispiele

Das folgende kurze Beispiel bewirkt, dass ein Button auf der Seite einen Eintrag im Sitzungsverlauf zurückgeht.

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

- {{domxref("History")}}
- [Arbeiten mit der History API](/de/docs/Web/API/History_API/Working_with_the_History_API)
