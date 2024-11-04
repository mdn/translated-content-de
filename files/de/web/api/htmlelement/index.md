---
title: HTMLElement
slug: Web/API/HTMLElement
l10n:
  sourceCommit: 709d3a56661f895e5b0a67ff969e381d503ddd45
---

{{APIRef("HTML DOM")}}

Das **`HTMLElement`** Interface repräsentiert jedes [HTML](/de/docs/Web/HTML)-Element. Einige Elemente implementieren dieses Interface direkt, während andere es über ein vererbtes Interface implementieren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface, [`Element`](/de/docs/Web/API/Element)._

- [`HTMLElement.accessKey`](/de/docs/Web/API/HTMLElement/accessKey)
  - : Ein String, der den dem Element zugewiesenen Zugriffs-Schlüssel repräsentiert.
- [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den dem Element zugewiesenen Zugriffs-Schlüssel enthält.
- [`HTMLElement.anchorElement`](/de/docs/Web/API/HTMLElement/anchorElement) {{ReadOnlyInline}}&nbsp;{{non-standard_inline}} {{experimental_inline}}
  - : Gibt eine Referenz auf das Ankerelement des Elements zurück oder `null`, wenn es keines hat.
- [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap) {{ReadOnlyInline}}
  - : Eine [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap), die die Deklarationen des [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributes des Elements repräsentiert.
- [`HTMLElement.autocapitalize`](/de/docs/Web/API/HTMLElement/autocapitalize)
  - : Ein String, der das Großschreibverhalten des Elements für Benutzereingaben repräsentiert. Gültige Werte sind: `none`, `off`, `on`, `characters`, `words`, `sentences`.
- [`HTMLElement.autofocus`](/de/docs/Web/API/HTMLElement/autofocus)
  - : Ein boolescher Wert, der das globale HTML-Attribut [`autofocus`](/de/docs/Web/HTML/Element/select#autofocus) widerspiegelt und angibt, ob das Steuerelement beim Laden der Seite, oder wenn ein Dialog oder Popover angezeigt wird, fokussiert werden soll, falls es in einem `<dialog>`-Element oder Elementen, deren Popover-Attribut gesetzt ist, spezifiziert ist.
- [`HTMLElement.autocorrect`](/de/docs/Web/API/HTMLElement/autocorrect)
  - : Ein boolescher Wert, der angibt, ob Benutzereingaben automatisch korrigiert werden sollen.
    Dies spiegelt das globale HTML-Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) wider.
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
  - : Ein String, wobei `true` bedeutet, dass das Element bearbeitbar ist und `false`, dass es nicht bearbeitbar ist.
- [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) {{ReadOnlyInline}}
  - : Gibt eine [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) zurück, mit dem Skripte die [benutzerdefinierten Datenattribute](/de/docs/Learn/HTML/Howto/Use_data_attributes) (`data-*`) des Elements lesen und schreiben können.
- [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir)
  - : Ein String, der das globale Attribut `dir` widerspiegelt und die Richtungsabhängigkeit des Elements repräsentiert. Mögliche Werte sind `"ltr"`, `"rtl"` und `"auto"`.
- [`HTMLElement.draggable`](/de/docs/Web/API/HTMLElement/draggable)
  - : Ein boolescher Wert, der angibt, ob das Element gezogen werden kann.
- [`HTMLElement.editContext`](/de/docs/Web/API/HTMLElement/editContext) {{experimental_inline}}
  - : Gibt den dem Element zugeordneten [`EditContext`](/de/docs/Web/API/EditContext) oder `null` zurück, wenn keiner vorhanden ist.
- [`HTMLElement.enterKeyHint`](/de/docs/Web/API/HTMLElement/enterKeyHint)
  - : Ein String, der angibt, welches Aktionslabel (oder -symbol) für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll.
- [`HTMLElement.hidden`](/de/docs/Web/API/HTMLElement/hidden)
  - : Ein String oder boolescher Wert, der den Wert des [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)-Attributes des Elements widerspiegelt.
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert)
  - : Ein boolescher Wert, der angibt, ob der Benutzeragent das gegebene Knoten für die Zwecke von Benutzerinteraktionsereignissen, textinterner Seitensuche ("Suche in Seite") und Textauswahl als nicht vorhanden behandeln muss.
- [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText)
  - : Repräsentiert den gerenderten Textinhalt eines Knotens und seiner Nachkommen.
    Als Getter entspricht es dem Text, den der Benutzer erhalten würde, wenn er den Inhalt des Elements mit dem Cursor hervorhebt und dann in die Zwischenablage kopiert.
    Als Setter ersetzt es den Inhalt im ausgewählten Element und konvertiert Zeilenumbrüche in {{HTMLElement("br")}}-Elemente.
- [`HTMLElement.inputMode`](/de/docs/Web/API/HTMLElement/inputMode)
  - : Ein String-Wert, der den Wert des [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode)-Attributes des Elements widerspiegelt.
- [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der Inhalt des Elements bearbeitbar ist oder nicht.
- [`HTMLElement.lang`](/de/docs/Web/API/HTMLElement/lang)
  - : Ein String, der die Sprache der Attribute, des Textes und des Inhalts eines Elements repräsentiert.
- [`HTMLElement.nonce`](/de/docs/Web/API/HTMLElement/nonce)
  - : Gibt die kryptographische Zahl zurück, die einmal verwendet wird und von der Content Security Policy genutzt wird, um zu bestimmen, ob ein bestimmter Fetch weiterprozessiert werden kann.
- [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, welches die Höhe eines Elements relativ zum Layout angibt.
- [`HTMLElement.offsetLeft`](/de/docs/Web/API/HTMLElement/offsetLeft) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das den Abstand von der linken Kante dieses Elements zur linken Kante seines `offsetParent` angibt.
- [`HTMLElement.offsetParent`](/de/docs/Web/API/HTMLElement/offsetParent) {{ReadOnlyInline}}
  - : Ein [`Element`](/de/docs/Web/API/Element), das das Element ist, von dem alle aktuellen Offset-Berechnungen durchgeführt werden.
- [`HTMLElement.offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das den Abstand von der oberen Kante dieses Elements zur oberen Kante seines `offsetParent` angibt.
- [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, welches die Breite eines Elements relativ zum Layout angibt.
- [`HTMLElement.outerText`](/de/docs/Web/API/HTMLElement/outerText)
  - : Repräsentiert den gerenderten Textinhalt eines Knotens und seiner Nachkommen.
    Als Getter ist es dasselbe wie [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) (es repräsentiert den gerenderten Textinhalt eines Elements und seiner Nachkommen).
    Als Setter ersetzt es den ausgewählten Knoten und seinen Inhalt mit dem gegebenen Wert und konvertiert Zeilenumbrüche in {{HTMLElement("br")}}-Elemente.
- [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)
  - : Ruft den Popover-Zustand eines Elements über JavaScript ab und setzt ihn (`"auto"` oder `"manual"`), und kann zur Erkennung von Funktionen verwendet werden. Spiegelt den Wert des globalen HTML-Attributes [`popover`](/de/docs/Web/HTML/Global_attributes/popover) wider.
- [`HTMLElement.spellcheck`](/de/docs/Web/API/HTMLElement/spellcheck)
  - : Ein boolescher Wert, der den Hinweis zur [Rechtschreibprüfung](/de/docs/Web/HTML/Global_attributes/spellcheck) steuert. Es ist für alle HTML-Elemente verfügbar, obwohl es nicht alle beeinflusst.
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
  - : Eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration), die die Deklarationen des [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributes des Elements repräsentiert.
- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex)
  - : Ein `long`, der die Position des Elements in der Tabreihenfolge repräsentiert.
- [`HTMLElement.title`](/de/docs/Web/API/HTMLElement/title)
  - : Ein String, der den Text enthält, der in einem Popup-Fenster erscheint, wenn die Maus über dem Element ist.
- [`HTMLElement.translate`](/de/docs/Web/API/HTMLElement/translate)
  - : Ein boolescher Wert, der die Übersetzung repräsentiert.
- [`HTMLElement.virtualKeyboardPolicy`](/de/docs/Web/API/HTMLElement/virtualKeyboardPolicy) {{Experimental_Inline}}
  - : Ein String, der das Verhalten der virtuellen Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten, bei denen möglicherweise keine Hardware-Tastatur verfügbar ist, angibt, wenn der Inhalt des Elements bearbeitbar ist (zum Beispiel, wenn es ein {{htmlelement("input")}}- oder {{htmlelement("textarea")}}-Element oder ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut ist).

## Instanz-Methoden

_Erbt auch Methoden von seinem Eltern-Interface, [`Element`](/de/docs/Web/API/Element)._

- [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals)
  - : Gibt ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt zurück und ermöglicht es einem benutzerdefinierten Element, an HTML-Formularen teilzunehmen.
- [`HTMLElement.blur()`](/de/docs/Web/API/HTMLElement/blur)
  - : Entfernt den Tastaturfokus vom derzeit fokussierten Element.
- [`HTMLElement.click()`](/de/docs/Web/API/HTMLElement/click)
  - : Sendet ein Mausklick-Ereignis an das Element.
- [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus)
  - : Setzt den Tastaturfokus auf das Element.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover)
  - : Versteckt ein Popover-Element, indem es aus der {{Glossary("top_layer", "obersten Ebene")}} entfernt und mit `display: none` gestylt wird.
- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)
  - : Zeigt ein Popover-Element an, indem es zur {{Glossary("top_layer", "obersten Ebene")}} hinzugefügt und `display: none` aus seinen Styles entfernt wird.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)
  - : Schaltet das Popover-Element zwischen den Zuständen verborgen und angezeigt um.

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieses Interfaces.

_Erbt auch Ereignisse von seinem Eltern-Interface, [`Element`](/de/docs/Web/API/Element)._

- [`cancel`](/de/docs/Web/API/HTMLElement/cancel_event)
  - : Wird für {{HTMLElement("input")}}- und {{HTMLElement("dialog")}}-Elemente ausgelöst, wenn der Benutzer das derzeit geöffnete Dialogfeld mit der <kbd>Esc</kbd>-Taste schließt.
- [`change`](/de/docs/Web/API/HTMLElement/change_event)
  - : Wird ausgelöst, wenn der `value` eines {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}-Elements vom Benutzer geändert und bestätigt wurde. Im Gegensatz zum [`input`](/de/docs/Web/API/Element/input_event)-Ereignis wird das `change`-Ereignis nicht unbedingt bei jeder Änderung des `value`-Wertes eines Elements ausgelöst.
- [`error`](/de/docs/Web/API/HTMLElement/error_event)
  - : Wird ausgelöst, wenn eine Ressource nicht geladen werden konnte oder nicht verwendet werden kann.
- [`load`](/de/docs/Web/API/HTMLElement/load_event)
  - : Wird ausgelöst für Elemente, die eine Ressource enthalten, wenn die Ressource erfolgreich geladen wurde.

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
  - : Dieses Ereignis wird ausgelöst, wenn eine Zieh-Operation beendet wird (durch Loslassen einer Maustaste oder Drücken der Esc-Taste).
- [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziel betritt.
- [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziel verlässt.
- [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
  - : Dieses Ereignis wird kontinuierlich ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird und der Mauszeiger sich über einem gültigen Ziel befindet (alle 50 ms, WENN die Maus sich nicht bewegt, SONST viel schneller zwischen 5 ms (langsame Bewegung) und 1 ms (schnelle Bewegung) ca. Dieses Auslöseverhalten ist anders als bei [`mouseover`](/de/docs/Web/API/Element/mouseover_event) ).
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
  - : Dieses Ereignis wird ausgelöst, wenn der Benutzer beginnt, ein Element oder eine Textauswahl zu ziehen.
- [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl auf einem gültigen Ziel abgelegt wird.

### Popover-Ereignisse

- [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)
  - : Wird ausgelöst, wenn das Element ein Popover ist, bevor es verborgen oder angezeigt wird.
- [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)
  - : Wird ausgelöst, wenn das Element ein Popover ist, kurz nachdem es verborgen oder angezeigt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element)
