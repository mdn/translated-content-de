---
title: Methoden und Steuerungen zur Benutzereingabe
short-title: UI-Methoden & Steuerungen
slug: Learn_web_development/Extensions/Forms/User_input_methods
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Webformulare erfordern Benutzereingaben. Bei der Gestaltung von Webformularen oder allgemein von Webinhalten ist es wichtig, zu berücksichtigen, wie Nutzer mit ihren Geräten und Browsern interagieren. Web-Benutzereingaben gehen über einfache Maus- und Tastaturaktionen hinaus: Denken Sie zum Beispiel an Touchscreens.

In diesem Artikel betrachten wir die verschiedenen Möglichkeiten, wie Nutzer mit Formularen und anderen Webinhalten interagieren, und geben Empfehlungen zur Verwaltung von Benutzereingaben, reale Beispiele und Links zu weiteren Informationen.

Bei der Entwicklung komplexerer und interaktiverer Formulare oder anderer UI-Funktionen gibt es viele HTML-Elemente und JavaScript-APIs, die Sie untersuchen sollten. Beispielsweise könnten Sie benutzerdefinierte Formularsteuerelemente erstellen wollen, die nicht-semantische Elemente erfordern, um inhaltlich bearbeitbar zu sein. Sie könnten Unterstützung für Touch-Events, die Bestimmung oder Steuerung der Bildschirmausrichtung, die Vollbildanzeige eines Formulars oder die Aktivierung von Drag-and-Drop-Funktionen hinzufügen wollen. Dieser Leitfaden stellt all diese Funktionen vor und leitet Sie zu weiteren Informationen zu den einzelnen Themen.

Um den größtmöglichen Nutzerkreis anzusprechen, müssen Sie mehrere Eingabemethoden unterstützen, einschließlich Maus, Tastatur, Touch-Eingabe und so weiter. Verfügbare Eingabemechanismen hängen von den Fähigkeiten des Geräts ab, das die Anwendung ausführt.

Sie sollten stets auf die Zugänglichkeit per Tastatur achten — viele Webnutzer navigieren ausschließlich mit der Tastatur durch Websites und Apps, und es wäre ein Fehler, sie von Ihrer Funktionalität auszuschließen.

## Abgedeckte Themen

