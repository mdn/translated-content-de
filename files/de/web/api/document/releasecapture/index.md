---
title: "Document: releaseCapture() Methode"
short-title: releaseCapture()
slug: Web/API/Document/releaseCapture
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("DOM")}}{{Non-standard_header}}

Die **`releaseCapture()`** Methode gibt die Mauserfassung frei, wenn sie derzeit auf ein Element innerhalb dieses Dokuments aktiviert ist. Sobald die Mauserfassung freigegeben wird, werden Mausereignisse nicht mehr alle auf das Element ausgerichtet, bei dem die Erfassung aktiviert ist.

Die Aktivierung der Mauserfassung auf einem Element erfolgt durch einen Aufruf von [`element.setCapture()`](/de/docs/Web/API/Element/setCapture).

## Syntax

```js-nolint
releaseCapture()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Siehe das [Beispiel](/de/docs/Web/API/Element/setCapture#examples) für
[`element.setCapture()`](/de/docs/Web/API/Element/setCapture).

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`element.setCapture()`](/de/docs/Web/API/Element/setCapture)
