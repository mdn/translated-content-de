---
title: HTMLInputElement
slug: Web/API/HTMLInputElement
l10n:
  sourceCommit: 58cc81b21f777d745877ec1430df8ba2852ff411
---

{{APIRef("HTML DOM")}}

Das **`HTMLInputElement`**-Interface bietet spezielle Eigenschaften und Methoden zur Manipulation der Optionen, des Layouts und der Präsentation von {{HTMLElement("input")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Einige Eigenschaften gelten nur für Eingabeelementtypen, die die entsprechenden Attribute unterstützen.

- [`align`](/de/docs/Web/API/HTMLInputElement/align) {{Deprecated_Inline}}

  - : Ein String, der die Ausrichtung des Elements darstellt. _Verwenden Sie stattdessen CSS._

- [`defaultValue`](/de/docs/Web/API/HTMLInputElement/defaultValue)

  - : Ein String, der den Standardwert darstellt, wie er ursprünglich im HTML spezifiziert wurde, welches dieses Objekt erstellt hat.

- [`dirName`](/de/docs/Web/API/HTMLInputElement/dirName)

  - : Ein String, der die Direktionalität des Elements darstellt.

- [`incremental`](/de/docs/Web/API/HTMLInputElement/incremental) {{Non-standard_Inline}}

  - : Ein Boolean, der den Suchereignis-Feuermodus darstellt. Ist er `true`, wird bei jedem Tastendruck oder beim Klicken des Abbruchknopfes gefeuert; andernfalls beim Drücken von <kbd>Enter</kbd>.

- [`labels`](/de/docs/Web/API/HTMLInputElement/labels) {{ReadOnlyInline}}

  - : Gibt eine Liste von {{ HTMLElement("label") }}-Elementen zurück, die Labels für dieses Element sind.

- [`list`](/de/docs/Web/API/HTMLInputElement/list) {{ReadOnlyInline}}

  - : Gibt das durch das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut angegebene Element zurück. Die Eigenschaft kann `null` sein, wenn kein HTML-Element im selben Baum gefunden wird.

- [`multiple`](/de/docs/Web/API/HTMLInputElement/multiple)

  - : Ein Boolean, der das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut des Elements darstellt und angibt, ob mehr als ein Wert möglich ist (z.B. mehrere Dateien).

- [`name`](/de/docs/Web/API/HTMLInputElement/name)

  - : Ein String, der das [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut des Elements darstellt und einen Namen enthält, der das Element bei der Formularübermittlung identifiziert.

- [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction)

  - : Holt und setzt die Aktion, die auf einem Popover-Element ausgeführt werden soll (`"hide"`, `"show"` oder `"toggle"`), das von einem {{HTMLElement("input")}}-Element mit `type="button"` gesteuert wird. Es spiegelt den Wert des [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/input#popovertargetaction) HTML-Attributs wider.

- [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement)

  - : Holt und setzt das von einem {{HTMLElement("input")}}-Element mit `type="button"` zu steuernde Popover-Element. Das JavaScript-Äquivalent des [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/input#popovertarget) HTML-Attributs.

- [`step`](/de/docs/Web/API/HTMLInputElement/step)

  - : Ein String, der das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut des Elements darstellt, das zusammen mit [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwendet wird, um die Inkremente zu begrenzen, mit denen ein numerischer oder datumszeitlicher Wert festgelegt werden kann. Es kann der String `any` oder eine positive Fließkommazahl sein. Wenn dies nicht auf `any` gesetzt ist, akzeptiert die Steuerung nur Werte bei Vielfachen des Schrittwerts größer als das Minimum.

- [`type`](/de/docs/Web/API/HTMLInputElement/type)

  - : Ein String, der das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut des Elements darstellt und den anzuzeigenden Steuerungstyp angibt. Mögliche Werte finden Sie in der Dokumentation für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut.

- [`useMap`](/de/docs/Web/API/HTMLInputElement/useMap) {{Deprecated_Inline}}

  - : Ein String, der eine clientseitige Imagemap darstellt.

- [`value`](/de/docs/Web/API/HTMLInputElement/value)

  - : Ein String, der den aktuellen Wert der Steuerung darstellt. Wenn der Benutzer einen anderen Wert eingibt als erwartet, kann dies einen leeren String zurückgeben.

- [`valueAsDate`](/de/docs/Web/API/HTMLInputElement/valueAsDate)

  - : Ein {{jsxref("Date")}}, der den Wert des Elements als Datum interpretiert darstellt, oder `null`, wenn die Konvertierung nicht möglich ist.

- [`valueAsNumber`](/de/docs/Web/API/HTMLInputElement/valueAsNumber)
  - : Eine Zahl, die den Wert des Elements darstellt, interpretiert als einer der folgenden, in dieser Reihenfolge: Eine Zeitangabe, eine Zahl oder `NaN`, wenn die Konvertierung unmöglich ist.

### Instanz-Eigenschaften in Bezug auf das übergeordnete Formular

- [`form`](/de/docs/Web/API/HTMLInputElement/form) {{ReadOnlyInline}}

  - : Gibt eine Referenz auf das übergeordnete {{HTMLElement("form")}}-Element zurück.

- [`formAction`](/de/docs/Web/API/HTMLInputElement/formAction)

  - : Ein String, der das [`formaction`](/de/docs/Web/HTML/Reference/Elements/input#formaction)-Attribut des Elements darstellt und die URL enthält, eines Programms, das von dem Element übermittelte Informationen verarbeitet. Dies überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des übergeordneten Formulars.

- [`formEnctype`](/de/docs/Web/API/HTMLInputElement/formEnctype)

  - : Ein String, der das [`formenctype`](/de/docs/Web/HTML/Reference/Elements/input#formenctype)-Attribut des Elements darstellt und die Art des Inhalts enthält, der verwendet wird, um das Formular an den Server zu übermitteln. Dies überschreibt das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des übergeordneten Formulars.

- [`formMethod`](/de/docs/Web/API/HTMLInputElement/formMethod)

  - : Ein String, der das [`formmethod`](/de/docs/Web/HTML/Reference/Elements/input#formmethod)-Attribut des Elements darstellt und die HTTP-Methode enthält, die der Browser verwendet, um das Formular zu übermitteln. Dies überschreibt das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des übergeordneten Formulars.

- [`formNoValidate`](/de/docs/Web/API/HTMLInputElement/formNoValidate)

  - : Ein Boolean, der das [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate)-Attribut des Elements darstellt und angibt, dass das Formular bei der Übermittlung nicht validiert werden soll. Dies überschreibt das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des übergeordneten Formulars.

- [`formTarget`](/de/docs/Web/API/HTMLInputElement/formTarget)
  - : Ein String, der das [`formtarget`](/de/docs/Web/HTML/Reference/Elements/input#formtarget)-Attribut des Elements darstellt und einen Namen oder ein Schlüsselwort enthält, das angibt, wo die Antwort angezeigt werden soll, die nach dem Absenden des Formulars empfangen wird. Dies überschreibt das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des übergeordneten Formulars.

### Instanz-Eigenschaften, die für jeden Typ von Eingabeelement gelten, der nicht versteckt ist

- [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled)

  - : Ein Boolean, der das [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled)-Attribut des Elements darstellt und angibt, dass die Steuerung für Interaktionen nicht verfügbar ist. Die Eingabewerte werden nicht mit dem Formular gesendet. Siehe auch [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly).

- [`required`](/de/docs/Web/API/HTMLInputElement/required)

  - : Ein Boolean, der das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut des Elements darstellt und angibt, dass der Benutzer einen Wert eingeben muss, bevor er ein Formular absenden kann.

- [`validationMessage`](/de/docs/Web/API/HTMLInputElement/validationMessage) {{ReadOnlyInline}}

  - : Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die das Steuerungselement nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn das Steuerelement kein Kandidat für die Einschränkungsvalidierung ist ([`willValidate`](/de/docs/Web/API/HTMLInputElement/willValidate) ist `false`) oder es seine Einschränkungen erfüllt. Dieser Wert kann mit der Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) gesetzt werden.

- [`validity`](/de/docs/Web/API/HTMLInputElement/validity) {{ReadOnlyInline}}

  - : Gibt den aktuellen Gültigkeitszustand des Elements zurück.

- [`willValidate`](/de/docs/Web/API/HTMLInputElement/willValidate) {{ReadOnlyInline}}
  - : Gibt zurück, ob das Element ein Kandidat für die Einschränkungsvalidierung ist. Es ist `false`, wenn keine Bedingungen es von der Einschränkungsvalidierung ausschließen, einschließlich: sein `type` ist einer von `hidden`, `reset` oder `button`, es hat einen {{HTMLElement("datalist")}}-Vorfahren oder seine `disabled`-Eigenschaft ist `true`.

### Instanz-Eigenschaften, die nur für Elemente des Typs Checkbox oder Radio gelten

- [`checked`](/de/docs/Web/API/HTMLInputElement/checked)

  - : Ein Boolean, der den aktuellen Zustand des Elements darstellt.

- [`defaultChecked`](/de/docs/Web/API/HTMLInputElement/defaultChecked)

  - : Ein Boolean, der den Standardzustand eines Options- oder Kontrollkästchens darstellt, wie er im HTML ursprünglich spezifiziert wurde, welches dieses Objekt erstellt hat.

- [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate)
  - : Ein Boolean, der darstellt, ob das Kontrollkästchen oder der Optionsknopf in einem unbestimmten Zustand ist. Für Kontrollkästchen bewirkt dies, dass das Erscheinungsbild des Kontrollkästchens auf irgendeine Weise verdeckt/ausgegraut wird, um anzuzeigen, dass sein Zustand unbestimmt ist (nicht angekreuzt, aber auch nicht abgehakt). Beeinflusst nicht den Wert des `checked`-Attributs, und das Klicken auf das Kontrollkästchen setzt den Wert auf false.

### Instanz-Eigenschaften, die nur für Elemente des Typs Bild gelten

- [`alt`](/de/docs/Web/API/HTMLInputElement/alt)

  - : Ein String, der das [`alt`](/de/docs/Web/HTML/Reference/Elements/input#alt)-Attribut des Elements darstellt und alternativen Text enthält, der verwendet werden kann.

- [`height`](/de/docs/Web/API/HTMLInputElement/height)

  - : Ein String, der das [`height`](/de/docs/Web/HTML/Reference/Elements/input#height)-Attribut des Elements darstellt, welches die Höhe des angezeigten Bildes für den Button definiert.

- [`src`](/de/docs/Web/API/HTMLInputElement/src)

  - : Ein String, der das [`src`](/de/docs/Web/HTML/Reference/Elements/input#src)-Attribut des Elements darstellt, welches eine URI für den Speicherort eines Bildes angibt, das auf dem grafischen Senden-Button angezeigt werden soll.

- [`width`](/de/docs/Web/API/HTMLInputElement/width)
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Reference/Elements/input#width)-Attribut des Elements darstellt, welches die Breite des angezeigten Bildes für den Button definiert.

### Instanz-Eigenschaften, die nur für Elemente des Typs Datei gelten

- [`accept`](/de/docs/Web/API/HTMLInputElement/accept)

  - : Ein String, der das [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept)-Attribut des Elements darstellt und eine kommagetrennte Liste von Dateitypen enthält, die ausgewählt werden können.

- [`capture`](/de/docs/Web/API/HTMLInputElement/capture)

  - : Ein String, der das [`capture`](/de/docs/Web/HTML/Reference/Elements/input#capture)-Attribut des Elements darstellt und die Medienaufnahme-Eingabemethode in Datei-Upload-Steuerelementen angibt.

- [`files`](/de/docs/Web/API/HTMLInputElement/files)

  - : Eine [`FileList`](/de/docs/Web/API/FileList), die die zur Upload ausgewählten Dateien darstellt.

- [`webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory)

  - : Ein Boolean, der das [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input#webkitdirectory)-Attribut darstellt. Wenn `true`, akzeptiert die Dateisystemauswahlschnittstelle nur Verzeichnisse anstelle von Dateien.

- [`webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries) {{ReadOnlyInline}}
  - : Beschreibt die aktuell ausgewählten Dateien oder Verzeichnisse.

### Instanz-Eigenschaften, die nur für sichtbare Elemente enthaltenen Text oder Zahlen gelten

- [`autocomplete`](/de/docs/Web/API/HTMLInputElement/autocomplete)

  - : Ein String, der das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut des Elements darstellt und angibt, ob der Wert der Steuerung vom Browser automatisch vervollständigt werden kann.

- [`max`](/de/docs/Web/API/HTMLInputElement/max)

  - : Ein String, der das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut des Elements darstellt und den maximalen (numerischen oder datumszeitlichen) Wert für diesen Artikel enthält, der nicht kleiner als sein Minimum ([`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attribut) sein darf.

- [`maxLength`](/de/docs/Web/API/HTMLInputElement/maxLength)

  - : Eine Zahl, die das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribut des Elements darstellt und die maximale Anzahl der Zeichen (in Unicode-Code-Punkten) enthält, die der Wert haben kann.

- [`min`](/de/docs/Web/API/HTMLInputElement/min)

  - : Ein String, der das [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attribut des Elements darstellt und den minimalen (numerischen oder datumszeitlichen) Wert für diesen Artikel enthält, der nicht größer als sein Maximum ([`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut) sein darf.

- [`minLength`](/de/docs/Web/API/HTMLInputElement/minLength)

  - : Eine Zahl, die das [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut des Elements darstellt und die minimale Anzahl der Zeichen (in Unicode-Code-Punkten) enthält, die der Wert haben kann.

- [`pattern`](/de/docs/Web/API/HTMLInputElement/pattern)

  - : Ein String, der das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut des Elements darstellt und einen regulären Ausdruck enthält, gegen den der Wert der Kontrolle überprüft wird. Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um das Muster zu beschreiben und den Benutzer zu unterstützen. Dieses Attribut gilt nur, wenn der Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs `text`, `search`, `tel`, `url` oder `email` ist.

- [`placeholder`](/de/docs/Web/API/HTMLInputElement/placeholder)

  - : Ein String, der das [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attribut des Elements darstellt und einen Hinweis an den Benutzer enthält, was in die Steuerung eingegeben werden kann. Der Platzhaltertext darf keine Wagenrückläufe oder Zeilenumbrüche enthalten. Dieses Attribut gilt nur, wenn der Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs `text`, `search`, `tel`, `url` oder `email` ist.

- [`readOnly`](/de/docs/Web/API/HTMLInputElement/readOnly)

  - : Ein Boolean, der das [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly)-Attribut des Elements darstellt und angibt, dass der Benutzer den Wert der Steuerung nicht ändern kann. Dies wird ignoriert, wenn der [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `hidden`, `range`, `color`, `checkbox`, `radio`, `file` oder ein Button-Typ ist.

- [`selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection)

  - : Ein String, der die Richtung darstellt, in welcher die Auswahl erfolgt ist. Mögliche Werte sind: `forward` (die Auswahl wurde in der Start-zum-Ende-Richtung der aktuellen Gebietsschemaeinstellung durchgeführt), `backward` (die entgegengesetzte Richtung) oder `none` (die Richtung ist unbekannt).

- [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd)

  - : Eine Zahl, die den Endindex des ausgewählten Textes darstellt. Wenn keine Auswahl vorhanden ist, gibt dies den Versatz des Zeichens zurück, das unmittelbar dem aktuellen Textcursor-Position folgt.

- [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart)

  - : Eine Zahl, die den Anfangsindex des ausgewählten Textes darstellt. Wenn nichts ausgewählt ist, gibt dies die Position des Textcursors (Caret) innerhalb des {{HTMLElement("input")}}-Elements zurück.

- [`size`](/de/docs/Web/API/HTMLInputElement/size)
  - : Eine Zahl, die das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut des Elements darstellt und die visuelle Größe der Steuerung enthält. Dieser Wert ist in Pixeln, sofern der [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Wert nicht `text` oder `password` ist; in diesem Fall ist es eine ganze Zahl von Zeichen. Gilt nur, wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) auf `text`, `search`, `tel`, `url`, `email` oder `password` gesetzt ist.

## Instanz-Methoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)

  - : Gibt einen Boolean-Wert zurück, der `false` ist, wenn das Element ein Kandidat für die Einschränkungsvalidierung ist und seine Einschränkungen nicht erfüllt. In diesem Fall wird auch ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis auf dem Element gefeuert. Es gibt `true` zurück, wenn das Element kein Kandidat für die Einschränkungsvalidierung ist oder es seine Einschränkungen erfüllt.

- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)

  - : Führt die Methode `checkValidity()` aus, und wenn sie `false` zurückgibt (für eine ungültige Eingabe oder kein Musterattribut bereitgestellt), dann wird dem Benutzer gemeldet, dass die Eingabe ungültig ist, genauso wie bei einem Formularversand.

- [`select()`](/de/docs/Web/API/HTMLInputElement/select)

  - : Wählt den gesamten Text im Eingabeelement aus und fokussiert ihn, sodass der Benutzer anschließend den gesamten Inhalt ersetzen kann.

- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)

  - : Legt eine benutzerdefinierte Fehlermeldung für das Element fest. Wenn diese Nachricht nicht der leere String ist, leidet das Element unter einem benutzerdefinierten Validitätsfehler und ist nicht gültig.

- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)

  - : Ersetzt einen Textbereich im Eingabeelement mit neuem Text.

- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)

  - : Wählt einen Bereich von Text im Eingabeelement aus (fokussiert ihn aber nicht).

- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)

  - : Zeigt einen Browser-Auswahldialog für Datum, Uhrzeit, Farbe und Dateien.

- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)

  - : Verringert den [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) um ([`step`](/de/docs/Web/HTML/Reference/Elements/input#step) \* n), wobei n standardmäßig 1 ist, wenn nicht angegeben.

- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) um ([`step`](/de/docs/Web/HTML/Reference/Elements/input#step) \* n), wobei n standardmäßig 1 ist, wenn nicht angegeben.

## Ereignisse

_Erbt auch Ereignisse von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Hören Sie diese Ereignisse, indem Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden oder einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interface zuweisen:

- [`cancel`](/de/docs/Web/API/HTMLInputElement/cancel_event) Ereignis
  - : Wird ausgelöst, wenn der Benutzer den Dateiauswahldialog mit der <kbd>Esc</kbd>-Taste oder dem Abbrechen-Knopf abbricht und wenn der Benutzer dieselben Dateien erneut auswählt, die zuvor ausgewählt wurden.
- [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis
  - : Wird ausgelöst, wenn ein Element seine Einschränkungen bei der Einschränkungsvalidierung nicht erfüllt.
- [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignis {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn eine Suche auf einem {{HTMLElement("input")}} mit `type="search"` initiiert wird.
- [`select`](/de/docs/Web/API/HTMLInputElement/select_event) Ereignis
  - : Wird ausgelöst, wenn etwas Text ausgewählt wurde.
- [`selectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event) Ereignis
  - : Wird ausgelöst, wenn die Textauswahl in einem {{HTMLElement("input")}}-Element geändert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das dieses Interface implementiert: {{HTMLElement("input")}}