- Um Touchscreens zu unterstützen, interpretieren [Touch-Events](/de/docs/Web/API/Touch_events) Fingeraktivitäten auf touchbasierten Benutzeroberflächen, von mobilen Geräten über Kühlschrankpanels bis hin zu Displays an Museumskiosks.
- Die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) ermöglicht es, Inhalte im Vollbildmodus anzuzeigen, was erforderlich ist, wenn Ihr Formular auf einem Kühlschrank oder an einem Museumskiosk bereitgestellt wird.
- Wenn Sie ein benutzerdefiniertes Formularsteuerelement erstellen müssen, wie zum Beispiel einen Rich-Text-Editor, ermöglicht das [`contentEditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut die Erstellung von bearbeitbaren Steuerelementen aus normalerweise nicht bearbeitbaren HTML-Elementen.
- Die [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) ermöglicht es Nutzern, Elemente auf einer Seite zu ziehen und an verschiedenen Stellen abzulegen. Dies kann das Benutzererlebnis beim Auswählen von Dateien zum Hochladen oder beim Umordnen von Inhaltsmodulen innerhalb einer Seite verbessern.
- Wenn die Bildschirmausrichtung für Ihr Layout von Bedeutung ist, können Sie [CSS media queries](/de/docs/Web/CSS/Reference/At-rules/@media/orientation) verwenden, um Ihre Formulare basierend auf der Browserausrichtung zu stylen oder sogar die [Screen Orientation API](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) verwenden, um den Zustand der Bildschirmausrichtung zu lesen und andere Aktionen auszuführen.

Die folgenden Abschnitte bieten eine Reihe von Empfehlungen und Best Practices, um die größte mögliche Benutzeranzahl auf Ihren Websites und Anwendungen zu unterstützen.

## Unterstützung allgemeiner Eingabemechanismen

### Tastatur

Die meisten Nutzer werden eine Tastatur verwenden, um Daten in Ihre Formularsteuerelemente einzugeben. Einige werden auch die Tastatur verwenden, um zu diesen Formularsteuerelementen zu navigieren. Um zugänglich zu sein und eine bessere Benutzererfahrung zu bieten, ist es wichtig, [alle Formularsteuerelemente korrekt zu beschriften](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form#the_label_input_and_textarea_elements). Wenn jedes Formularsteuerelement korrekt mit einem {{htmlelement("label")}} verknüpft ist, wird Ihr Formular für alle voll zugänglich sein, insbesondere für alle, die Ihr Formular mit einer Tastatur, einem Screenreader oder möglicherweise ganz ohne Bildschirm navigieren.

Wenn Sie zusätzliche Tastaturunterstützung hinzufügen möchten, wie zum Beispiel die Validierung eines Formularsteuerelements, wenn eine bestimmte Taste gedrückt wird, können Sie Ereignislistener verwenden, um Tastaturereignisse zu erfassen und darauf zu reagieren. Beispielsweise, wenn Sie Steuerelemente hinzufügen möchten, wenn eine beliebige Taste gedrückt wird, müssen Sie einen Ereignislistener auf das Fensterobjekt hinzufügen:

```js
window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);
```

`handleKeyDown` und `handleKeyUp` sind Funktionen, die die Steuerungslogik definieren, die ausgeführt wird, wenn die Ereignisse `keydown` und `keyup` ausgelöst werden.

> [!NOTE]
> Weitere Informationen zu Tastaturereignissen finden Sie im [DOM Events](/de/docs/Web/API/Document_Object_Model/Events) Leitfaden und in der [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) Referenz.

### Maus

Sie können auch Maus- und andere Zeigegeräteereignisse erfassen. Die Ereignisse, die auftreten, wenn der Benutzer mit einem Zeigegerät wie einer Maus interagiert, werden durch die [`MouseEvent`](/de/docs/Web/API/MouseEvent) DOM-Schnittstelle dargestellt. Zu den gängigen Mausereignissen gehören [`click`](/de/docs/Web/API/Element/click_event), [`dblclick`](/de/docs/Web/API/Element/dblclick_event), [`mouseup`](/de/docs/Web/API/Element/mouseup_event) und [`mousedown`](/de/docs/Web/API/Element/mousedown_event). Eine Liste aller Ereignisse, die die Mausereignisschnittstelle verwenden, finden Sie im [DOM Events](/de/docs/Web/API/Document_Object_Model/Events#event_index) Leitfaden.

Wenn das Eingabegerät eine Maus ist, können Sie auch die Benutzereingabe über die Pointer Lock API steuern und Drag & Drop implementieren (siehe unten). Sie können auch [CSS verwenden, um die Unterstützung von Zeigegeräten zu testen](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries#use_of_pointing_devices).

### Finger-Touch

Um zusätzliche Unterstützung für Touchscreen-Geräte zu bieten, ist es eine gute Praxis, die unterschiedlichen Fähigkeiten in Bezug auf Bildschirmauflösung und Benutzereingabe zu berücksichtigen. [Touch-Events](/de/docs/Web/API/Touch_events) können Ihnen helfen, interaktive Elemente und allgemeine Interaktionsgesten auf Touchscreen-Geräten zu implementieren.

Wenn Sie Touch-Events verwenden möchten, müssen Sie Ereignislistener hinzufügen und Handlerfunktionen angeben, die aufgerufen werden, wenn das Ereignis ausgelöst wird:

```js
element.addEventListener("touchstart", handleStart);
element.addEventListener("touchcancel", handleCancel);
element.addEventListener("touchend", handleEnd);
element.addEventListener("touchmove", handleMove);
```

wobei `element` das DOM-Element ist, auf dem Sie die Touch-Events registrieren möchten.

> [!NOTE]
> Weitere Informationen darüber, was Sie mit Touch-Events tun können, finden Sie in unserem [Touch Events Leitfaden](/de/docs/Web/API/Touch_events).

### Zeigerereignisse

Mäuse sind nicht die einzigen Zeigegeräte. Die Geräte Ihrer Benutzer können mehrere Eingabeformen enthalten, wie Maus, Finger-Touch und Stifteingaben. Jeder dieser Zeigegeräte hat eine andere Größe. Die [Pointer Events API](/de/docs/Web/API/Pointer_events) kann Ihnen helfen, wenn Sie Ereignisse über Geräte hinweg verwalten müssen, indem Sie die Handhabung jedes einzelnen normalisieren. Ein Zeiger kann jeder Berührungspunkt auf dem Bildschirm sein, der durch einen Mauscursor, einen Stift, eine Touch-Eingabe (einschließlich Multi-Touch) oder ein anderes Zeigereingabegerät erzeugt wurde.

Die Ereignisse zur Handhabung allgemeiner Zeigereingaben ähneln stark denen für die Maus: `pointerdown`, `pointermove`, `pointerup`, `pointerover`, `pointerout`, usw. Die [`PointerEvent`-Schnittstelle](/de/docs/Web/API/PointerEvent) liefert alle Details, die Sie über das Zeigegerät erfassen möchten, einschließlich seiner Größe, seines Drucks und seines Winkels.

## Steuerungen implementieren

### Bildschirmausrichtung

Wenn Sie leicht unterschiedliche Layouts benötigen, abhängig davon, ob der Benutzer im Hoch- oder Querformat ist, können Sie [CSS Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries#media_feature_rules) verwenden, um CSS für verschiedene Layouts oder Breiten von Formularsteuerelementen basierend auf der Bildschirmgröße oder -ausrichtung zu definieren, wenn Sie [Webformulare stylen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms).

Wenn die Bildschirmausrichtung für Ihr Formular wichtig ist, können Sie den Status der Bildschirmausrichtung lesen, benachrichtigt werden, wenn sich dieser Status ändert, und die Bildschirmausrichtung auf einen bestimmten Zustand (normalerweise Hoch- oder Querformat) über die [Screen Orientation API](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) sperren.

- Ausrichtungsdaten können über [`screenOrientation.type`](/de/docs/Web/API/ScreenOrientation/type) oder mit CSS durch die [`orientation`](/de/docs/Web/CSS/Reference/At-rules/@media/orientation) Media-Feature abgerufen werden.
- Wenn sich die Bildschirmausrichtung ändert, wird das [`change`](/de/docs/Web/API/ScreenOrientation/change_event)-Ereignis auf dem Bildschirmobjekt ausgelöst.
- Die Sperrung der Bildschirmausrichtung ist durch den Aufruf der [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock)-Methode möglich.
- Die [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock)-Methode entfernt alle zuvor gesetzten Bildschirmsperren.

> [!NOTE]
> Weitere Informationen zur Screen Orientation API finden Sie unter [Managing screen orientation](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation).

### Vollbild

Wenn Sie Ihr Formular im Vollbildmodus präsentieren müssen, wie zum Beispiel, wenn Ihr Formular an einem Museumskiosk, einer Mautstation oder wirklich jeder öffentlich angezeigten Benutzeroberfläche angezeigt wird, ist es möglich, dies zu tun, indem Sie [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf diesem Element aufrufen:

```js
const elem = document.getElementById("myForm");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

