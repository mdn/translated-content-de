---
title: WheelEvent
slug: Web/API/WheelEvent
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("UI Events")}}

Die **`WheelEvent`**-Schnittstelle repräsentiert Ereignisse, die aufgrund der Bewegung eines Mausrads oder eines ähnlichen Eingabegeräts auftreten.

> [!NOTE]
> Dies ist die standardmäßige Wheel-Event-Schnittstelle, die verwendet werden sollte. Ältere Versionen von Browsern implementierten die nicht standardisierten und nicht browserübergreifend kompatiblen Schnittstellen `MouseWheelEvent` und [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent). Verwenden Sie diese Schnittstelle und vermeiden Sie die nicht standardisierten.

Verwechseln Sie das `wheel`-Ereignis nicht mit dem [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis:

- Ein `wheel`-Ereignis löst nicht unbedingt ein `scroll`-Ereignis aus. Zum Beispiel kann das Element überhaupt nicht scrollbar sein. Zoomaktionen mit dem Rad oder Trackpad lösen ebenfalls `wheel`-Ereignisse aus.
- Ein `scroll`-Ereignis wird nicht unbedingt durch ein `wheel`-Ereignis ausgelöst. Elemente können auch mit der Tastatur, durch Ziehen eines Scrollbalkens oder mit JavaScript gescrollt werden.
- Selbst wenn das `wheel`-Ereignis ein Scrollen auslöst, spiegeln die `delta*`-Werte im `wheel`-Ereignis nicht unbedingt die Scrollrichtung des Inhalts wider.

{{InheritanceDiagram}}

## Konstruktor

- [`WheelEvent()`](/de/docs/Web/API/WheelEvent/WheelEvent)
  - : Erstellt ein `WheelEvent`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihren Vorfahren, [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`WheelEvent.deltaX`](/de/docs/Web/API/WheelEvent/deltaX) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das den horizontalen Scrollbetrag darstellt.
- [`WheelEvent.deltaY`](/de/docs/Web/API/WheelEvent/deltaY) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das den vertikalen Scrollbetrag darstellt.
- [`WheelEvent.deltaZ`](/de/docs/Web/API/WheelEvent/deltaZ) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das den Scrollbetrag entlang der z-Achse darstellt.
- [`WheelEvent.deltaMode`](/de/docs/Web/API/WheelEvent/deltaMode) {{ReadOnlyInline}}
  - : Gibt ein `unsigned long` zurück, das die Einheit des Scrollbetrags der `delta*`-Werte darstellt.
- [`WheelEvent.wheelDelta`](/de/docs/Web/API/WheelEvent/wheelDelta) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt eine Ganzzahl (32-Bit) zurück, die die Entfernung in Pixeln darstellt.
- [`WheelEvent.wheelDeltaX`](/de/docs/Web/API/WheelEvent/wheelDeltaX) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt eine Ganzzahl zurück, die den horizontalen Scrollbetrag darstellt.
- [`WheelEvent.wheelDeltaY`](/de/docs/Web/API/WheelEvent/wheelDeltaY) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt eine Ganzzahl zurück, die den vertikalen Scrollbetrag darstellt.

> [!NOTE] > [Element: mousewheel event](/de/docs/Web/API/Element/mousewheel_event) enthält zusätzliche Dokumentation zu den veralteten Eigenschaften `wheelDelta`, `wheelDeltaX`, `wheelDeltaY`.

## Instanz-Methoden

_Diese Schnittstelle definiert keine speziellen Methoden, erbt jedoch Methoden von ihren Vorfahren, [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis
- Schnittstellen, die durch diese ersetzt wurden:
  - Geckos veraltetes Mausrad-Ereignisobjekt: [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent)
