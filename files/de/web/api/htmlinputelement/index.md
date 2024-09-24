---
title: HTMLInputElement
slug: Web/API/HTMLInputElement
l10n:
  sourceCommit: 050bcdba594e759c0a4dde172de5d334f5a3b20f
---

{{APIRef("HTML DOM")}}

Das **`HTMLInputElement`** Interface bietet spezielle Eigenschaften und Methoden zur Manipulation der Optionen, des Layouts und der Darstellung von {{HtmlElement("input")}}-Elementen.

{{InheritanceDiagram}}

## Instanzen-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, {{domxref("HTMLElement")}}._

Einige Eigenschaften gelten nur für `input`-Elementtypen, die die entsprechenden Attribute unterstützen.

- {{domxref("HTMLInputElement.align", "align")}} {{Deprecated_Inline}}

  - : Ein String, der die Ausrichtung des Elements darstellt. _Verwenden Sie stattdessen CSS._

- {{domxref("HTMLInputElement.defaultValue", "defaultValue")}}

  - : Ein String, der den Standardwert darstellt, wie er ursprünglich in dem HTML spezifiziert wurde, das dieses Objekt erstellt hat.

- {{domxref("HTMLInputElement.dirName", "dirName")}}

  - : Ein String, der die Richtung des Elements darstellt.

- {{domxref("HTMLInputElement.incremental", "incremental")}} {{Non-standard_Inline}}

  - : Ein boolescher Wert, der die Suchereignis-Feuermodus darstellt. Wenn `true`, feuert es bei jedem Tastendruck oder beim Klicken auf die Abbruchtaste; andernfalls feuert es bei Drücken der Taste <kbd>Eingabe</kbd>.

- {{domxref("HTMLInputElement.labels", "labels")}} {{ReadOnlyInline}}

  - : Gibt eine Liste von {{ HTMLElement("label") }}-Elementen zurück, die Labels für dieses Element sind.

- {{domxref("HTMLInputElement.list", "list")}} {{ReadOnlyInline}}

  - : Gibt das Element zurück, auf das durch das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut verwiesen wird. Die Eigenschaft kann `null` sein, wenn kein HTML-Element im selben Baum gefunden wird.

- {{domxref("HTMLInputElement.multiple", "multiple")}}

  - : Ein boolescher Wert, der das [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut des Elements darstellt und angibt, ob mehr als ein Wert möglich ist (z.B. mehrere Dateien).

- {{domxref("HTMLInputElement.name", "name")}}

  - : Ein String, der das [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut des Elements darstellt und einen Namen enthält, der das Element beim Absenden des Formulars identifiziert.

- {{domxref("HTMLInputElement.popoverTargetAction", "popoverTargetAction")}}

  - : Ruft die Aktion ab und legt sie fest (`"hide"`, `"show"` oder `"toggle"`), die bei einem durch ein {{htmlelement("input")}}-Element des Typs `button` gesteuerten Popover-Element ausgeführt werden soll. Es spiegelt den Wert des HTML-Attributs [`popovertargetaction`](/de/docs/Web/HTML/Element/input#popovertargetaction) wider.

- {{domxref("HTMLInputElement.popoverTargetElement", "popoverTargetElement")}}

  - : Ruft das Popover-Element ab und legt es fest, das über ein {{htmlelement("input")}}-Element des Typs `button` gesteuert werden soll. Das JavaScript-Äquivalent des HTML-Attributs [`popovertarget`](/de/docs/Web/HTML/Element/input#popovertarget).

- {{domxref("HTMLInputElement.step", "step")}}

  - : Ein String, der das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut des Elements darstellt, welches mit [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) arbeitet, um die Inkremente zu begrenzen, bei denen ein numerischer oder datumszeitlicher Wert festgelegt werden kann. Es kann der String `any` oder eine positive Gleitkommazahl sein. Wenn dies nicht auf `any` gesetzt ist, nimmt die Steuerung nur Werte an, die Vielfache des Schrittwerts sind und größer als das Minimum.

- {{domxref("HTMLInputElement.type", "type")}}

  - : Ein String, der das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut des Elements darstellt und den Typ der anzuzeigenden Steuerkomponente angibt. Mögliche Werte finden Sie in der Dokumentation für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut.

- {{domxref("HTMLInputElement.useMap", "useMap")}} {{Deprecated_Inline}}

  - : Ein String, der eine clientseitige Imagemap darstellt.

- {{domxref("HTMLInputElement.value", "value")}}

  - : Ein String, der den aktuellen Wert der Steuerung darstellt. Wenn der Benutzer einen Wert eingibt, der von dem erwarteten abweicht, kann dies einen leeren String zurückgeben.

- {{domxref("HTMLInputElement.valueAsDate", "valueAsDate")}}

  - : Ein {{jsxref("Date")}}, der den Wert des Elements darstellt, interpretiert als Datum, oder `null`, wenn eine Umwandlung nicht möglich ist.

- {{domxref("HTMLInputElement.valueAsNumber", "valueAsNumber")}}
  - : Eine Zahl, die den Wert des Elements darstellt, interpretiert als eine der folgenden in Ordnung: Ein Zeitwert, eine Zahl oder `NaN`, wenn eine Umwandlung unmöglich ist.

### Instanzen-Eigenschaften, die sich auf das übergeordnete Formular beziehen

- {{domxref("HTMLInputElement.form", "form")}} {{ReadOnlyInline}}

  - : Gibt eine Referenz auf das übergeordnete {{HtmlElement("form")}}-Element zurück.

- {{domxref("HTMLInputElement.formAction", "formAction")}}

  - : Ein String, der das [`formaction`](/de/docs/Web/HTML/Element/input#formaction)-Attribut des Elements darstellt und die URL eines Programms enthält, das Informationen verarbeitet, die durch das Element übermittelt werden. Dies überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des übergeordneten Formulars.

- {{domxref("HTMLInputElement.formEnctype", "formEnctype")}}

  - : Ein String, der das [`formenctype`](/de/docs/Web/HTML/Element/input#formenctype)-Attribut des Elements darstellt und den Typ des Inhalts enthält, der zur Übermittlung des Formulars an den Server verwendet wird. Dies überschreibt das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des übergeordneten Formulars.

- {{domxref("HTMLInputElement.formMethod", "formMethod")}}

  - : Ein String, der das [`formmethod`](/de/docs/Web/HTML/Element/input#formmethod)-Attribut des Elements darstellt und die HTTP-Methode enthält, die der Browser zur Übermittlung des Formulars verwendet. Dies überschreibt das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des übergeordneten Formulars.

- {{domxref("HTMLInputElement.formNoValidate", "formNoValidate")}}

  - : Ein boolescher Wert, der das [`formnovalidate`](/de/docs/Web/HTML/Element/input#formnovalidate)-Attribut des Elements darstellt und angibt, dass das Formular bei der Übermittlung nicht validiert werden soll. Dies überschreibt das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des übergeordneten Formulars.

- {{domxref("HTMLInputElement.formTarget", "formTarget")}}
  - : Ein String, der das [`formtarget`](/de/docs/Web/HTML/Element/input#formtarget)-Attribut des Elements darstellt und einen Namen oder ein Schlüsselwort enthält, das angibt, wo die Antwort angezeigt werden soll, die nach dem Absenden des Formulars empfangen wird. Dies überschreibt das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des übergeordneten Formulars.

### Instanzen-Eigenschaften, die für jeden Typ von `input`-Element gelten, das nicht ausgeblendet ist

- {{domxref("HTMLInputElement.disabled", "disabled")}}

  - : Ein boolescher Wert, der das [`disabled`](/de/docs/Web/HTML/Element/input#disabled)-Attribut des Elements darstellt und angibt, dass die Steuerung nicht für die Interaktion verfügbar ist. Die Eingabewerte werden nicht mit dem Formular übermittelt. Siehe auch [`readonly`](/de/docs/Web/HTML/Element/input#readonly).

- {{domxref("HTMLInputElement.required", "required")}}

  - : Ein boolescher Wert, der das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut des Elements darstellt und angibt, dass der Benutzer einen Wert eingeben muss, bevor er ein Formular absenden kann.

- {{domxref("HTMLInputElement.validationMessage", "validationMessage")}} {{ReadOnlyInline}}

  - : Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die die Steuerung nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn die Steuerung kein Kandidat für die Einschränkungsvalidierung ist ([`willValidate`](/de/docs/Web/API/HTMLObjectElement/willValidate) ist `false`) oder sie ihre Einschränkungen erfüllt. Dieser Wert kann durch die Methode {{domxref("HTMLInputElement.setCustomValidity()", "setCustomValidity()")}} festgelegt werden.

- {{domxref("HTMLInputElement.validity", "validity")}} {{ReadOnlyInline}}

  - : Gibt den aktuellen Validierungszustand des Elements zurück.

- {{domxref("HTMLInputElement.willValidate", "willValidate")}} {{ReadOnlyInline}}
  - : Gibt zurück, ob das Element ein Kandidat für die Einschränkungsvalidierung ist. Es ist `false`, wenn Bedingungen es von der Einschränkungsvalidierung ausschließen, einschließlich: sein `type` ist einer von `hidden`, `reset` oder `button`, es hat einen {{HTMLElement("datalist")}}-Vorfahren oder seine `disabled`-Eigenschaft ist `true`.

### Instanzen-Eigenschaften, die nur auf Elemente vom Typ Checkbox oder Radio angewendet werden

- {{domxref("HTMLInputElement.checked", "checked")}}

  - : Ein boolescher Wert, der den aktuellen Zustand des Elements darstellt.

- {{domxref("HTMLInputElement.defaultChecked", "defaultChecked")}}

  - : Ein boolescher Wert, der den Standardzustand eines Radio-Buttons oder einer Checkbox darstellt, wie er ursprünglich im HTML spezifiziert wurde, das dieses Objekt erstellt hat.

- {{domxref("HTMLInputElement.indeterminate", "indeterminate")}}
  - : Ein boolescher Wert, der darstellt, ob die Checkbox oder der Radio-Button in einem unbestimmten Zustand ist. Bei Checkboxes ist die Wirkung, dass das Erscheinungsbild der Checkbox auf irgendeine Weise verdeckt/abgegraut wird, um anzuzeigen, dass ihr Zustand unbestimmt ist (nicht markiert, aber nicht abgewählt). Beeinflusst nicht den Wert des `checked`-Attributs und das Klicken auf die Checkbox setzt den Wert auf false.

### Instanzen-Eigenschaften, die nur auf Elemente vom Typ Bild angewendet werden

- {{domxref("HTMLInputElement.alt", "alt")}}

  - : Ein String, der das [`alt`](/de/docs/Web/HTML/Element/input#alt)-Attribut des Elements darstellt und alternativen Text enthält.

- {{domxref("HTMLInputElement.height", "height")}}

  - : Ein String, der das [`height`](/de/docs/Web/HTML/Element/input#height)-Attribut des Elements darstellt, das die Höhe des für die Schaltfläche angezeigten Bildes definiert.

- {{domxref("HTMLInputElement.src", "src")}}

  - : Ein String, der das [`src`](/de/docs/Web/HTML/Element/input#src)-Attribut des Elements darstellt, das eine URI für den Speicherort eines Bildes angibt, das auf der grafischen Absenden-Schaltfläche angezeigt wird.

- {{domxref("HTMLInputElement.width", "width")}}
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Element/input#width)-Attribut des Elements darstellt, das die Breite des für die Schaltfläche angezeigten Bildes definiert.

### Instanzen-Eigenschaften, die nur auf Elemente vom Typ Datei angewendet werden

- {{domxref("HTMLInputElement.accept", "accept")}}

  - : Ein String, der das [`accept`](/de/docs/Web/HTML/Element/input#accept)-Attribut des Elements darstellt und eine durch Kommas getrennte Liste von Dateitypen enthält, die ausgewählt werden können.

- {{domxref("HTMLInputElement.capture", "capture")}}

  - : Ein String, der das [`capture`](/de/docs/Web/HTML/Element/input#capture)-Attribut des Elements darstellt und die Medienaufnahmeeingabemethode in Datei-Upload-Steuerungen angibt.

- {{domxref("HTMLInputElement.files", "files")}}

  - : Eine {{domxref("FileList")}}, die die zur Auswahl stehenden Dateien für den Upload repräsentiert.

- {{domxref("HTMLInputElement.webkitdirectory", "webkitdirectory")}}

  - : Ein boolescher Wert, der das [`webkitdirectory`](/de/docs/Web/HTML/Element/input#webkitdirectory)-Attribut darstellt. Wenn `true`, akzeptiert die Dateisystem-Auswahloberfläche nur Verzeichnisse anstelle von Dateien.

- {{domxref("HTMLInputElement.webkitEntries", "webkitEntries")}} {{ReadOnlyInline}}
  - : Beschreibt die aktuell ausgewählten Dateien oder Verzeichnisse.

### Instanzen-Eigenschaften, die nur auf sichtbare Elemente angewendet werden, die Text oder Zahlen enthalten

- {{domxref("HTMLInputElement.autocomplete", "autocomplete")}}

  - : Ein String, der das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Attribut des Elements darstellt und angibt, ob der Wert der Steuerung automatisch vom Browser vervollständigt werden kann.

- {{domxref("HTMLInputElement.max", "max")}}

  - : Ein String, der das [`max`](/de/docs/Web/HTML/Element/input#max)-Attribut des Elements darstellt und den maximalen (numerischen oder datumszeitlichen) Wert für dieses Element enthält, der nicht kleiner als sein Minimum ([`min`](/de/docs/Web/HTML/Element/input#min)-Attribut) sein darf.

- {{domxref("HTMLInputElement.maxLength", "maxLength")}}

  - : Eine Zahl, die das [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribut des Elements darstellt und die maximale Anzahl von Zeichen (in Unicode-Codepunkten) enthält, die der Wert haben kann.

- {{domxref("HTMLInputElement.min", "min")}}

  - : Ein String, der das [`min`](/de/docs/Web/HTML/Element/input#min)-Attribut des Elements darstellt und den minimalen (numerischen oder datumszeitlichen) Wert für dieses Element enthält, der nicht größer als sein Maximum ([`max`](/de/docs/Web/HTML/Element/input#max)-Attribut) sein darf.

- {{domxref("HTMLInputElement.minLength", "minLength")}}

  - : Eine Zahl, die das [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut des Elements darstellt und die minimale Anzahl von Zeichen (in Unicode-Codepunkten) enthält, die der Wert haben kann.

- {{domxref("HTMLInputElement.pattern", "pattern")}}

  - : Ein String, der das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut des Elements darstellt und einen regulären Ausdruck enthält, gegen den der Wert der Steuerung überprüft wird. Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um das Muster zu beschreiben und dem Benutzer zu helfen. Dieses Attribut gilt nur, wenn der Wert des [`type`](/de/docs/Web/HTML/Element/input#type)-Attributs `text`, `search`, `tel`, `url` oder `email` ist.

- {{domxref("HTMLInputElement.placeholder", "placeholder")}}

  - : Ein String, der das [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attribut des Elements darstellt und einen Hinweis für den Benutzer enthält, was in die Steuerung eingegeben werden kann. Der Platzhaltertext darf keine Wagenrückläufe oder Zeilenwechsel enthalten. Dieses Attribut gilt nur, wenn der Wert des [`type`](/de/docs/Web/HTML/Element/input#type)-Attributs `text`, `search`, `tel`, `url` oder `email` ist.

- {{domxref("HTMLInputElement.readOnly", "readOnly")}}

  - : Ein boolescher Wert, der das [`readonly`](/de/docs/Web/HTML/Element/input#readonly)-Attribut des Elements darstellt und angibt, dass der Benutzer den Wert der Steuerung nicht ändern kann. Dies wird ignoriert, wenn der [`type`](/de/docs/Web/HTML/Element/input#type) `hidden`, `range`, `color`, `checkbox`, `radio`, `file` oder ein beliebiger Schaltflächentyp ist.

- {{domxref("HTMLInputElement.selectionDirection", "selectionDirection")}}

  - : Ein String, der die Richtung darstellt, in der die Auswahl erfolgt ist. Mögliche Werte sind: `forward` (die Auswahl wurde in der Start-bis-Ende-Richtung der aktuellen Lokalisierung durchgeführt), `backward` (die entgegengesetzte Richtung) oder `none` (die Richtung ist unbekannt).

- {{domxref("HTMLInputElement.selectionEnd", "selectionEnd")}}

  - : Eine Zahl, die den Endindex des ausgewählten Textes darstellt. Wenn keine Auswahl vorhanden ist, gibt dies den Versatz des Zeichens zurück, das sich unmittelbar nach der aktuellen Position des Texteingabemarkers befindet.

- {{domxref("HTMLInputElement.selectionStart", "selectionStart")}}

  - : Eine Zahl, die den Anfangsindex des ausgewählten Textes darstellt. Wenn nichts ausgewählt ist, gibt dies die Position des Texteingabemarkers (Caret) innerhalb des {{HTMLElement("input")}}-Elements zurück.

- {{domxref("HTMLInputElement.size", "size")}}
  - : Eine Zahl, die das [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut des Elements darstellt und die visuelle Größe der Steuerung enthält. Dieser Wert ist in Pixel, es sei denn, der Wert von [`type`](/de/docs/Web/HTML/Element/input#type) ist `text` oder `password`, in diesem Fall ist es eine ganze Zeichenanzahl. Gilt nur, wenn der [`type`](/de/docs/Web/HTML/Element/input#type) auf `text`, `search`, `tel`, `url`, `email` oder `password` gesetzt ist.

## Instanzen-Methoden

_Erbt auch Methoden von seinem übergeordneten Interface, {{domxref("HTMLElement")}}._

- {{domxref("HTMLInputElement.checkValidity()", "checkValidity()")}}

  - : Gibt einen booleschen Wert zurück, der `false` ist, wenn das Element ein Kandidat für die Einschränkungsvalidierung ist und es seine Einschränkungen nicht erfüllt. In diesem Fall wird auch ein {{domxref("HTMLInputElement/invalid_event", "invalid")}}-Ereignis auf dem Element ausgelöst. Es gibt `true` zurück, wenn das Element kein Kandidat für die Einschränkungsvalidierung ist oder es seine Einschränkungen erfüllt.

- {{domxref("HTMLInputElement.reportValidity()", "reportValidity()")}}

  - : Führt die Methode `checkValidity()` aus und meldet dem Benutzer, wenn diese `false` zurückgibt (für eine ungültige Eingabe oder kein pattern-Attribut vorhanden), dass die Eingabe ungültig ist, in gleicher Weise, als ob Sie ein Formular abgesendet hätten.

- {{domxref("HTMLInputElement.select()", "select()")}}

  - : Wählt den gesamten Text im Eingabeelement aus und fokussiert es, sodass der Benutzer anschließend den gesamten Inhalt ersetzen kann.

- {{domxref("HTMLInputElement.setCustomValidity()", "setCustomValidity()")}}

  - : Legt eine benutzerdefinierte Gültigkeitsnachricht für das Element fest. Wenn diese Nachricht nicht leer ist, leidet das Element an einem benutzerdefinierten Gültigkeitsfehler und wird nicht validiert.

- {{domxref("HTMLInputElement.setRangeText()", "setRangeText()")}}

  - : Ersetzt einen Textbereich im Eingabeelement mit neuem Text.

- {{domxref("HTMLInputElement.setSelectionRange()", "setSelectionRange()")}}

  - : Wählt einen Textbereich im Eingabeelement aus (fokussiert es jedoch nicht).

- {{domxref("HTMLInputElement.showPicker()", "showPicker()")}}

  - : Zeigt einen Browser-Auswahldialog für Datum, Uhrzeit, Farbe und Dateien.

- {{domxref("HTMLInputElement.stepDown()", "stepDown()")}}

  - : Verringert den [`value`](/de/docs/Web/HTML/Element/input#value) um ([`step`](/de/docs/Web/HTML/Element/input#step) \* n), wobei n standardmäßig 1 ist, wenn nicht spezifiziert.

- {{domxref("HTMLInputElement.stepUp()", "stepUp()")}}
  - : Erhöht den [`value`](/de/docs/Web/HTML/Element/input#value) um ([`step`](/de/docs/Web/HTML/Element/input#step) \* n), wobei n standardmäßig 1 ist, wenn nicht spezifiziert.

## Ereignisse

_Erbt auch Ereignisse von seinem übergeordneten Interface, {{domxref("HTMLElement")}}._

Hören Sie auf diese Ereignisse mit {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieses Interfaces:

- {{domxref("HTMLInputElement/invalid_event", "invalid")}}-Ereignis
  - : Wird ausgelöst, wenn ein Element seine Einschränkungen bei der Constraints-Validierung nicht erfüllt.
- {{domxref("HTMLInputElement/search_event", "search")}}-Ereignis {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn eine Suche in einem {{HTMLElement("input")}} vom Typ `search` gestartet wird.
- {{domxref("HTMLInputElement/select_event", "select")}}-Ereignis
  - : Wird ausgelöst, wenn Text ausgewählt wurde.
- {{domxref("HTMLInputElement/selectionchange_event", "selectionchange")}}-Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn die Textauswahl in einem {{HTMLElement("input")}}-Element geändert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das dieses Interface implementiert: {{ HTMLElement("input") }}
