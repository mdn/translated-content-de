---
title: HTMLElement
slug: Web/API/HTMLElement
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("HTML DOM")}}

Das **`HTMLElement`**-Interface repräsentiert jedes [HTML](/de/docs/Web/HTML)-Element. Einige Elemente implementieren dieses Interface direkt, während andere es über ein davon ererbtes Interface implementieren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil, [`Element`](/de/docs/Web/API/Element)._

- [`HTMLElement.accessKey`](/de/docs/Web/API/HTMLElement/accessKey)
  - : Ein String, der den Zugriffsschlüssel repräsentiert, der dem Element zugewiesen ist.
- [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den dem Element zugeordneten Zugriffsschlüssel enthält.
- [`HTMLElement.anchorElement`](/de/docs/Web/API/HTMLElement/anchorElement) {{ReadOnlyInline}}&nbsp;{{non-standard_inline}} {{experimental_inline}}
  - : Gibt eine Referenz auf das Ankerelement des Elements zurück oder `null`, wenn es keines hat.
- [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap) {{ReadOnlyInline}}
  - : Ein [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap), das die Deklarationen des [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs des Elements repräsentiert.
- [`HTMLElement.autocapitalize`](/de/docs/Web/API/HTMLElement/autocapitalize)
  - : Ein String, der das Verhalten der Großschreibung des Elements für Benutzereingaben repräsentiert. Gültige Werte sind: `none`, `off`, `on`, `characters`, `words`, `sentences`.
- [`HTMLElement.autofocus`](/de/docs/Web/API/HTMLElement/autofocus)
  - : Ein boolescher Wert, der das [`autofocus`](/de/docs/Web/HTML/Reference/Elements/select#autofocus) HTML-Globalattribut widerspiegelt und anzeigt, ob das Steuerelement fokussiert werden soll, wenn die Seite geladen wird oder wenn ein Dialog oder Popover angezeigt wird, falls in einem Element innerhalb von {{htmlelement("dialog")}}-Elementen oder Elementen, deren Popover-Attribut gesetzt ist, angegeben.
- [`HTMLElement.autocorrect`](/de/docs/Web/API/HTMLElement/autocorrect)
  - : Ein Boolescher, der angibt, ob die von einem Benutzer eingegebenen Texte automatisch korrigiert werden sollen oder nicht. Dies spiegelt das [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) HTML-Globalattribut wider.
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
  - : Ein String, wobei ein Wert von `true` bedeutet, dass das Element editierbar ist, und ein Wert von `false`, dass es nicht editierbar ist.
- [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) {{ReadOnlyInline}}
  - : Gibt ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) zurück, mit dem Skripte die [benutzerdefinierten Datenattribute](/de/docs/Web/HTML/How_to/Use_data_attributes) (`data-*`) des Elements lesen und schreiben können.
- [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir)
  - : Ein String, der das `dir`-Globalattribut widerspiegelt und die Richtung des Elements repräsentiert. Mögliche Werte sind `"ltr"`, `"rtl"` und `"auto"`.
- [`HTMLElement.draggable`](/de/docs/Web/API/HTMLElement/draggable)
  - : Ein boolescher Wert, der anzeigt, ob das Element gezogen werden kann.
- [`HTMLElement.editContext`](/de/docs/Web/API/HTMLElement/editContext) {{experimental_inline}}
  - : Gibt den [`EditContext`](/de/docs/Web/API/EditContext) zurück, der mit dem Element verknüpft ist, oder `null`, wenn es keinen gibt.
- [`HTMLElement.enterKeyHint`](/de/docs/Web/API/HTMLElement/enterKeyHint)
  - : Ein String, der das Aktionslabel (oder Symbol) definiert, das für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll.
- [`HTMLElement.hidden`](/de/docs/Web/API/HTMLElement/hidden)
  - : Ein String oder boolescher Wert, der den Wert des [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)-Attributs des Elements widerspiegelt.
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert)
  - : Ein boolescher Wert, der angibt, ob der Benutzeragent das dargestellte Element in Bezug auf Benutzerinteraktionen, In-Page-Textsuchanfragen ("Finde auf Seite") und Textauswahl ignorieren soll.
- [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText)
  - : Repräsentiert den angezeigten Textinhalt eines Knotens und seiner Nachkommen. Als Getter nähert es den Text an, den der Benutzer erhalten würde, wenn er die Inhalte des Elements mit dem Cursor hervorgehoben und dann in die Zwischenablage kopiert hätte. Als Setter ersetzt er den Inhalt im ausgewählten Element, indem er alle Zeilenumbrüche in {{HTMLElement("br")}}-Elemente umwandelt.
- [`HTMLElement.inputMode`](/de/docs/Web/API/HTMLElement/inputMode)
  - : Ein Stringwert, der den Wert des [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode)-Attributs des Elements widerspiegelt.
- [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der Inhalt des Elements bearbeitet werden kann.
- [`HTMLElement.lang`](/de/docs/Web/API/HTMLElement/lang)
  - : Ein String, der die Sprache der Attribute, Texte und Inhalte eines Elements repräsentiert.
- [`HTMLElement.nonce`](/de/docs/Web/API/HTMLElement/nonce)
  - : Gibt die kryptografische Zahl zurück, die einmal verwendet wird und mit der Content Security Policy bestimmt, ob ein bestimmter Abruf fortgesetzt werden darf.
- [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Höhe eines Elements im Verhältnis zum Layout enthält.
- [`HTMLElement.offsetLeft`](/de/docs/Web/API/HTMLElement/offsetLeft) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, die Entfernung von der linken Begrenzung dieses Elements zur linken Begrenzung seines `offsetParent`.
- [`HTMLElement.offsetParent`](/de/docs/Web/API/HTMLElement/offsetParent) {{ReadOnlyInline}}
  - : Ein [`Element`](/de/docs/Web/API/Element), das das Element ist, von dem alle Offset-Berechnungen derzeit berechnet werden.
- [`HTMLElement.offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, die Entfernung von der oberen Begrenzung dieses Elements zur oberen Begrenzung seines `offsetParent`.
- [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Breite eines Elements im Verhältnis zum Layout enthält.
- [`HTMLElement.outerText`](/de/docs/Web/API/HTMLElement/outerText)
  - : Repräsentiert den angezeigten Textinhalt eines Knotens und seiner Nachkommen. Als Getter ist es dasselbe wie [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) (es repräsentiert den angezeigten Textinhalt eines Elements und seiner Nachkommen). Als Setter ersetzt es den ausgewählten Knoten und seinen Inhalt mit dem angegebenen Wert, wobei alle Zeilenumbrüche in {{HTMLElement("br")}}-Elemente umgewandelt werden.
- [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)
  - : Ruft den Popover-Zustand eines Elements mit JavaScript ab und setzt ihn (`"auto"`, `"hint"`, oder `"manual"`), und kann zur Funktionsdetektion verwendet werden. Spiegelt den Wert des globalen HTML-Attributs [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) wider.
- [`HTMLElement.spellcheck`](/de/docs/Web/API/HTMLElement/spellcheck)
  - : Ein boolescher Wert, der den Hinweis zum [Rechtschreibprüfung](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) steuert. Es ist auf allen HTML-Elementen verfügbar, wirkt sich jedoch nicht auf alle aus.
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
  - : Eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration), die die Deklarationen des [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs des Elements repräsentiert.
- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex)
  - : Ein `long`, der die Position des Elements in der Tabreihenfolge darstellt.
- [`HTMLElement.title`](/de/docs/Web/API/HTMLElement/title)
  - : Ein String, der den Text enthält, der in einem Popup-Fenster angezeigt wird, wenn die Maus über das Element bewegt wird.
- [`HTMLElement.translate`](/de/docs/Web/API/HTMLElement/translate)
  - : Ein boolescher Wert, der die Übersetzung darstellt.
- [`HTMLElement.virtualKeyboardPolicy`](/de/docs/Web/API/HTMLElement/virtualKeyboardPolicy) {{Experimental_Inline}}
  - : Ein String, der das Verhalten der virtuellen Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten anzeigt, bei denen möglicherweise keine Hardwaretastatur verfügbar ist, wenn der Inhalt des Elements bearbeitbar ist (zum Beispiel ist es ein {{htmlelement("input")}} oder {{htmlelement("textarea")}}-Element oder ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut).
- [`HTMLElement.writingSuggestions`](/de/docs/Web/API/HTMLElement/writingSuggestions)
  - : Ein String, der angibt, ob die vom Browser bereitgestellten Schreibvorschläge im Geltungsbereich des Elements aktiviert werden sollen oder nicht.

## Instanzmethoden

_Erbt auch Methoden von seinem Elternteil, [`Element`](/de/docs/Web/API/Element)._

- [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals)
  - : Gibt ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt zurück und ermöglicht es einem benutzerdefinierten Element, an HTML-Formularen teilzunehmen.
- [`HTMLElement.blur()`](/de/docs/Web/API/HTMLElement/blur)
  - : Entfernt die Tastaturfokussierung von dem derzeit fokussierten Element.
- [`HTMLElement.click()`](/de/docs/Web/API/HTMLElement/click)
  - : Sendet ein Mausklickereignis an das Element.
- [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus)
  - : Macht das Element zum aktuellen Tastaturfokus.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover)
  - : Blendet ein Popover-Element aus, indem es aus der {{Glossary("top_layer", "Top-Schicht")}} entfernt und mit `display: none` gestylt wird.
- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)
  - : Zeigt ein Popover-Element an, indem es zur {{Glossary("top_layer", "Top-Schicht")}} hinzugefügt und `display: none;` aus seinen Stilen entfernt wird.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)
  - : Schaltet ein Popover-Element zwischen den versteckten und angezeigten Zuständen um.

## Ereignisse

Hören Sie auf diese Ereignisse, indem Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden oder einen Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

_Erbt auch Ereignisse von seinem Elternteil, [`Element`](/de/docs/Web/API/Element)._

- [`change`](/de/docs/Web/API/HTMLElement/change_event)
  - : Wird ausgelöst, wenn der `value` eines {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}-Elements geändert und vom Benutzer bestätigt wurde. Im Gegensatz zum [`input`](/de/docs/Web/API/Element/input_event)-Ereignis wird das `change`-Ereignis nicht unbedingt bei jeder Änderung des `value`-Werts eines Elements ausgelöst.
- [`command`](/de/docs/Web/API/HTMLElement/command_event)
  - : Wird auf einem Element ausgelöst, das über einen [`button`](/de/docs/Web/API/HTMLButtonElement) mit gültigen [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement) und [`command`](/de/docs/Web/API/HTMLButtonElement/command)-Werten gesteuert wird, wann immer der Button interagiert wird (z.B. wenn er geklickt wird).
- [`error`](/de/docs/Web/API/HTMLElement/error_event)
  - : Wird ausgelöst, wenn ein Ressource nicht geladen werden konnte oder nicht verwendet werden kann.
- [`load`](/de/docs/Web/API/HTMLElement/load_event)
  - : Wird ausgelöst, wenn ein Element, das eine Ressource enthält, erfolgreich geladen wurde.

### Drag & Drop-Ereignisse

- [`drag`](/de/docs/Web/API/HTMLElement/drag_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird.
- [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Ziehvorgang beendet wird (durch Loslassen einer Maustaste oder Drücken der Escape-Taste).
- [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziel erreicht.
- [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziel verlässt.
- [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
  - : Dieses Ereignis wird kontinuierlich ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird und der Mauszeiger sich über einem gültigen Ziel befindet (alle 50 ms, wenn die Maus sich nicht bewegt, ansonsten viel schneller, zwischen ca. 5 ms (langsame Bewegung) und 1 ms (schnelle Bewegung)). Dieses Auslöseverhalten unterscheidet sich von [`mouseover`](/de/docs/Web/API/Element/mouseover_event).
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
  - : Dieses Ereignis wird ausgelöst, wenn der Benutzer das Ziehen eines Elements oder einer Textauswahl beginnt.
- [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl auf einem gültigen Ziel abgelegt wird.

### Interesseauslöser-Ereignisse

- [`interest`](/de/docs/Web/API/HTMLElement/interest_event) {{experimental_inline}} {{non-standard_inline}}
  - : Wird auf dem Ziel-Element eines [Interesseauslösers](/de/docs/Web/API/Popover_API/Using_interest_invokers) ausgelöst, wenn Interesse gezeigt wird, um das Ausführen von Code als Reaktion zu ermöglichen.
- [`loseinterest`](/de/docs/Web/API/HTMLElement/loseinterest_event) {{experimental_inline}} {{non-standard_inline}}
  - : Wird auf dem Ziel-Element eines Interesseauslösers ausgelöst, wenn Interesse verloren geht, um das Ausführen von Code als Reaktion zu ermöglichen.

### Umschalt-Ereignisse

- [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)
  - : Wird ausgelöst, wenn das Element ein [Popover](/de/docs/Web/API/Popover_API) oder {{htmlelement("dialog")}} ist, bevor es versteckt oder angezeigt wird.
- [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)
  - : Wird ausgelöst, wenn das Element ein [Popover](/de/docs/Web/API/Popover_API), {{htmlelement("dialog")}} oder {{htmlelement("details")}}-Element ist, gerade nachdem es versteckt oder angezeigt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element)
