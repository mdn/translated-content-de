---
title: Methoden und Steuerungen für Benutzereingaben
slug: Learn_web_development/Extensions/Forms/User_input_methods
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{LearnSidebar}}

Webformulare erfordern Benutzereingaben. Beim Entwerfen von Webformularen oder generell von Webinhalten ist es wichtig, daran zu denken, wie Benutzer mit ihren Geräten und Browsern interagieren. Die Web-Benutzereingabe geht über einfache Maus- und Tastatureingaben hinaus: Denken Sie zum Beispiel an Touchscreens.

In diesem Artikel betrachten wir die verschiedenen Möglichkeiten, wie Benutzer mit Formularen und anderen Webinhalten interagieren, und geben Empfehlungen für die Verwaltung von Benutzereingaben, reale Beispiele und Links zu weiteren Informationen.

Wenn Sie komplexere und interaktivere Formulare oder andere UI-Funktionen entwickeln, gibt es viele HTML-Elemente und JavaScript-APIs, die Sie untersuchen möchten. Zum Beispiel möchten Sie benutzerdefinierte Formularelemente erstellen, die nicht-semantische Elemente benötigen, um bearbeitbar zu sein. Sie möchten möglicherweise Touch-Ereignisse unterstützen, die Ausrichtung des Bildschirms bestimmen oder steuern, ein Formular im Vollbildmodus darstellen oder Drag-and-Drop-Funktionen aktivieren. Dieser Leitfaden führt alle diese Funktionen ein und leitet Sie zu weiteren Informationen zu jedem Thema weiter.

Um eine gute Erfahrung für die größte Anzahl von Benutzern zu bieten, müssen Sie mehrere Eingabemethoden unterstützen, einschließlich Maus, Tastatur, Fingerberührung und so weiter. Die verfügbaren Eingabemechanismen hängen von den Fähigkeiten des Geräts ab, auf dem die Anwendung läuft.

Sie sollten immer an die Tastaturzugänglichkeit denken — viele Webbenutzer verwenden nur die Tastatur, um Websites und Apps zu navigieren, und es wäre keine gute Idee, sie von Ihren Funktionen auszuschließen.

## Behandelte Themen

