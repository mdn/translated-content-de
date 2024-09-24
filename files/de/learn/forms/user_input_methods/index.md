---
title: Methoden und Steuerungen für Benutzereingaben
slug: Learn/Forms/User_input_methods
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{LearnSidebar}}

Webformulare erfordern Benutzereingaben. Bei der Gestaltung von Webformularen oder jeglichen Webinhalten ist es wichtig zu berücksichtigen, wie Benutzer mit ihren Geräten und Browsern interagieren. Webbenutzereingaben gehen über einfache Maus- und Tastatureingaben hinaus: Denken Sie zum Beispiel an Touchscreens.

In diesem Artikel werfen wir einen Blick auf die verschiedenen Möglichkeiten, wie Benutzer mit Formularen und anderen Webinhalten interagieren, und geben Empfehlungen zur Verwaltung von Benutzereingaben, praxisnahe Beispiele und Links zu weiteren Informationen.

Wenn Sie komplexere und interaktivere Formulare oder andere Benutzeroberflächen-Features entwickeln, gibt es viele HTML-Elemente und JavaScript-APIs, die Sie untersuchen möchten. Beispielsweise könnten Sie benutzerdefinierte Formularelemente erstellen wollen, die nicht-semantische Elemente benötigen, damit sie redigierbar sind. Sie könnten Touch-Ereignisse unterstützen, die Bildschirmorientierung bestimmen oder steuern, ein Formular im Vollbildmodus anzeigen oder Drag-and-Drop-Funktionen aktivieren. Dieser Leitfaden führt in all diese Funktionen ein und weist auf weiterführende Informationen zu jedem Thema hin.

Um ein gutes Erlebnis für die größtmögliche Anzahl von Benutzern zu bieten, sollten Sie mehrere Eingabemethoden unterstützen, einschließlich Maus, Tastatur, Fingerberührung und so weiter. Die verfügbaren Eingabemechanismen hängen von den Fähigkeiten des Geräts ab, das die Anwendung ausführt.

Sie sollten stets auf die Tastenbarrierefreiheit achten — viele Webnutzer navigieren nur mit der Tastatur durch Websites und Apps, und ihnen den Zugang zu Ihrer Funktionalität zu verwehren, ist keine gute Idee.

## Behandelte Themen

