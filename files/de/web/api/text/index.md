---
title: Text
slug: Web/API/Text
l10n:
  sourceCommit: c51bc7f1c28be80290cc7fdebff82bce42001cf5
---

{{ApiRef("DOM")}}

Das **`Text`** Interface repräsentiert einen Text-[`node`](/de/docs/Web/API/Node) in einem DOM-Baum.

{{InheritanceDiagram}}

Um zu verstehen, was ein Text-Node ist, betrachten Sie das folgende Dokument:

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

In diesem Dokument gibt es fünf Text-Knoten mit den folgenden Inhalten (alle Leerzeichen werden als `◦` und alle Zeilenumbrüche als `⏎` angezeigt):

- `"⏎◦◦◦◦"` (nach dem `<head>` Start-Tag, ein Zeilenumbruch gefolgt von vier Leerzeichen)
- `"Aliens?"` (der Inhalt des `<title>`-Elements)
- `"⏎◦◦"` (nach dem `</title>` End-Tag, ein Zeilenumbruch gefolgt von zwei Leerzeichen)
- `"⏎◦◦"` (nach dem `</head>` End-Tag, ein Zeilenumbruch gefolgt von zwei Leerzeichen)
- `"⏎◦◦◦◦Why◦yes.⏎◦◦⏎"` (der Inhalt des `<body>`-Elements)

Jeder dieser Text-Knoten ist ein Objekt, das die in diesem Artikel dokumentierten Eigenschaften und Methoden hat.

## Konstruktor

- [`Text()`](/de/docs/Web/API/Text/Text)
  - : Gibt einen neuen `Text`-Knoten mit dem Parameter als dessen Textinhalt zurück.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinen Eltern, [`CharacterData`](/de/docs/Web/API/CharacterData), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Text.assignedSlot`](/de/docs/Web/API/Text/assignedSlot) {{ReadOnlyInline}}
  - : Gibt ein [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) zurück, das das {{htmlelement("slot")}} repräsentiert, in das der Knoten eingefügt ist.
- [`Text.wholeText`](/de/docs/Web/API/Text/wholeText) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Text aller logisch angrenzenden `Text`-Knoten zu diesem [`Node`](/de/docs/Web/API/Node) enthält, in Dokumentreihenfolge verkettet.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`CharacterData`](/de/docs/Web/API/CharacterData), [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Text.splitText`](/de/docs/Web/API/Text/splitText)
  - : Teilt den Knoten an einer angegebenen Stelle in zwei Knoten auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die DOM-API](/de/docs/Web/API/Document_Object_Model)
