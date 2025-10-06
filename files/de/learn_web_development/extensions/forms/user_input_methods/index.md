---
title: Benutzereingabemethoden und -steuerungen
short-title: UI-Methoden & Steuerungen
slug: Learn_web_development/Extensions/Forms/User_input_methods
l10n:
  sourceCommit: f85d2e26b062decf7a2bb9179c3a93003f4067a9
---

Webformulare erfordern Benutzereingaben. Bei der Gestaltung von Webformularen oder allgemein von Webinhalten ist es wichtig zu berücksichtigen, wie Benutzer mit ihren Geräten und Browsern interagieren. Web-Benutzereingaben gehen über einfache Maus- und Tastatureingaben hinaus: Denken Sie zum Beispiel an Touchscreens.

In diesem Artikel werfen wir einen Blick auf die verschiedenen Möglichkeiten, wie Benutzer mit Formularen und anderen Webinhalten interagieren. Wir geben Empfehlungen zum Umgang mit Benutzereingaben, reale Beispiele und Links zu weiterführenden Informationen.

Wenn Sie komplexere und interaktive Formulare oder andere UI-Features entwickeln, gibt es viele HTML-Elemente und JavaScript-APIs, die Sie untersuchen sollten. Zum Beispiel möchten Sie möglicherweise benutzerdefinierte Formularsteuerungen erstellen, die nicht-semantische Elemente erfordern, um den Inhalt bearbeitbar zu machen. Vielleicht möchten Sie Touch-Ereignisse unterstützen, die Ausrichtung des Bildschirms bestimmen oder steuern, ein Formular in den Vollbildmodus versetzen oder Drag & Drop-Funktionen aktivieren. Dieser Leitfaden stellt all diese Funktionen vor und verweist auf weitere Informationen zu jedem Thema.

Um eine gute Benutzererfahrung für die größtmögliche Anzahl von Nutzern bereitzustellen, sollten Sie mehrere Eingabemethoden unterstützen, einschließlich Maus, Tastatur, Fingertouch und so weiter. Verfügbare Eingabemechanismen hängen von den Fähigkeiten des Geräts ab, auf dem die Anwendung läuft.

Sie sollten immer aufmerksam auf die Tastaturzugänglichkeit achten — viele Webbenutzer verwenden nur die Tastatur, um Websites und Apps zu navigieren, und sie von Ihrer Funktionalität auszuschließen, ist keine gute Idee.

## Behandelte Themen

