---
title: Methoden und Steuerungen für Benutzereingaben
slug: Learn/Forms/User_input_methods
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{LearnSidebar}}

Webformulare erfordern Benutzereingaben. Beim Entwerfen von Webformularen oder im Grunde genommen von beliebigen Webinhalten ist es wichtig zu berücksichtigen, wie Benutzer mit ihren Geräten und Browsern interagieren. Web-Benutzereingaben gehen über einfache Maus- und Tastatureingaben hinaus: Denken Sie beispielsweise an Touchscreens.

In diesem Artikel betrachten wir die verschiedenen Möglichkeiten, wie Benutzer mit Formularen und anderen Webinhalten interagieren können, und geben Empfehlungen zur Verwaltung von Benutzereingaben, praxisnahe Beispiele und Links zu weiteren Informationen.

Wenn Sie komplexere und interaktive Formulare oder andere UI-Funktionen entwickeln, gibt es viele HTML-Elemente und JavaScript-APIs, die Sie möglicherweise untersuchen möchten. Zum Beispiel könnten Sie benutzerdefinierte Formularsteuerelemente erstellen wollen, die nicht-semantische Elemente erfordern, um inhaltlich bearbeitbar zu sein. Vielleicht möchten Sie Touch-Events unterstützen, die Ausrichtung des Bildschirms ermitteln oder kontrollieren, ein Formular bildschirmfüllend machen oder Drag-and-Drop-Funktionen ermöglichen. Diese Anleitung stellt all diese Funktionen vor und leitet Sie zu weiteren Informationen zu jedem Thema.

Um eine gute Benutzererfahrung für die größtmögliche Anzahl von Benutzern zu bieten, müssen Sie mehrere Eingabemethoden unterstützen, einschließlich Maus, Tastatur, Fingerberührung und so weiter. Die verfügbaren Eingabemechanismen hängen von den Fähigkeiten des Geräts ab, auf dem die Anwendung ausgeführt wird.

Sie sollten immer auf die Zugänglichkeit der Tastatur achten – viele Webbenutzer navigieren nur mit der Tastatur durch Websites und Apps, und sie von Ihren Funktionen auszuschließen, ist keine gute Idee.

## Behandelte Themen

- Um Touchscreen-Displays zu unterstützen, interpretieren [Touch-Events](/de/docs/Web/API/Touch_events) die Fingeraktivität auf berührungsbasierten Benutzeroberflächen von Mobilgeräten bis hin zu Kühlschrank-Panels oder Museumskiosk-Displays.
- Die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) ermöglicht es Ihnen, Ihre Inhalte im Vollbildmodus anzuzeigen, was erforderlich ist, wenn Ihr Formular auf einem Kühlschrank oder Museumskiosk bedient wird.
- Wenn Sie ein benutzerdefiniertes Formularsteuerelement erstellen müssen, wie z.B. einen Rich-Text-Editor, ermöglicht das Attribut [`contentEditable`](/de/docs/Web/HTML/Global_attributes/contenteditable), bearbeitbare Steuerelemente aus normalerweise nicht bearbeitbaren HTML-Elementen zu erstellen.
- Die [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) ermöglicht es Benutzern, Elemente auf der Seite zu ziehen und an verschiedenen Stellen abzulegen. Dies kann das Benutzererlebnis verbessern, wenn es um das Auswählen von Dateien zum Hochladen oder das Umordnen von Inhaltsmodulen auf einer Seite geht.
- Wenn die Bildschirmausrichtung für Ihr Layout wichtig ist, können Sie [CSS-Media-Queries](/de/docs/Web/CSS/@media/orientation) verwenden, um Ihre Formulare basierend auf der Ausrichtung des Browsers zu stylen, oder sogar die [Screen Orientation API](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) verwenden, um den Zustand der Bildschirmausrichtung abzulesen und andere Aktionen auszuführen.

Die folgenden Abschnitte bieten eine Reihe von Empfehlungen und Best Practices, um es der größtmöglichen Anzahl von Benutzern zu ermöglichen, Ihre Websites und Anwendungen zu nutzen.

## Unterstützung von gängigen Eingabemechanismen

### Tastatur

