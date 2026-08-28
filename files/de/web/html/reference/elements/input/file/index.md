---
title: '`<input type="file">` HTML-Attributwert'
short-title: <input type="file">
slug: Web/HTML/Reference/Elements/input/file
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

{{HTMLElement("input")}}-Elemente mit **`type="file"`** erlauben es dem Nutzer, eine oder mehrere Dateien aus dem Speicher seines Geräts auszuwählen. Sobald ausgewählt, können die Dateien mittels [Formularübermittlung](/de/docs/Learn_web_development/Extensions/Forms) zu einem Server hochgeladen oder mit JavaScript-Code und der [File API](/de/docs/Web/API/File_API/Using_files_from_web_applications) manipuliert werden.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;file&quot;&gt;", "tabbed-shorter")}}

```html interactive-example
<label for="avatar">Choose a profile picture:</label>

<input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
```

```css interactive-example
label {
  display: block;
  font:
    1rem "Fira Sans",
    sans-serif;
}

input,
label {
  margin: 0.4rem 0;
}
```

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut eines Dateieingabefeldes enthält einen String, der den Pfad zu den ausgewählten Dateien repräsentiert. Wenn noch keine Datei ausgewählt ist, ist der Wert ein leerer String (`""`). Wenn der Nutzer mehrere Dateien ausgewählt hat, repräsentiert der `value` die erste Datei in der Liste der ausgewählten Dateien. Die anderen Dateien können über die [Eigenschaft `HTMLInputElement.files` des Eingabefeldes](/de/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files) identifiziert werden.

> [!NOTE]
> Der Wert ist [immer der Dateiname, vorangestellt mit `C:\fakepath\`](https://html.spec.whatwg.org/multipage/input.html#fakepath-srsly), was nicht der echte Pfad der Datei ist. Dies dient dem Schutz vor bösartiger Software, die die Dateistruktur des Nutzers erraten könnte.

## Zusätzliche Attribute

Zusätzlich zu den allgemeinen Attributen, die von allen {{HTMLElement("input")}}-Elementen geteilt werden, unterstützen Eingaben vom Typ `file` auch die folgenden Attribute.

### accept

Der Wert des [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attributs ist ein String, der die Dateitypen definiert, die die Dateieingabe akzeptieren soll. Dieser String ist eine durch Kommata getrennte Liste von **[eindeutigen Dateityp-Spezifikatoren](#eindeutige_dateityp-spezifikatoren)**. Da ein gegebener Dateityp auf verschiedene Arten identifiziert werden kann, ist es nützlich, eine umfassende Menge an Typ-Spezifikatoren bereitzustellen, wenn Sie Dateien eines bestimmten Formats benötigen.

Zum Beispiel gibt es mehrere Möglichkeiten, Microsoft Word-Dateien zu identifizieren, daher könnte eine Seite, die Word-Dateien akzeptiert, ein `<input>` wie folgt verwenden:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

### capture

Der Wert des [`capture`](/de/docs/Web/HTML/Reference/Attributes/capture)-Attributs ist ein String, der bestimmt, welche Kamera zur Aufnahme von Bild- oder Videodaten verwendet werden soll, wenn das [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attribut angibt, dass die Eingabe einer dieser Typen sein soll. Ein Wert von `user` gibt an, dass die der Nutzer zugewandte Kamera und/oder das Mikrofon verwendet werden soll. Ein Wert von `environment` spezifiziert, dass die nach außen gerichtete Kamera und/oder das Mikrofon verwendet werden soll. Wenn dieses Attribut fehlt, kann der {{Glossary("user_agent", "User-Agent")}} selbst entscheiden, was zu tun ist. Wenn der angeforderte Ausrichtungsmodus nicht verfügbar ist, kann der User-Agent auf seinen bevorzugten Standardmodus zurückgreifen.

> [!NOTE]
> `capture` war zuvor ein Boolean-Attribut, das, wenn es vorhanden war, verlangte, dass die Erfassungsgeräte des Geräts, wie Kamera oder Mikrofon, anstelle der Anforderung einer Datei-Eingabe verwendet werden.

### multiple

Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) Boolean-Attribut angegeben ist, erlaubt die Dateieingabe dem Nutzer, mehr als eine Datei auszuwählen.

## Nicht-standardisierte Attribute

Zusätzlich zu den oben aufgeführten Attributen sind die folgenden nicht-standardisierten Attribute in einigen Browsern verfügbar. Sie sollten versuchen, ihre Verwendung zu vermeiden, da sie die Fähigkeit Ihres Codes, in Browsern zu funktionieren, die sie nicht implementieren, einschränken.

### `webkitdirectory`

Das Boolean-Attribut `webkitdirectory`, wenn vorhanden, gibt an, dass im Dateimanager-Interface nur Verzeichnisse vom Benutzer ausgewählt werden können. Weitere Details und Beispiele finden Sie unter [`HTMLInputElement.webkitdirectory`](/de/docs/Web/API/HTMLInputElement/webkitdirectory).

## Eindeutige Dateityp-Spezifikatoren

Ein **eindeutiger Dateityp-Spezifikator** ist ein String, der einen Dateityp beschreibt, der vom Nutzer in einem {{HTMLElement("input")}}-Element vom Typ `file` ausgewählt werden kann. Jeder eindeutige Dateityp-Spezifikator kann eine der folgenden Formen annehmen:

- Eine gültige, nicht case-sensitive Verlängerung des Dateinamens, beginnend mit einem Punkt (".") Zeichen. Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Ein gültiger MIME-Typ-String, ohne Erweiterungen.
- Der String `audio/*`, was "jede Audiodatei" bedeutet.
- Der String `video/*`, was "jede Videodatei" bedeutet.
- Der String `image/*`, was "jede Bilddatei" bedeutet.

Das `accept`-Attribut nimmt einen String mit einem oder mehreren dieser eindeutigen Dateityp-Spezifikatoren als Wert an, getrennt durch Kommata. Zum Beispiel könnte ein Dateiauswahlfenster, das Inhalte benötigt, die als Bild präsentiert werden können und sowohl Standard-Bildformate als auch PDF-Dateien beinhaltet, so aussehen:

```html
<input type="file" accept="image/*,.pdf" />
```

## Verwendung von Datei-Eingaben

### Ein einfaches Beispiel

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="file">Choose file to upload</label>
    <input type="file" id="file" name="file" multiple />
  </div>
  <div>
    <button>Submit</button>
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

Unabhängig vom Gerät oder Betriebssystem des Nutzers bietet die Dateieingabe eine Schaltfläche, die ein Dateiauswahlfenster öffnet, in dem der Nutzer eine Datei auswählen kann.

Die Einbeziehung des [`multiple`](#multiple)-Attributs, wie oben gezeigt, erlaubt es, dass mehrere Dateien auf einmal ausgewählt werden können. Der Nutzer kann mehrere Dateien aus dem Dateiauswahlfenster auswählen, auf jede Weise, die seine gewählte Plattform erlaubt (z. B. durch Halten der <kbd>Shift</kbd>- oder <kbd>Control</kbd>-Taste und Klicken). Wenn Sie nur möchten, dass der Nutzer eine einzelne Datei pro `<input>` auswählt, lassen Sie das `multiple`-Attribut weg.

### Informationen über ausgewählte Dateien erhalten

Die ausgewählten Dateien werden durch die `HTMLInputElement.files`-Eigenschaft des Elements zurückgegeben, die ein [`FileList`](/de/docs/Web/API/FileList)-Objekt ist, das eine Liste von [`File`](/de/docs/Web/API/File)-Objekten enthält. Die `FileList` verhält sich wie ein Array, sodass Sie ihre `length`-Eigenschaft überprüfen können, um die Anzahl der ausgewählten Dateien zu erhalten.

Jedes `File`-Objekt enthält die folgenden Informationen:

- `name`
  - : Der Name der Datei.
- `lastModified`
  - : Eine Zahl, die Datum und Uhrzeit angibt, zu der die Datei zuletzt geändert wurde, in Millisekunden seit der UNIX-Epoche (1. Januar 1970, Mitternacht).
- `lastModifiedDate` {{deprecated_inline}}
  - : Ein {{jsxref("Date")}}-Objekt, das Datum und Uhrzeit darstellt, zu der die Datei zuletzt geändert wurde. _Dies ist veraltet und sollte nicht verwendet werden. Verwenden Sie stattdessen `lastModified`._
- `size`
  - : Die Größe der Datei in Bytes.
- `type`
  - : Der [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) der Datei.
- `webkitRelativePath` {{non-standard_inline}}
  - : Ein String, der den Pfad der Datei relativ zum Basisverzeichnis angibt, das im Verzeichniswähler ausgewählt wurde (d.h. ein `file`-Picker, bei dem das [`webkitdirectory`](#webkitdirectory)-Attribut gesetzt ist). _Dies ist nicht standardisiert und sollte mit Vorsicht verwendet werden._

### Akzeptierte Dateitypen begrenzen

Oft möchten Sie nicht, dass der Benutzer beliebige Dateitypen auswählen kann; stattdessen möchten Sie oft, dass er Dateien eines bestimmten Typs oder bestimmter Typen auswählt. Zum Beispiel, wenn Ihre Dateieingabe es Nutzern ermöglicht, ein Profilbild hochzuladen, möchten Sie wahrscheinlich, dass sie Web-kompatible Bildformate auswählen, wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}}.

Akzeptable Dateitypen können mit dem [`accept`](#accept)-Attribut angegeben werden, das eine durch Komma getrennte Liste von erlaubten Dateierweiterungen oder MIME-Typen annimmt. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*` MIME-Typ. (Viele Mobilgeräte erlauben bei der Verwendung dieser Option auch das Aufnehmen eines Bildes mit der Kamera.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — Akzeptiert alles, was nach einem MS Word-Dokument aussieht.

Sehen wir uns ein vollständigeres Beispiel an:

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="profile_pic">Choose file to upload</label>
    <input
      type="file"
      id="profile_pic"
      name="profile_pic"
      accept=".jpg, .jpeg, .png" />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

Dies erzeugt eine ähnlich aussehende Ausgabe wie das vorherige Beispiel:

{{EmbedLiveSample('Limiting_accepted_file_types', 650, 90)}}

Es mag ähnlich aussehen, aber wenn Sie versuchen, mit dieser Eingabe eine Datei auszuwählen, werden Sie sehen, dass der Dateiauswahl-Dialog nur die Dateitypen auswählen lässt, die im `accept`-Wert angegeben sind (das genaue Interface unterscheidet sich von Browser zu Browser und Betriebssystem zu Betriebssystem).

Das `accept`-Attribut validiert nicht die Typen der ausgewählten Dateien; es gibt den Browsern Hinweise, um Nutzer bei der Auswahl der richtigen Dateitypen zu leiten. In den meisten Fällen ist es den Nutzern dennoch möglich, eine Option im Dateiauswahlfenster zu aktivieren, die es ihnen erlaubt, dies zu überschreiben und jede gewünschte Datei auszuwählen, einschließlich falscher Dateitypen.

Aus diesem Grund sollten Sie sicherstellen, dass das `accept`-Attribut durch eine entsprechende serverseitige Validierung ergänzt wird.

### Erkennen von Abbrüchen

Das `cancel`-Event wird ausgelöst, wenn der Benutzer seine Auswahl nicht ändert und die zuvor ausgewählten Dateien erneut auswählt. Das `cancel`-Event wird auch ausgelöst, wenn das Dateipicker-Dialogfenster geschlossen oder über die "Abbrechen"-Schaltfläche oder die <kbd>Escape</kbd>-Taste abgebrochen wird.

Zum Beispiel wird der folgende Code in der Konsole protokolliert, wenn der Nutzer das Popup schließt, ohne eine Datei auszuwählen:

```js
const elem = document.createElement("input");
elem.type = "file";
elem.addEventListener("cancel", () => {
  console.log("Canceled.");
});
elem.addEventListener("change", () => {
  if (elem.files.length === 1) {
    console.log("File selected: ", elem.files[0]);
  }
});
elem.click();
```

### Anmerkungen

1. Sie können den Wert eines Dateiauswahlfelds nicht über ein Skript setzen — so etwas wie das Folgende hat keinen Effekt:

   ```js
   const input = document.querySelector("input[type=file]");
   input.value = "foo";
   ```

2. Wenn eine Datei mit einem `<input type="file">` ausgewählt wird, wird aus offensichtlichen Sicherheitsgründen der reale Pfad zur Quelldatei nicht im `value`-Attribut des Eingabefeldes angezeigt. Stattdessen wird der Dateiname angezeigt, mit dem vorangestellten `C:\fakepath\`. Es gibt einige historische Gründe für diese Besonderheit, aber es wird in allen modernen Browsern unterstützt und ist tatsächlich [in der Spezifikation definiert](https://html.spec.whatwg.org/multipage/forms.html#fakepath-srsly).

## Beispiele

### Vollständiges Datei-Beispiel

In diesem Beispiel präsentieren wir einen etwas fortgeschritteneren Dateiauswähler, der sich die Dateiinformationen zunutze macht, die in der `HTMLInputElement.files`-Eigenschaft verfügbar sind, sowie einige clevere Tricks zeigt.

#### HTML

Das HTML sieht folgendermaßen aus:

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="image_uploads">Choose images to upload (PNG, JPG)</label>
    <input
      type="file"
      id="image_uploads"
      name="image_uploads"
      accept=".jpg, .jpeg, .png"
      multiple />
  </div>
  <div class="preview">
    <p>No files currently selected for upload</p>
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

```css hidden
html {
  font-family: sans-serif;
}

form {
  background: #cccccc;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid black;
}

form ol {
  padding-left: 0;
}

form li,
div > p {
  background: #eeeeee;
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

Dies ähnelt dem, was wir zuvor gesehen haben, daher werden wir keine Zeit auf die Beschreibung verwenden. Auch haben wir das auf das Beispiel angewendete CSS ausgeblendet, da es nicht relevant für das Verständnis der Dateieingabe oder das JavaScript ist, das diese betreibt.

#### JavaScript

In den ersten Zeilen des Skripts holen wir Referenzen auf die Formulareingabe selbst und das {{htmlelement("div")}}-Element mit der Klasse `.preview`. Als nächstes verstecken wir das {{htmlelement("input")}}-Element — wir tun dies, weil Datei-Eingaben dazu neigen, unattraktiv, schwer zu stylen und inkonsistent in ihrem Design über verschiedene Browser hinweg zu sein. Sie können das `input`-Element aktivieren, indem Sie auf sein {{htmlelement("label")}} klicken. Es ist daher besser, das `input` visuell zu verstecken und das Label wie einen Button zu gestalten, damit der Nutzer weiß, dass er damit interagieren kann, wenn er Dateien hochladen möchte.

```js
const input = document.querySelector("input");
const preview = document.querySelector(".preview");

input.style.opacity = 0;
```

> [!NOTE]
> {{cssxref("opacity")}} wird verwendet, um die Dateieingabe zu verstecken, anstelle von {{cssxref("visibility", "visibility: hidden")}} oder {{cssxref("display", "display: none")}}, weil assistive Technologien die beiden letztgenannten Stile so interpretieren, dass die Dateieingabe nicht interaktiv ist.

Als nächstes fügen wir einen [Event Listener](/de/docs/Web/API/EventTarget/addEventListener) zur Eingabefeld hinzu, der auf Änderungen seines ausgewählten Wertes hört (in diesem Fall, wenn Dateien ausgewählt werden). Der Event Listener ruft unsere benutzerdefinierte `updateImageDisplay()`-Funktion auf.

```js
input.addEventListener("change", updateImageDisplay);
```

Wenn die `updateImageDisplay()`-Funktion aufgerufen wird, führen wir Folgendes durch:

- Verwenden Sie eine {{jsxref("Statements/while", "while")}}-Schleife, um den vorherigen Inhalt des Vorschaubereichs `<div>` zu leeren.
- Holen Sie das [`FileList`](/de/docs/Web/API/FileList)-Objekt, das die Informationen zu allen ausgewählten Dateien enthält, und speichern Sie es in einer Variablen namens `curFiles`.
- Prüfen Sie, ob keine Dateien ausgewählt wurden, indem Sie überprüfen, ob `curFiles.length` gleich 0 ist. Wenn ja, drucken Sie eine Nachricht in den Vorschaubereich `<div>`, die besagt, dass keine Dateien ausgewählt wurden.
- Wenn Dateien ausgewählt wurden, iterieren wir über jede und drucken Informationen darüber in den Vorschaubereich `<div>`. Beachtenswerte Punkte:
- Wir verwenden die benutzerdefinierte `validFileType()`-Funktion, um zu überprüfen, ob der Dateityp korrekt ist (z. B. die in `accept`-Attribut spezifizierten Bildtypen).
- Wenn er korrekt ist, drucken wir:
  - Den Name und die Dateigröße in einem Listenpunkt innerhalb des Vorschaubereichs `<div>` (entnommen aus `file.name` und `file.size`). Die benutzerdefinierte `returnFileSize()`-Funktion gibt eine schön formatierte Version der Größe in Bytes/KB/MB zurück (standardmäßig meldet der Browser die Größe in absoluten Bytes).
  - Erstellen Sie eine Miniaturvorschau des Bildes, indem Sie [`URL.createObjectURL(file)`](/de/docs/Web/API/URL/createObjectURL_static) aufrufen. Setzen Sie dann die Miniaturansicht in den Listenpunkt ein, indem Sie ein neues {{htmlelement("img")}} erstellen und dessen [`src`](/de/docs/Web/HTML/Reference/Elements/img#src) auf die Miniaturansicht setzen.

- Wenn der Dateityp ungültig ist, zeigen wir eine Nachricht innerhalb eines Listenelements an, die den Nutzer darüber informiert, dass er einen anderen Dateityp auswählen muss.

```js
function updateImageDisplay() {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFiles = input.files;
  if (curFiles.length === 0) {
    const para = document.createElement("p");
    para.textContent = "No files currently selected for upload";
    preview.appendChild(para);
  } else {
    const list = document.createElement("ol");
    preview.appendChild(list);

    for (const file of curFiles) {
      const listItem = document.createElement("li");
      const para = document.createElement("p");
      if (validFileType(file)) {
        para.textContent = `File name ${file.name}, file size ${returnFileSize(
          file.size,
        )}.`;
        const image = document.createElement("img");
        image.src = URL.createObjectURL(file);
        image.alt = image.title = file.name;

        listItem.appendChild(image);
        listItem.appendChild(para);
      } else {
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
        listItem.appendChild(para);
      }

      list.appendChild(listItem);
    }
  }
}
```

Die benutzerdefinierte `validFileType()`-Funktion nimmt ein [`File`](/de/docs/Web/API/File)-Objekt als Parameter und verwendet {{jsxref("Array.prototype.includes()")}}, um zu überprüfen, ob ein Wert in `fileTypes` mit der `type`-Eigenschaft der Datei übereinstimmt. Wenn eine Übereinstimmung gefunden wird, gibt die Funktion `true` zurück. Wenn keine Übereinstimmung gefunden wird, gibt sie `false` zurück.

```js
// https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types
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

Die `returnFileSize()`-Funktion nimmt eine Zahl (in Bytes, entnommen aus der `size`-Eigenschaft der aktuellen Datei) und formatiert sie in eine schön formatierte Größe in Bytes/KB/MB um.

```js
function returnFileSize(number) {
  if (number < 1e3) {
    return `${number} bytes`;
  } else if (number >= 1e3 && number < 1e6) {
    return `${(number / 1e3).toFixed(1)} KB`;
  }
  return `${(number / 1e6).toFixed(1)} MB`;
}
```

> [!NOTE]
> Die Einheiten "KB" und "MB" verwenden hier die [SI-Präfix](https://en.wikipedia.org/wiki/Binary_prefix)-Konvention von 1KB = 1000B, ähnlich wie macOS. Unterschiedliche Systeme stellen Dateigrößen unterschiedlich dar — zum Beispiel verwendet Ubuntu IEC-Präfixe, bei denen 1KiB = 1024B, während RAM-Spezifikationen oft SI-Präfixe zur Darstellung von Zweierpotenzen (1KB = 1024B) verwenden. Aus diesem Grund haben wir `1e3` (`1000`) und `1e6` (`100000`) statt `1024` und `1048576` verwendet. In Ihrer Anwendung sollten Sie das Einheitensystem klar an Ihre Nutzer kommunizieren, wenn die exakte Größe wichtig ist.

```js hidden
const button = document.querySelector("form button");
button.addEventListener("click", (e) => {
  e.preventDefault();
  const para = document.createElement("p");
  para.append("Image uploaded!");
  preview.replaceChildren(para);
});
```

#### Ergebnis

{{EmbedLiveSample('Examples', '100%', 200)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Ein String, der den Pfad zur ausgewählten Datei repräsentiert.
      </td>
    </tr>
    <tr>
      <td><strong>Events</strong></td>
      <td>
        [`change`](/de/docs/Web/API/HTMLElement/change_event),
        [`input`](/de/docs/Web/API/Element/input_event) und
        [`cancel`](/de/docs/Web/API/HTMLInputElement/cancel_event)
      </td>
    </tr>
    <tr>
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td><a href="/de/docs/Web/HTML/Reference/Elements/input#required"><code>required</code></a></td>
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
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications) — enthält eine Reihe weiterer nützlicher Beispiele in Bezug auf `<input type="file">` und die [File API](/de/docs/Web/API/File).
