---
title: HTMLElement
slug: Web/API/HTMLElement
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

{{APIRef("HTML DOM")}}

Das Interface **`HTMLElement`** repräsentiert jedes [HTML](/de/docs/Web/HTML)-Element. Einige Elemente implementieren dieses Interface direkt, während andere es über ein Interface implementieren, das von ihm erbt.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt außerdem Eigenschaften von seinem übergeordneten Interface [`Element`](/de/docs/Web/API/Element)._

- [`HTMLElement.accessKey`](/de/docs/Web/API/HTMLElement/accessKey)
  - : Ein String, der den dem Element zugewiesenen Zugriffsschlüssel repräsentiert.
- [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den dem Element zugewiesenen Zugriffsschlüssel enthält.
- [`HTMLElement.anchorElement`](/de/docs/Web/API/HTMLElement/anchorElement) {{ReadOnlyInline}}&nbsp;{{non-standard_inline}} {{experimental_inline}}
  - : Gibt eine Referenz auf das Ankerelement des Elements zurück oder `null`, wenn es keines hat.
- [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap) {{ReadOnlyInline}}
  - : Eine [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap), die die Deklarationen des [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs des Elements repräsentiert.
- [`HTMLElement.autocapitalize`](/de/docs/Web/API/HTMLElement/autocapitalize)
  - : Ein String, der angibt, wie Großschreibung bei Benutzereingaben für das Element gehandhabt wird. Gültige Werte sind: `none`, `off`, `on`, `characters`, `words`, `sentences`.
- [`HTMLElement.autofocus`](/de/docs/Web/API/HTMLElement/autofocus)
  - : Ein boolescher Wert, der das globale HTML-Attribut [`autofocus`](/de/docs/Web/HTML/Reference/Elements/select#autofocus) widerspiegelt. Dieses gibt an, ob das Steuerelement beim Laden der Seite den Fokus erhalten soll oder, wenn es sich innerhalb eines {{htmlelement("dialog")}}-Elements oder eines Elements mit gesetztem Popover-Attribut befindet, sobald der Dialog beziehungsweise das Popover angezeigt wird.
- [`HTMLElement.autocorrect`](/de/docs/Web/API/HTMLElement/autocorrect)
  - : Ein boolescher Wert, der angibt, ob von Benutzern eingegebener Text automatisch korrigiert werden soll.
    Er spiegelt das globale HTML-Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) wider.
- [`HTMLElement.containerTiming`](/de/docs/Web/API/HTMLElement/containerTiming) {{Experimental_Inline}}
  - : Ein String, der das Element als Containerwurzel für die Beobachtung mit der [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming)-API kennzeichnet.
    Er spiegelt das globale HTML-Attribut [`containertiming`](/de/docs/Web/HTML/Reference/Global_attributes/containertiming) wider.
- [`HTMLElement.containerTimingIgnore`](/de/docs/Web/API/HTMLElement/containerTimingIgnore) {{Experimental_Inline}}
  - : Ein boolescher Wert, der das Element und seine Nachfahren davon ausschließt, zur Zeitmessung einer übergeordneten Containerwurzel beizutragen.
    Er spiegelt das globale HTML-Attribut [`containertimingignore`](/de/docs/Web/HTML/Reference/Global_attributes/containertimingignore) wider.
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
  - : Ein String, bei dem der Wert `true` bedeutet, dass das Element bearbeitbar ist, und der Wert `false`, dass es nicht bearbeitbar ist.
- [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) {{ReadOnlyInline}}
  - : Gibt eine [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) zurück, mit der Skripte die [benutzerdefinierten Datenattribute](/de/docs/Web/HTML/How_to/Use_data_attributes) (`data-*`) des Elements lesen und schreiben können.
- [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir)
  - : Ein String, der das globale Attribut `dir` widerspiegelt und die Schreibrichtung des Elements angibt. Mögliche Werte sind `"ltr"`, `"rtl"` und `"auto"`.
- [`HTMLElement.draggable`](/de/docs/Web/API/HTMLElement/draggable)
  - : Ein boolescher Wert, der angibt, ob das Element gezogen werden kann.
- [`HTMLElement.editContext`](/de/docs/Web/API/HTMLElement/editContext) {{experimental_inline}}
  - : Gibt den dem Element zugeordneten [`EditContext`](/de/docs/Web/API/EditContext) zurück oder `null`, wenn keiner vorhanden ist.
- [`HTMLElement.enterKeyHint`](/de/docs/Web/API/HTMLElement/enterKeyHint)
  - : Ein String, der festlegt, welche Aktionsbeschriftung oder welches Symbol für die Eingabetaste auf virtuellen Tastaturen angezeigt werden soll.
- [`HTMLElement.hidden`](/de/docs/Web/API/HTMLElement/hidden)
  - : Ein String oder ein boolescher Wert, der den Wert des [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)-Attributs des Elements widerspiegelt.
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert)
  - : Ein boolescher Wert, der angibt, ob der User Agent den betreffenden Knoten für Benutzerinteraktionsereignisse, die Textsuche innerhalb der Seite („Auf Seite suchen“) und die Textauswahl so behandeln muss, als wäre er nicht vorhanden.
- [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText)
  - : Repräsentiert den gerenderten Textinhalt eines Knotens und seiner Nachfahren.
    Beim Lesen entspricht der Wert ungefähr dem Text, den Benutzer erhalten würden, wenn sie den Inhalt des Elements mit dem Cursor markieren und anschließend in die Zwischenablage kopieren.
    Beim Schreiben ersetzt er den Inhalt des ausgewählten Elements und wandelt dabei Zeilenumbrüche in {{HTMLElement("br")}}-Elemente um.
- [`HTMLElement.inputMode`](/de/docs/Web/API/HTMLElement/inputMode)
  - : Ein String, der den Wert des [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode)-Attributs des Elements widerspiegelt.
- [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der Inhalt des Elements bearbeitet werden kann.
- [`HTMLElement.lang`](/de/docs/Web/API/HTMLElement/lang)
  - : Ein String, der die Sprache der Attribute, des Texts und des Inhalts eines Elements angibt.
- [`HTMLElement.nonce`](/de/docs/Web/API/HTMLElement/nonce)
  - : Gibt die einmalig verwendete kryptografische Zahl zurück, anhand derer die Content Security Policy bestimmt, ob ein bestimmter Abruf zulässig ist.
- [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight) {{ReadOnlyInline}}
  - : Gibt einen `double`-Wert zurück, der die Höhe eines Elements im Layout angibt.
- [`HTMLElement.offsetLeft`](/de/docs/Web/API/HTMLElement/offsetLeft) {{ReadOnlyInline}}
  - : Gibt einen `double`-Wert zurück, der den Abstand vom linken Rand dieses Elements zum linken Rand seines `offsetParent` angibt.
- [`HTMLElement.offsetParent`](/de/docs/Web/API/HTMLElement/offsetParent) {{ReadOnlyInline}}
  - : Ein [`Element`](/de/docs/Web/API/Element), auf dessen Grundlage derzeit alle Offset-Berechnungen erfolgen.
- [`HTMLElement.offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop) {{ReadOnlyInline}}
  - : Gibt einen `double`-Wert zurück, der den Abstand vom oberen Rand dieses Elements zum oberen Rand seines `offsetParent` angibt.
- [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth) {{ReadOnlyInline}}
  - : Gibt einen `double`-Wert zurück, der die Breite eines Elements im Layout angibt.
- [`HTMLElement.outerText`](/de/docs/Web/API/HTMLElement/outerText)
  - : Repräsentiert den gerenderten Textinhalt eines Knotens und seiner Nachfahren.
    Beim Lesen entspricht der Wert [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) und repräsentiert den gerenderten Textinhalt eines Elements und seiner Nachfahren.
    Beim Schreiben ersetzt er den ausgewählten Knoten samt Inhalt durch den angegebenen Wert und wandelt dabei Zeilenumbrüche in {{HTMLElement("br")}}-Elemente um.
- [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)
  - : Liest und setzt den Popover-Zustand eines Elements über JavaScript (`"auto"`, `"hint"` oder `"manual"`) und kann zur Feature-Erkennung verwendet werden. Spiegelt den Wert des globalen HTML-Attributs [`popover`](/de/docs/Web/HTML/Reference/Global_attributes/popover) wider.
- [`HTMLElement.spellcheck`](/de/docs/Web/API/HTMLElement/spellcheck)
  - : Ein boolescher Wert, der den Hinweis zur [Rechtschreibprüfung](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) steuert. Er ist für alle HTML-Elemente verfügbar, wirkt sich aber nicht auf alle aus.
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
  - : Eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration), die die Deklarationen des [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs des Elements repräsentiert.
- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex)
  - : Ein `long`-Wert, der die Position des Elements in der Tab-Reihenfolge angibt.
- [`HTMLElement.title`](/de/docs/Web/API/HTMLElement/title)
  - : Ein String, der den Text enthält, der in einem Popup angezeigt wird, wenn sich der Mauszeiger über dem Element befindet.
- [`HTMLElement.translate`](/de/docs/Web/API/HTMLElement/translate)
  - : Ein boolescher Wert, der angibt, ob das Element übersetzt werden soll.
- [`HTMLElement.virtualKeyboardPolicy`](/de/docs/Web/API/HTMLElement/virtualKeyboardPolicy) {{Experimental_Inline}}
  - : Ein String, der das Verhalten der virtuellen Bildschirmtastatur auf Geräten wie Tablets und Mobiltelefonen oder anderen Geräten angibt, auf denen möglicherweise keine physische Tastatur verfügbar ist, sofern der Inhalt des Elements bearbeitbar ist (beispielsweise bei einem {{htmlelement("input")}}- oder {{htmlelement("textarea")}}-Element oder einem Element mit gesetztem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut).
- [`HTMLElement.writingSuggestions`](/de/docs/Web/API/HTMLElement/writingSuggestions)
  - : Ein String, der angibt, ob vom Browser bereitgestellte Schreibvorschläge im Bereich des Elements aktiviert sein sollen.

## Instanzmethoden

_Erbt außerdem Methoden von seinem übergeordneten Interface [`Element`](/de/docs/Web/API/Element)._

- [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals)
  - : Gibt ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt zurück und ermöglicht es einem benutzerdefinierten Element, an HTML-Formularen teilzunehmen.
- [`HTMLElement.blur()`](/de/docs/Web/API/HTMLElement/blur)
  - : Entfernt den Tastaturfokus vom aktuell fokussierten Element.
- [`HTMLElement.click()`](/de/docs/Web/API/HTMLElement/click)
  - : Sendet ein Mausklick-Ereignis an das Element.
- [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus)
  - : Setzt den Tastaturfokus auf das Element.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover)
  - : Blendet ein Popover-Element aus, indem es aus der {{Glossary("top_layer", "obersten Ebene")}} entfernt und mit `display: none` formatiert wird.
- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)
  - : Zeigt ein Popover-Element an, indem es der {{Glossary("top_layer", "obersten Ebene")}} hinzugefügt und `display: none;` aus seinen Styles entfernt wird.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)
  - : Schaltet ein Popover-Element zwischen dem ausgeblendeten und dem angezeigten Zustand um.

## Ereignisse

Sie können diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) überwachen oder der Eigenschaft `oneventname` dieses Interfaces einen Event Listener zuweisen.

_Erbt außerdem Ereignisse von seinem übergeordneten Interface [`Element`](/de/docs/Web/API/Element)._

- [`change`](/de/docs/Web/API/HTMLElement/change_event)
  - : Wird ausgelöst, wenn der `value` eines {{HTMLElement("input")}}-, {{HTMLElement("select")}}- oder {{HTMLElement("textarea")}}-Elements durch Benutzer geändert und die Änderung bestätigt wurde. Anders als das Ereignis [`input`](/de/docs/Web/API/Element/input_event) wird das Ereignis `change` nicht unbedingt bei jeder Änderung des `value` eines Elements ausgelöst.
- [`command`](/de/docs/Web/API/HTMLElement/command_event)
  - : Wird bei einem Element ausgelöst, das über einen [`button`](/de/docs/Web/API/HTMLButtonElement) mit gültigen Werten für [`commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement) und [`command`](/de/docs/Web/API/HTMLButtonElement/command) gesteuert wird, sobald mit dem Button interagiert wird (etwa durch einen Klick).
- [`error`](/de/docs/Web/API/HTMLElement/error_event)
  - : Wird ausgelöst, wenn eine Ressource nicht geladen werden konnte oder nicht verwendet werden kann.
- [`load`](/de/docs/Web/API/HTMLElement/load_event)
  - : Wird bei Elementen ausgelöst, die eine Ressource enthalten, wenn diese erfolgreich geladen wurde.

### Drag-and-Drop-Ereignisse

- [`drag`](/de/docs/Web/API/HTMLElement/drag_event)
  - : Dieses Ereignis wird wiederholt ausgelöst, während ein Element oder eine Textauswahl gezogen wird. Die Häufigkeit hängt vom Browser, Betriebssystem und der Zeigerbewegung ab; verlassen Sie sich nicht auf ein festes Intervall.
- [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Ziehvorgang beendet wird, indem die Maustaste losgelassen oder die Escape-Taste gedrückt wird.
- [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine gezogene Textauswahl in ein gültiges Ablageziel gelangt.
- [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine gezogene Textauswahl ein gültiges Ablageziel verlässt.
- [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
  - : Dieses Ereignis wird wiederholt ausgelöst, während ein Element oder eine Textauswahl über ein potenzielles Ablageziel gezogen wird. Die Häufigkeit hängt vom Browser, Betriebssystem und der Zeigerbewegung ab; verlassen Sie sich nicht auf ein festes Intervall.
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
  - : Dieses Ereignis wird ausgelöst, wenn Benutzer beginnen, ein Element oder eine Textauswahl zu ziehen.
- [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl auf einem gültigen Ablageziel abgelegt wird.

### Interest-Invoker-Ereignisse

- [`interest`](/de/docs/Web/API/HTMLElement/interest_event) {{experimental_inline}} {{non-standard_inline}}
  - : Wird beim Zielelement eines [Interest Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers) ausgelöst, wenn Interesse angezeigt wird. Dadurch kann als Reaktion darauf Code ausgeführt werden.
- [`loseinterest`](/de/docs/Web/API/HTMLElement/loseinterest_event) {{experimental_inline}} {{non-standard_inline}}
  - : Wird beim Zielelement eines Interest Invokers ausgelöst, wenn das Interesse endet. Dadurch kann als Reaktion darauf Code ausgeführt werden.

### Toggle-Ereignisse

- [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)
  - : Wird ausgelöst, wenn das Element ein [Popover](/de/docs/Web/API/Popover_API) oder ein {{htmlelement("dialog")}} ist, bevor es ausgeblendet oder angezeigt wird.
- [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)
  - : Wird ausgelöst, wenn das Element ein [Popover](/de/docs/Web/API/Popover_API), ein {{htmlelement("dialog")}}- oder ein {{htmlelement("details")}}-Element ist, unmittelbar nachdem es ausgeblendet oder angezeigt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element`](/de/docs/Web/API/Element)
