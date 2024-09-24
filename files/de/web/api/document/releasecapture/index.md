---
title: "Document: releaseCapture()-Methode"
short-title: releaseCapture()
slug: Web/API/Document/releaseCapture
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("DOM")}}{{Non-standard_header}}

Die **`releaseCapture()`**-Methode gibt die Maussteuerung frei, wenn sie derzeit auf ein Element innerhalb dieses Dokuments angewendet ist.
Sobald die Maussteuerung freigegeben wird, werden Mausereignisse nicht mehr ausschließlich an das Element gesendet, für das die Steuerung aktiviert war.

Die Aktivierung der Maussteuerung auf einem Element erfolgt durch den Aufruf von {{domxref("element.setCapture()")}}.

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
{{domxref("element.setCapture()")}}.

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("element.setCapture()")}}
