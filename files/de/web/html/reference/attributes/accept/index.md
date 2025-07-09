---
title: "HTML Attribut: accept"
short-title: accept
slug: Web/HTML/Reference/Attributes/accept
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`accept`**-Attribut nimmt als Wert eine durch Kommas getrennte Liste von einem oder mehreren Dateitypen oder [unique file type specifiers](#unique_file_type_specifiers) an, die beschreiben, welche Dateitypen erlaubt sind.

{{InteractiveExample("HTML Demo: accept", "tabbed-shorter")}}

```html interactive-example
<label for="movie">Choose a movie to upload:</label>

<input type="file" id="movie" name="movie" accept="video/*" />

<label for="poster">Choose a poster:</label>

<input type="file" id="poster" name="poster" accept="image/png, image/jpeg" />
```

```css interactive-example
label {
  display: block;
  margin-top: 1rem;
}

input {
  margin-bottom: 1rem;
}
```

## Übersicht

Die `accept`-Eigenschaft ist ein Attribut des {{HTMLElement("input/file", "file")}}-Typs von {{htmlelement("input")}}. Es wurde auf dem {{htmlelement("form")}}-Element unterstützt, aber zugunsten von {{HTMLElement("input/file", "file")}} entfernt.

Da ein bestimmter Dateityp auf mehr als eine Weise identifiziert werden kann, ist es nützlich, eine umfassende Reihe von Typspezifizierern bereitzustellen, wenn Sie Dateien eines bestimmten Typs benötigen, oder das Wildcard-Zeichen zu verwenden, um anzugeben, dass ein Typ jeglichen Formats akzeptabel ist.

Zum Beispiel gibt es mehrere Möglichkeiten, Microsoft Word-Dateien zu identifizieren, also könnte eine Seite, die Word-Dateien akzeptiert, ein `<input>` wie dieses verwenden:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

Wenn Sie hingegen eine Mediendatei akzeptieren, möchten Sie möglicherweise jedes Format dieses Medientyps einschließen:

```html
<input type="file" id="soundFile" accept="audio/*" />
<input type="file" id="videoFile" accept="video/*" />
<input type="file" id="imageFile" accept="image/*" />
```

Das `accept`-Attribut validiert die Typen der ausgewählten Dateien nicht; es bietet Hinweise für Browser, um Benutzer dahin zu führen, die richtigen Dateitypen auszuwählen. Es ist dennoch möglich (in den meisten Fällen), dass Benutzer eine Option im Datei-Dialog umschalten, die ihnen erlaubt, dies zu überschreiben und beliebige Dateien auszuwählen, auch solche mit falschen Dateitypen.

Aus diesem Grund sollten Sie sicherstellen, dass die erwarteten Anforderungen serverseitig validiert werden.

## Beispiele

Wenn es auf einem Datei-Eingabetyp gesetzt ist, sollte der native Dateiauswahldialog nur das Auswählen von Dateien des richtigen Dateityps ermöglichen. Die meisten Betriebssysteme verblassen die Dateien, die nicht den Kriterien entsprechen und nicht auswählbar sind.

```html
<p>
  <label for="soundFile">Select an audio file:</label>
  <input type="file" id="soundFile" accept="audio/*" />
</p>
<p>
  <label for="videoFile">Select a video file:</label>
  <input type="file" id="videoFile" accept="video/*" />
</p>
<p>
  <label for="imageFile">Select some images:</label>
  <input type="file" id="imageFile" accept="image/*" multiple />
</p>
```

{{EmbedLiveSample('Examples', '100%', 200)}}

Beachten Sie, dass das letzte Beispiel Ihnen erlaubt, mehrere Bilder auszuwählen. Weitere Informationen finden Sie im [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut.

## Unique file type specifiers

Ein **unique file type specifier** ist ein String, der eine Art von Datei beschreibt, die vom Benutzer in einem {{HTMLElement("input")}}-Element des Typs `file` ausgewählt werden kann. Jeder unique file type specifier kann eine der folgenden Formen annehmen:

- Eine gültige, nicht groß-/kleinschreibungssensitive Dateierweiterung, beginnend mit einem Punkt (".") Zeichen. Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Ein gültiger MIME-Type-String, ohne Erweiterungen.
- Der String `audio/*`, der "jede Audiodatei" bedeutet.
- Der String `video/*`, der "jede Videodatei" bedeutet.
- Der String `image/*`, der "jede Bilddatei" bedeutet.

Das `accept`-Attribut nimmt als Wert einen String mit einem oder mehreren dieser unique file type specifiers an, getrennt durch Kommas. Beispielsweise könnte ein Datei-Auswahldialog, der Inhalte benötigt, die als Bild präsentiert werden können, einschließlich sowohl Standardbildformate als auch PDF-Dateien, so aussehen:

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

{{EmbedLiveSample('A_basic_example', 650, 60)}}

> [!NOTE]
> Sie können dieses Beispiel auch auf GitHub finden — sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html) an und sehen Sie es sich auch [live in Aktion](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html) an.

Unabhängig vom Gerät oder Betriebssystem des Benutzers bietet das Datei-Eingabefeld eine Schaltfläche, die einen Datei-Auswahldialog öffnet, der es dem Benutzer ermöglicht, eine Datei auszuwählen.

Das Einschließen des [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attributs, wie oben gezeigt, gibt an, dass mehrere Dateien gleichzeitig ausgewählt werden können. Der Benutzer kann auf jede Weise mehrere Dateien aus dem Datei-Dialog auswählen, die seine gewählte Plattform erlaubt (z. B. durch Drücken der <kbd>Shift</kbd>- oder <kbd>Control</kbd>-Taste und anschließendes Klicken). Wenn Sie möchten, dass der Benutzer nur eine einzelne Datei pro `<input>` auswählt, lassen Sie das `multiple`-Attribut weg.

### Akzeptierte Dateitypen einschränken

Häufig möchten Sie nicht, dass der Benutzer beliebige Dateitypen auswählen kann; stattdessen möchten Sie häufig, dass er Dateien eines bestimmten Typs oder einer bestimmten Typen auswählt. Zum Beispiel, wenn Ihre Datei-Eingabe es den Benutzern erlaubt, ein Profilbild hochzuladen, möchten Sie wahrscheinlich, dass sie web-kompatible Bildformate wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}} auswählen.

Akzeptable Dateitypen können mit dem [`accept`](/de/docs/Web/HTML/Reference/Elements/input/file#accept)-Attribut angegeben werden, das eine durch Kommas getrennte Liste von erlaubten Dateierweiterungen oder MIME-Typen annimmt. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*` MIME-Typ. (Viele mobile Geräte ermöglichen es dem Benutzer auch, ein Bild mit der Kamera aufzunehmen, wenn dies verwendet wird.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — akzeptiert alles, was wie ein MS Word-Dokument aussieht.

Schauen wir uns ein vollständigeren Beispiel an:

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

{{EmbedLiveSample('Limiting_accepted_file_types', 650, 60)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [File API](/de/docs/Web/API/File)
