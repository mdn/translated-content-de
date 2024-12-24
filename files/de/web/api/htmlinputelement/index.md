---
title: HTMLInputElement
slug: Web/API/HTMLInputElement
l10n:
  sourceCommit: 879db96bee7cd8301bbc38d326d9b905ae4493d1
---

{{APIRef("HTML DOM")}}

Das **`HTMLInputElement`**-Interface bietet spezielle Eigenschaften und Methoden zum Manipulieren der Optionen, des Layouts und der Darstellung von {{HTMLElement("input")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Einige Eigenschaften gelten nur für `input`-Elementtypen, die die entsprechenden Attribute unterstützen.

- [`align`](/de/docs/Web/API/HTMLInputElement/align) {{Deprecated_Inline}}

  - : Ein String, der die Ausrichtung des Elements darstellt. _Verwenden Sie stattdessen CSS._

- [`defaultValue`](/de/docs/Web/API/HTMLInputElement/defaultValue)

  - : Ein String, der den ursprünglichen Standardwert darstellt, wie er im HTML angegeben wurde, das dieses Objekt erstellt hat.

- [`dirName`](/de/docs/Web/API/HTMLInputElement/dirName)

  - : Ein String, der die Direktionalität des Elements darstellt.

- [`incremental`](/de/docs/Web/API/HTMLInputElement/incremental) {{Non-standard_Inline}}

  - : Ein boolescher Wert, der den Modus des `search`-Ereignisfeuers darstellt. Wenn `true`, wird bei jedem Tastendruck oder Klicken auf die Abbrechen-Schaltfläche ausgelöst; andernfalls, beim Drücken der <kbd>Enter</kbd>-Taste.

- [`labels`](/de/docs/Web/API/HTMLInputElement/labels) {{ReadOnlyInline}}

  - : Gibt eine Liste von {{ HTMLElement("label") }}-Elementen zurück, die Beschriftungen für dieses Element sind.

- [`list`](/de/docs/Web/API/HTMLInputElement/list) {{ReadOnlyInline}}

  - : Gibt das durch das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut angegebene Element zurück. Die Eigenschaft kann `null` sein, wenn kein HTML-Element im gleichen Baum gefunden wurde.

- [`multiple`](/de/docs/Web/API/HTMLInputElement/multiple)

  - : Ein boolescher Wert, der das [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut des Elements darstellt und angibt, ob mehr als ein Wert möglich ist (z.B. mehrere Dateien).

- [`name`](/de/docs/Web/API/HTMLInputElement/name)

  - : Ein String, der das [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut des Elements darstellt und einen Namen enthält, der das Element beim Absenden des Formulars identifiziert.

- [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction)

  - : Ruft die Aktion ab und setzt sie, die auf ein von einem {{HTMLElement("input")}}-Element des Typs `button` gesteuertes Popover-Element ausgeführt werden soll (`"hide"`, `"show"`, oder `"toggle"`). Es spiegelt den Wert des [`popovertargetaction`](/de/docs/Web/HTML/Element/input#popovertargetaction)-HTML-Attributs wider.

- [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement)

  - : Ruft das durch ein {{HTMLElement("input")}}-Element des Typs `button` zu steuernde Popover-Element ab und setzt es. Das JavaScript-Äquivalent des [`popovertarget`](/de/docs/Web/HTML/Element/input#popovertarget)-HTML-Attributs.

- [`step`](/de/docs/Web/API/HTMLInputElement/step)

  - : Ein String, der das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut des Elements darstellt, das zusammen mit [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) die Inkremente beschränkt, bei denen ein numerischer oder datums-/uhrzeitbezogener Wert gesetzt werden kann. Dies kann der String `any` oder eine positive Gleitkommazahl sein. Wenn dies nicht auf `any` gesetzt ist, akzeptiert die Steuerung nur Werte als Vielfache des Schrittwertes, die größer als das Minimum sind.

- [`type`](/de/docs/Web/API/HTMLInputElement/type)

  - : Ein String, der das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut des Elements darstellt und den Typ der anzuzeigenden Steuerung angibt. Für mögliche Werte siehe die Dokumentation zum [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut.

- [`useMap`](/de/docs/Web/API/HTMLInputElement/useMap) {{Deprecated_Inline}}

  - : Ein String, der eine clientseitige Bildkarte darstellt.

- [`value`](/de/docs/Web/API/HTMLInputElement/value)

  - : Ein String, der den aktuellen Wert der Steuerung darstellt. Wenn der Benutzer einen anderen als den erwarteten Wert eingibt, kann dies einen leeren String zurückgeben.

- [`valueAsDate`](/de/docs/Web/API/HTMLInputElement/valueAsDate)

  - : Ein {{jsxref("Date")}}, der den Wert des Elements darstellt, als Datum interpretiert, oder `null`, wenn die Umwandlung nicht möglich ist.

- [`valueAsNumber`](/de/docs/Web/API/HTMLInputElement/valueAsNumber)
  - : Eine Zahl, die den Wert des Elements darstellt, interpretiert als eines der folgenden, in der Reihenfolge: Ein Zeitwert, eine Zahl oder `NaN`, wenn die Umwandlung unmöglich ist.

### Instanz-Eigenschaften im Zusammenhang mit dem übergeordneten Formular

- [`form`](/de/docs/Web/API/HTMLInputElement/form) {{ReadOnlyInline}}

  - : Gibt eine Referenz auf das übergeordnete {{HTMLElement("form")}}-Element zurück.

- [`formAction`](/de/docs/Web/API/HTMLInputElement/formAction)

  - : Ein String, der das [`formaction`](/de/docs/Web/HTML/Element/input#formaction)-Attribut des Elements darstellt und die URL eines Programms enthält, das Informationen verarbeitet, die durch das Element übermittelt werden. Dies überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des übergeordneten Formulars.

- [`formEnctype`](/de/docs/Web/API/HTMLInputElement/formEnctype)

  - : Ein String, der das [`formenctype`](/de/docs/Web/HTML/Element/input#formenctype)-Attribut des Elements darstellt, das den Typ des Inhalts angibt, der verwendet wird, um das Formular an den Server zu senden. Dies überschreibt das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des übergeordneten Formulars.

- [`formMethod`](/de/docs/Web/API/HTMLInputElement/formMethod)

  - : Ein String, der das [`formmethod`](/de/docs/Web/HTML/Element/input#formmethod)-Attribut des Elements darstellt, welches die HTTP-Methode enthält, die der Browser verwendet, um das Formular zu senden. Dies überschreibt das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des übergeordneten Formulars.

- [`formNoValidate`](/de/docs/Web/API/HTMLInputElement/formNoValidate)

  - : Ein boolescher Wert, der das [`formnovalidate`](/de/docs/Web/HTML/Element/input#formnovalidate)-Attribut des Elements darstellt und angibt, dass das Formular nicht validiert werden soll, wenn es gesendet wird. Dies überschreibt das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des übergeordneten Formulars.

- [`formTarget`](/de/docs/Web/API/HTMLInputElement/formTarget)
  - : Ein String, der das [`formtarget`](/de/docs/Web/HTML/Element/input#formtarget)-Attribut des Elements darstellt und einen Namen oder ein Schlüsselwort enthält, das angibt, wo die Antwort angezeigt werden soll, die nach der Übermittlung des Formulars empfangen wurde. Dies überschreibt das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des übergeordneten Formulars.

### Instanz-Eigenschaften, die für jeden Typ von `input`-Element gelten, der nicht verborgen ist

- [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled)

  - : Ein boolescher Wert, der das [`disabled`](/de/docs/Web/HTML/Element/input#disabled)-Attribut des Elements darstellt, das angibt, dass die Steuerung nicht für Interaktionen verfügbar ist. Die Eingabewerte werden nicht mit dem Formular gesendet. Siehe auch [`readonly`](/de/docs/Web/HTML/Element/input#readonly).

- [`required`](/de/docs/Web/API/HTMLInputElement/required)

  - : Ein boolescher Wert, der das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut des Elements darstellt, das angibt, dass der Benutzer einen Wert eingeben muss, bevor er ein Formular absendet.

- [`validationMessage`](/de/docs/Web/API/HTMLInputElement/validationMessage) {{ReadOnlyInline}}

  - : Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die die Steuerung nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn die Steuerung kein Kandidat für die Einschränkungsvalidierung ist ([`willValidate`](/de/docs/Web/API/HTMLInputElement/willValidate) ist `false`) oder sie ihre Einschränkungen erfüllt. Dieser Wert kann durch die [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)-Methode gesetzt werden.

- [`validity`](/de/docs/Web/API/HTMLInputElement/validity) {{ReadOnlyInline}}

  - : Gibt den aktuellen Gültigkeitsstatus des Elements zurück.

- [`willValidate`](/de/docs/Web/API/HTMLInputElement/willValidate) {{ReadOnlyInline}}
  - : Gibt zurück, ob das Element ein Kandidat für Einschränkungsvalidierung ist. Es ist `false`, wenn irgendwelche Bedingungen es von Einschränkungsvalidierung ausschließen, einschließlich: sein `type` ist `hidden`, `reset` oder `button`, es hat einen {{HTMLElement("datalist")}}-Vorfahren oder seine `disabled`-Eigenschaft ist `true`.

### Instanz-Eigenschaften, die nur für Elemente des Typs `checkbox` oder `radio` gelten

- [`checked`](/de/docs/Web/API/HTMLInputElement/checked)

  - : Ein boolescher Wert, der den aktuellen Zustand des Elements darstellt.

- [`defaultChecked`](/de/docs/Web/API/HTMLInputElement/defaultChecked)

  - : Ein boolescher Wert, der den Standardzustand einer Radio-Schaltfläche oder eines Kontrollkästchens darstellt, wie ursprünglich im HTML angegeben, das dieses Objekt erstellt hat.

- [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate)
  - : Ein boolescher Wert, der angibt, ob das Kontrollkästchen oder die Radio-Schaltfläche in einem unbestimmten Zustand ist. Für Kontrollkästchen bedeutet dies, dass das Erscheinungsbild des Kontrollkästchens irgendwie verdeckt/ausgegraut ist, um anzuzeigen, dass sein Zustand unbestimmt ist (nicht aktiviert, aber auch nicht deaktiviert). Beeinflusst nicht den Wert des `checked`-Attributs und das Klicken auf das Kontrollkästchen setzt den Wert auf `false`.

### Instanz-Eigenschaften, die nur für Elemente des Typs `image` gelten

- [`alt`](/de/docs/Web/API/HTMLInputElement/alt)

  - : Ein String, der das [`alt`](/de/docs/Web/HTML/Element/input#alt)-Attribut des Elements darstellt und alternativen Text enthält, der verwendet werden soll.

- [`height`](/de/docs/Web/API/HTMLInputElement/height)

  - : Ein String, der das [`height`](/de/docs/Web/HTML/Element/input#height)-Attribut des Elements darstellt, das die Höhe des für die Schaltfläche angezeigten Bildes definiert.

- [`src`](/de/docs/Web/API/HTMLInputElement/src)

  - : Ein String, der das [`src`](/de/docs/Web/HTML/Element/input#src)-Attribut des Elements darstellt, das eine URI für den Standort eines Bildes angibt, das auf der grafischen Senden-Schaltfläche angezeigt werden soll.

- [`width`](/de/docs/Web/API/HTMLInputElement/width)
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Element/input#width)-Attribut des Elements darstellt, das die Breite des für die Schaltfläche angezeigten Bildes definiert.

### Instanz-Eigenschaften, die nur für Elemente des Typs `file` gelten

- [`accept`](/de/docs/Web/API/HTMLInputElement/accept)

  - : Ein String, der das [`accept`](/de/docs/Web/HTML/Element/input#accept)-Attribut des Elements darstellt und eine durch Kommas getrennte Liste von Dateitypen enthält, die ausgewählt werden können.

- [`capture`](/de/docs/Web/API/HTMLInputElement/capture)

  - : Ein String, der das [`capture`](/de/docs/Web/HTML/Element/input#capture)-Attribut des Elements darstellt, das die Mediendateneingabemethode in Datei-Upload-Steuerelementen angibt.

- [`files`](/de/docs/Web/API/HTMLInputElement/files)

  - : Ein [`FileList`](/de/docs/Web/API/FileList), das die für den Upload ausgewählten Dateien darstellt.

- [`webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory)

  - : Ein boolescher Wert, der das [`webkitdirectory`](/de/docs/Web/HTML/Element/input#webkitdirectory)-Attribut darstellt. Wenn `true`, akzeptiert die Dateisystemauswahloberfläche nur Verzeichnisse statt Dateien.

- [`webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries) {{ReadOnlyInline}}
  - : Beschreibt die aktuell ausgewählten Dateien oder Verzeichnisse.

### Instanz-Eigenschaften, die nur für sichtbare Elemente mit Text oder Zahlen gelten

- [`autocomplete`](/de/docs/Web/API/HTMLInputElement/autocomplete)

  - : Ein String, der das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Attribut des Elements darstellt und angibt, ob der Wert der Steuerung vom Browser automatisch vervollständigt werden kann.

- [`max`](/de/docs/Web/API/HTMLInputElement/max)

  - : Ein String, der das [`max`](/de/docs/Web/HTML/Element/input#max)-Attribut des Elements darstellt und den maximalen (numerischen oder datums-/uhrzeitbezogenen) Wert für dieses Element enthält, der nicht geringer als sein Mindestwert ([`min`](/de/docs/Web/HTML/Element/input#min)-Attribut) sein darf.

- [`maxLength`](/de/docs/Web/API/HTMLInputElement/maxLength)

  - : Eine Zahl, die das [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribut des Elements darstellt und die maximale Anzahl von Zeichen (in Unicode-Codepunkten) enthält, die der Wert haben kann.

- [`min`](/de/docs/Web/API/HTMLInputElement/min)

  - : Ein String, der das [`min`](/de/docs/Web/HTML/Element/input#min)-Attribut des Elements darstellt und den minimalen (numerischen oder datums-/uhrzeitbezogenen) Wert für dieses Element enthält, der nicht größer als sein Maximalwert ([`max`](/de/docs/Web/HTML/Element/input#max)-Attribut) sein darf.

- [`minLength`](/de/docs/Web/API/HTMLInputElement/minLength)

  - : Eine Zahl, die das [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut des Elements darstellt und die minimale Anzahl von Zeichen (in Unicode-Codepunkten) enthält, die der Wert haben kann.

- [`pattern`](/de/docs/Web/API/HTMLInputElement/pattern)

  - : Ein String, der das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut des Elements darstellt und einen regulären Ausdruck enthält, gegen den der Wert der Steuerung überprüft wird. Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um das Muster zu beschreiben, um dem Benutzer zu helfen. Dieses Attribut gilt nur, wenn der Wert des [`type`](/de/docs/Web/HTML/Element/input#type)-Attributs `text`, `search`, `tel`, `url` oder `email` ist.

- [`placeholder`](/de/docs/Web/API/HTMLInputElement/placeholder)

  - : Ein String, der das [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attribut des Elements darstellt und einen Hinweis für den Benutzer enthält, was in die Steuerung eingegeben werden kann. Der Platzhaltertext darf keine Wagenrückläufe oder Zeilenumbrüche enthalten. Dieses Attribut gilt nur, wenn der Wert des [`type`](/de/docs/Web/HTML/Element/input#type)-Attributs `text`, `search`, `tel`, `url` oder `email` ist.

- [`readOnly`](/de/docs/Web/API/HTMLInputElement/readOnly)

  - : Ein boolescher Wert, der das [`readonly`](/de/docs/Web/HTML/Element/input#readonly)-Attribut des Elements darstellt und angibt, dass der Benutzer den Wert der Steuerung nicht ändern kann. Dies wird ignoriert, wenn der [`type`](/de/docs/Web/HTML/Element/input#type) `hidden`, `range`, `color`, `checkbox`, `radio`, `file` oder ein Schaltflächentyp ist.

- [`selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection)

  - : Ein String, der die Richtung angibt, in die die Auswahl erfolgt ist. Mögliche Werte sind: `forward` (die Auswahl wurde in der von Anfang zu Ende gerichteten Richtung des aktuellen Gebietsschemas vorgenommen), `backward` (die entgegengesetzte Richtung) oder `none` (die Richtung ist unbekannt).

- [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd)

  - : Eine Zahl, die den Endindex des ausgewählten Textes darstellt. Wenn keine Auswahl besteht, gibt dies den Offset des Zeichens unmittelbar nach der aktuellen Textcursor-Position zurück.

- [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart)

  - : Eine Zahl, die den Anfangsindex des ausgewählten Textes darstellt. Wenn nichts ausgewählt ist, wird damit die Position des Texteingabe-Cursors (Caret) innerhalb des {{HTMLElement("input")}}-Elements zurückgegeben.

- [`size`](/de/docs/Web/API/HTMLInputElement/size)
  - : Eine Zahl, die das [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut des Elements darstellt und die visuelle Größe der Steuerung enthält. Dieser Wert ist in Pixel, es sei denn, der Wert von [`type`](/de/docs/Web/HTML/Element/input#type) ist `text` oder `password`, in welchem Fall er eine ganze Anzahl von Zeichen ist. Gilt nur, wenn [`type`](/de/docs/Web/HTML/Element/input#type) auf `text`, `search`, `tel`, `url`, `email` oder `password` gesetzt ist.

## Instanz-Methoden

_Erbt auch Methoden von seiner Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)

  - : Gibt einen booleschen Wert zurück, der `false` ist, wenn das Element ein Kandidat für Einschränkungsvalidierung ist und seine Einschränkungen nicht erfüllt. In diesem Fall löst es auch ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus. Es gibt `true` zurück, wenn das Element kein Kandidat für Einschränkungsvalidierung ist oder seine Einschränkungen erfüllt.

- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)

  - : Führt die `checkValidity()`-Methode aus und meldet dem Benutzer, dass die Eingabe ungültig ist, falls sie `false` zurückgibt (für eine ungültige Eingabe oder kein bereitgestelltes Muster-Attribut), auf die gleiche Weise, als ob Sie ein Formular gesendet hätten.

- [`select()`](/de/docs/Web/API/HTMLInputElement/select)

  - : Wählt den gesamten Text im `input`-Element aus und fokussiert es, sodass der Benutzer anschließend den gesamten Inhalt ersetzen kann.

- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)

  - : Setzt eine benutzerdefinierte Fehlermeldung für das Element. Wenn diese Nachricht nicht der leere String ist, leidet das Element an einem benutzerdefinierten Gültigkeitsfehler und wird nicht validiert.

- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)

  - : Ersetzt einen Textbereich im `input`-Element durch neuen Text.

- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)

  - : Wählt einen Bereich von Text im `input`-Element aus (aber fokussiert ihn nicht).

- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)

  - : Zeigt eine Browser-Auswahl für Datum, Zeit, Farbe und Dateien an.

- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)

  - : Verringert den [`value`](/de/docs/Web/HTML/Element/input#value) um ([`step`](/de/docs/Web/HTML/Element/input#step) \* n), wobei n standardmäßig 1 ist, wenn nicht angegeben.

- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den [`value`](/de/docs/Web/HTML/Element/input#value) um ([`step`](/de/docs/Web/HTML/Element/input#step) \* n), wobei n standardmäßig 1 ist, wenn nicht angegeben.

## Ereignisse

_Erbt auch Ereignisse von seiner Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener auf die `oneventname`-Eigenschaft dieser Schnittstelle zuweisen:

- [`cancel`](/de/docs/Web/API/HTMLInputElement/cancel_event) Ereignis
  - : Wird ausgelöst, wenn der Benutzer den Dateiauswahl-Dialog über die <kbd>Esc</kbd>-Taste oder die Abbrechen-Schaltfläche schließt und wenn der Benutzer dieselben Dateien erneut auswählt, die zuvor ausgewählt wurden.
- [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis
  - : Wird ausgelöst, wenn ein Element während der Einschränkungsvalidierung seine Einschränkungen nicht erfüllt.
- [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignis {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn eine Suche auf einem {{HTMLElement("input")}} mit `type="search"` initiiert wird.
- [`select`](/de/docs/Web/API/HTMLInputElement/select_event) Ereignis
  - : Wird ausgelöst, wenn Text ausgewählt wurde.
- [`selectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event) Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn sich die Textauswahl in einem {{HTMLElement("input")}}-Element geändert hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das dieses Interface implementiert: {{HTMLElement("input")}}
