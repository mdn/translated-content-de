---
title: "Range: compareBoundaryPoints() Methode"
short-title: compareBoundaryPoints()
slug: Web/API/Range/compareBoundaryPoints
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.compareBoundaryPoints()`**-Methode vergleicht die Begrenzungspunkte des [`Range`](/de/docs/Web/API/Range) mit denen eines anderen Ranges.

## Syntax

```js-nolint
compareBoundaryPoints(how, sourceRange)
```

### Parameter

- `how`

  - : Eine Konstante, die die Vergleichsmethode beschreibt:

    - `Range.END_TO_END` vergleicht den Endbegrenzungspunkt von _sourceRange_ mit dem Endbegrenzungspunkt des `Range`.
    - `Range.END_TO_START` vergleicht den Endbegrenzungspunkt von _sourceRange_ mit dem Startbegrenzungspunkt des `Range`.
    - `Range.START_TO_END` vergleicht den Startbegrenzungspunkt von _sourceRange_ mit dem Endbegrenzungspunkt des `Range`.
    - `Range.START_TO_START` vergleicht den Startbegrenzungspunkt von _sourceRange_ mit dem Startbegrenzungspunkt des `Range`.

- `sourceRange`
  - : Ein [`Range`](/de/docs/Web/API/Range), dessen Begrenzungspunkte mit denen des Ranges verglichen werden sollen.

### Rückgabewert

Eine Zahl, `-1`, `0` oder `1`, die angibt, ob der entsprechende Begrenzungspunkt des [`Range`](/de/docs/Web/API/Range) jeweils vor, gleich oder nach dem entsprechenden Begrenzungspunkt von _sourceRange_ liegt.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Wert des `how`-Parameters ungültig ist.

## Beispiele

```js
const range = document.createRange();
range.selectNode(document.querySelector("div"));
const sourceRange = document.createRange();
sourceRange.selectNode(document.getElementsByTagName("div")[1]);
const compare = range.compareBoundaryPoints(Range.START_TO_END, sourceRange);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Der DOM-Schnittstellenindex](/de/docs/Web/API/Document_Object_Model)