- Zur Unterstützung von Touchscreens interpretieren [Touch-Ereignisse](/de/docs/Web/API/Touch_events) die Fingeraktivität auf touch-basierten Benutzeroberflächen, von mobilen Geräten über Kühlschrank-Displays bis hin zu Museums-Kiosk-Anzeigen.
- Die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) ermöglicht es, Ihre Inhalte im Vollbildmodus anzuzeigen, was nötig ist, wenn Ihr Formular auf einem Kühlschrank oder einem Museums-Kiosk gezeigt wird.
- Wenn Sie eine benutzerdefinierte Formularsteuerung erstellen müssen, wie einen Rich-Text-Editor, ermöglicht das [`contentEditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut, bearbeitbare Steuerungen aus normalerweise nicht bearbeitbaren HTML-Elementen zu erstellen.
- Die [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) erlaubt es Benutzern, Elemente über eine Seite zu ziehen und an verschiedenen Orten abzulegen. Dies kann die Benutzererfahrung verbessern, wenn es um das Auswählen von Dateien zum Hochladen oder das Neuanordnen von Inhaltsmodulen innerhalb einer Seite geht.
- Wenn die Bildschirmausrichtung wichtig für Ihr Layout ist, können Sie [CSS Media Queries](/de/docs/Web/CSS/@media/orientation) verwenden, um Ihre Formulare basierend auf der Browserausrichtung zu gestalten, oder sogar die [Screen Orientation API](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) verwenden, um den Zustand der Bildschirmausrichtung zu lesen und andere Aktionen auszuführen.

Die folgenden Abschnitte bieten eine Reihe von Empfehlungen und bewährten Praktiken, um die größtmögliche Anzahl von Benutzern zu befähigen, Ihre Websites und Anwendungen zu nutzen.

## Unterstützung gängiger Eingabemechanismen

### Tastatur

Die meisten Benutzer werden eine Tastatur verwenden, um Daten in Ihre Formularsteuerungen einzugeben. Einige werden auch die Tastatur nutzen, um zu diesen Formularsteuerungen zu navigieren. Für die Barrierefreiheit und eine bessere Benutzererfahrung ist es wichtig, [alle Formularsteuerungen korrekt zu beschriften](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form#the_label_input_and_textarea_elements). Wenn jede Formularsteuerung korrekt mit einem {{htmlelement("label")}} verknüpft ist, wird Ihr Formular für alle vollständig zugänglich sein, insbesondere für alle, die Ihr Formular nur mit einer Tastatur, einem Bildschirmleser und möglicherweise ohne Bildschirm navigieren.

Wenn Sie zusätzliche Tastaturunterstützung hinzufügen möchten, beispielsweise um eine Formularsteuerung zu validieren, wenn eine bestimmte Taste gedrückt wird, können Sie Event-Listener verwenden, um Tastaturereignisse zu erfassen und darauf zu reagieren. Zum Beispiel, wenn Sie Steuerungen hinzufügen möchten, die aktiviert werden, wenn eine beliebige Taste gedrückt wird, müssen Sie einen Event-Listener am Fensterobjekt hinzufügen:

```js
window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);
```

`handleKeyDown` und `handleKeyUp` sind Funktionen, die die Steuerungslogik definieren, die ausgeführt werden soll, wenn die `keydown`- und `keyup`-Ereignisse ausgelöst werden.

> [!NOTE]
> Siehe den [DOM-Ereignisse-Leitfaden](/de/docs/Web/API/Document_Object_Model/Events) und die [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)-Referenz, um mehr über Tastaturereignisse zu erfahren.

### Maus

Sie können auch Maus- und andere Zeigerereignisse erfassen. Die Ereignisse, die auftreten, wenn der Benutzer mit einem Eingabegerät wie einer Maus interagiert, werden durch das [`MouseEvent`](/de/docs/Web/API/MouseEvent) DOM-Interface dargestellt. Häufige Mausereignisse umfassen [`click`](/de/docs/Web/API/Element/click_event), [`dblclick`](/de/docs/Web/API/Element/dblclick_event), [`mouseup`](/de/docs/Web/API/Element/mouseup_event) und [`mousedown`](/de/docs/Web/API/Element/mousedown_event). Die Liste aller Ereignisse, die das Mouse-Event-Interface verwenden, ist im [DOM-Ereignisleitfaden](/de/docs/Web/API/Document_Object_Model/Events#event_index) aufgeführt.

Wenn das Eingabegerät eine Maus ist, können Sie auch die Benutzereingabe über die Pointer Lock API steuern und Drag & Drop implementieren (siehe unten). Sie können auch [CSS verwenden, um Unterstützung für Zeigegeräte zu testen](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries#use_of_pointing_devices).

### Fingertouch

Um zusätzliche Unterstützung für Touchscreen-Geräte zu bieten, ist es eine gute Praxis, die unterschiedlichen Fähigkeiten in Bezug auf Bildschirmauflösung und Benutzereingabe zu berücksichtigen. [Touch-Ereignisse](/de/docs/Web/API/Touch_events) können Ihnen dabei helfen, interaktive Elemente und gängige Interaktionsgesten auf Touchscreen-Geräten zu implementieren.

Wenn Sie Touch-Ereignisse verwenden möchten, müssen Sie Event-Listener hinzufügen und Handlerfunktionen angeben, die aufgerufen werden, wenn das Ereignis ausgelöst wird:

```js
element.addEventListener("touchstart", handleStart);
element.addEventListener("touchcancel", handleCancel);
element.addEventListener("touchend", handleEnd);
element.addEventListener("touchmove", handleMove);
```

wobei `element` das DOM-Element ist, bei dem Sie die Touch-Ereignisse registrieren möchten.

> [!NOTE]
> Für weitere Informationen darüber, was Sie mit Touch-Ereignissen tun können, lesen Sie bitte unseren [Touch-Ereignis-Leitfaden](/de/docs/Web/API/Touch_events).

### Zeigerereignisse

Mäuse sind nicht die einzigen Eingabegeräte. Die Geräte Ihrer Benutzer können mehrere Eingabeformen unterstützen, wie Maus, Fingertouch und Stifteingabe. Jeder dieser Zeiger weist eine unterschiedliche Größe auf. Die [Pointer Events API](/de/docs/Web/API/Pointer_events) kann nützlich sein, wenn Sie Ereignisse geräteübergreifend verwalten müssen, indem Sie die Handhabung jedes Eingabegeräts normalisieren. Ein Zeiger kann jeder Punkt auf dem Bildschirm sein, der durch einen Mauszeiger, einen Stift, eine Berührung (einschließlich Multi-Touch) oder eine andere Zeigereingabeeinheit erzeugt wird.

Die Ereignisse zur Behandlung allgemeiner Zeigereingaben ähneln sehr denen der Maus: `pointerdown`, `pointermove`, `pointerup`, `pointerover`, `pointerout`, usw. Das [`PointerEvent` Interface](/de/docs/Web/API/PointerEvent) bietet alle Details, die Sie über das Zeigereingabegerät erfassen möchten, einschließlich seiner Größe, des Drucks und des Winkels.

## Steuerungen implementieren

### Bildschirmausrichtung

Wenn Sie leicht unterschiedliche Layouts benötigen, je nachdem, ob der Benutzer im Hoch- oder Querformat ist, können Sie [CSS Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries#media_feature_rules) verwenden, um CSS für unterschiedliche Layouts oder Formularsteuerungsbreiten basierend auf der Größe oder Ausrichtung des Bildschirms beim [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) zu definieren.

Wenn die Bildschirmausrichtung für Ihr Formular wichtig ist, können Sie den Zustand der Bildschirmausrichtung lesen, informiert werden, wenn sich dieser Zustand ändert, und die Bildschirmausrichtung auf einen bestimmten Zustand (in der Regel Hoch- oder Querformat) sperren, indem Sie die [Screen Orientation API](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) verwenden.

- Ausrichtungsdaten können über [`screenOrientation.type`](/de/docs/Web/API/ScreenOrientation/type) oder mit CSS über die [`orientation`](/de/docs/Web/CSS/@media/orientation) Media Feature abgerufen werden.
- Wenn sich die Bildschirmausrichtung ändert, wird das [`change`](/de/docs/Web/API/ScreenOrientation/change_event)-Ereignis auf dem Bildschirmobjekt ausgelöst.
- Das Sperren der Bildschirmausrichtung ist durch Aufrufen der [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock)-Methode möglich.
- Die [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock)-Methode entfernt alle zuvor gesetzten Bildschirmsperren.

> [!NOTE]
> Weitere Informationen zur Screen Orientation API finden Sie in [Managing screen orientation](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation).

### Vollbild

Wenn Sie Ihr Formular im Vollbildmodus präsentieren müssen, z. B. wenn Ihr Formular auf einem Museumskiosk, einer Mautstation oder in einer beliebig öffentlich angezeigten Benutzeroberfläche angezeigt wird, ist es möglich, dies zu tun, indem Sie [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf diesem Element aufrufen:

```js
const elem = document.getElementById("myForm");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