> [!NOTE]
> Weitere Informationen zum Hinzufügen von Vollbildfunktionalität zu Ihrer Anwendung finden Sie in unserer Dokumentation über [die Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API).

### Drag & Drop

Ein gängiges Benutzerinteraktionsschema ist das physische Ziehen von Elementen, die woanders auf dem Bildschirm abgelegt werden sollen. Drag-and-Drop kann das Nutzererlebnis verbessern, wenn es darum geht, Dateien zum Hochladen auszuwählen oder Inhaltsmodule innerhalb einer Seite neu zu ordnen. Dafür gibt es eine API!

Die [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)-API ermöglicht es Nutzern, das Maus-Taste-gedrückte Halten über ein Element, es an einen anderen Ort zu ziehen, und das Loslassen der Maustaste, um das Element dort abzulegen.

Hier ist ein Beispiel, das erlaubt, einen Inhaltsabschnitt zu ziehen.

```html
<div draggable="true">This text <strong>may</strong> be dragged.</div>
```

```js
document.querySelector("div").addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", "This text may be dragged.");
});
```

in dem wir:

- Das [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)-Attribut auf `true` für das Element setzen, das Sie ziehbar machen möchten.
- Einen Listener für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis hinzufügen und die Drag-Daten innerhalb dieses Listeners setzen.

