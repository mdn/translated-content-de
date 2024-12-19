---
title: Benutzereingabemethoden und Steuerungen
slug: Learn_web_development/Extensions/Forms/User_input_methods
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Webformulare erfordern Benutzereingaben. Beim Entwerfen von Webformularen oder allgemein von Webinhalten ist es wichtig, zu berücksichtigen, wie Benutzer mit ihren Geräten und Browsern interagieren. Web-benutzereingaben gehen über einfache Maus- und Tastatureingaben hinaus: Denken Sie beispielsweise an Touchscreens.

In diesem Artikel werfen wir einen Blick auf die verschiedenen Möglichkeiten, wie Benutzer mit Formularen und anderen Webinhalten interagieren. Wir geben Empfehlungen zum Umgang mit Benutzereingaben, reale Beispiele und Links zu weiteren Informationen.

Wenn Sie komplexere und interaktive Formulare oder andere Benutzeroberflächen entwickeln, gibt es viele HTML-Elemente und JavaScript-APIs, die Sie untersuchen möchten. Beispielsweise möchten Sie benutzerdefinierte Formularelemente erstellen, die nicht-semantische Elemente erfordern, um inhaltsbearbeitbar zu sein. Sie könnten Unterstützung für Touch-Ereignisse hinzufügen, die Ausrichtung des Bildschirms bestimmen oder steuern, ein Formular in Vollbild anzeigen oder Drag-and-Drop-Funktionen aktivieren. Dieser Leitfaden stellt alle diese Funktionen vor und verweist auf weiterführende Informationen zu jedem Thema.

Um eine gute Erfahrung für die größtmögliche Anzahl von Benutzern zu bieten, müssen Sie mehrere Eingabemethoden unterstützen, einschließlich Maus, Tastatur, Fingertipp und so weiter. Die verfügbaren Eingabemechanismen hängen von den Fähigkeiten des Geräts ab, auf dem die Anwendung ausgeführt wird.

Sie sollten immer an die Tastaturzugänglichkeit denken — viele Webbenutzer navigieren nur mit der Tastatur durch Websites und Apps, und es wäre unklug, sie aus Ihrer Funktionalität auszuschließen.

## Behandelte Themen

