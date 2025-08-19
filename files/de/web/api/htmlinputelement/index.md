---
title: HTMLInputElement
slug: Web/API/HTMLInputElement
l10n:
  sourceCommit: 6d4ac4a04fd5c01adc690b9c95de3d9261570212
---

{{APIRef("HTML DOM")}}

Das **`HTMLInputElement`**-Interface bietet spezielle Eigenschaften und Methoden zur Manipulation der Optionen, des Layouts und der Darstellung von {{HTMLElement("input")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Einige Eigenschaften gelten nur für Eingabeelementtypen, die die entsprechenden Attribute unterstützen.

- [`align`](/de/docs/Web/API/HTMLInputElement/align) {{Deprecated_Inline}}
  - : Ein String, der die Ausrichtung des Elements darstellt. _Verwenden Sie stattdessen CSS._

- [`alpha`](/de/docs/Web/API/HTMLInputElement/alpha) {{experimental_inline}}
  - : Ein Boolean, der das [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha)-Attribut des Elements darstellt und anzeigt, ob der Benutzer den Alpha-Wert der Farbe manipulieren kann und dieser nicht vollständig deckend sein muss.

- [`colorSpace`](/de/docs/Web/API/HTMLInputElement/colorSpace) {{experimental_inline}}
  - : Ein String, der das [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace)-Attribut des Elements darstellt und den {{Glossary("color_space", "Farbraum")}} der serialisierten CSS-Farbe (sRGB oder display-p3) angibt.

- [`defaultValue`](/de/docs/Web/API/HTMLInputElement/defaultValue)
  - : Ein String, der den Standardwert darstellt, wie er ursprünglich im HTML angegeben wurde, das dieses Objekt erstellt hat.

- [`dirName`](/de/docs/Web/API/HTMLInputElement/dirName)
  - : Ein String, der die Leserichtung des Elements darstellt.

- [`incremental`](/de/docs/Web/API/HTMLInputElement/incremental) {{Non-standard_Inline}}
  - : Ein Boolean, der den Suchereignismodus darstellt. Wenn `true`, wird bei jedem Tastendruck oder beim Klicken auf die Abbrechen-Schaltfläche ausgelöst; andernfalls wird beim Drücken von <kbd>Enter</kbd> ausgelöst.

- [`labels`](/de/docs/Web/API/HTMLInputElement/labels) {{ReadOnlyInline}}
  - : Gibt eine Liste von {{HTMLElement("label")}}-Elementen zurück, die Labels für dieses Element sind.

- [`list`](/de/docs/Web/API/HTMLInputElement/list) {{ReadOnlyInline}}
  - : Gibt das Element zurück, auf das vom [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut verwiesen wird. Die Eigenschaft kann `null` sein, wenn kein HTML-Element im gleichen Baum gefunden wird.

- [`multiple`](/de/docs/Web/API/HTMLInputElement/multiple)
  - : Ein Boolean, der das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut des Elements darstellt und angibt, ob mehr als ein Wert möglich ist (z. B. mehrere Dateien).

- [`name`](/de/docs/Web/API/HTMLInputElement/name)
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut des Elements darstellt und einen Namen enthält, der das Element beim Senden des Formulars identifiziert.

- [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction)
  - : Ruft die Aktion ab und setzt sie, die an einem Popover-Element, das von einem {{HTMLElement("input")}}-Element des Typs `type="button"` gesteuert wird, ausgeführt werden soll (`"hide"`, `"show"` oder `"toggle"`). Es spiegelt den Wert des [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/input#popovertargetaction)-HTML-Attributs wider.

- [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement)
  - : Ruft das Popover-Element ab und setzt es, das über ein {{HTMLElement("input")}}-Element des Typs `type="button"` gesteuert werden soll. Das JavaScript-Äquivalent zum [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/input#popovertarget)-HTML-Attribut.

- [`step`](/de/docs/Web/API/HTMLInputElement/step)
  - : Ein String, der das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut des Elements darstellt, welches mit [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) zusammenarbeitet, um die Schritte zu begrenzen, in denen ein Zahlen- oder Datumswert festgelegt werden kann. Es kann der String `any` oder eine positive Gleitkommazahl sein. Wenn dies nicht auf `any` gesetzt ist, akzeptiert die Steuerung nur Werte in Vielfachen des Schrittwertes, die größer als das Minimum sind.

- [`type`](/de/docs/Web/API/HTMLInputElement/type)
  - : Ein String, der das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut des Elements darstellt und den anzuzeigenden Steuerungstyp angibt. Für mögliche Werte siehe die Dokumentation zum [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut.

- [`useMap`](/de/docs/Web/API/HTMLInputElement/useMap) {{Deprecated_Inline}}
  - : Ein String, der eine client-seitige Bildkarte darstellt.

- [`value`](/de/docs/Web/API/HTMLInputElement/value)
  - : Ein String, der den aktuellen Wert der Steuerung darstellt. Wenn der Benutzer einen von dem erwarteten Wert abweichenden Wert eingibt, kann dies einen leeren String zurückgeben.

- [`valueAsDate`](/de/docs/Web/API/HTMLInputElement/valueAsDate)
  - : Ein {{jsxref("Date")}}, der den Wert des Elements als Datum interpretiert darstellt oder `null`, wenn die Umwandlung nicht möglich ist.

- [`valueAsNumber`](/de/docs/Web/API/HTMLInputElement/valueAsNumber)
  - : Eine Zahl, die den Wert des Elements darstellt, interpretiert als einer der folgenden (in der Reihenfolge): Ein Zeitwert, eine Zahl oder `NaN`, wenn die Umwandlung unmöglich ist.

### Instanz-Eigenschaften im Zusammenhang mit dem übergeordneten Formular

- [`form`](/de/docs/Web/API/HTMLInputElement/form) {{ReadOnlyInline}}
  - : Gibt eine Referenz zum übergeordneten {{HTMLElement("form")}}-Element zurück.

- [`formAction`](/de/docs/Web/API/HTMLInputElement/formAction)
  - : Ein String, der das [`formaction`](/de/docs/Web/HTML/Reference/Elements/input#formaction)-Attribut des Elements darstellt, das die URL eines Programms enthält, das die vom Element übermittelten Informationen verarbeitet. Dies überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des übergeordneten Formulars.

- [`formEnctype`](/de/docs/Web/API/HTMLInputElement/formEnctype)
  - : Ein String, der das [`formenctype`](/de/docs/Web/HTML/Reference/Elements/input#formenctype)-Attribut des Elements darstellt, das den Inhaltstyp enthält, der verwendet wird, um das Formular an den Server zu senden. Dies überschreibt das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des übergeordneten Formulars.

- [`formMethod`](/de/docs/Web/API/HTMLInputElement/formMethod)
  - : Ein String, der das [`formmethod`](/de/docs/Web/HTML/Reference/Elements/input#formmethod)-Attribut des Elements darstellt, das die HTTP-Methode enthält, die der Browser verwendet, um das Formular zu senden. Dies überschreibt das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des übergeordneten Formulars.

- [`formNoValidate`](/de/docs/Web/API/HTMLInputElement/formNoValidate)
  - : Ein Boolean, der das [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate)-Attribut des Elements darstellt und angibt, dass das Formular beim Absenden nicht validiert werden soll. Dies überschreibt das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des übergeordneten Formulars.

- [`formTarget`](/de/docs/Web/API/HTMLInputElement/formTarget)
  - : Ein String, der das [`formtarget`](/de/docs/Web/HTML/Reference/Elements/input#formtarget)-Attribut des Elements darstellt, das einen Namen oder ein Schlüsselwort enthält, das angibt, wo die Antwort angezeigt werden soll, die nach dem Senden des Formulars empfangen wird. Dies überschreibt das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des übergeordneten Formulars.

### Instanz-Eigenschaften, die für jeden Typ von Eingabeelement gelten, das nicht versteckt ist

- [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled)
  - : Ein Boolean, der das [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled)-Attribut des Elements darstellt und angibt, dass die Steuerung nicht für Interaktionen verfügbar ist. Die Eingabewerte werden nicht mit dem Formular gesendet. Siehe auch [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly).

- [`required`](/de/docs/Web/API/HTMLInputElement/required)
  - : Ein Boolean, der das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut des Elements darstellt und angibt, dass der Benutzer einen Wert eingeben muss, bevor er ein Formular absenden kann.

- [`validationMessage`](/de/docs/Web/API/HTMLInputElement/validationMessage) {{ReadOnlyInline}}
  - : Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die die Steuerung nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn die Steuerung kein Kandidat für die Einschränkungsvalidierung ist ([`willValidate`](/de/docs/Web/API/HTMLInputElement/willValidate) ist `false`), oder ihre Einschränkungen erfüllt. Dieser Wert kann mit der [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)-Methode festgelegt werden.

- [`validity`](/de/docs/Web/API/HTMLInputElement/validity) {{ReadOnlyInline}}
  - : Gibt den aktuellen Gültigkeitszustand des Elements zurück.

- [`willValidate`](/de/docs/Web/API/HTMLInputElement/willValidate) {{ReadOnlyInline}}
  - : Gibt zurück, ob das Element ein Kandidat für die Einschränkungsvalidierung ist. Es ist `false`, wenn irgendeine Bedingung es von der Einschränkungsvalidierung ausschließt, einschließlich: Sein `type` ist einer von `hidden`, `reset` oder `button`, es hat einen {{HTMLElement("datalist")}}-Vorfahren oder seine `disabled`-Eigenschaft ist `true`.

### Instanz-Eigenschaften, die nur für Elemente vom Typ Kontrollkästchen oder Radio gelten

- [`checked`](/de/docs/Web/API/HTMLInputElement/checked)
  - : Ein Boolean, der den aktuellen Zustand des Elements darstellt.

- [`defaultChecked`](/de/docs/Web/API/HTMLInputElement/defaultChecked)
  - : Ein Boolean, der den Standardzustand eines Optionsfelds oder Kontrollkästchens darstellt, wie er ursprünglich im HTML angegeben wurde, das dieses Objekt erstellt hat.

- [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate)
  - : Ein Boolean, der angibt, ob das Kontrollkästchen oder das Optionsfeld in einem unbestimmten Zustand ist. Bei Kontrollkästchen hat dies den Effekt, dass das Erscheinungsbild des Kontrollkästchens in irgendeiner Weise verdeckt/ausgegraut wird, um anzuzeigen, dass sein Zustand unbestimmt ist (nicht markiert, aber auch nicht nicht markiert). Beeinflusst nicht den Wert des `checked`-Attributes, und das Klicken auf das Kontrollkästchen setzt den Wert auf false.

### Instanz-Eigenschaften, die nur für Elemente vom Typ Bild gelten

- [`alt`](/de/docs/Web/API/HTMLInputElement/alt)
  - : Ein String, der das [`alt`](/de/docs/Web/HTML/Reference/Elements/input#alt)-Attribut des Elements darstellt, das alternativen Text enthält, der verwendet werden soll.

- [`height`](/de/docs/Web/API/HTMLInputElement/height)
  - : Ein String, der das [`height`](/de/docs/Web/HTML/Reference/Elements/input#height)-Attribut des Elements darstellt, das die Höhe des für die Schaltfläche angezeigten Bildes definiert.

- [`src`](/de/docs/Web/API/HTMLInputElement/src)
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Reference/Elements/input#src)-Attribut des Elements darstellt, welches eine URI für den Speicherort eines Bildes angibt, das auf der grafischen Absenden-Schaltfläche angezeigt werden soll.

- [`width`](/de/docs/Web/API/HTMLInputElement/width)
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Reference/Elements/input#width)-Attribut des Elements darstellt, das die Breite des für die Schaltfläche angezeigten Bildes definiert.

### Instanz-Eigenschaften, die nur für Elemente vom Typ Datei gelten

- [`accept`](/de/docs/Web/API/HTMLInputElement/accept)
  - : Ein String, der das [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept)-Attribut des Elements darstellt, das eine durch Kommas getrennte Liste von Dateitypen enthält, die ausgewählt werden können.

- [`capture`](/de/docs/Web/API/HTMLInputElement/capture)
  - : Ein String, der das [`capture`](/de/docs/Web/HTML/Reference/Elements/input#capture)-Attribut des Elements darstellt und die Methode der Media-Erfassung in Datei-Upload-Steuerungen angibt.

- [`files`](/de/docs/Web/API/HTMLInputElement/files)
  - : Eine [`FileList`](/de/docs/Web/API/FileList), die die für den Upload ausgewählten Dateien darstellt.

- [`webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory)
  - : Ein Boolean, der das [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input#webkitdirectory)-Attribut darstellt. Wenn `true`, akzeptiert die Dateisystem-Auswahloberfläche nur Verzeichnisse anstelle von Dateien.

- [`webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries) {{ReadOnlyInline}}
  - : Beschreibt die derzeit ausgewählten Dateien oder Verzeichnisse.

### Instanz-Eigenschaften, die nur für sichtbare Elemente mit Text oder Zahlen gelten

- [`autocomplete`](/de/docs/Web/API/HTMLInputElement/autocomplete)
  - : Ein String, der das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut des Elements darstellt und angibt, ob der Wert der Steuerung automatisch vom Browser vervollständigt werden kann.

- [`max`](/de/docs/Web/API/HTMLInputElement/max)
  - : Ein String, der das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut des Elements darstellt und den maximalen (numerischen oder datumsbezogenen) Wert für dieses Element enthält, der nicht kleiner als sein Minimum ([`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attribut) sein darf.

- [`maxLength`](/de/docs/Web/API/HTMLInputElement/maxLength)
  - : Eine Zahl, die das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribut des Elements darstellt und die maximale Anzahl von Zeichen (in Unicode-Codepunkten) enthält, die der Wert haben kann.

- [`min`](/de/docs/Web/API/HTMLInputElement/min)
  - : Ein String, der das [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attribut des Elements darstellt und den minimalen (numerischen oder datumsbezogenen) Wert für dieses Element enthält, der nicht größer als sein Maximum ([`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut) sein darf.

- [`minLength`](/de/docs/Web/API/HTMLInputElement/minLength)
  - : Eine Zahl, die das [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut des Elements darstellt und die minimale Anzahl von Zeichen (in Unicode-Codepunkten) enthält, die der Wert haben kann.

- [`pattern`](/de/docs/Web/API/HTMLInputElement/pattern)
  - : Ein String, der das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut des Elements darstellt, das ein reguläres Ausdrucksmuster enthält, gegen das der Wert der Steuerung geprüft wird. Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um das Muster zu beschreiben und dem Benutzer zu helfen. Dieses Attribut gilt nur, wenn der Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributes `text`, `search`, `tel`, `url` oder `email` ist.

- [`placeholder`](/de/docs/Web/API/HTMLInputElement/placeholder)
  - : Ein String, der das [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attribut des Elements darstellt und einen Hinweis an den Benutzer enthält, was in die Steuerung eingegeben werden kann. Der Platzhaltertext darf keine Wagenrückläufe oder Zeilenumbrüche enthalten. Dieses Attribut gilt nur, wenn der Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributes `text`, `search`, `tel`, `url` oder `email` ist.

- [`readOnly`](/de/docs/Web/API/HTMLInputElement/readOnly)
  - : Ein Boolean, der das [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly)-Attribut des Elements darstellt und angibt, dass der Benutzer den Wert der Steuerung nicht ändern kann. Dies wird ignoriert, wenn der [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `hidden`, `range`, `color`, `checkbox`, `radio`, `file` oder ein Button-Typ ist.

- [`selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection)
  - : Ein String, der die Richtung darstellt, in der die Auswahl erfolgt ist. Mögliche Werte sind: `forward` (die Auswahl wurde in der Start-zu-Ende-Richtung der aktuellen Lokalität durchgeführt), `backward` (die entgegengesetzte Richtung) oder `none` (die Richtung ist unbekannt).

- [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd)
  - : Eine Zahl, die den Endindex des ausgewählten Textes darstellt. Wenn keine Auswahl besteht, gibt dies den Offset des Zeichens unmittelbar nach der aktuellen Text-Eingabemarke zurück.

- [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart)
  - : Eine Zahl, die den Startindex des ausgewählten Textes darstellt. Wenn nichts ausgewählt ist, gibt dies die Position der Text-Eingabemarke (Caret) innerhalb des {{HTMLElement("input")}}-Elements zurück.

- [`size`](/de/docs/Web/API/HTMLInputElement/size)
  - : Eine Zahl, die das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut des Elements darstellt und die visuelle Größe der Steuerung enthält. Dieser Wert ist in Pixeln, es sei denn, der Wert von [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) ist `text` oder `password`, in welchem Fall es sich um eine ganze Zahl von Zeichen handelt. Gilt nur, wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) auf `text`, `search`, `tel`, `url`, `email` oder `password` gesetzt ist.

## Instanz-Methoden

_Erbt auch Methoden von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt einen Boolean-Wert zurück, der `false` ist, wenn das Element ein Kandidat für die Einschränkungsvalidierung ist und es seine Einschränkungen nicht erfüllt. In diesem Fall löst es auch ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis am Element aus. Es gibt `true` zurück, wenn das Element kein Kandidat für die Einschränkungsvalidierung ist oder es seine Einschränkungen erfüllt.

- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Führt die Methode `checkValidity()` aus, und wenn sie false zurückgibt (für eine ungültige Eingabe oder kein bereitgestelltes Pattern-Attribut), dann meldet sie dem Benutzer in derselben Weise, dass die Eingabe ungültig ist, als ob Sie ein Formular gesendet hätten.

- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Text im Eingabeelement aus und fokussiert ihn, damit der Benutzer anschließend den gesamten Inhalt ersetzen kann.

- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Fehlermeldung für das Element. Wenn diese Nachricht nicht der leere String ist, dann hat das Element einen benutzerdefinierten Gültigkeitsfehler und validiert nicht.

- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Ersetzt einen Textbereich im Eingabeelement durch neuen Text.

- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt einen Bereich von Text im Eingabeelement aus (fokussiert es jedoch nicht).

- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt ein Browser-Auswahlwerkzeug für Datum, Uhrzeit, Farbe und Dateien an.

- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) um ([`step`](/de/docs/Web/HTML/Reference/Elements/input#step) \* n), wobei n standardmäßig 1 ist, wenn nicht angegeben.

- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) um ([`step`](/de/docs/Web/HTML/Reference/Elements/input#step) \* n), wobei n standardmäßig 1 ist, wenn nicht angegeben.

## Ereignisse

_Erbt auch Ereignisse von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener auf die `oneventname`-Eigenschaft dieses Interfaces zuweisen:

- [`cancel`](/de/docs/Web/API/HTMLInputElement/cancel_event) Ereignis
  - : Wird ausgelöst, wenn der Benutzer den Datei-Auswahldialog über die <kbd>Esc</kbd>-Taste oder die Abbrechen-Schaltfläche abbricht und wenn der Benutzer dieselben Dateien erneut auswählt, die zuvor ausgewählt wurden.

- [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis
  - : Wird ausgelöst, wenn ein Element seine Einschränkungen während der Einschränkungsvalidierung nicht erfüllt.

- [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignis {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn eine Suche in einem {{HTMLElement("input")}} vom `type="search"` initiiert wird.

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
