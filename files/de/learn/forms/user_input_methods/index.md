---
title: Methoden und Steuerelemente für Benutzereingaben
slug: Learn/Forms/User_input_methods
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{LearnSidebar}}

Webformulare erfordern Benutzereingaben. Bei der Gestaltung von Webformularen oder generell von Webinhalten ist es wichtig, zu beachten, wie Benutzer mit ihren Geräten und Browsern interagieren. Web-Benutzereingaben gehen über einfache Maus- und Tastatureingaben hinaus: Denken Sie beispielsweise an Touchscreens.

In diesem Artikel werfen wir einen Blick auf die verschiedenen Möglichkeiten, wie Benutzer mit Formularen und anderen Webinhalten interagieren, und geben Empfehlungen zur Verwaltung von Benutzereingaben, reale Beispiele und Links zu weiterführenden Informationen.

Wenn Sie komplexere und interaktive Formulare oder andere UI-Funktionen entwickeln, gibt es viele HTML-Elemente und JavaScript-APIs, die Sie untersuchen möchten. Beispielsweise könnten Sie benutzerdefinierte Formularelemente erstellen wollen, die nicht-semantische Elemente benötigen, um bearbeitbar zu sein. Vielleicht möchten Sie Touch-Ereignisse unterstützen, die Ausrichtung des Bildschirms bestimmen oder steuern, ein Formular im Vollbildmodus anzeigen oder Drag-and-Drop-Funktionen aktivieren. Dieser Leitfaden führt all diese Funktionen ein und verweist auf weitere Informationen zu jedem Thema.

Um eine gute Benutzererfahrung für die größtmögliche Anzahl von Benutzern zu bieten, müssen Sie mehrere Eingabemethoden unterstützen, einschließlich Maus, Tastatur, Berührung und so weiter. Verfügbare Eingabemechanismen hängen von den Fähigkeiten des Geräts ab, auf dem die Anwendung ausgeführt wird.

Sie sollten immer an die Tastaturzugänglichkeit denken — viele Webnutzer verwenden ausschließlich die Tastatur, um Websites und Apps zu navigieren, und ihnen den Zugang zu Ihren Funktionen zu verwehren, ist keine gute Idee.

## Abgedeckte Themen

