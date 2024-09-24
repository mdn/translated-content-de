---
title: "History: go()-Methode"
short-title: go()
slug: Web/API/History/go
l10n:
  sourceCommit: fa980709ec5dd768d46b50b8c4833cc2f8346e21
---

{{APIRef("History API")}}

Die **`go()`**-Methode der {{domxref("History")}}-Schnittstelle lädt eine bestimmte Seite aus der Sitzungsverlauf. Sie können diese Methode verwenden, um je nach Wert eines Parameters vorwärts und rückwärts durch die Historie zu navigieren.

Diese Methode ist {{glossary("asynchronous")}}. Fügen Sie einen Listener für das {{domxref("Window/popstate_event", "popstate")}}-Ereignis hinzu, um festzustellen, wann die Navigation abgeschlossen ist.

## Syntax

```js-nolint
go()
go(delta)
```

### Parameter

- `delta` {{optional_inline}}
  - : Die Position im Verlauf, zu der Sie relativ zur aktuellen Seite wechseln möchten. Ein negativer Wert bewegt sich rückwärts, ein positiver Wert bewegt sich vorwärts. Zum Beispiel bewegt `history.go(2)` zwei Seiten vorwärts und `history.go(-2)` zwei Seiten zurück. Wenn kein Wert übergeben wird oder wenn `delta` gleich 0 ist, hat es das gleiche Ergebnis wie ein Aufruf von `location.reload()`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Ausgelöst, wenn das zugehörige Dokument nicht vollständig aktiv ist. Browser drosseln auch die Navigationen und können diesen Fehler auslösen, eine Warnung generieren oder den Aufruf ignorieren, wenn er zu häufig aufgerufen wird.

## Beispiele

Um eine Seite zurückzugehen (entspricht dem Aufruf von {{domxref("History.back", "back()")}}):

```js
history.go(-1);
```

Um eine Seite vorwärts zu gehen, wie beim Aufruf von {{domxref("History.forward", "forward()")}}:

```js
history.go(1);
```

Um zwei Seiten vorwärts zu gehen:

```js
history.go(2);
```

Um zwei Seiten zurückzugehen:

```js
history.go(-2);
```

Und schließlich wird jede der folgenden Anweisungen die aktuelle Seite neu laden:

```js
history.go();
history.go(0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("History")}}
- {{DOMxRef("History.back","back()")}}
- {{DOMxRef("History.forward","forward()")}}
- {{domxref("Window/popstate_event", "popstate")}}-Ereignis
- [Arbeiten mit der History API](/de/docs/Web/API/History_API/Working_with_the_History_API)
