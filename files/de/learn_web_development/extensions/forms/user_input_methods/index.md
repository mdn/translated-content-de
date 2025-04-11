---
title: Methoden und Steuerungen für Benutzereingaben
slug: Learn_web_development/Extensions/Forms/User_input_methods
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

Web-Formulare erfordern Benutzereingaben. Bei der Gestaltung von Web-Formularen oder generell jedem Web-Inhalt ist es wichtig, zu berücksichtigen, wie Benutzer mit ihren Geräten und Browsern interagieren. Web-Benutzereingaben gehen über einfache Maus und Tastatur hinaus: Denken Sie z.B. an Touchscreens.

In diesem Artikel werfen wir einen Blick auf die verschiedenen Möglichkeiten, wie Benutzer mit Formularen und anderen Web-Inhalten interagieren und geben Empfehlungen zur Verwaltung von Benutzereingaben, realen Beispielen und Links zu weiteren Informationen.

Wenn Sie komplexere und interaktive Formulare oder andere UI-Features entwickeln, gibt es viele HTML-Elemente und JavaScript-APIs, die Sie untersuchen möchten. Zum Beispiel könnten Sie benutzerdefinierte Formularelemente erstellen wollen, die nicht-semantische Elemente benötigen, um Inhalte bearbeitbar zu machen. Sie könnten Unterstützung für Touch-Events hinzufügen, die Orientierung des Bildschirms bestimmen oder steuern, ein Formular über den gesamten Bildschirm anzeigen lassen oder Drag-and-Drop-Funktionen aktivieren. Dieser Leitfaden stellt all diese Funktionen vor und verweist auf weitere Informationen zu jedem Thema.

Um eine gute Erfahrung für die größtmögliche Anzahl von Benutzern zu bieten, müssen Sie mehrere Eingabemethoden unterstützen, einschließlich Maus, Tastatur, Fingerberührung und so weiter. Verfügbare Eingabemechanismen hängen von den Fähigkeiten des Geräts ab, auf dem die Anwendung läuft.

Sie sollten immer an die Tastaturzugänglichkeit denken — viele Web-Nutzer verwenden nur die Tastatur, um durch Websites und Apps zu navigieren, und sie aus Ihrer Funktionalität auszuschließen, ist keine gute Idee.

## Behandelte Themen

