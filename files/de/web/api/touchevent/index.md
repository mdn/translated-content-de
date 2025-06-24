---
title: TouchEvent
slug: Web/API/TouchEvent
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Touch Events")}}

Die **`TouchEvent`**-Schnittstelle stellt ein [`UIEvent`](/de/docs/Web/API/UIEvent) dar, das gesendet wird, wenn sich der Zustand von Kontakten mit einer berührungsempfindlichen Oberfläche ändert. Diese Oberfläche kann beispielsweise ein Touchscreen oder ein Trackpad sein. Das Ereignis kann einen oder mehrere Berührungspunkte mit dem Bildschirm beschreiben und unterstützt die Erkennung von Bewegungen, das Hinzufügen und Entfernen von Berührungspunkten usw.

Berührungen werden durch das [`Touch`](/de/docs/Web/API/Touch)-Objekt dargestellt; jede Berührung wird durch eine Position, Größe und Form, einen Druckbetrag und ein Ziel-Element beschrieben. Listen von Berührungen werden durch [`TouchList`](/de/docs/Web/API/TouchList)-Objekte repräsentiert.

{{InheritanceDiagram}}

## Konstruktor

- [`TouchEvent()`](/de/docs/Web/API/TouchEvent/TouchEvent)
  - : Erstellt ein `TouchEvent`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihren Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`TouchEvent.altKey`](/de/docs/Web/API/TouchEvent/altKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob die Alt-Taste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) von allen [`Touch`](/de/docs/Web/API/Touch)-Objekten, die einzelne Berührungspunkte darstellen, deren Zustände sich zwischen dem vorherigen Touch-Ereignis und diesem geändert haben.
