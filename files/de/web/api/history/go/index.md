---
title: "History: go()-Methode"
short-title: go()
slug: Web/API/History/go
l10n:
  sourceCommit: fa980709ec5dd768d46b50b8c4833cc2f8346e21
---

{{APIRef("History API")}}

Die **`go()`**-Methode der [`History`](/de/docs/Web/API/History)-Schnittstelle lädt eine bestimmte Seite aus der Sitzungshistorie. Sie können sie verwenden, um je nach Wert eines Parameters vorwärts und rückwärts durch die Historie zu navigieren.

Diese Methode ist {{Glossary("asynchronous", "asynchron")}}. Fügen Sie einen Listener für das [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis hinzu, um festzustellen, wann die Navigation abgeschlossen ist.

## Syntax

```js-nolint
go()
go(delta)
```

### Parameter

- `delta` {{optional_inline}}
  - : Die Position in der Historie, zu der Sie relativ zur aktuellen Seite wechseln möchten. Ein negativer Wert bewegt sich rückwärts, ein positiver Wert bewegt sich vorwärts. Beispielsweise bewegt sich `history.go(2)` zwei Seiten vorwärts und `history.go(-2)` zwei Seiten zurück. Wenn kein Wert übergeben wird oder `delta` gleich 0 ist, hat es das gleiche Ergebnis wie ein Aufruf von `location.reload()`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das zugehörige Dokument nicht vollständig aktiv ist. Browser drosseln auch Navigationen und können diesen Fehler auslösen, eine Warnung generieren oder den Aufruf ignorieren, wenn er zu häufig aufgerufen wird.

## Beispiele

Um eine Seite zurück zu gehen (entspricht dem Aufruf von [`back()`](/de/docs/Web/API/History/back)):

```js
history.go(-1);
```

Um eine Seite vorwärts zu gehen, ähnlich wie beim Aufruf von [`forward()`](/de/docs/Web/API/History/forward):

```js
history.go(1);
```

Um zwei Seiten vorwärts zu gehen:

```js
history.go(2);
```

Um zwei Seiten rückwärts zu gehen:

```js
history.go(-2);
```

Und schließlich laden die folgenden Anweisungen die aktuelle Seite neu:

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
- [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis
- [Arbeiten mit der History-API](/de/docs/Web/API/History_API/Working_with_the_History_API)
