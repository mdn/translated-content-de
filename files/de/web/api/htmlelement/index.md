---
title: HTMLElement
slug: Web/API/HTMLElement
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("HTML DOM")}}

Die **`HTMLElement`** Schnittstelle repräsentiert jedes [HTML](/de/docs/Web/HTML) Element. Einige Elemente implementieren diese Schnittstelle direkt, während andere sie über eine Schnittstelle implementieren, die von ihr erbt.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von ihrem Elternteil, {{DOMxRef("Element")}}._

- {{DOMxRef("HTMLElement.accessKey")}}
  - : Ein String, der den dem Element zugewiesenen Zugriffsschlüssel darstellt.
- {{DOMxRef("HTMLElement.accessKeyLabel")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den dem Element zugewiesenen Zugriffsschlüssel enthält.
- {{DOMxRef("HTMLElement.anchorElement")}} {{ReadOnlyInline}}&nbsp;{{non-standard_inline}} {{experimental_inline}}
  - : Gibt eine Referenz auf das Ankerelement des Elements zurück oder `null`, wenn es keines besitzt.
- {{DOMxRef("HTMLElement.attributeStyleMap")}} {{ReadOnlyInline}}
  - : Eine {{DOMxRef("StylePropertyMap")}}, die die Deklarationen des [`style`](/de/docs/Web/HTML/Global_attributes#style) Attributs des Elements darstellt.
- {{domxref("HTMLElement.autocapitalize", "autocapitalize")}}
  - : Ein String, der das Kapitalisierungsverhalten des Elements für Benutzereingaben darstellt. Gültige Werte sind: `none`, `off`, `on`, `characters`, `words`, `sentences`.
- {{domxref("HTMLElement.autofocus")}}
  - : Ein boolescher Wert, der das [`autofocus`](/de/docs/Web/HTML/Element/select#autofocus) globale HTML Attribut widerspiegelt, das angibt, ob das Steuerelement bei Laden der Seite, oder wenn Dialog oder Popover angezeigt werden, fokussiert sein soll, falls es in einem Element innerhalb von {{htmlelement("dialog")}} Elementen oder Elementen mit gesetztem Popover-Attribut angegeben ist.
- {{DOMxRef("HTMLElement.contentEditable")}}
  - : Ein String, wobei ein Wert von `true` bedeutet, dass das Element bearbeitbar ist, und ein Wert von `false`, dass es nicht bearbeitbar ist.
- {{DOMxRef("HTMLElement.dataset")}} {{ReadOnlyInline}}
  - : Gibt eine {{DOMxRef("DOMStringMap")}} zurück, mit der ein Skript die [benutzerdefinierten Datenattribute](/de/docs/Learn/HTML/Howto/Use_data_attributes) (`data-*`) des Elements lesen und schreiben kann.
- {{DOMxRef("HTMLElement.dir")}}
  - : Ein String, der das `dir` globale Attribut widerspiegelt und die Richtung des Elements darstellt. Mögliche Werte sind `"ltr"`, `"rtl"` und `"auto"`.
- {{DOMxRef("HTMLElement.draggable")}}
  - : Ein boolescher Wert, der angibt, ob das Element gezogen werden kann.
- {{DOMxRef("HTMLElement.editContext")}} {{experimental_inline}}
  - : Gibt den {{DOMxRef("EditContext")}} zurück, der mit dem Element verbunden ist, oder `null`, wenn keiner vorhanden ist.
- {{DOMxRef("HTMLElement.enterKeyHint")}}
  - : Ein String, der definiert, welches Aktionslabel (oder Symbol) für die Eingabetaste auf virtuellen Tastaturen angezeigt wird.
- {{DOMxRef("HTMLElement.hidden")}}
  - : Ein String oder boolescher Wert, der den Wert des [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden) Attributs des Elements widerspiegelt.
- {{DOMxRef("HTMLElement.inert")}}
  - : Ein boolescher Wert, der angibt, ob der Benutzeragent das gegebene Knoten so behandeln muss, als wäre er in Bezug auf Benutzerinteraktionsereignisse, In-Seiten-Textsuchen ("find in page") und Textauswahl nicht vorhanden.
- {{DOMxRef("HTMLElement.innerText")}}
  - : Repräsentiert den angezeigten Textinhalt eines Knotens und seiner Nachkommen.
    Als Getter nähert es den Text an, den der Benutzer erhalten würde, wenn er den Inhalt des Elements mit dem Cursor markiert und in die Zwischenablage kopiert.
    Als Setter ersetzt es den Inhalt des ausgewählten Elements und wandelt Zeilenumbrüche in {{HTMLElement("br")}}-Elemente um.
- {{DOMxRef("HTMLElement.inputMode")}}
  - : Ein String-Wert, der den Wert des [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode) Attributs des Elements widerspiegelt.
- {{DOMxRef("HTMLElement.isContentEditable")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der Inhalt des Elements bearbeitbar ist oder nicht.
- {{DOMxRef("HTMLElement.lang")}}
  - : Ein String, der die Sprache der Attribute, des Textes und der Inhalte eines Elements darstellt.
- {{DOMxRef("HTMLElement.nonce")}}
  - : Gibt die einmalig verwendete kryptographische Nummer zurück, die von der Content Security Policy verwendet wird, um zu bestimmen, ob ein bestimmtes Abrufen fortgesetzt werden darf.
- {{DOMxRef("HTMLElement.offsetHeight")}} {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Höhe eines Elements im Verhältnis zum Layout darstellt.
- {{DOMxRef("HTMLElement.offsetLeft")}} {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, die Entfernung vom linken Rand dieses Elements zum linken Rand seines `offsetParent`.
- {{DOMxRef("HTMLElement.offsetParent")}} {{ReadOnlyInline}}
  - : Ein {{DOMxRef("Element")}}, das das Element ist, von dem alle Offset-Berechnungen derzeit durchgeführt werden.
- {{DOMxRef("HTMLElement.offsetTop")}} {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, die Entfernung vom oberen Rand dieses Elements zum oberen Rand seines `offsetParent`.
- {{DOMxRef("HTMLElement.offsetWidth")}} {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Breite eines Elements im Verhältnis zum Layout darstellt.
- {{DOMxRef("HTMLElement.outerText")}}
  - : Repräsentiert den angezeigten Textinhalt eines Knotens und seiner Nachkommen.
    Als Getter ist es dasselbe wie {{DOMxRef("HTMLElement.innerText")}} (es repräsentiert den angezeigten Textinhalt eines Elements und seiner Nachkommen).
    Als Setter ersetzt es den ausgewählten Knoten und seinen Inhalt durch den angegebenen Wert und wandelt Zeilenumbrüche in {{HTMLElement("br")}}-Elemente um.
- {{domxref("HTMLElement.popover")}}
  - : Ermittelt und setzt den Popover-Zustand eines Elements über JavaScript (`"auto"` oder `"manual"`), und kann für die Feature-Erkennung verwendet werden. Widerspiegelt den Wert des [`popover`](/de/docs/Web/HTML/Global_attributes/popover) globalen HTML Attributs.
- {{DOMxRef("HTMLElement.spellcheck")}}
  - : Ein boolescher Wert, der den Hinweis zur [Rechtschreibprüfung](/de/docs/Web/HTML/Global_attributes/spellcheck) steuert. Es ist auf allen HTML-Elementen verfügbar, beeinflusst jedoch nicht alle.
- {{DOMxRef("HTMLElement.style")}}
  - : Eine {{DOMxRef("CSSStyleDeclaration")}}, die die Deklarationen des [`style`](/de/docs/Web/HTML/Global_attributes#style) Attributs des Elements darstellt.
- {{DOMxRef("HTMLElement.tabIndex")}}
  - : Ein `long`, das die Position des Elements in der Tab-Reihenfolge darstellt.
- {{DOMxRef("HTMLElement.title")}}
  - : Ein String, der den Text enthält, der in einem Popup-Fenster erscheint, wenn die Maus über dem Element ist.
- {{DOMxRef("HTMLElement.translate")}}
  - : Ein boolescher Wert, der die Übersetzung darstellt.
- {{DOMxRef("HTMLElement.virtualKeyboardPolicy")}} {{Experimental_Inline}}
  - : Ein String, der das Verhalten der virtuellen Tastatur auf Bildschirmen von Geräten wie Tablets, Mobiltelefonen oder anderen Geräten ohne verfügbare Hardware-Tastatur angibt, wenn der Inhalt des Elements bearbeitbar ist (zum Beispiel, es ist ein {{htmlelement("input")}} oder {{htmlelement("textarea")}}-Element oder ein Element mit gesetztem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut).

## Instanzmethoden

_Erbt auch Methoden von ihrem Elternteil, {{DOMxRef("Element")}}._

- {{DOMxRef("HTMLElement.attachInternals()")}}
  - : Gibt ein {{DOMxRef("ElementInternals")}} Objekt zurück und ermöglicht es einem benutzerdefinierten Element, an HTML-Formularen teilzunehmen.
- {{DOMxRef("HTMLElement.blur()")}}
  - : Entfernt den Tastaturfokus vom aktuell fokussierten Element.
- {{DOMxRef("HTMLElement.click()")}}
  - : Sendet ein Maus-Klick-Ereignis an das Element.
- {{DOMxRef("HTMLElement.focus()")}}
  - : Macht das Element zum aktuellen Tastaturfokus.
- {{DOMxRef("HTMLElement.hidePopover()")}}
  - : Versteckt ein Popover-Element, indem es aus der {{glossary("top layer")}} entfernt und mit `display: none` gestylt wird.
- {{DOMxRef("HTMLElement.showPopover()")}}
  - : Zeigt ein Popover-Element, indem es zur {{glossary("top layer")}} hinzugefügt und `display: none;` aus seinen Styles entfernt wird.
- {{DOMxRef("HTMLElement.togglePopover()")}}
  - : Schaltet ein Popover-Element zwischen den Zuständen 'versteckt' und 'angezeigt' um.

## Ereignisse

Hören Sie auf diese Ereignisse mit {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle.

_Erbt auch Ereignisse von ihrem Elternteil, {{DOMxRef("Element")}}._

- {{DOMxRef("HTMLElement/cancel_event", "cancel")}}
  - : Wird für {{HTMLElement("input")}} und {{HTMLElement("dialog")}}-Elemente ausgelöst, wenn der Benutzer den aktuell offenen Dialog durch Schließen mit der <kbd>Esc</kbd>-Taste abbricht.
- {{DOMxRef("HTMLElement/change_event", "change")}}
  - : Wird ausgelöst, wenn der `value` eines {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}-Elements geändert und vom Benutzer bestätigt wurde. Im Gegensatz zum {{domxref("Element/input_event", "input")}}-Ereignis wird das `change`-Ereignis nicht unbedingt bei jeder Veränderung des `value` eines Elements ausgelöst.
- {{DOMxRef("HTMLElement/error_event", "error")}}
  - : Wird ausgelöst, wenn eine Ressource nicht geladen werden konnte oder nicht verwendet werden kann.
- {{DOMxRef("HTMLElement/load_event", "load")}}
  - : Wird für Elemente ausgelöst, die eine Ressource enthalten, wenn die Ressource erfolgreich geladen wurde.

### Zwischenablage-Ereignisse

- {{DOMxRef("HTMLElement/copy_event", "copy")}}
  - : Wird ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers eine Kopieraktion initiiert.
- {{DOMxRef("HTMLElement/cut_event", "cut")}}
  - : Wird ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers eine Ausschneideaktion initiiert.
- {{DOMxRef("HTMLElement/paste_event", "paste")}}
  - : Wird ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers eine Einfügeaktion initiiert.

### Drag & Drop-Ereignisse

- {{DOMxRef("HTMLElement/drag_event", "drag")}}
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird.
- {{DOMxRef("HTMLElement/dragend_event", "dragend")}}
  - : Dieses Ereignis wird ausgelöst, wenn eine Ziehoperation beendet wird (durch Loslassen einer Maustaste oder Drücken der Escape-Taste).
- {{DOMxRef("HTMLElement/dragenter_event", "dragenter")}}
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl in ein gültiges Ziel für das Ablegen eintritt.
- {{DOMxRef("HTMLElement/dragleave_event", "dragleave")}}
  - : Dieses Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziel für das Ablegen verlässt.
- {{DOMxRef("HTMLElement/dragover_event", "dragover")}}
  - : Dieses Ereignis wird kontinuierlich ausgelöst, wenn ein Element oder eine Textauswahl gezogen wird und der Mauszeiger über einem gültigen Ziel für das Ablegen ist (alle 50 ms, wenn die Maus nicht bewegt wird, und viel schneller zwischen 5 ms (langsame Bewegung) und 1ms (schnelle Bewegung) etwa. Dieses Auslösungsmuster ist anders als bei {{domxref("Element/mouseover_event", "mouseover")}} ).
- {{DOMxRef("HTMLElement/dragstart_event", "dragstart")}}
  - : Dieses Ereignis wird ausgelöst, wenn der Benutzer beginnt, ein Element oder eine Textauswahl zu ziehen.
- {{DOMxRef("HTMLElement/drop_event", "drop")}}
  - : Dieses Ereignis wird ausgelöst, wenn ein Element oder eine Textauswahl auf ein gültiges Ziel für das Ablegen fallen gelassen wird.

### Popover-Ereignisse

- {{DOMxRef("HTMLElement/beforetoggle_event", "beforetoggle")}}
  - : Wird ausgelöst, wenn das Element ein Popover ist, bevor es ausgeblendet oder angezeigt wird.
- {{DOMxRef("HTMLElement/toggle_event", "toggle")}}
  - : Wird ausgelöst, wenn das Element ein Popover ist, unmittelbar nachdem es ausgeblendet oder angezeigt wurde.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("Element")}}
