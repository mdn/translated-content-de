---
title: "Range: compareBoundaryPoints() Methode"
short-title: compareBoundaryPoints()
slug: Web/API/Range/compareBoundaryPoints
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

Die **`Range.compareBoundaryPoints()`** Methode vergleicht die Grenzpunkte des {{domxref("Range")}} mit denen eines anderen Ranges.

## Syntax

```js-nolint
compareBoundaryPoints(how, sourceRange)
```

### Parameter

- `how`

  - : Eine Konstante, die die Vergleichsmethode beschreibt:

    - `Range.END_TO_END` vergleicht den End-Grenzpunkt von
      _sourceRange_ mit dem End-Grenzpunkt des `Range`.
    - `Range.END_TO_START` vergleicht den End-Grenzpunkt von
      _sourceRange_ mit dem Start-Grenzpunkt des `Range`.
    - `Range.START_TO_END` vergleicht den Start-Grenzpunkt von
      _sourceRange_ mit dem End-Grenzpunkt des `Range`.
    - `Range.START_TO_START` vergleicht den Start-Grenzpunkt von
      _sourceRange_ mit dem Start-Grenzpunkt des `Range`.

- `sourceRange`
  - : Ein {{domxref("Range")}}, mit dem die Grenzpunkte verglichen werden.

### Rückgabewert

Eine Zahl, `-1`, `0` oder `1`, die angibt, ob der entsprechende Grenzpunkt des {{domxref("Range")}} jeweils vor, gleich oder nach dem entsprechenden Grenzpunkt von _sourceRange_ liegt.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Wert des `how` Parameters ungültig ist.

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

- [Das DOM-Schnittstellenverzeichnis](/de/docs/Web/API/Document_Object_Model)