- Um Touchscreen-Anzeigen zu unterstützen, interpretieren [Touch-Events](/de/docs/Web/API/Touch_events) die Fingeraktivitäten auf berührungsbasierten Benutzeroberflächen von Mobilgeräten bis hin zu Kühlschrank-Panels und Museumskiosken.
- Die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) ermöglicht es, Ihre Inhalte im Vollbildmodus anzuzeigen, was erforderlich ist, wenn Ihr Formular auf einem Kühlschrank oder einem Museumskiosk bedient wird.
- Wenn Sie ein benutzerdefiniertes Formularelement wie einen Rich-Text-Editor erstellen müssen, ermöglicht das [`contentEditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut die Erstellung von bearbeitbaren Steuerelementen aus normalerweise nicht bearbeitbaren HTML-Elementen.
- Die [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) ermöglicht es Benutzern, Elemente auf einer Seite zu ziehen und an verschiedenen Stellen abzulegen. Dies kann das Benutzererlebnis verbessern, wenn es darum geht, Dateien zum Hochladen auszuwählen oder Inhaltsmodule auf einer Seite neu anzuordnen.
- Wenn die Bildschirmausrichtung für Ihr Layout wichtig ist, können Sie [CSS-Media-Queries](/de/docs/Web/CSS/@media/orientation) verwenden, um Ihre Formulare basierend auf der Browserausrichtung zu stylen, oder sogar die [Screen Orientation API](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) verwenden, um den Zustand der Bildschirmausrichtung zu lesen und andere Aktionen durchzuführen.

Die folgenden Abschnitte bieten eine Reihe von Empfehlungen und Best Practices, um die größte mögliche Anzahl von Benutzern zu ermöglichen, Ihre Websites und Anwendungen zu nutzen.

## Unterstützung gängiger Eingabemechanismen

### Tastatur

Die meisten Benutzer werden eine Tastatur verwenden, um Daten in Ihre Formularelemente einzugeben. Einige werden die Tastatur auch verwenden, um zu den Formularelementen zu navigieren. Um zugänglich zu sein und ein besseres Benutzererlebnis zu bieten, ist es wichtig, alle Formularelemente ordnungsgemäß zu [beschriften](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form#the_label_input_and_textarea_elements). Wenn jedes Formularelement korrekt mit einem {{htmlelement("label")}} verknüpft ist, wird Ihr Formular für alle vollständig zugänglich sein, insbesondere für Personen, die mit einer Tastatur, einem Bildschirmleser und eventuell ohne Bildschirm navigieren.

Wenn Sie zusätzliche Tastaturunterstützung hinzufügen möchten, wie z.B. das Validieren eines Formularelements, wenn eine bestimmte Taste gedrückt wird, können Sie Ereignis-Listener verwenden, um Tastaturereignisse zu erfassen und darauf zu reagieren. Wenn Sie beispielsweise Steuerungen hinzufügen möchten, wenn eine Taste gedrückt wird, müssen Sie einen Ereignis-Listener auf dem Fensterobjekt hinzufügen:

```js
window.addEventListener("keydown", handleKeyDown, true);
window.addEventListener("keyup", handleKeyUp, true);
```

`handleKeyDown` und `handleKeyUp` sind Funktionen, die die Kontrolllogik definieren, die ausgeführt wird, wenn die `keydown` und `keyup` Ereignisse ausgelöst werden.

> [!NOTE]
> Schauen Sie sich die [Ereignisreferenz](/de/docs/Web/Events) und den [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)-Leitfaden an, um mehr über Tastaturereignisse zu erfahren.

### Maus

Sie können auch Maus- und andere Zeigerereignisse erfassen. Die Ereignisse, die auftreten, wenn der Benutzer mit einem Zeigegerät wie einer Maus interagiert, werden durch das [`MouseEvent`](/de/docs/Web/API/MouseEvent)-DOM-Interface repräsentiert. Häufige Mausereignisse umfassen [`click`](/de/docs/Web/API/Element/click_event), [`dblclick`](/de/docs/Web/API/Element/dblclick_event), [`mouseup`](/de/docs/Web/API/Element/mouseup_event) und [`mousedown`](/de/docs/Web/API/Element/mousedown_event). Die Liste aller Ereignisse, die das Mouse-Event-Interface verwenden, finden Sie in der [Ereignisreferenz](/de/docs/Web/Events).

Wenn das Eingabegerät eine Maus ist, können Sie die Benutzereingabe auch über die Pointer Lock API steuern und Drag & Drop implementieren (siehe unten). Sie können auch [CSS verwenden, um die Unterstützung von Zeigegeräten zu testen](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries#use_of_pointing_devices).

### Fingerberührung

Um zusätzliche Unterstützung für Touchscreen-Geräte bereitzustellen, ist es eine gute Praxis, die unterschiedlichen Möglichkeiten in Bezug auf Bildschirmauflösung und Benutzereingabe zu berücksichtigen. [Touch-Events](/de/docs/Web/API/Touch_events) können Ihnen helfen, interaktive Elemente und gängige Interaktionsgesten auf Touchscreen-Geräten zu implementieren.

Wenn Sie Touch-Events verwenden möchten, müssen Sie Ereignis-Listener hinzufügen und Handler-Funktionen angeben, die aufgerufen werden, wenn das Ereignis ausgelöst wird:

```js
element.addEventListener("touchstart", handleStart, false);
element.addEventListener("touchcancel", handleCancel, false);
element.addEventListener("touchend", handleEnd, false);
element.addEventListener("touchmove", handleMove, false);
```

wo `element` das DOM-Element ist, das Sie für die Touch-Events registrieren möchten.

> [!NOTE]
> Weitere Informationen darüber, was Sie mit Touch-Events tun können, finden Sie in unserem [Touch-Events-Leitfaden](/de/docs/Web/API/Touch_events).

### Zeigerereignisse

Mäuse sind nicht die einzigen Zeigegeräte. Die Geräte Ihrer Benutzer können mehrere Eingabearten integrieren, wie Maus, Fingerberührung und Stifteingabe. Jeder dieser Zeiger hat eine andere Größe. Die [Pointer Events API](/de/docs/Web/API/Pointer_events) kann nützlich sein, wenn Sie Ereignisse auf verschiedenen Geräten verwalten müssen, indem Sie die Handhabung jeder Eingabeart vereinheitlichen. Ein Zeiger kann jeden Berührungspunkt auf dem Bildschirm darstellen, der durch einen Mauszeiger, einen Stift, eine Berührung (einschließlich Mehrfachtouch) oder ein anderes Zeigeeingabegerät erfolgt.

Die Ereignisse zur Handhabung generischer Zeigereingaben sehen ähnlich aus wie die für Maus: `pointerdown`, `pointermove`, `pointerup`, `pointerover`, `pointerout`, etc. Das [`PointerEvent`-Interface](/de/docs/Web/API/PointerEvent) liefert alle Details, die Sie über das Zeigereingabegerät erfassen möchten, einschließlich seiner Größe, Druck und Winkel.

## Steuerungen implementieren

### Bildschirmausrichtung

Wenn Sie je nach Ausrichtung des Benutzers im Hoch- oder Querformat leicht unterschiedliche Layouts benötigen, können Sie [CSS-Media-Queries](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries#media_feature_rules) verwenden, um CSS für verschiedene Layouts oder Formhalf-Breiten basierend auf der Größe oder Ausrichtung des Bildschirms beim [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) zu definieren.

Wenn die Bildschirmausrichtung für Ihr Formular eine Rolle spielt, können Sie den Zustand der Bildschirmausrichtung lesen, informiert werden, wenn sich dieser Zustand ändert, und die Bildschirmausrichtung auf einen bestimmten Zustand (normalerweise Hoch- oder Querformat) sperren, indem Sie die [Screen Orientation API](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) verwenden.

- Orientierungsdaten können über [`screenOrientation.type`](/de/docs/Web/API/ScreenOrientation/type) oder mit CSS über das [`orientation`](/de/docs/Web/CSS/@media/orientation)-Medienfeature abgerufen werden.
- Wenn sich die Bildschirmausrichtung ändert, wird das [`change`](/de/docs/Web/API/ScreenOrientation/change_event)-Ereignis auf dem Bildschirmobjekt ausgelöst.
- Das Sperren der Bildschirmausrichtung ist möglich, indem die Methode [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) aufgerufen wird.
- Die Methode [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) entfernt alle vorherigen Bildschirmsperren, die festgelegt wurden.

> [!NOTE]
> Weitere Informationen zur Screen Orientation API finden Sie unter [Bildschirmausrichtung verwalten](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation).

### Vollbild

Wenn Sie Ihr Formular im Vollbildmodus präsentieren müssen, z.B. wenn Ihr Formular auf einem Museumskiosk, einer Mautstelle oder wirklich jeder öffentlich sichtbaren Benutzeroberfläche angezeigt wird, ist es möglich, dies zu tun, indem Sie [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf diesem Element aufrufen:

```js
const elem = document.getElementById("myForm");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

> [!NOTE]
> Um mehr über das Hinzufügen von Vollbild-Funktionalität zu Ihrer Anwendung zu erfahren, lesen Sie unsere Dokumentation über [das Verwenden des Vollbildmodus](/de/docs/Web/API/Fullscreen_API).

### Drag & Drop

Eine häufige Benutzerinteraktion ist das physische Ziehen von Elementen, um sie an anderer Stelle auf dem Bildschirm abzulegen. Drag and Drop kann das Benutzererlebnis verbessern, wenn es darum geht, Dateien zum Hochladen auszuwählen oder Inhaltsmodule auf einer Seite neu anzuordnen. Dafür gibt es eine API!

Die [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API) API ermöglicht es Benutzern, auf ein Element zu klicken und die Maustaste nach unten zu halten, es an einen anderen Ort zu ziehen und die Maustaste loszulassen, um das Element dort abzulegen.

Hier ist ein Beispiel, das es erlaubt, einen Inhaltsabschnitt zu ziehen.

```html
<div
  draggable="true"
  ondragstart="event.dataTransfer.setData('text/plain', 'This text may be dragged')">
  This text <strong>may</strong> be dragged.
</div>
```

in dem wir:

- Das [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)-Attribut auf `true` setzen bei dem Element, das Sie ziehbar machen möchten.
- Einen Listener für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis hinzufügen und die Ziehdaten innerhalb dieses Listeners festlegen.

> [!NOTE]
> Weitere Informationen finden Sie in der [MDN Drag & Drop Dokumentation](/de/docs/Web/API/HTML_Drag_and_Drop_API).

### contentEditable

Generell sollten Sie ein {{HTMLElement("textarea")}} oder einen passenden {{HTMLElement("input")}}-Typ innerhalb eines {{HTMLElement("form")}} verwenden, um Daten von Benutzern zu sammeln, zusammen mit einem beschreibenden {{HTMLElement("label")}}. Aber diese Elemente erfüllen möglicherweise nicht Ihre Bedürfnisse. Zum Beispiel erfassen Rich-Text-Editoren kursiven, fetten und normalen Text, aber keine nativen Formularelemente erfassen Rich-Text. Diese Anforderung erfordert, dass Sie eine benutzerdefinierte Steuerung erstellen, die sowohl stilisierbar als auch bearbeitbar ist. Dafür gibt es ein Attribut!

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

Das `contenteditable`-Attribut fügt das Element automatisch der standardmäßigen Tab-Reihenfolge des Dokuments hinzu, d.h. das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut muss nicht hinzugefügt werden. Wenn Sie jedoch nicht-semantische Elemente für die Dateneingabe verwenden, wenn Sie [Ihre eigenen Formularelemente erstellen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), müssen Sie JavaScript und [ARIA](/de/docs/Web/Accessibility/ARIA) hinzufügen, um das Element mit Formularelement-Funktionalität für alles andere nachzurüsten.

Um ein gutes Benutzererlebnis zu bieten, muss jedes benutzerdefinierte Formularelement, das Sie erstellen, zugänglich sein und wie native Formularelemente funktionieren:

- Die Rolle des Elements, sein [label](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) und seine [Beschreibung](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) müssen mit ARIA hinzugefügt werden.
- Alle Benutzereingabemethoden müssen unterstützt werden, einschließlich [Tastatur](#tastatur), [Maus](#maus), [Touch](#fingerberührung) und [Zeiger](#zeigerereignisse) Ereignissen, die oben beschrieben wurden.
- JavaScript ist erforderlich, um Funktionalitäten wie [Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation), [Einsendung](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) und [Speichern](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript) von durch Benutzer aktualisiertem Inhalt zu handhaben.

{{EmbedLiveSample("contentEditable")}}

> [!NOTE]
> Beispiele und andere Ressourcen finden Sie im [Content Editable Leitfaden](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable).

## Tutorials

- [Touch-Events-Leitfaden](/de/docs/Web/API/Touch_events)
- [Bildschirmausrichtung verwalten](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Den Vollbildmodus verwenden](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden für Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Formulare über JavaScript senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)

## Referenz

- [`MouseEvent`](/de/docs/Web/API/MouseEvent) Interface
- [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) Interface
- [Touch Events](/de/docs/Web/API/Touch_events) API
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API) API
- [Screen Orientation](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) API
- [Fullscreen](/de/docs/Web/API/Fullscreen_API) API
- [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API) API
- HTML [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut
