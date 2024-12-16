---
title: HTMLElement
slug: Web/API/HTMLElement
l10n:
  sourceCommit: 8d5d18805ad96e1c56d72de5c26de60e86dfa817
---

{{APIRef("HTML DOM")}}

Das **`HTMLElement`**-Interface repräsentiert jedes beliebige [HTML](/de/docs/Web/HTML)-Element. Einige Elemente implementieren dieses Interface direkt, während andere es über ein Interface implementieren, das davon erbt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface, [`Element`](/de/docs/Web/API/Element)._

- [`HTMLElement.accessKey`](/de/docs/Web/API/HTMLElement/accessKey)
  - : Ein String, der den dem Element zugewiesenen Zugangsschlüssel darstellt.
- [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den dem Element zugewiesenen Zugangsschlüssel enthält.
- [`HTMLElement.anchorElement`](/de/docs/Web/API/HTMLElement/anchorElement) {{ReadOnlyInline}}&nbsp;{{non-standard_inline}} {{experimental_inline}}
  - : Gibt eine Referenz auf das Ankerelement des Elements zurück oder `null`, wenn es keines hat.
- [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap) {{ReadOnlyInline}}
  - : Ein [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap), das die Deklarationen der [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributs des Elements darstellt.
- [`HTMLElement.autocapitalize`](/de/docs/Web/API/HTMLElement/autocapitalize)
  - : Ein String, der das Verhalten der Großschreibung des Elements für Benutzereingaben darstellt. Gültige Werte sind: `none`, `off`, `on`, `characters`, `words`, `sentences`.
- [`HTMLElement.autofocus`](/de/docs/Web/API/HTMLElement/autofocus)
  - : Ein boolescher Wert, der das globale HTML-Attribut [`autofocus`](/de/docs/Web/HTML/Element/select#autofocus) widerspiegelt, das angibt, ob das Steuerungselement beim Laden der Seite oder wenn der Dialog oder das Popover angezeigt werden, fokussiert werden soll, sofern im Inneren eines {{htmlelement("dialog")}}-Elements oder eines Elements mit gesetztem Popover-Attribut angegeben.
- [`HTMLElement.autocorrect`](/de/docs/Web/API/HTMLElement/autocorrect) {{experimental_inline}}
  - : Ein boolescher Wert, der anzeigt, ob der von einem Benutzer eingegebene Text automatisch korrigiert werden soll oder nicht. Dies spiegelt das globale HTML-Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) wider.
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
  - : Ein String, wobei ein Wert von `true` bedeutet, dass das Element bearbeitbar ist und ein Wert von `false` bedeutet, dass es nicht bearbeitbar ist.
- [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) {{ReadOnlyInline}}
  - : Gibt ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) zurück, mit dem Skripte die [benutzerdefinierten Datenattribute](/de/docs/Learn/HTML/Howto/Use_data_attributes) (`data-*`) des Elements lesen und schreiben können.
- [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir)
  - : Ein String, der das globale Attribut `dir` widerspiegelt und die Richtung des Texts im Element angibt. Mögliche Werte sind `"ltr"` (von links nach rechts), `"rtl"` (von rechts nach links) und `"auto"`.
- [`HTMLElement.draggable`](/de/docs/Web/API/HTMLElement/draggable)
  - : Ein boolescher Wert, der angibt, ob das Element gezogen werden kann.
- [`HTMLElement.editContext`](/de/docs/Web/API/HTMLElement/editContext) {{experimental_inline}}
  - : Gibt den mit dem Element assoziierten [`EditContext`](/de/docs/Web/API/EditContext) zurück oder `null`, wenn keiner vorhanden ist.
- [`HTMLElement.enterKeyHint`](/de/docs/Web/API/HTMLElement/enterKeyHint)
  - : Ein String, der festlegt, welches Aktionslabel (oder Symbol) für die Enter-Taste auf virtuellen Tastaturen angezeigt werden soll.
- [`HTMLElement.hidden`](/de/docs/Web/API/HTMLElement/hidden)
  - : Ein String oder ein boolescher Wert, der den Wert des [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)-Attributs des Elements widerspiegelt.
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert)
  - : Ein boolescher Wert, der anzeigt, ob der Benutzeragent so handeln muss, als ob der gegebene Knoten für Benutzerinteraktionsereignisse, Textsuchen innerhalb der Seite ("Find in Page") und Textauswahl nicht vorhanden wäre.
