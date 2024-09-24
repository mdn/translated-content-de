---
title: InputEvent
slug: Web/API/InputEvent
l10n:
  sourceCommit: 8ca15ba7933a738cf632a9bbf5cfd4e90d1a97b1
---

{{APIRef("UI Events")}}

Die **`InputEvent`**-Schnittstelle repräsentiert ein Ereignis, das den Benutzer über Änderungen im bearbeitbaren Inhalt informiert.

{{InheritanceDiagram}}

## Konstruktor

- {{DOMxRef("InputEvent.InputEvent", "InputEvent()")}}
  - : Erstellt ein `InputEvent` Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihren Eltern, {{DOMxRef("UIEvent")}} und {{DOMxRef("Event")}}._

- {{DOMxRef("InputEvent.data")}} {{ReadOnlyInline}}
  - : Gibt einen String mit den eingefügten Zeichen zurück. Dies kann ein leerer String sein, wenn die Änderung keinen Text einfügt (zum Beispiel beim Löschen von Zeichen).
- {{DOMxRef("InputEvent.dataTransfer")}} {{ReadOnlyInline}}
  - : Gibt ein {{DOMxRef("DataTransfer")}} Objekt zurück, das Informationen über Richtext- oder Nur-Text-Daten enthält, die zu bearbeitbarem Inhalt hinzugefügt oder daraus entfernt werden.
- {{DOMxRef("InputEvent.inputType")}} {{ReadOnlyInline}}
  - : Gibt die Art der Änderung für bearbeitbaren Inhalt zurück, wie z. B. Einfügen, Löschen oder Formatieren von Text.
- {{DOMxRef("InputEvent.isComposing")}} {{ReadOnlyInline}}
  - : Gibt einen {{JSxRef("Boolean")}} Wert zurück, der anzeigt, ob das Ereignis nach {{domxref("Element/compositionstart_event", "compositionstart")}} und vor {{domxref("Element/compositionend_event", "compositionend")}} ausgelöst wird.

## Instanz-Methoden

_Diese Schnittstelle erbt Methoden von ihren Eltern, {{DOMxRef("UIEvent")}} und {{DOMxRef("Event")}}._

- {{DOMxRef('InputEvent.getTargetRanges()')}}
  - : Gibt ein Array von {{domxref("StaticRange")}} Objekten zurück, die von einer Änderung am DOM betroffen sein werden, wenn das Eingabeereignis nicht abgebrochen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`beforeinput` Ereignis](/de/docs/Web/API/Element/beforeinput_event)
- [`input` Ereignis](/de/docs/Web/API/Element/input_event)
