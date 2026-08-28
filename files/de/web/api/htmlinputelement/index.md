---
title: HTMLInputElement
slug: Web/API/HTMLInputElement
l10n:
  sourceCommit: d19dec85109590176f946fcceef48c787d578b1e
---

{{APIRef("HTML DOM")}}

Die **`HTMLInputElement`** Schnittstelle bietet spezielle Eigenschaften und Methoden zur Manipulation der Optionen, des Layouts und der Darstellung von {{HTMLElement("input")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Einige Eigenschaften gelten nur für Eingabeelementtypen, die die entsprechenden Attribute unterstützen.

- [`align`](/de/docs/Web/API/HTMLInputElement/align) {{Deprecated_Inline}}
  - : Ein String, der die Ausrichtung des Elements darstellt. _Verwenden Sie stattdessen CSS._

- [`alpha`](/de/docs/Web/API/HTMLInputElement/alpha) {{experimental_inline}}
  - : Ein Boolean, der das [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha)-Attribut des Elements darstellt und anzeigt, ob die Alpha-Komponente der Farbe vom Endbenutzer manipuliert werden kann und nicht vollständig undurchsichtig sein muss.

- [`colorSpace`](/de/docs/Web/API/HTMLInputElement/colorSpace)
  - : Ein String, der das [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace)-Attribut des Elements darstellt und den {{Glossary("color_space", "Farbraum")}} der serialisierten CSS-Farbe angibt (sRGB oder display-p3).

- [`defaultValue`](/de/docs/Web/API/HTMLInputElement/defaultValue)
  - : Ein String, der den Standardwert darstellt, wie er ursprünglich im HTML angegeben wurde, das dieses Objekt erstellt hat.

- [`dirName`](/de/docs/Web/API/HTMLInputElement/dirName)
  - : Ein String, der die Richtung des Elements darstellt.

- [`incremental`](/de/docs/Web/API/HTMLInputElement/incremental) {{Non-standard_Inline}}
  - : Ein Boolean, der den Modus für das Auslösen des Suchevents darstellt. Wenn `true`, wird bei jedem Tastendruck oder beim Klicken auf die Abbrechen-Schaltfläche ausgelöst; andernfalls beim Drücken von <kbd>Enter</kbd>.

- [`labels`](/de/docs/Web/API/HTMLInputElement/labels) {{ReadOnlyInline}}
  - : Gibt eine Liste von {{HTMLElement("label")}}-Elementen zurück, die Etiketten für dieses Element sind.

- [`list`](/de/docs/Web/API/HTMLInputElement/list) {{ReadOnlyInline}}
  - : Gibt das Element zurück, auf das durch das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut verwiesen wird. Die Eigenschaft kann `null` sein, wenn kein HTML-Element im selben Baum gefunden wird.

- [`multiple`](/de/docs/Web/API/HTMLInputElement/multiple)
  - : Ein Boolean, der das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut des Elements darstellt und angibt, ob mehr als ein Wert möglich ist (z.B. mehrere Dateien).

- [`name`](/de/docs/Web/API/HTMLInputElement/name)
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut des Elements darstellt und einen Namen enthält, der das Element beim Absenden des Formulars identifiziert.

- [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction)
  - : Holt und setzt die auszuführende Aktion (`"hide"`, `"show"` oder `"toggle"`) für ein Popover-Element, das von einem {{HTMLElement("input")}}-Element vom Typ `type="button"` gesteuert wird. Es reflektiert den Wert des [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/input#popovertargetaction)-HTML-Attributs.

- [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement)
  - : Holt und setzt das Popover-Element, um es über ein {{HTMLElement("input")}}-Element vom Typ `type="button"` zu steuern. Das JavaScript-Äquivalent des [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/input#popovertarget)-HTML-Attributs.

- [`step`](/de/docs/Web/API/HTMLInputElement/step)
  - : Ein String, der das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut des Elements darstellt und mit [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) zusammenarbeitet, um die Schritte zu begrenzen, bei denen ein numerischer oder datumsbezogener Wert festgelegt werden kann. Es kann der String `any` oder eine positive Fließkommazahl sein. Wenn es nicht auf `any` gesetzt ist, akzeptiert das Steuerelement nur Werte bei Vielfachen des Schrittwerts, der größer als das Minimum ist.

- [`type`](/de/docs/Web/API/HTMLInputElement/type)
  - : Ein String, der das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut des Elements darstellt und den anzuzeigenden Steuerelementtyp angibt. Für mögliche Werte siehe die Dokumentation für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut.

- [`useMap`](/de/docs/Web/API/HTMLInputElement/useMap) {{Deprecated_Inline}}
  - : Ein String, der eine clientseitige Imagemap darstellt.

- [`value`](/de/docs/Web/API/HTMLInputElement/value)
  - : Ein String, der den aktuellen Wert des Steuerelements darstellt. Wenn der Benutzer einen Wert eingibt, der nicht dem erwarteten Wert entspricht, kann dies einen leeren String zurückgeben.

- [`valueAsDate`](/de/docs/Web/API/HTMLInputElement/valueAsDate)
  - : Ein {{jsxref("Date")}}, der den Wert des Elements als Datum darstellt oder `null`, wenn die Umwandlung nicht möglich ist.

- [`valueAsNumber`](/de/docs/Web/API/HTMLInputElement/valueAsNumber)
  - : Eine Zahl, die den Wert des Elements darstellt, interpretiert als einen der folgenden Werte, in der Reihenfolge: ein Zeitwert, eine Zahl oder `NaN`, wenn die Umwandlung unmöglich ist.

### Instanz-Eigenschaften in Bezug auf das übergeordnete Formular

- [`form`](/de/docs/Web/API/HTMLInputElement/form) {{ReadOnlyInline}}
  - : Gibt einen Verweis auf das übergeordnete {{HTMLElement("form")}}-Element zurück.

- [`formAction`](/de/docs/Web/API/HTMLInputElement/formAction)
  - : Ein String, der das [`formaction`](/de/docs/Web/HTML/Reference/Elements/input#formaction)-Attribut des Elements darstellt und die URL eines Programms enthält, das die vom Element übermittelten Informationen verarbeitet. Dies überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des übergeordneten Formulars.

- [`formEnctype`](/de/docs/Web/API/HTMLInputElement/formEnctype)
  - : Ein String, der das [`formenctype`](/de/docs/Web/HTML/Reference/Elements/input#formenctype)-Attribut des Elements darstellt und den Inhaltstyp enthält, der verwendet wird, um das Formular an den Server zu übermitteln. Dies überschreibt das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des übergeordneten Formulars.

- [`formMethod`](/de/docs/Web/API/HTMLInputElement/formMethod)
  - : Ein String, der das [`formmethod`](/de/docs/Web/HTML/Reference/Elements/input#formmethod)-Attribut des Elements darstellt und die HTTP-Methode enthält, die der Browser verwendet, um das Formular zu übermitteln. Dies überschreibt das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des übergeordneten Formulars.

- [`formNoValidate`](/de/docs/Web/API/HTMLInputElement/formNoValidate)
  - : Ein Boolean, der das [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate)-Attribut des Elements darstellt und angibt, dass das Formular bei der Übermittlung nicht validiert werden soll. Dies überschreibt das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des übergeordneten Formulars.

- [`formTarget`](/de/docs/Web/API/HTMLInputElement/formTarget)
  - : Ein String, der das [`formtarget`](/de/docs/Web/HTML/Reference/Elements/input#formtarget)-Attribut des Elements darstellt und einen Namen oder ein Schlüsselwort enthält, das angibt, wo die Antwort angezeigt werden soll, die nach dem Absenden des Formulars empfangen wird. Dies überschreibt das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des übergeordneten Formulars.

### Instanz-Eigenschaften, die für jeden nicht ausgeblendeten Eingabetyp gelten

- [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled)
  - : Ein Boolean, der das [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled)-Attribut des Elements darstellt und anzeigt, dass das Steuerelement nicht zur Interaktion verfügbar ist. Die Eingabewerte werden nicht mit dem Formular übermittelt. Siehe auch [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly).

- [`required`](/de/docs/Web/API/HTMLInputElement/required)
  - : Ein Boolean, der das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut des Elements darstellt und angibt, dass der Benutzer einen Wert eingeben muss, bevor das Formular abgeschickt wird.

- [`validationMessage`](/de/docs/Web/API/HTMLInputElement/validationMessage) {{ReadOnlyInline}}
  - : Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn das Steuerelement kein Kandidat für die Validierung von Einschränkungen ist ([`willValidate`](/de/docs/Web/API/HTMLInputElement/willValidate) ist `false`) oder es seine Einschränkungen erfüllt. Dieser Wert kann durch die Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) festgelegt werden.

- [`validity`](/de/docs/Web/API/HTMLInputElement/validity) {{ReadOnlyInline}}
  - : Gibt den aktuellen Validitätszustand des Elements zurück.

- [`willValidate`](/de/docs/Web/API/HTMLInputElement/willValidate) {{ReadOnlyInline}}
  - : Gibt zurück, ob das Element ein Kandidat für die Validierung von Einschränkungen ist. Es ist `false`, wenn irgendwelche Bedingungen es von der Validierung von Einschränkungen ausschließen, einschließlich: sein `type` ist `hidden`, `reset` oder `button`, es hat einen {{HTMLElement("datalist")}}-Vorfahr oder seine `disabled`-Eigenschaft ist `true`.

### Instanz-Eigenschaften, die nur für Elemente vom Typ Kontrollkästchen oder Radio gelten

- [`checked`](/de/docs/Web/API/HTMLInputElement/checked)
  - : Ein Boolean, der den aktuellen Zustand des Elements darstellt.

- [`defaultChecked`](/de/docs/Web/API/HTMLInputElement/defaultChecked)
  - : Ein Boolean, der den Standardzustand eines Radio-Buttons oder Kontrollkästchens darstellt, wie er ursprünglich im HTML angegeben wurde, das dieses Objekt erstellt hat.

- [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate)
  - : Ein Boolean, der anzeigt, ob das Kontrollkästchen oder der Radio-Button sich in einem unbestimmten Zustand befindet. Bei Kontrollkästchen bewirkt dies, dass das Erscheinungsbild des Kontrollkästchens auf eine Art verschleiert/ausgegraut wird, die darauf hinweist, dass sein Zustand unbestimmt ist (nicht angekreuzt, aber auch nicht nicht-angehakt). Beeinflusst nicht den Wert des `checked`-Attributs und das Klicken auf das Kontrollkästchen setzt den Wert auf false.

### Instanz-Eigenschaften, die nur für Elemente des Typs Bild gelten

- [`alt`](/de/docs/Web/API/HTMLInputElement/alt)
  - : Ein String, der das [`alt`](/de/docs/Web/HTML/Reference/Elements/input#alt)-Attribut des Elements darstellt und Alternativtext zum Verwenden enthält.

- [`height`](/de/docs/Web/API/HTMLInputElement/height)
  - : Ein String, der das [`height`](/de/docs/Web/HTML/Reference/Elements/input#height)-Attribut des Elements darstellt, welches die Höhe des für die Schaltfläche angezeigten Bildes definiert.

- [`src`](/de/docs/Web/API/HTMLInputElement/src)
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Reference/Elements/input#src)-Attribut des Elements darstellt, welches eine URI für den Speicherort eines Bildes angibt, das auf der grafischen Absende-Schaltfläche angezeigt werden soll.

- [`width`](/de/docs/Web/API/HTMLInputElement/width)
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Reference/Elements/input#width)-Attribut des Elements darstellt, welches die Breite des für die Schaltfläche angezeigten Bildes definiert.

### Instanz-Eigenschaften, die nur für Elemente des Typs Datei gelten

- [`accept`](/de/docs/Web/API/HTMLInputElement/accept)
  - : Ein String, der das [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept)-Attribut des Elements darstellt, welches eine durch Kommas getrennte Liste von Dateitypen enthält, die ausgewählt werden können.

- [`capture`](/de/docs/Web/API/HTMLInputElement/capture)
  - : Ein String, der das [`capture`](/de/docs/Web/HTML/Reference/Elements/input#capture)-Attribut des Elements darstellt, welches die Medieneingabemethode in Dateiupload-Steuerelementen angibt.

- [`files`](/de/docs/Web/API/HTMLInputElement/files)
  - : Ein [`FileList`](/de/docs/Web/API/FileList), das die für den Upload ausgewählten Dateien darstellt.

- [`webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory)
  - : Ein Boolean, der das [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input#webkitdirectory)-Attribut darstellt. Wenn `true`, akzeptiert die Dateisystem-Auswahloberfläche nur Verzeichnisse anstelle von Dateien.

- [`webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries) {{ReadOnlyInline}}
  - : Beschreibt die derzeit ausgewählten Dateien oder Verzeichnisse.

### Instanz-Eigenschaften, die nur für sichtbare Elemente, die Text oder Zahlen enthalten, gelten

- [`autocomplete`](/de/docs/Web/API/HTMLInputElement/autocomplete)
  - : Ein String, der das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut des Elements darstellt und angibt, ob der Wert des Steuerelements vom Browser automatisch vervollständigt werden kann.

- [`max`](/de/docs/Web/API/HTMLInputElement/max)
  - : Ein String, der das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut des Elements darstellt, das den maximalen (numerischen oder datumsbezogenen) Wert für dieses Element enthält, der nicht kleiner als sein minimaler ([`min`](/de/docs/Web/HTML/Reference/Elements/input#min))-Attributswert sein darf.

- [`maxLength`](/de/docs/Web/API/HTMLInputElement/maxLength)
  - : Eine Zahl, die das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribut des Elements darstellt und die maximale Anzahl von Zeichen (in Unicode-Codepoints) enthält, die der Wert haben kann.

- [`min`](/de/docs/Web/API/HTMLInputElement/min)
  - : Ein String, der das [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attribut des Elements darstellt und den minimalen (numerischen oder datumsbezogenen) Wert für dieses Element enthält, der nicht größer als sein maximaler ([`max`](/de/docs/Web/HTML/Reference/Elements/input#max))-Attributswert sein darf.

- [`minLength`](/de/docs/Web/API/HTMLInputElement/minLength)
  - : Eine Zahl, die das [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut des Elements darstellt und die minimale Anzahl von Zeichen (in Unicode-Codepoints) enthält, die der Wert haben kann.

- [`pattern`](/de/docs/Web/API/HTMLInputElement/pattern)
  - : Ein String, der das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut des Elements darstellt und ein reguläres Ausdruck enthält, gegen den der Wert des Steuerelements überprüft wird. Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um das Muster zu beschreiben, um dem Benutzer zu helfen. Dieses Attribut gilt nur, wenn der Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs `text`, `search`, `tel`, `url` oder `email` ist.

- [`placeholder`](/de/docs/Web/API/HTMLInputElement/placeholder)
  - : Ein String, der das [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attribut des Elements darstellt und einen Hinweis an den Benutzer enthält, was im Steuerelement eingegeben werden kann. Der Platzhaltertext darf keine Wagenrückläufe oder Zeilenumläufe enthalten. Dieses Attribut gilt nur, wenn der Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs `text`, `search`, `tel`, `url` oder `email` ist.

- [`readOnly`](/de/docs/Web/API/HTMLInputElement/readOnly)
  - : Ein Boolean, der das [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly)-Attribut des Elements darstellt und angibt, dass der Benutzer den Wert des Steuerelements nicht ändern kann. Dies wird ignoriert, wenn der [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `hidden`, `range`, `color`, `checkbox`, `radio`, `file` oder ein Button-Typ ist.

- [`selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection)
  - : Ein String, der die Richtung darstellt, in der die Auswahl erfolgte. Mögliche Werte sind: `forward` (die Auswahl wurde in der Start-zu-End-Richtung des aktuellen Gebietsschemas durchgeführt), `backward` (die entgegengesetzte Richtung) oder `none` (die Richtung ist unbekannt).

- [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd)
  - : Eine Zahl, die den Endindex des ausgewählten Textes darstellt. Wenn nichts ausgewählt ist, gibt dies den Versatz des Zeichens unmittelbar hinter dem aktuellen Texteinfügezeiger zurück.

- [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart)
  - : Eine Zahl, die den Beginnindex des ausgewählten Textes darstellt. Wenn nichts ausgewählt ist, gibt dies die Position des Texteinfügezeigers (Caret) innerhalb des {{HTMLElement("input")}}-Elements zurück.

- [`size`](/de/docs/Web/API/HTMLInputElement/size)
  - : Eine Zahl, die das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut des Elements darstellt und die visuelle Größe des Steuerelements enthält. Dieser Wert ist in Pixeln, es sei denn, der Wert von [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) ist `text` oder `password`, in welchem Fall es sich um eine ganze Anzahl von Zeichen handelt. Gilt nur, wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) auf `text`, `search`, `tel`, `url`, `email` oder `password` gesetzt ist.

## Instanz-Methoden

_Erbt auch Methoden von ihrer übergeordneten Schnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt einen booleschen Wert zurück, der `false` ist, wenn das Element ein Kandidat für die Validierung von Einschränkungen ist und es nicht seine Einschränkungen erfüllt. In diesem Fall löst es auch ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Event am Element aus. Es gibt `true` zurück, wenn das Element kein Kandidat für die Validierung von Einschränkungen ist oder wenn es seine Einschränkungen erfüllt.

- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Führt die `checkValidity()`-Methode aus und wenn sie false zurückgibt (für eine ungültige Eingabe oder kein Musterattribut vorhanden), dann wird dem Benutzer gemeldet, dass die Eingabe ungültig ist, auf dieselbe Weise wie beim Absenden eines Formulars.

- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Text im Eingabeelement aus und fokussiert es, sodass der Benutzer anschließend den gesamten Inhalt ersetzen kann.

- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Legt eine benutzerdefinierte Fehlermeldung für das Element fest. Wenn diese Nachricht nicht der leere String ist, leidet das Element an einem benutzerdefinierten Gültigkeitsfehler und wird nicht validiert.

- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Ersetzt einen Textbereich im Eingabeelement durch neuen Text.

- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt einen Textbereich im Eingabeelement aus (fokussiert es jedoch nicht).

- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt einen Browser-Auswahlbereich für Datum, Uhrzeit, Farbe und Dateien an.

- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) um ([`step`](/de/docs/Web/HTML/Reference/Elements/input#step) \* n), wobei n standardmäßig 1 ist, wenn nicht angegeben.

- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) um ([`step`](/de/docs/Web/HTML/Reference/Elements/input#step) \* n), wobei n standardmäßig 1 ist, wenn nicht angegeben.

## Ereignisse

_Erbt auch Ereignisse von seiner übergeordneten Schnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisung eines Ereignislisteners zu der `oneventname`-Eigenschaft dieser Schnittstelle:

- [`cancel`](/de/docs/Web/API/HTMLInputElement/cancel_event) Ereignis
  - : Wird ausgelöst, wenn der Benutzer den Dateiauswahldialog über die <kbd>Esc</kbd>-Taste oder die Abbrechen-Schaltfläche abbricht und wenn der Benutzer dieselben Dateien erneut auswählt, die zuvor ausgewählt wurden.
- [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis
  - : Wird ausgelöst, wenn ein Element seine Einschränkungen während der Einschränkungsvalidierung nicht erfüllt.
- [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignis {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn eine Suche auf einem {{HTMLElement("input")}} vom Typ `type="search"` gestartet wird.
- [`select`](/de/docs/Web/API/HTMLInputElement/select_event) Ereignis
  - : Wird ausgelöst, wenn Text ausgewählt wurde.
- [`selectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event) Ereignis
  - : Wird ausgelöst, wenn die Textauswahl in einem {{HTMLElement("input")}}-Element geändert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- In diesem Interface implementiertes HTML-Element: {{HTMLElement("input")}}
