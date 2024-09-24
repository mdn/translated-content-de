---
title: Text
slug: Web/API/Text
l10n:
  sourceCommit: d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{ApiRef("DOM")}}

Das **`Text`**-Interface repräsentiert einen Text-{{domxref("Node", "Knoten")}} in einem DOM-Baum.

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

- `"\n    "` (nach dem `<head>` Start-Tag, ein Zeilenumbruch gefolgt von vier Leerzeichen)
- `"Aliens?"` (der Inhalt des `title`-Elements)
- `"\n  "` (nach dem `</head>` End-Tag, ein Zeilenumbruch gefolgt von zwei Leerzeichen)
- `"\n  "` (nach dem `<body>` Start-Tag, ein Zeilenumbruch gefolgt von zwei Leerzeichen)
- `"\n Why yes.\n \n\n"` (der Inhalt des `body`-Elements)

Jeder dieser Textknoten ist ein Objekt, das die in diesem Artikel dokumentierten Eigenschaften und Methoden besitzt.

## Konstruktor

- {{domxref("Text.Text", "Text()")}}
  - : Gibt einen neuen `Text`-Knoten mit dem Parameter als seinem Textinhalt zurück.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinen Eltern, {{domxref("CharacterData")}}, {{domxref("Node")}} und {{domxref("EventTarget")}}._

- {{domxref("Text.assignedSlot")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("HTMLSlotElement")}} zurück, das den {{htmlelement("slot")}} repräsentiert, in den der Knoten eingefügt ist.
- {{domxref("Text.wholeText")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den Text aller `Text`-Knoten enthält, die logisch neben diesem {{domxref("Node")}} sind und in Dokumentreihenfolge verkettet sind.

## Instanz-Methoden

_Erbt Methoden von seinen Eltern, {{domxref("CharacterData")}}, {{domxref("Node")}} und {{domxref("EventTarget")}}._

- {{domxref("Text.splitText")}}
  - : Teilt den Knoten an einem angegebenen Offset in zwei Knoten auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die DOM-API](/de/docs/Web/API/Document_Object_Model)
