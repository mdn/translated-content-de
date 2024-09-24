---
title: TouchEvent
slug: Web/API/TouchEvent
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Touch Events")}}

Die **`TouchEvent`** Schnittstelle stellt ein {{domxref("UIEvent")}} dar, das gesendet wird, wenn sich der Zustand von Berührungspunkten auf einer berührungsempfindlichen Oberfläche ändert. Diese Oberfläche kann beispielsweise ein Touchscreen oder ein Trackpad sein. Das Ereignis kann einen oder mehrere Berührungspunkte mit dem Bildschirm beschreiben und unterstützt die Erkennung von Bewegungen, das Hinzufügen und Entfernen von Berührungspunkten und so weiter.

Berührungen werden durch das {{domxref("Touch")}} Objekt dargestellt; jede Berührung wird durch eine Position, Größe und Form, Druckmenge und Ziel-Element beschrieben. Listen von Berührungen werden durch {{domxref("TouchList")}} Objekte dargestellt.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("TouchEvent.TouchEvent", "TouchEvent()")}}
  - : Erstellt ein `TouchEvent` Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem übergeordneten Objekt, {{domxref("UIEvent")}} und {{domxref("Event")}}._

- {{domxref("TouchEvent.altKey")}} {{ReadOnlyInline}}
  - : Ein Boolescher Wert, der angibt, ob die Alt-Taste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- {{domxref("TouchEvent.changedTouches")}} {{ReadOnlyInline}}
  - : Eine {{domxref("TouchList")}} von allen {{domxref("Touch")}} Objekten, die einzelne Berührungspunkte repräsentieren, deren Zustände sich zwischen dem vorherigen und diesem Touch-Ereignis geändert haben.
