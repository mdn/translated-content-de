---
title: "Range: compareBoundaryPoints() Methode"
short-title: compareBoundaryPoints()
slug: Web/API/Range/compareBoundaryPoints
l10n:
  sourceCommit: 2c0de98b0607ef262d9ef0877259ba41aaf53e6d
---

{{ApiRef("DOM")}}

Die **`compareBoundaryPoints()`** Methode der [`Range`](/de/docs/Web/API/Range) Schnittstelle vergleicht die Grenzpunkte des [`Range`](/de/docs/Web/API/Range) mit denen eines anderen Bereichs.

## Syntax

```js-nolint
compareBoundaryPoints(how, otherRange)
```

### Parameter

- `how`
  - : Eine Konstante, die die Vergleichsmethode beschreibt:
    - `Range.END_TO_END` vergleicht den End-Grenzpunkt dieses `Range` mit dem End-Grenzpunkt von `otherRange`.
    - `Range.END_TO_START` vergleicht den Start-Grenzpunkt dieses `Range` mit dem End-Grenzpunkt von `otherRange`.
    - `Range.START_TO_END` vergleicht den End-Grenzpunkt dieses `Range` mit dem Start-Grenzpunkt von `otherRange`.
    - `Range.START_TO_START` vergleicht den Start-Grenzpunkt dieses `Range` mit dem Start-Grenzpunkt von `otherRange`.
- `otherRange`
  - : Ein [`Range`](/de/docs/Web/API/Range), mit dem die Grenzpunkte des Bereichs verglichen werden.

### Rückgabewert

Eine Zahl.

- `-1`, wenn der angegebene Grenzpunkt dieses `Range` vor dem angegebenen Grenzpunkt von `otherRange` liegt.
- `0`, wenn der angegebene Grenzpunkt dieses `Range` derselbe ist wie der angegebene Grenzpunkt von `otherRange`.
- `1`, wenn der angegebene Grenzpunkt dieses `Range` nach dem angegebenen Grenzpunkt von `otherRange` liegt.

Diese API ist konsistent mit der allgemeinen Konvention, dass bei Vergleichen von A mit B eine negative Zahl bedeutet, dass A vor B kommt und umgekehrt (siehe zum Beispiel {{jsxref("Array.prototype.sort()")}}). Die Bereiche werden in Richtung von `this` zu `other` verglichen, ähnlich wie {{jsxref("String.prototype.localeCompare()")}}. Jedoch werden die Grenzpunkte beim `how` Parameter in umgekehrter Reihenfolge angegeben: `END_TO_START` vergleicht den _Start_ von `this` mit dem _Ende_ von `other`.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Wert des `how` Parameters ungültig ist.

## Beispiele

Unten erstellen wir zwei Bereiche im selben Textknoten und vergleichen ihre verschiedenen Grenzpunkte.

```js
const text = new Text("0123456789");

const thisRange = new Range();
thisRange.setStart(text, 1);
thisRange.setEnd(text, 6);

const otherRange = new Range();
otherRange.setStart(text, 1);
otherRange.setEnd(text, 4);

// The ranges look like this:
// thisRange start   v---------v thisRange end
//                  0 1 2 3 4 5 6 7 8 9
// otherRange start  ^-----^ otherRange end

// this start is *same as* other start
thisRange.compareBoundaryPoints(Range.START_TO_START, otherRange); // 0

// this end is *after* other start
thisRange.compareBoundaryPoints(Range.START_TO_END, otherRange); // 1

// this start is *after* other end
thisRange.compareBoundaryPoints(Range.END_TO_START, otherRange); // -1

// this end is *after* other end
thisRange.compareBoundaryPoints(Range.END_TO_END, otherRange); // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellenverzeichnis](/de/docs/Web/API/Document_Object_Model)
