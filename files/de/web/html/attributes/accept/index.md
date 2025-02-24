---
title: "HTML-Attribut: accept"
short-title: accept
slug: Web/HTML/Attributes/accept
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`accept`** Attribut nimmt als Wert eine durch Kommas getrennte Liste von einer oder mehreren Dateitypen oder [einzigartige Dateitypspezifizierer](#einzigartige_dateitypspezifizierer) an, die beschreiben, welche Dateitypen erlaubt sind.

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

Die Accept-Eigenschaft ist ein Attribut des {{HTMLElement("input/file", "file")}} {{htmlelement("input")}} Typs. Es wurde im {{htmlelement("form")}} Element unterstützt, aber zugunsten von {{HTMLElement("input/file", "file")}} entfernt.

Da ein gegebener Dateityp auf mehr als eine Weise identifiziert werden kann, ist es nützlich, eine umfassende Menge von Typspezifizierern bereitzustellen, wenn Sie Dateien eines bestimmten Typs benötigen, oder das Wildcard zu verwenden, um anzugeben, dass ein Typ jedes Formats akzeptabel ist.

Zum Beispiel gibt es verschiedene Möglichkeiten, Microsoft Word-Dateien zu identifizieren. Eine Seite, die Word-Dateien akzeptiert, könnte ein `<input>` wie folgt verwenden:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

Wenn Sie jedoch eine Mediendatei akzeptieren, möchten Sie möglicherweise jedes Format dieses Medientyps einschließen:

```html
<input type="file" id="soundFile" accept="audio/*" />
<input type="file" id="videoFile" accept="video/*" />
<input type="file" id="imageFile" accept="image/*" />
```

Das `accept` Attribut validiert nicht die Typen der ausgewählten Dateien; es bietet Hinweise für Browser, um Benutzer zur Auswahl der korrekten Dateitypen zu führen. Es ist immer noch möglich (in den meisten Fällen), dass Benutzer eine Option im Dateiauswahl-Werkzeug umschalten können, die es ihnen erlaubt, dies zu umgehen und jede beliebige Datei auszuwählen und dann falsche Dateitypen zu wählen.

Aufgrund dessen sollten Sie sicherstellen, dass die erwartete Anforderung serverseitig validiert wird.

## Beispiele

Wenn sie auf einem Datei-Eingabetypset gesetzt ist, sollte der native Datei-Picker, der geöffnet wird, das Auswählen von Dateien des korrekten Dateityps nur ermöglichen. Die meisten Betriebssysteme heben Dateien, die nicht den Kriterien entsprechen und nicht auswählbar sind, hervor.

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

Beachten Sie, dass das letzte Beispiel es Ihnen ermöglicht, mehrere Bilder auszuwählen. Siehe das [`multiple`](/de/docs/Web/HTML/Element/input#multiple) Attribut für mehr Informationen.

## Einzigartige Dateitypspezifizierer

Ein **einzigartiger Dateitypspezifizierer** ist ein String, der einen Dateityp beschreibt, der von einem Benutzer in einem {{HTMLElement("input")}} Element vom Typ `file` ausgewählt werden kann. Jeder einzigartige Dateitypspezifizierer kann eine der folgenden Formen annehmen:

- Eine gültige nicht case-sensitive Dateierweiterung, beginnend mit einem Punkt (".") Zeichen. Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Ein gültiger MIME-Typ-String, ohne Erweiterungen.
- Der String `audio/*`, was "jede Audiodatei" bedeutet.
- Der String `video/*`, was "jede Videodatei" bedeutet.
- Der String `image/*`, was "jede Bilddatei" bedeutet.

Das `accept` Attribut nimmt als Wert einen String, der einen oder mehrere dieser einzigartigen Dateitypspezifizierer enthält, getrennt durch Kommas, an. Zum Beispiel könnte ein Datei-Picker, der Inhalte benötigt, die als ein Bild präsentiert werden können, einschließlich sowohl Standardbildformate als auch PDF-Dateien, so aussehen:

```html
<input type="file" accept="image/*,.pdf" />
```

## Verwendung von Dateieingaben

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
> Sie können dieses Beispiel auch auf GitHub finden — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html) und auch [sehen Sie es live](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Unabhängig vom Gerät des Benutzers oder Betriebssystems bietet die Dateieingabe einen Button, der einen Datei-Picker öffnet, der es dem Benutzer ermöglicht, eine Datei auszuwählen.

Das Einschließen des [`multiple`](/de/docs/Web/HTML/Element/input#multiple) Attributs, wie oben gezeigt, spezifiziert, dass mehrere Dateien gleichzeitig ausgewählt werden können. Der Benutzer kann mehrere Dateien aus dem Datei-Picker auf jede Weise auswählen, die seine gewählte Plattform erlaubt (z.B. durch Halten von <kbd>Shift</kbd> oder <kbd>Control</kbd> und dann Klicken). Wenn Sie möchten, dass der Benutzer nur eine einzelne Datei pro `<input>` auswählt, lassen Sie das `multiple` Attribut weg.

### Einschränken akzeptierter Dateitypen

Oft möchten Sie nicht, dass der Benutzer jeden beliebigen Dateityp auswählen kann; stattdessen möchten Sie oft, dass er Dateien eines bestimmten Typs oder Typen auswählt. Zum Beispiel, wenn Ihre Dateieingabe es Benutzern ermöglicht, ein Profilbild hochzuladen, möchten Sie wahrscheinlich, dass sie webkompatible Bildformate auswählen, wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}}.

Akzeptable Dateitypen können mit dem [`accept`](/de/docs/Web/HTML/Element/input/file#accept) Attribut angegeben werden, das eine durch Kommas getrennte Liste erlaubter Dateierweiterungen oder MIME-Typen annimmt. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*` MIME-Typ. (Viele Mobilgeräte lassen den Benutzer auch ein Bild mit der Kamera aufnehmen, wenn dies verwendet wird.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — akzeptiert alles, was nach einem MS Word-Dokument riecht.

Werfen wir einen Blick auf ein vollständigeres Beispiel:

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
