---
title: HTMLElement
slug: Web/API/HTMLElement
l10n:
  sourceCommit: cd701f10306c8b0b9690532ff808df826818a04f
---

{{APIRef("HTML DOM")}}

Das **`HTMLElement`**-Interface repräsentiert ein beliebiges [HTML](/de/docs/Web/HTML)-Element. Einige Elemente implementieren dieses Interface direkt, während andere es über ein Interface implementieren, das davon erbt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Objekt, [`Element`](/de/docs/Web/API/Element)._

- [`HTMLElement.accessKey`](/de/docs/Web/API/HTMLElement/accessKey)
  - : Ein Zeichenfolgenwert, der den Zugriffsschlüssel darstellt, der dem Element zugewiesen ist.
- [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die den dem Element zugewiesenen Zugriffsschlüssel enthält.
- [`HTMLElement.anchorElement`](/de/docs/Web/API/HTMLElement/anchorElement) {{ReadOnlyInline}}&nbsp;{{non-standard_inline}} {{experimental_inline}}
  - : Gibt eine Referenz auf das Ankerelement des Elements zurück, oder `null`, wenn es keines hat.
- [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap) {{ReadOnlyInline}}
  - : Eine [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap), die die Deklarationen des [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs des Elements repräsentiert.
- [`HTMLElement.autocapitalize`](/de/docs/Web/API/HTMLElement/autocapitalize)
  - : Eine Zeichenfolge, die das Verhalten der Großschreibung für Benutzereingaben des Elements darstellt. Gültige Werte sind: `none`, `off`, `on`, `characters`, `words`, `sentences`.
- [`HTMLElement.autofocus`](/de/docs/Web/API/HTMLElement/autofocus)
  - : Ein boolescher Wert, der das HTML-Globale Attribut [`autofocus`](/de/docs/Web/HTML/Reference/Elements/select#autofocus) widerspiegelt, welches angibt, ob das Kontrollkästchen fokussiert werden soll, wenn die Seite geladen wird oder wenn das Dialogfeld oder das Popover angezeigt wird, falls es in einem Element innerhalb von {{htmlelement("dialog")}}-Elementen oder Elementen, deren Popover-Attribut festgelegt ist, angegeben ist.
- [`HTMLElement.autocorrect`](/de/docs/Web/API/HTMLElement/autocorrect)
  - : Ein Boolescher Wert, der darstellt, ob der vom Benutzer eingegebene Text automatisch korrigiert werden soll oder nicht.
    Dies spiegelt das HTML-Globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) wider.
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
  - : Eine Zeichenfolge, bei der ein Wert von `true` bedeutet, dass das Element bearbeitbar ist, und ein Wert von `false`, dass es nicht bearbeitbar ist.
- [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) {{ReadOnlyInline}}
  - : Gibt ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) zurück, mit dem ein Skript die [benutzerdefinierten Dateneigenschaften](/de/docs/Web/HTML/How_to/Use_data_attributes) (`data-*`) eines Elements lesen und schreiben kann.
- [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir)
  - : Eine Zeichenfolge, die das `dir`-Globale Attribut widerspiegelt, welches die Schreibrichtung des Elements darstellt. Mögliche Werte sind `"ltr"`, `"rtl"` und `"auto"`.
- [`HTMLElement.draggable`](/de/docs/Web/API/HTMLElement/draggable)
  - : Ein boolescher Wert, der angibt, ob das Element gezogen werden kann.
- [`HTMLElement.editContext`](/de/docs/Web/API/HTMLElement/editContext) {{experimental_inline}}
  - : Gibt den [`EditContext`](/de/docs/Web/API/EditContext) zurück, der mit dem Element assoziiert ist, oder `null`, wenn keiner vorhanden ist.
- [`HTMLElement.enterKeyHint`](/de/docs/Web/API/HTMLElement/enterKeyHint)
  - : Eine Zeichenfolge, die angibt, welches Aktionssymbol (oder Ikone) für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll.
- [`HTMLElement.hidden`](/de/docs/Web/API/HTMLElement/hidden)
  - : Ein Zeichenfolgen- oder boolescher Wert, der den Wert des [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)-Attributs des Elements widerspiegelt.
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert)
  - : Ein boolescher Wert, der angibt, ob der Nutzer-Agent so handeln muss, als ob der gegebene Knoten für die Zwecke von Benutzerinteraktionsereignissen, textbasierte In-Page-Suchen ("Seite durchsuchen") und Textauswahl abwesend ist.
