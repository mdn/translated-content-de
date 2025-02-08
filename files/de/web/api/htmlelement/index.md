---
title: HTMLElement
slug: Web/API/HTMLElement
l10n:
  sourceCommit: 01e8b5077df6d79e52f2521dfbe734e0923d1fc4
---

{{APIRef("HTML DOM")}}

Das **`HTMLElement`**-Interface repräsentiert jedes [HTML](/de/docs/Web/HTML)-Element. Einige Elemente implementieren dieses Interface direkt, während andere es über ein abgeleitetes Interface implementieren.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt außerdem Eigenschaften von seinem Elternteil, [`Element`](/de/docs/Web/API/Element)._

- [`HTMLElement.accessKey`](/de/docs/Web/API/HTMLElement/accessKey)
  - : Ein String, der den Accesskey repräsentiert, der dem Element zugewiesen ist.
- [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den zugewiesenen Accesskey des Elements enthält.
- [`HTMLElement.anchorElement`](/de/docs/Web/API/HTMLElement/anchorElement) {{ReadOnlyInline}}&nbsp;{{non-standard_inline}} {{experimental_inline}}
  - : Gibt eine Referenz auf das Ankerelement des Elements zurück oder `null`, falls keines vorhanden ist.
- [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap) {{ReadOnlyInline}}
  - : Ein [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap), das die Deklarationen des [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributs des Elements repräsentiert.
- [`HTMLElement.autocapitalize`](/de/docs/Web/API/HTMLElement/autocapitalize)
  - : Ein String, der das Verhalten der Groß-/Kleinschreibung bei Benutzereingaben repräsentiert. Gültige Werte sind: `none`, `off`, `on`, `characters`, `words`, `sentences`.
- [`HTMLElement.autofocus`](/de/docs/Web/API/HTMLElement/autofocus)
  - : Ein boolescher Wert, der das [`autofocus`](/de/docs/Web/HTML/Element/select#autofocus)-Globale-Attribut in HTML widerspiegelt. Es zeigt an, ob das Steuerelement fokussiert werden soll, wenn die Seite geladen wird oder wenn ein Dialog oder Popover angezeigt wird, falls angegeben innerhalb von {{htmlelement("dialog")}}-Elementen oder Elementen mit gesetztem Popover-Attribut.
- [`HTMLElement.autocorrect`](/de/docs/Web/API/HTMLElement/autocorrect)
  - : Ein boolescher Wert, der angibt, ob die Benutzereingabe automatisch korrigiert werden soll.
    Dieser Wert spiegelt das [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect)-Globale-Attribut aus HTML wider.
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
  - : Ein String, wobei der Wert `true` bedeutet, dass das Element bearbeitbar ist, und `false`, dass es nicht bearbeitbar ist.
- [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) {{ReadOnlyInline}}
  - : Gibt ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) zurück, mit dem Script auf die [benutzerdefinierten Datenattribute](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes) (`data-*`) des Elements zugreifen und diese ändern kann.
- [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir)
  - : Ein String, der das `dir` Globale-Attribut widerspiegelt und die Ausrichtung des Elements repräsentiert. Mögliche Werte sind `"ltr"`, `"rtl"` und `"auto"`.
- [`HTMLElement.draggable`](/de/docs/Web/API/HTMLElement/draggable)
  - : Ein boolescher Wert, der angibt, ob das Element ziehbar ist.
- [`HTMLElement.editContext`](/de/docs/Web/API/HTMLElement/editContext) {{experimental_inline}}
  - : Gibt den [`EditContext`](/de/docs/Web/API/EditContext), der mit dem Element verknüpft ist, zurück oder `null`, wenn keiner vorhanden ist.
- [`HTMLElement.enterKeyHint`](/de/docs/Web/API/HTMLElement/enterKeyHint)
  - : Ein String, der definiert, welche Aktion für die Enter-Taste auf virtuellen Tastaturen dargestellt werden soll.
- [`HTMLElement.hidden`](/de/docs/Web/API/HTMLElement/hidden)
  - : Ein String oder boolescher Wert, der dem Wert des [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)-Attributs des Elements entspricht.
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert)
  - : Ein boolescher Wert, der angibt, ob der User-Agent so handeln muss, als ob der gegebene Knoten für Benutzerinteraktionen, Seitentextsuchen ("Text in Seite finden") und Textauswahl nicht vorhanden ist.
- [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText)
  - : Repräsentiert den gerenderten Textinhalt eines Knotens und seiner Nachkommen.
    Als Getter entspricht er etwa dem Text, den der Benutzer erhalten würde, wenn er den Inhalt des Elements mit dem Cursor markiert und in die Zwischenablage kopiert.
    Als Setter ersetzt er den Inhalt innerhalb des ausgewählten Elements und konvertiert Zeilenumbrüche in {{HTMLElement("br")}}-Elemente.
- [`HTMLElement.inputMode`](/de/docs/Web/API/HTMLElement/inputMode)
  - : Ein String-Wert, der dem Wert des [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode)-Attributs des Elements entspricht.
- [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der Inhalt des Elements bearbeitbar ist.
- [`HTMLElement.lang`](/de/docs/Web/API/HTMLElement/lang)
  - : Ein String, der die Sprache der Attribute, des Textes und der Inhalte eines Elements repräsentiert.
- [`HTMLElement.nonce`](/de/docs/Web/API/HTMLElement/nonce)
  - : Gibt die einmalige kryptographische Nummer zurück, die von der Content Security Policy verwendet wird, um zu bestimmen, ob ein bestimmter Abruf fortgesetzt werden darf.
- [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight) {{ReadOnlyInline}}
  - : Gibt eine `double`-Zahl zurück, die die Höhe eines Elements relativ zum Layout angibt.
- [`HTMLElement.offsetLeft`](/de/docs/Web/API/HTMLElement/offsetLeft) {{ReadOnlyInline}}
  - : Gibt eine `double`-Zahl zurück, die die Distanz von der linken Grenze dieses Elements zur linken Grenze seines `offsetParent` angibt.
- [`HTMLElement.offsetParent`](/de/docs/Web/API/HTMLElement/offsetParent) {{ReadOnlyInline}}
  - : Ein [`Element`](/de/docs/Web/API/Element), das das Element ist, aus dem alle Versatzberechnungen aktuell durchgeführt werden.
- [`HTMLElement.offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop) {{ReadOnlyInline}}
  - : Gibt eine `double`-Zahl zurück, die die Distanz von der oberen Grenze dieses Elements zur oberen Grenze seines `offsetParent` angibt.
- [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth) {{ReadOnlyInline}}
  - : Gibt eine `double`-Zahl zurück, die die Breite eines Elements relativ zum Layout angibt.
- [`HTMLElement.outerText`](/de/docs/Web/API/HTMLElement/outerText)
  - : Repräsentiert den gerenderten Textinhalt eines Knotens und seiner Nachkommen.
    Als Getter entspricht es [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) (der gerenderte Textinhalt eines Elements und seiner Nachkommen wird dargestellt).
    Als Setter ersetzt es den ausgewählten Knoten und seinen Inhalt durch den gegebenen Wert und konvertiert Zeilenumbrüche in {{HTMLElement("br")}}-Elemente.
- [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)
  - : Holt und setzt den Popover-Zustand eines Elements über JavaScript (`"auto"` oder `"manual"`) und kann für die Feature-Erkennung verwendet werden. Spiegelt den Wert des [`popover`](/de/docs/Web/HTML/Global_attributes/popover)-Globalen-HTML-Attributs wider.
- [`HTMLElement.spellcheck`](/de/docs/Web/API/HTMLElement/spellcheck)
  - : Ein boolescher Wert, der den [Rechtschreibprüfung](/de/docs/Web/HTML/Global_attributes/spellcheck)-Hinweis steuert. Er ist bei allen HTML-Elementen verfügbar, beeinflusst jedoch nicht alle.
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
  - : Eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration), die die Deklarationen des [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributs des Elements repräsentiert.
- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex)
  - : Ein `long`, der die Position des Elements in der Tabulatorreihenfolge repräsentiert.
- [`HTMLElement.title`](/de/docs/Web/API/HTMLElement/title)
  - : Ein String, der den Text enthält, der in einer Popup-Box angezeigt wird, wenn sich der Mauszeiger über dem Element befindet.
- [`HTMLElement.translate`](/de/docs/Web/API/HTMLElement/translate)
  - : Ein boolescher Wert, der die Übersetzung angibt.
- [`HTMLElement.virtualKeyboardPolicy`](/de/docs/Web/API/HTMLElement/virtualKeyboardPolicy) {{Experimental_Inline}}
  - : Ein String, der das Verhalten der virtuellen On-Screen-Tastatur für Geräte wie Tablets, Mobiltelefone oder andere Geräte angibt, bei denen möglicherweise keine Hardware-Tastatur verfügbar ist, falls der Inhalt des Elements editierbar ist (z. B. ein {{htmlelement("input")}}- oder {{htmlelement("textarea")}}-Element oder ein Element mit gesetztem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut).
- [`HTMLElement.writingSuggestions`](/de/docs/Web/API/HTMLElement/writingSuggestions)
  - : Ein String, der angibt, ob durch den Browser bereitgestellte Schreibvorschläge im Bereich des Elements aktiviert werden sollen oder nicht.

## Instanzmethoden

_Erbt außerdem Methoden von seinem Elternteil, [`Element`](/de/docs/Web/API/Element)._

- [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals)
  - : Gibt ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt zurück und ermöglicht es einem benutzerdefinierten Element, an HTML-Formularen teilzunehmen.
- [`HTMLElement.blur()`](/de/docs/Web/API/HTMLElement/blur)
  - : Entfernt den Tastaturfokus vom aktuell fokussierten Element.
- [`HTMLElement.click()`](/de/docs/Web/API/HTMLElement/click)
  - : Sendet ein Mausevent zum Klicken an das Element.
- [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus)
  - : Macht das Element zum aktuellen Tastaturfokus.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover)
  - : Versteckt ein Popover-Element, indem es aus der {{Glossary("top_layer", "obersten Schicht")}} entfernt und mit `display: none` versehen wird.
- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)
  - : Zeigt ein Popover-Element an, indem es zur {{Glossary("top_layer", "obersten Schicht")}} hinzugefügt und `display: none;` aus seinen Stilen entfernt wird.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)
  - : Schaltet ein Popover-Element zwischen den Zuständen "ausgeblendet" und "angezeigt" um.

## Ereignisse

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) überwacht werden oder indem ein Event-Listener auf die `oneventname`-Eigenschaft dieses Interfaces zugewiesen wird.

_Erbt außerdem Ereignisse von seinem Elternteil, [`Element`](/de/docs/Web/API/Element)._

- [`cancel`](/de/docs/Web/API/HTMLElement/cancel_event)
  - : Wird für {{HTMLElement("input")}}- und {{HTMLElement("dialog")}}-Elemente ausgelöst, wenn der Benutzer den aktuell geöffneten Dialog mit der <kbd>Esc</kbd>-Taste schließt.
- [`change`](/de/docs/Web/API/HTMLElement/change_event)
  - : Wird ausgelöst, wenn der `value` eines {{HTMLElement("input")}}-, {{HTMLElement("select")}}- oder {{HTMLElement("textarea")}}-Elements von einem Benutzer geändert und bestätigt wurde. Im Gegensatz zum [`input`](/de/docs/Web/API/Element/input_event)-Ereignis wird das `change`-Ereignis nicht zwingend für jede Änderung eines Werts eines Elements ausgelöst.
- [`error`](/de/docs/Web/API/HTMLElement/error_event)
  - : Wird ausgelöst, wenn eine Ressource nicht geladen werden konnte oder nicht verwendet werden kann.
- [`load`](/de/docs/Web/API/HTMLElement/load_event)
  - : Wird für Elemente ausgelöst, die eine Ressource enthalten, sobald diese Ressource erfolgreich geladen wurde.

### Zwischenablage-Ereignisse

- [`copy`](/de/docs/Web/API/HTMLElement/copy_event)
  - : Wird ausgelöst, wenn der Benutzer eine Kopieraktion über die Benutzeroberfläche des Browsers initiiert.
- [`cut`](/de/docs/Web/API/HTMLElement/cut_event)
  - : Wird ausgelöst, wenn der Benutzer eine Ausschneiden-Aktion über die Benutzeroberfläche des Browsers initiiert.
- [`paste`](/de/docs/Web/API/HTMLElement/paste_event)
  - : Wird ausgelöst, wenn der Benutzer eine Einfügen-Aktion über die Benutzeroberfläche des Browsers initiiert.

### Drag & Drop-Ereignisse

- [`drag`](/de/docs/Web/API/HTMLElement/drag_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder Text ausgewählt und gezogen wird.
- [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)
  - : Dieses Ereignis wird ausgelöst, wenn eine Ziehoperation durch Loslassen der Maustaste oder Betätigen der Escape-Taste beendet wird.
- [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl in ein gültiges Drop-Ziel eintritt.
- [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Drop-Ziel verlässt.
- [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
  - : Dieses Ereignis wird kontinuierlich ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird und sich der Mauszeiger über einem gültigen Drop-Ziel befindet (etwa alle 50 ms, wenn sich die Maus nicht bewegt, ansonsten viel schneller, etwa zwischen 5 ms (langsame Bewegung) und 1 ms (schnelle Bewegung)). Dieses Auslöseverhalten unterscheidet sich vom [`mouseover`](/de/docs/Web/API/Element/mouseover_event)-Ereignis.
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
  - : Dieses Ereignis wird ausgelöst, wenn der Benutzer beginnt, ein Element oder eine Textauswahl zu ziehen.
- [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl auf ein gültiges Drop-Ziel abgelegt wird.

### Toggle-Ereignisse

- [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)
  - : Wird ausgelöst, wenn das Element ein [Popover](/de/docs/Web/API/Popover_API) oder {{htmlelement("dialog")}} ist, bevor es ausgeblendet oder angezeigt wird.
- [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)
  - : Wird ausgelöst, wenn das Element ein [Popover](/de/docs/Web/API/Popover_API), {{htmlelement("dialog")}} oder {{htmlelement("details")}} ist, kurz nachdem es ausgeblendet oder angezeigt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element)
