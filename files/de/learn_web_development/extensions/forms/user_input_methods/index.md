---
title: Eingabemethoden und Steuerungen für Benutzer
slug: Learn_web_development/Extensions/Forms/User_input_methods
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

Webformulare erfordern Benutzereingaben. Bei der Gestaltung von Webformularen oder jeglichen Webinhalten ist es wichtig, zu berücksichtigen, wie Benutzer mit ihren Geräten und Browsern interagieren. Benutzerinteraktionen im Web gehen über einfache Maus- und Tastatureingaben hinaus: Denken Sie zum Beispiel an Touchscreens.

In diesem Artikel werfen wir einen Blick auf die verschiedenen Möglichkeiten, wie Benutzer mit Formularen und anderen Webinhalten interagieren. Wir geben Empfehlungen zur Verwaltung von Benutzereingaben, liefern praxisnahe Beispiele und Links zu weiterführenden Informationen.

Wenn Sie komplexere und interaktive Formulare oder andere Benutzeroberflächen-Features entwickeln, gibt es viele HTML-Elemente und JavaScript-APIs, die Sie in Betracht ziehen möchten. Sie könnten zum Beispiel benutzerdefinierte Formularelemente erstellen, die nicht-semantische Elemente erfordern, um Inhalte bearbeitbar zu machen. Sie könnten Touch-Ereignisse unterstützen, die Bildschirmorientierung bestimmen oder steuern, ein Formular im Vollbildmodus darstellen oder Drag-and-Drop-Funktionen aktivieren. Dieser Leitfaden stellt all diese Funktionen vor und verweist auf weiterführende Informationen zu jedem Thema.

Um eine gute Benutzererfahrung für die größtmögliche Anzahl von Benutzern zu bieten, müssen Sie mehrere Eingabemethoden unterstützen, einschließlich Maus, Tastatur, Fingerberührung und so weiter. Verfügbare Eingabemechanismen hängen von den Fähigkeiten des Geräts ab, auf dem die Anwendung läuft.

Sie sollten immer die Tastaturzugänglichkeit im Auge behalten – viele Webbenutzer navigieren nur mit der Tastatur durch Websites und Apps, und sie von Ihrer Funktionalität auszuschließen, ist keine gute Idee.

## Behandelte Themen