- Um Touchscreen-Displays zu unterstützen, interpretieren [Touch-Ereignisse](/de/docs/Web/API/Touch_events) die Fingeraktivität auf Touch-basierten Benutzeroberflächen von mobilen Geräten bis zu Kühlschrank-Panels und Displays in Museumskiosken.
- Die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) ermöglicht es Ihnen, Ihre Inhalte im Vollbildmodus anzuzeigen, was erforderlich ist, wenn Ihr Formular auf einem Kühlschrank oder Museumskiosk bereitgestellt wird.
- Wenn Sie ein benutzerdefiniertes Formularelement erstellen müssen, wie z. B. einen Rich-Text-Editor, ermöglicht das [`contentEditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut das Erstellen von bearbeitbaren Steuerungen aus normalerweise nicht bearbeitbaren HTML-Elementen.
- Die [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) ermöglicht es Benutzern, Elemente auf einer Seite zu ziehen und sie an verschiedenen Orten abzulegen. Dies kann die Benutzererfahrung verbessern, wenn es darum geht, Dateien für den Upload auszuwählen oder Inhaltsmodule innerhalb einer Seite neu zu ordnen.
- Wenn die Bildschirmorientierung für Ihr Layout wichtig ist, können Sie [CSS-Media-Queries](/de/docs/Web/CSS/@media/orientation) verwenden, um Ihre Formulare basierend auf der Ausrichtung des Browsers zu gestalten, oder sogar die [Screen Orientation API](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) nutzen, um den Bildschirmorientierungsstatus zu lesen und andere Aktionen durchzuführen.

Die folgenden Abschnitte bieten eine Reihe von Empfehlungen und bewährten Verfahren, um den breitesten möglichen Benutzerkreis auf Ihren Websites und Anwendungen zu unterstützen.

## Unterstützung allgemeiner Eingabemechanismen

### Tastatur

Die meisten Benutzer werden eine Tastatur verwenden, um Daten in Ihre Formularelemente einzugeben. Einige werden auch die Tastatur verwenden, um zu diesen Formularelementen zu navigieren. Um zugänglich zu sein und für eine bessere Benutzererfahrung, ist es wichtig, alle Formularelemente richtig zu [beschriften](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form#the_label_input_and_textarea_elements). Wenn jedes Formularelement korrekt mit einem {{htmlelement("label")}} verbunden ist, wird Ihr Formular vollständig zugänglich für alle, insbesondere für diejenigen, die Ihr Formular mit einer Tastatur, einem Bildschirmlesegerät und möglicherweise ohne Bildschirm navigieren.

Wenn Sie zusätzliche Tastaturunterstützung hinzufügen möchten, wie z.B. die Validierung eines Formularelements, wenn eine bestimmte Taste gedrückt wird, können Sie Ereignislistener verwenden, um Tastaturereignisse zu erfassen und darauf zu reagieren. Wenn Sie beispielsweise Steuerelemente hinzufügen möchten, wenn eine beliebige Taste gedrückt wird, müssen Sie einen Ereignislistener für das Fensterobjekt hinzufügen:

```js
window.addEventListener("keydown", handleKeyDown, true);
window.addEventListener("keyup", handleKeyUp, true);
```

`handleKeyDown` und `handleKeyUp` sind Funktionen, die die Steuervorschriften definieren, die ausgeführt werden sollen, wenn die `keydown`- und `keyup`-Ereignisse ausgelöst werden.

> [!NOTE]
> Sehen Sie sich die [Ereignisreferenz](/de/docs/Web/Events) und den [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)-Leitfaden an, um mehr über Tastaturereignisse herauszufinden.

### Maus

Sie können auch Mauseingaben und andere Zeigerereignisse erfassen. Die über ein Zeigegerät wie eine Maus interagierenden Ereignisse werden durch das [`MouseEvent`](/de/docs/Web/API/MouseEvent)-DOM-Interface dargestellt. Häufige Mausereignisse sind [`click`](/de/docs/Web/API/Element/click_event), [`dblclick`](/de/docs/Web/API/Element/dblclick_event), [`mouseup`](/de/docs/Web/API/Element/mouseup_event) und [`mousedown`](/de/docs/Web/API/Element/mousedown_event). Die Liste aller mit dem Mausereignis-Interface verwendeten Ereignisse finden Sie in der [Ereignisreferenz](/de/docs/Web/Events).

Wenn das Eingabegerät eine Maus ist, können Sie auch die Benutzereingaben durch die Pointer Lock API steuern und Drag & Drop implementieren (siehe unten). Sie können auch [CSS verwenden, um Zeigegeräte](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries#use_of_pointing_devices) zu testen.

### Fingertipp

Um zusätzliche Unterstützung für Touchscreen-Geräte bereitzustellen, ist es ratsam, die unterschiedlichen Fähigkeiten in Bezug auf Bildschirmauflösung und Benutzereingaben zu berücksichtigen. [Touch-Ereignisse](/de/docs/Web/API/Touch_events) können Ihnen helfen, interaktive Elemente und gängige Interaktionsgesten auf Touchscreen-Geräten zu implementieren.

Wenn Sie Touch-Ereignisse verwenden möchten, müssen Sie Ereignislistener hinzufügen und Handlerfunktionen angeben, die aufgerufen werden, wenn das Ereignis ausgelöst wird:

```js
element.addEventListener("touchstart", handleStart, false);
element.addEventListener("touchcancel", handleCancel, false);
element.addEventListener("touchend", handleEnd, false);
element.addEventListener("touchmove", handleMove, false);
```

wobei `element` das DOM-Element ist, für das Sie die Touch-Ereignisse registrieren möchten.

> [!NOTE]
> Für weitere Informationen darüber, was Sie mit Touch-Ereignissen machen können, lesen Sie bitte unseren [Touch-Ereignisse-Leitfaden](/de/docs/Web/API/Touch_events).

### Zeigerereignisse

Mäuse sind nicht die einzigen Zeigegeräte. Die Geräte Ihrer Benutzer können mehrere Eingabeformen haben, wie Maus, Fingertipp und Stifteingabe. Jeder dieser Zeiger hat eine andere Größe. Die [Pointer Events API](/de/docs/Web/API/Pointer_events) kann hilfreich sein, wenn Sie Ereignisse über Geräte hinweg verwalten möchten, indem Sie die Handhabung jedes einzelnen normalisieren. Ein Zeiger kann jeder Kontaktpunkt auf dem Bildschirm sein, der durch einen Mauszeiger, Stift, Touch (einschließlich Multi-Touch) oder ein anderes Zeigereingabegerät erstellt wird.

Die Ereignisse zur Handhabung generischer Zeigereingaben sehen den Mausereignissen sehr ähnlich: `pointerdown`, `pointermove`, `pointerup`, `pointerover`, `pointerout` usw. Das [`PointerEvent`-Interface](/de/docs/Web/API/PointerEvent) bietet alle Details, die Sie möglicherweise über das Zeigereingabegerät erfassen möchten, einschließlich seiner Größe, Druck und Winkel.

## Steuerelemente implementieren

### Bildschirmorientierung

Wenn Sie leicht unterschiedliche Layouts benötigen, je nachdem, ob der Benutzer im Hoch- oder Querformat ist, können Sie [CSS-Media-Queries](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries#media_feature_rules) verwenden, um CSS für unterschiedliche Layouts oder Formularelementweiten basierend auf der Größe oder Orientierung des Bildschirms beim [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) zu definieren.

Wenn die Bildschirmorientierung für Ihr Formular wichtig ist, können Sie den Bildschirmorientierungsstatus lesen, informiert werden, wenn sich dieser Status ändert und in der Lage sein, die Bildschirmorientierung auf einen bestimmten Status (meistens Hoch- oder Querformat) durch die [Screen Orientation API](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) zu sperren.

- Orientierungsdaten können über [`screenOrientation.type`](/de/docs/Web/API/ScreenOrientation/type) oder mit CSS über das [`orientation`](/de/docs/Web/CSS/@media/orientation)-Media-Feature abgerufen werden.
- Wenn sich die Bildschirmorientierung ändert, wird das [`change`](/de/docs/Web/API/ScreenOrientation/change_event)-Ereignis auf dem Bildschirmobjekt ausgelöst.
- Das Sperren der Bildschirmorientierung ist möglich, indem die [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock)-Methode aufgerufen wird.
- Die [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock)-Methode entfernt alle zuvor gesetzten Bildschirmsperren.

> [!NOTE]
> Weitere Informationen zur Screen Orientation API finden Sie im Abschnitt [Verwaltung der Bildschirmorientierung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation).

### Vollbild

Wenn Sie Ihr Formular im Vollbildmodus präsentieren müssen, beispielsweise wenn Ihr Formular auf einem Museumskiosk, einer Mautstation oder wirklich jeder öffentlich angezeigten Benutzeroberfläche angezeigt wird, ist es möglich, dies zu tun, indem Sie [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf diesem Element aufrufen:

```js
const elem = document.getElementById("myForm");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

> [!NOTE]
> Um mehr über das Hinzufügen von Vollbildfunktionalitäten zu Ihrer Anwendung herauszufinden, lesen Sie unsere Dokumentation über [die Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API).

### Drag & Drop

Eine häufige Benutzerinteraktion ist das physische Ziehen von Elementen, um sie woanders auf dem Bildschirm abzulegen. Drag and Drop kann die Benutzererfahrung verbessern, wenn es darum geht, Dateien für Uploads auszuwählen oder Inhaltsmodule innerhalb einer Seite neu zu ordnen. Dafür gibt es eine API!

Die [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)-API ermöglicht es Benutzern, ein Element zu klicken und die Maustaste gedrückt zu halten, es an einen anderen Ort zu ziehen und die Maustaste loszulassen, um das Element dort abzulegen.

Hier ist ein Beispiel, das es ermöglicht, einen Inhaltsteil zu ziehen.

```html
<div
  draggable="true"
  ondragstart="event.dataTransfer.setData('text/plain', 'This text may be dragged')">
  This text <strong>may</strong> be dragged.
</div>
```

wobei wir:

- Das [`draggable`](/de/docs/Web/HTML/Global_attributes/draggable)-Attribut auf `true` setzen, um das Element, das ziehbar sein soll, zu definieren.
- Einen Listener für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis hinzufügen und die Ziehdaten innerhalb dieses Listeners setzen.

> [!NOTE]
> Weitere Informationen finden Sie in der [MDN Drag & Drop Dokumentation](/de/docs/Web/API/HTML_Drag_and_Drop_API).

### contentEditable

Im Allgemeinen sollten Sie ein {{HTMLElement("textarea")}} oder einen geeigneten {{HTMLElement("input")}} Typ innerhalb eines {{HTMLElement("form")}} verwenden, um Daten von Benutzer zu erfassen, zusammen mit einem beschreibenden {{HTMLElement("label")}}. Diese Elemente erfüllen jedoch möglicherweise nicht Ihre Bedürfnisse. Beispielsweise erfassen Rich-Text-Editoren kursiven, fetten und normalen Text, aber kein natives Formularelement erfasst Rich-Text. Dieser Anwendungsfall erfordert, dass Sie ein benutzerdefiniertes Steuerelement erstellen, das sowohl stilisierbar als auch bearbeitbar ist. Dafür gibt es ein Attribut!

Jedes DOM-Element kann direkt bearbeitbar gemacht werden, indem das [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut verwendet wird.

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

Das `contenteditable`-Attribut fügt das Element automatisch in die Standard-Tabbing-Reihenfolge des Dokuments ein, was bedeutet, dass das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut nicht hinzugefügt werden muss. Wenn Sie jedoch nicht-semantische Elemente zur Dateneingabe verwenden, wenn Sie [Ihre eigenen Formularelemente erstellen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), müssen Sie JavaScript und [ARIA](/de/docs/Web/Accessibility/ARIA) hinzufügen, um das Element mit Formularelementfunktionen für alles andere nachzurüsten.

Um eine gute Benutzererfahrung zu gewährleisten, muss jedes benutzerdefinierte Formularelement, das Sie erstellen, zugänglich sein und wie native Formularelemente funktionieren:

- Die [`role`](/de/docs/Web/Accessibility/ARIA/Roles), [label](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) und [description](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) des Elements müssen mit ARIA hinzugefügt werden.
- Alle Benutzereingabemethoden müssen unterstützt werden, einschließlich [Tastatur](#tastatur), [Maus](#maus), [Touch](#fingertipp) und [Zeiger](#zeigerereignisse) Ereignisse, die alle oben beschrieben wurden.
- JavaScript ist erforderlich, um Funktionen wie [Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation), [Übermittlung](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) und [Speichern](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript) von benutzeraktualisierten Inhalten zu handhaben.

{{EmbedLiveSample("contentEditable")}}

> [!NOTE]
> Beispiele und weitere Ressourcen finden Sie im [Content Editable-Leitfaden](/de/docs/Web/HTML/Global_attributes/contenteditable).

## Tutorials

- [Touch-Ereignisse-Leitfaden](/de/docs/Web/API/Touch_events)
- [Verwaltung der Bildschirmorientierung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API)
- [Drag-Operationen-Leitfaden](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Formulare per JavaScript senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)

## Referenz

- [`MouseEvent`](/de/docs/Web/API/MouseEvent) Interface
- [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) Interface
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events) API
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API) API
- [Screen Orientation](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) API
- [Fullscreen](/de/docs/Web/API/Fullscreen_API) API
- [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API) API
- HTML [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut
