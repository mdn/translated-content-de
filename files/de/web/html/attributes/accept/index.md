---
title: "HTML-Attribut: accept"
short-title: accept
slug: Web/HTML/Attributes/accept
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das **`accept`** Attribut nimmt als Wert eine durch Kommas getrennte Liste von einem oder mehreren Dateitypen oder [einzigartigen Dateityp-Spezifizierern](#einzigartige_dateityp-spezifizierer) an, die beschreiben, welche Dateitypen erlaubt sind.

{{EmbedInteractiveExample("pages/tabbed/attribute-accept.html", "tabbed-shorter")}}

## Überblick

Die `accept`-Eigenschaft ist ein Attribut des {{HTMLElement("input/file", "file")}} {{htmlelement("input")}} Typs. Es wurde auf dem {{htmlelement("form")}} Element unterstützt, aber zugunsten von {{HTMLElement("input/file", "file")}} entfernt.

Da ein bestimmter Dateityp auf verschiedene Arten identifiziert werden kann, ist es hilfreich, eine umfassende Menge von Typ-Spezifizierern bereitzustellen, wenn Sie Dateien eines bestimmten Typs benötigen, oder das Wildcard zu verwenden, um anzuzeigen, dass ein beliebiges Format akzeptabel ist.

Zum Beispiel gibt es mehrere Möglichkeiten, Microsoft Word-Dateien zu identifizieren, daher könnte eine Seite, die Word-Dateien akzeptiert, ein `<input>` wie dieses verwenden:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

Wenn Sie hingegen eine Mediendatei akzeptieren, möchten Sie möglicherweise jedes Format dieses Medientyps einbeziehen:

```html
<input type="file" id="soundFile" accept="audio/*" />
<input type="file" id="videoFile" accept="video/*" />
<input type="file" id="imageFile" accept="image/*" />
```

Das `accept` Attribut überprüft nicht die Typen der ausgewählten Dateien; es gibt lediglich Hinweise für Browser, um Benutzer zur Auswahl der richtigen Dateitypen zu leiten. Es ist dennoch möglich (in den meisten Fällen), dass Benutzer eine Option im Dateiauswahldialog umschalten können, die es ermöglicht, dies zu überschreiben und beliebige Dateien auszuwählen, sowie fehlerhafte Dateitypen zu wählen.

Aus diesem Grund sollten Sie sicherstellen, dass die erwartete Anforderung serverseitig validiert wird.

## Beispiele

Wenn es auf einen Datei-Input-Typ festgelegt ist, sollte die native Dateiauswahl, die sich öffnet, nur die Auswahl von Dateien des korrekten Dateityps ermöglichen. Die meisten Betriebssysteme blenden Dateien, die nicht den Kriterien entsprechen, aus oder machen sie nicht auswählbar.

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

Beachten Sie, dass das letzte Beispiel es Ihnen ermöglicht, mehrere Bilder auszuwählen. Sehen Sie sich das [`multiple`](/de/docs/Web/HTML/Element/input#multiple) Attribut für weitere Informationen an.

## Einzigartige Dateityp-Spezifizierer

Ein **einzigartiger Dateityp-Spezifizierer** ist ein String, der einen Typ von Datei beschreibt, die von einem Benutzer in einem {{HTMLElement("input")}} Element des Typs `file` ausgewählt werden kann. Jeder einzigartige Dateityp-Spezifizierer kann eine der folgenden Formen annehmen:

- Eine gültige, nicht auf Groß- und Kleinschreibung achtende Dateiendung, beginnend mit einem Punkt (".") Zeichen. Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Ein gültiger MIME-Typ-String, ohne Erweiterungen.
- Der String `audio/*`, was "jede Audiodatei" bedeutet.
- Der String `video/*`, was "jede Videodatei" bedeutet.
- Der String `image/*`, was "jede Bilddatei" bedeutet.

Das `accept` Attribut nimmt als Wert einen String, der einen oder mehrere dieser einzigartigen Dateityp-Spezifizierer enthält, getrennt durch Kommata. Zum Beispiel könnte ein Dateiauswahldialog, der Inhalte benötigt, die als Bild präsentiert werden können, sowohl Standardbildformate als auch PDF-Dateien einschließen:

```html
<input type="file" accept="image/*,.pdf" />
```

## Verwenden von Datei-Inputs

### Ein grundlegendes Beispiel

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
> Sie können dieses Beispiel auch auf GitHub finden — sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html) an und auch [sehen Sie es live auszuführen](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Unabhängig vom Gerät oder Betriebssystem des Benutzers bietet die Dateieingabe eine Schaltfläche, die einen Dateiauswahldialog öffnet und es dem Benutzer ermöglicht, eine Datei auszuwählen.

Indem Sie das [`multiple`](/de/docs/Web/HTML/Element/input#multiple) Attribut einschließen, wie oben gezeigt, geben Sie an, dass mehrere Dateien auf einmal ausgewählt werden können. Der Benutzer kann auf die von seiner gewählten Plattform erlaubte Weise mehrere Dateien aus dem Dateiauswahldialog auswählen (z.B. durch das Halten der Shift- oder Ctrl-Taste und dann Klicken). Wenn Sie möchten, dass der Benutzer nur eine einzelne Datei pro `<input>` auswählt, lassen Sie das `multiple` Attribut weg.

### Akzeptierte Dateitypen einschränken

Oftmals möchten Sie nicht, dass der Benutzer jeden beliebigen Dateityp auswählen kann; stattdessen möchten Sie oft, dass er Dateien eines bestimmten Typs oder mehrerer Typen auswählt. Beispielsweise möchten Sie, dass Ihre Dateieingabe Benutzern das Hochladen eines Profilfotos erlaubt, indem Sie webkompatible Bildformate wie [JPEG](/de/docs/Glossary/JPEG) oder [PNG](/de/docs/Glossary/PNG) auswählen.

Akzeptable Dateitypen können mit dem [`accept`](/de/docs/Web/HTML/Element/input/file#accept) Attribut festgelegt werden, das eine durch Kommata getrennte Liste erlaubter Dateiendungen oder MIME-Typen annimmt. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*` MIME-Typ. (Viele mobile Geräte erlauben dem Benutzer auch, ein Bild mit der Kamera aufzunehmen, wenn dies verwendet wird.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — Akzeptiert alles, was nach einem MS Word-Dokument riecht.

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
