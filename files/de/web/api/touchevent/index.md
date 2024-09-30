---
title: TouchEvent
slug: Web/API/TouchEvent
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Touch Events")}}

Die **`TouchEvent`**-Schnittstelle stellt ein [`UIEvent`](/de/docs/Web/API/UIEvent) dar, das gesendet wird, wenn sich der Zustand der Berührungspunkte mit einer berührungsempfindlichen Oberfläche ändert. Diese Oberfläche kann z. B. ein Touchscreen oder ein Trackpad sein. Das Ereignis kann einen oder mehrere Berührungspunkte mit dem Bildschirm beschreiben und bietet Unterstützung für die Erkennung von Bewegungen, Hinzufügungen und Entfernungen von Berührungspunkten und so weiter.

Berührungen werden durch das [`Touch`](/de/docs/Web/API/Touch)-Objekt dargestellt; jede Berührung wird durch eine Position, Größe und Form, den Druck und das Ziel-Element beschrieben. Listen von Berührungen werden durch [`TouchList`](/de/docs/Web/API/TouchList)-Objekte dargestellt.

{{InheritanceDiagram}}

## Konstruktor

- [`TouchEvent()`](/de/docs/Web/API/TouchEvent/TouchEvent)
  - : Erstellt ein `TouchEvent`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem Elternteil, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`TouchEvent.altKey`](/de/docs/Web/API/TouchEvent/altKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Alt-Taste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) von allen [`Touch`](/de/docs/Web/API/Touch)-Objekten, die einzelne Berührungspunkte darstellen, deren Zustände sich zwischen dem vorherigen Berührungsereignis und diesem geändert haben.
