---
title: <input type="file">
slug: Web/HTML/Element/input/file
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente mit **`type="file"`** ermöglichen es dem Benutzer, eine oder mehrere Dateien aus dem Speicher seines Geräts auszuwählen. Sobald sie ausgewählt sind, können die Dateien über [Formularübermittlung](/de/docs/Learn/Forms) auf einen Server hochgeladen oder mithilfe von JavaScript-Code und [der File API](/de/docs/Web/API/File_API/Using_files_from_web_applications) manipuliert werden.

{{EmbedInteractiveExample("pages/tabbed/input-file.html", "tabbed-shorter")}}

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut eines Dateieingabefeldes enthält einen String, der den Pfad zu den ausgewählten Dateien darstellt. Wurde noch keine Datei ausgewählt, ist der Wert ein leerer String (`""`). Wenn der Benutzer mehrere Dateien ausgewählt hat, repräsentiert der Wert die erste Datei in der Liste der von ihm ausgewählten Dateien. Die anderen Dateien können über die [Eigenschaft `HTMLInputElement.files` des Eingabefeldes](/de/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files) identifiziert werden.

> [!NOTE]
> Der Wert ist [immer der Dateiname mit `C:\fakepath\` als Präfix](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), was nicht dem tatsächlichen Pfad der Datei entspricht. Dies soll verhindern, dass bösartige Software die Dateistruktur des Benutzers errät.

## Zusätzliche Attribute

Neben den allgemeinen Attributen, die allen {{HTMLElement("input")}}-Elementen gemeinsam sind, unterstützen Eingabefelder des Typs `file` auch die folgenden Attribute.

### accept

Der Wert des Attributs [`accept`](/de/docs/Web/HTML/Attributes/accept) ist ein String, der die Dateitypen definiert, die das Dateieingabefeld akzeptieren soll. Dieser String ist eine durch Kommas getrennte Liste von **[eindeutigen Dateitypspezifizierern](#eindeutige_dateitypspezifizierer)**. Da ein bestimmter Dateityp auf mehr als eine Weise identifiziert werden kann, ist es nützlich, eine umfassende Menge von Typspezifizierern bereitzustellen, wenn Sie Dateien eines bestimmten Formats benötigen.

Zum Beispiel gibt es mehrere Möglichkeiten, Microsoft Word-Dateien zu identifizieren, daher könnte eine Seite, die Word-Dateien akzeptiert, einen `<input>` wie diesen verwenden:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

Das Attribut [`capture`](/de/docs/Web/HTML/Attributes/capture) gibt an, welche Kamera zur Aufnahme von Bild- oder Videodaten verwendet werden soll, wenn das Attribut [`accept`](/de/docs/Web/HTML/Attributes/accept) angibt, dass die Eingabe eine dieser Arten sein soll. Ein Wert von `user` bedeutet, dass die nutzerseitige Kamera und/oder das Mikrofon verwendet werden sollen. Ein Wert von `environment` gibt an, dass die außenliegende Kamera und/oder Mikrofon verwendet werden sollen. Wenn dieses Attribut fehlt, kann der {{Glossary("user agent")}} frei entscheiden, was zu tun ist. Wenn der angeforderte Aufnahmemodus nicht verfügbar ist, kann der User Agent auf seinen bevorzugten Standardmodus zurückgreifen.

> **Note:** `capture` war zuvor ein Boolean-Attribut, das, falls vorhanden, anforderte, dass die Medienerfassungsgeräte des Geräts, wie Kamera oder Mikrofon, anstelle einer Dateieingabe verwendet werden.

### multiple

Wenn das [`multiple`](/de/docs/Web/HTML/Attributes/multiple)-Boolean-Attribut angegeben ist, erlaubt das Dateieingabefeld dem Benutzer, mehr als eine Datei auszuwählen.

## Nicht standardisierte Attribute

Zusätzlich zu den oben aufgeführten Attributen sind in einigen Browsern die folgenden nicht standardisierten Attribute verfügbar. Sie sollten versuchen, ihre Verwendung zu vermeiden, da dies die Funktionsfähigkeit Ihres Codes in Browsern einschränkt, die sie nicht implementieren.

### `webkitdirectory`

Das Boolean-Attribut `webkitdirectory`, falls vorhanden, zeigt an, dass im Dateiauswahl-Interface des Benutzers nur Verzeichnisse zur Auswahl stehen sollen. Weitere Details und Beispiele finden Sie unter {{domxref("HTMLInputElement.webkitdirectory")}}.

Obwohl es ursprünglich nur für WebKit-basierte Browser implementiert wurde, ist `webkitdirectory` auch in Microsoft Edge sowie in Firefox 50 und später verwendbar. Es ist jedoch trotz seiner relativ breiten Unterstützung noch nicht standardisiert und sollte nicht verwendet werden, es sei denn, Sie haben keine Alternative.

## Eindeutige Dateitypspezifizierer

Ein **eindeutiger Dateitypspezifizierer** ist ein String, der einen Dateityp beschreibt, den der Benutzer in einem {{HTMLElement("input")}}-Element des Typs `file` auswählen kann. Jeder eindeutige Dateitypspezifizierer kann eine der folgenden Formen annehmen:

- Eine gültige, nicht auf Groß-/Kleinschreibung achtende Dateinamenserweiterung, beginnend mit einem Punkt-Zeichen ("."). Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Ein gültiger MIME-Type-String, ohne Erweiterungen.
- Der String `audio/*`, was "jede Audio-Datei" bedeutet.
- Der String `video/*`, was "jede Video-Datei" bedeutet.
- Der String `image/*`, was "jede Bild-Datei" bedeutet.

Das Attribut `accept` nimmt als Wert einen String, der einen oder mehrere dieser eindeutigen Dateitypspezifizierer enthält, getrennt durch Kommas. Ein Dateiauswahldialog, der Inhalte benötigt, die als Bild dargestellt werden können, einschließlich sowohl Standardbildformaten als auch PDF-Dateien, könnte so aussehen:

```html
<input type="file" accept="image/*,.pdf" />
```

## Verwendung von Dateieingaben

### Ein einfaches Beispiel

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="file">Datei zum Hochladen auswählen</label>
    <input type="file" id="file" name="file" multiple />
  </div>
  <div>
    <button>Absenden</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

Dies erzeugt die folgende Ausgabe:

{{EmbedLiveSample('A_basic_example', 650, 90)}}

> [!NOTE]
> Sie können dieses Beispiel auch auf GitHub finden - siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html), und sehen Sie es sich auch [live an](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Unabhängig vom Gerät oder Betriebssystem des Benutzers bietet die Dateieingabe eine Schaltfläche, die einen Dateiauswahldialog öffnet und es dem Benutzer ermöglicht, eine Datei auszuwählen.

Das Hinzufügen des Attributs [`multiple`](#multiple) ermöglicht es dem Benutzer, wie oben gezeigt, mehrere Dateien gleichzeitig auszuwählen. Der Benutzer kann mehrere Dateien aus dem Dateiauswahldialog auf jede Weise auswählen, die auf seiner gewählten Plattform erlaubt ist (z.B. durch Halten der <kbd>Shift</kbd> oder <kbd>Control</kbd> Taste und dann Klicken). Wenn Sie möchten, dass der Benutzer nur eine einzige Datei pro `<input>` auswählt, lassen Sie das `multiple`-Attribut weg.

### Informationen über ausgewählte Dateien erhalten

Die ausgewählten Dateien werden von der Eigenschaft `HTMLInputElement.files` des Elements zurückgegeben, die ein {{domxref("FileList")}}-Objekt ist, das eine Liste von {{domxref("File")}}-Objekten enthält. Die `FileList` verhält sich wie ein Array, sodass Sie ihre Eigenschaft `length` überprüfen können, um die Anzahl der ausgewählten Dateien zu erhalten.

Jedes `File`-Objekt enthält die folgenden Informationen:

- `name`
  - : Der Dateiname.
- `lastModified`
  - : Eine Zahl, die das Datum und die Uhrzeit angibt, wann die Datei zuletzt geändert wurde, in Millisekunden seit der UNIX-Epoche (1. Januar 1970, um Mitternacht).
- `lastModifiedDate` {{deprecated_inline}}
  - : Ein {{jsxref("Date")}}-Objekt, das das Datum und die Uhrzeit darstellt, zu der die Datei zuletzt geändert wurde. _Dies ist veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen `lastModified`._
- `size`
  - : Die Größe der Datei in Bytes.
- `type`
  - : Der [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) der Datei.
- `webkitRelativePath` {{non-standard_inline}}
  - : Ein String, der den Dateipfad relativ zu dem im Verzeichnisauswahldialog ausgewählten Basisverzeichnis angibt (also ein `file` Picker, bei dem das Attribut [`webkitdirectory`](#webkitdirectory) gesetzt ist). _Dies ist nicht standardisiert und sollte mit Vorsicht verwendet werden._

> [!NOTE]
> Sie können den Wert von `HTMLInputElement.files` in allen modernen Browsern setzen und lesen; dies wurde kürzlich in Firefox hinzugefügt, in Version 57 (siehe [Firefox Bug 1384030](https://bugzil.la/1384030)).

### Akzeptierte Dateitypen einschränken

Oft möchten Sie nicht, dass der Benutzer beliebige Dateien auswählen kann; stattdessen möchten Sie häufig, dass er Dateien eines bestimmten Typs oder bestimmter Typen auswählt. Wenn Ihr Dateieingabefeld beispielsweise Benutzern das Hochladen eines Profilbildes ermöglicht, möchten Sie wahrscheinlich, dass sie web-kompatible Bildformate auswählen, wie etwa {{Glossary("JPEG")}} oder {{Glossary("PNG")}}.

Akzeptable Dateitypen können mit dem Attribut [`accept`](#accept) angegeben werden, das eine kommagetrennte Liste zulässiger Dateierweiterungen oder MIME-Typen annimmt. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — akzeptiert jede Datei mit einem `image/*`-MIME-Typ. (Viele mobile Geräte ermöglichen es dem Benutzer auch, mit der Kamera ein Bild zu machen, wenn dies verwendet wird.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — akzeptiert alles, was wie ein MS Word-Dokument aussieht.

Sehen wir uns ein vollständigeres Beispiel an:

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="profile_pic">Datei zum Hochladen auswählen</label>
    <input
      type="file"
      id="profile_pic"
      name="profile_pic"
      accept=".jpg, .jpeg, .png" />
  </div>
  <div>
    <button>Absenden</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

Dies erzeugt eine Ausgabe, die ähnlich aussieht wie das vorherige Beispiel:

{{EmbedLiveSample('Limiting_accepted_file_types', 650, 90)}}

> [!NOTE]
> Sie können dieses Beispiel auch auf GitHub finden - siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-with-accept.html), und sehen Sie es sich auch [live an](https://mdn.github.io/learning-area/html/forms/file-examples/file-with-accept.html).

Es mag ähnlich aussehen, aber wenn Sie versuchen, mit dieser Eingabe eine Datei auszuwählen, werden Sie feststellen, dass der Dateiauswahldialog es Ihnen nur erlaubt, die im `accept`-Wert angegebenen Dateitypen auszuwählen (die genaue Benutzeroberfläche unterscheidet sich zwischen Browsern und Betriebssystemen).

Das Attribut `accept` überprüft nicht die Typen der ausgewählten Dateien; es liefert Hinweise für Browser, um Benutzer bei der Auswahl der richtigen Dateitypen zu führen. In den meisten Fällen ist es Benutzern jedoch immer noch möglich, eine Option im Dateiauswahldialog umzuschalten, die es ermöglicht, dies zu überschreiben und jede gewünschte Datei auszuwählen und dann falsche Dateitypen auszuwählen.

Aus diesem Grund sollten Sie sicherstellen, dass das `accept`-Attribut durch eine geeignete serverseitige Validierung unterstützt wird.

### Erkennung von Stornierungen

Das `cancel`-Event wird ausgelöst, wenn der Benutzer seine Auswahl nicht ändert und die zuvor ausgewählten Dateien erneut auswählt. Das `cancel`-Event wird auch ausgelöst, wenn der Dateiauswahldialog über die "Abbrechen"-Schaltfläche oder die <kbd>Escape</kbd>-Taste geschlossen bzw. abgebrochen wird.

Zum Beispiel wird der folgende Code eine Meldung in die Konsole ausgeben, wenn der Benutzer das Popup schließt, ohne eine Datei auszuwählen:

```js
const elem = document.createElement("input");
elem.type = "file";
elem.addEventListener("cancel", () => {
  console.log("Abgebrochen.");
});
elem.addEventListener("change", () => {
  if (elem.files.length == 1) {
    console.log("Datei ausgewählt: ", elem.files[0]);
  }
});
elem.click();
```

### Hinweise

1. Sie können den Wert eines Dateiauswahldialogs nicht von einem Skript aus festlegen — das folgende hat keine Wirkung:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. Wenn eine Datei über ein `<input type="file">` ausgewählt wird, wird der tatsächliche Pfad zur Quelldatei aus offensichtlichen Sicherheitsgründen nicht im `value`-Attribut angezeigt. Stattdessen wird der Dateiname angezeigt, mit `C:\fakepath\` davor. Es gibt einige historische Gründe für dieses Verhalten, aber es wird in allen modernen Browsern unterstützt und ist tatsächlich [in der Spezifikation definiert](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Beispiele

In diesem Beispiel präsentieren wir einen etwas fortgeschritteneren Dateiauswahldialog, der die im `HTMLInputElement.files`-Eigentum verfügbaren Dateiinformationen nutzt und einige clevere Tricks zeigt.

> [!NOTE]
> Sie können den vollständigen Quellcode für dieses Beispiel auf GitHub sehen — [file-example.html](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/file-example.html) ([schauen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/file-examples/file-example.html)). Wir werden das CSS nicht erklären; der Fokus liegt hauptsächlich auf dem JavaScript.

Sehen wir uns zuerst das HTML an:

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="image_uploads">Wählen Sie Bilder zum Hochladen aus (PNG, JPG)</label>
    <input
      type="file"
      id="image_uploads"
      name="image_uploads"
      accept=".jpg, .jpeg, .png"
      multiple />
  </div>
  <div class="preview">
    <p>Zurzeit sind keine Dateien zum Hochladen ausgewählt</p>
  </div>
  <div>
    <button>Absenden</button>
  </div>
</form>
```

```css hidden
html {
  font-family: sans-serif;
}

form {
  background: #ccc;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid black;
}

form ol {
  padding-left: 0;
}

form li,
div > p {
  background: #eee;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  list-style-type: none;
  border: 1px solid black;
}

form img {
  height: 64px;
  order: 1;
}

form p {
  line-height: 32px;
  padding-left: 10px;
}

form label,
form button {
  background-color: #7f9ccb;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px ridge black;
  font-size: 0.8rem;
  height: auto;
}

form label:hover,
form button:hover {
  background-color: #2d5ba3;
  color: white;
}

form label:active,
form button:active {
  background-color: #0d3f8f;
  color: white;
}
```

Dies ist ähnlich dem, was wir zuvor gesehen haben — nichts Besonderes zu kommentieren.

Schauen wir uns als Nächstes das JavaScript an.

In den ersten Codezeilen holen wir Referenzen auf das Formulareingabefeld selbst und das {{htmlelement("div")}}-Element mit der Klasse `.preview`. Als nächstes blenden wir das {{htmlelement("input")}}-Element aus — das tun wir, weil Dateieingabefelder hässlich sind, schwer zu stylen und inkonsistent im Design zwischen den Browsern. Sie können das `input`-Element aktivieren, indem Sie auf sein {{htmlelement("label")}} klicken, daher ist es besser, das `input` visuell zu verstecken und das Label wie eine Schaltfläche zu stylen, damit der Benutzer weiß, dass er es zum Hochladen von Dateien verwenden kann.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> **Note:** {{cssxref("opacity")}} wird verwendet, um die Dateieingabe zu verbergen, anstelle von {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}}, da assistive Technologien die beiden letzteren Stile als nicht interaktiv interpretieren.

Nun fügen wir dem Input ein [Ereignislistener](/de/docs/Web/API/EventTarget/addEventListener) hinzu, um auf Änderungen seines ausgewählten Wertes zu hören (in diesem Fall, wenn Dateien ausgewählt werden). Der Ereignislistener ruft unsere benutzerdefinierte `updateImageDisplay()` Funktion auf.

```js
input.addEventListener("change", updateImageDisplay);
```

Wann immer die Funktion `updateImageDisplay()` aufgerufen wird, führen wir folgenden Vorgang aus:

- Wir verwenden eine {{jsxref("Statements/while", "while")}}-Schleife, um den vorherigen Inhalt des Vorschau-`<div>` zu leeren.
- Wir erfassen das {{domxref("FileList")}}-Objekt, das Informationen zu allen ausgewählten Dateien enthält, und speichern es in einer Variablen namens `curFiles`.
- Wir prüfen, ob keine Dateien ausgewählt wurden, indem wir prüfen, ob `curFiles.length` gleich 0 ist. Falls ja, drucken wir eine Meldung in das Vorschau-`<div>`, dass keine Dateien ausgewählt wurden.
- Falls _doch_ Dateien ausgewählt wurden, durchlaufen wir jede von ihnen und drucken Informationen darüber in das Vorschau-`<div>`. Zu beachten:
- Wir verwenden die benutzerdefinierte Funktion `validFileType()`, um zu überprüfen, ob die Datei vom richtigen Typ ist (z.B. die im `accept`-Attribut angegebenen Bildtypen).
- Wenn sie es ist, drucken wir:

  - Name und Dateigröße in einen Listeneintrag im vorherigen `<div>` (erhalten aus `file.name` und `file.size`). Die benutzerdefinierte Funktion `returnFileSize()` gibt eine schön formatierte Version der Größe in Bytes/KB/MB zurück (standardmäßig gibt der Browser die Größe in absoluten Bytes an).
  - Erzeugen einer Miniaturansicht des Bildes durch Aufruf von {{domxref("URL/createObjectURL_static", "URL.createObjectURL(file)")}}. Dann fügen wir das Bild auch in das Listenelement ein, indem wir ein neues {{htmlelement("img")}}-Element erstellen und sein [`src`](/de/docs/Web/HTML/Element/img#src) auf die Miniaturansicht setzen.

- Wenn der Dateityp ungültig ist, zeigen wir eine Meldung in einem Listenelement an, die dem Benutzer mitteilt, dass er einen anderen Dateityp auswählen muss.

```js
function updateImageDisplay() {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFiles = input.files;
  if (curFiles.length === 0) {
    const para = document.createElement("p");
    para.textContent = "Zurzeit sind keine Dateien zum Hochladen ausgewählt";
    preview.appendChild(para);
  } else {
    const list = document.createElement("ol");
    preview.appendChild(list);

    for (const file of curFiles) {
      const listItem = document.createElement("li");
      const para = document.createElement("p");
      if (validFileType(file)) {
        para.textContent = `Dateiname ${file.name}, Dateigröße ${returnFileSize(
          file.size,
        )}.`;
        const image = document.createElement("img");
        image.src = URL.createObjectURL(file);
        image.alt = image.title = file.name;

        listItem.appendChild(image);
        listItem.appendChild(para);
      } else {
        para.textContent = `Dateiname ${file.name}: Ungültiger Dateityp. Aktualisieren Sie Ihre Auswahl.`;
        listItem.appendChild(para);
      }

      list.appendChild(listItem);
    }
  }
}
```

Die benutzerdefinierte Funktion `validFileType()` nimmt ein {{domxref("File")}}-Objekt als Parameter und verwendet {{jsxref("Array.prototype.includes()")}}, um zu prüfen, ob ein Wert in den `fileTypes` mit der Eigenschaft `type` der Datei übereinstimmt. Wird eine Übereinstimmung gefunden, gibt die Funktion `true` zurück. Wird keine Übereinstimmung gefunden, gibt sie `false` zurück.

```js
// https://developer.mozilla.org/de/docs/Web/Media/Formats/Image_types
const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
];

function validFileType(file) {
  return fileTypes.includes(file.type);
}
```

Die Funktion `returnFileSize()` nimmt eine Zahl (in Bytes, entnommen aus der Eigenschaft `size` der aktuellen Datei) und formatiert sie in eine schönere Größe in Bytes/KB/MB um.

```js
function returnFileSize(number) {
  if (number < 1e3) {
    return `${number} bytes`;
  } else if (number >= 1e3 && number < 1e6) {
    return `${(number / 1e3).toFixed(1)} KB`;
  } else {
    return `${(number / 1e6).toFixed(1)} MB`;
  }
}
```

> [!NOTE]
> Die "KB"- und "MB"-Einheiten hier verwenden die [SI-Präfix](https://de.wikipedia.org/wiki/Bin%C3%A4rpr%C3%A4fix)-Konvention von 1KB = 1000B, ähnlich wie macOS. Verschiedene Systeme stellen Dateigrößen unterschiedlich dar — zum Beispiel verwendet Ubuntu IEC-Präfixe, bei denen 1KiB = 1024B, während RAM-Spezifikationen oft SI-Präfixe verwenden, um Zweierpotenzen darzustellen (1KB = 1024B). Aus diesem Grund haben wir `1e3` (`1000`) und `1e6` (`100000`) anstelle von `1024` und `1048576` verwendet. In Ihrer Anwendung sollten Sie das Einheitensystem klar an Ihre Benutzer kommunizieren, wenn die genaue Größe wichtig ist.

```js hidden
const button = document.querySelector("form button");
button.addEventListener("click", (e) => {
  e.preventDefault();
  const para = document.createElement("p");
  para.append("Bild hochgeladen!");
  preview.replaceChildren(para);
});
```

Das Beispiel sieht so aus; probieren Sie es aus:

{{EmbedLiveSample('Examples', '100%', 200)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den Pfad zur ausgewählten
        Datei darstellt.
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}},
        {{domxref("Element/input_event", "input")}} und
        {{domxref("HTMLElement/cancel_event", "cancel")}}
      </td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td><a href="/de/docs/Web/HTML/Element/input#required"><code>required</code></a></td>
    </tr>
    <tr>
      <td><strong>Zusätzliche Attribute</strong></td>
      <td>
        <a href="#accept" aria-current="page"><code>accept</code></a>,
        <a href="#capture" aria-current="page"><code>capture</code></a>,
        <a href="#multiple" aria-current="page"><code>multiple</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td><code>files</code> und <code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) — enthält eine Reihe anderer nützlicher Beispiele im Zusammenhang mit `<input type="file">` und der [File API](/de/docs/Web/API/File).
- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
