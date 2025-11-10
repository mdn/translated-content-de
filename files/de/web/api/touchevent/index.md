---
title: TouchEvent
slug: Web/API/TouchEvent
l10n:
  sourceCommit: 36761819df2ebdd4e3dcc9ae6007029dec71fac0
---

{{APIRef("Touch Events")}}

Das **`TouchEvent`**-Interface repräsentiert ein [`UIEvent`](/de/docs/Web/API/UIEvent), das gesendet wird, wenn sich der Status von Berührungen auf einer berührungsempfindlichen Oberfläche ändert. Diese Oberfläche kann beispielsweise ein Touchscreen oder ein Trackpad sein. Das Event kann einen oder mehrere Berührungspunkte mit dem Bildschirm beschreiben und unterstützt die Erkennung von Bewegungen, Hinzufügung und Entfernung von Berührungspunkten und so weiter.

Berührungen werden durch das [`Touch`](/de/docs/Web/API/Touch)-Objekt dargestellt; jede Berührung wird durch Position, Größe und Form, Druckstärke und Zielelement beschrieben. Listen von Berührungen werden durch [`TouchList`](/de/docs/Web/API/TouchList)-Objekte dargestellt.

{{InheritanceDiagram}}

## Konstruktor

- [`TouchEvent()`](/de/docs/Web/API/TouchEvent/TouchEvent)
  - : Erstellt ein `TouchEvent`-Objekt.

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften von seinem Elternteil, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`TouchEvent.altKey`](/de/docs/Web/API/TouchEvent/altKey) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Alt-Taste gedrückt war, als das Touch-Event ausgelöst wurde.
- [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) von allen [`Touch`](/de/docs/Web/API/Touch)-Objekten, die einzelne Berührungspunkte darstellen, deren Status sich zwischen dem vorherigen Touch-Event und diesem geändert hat.
- [`TouchEvent.ctrlKey`](/de/docs/Web/API/TouchEvent/ctrlKey) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Steuerungstaste gedrückt war, als das Touch-Event ausgelöst wurde.
- [`TouchEvent.metaKey`](/de/docs/Web/API/TouchEvent/metaKey) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Meta-Taste gedrückt war, als das Touch-Event ausgelöst wurde.
- [`TouchEvent.shiftKey`](/de/docs/Web/API/TouchEvent/shiftKey) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob die Umschalttaste gedrückt war, als das Touch-Event ausgelöst wurde.
- [`TouchEvent.targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) von allen [`Touch`](/de/docs/Web/API/Touch)-Objekten, die sich derzeit in Kontakt mit der Berührungsfläche befinden **und** auf demselben Element begonnen wurden, das das Ziel des Events ist.
- [`TouchEvent.touches`](/de/docs/Web/API/TouchEvent/touches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) von allen [`Touch`](/de/docs/Web/API/Touch)-Objekten, die alle aktuellen Berührungspunkte mit der Oberfläche darstellen, unabhängig vom Ziel oder geändertem Status.
- [`TouchEvent.rotation`](/de/docs/Web/API/TouchEvent/rotation) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Änderung der Rotation (in Grad) seit Beginn des Events. Positive Werte zeigen eine Drehung im Uhrzeigersinn an; negative Werte zeigen eine Drehung gegen den Uhrzeigersinn an. Anfangswert: `0.0`.
- [`TouchEvent.scale`](/de/docs/Web/API/TouchEvent/scale) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Entfernung zwischen zwei Fingern seit Beginn des Events. Ausgedrückt als Gleitkomma-Multiplikator des anfänglichen Abstands zwischen den Fingern zu Beginn des Events. Werte unter 1.0 zeigen ein nach innen gerichtetes Kneifen (Herauszoomen) an. Werte über 1.0 zeigen ein nach außen gerichtetes Entkneifen (Hineinzoomen) an. Anfangswert: `1.0`.

## Touch-Event-Typen

Es gibt verschiedene Eventtypen, die ausgelöst werden können, um anzuzeigen, dass berührungsbezogene Änderungen aufgetreten sind. Sie können feststellen, welches dieser Events aufgetreten ist, indem Sie die [`TouchEvent.type`](/de/docs/Web/API/Event/type)-Eigenschaft des Events betrachten.

- [`touchstart`](/de/docs/Web/API/Element/touchstart_event)
  - : Wird gesendet, wenn der Benutzer einen Berührungspunkt auf der Berührungsfläche platziert. Das Ziel des Events ist das [`Element`](/de/docs/Web/API/Element), in dem die Berührung aufgetreten ist.
- [`touchend`](/de/docs/Web/API/Element/touchend_event)
  - : Wird gesendet, wenn der Benutzer einen Berührungspunkt von der Oberfläche entfernt; das heißt, wenn er einen Finger oder Stift von der Oberfläche hebt. Dies wird auch gesendet, wenn der Berührungspunkt den Rand der Oberfläche verlässt; beispielsweise, wenn der Finger des Benutzers vom Bildschirmrand gleitet.

    Das Ziel des Events ist dasselbe [`Element`](/de/docs/Web/API/Element), das das `touchstart`-Event erhalten hat, das dem Berührungspunkt entspricht, selbst wenn der Berührungspunkt sich außerhalb dieses Elements bewegt hat.

    Der oder die Berührungspunkte, die von der Oberfläche entfernt wurden, können in der [`TouchList`](/de/docs/Web/API/TouchList) gefunden werden, die durch das `changedTouches`-Attribut angegeben wird.

- [`touchmove`](/de/docs/Web/API/Element/touchmove_event)
  - : Wird gesendet, wenn der Benutzer einen Berührungspunkt entlang der Oberfläche bewegt. Das Ziel des Events ist dasselbe [`Element`](/de/docs/Web/API/Element), das das `touchstart`-Event erhalten hat, das dem Berührungspunkt entspricht, selbst wenn der Berührungspunkt sich außerhalb dieses Elements bewegt hat.

    Dieses Event wird auch gesendet, wenn sich die Werte der Radius-, Rotationswinkel- oder Kraft-Attribute eines Berührungspunkts ändern.

    > [!NOTE]
    > Die Häufigkeit, mit der `touchmove`-Events gesendet werden, ist browser-spezifisch und kann auch abhängig von der Leistungsfähigkeit der Hardware des Benutzers variieren. Sie sollten sich nicht auf eine spezifische Granularität dieser Events verlassen.

- [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)
  - : Wird gesendet, wenn ein Berührungspunkt auf irgendeine Weise unterbrochen wurde. Es gibt mehrere mögliche Gründe, warum dies passieren kann (und die genauen Gründe variieren von Gerät zu Gerät sowie von Browser zu Browser):
    - Ein Verzögerungsereignis ist eingetreten, das die Berührung abgebrochen hat; dies kann passieren, wenn während der Interaktion eine modale Warnung erscheint.
    - Der Berührungspunkt hat das Dokumentfenster verlassen und ist in den Benutzeroberflächenbereich des Browsers, ein Plug-in oder andere externe Inhalte gelangt.
    - Der Benutzer hat mehr Berührungspunkte auf dem Bildschirm platziert, als unterstützt werden können, in diesem Fall wird die früheste [`Touch`](/de/docs/Web/API/Touch) in der [`TouchList`](/de/docs/Web/API/TouchList) abgebrochen.

### Verwendung mit addEventListener() und preventDefault()

Es ist wichtig zu beachten, dass in vielen Fällen sowohl Touch- als auch Maus-Events gesendet werden (um nicht-touch-spezifischem Code dennoch Interaktion mit dem Benutzer zu ermöglichen). Wenn Sie Touch-Events verwenden, sollten Sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, um zu verhindern, dass das Maus-Event ebenfalls gesendet wird.

Die Ausnahme dazu ist Chrome, beginnend mit Version 56 (Desktop, Chrome für Android und Android Webview), wo der Standardwert für die `passive`-Option für [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event) `true` ist und Aufrufe von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) keine Wirkung haben. Um dieses Verhalten zu überschreiben, müssen Sie die `passive`-Option auf `false` setzen, wonach der Aufruf von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) wie angegeben funktionieren wird. Die Änderung, Listener standardmäßig als `passive` zu behandeln, verhindert, dass der Listener das Rendering der Seite blockiert, während ein Benutzer scrollt. Eine Demo ist auf der [Chrome Developer](https://developer.chrome.com/blog/passive-event-listeners/) Website verfügbar.

## Beispiel

Siehe das [Beispiel im Hauptartikel zu Touch Events](/de/docs/Web/API/Touch_events#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Touch events](/de/docs/Web/API/Touch_events)
- [`GestureEvent`](/de/docs/Web/API/GestureEvent)