Die meisten Benutzer werden eine Tastatur verwenden, um Daten in Ihre Formularsteuerelemente einzugeben. Einige werden auch die Tastatur verwenden, um zu diesen Formularsteuerelementen zu navigieren. Um zugänglich zu sein und ein besseres Benutzererlebnis zu bieten, ist es wichtig, alle Formularsteuerelemente ordnungsgemäß zu [beschriften](/de/docs/Learn/Forms/Your_first_form#the_label_input_and_textarea_elements). Wenn jedes Formularsteuerelement korrekt mit einem {{htmlelement("label")}} verknüpft ist, ist Ihr Formular für alle vollständig zugänglich, insbesondere für alle, die Ihr Formular mit einer Tastatur, einem Screenreader und möglicherweise ohne Bildschirm navigieren.

Wenn Sie zusätzliche Tastaturunterstützung hinzufügen möchten, z.B. die Validierung eines Formularsteuerelements, wenn eine bestimmte Taste gedrückt wird, können Sie Ereignis-Listener verwenden, um Tastaturereignisse zu erfassen und darauf zu reagieren. Zum Beispiel, wenn Sie Steuerelemente hinzufügen möchten, wenn eine beliebige Taste gedrückt wird, müssen Sie einen Ereignis-Listener auf dem `window`-Objekt hinzufügen:

```js
window.addEventListener("keydown", handleKeyDown, true);
window.addEventListener("keyup", handleKeyUp, true);
```

`handleKeyDown` und `handleKeyUp` sind Funktionen, die die Steuerungslogik definieren, die ausgeführt wird, wenn die `keydown`- und `keyup`-Ereignisse ausgelöst werden.

> [!NOTE]
> Sehen Sie sich das [Events reference](/de/docs/Web/Events) und den {{domxref("KeyboardEvent")}}-Leitfaden an, um mehr über Tastaturereignisse zu erfahren.

### Maus

Sie können auch Maus- und andere Zeigegeräte-Ereignisse erfassen. Die Ereignisse, die auftreten, wenn der Benutzer mit einem Zeigegerät wie einer Maus interagiert, werden durch die {{domxref("MouseEvent")}}-DOM-Schnittstelle dargestellt. Häufige Mausereignisse sind [`click`](/de/docs/Web/API/Element/click_event), [`dblclick`](/de/docs/Web/API/Element/dblclick_event), [`mouseup`](/de/docs/Web/API/Element/mouseup_event) und [`mousedown`](/de/docs/Web/API/Element/mousedown_event). Die Liste aller Ereignisse, die die Maus-Ereignisschnittstelle verwenden, finden Sie im [Events reference](/de/docs/Web/Events).

Wenn das Eingabegerät eine Maus ist, können Sie die Benutzereingabe auch über die Pointer Lock API steuern und Drag & Drop implementieren (siehe unten). Sie können auch [CSS verwenden, um Zeigegeräte](/de/docs/Learn/CSS/CSS_layout/Media_queries#use_of_pointing_devices)-Unterstützung zu testen.

### Fingerberührung

Um zusätzliche Unterstützung für Touchscreen-Geräte bereitzustellen, ist es eine gute Praxis, die unterschiedlichen Fähigkeiten in Bezug auf Bildschirmauflösung und Benutzereingaben zu berücksichtigen. [Touch-Events](/de/docs/Web/API/Touch_events) können Ihnen helfen, interaktive Elemente und gängige Interaktionsgesten auf Touchscreen-Geräten zu implementieren.

Wenn Sie Touch-Events verwenden möchten, müssen Sie Ereignis-Listener hinzufügen und Handler-Funktionen angeben, die aufgerufen werden, wenn das Ereignis ausgelöst wird:

```js
element.addEventListener("touchstart", handleStart, false);
element.addEventListener("touchcancel", handleCancel, false);
element.addEventListener("touchend", handleEnd, false);
element.addEventListener("touchmove", handleMove, false);
```

wobei `element` das DOM-Element ist, auf dem Sie die Touch-Events registrieren möchten.

> [!NOTE]
> Weitere Informationen darüber, was Sie mit Touch-Events tun können, finden Sie in unserem [Touch-Events-Leitfaden](/de/docs/Web/API/Touch_events).

### Pointer-Ereignisse

Mäuse sind nicht die einzigen Zeigegeräte. Die Geräte Ihres Benutzers können mehrere Eingabeformen unterstützen, wie Maus-, Fingerberührungs- und Stifteingaben. Jeder dieser Zeigegeräte hat eine unterschiedliche Größe. Die [Pointer Events API](/de/docs/Web/API/Pointer_events) kann hilfreich sein, wenn Sie Ereignisse über Geräte hinweg verwalten müssen, indem sie die Handhabung eines jeden normalisiert. Ein Zeiger kann jeden Kontaktpunkt auf dem Bildschirm darstellen, der durch einen Mauscursor, Stift, Berührung (einschließlich Multitouch) oder ein anderes Eingabezeigegerät hergestellt wird.

Die Ereignisse zur Verarbeitung generischer Zeigereingaben ähneln denen für die Maus: `pointerdown`, `pointermove`, `pointerup`, `pointerover`, `pointerout` usw. Die [`PointerEvent`-Schnittstelle](/de/docs/Web/API/PointerEvent) bietet alle Details, die Sie über das Zeigegerät erfassen möchten, einschließlich seiner Größe, seines Drucks und seines Winkels.

## Steuerungen implementieren

### Bildschirmausrichtung

Wenn Sie leicht unterschiedliche Layouts benötigen, je nachdem, ob der Benutzer sich im Hoch- oder Querformat befindet, können Sie [CSS-Media-Queries](/de/docs/Learn/CSS/CSS_layout/Media_queries#media_feature_rules) verwenden, um CSS für unterschiedliche Layouts oder Steuerelementbreiten basierend auf der Größe oder Ausrichtung des Bildschirms beim [Styling von Webformularen](/de/docs/Learn/Forms/Styling_web_forms) zu definieren.

Wenn die Bildschirmausrichtung für Ihr Formular wichtig ist, können Sie den Zustand der Bildschirmausrichtung ablesen, informiert werden, wenn sich dieser Zustand ändert, und in der Lage sein, die Bildschirmausrichtung auf einen bestimmten Zustand (normalerweise Hoch- oder Querformat) zu sperren mittels der [Screen Orientation API](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation).

- Orientierungsdaten können über {{domxref("screenOrientation.type")}} oder mit CSS über das [`orientation`](/de/docs/Web/CSS/@media/orientation)-Medienmerkmal abgerufen werden.
- Wenn sich die Bildschirmausrichtung ändert, wird das {{domxref("ScreenOrientation.change_event", "change")}}-Ereignis auf dem Bildschirmobjekt ausgelöst.
- Das Sperren der Bildschirmausrichtung ist durch Aufrufen der {{domxref("ScreenOrientation.lock()")}}-Methode möglich.
- Die {{domxref("ScreenOrientation.unlock()")}}-Methode entfernt alle zuvor gesetzten Bildschirmsperren.

> [!NOTE]
> Weitere Informationen über die Screen Orientation API finden Sie in [Managing screen orientation](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation).

### Vollbild

Wenn Sie Ihr Formular im Vollbildmodus präsentieren müssen, z. B. wenn Ihr Formular auf einem Museumskiosk, einer Mautstelle oder wirklich einer beliebig öffentlich angezeigten Benutzeroberfläche angezeigt wird, können Sie dies tun, indem Sie {{domxref("Element.requestFullscreen()")}} auf diesem Element aufrufen:

```js
const elem = document.getElementById("myForm");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

> [!NOTE]
> Um mehr über die Hinzufügung von Vollbildfunktionen zu Ihrer Anwendung zu erfahren, lesen Sie unsere Dokumentation über [die Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API).

### Drag & Drop

Eine häufige Benutzerinteraktion ist das physische Ziehen von Elementen, die an anderer Stelle auf dem Bildschirm abgelegt werden können. Drag and Drop kann das Benutzererlebnis verbessern, wenn es um das Auswählen von Dateien zum Hochladen oder das Umordnen von Inhaltsmodulen auf einer Seite geht. Dafür gibt es eine API!

Die [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)-API ermöglicht es Benutzern, ein Element mit der Maus zu klicken und gedrückt zu halten, es an eine andere Position zu ziehen und die Maustaste loszulassen, um das Element dort abzulegen.

Hier ist ein Beispiel, das es erlaubt, einen Inhaltsteil zu ziehen.

```html
<div
  draggable="true"
  ondragstart="event.dataTransfer.setData('text/plain', 'This text may be dragged')">
  This text <strong>may</strong> be dragged.
</div>
```

in dem wir:

- Das [`draggable`](/de/docs/Web/HTML/Global_attributes#draggable)-Attribut auf `true` für das Element setzen, das Sie ziehbar machen möchten.
- Einen Listener für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis hinzufügen und die Ziehdaten innerhalb dieses Listeners festlegen.

> [!NOTE]
> Weitere Informationen finden Sie in der [MDN Drag & Drop Dokumentation](/de/docs/Web/API/HTML_Drag_and_Drop_API).

### contentEditable

Im Allgemeinen sollten Sie ein {{HTMLElement("textarea")}} oder einen entsprechenden {{HTMLElement("input")}}-Typ innerhalb eines {{HTMLElement("form")}} verwenden, um Daten von Benutzern zu sammeln, zusammen mit einem beschreibenden {{HTMLElement("label")}}. Aber diese Elemente erfüllen möglicherweise nicht Ihre Anforderungen. Zum Beispiel erfassen Rich-Text-Editoren Kursiv-, fettgedruckten und normalen Text, aber kein nativer Formularkontrollgriff erfasst Rich-Text. Dieser Anwendungsfall erfordert, dass Sie eine benutzerdefinierte Steuerung erstellen, die sowohl stilisierbar als auch editierbar ist. Dafür gibt es ein Attribut!

Jedes DOM-Element kann direkt bearbeitbar gemacht werden, indem das [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable)-Attribut verwendet wird.

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

Das `contenteditable`-Attribut fügt das Element automatisch zur Standardeinfügereihenfolge des Dokuments hinzu, was bedeutet, dass das [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex)-Attribut nicht hinzugefügt werden muss. Wenn Sie jedoch nicht-semantische Elemente zur Dateneingabe verwenden, wenn Sie [Ihre eigenen Formularsteuerelemente erstellen](/de/docs/Learn/Forms/How_to_build_custom_form_controls), müssen Sie JavaScript und [ARIA](/de/docs/Web/Accessibility/ARIA) hinzufügen, um das Element mit Formularsteuerungsfunktionalität für alles andere auszustatten.

Um eine gute Benutzererfahrung zu bieten, muss jedes benutzerdefinierte Formularsteuerelement, das Sie erstellen, zugänglich sein und wie native Formularsteuerelemente funktionieren:

- Die [`role`](/de/docs/Web/Accessibility/ARIA/Roles), [label](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) und [description](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) des Elements müssen mit ARIA hinzugefügt werden.
- Alle Benutzereingabemethoden müssen unterstützt werden, einschließlich [Tastatur](#tastatur), [Maus](#maus), [Berührung](#fingerberührung) und [Zeiger](#pointer-ereignisse)-Ereignisse, die alle oben beschrieben wurden.
- JavaScript ist erforderlich, um Funktionalitäten wie [Validierung](/de/docs/Learn/Forms/Form_validation), [Übermittlung](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) und [Speicherung](/de/docs/Learn/Forms/Sending_forms_through_JavaScript) von benutzeraktualisierten Inhalten zu handhaben.

{{EmbedLiveSample("contentEditable")}}

> [!NOTE]
> Beispiele und andere Ressourcen finden Sie im [Content Editable guide](/de/docs/Web/HTML/Global_attributes/contenteditable).

## Tutorials

- [Touch events Guide](/de/docs/Web/API/Touch_events)
- [Managing screen orientation](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Using fullscreen mode](/de/docs/Web/API/Fullscreen_API)
- [Drag Operations Guide](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Form validation](/de/docs/Learn/Forms/Form_validation)
- [Sending forms through JavaScript](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)

## Referenz

- {{domxref("MouseEvent")}}-Schnittstelle
- {{domxref("KeyboardEvent")}}-Schnittstelle
- [Touch events](/de/docs/Web/API/Touch_events) API
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API) API
- [Screen Orientation](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) API
- [Fullscreen](/de/docs/Web/API/Fullscreen_API) API
- [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API) API
- HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)
