---
title: WheelEvent
slug: Web/API/WheelEvent
l10n:
  sourceCommit: 18b603d31ce0b840b1e9347c77e09ef376addbb4
---

{{APIRef("UI Events")}}

Das **`WheelEvent`** Interface repräsentiert Ereignisse, die auftreten, wenn der Benutzer ein Mausrad oder ein ähnliches Eingabegerät bewegt.

> [!NOTE]
> Dies ist das standardmäßige Radereignis-Interface, das verwendet werden sollte. Alte Versionen von Browsern implementierten die nicht standardmäßigen und nicht browserübergreifenden kompatiblen `MouseWheelEvent` und [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent) Interfaces. Verwenden Sie dieses Interface und vermeiden Sie die nicht standardmäßigen.

Verwechseln Sie das `wheel` Ereignis nicht mit dem [`scroll`](/de/docs/Web/API/Element/scroll_event) Ereignis:

- Ein `wheel` Ereignis löst nicht unbedingt ein `scroll` Ereignis aus. Zum Beispiel kann das Element überhaupt nicht scrollbar sein. Auch Zoom-Aktionen mit dem Rad oder Trackpad lösen `wheel` Ereignisse aus.
- Ein `scroll` Ereignis wird nicht notwendigerweise durch ein `wheel` Ereignis ausgelöst. Elemente können auch durch Benutzung der Tastatur, das Ziehen eines Scrollbalkens oder durch JavaScript gescrollt werden.
- Selbst wenn das `wheel` Ereignis ein Scrollen auslöst, spiegeln die `delta*` Werte im `wheel` Ereignis nicht unbedingt die Scrollrichtung des Inhalts wider.

{{InheritanceDiagram}}

## Konstruktor

- [`WheelEvent()`](/de/docs/Web/API/WheelEvent/WheelEvent)
  - : Erstellt ein `WheelEvent` Objekt.

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften von seinen Vorfahren, [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`WheelEvent.deltaX`](/de/docs/Web/API/WheelEvent/deltaX) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die horizontale Scrollmenge repräsentiert.
- [`WheelEvent.deltaY`](/de/docs/Web/API/WheelEvent/deltaY) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die vertikale Scrollmenge repräsentiert.
- [`WheelEvent.deltaZ`](/de/docs/Web/API/WheelEvent/deltaZ) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Scrollmenge für die z-Achse repräsentiert.
- [`WheelEvent.deltaMode`](/de/docs/Web/API/WheelEvent/deltaMode) {{ReadOnlyInline}}
  - : Gibt ein `unsigned long` zurück, das die Einheit der `delta*` Werte der Scrollmenge repräsentiert.
- [`WheelEvent.wheelDelta`](/de/docs/Web/API/WheelEvent/wheelDelta) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt einen Integer (32-Bit) zurück, der die Entfernung in Pixeln repräsentiert.
- [`WheelEvent.wheelDeltaX`](/de/docs/Web/API/WheelEvent/wheelDeltaX) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt einen Integer zurück, der die horizontale Scrollmenge repräsentiert.
- [`WheelEvent.wheelDeltaY`](/de/docs/Web/API/WheelEvent/wheelDeltaY) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt einen Integer zurück, der die vertikale Scrollmenge repräsentiert.

> **Hinweis:** [Element: mousewheel event](/de/docs/Web/API/Element/mousewheel_event) enthält zusätzliche Dokumentation zu den veralteten Eigenschaften `wheelDelta`, `wheelDeltaX`, `wheelDeltaY`.

## Instanz-Methoden

_Dieses Interface definiert keine spezifischen Methoden, erbt jedoch Methoden von seinen Vorfahren, [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`wheel`](/de/docs/Web/API/Element/wheel_event) Ereignis
- Durch dieses Interface ersetzte Schnittstellen:

  - Geckos veraltetes Mausradereignis-Objekt: [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent)
