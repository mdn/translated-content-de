---
title: HTMLInputElement
slug: Web/API/HTMLInputElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Das **`HTMLInputElement`** Interface bietet spezielle Eigenschaften und Methoden zur Manipulation der Optionen, des Layouts und der Präsentation von {{HTMLElement("input")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Einige Eigenschaften gelten nur für Eingabeelementtypen, die die entsprechenden Attribute unterstützen.

- [`align`](/de/docs/Web/API/HTMLInputElement/align) {{Deprecated_Inline}}

  - : Ein Zeichenfolgenwert, der die Ausrichtung des Elements darstellt. _Verwenden Sie stattdessen CSS._

- [`defaultValue`](/de/docs/Web/API/HTMLInputElement/defaultValue)

  - : Ein Zeichenfolgenwert, der den Standardwert darstellt, wie er ursprünglich im HTML angegeben wurde, das dieses Objekt erstellt hat.

- [`dirName`](/de/docs/Web/API/HTMLInputElement/dirName)

  - : Ein Zeichenfolgenwert, der die Richtungseinstellung des Elements darstellt.

- [`incremental`](/de/docs/Web/API/HTMLInputElement/incremental) {{Non-standard_Inline}}

  - : Ein boolescher Wert, der den Modus des Suchereignis-Feuerns darstellt; wenn `true`, wird bei jedem Tastendruck oder beim Klicken auf die Abbrechen-Taste ausgelöst, andernfalls beim Drücken der <kbd>Enter</kbd>-Taste.

- [`labels`](/de/docs/Web/API/HTMLInputElement/labels) {{ReadOnlyInline}}

  - : Gibt eine Liste von {{HTMLElement("label")}}-Elementen zurück, die Labels für dieses Element sind.

- [`list`](/de/docs/Web/API/HTMLInputElement/list) {{ReadOnlyInline}}

  - : Gibt das Element zurück, auf das durch das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut verwiesen wird. Die Eigenschaft kann `null` sein, wenn kein HTML-Element im selben Baum gefunden wird.

- [`multiple`](/de/docs/Web/API/HTMLInputElement/multiple)

  - : Ein boolescher Wert, der das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut des Elements darstellt und angibt, ob mehr als ein Wert möglich ist (z. B. mehrere Dateien).

- [`name`](/de/docs/Web/API/HTMLInputElement/name)

  - : Ein Zeichenfolgenwert, der das [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut des Elements darstellt, das einen Namen enthält, der das Element beim Absenden des Formulars identifiziert.

- [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction)

  - : Ermittelt und setzt die auszuführende Aktion (`"hide"`, `"show"` oder `"toggle"`) auf einem durch ein {{HTMLElement("input")}}-Element von `type="button"` gesteuerten Popover-Element. Es spiegelt den Wert des [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/input#popovertargetaction) HTML-Attributes wider.

- [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement)

  - : Ermittelt und setzt das zu steuernde Popover-Element über ein {{HTMLElement("input")}}-Element von `type="button"`. Das JavaScript-Äquivalent des [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/input#popovertarget) HTML-Attributes.

- [`step`](/de/docs/Web/API/HTMLInputElement/step)

  - : Ein Zeichenfolgenwert, der das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut des Elements darstellt, welches zusammen mit [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) die Inkremente einschränkt, bei denen ein numerischer oder Datum-Zeit-Wert gesetzt werden kann. Es kann der String `any` oder eine positive Gleitkommazahl sein. Wenn dies nicht auf `any` gesetzt ist, akzeptiert die Steuerung nur Werte bei Vielfachen des Schrittwertes, die größer als das Minimum sind.

- [`type`](/de/docs/Web/API/HTMLInputElement/type)

  - : Ein Zeichenfolgenwert, der das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut des Elements darstellt und angibt, welcher Steuerungstyp angezeigt werden soll. Für mögliche Werte siehe die Dokumentation für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut.

- [`useMap`](/de/docs/Web/API/HTMLInputElement/useMap) {{Deprecated_Inline}}

  - : Ein Zeichenfolgenwert, der eine clientseitige Bildkarte darstellt.

- [`value`](/de/docs/Web/API/HTMLInputElement/value)

  - : Ein Zeichenfolgenwert, der den aktuellen Wert der Steuerung darstellt. Wenn der Benutzer einen anderen als den erwarteten Wert eingibt, kann dies eine leere Zeichenkette zurückgeben.

- [`valueAsDate`](/de/docs/Web/API/HTMLInputElement/valueAsDate)

  - : Ein {{jsxref("Date")}}, das den Wert des Elements interpretiert als Datum darstellt, oder `null`, wenn eine Umwandlung nicht möglich ist.

- [`valueAsNumber`](/de/docs/Web/API/HTMLInputElement/valueAsNumber)
  - : Eine Zahl, die den Wert des Elements darstellt, interpretiert als eine der folgenden, in der Reihenfolge: Ein Zeitwert, eine Zahl oder `NaN`, wenn eine Umwandlung unmöglich ist.

### Instanz-Eigenschaften im Zusammenhang mit dem übergeordneten Formular

- [`form`](/de/docs/Web/API/HTMLInputElement/form) {{ReadOnlyInline}}

  - : Gibt eine Referenz zum übergeordneten {{HTMLElement("form")}}-Element zurück.

- [`formAction`](/de/docs/Web/API/HTMLInputElement/formAction)

  - : Ein Zeichenfolgenwert, der das [`formaction`](/de/docs/Web/HTML/Reference/Elements/input#formaction)-Attribut des Elements darstellt, die die URL eines Programms enthält, das die vom Element übermittelten Informationen verarbeitet. Dies überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des übergeordneten Formulars.

- [`formEnctype`](/de/docs/Web/API/HTMLInputElement/formEnctype)

  - : Ein Zeichenfolgenwert, der das [`formenctype`](/de/docs/Web/HTML/Reference/Elements/input#formenctype)-Attribut des Elements darstellt und den Typ von Inhalten enthält, der verwendet wird, um das Formular an den Server zu übermitteln. Dies überschreibt das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des übergeordneten Formulars.

- [`formMethod`](/de/docs/Web/API/HTMLInputElement/formMethod)

  - : Ein Zeichenfolgenwert, der das [`formmethod`](/de/docs/Web/HTML/Reference/Elements/input#formmethod)-Attribut des Elements darstellt und die HTTP-Methode enthält, mit der der Browser das Formular übermittelt. Dies überschreibt das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des übergeordneten Formulars.

- [`formNoValidate`](/de/docs/Web/API/HTMLInputElement/formNoValidate)

  - : Ein boolescher Wert, der das [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate)-Attribut des Elements darstellt und angibt, dass das Formular nicht validiert werden soll, wenn es übermittelt wird. Dies überschreibt das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des übergeordneten Formulars.

- [`formTarget`](/de/docs/Web/API/HTMLInputElement/formTarget)
  - : Ein Zeichenfolgenwert, der das [`formtarget`](/de/docs/Web/HTML/Reference/Elements/input#formtarget)-Attribut des Elements darstellt und einen Namen oder ein Schlüsselwort enthält, das angibt, wo die Antwort nach dem Absenden des Formulars angezeigt werden soll. Dies überschreibt das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des übergeordneten Formulars.

### Instanz-Eigenschaften, die für jeden nicht versteckten Eingabetyp gelten

- [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled)

  - : Ein boolescher Wert, der das [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled)-Attribut des Elements darstellt und angibt, dass die Steuerung nicht für die Interaktion verfügbar ist. Die Eingabewerte werden nicht mit dem Formular übermittelt. Siehe auch [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly).

- [`required`](/de/docs/Web/API/HTMLInputElement/required)

  - : Ein boolescher Wert, der das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut des Elements darstellt und angibt, dass der Benutzer einen Wert eingeben muss, bevor er ein Formular absenden kann.

- [`validationMessage`](/de/docs/Web/API/HTMLInputElement/validationMessage) {{ReadOnlyInline}}

  - : Gibt eine lokalisierte Nachricht zurück, die die Validierungsbeschränkungen beschreibt, die die Steuerung nicht erfüllt (falls vorhanden). Dies ist die leere Zeichenkette, wenn die Steuerung kein Kandidat für die Beschränkungsvalidierung ist ([`willValidate`](/de/docs/Web/API/HTMLInputElement/willValidate) ist `false`), oder wenn sie ihre Beschränkungen erfüllt. Dieser Wert kann durch die Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) festgelegt werden.

- [`validity`](/de/docs/Web/API/HTMLInputElement/validity) {{ReadOnlyInline}}

  - : Gibt den aktuellen Gültigkeitsstatus des Elements zurück.

- [`willValidate`](/de/docs/Web/API/HTMLInputElement/willValidate) {{ReadOnlyInline}}
  - : Gibt zurück, ob das Element ein Kandidat für die Beschränkungsvalidierung ist. Es ist `false`, wenn irgendwelche Bedingungen es von der Beschränkungsvalidierung ausschließen, einschließlich: sein `type` ist einer von `hidden`, `reset` oder `button`, es hat einen Vorfahren vom Typ {{HTMLElement("datalist")}} oder seine Eigenschaft `disabled` ist `true`.

### Instanz-Eigenschaften, die nur für Elemente vom Typ Checkbox oder Radio gelten

- [`checked`](/de/docs/Web/API/HTMLInputElement/checked)

  - : Ein boolescher Wert, der den aktuellen Zustand des Elements darstellt.

- [`defaultChecked`](/de/docs/Web/API/HTMLInputElement/defaultChecked)

  - : Ein boolescher Wert, der den Standardzustand eines Auswahlknopfs oder Kontrollkästchens darstellt, wie er ursprünglich im HTML angegeben wurde, das dieses Objekt erstellt hat.

- [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate)
  - : Ein boolescher Wert, der darstellt, ob das Kontrollkästchen oder der Auswahlknopf im indeterminierten Zustand ist. Für Kontrollkästchen bedeutet dies, dass das Erscheinungsbild des Kontrollkästchens irgendwie verdeckt/grau dargestellt wird, um anzuzeigen, dass sein Zustand unbestimmt ist (nicht markiert, aber auch nicht nicht markiert). Dies hat keine Auswirkungen auf den Wert des `checked`-Attributes, und ein Klick auf das Kontrollkästchen setzt den Wert auf false.

### Instanz-Eigenschaften, die nur für Elemente vom Typ Bild gelten

- [`alt`](/de/docs/Web/API/HTMLInputElement/alt)

  - : Ein Zeichenfolgenwert, der das [`alt`](/de/docs/Web/HTML/Reference/Elements/input#alt)-Attribut des Elements darstellt und alternativen Text enthält, der verwendet werden soll.

- [`height`](/de/docs/Web/API/HTMLInputElement/height)

  - : Ein Zeichenfolgenwert, der das [`height`](/de/docs/Web/HTML/Reference/Elements/input#height)-Attribut des Elements darstellt, das die Höhe des Bildes definiert, das für den Button angezeigt wird.

- [`src`](/de/docs/Web/API/HTMLInputElement/src)

  - : Ein Zeichenfolgenwert, der das [`src`](/de/docs/Web/HTML/Reference/Elements/input#src)-Attribut des Elements darstellt, das eine URI für den Standort eines Bildes angibt, das auf dem grafischen Senden-Button angezeigt werden soll.

- [`width`](/de/docs/Web/API/HTMLInputElement/width)
  - : Ein Zeichenfolgenwert, der das [`width`](/de/docs/Web/HTML/Reference/Elements/input#width)-Attribut des Elements darstellt, das die Breite des Bildes definiert, das für den Button angezeigt wird.

### Instanz-Eigenschaften, die nur für Elemente vom Typ Datei gelten

- [`accept`](/de/docs/Web/API/HTMLInputElement/accept)

  - : Ein Zeichenfolgenwert, der das [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept)-Attribut des Elements darstellt und eine kommagetrennte Liste von Dateitypen enthält, die ausgewählt werden können.

- [`capture`](/de/docs/Web/API/HTMLInputElement/capture)

  - : Ein Zeichenfolgenwert, der das [`capture`](/de/docs/Web/HTML/Reference/Elements/input#capture)-Attribut des Elements darstellt und die Multimedia-Aufnahmemethode in Datei-Upload-Steuerelementen angibt.

- [`files`](/de/docs/Web/API/HTMLInputElement/files)

  - : Ein [`FileList`](/de/docs/Web/API/FileList), das die für den Upload ausgewählten Dateien darstellt.

- [`webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory)

  - : Ein boolescher Wert, der das [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input#webkitdirectory)-Attribut darstellt. Wenn `true`, akzeptiert die Dateisystemauswahloberfläche nur Verzeichnisse statt Dateien.

- [`webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries) {{ReadOnlyInline}}
  - : Beschreibt die aktuell ausgewählten Dateien oder Verzeichnisse.

### Instanz-Eigenschaften, die nur für sichtbare Elemente mit Text oder Zahlen gelten

- [`autocomplete`](/de/docs/Web/API/HTMLInputElement/autocomplete)

  - : Ein Zeichenfolgenwert, der das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut des Elements darstellt und angibt, ob der Wert der Steuerung automatisch vom Browser vervollständigt werden kann.

- [`max`](/de/docs/Web/API/HTMLInputElement/max)

  - : Ein Zeichenfolgenwert, der das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut des Elements darstellt und den maximalen (numerischen oder datumszeitlichen) Wert für diesen Artikel angibt, der nicht geringer als sein Mindestwert ([`min`](/de/docs/Web/HTML/Reference/Elements/input#min))-Attribut sein darf.

- [`maxLength`](/de/docs/Web/API/HTMLInputElement/maxLength)

  - : Eine Zahl, die das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribut des Elements darstellt und die maximale Anzahl an Zeichen (in Unicode-Code-Punkten) enthält, die der Wert haben kann.

- [`min`](/de/docs/Web/API/HTMLInputElement/min)

  - : Ein Zeichenfolgenwert, der das [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attribut des Elements darstellt und den minimalen (numerischen oder datumszeitlichen) Wert für diesen Artikel angibt, der nicht größer als sein Höchstwert ([`max`](/de/docs/Web/HTML/Reference/Elements/input#max))-Attribut sein darf.

- [`minLength`](/de/docs/Web/API/HTMLInputElement/minLength)

  - : Eine Zahl, die das [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut des Elements darstellt und die minimale Anzahl an Zeichen (in Unicode-Code-Punkten) enthält, die der Wert haben kann.

- [`pattern`](/de/docs/Web/API/HTMLInputElement/pattern)

  - : Ein Zeichenfolgenwert, der das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut des Elements darstellt und einen regulären Ausdruck enthält, gegen den der Wert der Steuerung geprüft wird. Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um das Muster zu beschreiben und dem Benutzer zu helfen. Dieses Attribut gilt nur, wenn der Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributes `text`, `search`, `tel`, `url` oder `email` ist.

- [`placeholder`](/de/docs/Web/API/HTMLInputElement/placeholder)

  - : Ein Zeichenfolgenwert, der das [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attribut des Elements darstellt und einen Hinweis für den Benutzer enthält, was in die Steuerung eingegeben werden kann. Der Platzhalter-Text darf keine Wagenrückläufe oder Zeilenumbrüche enthalten. Dieses Attribut gilt nur, wenn der Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributes `text`, `search`, `tel`, `url` oder `email` ist.

- [`readOnly`](/de/docs/Web/API/HTMLInputElement/readOnly)

  - : Ein boolescher Wert, der das [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly)-Attribut des Elements darstellt und angibt, dass der Benutzer den Wert der Steuerung nicht ändern kann. Dies wird ignoriert, wenn der [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) auf `hidden`, `range`, `color`, `checkbox`, `radio`, `file` oder einen Button-Typ gesetzt ist.

- [`selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection)

  - : Ein Zeichenfolgenwert, der die Richtung angibt, in der die Auswahl getroffen wurde. Mögliche Werte sind: `forward` (die Auswahl wurde in die Start-zu-Ende-Richtung der aktuellen Lokalisierung durchgeführt), `backward` (die gegensätzliche Richtung) oder `none` (die Richtung ist unbekannt).

- [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd)

  - : Eine Zahl, die das End-Index der ausgewählten Zeichen darstellt. Wenn keine Auswahl getroffen wurde, wird der Versatz des Zeichens direkt nach der aktuellen Textcursor-Position zurückgegeben.

- [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart)

  - : Eine Zahl, die das Start-Index der ausgewählten Zeichen darstellt. Wenn nichts ausgewählt ist, wird die Position des Textcursors (Caret) innerhalb des {{HTMLElement("input")}}-Elements zurückgegeben.

- [`size`](/de/docs/Web/API/HTMLInputElement/size)
  - : Eine Zahl, die das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut des Elements darstellt und die visuelle Größe der Steuerung enthält. Dieser Wert ist in Pixeln, es sei denn, der Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) ist `text` oder `password`, in diesem Fall ist es eine ganzzahlige Anzahl von Zeichen. Gilt nur, wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) auf `text`, `search`, `tel`, `url`, `email` oder `password` gesetzt ist.

## Instanz-Methoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)

  - : Gibt einen booleschen Wert zurück, der `false` ist, wenn das Element ein Kandidat für die Beschränkungsvalidierung ist und es seine Beschränkungen nicht erfüllt. In diesem Fall wird auch ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis auf dem Element ausgelöst. Es gibt `true` zurück, wenn das Element kein Kandidat für die Beschränkungsvalidierung ist oder wenn es seine Beschränkungen erfüllt.

- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)

  - : Führt die Methode `checkValidity()` aus, und wenn sie `false` zurückgibt (für eine ungültige Eingabe oder kein bereitgestelltes Musterattribut), wird dem Benutzer auf dieselbe Weise wie beim Absenden eines Formulars gemeldet, dass die Eingabe ungültig ist.

- [`select()`](/de/docs/Web/API/HTMLInputElement/select)

  - : Wählt den gesamten Text im Eingabeelement aus und fokussiert es, sodass der Benutzer anschließend den gesamten Inhalt ersetzen kann.

- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)

  - : Legt eine benutzerdefinierte Validierungsnachricht für das Element fest. Wenn diese Nachricht nicht die leere Zeichenkette ist, leidet das Element an einem benutzerdefinierten Validitätsfehler und wird nicht validiert.

- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)

  - : Ersetzt einen Bereich von Text im Eingabeelement durch neuen Text.

- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)

  - : Wählt einen Bereich von Text im Eingabeelement aus (fokussiert es jedoch nicht).

- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)

  - : Zeigt einen Browser-Auswahldialog für Datum, Zeit, Farbe und Dateien.

- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)

  - : Vermindert den [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) um ([`step`](/de/docs/Web/HTML/Reference/Elements/input#step) \* n), wobei n standardmäßig 1 ist, wenn nicht angegeben.

- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) um ([`step`](/de/docs/Web/HTML/Reference/Elements/input#step) \* n), wobei n standardmäßig 1 ist, wenn nicht angegeben.

## Ereignisse

_Erbt auch Ereignisse von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Hören Sie diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignislistener der `oneventname`-Eigenschaft dieses Interface zuweisen:

- [`cancel`](/de/docs/Web/API/HTMLInputElement/cancel_event) Ereignis
  - : Wird ausgelöst, wenn der Benutzer den Datei-Auswahldialog über die <kbd>Esc</kbd>-Taste oder die Abbrechen-Taste abbricht und wenn der Benutzer erneut dieselben Dateien auswählt, die zuvor ausgewählt wurden.
- [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis
  - : Wird ausgelöst, wenn ein Element während der Beschränkungsvalidierung seine Beschränkungen nicht erfüllt.
- [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignis {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn eine Suche in einem {{HTMLElement("input")}} von `type="search"` initiiert wird.
- [`select`](/de/docs/Web/API/HTMLInputElement/select_event) Ereignis
  - : Wird ausgelöst, wenn Text ausgewählt wurde.
- [`selectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event) Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn die Textauswahl in einem {{HTMLElement("input")}}-Element geändert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das dieses Interface implementiert: {{HTMLElement("input")}}