- [`TouchEvent.ctrlKey`](/de/docs/Web/API/TouchEvent/ctrlKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Steuertaste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.metaKey`](/de/docs/Web/API/TouchEvent/metaKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Meta-Taste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.shiftKey`](/de/docs/Web/API/TouchEvent/shiftKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Umschalt-Taste gedrückt war, als das Berührungsereignis ausgelöst wurde.
- [`TouchEvent.targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) von allen [`Touch`](/de/docs/Web/API/Touch)-Objekten, die sowohl derzeit in Kontakt mit der Berührungsoberfläche sind **als auch** auf demselben Element gestartet wurden, das das Ziel des Ereignisses ist.
- [`TouchEvent.touches`](/de/docs/Web/API/TouchEvent/touches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) von allen [`Touch`](/de/docs/Web/API/Touch)-Objekten, die alle aktuellen Berührungspunkte mit der Oberfläche darstellen, unabhängig von Ziel oder geändertem Status.
- [`TouchEvent.rotation`](/de/docs/Web/API/TouchEvent/rotation) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Änderung der Rotation (in Grad) seit Beginn des Ereignisses. Positive Werte zeigen eine Drehung im Uhrzeigersinn an; negative Werte eine Drehung gegen den Uhrzeigersinn. Anfangswert: `0.0`.
- [`TouchEvent.scale`](/de/docs/Web/API/TouchEvent/scale) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Abstand zwischen zwei Punkten seit Beginn des Ereignisses. Ausgedrückt als Gleitkommazahl, die das Vielfache des anfänglichen Abstands zwischen den Punkten zu Beginn des Ereignisses darstellt. Werte unter 1,0 deuten auf ein Hinzuziehen (Herauszoomen) hin. Werte über 1,0 deuten auf ein Auseinanderziehen (Hereinzoomen) hin. Anfangswert: `1.0`.

## Berührungsereignistypen

Es gibt mehrere Arten von Ereignissen, die ausgelöst werden können, um darauf hinzuweisen, dass sich berührungsbezogene Änderungen ereignet haben. Sie können bestimmen, welches dieser Ereignisse eingetreten ist, indem Sie die [`TouchEvent.type`](/de/docs/Web/API/Event/type)-Eigenschaft des Ereignisses betrachten.

- [`touchstart`](/de/docs/Web/API/Element/touchstart_event)
  - : Wird gesendet, wenn der Benutzer einen Berührungspunkt auf die Berührungsoberfläche legt. Das Ziel des Ereignisses ist das [`element`](/de/docs/Web/API/Element), in dem die Berührung stattgefunden hat.
- [`touchend`](/de/docs/Web/API/Element/touchend_event)

  - : Wird gesendet, wenn der Benutzer einen Berührungspunkt von der Oberfläche entfernt; das heißt, wenn er einen Finger oder Stift von der Oberfläche hebt. Dies wird auch gesendet, wenn der Berührungspunkt vom Rand der Oberfläche verschoben wird; z. B. wenn der Finger des Benutzers über den Rand des Bildschirms gleitet.

    Das Ziel des Ereignisses ist dasselbe [`element`](/de/docs/Web/API/Element), das das `touchstart`-Ereignis für den Berührungspunkt empfangen hat, selbst wenn der Berührungspunkt außerhalb dieses Elements verschoben wurde.

    Die Berührungspunkte, die von der Oberfläche entfernt wurden, finden sich in der [`TouchList`](/de/docs/Web/API/TouchList), die durch das `changedTouches`-Attribut angegeben ist.

- [`touchmove`](/de/docs/Web/API/Element/touchmove_event)

  - : Wird gesendet, wenn der Benutzer einen Berührungspunkt entlang der Oberfläche bewegt. Das Ziel des Ereignisses ist dasselbe [`element`](/de/docs/Web/API/Element), das das `touchstart`-Ereignis für den Berührungspunkt empfangen hat, selbst wenn der Berührungspunkt außerhalb dieses Elements verschoben wurde.

    Dieses Ereignis wird auch gesendet, wenn sich die Werte des Radius, des Drehwinkels oder der Kraftattribute eines Berührungspunktes ändern.

    > [!NOTE]
    > Die Rate, mit der `touchmove`-Ereignisse gesendet werden, ist browserabhängig und kann auch je nach Fähigkeit der Hardware des Benutzers variieren. Sie dürfen sich nicht auf eine spezifische Granularität dieser Ereignisse verlassen.

- [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)

  - : Wird gesendet, wenn ein Berührungspunkt auf irgendeine Weise unterbrochen wurde. Es gibt mehrere mögliche Gründe, warum dies passieren könnte (und die genauen Gründe variieren je nach Gerät und Browser):

    - Ein Ereignis irgendeiner Art ist aufgetreten, das die Berührung abgebrochen hat; dies könnte passieren, wenn während der Interaktion ein modaler Alarm angezeigt wird.
    - Der Berührungspunkt hat das Dokumentfenster verlassen und sich in den Browser-UI-Bereich, ein Plugin oder andere externe Inhalte bewegt.
    - Der Benutzer hat mehr Berührungspunkte auf den Bildschirm gelegt, als unterstützt werden können, in welchem Fall die früheste [`Touch`](/de/docs/Web/API/Touch) in der [`TouchList`](/de/docs/Web/API/TouchList) abgebrochen wird.

### Verwendung mit addEventListener() und preventDefault()

Es ist wichtig zu beachten, dass in vielen Fällen sowohl Berührungs- als auch Mausereignisse gesendet werden (um nicht berührungsspezifischem Code die Interaktion mit dem Benutzer zu ermöglichen). Wenn Sie Berührungsereignisse verwenden, sollten Sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, um zu verhindern, dass das Mausereignis ebenfalls gesendet wird.

Die Ausnahme hierzu bildet Chrome ab Version 56 (Desktop, Chrome für Android und Android WebView), bei dem der Standardwert für die `passive`-Option für [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event) `true` ist und Aufrufe von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) keine Wirkung haben. Um dieses Verhalten zu überschreiben, müssen Sie die `passive`-Option auf `false` setzen, danach funktioniert der Aufruf von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) wie angegeben. Die Änderung, Listener standardmäßig als `passive` zu behandeln, verhindert, dass der Listener das Seitenrendering blockiert, während ein Benutzer scrollt. Eine Demo ist auf der [Chrome Developer](https://developer.chrome.com/blog/passive-event-listeners/)-Seite verfügbar.

## Beispiel

Siehe das [Beispiel im Hauptartikel über Berührungsereignisse](/de/docs/Web/API/Touch_events#example).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Berührungsereignisse](/de/docs/Web/API/Touch_events)
- [`GestureEvent`](/de/docs/Web/API/GestureEvent)