- Zur Unterstützung von Touchscreen-Anzeigen interpretieren [Touch-Ereignisse](/de/docs/Web/API/Touch_events) Fingeraktivitäten auf touchbasierten Benutzeroberflächen von mobilen Geräten bis hin zu Kühlschrank-Panels und Museumskiosk-Anzeigen.
- Die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) ermöglicht es Ihnen, Ihre Inhalte im Vollbildmodus anzuzeigen, was erforderlich sein kann, wenn Ihr Formular auf einem Kühlschrank oder Museumskiosk serviert wird.
- Wenn Sie ein benutzerdefiniertes Formularelement erstellen müssen, wie etwa einen Rich-Text-Editor, ermöglicht das [`contentEditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut das Erstellen von editierbaren Steuerungen aus normalerweise nicht editierbaren HTML-Elementen.
- Die [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) ermöglicht es Benutzern, Elemente auf einer Seite zu ziehen und an anderen Stellen abzulegen. Dies kann die Benutzererfahrung beim Auswählen von Dateien zum Hochladen oder beim Umsortieren von Inhaltsmodulen innerhalb einer Seite verbessern.
- Wenn die Bildschirmorientierung für Ihr Layout wichtig ist, können Sie [CSS-Media-Abfragen](/de/docs/Web/CSS/@media/orientation) verwenden, um Ihre Formulare basierend auf der Browserorientierung zu gestalten, oder sogar die [Screen Orientation API](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) verwenden, um den Bildschirmorientierungsstatus zu lesen und andere Aktionen auszuführen.

Die folgenden Abschnitte bieten eine Reihe von Empfehlungen und Best Practices, um die größtmögliche Anzahl von Benutzern dabei zu unterstützen, Ihre Websites und Anwendungen zu nutzen.

## Unterstützung gängiger Eingabemechanismen

### Tastatur

Die meisten Benutzer werden eine Tastatur verwenden, um Daten in Ihre Formularelemente einzugeben. Einige werden auch die Tastatur nutzen, um zu diesen Formularelementen zu navigieren. Um barrierefrei zu sein und für eine bessere Benutzererfahrung, ist es wichtig, [alle Formularelemente korrekt zu beschriften](/de/docs/Learn/Forms/Your_first_form#the_label_input_and_textarea_elements). Wenn jedes Formularelement korrekt mit einem {{htmlelement("label")}} verbunden ist, ist Ihr Formular für alle zugänglich, insbesondere für Personen, die es mit einer Tastatur, einem Screenreader und möglicherweise ganz ohne Bildschirm navigieren.

Wenn Sie zusätzliche Tastaturunterstützung hinzufügen möchten, z.B. eine Validierung eines Formularelements, wenn eine bestimmte Taste gedrückt wird, können Sie Ereignishandler verwenden, um auf Tastenereignisse zu reagieren. Beispielweise, wenn Sie Steuerelemente hinzufügen möchten, wenn eine beliebige Taste gedrückt wird, müssen Sie einen Ereignishandler auf dem Fensterobjekt hinzufügen:

```js
window.addEventListener("keydown", handleKeyDown, true);
window.addEventListener("keyup", handleKeyUp, true);
```

`handleKeyDown` und `handleKeyUp` sind Funktionen, die die Steuerlogik definieren, die ausgeführt wird, wenn die `keydown` und `keyup` Ereignisse ausgelöst werden.

> [!NOTE]
> Schauen Sie sich die [Ereignisreferenz](/de/docs/Web/Events) und den [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) Leitfaden an, um mehr über Tastenereignisse zu erfahren.

### Maus

Sie können auch Maus- und andere Zeigegeräteereignisse erfassen. Die Ereignisse, die auftreten, wenn der Benutzer mit einem Zeigegerät wie einer Maus interagiert, werden durch das [`MouseEvent`](/de/docs/Web/API/MouseEvent) DOM-Interface dargestellt. Zu den gängigen Mauserereignissen gehören [`click`](/de/docs/Web/API/Element/click_event), [`dblclick`](/de/docs/Web/API/Element/dblclick_event), [`mouseup`](/de/docs/Web/API/Element/mouseup_event) und [`mousedown`](/de/docs/Web/API/Element/mousedown_event). Die vollständige Liste der Ereignisse, die das MousEvent-Interface verwenden, finden Sie in der [Ereignisreferenz](/de/docs/Web/Events).

Wenn das Eingabegerät eine Maus ist, können Sie auch die Benutzereingaben über die Pointer Lock API steuern und Drag & Drop implementieren (siehe unten). Sie können auch [CSS verwenden, um die Unterstützung von Zeigegeräten zu testen](/de/docs/Learn/CSS/CSS_layout/Media_queries#use_of_pointing_devices).

### Fingerberührung

Um zusätzliche Unterstützung für Touchscreengeräte bereitzustellen, ist es eine gute Praxis, die unterschiedlichen Fähigkeiten in Bezug auf Bildschirmauflösung und Benutzereingabe zu berücksichtigen. [Touch-Ereignisse](/de/docs/Web/API/Touch_events) können Ihnen helfen, interaktive Elemente und allgemeine Interaktionsgesten auf Touchscreengeräten zu implementieren.

Wenn Sie Touch-Ereignisse einsetzen möchten, müssen Sie Ereignishandler hinzufügen und Handler-Funktionen angeben, die aufgerufen werden, wenn das Ereignis ausgelöst wird:

```js
element.addEventListener("touchstart", handleStart, false);
element.addEventListener("touchcancel", handleCancel, false);
element.addEventListener("touchend", handleEnd, false);
element.addEventListener("touchmove", handleMove, false);
```

wobei `element` das DOM-Element ist, auf dem Sie die Touch-Ereignisse registrieren möchten.

> [!NOTE]
> Weitere Informationen darüber, was Sie mit Touch-Ereignissen machen können, finden Sie in unserem [Touch-Ereignisse Leitfaden](/de/docs/Web/API/Touch_events).

### Zeigerereignisse

Mäuse sind nicht die einzigen Zeigegeräte. Die Geräte Ihrer Benutzer können mehrere Eingabemethoden umfassen, wie Maus, Fingerberührung und Stifteingabe. Jeder dieser Zeiger hat eine unterschiedliche Größe. Die [Pointer Events API](/de/docs/Web/API/Pointer_events) kann nützlich sein, wenn Sie Ereignisse geräteübergreifend verwalten müssen, indem Sie die Behandlung jedes einzelnen normalisieren. Ein Zeiger kann jeder Kontaktpunkt am Bildschirm sein, der durch einen Mauszeiger, einen Stift, eine Berührung (einschließlich Multi-Touch) oder ein anderes Zeigereingabegerät erfolgt.

Die Ereignisse zur Behandlung generischer Zeigereingaben ähneln denen für die Maus: `pointerdown`, `pointermove`, `pointerup`, `pointerover`, `pointerout`, usw. Das [`PointerEvent` Interface](/de/docs/Web/API/PointerEvent) bietet alle Details, die Sie möglicherweise über das Zeigereingabegerät erfassen möchten, einschließlich seiner Größe, seines Drucks und seines Winkels.

## Steuerungen implementieren

### Bildschirmorientierung

Wenn Sie leicht unterschiedliche Layouts benötigen, je nachdem, ob der Benutzer im Hoch- oder Querformat ist, können Sie [CSS-Media-Abfragen](/de/docs/Learn/CSS/CSS_layout/Media_queries#media_feature_rules) verwenden, um CSS für unterschiedliche Layouts oder Formularelementbreiten basierend auf der Größe oder Ausrichtung des Bildschirms beim [Gestalten von Webformularen](/de/docs/Learn/Forms/Styling_web_forms) zu definieren.

Wenn die Bildschirmorientierung für Ihr Formular wichtig ist, können Sie den Bildschirmorientierungsstatus lesen, informiert werden, wenn sich dieser ändert, und die Bildschirmorientierung auf einen bestimmten Zustand (in der Regel Hoch- oder Querformat) über die [Screen Orientation API](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) sperren.

- Orientierungsdaten können über [`screenOrientation.type`](/de/docs/Web/API/ScreenOrientation/type) oder mit CSS durch das [`orientation`](/de/docs/Web/CSS/@media/orientation) Medienmerkmal abgerufen werden.
- Wenn sich die Bildschirmorientierung ändert, wird das [`change`](/de/docs/Web/API/ScreenOrientation/change_event) Ereignis für das Bildschirmobjekt ausgelöst.
- Das Sperren der Bildschirmorientierung ist möglich, indem die Methode [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) aufgerufen wird.
- Die Methode [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) entfernt alle vorher festgelegten Bildschirmsperren.

> [!NOTE]
> Weitere Informationen zur Screen Orientation API finden Sie unter [Bildschirmorientierung verwalten](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation).

### Vollbildmodus

Wenn Sie Ihr Formular im Vollbildmodus präsentieren müssen, z.B. wenn Ihr Formular auf einem Museumskiosk, einem Mautstellen- oder tatsächlich in einer öffentlich angezeigten Benutzeroberfläche dargestellt wird, ist dies möglich, indem Sie [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) für dieses Element aufrufen:

```js
const elem = document.getElementById("myForm");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

> [!NOTE]
> Um mehr über das Hinzufügen von Vollbildfunktionalität zu Ihrer Anwendung zu erfahren, lesen Sie unsere Dokumentation über [die Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API).

### Drag & Drop

Eine häufige Benutzerinteraktion ist das physische Ziehen von Elementen, die an anderer Stelle auf dem Bildschirm abgelegt werden sollen. Drag and Drop kann die Benutzererfahrung beim Auswählen von Dateien zum Hochladen oder beim Umsortieren von Inhaltsmodulen innerhalb einer Seite verbessern. Dafür gibt es eine API!

Die [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API) API ermöglicht es Benutzern, ein Element durch Klicken und Gedrückthalten der Maustaste zu ziehen, es an einen anderen Ort zu verschieben und die Maustaste loszulassen, um das Element dort abzulegen.

Hier ist ein Beispiel, das es ermöglicht, einen Inhaltsabschnitt zu ziehen.

```html
<div
  draggable="true"
  ondragstart="event.dataTransfer.setData('text/plain', 'This text may be dragged')">
  This text <strong>may</strong> be dragged.
</div>
```

in dem wir:

- Das Attribut [`draggable`](/de/docs/Web/HTML/Global_attributes/draggable) auf `true` für das Element setzen, das Sie verschiebbar machen möchten.
- Einen Listener für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignis hinzufügen und die Drag-Daten innerhalb dieses Listeners setzen.

> [!NOTE]
> Weitere Informationen finden Sie in der [MDN Drag & Drop Dokumentation](/de/docs/Web/API/HTML_Drag_and_Drop_API).

### contentEditable

Im Allgemeinen sollten Sie ein {{HTMLElement("textarea")}} oder einen entsprechenden {{HTMLElement("input")}} Typ innerhalb eines {{HTMLElement("form")}} verwenden, um Daten von Benutzern zu sammeln, zusammen mit einem beschreibenden {{HTMLElement("label")}}. Aber diese Elemente erfüllen möglicherweise nicht Ihre Anforderungen. Zum Beispiel erfassen Rich-Text-Editoren kursiven, fetten und normalen Text, aber keine native Formularelement erfasst Rich-Text. Dieser Anwendungsfall erfordert es, ein benutzerdefiniertes Steuerelement zu erstellen, das sowohl stilisierbar als auch editierbar ist. Dafür gibt es ein Attribut!

Jedes DOM-Element kann direkt editierbar gemacht werden, indem das [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut verwendet wird.

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

Das `contenteditable` Attribut fügt das Element automatisch der Standardtabulatorreihenfolge des Dokuments hinzu, was bedeutet, dass das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) Attribut nicht hinzugefügt werden muss. Wenn jedoch nicht-semantische Elemente für die Dateneingabe bei der [Erstellung Ihrer eigenen Formularelemente](/de/docs/Learn/Forms/How_to_build_custom_form_controls) verwendet werden, müssen Sie JavaScript und [ARIA](/de/docs/Web/Accessibility/ARIA) hinzufügen, um das Element mit Formularkontrollfunktionalität für alles andere auszustatten.

Um ein gutes Benutzererlebnis zu bieten, muss jedes benutzerdefinierte Formularelement, das Sie erstellen, zugänglich sein und wie native Formularelemente funktionieren:

- Die [`role`](/de/docs/Web/Accessibility/ARIA/Roles), [label](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) und [description](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) des Elements müssen mit ARIA hinzugefügt werden.
- Alle Benutzereingabemethoden müssen unterstützt werden, einschließlich [Tastatur](#tastatur), [Maus](#maus), [Berührung](#fingerberührung) und [Zeiger](#zeigerereignisse) Ereignisse, die oben beschrieben sind.
- JavaScript ist erforderlich, um Funktionalitäten wie [Validierung](/de/docs/Learn/Forms/Form_validation), [Einreichung](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) und [Speicherung](/de/docs/Learn/Forms/Sending_forms_through_JavaScript) von benutzeraktualisierten Inhalten zu verwalten.

{{EmbedLiveSample("contentEditable")}}

> [!NOTE]
> Beispiele und weitere Ressourcen finden Sie im [Content Editable Leitfaden](/de/docs/Web/HTML/Global_attributes/contenteditable).

## Tutorials

- [Leitfaden für Touch-Ereignisse](/de/docs/Web/API/Touch_events)
- [Bildschirmorientierung verwalten](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Vollbildmodus verwenden](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden für Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Formulare durch JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)

## Referenz

- [`MouseEvent`](/de/docs/Web/API/MouseEvent) Interface
- [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) Interface
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events) API
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API) API
- [Bildschirmorientierungs-](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) API
- [Vollbild-](/de/docs/Web/API/Fullscreen_API) API
- [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API) API
- HTML [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut
