---
title: "Element: mousewheel-Event"
short-title: mousewheel
slug: Web/API/Element/mousewheel_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}}{{deprecated_header}}{{ Non-standard_header() }}

Das _veraltete_ und _nicht standardisierte_ **`mousewheel`**-Event wird asynchron an ein [`Element`](/de/docs/Web/API/Element) gesendet, um Updates bereitzustellen, während ein Mausrad oder ein ähnliches Gerät bedient wird. Das `mousewheel`-Event war nie Teil eines Standards und wurde, obwohl es von mehreren Browsern implementiert wurde, nie von Firefox unterstützt.

> [!NOTE]
> Verwenden Sie anstelle dieses veralteten Events das standardisierte [`wheel`](/de/docs/Web/API/Element/wheel_event)-Event.

## Syntax

Verwenden Sie den Eventnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js
addEventListener("mousewheel", (event) => {});

onmousewheel = (event) => {};
```

## Eventtyp

Ein [`WheelEvent`](/de/docs/Web/API/WheelEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WheelEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihren Vorfahren, [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`WheelEvent.deltaX`](/de/docs/Web/API/WheelEvent/deltaX) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, der die horizontale Scrollmenge darstellt.
- [`WheelEvent.deltaY`](/de/docs/Web/API/WheelEvent/deltaY) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, der die vertikale Scrollmenge darstellt.
- [`WheelEvent.deltaZ`](/de/docs/Web/API/WheelEvent/deltaZ) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, der die Scrollmenge für die z-Achse darstellt.
- [`WheelEvent.deltaMode`](/de/docs/Web/API/WheelEvent/deltaMode) {{ReadOnlyInline}}

  - : Gibt ein `unsigned long` zurück, das die Einheit der `delta*`-Werte für die Scrollmenge darstellt. Erlaubte Werte sind:

    | Konstante                    | Wert   | Beschreibung                                                                                                                                                    |
    | ---------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `WheelEvent.DOM_DELTA_PIXEL` | `0x00` | Die `delta*`-Werte werden in Pixeln angegeben.                                                                                                                   |
    | `WheelEvent.DOM_DELTA_LINE`  | `0x01` | Die `delta*`-Werte werden in Zeilen angegeben. Jeder Mausklick scrollt eine Inhaltzeile, wobei die Methode zur Berechnung der Zeilenhöhe browserabhängig ist.    |
    | `WheelEvent.DOM_DELTA_PAGE`  | `0x02` | Die `delta*`-Werte werden in Seiten angegeben. Jeder Mausklick scrollt eine Inhaltsseite.                                                                        |

- [`WheelEvent.wheelDelta`](/de/docs/Web/API/WheelEvent/wheelDelta) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen ganzzahligen (32-Bit) Wert zurück, der die Entfernung in Pixeln darstellt.
- [`WheelEvent.wheelDeltaX`](/de/docs/Web/API/WheelEvent/wheelDeltaX) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen ganzzahligen Wert zurück, der die horizontale Scrollmenge darstellt.
- [`WheelEvent.wheelDeltaY`](/de/docs/Web/API/WheelEvent/wheelDeltaY) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen ganzzahligen Wert zurück, der die vertikale Scrollmenge darstellt.

## Die detail-Eigenschaft

Der Wert der [`detail`](/de/docs/Web/API/UIEvent/detail)-Eigenschaft ist immer null, außer in Opera, das `detail` ähnlich wie das nur in Firefox verfügbare [`DOMMouseScroll`](/de/docs/Web/API/Element/DOMMouseScroll_event)-Event nutzt. Dieses zeigt die Scrollentfernung in Zeilen an, wobei negative Werte darauf hinweisen, dass die Scrollbewegung entweder nach unten oder nach rechts erfolgt, und positive Werte darauf hinweisen, dass nach oben oder links gescrollt wird.

> [!NOTE]
> Auf macOS wird die Scrollentfernung (und damit der Wert von `detail`) basierend auf der beschleunigten Scrollentfernung berechnet.

Auf Linux wird `2` oder `-2` pro nativem Wheel-Event festgelegt.

## wheelDelta-, wheelDeltaX- und wheelDeltaY-Wert

Der `wheelDelta`-Attributwert ist ein abstrakter Wert, der angibt, wie weit das Rad gedreht wurde. Wenn das Rad vom Benutzer weg gedreht wurde, ist es positiv, andernfalls negativ. Dies bedeutet, dass das Vorzeichen des Delta-Werts anders ist als das der `wheel`-Events des DOM Level 3. Jedoch ist die Bedeutung der Mengen dieser Werte nicht zwischen Browsern gleich. Siehe folgende Erläuterung für die Details.

IE und Opera (Presto) unterstützen nur das `wheelDelta`-Attribut und keinen horizontalen Bildlauf.

Der `wheelDeltaX`-Attributwert gibt den `wheelDelta`-Attributwert entlang der horizontalen Achse an. Wenn ein Benutzer das Gerät zum Scrollen nach rechts verwendet, ist der Wert negativ. Andernfalls, d.h., wenn es nach links ist, ist der Wert positiv.

Der `wheelDeltaY`-Attributwert gibt den `wheelDelta`-Attributwert entlang der vertikalen Achse an. Das Vorzeichen des Wertes ist dasselbe wie das des `wheelDelta`-Attributwerts.

### Chrome

Unter Windows ist der Wert derselbe wie der Delta-Wert von `WM_MOUSEWHEEL` oder `WM_MOUSEHWHEEL`. Und außerdem ändert sich der Wert nicht, auch wenn die Scrollmenge in den Systemeinstellungen als Seiten-Scroll eingestellt ist, d.h., der Wert ist derselbe wie bei IE unter Windows.

Unter Linux beträgt der Wert `120` oder `-120` pro nativem Wheel-Event. Dies führt zu demselben Verhalten wie bei IE und Chrome für Windows.

Auf Mac ist der Wert kompliziert. Der Wert ändert sich, wenn das **Gerät**, das das native Wheel-Event verursacht, kontinuierlichen Scroll unterstützt.

Wenn das Gerät kontinuierlichen Scroll unterstützt (z.B. Trackpad des MacBook oder Mausräder, die sich glatt drehen lassen), wird der Wert aus der beschleunigten Scrollmenge berechnet. In diesem Fall ist der Wert derselbe wie bei Safari.

Wenn das Gerät keinen kontinuierlichen Scroll unterstützt (typischerweise ältere Mausräder, die sich nicht glatt drehen lassen), wird der Wert aus der nicht beschleunigten Scrollmenge berechnet (120 pro Raste). In diesem Fall ist der Wert anders als bei Safari.

Dieser Unterschied stellt ein ernsthaftes Problem für Webanwendungsentwickler dar. Denn Webentwickler können nicht wissen, welches Gerät das `mousewheel`-Event verursacht hat.

### Safari

Der Wert wird immer aus der beschleunigten Scrollmenge berechnet. Dies ist wirklich anders als bei anderen Browsern, außer Chrome mit einem Gerät, das kontinuierlichen Scroll unterstützt.

### Opera (Presto)

Der Wert ist immer der `detail`-Attributwert ✕ `40`.

Unter Windows, da der `detail`-Attributwert aus der tatsächlichen Scrollmenge berechnet wird, ist der Wert anders als bei anderen Browsern, außer wenn die Scrollmenge pro Raste in den Systemeinstellungen 3 Zeilen oder eine Seite beträgt.

Unter Linux beträgt der Wert `80` oder `-80` pro nativem Wheel-Event. Dies ist anders als bei anderen Browsern.

Auf Mac wird der `detail`-Attributwert aus der beschleunigten Scrollmenge des nativen Events berechnet. Der Wert ist normalerweise viel größer als der Wert von Safari oder Chrome.

## Spezifikationen

Nicht Teil irgendeiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das standardisierte [`wheel`](/de/docs/Web/API/Element/wheel_event)-Event, das stattdessen verwendet werden soll.
