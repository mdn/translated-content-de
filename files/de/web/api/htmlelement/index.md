---
title: HTMLElement
slug: Web/API/HTMLElement
l10n:
  sourceCommit: 20cff31570e35c6da44ddd84158fcebd9f4f42d9
---

{{APIRef("HTML DOM")}}

Das **`HTMLElement`** Interface repräsentiert jedes [HTML](/de/docs/Web/HTML) Element. Einige Elemente implementieren dieses Interface direkt, während andere es über ein davon abgeleitetes Interface implementieren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil, [`Element`](/de/docs/Web/API/Element)._

- [`HTMLElement.accessKey`](/de/docs/Web/API/HTMLElement/accessKey)
  - : Ein String, der den Zugriffsschlüssel des Elements repräsentiert.
- [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den zugewiesenen Zugriffsschlüssel des Elements enthält.
- [`HTMLElement.anchorElement`](/de/docs/Web/API/HTMLElement/anchorElement) {{ReadOnlyInline}}&nbsp;{{non-standard_inline}} {{experimental_inline}}
  - : Gibt eine Referenz zum Ankerelement des Elements zurück oder `null`, wenn es keines hat.
- [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap) {{ReadOnlyInline}}
  - : Ein [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap), das die Deklarationen des [`style`](/de/docs/Web/HTML/Global_attributes/style) Attributs des Elements repräsentiert.
- [`HTMLElement.autocapitalize`](/de/docs/Web/API/HTMLElement/autocapitalize)
  - : Ein String, der das Verhalten der Großschreibung für Benutzereingaben des Elements repräsentiert. Gültige Werte sind: `none`, `off`, `on`, `characters`, `words`, `sentences`.
- [`HTMLElement.autofocus`](/de/docs/Web/API/HTMLElement/autofocus)
  - : Ein boolescher Wert, der das [`autofocus`](/de/docs/Web/HTML/Element/select#autofocus) HTML-Globalattribut widerspiegelt, das angibt, ob das Steuerelement beim Laden der Seite fokussiert werden soll oder wenn ein Dialog oder Popover angezeigt wird, wenn es in einem Element innerhalb von {{htmlelement("dialog")}} Elementen oder Elementen, deren Popover-Attribut gesetzt ist, spezifiziert wird.
- [`HTMLElement.autocorrect`](/de/docs/Web/API/HTMLElement/autocorrect)
  - : Ein boolescher Wert, der angibt, ob Benutzereingaben automatisch korrigiert werden sollen.
    Dies spiegelt das [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) HTML-Globalattribut wider.
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
  - : Ein String, bei dem ein Wert von `true` bedeutet, dass das Element bearbeitbar ist, und ein Wert von `false` bedeutet, dass es nicht bearbeitbar ist.
- [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) {{ReadOnlyInline}}
  - : Gibt ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) zurück, mit dem Skripte die [benutzerdefinierten Datenattribute](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes) (`data-*`) des Elements lesen und schreiben können.
- [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir)
  - : Ein String, der das `dir` Globalattribut widerspiegelt, welches die Richtung des Elements repräsentiert. Mögliche Werte sind `"ltr"`, `"rtl"` und `"auto"`.
- [`HTMLElement.draggable`](/de/docs/Web/API/HTMLElement/draggable)
  - : Ein boolescher Wert, der angibt, ob das Element gezogen werden kann.
- [`HTMLElement.editContext`](/de/docs/Web/API/HTMLElement/editContext) {{experimental_inline}}
  - : Gibt das mit dem Element assoziierte [`EditContext`](/de/docs/Web/API/EditContext) zurück oder `null`, wenn keines vorhanden ist.
- [`HTMLElement.enterKeyHint`](/de/docs/Web/API/HTMLElement/enterKeyHint)
  - : Ein String, der definiert, welches Aktionslabel (oder Icon) für die Eingabetaste auf virtuellen Tastaturen dargestellt wird.
- [`HTMLElement.hidden`](/de/docs/Web/API/HTMLElement/hidden)
  - : Ein String oder boolescher Wert, der den Wert des [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden) Attributs des Elements widerspiegelt.
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert)
  - : Ein boolescher Wert, der anzeigt, ob der Benutzeragent das gegebene Knoten ignorieren muss, um Benutzerinteraktionsereignisse, textinterne Suchvorgänge ("Seite suchen") und Textauswahl.
