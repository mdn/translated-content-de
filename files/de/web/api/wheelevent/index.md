---
title: WheelEvent
slug: Web/API/WheelEvent
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("UI Events")}}

Die **`WheelEvent`**-Schnittstelle repräsentiert Ereignisse, die auftreten, wenn der Benutzer ein Mausrad oder ein ähnliches Eingabegerät bewegt.

> [!NOTE]
> Dies ist die standardmäßige Wheel-Event-Schnittstelle zur Verwendung. Ältere Versionen von Browsern implementierten die nicht standardisierten und nicht browserübergreifend kompatiblen `MouseWheelEvent`- und {{DOMxRef("MouseScrollEvent")}}-Schnittstellen. Verwenden Sie diese Schnittstelle und vermeiden Sie die nicht standardisierten.

Verwechseln Sie das `wheel`-Ereignis nicht mit dem {{domxref("Element/scroll_event", "scroll")}}-Ereignis:

- Ein `wheel`-Ereignis löst nicht zwangsläufig ein `scroll`-Ereignis aus. Zum Beispiel kann das Element überhaupt nicht scrollbar sein. Zoomaktionen mit dem Rad oder dem Trackpad lösen ebenfalls `wheel`-Ereignisse aus.
- Ein `scroll`-Ereignis wird nicht unbedingt durch ein `wheel`-Ereignis ausgelöst. Elemente können auch durch Verwendung der Tastatur, das Ziehen eines Scrollbalkens oder die Nutzung von JavaScript gescrollt werden.
- Selbst wenn das `wheel`-Ereignis das Scrollen auslöst, spiegeln die `delta*`-Werte im `wheel`-Ereignis nicht unbedingt die Scrollrichtung des Inhalts wider.

{{InheritanceDiagram}}

## Konstruktor

- {{DOMxRef("WheelEvent.WheelEvent", "WheelEvent()")}}
  - : Erstellt ein `WheelEvent`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihren Vorfahren, {{DOMxRef("MouseEvent")}}, {{DOMxRef("UIEvent")}}, und {{DOMxRef("Event")}}._

- {{DOMxRef("WheelEvent.deltaX")}} {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die horizontale Scrollmenge darstellt.
- {{DOMxRef("WheelEvent.deltaY")}} {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die vertikale Scrollmenge darstellt.
- {{DOMxRef("WheelEvent.deltaZ")}} {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Scrollmenge für die z-Achse darstellt.
- {{DOMxRef("WheelEvent.deltaMode")}} {{ReadOnlyInline}}

  - : Gibt ein `unsigned long` zurück, das die Einheit der Scrollmenge der `delta*`-Werte darstellt. Erlaubte Werte sind:

    | Konstante                    | Wert   | Beschreibung                                                                                                                                                  |
    | ---------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `WheelEvent.DOM_DELTA_PIXEL` | `0x00` | Die `delta*`-Werte sind in Pixeln angegeben.                                                                                                                  |
    | `WheelEvent.DOM_DELTA_LINE`  | `0x01` | Die `delta*`-Werte sind in Zeilen angegeben. Jeder Mausklick scrollt eine Zeile des Inhalts, wobei die Methode zur Berechnung der Zeilenhöhe vom Browser abhängt. |
    | `WheelEvent.DOM_DELTA_PAGE`  | `0x02` | Die `delta*`-Werte sind in Seiten angegeben. Jeder Mausklick scrollt eine Seite des Inhalts.                                                                  |

- {{DOMxRef("WheelEvent.wheelDelta")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt eine Ganzzahl (32-Bit) zurück, die die Distanz in Pixeln darstellt.
- {{DOMxRef("WheelEvent.wheelDeltaX")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt eine Ganzzahl zurück, die die horizontale Scrollmenge darstellt.
- {{DOMxRef("WheelEvent.wheelDeltaY")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt eine Ganzzahl zurück, die die vertikale Scrollmenge darstellt.

> **Hinweis:** [Element: mousewheel event](/de/docs/Web/API/Element/mousewheel_event) hat zusätzliche Dokumentation über die veralteten Eigenschaften `wheelDelta`, `wheelDeltaX`, `wheelDeltaY`.

## Instanz-Methoden

_Diese Schnittstelle definiert keine spezifischen Methoden, erbt jedoch Methoden von ihren Vorfahren, {{DOMxRef("MouseEvent")}}, {{DOMxRef("UIEvent")}}, und {{DOMxRef("Event")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element/wheel_event", "wheel")}} Ereignis
- Schnittstellen, die durch diese ersetzt wurden:

  - Geckos veraltetes Mausrad-Ereignisobjekt: {{DOMxRef("MouseScrollEvent")}}
