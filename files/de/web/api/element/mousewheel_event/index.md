---
title: "Element: mousewheel Ereignis"
short-title: mousewheel
slug: Web/API/Element/mousewheel_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}}{{deprecated_header}}{{ Non-standard_header() }}

Das _veraltete_ und _nicht standardisierte_ **`mousewheel`** Ereignis wird asynchron an einem [`Element`](/de/docs/Web/API/Element) ausgelöst, um Aktualisierungen bereitzustellen, während ein Mausrad oder ähnliches Gerät benutzt wird. Das `mousewheel`-Ereignis war nie Teil eines Standards, und obwohl es von mehreren Browsern implementiert wurde, wurde es nie von Firefox unterstützt.

> [!NOTE]
> Anstelle dieses veralteten Ereignisses verwenden Sie das standardmäßige [`wheel`](/de/docs/Web/API/Element/wheel_event) Ereignis.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("mousewheel", (event) => {});

onmousewheel = (event) => {};
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
  - : Gibt ein `double` zurück, das die Scrollmenge für die z-Achse darstellt.
- [`WheelEvent.deltaMode`](/de/docs/Web/API/WheelEvent/deltaMode) {{ReadOnlyInline}}

  - : Gibt ein `unsigned long` zurück, das die Einheit der Scrollmenge der `delta*`-Werte darstellt. Zulässige Werte sind:

    | Konstante                    | Wert   | Beschreibung                                                                                                                                                 |
    | ---------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `WheelEvent.DOM_DELTA_PIXEL` | `0x00` | Die `delta*`-Werte sind in Pixel angegeben.                                                                                                                  |
    | `WheelEvent.DOM_DELTA_LINE`  | `0x01` | Die `delta*`-Werte sind in Zeilen angegeben. Jeder Mausklick scrollt eine Zeile Inhalt, wobei die Methode zur Berechnung der Zeilenhöhe browserabhängig ist. |
    | `WheelEvent.DOM_DELTA_PAGE`  | `0x02` | Die `delta*`-Werte sind in Seiten angegeben. Jeder Mausklick scrollt eine Seite Inhalt.                                                                      |

- [`WheelEvent.wheelDelta`](/de/docs/Web/API/WheelEvent/wheelDelta) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein ganzzahliges 32-Bit-Wert zurück, das die Distanz in Pixel darstellt.
- [`WheelEvent.wheelDeltaX`](/de/docs/Web/API/WheelEvent/wheelDeltaX) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein ganzzahliges 32-Bit-Wert zurück, das die horizontale Scrollmenge darstellt.
- [`WheelEvent.wheelDeltaY`](/de/docs/Web/API/WheelEvent/wheelDeltaY) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein ganzzahliges 32-Bit-Wert zurück, das die vertikale Scrollmenge darstellt.

## Die Detail-Eigenschaft

Der Wert der [`detail`](/de/docs/Web/API/UIEvent/detail)-Eigenschaft ist immer null, außer in Opera, das `detail` ähnlich wie das Firefox-exklusive [`DOMMouseScroll`](/de/docs/Web/API/Element/DOMMouseScroll_event) Ereignis verwendet, dessen `detail` Wert die Scroll-Distanz in Zeilen angibt, wobei negative Werte anzeigen, dass die Scroll-Bewegung entweder nach unten oder nach rechts verläuft, und positive Werte anzeigen, dass nach oben oder nach links gescrollt wird.

> [!NOTE]
> Unter macOS wird die Scroll-Distanz (und daher der Wert von `detail`) basierend auf der beschleunigten Scroll-Distanz berechnet.

Unter Linux wird `2` oder `-2` pro nativem Wheel-Ereignis gesetzt.

## wheelDelta, wheelDeltaX und wheelDeltaY Wert

Der `wheelDelta` Attributwert ist ein abstrakter Wert, der angibt, wie weit das Rad gedreht wurde. Wenn das Rad vom Benutzer weg gedreht wurde, ist er positiv, sonst negativ. Dies bedeutet, dass das Vorzeichen des Delta-Werts anders ist als bei DOM Level 3 Events `wheel`. Die Bedeutung der Betrag dieser Werte ist jedoch zwischen den Browsern nicht gleich. Siehe die folgende Erklärung für Details.

IE und Opera (Presto) unterstützen nur das `wheelDelta` Attribut und unterstützen _keine_ horizontale Scrollen.

Der `wheelDeltaX` Attributwert gibt den `wheelDelta` Attributwert entlang der horizontalen Achse an. Wenn ein Benutzer das Gerät zur rechten Seite scrollt, ist der Wert negativ. Andernfalls, d.h., wenn es nach links ist, ist der Wert positiv.

Der `wheelDeltaY` Attributwert gibt den `wheelDelta` Attributwert entlang der vertikalen Achse an. Das Vorzeichen des Wertes ist das gleiche wie der `wheelDelta` Attributwert.

### Chrome

Unter Windows ist der Wert derselbe wie der Delta-Wert von `WM_MOUSEWHEEL` oder `WM_MOUSEHWHEEL`. Und auch wird der Wert nicht geändert, selbst wenn die Scrollmenge der Systemeinstellungen eine Seitenscrollen ist, d.h., der Wert ist der gleiche wie in IE unter Windows.

Unter Linux ist der Wert `120` oder `-120` pro nativem Wheel-Ereignis. Dies führt zu demselben Verhalten wie IE und Chrome unter Windows.

Auf dem Mac ist der Wert kompliziert. Der Wert wird geändert, wenn das **Gerät**, das das native Wheel-Ereignis verursacht, kontinuierliches Scrollen unterstützt.

Wenn das Gerät kontinuierliches Scrollen unterstützt (z.B. Trackpad eines MacBook oder ein Mausrad, das sich sanft drehen lässt), wird der Wert aus der beschleunigten Scroll-Menge berechnet. In diesem Fall ist der Wert derselbe wie in Safari.

Wenn das Gerät **kein** kontinuierliches Scrollen unterstützt (typischerweise ein altes Mausrad, das sich nicht sanft drehen lässt), wird der Wert aus der nicht beschleunigten Scroll-Menge berechnet (120 pro Raste). In diesem Fall ist der Wert anders als in Safari.

Dieser Unterschied stellt ein ernstes Problem für Webanwendungsentwickler dar. Das bedeutet, dass Webentwickler nicht wissen können, ob das `mousewheel` Ereignis durch welches Gerät verursacht wurde.

### Safari

Der Wert wird immer aus der beschleunigten Scroll-Menge berechnet. Das ist wirklich anders als bei anderen Browsern außer Chrome mit unterstütztem kontinuierlichem Scroll-Gerät.

### Opera (Presto)

Der Wert ist immer der `detail` Attributwert ✕ `40`.

Unter Windows, da der `detail` Attributwert aus der tatsächlichen Scrollmenge berechnet wird, ist der Wert anders als bei anderen Browsern, es sei denn, die Scrollmenge pro Raste ist 3 Zeilen in Systemeinstellungen oder eine Seite.

Unter Linux ist der Wert `80` oder `-80` pro nativem Wheel-Ereignis. Dies ist anders als bei anderen Browsern.

Auf dem Mac wird der `detail` Attributwert aus der beschleunigten Scroll-Menge des nativen Ereignisses berechnet. Der Wert ist normalerweise viel größer als der von Safari oder Chrome.

## Spezifikationen

Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das standardmäßige [`wheel`](/de/docs/Web/API/Element/wheel_event) Ereignis, auf das Sie stattdessen hören können.
