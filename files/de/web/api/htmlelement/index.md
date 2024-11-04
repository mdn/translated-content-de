---
title: HTMLElement
slug: Web/API/HTMLElement
l10n:
  sourceCommit: 1ea99c8e68a85aac13ba846bbe95a6f686771221
---

{{APIRef("HTML DOM")}}

Das **`HTMLElement`** Interface repräsentiert jedes [HTML](/de/docs/Web/HTML)-Element. Einige Elemente implementieren dieses Interface direkt, während andere es über ein vererbendes Interface implementieren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil, [`Element`](/de/docs/Web/API/Element)._

- [`HTMLElement.accessKey`](/de/docs/Web/API/HTMLElement/accessKey)
  - : Ein String, der den dem Element zugewiesenen Zugangsschlüssel darstellt.
- [`HTMLElement.accessKeyLabel`](/de/docs/Web/API/HTMLElement/accessKeyLabel) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den dem Element zugewiesenen Zugangsschlüssel enthält.
- [`HTMLElement.anchorElement`](/de/docs/Web/API/HTMLElement/anchorElement) {{ReadOnlyInline}}&nbsp;{{non-standard_inline}} {{experimental_inline}}
  - : Gibt eine Referenz auf das Ankerelement des Elements zurück oder `null`, wenn kein Ankerelement vorhanden ist.
- [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap) {{ReadOnlyInline}}
  - : Ein [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap), das die Deklarationen des [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributs des Elements darstellt.
- [`HTMLElement.autocapitalize`](/de/docs/Web/API/HTMLElement/autocapitalize)
  - : Ein String, der das Großschreibeverhalten des Elements für Benutzereingaben darstellt. Gültige Werte sind: `none`, `off`, `on`, `characters`, `words`, `sentences`.
- [`HTMLElement.autofocus`](/de/docs/Web/API/HTMLElement/autofocus)
  - : Ein Wahrheitswert, der das [`autofocus`](/de/docs/Web/HTML/Element/select#autofocus) globale HTML-Attribut widerspiegelt, welches anzeigt, ob das Steuerelement fokussiert werden soll, wenn die Seite geladen wird oder wenn ein Dialog oder Popover angezeigt wird, sofern in einem Element innerhalb von {{htmlelement("dialog")}}-Elementen angegeben oder in Elementen, deren Popover-Attribut gesetzt ist.
- [`HTMLElement.autocorrect`](/de/docs/Web/API/HTMLElement/autocorrect) {{experimental_inline}}
  - : Ein Boolean, der darstellt, ob von einem Benutzer eingegebener Text automatisch korrigiert werden soll oder nicht.
    Dies spiegelt das [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) globale HTML-Attribut wider.
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable)
  - : Ein String, wobei ein Wert von `true` bedeutet, dass das Element bearbeitbar ist, und ein Wert von `false`, dass es nicht bearbeitbar ist.
- [`HTMLElement.dataset`](/de/docs/Web/API/HTMLElement/dataset) {{ReadOnlyInline}}
  - : Gibt ein [`DOMStringMap`](/de/docs/Web/API/DOMStringMap) zurück, mit dem Skript die [benutzerdefinierten Datenattribute](/de/docs/Learn/HTML/Howto/Use_data_attributes) (`data-*`) des Elements lesen und schreiben kann.
- [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir)
  - : Ein String, der das `dir` globale Attribut widerspiegelt und die Richtung des Elements darstellt. Mögliche Werte sind `"ltr"`, `"rtl"` und `"auto"`.
- [`HTMLElement.draggable`](/de/docs/Web/API/HTMLElement/draggable)
  - : Ein Boolean-Wert, der angibt, ob das Element gezogen werden kann.
- [`HTMLElement.editContext`](/de/docs/Web/API/HTMLElement/editContext) {{experimental_inline}}
  - : Gibt den dem Element zugeordneten [`EditContext`](/de/docs/Web/API/EditContext) zurück oder `null`, wenn keiner vorhanden ist.
- [`HTMLElement.enterKeyHint`](/de/docs/Web/API/HTMLElement/enterKeyHint)
  - : Ein String, der definiert, welches Aktionslabel (oder Symbol) für die Eingabetaste auf virtuellen Tastaturen präsentiert werden soll.
- [`HTMLElement.hidden`](/de/docs/Web/API/HTMLElement/hidden)
  - : Ein String oder Boolean-Wert, der den Wert des [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)-Attributs des Elements widerspiegelt.
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert)
  - : Ein Boolean-Wert, der angibt, ob der User-Agent so handeln muss, als ob der gegebene Knoten für Benutzerinteraktionsereignisse, in-seiten Textsuchen ("finden in Seite") und Textauswahl nicht vorhanden ist.