- [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText)
  - : Repräsentiert den gerenderten Textinhalt eines Knotens und seiner Nachkommen.
    Als Getter gibt es in etwa den Text zurück, den der Benutzer erhält, wenn er den Inhalt des Elements mit dem Cursor markiert und dann in die Zwischenablage kopiert.
    Als Setter ersetzt es den Inhalt im ausgewählten Element und konvertiert alle Zeilenumbrüche in {{HTMLElement("br")}} Elemente.
- [`HTMLElement.inputMode`](/de/docs/Web/API/HTMLElement/inputMode)
  - : Ein String-Wert, der den Wert des [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode) Attributs des Elements widerspiegelt.
- [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der Inhalt des Elements bearbeitet werden kann.
- [`HTMLElement.lang`](/de/docs/Web/API/HTMLElement/lang)
  - : Ein String, der die Sprache der Attribute, des Textes und des Inhalts eines Elements repräsentiert.
- [`HTMLElement.nonce`](/de/docs/Web/API/HTMLElement/nonce)
  - : Gibt die kryptografische einmalige Nummer zurück, die von der Content Security Policy verwendet wird, um zu bestimmen, ob ein bestimmter Abruf fortgesetzt werden darf.
- [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, der die Höhe eines Elements relativ zum Layout enthält.
- [`HTMLElement.offsetLeft`](/de/docs/Web/API/HTMLElement/offsetLeft) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, der den Abstand von der linken Grenze dieses Elements zur linken Grenze seines `offsetParent` angibt.
- [`HTMLElement.offsetParent`](/de/docs/Web/API/HTMLElement/offsetParent) {{ReadOnlyInline}}
  - : Ein [`Element`](/de/docs/Web/API/Element), das das Element ist, von dem aus alle Offset-Berechnungen derzeit berechnet werden.
- [`HTMLElement.offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, der den Abstand von der oberen Grenze dieses Elements zur oberen Grenze seines `offsetParent` angibt.
- [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, der die Breite eines Elements relativ zum Layout enthält.
- [`HTMLElement.outerText`](/de/docs/Web/API/HTMLElement/outerText)
  - : Repräsentiert den gerenderten Textinhalt eines Knotens und seiner Nachkommen.
    Als Getter ist es dasselbe wie [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) (es repräsentiert den gerenderten Textinhalt eines Elements und seiner Nachkommen).
    Als Setter ersetzt es den ausgewählten Knoten und seinen Inhalt durch den angegebenen Wert und konvertiert alle Zeilenumbrüche in {{HTMLElement("br")}} Elemente.
- [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)
  - : Ruft den Popover-Zustand eines Elements ab und legt ihn über JavaScript fest (`"auto"`, `"hint"`, oder `"manual"`), und kann zur Funktionsprüfung verwendet werden. Widerspiegelt den Wert des [`popover`](/de/docs/Web/HTML/Global_attributes/popover) globalen HTML-Attributs.
- [`HTMLElement.spellcheck`](/de/docs/Web/API/HTMLElement/spellcheck)
  - : Ein boolescher Wert, der den Hinweis zur [Rechtschreibprüfung](/de/docs/Web/HTML/Global_attributes/spellcheck) steuert. Er ist auf allen HTML-Elementen verfügbar, obwohl er nicht alle von ihnen beeinflusst.
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
  - : Ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration), der die Deklarationen des [`style`](/de/docs/Web/HTML/Global_attributes/style) Attributs des Elements repräsentiert.
- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex)
  - : Ein `long`, der die Position des Elements in der Tab-Reihenfolge repräsentiert.
- [`HTMLElement.title`](/de/docs/Web/API/HTMLElement/title)
  - : Ein String, der den Text enthält, der in einem Popup-Fenster angezeigt wird, wenn die Maus über dem Element schwebt.
- [`HTMLElement.translate`](/de/docs/Web/API/HTMLElement/translate)
  - : Ein boolescher Wert, der die Übersetzung repräsentiert.
- [`HTMLElement.virtualKeyboardPolicy`](/de/docs/Web/API/HTMLElement/virtualKeyboardPolicy) {{Experimental_Inline}}
  - : Ein String, der das Verhalten der virtuellen Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten angibt, bei denen möglicherweise keine Hardwaretastatur verfügbar ist, wenn der Inhalt des Elements bearbeitbar ist (zum Beispiel, wenn es sich um ein {{htmlelement("input")}} oder {{htmlelement("textarea")}} Element handelt, oder um ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut).
- [`HTMLElement.writingSuggestions`](/de/docs/Web/API/HTMLElement/writingSuggestions)
  - : Ein String, der angibt, ob schreibspezifische Vorschläge des Browsers unter dem Geltungsbereich des Elements aktiviert werden sollen oder nicht.

## Instanz-Methoden

_Erbt auch Methoden von seinem Elternteil, [`Element`](/de/docs/Web/API/Element)._

- [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals)
  - : Gibt ein [`ElementInternals`](/de/docs/Web/API/ElementInternals) Objekt zurück und ermöglicht es einem benutzerdefinierten Element, an HTML-Formularen teilzunehmen.
- [`HTMLElement.blur()`](/de/docs/Web/API/HTMLElement/blur)
  - : Entfernt die Tastaturfokussierung vom aktuell fokussierten Element.
- [`HTMLElement.click()`](/de/docs/Web/API/HTMLElement/click)
  - : Sendet ein Mausklickevent an das Element.
- [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus)
  - : Setzt das Element in den aktuellen Tastaturfokus.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover)
  - : Verbirgt ein Popover-Element, indem es aus der {{Glossary("top_layer", "Top-Schicht")}} entfernt und mit `display: none` gestylt wird.
- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)
  - : Zeigt ein Popover-Element an, indem es zur {{Glossary("top_layer", "Top-Schicht")}} hinzugefügt wird und `display: none;` aus seinem Stil entfernt wird.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)
  - : Schaltet ein Popover-Element zwischen den versteckten und angezeigten Zuständen um.

## Ereignisse

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) überwacht werden oder indem ein Ereignislistener auf die `oneventname` Eigenschaft dieser Schnittstelle zugewiesen wird.

_Erbt auch Ereignisse von seinem Elternteil, [`Element`](/de/docs/Web/API/Element)._

- [`change`](/de/docs/Web/API/HTMLElement/change_event)
  - : Wird ausgelöst, wenn der `value` eines {{HTMLElement("input")}}, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}} Elements verändert und vom Benutzer bestätigt wurde. Im Gegensatz zum [`input`](/de/docs/Web/API/Element/input_event) Ereignis wird das `change` Ereignis nicht zwingend bei jeder Änderung des `value` eines Elements ausgelöst.
- [`error`](/de/docs/Web/API/HTMLElement/error_event)
  - : Wird ausgelöst, wenn eine Ressource nicht geladen werden konnte oder nicht verwendet werden kann.
- [`load`](/de/docs/Web/API/HTMLElement/load_event)
  - : Wird für Elemente ausgelöst, die eine Ressource enthalten, wenn die Ressource erfolgreich geladen wurde.

### Zwischenablagen-Ereignisse

- [`copy`](/de/docs/Web/API/HTMLElement/copy_event)
  - : Wird ausgelöst, wenn der Benutzer eine Kopieraktion über die Benutzeroberfläche des Browsers einleitet.
- [`cut`](/de/docs/Web/API/HTMLElement/cut_event)
  - : Wird ausgelöst, wenn der Benutzer eine Ausschneideaktion über die Benutzeroberfläche des Browsers einleitet.
- [`paste`](/de/docs/Web/API/HTMLElement/paste_event)
  - : Wird ausgelöst, wenn der Benutzer eine Einfügeaktion über die Benutzeroberfläche des Browsers einleitet.

### Drag & Drop-Ereignisse

- [`drag`](/de/docs/Web/API/HTMLElement/drag_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird.
- [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)
  - : Dieses Ereignis wird ausgelöst, wenn eine Zieh-Operation beendet wird (durch Loslassen einer Maustaste oder Drücken der Escape-Taste).
- [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziel für das Ablegen betritt.
- [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziel für das Ablegen verlässt.
- [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
  - : Dieses Ereignis wird kontinuierlich ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird und sich der Mauszeiger über einem gültigen Ziel für das Ablegen befindet (alle 50 ms, wenn die Maus sich nicht bewegt, andernfalls viel schneller zwischen 5 ms (langsamer Bewegung) und 1 ms (schnelle Bewegung) ca. Dieses Auslöseverhalten unterscheidet sich von [`mouseover`](/de/docs/Web/API/Element/mouseover_event)).
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
  - : Dieses Ereignis wird ausgelöst, wenn der Benutzer beginnt, ein Element oder eine Textauswahl zu ziehen.
- [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl auf einem gültigen Ziel für das Ablegen abgelegt wird.

### Umschalt-Ereignisse

- [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)
  - : Wird ausgelöst, wenn das Element ein [Popover](/de/docs/Web/API/Popover_API) oder {{htmlelement("dialog")}} ist, bevor es versteckt oder angezeigt wird.
- [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)
  - : Wird ausgelöst, wenn das Element ein [Popover](/de/docs/Web/API/Popover_API), {{htmlelement("dialog")}}, oder {{htmlelement("details")}} Element ist, nachdem es versteckt oder angezeigt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element)
