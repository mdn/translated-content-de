---
title: "Element: mousewheel Ereignis"
short-title: mousewheel
slug: Web/API/Element/mousewheel_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}{{deprecated_header}}{{Non-standard_header}}

Das _veraltete_ und _nicht standardisierte_ **`mousewheel`** Ereignis wird asynchron bei einem [`Element`](/de/docs/Web/API/Element) ausgelöst, um Aktualisierungen bereitzustellen, während ein Mausrad oder ein ähnliches Gerät bedient wird. Das `mousewheel` Ereignis war nie Teil eines Standards, und obwohl es von mehreren Browsern implementiert wurde, wurde es nie von Firefox unterstützt.

> [!NOTE]
> Statt dieses veralteten Ereignisses verwenden Sie das standardisierte [`wheel`](/de/docs/Web/API/Element/wheel_event) Ereignis.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("mousewheel", (event) => { })

onmousewheel = (event) => { }
```

## Ereignistyp

Ein [`WheelEvent`](/de/docs/Web/API/WheelEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WheelEvent")}}

## Die detail Eigenschaft

Der Wert der [`detail`](/de/docs/Web/API/UIEvent/detail) Eigenschaft ist immer Null, außer in Opera, das `detail` ähnlich wie das Firefox-exklusive [`DOMMouseScroll`](/de/docs/Web/API/Element/DOMMouseScroll_event) Ereignis verwendet, dessen `detail`-Wert die Scroll-Distanz in Zeilen angibt, wobei negative Werte angeben, dass die Scroll-Bewegung entweder nach unten oder nach rechts und positive Werte, dass sie nach oben oder links erfolgt.

> [!NOTE]
> Auf macOS wird die Scroll-Distanz (und damit der Wert von `detail`) basierend auf der beschleunigten Scroll-Distanz berechnet.

Auf Linux wird pro nativem Wheel-Ereignis `2` oder `-2` festgelegt.

## wheelDelta, wheelDeltaX und wheelDeltaY Wert

Der `wheelDelta` Attributwert ist ein abstrakter Wert, der angibt, wie weit das Rad gedreht wurde. Wenn sich das Rad vom Benutzer wegdreht, ist es positiv, andernfalls negativ. Das bedeutet, dass das Vorzeichen des Delta-Werts bei DOM Level 3 Event's `wheel` anders ist. Die Bedeutung der Beträge dieser Werte ist jedoch zwischen Browsern nicht gleich. Siehe die folgende Erklärung für die Details.

IE und Opera (Presto) unterstützen nur das `wheelDelta` Attribut und unterstützen _keinen_ horizontalen Scroll.

Der `wheelDeltaX` Attributwert gibt den `wheelDelta` Attributwert entlang der horizontalen Achse an. Wenn ein Benutzer das Gerät zum Scrollen nach rechts betätigt, ist der Wert negativ. Ansonsten, d.h. wenn es nach links geht, ist der Wert positiv.

Der `wheelDeltaY` Attributwert gibt den `wheelDelta` Attributwert entlang der vertikalen Achse an. Das Vorzeichen des Wertes ist dasselbe wie beim `wheelDelta` Attributwert.

### Chrome

Unter Windows ist der Wert derselbe wie der Delta-Wert von `WM_MOUSEWHEEL` oder `WM_MOUSEHWHEEL`. Der Wert ändert sich auch dann nicht, wenn der Scroll-Betrag der Systemeinstellungen ein Seiten-Scroll ist, d.h. der Wert ist derselbe wie bei IE unter Windows.

Auf Linux beträgt der Wert `120` oder `-120` pro nativem Wheel-Ereignis. Dies ergibt das gleiche Verhalten wie IE und Chrome für Windows.

Auf Mac ist der Wert kompliziert. Der Wert ändert sich, wenn das **Gerät**, das das native Wheel-Ereignis verursacht, kontinuierliches Scrollen unterstützt.

Wenn das Gerät kontinuierliches Scrollen unterstützt (z.B. Trackpad eines MacBook oder Mausrad, das reibungslos gedreht werden kann), wird der Wert aus dem beschleunigten Scroll-Betrag berechnet. In diesem Fall ist der Wert derselbe wie bei Safari.

Wenn das Gerät **kein** kontinuierliches Scrollen unterstützt (typischerweise ein altes Mausrad, das nicht reibungslos gedreht werden kann), wird der Wert aus dem nicht beschleunigten Scroll-Betrag (120 pro Kerbe) berechnet. In diesem Fall ist der Wert anders als bei Safari.

Dieser Unterschied stellt ein ernstes Problem für Webanwendungsentwickler dar. Nämlich, Webentwickler können nicht wissen, ob das `mousewheel` Ereignis durch welches Gerät verursacht wird.

### Safari

Der Wert wird immer aus dem beschleunigten Scroll-Betrag berechnet. Dies unterscheidet sich wirklich von anderen Browsern, außer Chrome mit einem Gerät, das kontinuierliches Scrollen unterstützt.

### Opera (Presto)

Der Wert ist immer der `detail` Attributwert ✕ `40`.

Unter Windows, da der `detail` Attributwert aus dem tatsächlichen Scroll-Betrag berechnet wird, ist der Wert von anderen Browsern unterschiedlich, außer wenn der Scroll-Betrag pro Kerbe in den Systemeinstellungen 3 Zeilen oder eine Seite ist.

Auf Linux beträgt der Wert `80` oder `-80` pro nativem Wheel-Ereignis. Dies unterscheidet sich von anderen Browsern.

Auf Mac wird der `detail` Attributwert aus dem beschleunigten Scroll-Betrag des nativen Ereignisses berechnet. Der Wert ist normalerweise viel größer als der Wert von Safari oder Chrome.

## Spezifikationen

Nicht Teil irgendeiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das standardmäßige [`wheel`](/de/docs/Web/API/Element/wheel_event) Ereignis, auf das stattdessen gehört werden sollte.
