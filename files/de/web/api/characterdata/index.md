---
title: CharacterData
slug: Web/API/CharacterData
l10n:
  sourceCommit: e811fc31b67e145c5882e8e3f128d1938c627a51
---

{{APIRef("DOM")}}

Die **`CharacterData`** abstrakte Schnittstelle repräsentiert ein {{domxref("Node")}}-Objekt, das Zeichen enthält. Dies ist eine abstrakte Schnittstelle, was bedeutet, dass es keine Objekte vom Typ `CharacterData` gibt: Sie wird von anderen Schnittstellen wie {{domxref("Text")}}, {{domxref("Comment")}}, {{domxref("CDATASection")}} oder {{domxref("ProcessingInstruction")}} implementiert, die nicht abstrakt sind.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihren Eltern, {{domxref("Node")}} und {{domxref("EventTarget")}}._

- {{domxref("CharacterData.data")}}
  - : Ein String, der die in diesem Objekt enthaltenen Textdaten repräsentiert.
- {{domxref("CharacterData.length")}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Größe des im Objekt enthaltenen Strings repräsentiert.
- {{domxref("CharacterData.nextElementSibling")}} {{ReadOnlyInline}}
  - : Gibt das erste {{domxref("Element")}} zurück, das _nach_ diesem Knoten folgt und ein Geschwister ist.
- {{domxref("CharacterData.previousElementSibling")}} {{ReadOnlyInline}}
  - : Gibt das erste {{domxref("Element")}} zurück, das _vor_ diesem Knoten liegt und ein Geschwister ist.

## Instanzmethoden

_Diese Schnittstelle erbt auch Methoden von ihren Eltern, {{domxref("Node")}} und {{domxref("EventTarget")}}._

- {{domxref("CharacterData.after()")}}
  - : Fügt eine Menge von {{domxref("Node")}}-Objekten oder Strings in die Kindliste des `CharacterData`-Elternteils ein, direkt nach dem `CharacterData`-Objekt.
- {{domxref("CharacterData.appendData()")}}
  - : Hängt den gegebenen String an den `CharacterData.data`-String an; wenn diese Methode zurückkehrt, enthält `data` den verketteten String.
- {{domxref("CharacterData.before()")}}
  - : Fügt eine Menge von {{domxref("Node")}}-Objekten oder Strings in die Kindliste des `CharacterData`-Elternteils ein, direkt vor dem `CharacterData`-Objekt.
- {{domxref("CharacterData.deleteData()")}}
  - : Entfernt die angegebene Menge von Zeichen, beginnend beim angegebenen Offset, aus dem `CharacterData.data`-String; wenn diese Methode zurückkehrt, enthält `data` den verkürzten String.
- {{domxref("CharacterData.insertData()")}}
  - : Fügt die angegebenen Zeichen beim angegebenen Offset in den `CharacterData.data`-String ein; wenn diese Methode zurückkehrt, enthält `data` den modifizierten String.
- {{domxref("CharacterData.remove()")}}
  - : Entfernt das Objekt aus der Kinderliste seines Elternteils.
- {{domxref("CharacterData.replaceData()")}}
  - : Ersetzt die angegebene Menge von Zeichen, beginnend beim angegebenen Offset, durch den angegebenen String; wenn diese Methode zurückkehrt, enthält `data` den modifizierten String.
- {{DOMxRef("CharacterData.replaceWith()")}}
  - : Ersetzt die Zeichen in der Kinderliste seines Elternteils durch eine Menge von {{domxref("Node")}}-Objekten oder Strings.
- {{domxref("CharacterData.substringData()")}}
  - : Gibt einen String zurück, der den Teil von `CharacterData.data` der angegebenen Länge und beginnend beim angegebenen Offset enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die DOM-Übersichtsseite](/de/docs/Web/API/Document_Object_Model).
- Die implementierten konkreten Schnittstellen: {{domxref("Text")}}, {{domxref("CDATASection")}}, {{domxref("ProcessingInstruction")}}, und {{domxref("Comment")}}.
