---
title: "Element: mousewheel-Ereignis"
short-title: mousewheel
slug: Web/API/Element/mousewheel_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("UI Events")}}{{Non-standard_header}}

Das _veraltete_ und _nicht standardisierte_ **`mousewheel`**-Ereignis wird asynchron auf einem [`Element`](/de/docs/Web/API/Element) ausgelöst, um Aktualisierungen bereitzustellen, während ein Mausrad oder ein ähnliches Gerät betätigt wird. Das `mousewheel`-Ereignis war nie Teil eines Standards. Es wurde zwar von mehreren Browsern implementiert, jedoch nie von Firefox.

> [!NOTE]
> Verwenden Sie statt dieses veralteten Ereignisses das standardisierte [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("mousewheel", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onmousewheel = (event) => { }
```

## Ereignistyp

Ein [`WheelEvent`](/de/docs/Web/API/WheelEvent). Es erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WheelEvent")}}

## Die Eigenschaft detail

Der Wert der Eigenschaft [`detail`](/de/docs/Web/API/UIEvent/detail) ist immer null, außer in Opera. Dort wird `detail` ähnlich wie der `detail`-Wert des nur in Firefox verfügbaren Ereignisses [`DOMMouseScroll`](/de/docs/Web/API/Element/DOMMouseScroll_event) verwendet: Er gibt die Scrollstrecke in Zeilen an. Negative Werte kennzeichnen eine Scrollbewegung nach unten oder rechts, positive Werte eine Scrollbewegung nach oben oder links.

> [!NOTE]
> Unter macOS wird die Scrollstrecke (und damit der Wert von `detail`) anhand der beschleunigten Scrollstrecke berechnet.

Unter Linux wird pro nativem Mausradereignis `2` oder `-2` gesetzt.

## Werte von wheelDelta, wheelDeltaX und wheelDeltaY

Der Wert des Attributs `wheelDelta` ist ein abstrakter Wert, der angibt, wie weit sich das Mausrad gedreht hat. Dreht sich das Rad vom Benutzer weg, ist der Wert positiv, andernfalls negativ. Das Vorzeichen des Delta-Werts unterscheidet sich damit von dem des `wheel`-Ereignisses in DOM Level 3 Events. Allerdings wird auch die Größe dieser Werte von Browser zu Browser unterschiedlich interpretiert. Die folgenden Abschnitte erläutern die Unterschiede.

IE und Opera (Presto) unterstützen nur das Attribut `wheelDelta` und **kein** horizontales Scrollen.

Der Wert des Attributs `wheelDeltaX` gibt den Wert von `wheelDelta` entlang der horizontalen Achse an. Wenn ein Benutzer das Gerät betätigt, um nach rechts zu scrollen, ist der Wert negativ. Beim Scrollen nach links ist er positiv.

Der Wert des Attributs `wheelDeltaY` gibt den Wert von `wheelDelta` entlang der vertikalen Achse an. Sein Vorzeichen entspricht dem des Attributwerts von `wheelDelta`.

### Chrome

Unter Windows entspricht der Wert dem Delta-Wert von `WM_MOUSEWHEEL` oder `WM_MOUSEHWHEEL`. Er bleibt auch dann unverändert, wenn in den Systemeinstellungen seitenweises Scrollen festgelegt ist. Damit entspricht er dem Wert in IE unter Windows.

Unter Linux beträgt der Wert pro nativem Mausradereignis `120` oder `-120`. Das Verhalten entspricht damit dem von IE und Chrome unter Windows.

Unter Mac ist der Wert komplexer. Er hängt davon ab, ob das **Gerät**, das das native Mausradereignis auslöst, kontinuierliches Scrollen unterstützt.

Unterstützt das Gerät kontinuierliches Scrollen (etwa das Trackpad eines MacBook oder ein stufenlos drehbares Mausrad), wird der Wert aus der beschleunigten Scrollstrecke berechnet. In diesem Fall entspricht er dem Wert in Safari.

Unterstützt das Gerät **kein** kontinuierliches Scrollen (typischerweise ein älteres, nicht stufenlos drehbares Mausrad), wird der Wert aus der unbeschleunigten Scrollstrecke berechnet (120 pro Rastschritt). In diesem Fall unterscheidet er sich vom Wert in Safari.

Dieser Unterschied stellt Entwickler von Webanwendungen vor ein erhebliches Problem: Sie können nicht erkennen, von welchem Gerät ein `mousewheel`-Ereignis ausgelöst wurde.

### Safari

Der Wert wird immer aus der beschleunigten Scrollstrecke berechnet. Damit unterscheidet er sich von den Werten anderer Browser, mit Ausnahme von Chrome bei einem Gerät, das kontinuierliches Scrollen unterstützt.

### Opera (Presto)

Der Wert entspricht immer dem Wert des Attributs `detail` ✕ `40`.

Unter Windows wird der Wert des Attributs `detail` aus der tatsächlichen Scrollstrecke berechnet. Daher unterscheidet sich der Wert von dem anderer Browser, es sei denn, in den Systemeinstellungen sind drei Zeilen oder eine Seite pro Rastschritt festgelegt.

Unter Linux beträgt der Wert pro nativem Mausradereignis `80` oder `-80`. Das unterscheidet sich von anderen Browsern.

Unter Mac wird der Wert des Attributs `detail` aus der beschleunigten Scrollstrecke des nativen Ereignisses berechnet. Er ist in der Regel deutlich größer als der Wert in Safari oder Chrome.

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das standardisierte [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis, das Sie stattdessen verwenden sollten.
