---
title: HTMLElement
slug: Web/API/HTMLElement
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("HTML DOM")}}

Das **`HTMLElement`** Interface repräsentiert jedes [HTML](/de/docs/Web/HTML) Element. Einige Elemente implementieren dieses Interface direkt, während andere es über ein erbendes Interface implementieren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil, [`Element`](/de/docs/Web/API/Element)._

- [`HTMLElement.accessKey`](/de/docs/Web/API/HTMLElement/accessKey)
  - : Ein String, der den Access Key des Elements repräsentiert.
- [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den zugewiesenen Access Key des Elements enthält.
- [`HTMLElement.anchorElement`](/de/docs/Web/API/HTMLElement/anchorElement) {{ReadOnlyInline}}&nbsp;{{non-standard_inline}} {{experimental_inline}}
  - : Gibt eine Referenz auf das Ankerelement des Elements zurück oder `null`, wenn es keines hat.
- [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap) {{ReadOnlyInline}}
  - : Ein [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap), das die Deklarationen des [`style`](/de/docs/Web/HTML/Global_attributes#style) Attributs des Elements darstellt.
- [`autocapitalize`](/de/docs/Web/API/HTMLElement/autocapitalize)
  - : Ein String, der das Verhalten der Großschreibung des Elements für Benutzereingaben repräsentiert. Gültige Werte sind: `none`, `off`, `on`, `characters`, `words`, `sentences`.
- [`HTMLElement.autofocus`](/de/docs/Web/API/HTMLElement/autofocus)
  - : Ein boolescher Wert, der das [`autofocus`](/de/docs/Web/HTML/Element/select#autofocus) HTML-Globale-Attribut widerspiegelt, das angibt, ob das Steuerelement fokussiert sein sollte, wenn die Seite geladen wird, oder wenn das Dialogfenster oder Popover angezeigt wird, falls im Inneren von {{htmlelement("dialog")}} Elementen oder Elementen, deren Popover-Attribut gesetzt ist, angegeben.
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
  - : Ein String, wobei ein Wert von `true` bedeutet, dass das Element bearbeitbar ist, und ein Wert von `false`, dass es nicht bearbeitbar ist.
- [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) {{ReadOnlyInline}}
  - : Gibt ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) zurück, mit dem ein Skript die [benutzerdefinierten Datenattribute](/de/docs/Learn/HTML/Howto/Use_data_attributes) (`data-*`) des Elements lesen und schreiben kann.
- [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir)
  - : Ein String, der das `dir` globale Attribut widerspiegelt und die Richtung des Elements darstellt. Mögliche Werte sind `"ltr"`, `"rtl"` und `"auto"`.
- [`HTMLElement.draggable`](/de/docs/Web/API/HTMLElement/draggable)
  - : Ein boolescher Wert, der angibt, ob das Element gezogen werden kann.
- [`HTMLElement.editContext`](/de/docs/Web/API/HTMLElement/editContext) {{experimental_inline}}
  - : Gibt den [`EditContext`](/de/docs/Web/API/EditContext) zurück, der mit dem Element verbunden ist, oder `null`, falls keiner vorhanden ist.
- [`HTMLElement.enterKeyHint`](/de/docs/Web/API/HTMLElement/enterKeyHint)
  - : Ein String, der definiert, welches Aktionslabel (oder Icon) für die Eingabetaste auf virtuellen Tastaturen angezeigt wird.
- [`HTMLElement.hidden`](/de/docs/Web/API/HTMLElement/hidden)
  - : Ein String oder ein boolescher Wert, der den Wert des [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden) Attributs des Elements widerspiegelt.
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert)
  - : Ein boolescher Wert, der angibt, ob der Benutzeragent so handeln muss, als ob der gegebene Knoten für Benutzerinteraktionen, In-Page-Textsuchen ("finde auf Seite") und Textauswahl nicht vorhanden ist.
- [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText)
  - : Repräsentiert den gerenderten Textinhalt eines Knotens und seiner Nachkommen.
    Als Getter approximiert es den Text, den der Benutzer erhalten würde, wenn er die Inhalte des Elements mit dem Cursor markieren und dann in die Zwischenablage kopieren würde.
    Als Setter ersetzt es den Inhalt innerhalb des ausgewählten Elements und konvertiert Zeilenumbrüche in {{HTMLElement("br")}}-Elemente.
- [`HTMLElement.inputMode`](/de/docs/Web/API/HTMLElement/inputMode)
  - : Ein String-Wert, der den Wert des [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode) Attributs des Elements widerspiegelt.
- [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der Inhalt des Elements bearbeitet werden kann oder nicht.
- [`HTMLElement.lang`](/de/docs/Web/API/HTMLElement/lang)
  - : Ein String, der die Sprache von Attributen, Text und Elementinhalten des Elements repräsentiert.
- [`HTMLElement.nonce`](/de/docs/Web/API/HTMLElement/nonce)
  - : Gibt die kryptografische einmal verwendete Zahl zurück, die zur Bestimmung der Erlaubnis eines Abrufes durch die Content Security Policy verwendet wird.
- [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, der die Höhe eines Elements relativ zum Layout enthält.
- [`HTMLElement.offsetLeft`](/de/docs/Web/API/HTMLElement/offsetLeft) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, der die Entfernung vom linken Rand dieses Elements zum linken Rand seines `offsetParent` enthält.
- [`HTMLElement.offsetParent`](/de/docs/Web/API/HTMLElement/offsetParent) {{ReadOnlyInline}}
  - : Ein [`Element`](/de/docs/Web/API/Element), von dem alle Offset-Berechnungen derzeit durchgeführt werden.
- [`HTMLElement.offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, der die Entfernung vom oberen Rand dieses Elements zum oberen Rand seines `offsetParent` enthält.
- [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, der die Breite eines Elements relativ zum Layout enthält.
- [`HTMLElement.outerText`](/de/docs/Web/API/HTMLElement/outerText)
  - : Repräsentiert den gerenderten Textinhalt eines Knotens und seiner Nachkommen.
    Als Getter ist es dasselbe wie [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) (es repräsentiert den gerenderten Textinhalt eines Elements und seiner Nachkommen).
    Als Setter ersetzt es den ausgewählten Knoten und seinen Inhalt mit dem angegebenen Wert und konvertiert Zeilenumbrüche in {{HTMLElement("br")}}-Elemente.
- [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)
  - : Holt und setzt den Popover-Status eines Elements über JavaScript (`"auto"` oder `"manual"`) und kann für die Funktionsdetektion verwendet werden. Widerspiegelt den Wert des [`popover`](/de/docs/Web/HTML/Global_attributes/popover) globalen HTML-Attributs.
- [`HTMLElement.spellcheck`](/de/docs/Web/API/HTMLElement/spellcheck)
  - : Ein boolescher Wert, der den Hinweis zur [Rechtschreibprüfung](/de/docs/Web/HTML/Global_attributes/spellcheck) steuert. Es ist auf allen HTML-Elementen verfügbar, beeinflusst jedoch nicht alle.
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
  - : Ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration), das die Deklarationen des [`style`](/de/docs/Web/HTML/Global_attributes#style) Attributs des Elements darstellt.
- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex)
  - : Ein `long`, der die Position des Elements in der Tabulatorreihenfolge darstellt.
- [`HTMLElement.title`](/de/docs/Web/API/HTMLElement/title)
  - : Ein String, der den Text enthält, der in einem Popup-Fenster angezeigt wird, wenn die Maus über dem Element ist.
- [`HTMLElement.translate`](/de/docs/Web/API/HTMLElement/translate)
  - : Ein boolescher Wert, der die Übersetzung repräsentiert.
- [`HTMLElement.virtualKeyboardPolicy`](/de/docs/Web/API/HTMLElement/virtualKeyboardPolicy) {{Experimental_Inline}}
  - : Ein String, der das Verhalten der virtuellen On-Screen-Tastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten, bei denen möglicherweise keine Hardware-Tastatur verfügbar ist, angibt, wenn der Inhalt des Elements bearbeitbar ist (z. B. ist es ein {{htmlelement("input")}} oder {{htmlelement("textarea")}} Element oder ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut gesetzt).

## Instanz-Methoden

_Erbt auch Methoden von seinem Elternteil, [`Element`](/de/docs/Web/API/Element)._

- [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals)
  - : Gibt ein [`ElementInternals`](/de/docs/Web/API/ElementInternals) Objekt zurück und ermöglicht es einem benutzerdefinierten Element, an HTML-Formularen teilzunehmen.
- [`HTMLElement.blur()`](/de/docs/Web/API/HTMLElement/blur)
  - : Entfernt den Tastaturfokus vom derzeit fokussierten Element.
- [`HTMLElement.click()`](/de/docs/Web/API/HTMLElement/click)
  - : Sendet ein Mausklick-Ereignis an das Element.
- [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus)
  - : Macht das Element zum aktuellen Tastaturfokus.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover)
  - : Versteckt ein Popover-Element, indem es aus der [obersten Schicht](/de/docs/Glossary/top_layer) entfernt und mit `display: none` gestylt wird.
- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)
  - : Zeigt ein Popover-Element, indem es zur [obersten Schicht](/de/docs/Glossary/top_layer) hinzugefügt und `display: none;` aus seinen Stilen entfernt wird.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)
  - : Schaltet ein Popover-Element zwischen den versteckten und angezeigten Zuständen um.

## Ereignisse

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname` Eigenschaft dieses Interfaces zuweisen.

_Erbt auch Ereignisse von seinem Elternteil, [`Element`](/de/docs/Web/API/Element)._

- [`cancel`](/de/docs/Web/API/HTMLElement/cancel_event)
  - : Wird für {{HTMLElement("input")}} und {{HTMLElement("dialog")}} Elemente ausgelöst, wenn der Benutzer das aktuell geöffnete Dialogfeld durch Schließen mit der <kbd>Esc</kbd>-Taste abbricht.
- [`change`](/de/docs/Web/API/HTMLElement/change_event)
  - : Wird ausgelöst, wenn der `value` eines {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} Elements durch den Benutzer geändert und übernommen wurde. Anders als das [`input`](/de/docs/Web/API/Element/input_event) Ereignis wird das `change` Ereignis nicht unbedingt bei jeder Änderung des `value` eines Elements ausgelöst.
- [`error`](/de/docs/Web/API/HTMLElement/error_event)
  - : Wird ausgelöst, wenn eine Ressource nicht geladen werden konnte oder nicht verwendet werden kann.
- [`load`](/de/docs/Web/API/HTMLElement/load_event)
  - : Wird für Elemente ausgelöst, die eine Ressource enthalten, wenn die Ressource erfolgreich geladen wurde.

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
  - : Dieses Ereignis wird ausgelöst, wenn eine Ziehoperation beendet wird (durch Loslassen einer Maustaste oder Drücken der Escape-Taste).
- [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziel zum Ablegen betritt.
- [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziel zum Ablegen verlässt.
- [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
  - : Dieses Ereignis wird kontinuierlich ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird und sich der Mauszeiger über einem gültigen Ziel zum Ablegen befindet (alle 50 ms, WENN die Maus sich nicht bewegt, SONST viel schneller zwischen ca. 5 ms (langsame Bewegung) und 1 ms (schnelle Bewegung). Dieses Muster unterscheidet sich vom [`mouseover`](/de/docs/Web/API/Element/mouseover_event)).
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
  - : Dieses Ereignis wird ausgelöst, wenn der Benutzer beginnt, ein Element oder eine Textauswahl zu ziehen.
- [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl auf einem gültigen Ziel zum Ablegen abgelegt wird.

### Popover-Ereignisse

- [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)
  - : Wird ausgelöst, wenn das Element ein Popover ist, bevor es versteckt oder angezeigt wird.
- [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)
  - : Wird ausgelöst, wenn das Element ein Popover ist, gerade nachdem es versteckt oder angezeigt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element)
