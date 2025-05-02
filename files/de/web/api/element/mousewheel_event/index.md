---
title: "Element: mousewheel Ereignis"
short-title: mousewheel
slug: Web/API/Element/mousewheel_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{deprecated_header}}{{ Non-standard_header() }}

Das _veraltete_ und _nicht standardisierte_ **`mousewheel`** Ereignis wird asynchron bei einem [`Element`](/de/docs/Web/API/Element) ausgelöst, um Updates zu liefern, während ein Mausrad oder ein ähnliches Gerät bedient wird. Das `mousewheel` Ereignis war nie Teil eines Standards, und obwohl es von mehreren Browsern implementiert wurde, wurde es nie von Firefox unterstützt.

> [!NOTE]
> Statt dieses veralteten Ereignisses sollten Sie das standardisierte [`wheel`](/de/docs/Web/API/Element/wheel_event) Ereignis verwenden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("mousewheel", (event) => { })

onmousewheel = (event) => { }
```

## Ereignistyp

Ein [`WheelEvent`](/de/docs/Web/API/WheelEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WheelEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihren Vorfahren, [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`WheelEvent.deltaX`](/de/docs/Web/API/WheelEvent/deltaX) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die horizontale Scrollmenge darstellt.
- [`WheelEvent.deltaY`](/de/docs/Web/API/WheelEvent/deltaY) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die vertikale Scrollmenge darstellt.
- [`WheelEvent.deltaZ`](/de/docs/Web/API/WheelEvent/deltaZ) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Scrollmenge für die Z-Achse darstellt.
- [`WheelEvent.deltaMode`](/de/docs/Web/API/WheelEvent/deltaMode) {{ReadOnlyInline}}

  - : Gibt ein `unsigned long` zurück, das die Einheit des Scrollbetrags der `delta*` Werte darstellt. Erlaubte Werte sind:

    | Konstante                    | Wert   | Beschreibung                                                                                                                                                 |
    | ---------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `WheelEvent.DOM_DELTA_PIXEL` | `0x00` | Die `delta*` Werte sind in Pixeln angegeben.                                                                                                                 |
    | `WheelEvent.DOM_DELTA_LINE`  | `0x01` | Die `delta*` Werte sind in Zeilen angegeben. Jeder Mausklick scrollt eine Zeile Inhalt, wobei die Methode zur Berechnung der Zeilenhöhe vom Browser abhängt. |
    | `WheelEvent.DOM_DELTA_PAGE`  | `0x02` | Die `delta*` Werte sind in Seiten angegeben. Jeder Mausklick scrollt eine Seite des Inhalts.                                                                 |

- [`WheelEvent.wheelDelta`](/de/docs/Web/API/WheelEvent/wheelDelta) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen Ganzzahlwert (32-Bit) zurück, der die Distanz in Pixeln darstellt.
- [`WheelEvent.wheelDeltaX`](/de/docs/Web/API/WheelEvent/wheelDeltaX) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen Ganzzahlwert zurück, der die horizontale Scrollmenge darstellt.
- [`WheelEvent.wheelDeltaY`](/de/docs/Web/API/WheelEvent/wheelDeltaY) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen Ganzzahlwert zurück, der die vertikale Scrollmenge darstellt.

## Die `detail` Eigenschaft

Der Wert der [`detail`](/de/docs/Web/API/UIEvent/detail) Eigenschaft ist immer null, außer in Opera, das `detail` ähnlich wie das Firefox-exklusive [`DOMMouseScroll`](/de/docs/Web/API/Element/DOMMouseScroll_event) Ereignis verwendet, dessen `detail` Wert die Scroll-Distanz in Zeilen angibt, wobei negative Werte zeigen, dass die Scroll-Bewegung entweder nach unten oder nach rechts geht, und positive Werte zeigen, dass sie nach oben oder nach links geht.

> [!NOTE]
> Auf macOS wird der Scroll-Abstand (und damit der Wert von `detail`) basierend auf dem beschleunigten Scroll-Abstand berechnet.

Auf Linux wird `2` oder `-2` pro nativem Wheel-Ereignis gesetzt.

## `wheelDelta`, `wheelDeltaX` und `wheelDeltaY` Wert

Der `wheelDelta` Attributwert ist ein abstrakter Wert, der anzeigt, wie weit das Rad gedreht wurde. Wenn das Rad vom Benutzer weg gedreht wurde, ist er positiv, andernfalls negativ. Das bedeutet, dass das Vorzeichen des `delta`-Wertes anders ist als bei `wheel` von DOM Level 3 Event. Jedoch ist die Bedeutung der Höhe dieser Werte zwischen Browsern nicht gleich. Siehe folgende Erklärung für die Details.

IE und Opera (Presto) unterstützen nur das `wheelDelta` Attribut und unterstützen keinen horizontalen Scroll.

Der `wheelDeltaX` Attributwert gibt den `wheelDelta` Attributwert entlang der horizontalen Achse an. Wenn ein Benutzer das Gerät zum Scrollen nach rechts bedient, ist der Wert negativ. Ansonsten, d.h. wenn es nach links ist, ist der Wert positiv.

Der `wheelDeltaY` Attributwert gibt den `wheelDelta` Attributwert entlang der vertikalen Achse an. Das Vorzeichen des Wertes ist dasselbe wie der `wheelDelta` Attributwert.

### Chrome

Auf Windows ist der Wert derselbe wie der `delta` Wert von `WM_MOUSEWHEEL` oder `WM_MOUSEHWHEEL`. Und auch, der Wert ändert sich nicht, selbst wenn die Scrollmenge in den Systemeinstellungen auf Seitenscrollen eingestellt ist, d.h. der Wert ist derselbe wie in IE auf Windows.

Auf Linux ist der Wert `120` oder `-120` pro nativem Wheel-Ereignis. Dies verhält sich genauso wie IE und Chrome für Windows.

Auf Mac ist der Wert kompliziert. Der Wert ändert sich, wenn das **Gerät**, das das native Wheel-Ereignis auslöst, kontinuierliches Scrollen unterstützt.

Wenn das Gerät kontinuierliches Scrollen unterstützt (z.B. Trackpad eines MacBook oder ein Mausrad, das sanft gedreht werden kann), wird der Wert aus der beschleunigten Scroll-Menge berechnet. In diesem Fall ist der Wert derselbe wie bei Safari.

Wenn das Gerät kein kontinuierliches Scrollen unterstützt (typischerweise ein altes Mausrad, das nicht sanft gedreht werden kann), wird der Wert aus einer nicht beschleunigten Scroll-Menge berechnet (120 pro Raste). In diesem Fall ist der Wert anders als bei Safari.

Dieser Unterschied stellt ein ernstes Problem für Webentwickler dar. Das heißt, Webentwickler können nicht wissen, ob das `mousewheel` Ereignis von welchem Gerät verursacht wurde.

### Safari

Der Wert wird immer aus der beschleunigten Scroll-Menge berechnet. Dies ist wirklich anders als bei anderen Browsern außer bei Chrome, wenn ein Gerät mit kontinuerlichem Scrollen unterstützt wird.

### Opera (Presto)

Der Wert ist immer der `detail` Attributwert ✕ `40`.

Auf Windows, da der `detail` Attributwert aus der tatsächlichen Scroll-Menge berechnet wird, ist der Wert anders als bei anderen Browsern außer, wenn die Scroll-Menge pro Raste 3 Zeilen in den Systemeinstellungen oder eine Seite beträgt.

Auf Linux ist der Wert `80` oder `-80` pro nativem Wheel-Ereignis. Dies ist anders als bei anderen Browsern.

Auf Mac wird der `detail` Attributwert aus der beschleunigten Scroll-Menge des nativen Ereignisses berechnet. Der Wert ist normalerweise viel größer als der von Safari oder Chrome.

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das standardisierte [`wheel`](/de/docs/Web/API/Element/wheel_event) Ereignis, dem vorzuziehen ist.