- {{domxref("TouchEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : Ein Boolescher Wert, der angibt, ob die Strg-Taste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- {{domxref("TouchEvent.metaKey")}} {{ReadOnlyInline}}
  - : Ein Boolescher Wert, der angibt, ob die Meta-Taste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- {{domxref("TouchEvent.shiftKey")}} {{ReadOnlyInline}}
  - : Ein Boolescher Wert, der angibt, ob die Shift-Taste gedrückt war, als das Touch-Ereignis ausgelöst wurde.
- {{domxref("TouchEvent.targetTouches")}} {{ReadOnlyInline}}
  - : Eine {{domxref("TouchList")}} von allen {{domxref("Touch")}} Objekten, die sich derzeit sowohl in Kontakt mit der Berührungsoberfläche befinden **als auch** auf dem gleichen Element begonnen wurden, das das Ziel des Ereignisses ist.
- {{domxref("TouchEvent.touches")}} {{ReadOnlyInline}}
  - : Eine {{domxref("TouchList")}} von allen {{domxref("Touch")}} Objekten, die alle aktuellen Berührungspunkte mit der Oberfläche repräsentieren, unabhängig von Ziel oder geändertem Status.
- {{domxref("TouchEvent.rotation")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Änderung der Rotation (in Grad) seit Beginn des Ereignisses. Positive Werte geben eine Drehung im Uhrzeigersinn an; negative Werte eine Drehung gegen den Uhrzeigersinn. Anfangswert: `0.0`.
- {{domxref("TouchEvent.scale")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Abstand zwischen zwei Berührungspunkten seit Beginn des Ereignisses. Angegeben als Gleitkomma-Multiplikator des ursprünglichen Abstands zwischen den Berührungspunkten zu Beginn des Ereignisses. Werte unter 1.0 geben ein Einklemmen nach innen (Herauszoomen) an. Werte über 1.0 geben ein Auseinanderziehen (Hineinzoomen) an. Anfangswert: `1.0`.

## Touch-Ereignistypen

Es gibt verschiedene Arten von Ereignissen, die ausgelöst werden können, um anzuzeigen, dass touch-bezogene Änderungen stattgefunden haben. Sie können feststellen, welches davon passiert ist, indem Sie die Eigenschaft {{domxref("event.type", "TouchEvent.type")}} des Ereignisses betrachten.

- {{domxref("Element/touchstart_event", "touchstart")}}
  - : Wird gesendet, wenn der Benutzer einen Berührungspunkt auf der Berührungsoberfläche platziert. Das Ziel des Ereignisses ist das {{domxref("element")}}, in dem die Berührung stattgefunden hat.
- {{domxref("Element/touchend_event", "touchend")}}

  - : Wird gesendet, wenn der Benutzer einen Berührungspunkt von der Oberfläche entfernt; das heißt, wenn er einen Finger oder Stift von der Oberfläche hebt. Dies wird auch gesendet, wenn der Berührungspunkt vom Rand der Oberfläche wegbewegt wird; zum Beispiel, wenn der Finger des Benutzers vom Rand des Bildschirms gleitet.

    Das Ziel des Ereignisses ist das gleiche {{domxref("element")}}, das das `touchstart`-Ereignis für diesen Berührungspunkt erhalten hat, selbst wenn der Berührungspunkt sich außerhalb dieses Elements bewegt hat.

    Die Berührungspunkte, die von der Oberfläche entfernt wurden, können in der {{domxref("TouchList")}} gefunden werden, die durch das `changedTouches`-Attribut spezifiziert wird.

- {{domxref("Element/touchmove_event", "touchmove")}}

  - : Wird gesendet, wenn der Benutzer einen Berührungspunkt entlang der Oberfläche bewegt. Das Ziel des Ereignisses ist das gleiche {{domxref("element")}}, das das `touchstart`-Ereignis für diesen Berührungspunkt erhalten hat, selbst wenn der Berührungspunkt sich außerhalb dieses Elements bewegt hat.

    Dieses Ereignis wird auch gesendet, wenn sich die Werte der Radius-, Rotationswinkel- oder Kraftattribute eines Berührungspunktes ändern.

    > [!NOTE]
    > Die Häufigkeit, mit der `touchmove`-Ereignisse gesendet werden, ist browser-spezifisch und kann auch je nach den Fähigkeiten der Hardware des Benutzers variieren. Sie dürfen sich nicht auf eine bestimmte Granularität dieser Ereignisse verlassen.

- {{domxref("Element/touchcancel_event", "touchcancel")}}

  - : Wird gesendet, wenn ein Berührungspunkt auf irgendeine Weise gestört wurde. Es gibt mehrere mögliche Gründe, warum dies passieren könnte (und die genauen Gründe variieren von Gerät zu Gerät sowie von Browser zu Browser):

    - Ein Ereignis irgendeiner Art ist aufgetreten, das die Berührung abgebrochen hat; dies könnte passieren, wenn beispielsweise während der Interaktion ein modaler Hinweis angezeigt wird.
    - Der Berührungspunkt hat das Fenster des Dokuments verlassen und ist in den UI-Bereich des Browsers, ein Plug-in oder andere externe Inhalte gewechselt.
    - Der Benutzer hat mehr Berührungspunkte auf dem Bildschirm als unterstützt werden, platziert, wobei der früheste {{domxref("Touch")}} in der {{domxref("TouchList")}} abgebrochen wird.

### Verwendung mit addEventListener() und preventDefault()

Es ist wichtig zu beachten, dass in vielen Fällen sowohl Touch- als auch Mausevents gesendet werden (um es nicht-touch-spezifischem Code zu ermöglichen, dennoch mit dem Benutzer zu interagieren). Wenn Sie Touch-Ereignisse verwenden, sollten Sie {{domxref("Event.preventDefault","preventDefault()")}} aufrufen, um das Senden des Mausevents zu verhindern.

Die Ausnahme davon ist Chrome ab Version 56 (Desktop, Chrome für Android und Android-Webview), wo der Standardwert für die `passive`-Option für {{domxref("Element/touchstart_event", "touchstart")}} und {{domxref("Element/touchmove_event", "touchmove")}} `true` ist und Aufrufe von {{domxref("Event.preventDefault","preventDefault()")}} keine Wirkung haben. Um dieses Verhalten zu überschreiben, müssen Sie die `passive`-Option auf `false` setzen, wonach Aufrufe von {{domxref("Event.preventDefault","preventDefault()")}} wie erwartet funktionieren. Die Änderung, Listeners standardmäßig als `passive` zu behandeln, verhindert, dass der Listener das Rendern der Seite während des Scrollens eines Benutzers blockiert. Eine Demo ist auf der [Chrome Developer](https://developer.chrome.com/blog/passive-event-listeners/) Webseite verfügbar.

## Beispiel

Siehe das [Beispiel im Hauptartikel über Berührungsevents](/de/docs/Web/API/Touch_events#example).

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
- {{domxref("GestureEvent")}}