- Um Touchscreen-Anzeigen zu unterstützen, interpretieren [Touch-Ereignisse](/de/docs/Web/API/Touch_events) Fingeraktivitäten auf Touch-basierten Benutzeroberflächen von mobilen Geräten, über Kühlschrank-Displays bis hin zu Museumskiosk-Anzeigen.
- Die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) ermöglicht es Ihnen, Ihre Inhalte im Vollbildmodus anzuzeigen, was erforderlich ist, wenn Ihr Formular auf einem Kühlschrank oder Museumskiosk angezeigt wird.
- Wenn Sie ein benutzerdefiniertes Formularelement erstellen müssen, wie einen Rich-Text-Editor, ermöglicht das [`contentEditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut die Erstellung von bearbeitbaren Steuerungen aus normalerweise nicht-editierbaren HTML-Elementen.
- Die [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) ermöglicht es Benutzern, Elemente auf einer Seite zu ziehen und an verschiedenen Stellen abzulegen. Dies kann das Benutzererlebnis verbessern, wenn es darum geht, Dateien für den Upload auszuwählen oder Inhaltsmodule innerhalb einer Seite neu anzuordnen.
- Wenn Ihre Layouts von der Bildschirmausrichtung abhängen, können Sie [CSS-Media-Queries](/de/docs/Web/CSS/@media/orientation) verwenden, um Ihre Formulare basierend auf der Ausrichtung des Browsers zu gestalten, oder sogar die [Screen Orientation API](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) verwenden, um den Status der Bildschirmausrichtung zu lesen und andere Aktionen durchzuführen.

Die folgenden Abschnitte bieten eine Reihe von Empfehlungen und Best Practices, um die größtmögliche Anzahl von Benutzern zu befähigen, Ihre Websites und Anwendungen zu verwenden.

## Unterstützung gängiger Eingabemechanismen

### Tastatur

Die meisten Benutzer werden eine Tastatur verwenden, um Daten in Ihre Formularelemente einzugeben. Einige werden auch die Tastatur verwenden, um zu diesen Formularelementen zu navigieren. Um zugänglich zu sein und für ein besseres Benutzererlebnis ist es wichtig, alle Formularelemente korrekt zu [beschriften](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form#the_label_input_and_textarea_elements). Wenn jedes Formularelement mit einem korrekt zugeordneten {{htmlelement("label")}} versehen ist, wird Ihr Formular für alle vollständig zugänglich sein, insbesondere für diejenigen, die Ihr Formular mit einer Tastatur, einem Screenreader und möglicherweise überhaupt keinem Bildschirm navigieren.

Wenn Sie zusätzliche Tastaturunterstützung hinzufügen möchten, wie z.B. die Validierung eines Formularelements, wenn eine bestimmte Taste gedrückt wird, können Sie Ereignislistener verwenden, um Tastaturereignisse zu erfassen und darauf zu reagieren. Zum Beispiel, wenn Sie Steuerungen hinzufügen möchten, wenn eine beliebige Taste gedrückt wird, müssen Sie einen Ereignislistener für das Fensterobjekt hinzufügen:

```js
window.addEventListener("keydown", handleKeyDown, true);
window.addEventListener("keyup", handleKeyUp, true);
```

`handleKeyDown` und `handleKeyUp` sind Funktionen, die die Steuerlogik definieren, die ausgeführt werden soll, wenn die `keydown` und `keyup` Ereignisse ausgelöst werden.

> [!NOTE]
> Schauen Sie sich die [Ereignisreferenz](/de/docs/Web/Events) und den [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) Leitfaden an, um mehr über Tastaturereignisse zu erfahren.

### Maus

Sie können auch Maus- und andere Zeigereignisse erfassen. Die Ereignisse, die auftreten, wenn der Benutzer mit einem Zeigegerät wie einer Maus interagiert, werden durch die [`MouseEvent`](/de/docs/Web/API/MouseEvent) DOM-Schnittstelle dargestellt. Häufige Mausereignisse umfassen [`click`](/de/docs/Web/API/Element/click_event), [`dblclick`](/de/docs/Web/API/Element/dblclick_event), [`mouseup`](/de/docs/Web/API/Element/mouseup_event) und [`mousedown`](/de/docs/Web/API/Element/mousedown_event). Die Liste aller Ereignisse, die die MouseEvent-Schnittstelle verwenden, ist in der [Ereignisreferenz](/de/docs/Web/Events) aufgeführt.

Wenn das Eingabegerät eine Maus ist, können Sie auch die Benutzereingabe über die Pointer Lock API steuern und Drag & Drop implementieren (siehe unten). Sie können auch [CSS verwenden, um auf Unterstützung für Zeigereingabegeräte zu testen](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries#use_of_pointing_devices).

### Fingerberührung

Um zusätzliche Unterstützung für Touchscreen-Geräte zu bieten, ist es eine gute Praxis, die unterschiedlichen Fähigkeiten in Bezug auf Bildschirmauflösung und Benutzereingabe zu berücksichtigen. [Touch-Ereignisse](/de/docs/Web/API/Touch_events) können Ihnen helfen, interaktive Elemente und gängige Interaktionsgesten auf Touchscreen-Geräten zu implementieren.

Wenn Sie Touch-Ereignisse verwenden möchten, müssen Sie Ereignislistener hinzufügen und Handlerfunktionen angeben, die aufgerufen werden, wenn das Ereignis ausgelöst wird:

```js
element.addEventListener("touchstart", handleStart, false);
element.addEventListener("touchcancel", handleCancel, false);
element.addEventListener("touchend", handleEnd, false);
element.addEventListener("touchmove", handleMove, false);
```

wobei `element` das DOM-Element ist, auf dem Sie die Touch-Ereignisse registrieren möchten.

> [!NOTE]
> Für weitere Informationen darüber, was Sie mit Touch-Ereignissen tun können, lesen Sie bitte unseren [Touch-Ereignisse-Leitfaden](/de/docs/Web/API/Touch_events).

### Pointer Events

Mäuse sind nicht die einzigen Zeigegeräte. Die Geräte Ihrer Benutzer können mehrere Eingabeformen integrieren, wie Maus, Fingerberührung und Stifteingabe. Jeder dieser Zeiger hat eine andere Größe. Die [Pointer Events API](/de/docs/Web/API/Pointer_events) kann nützlich sein, wenn Sie Ereignisse über Geräte hinweg verwalten müssen, indem sie die Handhabung jedes einzelnen normalisiert. Ein Zeiger kann jeder Kontaktpunkt auf dem Bildschirm sein, der von einem Mauszeiger, Stift, Berührung (einschließlich Mehrfachberührung) oder einem anderen Eingabegerät kommt.

Die Ereignisse zur Handhabung generischer Zeigereingaben sehen denen für die Maus sehr ähnlich: `pointerdown`, `pointermove`, `pointerup`, `pointerover`, `pointerout`, usw. Die [`PointerEvent` Schnittstelle](/de/docs/Web/API/PointerEvent) bietet alle Details, die Sie möglicherweise über das Zeigegerät erfassen möchten, einschließlich seiner Größe, seines Drucks und seines Winkels.

## Steuerungen implementieren

### Bildschirmausrichtung

Wenn Sie leicht unterschiedliche Layouts benötigen, je nachdem ob der Benutzer sich im Hoch- oder Querformat befindet, können Sie [CSS-Media-Queries](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries#media_feature_rules) verwenden, um CSS für unterschiedliche Layouts oder Breiten von Formularelementen basierend auf der Größe oder Ausrichtung des Bildschirms zu definieren, wenn Sie [Webformulare gestalten](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms).

Wenn die Bildschirmausrichtung für Ihr Formular wichtig ist, können Sie den Zustand der Bildschirmausrichtung lesen, informiert werden, wenn sich dieser Zustand ändert und die Bildschirmausrichtung auf einen bestimmten Zustand (normalerweise Hoch- oder Querformat) durch die [Screen Orientation API](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) sperren.

- Ausrichtungsdaten können über [`screenOrientation.type`](/de/docs/Web/API/ScreenOrientation/type) oder mit CSS durch das [`orientation`](/de/docs/Web/CSS/@media/orientation) Medienmerkmal abgerufen werden.
- Wenn sich die Bildschirmausrichtung ändert, wird das [`change`](/de/docs/Web/API/ScreenOrientation/change_event) Ereignis auf dem Bildschirmobjekt ausgelöst.
- Das Sperren der Bildschirmausrichtung wird durch Aufrufen der [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) Methode ermöglicht.
- Die [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) Methode entfernt alle zuvor gesetzten Bildschirmsperren.

> [!NOTE]
> Mehr Informationen über die Screen Orientation API finden Sie unter [Managing screen orientation](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation).

### Vollbild

Wenn Sie Ihr Formular im Vollbildmodus präsentieren müssen, etwa wenn Ihr Formular auf einem Museumskiosk, einer Mautstelle oder wirklich jeder öffentlich angezeigten Benutzeroberfläche angezeigt wird, können Sie dies tun, indem Sie [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf dieses Element aufrufen:

```js
const elem = document.getElementById("myForm");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

> [!NOTE]
> Um mehr darüber zu erfahren, wie Sie Ihrer Anwendung Vollbildfunktionalität hinzufügen können, lesen Sie unsere Dokumentation über [die Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API).

### Drag & Drop

Eine übliche Benutzerinteraktion ist das physische Ziehen von Elementen, die an anderer Stelle auf dem Bildschirm abgelegt werden sollen. Drag and Drop kann das Benutzererlebnis verbessern, wenn es darum geht, Dateien für den Upload auszuwählen oder Inhaltsmodule innerhalb einer Seite neu anzuordnen. Dafür gibt es eine API!

Die [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API) API ermöglicht es Benutzern, die Maustaste über einem Element zu klicken und zu halten, es an einen anderen Ort zu ziehen und die Maustaste loszulassen, um das Element dort abzulegen.

Hier ist ein Beispiel, das es ermöglicht, einen Abschnitt von Inhalten zu ziehen.

```html
<div
  draggable="true"
  ondragstart="event.dataTransfer.setData('text/plain', 'This text may be dragged')">
  This text <strong>may</strong> be dragged.
</div>
```

in dem wir:

- Das [`draggable`](/de/docs/Web/HTML/Global_attributes/draggable) Attribut auf `true` setzen auf dem Element, das Sie verschiebbar machen möchten.
- Einen Listener für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignis hinzufügen und die Ziehdaten innerhalb dieses Listeners festlegen.

> [!NOTE]
> Sie können mehr Informationen in der [MDN Drag & Drop Dokumentation](/de/docs/Web/API/HTML_Drag_and_Drop_API) finden.

### contentEditable

Im Allgemeinen sollten Sie ein {{HTMLElement("textarea")}} oder einen geeigneten {{HTMLElement("input")}} Typ innerhalb eines {{HTMLElement("form")}} verwenden, um Daten von Benutzern zu sammeln, zusammen mit einem beschreibenden {{HTMLElement("label")}}. Aber diese Elemente erfüllen möglicherweise nicht Ihre Bedürfnisse. Zum Beispiel erfassen Rich-Text-Editoren kursiven, fetten und normalen Text, aber kein nativer Formularkontroll erlaubt es, Rich-Text zu erfassen. Dieses Anwendungsfall erfordert die Erstellung einer benutzerdefinierten Kontrolle, die stilbar _und_ editierbar ist. Dafür gibt es ein Attribut!

Jedes DOM-Element kann direkt bearbeitbar gemacht werden durch das [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut.

```css hidden
div {
  width: 300px;
  height: 130px;
  border: 1px solid gray;
}
```

```html
<div contenteditable="true">This text can be edited by the user.</div>
```

Das `contenteditable` Attribut fügt das Element automatisch der Standard-Tabsreihenfolge des Dokuments hinzu, das bedeutet, dass das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) Attribut nicht hinzugefügt werden muss. Wenn Sie jedoch nicht-semantische Elemente für die Dateneingabe verwenden, wenn Sie [eigene Formularelemente erstellen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), müssen Sie JavaScript und [ARIA](/de/docs/Web/Accessibility/ARIA) hinzufügen, um das Element mit Formularkontrollfunktionalitäten auszustatten.

Um ein gutes Benutzererlebnis zu bieten, muss jede benutzerdefinierte Formularkontrolle, die Sie erstellen, zugänglich sein und wie native Formularelemente funktionieren:

- Die [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) des Elements, [Beschriftung](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) und [Beschreibung](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) müssen mit ARIA hinzugefügt werden.
- Alle Benutzereingabemethoden müssen unterstützt werden, einschließlich [Tastatur](#tastatur), [Maus](#maus), [Berührung](#fingerberührung) und [Zeiger](#pointer_events) Ereignissen, die alle oben beschrieben sind.
- JavaScript ist erforderlich, um Funktionalitäten wie [Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation), [Übermittlung](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data), und [Speichern](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript) von benutzeraktualisierten Inhalten zu handhaben.

{{EmbedLiveSample("contentEditable")}}

> [!NOTE]
> Beispiele und andere Ressourcen finden Sie im [Content Editable Leitfaden](/de/docs/Web/HTML/Global_attributes/contenteditable).

## Tutorials

- [Touch Events Leitfaden](/de/docs/Web/API/Touch_events)
- [Verwaltung der Bildschirmausrichtung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API)
- [Drag Operationen Leitfaden](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Versenden von Formularen durch JavaScript](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)

## Referenz

- [`MouseEvent`](/de/docs/Web/API/MouseEvent) Schnittstelle
- [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) Schnittstelle
- [Touch Events](/de/docs/Web/API/Touch_events) API
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API) API
- [Bildschirmausrichtung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) API
- [Vollbild](/de/docs/Web/API/Fullscreen_API) API
- [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API) API
- HTML [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut
