---
title: "Element: mousewheel-Event"
short-title: mousewheel
slug: Web/API/Element/mousewheel_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}}{{deprecated_header}}{{ Non-standard_header() }}

Das _veraltete_ und _nicht standardisierte_ **`mousewheel`**-Event wird asynchron an einem {{domxref("Element")}} ausgelöst, um Updates bereitzustellen, während ein Mausrad oder ein ähnliches Gerät bedient wird. Das `mousewheel`-Event war nie Teil eines Standards, und obwohl es von mehreren Browsern implementiert wurde, war es nie in Firefox implementiert.

> [!NOTE]
> Verwenden Sie anstelle dieses veralteten Events das standardisierte {{domxref("Element.wheel_event", "wheel")}}-Event.

## Syntax

Verwenden Sie den Eventnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("mousewheel", (event) => {});

onmousewheel = (event) => {};
```

## Eventtyp

Ein {{domxref("WheelEvent")}}. Erbt von {{domxref("MouseEvent")}}, {{domxref("UIEvent")}} und {{domxref("Event")}}.

{{InheritanceDiagram("WheelEvent")}}

## Event-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihren Vorläufern, {{DOMxRef("MouseEvent")}}, {{DOMxRef("UIEvent")}}, und {{DOMxRef("Event")}}._

- {{DOMxRef("WheelEvent.deltaX")}} {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die horizontale Scrollmenge darstellt.
- {{DOMxRef("WheelEvent.deltaY")}} {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die vertikale Scrollmenge darstellt.
- {{DOMxRef("WheelEvent.deltaZ")}} {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Scrollmenge für die z-Achse darstellt.
- {{DOMxRef("WheelEvent.deltaMode")}} {{ReadOnlyInline}}

  - : Gibt ein `unsigned long` zurück, das die Einheit der `delta*`-Werte für die Scrollmenge angibt. Zulässige Werte sind:

    | Konstant                     | Wert   | Beschreibung                                                                                                                                                  |
    | ---------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `WheelEvent.DOM_DELTA_PIXEL` | `0x00` | Die `delta*`-Werte sind in Pixel angegeben.                                                                                                                  |
    | `WheelEvent.DOM_DELTA_LINE`  | `0x01` | Die `delta*`-Werte sind in Zeilen angegeben. Jeder Mausklick scrollt eine Zeile Inhalt, wobei die Methode zur Berechnung der Zeilenhöhe browserspezifisch ist. |
    | `WheelEvent.DOM_DELTA_PAGE`  | `0x02` | Die `delta*`-Werte sind in Seiten angegeben. Jeder Mausklick scrollt eine Seite Inhalt.                                                                      |

- {{DOMxRef("WheelEvent.wheelDelta")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen Integer (32-Bit) zurück, der die Entfernung in Pixeln darstellt.
- {{DOMxRef("WheelEvent.wheelDeltaX")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen Integer zurück, der die horizontale Scrollmenge darstellt.
- {{DOMxRef("WheelEvent.wheelDeltaY")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen Integer zurück, der die vertikale Scrollmenge darstellt.

## Die Detail-Eigenschaft

Der Wert der {{domxref("UIEvent/detail", "detail")}}-Eigenschaft ist immer null, außer in Opera, das `detail` ähnlich wie das Firefox-exklusive {{domxref("Element.DOMMouseScroll_event", "DOMMouseScroll")}}-Event verwendet. Der `detail`-Wert zeigt die Scrollentfernung in Zeilen an, wobei negative Werte angeben, dass die Scrollbewegung entweder nach unten oder nach rechts erfolgt, und positive Werte angeben, dass nach oben oder links gescrollt wird.

> [!NOTE]
> Auf macOS wird die Scrollentfernung (und damit der Wert von `detail`) basierend auf der beschleunigten Scrollentfernung berechnet.

Auf Linux wird bei jedem nativen Wheel-Event `2` oder `-2` gesetzt.

## wheelDelta, wheelDeltaX und wheelDeltaY-Wert

Der `wheelDelta`-Attributwert ist ein abstrakter Wert, der angibt, wie weit das Rad gedreht wurde. Wenn das Rad vom Benutzer weggedreht wurde, ist der Wert positiv, andernfalls negativ. Dies bedeutet, dass das Vorzeichen des Delta-Werts von DOM Level 3 Event's `wheel` anders ist. Die Bedeutung der Höhe dieser Werte ist jedoch zwischen den Browsern nicht gleich. Siehe folgende Erklärung für weitere Details.

IE und Opera (Presto) unterstützen nur das `wheelDelta`-Attribut und unterstützen _keinen_ horizontalen Bildlauf.

Der `wheelDeltaX`-Attributwert gibt den Wert des `wheelDelta`-Attributs entlang der horizontalen Achse an. Wenn ein Benutzer das Gerät bedient, um nach rechts zu scrollen, ist der Wert negativ. Ansonsten, d.h., wenn es nach links ist, ist der Wert positiv.

Der `wheelDeltaY`-Attributwert gibt den Wert des `wheelDelta`-Attributs entlang der vertikalen Achse an. Das Vorzeichen des Wertes ist dasselbe wie der `wheelDelta`-Attributwert.

### Chrome

Unter Windows entspricht der Wert dem Delta-Wert von `WM_MOUSEWHEEL` oder `WM_MOUSEHWHEEL`. Und auch wird der Wert nicht geändert, selbst wenn die Scrollmenge der Systemeinstellungen das Scrollen der Seite ist, d.h., der Wert ist derselbe wie bei IE unter Windows.

Unter Linux ist der Wert `120` oder `-120` pro nativem Wheel-Event. Dies sorgt für dasselbe Verhalten wie bei IE und Chrome für Windows.

Auf dem Mac ist der Wert kompliziert. Der Wert ändert sich, wenn das **Gerät**, das das native Wheel-Event verursacht, kontinuierliches Scrollen unterstützt.

Wenn das Gerät kontinuierliches Scrollen unterstützt (z.B. das Trackpad eines MacBook oder ein Mausrad, das sich sanft drehen lässt), wird der Wert aus der beschleunigten Scrollmenge berechnet. In diesem Fall ist der Wert derselbe wie bei Safari.

Wenn das Gerät **nicht** kontinuierliches Scrollen unterstützt (typischerweise ein altes Mausrad, das sich nicht sanft drehen lässt), wird der Wert aus der unbeschleunigten Scrollmenge berechnet (120 pro Kerbe). In diesem Fall ist der Wert anders als bei Safari.

Diese Differenz stellt ein ernstes Problem für Webentwickler dar. Das heißt, Webentwickler können nicht wissen, durch welches Gerät das `mousewheel`-Event verursacht wurde.

### Safari

Der Wert wird immer aus der beschleunigten Scrollmenge berechnet. Dies unterscheidet sich stark von anderen Browsern außer Chrome mit Geräten, die kontinuierliches Scrollen unterstützen.

### Opera (Presto)

Der Wert ist immer der `detail`-Attributwert ✕ `40`.

Unter Windows, da der `detail`-Attributwert aus der tatsächlichen Scrollmenge berechnet wird, unterscheidet sich der Wert von anderen Browsern, außer wenn die Scrollmenge pro Kerbe in den Systemeinstellungen 3 Zeilen oder eine Seite beträgt.

Unter Linux beträgt der Wert `80` oder `-80` pro nativem Wheel-Event. Dies ist anders als bei anderen Browsern.

Auf dem Mac wird der `detail`-Attributwert aus der beschleunigten Scrollmenge des nativen Events berechnet. Der Wert ist normalerweise viel größer als der Wert von Safari oder Chrome.

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das standardisierte {{domxref("Element/wheel_event", "wheel")}}-Event, das stattdessen verwendet werden soll.