- [`TouchEvent.ctrlKey`](/de/docs/Web/API/TouchEvent/ctrlKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob die Steuerungstaste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- [`TouchEvent.metaKey`](/de/docs/Web/API/TouchEvent/metaKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob die Meta-Taste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- [`TouchEvent.shiftKey`](/de/docs/Web/API/TouchEvent/shiftKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob die Umschalttaste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- [`TouchEvent.targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) von allen [`Touch`](/de/docs/Web/API/Touch)-Objekten, die sich sowohl derzeit in Kontakt mit der Berührungsoberfläche befinden **als auch** auf demselben Element gestartet wurden, das das Ziel des Ereignisses ist.
- [`TouchEvent.touches`](/de/docs/Web/API/TouchEvent/touches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) von allen [`Touch`](/de/docs/Web/API/Touch)-Objekten, die alle aktuellen Berührungspunkte mit der Oberfläche darstellen, unabhängig vom Ziel oder geänderten Status.
- [`TouchEvent.rotation`](/de/docs/Web/API/TouchEvent/rotation) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Änderung der Rotation (in Grad) seit Beginn des Ereignisses. Positive Werte zeigen eine Drehung im Uhrzeigersinn an; negative Werte eine Drehung gegen den Uhrzeigersinn. Anfangswert: `0.0`.
- [`TouchEvent.scale`](/de/docs/Web/API/TouchEvent/scale) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Abstand zwischen zwei Digitalen seit Beginn des Ereignisses. Ausgedrückt als Gleitkomma-Vielfaches des Anfangsabstands zwischen den Digits zu Beginn des Ereignisses. Werte unter 1.0 deuten auf ein Einwärts-Ziehen (Herauszoomen) hin. Werte über 1.0 deuten auf ein Auswärts-Ziehen (Hineinzoomen) hin. Anfangswert: `1.0`.

## Touch-Ereignistypen

Es gibt mehrere Arten von Ereignissen, die ausgelöst werden können, um anzuzeigen, dass berührungsbezogene Änderungen aufgetreten sind. Sie können feststellen, welches dieser Ereignisse aufgetreten ist, indem Sie die [`TouchEvent.type`](/de/docs/Web/API/Event/type)-Eigenschaft des Ereignisses betrachten.

- [`touchstart`](/de/docs/Web/API/Element/touchstart_event)
  - : Wird gesendet, wenn der Benutzer einen Berührungspunkt auf der Berührungsoberfläche platziert.
    Das Ziel des Ereignisses wird das [`Element`](/de/docs/Web/API/Element) sein, in dem die Berührung stattfand.
- [`touchend`](/de/docs/Web/API/Element/touchend_event)

  - : Wird gesendet, wenn der Benutzer einen Berührungspunkt von der Oberfläche entfernt;
    das heißt, wenn er einen Finger oder Stift von der Oberfläche abhebt.
    Dies wird ebenfalls gesendet,
    wenn der Berührungspunkt den Rand der Oberfläche verlässt;
    zum Beispiel, wenn der Finger des Benutzers über den Rand des Bildschirms gleitet.

    Das Ziel des Ereignisses ist das gleiche [`Element`](/de/docs/Web/API/Element),
    das das `touchstart`-Ereignis
    für den Berührungspunkt erhalten hat,
    selbst wenn der Berührungspunkt sich außerhalb dieses Elements bewegt hat.

    Der Berührungspunkt (oder die Berührungspunkte),
    die von der Oberfläche entfernt wurden,
    finden Sie in der [`TouchList`](/de/docs/Web/API/TouchList),
    die durch das `changedTouches`-Attribut angegeben ist.

- [`touchmove`](/de/docs/Web/API/Element/touchmove_event)

  - : Wird gesendet, wenn der Benutzer einen Berührungspunkt entlang der Oberfläche bewegt.
    Das Ziel des Ereignisses ist das gleiche [`Element`](/de/docs/Web/API/Element),
    das das `touchstart`-Ereignis für den Berührungspunkt erhalten hat,
    selbst wenn der Berührungspunkt sich außerhalb dieses Elements bewegt hat.

    Dieses Ereignis wird ebenfalls gesendet,
    wenn sich die Werte der Radius-, Drehwinkel- oder Kraftattribute eines Berührungspunkts ändern.

    > [!NOTE]
    > Die Frequenz, mit der `touchmove`-Ereignisse gesendet werden, ist browser-spezifisch und kann auch von den Fähigkeiten der Hardware des Benutzers abhängen. Sie dürfen sich nicht auf eine spezifische Granularität dieser Ereignisse verlassen.

- [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)
  - : Wird gesendet, wenn ein Berührungspunkt auf irgendeine Weise unterbrochen wurde.
    Es gibt mehrere mögliche Gründe, warum dies passieren könnte
    (und die genauen Gründe variieren von Gerät zu Gerät sowie von Browser zu Browser):
    - Ein Ereignis irgendeiner Art trat auf, das die Berührung abbrach; dies könnte passieren, wenn während der Interaktion ein modales Fenster erscheint.
    - Der Berührungspunkt hat das Dokumentenfenster verlassen und sich in den UI-Bereich des Browsers, ein Plug-in oder andere externe Inhalte bewegt.
    - Der Benutzer hat mehr Berührungspunkte auf dem Bildschirm platziert, als unterstützt werden können, in diesem Fall wird der früheste [`Touch`](/de/docs/Web/API/Touch) in der [`TouchList`](/de/docs/Web/API/TouchList) abgebrochen.

### Verwendung mit addEventListener() und preventDefault()

Es ist wichtig zu beachten, dass in vielen Fällen sowohl Berührungs- als auch Mausereignisse gesendet werden (um es nicht-berührungsspezifischem Code zu ermöglichen, immer noch mit dem Benutzer zu interagieren). Wenn Sie Berührungsereignisse verwenden, sollten Sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, um zu verhindern, dass das Mausereignis ebenfalls gesendet wird.

Die Ausnahme hierfür ist Chrome, beginnend mit Version 56 (Desktop, Chrome für Android und Android Webview), wo der Standardwert für die `passive`-Option für [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event) `true` ist und Aufrufe von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) keinen Effekt haben. Um dieses Verhalten zu überschreiben, müssen Sie die `passive`-Option auf `false` setzen, wonach Aufrufe von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) wie angegeben funktionieren. Die Änderung, Listeners standardmäßig als `passive` zu behandeln, verhindert, dass der Listener das Rendering der Seite blockiert, während ein Benutzer scrollt. Eine Demo finden Sie auf der Seite von [Chrome Developer](https://developer.chrome.com/blog/passive-event-listeners/).

## Beispiel

Sehen Sie sich das [Beispiel im Hauptartikel über Touch-Ereignisse an](/de/docs/Web/API/Touch_events#example).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
- [`GestureEvent`](/de/docs/Web/API/GestureEvent)
