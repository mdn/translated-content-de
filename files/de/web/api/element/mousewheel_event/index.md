---
title: "Element: mousewheel event"
short-title: mousewheel
slug: Web/API/Element/mousewheel_event
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("UI Events")}}{{Non-standard_header}}

Das _veraltete_ und _nicht standardisierte_ **`mousewheel`** Ereignis wird asynchron an ein [`Element`](/de/docs/Web/API/Element) ausgelöst, um Updates bereitzustellen, während ein Mausrad oder ein ähnliches Gerät verwendet wird. Das `mousewheel`-Ereignis war nie Teil eines Standards, und obwohl es von mehreren Browsern implementiert wurde, wurde es nie von Firefox implementiert.

> [!NOTE]
> Verwenden Sie anstelle dieses veralteten Ereignisses das standardisierte [`wheel`](/de/docs/Web/API/Element/wheel_event) Ereignis.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("mousewheel", (event) => { })

onmousewheel = (event) => { }
```

## Ereignistyp

Ein [`WheelEvent`](/de/docs/Web/API/WheelEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WheelEvent")}}

## Die Detail-Eigenschaft

Der Wert der [`detail`](/de/docs/Web/API/UIEvent/detail) Eigenschaft ist immer null, außer in Opera, das `detail` ähnlich wie das Firefox-exklusive [`DOMMouseScroll`](/de/docs/Web/API/Element/DOMMouseScroll_event)-Ereignis verwendet, dessen `detail`-Wert die Scroll-Distanz in Linien angibt, wobei negative Werte Bewegung entweder nach unten oder nach rechts anzeigen und positive Werte nach oben oder links.

> [!NOTE]
> Unter macOS wird die Scroll-Distanz (und damit der `detail`-Wert) basierend auf der beschleunigten Scroll-Distanz berechnet.

Unter Linux wird `2` oder `-2` pro nativem Wheel-Event gesetzt.

## wheelDelta, wheelDeltaX und wheelDeltaY Wert

Der `wheelDelta` Attributwert ist ein abstrakter Wert, der angibt, wie weit das Rad gedreht wurde. Wenn das Rad vom Benutzer weg gedreht wird, ist es positiv, andernfalls negativ. Das bedeutet, dass das Vorzeichen des Delta-Werts anders ist als bei dem `wheel` des DOM Level 3 Events. Jedoch ist die Bedeutung der Höhe dieser Werte nicht in allen Browsern gleich. Siehe die folgende Erklärung für Details.

IE und Opera (Presto) unterstützen nur das `wheelDelta`-Attribut und _nicht_ den horizontalen Scroll.

Der `wheelDeltaX` Attributwert gibt den `wheelDelta`-Attributwert entlang der horizontalen Achse an. Wenn ein Benutzer das Gerät zum Scrollen nach rechts bedient, ist der Wert negativ. Andernfalls, d.h. wenn es nach links geht, ist der Wert positiv.

Der `wheelDeltaY` Attributwert gibt den `wheelDelta`-Attributwert entlang der vertikalen Achse an. Das Vorzeichen des Wertes ist dasselbe wie der `wheelDelta`-Attributwert.

### Chrome

Unter Windows ist der Wert derselbe wie der Delta-Wert von `WM_MOUSEWHEEL` oder `WM_MOUSEHWHEEL`. Und auch, der Wert ändert sich nicht, selbst wenn die Scroll-Menge der Systemeinstellungen Seitenscrollen ist, d.h. der Wert ist derselbe wie bei IE unter Windows.

Unter Linux ist der Wert `120` oder `-120` pro nativem Wheel-Event. Dies ergibt das gleiche Verhalten wie bei IE und Chrome für Windows.

Auf Mac ist der Wert kompliziert. Der Wert ändert sich, wenn das **Gerät**, das das native Wheel-Event auslöst, kontinuierliches Scrollen unterstützt.

Wenn das Gerät kontinuierliches Scrollen unterstützt (z.B. Trackpad eines MacBook oder Mausrad, das sich reibungslos drehen lässt), wird der Wert aus der beschleunigten Scroll-Menge berechnet. In diesem Fall ist der Wert derselbe wie bei Safari.

Wenn das Gerät **kein** kontinuierliches Scrollen unterstützt (typischerweise ein altes Mausrad, das sich nicht reibungslos drehen lässt), wird der Wert aus der nicht beschleunigten Scroll-Menge berechnet (120 pro Kerbe). In diesem Fall ist der Wert anders als bei Safari.

Dieser Unterschied stellt ein ernsthaftes Problem für Webentwickler dar. Das heißt, Webentwickler können nicht wissen, ob das `mousewheel`-Ereignis durch welches Gerät verursacht wurde.

### Safari

Der Wert wird immer aus der beschleunigten Scroll-Menge berechnet. Dies unterscheidet sich wirklich von anderen Browsern, außer Chrome mit einem Gerät, das kontinuierliches Scrollen unterstützt.

### Opera (Presto)

Der Wert ist immer der `detail`-Attributwert ✕ `40`.

Unter Windows, da der `detail`-Attributwert aus der tatsächlichen Scroll-Menge berechnet wird, ist der Wert anders als bei anderen Browsern, außer die Scroll-Menge pro Kerbe ist 3 Linien in den Systemeinstellungen oder eine Seite.

Unter Linux ist der Wert `80` oder `-80` pro nativem Wheel-Event. Dies unterscheidet sich von anderen Browsern.

Auf Mac wird der `detail`-Attributwert aus der beschleunigten Scroll-Menge des nativen Events berechnet. Der Wert ist normalerweise viel größer als der Wert von Safari oder Chrome.

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das standardisierte [`wheel`](/de/docs/Web/API/Element/wheel_event) Ereignis, das stattdessen verwendet werden soll.
