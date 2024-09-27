---
title: HTMLInputElement
slug: Web/API/HTMLInputElement
l10n:
  sourceCommit: 050bcdba594e759c0a4dde172de5d334f5a3b20f
---

{{APIRef("HTML DOM")}}

Das **`HTMLInputElement`** Interface bietet spezielle Eigenschaften und Methoden zur Manipulation von Optionen, Layout und Darstellung von {{HtmlElement("input")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Einige Eigenschaften gelten nur für `input`-Elementtypen, die die entsprechenden Attribute unterstützen.

- [`align`](/de/docs/Web/API/HTMLInputElement/align) {{Deprecated_Inline}}

  - : Ein String, der die Ausrichtung des Elements darstellt. _Verwenden Sie stattdessen CSS._

- [`defaultValue`](/de/docs/Web/API/HTMLInputElement/defaultValue)

  - : Ein String, der den Standardwert darstellt, wie er ursprünglich im HTML spezifiziert wurde, das dieses Objekt erstellt hat.

- [`dirName`](/de/docs/Web/API/HTMLInputElement/dirName)

  - : Ein String, der die Direktionalität des Elements darstellt.

- [`incremental`](/de/docs/Web/API/HTMLInputElement/incremental) {{Non-standard_Inline}}

  - : Ein boolean, der den Modus des Such-Events repräsentiert. Wenn `true`, wird bei jedem Tastendruck oder beim Klicken auf die Abbrechen-Schaltfläche ein Ereignis ausgelöst; andernfalls wird beim Drücken der <kbd>Enter</kbd>-Taste ausgelöst.

- [`labels`](/de/docs/Web/API/HTMLInputElement/labels) {{ReadOnlyInline}}

  - : Gibt eine Liste von {{ HTMLElement("label") }}-Elementen zurück, die Labels für dieses Element sind.

- [`list`](/de/docs/Web/API/HTMLInputElement/list) {{ReadOnlyInline}}

  - : Gibt das Element zurück, auf das durch das [`list`](/de/docs/Web/HTML/Element/input#list) Attribut verwiesen wird. Die Eigenschaft kann `null` sein, wenn in demselben Baum kein HTML-Element gefunden wird.

- [`multiple`](/de/docs/Web/API/HTMLInputElement/multiple)

  - : Ein boolean, der das [`multiple`](/de/docs/Web/HTML/Element/input#multiple) Attribut des Elements darstellt und angibt, ob mehr als ein Wert möglich ist (z. B. mehrere Dateien).

- [`name`](/de/docs/Web/API/HTMLInputElement/name)

  - : Ein String, der das [`name`](/de/docs/Web/HTML/Element/input#name) Attribut des Elements darstellt und einen Namen enthält, der das Element beim Absenden des Formulars identifiziert.

- [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction)

  - : Erhält und setzt die Aktion, die ausgeführt werden soll (`"hide"`, `"show"` oder `"toggle"`) auf einem Popover-Element, das durch ein {{htmlelement("input")}}-Element vom Typ `button` gesteuert wird. Es spiegelt den Wert des [`popovertargetaction`](/de/docs/Web/HTML/Element/input#popovertargetaction) HTML-Attributs wider.

- [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement)

  - : Erhält und setzt das Popover-Element, das über ein {{htmlelement("input")}}-Element vom Typ `button` gesteuert wird. Das JavaScript-Äquivalent des [`popovertarget`](/de/docs/Web/HTML/Element/input#popovertarget) HTML-Attributes.

- [`step`](/de/docs/Web/API/HTMLInputElement/step)

  - : Ein String, der das [`step`](/de/docs/Web/HTML/Element/input#step) Attribut des Elements darstellt und mit [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) zusammenarbeitet, um die Schritte zu begrenzen, in denen ein numerischer oder Datum-Uhrzeit-Wert festgelegt werden kann. Es kann der String `any` oder eine positive Fließkommazahl sein. Wenn dies nicht auf `any` gesetzt ist, akzeptiert die Steuerung nur Werte in Vielfachen des Schrittwerts, die größer als das Minimum sind.

- [`type`](/de/docs/Web/API/HTMLInputElement/type)

  - : Ein String, der das [`type`](/de/docs/Web/HTML/Element/input#type) Attribut des Elements darstellt und angibt, welche Steuerung angezeigt wird. Für mögliche Werte siehe die Dokumentation des [`type`](/de/docs/Web/HTML/Element/input#type) Attributs.

- [`useMap`](/de/docs/Web/API/HTMLInputElement/useMap) {{Deprecated_Inline}}

  - : Ein String, der eine clientseitige Bildkarte darstellt.

- [`value`](/de/docs/Web/API/HTMLInputElement/value)

  - : Ein String, der den aktuellen Wert der Steuerung darstellt. Wenn der Benutzer einen anderen Wert als erwartet eingibt, kann dies einen leeren String zurückgeben.

- [`valueAsDate`](/de/docs/Web/API/HTMLInputElement/valueAsDate)

  - : Ein {{jsxref("Date")}}, der den Wert des Elements darstellt, als Datum interpretiert, oder `null`, wenn eine Konvertierung nicht möglich ist.

- [`valueAsNumber`](/de/docs/Web/API/HTMLInputElement/valueAsNumber)
  - : Eine Zahl, die den Wert des Elements darstellt, interpretiert als einen der folgenden, in dieser Reihenfolge: ein Zeitwert, eine Zahl oder `NaN`, wenn eine Konvertierung unmöglich ist.

### Instanz-Eigenschaften in Bezug auf das übergeordnete Formular

- [`form`](/de/docs/Web/API/HTMLInputElement/form) {{ReadOnlyInline}}

  - : Gibt eine Referenz auf das übergeordnete {{HtmlElement("form")}}-Element zurück.

- [`formAction`](/de/docs/Web/API/HTMLInputElement/formAction)

  - : Ein String, der das [`formaction`](/de/docs/Web/HTML/Element/input#formaction) Attribut des Elements darstellt und die URL eines Programms enthält, das die vom Element übermittelten Informationen verarbeitet. Dies überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action) Attribut des übergeordneten Formulars.

- [`formEnctype`](/de/docs/Web/API/HTMLInputElement/formEnctype)

  - : Ein String, der das [`formenctype`](/de/docs/Web/HTML/Element/input#formenctype) Attribut des Elements darstellt und den Inhaltstyp enthält, der zum Übermitteln des Formulars an den Server verwendet wird. Dies überschreibt das [`enctype`](/de/docs/Web/HTML/Element/form#enctype) Attribut des übergeordneten Formulars.

- [`formMethod`](/de/docs/Web/API/HTMLInputElement/formMethod)

  - : Ein String, der das [`formmethod`](/de/docs/Web/HTML/Element/input#formmethod) Attribut des Elements darstellt und die HTTP-Methode enthält, die der Browser zum Absenden des Formulars verwendet. Dies überschreibt das [`method`](/de/docs/Web/HTML/Element/form#method) Attribut des übergeordneten Formulars.

- [`formNoValidate`](/de/docs/Web/API/HTMLInputElement/formNoValidate)

  - : Ein boolean, der das [`formnovalidate`](/de/docs/Web/HTML/Element/input#formnovalidate) Attribut des Elements darstellt und angibt, dass das Formular beim Absenden nicht validiert werden soll. Dies überschreibt das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate) Attribut des übergeordneten Formulars.

- [`formTarget`](/de/docs/Web/API/HTMLInputElement/formTarget)
  - : Ein String, der das [`formtarget`](/de/docs/Web/HTML/Element/input#formtarget) Attribut des Elements darstellt und einen Namen oder ein Schlüsselwort enthält, das angibt, wo die Antwort angezeigt werden soll, die nach dem Absenden des Formulars empfangen wird. Dies überschreibt das [`target`](/de/docs/Web/HTML/Element/form#target) Attribut des übergeordneten Formulars.

### Instanz-Eigenschaften, die für andere `input`-Elementtypen gelten, die nicht verborgen sind

- [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled)

  - : Ein boolean, der das [`disabled`](/de/docs/Web/HTML/Element/input#disabled) Attribut des Elements darstellt und angibt, dass die Steuerung nicht für Interaktionen verfügbar ist. Die Eingabewerte werden nicht mit dem Formular übermittelt. Siehe auch [`readonly`](/de/docs/Web/HTML/Element/input#readonly).

- [`required`](/de/docs/Web/API/HTMLInputElement/required)

  - : Ein boolean, der das [`required`](/de/docs/Web/HTML/Element/input#required) Attribut des Elements darstellt und angibt, dass der Benutzer einen Wert eingeben muss, bevor das Formular abgeschickt wird.

- [`validationMessage`](/de/docs/Web/API/HTMLInputElement/validationMessage) {{ReadOnlyInline}}

  - : Gibt eine lokalisierte Nachricht zurück, die die Validierungsbeschränkungen beschreibt, die die Steuerung nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn die Steuerung kein Kandidat für die Beschränkungsvalidierung ist ([`willValidate`](/de/docs/Web/API/HTMLObjectElement/willValidate) ist `false`) oder ihre Einschränkungen erfüllt. Dieser Wert kann mit der Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) festgelegt werden.

- [`validity`](/de/docs/Web/API/HTMLInputElement/validity) {{ReadOnlyInline}}

  - : Gibt den aktuellen Gültigkeitszustand des Elements zurück.

- [`willValidate`](/de/docs/Web/API/HTMLInputElement/willValidate) {{ReadOnlyInline}}
  - : Gibt zurück, ob das Element ein Kandidat für die Beschränkungsvalidierung ist. Es ist `false`, wenn es durch Bedingungen von der Beschränkungsvalidierung ausgeschlossen ist, einschließlich: sein `type` ist eines von `hidden`, `reset` oder `button`, es hat einen {{HTMLElement("datalist")}} Vorfahren oder seine `disabled` Eigenschaft ist `true`.

### Instanz-Eigenschaften, die nur für Elemente vom Typ checkbox oder radio gelten

- [`checked`](/de/docs/Web/API/HTMLInputElement/checked)

  - : Ein boolean, der den aktuellen Status des Elements darstellt.

- [`defaultChecked`](/de/docs/Web/API/HTMLInputElement/defaultChecked)

  - : Ein boolean, der den Standardstatus eines Radio-Buttons oder einer Checkbox darstellt, wie er ursprünglich im HTML spezifiziert wurde, das dieses Objekt erstellt hat.

- [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate)
  - : Ein boolean, der darstellt, ob die Checkbox oder der Radio-Button im unbestimmten Zustand ist. Bei Checkboxes bewirkt dies, dass das Erscheinungsbild der Checkbox in gewisser Weise verdeckt/graut, um anzuzeigen, dass ihr Zustand unbestimmt ist (nicht angekreuzt, aber auch nicht nicht angekreuzt). Dies beeinflusst nicht den Wert des `checked` Attributs und durch Klicken auf die Checkbox wird der Wert auf false gesetzt.

### Instanz-Eigenschaften, die nur für Elemente vom Typ image gelten

- [`alt`](/de/docs/Web/API/HTMLInputElement/alt)

  - : Ein String, der das [`alt`](/de/docs/Web/HTML/Element/input#alt) Attribut des Elements darstellt und einen alternativen Text enthält, der verwendet werden soll.

- [`height`](/de/docs/Web/API/HTMLInputElement/height)

  - : Ein String, der das [`height`](/de/docs/Web/HTML/Element/input#height) Attribut des Elements darstellt, das die Höhe des angezeigten Bildes für den Button definiert.

- [`src`](/de/docs/Web/API/HTMLInputElement/src)

  - : Ein String, der das [`src`](/de/docs/Web/HTML/Element/input#src) Attribut des Elements darstellt und eine URI für den Ort eines Bildes spezifiziert, das auf der grafischen Sende-Schaltfläche angezeigt wird.

- [`width`](/de/docs/Web/API/HTMLInputElement/width)
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Element/input#width) Attribut des Elements darstellt, das die Breite des angezeigten Bildes für den Button definiert.

### Instanz-Eigenschaften, die nur für Elemente vom Typ file gelten

- [`accept`](/de/docs/Web/API/HTMLInputElement/accept)

  - : Ein String, der das [`accept`](/de/docs/Web/HTML/Element/input#accept) Attribut des Elements darstellt und eine durch Kommas getrennte Liste von Dateitypen enthält, die ausgewählt werden können.

- [`capture`](/de/docs/Web/API/HTMLInputElement/capture)

  - : Ein String, der das [`capture`](/de/docs/Web/HTML/Element/input#capture) Attribut des Elements darstellt und die Medienaufnahme-Eingabemethode in Datei-Upload-Steuerelementen angibt.

- [`files`](/de/docs/Web/API/HTMLInputElement/files)

  - : Eine [`FileList`](/de/docs/Web/API/FileList), die die zum Hochladen ausgewählten Dateien darstellt.

- [`webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory)

  - : Ein boolean, der das [`webkitdirectory`](/de/docs/Web/HTML/Element/input#webkitdirectory) Attribut darstellt. Wenn `true`, akzeptiert die Dateiauswahl-Oberfläche nur Verzeichnisse anstelle von Dateien.

- [`webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries) {{ReadOnlyInline}}
  - : Beschreibt die derzeit ausgewählten Dateien oder Verzeichnisse.

### Instanz-Eigenschaften, die nur für sichtbare Elemente gelten, die Text oder Zahlen enthalten

- [`autocomplete`](/de/docs/Web/API/HTMLInputElement/autocomplete)

  - : Ein String, der das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete) Attribut des Elements darstellt und angibt, ob der Wert der Steuerung automatisch vom Browser vervollständigt werden kann.

- [`max`](/de/docs/Web/API/HTMLInputElement/max)

  - : Ein String, der das [`max`](/de/docs/Web/HTML/Element/input#max) Attribut des Elements darstellt und den maximalen (numerischen oder Datum-Uhrzeit-) Wert für diesen Artikel enthält, welcher nicht weniger als sein Minimum ([`min`](/de/docs/Web/HTML/Element/input#min) Attribut) Wert sein darf.

- [`maxLength`](/de/docs/Web/API/HTMLInputElement/maxLength)

  - : Eine Zahl, die das [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) Attribut des Elements darstellt und die maximale Anzahl von Zeichen (in Unicode-Codepunkten) enthält, die der Wert haben kann.

- [`min`](/de/docs/Web/API/HTMLInputElement/min)

  - : Ein String, der das [`min`](/de/docs/Web/HTML/Element/input#min) Attribut des Elements darstellt und den minimalen (numerischen oder Datum-Uhrzeit-) Wert für diesen Artikel enthält, welcher nicht größer als sein Maximum ([`max`](/de/docs/Web/HTML/Element/input#max) Attribut) Wert sein darf.

- [`minLength`](/de/docs/Web/API/HTMLInputElement/minLength)

  - : Eine Zahl, die das [`minlength`](/de/docs/Web/HTML/Element/input#minlength) Attribut des Elements darstellt und die minimale Anzahl von Zeichen (in Unicode-Codepunkten) enthält, die der Wert haben kann.

- [`pattern`](/de/docs/Web/API/HTMLInputElement/pattern)

  - : Ein String, der das [`pattern`](/de/docs/Web/HTML/Element/input#pattern) Attribut des Elements darstellt und einen regulären Ausdruck enthält, gegen den der Wert der Steuerung überprüft wird. Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title) Attribut, um das Muster zu beschreiben und dem Benutzer zu helfen. Dieses Attribut gilt nur, wenn der Wert des [`type`](/de/docs/Web/HTML/Element/input#type) Attributs `text`, `search`, `tel`, `url` oder `email` ist.

- [`placeholder`](/de/docs/Web/API/HTMLInputElement/placeholder)

  - : Ein String, der das [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) Attribut des Elements darstellt, welches einen Hinweis für den Benutzer enthält, was in die Steuerung eingegeben werden kann. Der Platzhaltertext darf keine Wagenrückläufe oder Zeilenumbrüche enthalten. Dieses Attribut gilt nur, wenn der Wert des [`type`](/de/docs/Web/HTML/Element/input#type) Attributs `text`, `search`, `tel`, `url` oder `email` ist.

- [`readOnly`](/de/docs/Web/API/HTMLInputElement/readOnly)

  - : Ein boolean, der das [`readonly`](/de/docs/Web/HTML/Element/input#readonly) Attribut des Elements darstellt und angibt, dass der Benutzer den Wert der Steuerung nicht ändern kann. Dies wird ignoriert, wenn der [`type`](/de/docs/Web/HTML/Element/input#type) `hidden`, `range`, `color`, `checkbox`, `radio`, `file` oder ein Button-Typ ist.

- [`selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection)

  - : Ein String, der die Richtung darstellt, in der die Auswahl erfolgt ist. Mögliche Werte sind: `forward` (die Auswahl wurde in der Start-Zu-Ende-Richtung der aktuellen Sprache durchgeführt), `backward` (die entgegengesetzte Richtung) oder `none` (die Richtung ist unbekannt).

- [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd)

  - : Eine Zahl, die den Endindex des ausgewählten Textes darstellt. Wenn nichts ausgewählt ist, gibt dies den Offset des Zeichens zurück, das unmittelbar nach der aktuellen Texteingabe-Cursorposition folgt.

- [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart)

  - : Eine Zahl, die den Anfangsindex des ausgewählten Textes darstellt. Wenn nichts ausgewählt ist, gibt dies die Position des Texteingabe-Cursors (Caret) innerhalb des {{HTMLElement("input")}} Elements zurück.

- [`size`](/de/docs/Web/API/HTMLInputElement/size)
  - : Eine Zahl, die das [`size`](/de/docs/Web/HTML/Element/input#size) Attribut des Elements darstellt und die visuelle Größe der Steuerung enthält. Dieser Wert ist in Pixeln, es sei denn, der Wert von [`type`](/de/docs/Web/HTML/Element/input#type) ist `text` oder `password`, in diesem Fall ist es eine ganze Anzahl von Zeichen. Gilt nur, wenn [`type`](/de/docs/Web/HTML/Element/input#type) auf `text`, `search`, `tel`, `url`, `email` oder `password` gesetzt ist.

## Instanz-Methoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)

  - : Gibt einen boolean Wert zurück, der `false` ist, wenn das Element ein Kandidat für die Beschränkungsvalidierung ist und es seine Einschränkungen nicht erfüllt. In diesem Fall löst es auch ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis aus. Es gibt `true` zurück, wenn das Element kein Kandidat für die Beschränkungsvalidierung ist oder wenn es seine Einschränkungen erfüllt.

- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)

  - : Führt die Methode `checkValidity()` aus, und wenn sie `false` zurückgibt (für eine ungültige Eingabe oder wenn kein Musterattribut bereitgestellt wird), dann meldet es dem Benutzer, dass die Eingabe ungültig ist, genauso, als ob Sie ein Formular abgesendet hätten.

- [`select()`](/de/docs/Web/API/HTMLInputElement/select)

  - : Wählt den gesamten Text im `input`-Element aus und fokussiert es, sodass der Benutzer anschließend dessen gesamten Inhalt ersetzen kann.

- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)

  - : Setzt eine benutzerdefinierte Fehlermeldung für das Element. Wenn diese Meldung nicht der leere String ist, dann leidet das Element unter einem benutzerdefinierten Gültigkeitsfehler und wird nicht validiert.

- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)

  - : Ersetzt einen Textbereich im `input`-Element durch neuen Text.

- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)

  - : Wählt einen Bereich von Text im `input`-Element aus (aber fokussiert es nicht).

- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)

  - : Zeigt einen Browser-Auswahldialog für Datum, Uhrzeit, Farbe und Dateien.

- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)

  - : Verringert den [`value`](/de/docs/Web/HTML/Element/input#value) um ([`step`](/de/docs/Web/HTML/Element/input#step) \* n), wobei n standardmäßig 1 ist, wenn nicht angegeben.

- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den [`value`](/de/docs/Web/HTML/Element/input#value) um ([`step`](/de/docs/Web/HTML/Element/input#step) \* n), wobei n standardmäßig 1 ist, wenn nicht angegeben.

## Ereignisse

_Erbt auch Ereignisse von seiner Elternschnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisung eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle ab:

- [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis
  - : Ausgelöst, wenn ein Element seine Beschränkungen während der Beschränkungsvalidierung nicht erfüllt.
- [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignis {{Non-standard_Inline}}
  - : Ausgelöst, wenn eine Suche bei einem {{HTMLElement("input")}} vom Typ `search` initiiert wird.
- [`select`](/de/docs/Web/API/HTMLInputElement/select_event) Ereignis
  - : Ausgelöst, wenn Text ausgewählt wurde.
- [`selectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event) Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn die Textauswahl in einem {{HTMLElement("input")}}-Element geändert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das dieses Interface implementiert: {{ HTMLElement("input") }}
