---
title: TouchEvent
slug: Web/API/TouchEvent
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Touch Events")}}

Die **`TouchEvent`**-Schnittstelle repräsentiert ein [`UIEvent`](/de/docs/Web/API/UIEvent), das gesendet wird, wenn sich der Zustand von Kontakten mit einer berührungsempfindlichen Oberfläche ändert. Diese Oberfläche kann beispielsweise ein Touchscreen oder ein Trackpad sein. Das Ereignis kann einen oder mehrere Berührungspunkte auf dem Bildschirm beschreiben und unterstützt die Erkennung von Bewegung, Hinzufügen und Entfernen von Berührungspunkten usw.

Berührungen werden durch das [`Touch`](/de/docs/Web/API/Touch)-Objekt dargestellt; jede Berührung wird durch eine Position, Größe und Form, den Druck und das Zielelement beschrieben. Listen von Berührungen werden durch [`TouchList`](/de/docs/Web/API/TouchList)-Objekte repräsentiert.

{{InheritanceDiagram}}

## Konstruktor

- [`TouchEvent()`](/de/docs/Web/API/TouchEvent/TouchEvent)
  - : Erstellt ein `TouchEvent`-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihren Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`TouchEvent.altKey`](/de/docs/Web/API/TouchEvent/altKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Alt-Taste gedrückt war, als das Touch-Event ausgelöst wurde.
- [`TouchEvent.changedTouches`](/de/docs/Web/API/TouchEvent/changedTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) aller [`Touch`](/de/docs/Web/API/Touch)-Objekte, die einzelne Berührungspunkte repräsentieren, deren Zustände sich zwischen dem vorherigen Touch-Event und diesem geändert haben.
- [`TouchEvent.ctrlKey`](/de/docs/Web/API/TouchEvent/ctrlKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Strg-Taste gedrückt war, als das Touch-Event ausgelöst wurde.
- [`TouchEvent.metaKey`](/de/docs/Web/API/TouchEvent/metaKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Meta-Taste gedrückt war, als das Touch-Event ausgelöst wurde.
- [`TouchEvent.shiftKey`](/de/docs/Web/API/TouchEvent/shiftKey) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Umschalttaste gedrückt war, als das Touch-Event ausgelöst wurde.
- [`TouchEvent.targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) aller [`Touch`](/de/docs/Web/API/Touch)-Objekte, die sich derzeit in Kontakt mit der Berührungsoberfläche befinden **und** auch auf demselben Element begonnen haben, das das Ziel des Ereignisses ist.
- [`TouchEvent.touches`](/de/docs/Web/API/TouchEvent/touches) {{ReadOnlyInline}}
  - : Eine [`TouchList`](/de/docs/Web/API/TouchList) aller [`Touch`](/de/docs/Web/API/Touch)-Objekte, die alle aktuellen Berührungspunkte mit der Oberfläche, unabhängig von Ziel oder geändertem Status, repräsentieren.
- [`TouchEvent.rotation`](/de/docs/Web/API/TouchEvent/rotation) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Änderung der Rotation (in Grad) seit Beginn des Ereignisses. Positive Werte zeigen eine Drehung im Uhrzeigersinn an; negative Werte zeigen eine Drehung gegen den Uhrzeigersinn an. Anfangswert: `0.0`.
- [`TouchEvent.scale`](/de/docs/Web/API/TouchEvent/scale) {{non-standard_inline()}} {{ReadOnlyInline}}
  - : Abstand zwischen zwei Berührungspunkten seit Beginn des Ereignisses. Ausgedrückt als Gleitkomma-Multiplikator des Anfangsabstands zwischen den Berührungspunkten zu Beginn des Ereignisses. Werte unter 1.0 deuten auf ein Zusammenziehen (Herauszoomen) hin. Werte über 1.0 deuten auf ein Auseinanderziehen (Hineinzoomen) hin. Anfangswert: `1.0`.

## Arten von Touch-Ereignissen

Es gibt mehrere Arten von Ereignissen, die ausgelöst werden können, um anzuzeigen, dass touch-bezogene Änderungen aufgetreten sind. Sie können feststellen, welches davon aufgetreten ist, indem Sie die [`TouchEvent.type`](/de/docs/Web/API/Event/type)-Eigenschaft des Ereignisses überprüfen.

- [`touchstart`](/de/docs/Web/API/Element/touchstart_event)
  - : Wird gesendet, wenn der Benutzer einen Berührungspunkt auf die Berührungsoberfläche legt.
    Das Ziel des Ereignisses ist das [`Element`](/de/docs/Web/API/Element), in dem die Berührung aufgetreten ist.
- [`touchend`](/de/docs/Web/API/Element/touchend_event)

  - : Wird gesendet, wenn der Benutzer einen Berührungspunkt von der Oberfläche entfernt;
    also, wenn er einen Finger oder Stift von der Oberfläche hebt.
    Dies wird auch gesendet,
    wenn der Berührungspunkt den Rand der Oberfläche verlässt;
    zum Beispiel, wenn der Finger des Benutzers vom Rand des Bildschirms rutscht.

    Das Ziel des Ereignisses ist dasselbe [`Element`](/de/docs/Web/API/Element),
    das das `touchstart`-Ereignis
    erhalten hat, das dem Berührungspunkt entspricht,
    auch wenn sich der Berührungspunkt außerhalb dieses Elements bewegt hat.

    Der (oder die) Berührungspunkt(e),
    die von der Oberfläche entfernt wurden,
    finden sich in der [`TouchList`](/de/docs/Web/API/TouchList),
    die durch das `changedTouches`-Attribut angegeben ist.

- [`touchmove`](/de/docs/Web/API/Element/touchmove_event)

  - : Wird gesendet, wenn der Benutzer einen Berührungspunkt über die Oberfläche bewegt.
    Das Ziel des Ereignisses ist dasselbe [`Element`](/de/docs/Web/API/Element),
    das das `touchstart`-Ereignis empfing,
    das dem Berührungspunkt entspricht,
    auch wenn sich der Berührungspunkt außerhalb dieses Elements bewegt hat.

    Dieses Ereignis wird auch gesendet,
    wenn sich die Werte des Radius, des Rotationswinkels oder der Kraftattribute eines Berührungspunktes ändern.

    > [!NOTE]
    > Die Häufigkeit, mit der `touchmove`-Ereignisse gesendet werden, ist browserspezifisch und kann auch je nach Leistungsfähigkeit der Hardware des Benutzers variieren. Sie dürfen sich nicht auf eine spezifische Granularität dieser Ereignisse verlassen.

- [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)

  - : Wird gesendet, wenn ein Berührungspunkt auf irgendeine Weise gestört wurde.
    Es gibt mehrere mögliche Gründe, warum dies geschehen könnte
    (und die genauen Gründe variieren von Gerät zu Gerät sowie von Browser zu Browser):

    - Ein Ereignis einer Art trat auf, das die Berührung abbricht; dies könnte passieren, wenn während der Interaktion ein modaler Alarm erscheint.
    - Der Berührungspunkt hat das Dokumentfenster verlassen und ist in den UI-Bereich des Browsers, ein Plug-in oder andere externe Inhalte gewechselt.
    - Der Benutzer hat mehr Berührungspunkte auf den Bildschirm gesetzt, als unterstützt werden können, in welchem Fall der früheste [`Touch`](/de/docs/Web/API/Touch) in der [`TouchList`](/de/docs/Web/API/TouchList) abgebrochen wird.

### Verwendung mit addEventListener() und preventDefault()

Es ist wichtig zu beachten, dass in vielen Fällen sowohl Berührungs- als auch Mausereignisse gesendet werden (um nicht berührungsspezifischem Code weiterhin die Interaktion mit dem Benutzer zu ermöglichen). Wenn Sie Berührungsereignisse verwenden, sollten Sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, um zu verhindern, dass das Mausereignis ebenfalls gesendet wird.

Die Ausnahme dazu ist Chrome ab Version 56 (Desktop, Chrome für Android und Android Webview), wo der Standardwert für die `passive`-Option für [`touchstart`](/de/docs/Web/API/Element/touchstart_event) und [`touchmove`](/de/docs/Web/API/Element/touchmove_event) `true` ist und Aufrufe von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) keine Wirkung haben. Um dieses Verhalten zu überschreiben, müssen Sie die `passive`-Option auf `false` setzen, danach wird der Aufruf von [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) wie spezifiziert funktionieren. Die Änderung, Listeners standardmäßig als `passive` zu behandeln, verhindert, dass der Listener das Seitenrendering blockiert, während ein Benutzer scrollt. Eine Demo ist auf der [Chrome Developer](https://developer.chrome.com/blog/passive-event-listeners/) Seite verfügbar.

## Beispiel

Siehe das [Beispiel im Hauptartikel zu Berührungsereignissen](/de/docs/Web/API/Touch_events#example).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Berührungsereignisse](/de/docs/Web/API/Touch_events)
- [`GestureEvent`](/de/docs/Web/API/GestureEvent)