- [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText)
  - : Repräsentiert den gerenderten Textinhalt eines Knotens und seiner Nachkommen.
    Als Getter nähert es den Text an, den der Benutzer erhalten würde, wenn er den Inhalt des Elements mit dem Cursor markiert und dann in die Zwischenablage kopiert.
    Als Setter ersetzt es den Inhalt innerhalb des ausgewählten Elements, wobei alle Zeilenumbrüche in {{HTMLElement("br")}}-Elemente umgewandelt werden.
- [`HTMLElement.inputMode`](/de/docs/Web/API/HTMLElement/inputMode)
  - : Ein String-Wert, der den Wert des [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode)-Attributs des Elements widerspiegelt.
- [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der Inhalt des Elements bearbeitet werden kann oder nicht.
- [`HTMLElement.lang`](/de/docs/Web/API/HTMLElement/lang)
  - : Ein String, der die Sprache der Attribute, des Texts und des Inhalts eines Elements repräsentiert.
- [`HTMLElement.nonce`](/de/docs/Web/API/HTMLElement/nonce)
  - : Gibt die kryptografische Zahl zurück, die einmal verwendet wird und die von der Content Security Policy verwendet wird, um zu bestimmen, ob ein bestimmter Abruf durchgeführt werden darf.
- [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Höhe eines Elements im Verhältnis zum Layout enthält.
- [`HTMLElement.offsetLeft`](/de/docs/Web/API/HTMLElement/offsetLeft) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Entfernung von der linken Begrenzung dieses Elements bis zur linken Begrenzung seines `offsetParent` angibt.
- [`HTMLElement.offsetParent`](/de/docs/Web/API/HTMLElement/offsetParent) {{ReadOnlyInline}}
  - : Ein [`Element`](/de/docs/Web/API/Element), das das Element ist, von dem alle Offset-Berechnungen derzeit berechnet werden.
- [`HTMLElement.offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Entfernung von der oberen Begrenzung dieses Elements bis zur oberen Begrenzung seines `offsetParent` angibt.
- [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Breite eines Elements im Verhältnis zum Layout enthält.
- [`HTMLElement.outerText`](/de/docs/Web/API/HTMLElement/outerText)
  - : Repräsentiert den gerenderten Textinhalt eines Knotens und seiner Nachkommen.
    Als Getter ist es dasselbe wie [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) (es repräsentiert den gerenderten Textinhalt eines Elements und seiner Nachkommen).
    Als Setter ersetzt es den ausgewählten Knoten und seinen Inhalt mit dem angegebenen Wert, wobei alle Zeilenumbrüche in {{HTMLElement("br")}}-Elemente umgewandelt werden.
- [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)
  - : Ruft den Popover-Zustand eines Elements ab und setzt ihn über JavaScript (`"auto"` oder `"manual"`) und kann zur Feature-Erkennung verwendet werden. Reflektiert den Wert des globalen HTML-Attributs [`popover`](/de/docs/Web/HTML/Global_attributes/popover).
- [`HTMLElement.spellcheck`](/de/docs/Web/API/HTMLElement/spellcheck)
  - : Ein boolescher Wert, der den [Rechtschreibprüfung](/de/docs/Web/HTML/Global_attributes/spellcheck)-Hinweis steuert. Er ist bei allen HTML-Elementen verfügbar, beeinflusst jedoch nicht alle.
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
  - : Ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration), das die Deklarationen des [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributs des Elements darstellt.
- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex)
  - : Ein `long`, der die Position des Elements in der Tab-Reihenfolge darstellt.
- [`HTMLElement.title`](/de/docs/Web/API/HTMLElement/title)
  - : Ein String, der den Text enthält, der in einem Popup-Fenster angezeigt wird, wenn die Maus über dem Element ist.
- [`HTMLElement.translate`](/de/docs/Web/API/HTMLElement/translate)
  - : Ein boolescher Wert, der die Übersetzung darstellt.
- [`HTMLElement.virtualKeyboardPolicy`](/de/docs/Web/API/HTMLElement/virtualKeyboardPolicy) {{Experimental_Inline}}
  - : Ein String, der das Verhalten der virtuellen On-Screen-Tastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten anzeigt, bei denen möglicherweise keine Hardware-Tastatur verfügbar ist, wenn der Inhalt des Elements bearbeitbar ist (zum Beispiel ein {{htmlelement("input")}}- oder {{htmlelement("textarea")}}-Element oder ein Element mit gesetztem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut).
- [`HTMLElement.writingSuggestions`](/de/docs/Web/API/HTMLElement/writingSuggestions)
  - : Ein String, der angibt, ob die vom Browser bereitgestellten Schreibvorschläge im Bereich des Elements aktiviert werden sollen oder nicht.

## Instanz-Methoden

_Erbt auch Methoden von seinem Eltern-Interface, [`Element`](/de/docs/Web/API/Element)._

- [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals)
  - : Gibt ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt zurück und ermöglicht es einem benutzerdefinierten Element, an HTML-Formularen teilzunehmen.
- [`HTMLElement.blur()`](/de/docs/Web/API/HTMLElement/blur)
  - : Entfernt den Tastaturfokus vom aktuell fokussierten Element.
- [`HTMLElement.click()`](/de/docs/Web/API/HTMLElement/click)
  - : Sendet ein Mausklick-Ereignis an das Element.
- [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus)
  - : Macht das Element zum aktuellen Tastaturfokus.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover)
  - : Verbirgt ein Popover-Element, indem es aus der {{Glossary("top_layer", "obersten Ebene")}} entfernt und mit `display: none` gestylt wird.
- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)
  - : Zeigt ein Popover-Element, indem es zur {{Glossary("top_layer", "obersten Ebene")}} hinzugefügt und `display: none;` aus seinen Stilen entfernt wird.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)
  - : Schaltet ein Popover-Element zwischen den versteckten und sichtbaren Zuständen um.

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieses Interfaces.

_Erbt auch Ereignisse von seinem Eltern-Interface, [`Element`](/de/docs/Web/API/Element)._

- [`cancel`](/de/docs/Web/API/HTMLElement/cancel_event)
  - : Wird für {{HTMLElement("input")}}- und {{HTMLElement("dialog")}}-Elemente ausgelöst, wenn der Benutzer den aktuell geöffneten Dialog durch Drücken der <kbd>Esc</kbd>-Taste schließt.
- [`change`](/de/docs/Web/API/HTMLElement/change_event)
  - : Wird ausgelöst, wenn der `value` eines {{HTMLElement("input")}}, {{HTMLElement("select")}}- oder {{HTMLElement("textarea")}}-Elements geändert und vom Benutzer bestätigt wurde. Im Gegensatz zum [`input`](/de/docs/Web/API/Element/input_event)-Ereignis wird das `change`-Ereignis nicht unbedingt für jede Änderung des `value` eines Elements ausgelöst.
- [`error`](/de/docs/Web/API/HTMLElement/error_event)
  - : Wird ausgelöst, wenn eine Ressource nicht geladen werden konnte oder nicht verwendet werden kann.
- [`load`](/de/docs/Web/API/HTMLElement/load_event)
  - : Wird für Elemente mit einer Ressource ausgelöst, wenn die Ressource erfolgreich geladen wurde.

### Zwischenablage-Ereignisse

- [`copy`](/de/docs/Web/API/HTMLElement/copy_event)
  - : Wird ausgelöst, wenn der Benutzer eine Kopieraktion über die Benutzeroberfläche des Browsers initiiert.
- [`cut`](/de/docs/Web/API/HTMLElement/cut_event)
  - : Wird ausgelöst, wenn der Benutzer eine Ausschneideaktion über die Benutzeroberfläche des Browsers initiiert.
- [`paste`](/de/docs/Web/API/HTMLElement/paste_event)
  - : Wird ausgelöst, wenn der Benutzer eine Einfügeaktion über die Benutzeroberfläche des Browsers initiiert.

### Drag & Drop-Ereignisse

- [`drag`](/de/docs/Web/API/HTMLElement/drag_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird.
- [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Ziehvorgang beendet wird (durch Loslassen einer Maustaste oder Drücken der Escape-Taste).
- [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziel für einen Drop-Bereich betritt.
- [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl einen gültigen Drop-Bereich verlässt.
- [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
  - : Dieses Ereignis wird kontinuierlich ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird und der Mauszeiger über einem gültigen Drop-Bereich schwebt (alle 50 ms, WENN die Maus nicht bewegt wird, SONST wesentlich schneller zwischen ca. 5 ms (langsame Bewegung) und 1 ms (schnelle Bewegung). Dieses Auslöseverhalten unterscheidet sich von [`mouseover`](/de/docs/Web/API/Element/mouseover_event)).
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
  - : Dieses Ereignis wird ausgelöst, wenn der Benutzer beginnt, ein Element oder eine Textauswahl zu ziehen.
- [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl auf einem gültigen Drop-Bereich abgelegt wird.

### Umschalt-Ereignisse

- [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)
  - : Wird ausgelöst, wenn das Element ein [Popover](/de/docs/Web/API/Popover_API) oder {{htmlelement("dialog")}} ist, bevor es versteckt oder angezeigt wird.
- [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)
  - : Wird ausgelöst, wenn das Element ein [Popover](/de/docs/Web/API/Popover_API), {{htmlelement("dialog")}} oder {{htmlelement("details")}}-Element ist, unmittelbar nachdem es versteckt oder angezeigt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element)