- [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText)
  - : Stellt den gerenderten Textinhalt eines Knotens und seiner Nachfahren dar.
    Als Getter approximiert es den Text, den der Benutzer erhalten würde, wenn er den Inhalt des Elements mit dem Cursor hervorhebt und dann in die Zwischenablage kopiert.
    Als Setter ersetzt es den Inhalt innerhalb des ausgewählten Elements und konvertiert Zeilenumbrüche in {{HTMLElement("br")}} Elemente.
- [`HTMLElement.inputMode`](/de/docs/Web/API/HTMLElement/inputMode)
  - : Ein String-Wert, der den Wert des [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode)-Attributs des Elements widerspiegelt.
- [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable) {{ReadOnlyInline}}
  - : Gibt einen Boolean-Wert zurück, der angibt, ob der Inhalt des Elements bearbeitet werden kann oder nicht.
- [`HTMLElement.lang`](/de/docs/Web/API/HTMLElement/lang)
  - : Ein String, der die Sprache der Attribute, des Textes und der Elemente eines Elements darstellt.
- [`HTMLElement.nonce`](/de/docs/Web/API/HTMLElement/nonce)
  - : Gibt die einmalig verwendete kryptografische Zahl zurück, die von Content Security Policy verwendet wird, um zu bestimmen, ob ein gegebener Abruf durchgeführt werden darf.
