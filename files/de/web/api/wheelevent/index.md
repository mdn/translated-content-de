---
title: WheelEvent
slug: Web/API/WheelEvent
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("UI Events")}}

Die **`WheelEvent`**-Schnittstelle repräsentiert Ereignisse, die auftreten, wenn der Benutzer ein Mausrad oder ein ähnliches Eingabegerät bewegt.

> [!NOTE]
> Dies ist die standardisierte Wheel-Event-Schnittstelle, die verwendet werden sollte. Ältere Versionen von Browsern implementierten die nicht standardisierten und nicht browserübergreifend kompatiblen `MouseWheelEvent` und [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent)-Schnittstellen. Diese Schnittstelle verwenden und die nicht standardisierten vermeiden.

Verwechseln Sie das `wheel`-Ereignis nicht mit dem [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis:

- Ein `wheel`-Ereignis löst nicht unbedingt ein `scroll`-Ereignis aus. Zum Beispiel kann das Element überhaupt nicht scrollbar sein. Zoom-Aktionen mit dem Rad oder Trackpad lösen ebenfalls `wheel`-Ereignisse aus.
- Ein `scroll`-Ereignis wird nicht unbedingt durch ein `wheel`-Ereignis ausgelöst. Elemente können auch durch Verwendung der Tastatur, Ziehen eines Scrollbalkens oder durch JavaScript gescrollt werden.
- Selbst wenn das `wheel`-Ereignis Scrollen auslöst, spiegeln die `delta*`-Werte im `wheel`-Ereignis nicht unbedingt die Scrollrichtung des Inhalts wider.

{{InheritanceDiagram}}

## Konstruktor

- [`WheelEvent()`](/de/docs/Web/API/WheelEvent/WheelEvent)
  - : Erstellt ein `WheelEvent`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihren Vorfahren, [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`WheelEvent.deltaX`](/de/docs/Web/API/WheelEvent/deltaX) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die horizontale Scroll-Menge darstellt.
- [`WheelEvent.deltaY`](/de/docs/Web/API/WheelEvent/deltaY) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die vertikale Scroll-Menge darstellt.
- [`WheelEvent.deltaZ`](/de/docs/Web/API/WheelEvent/deltaZ) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Scroll-Menge für die z-Achse darstellt.
- [`WheelEvent.deltaMode`](/de/docs/Web/API/WheelEvent/deltaMode) {{ReadOnlyInline}}

  - : Gibt ein `unsigned long` zurück, der die Einheit der Scroll-Menge der `delta*`-Werte repräsentiert. Erlaubte Werte sind:

    | Konstante                    | Wert   | Beschreibung                                                                                                                                                      |
    | ---------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `WheelEvent.DOM_DELTA_PIXEL` | `0x00` | Die `delta*`-Werte sind in Pixeln angegeben.                                                                                                                      |
    | `WheelEvent.DOM_DELTA_LINE`  | `0x01` | Die `delta*`-Werte sind in Zeilen angegeben. Jeder Mausklick scrollt eine Zeile Inhalt, wobei die Methode zur Berechnung der Zeilenhöhe vom Browser abhängig ist. |
    | `WheelEvent.DOM_DELTA_PAGE`  | `0x02` | Die `delta*`-Werte sind in Seiten angegeben. Jeder Mausklick scrollt eine Seite Inhalt.                                                                           |

- [`WheelEvent.wheelDelta`](/de/docs/Web/API/WheelEvent/wheelDelta) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt einen Integer (32-Bit) zurück, der die Entfernung in Pixeln darstellt.
- [`WheelEvent.wheelDeltaX`](/de/docs/Web/API/WheelEvent/wheelDeltaX) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt einen Integer zurück, der die horizontale Scroll-Menge darstellt.
- [`WheelEvent.wheelDeltaY`](/de/docs/Web/API/WheelEvent/wheelDeltaY) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt einen Integer zurück, der die vertikale Scroll-Menge darstellt.

> **Hinweis:** [Element: mousewheel event](/de/docs/Web/API/Element/mousewheel_event) enthält zusätzliche Dokumentation zu den veralteten Eigenschaften `wheelDelta`, `wheelDeltaX`, `wheelDeltaY`.

## Instanz-Methoden

_Diese Schnittstelle definiert keine spezifischen Methoden, erbt jedoch Methoden von ihren Vorfahren, [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis
- Von diesem abgelöste Schnittstellen:

  - Geckos veraltetes Mausrad-Ereignisobjekt: [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent)
