---
title: "Element: mousewheel event"
short-title: mousewheel
slug: Web/API/Element/mousewheel_event
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}{{deprecated_header}}{{ Non-standard_header() }}

Das _veraltete_ und _nicht-standardmäßige_ **`mousewheel`**-Ereignis wird asynchron an ein [`Element`](/de/docs/Web/API/Element) ausgelöst, um Aktualisierungen bereitzustellen, während ein Mausrad oder ein ähnliches Gerät betrieben wird. Das `mousewheel`-Ereignis war nie Teil eines Standards und wurde zwar von mehreren Browsern implementiert, aber nie von Firefox.

> [!NOTE]
> Anstelle dieses veralteten Ereignisses sollte das standardmäßige [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis verwendet werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

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
  - : Gibt ein `double` zurück, das die Scrollmenge für die z-Achse darstellt.
- [`WheelEvent.deltaMode`](/de/docs/Web/API/WheelEvent/deltaMode) {{ReadOnlyInline}}

  - : Gibt einen `unsigned long` zurück, der die Einheit der Scrollmenge der `delta*`-Werte darstellt. Erlaubte Werte sind:

    | Konstante                    | Wert   | Beschreibung                                                                                                                                                      |
    | ---------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `WheelEvent.DOM_DELTA_PIXEL` | `0x00` | Die `delta*`-Werte sind in Pixeln angegeben.                                                                                                                      |
    | `WheelEvent.DOM_DELTA_LINE`  | `0x01` | Die `delta*`-Werte sind in Zeilen angegeben. Jeder Mausklick scrollt eine Zeile des Inhalts, wobei die Methode zur Berechnung der Zeilenhöhe vom Browser abhängt. |
    | `WheelEvent.DOM_DELTA_PAGE`  | `0x02` | Die `delta*`-Werte sind in Seiten angegeben. Jeder Mausklick scrollt eine Seite des Inhalts.                                                                      |

- [`WheelEvent.wheelDelta`](/de/docs/Web/API/WheelEvent/wheelDelta) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt eine Ganzzahl (32-Bit) zurück, die die Entfernung in Pixeln darstellt.
- [`WheelEvent.wheelDeltaX`](/de/docs/Web/API/WheelEvent/wheelDeltaX) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt eine Ganzzahl zurück, die die horizontale Scrollmenge darstellt.
- [`WheelEvent.wheelDeltaY`](/de/docs/Web/API/WheelEvent/wheelDeltaY) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt eine Ganzzahl zurück, die die vertikale Scrollmenge darstellt.

## Die Eigenschaft detail

Der Wert der [`detail`](/de/docs/Web/API/UIEvent/detail)-Eigenschaft ist immer null, außer in Opera, welches `detail` ähnlich wie das nur in Firefox vorhandene [`DOMMouseScroll`](/de/docs/Web/API/Element/DOMMouseScroll_event)-Ereignis verwendet. Dieses deutet die Scroll-Distanz in Zeilen an, wobei negative Werte anzeigen, dass die Scrollbewegung entweder nach unten oder nach rechts geht, und positive Werte nach oben oder links.

> [!NOTE]
> Unter macOS wird die Scrolldistanz (und somit der Wert von `detail`) basierend auf der beschleunigten Scrolldistanz berechnet.

Unter Linux wird pro nativen Wheel-Event `2` oder `-2` gesetzt.

## wheelDelta, wheelDeltaX und wheelDeltaY-Wert

Der `wheelDelta`-Attributwert ist ein abstrakter Wert, der angibt, wie weit das Rad gedreht wurde. Wenn das Rad von der Benutzerin weg gedreht wurde, ist er positiv, andernfalls negativ. Das bedeutet, dass das Vorzeichen des Delta-Werts sich von dem des DOM Level 3 Event's `wheel` unterscheidet. Jedoch ist die Bedeutung der Menge dieser Werte zwischen den Browsern nicht gleich. Siehe die folgende Erklärung für Details.

IE und Opera (Presto) unterstützen nur das `wheelDelta`-Attribut und nicht das horizontale Scrollen.

Der `wheelDeltaX`-Attributwert gibt den `wheelDelta`-Attributwert entlang der horizontalen Achse an. Wenn ein Benutzer das Gerät zum Scrollen nach rechts betätigt, ist der Wert negativ. Andernfalls, d.h. wenn es nach links geht, ist der Wert positiv.

Der `wheelDeltaY`-Attributwert gibt den `wheelDelta`-Attributwert entlang der vertikalen Achse an. Das Vorzeichen des Werts ist dasselbe wie der `wheelDelta`-Attributwert.

### Chrome

Unter Windows ist der Wert derselbe wie der Delta-Wert von `WM_MOUSEWHEEL` oder `WM_MOUSEHWHEEL`. Und zudem wird der Wert nicht verändert, selbst wenn die Scrollmenge der Systemeinstellungen auf Seitenscrollen eingestellt ist, d.h. der Wert ist derselbe wie in IE unter Windows.

Unter Linux beträgt der Wert `120` oder `-120` pro nativen Wheel-Event. Dies führt zum selben Verhalten wie IE und Chrome für Windows.

Unter Mac ist der Wert kompliziert. Der Wert ändert sich, wenn das **Gerät**, das das native Wheel-Event verursacht, kontinuierliches Scrollen unterstützt.

Wenn das Gerät kontinuierliches Scrollen unterstützt (z. B. Trackpad eines MacBook oder Mausrad, das sich sanft drehen lässt), wird der Wert anhand der beschleunigten Scrollmenge berechnet. In diesem Fall ist der Wert derselbe wie bei Safari.

Wenn das Gerät **kein** kontinuierliches Scrollen unterstützt (typischerweise, älteres Mausrad, das sich nicht sanft drehen lässt), wird der Wert anhand der nicht-beschleunigten Scrollmenge (120 pro Kerbe) berechnet. In diesem Fall unterscheidet sich der Wert von Safari.

Dieser Unterschied stellt ein ernstes Problem für Webentwickler dar. Das Problem besteht darin, dass Webentwickler nicht wissen können, ob das `mousewheel`-Ereignis von welchem Gerät ausgelöst wurde.

### Safari

Der Wert wird immer anhand der beschleunigten Scrollmenge berechnet. Das unterscheidet sich wirklich von anderen Browsern, außer Chrome mit einem Gerät, das kontinuierliches Scrollen unterstützt.

### Opera (Presto)

Der Wert ist immer der `detail`-Attributwert ✕ `40`.

Unter Windows, da der `detail`-Attributwert anhand der tatsächlichen Scrollmenge berechnet wird, ist der Wert anders als bei anderen Browsern, außer die Scrollmenge pro Kerbe beträgt 3 Zeilen in den Systemeinstellungen oder eine Seite.

Unter Linux beträgt der Wert `80` oder `-80` pro nativen Wheel-Event. Dies unterscheidet sich von anderen Browsern.

Unter Mac wird der `detail`-Attributwert aus der beschleunigten Scrollmenge des nativen Events berechnet. Der Wert ist in der Regel viel größer als der Wert von Safari oder Chrome.

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das standardmäßige [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis, um stattdessen darauf zu hören.