- Um Touchscreen-Displays zu unterstützen, interpretieren [Touch-Ereignisse](/de/docs/Web/API/Touch_events) Fingeraktivitäten auf touchbasierten Benutzeroberflächen, von mobilen Geräten über Kühlschrankpanels bis hin zu Museumskioskanzeigen.
- Die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) ermöglicht es Ihnen, Ihre Inhalte im Vollbildmodus anzuzeigen, was notwendig ist, wenn Ihr Formular auf einem Kühlschrank oder Museumskiosk bereitgestellt wird.
- Wenn Sie ein benutzerdefiniertes Formularelement erstellen müssen, wie einen Rich-Text-Editor, ermöglicht das [`contentEditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut die Erstellung bearbeitbarer Steuerelemente aus normalerweise nicht bearbeitbaren HTML-Elementen.
- Die [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) erlaubt Benutzern, Elemente auf einer Seite zu ziehen und an verschiedenen Stellen abzulegen, was die Benutzererfahrung beim Auswählen von Dateien zum Hochladen oder beim Neuanordnen von Inhaltsmodulen innerhalb einer Seite verbessern kann.
- Wenn die Bildschirmorientierung für Ihr Layout wichtig ist, können Sie [CSS-Medienabfragen](/de/docs/Web/CSS/@media/orientation) verwenden, um Ihre Formulare basierend auf der Orientierung des Browsers zu stylen. Sie können auch die [Screen Orientation API](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) verwenden, um den Bildschirmorientierungsstatus zu lesen und andere Aktionen durchzuführen.

Die folgenden Abschnitte bieten eine Reihe von Empfehlungen und Best Practices, um die größtmögliche Anzahl von Benutzern in die Lage zu versetzen, Ihre Websites und Anwendungen zu nutzen.

## Unterstützung gängiger Eingabemechanismen

### Tastatur

Die meisten Benutzer werden eine Tastatur verwenden, um Daten in Ihre Formularelemente einzugeben. Einige werden auch die Tastatur verwenden, um zu diesen Formularelementen zu navigieren. Zu beachten ist, dass alle Formularelemente ordnungsgemäß [beschriftet](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form#the_label_input_and_textarea_elements) sind, um zugänglich zu sein und eine bessere Benutzererfahrung zu bieten. Wenn jedes Formularelement korrekt mit einem {{htmlelement("label")}} verknüpft ist, ist Ihr Formular für alle voll zugänglich, insbesondere für diejenigen, die mit einer Tastatur, einem Screenreader und möglicherweise ohne Bildschirm navigieren.

Wenn Sie zusätzliche Tastaturunterstützung hinzufügen möchten, wie zum Beispiel die Validierung eines Formularelements bei Drücken einer bestimmten Taste, können Sie Ereignislistener verwenden, um auf Tastaturereignisse zu reagieren. Zum Beispiel, wenn Sie Steuerelemente hinzufügen möchten, wenn eine beliebige Taste gedrückt wird, müssen Sie einen Ereignislistener für das Fenster-Objekt hinzufügen:

```js
window.addEventListener("keydown", handleKeyDown, true);
window.addEventListener("keyup", handleKeyUp, true);
```

`handleKeyDown` und `handleKeyUp` sind Funktionen, die die Kontrolllogik definieren, die ausgeführt wird, wenn die `keydown` und `keyup` Ereignisse ausgelöst werden.

> [!NOTE]
> Schauen Sie sich die [Ereignisreferenz](/de/docs/Web/Events) und den [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) Leitfaden an, um mehr über Tastaturereignisse zu erfahren.

### Maus

Sie können auch Maus- und andere Zeigereignisse erfassen. Die Ereignisse, die auftreten, wenn der Benutzer mit einem Zeigegerät wie einer Maus interagiert, werden durch das [`MouseEvent`](/de/docs/Web/API/MouseEvent) DOM-Interface dargestellt. Häufige Mausereignisse sind [`click`](/de/docs/Web/API/Element/click_event), [`dblclick`](/de/docs/Web/API/Element/dblclick_event), [`mouseup`](/de/docs/Web/API/Element/mouseup_event) und [`mousedown`](/de/docs/Web/API/Element/mousedown_event). Eine Liste aller Ereignisse, die das Mausereignis-Interface verwenden, finden Sie in der [Ereignisreferenz](/de/docs/Web/Events).

Wenn das Eingabegerät eine Maus ist, können Sie auch Benutzereingaben über die Pointer Lock API steuern und Drag & Drop implementieren (siehe unten). Sie können auch [CSS verwenden, um die Unterstützung von Zeigegeräten zu testen](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries#use_of_pointing_devices).

### Fingerberührung

Um zusätzliche Unterstützung für Touchscreen-Geräte bereitzustellen, ist es ratsam, die unterschiedlichen Fähigkeiten in Bezug auf Bildschirmauflösung und Benutzereingabe zu berücksichtigen. [Touch-Ereignisse](/de/docs/Web/API/Touch_events) können Ihnen helfen, interaktive Elemente und gängige Interaktionsgesten auf Touchscreen-Geräten zu implementieren.

Wenn Sie Touch-Ereignisse verwenden möchten, müssen Sie Ereignislistener hinzufügen und Handlerfunktionen angeben, die aufgerufen werden sollen, wenn das Ereignis ausgelöst wird:

```js
element.addEventListener("touchstart", handleStart, false);
element.addEventListener("touchcancel", handleCancel, false);
element.addEventListener("touchend", handleEnd, false);
element.addEventListener("touchmove", handleMove, false);
```

wobei `element` das DOM-Element ist, auf dem Sie die Touch-Ereignisse registrieren möchten.

> [!NOTE]
> Für weitere Informationen darüber, was Sie mit Touch-Ereignissen tun können, lesen Sie bitte unseren [Touch-Ereignisse-Leitfaden](/de/docs/Web/API/Touch_events).

### Zeigereignisse

Mäuse sind nicht die einzigen Zeigegeräte. Die Geräte Ihrer Benutzer können mehrere Eingabeformen wie Maus, Fingerberührung und Stifteingabe enthalten. Jeder dieser Zeiger hat eine andere Größe. Die [Pointer Events API](/de/docs/Web/API/Pointer_events) kann nützlich sein, wenn Sie Ereignisse geräteübergreifend verwalten müssen, indem Sie die Handhabung jedes einzelnen normalisieren. Ein Zeiger kann jeder Kontaktpunkt auf dem Bildschirm sein, der von einem Mauszeiger, Stift, Berührung (einschließlich Multi-Touch) oder einem anderen Eingabegerät erzeugt wird.

Die Ereignisse zur Behandlung von generischer Zeigereingabe sehen ähnlich aus wie die für die Maus: `pointerdown`, `pointermove`, `pointerup`, `pointerover`, `pointerout`, etc. Das [`PointerEvent` Interface](/de/docs/Web/API/PointerEvent) bietet alle Details, die Sie möglicherweise über das Zeigegerät erfassen möchten, einschließlich seiner Größe, Druck und Winkel.

## Steuerungen implementieren

### Bildschirmorientierung

Wenn Sie leicht unterschiedliche Layouts benötigen, je nachdem, ob der Benutzer den Hoch- oder Querformatmodus verwendet, können Sie [CSS-Medienabfragen](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries#media_feature_rules) verwenden, um CSS für verschiedene Layouts oder Formularelementbreiten basierend auf der Größe oder Ausrichtung des Bildschirms beim [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) zu definieren.

Wenn die Bildschirmorientierung für Ihr Formular wichtig ist, können Sie den Bildschirmorientierungsstatus lesen, benachrichtigt werden, wenn sich dieser Zustand ändert, und in der Lage sein, die Bildschirmorientierung auf einen bestimmten Zustand (normalerweise Hochformat oder Querformat) zu sperren, durch die [Screen Orientation API](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation).

- Die Orientierungsdaten können über [`screenOrientation.type`](/de/docs/Web/API/ScreenOrientation/type) oder mit CSS durch die [`orientation`](/de/docs/Web/CSS/@media/orientation) Medienfunktion abgerufen werden.
- Wenn sich die Bildschirmorientierung ändert, wird das [`change`](/de/docs/Web/API/ScreenOrientation/change_event) Ereignis für das Bildschirmobjekt ausgelöst.
- Das Sperren der Bildschirmorientierung ist möglich, indem die Methode [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) aufgerufen wird.
- Die Methode [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) entfernt alle zuvor gesetzten Bildschirmsperren.

> [!NOTE]
> Weitere Informationen zur Screen Orientation API finden Sie unter [Verwaltung der Bildschirmorientierung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation).

### Vollbild

Wenn Sie Ihr Formular im Vollbildmodus präsentieren müssen, wie zum Beispiel, wenn Ihr Formular auf einem Museumskiosk, einer Mautstation oder wirklich jeder öffentlich angezeigten Benutzeroberfläche angezeigt wird, ist es möglich, dies zu tun, indem Sie [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf diesem Element aufrufen:

```js
const elem = document.getElementById("myForm");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

> [!NOTE]
> Um mehr darüber zu erfahren, wie Sie Ihrer Anwendung die Vollbildfunktionalität hinzufügen, lesen Sie unsere Dokumentation über [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API).

### Drag & Drop

Eine häufige Benutzerinteraktion ist das physische Ziehen von Elementen, um sie an anderer Stelle auf dem Bildschirm fallen zu lassen. Drag and Drop kann die Benutzererfahrung verbessern, wenn es darum geht, Dateien zum Hochladen auszuwählen oder Inhaltsmodule innerhalb einer Seite neu anzuordnen. Es gibt eine API dafür!

Die [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API) API ermöglicht es Benutzern, die Maustaste über einem Element gedrückt zu halten, es an einen anderen Ort zu ziehen und die Maustaste loszulassen, um das Element dort abzulegen.

Hier ist ein Beispiel, das ermöglicht, einen Abschnitt von Inhalten zu ziehen.

```html
<div draggable="true">This text <strong>may</strong> be dragged.</div>
```

```js
document.querySelector("div").addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", "This text may be dragged.");
});
```

in dem wir:

- Die [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable) Eigenschaft auf `true` setzen, um das Element, das Sie ziehbar machen möchten.
- Einen Listener für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignis hinzufügen und die Ziehdaten innerhalb dieses Listeners setzen.

> [!NOTE]
> Weitere Informationen finden Sie in der [MDN Drag & Drop Dokumentation](/de/docs/Web/API/HTML_Drag_and_Drop_API).

### contentEditable

Im Allgemeinen sollten Sie ein {{HTMLElement("textarea")}} oder einen geeigneten {{HTMLElement("input")}}-Typ innerhalb eines {{HTMLElement("form")}} verwenden, um Daten von Benutzern zu sammeln, zusammen mit einem beschreibenden {{HTMLElement("label")}}. Aber diese Elemente entsprechen möglicherweise nicht Ihren Anforderungen. Zum Beispiel erfassen Rich-Text-Editoren kursiv, fett und normalen Text, jedoch kein natives Formularelement erfasst Rich-Text. Dieser Anwendungsfall erfordert, dass Sie ein benutzerdefiniertes Steuerelement erstellen, das sowohl stilisierbar als auch bearbeitbar ist. Dafür gibt es ein Attribut!

Jedes DOM-Element kann direkt bearbeitbar gemacht werden, indem das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut verwendet wird.

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

Das `contenteditable` Attribut fügt das Element automatisch in die Standardreihenfolge der Tabulatoren des Dokuments ein, was bedeutet, dass das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut nicht hinzugefügt werden muss. Wenn Sie jedoch nicht-semantische Elemente zur Dateneingabe verwenden, wenn Sie [Ihre eigenen Formularelemente erstellen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), müssen Sie JavaScript und [ARIA](/de/docs/Web/Accessibility/ARIA) hinzufügen, um das Element mit der Formularelementfunktionalität für alles andere nachzurüsten.

Um eine gute Benutzererfahrung zu bieten, muss jedes benutzerdefinierte Formularelement, das Sie erstellen, zugänglich sein und wie native Formularelemente funktionieren:

- Das [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles), das [label](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) und die [description](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) des Elements müssen mit ARIA hinzugefügt werden.
- Alle Benutzereingabemethoden müssen unterstützt werden, einschließlich [Tastatur](#tastatur), [Maus](#maus), [Berührung](#fingerberührung) und [Zeiger](#zeigereignisse) Ereignisse, die alle oben beschrieben werden.
- JavaScript ist erforderlich, um Funktionen wie [Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation), [Einreichung](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) und [Speichern](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript) von benutzeraktualisierten Inhalten zu handhaben.

{{EmbedLiveSample("contentEditable")}}

> [!NOTE]
> Beispiele und andere Ressourcen finden Sie im [Content Editable Leitfaden](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable).

## Tutorials

- [Touch-Ereignisse-Leitfaden](/de/docs/Web/API/Touch_events)
- [Verwaltung der Bildschirmorientierung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API)
- [Drag & Drop-Leitfaden](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Senden von Formularen durch JavaScript](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)

## Referenz

- [`MouseEvent`](/de/docs/Web/API/MouseEvent) Interface
- [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) Interface
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events) API
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API) API
- [Screen Orientation](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) API
- [Fullscreen](/de/docs/Web/API/Fullscreen_API) API
- [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API) API
- HTML [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut
