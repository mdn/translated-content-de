---
title: "Document: releaseCapture()-Methode"
short-title: releaseCapture()
slug: Web/API/Document/releaseCapture
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("DOM")}}{{Non-standard_header}}

Die **`releaseCapture()`**-Methode beendet die Maus-Eingabeerfassung, wenn sie derzeit für ein Element in diesem Dokument aktiviert ist. Sobald die Maus-Eingabeerfassung beendet ist, werden Mausereignisse nicht mehr alle an das Element gerichtet, auf dem die Erfassung aktiviert ist.

Die Aktivierung der Maus-Eingabeerfassung auf einem Element erfolgt durch den Aufruf von [`element.setCapture()`](/de/docs/Web/API/Element/setCapture).

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

Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`element.setCapture()`](/de/docs/Web/API/Element/setCapture)
