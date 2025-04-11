---
title: "HTML-Attribut: accept"
short-title: accept
slug: Web/HTML/Reference/Attributes/accept
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`accept`**-Attribut nimmt als seinen Wert eine durch Kommas getrennte Liste von einem oder mehreren Dateitypen oder [eindeutigen Dateitypspezifizierern](#eindeutige_dateitypspezifizierer) an, welche die erlaubten Dateitypen beschreiben.

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

Die accept-Eigenschaft ist ein Attribut des {{HTMLElement("input/file", "file")}}-Typs des {{htmlelement("input")}}. Es wurde am {{htmlelement("form")}}-Element unterstützt, aber zugunsten von {{HTMLElement("input/file", "file")}} entfernt.

Da ein gegebener Dateityp auf mehr als eine Weise identifiziert werden kann, ist es nützlich, eine umfassende Menge an Typspezifizierern bereitzustellen, wenn Sie Dateien eines bestimmten Typs benötigen, oder das Wildcard-Zeichen verwenden, um anzugeben, dass ein Typ jedes Formats akzeptabel ist.

Zum Beispiel gibt es mehrere Möglichkeiten, Microsoft Word-Dateien zu identifizieren, daher könnte eine Seite, die Word-Dateien akzeptiert, ein `<input>` wie dieses verwenden:

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

Das `accept`-Attribut validiert nicht die Typen der ausgewählten Dateien; es gibt den Browsern Hinweise, die Benutzer zur Auswahl der richtigen Dateitypen zu führen. Es ist in den meisten Fällen immer noch möglich, dass Benutzer eine Option im Dateiwähler umschalten, die es erlaubt, diese zu überschreiben und jede Datei auszuwählen, die sie möchten, und dann falsche Dateitypen zu wählen.

Aus diesem Grund sollten Sie sicherstellen, dass die erwartete Anforderung serverseitig validiert wird.

## Beispiele

Wenn es auf einem Datei-Eingabetyp gesetzt ist, sollte der native Dateiauswähler, der sich öffnet, nur die Auswahl von Dateien des richtigen Dateityps ermöglichen. Die meisten Betriebssysteme schwächen die Dateien ab, die nicht den Kriterien entsprechen und nicht auswählbar sind.

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

Beachten Sie, dass das letzte Beispiel es Ihnen ermöglicht, mehrere Bilder auszuwählen. Siehe das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) Attribut für weitere Informationen.

## Eindeutige Dateitypspezifizierer

Ein **eindeutiger Dateitypspezifizierer** ist eine Zeichenkette, die einen Dateityp beschreibt, der vom Benutzer in einem {{HTMLElement("input")}}-Element des Typs `file` ausgewählt werden kann. Jeder eindeutige Dateitypspezifizierer kann eine der folgenden Formen annehmen:

- Eine gültige, nicht case-sensitive Dateinamenerweiterung, beginnend mit einem Punkt (".") Zeichen. Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Eine gültige MIME-Typ-Zeichenkette, ohne Erweiterungen.
- Die Zeichenkette `audio/*`, was "any audio file" bedeutet.
- Die Zeichenkette `video/*`, was "any video file" bedeutet.
- Die Zeichenkette `image/*`, was "any image file" bedeutet.

Das `accept`-Attribut nimmt als seinen Wert eine Zeichenkette an, die einen oder mehrere dieser eindeutigen Dateitypspezifizierer enthält, getrennt durch Kommas. Zum Beispiel könnte ein Dateiauswahl-Dialog, der Inhalte benötigt, die als Bild präsentiert werden können, einschließlich sowohl standardmäßiger Bildformate als auch PDF-Dateien, wie folgt aussehen:

```html
<input type="file" accept="image/*,.pdf" />
```

## Datei-Eingaben verwenden

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
> Sie können dieses Beispiel auch auf GitHub finden — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html), und auch [siehe es live laufen](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Unabhängig vom Gerät oder Betriebssystem des Benutzers stellt die Datei-Eingabe einen Button bereit, der einen Dateiauswahl-Dialog öffnet, der es dem Benutzer erlaubt, eine Datei auszuwählen.

Das Einschließen des [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) Attributs, wie oben gezeigt, gibt an, dass mehrere Dateien auf einmal ausgewählt werden können. Der Benutzer kann mehrere Dateien aus dem Dateiauswahl-Dialog in jeder Weise auswählen, die sein gewähltes Plattform erlaubt (z.B. durch Drücken von <kbd>Shift</kbd> oder <kbd>Control</kbd> und dann Klicken). Wenn Sie möchten, dass der Benutzer jeweils nur eine Datei pro `<input>` auswählt, lassen Sie das `multiple`-Attribut weg.

### Akzeptierte Dateitypen einschränken

Oft möchten Sie nicht, dass der Benutzer irgendeinen beliebigen Dateityp auswählen kann; stattdessen möchten Sie oft, dass sie Dateien eines spezifischen Typs oder mehrerer Typen auswählen. Zum Beispiel, wenn Ihre Datei-Eingabe es den Benutzern ermöglicht, ein Profilbild hochzuladen, möchten Sie wahrscheinlich, dass sie web-kompatible Bildformate auswählen, wie z.B. {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}}.

Akzeptable Dateitypen können mit dem [`accept`](/de/docs/Web/HTML/Reference/Elements/input/file#accept) Attribut spezifiziert werden, das eine durch Kommas getrennte Liste der erlaubten Dateiendungen oder MIME-Typen annimmt. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*` MIME-Typ. (Viele mobile Geräte lassen den Benutzer auch ein Foto mit der Kamera aufnehmen, wenn dies verwendet wird.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — akzeptiert alles, was nach einem MS Word-Dokument riecht.

Schauen wir uns ein vollständigeres Beispiel an:

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
