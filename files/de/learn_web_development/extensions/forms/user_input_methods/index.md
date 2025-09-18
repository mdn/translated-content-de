---
title: Benutzer-Eingabemethoden und Steuerungen
slug: Learn_web_development/Extensions/Forms/User_input_methods
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

Webformulare erfordern Benutzereingaben. Beim Entwerfen von Webformularen oder allgemein von Webinhalten ist es wichtig zu berücksichtigen, wie Benutzer mit ihren Geräten und Browsern interagieren. Webbenutzereingaben gehen über einfache Maus- und Tastatureingaben hinaus, zum Beispiel Touchscreens.

In diesem Artikel betrachten wir die verschiedenen Möglichkeiten, wie Benutzer mit Formularen und anderen Webinhalten interagieren können, und geben Empfehlungen zur Verwaltung von Benutzereingaben, reale Beispiele und Links zu weiteren Informationen.

Wenn Sie komplexere und interaktive Formulare oder andere UI-Features entwickeln, gibt es viele HTML-Elemente und JavaScript-APIs, die Sie untersuchen möchten. Beispielweise möchten Sie möglicherweise benutzerdefinierte Formularsteuerelemente erstellen, die nicht-semantische Elemente erfordern, um inhaltlich bearbeitbar zu sein. Sie könnten Unterstützung für Touch-Ereignisse bieten, die Bildschirmorientierung bestimmen oder steuern, ein Formular im Vollbildmodus anzeigen lassen oder Drag-and-Drop-Funktionen aktivieren. Dieser Leitfaden stellt all diese Funktionen vor und leitet Sie zu weiterführenden Informationen zu jedem Thema.

Um einer möglichst großen Anzahl von Benutzern eine gute Erfahrung zu bieten, müssen Sie mehrere Eingabemethoden unterstützen, einschließlich Maus, Tastatur, Berührung mit dem Finger und so weiter. Verfügbare Eingabemechanismen hängen von den Fähigkeiten des Geräts ab, auf dem die Anwendung läuft.

Sie sollten stets an die Zugänglichkeit über die Tastatur denken – viele Webbenutzer verwenden ausschließlich die Tastatur zur Navigation auf Websites und Apps, und sie aus Ihrer Funktionalität auszuschließen, wäre eine schlechte Idee.

## Behandelte Themen

