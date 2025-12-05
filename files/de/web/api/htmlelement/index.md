---
title: HTMLElement
slug: Web/API/HTMLElement
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

{{APIRef("HTML DOM")}}

Das **`HTMLElement`** Interface repräsentiert jedes [HTML](/de/docs/Web/HTML) Element. Einige Elemente implementieren dieses Interface direkt, während andere es über ein ererbtes Interface implementieren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil, [`Element`](/de/docs/Web/API/Element)._

- [`HTMLElement.accessKey`](/de/docs/Web/API/HTMLElement/accessKey)
  - : Ein String, der den Zugangsschlüssel repräsentiert, der dem Element zugewiesen ist.
- [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den zugewiesenen Zugangsschlüssel des Elements enthält.
- [`HTMLElement.anchorElement`](/de/docs/Web/API/HTMLElement/anchorElement) {{ReadOnlyInline}}&nbsp;{{non-standard_inline}} {{experimental_inline}}
  - : Gibt eine Referenz auf das Ankerelement des Elements zurück oder `null`, wenn es keines hat.
- [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap) {{ReadOnlyInline}}
  - : Eine [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap), die die Deklarationen des [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attributs des Elements repräsentiert.
- [`HTMLElement.autocapitalize`](/de/docs/Web/API/HTMLElement/autocapitalize)
  - : Ein String, der das Kapitalisierungsverhalten des Elements für Benutzereingaben repräsentiert. Gültige Werte sind: `none`, `off`, `on`, `characters`, `words`, `sentences`.
- [`HTMLElement.autofocus`](/de/docs/Web/API/HTMLElement/autofocus)
  - : Ein boolescher Wert, der das [`autofocus`](/de/docs/Web/HTML/Reference/Elements/select#autofocus) HTML-Globalattribut widerspiegelt, das angibt, ob das Steuerungselement fokussiert werden soll, wenn die Seite geladen wird, oder wenn ein Dialog oder Popover angezeigt wird, falls in einem Element innerhalb von {{htmlelement("dialog")}} Elementen oder in Elementen, deren Popover-Attribut gesetzt ist, angegeben.
- [`HTMLElement.autocorrect`](/de/docs/Web/API/HTMLElement/autocorrect)
  - : Ein boolescher Wert, der angibt, ob die Texteingabe eines Benutzers automatisch korrigiert werden soll oder nicht.
    Dies spiegelt das [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) HTML-Globalattribut wider.
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
  - : Ein String, wobei ein Wert von `true` bedeutet, dass das Element bearbeitbar ist, und ein Wert von `false` bedeutet, dass es nicht bearbeitbar ist.
- [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) {{ReadOnlyInline}}
  - : Gibt ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) zurück, mit dem Skripte die [benutzerdefinierten Dateneigenschaften](/de/docs/Web/HTML/How_to/Use_data_attributes) (`data-*`) des Elements lesen und schreiben können.
- [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir)
  - : Ein String, der das `dir` Globalattribut darstellt und die Richtung des Elements repräsentiert. Mögliche Werte sind `"ltr"`, `"rtl"` und `"auto"`.
- [`HTMLElement.draggable`](/de/docs/Web/API/HTMLElement/draggable)
  - : Ein boolescher Wert, der angibt, ob das Element gezogen werden kann.
- [`HTMLElement.editContext`](/de/docs/Web/API/HTMLElement/editContext) {{experimental_inline}}
  - : Gibt den mit dem Element verknüpften [`EditContext`](/de/docs/Web/API/EditContext) zurück, oder `null`, wenn keiner vorhanden ist.
- [`HTMLElement.enterKeyHint`](/de/docs/Web/API/HTMLElement/enterKeyHint)
  - : Ein String, der definiert, welches Aktionslabel (oder Icon) auf virtuellen Tastaturen für die Eingabetaste angezeigt werden soll.
- [`HTMLElement.hidden`](/de/docs/Web/API/HTMLElement/hidden)
  - : Ein String oder ein boolescher Wert, der den Wert des [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden) Attributs des Elements widerspiegelt.
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert)
  - : Ein boolescher Wert, der angibt, ob der Benutzeragent so agieren muss, als wäre der angegebene Knoten für Benutzerinteraktionsereignisse, textbasierte Seitensuchen ("Seite durchsuchen") und Textauswahl nicht vorhanden.
- [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText)
  - : Repräsentiert den gerenderten Textinhalt eines Knotens und seiner Nachfahren.
    Als Getter ähnelt es dem Text, den der Benutzer erhalten würde, wenn er die Inhalte des Elements mit dem Cursor markieren und dann in die Zwischenablage kopieren würde.
    Als Setter ersetzt es den Inhalt innerhalb des ausgewählten Elements und konvertiert jeden Zeilenumbruch in {{HTMLElement("br")}} Elemente.
- [`HTMLElement.inputMode`](/de/docs/Web/API/HTMLElement/inputMode)
  - : Ein String, der den Wert des [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) Attributs des Elements widerspiegelt.
- [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der Inhalt des Elements bearbeitet werden kann oder nicht.
- [`HTMLElement.lang`](/de/docs/Web/API/HTMLElement/lang)
  - : Ein String, der die Sprache der Attribute, des Textes und der Elementinhalte eines Elements darstellt.
- [`HTMLElement.nonce`](/de/docs/Web/API/HTMLElement/nonce)
  - : Gibt die kryptografische Einmalzahl zurück, die von der Content-Security-Policy verwendet wird, um festzulegen, ob ein bestimmter Abruf ausgeführt werden darf.
- [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight) {{ReadOnlyInline}}
  - : Gibt eine `double` zurück, die die Höhe eines Elements relativ zu seinem Layout enthält.
- [`HTMLElement.offsetLeft`](/de/docs/Web/API/HTMLElement/offsetLeft) {{ReadOnlyInline}}
  - : Gibt eine `double` zurück, die den Abstand von der linken Grenze dieses Elements zur linken Grenze seines `offsetParent` beschreibt.
- [`HTMLElement.offsetParent`](/de/docs/Web/API/HTMLElement/offsetParent) {{ReadOnlyInline}}
  - : Ein [`Element`](/de/docs/Web/API/Element), das das Element ist, von dem aus alle Offset-Berechnungen derzeit berechnet werden.
- [`HTMLElement.offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop) {{ReadOnlyInline}}
  - : Gibt eine `double` zurück, die den Abstand von der oberen Grenze dieses Elements zur oberen Grenze seines `offsetParent` beschreibt.
- [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth) {{ReadOnlyInline}}
  - : Gibt eine `double` zurück, die die Breite eines Elements relativ zu seinem Layout enthält.
- [`HTMLElement.outerText`](/de/docs/Web/API/HTMLElement/outerText)
  - : Repräsentiert den gerenderten Textinhalt eines Knotens und seiner Nachfahren.
    Als Getter ist es dasselbe wie [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) (es repräsentiert den gerenderten Textinhalt eines Elements und seiner Nachfahren).
    Als Setter ersetzt es den ausgewählten Knoten und dessen Inhalt durch den angegebenen Wert und konvertiert jeden Zeilenumbruch in {{HTMLElement("br")}} Elemente.
- [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)
  - : Ruft den Popover-Zustand eines Elements ab und setzt ihn über JavaScript (`"auto"`, `"hint"` oder `"manual"`), und kann für die Funktionserkennung verwendet werden. Es spiegelt den Wert des [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) globalen HTML-Attributs wider.
- [`HTMLElement.spellcheck`](/de/docs/Web/API/HTMLElement/spellcheck)
  - : Ein boolescher Wert, der den Hinweis auf die [Rechtschreibprüfung](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) steuert. Es ist auf allen HTML-Elementen verfügbar, beeinträchtigt jedoch nicht alle.
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
  - : Eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration), die die Deklarationen des [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attributs des Elements repräsentiert.
- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex)
  - : Eine `long`, die die Position des Elements in der Tab-Reihenfolge repräsentiert.
- [`HTMLElement.title`](/de/docs/Web/API/HTMLElement/title)
  - : Ein String, der den Text enthält, der in einem Popup-Fenster angezeigt wird, wenn die Maus über dem Element ist.
- [`HTMLElement.translate`](/de/docs/Web/API/HTMLElement/translate)
  - : Ein boolescher Wert, der die Übersetzung repräsentiert.
- [`HTMLElement.virtualKeyboardPolicy`](/de/docs/Web/API/HTMLElement/virtualKeyboardPolicy) {{Experimental_Inline}}
  - : Ein String, der das Verhalten der Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten angibt, auf denen möglicherweise keine Hardware-Tastatur verfügbar ist, wenn der Inhalt des Elements bearbeitbar ist (z.B. es ist ein {{htmlelement("input")}} oder {{htmlelement("textarea")}} Element, oder ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut gesetzt).
- [`HTMLElement.writingSuggestions`](/de/docs/Web/API/HTMLElement/writingSuggestions)
  - : Ein String, der angibt, ob von Browser bereitgestellte Schreibvorschläge im Rahmen des Geltungsbereichs des Elements aktiviert werden sollen oder nicht.

## Instanz-Methoden

_Erbt auch Methoden von seinem Elternteil, [`Element`](/de/docs/Web/API/Element)._

- [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals)
  - : Gibt ein [`ElementInternals`](/de/docs/Web/API/ElementInternals) Objekt zurück und ermöglicht einem benutzerdefinierten Element die Teilnahme an HTML-Formularen.
- [`HTMLElement.blur()`](/de/docs/Web/API/HTMLElement/blur)
  - : Entfernt den Tastaturfokus von dem derzeit fokussierten Element.
- [`HTMLElement.click()`](/de/docs/Web/API/HTMLElement/click)
  - : Sendet ein Mausklickereignis an das Element.
- [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus)
  - : Macht das Element zum aktuellen Tastaturfokus.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover)
  - : Verbirgt ein Popover-Element, indem es aus der {{Glossary("top_layer", "obersten Schicht")}} entfernt und es mit "display: none" gestylt wird.
- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)
  - : Zeigt ein Popover-Element an, indem es zur {{Glossary("top_layer", "obersten Schicht")}} hinzugefügt und `display: none;` aus seinen Stilen entfernt wird.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)
  - : Wechselt ein Popover-Element zwischen den Zuständen versteckt und sichtbar.

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignis-Listeners zur `oneventname` Eigenschaft dieser Schnittstelle.

_Erbt auch Ereignisse von seinem Elternteil, [`Element`](/de/docs/Web/API/Element)._

- [`change`](/de/docs/Web/API/HTMLElement/change_event)
  - : Wird ausgelöst, wenn der `value` eines {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} Elements vom Benutzer verändert und bestätigt wurde. Anders als beim [`input`](/de/docs/Web/API/Element/input_event) Ereignis wird das `change` Ereignis nicht notwendigerweise bei jeder Änderung des `value` eines Elements ausgelöst.
- [`command`](/de/docs/Web/API/HTMLElement/command_event)
  - : Wird auf einem Element ausgelöst, das über ein [`button`](/de/docs/Web/API/HTMLButtonElement) kontrolliert wird, mit gültigen [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement) und [`command`](/de/docs/Web/API/HTMLButtonElement/command) Werten, wann immer mit dem Button interagiert wird (zum Beispiel, wenn er angeklickt wird).
- [`error`](/de/docs/Web/API/HTMLElement/error_event)
  - : Wird ausgelöst, wenn das Laden einer Ressource fehlgeschlagen ist oder nicht genutzt werden kann.
- [`load`](/de/docs/Web/API/HTMLElement/load_event)
  - : Wird für Elemente, die eine Ressource enthalten, ausgelöst, wenn die Ressource erfolgreich geladen wurde.

### Ziehen & Ablegen Ereignisse

- [`drag`](/de/docs/Web/API/HTMLElement/drag_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird.
- [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)
  - : Dieses Ereignis wird ausgelöst, wenn eine Ziehoperation beendet wird (durch Loslassen einer Maustaste oder Drücken der Escape-Taste).
- [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziel für das Ablegen betritt.
- [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziel für das Ablegen verlässt.
- [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
  - : Dieses Ereignis wird kontinuierlich ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird und der Mauszeiger über einem gültigen Ziel für das Ablegen ist (alle 50 ms, wenn die Maus nicht bewegt wird, anders viel schneller zwischen ungefähr 5 ms (langsame Bewegung) und 1 ms (schnelle Bewegung). Dieses Feuerungsmuster ist anders als bei [`mouseover`](/de/docs/Web/API/Element/mouseover_event) ).
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
  - : Dieses Ereignis wird ausgelöst, wenn der Benutzer beginnt, ein Element oder eine Textauswahl zu ziehen.
- [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl auf einem gültigen Ziel für das Ablegen abgelegt wird.

### Interesse-Initiator Ereignisse

- [`interest`](/de/docs/Web/API/HTMLElement/interest_event) {{experimental_inline}}
  - : Wird auf dem Zielelement eines [Interesse-Initiators](/de/docs/Web/API/Popover_API/Using_interest_invokers) ausgelöst, wenn Interesse gezeigt wird, sodass Code als Reaktion ausgeführt werden kann.
- [`loseinterest`](/de/docs/Web/API/HTMLElement/loseinterest_event) {{experimental_inline}}
  - : Wird auf dem Zielelement eines Interesse-Initiators ausgelöst, wenn Interesse verlorengeht, sodass Code als Reaktion ausgeführt werden kann.

### Umschalten Ereignisse

- [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)
  - : Wird ausgelöst, wenn das Element ein [Popover](/de/docs/Web/API/Popover_API) oder {{htmlelement("dialog")}} ist, bevor es versteckt oder angezeigt wird.
- [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)
  - : Wird nach dem Verstecken oder Anzeigen eines [Popover](/de/docs/Web/API/Popover_API), {{htmlelement("dialog")}}, oder {{htmlelement("details")}} Elements ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element)
