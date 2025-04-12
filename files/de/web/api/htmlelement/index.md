---
title: HTMLElement
slug: Web/API/HTMLElement
l10n:
  sourceCommit: b2c8dcdae36907a87d1d1b9393ca4a35ebc765d6
---

{{APIRef("HTML DOM")}}

Das **`HTMLElement`**-Interface repräsentiert jedes [HTML](/de/docs/Web/HTML)-Element. Einige Elemente implementieren dieses Interface direkt, während andere es über ein Interface implementieren, das es erbt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Element, [`Element`](/de/docs/Web/API/Element)._

- [`HTMLElement.accessKey`](/de/docs/Web/API/HTMLElement/accessKey)
  - : Ein Zeichenkette, die den dem Element zugewiesenen Zugangsschlüssel darstellt.
- [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die den dem Element zugewiesenen Zugangsschlüssel enthält.
- [`HTMLElement.anchorElement`](/de/docs/Web/API/HTMLElement/anchorElement) {{ReadOnlyInline}}&nbsp;{{non-standard_inline}} {{experimental_inline}}
  - : Gibt eine Referenz auf das Ankerelement des Elements zurück oder `null`, wenn es keines hat.
- [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap) {{ReadOnlyInline}}
  - : Eine [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap), die die Deklarationen des [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributes des Elements darstellt.
- [`HTMLElement.autocapitalize`](/de/docs/Web/API/HTMLElement/autocapitalize)
  - : Eine Zeichenkette, die das Kapitalisierungsverhalten des Elements für Benutzereingaben darstellt. Gültige Werte sind: `none`, `off`, `on`, `characters`, `words`, `sentences`.
- [`HTMLElement.autofocus`](/de/docs/Web/API/HTMLElement/autofocus)
  - : Ein boolescher Wert, der das [`autofocus`](/de/docs/Web/HTML/Reference/Elements/select#autofocus) HTML-Globalattribut widerspiegelt, das angibt, ob die Steuerung beim Laden der Seite oder beim Anzeigen eines Dialogs oder Popovers fokussiert werden soll, falls es in einem Element innerhalb von {{htmlelement("dialog")}}-Elementen oder Elementen, deren Popover-Attribut gesetzt ist, angegeben ist.
- [`HTMLElement.autocorrect`](/de/docs/Web/API/HTMLElement/autocorrect)
  - : Ein boolean, das angibt, ob Texteingaben des Benutzers automatisch korrigiert werden sollen oder nicht. Dies spiegelt das [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) HTML-Globalattribut wider.
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
  - : Eine Zeichenkette, bei der ein Wert von `true` bedeutet, dass das Element editierbar ist, und ein Wert von `false`, dass es nicht editierbar ist.
- [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) {{ReadOnlyInline}}
  - : Gibt ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) zurück, mit dem Skripte die [benutzerdefinierten Datenattribute](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes) (`data-*`) des Elements lesen und schreiben können.
- [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir)
  - : Eine Zeichenkette, die das globale Attribut `dir` widerspiegelt und die Richtungsangabe des Elements darstellt. Mögliche Werte sind `"ltr"`, `"rtl"` und `"auto"`.
- [`HTMLElement.draggable`](/de/docs/Web/API/HTMLElement/draggable)
  - : Ein boolescher Wert, der angibt, ob das Element gezogen werden kann.
- [`HTMLElement.editContext`](/de/docs/Web/API/HTMLElement/editContext) {{experimental_inline}}
  - : Gibt den mit dem Element verbundenen [`EditContext`](/de/docs/Web/API/EditContext) zurück oder `null`, wenn keiner vorhanden ist.
- [`HTMLElement.enterKeyHint`](/de/docs/Web/API/HTMLElement/enterKeyHint)
  - : Eine Zeichenkette, die definiert, welches Aktionslabel (oder Icon) für die Enter-Taste auf virtuellen Tastaturen angezeigt werden soll.
- [`HTMLElement.hidden`](/de/docs/Web/API/HTMLElement/hidden)
  - : Eine Zeichenkette oder ein boolescher Wert, der den Wert des [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)-Attributs des Elements widerspiegelt.
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert)
  - : Ein boolescher Wert, der angibt, ob der Benutzeragent so handeln muss, als ob der gegebene Knoten für Benutzerinteraktionsereignisse, In-Seiten-Textsuchvorgänge ("Seiteninhalt durchsuchen") und Textauswahl nicht vorhanden ist.
- [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText)
  - : Stellt den gerenderten Textinhalt eines Knotens und seiner Nachkommen dar.
    Als Getter approximiert es den Text, den der Benutzer erhalten würde, wenn er die Inhalte des Elements mit dem Cursor markieren und dann in die Zwischenablage kopieren würde.
    Als Setter ersetzt es den Inhalt im ausgewählten Element und konvertiert Zeilenumbrüche in {{HTMLElement("br")}}-Elemente.
- [`HTMLElement.inputMode`](/de/docs/Web/API/HTMLElement/inputMode)
  - : Ein Zeichenkettenwert, der den Wert des [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode)-Attributs des Elements widerspiegelt.
- [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der Inhalt des Elements bearbeitet werden kann oder nicht.
- [`HTMLElement.lang`](/de/docs/Web/API/HTMLElement/lang)
  - : Eine Zeichenkette, die die Sprache der Attribute, des Textes und der Inhalte eines Elements darstellt.
- [`HTMLElement.nonce`](/de/docs/Web/API/HTMLElement/nonce)
  - : Gibt die kryptografische Nummer zurück, die von der Content Security Policy verwendet wird, um festzustellen, ob ein bestimmter Abruf durchgeführt werden darf.
- [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, welcher die Höhe eines Elements relativ zum Layout enthält.
- [`HTMLElement.offsetLeft`](/de/docs/Web/API/HTMLElement/offsetLeft) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, welcher die Entfernung von der linken Grenze dieses Elements zur linken Grenze seines `offsetParent` wiedergibt.
- [`HTMLElement.offsetParent`](/de/docs/Web/API/HTMLElement/offsetParent) {{ReadOnlyInline}}
  - : Ein [`Element`](/de/docs/Web/API/Element), das das Element ist, von dem alle Offset-Berechnungen derzeit durchgeführt werden.
- [`HTMLElement.offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, welcher die Entfernung von der oberen Grenze dieses Elements zur oberen Grenze seines `offsetParent` wiedergibt.
- [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, welcher die Breite eines Elements relativ zum Layout enthält.
- [`HTMLElement.outerText`](/de/docs/Web/API/HTMLElement/outerText)
  - : Stellt den gerenderten Textinhalt eines Knotens und seiner Nachkommen dar.
    Als Getter ist es das gleiche wie [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) (es repräsentiert den gerenderten Textinhalt eines Elements und seiner Nachkommen).
    Als Setter ersetzt es den ausgewählten Knoten und seinen Inhalt durch den angegebenen Wert und konvertiert Zeilenumbrüche in {{HTMLElement("br")}}-Elemente.
- [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)
  - : Ruft den Popover-Zustand eines Elements über JavaScript ab und legt ihn fest (`"auto"`, `"hint"` oder `"manual"`), und kann zur Funktionsunterstützungserkennung verwendet werden. Spiegelt den Wert des [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover)-Attributs des globalen HTML-Attributs wider.
- [`HTMLElement.spellcheck`](/de/docs/Web/API/HTMLElement/spellcheck)
  - : Ein boolescher Wert, der den [Rechtschreibprüfung](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)-Hinweis steuert. Es ist auf allen HTML-Elementen verfügbar, wirkt sich jedoch nicht auf alle aus.
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
  - : Ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration), der die Deklarationen des [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributes des Elements darstellt.
- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex)
  - : Ein `long`, der die Position des Elements in der Tabulatorreihenfolge darstellt.
- [`HTMLElement.title`](/de/docs/Web/API/HTMLElement/title)
  - : Ein Zeichenkette, die den Text enthält, der in einem Popup-Fenster angezeigt wird, wenn die Maus über das Element fährt.
- [`HTMLElement.translate`](/de/docs/Web/API/HTMLElement/translate)
  - : Ein boolean, der die Übersetzung darstellt.
- [`HTMLElement.virtualKeyboardPolicy`](/de/docs/Web/API/HTMLElement/virtualKeyboardPolicy) {{Experimental_Inline}}
  - : Ein Zeichenkette, die das Verhalten der virtuellen Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten angibt, bei denen möglicherweise keine Hardwaretastatur verfügbar ist, wenn der Inhalt des Elements bearbeitbar ist (z. B. ein {{htmlelement("input")}}- oder {{htmlelement("textarea")}}-Element oder ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut).
- [`HTMLElement.writingSuggestions`](/de/docs/Web/API/HTMLElement/writingSuggestions)
  - : Eine Zeichenkette, die angibt, ob vom Browser bereitgestellte Schreibvorschläge innerhalb des Geltungsbereichs des Elements aktiviert werden sollen oder nicht.

## Instanz-Methoden

_Erbt auch Methoden von seinem übergeordneten Element, [`Element`](/de/docs/Web/API/Element)._

- [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals)
  - : Gibt ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt zurück und ermöglicht es einem benutzerdefinierten Element, an HTML-Formularen teilzunehmen.
- [`HTMLElement.blur()`](/de/docs/Web/API/HTMLElement/blur)
  - : Entfernt den Tastaturfokus vom aktuell fokussierten Element.
- [`HTMLElement.click()`](/de/docs/Web/API/HTMLElement/click)
  - : Sendet ein Mausklickereignis an das Element.
- [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus)
  - : Macht das Element zum aktuellen Tastaturfokus.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover)
  - : Blendet ein Popover-Element aus, indem es aus der {{Glossary("top_layer", "obersten Ebene")}} entfernt und mit `display: none` gestylt wird.
- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)
  - : Zeigt ein Popover-Element an, indem es zur {{Glossary("top_layer", "obersten Ebene")}} hinzugefügt und `display: none;` aus seinen Stilen entfernt wird.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)
  - : Schaltet ein Popover-Element zwischen den Zuständen "versteckt" und "angezeigt" um.

## Ereignisse

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieses Interface.

_Erbt auch Ereignisse von seinem übergeordneten Element, [`Element`](/de/docs/Web/API/Element)._

- [`change`](/de/docs/Web/API/HTMLElement/change_event)
  - : Ausgelöst, wenn der `value` eines {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}-Elements durch den Benutzer geändert und festgelegt wurde. Anders als das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis wird das `change`-Ereignis nicht unbedingt für jede Änderung des `value` eines Elements ausgelöst.
- [`command`](/de/docs/Web/API/HTMLElement/command_event)
  - : Wird auf einem Element ausgelöst, das über einen [`button`](/de/docs/Web/API/HTMLButtonElement) mit gültigen [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement)- und [`command`](/de/docs/Web/API/HTMLButtonElement/command)-Werten gesteuert wird, wann immer der Button interagiert wurde (z. B. durch Klicken).
- [`error`](/de/docs/Web/API/HTMLElement/error_event)
  - : Ausgelöst, wenn eine Ressource nicht geladen werden konnte oder nicht verwendet werden kann.
- [`load`](/de/docs/Web/API/HTMLElement/load_event)
  - : Wird für Elemente ausgelöst, die eine Ressource enthalten, wenn die Ressource erfolgreich geladen wurde.

### Zwischenablage-Ereignisse

- [`copy`](/de/docs/Web/API/HTMLElement/copy_event)
  - : Ausgelöst, wenn der Benutzer eine Kopieraktion über die Benutzeroberfläche des Browsers initiiert.
- [`cut`](/de/docs/Web/API/HTMLElement/cut_event)
  - : Ausgelöst, wenn der Benutzer eine Ausschneideaktion über die Benutzeroberfläche des Browsers initiiert.
- [`paste`](/de/docs/Web/API/HTMLElement/paste_event)
  - : Ausgelöst, wenn der Benutzer eine Einfügeaktion über die Benutzeroberfläche des Browsers initiiert.

### Drag & Drop-Ereignisse

- [`drag`](/de/docs/Web/API/HTMLElement/drag_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird.
- [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)
  - : Dieses Ereignis wird ausgelöst, wenn eine Ziehoperation beendet wird (durch Loslassen einer Maustaste oder Drücken der Escape-Taste).
- [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziehl-Ziel betritt.
- [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziehl-Ziel verlässt.
- [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
  - : Dieses Ereignis wird kontinuierlich ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird und der Mauszeiger sich über einem gültigen Ziehl-Ziel befindet (alle 50 ms WENN die Maus sich nicht bewegt, ANSONSTEN viel schneller zwischen ungefähr 5 ms (langsamer Bewegung) und 1ms (schneller Bewegung). Dieses Auslösungsmuster unterscheidet sich von [`mouseover`](/de/docs/Web/API/Element/mouseover_event) ).
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
  - : Dieses Ereignis wird ausgelöst, wenn der Benutzer beginnt, ein Element oder eine Textauswahl zu ziehen.
- [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl auf ein gültiges Ziehl-Ziel fallen gelassen wird.

### Umschalt-Ereignisse

- [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)
  - : Ausgelöst, wenn das Element ein [Popover](/de/docs/Web/API/Popover_API) oder {{htmlelement("dialog")}} ist, bevor es versteckt oder angezeigt wird.
- [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)
  - : Ausgelöst, wenn das Element ein [Popover](/de/docs/Web/API/Popover_API), {{htmlelement("dialog")}} oder {{htmlelement("details")}} Element ist, direkt nachdem es versteckt oder angezeigt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element)
