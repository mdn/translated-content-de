---
title: InputEvent
slug: Web/API/InputEvent
l10n:
  sourceCommit: 8ca15ba7933a738cf632a9bbf5cfd4e90d1a97b1
---

{{APIRef("UI Events")}}

Die **`InputEvent`**-Schnittstelle repräsentiert ein Ereignis, das den Benutzer über Änderungen an bearbeitbaren Inhalten informiert.

{{InheritanceDiagram}}

## Konstruktor

- [`InputEvent()`](/de/docs/Web/API/InputEvent/InputEvent)
  - : Erstellt ein `InputEvent`-Objekt.

## Instanzeigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihren Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`InputEvent.data`](/de/docs/Web/API/InputEvent/data) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge mit den eingefügten Zeichen zurück. Dies kann eine leere Zeichenfolge sein, wenn die Änderung keinen Text einfügt (zum Beispiel beim Löschen von Zeichen).
- [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer) {{ReadOnlyInline}}
  - : Gibt ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt zurück, das Informationen über Richtext- oder Klartextdaten enthält, die zu bearbeitbaren Inhalten hinzugefügt oder daraus entfernt werden.
- [`InputEvent.inputType`](/de/docs/Web/API/InputEvent/inputType) {{ReadOnlyInline}}
  - : Gibt den Typ der Änderung für bearbeitbare Inhalte zurück, wie zum Beispiel Einfügen, Löschen oder Formatieren von Text.
- [`InputEvent.isComposing`](/de/docs/Web/API/InputEvent/isComposing) {{ReadOnlyInline}}
  - : Gibt einen {{JSxRef("Boolean")}}-Wert zurück, der anzeigt, ob das Ereignis nach [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event) und vor [`compositionend`](/de/docs/Web/API/Element/compositionend_event) ausgelöst wird.

## Instanzmethoden

_Diese Schnittstelle erbt Methoden von ihren Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`InputEvent.getTargetRanges()`](/de/docs/Web/API/InputEvent/getTargetRanges)
  - : Gibt ein Array von [`StaticRange`](/de/docs/Web/API/StaticRange)-Objekten zurück, die von einer Änderung am DOM betroffen sein werden, wenn das Eingabeereignis nicht abgebrochen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`beforeinput` Ereignis](/de/docs/Web/API/Element/beforeinput_event)
- [`input` Ereignis](/de/docs/Web/API/Element/input_event)
