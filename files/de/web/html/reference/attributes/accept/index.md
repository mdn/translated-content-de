---
title: "`accept` HTML Attribut"
short-title: accept
slug: Web/HTML/Reference/Attributes/accept
l10n:
  sourceCommit: 2066cc916dfdcbb782340bf0ce562b230e947cba
---

Das **`accept`** Attribut nimmt als Wert eine durch Kommas getrennte Liste von einem oder mehreren Dateitypen oder [einzigartigen Dateitypspezifizierern](#einzigartige_dateitypspezifizierer) an, die beschreiben, welche Dateitypen erlaubt sind.

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

Die accept-Eigenschaft ist ein Attribut des `{{HTMLElement("input/file", "file")}}` {{htmlelement("input")}} Typs. Es wurde ursprünglich beim {{htmlelement("form")}} Element unterstützt, wurde jedoch zugunsten von `{{HTMLElement("input/file", "file")}}` entfernt.

Da ein bestimmter Dateityp auf mehr als eine Weise identifiziert werden kann, ist es sinnvoll, eine umfassende Liste von Typspezifizierern anzugeben, wenn Sie Dateien eines bestimmten Typs benötigen, oder das Wildcard-Zeichen zu verwenden, um einen Dateityp in jedem Format zuzulassen.

Zum Beispiel gibt es mehrere Möglichkeiten, Microsoft Word-Dateien zu identifizieren, daher könnte eine Website, die Word-Dateien akzeptiert, ein `<input>` wie dieses verwenden:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

Wenn Sie hingegen eine Mediendatei akzeptieren, möchten Sie vielleicht jedes Format dieser Medienart einbeziehen:

```html
<input type="file" id="soundFile" accept="audio/*" />
<input type="file" id="videoFile" accept="video/*" />
<input type="file" id="imageFile" accept="image/*" />
```

Das `accept`-Attribut validiert nicht die Typen der ausgewählten Dateien; es gibt Browsern Hinweise, um Benutzer zur Auswahl der richtigen Dateitypen zu führen. Es ist jedoch in den meisten Fällen möglich, dass Benutzer eine Option im Dateiauswahl-Dialogfeld umschalten können, die es ermöglicht, dies zu umgehen und jede gewünschte Datei auszuwählen, einschließlich falscher Dateitypen.

Aus diesem Grund sollten Sie sicherstellen, dass die erwarteten Anforderungen serverseitig validiert werden.

## Beispiele

Wenn bei einem Dateieingabetyp festgelegt, sollte der native Dateiauswahl-Dialog, der sich öffnet, nur die Auswahl von Dateien des richtigen Dateityps ermöglichen. Die meisten Betriebssysteme schwächen die Dateien ab, die nicht den Kriterien entsprechen und nicht auswählbar sind.

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

Beachten Sie, dass das letzte Beispiel es Ihnen erlaubt, mehrere Bilder auszuwählen. Siehe das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) Attribut für mehr Informationen.

## Einzigartige Dateitypspezifizierer

Ein **einzigartiger Dateitypspezifizierer** ist ein String, der einen Dateityp beschreibt, der vom Benutzer in einem {{HTMLElement("input")}} Element vom Typ `file` ausgewählt werden kann. Jeder einzigartige Dateitypspezifizierer kann eine der folgenden Formen annehmen:

- Eine gültige, nicht case-sensitive Dateinamenserweiterung, beginnend mit einem Punkt (".") Zeichen. Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Ein gültiger MIME-Typ-String, ohne Erweiterungen.
- Der String `audio/*`, der "jede Audiodatei" bedeutet.
- Der String `video/*`, der "jede Videodatei" bedeutet.
- Der String `image/*`, der "jede Bilddatei" bedeutet.

Das `accept` Attribut nimmt als Wert einen String, der eine oder mehrere dieser einzigartigen Dateitypspezifizierer enthält, getrennt durch Kommas. Zum Beispiel könnte ein Dateiauswahl-Dialog, der Inhalte benötigt, die als Bild präsentiert werden können, einschließlich sowohl Standard-Bildformate als auch PDF-Dateien, so aussehen:

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

{{EmbedLiveSample('A_basic_example', 650, 80)}}

Unabhängig vom Gerät oder Betriebssystem des Benutzers bietet die Datei-Eingabe eine Schaltfläche, die ein Dateiauswahl-Dialogfeld öffnet, das dem Benutzer erlaubt, eine Datei auszuwählen.

Das Einschließen des [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) Attributs, wie oben gezeigt, gibt an, dass mehrere Dateien auf einmal ausgewählt werden können. Der Benutzer kann mehrere Dateien aus dem Dateiauswahl-Dialog auf jede Weise auswählen, die sein gewähltes System erlaubt (z. B. durch Halten der <kbd>Shift</kbd> oder <kbd>Control</kbd> Taste und dann Klicken). Wenn Sie nur möchten, dass der Benutzer eine einzelne Datei pro `<input>` auswählt, lassen Sie das `multiple` Attribut weg.

### Einschränkung der akzeptierten Dateitypen

Oft möchten Sie nicht, dass der Benutzer einen beliebigen Dateityp auswählen kann; stattdessen möchten Sie oft, dass er Dateien eines bestimmten Typs oder bestimmter Typen auswählt. Zum Beispiel, wenn Ihre Dateieingabe es Benutzern ermöglicht, ein Profilbild hochzuladen, möchten Sie wahrscheinlich, dass sie webkompatible Bildformate auswählen, wie zum Beispiel {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}}.

Akzeptable Dateitypen können mit dem [`accept`](/de/docs/Web/HTML/Reference/Elements/input/file#accept) Attribut angegeben werden, das eine durch Kommas getrennte Liste erlaubter Dateierweiterungen oder MIME-Typen annimmt. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*` MIME-Typ. (Viele Mobilgeräte erlauben dem Benutzer auch, ein Bild mit der Kamera aufzunehmen, wenn dies verwendet wird.)
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

{{EmbedLiveSample('Limiting_accepted_file_types', 650, 80)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [File API](/de/docs/Web/API/File)
