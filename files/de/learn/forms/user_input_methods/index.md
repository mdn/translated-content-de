---
title: Methoden zur Benutzereingabe und Steuerungen
slug: Learn/Forms/User_input_methods
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{LearnSidebar}}

Webformulare erfordern Benutzereingaben. Bei der Gestaltung von Webformularen oder allgemein von Webinhalten ist es wichtig zu überlegen, wie Benutzer mit ihren Geräten und Browsern interagieren. Die Benutzereingabe im Web geht über einfache Maus und Tastatur hinaus: Denken Sie zum Beispiel an Touchscreens.

In diesem Artikel werfen wir einen Blick auf die verschiedenen Möglichkeiten, wie Benutzer mit Formularen und anderen Webinhalten interagieren, und geben Empfehlungen zur Verwaltung von Benutzereingaben, praxisnahe Beispiele und Links zu weiterführenden Informationen.

Wenn Sie komplexere und interaktive Formulare oder andere UI-Funktionen entwickeln, gibt es viele HTML-Elemente und JavaScript-APIs, die Sie untersuchen sollten. Beispielsweise möchten Sie möglicherweise benutzerdefinierte Formularsteuerungen erstellen, die nicht-semantische Elemente erfordern, um inhaltlich bearbeitbar zu sein. Vielleicht möchten Sie Touch-Ereignisse unterstützen, die Orientierung des Bildschirms bestimmen oder steuern, ein Formular im Vollbildmodus anzeigen lassen oder Drag-and-Drop-Funktionen aktivieren. Dieser Leitfaden stellt all diese Funktionen vor und verweist auf weiterführende Informationen zu jedem Thema.

Um ein gutes Benutzererlebnis für die größtmögliche Anzahl von Benutzern zu bieten, müssen Sie mehrere Eingabemethoden unterstützen, einschließlich Maus, Tastatur, Fingerberührung usw. Verfügbare Eingabemechanismen hängen von den Fähigkeiten des Geräts ab, auf dem die Anwendung ausgeführt wird.

Sie sollten stets die Tastaturzugänglichkeit berücksichtigen — viele Webbenutzer navigieren nur mit der Tastatur durch Websites und Apps, und sie von Ihrer Funktionalität auszuschließen, ist eine schlechte Idee.

## Behandelte Themen

