---
title: Text
slug: Web/API/Text
l10n:
  sourceCommit: d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{ApiRef("DOM")}}

Die **`Text`**-Schnittstelle repräsentiert einen Textknoten ([`node`](/de/docs/Web/API/Node)) in einem DOM-Baum.

{{InheritanceDiagram}}

Um zu verstehen, was ein Textknoten ist, betrachten Sie das folgende Dokument:

```html
<html lang="en" class="e">
  <head>
    <title>Aliens?</title>
  </head>
  <body>
    Why yes.
  </body>
</html>
```

In diesem Dokument gibt es fünf Textknoten mit folgendem Inhalt:

- `"\n    "` (nach dem `<head>`-Start-Tag, ein Zeilenumbruch gefolgt von vier Leerzeichen)
- `"Aliens?"` (der Inhalt des `title`-Elements)
- `"\n  "` (nach dem `</head>`-End-Tag, ein Zeilenumbruch gefolgt von zwei Leerzeichen)
- `"\n  "` (nach dem `<body>`-Start-Tag, ein Zeilenumbruch gefolgt von zwei Leerzeichen)
- `"\n Why yes.\n \n\n"` (der Inhalt des `body`-Elements)

Jeder dieser Textknoten ist ein Objekt mit den in diesem Artikel dokumentierten Eigenschaften und Methoden.

## Konstruktor

- [`Text()`](/de/docs/Web/API/Text/Text)
  - : Gibt einen neuen `Text`-Knoten mit dem Parameter als Textinhalt zurück.

## Instanzeigenschaften

_Erbt Eigenschaften von seinen Eltern, [`CharacterData`](/de/docs/Web/API/CharacterData), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Text.assignedSlot`](/de/docs/Web/API/Text/assignedSlot) {{ReadOnlyInline}}
  - : Gibt ein [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) zurück, das das {{htmlelement("slot")}} repräsentiert, in das der Knoten eingefügt ist.
- [`Text.wholeText`](/de/docs/Web/API/Text/wholeText) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Text aller `Text`-Knoten enthält, die logisch an diesen [`Node`](/de/docs/Web/API/Node) angrenzen, in Dokumentenreihenfolge verkettet.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`CharacterData`](/de/docs/Web/API/CharacterData), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Text.splitText`](/de/docs/Web/API/Text/splitText)
  - : Teilt den Knoten an einem spezifizierten Versatz in zwei Knoten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die DOM-API](/de/docs/Web/API/Document_Object_Model)
