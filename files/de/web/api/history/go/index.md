---
title: "History: go() Methode"
short-title: go()
slug: Web/API/History/go
l10n:
  sourceCommit: fa980709ec5dd768d46b50b8c4833cc2f8346e21
---

{{APIRef("History API")}}

Die **`go()`** Methode der [`History`](/de/docs/Web/API/History) Schnittstelle lädt eine spezifische Seite aus der Sitzungshistorie. Sie können sie verwenden, um vorwärts und rückwärts durch die Historie zu navigieren, abhängig vom Wert eines Parameters.

Diese Methode ist [asynchron](/de/docs/Glossary/asynchronous). Fügen Sie einen Listener für das [`popstate`](/de/docs/Web/API/Window/popstate_event) Ereignis hinzu, um festzustellen, wann die Navigation abgeschlossen ist.

## Syntax

```js-nolint
go()
go(delta)
```

### Parameter

- `delta` {{optional_inline}}
  - : Die Position in der Historie, zu der Sie relativ zur aktuellen Seite navigieren möchten. Ein negativer Wert bewegt sich rückwärts, ein positiver Wert vorwärts. Zum Beispiel bewegt `history.go(2)` zwei Seiten vorwärts und `history.go(-2)` bewegt zwei Seiten zurück. Wenn kein Wert übergeben wird oder `delta` gleich 0 ist, hat dies das gleiche Ergebnis wie ein Aufruf von `location.reload()`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das zugehörige Dokument nicht vollständig aktiv ist. Browser drosseln auch Navigationen und können diesen Fehler auslösen, eine Warnung generieren oder den Aufruf ignorieren, wenn er zu häufig erfolgt.

## Beispiele

Um eine Seite zurückzugehen (entspricht dem Aufruf von [`back()`](/de/docs/Web/API/History/back)):

```js
history.go(-1);
```

Um eine Seite voranzugehen, ähnlich wie beim Aufruf von [`forward()`](/de/docs/Web/API/History/forward):

```js
history.go(1);
```

Um zwei Seiten voranzugehen:

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

- [`History`](/de/docs/Web/API/History)
- [`back()`](/de/docs/Web/API/History/back)
- [`forward()`](/de/docs/Web/API/History/forward)
- [`popstate`](/de/docs/Web/API/Window/popstate_event) Ereignis
- [Arbeiten mit der History API](/de/docs/Web/API/History_API/Working_with_the_History_API)
