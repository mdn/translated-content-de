---
title: Benutzereingabemethoden und Steuerungen
slug: Learn_web_development/Extensions/Forms/User_input_methods
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

Webformulare erfordern Benutzereingaben. Bei der Gestaltung von Webformularen oder überhaupt jeglichen Webinhalten ist es wichtig zu berücksichtigen, wie Benutzer mit ihren Geräten und Browsern interagieren. Die Benutzereingabe im Web geht über einfache Maus- und Tastatureingaben hinaus: Denken Sie zum Beispiel an Touchscreens.

In diesem Artikel werfen wir einen Blick auf die verschiedenen Möglichkeiten, wie Benutzer mit Formularen und anderen Webinhalten interagieren, und geben Empfehlungen zur Verwaltung von Benutzereingaben, reale Beispiele und Links zu weiteren Informationen.

Wenn Sie komplexere und interaktive Formulare oder andere UI-Features entwickeln, gibt es viele HTML-Elemente und JavaScript-APIs, die Sie untersuchen sollten. Sie möchten möglicherweise benutzerdefinierte Formularelemente erstellen, die nicht-semantische Elemente erfordern, um inhaltlich editierbar zu sein. Möglicherweise möchten Sie Touch-Ereignisse unterstützen, die Orientierung des Bildschirms ermitteln oder steuern, ein Formular bildschirmfüllend gestalten oder Drag-and-Drop-Funktionen aktivieren. Dieser Leitfaden führt alle diese Funktionen ein und verweist auf weiterführende Informationen zu jedem Thema.

Um einem möglichst großen Kreis von Benutzern eine gute Erfahrung zu bieten, müssen Sie mehrere Eingabemethoden unterstützen, darunter Maus, Tastatur, Fingertipp usw. Die verfügbaren Eingabemechanismen hängen von den Fähigkeiten des Geräts ab, auf dem die Anwendung läuft.

Sie sollten immer die Tastaturzugänglichkeit im Auge behalten — viele Webbenutzer verwenden nur die Tastatur, um Websites und Apps zu navigieren, und sie von Ihrer Funktionalität auszuschließen, ist keine gute Idee.

## Behandelte Themen

