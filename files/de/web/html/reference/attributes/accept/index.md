---
title: "HTML-Attribut: accept"
short-title: accept
slug: Web/HTML/Reference/Attributes/accept
l10n:
  sourceCommit: 19a086b6076db59fcc42ee76a98ba183adb29f8c
---

Das **`accept`**-Attribut nimmt als Wert eine kommagetrennte Liste von einem oder mehreren Dateitypen oder [eindeutigen Dateitypspezifizierern](#eindeutige_dateitypspezifizierer) an, die beschreiben, welche Dateitypen erlaubt sind.

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

## Überblick

Die accept-Eigenschaft ist ein Attribut des {{HTMLElement("input/file", "file")}}-Typs im {{htmlelement("input")}}-Element. Es wurde im {{htmlelement("form")}}-Element unterstützt, aber zugunsten von {{HTMLElement("input/file", "file")}} entfernt.

Da ein bestimmter Dateityp auf mehr als eine Weise identifiziert werden kann, ist es nützlich, eine umfassende Reihe von Typspezifizierern anzugeben, wenn Sie Dateien eines bestimmten Typs benötigen, oder das Wildcard-Zeichen zu verwenden, um anzugeben, dass ein beliebiger Formattyp akzeptabel ist.

Zum Beispiel gibt es mehrere Möglichkeiten, Microsoft Word-Dateien zu identifizieren, daher könnte eine Website, die Word-Dateien akzeptiert, ein `<input>` wie dieses verwenden:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

Wohingegen, wenn Sie eine Mediendatei akzeptieren, Sie möglicherweise jedes Format dieses Medientyps einbeziehen möchten:

```html
<input type="file" id="soundFile" accept="audio/*" />
<input type="file" id="videoFile" accept="video/*" />
<input type="file" id="imageFile" accept="image/*" />
```

Das `accept`-Attribut validiert nicht die Typen der ausgewählten Dateien; es gibt Browsern Hinweise, um Benutzer bei der Auswahl der richtigen Dateitypen zu unterstützen. Es ist in den meisten Fällen immer noch möglich, dass Benutzer eine Option im Dateiauswahldialog aktivieren, die es ermöglicht, dies zu überschreiben und jede beliebige Datei auszuwählen, die sie wünschen, und dann falsche Dateitypen auszuwählen.

Aus diesem Grund sollten Sie sicherstellen, dass die erwartete Anforderung serverseitig validiert wird.

## Beispiele

Wenn beim Datei-Input-Typ gesetzt, sollte der native Datei-Dialog, der sich öffnet, es nur ermöglichen, Dateien des richtigen Dateityps auszuwählen. Die meisten Betriebssysteme machen Dateien, die nicht den Kriterien entsprechen, heller und nicht auswählbar.

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

Beachten Sie, dass das letzte Beispiel es Ihnen ermöglicht, mehrere Bilder auszuwählen. Siehe das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut für weitere Informationen.

## Eindeutige Dateitypspezifizierer

Ein **eindeutiger Dateitypspezifizierer** ist ein String, der eine Art von Datei beschreibt, die von einem Benutzer im {{HTMLElement("input")}}-Element des Typs `file` ausgewählt werden kann. Jeder eindeutige Dateitypspezifizierer kann eine der folgenden Formen annehmen:

- Eine gültige, nicht case-sensitive Dateierweiterung, die mit einem Punkt (`"."`) beginnt. Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Ein gültiger MIME-Typ-String, ohne Erweiterungen.
- Der String `audio/*`, der "jede Audiodatei" bedeutet.
- Der String `video/*`, der "jede Videodatei" bedeutet.
- Der String `image/*`, der "jede Bilddatei" bedeutet.

Das `accept`-Attribut nimmt als Wert einen String, der einen oder mehrere dieser eindeutigen Dateitypspezifizierer enthält, getrennt durch Kommas. Zum Beispiel könnte ein Dateiauswahldialog, der Inhalte benötigt, die als Bild dargestellt werden können, einschließlich sowohl Standardbildformate als auch PDF-Dateien, so aussehen:

```html
<input type="file" accept="image/*,.pdf" />
```

## Verwenden von Dateieingaben

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
> Sie können dieses Beispiel auch auf GitHub finden — sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html) an und [sehen Sie es auch live laufen](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Unabhängig vom Gerät oder Betriebssystem des Benutzers bietet die Dateieingabe eine Schaltfläche, die einen Dateiauswahldialog öffnet, der es dem Benutzer ermöglicht, eine Datei auszuwählen.

Wenn das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut einbezogen wird, wie oben gezeigt, gibt es an, dass mehrere Dateien auf einmal ausgewählt werden können. Der Benutzer kann mehrere Dateien aus dem Dateiwähler auf jede Art und Weise auswählen, die seine gewählte Plattform erlaubt (z.B. durch das Gedrückthalten von <kbd>Shift</kbd> oder <kbd>Control</kbd> und dann Anklicken). Wenn Sie möchten, dass der Benutzer nur eine einzelne Datei pro `<input>` auswählen kann, lassen Sie das `multiple`-Attribut weg.

### Begrenzen der akzeptierten Dateitypen

Oft möchten Sie nicht, dass der Benutzer jede beliebige Art von Datei auswählen kann; stattdessen möchten Sie oft, dass er Dateien eines bestimmten Typs oder bestimmter Typen auswählt. Zum Beispiel, wenn Ihre Dateieingabe es Benutzern ermöglicht, ein Profilbild hochzuladen, möchten Sie wahrscheinlich, dass sie webkompatible Bildformate auswählen, wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}}.

Akzeptable Dateitypen können mit dem [`accept`](/de/docs/Web/HTML/Reference/Elements/input/file#accept)-Attribut angegeben werden, das eine kommagetrennte Liste von erlaubten Dateierweiterungen oder MIME-Typen annimmt. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*` MIME-Typ. (Viele mobile Geräte lassen den Benutzer auch ein Bild mit der Kamera aufnehmen, wenn dies verwendet wird.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — akzeptiert alles, was wie ein MS Word-Dokument aussieht.

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

{{EmbedLiveSample('Limiting_accepted_file_types', 650, 60)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [File API](/de/docs/Web/API/File)
