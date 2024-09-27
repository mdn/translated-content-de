---
title: WheelEvent
slug: Web/API/WheelEvent
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("UI Events")}}

Die **`WheelEvent`**-Schnittstelle repräsentiert Ereignisse, die durch die Bewegung eines Mausrads oder eines ähnlichen Eingabegeräts ausgelöst werden.

> [!NOTE]
> Dies ist die standardmäßige Wheel-Event-Schnittstelle, die Sie verwenden sollten. Alte Browserversionen implementierten die nicht standardisierten und nicht browserübergreifend kompatiblen Schnittstellen `MouseWheelEvent` und [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent). Verwenden Sie diese Schnittstelle und vermeiden Sie die nicht standardisierten.

Verwechseln Sie das `wheel`-Ereignis nicht mit dem [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis:

- Ein `wheel`-Ereignis löst nicht unbedingt ein `scroll`-Ereignis aus. Zum Beispiel könnte das Element überhaupt nicht scrollbar sein. Auch Zoom-Aktionen mit dem Rad oder dem Trackpad lösen `wheel`-Ereignisse aus.
- Ein `scroll`-Ereignis wird nicht unbedingt durch ein `wheel`-Ereignis ausgelöst. Elemente können auch über die Tastatur, durch Ziehen eines Scrollbalkens oder durch die Verwendung von JavaScript gescrollt werden.
- Selbst wenn das `wheel`-Ereignis das Scrollen auslöst, spiegeln die `delta*`-Werte im `wheel`-Ereignis nicht unbedingt die Scroll-Richtung des Inhalts wider.

{{InheritanceDiagram}}

## Konstruktor

- [`WheelEvent()`](/de/docs/Web/API/WheelEvent/WheelEvent)
  - : Erstellt ein `WheelEvent`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihren Vorgängern, [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`WheelEvent.deltaX`](/de/docs/Web/API/WheelEvent/deltaX) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die horizontale Scrollmenge darstellt.
- [`WheelEvent.deltaY`](/de/docs/Web/API/WheelEvent/deltaY) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die vertikale Scrollmenge darstellt.
- [`WheelEvent.deltaZ`](/de/docs/Web/API/WheelEvent/deltaZ) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Scrollmenge für die z-Achse darstellt.
- [`WheelEvent.deltaMode`](/de/docs/Web/API/WheelEvent/deltaMode) {{ReadOnlyInline}}

  - : Gibt ein `unsigned long` zurück, das die Einheit der Scrollmenge der `delta*`-Werte repräsentiert. Zulässige Werte sind:

    | Konstante                    | Wert   | Beschreibung                                                                                                                                                 |
    | ---------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `WheelEvent.DOM_DELTA_PIXEL` | `0x00` | Die `delta*`-Werte sind in Pixeln angegeben.                                                                                                                 |
    | `WheelEvent.DOM_DELTA_LINE`  | `0x01` | Die `delta*`-Werte sind in Zeilen angegeben. Jeder Mausklick scrollt eine Zeile Inhalt, wobei die Methode zur Berechnung der Zeilenhöhe vom Browser abhängt. |
    | `WheelEvent.DOM_DELTA_PAGE`  | `0x02` | Die `delta*`-Werte sind in Seiten angegeben. Jeder Mausklick scrollt eine Seite des Inhalts.                                                                 |

- [`WheelEvent.wheelDelta`](/de/docs/Web/API/WheelEvent/wheelDelta) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt einen Integer (32-Bit) zurück, der die Entfernung in Pixeln darstellt.
- [`WheelEvent.wheelDeltaX`](/de/docs/Web/API/WheelEvent/wheelDeltaX) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt einen Integer zurück, der die horizontale Scrollmenge darstellt.
- [`WheelEvent.wheelDeltaY`](/de/docs/Web/API/WheelEvent/wheelDeltaY) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt einen Integer zurück, der die vertikale Scrollmenge darstellt.

> **Hinweis:** [Element: mousewheel event](/de/docs/Web/API/Element/mousewheel_event) enthält zusätzliche Dokumentation über die veralteten Eigenschaften `wheelDelta`, `wheelDeltaX`, `wheelDeltaY`.

## Instanz-Methoden

_Diese Schnittstelle definiert keine spezifischen Methoden, erbt jedoch Methoden von ihren Vorgängern, [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`wheel`](/de/docs/Web/API/Element/wheel_event) Ereignis
- Schnittstellen, die durch diese ersetzt wurden:

  - Geckos Legacy-Mausrad-Ereignisobjekt: [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent)