- Um Touchscreen-Displays zu unterstützen, interpretieren [Touch Events](/de/docs/Web/API/Touch_events) die Fingeraktivität auf touchbasierten Benutzeroberflächen, von mobilen Geräten über Kühlschrankpanels bis hin zu Museums-Kiosken.
- Die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) ermöglicht es Ihnen, Ihre Inhalte im Vollbildmodus anzuzeigen, was erforderlich ist, wenn Ihr Formular auf einem Kühlschrank oder Museumskiosk bereitgestellt wird.
- Wenn Sie ein benutzerdefiniertes Formularelement erstellen müssen, wie z. B. einen Rich-Text-Editor, ermöglicht das [`contentEditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut das Erstellen von editierbaren Steuerungen aus normalerweise nicht editierbaren HTML-Elementen.
- Die [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) ermöglicht es Benutzern, Elemente auf einer Seite zu ziehen und an verschiedenen Orten abzulegen. Dies kann die Benutzererfahrung beim Auswählen von Dateien zum Hochladen oder beim Neuanordnen von Inhaltsmodulen auf einer Seite verbessern.
- Wenn die Bildschirmorientierung für Ihr Layout von Bedeutung ist, können Sie [CSS-Media-Queries](/de/docs/Web/CSS/@media/orientation) verwenden, um Ihre Formulare basierend auf der Browserorientierung zu stylen oder sogar die [Screen Orientation API](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) nutzen, um den Bildschirmorientierungszustand zu lesen und andere Aktionen durchzuführen.

Die folgenden Abschnitte bieten eine Reihe von Empfehlungen und Best Practices, um die größtmögliche Bandbreite an Benutzern zu unterstützen, Ihre Websites und Anwendungen zu verwenden.

## Unterstützung gängiger Eingabemechanismen

### Tastatur

Die meisten Benutzer werden eine Tastatur verwenden, um Daten in Ihre Formularelemente einzugeben. Einige werden auch die Tastatur verwenden, um zu diesen Formularelementen zu navigieren. Um zugänglich zu sein und für eine bessere Benutzererfahrung, ist es wichtig, alle Formularelemente [korrekt zu beschriften](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form#the_label_input_and_textarea_elements). Wenn jedes Formularelement korrekt mit einem {{htmlelement("label")}} verknüpft ist, ist Ihr Formular für alle vollständig zugänglich, insbesondere für diejenigen, die Ihr Formular mit einer Tastatur, einem Screenreader und möglicherweise ohne Bildschirm navigieren.

Wenn Sie zusätzliche Tastaturunterstützung hinzufügen möchten, z. B. die Validierung eines Formularelements, wenn eine bestimmte Taste gedrückt wird, können Sie Ereignis-Listener verwenden, um Tastaturereignisse zu erfassen und darauf zu reagieren. Wenn Sie beispielsweise Steuerungen hinzufügen möchten, wenn eine beliebige Taste gedrückt wird, müssen Sie einen Ereignis-Listener auf dem Fensterobjekt hinzufügen:

```js
window.addEventListener("keydown", handleKeyDown, true);
window.addEventListener("keyup", handleKeyUp, true);
```

`handleKeyDown` und `handleKeyUp` sind Funktionen, die die Steuerungslogik definieren, die ausgeführt werden soll, wenn die `keydown`- und `keyup`-Ereignisse ausgelöst werden.

> [!NOTE]
> Siehe den [DOM-Events](/de/docs/Web/API/Document_Object_Model/Events) Leitfaden und die [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)-Referenz, um mehr über Tastaturereignisse zu erfahren.

### Maus

Sie können auch Maus- und andere Zeigereignisse erfassen. Die Ereignisse, die auftreten, wenn der Benutzer mit einem Zeigegerät wie einer Maus interagiert, werden von der [`MouseEvent`](/de/docs/Web/API/MouseEvent) DOM-Schnittstelle repräsentiert. Häufige Mausereignisse sind [`click`](/de/docs/Web/API/Element/click_event), [`dblclick`](/de/docs/Web/API/Element/dblclick_event), [`mouseup`](/de/docs/Web/API/Element/mouseup_event) und [`mousedown`](/de/docs/Web/API/Element/mousedown_event). Die Liste aller Ereignisse, die die Maus-Event-Schnittstelle verwenden, finden Sie im [DOM Events](/de/docs/Web/API/Document_Object_Model/Events#event_index)-Leitfaden.

Wenn das Eingabegerät eine Maus ist, können Sie auch die Benutzerinteraktion über die Pointer Lock API steuern und Drag & Drop implementieren (siehe unten). Sie können auch [CSS verwenden, um auf die Unterstützung für Zeigegeräte zu testen](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries#use_of_pointing_devices).

### Finger Touch

Um zusätzliche Unterstützung für Touchscreen-Geräte zu bieten, ist es eine gute Praxis, die unterschiedlichen Fähigkeiten in Bezug auf Bildschirmauflösung und Benutzereingabe zu berücksichtigen. [Touch Events](/de/docs/Web/API/Touch_events) können Ihnen dabei helfen, interaktive Elemente und gängige Interaktionsgesten auf Touchscreen-Geräten zu implementieren.

Wenn Sie Touch Events verwenden möchten, müssen Sie Ereignis-Listener hinzufügen und Handlerfunktionen angeben, die aufgerufen werden, wenn das Ereignis ausgelöst wird:

```js
element.addEventListener("touchstart", handleStart, false);
element.addEventListener("touchcancel", handleCancel, false);
element.addEventListener("touchend", handleEnd, false);
element.addEventListener("touchmove", handleMove, false);
```

wobei `element` das DOM-Element ist, auf dem Sie die Touch-Ereignisse registrieren möchten.

> [!NOTE]
> Für weitere Informationen zu den Möglichkeiten mit Touch Events lesen Sie bitte unseren [Touch Events Leitfaden](/de/docs/Web/API/Touch_events).

### Zeigerereignisse

Mäuse sind nicht die einzigen Zeigegeräte. Die Geräte Ihrer Benutzer können mehrere Eingabeformen umfassen, wie Maus, Fingertipp und Stifteingabe. Jeder dieser Zeiger hat eine unterschiedliche Größe. Die [Pointer Events API](/de/docs/Web/API/Pointer_events) kann nützlich sein, wenn Sie Ereignisse über verschiedene Geräte hinweg verwalten müssen, indem Sie die Behandlung jedes einzelnen normalisieren. Ein Zeiger kann jeder Kontaktpunkt auf dem Bildschirm sein, der durch einen Mauszeiger, einen Stift, eine Berührung (einschließlich Multitouch) oder ein anderes Zeigereingabegerät hergestellt wird.

Die Ereignisse zur Behandlung generischer Zeigereingaben ähneln denen für die Maus: `pointerdown`, `pointermove`, `pointerup`, `pointerover`, `pointerout` usw. Die [`PointerEvent`-Schnittstelle](/de/docs/Web/API/PointerEvent) bietet alle Details, die Sie möglicherweise über das Zeigereingabegerät erfassen möchten, einschließlich seiner Größe, seines Drucks und seines Winkels.

## Steuerungen implementieren

### Bildschirmorientierung

Wenn Sie leicht unterschiedliche Layouts benötigen, je nachdem, ob der Benutzer im Hoch- oder Querformat ist, können Sie [CSS-Media-Queries](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries#media_feature_rules) verwenden, um CSS für unterschiedliche Layouts oder Formularelementbreiten basierend auf der Größe oder Orientierung des Bildschirms zu definieren, wenn Sie [Webformulare stylen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms).

Wenn die Bildschirmorientierung für Ihr Formular von Bedeutung ist, können Sie den Bildschirmorientierungszustand lesen, benachrichtigt werden, wenn sich dieser Zustand ändert, und in der Lage sein, die Bildschirmorientierung durch die [Screen Orientation API](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) auf einen bestimmten Zustand (normalerweise Hoch- oder Querformat) zu sperren.

- Orientierungsdaten können über [`screenOrientation.type`](/de/docs/Web/API/ScreenOrientation/type) oder mit CSS über das [`orientation`](/de/docs/Web/CSS/@media/orientation)-Media-Feature abgerufen werden.
- Wenn sich die Bildschirmorientierung ändert, wird das [`change`](/de/docs/Web/API/ScreenOrientation/change_event)-Ereignis auf dem Bildschirmobjekt ausgelöst.
- Das Sperren der Bildschirmorientierung ist möglich, indem die [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock)-Methode aufgerufen wird.
- Die [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock)-Methode entfernt alle zuvor gesetzten Bildschirmsperren.

> [!NOTE]
> Weitere Informationen über die Screen Orientation API finden Sie unter [Verwalten der Bildschirmorientierung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation).

### Vollbild

Wenn Sie Ihr Formular im Vollbildmodus präsentieren müssen, z. B. wenn Ihr Formular auf einem Museumskiosk, einer Mautstation oder wirklich jeder öffentlich angezeigten Benutzeroberfläche angezeigt wird, ist dies möglich, indem Sie [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) für dieses Element aufrufen:

```js
const elem = document.getElementById("myForm");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

> [!NOTE]
> Um mehr über das Hinzufügen von Vollbildfunktionen zu Ihrer Anwendung zu erfahren, lesen Sie unsere Dokumentation über [die Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API).

### Drag & Drop

Eine gängige Benutzerinteraktion ist das physische Ziehen von Elementen, um sie an anderer Stelle auf dem Bildschirm abzulegen. Drag and Drop kann die Benutzererfahrung verbessern, wenn es darum geht, Dateien für den Upload auszuwählen oder Inhaltsmodule auf einer Seite neu anzuordnen. Dafür gibt es eine API!

Die [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API) API ermöglicht es Benutzern, ein Element mit gedrückter Maustaste anzuzeigen, es an einen anderen Ort zu ziehen und es durch Loslassen der Maustaste dort abzulegen.

Hier ist ein Beispiel, das es ermöglicht, einen Inhaltsbereich zu ziehen.

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
- Einen Listener für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis hinzufügen und die Ziehdaten in diesem Listener festlegen.

> [!NOTE]
> Weitere Informationen finden Sie in der [MDN Drag & Drop Dokumentation](/de/docs/Web/API/HTML_Drag_and_Drop_API).

### contentEditable

Im Allgemeinen sollten Sie ein {{HTMLElement("textarea")}} oder einen geeigneten {{HTMLElement("input")}}-Typ innerhalb eines {{HTMLElement("form")}} verwenden, um Daten von Benutzern zu sammeln, zusammen mit einem beschreibenden {{HTMLElement("label")}}. Aber diese Elemente erfüllen möglicherweise nicht Ihre Anforderungen. Ein Beispiel: Rich-Text-Editoren erfassen kursiven, fettgedruckten und normalen Text, aber kein natives Formularelement erfasst Rich-Text. Dieser Anwendungsfall erfordert, dass Sie ein benutzerdefiniertes Steuerelement erstellen, das sowohl stylbar als auch editierbar ist. Dafür gibt es ein Attribut!

Jedes DOM-Element kann direkt editierbar gemacht werden, indem das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut verwendet wird.

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

Das `contenteditable`-Attribut fügt das Element automatisch zur Standard-Tabbing-Reihenfolge des Dokuments hinzu, was bedeutet, dass das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut nicht hinzugefügt werden muss. Wenn Sie jedoch nicht-semantische Elemente für die Dateneingabe verwenden, wenn Sie [Ihre eigenen Formularelemente erstellen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), müssen Sie JavaScript und [ARIA](/de/docs/Web/Accessibility/ARIA) hinzufügen, um das Element mit Formularsteuerungsfunktionalität für alles andere nachzurüsten.

Um eine gute Benutzererfahrung zu bieten, muss jedes benutzerdefinierte Formularelement, das Sie erstellen, zugänglich und so funktional wie native Formularelemente sein:

- Die [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles), [label](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) und [description](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) des Elements müssen mit ARIA hinzugefügt werden.
- Alle Benutzereingabemethoden müssen unterstützt werden, einschließlich [Tastatur](#tastatur), [Maus](#maus), [Touch](#finger_touch) und [Zeigereignisse](#zeigerereignisse), alle oben beschrieben.
- JavaScript ist erforderlich, um Funktionen wie [Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation), [Einsendung](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) und [Speichern](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript) von benutzeraktualisierten Inhalten zu verwalten.

{{EmbedLiveSample("contentEditable")}}

> [!NOTE]
> Beispiele und andere Ressourcen finden Sie im [Content Editable Leitfaden](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable).

## Anleitungen

- [Touch Events Leitfaden](/de/docs/Web/API/Touch_events)
- [Verwalten der Bildschirmorientierung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Vollbildmodus verwenden](/de/docs/Web/API/Fullscreen_API)
- [Drag Operations Leitfaden](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Formulare über JavaScript senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)

## Referenz

- [`MouseEvent`](/de/docs/Web/API/MouseEvent) Schnittstelle
- [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) Schnittstelle
- [Touch Events](/de/docs/Web/API/Touch_events) API
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API) API
- [Bildschirmorientierung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) API
- [Vollbild](/de/docs/Web/API/Fullscreen_API) API
- [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API) API
- HTML [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut
