---
title: HTMLInputElement
slug: Web/API/HTMLInputElement
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

Das **`HTMLInputElement`** Interface bietet spezielle Eigenschaften und Methoden zur Manipulation der Optionen, des Layouts und der Darstellung von {{HTMLElement("input")}} Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von der übergeordneten Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Einige Eigenschaften gelten nur für Eingabetypen, die die entsprechenden Attribute unterstützen.

- [`align`](/de/docs/Web/API/HTMLInputElement/align) {{Deprecated_Inline}}

  - : Ein String, der die Ausrichtung des Elements darstellt. _Verwenden Sie stattdessen CSS._

- [`defaultValue`](/de/docs/Web/API/HTMLInputElement/defaultValue)

  - : Ein String, der den ursprünglich im HTML spezifizierten Standardwert darstellt, der dieses Objekt erstellt hat.

- [`dirName`](/de/docs/Web/API/HTMLInputElement/dirName)

  - : Ein String, der die Direktionalität des Elements darstellt.

- [`incremental`](/de/docs/Web/API/HTMLInputElement/incremental) {{Non-standard_Inline}}

  - : Ein Boolean, der den Modus des Auslösens des Suchereignisses darstellt; wenn `true`, wird es bei jedem Tastendruck oder beim Klicken auf die Abbrechen-Schaltfläche ausgelöst; andernfalls, wenn <kbd>Enter</kbd> gedrückt wird.

- [`labels`](/de/docs/Web/API/HTMLInputElement/labels) {{ReadOnlyInline}}

  - : Gibt eine Liste von {{ HTMLElement("label") }}-Elementen zurück, die Bezeichnungen für dieses Element sind.

- [`list`](/de/docs/Web/API/HTMLInputElement/list) {{ReadOnlyInline}}

  - : Gibt das Element zurück, auf das durch das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list) Attribut verwiesen wird. Die Eigenschaft kann `null` sein, wenn kein HTML-Element im selben Baum gefunden wird.

- [`multiple`](/de/docs/Web/API/HTMLInputElement/multiple)

  - : Ein Boolean, der das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) Attribut des Elements darstellt und angibt, ob mehr als ein Wert möglich ist (z.B. mehrere Dateien).

- [`name`](/de/docs/Web/API/HTMLInputElement/name)

  - : Ein String, der das [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) Attribut des Elements darstellt und einen Namen enthält, der das Element bei der Formularübermittlung identifiziert.

