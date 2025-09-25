---
title: "Element: mousewheel event"
short-title: mousewheel
slug: Web/API/Element/mousewheel_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("UI Events")}}{{deprecated_header}}{{Non-standard_header}}

Das _veraltete_ und _nicht standardisierte_ **`mousewheel`**-Ereignis wird asynchron an einem [`Element`](/de/docs/Web/API/Element) ausgelöst, um Aktualisierungen bereitzustellen, während ein Mausrad oder ein ähnliches Gerät benutzt wird. Das `mousewheel`-Ereignis war nie Teil eines Standards, und obwohl es von mehreren Browsern implementiert wurde, wurde es nie von Firefox implementiert.

> [!NOTE]
> Anstelle dieses veralteten Ereignisses verwenden Sie das standardisierte [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignisbehandlereigenschaft.

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
  - : Gibt ein `double` zurück, das die horizontale Scrollmenge repräsentiert.
- [`WheelEvent.deltaY`](/de/docs/Web/API/WheelEvent/deltaY) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die vertikale Scrollmenge repräsentiert.
- [`WheelEvent.deltaZ`](/de/docs/Web/API/WheelEvent/deltaZ) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Scrollmenge für die z-Achse repräsentiert.
- [`WheelEvent.deltaMode`](/de/docs/Web/API/WheelEvent/deltaMode) {{ReadOnlyInline}}
  - : Gibt ein `unsigned long` zurück, der die Einheit der `delta*` Werte der Scrollmenge angibt. Erlaubte Werte sind:

    | Konstante                    | Wert   | Beschreibung                                                                                                                                                 |
    | ---------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `WheelEvent.DOM_DELTA_PIXEL` | `0x00` | Die `delta*`-Werte sind in Pixeln angegeben.                                                                                                                 |
    | `WheelEvent.DOM_DELTA_LINE`  | `0x01` | Die `delta*`-Werte sind in Zeilen angegeben. Jeder Mausklick scrollt eine Zeile Inhalt, wobei die Methode zur Berechnung der Zeilenhöhe browserabhängig ist. |
    | `WheelEvent.DOM_DELTA_PAGE`  | `0x02` | Die `delta*`-Werte sind in Seiten angegeben. Jeder Mausklick scrollt eine Seite Inhalt.                                                                      |

- [`WheelEvent.wheelDelta`](/de/docs/Web/API/WheelEvent/wheelDelta) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen Integer (32-Bit) zurück, der die Distanz in Pixeln darstellt.
- [`WheelEvent.wheelDeltaX`](/de/docs/Web/API/WheelEvent/wheelDeltaX) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen Integer zurück, der die horizontale Scrollmenge repräsentiert.
- [`WheelEvent.wheelDeltaY`](/de/docs/Web/API/WheelEvent/wheelDeltaY) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen Integer zurück, der die vertikale Scrollmenge repräsentiert.

## Die Eigenschaft detail

Der Wert der [`detail`](/de/docs/Web/API/UIEvent/detail)-Eigenschaft ist immer null, außer in Opera, das `detail` ähnlich dem nur in Firefox verfügbaren [`DOMMouseScroll`](/de/docs/Web/API/Element/DOMMouseScroll_event)-Ereignis verwendet, dessen `detail`-Wert den Scrollabstand in Zeilen angibt, wobei negative Werte darauf hindeuten, dass die Scrollbewegung entweder nach unten oder nach rechts erfolgt, und positive Werte darauf hinweisen, dass nach oben oder links gescrollt wird.

> [!NOTE]
> Auf macOS wird der Scrollabstand (und dadurch der Wert von `detail`) basierend auf dem beschleunigten Scrollabstand berechnet.

Auf Linux wird pro nativem Wheel-Event `2` oder `-2` festgelegt.

## Werte von wheelDelta, wheelDeltaX und wheelDeltaY

Der Wert des `wheelDelta`-Attributs ist ein abstrakter Wert, der angibt, wie weit das Rad gedreht wurde. Wenn das Rad vom Benutzer weg gedreht wurde, ist es positiv, andernfalls negativ. Das bedeutet, dass das Vorzeichen des Delta-Wertes sich vom Vorzeichen des `wheel`-Events auf DOM Level 3 unterscheidet. Die Bedeutung der Menge dieser Werte ist jedoch zwischen den Browsern nicht gleich. Siehe die folgende Erklärung für Details.

IE und Opera (Presto) unterstützen nur das `wheelDelta`-Attribut und unterstützen keinen horizontalen Bildlauf.

Der Wert des `wheelDeltaX`-Attributs gibt den `wheelDelta`-Attributswert entlang der horizontalen Achse an. Wenn ein Benutzer das Gerät zum Scrollen nach rechts verwendet, ist der Wert negativ. Andernfalls, d.h. wenn es nach links geht, ist der Wert positiv.

Der Wert des `wheelDeltaY`-Attributs gibt den `wheelDelta`-Attributswert entlang der vertikalen Achse an. Das Vorzeichen des Wertes ist dasselbe wie das des `wheelDelta`-Attributwertes.

### Chrome

Unter Windows ist der Wert derselbe wie der Delta-Wert von `WM_MOUSEWHEEL` oder `WM_MOUSEHWHEEL`. Der Wert ändert sich auch nicht, wenn der Bildlaufbetrag der Systemeinstellungen einem Seitenbildlauf entspricht, d.h. der Wert ist derselbe wie in IE unter Windows.

Unter Linux ist der Wert `120` oder `-120` pro nativem Wheel-Event. Dies erzeugt dasselbe Verhalten wie in IE und Chrome für Windows.

Auf Mac ist der Wert kompliziert. Der Wert ändert sich, wenn das Gerät, das das native Wheel-Event verursacht, einen kontinuierlichen Bildlauf unterstützt.

Wenn das Gerät kontinuierlichen Bildlauf unterstützt (z. B. Trackpad eines MacBook oder Mausrad, das sich reibungslos drehen lässt), wird der Wert aus dem beschleunigten Scrollbetrag berechnet. In diesem Fall ist der Wert derselbe wie bei Safari.

Wenn das Gerät **keinen** kontinuierlichen Bildlauf unterstützt (typischerweise ein älteres Mausrad, das sich nicht reibungslos drehen lässt), wird der Wert aus dem nicht beschleunigten Scrollbetrag berechnet (120 pro Raste). In diesem Fall unterscheidet sich der Wert von dem in Safari.

Dieser Unterschied stellt ein ernsthaftes Problem für Webanwendungsentwickler dar. Webentwickler können nicht feststellen, durch welches Gerät das `mousewheel`-Event ausgelöst wurde.

### Safari

Der Wert wird immer aus dem beschleunigten Scrollbetrag berechnet. Dies ist bei anderen Browsern wirklich anders, außer bei Chrome, wenn ein Gerät mit unterstütztem kontinuierlichen Bildlauf verwendet wird.

### Opera (Presto)

Der Wert ist immer der `detail`-Attributswert ✕ `40`.

Unter Windows wird der `detail`-Attributswert aus dem tatsächlichen Bildlaufbetrag berechnet, weshalb der Wert sich von anderen Browsern unterscheidet, es sei denn, der Bildlaufbetrag pro Raste ist in den Systemeinstellungen 3 Zeilen oder eine Seite.

Unter Linux beträgt der Wert `80` oder `-80` pro nativem Wheel-Event. Dies unterscheidet sich von anderen Browsern.

Auf Mac wird der `detail`-Attributswert aus dem beschleunigten Bildlaufbetrag des nativen Ereignisses berechnet. Der Wert ist normalerweise viel höher als der von Safari oder Chrome.

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das standardisierte [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis, das stattdessen verwendet werden sollte.