> [!NOTE]
> Weitere Informationen finden Sie in der [MDN Drag & Drop-Dokumentation](/de/docs/Web/API/HTML_Drag_and_Drop_API).

### contentEditable

Im Allgemeinen sollten Sie ein {{HTMLElement("textarea")}} oder einen geeigneten {{HTMLElement("input")}}-Typ innerhalb eines {{HTMLElement("form")}} verwenden, um Daten von Nutzern zu sammeln, zusammen mit einem beschreibenden {{HTMLElement("label")}}. Diese Elemente erfüllen jedoch möglicherweise nicht Ihre Anforderungen. Beispielsweise erfassen Rich-Text-Editoren kursiven, fetten und normalen Text, aber kein natives Formularsteuerelement erfasst Rich-Text. Dieser Anwendungsfall erfordert, dass Sie eine benutzerdefinierte Steuerung erstellen, die sowohl stilbar als auch editierbar ist. Dafür gibt es ein Attribut!

Jedes DOM-Element kann direkt bearbeitbar gemacht werden, indem das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut verwendet wird.

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

Das `contenteditable`-Attribut fügt das Element automatisch der Standard-TAB-Reihenfolge des Dokuments hinzu, was bedeutet, dass das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut nicht hinzugefügt werden muss. Wenn Sie jedoch nicht-semantische Elemente für die Dateneingabe verwenden, wenn Sie [Ihre eigenen Formularsteuerelemente erstellen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), müssen Sie JavaScript und [ARIA](/de/docs/Web/Accessibility/ARIA) hinzufügen, um das Element mit Formularsteuerungsfunktionen für alles andere aufzurüsten.

Um ein gutes Benutzererlebnis zu bieten, muss jede benutzerdefinierte Formularsteuerung, die Sie erstellen, zugänglich sein und wie native Formularsteuerungen funktionieren:

- Die [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) des Elements, [Label](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) und [Beschreibung](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) müssen mit ARIA hinzugefügt werden.
- Alle Benutzereingabemethoden müssen unterstützt werden, einschließlich [Tastatur](#tastatur), [Maus](#maus), [Touch](#finger-touch) und [Zeiger](#zeigerereignisse)-Ereignissen, die alle oben beschrieben sind.
- JavaScript ist erforderlich, um Funktionen wie [Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation), [Versenden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) und [Speichern](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript) von nutzeraktualisierten Inhalten zu handhaben.

{{EmbedLiveSample("contentEditable")}}

> [!NOTE]
> Beispiele und andere Ressourcen finden Sie im [Content Editable-Leitfaden](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable).

## Anleitungen

- [Touch Events Leitfaden](/de/docs/Web/API/Touch_events)
- [Managing screen orientation](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Die Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API)
- [Drag-Operationen Leitfaden](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Formulare durch JavaScript versenden](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)

## Referenz

- [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle
- [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)-Schnittstelle
- [Touch Events](/de/docs/Web/API/Touch_events) API
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API) API
- [Screen Orientation](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) API
- [Fullscreen](/de/docs/Web/API/Fullscreen_API) API
- [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API) API
- HTML [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut
