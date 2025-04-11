---
title: Methoden und Steuerelemente für Benutzereingaben
slug: Learn_web_development/Extensions/Forms/User_input_methods
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Webformulare benötigen Benutzereingaben. Bei der Gestaltung von Webformularen oder allgemein jeglicher Webinhalte ist es wichtig zu betrachten, wie Benutzer mit ihren Geräten und Browsern interagieren. Web-Benutzereingaben gehen über einfache Maus- und Tastatureingaben hinaus: Denken Sie zum Beispiel an Touchscreens.

In diesem Artikel werfen wir einen Blick auf die verschiedenen Möglichkeiten, wie Benutzer mit Formularen und anderen Webinhalten interagieren, und geben Empfehlungen zur Verwaltung von Benutzereingaben, Praxisbeispiele und Links zu weiteren Informationen.

Wenn Sie komplexere und interaktive Formulare oder andere UI-Funktionen entwickeln, gibt es viele HTML-Elemente und JavaScript-APIs, die Sie untersuchen sollten. Zum Beispiel möchten Sie vielleicht benutzerdefinierte Formularelemente erstellen, die nicht-semantische Elemente erfordern, um bearbeitbar zu sein. Vielleicht möchten Sie Touch-Events unterstützen, die Ausrichtung des Bildschirms bestimmen oder steuern, ein Formular bildschirmfüllend darstellen oder Drag & Drop-Features ermöglichen. Dieser Leitfaden führt Sie in all diese Funktionen ein und verweist auf weitere Informationen zu jedem Thema.

Um ein gutes Benutzererlebnis für möglichst viele Nutzer zu bieten, müssen Sie mehrere Eingabemethoden unterstützen, einschließlich Maus, Tastatur, Fingertouch usw. Verfügbare Eingabemechanismen hängen von den Fähigkeiten des Geräts ab, auf dem die Anwendung ausgeführt wird.

Sie sollten stets auf Tastaturzugänglichkeit achten — viele Webbenutzer navigieren ausschließlich mit der Tastatur durch Websites und Apps, und diese Funktionalität ihnen vorzuenthalten, wäre keine gute Idee.

## Themenübersicht

