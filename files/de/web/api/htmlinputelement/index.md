---
title: HTMLInputElement
slug: Web/API/HTMLInputElement
l10n:
  sourceCommit: d2421d25d1676cc11b01cc4981061e4d0aa78e95
---

{{APIRef("HTML DOM")}}

Das **`HTMLInputElement`** Interface bietet spezielle Eigenschaften und Methoden zur Manipulation der Optionen, Layouts und Darstellung von {{HTMLElement("input")}}-Elementen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Einige Eigenschaften gelten nur für Eingabetypen, die die entsprechenden Attribute unterstützen.

- [`align`](/de/docs/Web/API/HTMLInputElement/align) {{Deprecated_Inline}}

  - : Ein String, der die Ausrichtung des Elements darstellt. _Verwenden Sie stattdessen CSS._

- [`defaultValue`](/de/docs/Web/API/HTMLInputElement/defaultValue)

  - : Ein String, der den Standardwert darstellt, wie er ursprünglich im HTML spezifiziert wurde, das dieses Objekt erstellt hat.

- [`dirName`](/de/docs/Web/API/HTMLInputElement/dirName)

  - : Ein String, der die Richtung des Elements darstellt.

- [`incremental`](/de/docs/Web/API/HTMLInputElement/incremental) {{Non-standard_Inline}}

  - : Ein Boolean, der den Modus der Suchereignisauslösung darstellt. Wenn `true`, wird bei jedem Tastenanschlag oder beim Klicken auf die Abbrechen-Taste ausgelöst; andernfalls wird beim Drücken von <kbd>Enter</kbd> ausgelöst.

- [`labels`](/de/docs/Web/API/HTMLInputElement/labels) {{ReadOnlyInline}}

  - : Gibt eine Liste von {{ HTMLElement("label") }}-Elementen zurück, die Labels für dieses Element sind.

- [`list`](/de/docs/Web/API/HTMLInputElement/list) {{ReadOnlyInline}}

  - : Gibt das Element zurück, auf das durch das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut verwiesen wird. Die Eigenschaft kann `null` sein, wenn kein HTML-Element im selben Baum gefunden wird.

- [`multiple`](/de/docs/Web/API/HTMLInputElement/multiple)

  - : Ein Boolean, der das [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut des Elements darstellt, das angibt, ob mehr als ein Wert möglich ist (z. B. mehrere Dateien).

- [`name`](/de/docs/Web/API/HTMLInputElement/name)

  - : Ein String, der das [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut des Elements darstellt und einen Namen enthält, der das Element beim Senden des Formulars identifiziert.

- [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction)

  - : Ruft die auszuführende Aktion ab oder legt sie fest (`"hide"`, `"show"` oder `"toggle"`) für ein Popover-Element, das von einem {{HTMLElement("input")}}-Element vom Typ `button` gesteuert wird. Es spiegelt den Wert des [`popovertargetaction`](/de/docs/Web/HTML/Element/input#popovertargetaction) HTML-Attributes wider.

- [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement)

  - : Ruft das Popover-Element ab oder legt es fest, das über ein {{HTMLElement("input")}}-Element vom Typ `button` gesteuert wird. Das JavaScript-Äquivalent des [`popovertarget`](/de/docs/Web/HTML/Element/input#popovertarget) HTML-Attributes.

- [`step`](/de/docs/Web/API/HTMLInputElement/step)

  - : Ein String, der das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut des Elements darstellt, das mit [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) arbeitet, um die Inkremente zu begrenzen, bei denen ein numerischer oder datumszeitlicher Wert festgelegt werden kann. Es kann der String `any` oder eine positive Gleitkommazahl sein. Wenn dies nicht auf `any` gesetzt ist, akzeptiert die Steuerung nur Werte bei Vielfachen des Schrittswertes größer als das Minimum.

- [`type`](/de/docs/Web/API/HTMLInputElement/type)

  - : Ein String, der das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut des Elements darstellt und den anzuzeigenden Steuerungstyp angibt. Für mögliche Werte siehe die Dokumentation für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut.

- [`useMap`](/de/docs/Web/API/HTMLInputElement/useMap) {{Deprecated_Inline}}

  - : Ein String, der eine clientseitige Bildkarte darstellt.

- [`value`](/de/docs/Web/API/HTMLInputElement/value)

  - : Ein String, der den aktuellen Wert der Steuerung darstellt. Wenn der Benutzer einen anderen Wert eingibt als erwartet, kann dies einen leeren String zurückgeben.

- [`valueAsDate`](/de/docs/Web/API/HTMLInputElement/valueAsDate)

  - : Ein {{jsxref("Date")}}, das den Wert des Elements als Datum darstellt, oder `null`, wenn eine Umwandlung nicht möglich ist.

- [`valueAsNumber`](/de/docs/Web/API/HTMLInputElement/valueAsNumber)

  - : Eine Zahl, die den Wert des Elements darstellt, der als einer der folgenden, in der Reihenfolge interpretiert wird: Ein Zeitwert, eine Zahl oder `NaN`, wenn eine Umwandlung unmöglich ist.

### Instanzeigenschaften im Zusammenhang mit dem übergeordneten Formular

- [`form`](/de/docs/Web/API/HTMLInputElement/form) {{ReadOnlyInline}}

  - : Gibt eine Referenz auf das übergeordnete {{HTMLElement("form")}}-Element zurück.

- [`formAction`](/de/docs/Web/API/HTMLInputElement/formAction)

  - : Ein String, der das [`formaction`](/de/docs/Web/HTML/Element/input#formaction)-Attribut des Elements darstellt und die URL eines Programms enthält, das die vom Element gesendeten Informationen verarbeitet. Dies überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des übergeordneten Formulars.

- [`formEnctype`](/de/docs/Web/API/HTMLInputElement/formEnctype)

  - : Ein String, der das [`formenctype`](/de/docs/Web/HTML/Element/input#formenctype)-Attribut des Elements darstellt und die Art des Inhalts enthält, der verwendet wird, um das Formular an den Server zu senden. Dies überschreibt das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des übergeordneten Formulars.

- [`formMethod`](/de/docs/Web/API/HTMLInputElement/formMethod)

  - : Ein String, der das [`formmethod`](/de/docs/Web/HTML/Element/input#formmethod)-Attribut des Elements darstellt und die HTTP-Methode enthält, die der Browser verwendet, um das Formular zu senden. Dies überschreibt das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des übergeordneten Formulars.

- [`formNoValidate`](/de/docs/Web/API/HTMLInputElement/formNoValidate)

  - : Ein Boolean, der das [`formnovalidate`](/de/docs/Web/HTML/Element/input#formnovalidate)-Attribut des Elements darstellt und angibt, dass das Formular nicht validiert werden soll, wenn es gesendet wird. Dies überschreibt das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des übergeordneten Formulars.

- [`formTarget`](/de/docs/Web/API/HTMLInputElement/formTarget)

  - : Ein String, der das [`formtarget`](/de/docs/Web/HTML/Element/input#formtarget)-Attribut des Elements darstellt und einen Namen oder ein Stichwort enthält, das angibt, wo die Antwort angezeigt werden soll, die nach dem Senden des Formulars empfangen wird. Dies überschreibt das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des übergeordneten Formulars.

### Instanzeigenschaften, die für jeden sichtbaren Eingabetyp gelten, der nicht ausgeblendet ist

- [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled)

  - : Ein Boolean, der das [`disabled`](/de/docs/Web/HTML/Element/input#disabled)-Attribut des Elements darstellt und angibt, dass die Steuerung nicht zur Interaktion verfügbar ist. Die Eingabewerte werden nicht mit dem Formular gesendet. Siehe auch [`readonly`](/de/docs/Web/HTML/Element/input#readonly).

- [`required`](/de/docs/Web/API/HTMLInputElement/required)

  - : Ein Boolean, der das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut des Elements darstellt und angibt, dass der Benutzer einen Wert eingeben muss, bevor er ein Formular senden kann.

- [`validationMessage`](/de/docs/Web/API/HTMLInputElement/validationMessage) {{ReadOnlyInline}}

  - : Gibt eine lokalisierte Nachricht zurück, die die Validierungsbeschränkungen beschreibt, die die Steuerung nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn das Steuerungselement kein Kandidat für die Validierung von Einschränkungen ist ([`willValidate`](/de/docs/Web/API/HTMLObjectElement/willValidate) ist `false`), oder es erfüllt seine Einschränkungen. Dieser Wert kann durch die Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) festgelegt werden.

- [`validity`](/de/docs/Web/API/HTMLInputElement/validity) {{ReadOnlyInline}}

  - : Gibt den aktuellen Gültigkeitszustand des Elements zurück.

- [`willValidate`](/de/docs/Web/API/HTMLInputElement/willValidate) {{ReadOnlyInline}}

  - : Gibt zurück, ob das Element ein Kandidat für die Validierung von Einschränkungen ist. Es ist `false`, wenn eine der Bedingungen es von der Validierung ausschließt, einschließlich: sein `type` ist eines der `hidden`, `reset` oder `button`, es hat einen {{HTMLElement("datalist")}}-Vorfahren oder sein `disabled`-Eigenschaft ist `true`.

### Instanzeigenschaften, die nur für Elemente vom Typ Checkbox oder Radio gelten

- [`checked`](/de/docs/Web/API/HTMLInputElement/checked)

  - : Ein Boolean, der den aktuellen Zustand des Elements darstellt.

- [`defaultChecked`](/de/docs/Web/API/HTMLInputElement/defaultChecked)

  - : Ein Boolean, der den Standardzustand eines Auswahl-Buttons oder einer Checkbox darstellt, wie ursprünglich im HTML spezifiziert, das dieses Objekt erstellt hat.

- [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate)

  - : Ein Boolean, der angibt, ob die Checkbox oder der Radio-Button in einem unbestimmten Zustand ist. Bei Checkboxen bewirkt dies, dass das Erscheinungsbild der Checkbox auf irgendeine Weise verdeckt/ausgegraut wird, um anzuzeigen, dass ihr Zustand unbestimmt ist (nicht markiert, aber auch nicht unvermarkiert). Dies beeinflusst nicht den Wert des `checked`-Attributs, und das Klicken auf die Checkbox setzt den Wert auf false.

### Instanzeigenschaften, die nur für Elemente vom Typ Image gelten

- [`alt`](/de/docs/Web/API/HTMLInputElement/alt)

  - : Ein String, der das [`alt`](/de/docs/Web/HTML/Element/input#alt)-Attribut des Elements darstellt und alternativen Text enthält, der verwendet werden soll.

- [`height`](/de/docs/Web/API/HTMLInputElement/height)

  - : Ein String, der das [`height`](/de/docs/Web/HTML/Element/input#height)-Attribut des Elements darstellt, welches die Höhe des für die Taste angezeigten Bildes definiert.

- [`src`](/de/docs/Web/API/HTMLInputElement/src)

  - : Ein String, der das [`src`](/de/docs/Web/HTML/Element/input#src)-Attribut des Elements darstellt, das eine URI für den Speicherort eines Bildes angibt, das auf der grafischen Senden-Taste angezeigt wird.

- [`width`](/de/docs/Web/API/HTMLInputElement/width)

  - : Ein String, der das [`width`](/de/docs/Web/HTML/Element/input#width)-Attribut des Elements darstellt, welches die Breite des für die Taste angezeigten Bildes definiert.

### Instanzeigenschaften, die nur für Elemente vom Typ Datei gelten

- [`accept`](/de/docs/Web/API/HTMLInputElement/accept)

  - : Ein String, der das [`accept`](/de/docs/Web/HTML/Element/input#accept)-Attribut des Elements darstellt und eine durch Kommas getrennte Liste von Dateitypen enthält, die ausgewählt werden können.

- [`capture`](/de/docs/Web/API/HTMLInputElement/capture)

  - : Ein String, der das [`capture`](/de/docs/Web/HTML/Element/input#capture)-Attribut des Elements darstellt und die Eingabemethode zum Mediendatei-Capturing in Datei-Upload-Steuerelementen angibt.

- [`files`](/de/docs/Web/API/HTMLInputElement/files)

  - : Eine [`FileList`](/de/docs/Web/API/FileList), die die zur Hochladung ausgewählten Dateien darstellt.

- [`webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory)

  - : Ein Boolean, der das [`webkitdirectory`](/de/docs/Web/HTML/Element/input#webkitdirectory)-Attribut darstellt. Wenn `true`, akzeptiert die Dateisystem-Auswahloberfläche nur Verzeichnisse anstelle von Dateien.

- [`webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries) {{ReadOnlyInline}}

  - : Beschreibt die aktuell ausgewählten Dateien oder Verzeichnisse.

### Instanzeigenschaften, die nur für sichtbare Elemente gelten, die Text oder Zahlen enthalten

- [`autocomplete`](/de/docs/Web/API/HTMLInputElement/autocomplete)

  - : Ein String, der das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Attribut des Elements darstellt und angibt, ob der Wert der Steuerung vom Browser automatisch vervollständigt werden kann.

- [`max`](/de/docs/Web/API/HTMLInputElement/max)

  - : Ein String, der das [`max`](/de/docs/Web/HTML/Element/input#max)-Attribut des Elements darstellt und den maximalen (numerischen oder datumszeitlichen) Wert für diesen Eintrag enthält, der nicht kleiner als sein Minimum ([`min`](/de/docs/Web/HTML/Element/input#min)-Attribut) sein darf.

- [`maxLength`](/de/docs/Web/API/HTMLInputElement/maxLength)

  - : Eine Zahl, die das [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribut des Elements darstellt und die maximale Anzahl von Zeichen (in Unicode-Codepunkten) enthält, die der Wert haben kann.

- [`min`](/de/docs/Web/API/HTMLInputElement/min)

  - : Ein String, der das [`min`](/de/docs/Web/HTML/Element/input#min)-Attribut des Elements darstellt und den minimalen (numerischen oder datumszeitlichen) Wert für diesen Eintrag enthält, der nicht größer als sein Maximum ([`max`](/de/docs/Web/HTML/Element/input#max)-Attribut) sein darf.

- [`minLength`](/de/docs/Web/API/HTMLInputElement/minLength)

  - : Eine Zahl, die das [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut des Elements darstellt und die minimale Anzahl von Zeichen (in Unicode-Codepunkten) enthält, die der Wert haben kann.

- [`pattern`](/de/docs/Web/API/HTMLInputElement/pattern)

  - : Ein String, der das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut des Elements darstellt und einen regulären Ausdruck enthält, gegen den der Wert der Steuerung überprüft wird. Verwenden Sie das Attribut [`title`](/de/docs/Web/HTML/Element/input#title), um das Muster zu beschreiben, um dem Benutzer zu helfen. Dieses Attribut gilt nur, wenn der Wert des Attributs [`type`](/de/docs/Web/HTML/Element/input#type) `text`, `search`, `tel`, `url` oder `email` ist.

- [`placeholder`](/de/docs/Web/API/HTMLInputElement/placeholder)

  - : Ein String, der das [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attribut des Elements darstellt und einen Hinweis an den Benutzer enthält, was in die Steuerung eingegeben werden kann. Der Platzhaltertext darf keine Wagenrückläufe oder Zeilenwechsel enthalten. Dieses Attribut gilt nur, wenn der Wert des Attributs [`type`](/de/docs/Web/HTML/Element/input#type) `text`, `search`, `tel`, `url` oder `email` ist.

- [`readOnly`](/de/docs/Web/API/HTMLInputElement/readOnly)

  - : Ein Boolean, der das [`readonly`](/de/docs/Web/HTML/Element/input#readonly)-Attribut des Elements darstellt und angibt, dass der Benutzer den Wert der Steuerung nicht ändern kann. Dies wird ignoriert, wenn der [`type`](/de/docs/Web/HTML/Element/input#type) `hidden`, `range`, `color`, `checkbox`, `radio`, `file` oder ein Tasten-Typ ist.

- [`selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection)

  - : Ein String, der die Richtung angibt, in der die Auswahl erfolgte. Mögliche Werte sind: `forward` (die Auswahl wurde in der Start-zu-Ende-Richtung der aktuellen Sprache vorgenommen), `backward` (die entgegengesetzte Richtung) oder `none` (die Richtung ist unbekannt).

- [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd)

  - : Eine Zahl, die den Endindex des ausgewählten Textes darstellt. Wenn keine Auswahl besteht, wird der Offset des Zeichens unmittelbar nach der aktuellen Text-Eingabeposition zurückgegeben.

- [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart)

  - : Eine Zahl, die den Anfangsindex des ausgewählten Textes darstellt. Wenn nichts ausgewählt ist, gibt dies die Position des Text-Eingabe-Cursors (Caret) innerhalb des {{HTMLElement("input")}}-Elements zurück.

- [`size`](/de/docs/Web/API/HTMLInputElement/size)

  - : Eine Zahl, die das [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut des Elements darstellt, das die visuelle Größe der Steuerung enthält. Dieser Wert ist in Pixeln, es sei denn, der Wert von [`type`](/de/docs/Web/HTML/Element/input#type) ist `text` oder `password`, in diesem Fall ist es eine ganze Zahl von Zeichen. Gilt nur, wenn [`type`](/de/docs/Web/HTML/Element/input#type) auf `text`, `search`, `tel`, `url`, `email` oder `password` gesetzt ist.

## Instanzmethoden

_Erbt auch Methoden von seiner übergeordneten Schnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)

  - : Gibt einen Boolean-Wert zurück, der `false` ist, wenn das Element ein Kandidat für die Validierung von Einschränkungen ist und es seine Einschränkungen nicht erfüllt. In diesem Fall löst es auch ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus. Es gibt `true` zurück, wenn das Element kein Kandidat für die Validierung von Einschränkungen ist oder wenn es seine Einschränkungen erfüllt.

- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)

  - : Führt die Methode `checkValidity()` aus und wenn es false zurückgibt (für eine ungültige Eingabe oder wenn kein Pattern-Attribut bereitgestellt wurde), dann wird dem Benutzer gemeldet, dass die Eingabe ungültig ist, in derselben Weise, als ob Sie ein Formular einreichen würden.

- [`select()`](/de/docs/Web/API/HTMLInputElement/select)

  - : Wählt den gesamten Text im Eingabefeld aus und fokussiert ihn, sodass der Benutzer anschließend alle Inhalte ersetzen kann.

- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)

  - : Setzt eine benutzerdefinierte Fehlermeldung für das Element. Wenn diese Nachricht nicht der leere String ist, leidet das Element an einem benutzerdefinierten Gültigkeitsfehler und wird nicht validiert.

- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)

  - : Ersetzt eine Textrange im Eingabefeld durch neuen Text.

- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)

  - : Wählt eine Textrange im Eingabefeld aus (fokussiert es jedoch nicht).

- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)

  - : Zeigt einen Browser-Picker für Datum, Zeit, Farbe und Dateien an.

- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)

  - : Verringert den [`value`](/de/docs/Web/HTML/Element/input#value) um ([`step`](/de/docs/Web/HTML/Element/input#step) \* n), wobei n standardmäßig auf 1 gesetzt ist, wenn nichts angegeben ist.

- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)

  - : Erhöht den [`value`](/de/docs/Web/HTML/Element/input#value) um ([`step`](/de/docs/Web/HTML/Element/input#step) \* n), wobei n standardmäßig auf 1 gesetzt ist, wenn nichts angegeben ist.

## Ereignisse

_Erbt auch Ereignisse von seiner übergeordneten Schnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener auf die `oneventname`-Eigenschaft dieser Schnittstelle zuweisen:

- [`cancel`](/de/docs/Web/API/HTMLInputElement/cancel_event) Ereignis
  - : Wird ausgelöst, wenn der Benutzer das Dateiauswahl-Dialogfeld über die <kbd>Esc</kbd>-Taste oder die Abbrechen-Taste abbricht und wenn der Benutzer dieselben Dateien erneut auswählt, die zuvor ausgewählt wurden.
- [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis
  - : Wird ausgelöst, wenn ein Element seine Einschränkungen während der Einschränkungsvalidierung nicht erfüllt.
- [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignis {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn eine Suche bei einem {{HTMLElement("input")}} vom Typ `search` initiiert wird.
- [`select`](/de/docs/Web/API/HTMLInputElement/select_event) Ereignis
  - : Wird ausgelöst, wenn Text ausgewählt wurde.
- [`selectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event) Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn die Textauswahl in einem {{HTMLElement("input")}}-Element geändert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("input")}}