> [!NOTE]
> Um mehr darüber zu erfahren, wie Sie Ihrer Anwendung Vollbildfunktionalität hinzufügen können, lesen Sie unsere Dokumentation zu [using fullscreen mode](/de/docs/Web/API/Fullscreen_API).

### Drag & Drop

Eine häufige Benutzerinteraktion ist das physische Ziehen von Elementen, um sie an anderer Stelle auf dem Bildschirm abzulegen. Drag and Drop kann die Benutzererfahrung verbessern, wenn es darum geht, Dateien zum Hochladen auszuwählen oder Inhaltsmodule innerhalb einer Seite neu anzuordnen. Dafür gibt es eine API!

Die [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API) API ermöglicht es Benutzern, ein Element anzuklicken und die Maustaste gedrückt zu halten, es an eine andere Stelle zu ziehen und die Maustaste loszulassen, um das Element dort abzulegen.

Hier ist ein Beispiel, das es ermöglicht, einen Abschnitt von Inhalten zu ziehen.

```html
<div draggable="true">This text <strong>may</strong> be dragged.</div>
```

```js
document.querySelector("div").addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", "This text may be dragged.");
});
```

bei dem wir:

- Das [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)-Attribut auf `true` für das Element setzen, das Sie drag-and-drop-fähig machen möchten.
- Einen Listener für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Event hinzufügen und die Drag-Daten innerhalb dieses Listeners setzen.