- Um Touchscreen-Displays zu unterstützen, interpretieren [Touch-Events](/de/docs/Web/API/Touch_events) Fingeraktivitäten auf touchbasierten Benutzeroberflächen von mobilen Geräten, Kühlschrankpanelen bis hin zu Museumskiosken.
- Die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) ermöglicht es Ihnen, Ihre Inhalte im Vollbildmodus anzuzeigen, was erforderlich ist, wenn Ihr Formular auf einem Kühlschrank oder Museumskiosk bereitgestellt wird.
- Wenn Sie ein benutzerdefiniertes Formularelement erstellen müssen, wie einen Rich-Text-Editor, ermöglicht das [`contentEditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut das Erstellen von bearbeitbaren Steuerelementen aus normalerweise nicht bearbeitbaren HTML-Elementen.
- Die [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) ermöglicht es Benutzern, Elemente auf einer Seite zu ziehen und an verschiedenen Stellen abzulegen. Dies kann dazu beitragen, die Benutzererfahrung beim Auswählen von Dateien zum Hochladen oder beim Neuanordnen von Inhaltsmodulen innerhalb einer Seite zu verbessern.
- Wenn die Bildschirmausrichtung für Ihr Layout entscheidend ist, können Sie [CSS-Medienabfragen](/de/docs/Web/CSS/@media/orientation) verwenden, um Ihre Formulare basierend auf der Browserausrichtung zu gestalten, oder sogar die [Screen Orientation API](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) verwenden, um den Zustand der Bildschirmausrichtung abzulesen und weitere Aktionen durchzuführen.

Die folgenden Abschnitte bieten eine Reihe von Empfehlungen und bewährten Praktiken, um die größte mögliche Anzahl von Nutzern in die Lage zu versetzen, Ihre Websites und Anwendungen zu nutzen.

## Unterstützung gängiger Eingabemechanismen

### Tastatur

Die meisten Benutzer werden eine Tastatur verwenden, um Daten in Ihre Formularelemente einzugeben. Einige werden auch die Tastatur benutzen, um zu diesen Formularelementen zu navigieren. Um zugänglich zu sein und eine bessere Benutzererfahrung zu bieten, ist es wichtig, alle Formularelemente ordnungsgemäß [zu beschriften](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form#the_label_input_and_textarea_elements). Wenn jedes Formularelement korrekt mit einem {{htmlelement("label")}} verknüpft ist, wird Ihr Formular für alle zugänglich sein, insbesondere für alle, die mit einer Tastatur, Bildschirmlesegerät und möglicherweise ohne Bildschirm navigieren.

Wenn Sie zusätzliche Tastaturunterstützung hinzufügen möchten, wie z.B. die Validierung eines Formularelements, wenn eine bestimmte Taste gedrückt wird, können Sie Ereignis-Listener verwenden, um Tastaturereignisse zu erfassen und darauf zu reagieren. Wenn Sie beispielsweise Steuerelemente hinzufügen möchten, wenn eine beliebige Taste gedrückt wird, müssen Sie einen Ereignis-Listener auf dem Fensterobjekt hinzufügen:

```js
window.addEventListener("keydown", handleKeyDown, true);
window.addEventListener("keyup", handleKeyUp, true);
```

`handleKeyDown` und `handleKeyUp` sind Funktionen, die die Steuerungslogik definieren, die ausgeführt wird, wenn die Ereignisse `keydown` und `keyup` ausgelöst werden.

> [!NOTE]
> Schauen Sie sich die [Ereignisreferenz](/de/docs/Web/Events) und den [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)-Leitfaden an, um mehr über Tastaturereignisse zu erfahren.

### Maus

Sie können auch Maus- und andere Zeigegerätereignisse erfassen. Die Ereignisse, die auftreten, wenn der Benutzer mit einem Zeigegerät wie einer Maus interagiert, werden durch das [`MouseEvent`](/de/docs/Web/API/MouseEvent) DOM Interface dargestellt. Häufige Mausereignisse sind [`click`](/de/docs/Web/API/Element/click_event), [`dblclick`](/de/docs/Web/API/Element/dblclick_event), [`mouseup`](/de/docs/Web/API/Element/mouseup_event) und [`mousedown`](/de/docs/Web/API/Element/mousedown_event). Die Liste aller Ereignisse, die das Mouse Event Interface verwenden, finden Sie in der [Ereignisreferenz](/de/docs/Web/Events).

Wenn das Eingabegerät eine Maus ist, können Sie auch die Benutzereingabe über die Pointer Lock API steuern und Drag & Drop implementieren (siehe unten). Sie können auch [CSS verwenden, um zu testen, ob Zeigegeräte](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries#use_of_pointing_devices) unterstützt werden.

### Fingertouch

Um zusätzliche Unterstützung für Touchscreen-Geräte zu bieten, ist es eine gute Praxis, die unterschiedlichen Fähigkeiten in Bezug auf Bildschirmauflösung und Benutzereingaben zu berücksichtigen. [Touch-Events](/de/docs/Web/API/Touch_events) können Ihnen helfen, interaktive Elemente und gängige Interaktionsgesten auf Touchscreen-Geräte zu implementieren.

Wenn Sie Touch-Events verwenden möchten, müssen Sie Ereignis-Listener hinzufügen und Handlerfunktionen angeben, die aufgerufen werden, wenn das Ereignis ausgelöst wird:

```js
element.addEventListener("touchstart", handleStart, false);
element.addEventListener("touchcancel", handleCancel, false);
element.addEventListener("touchend", handleEnd, false);
element.addEventListener("touchmove", handleMove, false);
```

wobei `element` das DOM-Element ist, auf dem Sie die Touch-Events registrieren möchten.

> [!NOTE]
> Weitere Informationen darüber, was Sie mit Touch-Events tun können, finden Sie in unserem [Touch-Events-Leitfaden](/de/docs/Web/API/Touch_events).

### Zeigereignisse

Mäuse sind nicht die einzigen Zeigegeräte. Die Geräte Ihrer Benutzer können mehrere Eingabeformen umfassen, wie Maus, Fingertouch und Stifteingabe. Jeder dieser Zeiger hat eine andere Größe. Die [Pointer Events API](/de/docs/Web/API/Pointer_events) kann hilfreich sein, wenn Sie Ereignisse über mehrere Geräte hinweg verwalten müssen, indem sie die Behandlung jedes einzelnen normalisiert. Ein Zeiger kann jeder Punkt auf dem Bildschirm sein, der durch einen Mauszeiger, einen Stift, eine Berührung (einschließlich Multi-Touch) oder ein anderes Zeigereingabegerät gemacht wird.

Die Ereignisse zur Handhabung generischer Zeigereingaben ähneln stark denen der Maus: `pointerdown`, `pointermove`, `pointerup`, `pointerover`, `pointerout` usw. Das [`PointerEvent` Interface](/de/docs/Web/API/PointerEvent) bietet alle Details, die Sie über das Zeigereingabegerät erfassen möchten, einschließlich seiner Größe, seines Drucks und seines Winkels.

## Implementieren von Steuerelementen

### Bildschirmausrichtung

Wenn Sie leicht unterschiedliche Layouts benötigen, je nachdem, ob der Benutzer sich im Hoch- oder Querformat befindet, können Sie [CSS-Medienabfragen](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries#media_feature_rules) verwenden, um CSS für unterschiedliche Layouts oder Formularelementbreiten basierend auf der Größe oder Ausrichtung des Bildschirms beim [Gestalten von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) zu definieren.

Wenn die Bildschirmausrichtung für Ihr Formular wichtig ist, können Sie den Zustand der Bildschirmausrichtung ablesen, informiert werden, wenn sich dieser Zustand ändert, und die Bildschirmausrichtung auf einen bestimmten Zustand (gewöhnlich Hoch- oder Querformat) durch die Verwendung der [Screen Orientation API](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) fixieren.

- Ausrichtungsdaten können über [`screenOrientation.type`](/de/docs/Web/API/ScreenOrientation/type) oder mit CSS durch das Medienfeature [`orientation`](/de/docs/Web/CSS/@media/orientation) abgerufen werden.
- Wenn sich die Bildschirmausrichtung ändert, wird das [`change`](/de/docs/Web/API/ScreenOrientation/change_event)-Ereignis auf dem Bildschirmobjekt ausgelöst.
- Das Sperren der Bildschirmausrichtung ist möglich, indem die Methode [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) aufgerufen wird.
- Die Methode [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) entfernt alle bisherigen Bildschirmsperren.

> [!NOTE]
> Weitere Informationen zur Screen Orientation API finden Sie in [Managing screen orientation](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation).

### Vollbild

Wenn Sie Ihr Formular im Vollbildmodus präsentieren müssen, wie z.B., wenn Ihr Formular auf einem Museumskiosk, einer Mautstelle oder allgemein in einer öffentlich angezeigten Benutzeroberfläche angezeigt wird, können Sie dies erreichen, indem Sie [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf diesem Element aufrufen:

```js
const elem = document.getElementById("myForm");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

> [!NOTE]
> Um mehr darüber zu erfahren, wie Sie Vollbildfunktionalität zu Ihrer Anwendung hinzufügen, lesen Sie unsere Dokumentation über [die Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API).

### Drag & Drop

Eine häufige Benutzerinteraktion ist das physische Ziehen von Elementen, um sie an anderer Stelle auf dem Bildschirm abzulegen. Drag and Drop kann die Benutzererfahrung beim Auswählen von Dateien zum Hochladen oder beim Neuanordnen von Inhaltsmodulen innerhalb einer Seite verbessern. Es gibt eine API dafür!

Die [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API) API ermöglicht es Benutzern, ein Element anzuklicken, die Maustaste gedrückt zu halten, es an einen anderen Ort zu ziehen und die Maustaste loszulassen, um das Element dort fallen zu lassen.

Hier ein Beispiel, das erlaubt, einen Abschnitt eines Inhalts zu ziehen.

```html
<div
  draggable="true"
  ondragstart="event.dataTransfer.setData('text/plain', 'This text may be dragged')">
  This text <strong>may</strong> be dragged.
</div>
```

in dem wir:

- Das [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)-Attribut auf `true` setzen, bei dem Element, das Sie ziehbar machen möchten.
- Einen Listener für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis hinzufügen und die Ziehdaten innerhalb dieses Listeners setzen.

> [!NOTE]
> Weitere Informationen finden Sie in der [MDN Drag & Drop Dokumentation](/de/docs/Web/API/HTML_Drag_and_Drop_API).

### contentEditable

Normalerweise sollten Sie ein {{HTMLElement("textarea")}} oder einen geeigneten {{HTMLElement("input")}}-Typ innerhalb eines {{HTMLElement("form")}} verwenden, um Daten von Benutzern zu erfassen, zusammen mit einem beschreibenden {{HTMLElement("label")}}. Aber diese Elemente entsprechen möglicherweise nicht Ihren Anforderungen. Beispielsweise erfassen Rich-Text-Editoren kursiven, fettgedruckten und normalen Text, aber keine native Formularelement erfasst Rich-Text. Dieser Anwendungsfall erfordert, dass Sie ein benutzerdefiniertes Steuerelement erstellen, das sowohl stilisierbar als auch editierbar ist. Dafür gibt es ein Attribut!

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

Das `contenteditable`-Attribut fügt das Element automatisch der standardmäßigen Tab-Reihenfolge des Dokuments hinzu, was bedeutet, dass das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut nicht hinzugefügt werden muss. Wenn Sie jedoch nicht-semantische Elemente für die Dateneingabe verwenden, wenn Sie [Ihre eigenen Formularelemente erstellen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), müssen Sie JavaScript und [ARIA](/de/docs/Web/Accessibility/ARIA) hinzufügen, um das Element mit Funktionalität für Formularelemente für alles andere auszustatten.

Um ein gutes Benutzererlebnis zu bieten, muss jedes benutzerdefinierte Formularelement, das Sie erstellen, zugänglich sein und wie native Formularelemente funktionieren:

- Dem Element müssen mit ARIA die [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles), das [Label](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) und die [Beschreibung](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) hinzugefügt werden.
- Alle Benutzereingabemethoden müssen unterstützt werden, einschließlich [Tastatur](#tastatur), [Maus](#maus), [Touch](#fingertouch) und [Zeiger](#zeigereignisse) Ereignisse, die alle oben beschrieben sind.
- JavaScript ist erforderlich, um Funktionalitäten wie [Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation), [Einreichung](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) und das [Speichern](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript) aktualisierter Benutzerdaten zu handhaben.

{{EmbedLiveSample("contentEditable")}}

> [!NOTE]
> Beispiele und andere Ressourcen finden Sie im [Content Editable Leitfaden](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable).

## Tutorials

- [Touch events Leitfaden](/de/docs/Web/API/Touch_events)
- [Verwaltung der Bildschirmausrichtung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API)
- [Drag Operations Leitfaden](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Versenden von Formularen durch JavaScript](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)

## Referenz

- [`MouseEvent`](/de/docs/Web/API/MouseEvent) Interface
- [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) Interface
- [Touch events](/de/docs/Web/API/Touch_events) API
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API) API
- [Screen Orientation](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) API
- [Vollbild](/de/docs/Web/API/Fullscreen_API) API
- [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API) API
- HTML [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut
