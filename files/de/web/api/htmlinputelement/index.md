---
title: HTMLInputElement
slug: Web/API/HTMLInputElement
l10n:
  sourceCommit: de5b557883e8eff2514f0fe6eeb180db782575b1
---

{{APIRef("HTML DOM")}}

Die **`HTMLInputElement`**-Schnittstelle bietet spezielle Eigenschaften und Methoden zur Manipulation der Optionen, des Layouts und der Präsentation von {{HTMLElement("input")}}-Elementen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Einige Eigenschaften gelten nur für Eingabeelementtypen, die die entsprechenden Attribute unterstützen.

- [`align`](/de/docs/Web/API/HTMLInputElement/align) {{Deprecated_Inline}}
  - : Ein String, der die Ausrichtung des Elements darstellt. _Verwenden Sie stattdessen CSS._

- [`alpha`](/de/docs/Web/API/HTMLInputElement/alpha) {{experimental_inline}}
  - : Ein Boolean, der das [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha)-Attribut des Elements darstellt und angibt, ob der Alpha-Komponente der Farbe vom Benutzer manipuliert werden kann und nicht vollständig undurchsichtig sein muss.

- [`colorSpace`](/de/docs/Web/API/HTMLInputElement/colorSpace)
  - : Ein String, der das [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace)-Attribut des Elements darstellt und den {{Glossary("color_space", "Farbraum")}} der serialisierten CSS-Farbe (sRGB oder display-p3) angibt.

- [`defaultValue`](/de/docs/Web/API/HTMLInputElement/defaultValue)
  - : Ein String, der den Standardwert darstellt, wie er ursprünglich im HTML angegeben wurde, das dieses Objekt erstellt hat.

- [`dirName`](/de/docs/Web/API/HTMLInputElement/dirName)
  - : Ein String, der die Direktionalität des Elements darstellt.

- [`incremental`](/de/docs/Web/API/HTMLInputElement/incremental) {{Non-standard_Inline}}
  - : Ein Boolean, der den Auslösemodus des Suchevents darstellt. Wenn `true`, wird bei jedem Tastendruck oder beim Klicken auf die Abbrechen-Schaltfläche ausgelöst; andernfalls wird beim Drücken der <kbd>Enter</kbd>-Taste ausgelöst.

- [`labels`](/de/docs/Web/API/HTMLInputElement/labels) {{ReadOnlyInline}}
  - : Gibt eine Liste von {{ HTMLElement("label") }}-Elementen zurück, die Labels für dieses Element sind.

- [`list`](/de/docs/Web/API/HTMLInputElement/list) {{ReadOnlyInline}}
  - : Gibt das Element zurück, auf das durch das [`list`](/de/docs/Web/HTML/Reference/Elements/input#list)-Attribut verwiesen wird. Die Eigenschaft kann `null` sein, wenn kein HTML-Element im selben Baum gefunden wird.

- [`multiple`](/de/docs/Web/API/HTMLInputElement/multiple)
  - : Ein Boolean, der das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut des Elements darstellt und angibt, ob mehr als ein Wert möglich ist (z.B. mehrere Dateien).

- [`name`](/de/docs/Web/API/HTMLInputElement/name)
  - : Ein String, der das [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut des Elements darstellt und einen Namen enthält, der das Element beim Senden des Formulars identifiziert.

- [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction)
  - : Ruft die Aktion ab, die auf ein Popover-Element, das von einem {{HTMLElement("input")}}-Element vom Typ `type="button"` gesteuert wird, angewendet werden soll (`"hide"`, `"show"` oder `"toggle"`) und legt diese fest. Es spiegelt den Wert des [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/input#popovertargetaction)-HTML-Attributs wider.

- [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement)
  - : Ruft das zu steuernde Popover-Element über ein {{HTMLElement("input")}}-Element vom Typ `type="button"` ab und legt es fest. Das JavaScript-Äquivalent des [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/input#popovertarget)-HTML-Attributs.

- [`step`](/de/docs/Web/API/HTMLInputElement/step)
  - : Ein String, der das [`step`](/de/docs/Web/HTML/Reference/Elements/input#step)-Attribut des Elements darstellt, das zusammen mit [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) und [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) verwendet wird, um die Schritte zu begrenzen, bei denen ein numerischer oder Datums-/Zeitwert festgelegt werden kann. Es kann der String `any` oder eine positive Gleitkommazahl sein. Wenn dies nicht auf `any` eingestellt ist, akzeptiert die Steuerung nur Werte in Vielfachen des Schrittwerts, die größer als das Minimum sind.

- [`type`](/de/docs/Web/API/HTMLInputElement/type)
  - : Ein String, der das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut des Elements darstellt und den anzuzeigenden Steuertyp angibt. Für mögliche Werte siehe die Dokumentation des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs.

- [`useMap`](/de/docs/Web/API/HTMLInputElement/useMap) {{Deprecated_Inline}}
  - : Ein String, der eine clientseitige Image-Map darstellt.

- [`value`](/de/docs/Web/API/HTMLInputElement/value)
  - : Ein String, der den aktuellen Wert der Steuerung darstellt. Wenn der Benutzer einen anderen als den erwarteten Wert eingibt, kann dies einen leeren String zurückgeben.

- [`valueAsDate`](/de/docs/Web/API/HTMLInputElement/valueAsDate)
  - : Ein {{jsxref("Date")}}, der den Wert des Elements darstellt, interpretiert als Datum, oder `null`, wenn die Umwandlung nicht möglich ist.

- [`valueAsNumber`](/de/docs/Web/API/HTMLInputElement/valueAsNumber)
  - : Eine Zahl, die den Wert des Elements darstellt, interpretiert als einer der folgenden Werte in dieser Reihenfolge: Ein Zeitwert, eine Zahl oder `NaN`, wenn die Umwandlung unmöglich ist.

### Instanzeigenschaften in Bezug auf das übergeordnete Formular

- [`form`](/de/docs/Web/API/HTMLInputElement/form) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das übergeordnete {{HTMLElement("form")}}-Element zurück.

- [`formAction`](/de/docs/Web/API/HTMLInputElement/formAction)
  - : Ein String, der das [`formaction`](/de/docs/Web/HTML/Reference/Elements/input#formaction)-Attribut des Elements darstellt und die URL eines Programms enthält, das die vom Element übermittelten Informationen verarbeitet. Dies überschreibt das [`action`](/de/docs/Web/HTML/Reference/Elements/form#action)-Attribut des übergeordneten Formulars.

- [`formEnctype`](/de/docs/Web/API/HTMLInputElement/formEnctype)
  - : Ein String, der das [`formenctype`](/de/docs/Web/HTML/Reference/Elements/input#formenctype)-Attribut des Elements darstellt und den Typ des Inhalts angibt, der verwendet wird, um das Formular an den Server zu senden. Dies überschreibt das [`enctype`](/de/docs/Web/HTML/Reference/Elements/form#enctype)-Attribut des übergeordneten Formulars.

- [`formMethod`](/de/docs/Web/API/HTMLInputElement/formMethod)
  - : Ein String, der das [`formmethod`](/de/docs/Web/HTML/Reference/Elements/input#formmethod)-Attribut des Elements darstellt und die HTTP-Methode enthält, die der Browser verwendet, um das Formular zu senden. Dies überschreibt das [`method`](/de/docs/Web/HTML/Reference/Elements/form#method)-Attribut des übergeordneten Formulars.

- [`formNoValidate`](/de/docs/Web/API/HTMLInputElement/formNoValidate)
  - : Ein Boolean, der das [`formnovalidate`](/de/docs/Web/HTML/Reference/Elements/input#formnovalidate)-Attribut des Elements darstellt und angibt, dass das Formular nicht validiert werden soll, wenn es gesendet wird. Dies überschreibt das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut des übergeordneten Formulars.

- [`formTarget`](/de/docs/Web/API/HTMLInputElement/formTarget)
  - : Ein String, der das [`formtarget`](/de/docs/Web/HTML/Reference/Elements/input#formtarget)-Attribut des Elements darstellt und einen Namen oder ein Schlüsselwort enthält, das angibt, wo die Antwort angezeigt werden soll, die nach dem Senden des Formulars empfangen wird. Dies überschreibt das [`target`](/de/docs/Web/HTML/Reference/Elements/form#target)-Attribut des übergeordneten Formulars.

### Instanzeigenschaften, die auf jeden sichtbaren Eingabetyp anwendbar sind, der nicht verborgen ist

- [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled)
  - : Ein Boolean, der das [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled)-Attribut des Elements darstellt und anzeigt, dass die Steuerung nicht zur Interaktion verfügbar ist. Die Eingabewerte werden nicht mit dem Formular gesendet. Siehe auch [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly).

- [`required`](/de/docs/Web/API/HTMLInputElement/required)
  - : Ein Boolean, der das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut des Elements darstellt und anzeigt, dass der Benutzer einen Wert eingeben muss, bevor ein Formular gesendet wird.

- [`validationMessage`](/de/docs/Web/API/HTMLInputElement/validationMessage) {{ReadOnlyInline}}
  - : Gibt eine lokalisierte Nachricht zurück, die die Validierungsbeschränkungen beschreibt, die die Steuerung nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn die Steuerung kein Kandidat für die Validierung von Einschränkungen ist ([`willValidate`](/de/docs/Web/API/HTMLInputElement/willValidate) ist `false`), oder sie erfüllt ihre Einschränkungen. Dieser Wert kann mit der [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)-Methode festgelegt werden.

- [`validity`](/de/docs/Web/API/HTMLInputElement/validity) {{ReadOnlyInline}}
  - : Gibt den aktuellen Gültigkeitsstatus des Elements zurück.

- [`willValidate`](/de/docs/Web/API/HTMLInputElement/willValidate) {{ReadOnlyInline}}
  - : Gibt zurück, ob das Element ein Kandidat für die Validierung von Einschränkungen ist. Es ist `false`, wenn irgendeine Bedingung es von der Validierung von Einschränkungen ausschließt, einschließlich: Sein `type` ist einer von `hidden`, `reset` oder `button`, es hat einen {{HTMLElement("datalist")}}-Vorfahren oder seine `disabled`-Eigenschaft ist `true`.

### Instanzeigenschaften, die nur bei Elementen vom Typ Checkbox oder Radio anwendbar sind

- [`checked`](/de/docs/Web/API/HTMLInputElement/checked)
  - : Ein Boolean, der den aktuellen Zustand des Elements darstellt.

- [`defaultChecked`](/de/docs/Web/API/HTMLInputElement/defaultChecked)
  - : Ein Boolean, der den Standardzustand einer Radiotaste oder eines Kontrollkästchens darstellt, wie er ursprünglich im HTML angegeben wurde, das dieses Objekt erstellt hat.

- [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate)
  - : Ein Boolean, der darstellt, ob das Kontrollkästchen oder die Radiotaste in einem unbestimmten Zustand ist. Bei Kontrollkästchen hat dies die Wirkung, dass das Erscheinungsbild des Kontrollkästchens auf eine Weise verdeckt bzw. ausgegraut wird, die anzeigt, dass sein Zustand unbestimmt ist (nicht markiert, aber auch nicht nicht markiert). Dies beeinflusst nicht den Wert des `checked`-Attributs, und durch Klicken auf das Kontrollkästchen wird der Wert auf false gesetzt.

### Instanzeigenschaften, die nur bei Elementen vom Typ Bild anwendbar sind

- [`alt`](/de/docs/Web/API/HTMLInputElement/alt)
  - : Ein String, der das [`alt`](/de/docs/Web/HTML/Reference/Elements/input#alt)-Attribut des Elements darstellt und alternativen Text enthält.

- [`height`](/de/docs/Web/API/HTMLInputElement/height)
  - : Ein String, der das [`height`](/de/docs/Web/HTML/Reference/Elements/input#height)-Attribut des Elements darstellt, das die Höhe des angezeigten Bildes für die Schaltfläche definiert.

- [`src`](/de/docs/Web/API/HTMLInputElement/src)
  - : Ein String, der das [`src`](/de/docs/Web/HTML/Reference/Elements/input#src)-Attribut des Elements darstellt, das eine URI für den Speicherort eines Bildes angibt, das auf der grafischen Absenden-Schaltfläche angezeigt werden soll.

- [`width`](/de/docs/Web/API/HTMLInputElement/width)
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Reference/Elements/input#width)-Attribut des Elements darstellt und die Breite des angezeigten Bildes für die Schaltfläche definiert.

### Instanzeigenschaften, die nur auf Elemente vom Typ Datei anwendbar sind

- [`accept`](/de/docs/Web/API/HTMLInputElement/accept)
  - : Ein String, der das [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept)-Attribut des Elements darstellt und eine durch Kommas getrennte Liste von Dateitypen enthält, die ausgewählt werden können.

- [`capture`](/de/docs/Web/API/HTMLInputElement/capture)
  - : Ein String, der das [`capture`](/de/docs/Web/HTML/Reference/Elements/input#capture)-Attribut des Elements darstellt und den Medienaufnahme-Eingabemethode in Datei-Upload-Steuerelementen angibt.

- [`files`](/de/docs/Web/API/HTMLInputElement/files)
  - : Eine [`FileList`](/de/docs/Web/API/FileList), die die zur Übertragung ausgewählten Dateien darstellt.

- [`webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory)
  - : Ein Boolean, der das [`webkitdirectory`](/de/docs/Web/HTML/Reference/Elements/input#webkitdirectory)-Attribut darstellt. Wenn `true`, akzeptiert die Dateisystemauswahloberfläche nur Verzeichnisse anstelle von Dateien.

- [`webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries) {{ReadOnlyInline}}
  - : Beschreibt die aktuell ausgewählten Dateien oder Verzeichnisse.

### Instanzeigenschaften, die nur auf sichtbare Elemente anwendbar sind, die Text oder Zahlen enthalten

- [`autocomplete`](/de/docs/Web/API/HTMLInputElement/autocomplete)
  - : Ein String, der das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut des Elements darstellt und angibt, ob der Wert der Steuerung automatisch vom Browser vervollständigt werden kann.

- [`max`](/de/docs/Web/API/HTMLInputElement/max)
  - : Ein String, der das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut des Elements darstellt, das den maximalen (numerischen oder Datums-/Zeit-)Wert für dieses Element enthält, der nicht kleiner als sein Mindestwert ([`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attribut) sein darf.

- [`maxLength`](/de/docs/Web/API/HTMLInputElement/maxLength)
  - : Eine Zahl, die das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribut des Elements darstellt und die maximale Anzahl von Zeichen (in Unicode-Codepunkten) enthält, die der Wert haben kann.

- [`min`](/de/docs/Web/API/HTMLInputElement/min)
  - : Ein String, der das [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attribut des Elements darstellt, das den minimalen (numerischen oder Datums-/Zeit-)Wert für dieses Element enthält, der nicht größer als sein Maximalwert ([`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut) sein darf.

- [`minLength`](/de/docs/Web/API/HTMLInputElement/minLength)
  - : Eine Zahl, die das [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut des Elements darstellt und die minimale Anzahl von Zeichen (in Unicode-Codepunkten) enthält, die der Wert haben kann.

- [`pattern`](/de/docs/Web/API/HTMLInputElement/pattern)
  - : Ein String, der das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut des Elements darstellt und ein regulärer Ausdruck enthält, gegen den der Wert der Steuerung überprüft wird. Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um das Muster zu beschreiben und dem Benutzer zu helfen. Dieses Attribut gilt nur, wenn der Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs `text`, `search`, `tel`, `url` oder `email` ist.

- [`placeholder`](/de/docs/Web/API/HTMLInputElement/placeholder)
  - : Ein String, der das [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder)-Attribut des Elements darstellt und einen Hinweis für den Benutzer enthält, was in die Steuerung eingegeben werden kann. Der Platzhaltertext darf keine Wagenrückläufe oder Zeilenumbrüche enthalten. Dieses Attribut gilt nur, wenn der Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs `text`, `search`, `tel`, `url` oder `email` ist.

- [`readOnly`](/de/docs/Web/API/HTMLInputElement/readOnly)
  - : Ein Boolean, der das [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly)-Attribut des Elements darstellt und angibt, dass der Benutzer den Wert der Steuerung nicht ändern kann. Dies wird ignoriert, wenn der [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `hidden`, `range`, `color`, `checkbox`, `radio`, `file` oder ein Schaltflächentyp ist.

- [`selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection)
  - : Ein String, der die Richtung darstellt, in der die Auswahl erfolgt ist. Mögliche Werte sind: `forward` (die Auswahl erfolgte in der Start-zu-Ende-Richtung der aktuellen Lokalisierung), `backward` (die entgegengesetzte Richtung) oder `none` (die Richtung ist unbekannt).

- [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd)
  - : Eine Zahl, die den Endindex des ausgewählten Textes darstellt. Wenn keine Auswahl getroffen wurde, gibt dies den Offset des Zeichens unmittelbar nach der aktuellen Text-Cursor-Position zurück.

- [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart)
  - : Eine Zahl, die den Anfangsindex des ausgewählten Textes darstellt. Wenn nichts ausgewählt ist, gibt dies die Position des Text-Cursors (Caret) innerhalb des {{HTMLElement("input")}}-Elements zurück.

- [`size`](/de/docs/Web/API/HTMLInputElement/size)
  - : Eine Zahl, die das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut des Elements darstellt und die visuelle Größe der Steuerung enthält. Dieser Wert ist in Pixeln angegeben, es sei denn, der Wert von [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) ist `text` oder `password`, in diesem Fall ist es eine ganze Zahl der Zeichen. Gilt nur, wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) auf `text`, `search`, `tel`, `url`, `email` oder `password` gesetzt ist.

## Instanzmethoden

_Erbt auch Methoden von ihrer übergeordneten Schnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)
  - : Gibt einen Boolean-Wert zurück, der `false` ist, wenn das Element ein Kandidat für die Validierung von Einschränkungen ist und seine Einschränkungen nicht erfüllt. In diesem Fall löst es auch ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis bei dem Element aus. Es gibt `true` zurück, wenn das Element kein Kandidat für die Validierung von Einschränkungen ist oder wenn es seine Einschränkungen erfüllt.

- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)
  - : Führt die `checkValidity()`-Methode aus und, wenn diese `false` (für eine ungültige Eingabe oder kein bereitgestelltes Musterattribut) zurückgibt, meldet sie dem Benutzer auf die gleiche Weise wie beim Absenden eines Formulars, dass die Eingabe ungültig ist.

- [`select()`](/de/docs/Web/API/HTMLInputElement/select)
  - : Wählt den gesamten Text im Eingabeelement aus und fokussiert es, sodass der Benutzer anschließend den gesamten Inhalt ersetzen kann.

- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)
  - : Setzt eine benutzerdefinierte Validierungsnachricht für das Element. Wenn diese Nachricht nicht der leere String ist, leidet das Element unter einem benutzerdefinierten Validitätsfehler und validiert nicht.

- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
  - : Ersetzt einen Textbereich im Eingabeelement durch neuen Text.

- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
  - : Wählt einen Bereich von Text im Eingabeelement aus (fokussiert es aber nicht).

- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)
  - : Zeigt einen Browser-Auswahldialog für Datum, Zeit, Farbe und Dateien an.

- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)
  - : Verringert den [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) um ([`step`](/de/docs/Web/HTML/Reference/Elements/input#step) \* n), wobei n standardmäßig 1 ist, wenn nicht angegeben.

- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) um ([`step`](/de/docs/Web/HTML/Reference/Elements/input#step) \* n), wobei n standardmäßig 1 ist, wenn nicht angegeben.

## Ereignisse

_Erbt auch Ereignisse von ihrer übergeordneten Schnittstelle, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Diese Ereignisse sollten durch die Verwendung von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisung eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle angehört werden:

- [`cancel`](/de/docs/Web/API/HTMLInputElement/cancel_event) Ereignis
  - : Wird ausgelöst, wenn der Benutzer das Dateiauswahl-Dialogfeld über die <kbd>Esc</kbd>-Taste oder die Abbrechen-Schaltfläche abbricht und wenn der Benutzer dieselben Dateien erneut auswählt, die zuvor ausgewählt wurden.

- [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis
  - : Wird ausgelöst, wenn ein Element während der Validierung von Einschränkungen seine Einschränkungen nicht erfüllt.

- [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignis {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn eine Suche über ein {{HTMLElement("input")}} vom Typ `type="search"` initiiert wird.

- [`select`](/de/docs/Web/API/HTMLInputElement/select_event) Ereignis
  - : Wird ausgelöst, wenn ein Teil des Textes ausgewählt wurde.

- [`selectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event) Ereignis
  - : Wird ausgelöst, wenn die Textauswahl in einem {{HTMLElement("input")}}-Element geändert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("input")}}
