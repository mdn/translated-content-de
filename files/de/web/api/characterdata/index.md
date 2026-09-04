---
title: CharacterData
slug: Web/API/CharacterData
l10n:
  sourceCommit: f542ed344953b3312fc92150bba11536667e288a
---

{{APIRef("DOM")}}

Das **`CharacterData`** abstrakte Interface repräsentiert ein [`Node`](/de/docs/Web/API/Node)-Objekt, das Zeichen enthält. Dies ist ein abstraktes Interface, was bedeutet, dass es keine Objekte vom Typ `CharacterData` gibt: Es wird von anderen Schnittstellen wie [`Text`](/de/docs/Web/API/Text), [`Comment`](/de/docs/Web/API/Comment), [`CDATASection`](/de/docs/Web/API/CDATASection) oder [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) implementiert, die nicht abstrakt sind.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinen Eltern, [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`CharacterData.data`](/de/docs/Web/API/CharacterData/data)
  - : Ein String, der die in diesem Objekt enthaltenen Textdaten darstellt.
- [`CharacterData.length`](/de/docs/Web/API/CharacterData/length) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Größe des im Objekt enthaltenen Strings darstellt.
- [`CharacterData.nextElementSibling`](/de/docs/Web/API/CharacterData/nextElementSibling) {{ReadOnlyInline}}
  - : Gibt das erste [`Element`](/de/docs/Web/API/Element) zurück, das auf diesen Knoten _folgt_ und ein Geschwister ist.
- [`CharacterData.previousElementSibling`](/de/docs/Web/API/CharacterData/previousElementSibling) {{ReadOnlyInline}}
  - : Gibt das erste [`Element`](/de/docs/Web/API/Element) zurück, das diesem Knoten _vorangestellt_ ist und ein Geschwister ist.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinen Eltern, [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`CharacterData.after()`](/de/docs/Web/API/CharacterData/after)
  - : Fügt eine Menge von [`Node`](/de/docs/Web/API/Node)-Objekten oder Strings in die Kinderliste des `CharacterData`-Elternteils ein, direkt nach dem `CharacterData`-Objekt.
- [`CharacterData.appendData()`](/de/docs/Web/API/CharacterData/appendData)
  - : Hängt den gegebenen String an den `CharacterData.data`-String an; wenn diese Methode zurückkehrt, enthält `data` den verknüpften String.
- [`CharacterData.before()`](/de/docs/Web/API/CharacterData/before)
  - : Fügt eine Menge von [`Node`](/de/docs/Web/API/Node)-Objekten oder Strings in die Kinderliste des `CharacterData`-Elternteils ein, direkt vor dem `CharacterData`-Objekt.
- [`CharacterData.deleteData()`](/de/docs/Web/API/CharacterData/deleteData)
  - : Entfernt die angegebene Anzahl von Zeichen, beginnend bei dem angegebenen Offset, aus dem `CharacterData.data`-String; wenn diese Methode zurückkehrt, enthält `data` den gekürzten String.
- [`CharacterData.insertData()`](/de/docs/Web/API/CharacterData/insertData)
  - : Fügt die angegebenen Zeichen an dem angegebenen Offset in den `CharacterData.data`-String ein; wenn diese Methode zurückkehrt, enthält `data` den geänderten String.
- [`CharacterData.remove()`](/de/docs/Web/API/CharacterData/remove)
  - : Entfernt das Objekt aus der Kinderliste seines Elternteils.
- [`CharacterData.replaceData()`](/de/docs/Web/API/CharacterData/replaceData)
  - : Ersetzt die angegebene Anzahl von Zeichen, beginnend bei dem angegebenen Offset, durch den angegebenen String; wenn diese Methode zurückkehrt, enthält `data` den geänderten String.
- [`CharacterData.replaceWith()`](/de/docs/Web/API/CharacterData/replaceWith)
  - : Ersetzt die Zeichen in der Kinderliste seines Elternteils durch eine Menge von [`Node`](/de/docs/Web/API/Node)-Objekten oder Strings.
- [`CharacterData.substringData()`](/de/docs/Web/API/CharacterData/substringData)
  - : Gibt einen String zurück, der den Teil von `CharacterData.data` mit der angegebenen Länge enthält, beginnend bei dem angegebenen Offset.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die DOM-Übersichtsseite](/de/docs/Web/API/Document_Object_Model).
- Die konkreten Interfaces, die es implementieren: [`Text`](/de/docs/Web/API/Text), [`CDATASection`](/de/docs/Web/API/CDATASection), [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction), und [`Comment`](/de/docs/Web/API/Comment).
