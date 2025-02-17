---
title: "HTMLAreaElement: pathname-Eigenschaft"
short-title: pathname
slug: Web/API/HTMLAreaElement/pathname
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAreaElement.pathname`**-Eigenschaft ist eine
Zeichenkette, die mit einem anfänglichen `'/'` beginnt, gefolgt vom Pfad der
URL ohne den Query-String oder Fragment (oder einer leeren Zeichenkette, falls kein
Pfad vorhanden ist).

Der Pfad wird {{Glossary("Percent-encoding", "prozentkodiert")}} beim Setzen, jedoch nicht prozentdekodiert beim Auslesen.

## Wert

Eine Zeichenkette.

## Beispiele

```js
// An <area id="myArea" href="/en-US/docs/HTMLAreaElement"> element is in the document
const area = document.getElementById("myArea");
area.pathname; // returns '/en-US/docs/HTMLAreaElement'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Schnittstelle, zu der sie gehört.