- [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText)
  - : Repräsentiert den gerenderten Textinhalt eines Knotens und seiner Nachkommen.
    Als Leser approximiert er den Text, den der Benutzer erhalten würde, wenn er den Inhalt des Elements mit dem Cursor markiert und dann in die Zwischenablage kopiert hätte.
    Als Schreiber ersetzt er den Inhalt innerhalb des ausgewählten Elements, indem er alle Zeilenumbrüche in {{HTMLElement("br")}}-Elemente konvertiert.
- [`HTMLElement.inputMode`](/de/docs/Web/API/HTMLElement/inputMode)
  - : Ein Zeichenfolgenwert, der den Wert des [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode)-Attributs des Elements widerspiegelt.
- [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der Inhalt des Elements bearbeitet werden kann oder nicht.
- [`HTMLElement.lang`](/de/docs/Web/API/HTMLElement/lang)
  - : Eine Zeichenfolge, die die Sprache der Attribute, des Textes und der Inhalte eines Elements repräsentiert.
- [`HTMLElement.nonce`](/de/docs/Web/API/HTMLElement/nonce)
  - : Gibt die einmal verwendete kryptografische Nummer zurück, die von der Content Security Policy verwendet wird, um zu bestimmen, ob ein gegebener Abruf durchgeführt werden darf.
- [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Höhe eines Elements relativ zum Layout enthält.
- [`HTMLElement.offsetLeft`](/de/docs/Web/API/HTMLElement/offsetLeft) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, der die Entfernung vom linken Rand dieses Elements zum linken Rand des `offsetParent` enthält.
- [`HTMLElement.offsetParent`](/de/docs/Web/API/HTMLElement/offsetParent) {{ReadOnlyInline}}
  - : Ein [`Element`](/de/docs/Web/API/Element), von dem alle Offset-Berechnungen derzeit durchgeführt werden.
- [`HTMLElement.offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, der die Entfernung vom oberen Rand dieses Elements zum oberen Rand des `offsetParent` enthält.
- [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Breite eines Elements relativ zum Layout enthält.
- [`HTMLElement.outerText`](/de/docs/Web/API/HTMLElement/outerText)
  - : Repräsentiert den gerenderten Textinhalt eines Knotens und seiner Nachkommen.
    Als Leser ist es dasselbe wie [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) (es repräsentiert den angezeigten Textinhalt eines Elements und seiner Nachkommen).
    Als Schreiber ersetzt er den ausgewählten Knoten und seine Inhalte durch den gegebenen Wert und konvertiert alle Zeilenumbrüche in {{HTMLElement("br")}}-Elemente.
- [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)
  - : Ruft den Popover-Zustand eines Elements über JavaScript ab und setzt diesen (`"auto"`, `"hint"` oder `"manual"`) und kann zur Feature-Erkennung verwendet werden. Spiegelt den Wert des globalen HTML-Attributs [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) wider.
- [`HTMLElement.spellcheck`](/de/docs/Web/API/HTMLElement/spellcheck)
  - : Ein boolescher Wert, der den Hinweis auf die [Rechtschreibprüfung](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) steuert. Es ist für alle HTML-Elemente verfügbar, obwohl es nicht alle betrifft.
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
  - : Eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration), die die Deklarationen des [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs des Elements repräsentiert.
- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex)
  - : Eine `long`, die die Position des Elements in der Tab-Reihenfolge repräsentiert.
- [`HTMLElement.title`](/de/docs/Web/API/HTMLElement/title)
  - : Eine Zeichenfolge, die den Text enthält, der in einem Popup-Fenster erscheint, wenn die Maus über dem Element ist.
- [`HTMLElement.translate`](/de/docs/Web/API/HTMLElement/translate)
  - : Ein boolescher Wert, der die Übersetzung repräsentiert.
- [`HTMLElement.virtualKeyboardPolicy`](/de/docs/Web/API/HTMLElement/virtualKeyboardPolicy) {{Experimental_Inline}}
  - : Eine Zeichenfolge, die das Verhalten der virtuellen Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten, bei denen möglicherweise keine Hardwaretastatur verfügbar ist, angibt, sofern der Inhalt des Elements bearbeitbar ist (zum Beispiel ist es ein {{htmlelement("input")}}- oder {{htmlelement("textarea")}}-Element, oder ein Element mit dem Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gesetzt).
- [`HTMLElement.writingSuggestions`](/de/docs/Web/API/HTMLElement/writingSuggestions)
  - : Eine Zeichenfolge, die angibt, ob vom Browser bereitgestellte Schreibvorschläge im Rahmen des Elements aktiv sein sollen oder nicht.

## Instanz-Methoden

_Erbt auch Methoden von seinem übergeordneten Objekt, [`Element`](/de/docs/Web/API/Element)._

- [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals)
  - : Gibt ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt zurück und ermöglicht es einem benutzerdefinierten Element, an HTML-Formularen teilzunehmen.
- [`HTMLElement.blur()`](/de/docs/Web/API/HTMLElement/blur)
  - : Entfernt die Tastaturfokussierung von dem aktuell fokussierten Element.
- [`HTMLElement.click()`](/de/docs/Web/API/HTMLElement/click)
  - : Sendet ein Mausklick-Ereignis an das Element.
- [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus)
  - : Macht das Element zum aktuellen Tastaturfokus.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover)
  - : Versteckt ein Popover-Element, indem es aus der {{Glossary("top_layer", "oberen Schicht")}} entfernt und mit `display: none` gestylt wird.
- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)
  - : Zeigt ein Popover-Element, indem es zur {{Glossary("top_layer", "oberen Schicht")}} hinzugefügt und `display: none;` aus seinen Stilen entfernt wird.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)
  - : Schaltet ein Popover-Element zwischen den Zuständen "versteckt" und "angezeigt" um.

## Ereignisse

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieses Interfaces überwacht werden.

_Erbt auch Ereignisse von seinem übergeordneten Objekt, [`Element`](/de/docs/Web/API/Element)._

- [`change`](/de/docs/Web/API/HTMLElement/change_event)
  - : Wird ausgelöst, wenn der `value` eines {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}-Elements geändert und vom Benutzer bestätigt wurde. Im Gegensatz zum [`input`](/de/docs/Web/API/Element/input_event)-Ereignis wird das `change`-Ereignis nicht unbedingt für jede Änderung des `value`-Werts eines Elements ausgelöst.
- [`command`](/de/docs/Web/API/HTMLElement/command_event)
  - : Wird auf einem Element ausgelöst, das über ein [`button`](/de/docs/Web/API/HTMLButtonElement) mit gültigen [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement) und [`command`](/de/docs/Web/API/HTMLButtonElement/command)-Werten gesteuert wird, wann immer der Button interagiert wird (z.B. wenn darauf geklickt wird).
- [`error`](/de/docs/Web/API/HTMLElement/error_event)
  - : Wird ausgelöst, wenn eine Ressource nicht geladen werden konnte oder nicht verwendet werden kann.
- [`load`](/de/docs/Web/API/HTMLElement/load_event)
  - : Wird für Elemente ausgelöst, die eine Ressource enthalten, wenn diese Ressource erfolgreich geladen wurde.

### Zwischenablage-Ereignisse

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
  - : Dieses Ereignis wird ausgelöst, wenn ein Zieh-Vorgang beendet wird (durch Loslassen einer Maustaste oder Drücken der Escape-Taste).
- [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl in ein gültiges Ziehziel eintritt.
- [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziehziel verlässt.
- [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
  - : Dieses Ereignis wird kontinuierlich ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird und sich der Mauszeiger über einem gültigen Ziehziel befindet (alle 50 ms, wenn die Maus nicht bewegt wird, sonst viel schneller, zwischen 5 ms (langsamer Bewegung) und ca. 1ms (schnelle Bewegung). Dieses Auslöse-Muster unterscheidet sich vom [`mouseover`](/de/docs/Web/API/Element/mouseover_event)-Ereignis).
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
  - : Dieses Ereignis wird ausgelöst, wenn der Benutzer anfängt, ein Element oder eine Textauswahl zu ziehen.
- [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl auf ein gültiges Ziehziel fallen gelassen wird.

### Umschalt-Ereignisse

- [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)
  - : Wird ausgelöst, wenn das Element ein [Popover](/de/docs/Web/API/Popover_API) oder {{htmlelement("dialog")}} ist, bevor es versteckt oder angezeigt wird.
- [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)
  - : Wird ausgelöst, wenn das Element ein [Popover](/de/docs/Web/API/Popover_API), {{htmlelement("dialog")}} oder {{htmlelement("details")}}-Element ist, gerade nachdem es versteckt oder angezeigt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element)