- Um Touchscreen-Displays zu unterstützen, interpretieren [Touch-Ereignisse](/de/docs/Web/API/Touch_events) Fingeraktivität auf nutzerbasieren Touch-Oberflächen, von mobilen Geräten bis hin zu Kühlschrankpanels und Museumskiosken.
- Die [Fullscreen-API](/de/docs/Web/API/Fullscreen_API) erlaubt es Ihnen, Ihre Inhalte im Vollbildmodus anzuzeigen, was notwendig ist, wenn Ihr Formular auf einem Kühlschrank oder Museumskiosk bereitgestellt wird.
- Wenn Sie ein benutzerdefiniertes Formularsteuerelement erstellen müssen, wie zum Beispiel einen Rich-Text-Editor, ermöglicht das [`contentEditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut die Erstellung bearbeitbarer Steuerelemente aus normalerweise nicht-bearbeitbaren HTML-Elementen.
- Die [Drag-and-Drop-API](/de/docs/Web/API/HTML_Drag_and_Drop_API) ermöglicht es Benutzern, Elemente auf einer Seite zu ziehen und an verschiedenen Orten abzulegen. Dies kann die Benutzererfahrung bei der Auswahl von Dateien zum Hochladen oder der Neuanordnung von Inhaltsmodulen innerhalb einer Seite verbessern.
- Wenn die Bildschirmorientierung für Ihr Layout von Bedeutung ist, können Sie [CSS-Media-Queries](/de/docs/Web/CSS/@media/orientation) verwenden, um Ihre Formulare basierend auf der Browserorientierung zu gestalten, oder sogar die [Screen Orientation API](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) verwenden, um den Zustand der Bildschirmorientierung zu lesen und andere Aktionen durchzuführen.

Die folgenden Abschnitte bieten einen Satz von Empfehlungen und bewährten Praktiken, um die Nutzung Ihrer Websites und Anwendungen für die größtmögliche Benutzeranzahl zu ermöglichen.

## Unterstützung der gängigen Eingabemechanismen

### Tastatur

Die meisten Benutzer werden eine Tastatur verwenden, um Daten in Ihre Formularsteuerelemente einzugeben. Einige verwenden die Tastatur auch, um zu diesen Formularsteuerelementen zu navigieren. Um zugänglich zu sein und eine bessere Benutzererfahrung zu bieten, ist es wichtig, [alle Formularsteuerelemente richtig zu beschriften](/de/docs/Learn_web_development/Extensions/Forms/Your_first_form#the_label_input_and_textarea_elements). Wenn jedes Formularsteuerelement korrekt mit einem {{htmlelement("label")}} verknüpft ist, wird Ihr Formular für alle vollständig zugänglich sein, insbesondere für Benutzer, die mit einer Tastatur, einem Screenreader und möglicherweise ohne Bildschirm auf Ihr Formular zugreifen.

Wenn Sie zusätzliche Tastaturunterstützung hinzufügen möchten, zum Beispiel das Validieren eines Formularsteuerelements, wenn eine bestimmte Taste gedrückt wird, können Sie Ereignis-Listener verwenden, um auf Tastaturereignisse zu reagieren. Beispielsweise müssen Sie einen Ereignis-Listener für das `window`-Objekt hinzufügen, wenn Sie steuern möchten, dass bei jeder gedrückten Taste eine Kontrolle durchgeführt wird:

```js
window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);
```

`handleKeyDown` und `handleKeyUp` sind Funktionen, die die Steuerlogik definieren, die ausgeführt werden soll, wenn die Ereignisse `keydown` und `keyup` ausgelöst werden.

> [!NOTE]
> Sehen Sie sich den [DOM-Ereignisse](/de/docs/Web/API/Document_Object_Model/Events)-Leitfaden und die [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)-Referenz an, um mehr über Tastaturereignisse zu erfahren.

### Maus

Sie können auch Maus- und andere Zeigegerät-Ereignisse erfassen. Die Ereignisse, die auftreten, wenn der Benutzer mit einem Zeigegerät wie einer Maus interagiert, werden durch die [`MouseEvent`](/de/docs/Web/API/MouseEvent)-DOM-Schnittstelle vertreten. Zu den häufigen Mausereignissen zählen [`click`](/de/docs/Web/API/Element/click_event), [`dblclick`](/de/docs/Web/API/Element/dblclick_event), [`mouseup`](/de/docs/Web/API/Element/mouseup_event) und [`mousedown`](/de/docs/Web/API/Element/mousedown_event). Eine Liste aller Ereignisse, die die Mouse-Event-Schnittstelle verwenden, finden Sie im [DOM-Ereignisse](/de/docs/Web/API/Document_Object_Model/Events#event_index)-Leitfaden.

Wenn das Eingabegerät eine Maus ist, können Sie die Benutzereingabe auch über die Pointer Lock API steuern und Drag & Drop implementieren (siehe unten). Sie können außerdem [CSS verwenden, um auf Zeigegerät-Support zu testen](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries#use_of_pointing_devices).

### Berührung mit dem Finger

Um zusätzliche Unterstützung für Touchscreen-Geräte bereitzustellen, ist es eine gute Praxis, die unterschiedlichen Fähigkeiten in Bezug auf Bildschirmauflösung und Benutzereingabe zu berücksichtigen. [Touch-Ereignisse](/de/docs/Web/API/Touch_events) können helfen, interaktive Elemente und gängige Interaktionsgesten auf Touchscreen-Geräten zu implementieren.

Wenn Sie Touch-Ereignisse verwenden möchten, müssen Sie Ereignis-Listener hinzufügen und Handlerfunktionen angeben, die aufgerufen werden, wenn das Ereignis ausgelöst wird:

```js
element.addEventListener("touchstart", handleStart);
element.addEventListener("touchcancel", handleCancel);
element.addEventListener("touchend", handleEnd);
element.addEventListener("touchmove", handleMove);
```

wobei `element` das DOM-Element ist, auf dem Sie die Touch-Ereignisse registrieren möchten.

> [!NOTE]
> Weitere Informationen darüber, was Sie mit Touch-Ereignissen tun können, finden Sie in unserem [Leitfaden zu Touch-Ereignissen](/de/docs/Web/API/Touch_events).

### Zeigerereignisse

Mäuse sind nicht die einzigen Zeigegeräte. Die Geräte Ihrer Benutzer können mehrere Eingabeformen enthalten, wie Maus, Berührung mit dem Finger und Stifteingabe. Jeder dieser Zeiger hat eine andere Größe. Die [Pointer Events API](/de/docs/Web/API/Pointer_events) kann nützlich sein, wenn Sie Ereignisse über Geräte hinweg verwalten müssen, indem sie die Behandlung jedes einzelnen normalisiert. Ein Zeiger kann jede Berührung auf dem Bildschirm sein, die durch einen Mauszeiger, Stift, Berührung (einschließlich Multitouch) oder ein anderes Zeigereingabegerät erfolgt.

Die Ereignisse zur Verarbeitung generischer Zeigereingaben ähneln denjenigen für Maus: `pointerdown`, `pointermove`, `pointerup`, `pointerover`, `pointerout` usw. Die [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle bietet alle Informationen, die Sie möglicherweise über das Zeigegerät erfassen möchten, einschließlich seiner Größe, seines Drucks und seines Winkels.

## Steuerungen implementieren

### Bildschirmorientierung

Wenn Sie leicht unterschiedliche Layouts benötigen, je nachdem, ob der Benutzer im Hoch- oder Querformat ist, können Sie [CSS-Media-Queries](/de/docs/Learn_web_development/Core/CSS_layout/Media_queries#media_feature_rules) verwenden, um CSS für verschiedene Layouts oder Formularsteuerbreiten basierend auf der Größe oder Orientierung des Bildschirms beim [Styling von Webformularen](/de/docs/Learn_web_development/Extensions/Forms/Styling_web_forms) zu definieren.

Wenn die Bildschirmorientierung für Ihr Formular von Bedeutung ist, können Sie den Zustand der Bildschirmorientierung lesen, benachrichtigt werden, wenn sich dieser Zustand ändert, und in der Lage sein, die Bildschirmorientierung auf einen bestimmten Zustand (in der Regel Hoch- oder Querformat) zu sperren, indem Sie die [Screen Orientation API](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) verwenden.

- Orientierungsdaten können über [`screenOrientation.type`](/de/docs/Web/API/ScreenOrientation/type) oder mit CSS über das [`orientation`](/de/docs/Web/CSS/@media/orientation)-Medienmerkmal abgerufen werden.
- Wenn sich die Bildschirmorientierung ändert, wird das [`change`](/de/docs/Web/API/ScreenOrientation/change_event)-Ereignis auf dem Bildschirmobjekt ausgelöst.
- Das Sperren der Bildschirmorientierung ist möglich, indem die Methode [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) aufgerufen wird.
- Die Methode [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) entfernt alle zuvor gesetzten Bildschirmsperren.

> [!NOTE]
> Weitere Informationen zur Screen Orientation API finden Sie unter [Verwaltung der Bildschirmorientierung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation).

### Vollbild

Wenn Sie Ihr Formular im Vollbildmodus präsentieren müssen, etwa wenn Ihr Formular auf einem Museumskiosk, einer Mautstelle oder wirklich jeder öffentlich angezeigten Benutzeroberfläche angezeigt wird, ist es möglich, dies zu tun, indem [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf diesem Element aufgerufen wird:

```js
const elem = document.getElementById("myForm");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

> [!NOTE]
> Um mehr über das Hinzufügen von Vollbildfunktionalität zu Ihrer Anwendung zu erfahren, lesen Sie unsere Dokumentation über [die Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API).

### Drag & Drop

Eine häufige Benutzerinteraktion ist das physische Ziehen von Elementen, um sie an anderer Stelle auf dem Bildschirm abzulegen. Drag & Drop kann die Benutzererfahrung verbessern, wenn es um das Auswählen von Dateien zum Hochladen oder das Neuanordnen von Inhaltsmodulen innerhalb einer Seite geht. Dafür gibt es eine API!

Die [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)-API ermöglicht es Benutzern, ein Element anzuklicken und die Maustaste über dem Element gedrückt zu halten, es an eine andere Stelle zu ziehen und die Maustaste loszulassen, um das Element dort abzulegen.

Hier ist ein Beispiel, das es erlaubt, einen Abschnitt des Inhalts zu ziehen.

```html
<div draggable="true">This text <strong>may</strong> be dragged.</div>
```

```js
document.querySelector("div").addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", "This text may be dragged.");
});
```

in dem wir:

- Das [`draggable`](/de/docs/Web/HTML/Reference/Global_attributes/draggable)-Attribut auf `true` setzen an dem Element, das Sie als ziehbar machen möchten.
- Einen Listener für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis hinzufügen und die Ziehdaten innerhalb dieses Listeners festlegen.