- Um Touchscreen-Displays zu unterstützen, interpretieren [Touch-Ereignisse](/de/docs/Web/API/Touch_events) die Fingeraktivität auf touch-basierten Benutzeroberflächen von mobilen Geräten bis hin zu Kühlschrankpanelen und Museumskioskanzeigen.
- Die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) ermöglicht es Ihnen, Ihre Inhalte im Vollbildmodus anzuzeigen, was erforderlich ist, wenn Ihr Formular auf einem Kühlschrank oder Museumskiosk bereitgestellt wird.
- Wenn Sie ein benutzerdefiniertes Formularelement erstellen müssen, wie einen Rich-Text-Editor, ermöglicht das [`contentEditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut die Erstellung von bearbeitbaren Steuerelementen aus normalerweise nicht bearbeitbaren HTML-Elementen.
- Die [Drag-and-Drop-API](/de/docs/Web/API/HTML_Drag_and_Drop_API) erlaubt es Benutzern, Elemente auf einer Seite zu ziehen und an verschiedenen Stellen abzulegen. Dies kann das Benutzererlebnis beim Auswählen von Dateien zum Hochladen oder beim Neuanordnen von Inhaltsmodulen innerhalb einer Seite verbessern.
- Wenn die Bildschirmausrichtung für Ihr Layout wichtig ist, können Sie [CSS Media Queries](/de/docs/Web/CSS/@media/orientation) verwenden, um Ihre Formulare basierend auf der Ausrichtung des Browsers zu stylen, oder sogar die [Screen Orientation API](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) nutzen, um den Bildschirmorientierungsstatus auszulesen und andere Aktionen auszuführen.

Die folgenden Abschnitte bieten eine Reihe von Empfehlungen und Best Practices, um die weitestmögliche Benutzergruppe in die Lage zu versetzen, Ihre Websites und Anwendungen zu nutzen.

## Unterstützung gängiger Eingabemechanismen

### Tastatur

Die meisten Benutzer werden eine Tastatur verwenden, um Daten in Ihre Formularsteuerelemente einzugeben. Einige werden auch die Tastatur verwenden, um zu diesen Formularsteuerelementen zu navigieren. Um zugänglich zu sein und ein besseres Benutzererlebnis zu bieten, ist es wichtig, [alle Formularsteuerelemente korrekt zu beschriften](/de/docs/Learn/Forms/Your_first_form#the_label_input_and_textarea_elements). Wenn jedes Formularelement richtig mit einem {{ htmlelement("label") }} verbunden ist, ist Ihr Formular für alle vollständig zugänglich, insbesondere für diejenigen, die Ihr Formular mit einer Tastatur, einem Bildschirmlesegerät oder möglicherweise ohne Bildschirm navigieren.

Wenn Sie zusätzliche Tastaturunterstützung hinzufügen möchten, wie z.B. die Validierung eines Formularsteuerelements, wenn eine bestimmte Taste gedrückt wird, können Sie Ereignislistener verwenden, um Tastaturereignisse zu erfassen und darauf zu reagieren. Beispielsweise, wenn Sie Steuerelemente hinzufügen möchten, wenn eine beliebige Taste gedrückt wird, müssen Sie einen Ereignislistener auf dem Fensterobjekt hinzufügen:

```js
window.addEventListener("keydown", handleKeyDown, true);
window.addEventListener("keyup", handleKeyUp, true);
```

`handleKeyDown` und `handleKeyUp` sind Funktionen, die die Steuerungslogik definieren, die ausgeführt werden soll, wenn die Ereignisse `keydown` und `keyup` ausgelöst werden.

> [!NOTE]
> Schauen Sie sich die [Ereignisreferenz](/de/docs/Web/Events) und den [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)-Leitfaden an, um mehr über Tastaturereignisse zu erfahren.

### Maus

Sie können auch Maus- und andere Zeigegeräte-Ereignisse erfassen. Die Ereignisse, die auftreten, wenn der Benutzer mit einem Zeigegerät wie einer Maus interagiert, werden durch die [`MouseEvent`](/de/docs/Web/API/MouseEvent) DOM-Schnittstelle dargestellt. Zu den üblichen Mausereignissen gehören [`click`](/de/docs/Web/API/Element/click_event), [`dblclick`](/de/docs/Web/API/Element/dblclick_event), [`mouseup`](/de/docs/Web/API/Element/mouseup_event) und [`mousedown`](/de/docs/Web/API/Element/mousedown_event). Die Liste aller Ereignisse, die die Mouse Event-Schnittstelle verwenden, finden Sie in der [Ereignisreferenz](/de/docs/Web/Events).

Wenn das Eingabegerät eine Maus ist, können Sie auch die Benutzereingabe über die Pointer Lock API steuern und Drag & Drop implementieren (siehe unten). Sie können auch [CSS verwenden, um die Unterstützung von Zeigegeräten zu testen](/de/docs/Learn/CSS/CSS_layout/Media_queries#use_of_pointing_devices).

### Fingerberührung

Um zusätzliche Unterstützung für Touchscreen-Geräte bereitzustellen, ist es eine gute Praxis, die unterschiedlichen Fähigkeiten in Bezug auf Bildschirmauflösung und Benutzereingabe zu berücksichtigen. [Touch-Ereignisse](/de/docs/Web/API/Touch_events) können Ihnen helfen, interaktive Elemente und häufige Interaktionsgesten auf Touchscreen-Geräten zu implementieren.

Wenn Sie Touch-Ereignisse verwenden möchten, müssen Sie Ereignislistener hinzufügen und Handlerfunktionen spezifizieren, die aufgerufen werden, wenn das Ereignis ausgelöst wird:

```js
element.addEventListener("touchstart", handleStart, false);
element.addEventListener("touchcancel", handleCancel, false);
element.addEventListener("touchend", handleEnd, false);
element.addEventListener("touchmove", handleMove, false);
```

wobei `element` das DOM-Element ist, auf dem Sie die Touch-Ereignisse registrieren möchten.

> [!NOTE]
> Für weitere Informationen darüber, was Sie mit Touch-Ereignissen tun können, lesen Sie bitte unseren [Touch-Ereignisse-Leitfaden](/de/docs/Web/API/Touch_events).

### Zeigerereignisse

Mäuse sind nicht die einzigen Zeigegeräte. Die Geräte Ihrer Benutzer können mehrere Eingabeformen umfassen, wie Maus, Fingerberührung und Stifteingabe. Jeder dieser Zeiger hat eine andere Größe. Die [Pointer Events API](/de/docs/Web/API/Pointer_events) kann nützlich sein, wenn Sie Ereignisse über Geräte hinweg verwalten müssen, indem Sie die Handhabung jedes Geräts normalisieren. Ein Zeiger kann jeder Berührungspunkt auf dem Bildschirm sein, der durch einen Mauszeiger, einen Stift, Berührung (einschließlich Multi-Touch) oder ein anderes Zeigegerät erzeugt wird.

Die Ereignisse zur Handhabung generischer Zeigereingaben sehen denen für die Maus sehr ähnlich: `pointerdown`, `pointermove`, `pointerup`, `pointerover`, `pointerout`, usw. Die [`PointerEvent`-Schnittstelle](/de/docs/Web/API/PointerEvent) bietet alle Details, die Sie über das Zeigegerät erfassen möchten, einschließlich seiner Größe, Druck und Winkel.

## Steuerelemente implementieren

### Bildschirmausrichtung

Wenn Sie leicht unterschiedliche Layouts benötigen, je nachdem, ob der Benutzer im Hoch- oder Querformat ist, können Sie [CSS-Media-Queries](/de/docs/Learn/CSS/CSS_layout/Media_queries#media_feature_rules) verwenden, um CSS für unterschiedliche Layouts oder Breiten von Formularsteuerelementen basierend auf der Größe oder Ausrichtung des Bildschirms zu definieren, wenn Sie [Webformulare stylen](/de/docs/Learn/Forms/Styling_web_forms).

Wenn die Bildschirmausrichtung für Ihr Formular wichtig ist, können Sie den Bildschirmorientierungsstatus lesen, informiert werden, wenn sich dieser Status ändert, und in der Lage sein, die Bildschirmorientierung in einen bestimmten Zustand zu sperren (normalerweise Hoch- oder Querformat) über die [Screen Orientation API](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation).

- Orientierungdaten können über [`screenOrientation.type`](/de/docs/Web/API/ScreenOrientation/type) oder mit CSS über das [`orientation`](/de/docs/Web/CSS/@media/orientation)-Media-Feature abgerufen werden.
- Wenn sich die Bildschirmausrichtung ändert, wird das [`change`](/de/docs/Web/API/ScreenOrientation/change_event)-Ereignis auf dem Bildschirmobjekt ausgelöst.
- Das Sperren der Bildschirmausrichtung ist möglich, indem die Methode [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) aufgerufen wird.
- Die Methode [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) entfernt alle zuvor gesetzten Bildschirmsperren.

> [!NOTE]
> Weitere Informationen über die Screen Orientation API finden Sie unter [Verwaltung der Bildschirmausrichtung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation).

### Vollbildmodus

Wenn Sie Ihr Formular im Vollbildmodus präsentieren müssen, beispielsweise wenn Ihr Formular auf einem Museumskiosk, einer Mautstation oder tatsächlich einer beliebigen öffentlich angezeigten Benutzeroberfläche angezeigt wird, ist es möglich, dies zu tun, indem [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf diesem Element aufgerufen wird:

```js
const elem = document.getElementById("myForm");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

> [!NOTE]
> Um mehr darüber zu erfahren, wie Sie Ihrer Anwendung Vollbildfunktionen hinzufügen, lesen Sie unsere Dokumentation über [die Nutzung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API).

### Drag & Drop

Eine häufige Benutzerinteraktion ist das physische Ziehen von Elementen, die an anderer Stelle auf dem Bildschirm abgelegt werden sollen. Drag and Drop kann das Benutzererlebnis beim Auswählen von Dateien zum Hochladen oder beim Neuanordnen von Inhaltsmodulen innerhalb einer Seite verbessern. Es gibt eine API dafür!

Die [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API) API ermöglicht es Benutzern, ein Element durch Klicken und Halten der Maustaste zu ziehen, es an eine andere Stelle zu ziehen und die Maustaste loszulassen, um das Element dort abzulegen.

Hier ist ein Beispiel, das es ermöglicht, einen Abschnitt von Inhalten zu ziehen.

```html
<div
  draggable="true"
  ondragstart="event.dataTransfer.setData('text/plain', 'This text may be dragged')">
  This text <strong>may</strong> be dragged.
</div>
```

in welchem wir:

- Das [`draggable`](/de/docs/Web/HTML/Global_attributes#draggable)-Attribut auf `true` setzen für das Element, das Sie ziehbar machen möchten.
- Einen Listener für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis hinzufügen und die Ziehdaten innerhalb dieses Listeners setzen.

> [!NOTE]
> Weitere Informationen finden Sie in der [MDN-Dokumentation zu Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API).

### contentEditable

Im Allgemeinen sollten Sie ein {{HTMLElement("textarea")}} oder einen geeigneten {{HTMLElement("input")}}-Typ innerhalb eines {{HTMLElement("form")}} verwenden, um Daten von Benutzern zu sammeln, zusammen mit einem beschreibenden {{HTMLElement("label")}}. Aber diese Elemente erfüllen möglicherweise nicht Ihre Anforderungen. Beispielsweise erfassen Rich-Text-Editoren kursiven, fetten und normalen Text, aber kein natives Formularelement erfasst Rich-Text. Dieser Anwendungsfall erfordert es, ein benutzerdefiniertes Steuerelement zu erstellen, das sowohl style-fähig als auch editierbar ist. Es gibt ein Attribut dafür!

Jedes DOM-Element kann durch das [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable)-Attribut direkt editierbar gemacht werden.

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

Das `contenteditable`-Attribut fügt das Element automatisch der Standard-Tabulatorreihenfolge des Dokuments hinzu, was bedeutet, dass das [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex)-Attribut nicht hinzugefügt werden muss. Wenn Sie jedoch nicht-semantische Elemente für die Dateneingabe verwenden, wenn Sie [eigene Formularsteuerelemente erstellen](/de/docs/Learn/Forms/How_to_build_custom_form_controls), müssen Sie JavaScript und [ARIA](/de/docs/Web/Accessibility/ARIA) hinzufügen, um das Element mit Formularsteuerungsfunktionen für alles andere nachzurüsten.

Um eine gute Benutzererfahrung zu bieten, muss jedes benutzerdefinierte Formularelement, das Sie erstellen, zugänglich sein und wie native Formularelemente funktionieren:

- Die Rolle des Elements [`role`](/de/docs/Web/Accessibility/ARIA/Roles), [Beschriftung](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) und [Beschreibung](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) müssen mit ARIA hinzugefügt werden.
- Alle Benutzereingabemethoden müssen unterstützt werden, einschließlich [Tastatur](#tastatur), [Maus](#maus), [Berührung](#fingerberührung) und [Zeiger](#zeigerereignisse) Ereignisse, die alle oben beschrieben sind.
- JavaScript ist erforderlich, um Funktionen wie [Validierung](/de/docs/Learn/Forms/Form_validation), [Übermittlung](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) und [Speicherung](/de/docs/Learn/Forms/Sending_forms_through_JavaScript) von vom Benutzer aktualisierten Inhalten zu handhaben.

{{EmbedLiveSample("contentEditable")}}

> [!NOTE]
> Beispiele und andere Ressourcen finden Sie im [Leitfaden zu Content Editable](/de/docs/Web/HTML/Global_attributes/contenteditable).

## Tutorials

- [Touch-Ereignisse Leitfaden](/de/docs/Web/API/Touch_events)
- [Bildschirmausrichtung verwalten](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Den Vollbildmodus verwenden](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden für Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Formulare mit JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)

## Referenz

- [`MouseEvent`](/de/docs/Web/API/MouseEvent)-Schnittstelle
- [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)-Schnittstelle
- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)-API
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API)-API
- [Bildschirmausrichtungs-](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)-API
- [Fullscreen](/de/docs/Web/API/Fullscreen_API)-API
- [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)-API
- HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)