- [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction)

  - : Ruft die Aktion (`"hide"`, `"show"` oder `"toggle"`) ab und setzt sie, die auf einem Popover-Element ausgeführt werden soll, das von einem {{HTMLElement("input")}} Element vom Typ `type="button"` gesteuert wird. Es spiegelt den Wert des [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/input#popovertargetaction) HTML-Attributs wider.

- [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement)

  - : Ruft das Popover-Element ab und setzt es, das über ein {{HTMLElement("input")}} Element vom Typ `type="button"` gesteuert werden soll. Das JavaScript-Äquivalent des [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/input#popovertarget) HTML-Attributs.

- [`step`](/de/docs/Web/API/HTMLInputElement/step)

  - : Ein String, der das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step) Attribut des Elements darstellt, das zusammen mit [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwendet wird, um die Inkremente zu begrenzen, bei denen ein numerischer oder Datums-/Zeitwert festgelegt werden kann. Es kann der String `any` oder eine positive Fließkommazahl sein. Wenn dies nicht auf `any` eingestellt ist, akzeptiert die Steuerung nur Werte, die Vielfache des Schrittwerts sind, größer als das Minimum.

- [`type`](/de/docs/Web/API/HTMLInputElement/type)

  - : Ein String, der das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut des Elements darstellt und den Anzeigetyp der Steuerung angibt. Für mögliche Werte siehe die Dokumentation zum [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut.

- [`useMap`](/de/docs/Web/API/HTMLInputElement/useMap) {{Deprecated_Inline}}

  - : Ein String, der eine clientseitige Bildkarte darstellt.

- [`value`](/de/docs/Web/API/HTMLInputElement/value)

  - : Ein String, der den aktuellen Wert der Steuerung darstellt. Wenn der Benutzer einen anderen als den erwarteten Wert eingibt, kann dies einen leeren String zurückgeben.

- [`valueAsDate`](/de/docs/Web/API/HTMLInputElement/valueAsDate)

  - : Ein {{jsxref("Date")}}, der den Wert des Elements darstellt, interpretiert als Datum, oder `null`, wenn eine Umwandlung nicht möglich ist.

- [`valueAsNumber`](/de/docs/Web/API/HTMLInputElement/valueAsNumber)
  - : Eine Zahl, die den Wert des Elements darstellt, interpretiert als einer der folgenden Werte, in dieser Reihenfolge: Ein Zeitwert, eine Zahl oder `NaN`, wenn die Umwandlung unmöglich ist.

### Instanz-Eigenschaften in Bezug auf das übergeordnete Formular

- [`form`](/de/docs/Web/API/HTMLInputElement/form) {{ReadOnlyInline}}

  - : Gibt eine Referenz auf das übergeordnete {{HTMLElement("form")}} Element zurück.

- [`formAction`](/de/docs/Web/API/HTMLInputElement/formAction)

  - : Ein String, der das [`formaction`](/de/docs/Web/HTML/Reference/Elements/input#formaction) Attribut des Elements darstellt und die URL eines Programms enthält, das die vom Element übermittelten Informationen verarbeitet. Dies überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action) Attribut des übergeordneten Formulars.

- [`formEnctype`](/de/docs/Web/API/HTMLInputElement/formEnctype)

  - : Ein String, der das [`formenctype`](/de/docs/Web/HTML/Reference/Elements/input#formenctype) Attribut des Elements darstellt, das den Inhaltstyp enthält, der verwendet wird, um das Formular an den Server zu senden. Dies überschreibt das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype) Attribut des übergeordneten Formulars.

- [`formMethod`](/de/docs/Web/API/HTMLInputElement/formMethod)

  - : Ein String, der das [`formmethod`](/de/docs/Web/HTML/Reference/Elements/input#formmethod) Attribut des Elements darstellt, das die HTTP-Methode enthält, die der Browser verwendet, um das Formular zu übermitteln. Dies überschreibt das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method) Attribut des übergeordneten Formulars.

- [`formNoValidate`](/de/docs/Web/API/HTMLInputElement/formNoValidate)

  - : Ein Boolean, der das [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate) Attribut des Elements darstellt und angibt, dass das Formular bei der Übermittlung nicht validiert werden soll. Dies überschreibt das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate) Attribut des übergeordneten Formulars.

- [`formTarget`](/de/docs/Web/API/HTMLInputElement/formTarget)
  - : Ein String, der das [`formtarget`](/de/docs/Web/HTML/Reference/Elements/input#formtarget) Attribut des Elements darstellt und einen Namen oder ein Schlüsselwort enthält, das angibt, wo die Antwort angezeigt wird, die nach der Übermittlung des Formulars empfangen wird. Dies überschreibt das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target) Attribut des übergeordneten Formulars.

### Instanz-Eigenschaften, die auf jeden Eingabetyp zutreffen, der nicht versteckt ist

- [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled)

  - : Ein Boolean, der das [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled) Attribut des Elements darstellt und angibt, dass die Steuerung nicht zur Interaktion verfügbar ist. Die Eingabewerte werden nicht mit dem Formular übermittelt. Siehe auch [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly).

- [`required`](/de/docs/Web/API/HTMLInputElement/required)

  - : Ein Boolean, der das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) Attribut des Elements darstellt und angibt, dass der Benutzer einen Wert ausfüllen muss, bevor das Formular übermittelt wird.

- [`validationMessage`](/de/docs/Web/API/HTMLInputElement/validationMessage) {{ReadOnlyInline}}

  - : Gibt eine lokalisierte Nachricht zurück, die die Validierungsbeschränkungen beschreibt, die die Steuerung nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn die Steuerung kein Kandidat für die Beschränkungsvalidierung ist ([`willValidate`](/de/docs/Web/API/HTMLInputElement/willValidate) ist `false`), oder wenn sie ihre Beschränkungen erfüllt. Dieser Wert kann durch die Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) gesetzt werden.

- [`validity`](/de/docs/Web/API/HTMLInputElement/validity) {{ReadOnlyInline}}

  - : Gibt den aktuellen Gültigkeitszustand des Elements zurück.

- [`willValidate`](/de/docs/Web/API/HTMLInputElement/willValidate) {{ReadOnlyInline}}
  - : Gibt zurück, ob das Element ein Kandidat für die Beschränkungsvalidierung ist. Es ist `false`, wenn eine der Bedingungen es von der Beschränkungsvalidierung ausschließt, einschließlich: Ihr `type` ist einer von `hidden`, `reset` oder `button`, es hat einen {{HTMLElement("datalist")}} Vorfahren oder seine `disabled` Eigenschaft ist `true`.

### Instanz-Eigenschaften, die nur für Elemente des Typs checkbox oder radio gelten

- [`checked`](/de/docs/Web/API/HTMLInputElement/checked)

  - : Ein Boolean, der den aktuellen Zustand des Elements darstellt.

- [`defaultChecked`](/de/docs/Web/API/HTMLInputElement/defaultChecked)

  - : Ein Boolean, der den Standardzustand eines Optionsfelds oder Kontrollkästchens darstellt, wie er ursprünglich im HTML angegeben wurde, das dieses Objekt erstellt hat.

- [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate)
  - : Ein Boolean, der angibt, ob das Kontrollkästchen oder das Optionsfeld in einem unbestimmten Zustand ist. Bei Kontrollkästchen hat dies zur Folge, dass das Erscheinungsbild des Kontrollkästchens in irgendeiner Weise verdunkelt/ausgegraut wird, um seinen Zustand als unbestimmt anzuzeigen (nicht geprüft, aber nicht ungeprüft). Beeinflusst nicht den Wert des `checked` Attributs, und ein Klick auf das Kontrollkästchen setzt den Wert auf false.

### Instanz-Eigenschaften, die nur für Elemente des Typs image gelten

- [`alt`](/de/docs/Web/API/HTMLInputElement/alt)

  - : Ein String, der das [`alt`](/de/docs/Web/HTML/Reference/Elements/input#alt) Attribut des Elements darstellt und alternativen Text enthält, der verwendet werden soll.

- [`height`](/de/docs/Web/API/HTMLInputElement/height)

  - : Ein String, der das [`height`](/de/docs/Web/HTML/Reference/Elements/input#height) Attribut des Elements darstellt und die Höhe des für die Schaltfläche angezeigten Bildes definiert.

- [`src`](/de/docs/Web/API/HTMLInputElement/src)

  - : Ein String, der das [`src`](/de/docs/Web/HTML/Reference/Elements/input#src) Attribut des Elements darstellt, das eine URI für den Speicherort eines anzuzeigenden Bildes auf der grafischen Absenden-Schaltfläche angibt.

- [`width`](/de/docs/Web/API/HTMLInputElement/width)
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Reference/Elements/input#width) Attribut des Elements darstellt, das die Breite des für die Schaltfläche angezeigten Bildes definiert.

### Instanz-Eigenschaften, die nur für Elemente des Typs file gelten

- [`accept`](/de/docs/Web/API/HTMLInputElement/accept)

  - : Ein String, der das [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept) Attribut des Elements darstellt und eine durch Kommata getrennte Liste von Dateitypen enthält, die ausgewählt werden können.

- [`capture`](/de/docs/Web/API/HTMLInputElement/capture)

  - : Ein String, der das [`capture`](/de/docs/Web/HTML/Reference/Elements/input#capture) Attribut des Elements darstellt, das die Medienaufnahmeeingabemethode in Dateiupload-Steuerelementen angibt.

- [`files`](/de/docs/Web/API/HTMLInputElement/files)

  - : Eine [`FileList`](/de/docs/Web/API/FileList), die die zur Hochladung ausgewählten Dateien darstellt.

- [`webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory)

  - : Ein Boolean, der das [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input#webkitdirectory) Attribut darstellt. Wenn `true`, akzeptiert die Datei-/Verzeichnisauswahloberfläche nur Verzeichnisse anstelle von Dateien.

- [`webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries) {{ReadOnlyInline}}
  - : Beschreibt die derzeit ausgewählten Dateien oder Verzeichnisse.

### Instanz-Eigenschaften, die nur für sichtbare Elemente gelten, die Text oder Zahlen enthalten

- [`autocomplete`](/de/docs/Web/API/HTMLInputElement/autocomplete)

  - : Ein String, der das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete) Attribut des Elements darstellt, das angibt, ob der Wert der Steuerung automatisch vom Browser vervollständigt werden kann.

- [`max`](/de/docs/Web/API/HTMLInputElement/max)

  - : Ein String, der das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribut des Elements darstellt und den maximalen (numerischen oder datums-/zeitlichen) Wert für diesen Eintrag enthält, der nicht kleiner als sein minimaler ([`min`](/de/docs/Web/HTML/Reference/Elements/input#min) Attribut) Wert sein darf.

- [`maxLength`](/de/docs/Web/API/HTMLInputElement/maxLength)

  - : Eine Zahl, die das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) Attribut des Elements darstellt, das die maximale Anzahl von Zeichen (in Unicode-Codepunkten) enthält, die der Wert haben kann.

- [`min`](/de/docs/Web/API/HTMLInputElement/min)

  - : Ein String, der das [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) Attribut des Elements darstellt und den minimalen (numerischen oder datums-/zeitlichen) Wert für diesen Eintrag enthält, der nicht größer als sein maximaler ([`max`](/de/docs/Web/HTML/Reference/Elements/input#max) Attribut) Wert sein darf.

- [`minLength`](/de/docs/Web/API/HTMLInputElement/minLength)

  - : Eine Zahl, die das [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) Attribut des Elements darstellt, das die minimale Anzahl von Zeichen (in Unicode-Codepunkten) enthält, die der Wert haben kann.

- [`pattern`](/de/docs/Web/API/HTMLInputElement/pattern)

  - : Ein String, der das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) Attribut des Elements darstellt und einen regulären Ausdruck enthält, gegen den der Wert der Steuerung überprüft wird. Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title) Attribut, um das Muster zu beschreiben, um dem Benutzer zu helfen. Dieses Attribut gilt nur, wenn der Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attributs `text`, `search`, `tel`, `url` oder `email` ist.

- [`placeholder`](/de/docs/Web/API/HTMLInputElement/placeholder)

  - : Ein String, der das [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) Attribut des Elements darstellt und einen Hinweis darauf enthält, was in die Steuerung eingegeben werden kann. Der Platzhaltertext darf keine Wagenrückläufe oder Zeilenwechsel enthalten. Dieses Attribut gilt nur, wenn der Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attributs `text`, `search`, `tel`, `url` oder `email` ist.

- [`readOnly`](/de/docs/Web/API/HTMLInputElement/readOnly)

  - : Ein Boolean, der das [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly) Attribut des Elements darstellt und angibt, dass der Benutzer den Wert der Steuerung nicht ändern kann. Dies wird ignoriert, wenn der [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `hidden`, `range`, `color`, `checkbox`, `radio`, `file` oder eine Schaltflächentyp ist.

- [`selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection)

  - : Ein String, der die Richtung darstellt, in der die Auswahl erfolgt ist. Mögliche Werte sind: `forward` (die Auswahl wurde in der Anfang-zu-Ende-Richtung der aktuellen Sprache durchgeführt), `backward` (die entgegengesetzte Richtung) oder `none` (die Richtung ist unbekannt).

- [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd)

  - : Eine Zahl, die den Endindex des ausgewählten Textes darstellt. Wenn keine Auswahl getroffen wurde, gibt dies den Offset des Zeichens zurück, das sich unmittelbar nach der aktuellen Textcursor-Position befindet.

- [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart)

  - : Eine Zahl, die den Beginnindex des ausgewählten Textes darstellt. Wenn nichts ausgewählt ist, gibt dies die Position des Textcursors (der Einfügemarke) im {{HTMLElement("input")}} Element zurück.

- [`size`](/de/docs/Web/API/HTMLInputElement/size)
  - : Eine Zahl, die das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) Attribut des Elements darstellt und die visuelle Größe der Steuerung enthält. Dieser Wert ist in Pixeln, es sei denn, der Wert von [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) ist `text` oder `password`, in diesem Fall ist es eine ganze Anzahl von Zeichen. Gilt nur, wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) auf `text`, `search`, `tel`, `url`, `email` oder `password` gesetzt ist.

## Instanz-Methoden

_Erbt auch Methoden von der übergeordneten Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)

  - : Gibt einen Boolean-Wert zurück, der `false` ist, wenn das Element ein Kandidat für die Beschränkungsvalidierung ist und nicht seine Beschränkungen erfüllt. In diesem Fall löst es auch ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis am Element aus. Es gibt `true` zurück, wenn das Element kein Kandidat für die Beschränkungsvalidierung ist oder seine Beschränkungen erfüllt.

- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)

  - : Führt die Methode `checkValidity()` aus, und wenn sie `false` zurückgibt (für eine ungültige Eingabe oder wenn kein Musterattribut vorhanden ist), meldet es dem Benutzer auf die gleiche Weise, als ob Sie ein Formular übermittelt hätten, dass die Eingabe ungültig ist.

- [`select()`](/de/docs/Web/API/HTMLInputElement/select)

  - : Wählt den gesamten Text im Eingabeelement aus und fokussiert es, sodass der Benutzer anschließend seinen gesamten Inhalt ersetzen kann.

- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)

  - : Legt eine benutzerdefinierte Validitätsnachricht für das Element fest. Wenn diese Nachricht nicht der leere String ist, leidet das Element an einem benutzerdefinierten Validitätsfehler und wird nicht validiert.

- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)

  - : Ersetzt einen Textbereich im Eingabeelement durch neuen Text.

- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)

  - : Wählt einen Textbereich im Eingabeelement aus (fokussiert es jedoch nicht).

- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)

  - : Zeigt einen Browser-Auswahldialog für Datum, Uhrzeit, Farbe und Dateien an.

- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)

  - : Verringert den [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) um ([`step`](/de/docs/Web/HTML/Reference/Elements/input#step) \* n), wobei n standardmäßig 1 ist, wenn nicht angegeben.

- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) um ([`step`](/de/docs/Web/HTML/Reference/Elements/input#step) \* n), wobei n standardmäßig 1 ist, wenn nicht angegeben.

## Ereignisse

_Erbt auch Ereignisse von der übergeordneten Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Hören Sie diese Ereignisse mithilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuordnen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle:

- [`cancel`](/de/docs/Web/API/HTMLInputElement/cancel_event) event
  - : Ausgelöst, wenn der Benutzer das Dateiauswahldialogfeld über die <kbd>Esc</kbd>-Taste oder die Abbrechen-Schaltfläche abbricht und wenn der Benutzer dieselben Dateien erneut auswählt, die zuvor ausgewählt wurden.
- [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) event
  - : Ausgelöst, wenn ein Element seine Beschränkungen während der Beschränkungsvalidierung nicht erfüllt.
- [`search`](/de/docs/Web/API/HTMLInputElement/search_event) event {{Non-standard_Inline}}
  - : Ausgelöst, wenn eine Suche auf einem {{HTMLElement("input")}} vom Typ `type="search"` initiiert wird.
- [`select`](/de/docs/Web/API/HTMLInputElement/select_event) event
  - : Ausgelöst, wenn Text ausgewählt wurde.
- [`selectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event) event
  - : Wird ausgelöst, wenn die Textauswahl in einem {{HTMLElement("input")}} Element geändert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("input")}}