- Um Touchscreen-Displays zu unterstützen, interpretieren [Touch-Ereignisse](/de/docs/Web/API/Touch_events) die Fingeraktivitäten auf Touch-basierten Benutzeroberflächen von Mobilgeräten über Kühlschrankpanels bis hin zu Museumskiosken.
- Die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) ermöglicht die Anzeige Ihrer Inhalte im Vollbildmodus, was erforderlich ist, wenn Ihr Formular auf einem Kühlschrank oder Museumskiosk bereitgestellt wird.
- Wenn Sie eine benutzerdefinierte Formularsteuerung erstellen müssen, wie beispielsweise einen Rich-Text-Editor, ermöglicht Ihnen das [`contentEditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut, bearbeitbare Steuerungen aus normalerweise nicht bearbeitbaren HTML-Elementen zu erstellen.
- Die [Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) erlaubt es Benutzern, Elemente auf einer Seite zu ziehen und an verschiedenen Orten abzulegen. Dies kann die Benutzererfahrung verbessern, wenn es darum geht, Dateien für den Upload auszuwählen oder Inhaltsmodule innerhalb einer Seite neu zu ordnen.
- Wenn die Bildschirmorientierung für Ihr Layout wichtig ist, können Sie [CSS-Media-Queries](/de/docs/Web/CSS/@media/orientation) verwenden, um Ihre Formulare basierend auf der Browserorientierung zu stylen, oder sogar die [Screen Orientation API](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) nutzen, um den Bildschirmorientierungszustand zu lesen und andere Aktionen auszuführen.

Die folgenden Abschnitte bieten eine Reihe von Empfehlungen und Best Practices, um es der größtmöglichen Anzahl von Benutzern zu ermöglichen, Ihre Websites und Anwendungen zu verwenden.

## Unterstützung gängiger Eingabemechanismen

### Tastatur

Die meisten Benutzer werden eine Tastatur verwenden, um Daten in Ihre Formularsteuerungen einzugeben. Einige werden auch die Tastatur verwenden, um zu diesen Formularsteuerungen zu navigieren. Um zugänglich zu sein und eine bessere Benutzererfahrung zu bieten, ist es wichtig, [alle Formularsteuerungen korrekt zu beschriften](/de/docs/Learn/Forms/Your_first_form#the_label_input_and_textarea_elements). Wenn jede Formularsteuerung korrekt mit einem {{htmlelement("label")}} verbunden ist, wird Ihr Formular für alle vollständig zugänglich sein, insbesondere für alle, die Ihr Formular mit einer Tastatur, einem Screenreader und möglicherweise ganz ohne Bildschirm navigieren.

Falls Sie zusätzliche Tastaturunterstützung hinzufügen möchten, wie z.B. die Validierung einer Formularsteuerung, wenn eine bestimmte Taste gedrückt wird, können Sie Ereignislistener verwenden, um Tastaturereignisse zu erfassen und darauf zu reagieren. Zum Beispiel, wenn Sie Steuerungen hinzufügen möchten, wenn eine beliebige Taste gedrückt wird, müssen Sie einen Ereignislistener für das Window-Objekt hinzufügen:

```js
window.addEventListener("keydown", handleKeyDown, true);
window.addEventListener("keyup", handleKeyUp, true);
```

`handleKeyDown` und `handleKeyUp` sind Funktionen, die die Steuerungslogik definieren, die bei Auslösen der `keydown`- und `keyup`-Ereignisse ausgeführt wird.

> [!NOTE]
> Schauen Sie sich die [Ereignisreferenz](/de/docs/Web/Events) und den [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) Leitfaden an, um mehr über Tastaturereignisse zu erfahren.

### Maus

Sie können auch Maus- und andere Zeigereignisse erfassen. Die Ereignisse, die auftreten, wenn der Benutzer mit einem Zeigegerät wie einer Maus interagiert, werden durch das [`MouseEvent`](/de/docs/Web/API/MouseEvent) DOM-Interface dargestellt. Häufige Mausereignisse umfassen [`click`](/de/docs/Web/API/Element/click_event), [`dblclick`](/de/docs/Web/API/Element/dblclick_event), [`mouseup`](/de/docs/Web/API/Element/mouseup_event) und [`mousedown`](/de/docs/Web/API/Element/mousedown_event). Die Liste aller Ereignisse, die das Mouse Event Interface verwenden, ist in der [Ereignisreferenz](/de/docs/Web/Events) angegeben.

Wenn das Eingabegerät eine Maus ist, können Sie auch die Benutzereingaben über die Pointer Lock API steuern und Drag & Drop implementieren (siehe unten). Sie können auch [CSS verwenden, um den Test auf Zeigegeräte](/de/docs/Learn/CSS/CSS_layout/Media_queries#use_of_pointing_devices) zu unterstützen.

### Fingerberührung

Um zusätzliche Unterstützung für Touchscreen-Geräte zu bieten, ist es eine gute Praxis, die unterschiedlichen Möglichkeiten in Bezug auf Bildschirmauflösung und Benutzereingaben zu berücksichtigen. [Touch-Ereignisse](/de/docs/Web/API/Touch_events) können Ihnen helfen, interaktive Elemente und gängige Interaktionsgesten auf Touchscreen-Geräten zu implementieren.

Wenn Sie Touch-Ereignisse verwenden möchten, müssen Sie Ereignislistener hinzufügen und Handlerfunktionen angeben, die aufgerufen werden, wenn das Ereignis ausgelöst wird:

```js
element.addEventListener("touchstart", handleStart, false);
element.addEventListener("touchcancel", handleCancel, false);
element.addEventListener("touchend", handleEnd, false);
element.addEventListener("touchmove", handleMove, false);
```

wobei `element` das DOM-Element ist, auf dem Sie die Touch-Ereignisse registrieren möchten.

> [!NOTE]
> Für weitere Informationen darüber, was Sie mit Touch-Ereignissen tun können, lesen Sie unseren [Leitfaden für Touch-Ereignisse](/de/docs/Web/API/Touch_events).

### Zeigerereignisse

Mäuse sind nicht die einzigen Zeigegeräte. Die Geräte Ihrer Benutzer können mehrere Eingabeformen beinhalten, wie Maus, Fingerberührung und Stifteingabe. Jeder dieser Zeiger hat eine unterschiedliche Größe. Die [Pointer Events API](/de/docs/Web/API/Pointer_events) kann sehr nützlich sein, wenn Sie Ereignisse geräteübergreifend verwalten müssen, indem Sie die Handhabung jedes einzelnen normalisieren. Ein Zeiger kann jeder Kontaktpunkt auf dem Bildschirm sein, der durch einen Mauszeiger, Stift, Berührung (einschließlich Mehrfachberührung) oder ein anderes Zeigereingabegerät hergestellt wird.

Die Ereignisse zur Handhabung generischer Zeigereingaben ähneln denen für die Maus: `pointerdown`, `pointermove`, `pointerup`, `pointerover`, `pointerout` usw. Das [`PointerEvent` Interface](/de/docs/Web/API/PointerEvent) bietet alle Details, die Sie über das Zeigereingabegerät erfassen möchten, einschließlich seiner Größe, seines Drucks und seines Winkels.

## Steuerungen implementieren

### Bildschirmorientierung

Wenn Sie leicht unterschiedliche Layouts benötigen, je nachdem, ob der Benutzer im Hoch- oder Querformat ist, können Sie mit [CSS Media Queries](/de/docs/Learn/CSS/CSS_layout/Media_queries#media_feature_rules) CSS für verschiedene Layouts oder Formsteuerungsbreiten basierend auf der Größe oder Orientierung des Bildschirms beim [Stylen von Webformularen](/de/docs/Learn/Forms/Styling_web_forms) definieren.

Wenn die Bildschirmorientierung für Ihr Formular wichtig ist, können Sie den Bildschirmorientierungszustand lesen, informiert werden, wenn sich dieser Zustand ändert, und die Bildschirmorientierung auf einen bestimmten Zustand (normalerweise Hoch- oder Querformat) durch die [Screen Orientation API](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) sperren.

- Die Orientierungsdaten können über [`screenOrientation.type`](/de/docs/Web/API/ScreenOrientation/type) oder mit CSS durch die [`orientation`](/de/docs/Web/CSS/@media/orientation) Medienfunktion abgerufen werden.
- Wenn sich die Bildschirmorientierung ändert, wird das [`change`](/de/docs/Web/API/ScreenOrientation/change_event) Ereignis auf dem Bildschirmobjekt ausgelöst.
- Das Sperren der Bildschirmorientierung ist möglich, indem Sie die [`ScreenOrientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock) Methode aufrufen.
- Die [`ScreenOrientation.unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) Methode hebt alle zuvor gesetzten Bildschirmsperren auf.

> [!NOTE]
> Weitere Informationen zur Screen Orientation API finden Sie in [Managing screen orientation](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation).

### Vollbildmodus

Falls Sie Ihr Formular im Vollbildmodus präsentieren müssen, wie zum Beispiel auf einem Museumskiosk, einer Mautstelle oder wirklich jeder öffentlich angezeigten Benutzeroberfläche, können Sie dies tun, indem Sie [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf diesem Element aufrufen:

```js
const elem = document.getElementById("myForm");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

> [!NOTE]
> Um mehr darüber zu erfahren, wie Sie die Vollbildfunktionalität zu Ihrer Anwendung hinzufügen, lesen Sie unsere Dokumentation über [die Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API).

### Drag & Drop

Eine häufige Benutzerinteraktion ist das physische Ziehen von Elementen, um sie an anderer Stelle auf dem Bildschirm abzulegen. Drag and drop kann die Benutzererfahrung verbessern, wenn es darum geht, Dateien für den Upload auszuwählen oder Inhaltsmodule innerhalb einer Seite neu zu ordnen. Dafür gibt es eine API!

Die [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API) API ermöglicht es Benutzern, ein Element anzuklicken und die Maustaste gedrückt zu halten, es an einen anderen Ort zu ziehen und die Maustaste loszulassen, um das Element dort abzulegen.

Hier ist ein Beispiel, das es erlaubt, einen Inhaltsteil zu ziehen.

```html
<div
  draggable="true"
  ondragstart="event.dataTransfer.setData('text/plain', 'This text may be dragged')">
  This text <strong>may</strong> be dragged.
</div>
```

in dem wir:

- Das [`draggable`](/de/docs/Web/HTML/Global_attributes#draggable) Attribut auf `true` für das Element setzen, das ziehbar gemacht werden soll.
- Ein Listener für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) Ereignis hinzufügen und die Ziehdaten innerhalb dieses Listeners festlegen.

> [!NOTE]
> Weitere Informationen finden Sie in der [MDN Drag & Drop Dokumentation](/de/docs/Web/API/HTML_Drag_and_Drop_API).

### contentEditable

Im Allgemeinen sollten Sie ein {{HTMLElement("textarea")}} oder einen geeigneten {{HTMLElement("input")}} Typ innerhalb eines {{HTMLElement("form")}} verwenden, um Daten von Benutzern zu sammeln, zusammen mit einem beschreibenden {{HTMLElement("label")}}. Aber diese Elemente erfüllen möglicherweise nicht Ihre Anforderungen. Beispielsweise erfassen Rich-Text-Editoren kursiven, fetten und normalen Text, aber keine native Formularsteuerung erfasst Rich-Text. Dieser Anwendungsfall erfordert, dass Sie eine benutzerdefinierte Steuerung erstellen, die sowohl stilisierbar als auch bearbeitbar ist. Dafür gibt es ein Attribut!

Jedes DOM-Element kann direkt bearbeitbar gemacht werden, indem das [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable) Attribut verwendet wird.

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

Das `contenteditable` Attribut fügt das Element automatisch der Standard-Tabulatorreihenfolge des Dokuments hinzu, das bedeutet, dass das [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex) Attribut nicht hinzugefügt werden muss. Wenn Sie jedoch nicht-semantische Elemente für die Dateneingabe verwenden, wenn Sie [eigene Formularsteuerungen erstellen](/de/docs/Learn/Forms/How_to_build_custom_form_controls), müssen Sie JavaScript und [ARIA](/de/docs/Web/Accessibility/ARIA) hinzufügen, um das Element mit Formularsteuerungsfunktionalität für alles andere auszustatten.

Um ein gutes Benutzererlebnis zu gewährleisten, muss jede benutzerdefinierte Formularsteuerung, die Sie erstellen, zugänglich sein und wie native Formularsteuerungen funktionieren:

- Die [Rolle](/de/docs/Web/Accessibility/ARIA/Roles), [Beschriftung](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) und [Beschreibung](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) des Elements müssen mit ARIA hinzugefügt werden.
- Alle Benutzereingabemethoden müssen unterstützt werden, einschließlich [Tastatur](#tastatur), [Maus](#maus), [Berührung](#fingerberührung) und [Zeiger](#zeigerereignisse) Ereignisse, die alle oben beschrieben sind.
- JavaScript ist erforderlich, um Funktionalitäten wie [Validierung](/de/docs/Learn/Forms/Form_validation), [Übermittlung](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) und [Speicherung](/de/docs/Learn/Forms/Sending_forms_through_JavaScript) von vom Benutzer aktualisierten Inhalten zu verwalten.

{{EmbedLiveSample("contentEditable")}}

> [!NOTE]
> Beispiele und andere Ressourcen sind im [Leitfaden für Content Editing](/de/docs/Web/HTML/Global_attributes/contenteditable) zu finden.

## Tutorials

- [Leitfaden zu Touch Events](/de/docs/Web/API/Touch_events)
- [Verwaltung der Bildschirmorientierung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden zu Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Formularvalidierung](/de/docs/Learn/Forms/Form_validation)
- [Versenden von Formularen mit JavaScript](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)

## Referenz

- [`MouseEvent`](/de/docs/Web/API/MouseEvent) Interface
- [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) Interface
- [Touch Events](/de/docs/Web/API/Touch_events) API
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API) API
- [Screen Orientation](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation) API
- [Fullscreen](/de/docs/Web/API/Fullscreen_API) API
- [Drag & Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API) API
- HTML [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut
