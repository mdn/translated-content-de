---
title: "`accept` HTML-Attribut"
short-title: accept
slug: Web/HTML/Reference/Attributes/accept
l10n:
  sourceCommit: b50ed7ac1c2ca21b4b5cfb594474a17da3f2e6c2
---

Das **`accept`**-Attribut nimmt als Wert eine durch Kommas getrennte Liste von einem oder mehreren Dateitypen oder [einzigartigen Dateityp-Spezifizierern](#einzigartige_dateityp-spezifizierer) an, die beschreiben, welche Dateitypen erlaubt sind.

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

Die accept-Eigenschaft ist ein Attribut des {{HTMLElement("input/file", "file")}}-{{htmlelement("input")}}-Typs. Es wurde auf dem {{htmlelement("form")}}-Element unterstützt, jedoch zugunsten von {{HTMLElement("input/file", "file")}} entfernt.

Da ein gegebener Dateityp auf mehr als eine Weise identifiziert werden kann, ist es nützlich, eine umfassende Menge von Typspezifizierern bereitzustellen, wenn Sie Dateien eines bestimmten Typs benötigen, oder das Wildcard zu verwenden, um anzuzeigen, dass ein beliebiges Format akzeptabel ist.

Zum Beispiel gibt es mehrere Möglichkeiten, Microsoft Word-Dateien zu identifizieren. Eine Webseite, die Word-Dateien akzeptiert, könnte ein `<input>` wie dieses verwenden:

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

Das `accept`-Attribut validiert die Typen der ausgewählten Dateien nicht; es bietet Hinweise für Browser, um Benutzer zur Auswahl der richtigen Dateitypen zu führen. In den meisten Fällen können Benutzer dennoch eine Option im Dateiauswahl-Dialogfeld aktivieren, die es ihnen ermöglicht, dies zu überschreiben und jede Datei auszuwählen, die sie möchten, und dann falsche Dateitypen auszuwählen.

Deshalb sollten Sie sicherstellen, dass die erwartete Anforderung serverseitig validiert wird.

## Beispiele

Wenn es bei einem Datei-Eingabetyp gesetzt ist, sollte der native Dateiauswähler, der geöffnet wird, nur auswählen lassen, Dateien des korrekten Dateityps auszuwählen. Die meisten Betriebssysteme heben die Dateien auf, die nicht den Kriterien entsprechen und nicht auswählbar sind.

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

## Einzigartige Dateityp-Spezifizierer

Ein **einzigartiger Dateityp-Spezifizierer** ist ein String, der einen Dateityp beschreibt, der vom Benutzer in einem {{HTMLElement("input")}}-Element des Typs `file` ausgewählt werden kann. Jeder einzigartige Dateityp-Spezifizierer kann eine der folgenden Formen annehmen:

- Eine gültige, nicht fallunterscheidende Datei-Endung, beginnend mit einem Punkt ("."). Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Ein gültiger MIME-Typ-String, ohne Endungen.
- Der String `audio/*`, was "jede Audiodatei" bedeutet.
- Der String `video/*`, was "jede Videodatei" bedeutet.
- Der String `image/*`, was "jede Bilddatei" bedeutet.

Das `accept`-Attribut nimmt als Wert einen String, der einen oder mehrere dieser einzigartigen Dateityp-Spezifizierer enthält, durch Kommas getrennt. Zum Beispiel könnte ein Dateiauswähler, der Inhalte benötigt, die als Bild präsentiert werden können, sowohl Standard-Bildformate als auch PDF-Dateien einbeziehen, so aussehen:

```html
<input type="file" accept="image/*,.pdf" />
```

## Verwendung von Datei-Inputs

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
> Dieses Beispiel finden Sie auch auf GitHub — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html) und [sehen Sie es live](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Unabhängig vom Gerät oder Betriebssystem des Benutzers bietet die Dateieingabe eine Schaltfläche, die einen Dateiauswahl-Dialog öffnet, mit dem der Benutzer eine Datei auswählen kann.

Das Einbeziehen des [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attributs, wie oben gezeigt, gibt an, dass mehrere Dateien auf einmal ausgewählt werden können. Der Benutzer kann mehrere Dateien vom Dateiauswähler auswählen, auf jede Weise, die von seiner gewählten Plattform unterstützt wird (z.B. durch Halten der <kbd>Shift</kbd>- oder <kbd>Control</kbd>-Taste und Klicken). Wenn Sie nur möchten, dass der Benutzer eine einzige Datei pro `<input>` auswählt, lassen Sie das `multiple`-Attribut weg.

### Einschränkung akzeptierter Dateitypen

Oft möchten Sie nicht, dass der Benutzer einen beliebigen Dateityp auswählen kann; stattdessen möchten Sie oft, dass er Dateien eines bestimmten Typs auswählt. Zum Beispiel, wenn Ihre Dateieingabe es den Benutzern erlaubt, ein Profilbild hochzuladen, möchten Sie wahrscheinlich, dass sie webkompatible Bildformate wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}} auswählen.

Akzeptable Dateitypen können mit dem [`accept`](/de/docs/Web/HTML/Reference/Elements/input/file#accept)-Attribut spezifiziert werden, das eine durch Kommata getrennte Liste von erlaubten Dateiendungen oder MIME-Typen annimmt. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*`-MIME-Typ. (Viele mobile Geräte lassen den Benutzer mit der Kamera ein Bild aufnehmen, wenn dies verwendet wird.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — Akzeptiert alles, was nach einem MS Word-Dokument riecht.

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

- [Verwendung von Dateien in Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [File API](/de/docs/Web/API/File)