> [!NOTE]
> Weitere Informationen finden Sie in der [MDN-Dokumentation zu Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API).

### contentEditable

Im Allgemeinen sollten Sie ein {{HTMLElement("textarea")}} oder einen geeigneten {{HTMLElement("input")}}-Typ innerhalb eines {{HTMLElement("form")}} verwenden, um Daten von Benutzern zu erfassen, zusammen mit einem beschreibenden {{HTMLElement("label")}}. Aber diese Elemente entsprechen möglicherweise nicht Ihren Anforderungen. Beispielsweise erfassen Rich-Text-Editoren kursiven, fettgedruckten und normalen Text, aber keine native Formularsteuerung erfasst Rich-Text. Dieses Anwendungsszenario erfordert, dass Sie ein benutzerdefiniertes Steuerelement erstellen, das stilisierbar _und_ editierbar ist. Dafür gibt es ein Attribut!

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

Das `contenteditable`-Attribut fügt das Element automatisch in die Standardreihenfolge der Tabulatoren des Dokuments ein, was bedeutet, dass das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut nicht hinzugefügt werden muss. Wenn Sie jedoch nicht-semantische Elemente für die Dateneingabe verwenden, wenn Sie [eigene Formularsteuerelemente erstellen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), müssen Sie JavaScript und [ARIA](/de/docs/Web/Accessibility/ARIA) hinzufügen, um das Element mit der Funktionalität eines Formularsteuerelements für alles andere nachzurüsten.

Um eine gute Benutzererfahrung zu gewährleisten, muss jedes benutzerdefinierte Formularsteuerelement, das Sie erstellen, zugänglich sein und wie native Formularsteuerelemente funktionieren:

- Die [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles), das [Label](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) und die [Beschreibung](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) des Elements müssen mit ARIA hinzugefügt werden.
- Alle Benutzereingabemethoden müssen unterstützt werden, einschließlich [Tastatur](#tastatur), [Maus](#maus), [Touch](#berührung_mit_dem_finger) und [Zeiger](#zeigerereignisse)-Ereignisse, die alle oben beschrieben sind.
- JavaScript ist erforderlich, um Funktionalitäten wie [Validierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation), [Übermittlung](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) und [Speichern](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript) von benutzeraktualisiertem Inhalt zu verwalten.

{{EmbedLiveSample("contentEditable")}}

> [!NOTE]
> Beispiele und weitere Ressourcen finden Sie im [Leitfaden zu Content Editable](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable).

## Tutorials

- [Leitfaden zu Touch-Ereignissen](/de/docs/Web/API/Touch_events)
- [Verwaltung der Bildschirmorientierung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden zu Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Senden von Formularen über JavaScript](/de/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)

## Referenz

- [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle
- [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)-Schnittstelle
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)-API
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API)-API
- [Screen Orientation](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)-API
- [Vollbild](/de/docs/Web/API/Fullscreen_API)-API
- [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)-API
- HTML [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut
