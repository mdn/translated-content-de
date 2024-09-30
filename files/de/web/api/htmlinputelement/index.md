---
title: HTMLInputElement
slug: Web/API/HTMLInputElement
l10n:
  sourceCommit: 050bcdba594e759c0a4dde172de5d334f5a3b20f
---

{{APIRef("HTML DOM")}}

Das **`HTMLInputElement`**-Interface bietet spezielle Eigenschaften und Methoden zur Manipulation der Optionen, des Layouts und der Präsentation von {{HtmlElement("input")}}-Elementen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Einige Eigenschaften gelten nur für Eingabeelementtypen, die die entsprechenden Attribute unterstützen.

- [`align`](/de/docs/Web/API/HTMLInputElement/align) {{Deprecated_Inline}}

  - : Ein String, der die Ausrichtung des Elements darstellt. _Verwenden Sie stattdessen CSS._

- [`defaultValue`](/de/docs/Web/API/HTMLInputElement/defaultValue)

  - : Ein String, der den Standardwert darstellt, wie er ursprünglich im HTML spezifiziert wurde, das dieses Objekt erstellt hat.

- [`dirName`](/de/docs/Web/API/HTMLInputElement/dirName)

  - : Ein String, der die Direktionalität des Elements darstellt.

- [`incremental`](/de/docs/Web/API/HTMLInputElement/incremental) {{Non-standard_Inline}}

  - : Ein Boolean, der den Suchereignisauslösemodus darstellt. Ist `true`, wird bei jedem Tastendruck oder beim Klicken auf den Abbrechen-Button ausgelöst; andernfalls beim Drücken von <kbd>Enter</kbd>.

- [`labels`](/de/docs/Web/API/HTMLInputElement/labels) {{ReadOnlyInline}}

  - : Gibt eine Liste von {{ HTMLElement("label") }}-Elementen zurück, die Bezeichnungen für dieses Element sind.

- [`list`](/de/docs/Web/API/HTMLInputElement/list) {{ReadOnlyInline}}

  - : Gibt das Element zurück, auf das das [`list`](/de/docs/Web/HTML/Element/input#list)-Attribut zeigt. Die Eigenschaft kann `null` sein, wenn kein HTML-Element im selben Baum gefunden wird.

- [`multiple`](/de/docs/Web/API/HTMLInputElement/multiple)

  - : Ein Boolean, der das [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut des Elements darstellt. Zeigt an, ob mehr als ein Wert möglich ist (z.B. mehrere Dateien).

- [`name`](/de/docs/Web/API/HTMLInputElement/name)

  - : Ein String, der das [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut des Elements darstellt und einen Namen enthält, der das Element beim Absenden des Formulars identifiziert.

- [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction)

  - : Ruft die Aktion ab und setzt sie, die auf einem Popover-Element ausgeführt werden soll (`"hide"`, `"show"` oder `"toggle"`), das von einem {{htmlelement("input")}}-Element des Typs `button` gesteuert wird. Es spiegelt den Wert des [`popovertargetaction`](/de/docs/Web/HTML/Element/input#popovertargetaction)-HTML-Attributs wider.

- [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement)

  - : Ruft das Popover-Element ab und setzt es, das über ein {{htmlelement("input")}}-Element des Typs `button` gesteuert werden soll. Das JavaScript-Äquivalent des [`popovertarget`](/de/docs/Web/HTML/Element/input#popovertarget)-HTML-Attributs.

- [`step`](/de/docs/Web/API/HTMLInputElement/step)

  - : Ein String, der das [`step`](/de/docs/Web/HTML/Element/input#step)-Attribut des Elements darstellt, das mit [`min`](/de/docs/Web/HTML/Element/input#min) und [`max`](/de/docs/Web/HTML/Element/input#max) zusammenarbeitet, um die Schritte zu begrenzen, in denen ein numerischer oder Datum-Zeit-Wert festgelegt werden kann. Es kann der String `any` oder eine positive Fließkommazahl sein. Wenn dies nicht auf `any` gesetzt ist, werden nur Werte akzeptiert, die ein Vielfaches des Schrittwerts sind, das größer als das Minimum ist.

- [`type`](/de/docs/Web/API/HTMLInputElement/type)

  - : Ein String, der das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut des Elements darstellt und angibt, welcher Kontrolltyp angezeigt wird. Mögliche Werte finden Sie in der Dokumentation zum [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut.

- [`useMap`](/de/docs/Web/API/HTMLInputElement/useMap) {{Deprecated_Inline}}

  - : Ein String, der eine clientseitige Bildkarte darstellt.

- [`value`](/de/docs/Web/API/HTMLInputElement/value)

  - : Ein String, der den aktuellen Wert des Steuerelements darstellt. Wenn der Benutzer einen Wert eingibt, der nicht erwartet wird, kann dies einen leeren String zurückgeben.

- [`valueAsDate`](/de/docs/Web/API/HTMLInputElement/valueAsDate)

  - : Ein {{jsxref("Date")}}, der den Wert des Elements als Datum interpretiert oder `null`, wenn die Umwandlung unmöglich ist.

- [`valueAsNumber`](/de/docs/Web/API/HTMLInputElement/valueAsNumber)
  - : Eine Zahl, die den Wert des Elements darstellt, interpretiert als einer der folgenden in dieser Reihenfolge: Ein Zeitwert, eine Zahl oder `NaN`, wenn die Umwandlung unmöglich ist.

### Instanz-Eigenschaften im Zusammenhang mit dem übergeordneten Formular

- [`form`](/de/docs/Web/API/HTMLInputElement/form) {{ReadOnlyInline}}

  - : Gibt eine Referenz zum übergeordneten {{HtmlElement("form")}}-Element zurück.

- [`formAction`](/de/docs/Web/API/HTMLInputElement/formAction)

  - : Ein String, der das [`formaction`](/de/docs/Web/HTML/Element/input#formaction)-Attribut des Elements darstellt und die URL eines Programms enthält, das die vom Element übermittelten Informationen verarbeitet. Dies überschreibt das [`action`](/de/docs/Web/HTML/Element/form#action)-Attribut des übergeordneten Formulars.

- [`formEnctype`](/de/docs/Web/API/HTMLInputElement/formEnctype)

  - : Ein String, der das [`formenctype`](/de/docs/Web/HTML/Element/input#formenctype)-Attribut des Elements darstellt und die Art des Inhalts enthält, der verwendet wird, um das Formular an den Server zu senden. Dies überschreibt das [`enctype`](/de/docs/Web/HTML/Element/form#enctype)-Attribut des übergeordneten Formulars.

- [`formMethod`](/de/docs/Web/API/HTMLInputElement/formMethod)

  - : Ein String, der das [`formmethod`](/de/docs/Web/HTML/Element/input#formmethod)-Attribut des Elements darstellt und die HTTP-Methode enthält, die der Browser verwendet, um das Formular zu senden. Dies überschreibt das [`method`](/de/docs/Web/HTML/Element/form#method)-Attribut des übergeordneten Formulars.

- [`formNoValidate`](/de/docs/Web/API/HTMLInputElement/formNoValidate)

  - : Ein Boolean, der das [`formnovalidate`](/de/docs/Web/HTML/Element/input#formnovalidate)-Attribut des Elements darstellt und anzeigt, dass das Formular nicht validiert werden soll, wenn es gesendet wird. Dies überschreibt das [`novalidate`](/de/docs/Web/HTML/Element/form#novalidate)-Attribut des übergeordneten Formulars.

- [`formTarget`](/de/docs/Web/API/HTMLInputElement/formTarget)
  - : Ein String, der das [`formtarget`](/de/docs/Web/HTML/Element/input#formtarget)-Attribut des Elements darstellt und einen Namen oder ein Stichwort enthält, das angibt, wo die Antwort angezeigt werden soll, die nach dem Senden des Formulars empfangen wird. Dies überschreibt das [`target`](/de/docs/Web/HTML/Element/form#target)-Attribut des übergeordneten Formulars.

### Instanz-Eigenschaften, die auf jeden nicht versteckten Eingabeelementtyp angewendet werden

- [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled)

  - : Ein Boolean, der das [`disabled`](/de/docs/Web/HTML/Element/input#disabled)-Attribut des Elements darstellt und angibt, dass das Steuerelement nicht für Interaktionen verfügbar ist. Die Eingabewerte werden nicht mit dem Formular gesendet. Siehe auch [`readonly`](/de/docs/Web/HTML/Element/input#readonly).

- [`required`](/de/docs/Web/API/HTMLInputElement/required)

  - : Ein Boolean, der das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut des Elements darstellt und angibt, dass der Benutzer einen Wert eingeben muss, bevor das Formular gesendet wird.

- [`validationMessage`](/de/docs/Web/API/HTMLInputElement/validationMessage) {{ReadOnlyInline}}

  - : Gibt eine lokalisierte Nachricht zurück, die die Validierungseinschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Dies ist der leere String, wenn das Steuerelement kein Kandidat für die Einschränkungsvalidierung ist ([`willValidate`](/de/docs/Web/API/HTMLObjectElement/willValidate) ist `false`) oder es seinen Einschränkungen entspricht. Dieser Wert kann mit der Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) festgelegt werden.

- [`validity`](/de/docs/Web/API/HTMLInputElement/validity) {{ReadOnlyInline}}

  - : Gibt den aktuellen Validitätsstatus des Elements zurück.

- [`willValidate`](/de/docs/Web/API/HTMLInputElement/willValidate) {{ReadOnlyInline}}
  - : Gibt zurück, ob das Element ein Kandidat für die Einschränkungsvalidierung ist. Es ist `false`, wenn irgendwelche Bedingungen es von der Einschränkungsvalidierung ausschließen, einschließlich: sein `type` ist eines von `hidden`, `reset` oder `button`, es hat einen {{HTMLElement("datalist")}}-Vorfahren oder seine `disabled`-Eigenschaft ist `true`.

### Instanz-Eigenschaften, die nur auf Elemente vom Typ Checkbox oder Radio angewendet werden

- [`checked`](/de/docs/Web/API/HTMLInputElement/checked)

  - : Ein Boolean, der den aktuellen Zustand des Elements darstellt.

- [`defaultChecked`](/de/docs/Web/API/HTMLInputElement/defaultChecked)

  - : Ein Boolean, der den Standardzustand eines Optionsfelds oder Kontrollkästchens darstellt, wie er ursprünglich im HTML spezifiziert wurde, das dieses Objekt erstellt hat.

- [`indeterminate`](/de/docs/Web/API/HTMLInputElement/indeterminate)
  - : Ein Boolean, der angibt, ob das Kontrollkästchen oder Optionsfeld im unbestimmten Zustand ist. Für Kontrollkästchen bedeutet dies, dass das Erscheinungsbild des Kontrollkästchens auf eine Weise verdeckt/ausgegraut ist, die darauf hinweist, dass sein Zustand unbestimmt ist (nicht aktiviert, aber auch nicht deaktiviert). Beeinflusst nicht den Wert des `checked`-Attributs und das Klicken auf das Kontrollkästchen setzt den Wert auf false.

### Instanz-Eigenschaften, die nur auf Elemente vom Typ Bild angewendet werden

- [`alt`](/de/docs/Web/API/HTMLInputElement/alt)

  - : Ein String, der das [`alt`](/de/docs/Web/HTML/Element/input#alt)-Attribut des Elements darstellt und alternativen Text enthält.

- [`height`](/de/docs/Web/API/HTMLInputElement/height)

  - : Ein String, der das [`height`](/de/docs/Web/HTML/Element/input#height)-Attribut des Elements darstellt, das die Höhe des für die Schaltfläche angezeigten Bildes definiert.

- [`src`](/de/docs/Web/API/HTMLInputElement/src)

  - : Ein String, der das [`src`](/de/docs/Web/HTML/Element/input#src)-Attribut des Elements darstellt, das eine URI für den Speicherort eines Bildes enthält, das auf der grafischen Sende-Schaltfläche angezeigt werden soll.

- [`width`](/de/docs/Web/API/HTMLInputElement/width)
  - : Ein String, der das [`width`](/de/docs/Web/HTML/Element/input#width)-Attribut des Elements darstellt, das die Breite des für die Schaltfläche angezeigten Bildes definiert.

### Instanz-Eigenschaften, die nur auf Elemente vom Typ Datei angewendet werden

- [`accept`](/de/docs/Web/API/HTMLInputElement/accept)

  - : Ein String, der das [`accept`](/de/docs/Web/HTML/Element/input#accept)-Attribut des Elements darstellt, das eine durch Kommas getrennte Liste von Dateitypen enthält, die ausgewählt werden können.

- [`capture`](/de/docs/Web/API/HTMLInputElement/capture)

  - : Ein String, der das [`capture`](/de/docs/Web/HTML/Element/input#capture)-Attribut des Elements darstellt und die Methode zur Medienerfassung in Dateiupload-Steuerelementen angibt.

- [`files`](/de/docs/Web/API/HTMLInputElement/files)

  - : Eine [`FileList`](/de/docs/Web/API/FileList), die die für den Upload ausgewählten Dateien darstellt.

- [`webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory)

  - : Ein Boolean, der das [`webkitdirectory`](/de/docs/Web/HTML/Element/input#webkitdirectory)-Attribut darstellt. Wenn `true`, akzeptiert die Dateisystem-Auswahlschnittstelle nur Verzeichnisse anstelle von Dateien.

- [`webkitEntries`](/de/docs/Web/API/HTMLInputElement/webkitEntries) {{ReadOnlyInline}}
  - : Beschreibt die aktuell ausgewählten Dateien oder Verzeichnisse.

### Instanz-Eigenschaften, die nur auf sichtbare Elemente angewendet werden, die Text oder Zahlen enthalten

- [`autocomplete`](/de/docs/Web/API/HTMLInputElement/autocomplete)

  - : Ein String, der das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Attribut des Elements darstellt und angibt, ob der Wert des Steuerelements vom Browser automatisch ergänzt werden kann.

- [`max`](/de/docs/Web/API/HTMLInputElement/max)

  - : Ein String, der das [`max`](/de/docs/Web/HTML/Element/input#max)-Attribut des Elements darstellt und das maximale (numerische oder Datum-Zeit) Wert für diesen Artikel enthält, der nicht kleiner als sein Mindestwert sein darf ([`min`](/de/docs/Web/HTML/Element/input#min)-Attribut).

- [`maxLength`](/de/docs/Web/API/HTMLInputElement/maxLength)

  - : Eine Zahl, die das [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribut des Elements darstellt und die maximale Anzahl von Zeichen (in Unicode-Code-Punkten) enthält, die der Wert haben kann.

- [`min`](/de/docs/Web/API/HTMLInputElement/min)

  - : Ein String, der das [`min`](/de/docs/Web/HTML/Element/input#min)-Attribut des Elements darstellt und den minimalen (numerischen oder Datum-Zeit) Wert für diesen Artikel enthält, der nicht größer als sein Höchstwert sein darf ([`max`](/de/docs/Web/HTML/Element/input#max)-Attribut).

- [`minLength`](/de/docs/Web/API/HTMLInputElement/minLength)

  - : Eine Zahl, die das [`minlength`](/de/docs/Web/HTML/Element/input#minlength)-Attribut des Elements darstellt und die minimale Anzahl von Zeichen (in Unicode-Code-Punkten) enthält, die der Wert haben kann.

- [`pattern`](/de/docs/Web/API/HTMLInputElement/pattern)

  - : Ein String, der das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut des Elements darstellt und einen regulären Ausdruck enthält, gegen den der Wert des Steuerelements überprüft wird. Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um das Muster zu beschreiben und dem Benutzer zu helfen. Dieses Attribut gilt nur, wenn der Wert des [`type`](/de/docs/Web/HTML/Element/input#type)-Attributs `text`, `search`, `tel`, `url` oder `email` ist.

- [`placeholder`](/de/docs/Web/API/HTMLInputElement/placeholder)

  - : Ein String, der das [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder)-Attribut des Elements darstellt und einen Hinweis darauf enthält, was der Benutzer in das Steuerelement eingeben kann. Der Platzhaltertext darf keine Wagenrückläufe oder Zeilen umbrüche enthalten. Dieses Attribut gilt nur, wenn der Wert des [`type`](/de/docs/Web/HTML/Element/input#type)-Attributs `text`, `search`, `tel`, `url` oder `email` ist.

- [`readOnly`](/de/docs/Web/API/HTMLInputElement/readOnly)

  - : Ein Boolean, der das [`readonly`](/de/docs/Web/HTML/Element/input#readonly)-Attribut des Elements darstellt und anzeigt, dass der Benutzer den Wert des Steuerelements nicht ändern kann. Dies wird ignoriert, wenn der [`type`](/de/docs/Web/HTML/Element/input#type) `hidden`, `range`, `color`, `checkbox`, `radio`, `file` oder ein Schaltflächentyp ist.

- [`selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection)

  - : Ein String, der die Richtung angibt, in der die Auswahl erfolgt ist. Mögliche Werte sind: `forward` (die Auswahl wurde in der Start-Ziel-Richtung der aktuellen Sprache vorgenommen), `backward` (die entgegengesetzte Richtung) oder `none` (die Richtung ist unbekannt).

- [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd)

  - : Eine Zahl, die den Endindex des ausgewählten Textes darstellt. Wenn keine Auswahl vorhanden ist, wird der Offset des Zeichens direkt nach der aktuellen Textinput-Cursorposition zurückgegeben.

- [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart)

  - : Eine Zahl, die den Anfangsindex des ausgewählten Textes darstellt. Wenn nichts ausgewählt ist, wird die Position des Textinput-Cursors (Einfügemarke) innerhalb des {{HTMLElement("input")}}-Elements zurückgegeben.

- [`size`](/de/docs/Web/API/HTMLInputElement/size)
  - : Eine Zahl, die das [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut des Elements darstellt, das die visuelle Größe des Steuerelements enthält. Dieser Wert ist in Pixeln, es sei denn, der Wert von [`type`](/de/docs/Web/HTML/Element/input#type) ist `text` oder `password`, in diesem Fall ist es eine Ganzzahlanzahl von Zeichen. Gilt nur, wenn [`type`](/de/docs/Web/HTML/Element/input#type) auf `text`, `search`, `tel`, `url`, `email` oder `password` gesetzt ist.

## Instanz-Methoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`checkValidity()`](/de/docs/Web/API/HTMLInputElement/checkValidity)

  - : Gibt einen Boolean-Wert zurück, der `false` ist, wenn das Element ein Kandidat für die Einschränkungsvalidierung ist und es seine Einschränkungen nicht erfüllt. In diesem Fall wird auch ein [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)-Ereignis beim Element ausgelöst. Es gibt `true` zurück, wenn das Element kein Kandidat für die Einschränkungsvalidierung ist oder es seine Einschränkungen erfüllt.

- [`reportValidity()`](/de/docs/Web/API/HTMLInputElement/reportValidity)

  - : Führt die Methode `checkValidity()` aus, und wenn diese `false` zurückgibt (für eine ungültige Eingabe oder kein Pattern-Attribut bereitgestellt), dann wird dem Benutzer auf die gleiche Weise wie bei der Einreichung eines Formulars mitgeteilt, dass die Eingabe ungültig ist.

- [`select()`](/de/docs/Web/API/HTMLInputElement/select)

  - : Wählt den gesamten Text im Eingabeelement aus und fokussiert es, damit der Benutzer anschließend den gesamten Inhalt ersetzen kann.

- [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)

  - : Setzt eine benutzerdefinierte Fehlermeldung für das Element. Wenn diese Nachricht nicht der leere String ist, leidet das Element an einem benutzerdefinierten Validitätsfehler und wird nicht validiert.

- [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)

  - : Ersetzt einen Textbereich im Eingabeelement durch neuen Text.

- [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)

  - : Wählt einen Textbereich im Eingabeelement aus, fokussiert es jedoch nicht.

- [`showPicker()`](/de/docs/Web/API/HTMLInputElement/showPicker)

  - : Zeigt einen Browser-Auswahldialog für Datum, Uhrzeit, Farbe und Dateien an.

- [`stepDown()`](/de/docs/Web/API/HTMLInputElement/stepDown)

  - : Verringert den [`value`](/de/docs/Web/HTML/Element/input#value) um ([`step`](/de/docs/Web/HTML/Element/input#step) \* n), wobei n standardmäßig auf 1 gesetzt ist, wenn nicht anders angegeben.

- [`stepUp()`](/de/docs/Web/API/HTMLInputElement/stepUp)
  - : Erhöht den [`value`](/de/docs/Web/HTML/Element/input#value) um ([`step`](/de/docs/Web/HTML/Element/input#step) \* n), wobei n standardmäßig auf 1 gesetzt ist, wenn nicht anders angegeben.

## Ereignisse

_Erbt auch Ereignisse von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

Hören Sie auf diese Ereignisse mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener an die `oneventname`-Eigenschaft dieses Interfaces zuweisen:

- [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event) Ereignis
  - : Ausgelöst, wenn ein Element seine Einschränkungen während der Einschränkungsvalidierung nicht erfüllt.
- [`search`](/de/docs/Web/API/HTMLInputElement/search_event) Ereignis {{Non-standard_Inline}}
  - : Ausgelöst, wenn eine Suche auf einem {{HTMLElement("input")}} von `type="search"` initiiert wird.
- [`select`](/de/docs/Web/API/HTMLInputElement/select_event) Ereignis
  - : Ausgelöst, wenn ein Text ausgewählt wurde.
- [`selectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event) Ereignis {{Experimental_Inline}}
  - : Wird ausgelöst, wenn die Textauswahl in einem {{HTMLElement("input")}}-Element geändert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Element, das dieses Interface implementiert: {{ HTMLElement("input") }}
