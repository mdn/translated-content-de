---
title: "HTML-Attribut: accept"
short-title: accept
slug: Web/HTML/Attributes/accept
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}

Das **`accept`**-Attribut nimmt als Wert eine kommagetrennte Liste von einem oder mehreren Dateitypen oder [eindeutigen Dateityp-Spezifizierern](#eindeutige_dateityp-spezifizierer), die beschreiben, welche Dateitypen erlaubt sind.

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

Die `accept`-Eigenschaft ist ein Attribut des {{HTMLElement("input/file", "file")}}-{{htmlelement("input")}}-Typs. Es wurde für das {{htmlelement("form")}}-Element unterstützt, jedoch zugunsten von {{HTMLElement("input/file", "file")}} entfernt.

Da ein gegebener Dateityp auf verschiedene Weise identifiziert werden kann, ist es nützlich, eine umfassende Liste von Typspezifizierern bereitzustellen, wenn Sie Dateien eines bestimmten Typs benötigen, oder verwenden Sie den Platzhalter, um anzugeben, dass ein Typ in jedem Format akzeptabel ist.

Zum Beispiel gibt es mehrere Möglichkeiten, Microsoft Word-Dateien zu identifizieren, daher könnte eine Seite, die Word-Dateien akzeptiert, ein `<input>` wie dieses verwenden:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

Wenn Sie hingegen eine Mediendatei akzeptieren, möchten Sie möglicherweise alle Formate dieses Medientyps einschließen:

```html
<input type="file" id="soundFile" accept="audio/*" />
<input type="file" id="videoFile" accept="video/*" />
<input type="file" id="imageFile" accept="image/*" />
```

Das `accept`-Attribut validiert nicht die Typen der ausgewählten Dateien; es bietet Hinweise für Browser, um Benutzer dazu zu führen, die richtigen Dateitypen auszuwählen. Es ist immer noch möglich (in den meisten Fällen) für Benutzer, eine Option im Dateiauswahldialog umzuschalten, die es ihnen ermöglicht, diese Vorgabe zu überschreiben und jede beliebige Datei auszuwählen, die sie möchten, und dann falsche Dateitypen auszuwählen.

Aus diesem Grund sollten Sie sicherstellen, dass die erwartete Anforderung serverseitig validiert wird.

## Beispiele

Wenn das Attribut für einen Dateityp-Input festgelegt ist, sollte der native Dateiwähler, der geöffnet wird, nur die Auswahl von Dateien des korrekten Dateityps ermöglichen. Die meisten Betriebssysteme hellen Dateien auf, die nicht den Kriterien entsprechen und nicht auswählbar sind.

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

Beachten Sie, dass das letzte Beispiel es Ihnen ermöglicht, mehrere Bilder auszuwählen. Weitere Informationen finden Sie im [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut.

## Eindeutige Dateityp-Spezifizierer

Ein **eindeutiger Dateityp-Spezifizierer** ist ein String, der einen Dateityp beschreibt, der vom Benutzer in einem {{HTMLElement("input")}}-Element vom Typ `file` ausgewählt werden kann. Jeder eindeutige Dateityp-Spezifizierer kann eine der folgenden Formen annehmen:

- Eine gültige, nicht groß- und kleinschreibungssensitive Dateierweiterung, beginnend mit einem Punkt (".")-Zeichen. Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Ein gültiger MIME-Type-String, ohne Erweiterungen.
- Der String `audio/*`, der "jede Audiodatei" bedeutet.
- Der String `video/*`, der "jede Videodatei" bedeutet.
- Der String `image/*`, der "jede Bilddatei" bedeutet.

Das `accept`-Attribut nimmt als Wert einen String, der einen oder mehrere dieser eindeutigen Dateityp-Spezifizierer enthält, getrennt durch Kommata. Ein Dateiwähler, der Inhalte benötigt, die als Bild dargestellt werden können, einschließlich sowohl Standardbildformate als auch PDF-Dateien, könnte folgendermaßen aussehen:

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

Unabhängig vom Gerät oder Betriebssystem des Benutzers bietet die Dateieingabe eine Schaltfläche, die einen Dateiauswahldialog öffnet, der es dem Benutzer ermöglicht, eine Datei auszuwählen.

Wenn das [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut enthalten ist, wie oben gezeigt, können mehrere Dateien auf einmal ausgewählt werden. Der Benutzer kann mehrere Dateien aus dem Dateiwähler auswählen, auf jede Weise, die seine gewählte Plattform erlaubt (z.B. durch Gedrückthalten von <kbd>Shift</kbd> oder <kbd>Control</kbd> und dann Klicken). Wenn Sie nur möchten, dass der Benutzer eine einzelne Datei pro `<input>` auswählt, lassen Sie das `multiple`-Attribut weg.

### Akzeptierte Dateitypen einschränken

Oft möchten Sie nicht, dass der Benutzer einen beliebigen Dateityp auswählen kann; stattdessen möchten Sie oft, dass er Dateien eines bestimmten Typs oder mehrerer Typen auswählt. Zum Beispiel, wenn Ihre Dateieingabe es den Benutzern ermöglicht, ein Profilbild hochzuladen, möchten Sie wahrscheinlich, dass sie webbkompatible Bildformate auswählen, wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}}.

Akzeptable Dateitypen können mit dem [`accept`](/de/docs/Web/HTML/Element/input/file#accept)-Attribut spezifiziert werden, das eine kommagetrennte Liste von erlaubten Dateierweiterungen oder MIME-Typen annimmt. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*` MIME-Typ. (Viele Mobilgeräte erlauben auch das Aufnehmen eines Bildes mit der Kamera, wenn dies verwendet wird.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — akzeptiert alles, was wie ein MS Word-Dokument aussieht.

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

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [Datei-API](/de/docs/Web/API/File)