- [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Höhe eines Elements relativ zum Layout enthält.
- [`HTMLElement.offsetLeft`](/de/docs/Web/API/HTMLElement/offsetLeft) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, die Entfernung dieses Elements vom linken Rand zu seinem `offsetParent`-linken Rand anzeigt.
- [`HTMLElement.offsetParent`](/de/docs/Web/API/HTMLElement/offsetParent) {{ReadOnlyInline}}
  - : Ein [`Element`](/de/docs/Web/API/Element), das das Element ist, von dem alle Versatz-Berechnungen derzeit durchgeführt werden.
- [`HTMLElement.offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, die Entfernung dieses Elements vom oberen Rand zu seinem `offsetParent`-oberen Rand anzeigt.
- [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Breite eines Elements relativ zum Layout enthält.
- [`HTMLElement.outerText`](/de/docs/Web/API/HTMLElement/outerText)
  - : Stellt den gerenderten Textinhalt eines Knotens und seiner Nachfahren dar.
    Als Getter ist es dasselbe wie [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) (es repräsentiert den gerenderten Textinhalt eines Elements und dessen Nachfahren).
    Als Setter ersetzt es den ausgewählten Knoten und dessen Inhalt mit dem gegebenen Wert und konvertiert Zeilenumbrüche in {{HTMLElement("br")}} Elemente.
- [`HTMLElement.popover`](/de/docs/Web/API/HTMLElement/popover)
  - : Ruft den Popover-Status eines Elements ab und setzt ihn über JavaScript (`"auto"` oder `"manual"`), und kann zur Funktionsprüfung verwendet werden. Spiegelt den Wert des globalen HTML-Attributs [`popover`](/de/docs/Web/HTML/Global_attributes/popover) wider.
- [`HTMLElement.spellcheck`](/de/docs/Web/API/HTMLElement/spellcheck)
  - : Ein Boolean-Wert, der den [Rechtschreibprüfung](/de/docs/Web/HTML/Global_attributes/spellcheck)-Hinweis steuert. Er ist für alle HTML-Elemente verfügbar, wirkt sich jedoch nicht auf alle aus.
- [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)
  - : Eine [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration), die die Deklarationen des [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributs des Elements darstellt.
- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex)
  - : Ein `long`, der die Position des Elements in der Tabulatorreihenfolge darstellt.
- [`HTMLElement.title`](/de/docs/Web/API/HTMLElement/title)
  - : Ein String, der den Text enthält, der in einem Popup-Fenster angezeigt wird, wenn die Maus über das Element fährt.
- [`HTMLElement.translate`](/de/docs/Web/API/HTMLElement/translate)
  - : Ein Boolean-Wert, der die Übersetzung darstellt.
- [`HTMLElement.virtualKeyboardPolicy`](/de/docs/Web/API/HTMLElement/virtualKeyboardPolicy) {{Experimental_Inline}}
  - : Ein String, der das Verhalten der Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten, bei denen möglicherweise keine Hardwaretastatur verfügbar ist, angibt, wenn der Inhalt des Elements bearbeitbar ist (zum Beispiel, es ist ein {{htmlelement("input")}} oder {{htmlelement("textarea")}} Element, oder ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut gesetzt).

## Instanz-Methoden

_Erbt auch Methoden von seinem Elternteil, [`Element`](/de/docs/Web/API/Element)._

- [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals)
  - : Gibt ein [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Objekt zurück und ermöglicht es einem benutzerdefinierten Element, an HTML-Formularen teilzunehmen.
- [`HTMLElement.blur()`](/de/docs/Web/API/HTMLElement/blur)
  - : Entfernt die Tastaturfokussierung vom aktuell fokussierten Element.
- [`HTMLElement.click()`](/de/docs/Web/API/HTMLElement/click)
  - : Sendet ein Mausklick-Ereignis an das Element.
- [`HTMLElement.focus()`](/de/docs/Web/API/HTMLElement/focus)
  - : Macht das Element zum aktuellen Tastaturfokus.
- [`HTMLElement.hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover)
  - : Verbirgt ein Popover-Element, indem es aus der {{Glossary("top_layer", "obersten Schicht")}} entfernt wird und es mit `display: none` gestylt wird.
- [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover)
  - : Zeigt ein Popover-Element, indem es zur {{Glossary("top_layer", "obersten Schicht")}} hinzugefügt und `display: none;` aus seinen Stilen entfernt wird.
- [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)
  - : Schaltet ein Popover-Element zwischen den versteckten und sichtbaren Zuständen um.

## Ereignisse

Hören Sie auf diese Ereignisse, indem Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden oder indem Sie einen Ereignis-Listener zur `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

_Erbt auch Ereignisse von seinem Elternteil, [`Element`](/de/docs/Web/API/Element)._

- [`cancel`](/de/docs/Web/API/HTMLElement/cancel_event)
  - : Wird für {{HTMLElement("input")}} und {{HTMLElement("dialog")}}-Elemente ausgelöst, wenn der Benutzer den aktuell geöffneten Dialog durch Drücken der <kbd>Esc</kbd>-Taste abbricht.
- [`change`](/de/docs/Web/API/HTMLElement/change_event)
  - : Wird ausgelöst, wenn der `value` eines {{HTMLElement("input")}}, {{HTMLElement("select")}}, oder {{HTMLElement("textarea")}} Elements vom Benutzer geändert und bestätigt wurde. Im Gegensatz zum [`input`](/de/docs/Web/API/Element/input_event)-Ereignis wird das `change`-Ereignis nicht unbedingt bei jeder Änderung des `value` eines Elements ausgelöst.
- [`error`](/de/docs/Web/API/HTMLElement/error_event)
  - : Wird ausgelöst, wenn eine Ressource nicht geladen werden kann oder nicht verwendet werden kann.
- [`load`](/de/docs/Web/API/HTMLElement/load_event)
  - : Wird für Elemente ausgelöst, die eine Ressource enthalten, wenn die Ressource erfolgreich geladen wurde.

### Zwischenablage-Ereignisse

- [`copy`](/de/docs/Web/API/HTMLElement/copy_event)
  - : Wird ausgelöst, wenn der Benutzer eine Kopieraktion über die Benutzeroberfläche des Browsers initiiert.
- [`cut`](/de/docs/Web/API/HTMLElement/cut_event)
  - : Wird ausgelöst, wenn der Benutzer eine Ausschneidaktion über die Benutzeroberfläche des Browsers initiiert.
- [`paste`](/de/docs/Web/API/HTMLElement/paste_event)
  - : Wird ausgelöst, wenn der Benutzer eine Einfügeaktion über die Benutzeroberfläche des Browsers initiiert.

### Drag & Drop-Ereignisse

- [`drag`](/de/docs/Web/API/HTMLElement/drag_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird.
- [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Ziehvorgang beendet wird (durch Freigeben einer Maustaste oder das Drücken der Escape-Taste).
- [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziel für das Ablegen betritt.
- [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziel für das Ablegen verlässt.
- [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
  - : Dieses Ereignis wird kontinuierlich ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird und der Mauszeiger über einem gültigen Ablageziel ist (jede 50 ms WENN die Maus sich nicht bewegt, SONST viel schneller zwischen ca. 5 ms (langsame Bewegung) und 1ms (schnelle Bewegung). Diese Auslösemuster unterscheidet sich vom [`mouseover`](/de/docs/Web/API/Element/mouseover_event)).
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
  - : Dieses Ereignis wird ausgelöst, wenn der Benutzer beginnt, ein Element oder eine Textauswahl zu ziehen.
- [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl auf ein gültiges Ziel fallen gelassen wird.

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