> [!NOTE]
> Weitere Informationen finden Sie in der [MDN Drag & Drop-Dokumentation](/de/docs/Web/API/HTML_Drag_and_Drop_API).

### contentEditable

In der Regel sollten Sie ein {{HTMLElement("textarea")}} oder einen geeigneten {{HTMLElement("input")}}-Typ innerhalb eines {{HTMLElement("form")}} verwenden, um Daten von Benutzern zu sammeln, zusammen mit einem beschreibenden {{HTMLElement("label")}}. Aber diese Elemente entsprechen möglicherweise nicht Ihren Anforderungen. Beispielsweise erfassen Rich-Text-Editoren kursiven, fetten und normalen Text, aber kein nativer Formularkontrolle erfasst Rich-Text. Dieser Anwendungsfall erfordert, dass Sie eine benutzerdefinierte Steuerung erstellen, die sowohl stilisierbar als auch bearbeitbar ist. Dafür gibt es ein Attribut!

Jedes DOM-Element kann mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut direkt bearbeitbar gemacht werden.

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

Das `contenteditable`-Attribut fügt das Element automatisch der Standard-Tabulatorreihenfolge des Dokuments hinzu, was bedeutet, dass das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut nicht hinzugefügt werden muss. Wenn Sie jedoch nicht-semantische Elemente zur Dateneingabe verwenden, wenn Sie [eigene Formularsteuerungen erstellen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), müssen Sie JavaScript und [ARIA](/de/docs/Web/Accessibility/ARIA) hinzufügen, um das Element mit Formularsteuerungsfunktionalität für alles andere auszustatten.

Um eine gute Benutzererfahrung zu bieten, muss jede benutzerdefinierte Formularsteuerung, die Sie erstellen, zugänglich sein und wie native Formularelemente funktionieren:

- Der [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) des Elements, [label](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) und [description](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) müssen mit ARIA hinzugefügt werden.
- Alle Benutzereingabemethoden müssen unterstützt werden, einschließlich [Tastatur](#tastatur), [Maus](#maus), [Touch](#fingertouch) und [Zeiger](#zeigerereignisse)-Ereignisse, die alle oben beschrieben wurden.
- JavaScript ist erforderlich, um Funktionalität wie [Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation), [Einsendung](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) und [Speicherung](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript) von benutzeraktualisierten Inhalten zu handhaben.

{{EmbedLiveSample("contentEditable")}}

> [!NOTE]
> Beispiele und weitere Ressourcen finden Sie im [Content Editable-Leitfaden](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable).

## Tutorials

- [Touch-Ereignis-Leitfaden](/de/docs/Web/API/Touch_events)
- [Verwaltung der Bildschirmausrichtung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API)
- [Drag-Operationen-Leitfaden](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Versenden von Formularen durch JavaScript](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)

## Referenz

- [`MouseEvent`](/de/docs/Web/API/MouseEvent) Interface
- [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) Interface
- [Touch Events](/de/docs/Web/API/Touch_events) API
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API) API
- [Screen Orientation](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) API
- [Fullscreen](/de/docs/Web/API/Fullscreen_API) API
- [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API) API
- HTML [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut
