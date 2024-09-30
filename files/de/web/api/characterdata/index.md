---
title: CharacterData
slug: Web/API/CharacterData
l10n:
  sourceCommit: e811fc31b67e145c5882e8e3f128d1938c627a51
---

{{APIRef("DOM")}}

Die **`CharacterData`** abstrakte Schnittstelle repräsentiert ein [`Node`](/de/docs/Web/API/Node)-Objekt, das Zeichen enthält. Dies ist eine abstrakte Schnittstelle, was bedeutet, dass es keine Objekte vom Typ `CharacterData` gibt: sie wird von anderen Schnittstellen wie [`Text`](/de/docs/Web/API/Text), [`Comment`](/de/docs/Web/API/Comment), [`CDATASection`](/de/docs/Web/API/CDATASection) oder [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) implementiert, die nicht abstrakt sind.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihren Eltern, [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`CharacterData.data`](/de/docs/Web/API/CharacterData/data)
  - : Ein String, der die im Objekt enthaltenen Textdaten darstellt.
- [`CharacterData.length`](/de/docs/Web/API/CharacterData/length) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Größe des im Objekt enthaltenen Strings darstellt.
- [`CharacterData.nextElementSibling`](/de/docs/Web/API/CharacterData/nextElementSibling) {{ReadOnlyInline}}
  - : Gibt das erste [`Element`](/de/docs/Web/API/Element) zurück, das _nach_ diesem Knoten folgt und ein Geschwister ist.
- [`CharacterData.previousElementSibling`](/de/docs/Web/API/CharacterData/previousElementSibling) {{ReadOnlyInline}}
  - : Gibt das erste [`Element`](/de/docs/Web/API/Element) zurück, das _vor_ diesem Knoten kommt und ein Geschwister ist.

## Instanzmethoden

_Diese Schnittstelle erbt auch Methoden von ihren Eltern, [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`CharacterData.after()`](/de/docs/Web/API/CharacterData/after)
  - : Fügt eine Gruppe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Strings in die Kinderliste des Elternteils des `CharacterData` gerade nach dem `CharacterData`-Objekt ein.
- [`CharacterData.appendData()`](/de/docs/Web/API/CharacterData/appendData)
  - : Fügt den gegebenen String zum `CharacterData.data`-String hinzu; wenn diese Methode zurückkehrt, enthält `data` den zusammengefügten String.
- [`CharacterData.before()`](/de/docs/Web/API/CharacterData/before)
  - : Fügt eine Gruppe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Strings in die Kinderliste des Elternteils des `CharacterData` gerade vor dem `CharacterData`-Objekt ein.
- [`CharacterData.deleteData()`](/de/docs/Web/API/CharacterData/deleteData)
  - : Entfernt die angegebene Anzahl von Zeichen, beginnend bei dem angegebenen Offset, aus dem `CharacterData.data`-String; wenn diese Methode zurückkehrt, enthält `data` den verkürzten String.
- [`CharacterData.insertData()`](/de/docs/Web/API/CharacterData/insertData)
  - : Fügt die angegebenen Zeichen an der angegebenen Stelle in den `CharacterData.data`-String ein; wenn diese Methode zurückkehrt, enthält `data` den geänderten String.
- [`CharacterData.remove()`](/de/docs/Web/API/CharacterData/remove)
  - : Entfernt das Objekt aus seiner Elterngeschwisterliste.
- [`CharacterData.replaceData()`](/de/docs/Web/API/CharacterData/replaceData)
  - : Ersetzt die angegebene Anzahl von Zeichen, beginnend bei dem angegebenen Offset, durch den angegebenen String; wenn diese Methode zurückkehrt, enthält `data` den geänderten String.
- [`CharacterData.replaceWith()`](/de/docs/Web/API/CharacterData/replaceWith)
  - : Ersetzt die Zeichen in der Kinderliste seines Elternteils durch eine Gruppe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Strings.
- [`CharacterData.substringData()`](/de/docs/Web/API/CharacterData/substringData)
  - : Gibt einen String zurück, der den Teil von `CharacterData.data` der angegebenen Länge und beginnend bei dem angegebenen Offset enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die DOM-Übersichtsseite](/de/docs/Web/API/Document_Object_Model).
- Die konkret implementierten Schnittstellen: [`Text`](/de/docs/Web/API/Text), [`CDATASection`](/de/docs/Web/API/CDATASection), [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction), und [`Comment`](/de/docs/Web/API/Comment).
