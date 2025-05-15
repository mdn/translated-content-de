---
title: HTMLInputElement
slug: Web/API/HTMLInputElement
l10n:
  sourceCommit: a61be259435257328a25c462cb0f42bc91981a6f
---

{{APIRef("HTML DOM")}}

Das **`HTMLInputElement`** Interface bietet spezielle Eigenschaften und Methoden zum Manipulieren der Optionen, des Layouts und der Darstellung von {{HTMLElement("input")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Einige Eigenschaften gelten nur für Eingabeelementtypen, die die entsprechenden Attribute unterstützen.

- [`align`](/de/docs/Web/API/HTMLInputElement/align) {{Deprecated_Inline}}

  - : Ein String, der die Ausrichtung des Elements darstellt. _Verwenden Sie stattdessen CSS._

- [`defaultValue`](/de/docs/Web/API/HTMLInputElement/defaultValue)

  - : Ein String, der den Standardwert darstellt, wie er ursprünglich im HTML angegeben wurde, das dieses Objekt erstellt hat.

- [`dirName`](/de/docs/Web/API/HTMLInputElement/dirName)

  - : Ein String, der die Direktionalität des Elements darstellt.

- [`incremental`](/de/docs/Web/API/HTMLInputElement/incremental) {{Non-standard_Inline}}

  - : Ein Boolean, der den Suchereignis-Abfeuermodus darstellt, falls `true`, wird bei jedem Tastenanschlag oder beim Klicken auf die Abbrechentaste ein Ereignis ausgelöst; ansonsten wird beim Drücken der Taste <kbd>Enter</kbd> ausgelöst.

- [`labels`](/de/docs/Web/API/HTMLInputElement/labels) {{ReadOnlyInline}}

  - : Gibt eine Liste von {{ HTMLElement("label") }}-Elementen zurück, die Labels für dieses Element sind.

- [`list`](/de/docs/Web/API/HTMLInputElement/list) {{ReadOnlyInline}}

  - : Gibt das Element zurück, auf das durch das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut verwiesen wird. Die Eigenschaft kann `null` sein, wenn kein HTML-Element im selben Baum gefunden wird.

- [`multiple`](/de/docs/Web/API/HTMLInputElement/multiple)

  - : Ein Boolean, der das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut des Elements darstellt, das angibt, ob mehr als ein Wert möglich ist (z.B. mehrere Dateien).

- [`name`](/de/docs/Web/API/HTMLInputElement/name)

  - : Ein String, der das [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut des Elements repräsentiert und einen Namen enthält, der das Element beim Absenden des Formulars identifiziert.

- [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction)

  - : Ruft die Aktion ab und setzt sie, die auf einem Steuer-`popover`-Element auszuführen ist (`"hide"`, `"show"` oder `"toggle"`), das durch ein {{HTMLElement("input")}}-Element vom Typ `button` kontrolliert wird. Es reflektiert den Wert des [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/input#popovertargetaction)-HTML-Attributs.

- [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement)

  - : Ruft das Popover-Element ab und setzt es, um über ein {{HTMLElement("input")}}-Element vom Typ `button` zu kontrollieren. Das JavaScript-Äquivalent des [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/input#popovertarget)-HTML-Attributs.

- [`step`](/de/docs/Web/API/HTMLInputElement/step)

  - : Ein String, der das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut des Elements darstellt, was in Verbindung mit [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwendet wird, um die Schritte zu begrenzen, mit denen ein numerischer oder datum-/uhrzeitbezogener Wert festgelegt werden kann. Es kann der String `any` oder eine positive Gleitkommazahl sein. Wenn dies nicht auf `any` gesetzt ist, akzeptiert die Steuerung nur Werte in Vielfachen des Schrittwerts, die größer als das Minimum sind.

- [`type`](/de/docs/Web/API/HTMLInputElement/type)

  - : Ein String, der das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut des Elements darstellt, was den Anzeigetyp der Steuerung angibt. Für mögliche Werte siehe die Dokumentation für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut.

- [`useMap`](/de/docs/Web/API/HTMLInputElement/useMap) {{Deprecated_Inline}}

  - : Ein String, der eine clientseitige Bildkarte darstellt.

- [`value`](/de/docs/Web/API/HTMLInputElement/value)

  - : Ein String, der den aktuellen Wert der Steuerung darstellt. Wenn der Benutzer einen anderen als den erwarteten Wert eingibt, kann dies einen leeren String zurückgeben.

- [`valueAsDate`](/de/docs/Web/API/HTMLInputElement/valueAsDate)

  - : Ein {{jsxref("Date")}}, das den Wert des Elements darstellt, interpretiert als Datum, oder `null`, wenn die Umwandlung nicht möglich ist.

- [`valueAsNumber`](/de/docs/Web/API/HTMLInputElement/valueAsNumber)
  - : Eine Zahl, die den Wert des Elements repräsentiert, interpretiert als einer der folgenden, in Reihenfolge: Ein Zeitwert, eine Nummer oder `NaN`, wenn die Umwandlung unmöglich ist.

### Instanz-Eigenschaften in Bezug zum übergeordneten Formular

- [`form`](/de/docs/Web/API/HTMLInputElement/form) {{ReadOnlyInline}}

  - : Gibt eine Referenz auf das übergeordnete {{HTMLElement("form")}}-Element zurück.

- [`formAction`](/de/docs/Web/API/HTMLInputElement/formAction)

  - : Ein String, der das [`formaction`](/de/docs/Web/HTML/Reference/Elements/input#formaction)-Attribut des Elements darstellt, das die URL eines Programms enthält, das die vom Element übermittelten Informationen verarbeitet. Dies überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des übergeordneten Formulars.

- [`formEnctype`](/de/docs/Web/API/HTMLInputElement/formEnctype)

  - : Ein String, der das [`formenctype`](/de/docs/Web/HTML/Reference/Elements/input#formenctype)-Attribut des Elements darstellt, das den Inhaltstyp enthält, der verwendet wird, um das Formular an den Server zu übermitteln. Dies überschreibt das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des übergeordneten Formulars.

- [`formMethod`](/de/docs/Web/API/HTMLInputElement/formMethod)

  - : Ein String, der das [`formmethod`](/de/docs/Web/HTML/Reference/Elements/input#formmethod)-Attribut des Elements darstellt und die HTTP-Methode enthält, die der Browser verwendet, um das Formular zu übermitteln. Dies überschreibt das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des übergeordneten Formulars.

- [`formNoValidate`](/de/docs/Web/API/HTMLInputElement/formNoValidate)

  - : Ein Boolean, der das [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate)-Attribut des Elements darstellt, was angibt, dass das Formular nicht validiert wird, wenn es übermittelt wird. Dies überschreibt das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des übergeordneten Formulars.

- [`formTarget`](/de/docs/Web/API/HTMLInputElement/formTarget)
  - : Ein String, der das [`formtarget`](/de/docs/Web/HTML/Reference/Elements/input#formtarget)-Attribut des Elements darstellt, das einen Namen oder ein Schlüsselwort enthält, das angibt, wo die Antwort angezeigt wird, die nach der Übermittlung des Formulars empfangen wird. Dies überschreibt das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des übergeordneten Formulars.

### Instanz-Eigenschaften, die für jeden sichtbaren Eingabetyp gelten, der nicht verborgen ist

- [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled)

  - : Ein Boolean, der das [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled)-Attribut des Elements darstellt, das angibt, dass die Steuerung nicht für Interaktionen verfügbar ist. Die Eingabewerte werden nicht mit dem Formular übermittelt. Siehe auch [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly).

- [`required`](/de/docs/Web/API/HTMLInputElement/required)

  - : Ein Boolean, der das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut des Elements darstellt und angibt, dass der Benutzer einen Wert eingeben muss, bevor er ein Formular absenden kann.

- [`validationMessage`](/de/docs/Web/API/HTMLInputElement/validationMessage) {{ReadOnlyInline}}

  - : Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die die Steuerung nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn die Steuerung kein Kandidat für die Einschränkungsvalidierung ist ([`willValidate`](/de/docs/Web/API/HTMLInputElement/willValidate) ist `false`) oder wenn sie ihre Einschränkungen erfüllt. Dieser Wert kann durch die Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) festgelegt werden.

- [`validity`](/de/docs/Web/API/HTMLInputElement/validity) {{ReadOnlyInline}}

  - : Gibt den aktuellen Gültigkeitszustand des Elements zurück.

- [`willValidate`](/de/docs/Web/API/HTMLInputElement/willValidate) {{ReadOnlyInline}}
  - : Gibt zurück, ob das Element ein Kandidat für die Einschränkungsvalidierung ist. Es ist `false`, wenn eine der Bedingungen es von der Einschränkungsvalidierung ausschließt, einschließlich: sein `type` ist eines der `hidden`, `reset` oder `button`, es hat einen {{HTMLElement("datalist")}}-Vorfahren oder seine `disabled`-Eigenschaft ist `true`.

### Instanz-Eigenschaften, die nur für Elemente vom Typ Checkbox oder Radio gelten

- [`checked`](/de/docs/Web/API/HTMLInputElement/checked)

  - : Ein Boolean, der den aktuellen Zustand des Elements darstellt.

- [`defaultChecked`](/de/docs/Web/API/HTMLInputElement/defaultChecked)

  - : Ein Boolean, der den Standardzustand eines Optionsfelds oder einer Kontrollkästchen wie ursprünglich im HTML angegeben darstellt, das dieses Objekt erstellt hat.

- [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate)
  - : Ein Boolean, der darstellt, ob das Kontrollkästchen oder das Optionsfeld im unbestimmten Zustand ist. Für Kontrollkästchen hat dies zur Folge, dass das Erscheinungsbild des Kontrollkästchens auf irgendeine Weise verdeckt/grau angezeigt wird, um anzuzeigen, dass sein Zustand unbestimmt ist (nicht angekreuzt, aber auch nicht nicht angekreuzt). Beeinflusst nicht den Wert des `checked`-Attributs, und ein Klick auf das Kontrollkästchen setzt den Wert auf false.

### Instanz-Eigenschaften, die nur für Elemente vom Typ Bild gelten

- [`alt`](/de/docs/Web/API/HTMLInputElement/alt)

  - : Ein String, der das [`alt`](/de/docs/Web/HTML/Reference/Elements/input#alt)-Attribut des Elements darstellt und einen Alternativtext enthält, der verwendet werden soll.

- [`height`](/de/docs/Web/API/HTMLInputElement/height)

  - : Ein String, der das [`height`](/de/docs/Web/HTML/Reference/Elements/input#height)-Attribut des Elements darstellt, welches die Höhe des für den Button angezeigten Bildes definiert.

- [`src`](/de/docs/Web/API/HTMLInputElement/src)

  - : Ein String, der das [`src`](/de/docs/Web/HTML/Reference/Elements/input#src)-Attribut des Elements darstellt und einen URI für den Speicherort eines Bildes enthält, das auf der grafischen Senden-Schaltfläche angezeigt werden soll.

- [`width`](/de/docs/Web/API/HTMLInputElement/width)
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Reference/Elements/input#width)-Attribut des Elements darstellt, welches die Breite des für den Button angezeigten Bildes definiert.

### Instanz-Eigenschaften, die nur für Elemente vom Typ Datei gelten

- [`accept`](/de/docs/Web/API/HTMLInputElement/accept)

  - : Ein String, der das [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept)-Attribut des Elements darstellt und eine kommagetrennte Liste von Dateitypen enthält, die ausgewählt werden können.

- [`capture`](/de/docs/Web/API/HTMLInputElement/capture)

  - : Ein String, der das [`capture`](/de/docs/Web/HTML/Reference/Elements/input#capture)-Attribut des Elements darstellt und die Medienaufnahme-Eingabemethode in Datei-Upload-Steuerelementen angibt.

- [`files`](/de/docs/Web/API/HTMLInputElement/files)

  - : Eine [`FileList`](/de/docs/Web/API/FileList), die die für den Upload ausgewählten Dateien darstellt.

- [`webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory)

  - : Ein Boolean, der das [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input#webkitdirectory)-Attribut darstellt. Wenn `true`, akzeptiert die Dateisystemauswahl-Schnittstelle nur Verzeichnisse anstelle von Dateien.

- [`webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries) {{ReadOnlyInline}}
  - : Beschreibt die derzeit ausgewählten Dateien oder Verzeichnisse.

### Instanz-Eigenschaften, die nur für sichtbare Elemente mit Text oder Zahlen gelten

- [`autocomplete`](/de/docs/Web/API/HTMLInputElement/autocomplete)

  - : Ein String, der das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut des Elements darstellt und angibt, ob der Wert der Steuerung vom Browser automatisch ausgefüllt werden kann.

- [`max`](/de/docs/Web/API/HTMLInputElement/max)

  - : Ein String, der das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut des Elements darstellt und den maximalen (numerischen oder datum-/uhrzeitbezogenen) Wert für dieses Element enthält, der nicht kleiner sein darf als sein Mindestwert ([`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attribut).

- [`maxLength`](/de/docs/Web/API/HTMLInputElement/maxLength)

  - : Eine Zahl, die das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribut des Elements darstellt und die maximale Anzahl von Zeichen (in Unicode-Codepunkten) enthält, die der Wert haben kann.

- [`min`](/de/docs/Web/API/HTMLInputElement/min)

  - : Ein String, der das [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attribut des Elements darstellt und den minimalen (numerischen oder datum-/uhrzeitbezogenen) Wert für dieses Element enthält, der nicht größer sein darf als sein Maximalwert ([`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut).

- [`minLength`](/de/docs/Web/API/HTMLInputElement/minLength)

  - : Eine Zahl, die das [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut des Elements darstellt und die minimale Anzahl von Zeichen (in Unicode-Codepunkten) enthält, die der Wert haben kann.

- [`pattern`](/de/docs/Web/API/HTMLInputElement/pattern)

  - : Ein String, der das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut des Elements darstellt und einen regulären Ausdruck enthält, gegen den der Wert der Steuerung überprüft wird. Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um das Muster zu beschreiben, um dem Benutzer zu helfen. Dieses Attribut gilt nur, wenn der Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs `text`, `search`, `tel`, `url` oder `email` ist.

- [`placeholder`](/de/docs/Web/API/HTMLInputElement/placeholder)

  - : Ein String, der das [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attribut des Elements darstellt und einen Hinweis für den Benutzer enthält, was in das Steuerelement eingegeben werden kann. Der Platzhaltertext darf keine Wagenrückläufe oder Zeilenwechsel enthalten. Dieses Attribut gilt nur, wenn der Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs `text`, `search`, `tel`, `url` oder `email` ist.

- [`readOnly`](/de/docs/Web/API/HTMLInputElement/readOnly)

  - : Ein Boolean, der das [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly)-Attribut des Elements darstellt, was angibt, dass der Benutzer den Wert der Steuerung nicht ändern kann. Dies wird ignoriert, wenn der [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `hidden`, `range`, `color`, `checkbox`, `radio`, `file` oder ein Button-Typ ist.

- [`selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection)

  - : Ein String, der die Richtung angibt, in der die Auswahl erfolgt ist. Mögliche Werte sind: `forward` (die Auswahl wurde in der Start-zum-Ende-Richtung der aktuellen Lokalisierung durchgeführt), `backward` (die entgegengesetzte Richtung) oder `none` (die Richtung ist unbekannt).

- [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd)

  - : Eine Zahl, die den Endindex des ausgewählten Textes darstellt. Wenn keine Auswahl vorhanden ist, gibt dies den Versatz des Zeichens direkt hinter der aktuellen Textcursorposition zurück.

- [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart)

  - : Eine Zahl, die den Anfangsindex des ausgewählten Textes darstellt. Wenn nichts ausgewählt ist, gibt dies die Position des Texteingabecursors (Caret) innerhalb des {{HTMLElement("input")}}-Elements zurück.

- [`size`](/de/docs/Web/API/HTMLInputElement/size)
  - : Eine Zahl, die das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut des Elements darstellt und die visuelle Größe der Steuerung enthält. Dieser Wert ist in Pixeln, es sei denn, der Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) ist `text` oder `password`, in diesem Fall ist es eine ganzzahlige Anzahl von Zeichen. Gilt nur, wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) auf `text`, `search`, `tel`, `url`, `email` oder `password` gesetzt ist.

## Instanz-Methoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)

  - : Gibt einen Boolean-Wert zurück, der `false` ist, wenn das Element ein Kandidat für die Einschränkungsvalidierung ist und seine Einschränkungen nicht erfüllt. In diesem Fall wird auch ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element ausgelöst. Es gibt `true` zurück, wenn das Element kein Kandidat für die Einschränkungsvalidierung ist oder wenn es seine Einschränkungen erfüllt.

- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)

  - : Führt die Methode `checkValidity()` aus und meldet dem Benutzer, dass die Eingabe ungültig ist, auf die gleiche Weise, als ob man ein Formular übermittelt hätte, wenn sie `false` zurückgibt (für eine ungültige Eingabe oder kein übergebenes Pattern-Attribut).

- [`select()`](/de/docs/Web/API/HTMLInputElement/select)

  - : Wählt den gesamten Text im Eingabeelement aus und fokussiert es, damit der Benutzer anschließend den gesamten Inhalt ersetzen kann.

- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)

  - : Setzt eine benutzerdefinierte Fehlermeldung für das Element. Wenn diese Nachricht nicht der leere String ist, leidet das Element an einem benutzerdefinierten Validitätsfehler und wird nicht validiert.

- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)

  - : Ersetzt einen Textbereich im Eingabeelement durch neuen Text.

- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)

  - : Wählt einen Textbereich im Eingabeelement aus (fokussiert es jedoch nicht).

- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)

  - : Zeigt einen Browser-Auswahldialog für Datum, Zeit, Farbe und Dateien an.

- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)

  - : Verringert den [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) um ([`step`](/de/docs/Web/HTML/Reference/Elements/input#step) \* n), wobei n standardmäßig 1 ist, falls nicht angegeben.

- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) um ([`step`](/de/docs/Web/HTML/Reference/Elements/input#step) \* n), wobei n standardmäßig 1 ist, falls nicht angegeben.

## Ereignisse

_Erbt auch Ereignisse von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisung eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieses Interfaces gehört werden:

- [`cancel`](/de/docs/Web/API/HTMLInputElement/cancel_event) Ereignis
  - : Wird ausgelöst, wenn der Benutzer den Datei-Auswahldialog über die Taste <kbd>Esc</kbd> oder die Abbrechen-Schaltfläche abbricht und wenn der Benutzer dieselben Dateien erneut auswählt, die zuvor ausgewählt wurden.
- [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis
  - : Wird ausgelöst, wenn ein Element seine Einschränkungen während der Einschränkungsvalidierung nicht erfüllt.
- [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignis {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn eine Suche über ein {{HTMLElement("input")}} von `type="search"` gestartet wird.
- [`select`](/de/docs/Web/API/HTMLInputElement/select_event) Ereignis
  - : Wird ausgelöst, wenn ein Text ausgewählt wurde.
- [`selectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event) Ereignis
  - : Wird ausgelöst, wenn sich die Textauswahl in einem {{HTMLElement("input")}}-Element geändert hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das dieses Interface implementiert: {{HTMLElement("input")}}
