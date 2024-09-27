---
title: CharacterData
slug: Web/API/CharacterData
l10n:
  sourceCommit: e811fc31b67e145c5882e8e3f128d1938c627a51
---

{{APIRef("DOM")}}

Die **`CharacterData`** abstrakte Schnittstelle repräsentiert ein [`Node`](/de/docs/Web/API/Node)-Objekt, das Zeichen enthält. Dies ist eine abstrakte Schnittstelle, was bedeutet, dass es keine Objekte des Typs `CharacterData` gibt: Sie wird von anderen Schnittstellen wie [`Text`](/de/docs/Web/API/Text), [`Comment`](/de/docs/Web/API/Comment), [`CDATASection`](/de/docs/Web/API/CDATASection) oder [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) implementiert, die nicht abstrakt sind.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihren Eltern, [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`CharacterData.data`](/de/docs/Web/API/CharacterData/data)
  - : Ein String, der die in diesem Objekt enthaltenen Textdaten darstellt.
- [`CharacterData.length`](/de/docs/Web/API/CharacterData/length) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Größe des im Objekt enthaltenen Strings darstellt.
- [`CharacterData.nextElementSibling`](/de/docs/Web/API/CharacterData/nextElementSibling) {{ReadOnlyInline}}
  - : Gibt das erste [`Element`](/de/docs/Web/API/Element) zurück, das _diesem Knoten folgt_ und ein Geschwister ist.
- [`CharacterData.previousElementSibling`](/de/docs/Web/API/CharacterData/previousElementSibling) {{ReadOnlyInline}}
  - : Gibt das erste [`Element`](/de/docs/Web/API/Element) zurück, das _diesem Knoten vorausgeht_ und ein Geschwister ist.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von ihren Eltern, [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`CharacterData.after()`](/de/docs/Web/API/CharacterData/after)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Strings in die Kinderliste des übergeordneten Elements der `CharacterData` ein, direkt nach dem `CharacterData`-Objekt.
- [`CharacterData.appendData()`](/de/docs/Web/API/CharacterData/appendData)
  - : Hängt den angegebenen String an den `CharacterData.data`-String an; wenn diese Methode zurückkehrt, enthält `data` den zusammengefügten String.
- [`CharacterData.before()`](/de/docs/Web/API/CharacterData/before)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Strings in die Kinderliste des übergeordneten Elements der `CharacterData` ein, direkt vor dem `CharacterData`-Objekt.
- [`CharacterData.deleteData()`](/de/docs/Web/API/CharacterData/deleteData)
  - : Entfernt die festgelegte Anzahl von Zeichen, beginnend bei dem angegebenen Offset, aus dem `CharacterData.data`-String; wenn diese Methode zurückkehrt, enthält `data` den verkürzten String.
- [`CharacterData.insertData()`](/de/docs/Web/API/CharacterData/insertData)
  - : Fügt die angegebenen Zeichen an der angegebenen Position in den `CharacterData.data`-String ein; wenn diese Methode zurückkehrt, enthält `data` den modifizierten String.
- [`CharacterData.remove()`](/de/docs/Web/API/CharacterData/remove)
  - : Entfernt das Objekt aus der Kinderliste seines Elternteils.
- [`CharacterData.replaceData()`](/de/docs/Web/API/CharacterData/replaceData)
  - : Ersetzt die festgelegte Anzahl von Zeichen, beginnend bei dem angegebenen Offset, durch den angegebenen String; wenn diese Methode zurückkehrt, enthält `data` den modifizierten String.
- [`CharacterData.replaceWith()`](/de/docs/Web/API/CharacterData/replaceWith)
  - : Ersetzt die Zeichen in der Kinderliste des Elternteils durch eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Strings.
- [`CharacterData.substringData()`](/de/docs/Web/API/CharacterData/substringData)
  - : Gibt einen String zurück, der den Teil von `CharacterData.data` der angegebenen Länge enthält, beginnend beim angegebenen Offset.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die DOM-Übersichtsseite](/de/docs/Web/API/Document_Object_Model).
- Die konkreten Schnittstellen, die es implementiert: [`Text`](/de/docs/Web/API/Text), [`CDATASection`](/de/docs/Web/API/CDATASection), [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) und [`Comment`](/de/docs/Web/API/Comment).
