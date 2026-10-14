---
title: HTML-Attribut `accept`
short-title: accept
slug: Web/HTML/Reference/Attributes/accept
l10n:
  sourceCommit: 46afd57950146568819d0bf98175a2ffdbe079d7
---

Das Attribut **`accept`** enthält als Wert eine durch Kommas getrennte Liste mit einem oder mehreren Dateitypen oder [eindeutigen Dateitypspezifikatoren](#eindeutige_dateitypspezifikatoren). Sie beschreibt, welche Dateitypen zulässig sind.

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

Die Eigenschaft `accept` ist ein Attribut des Typs {{HTMLElement("input/file", "file")}} des {{htmlelement("input")}}-Elements. Sie wurde auch für das {{htmlelement("form")}}-Element unterstützt, dort aber zugunsten von {{HTMLElement("input/file", "file")}} entfernt.

Da ein Dateityp auf unterschiedliche Weise angegeben werden kann, empfiehlt es sich, mehrere passende Dateitypspezifikatoren anzugeben, wenn Sie Dateien eines bestimmten Typs benötigen. Alternativ können Sie einen Platzhalter verwenden, wenn jedes Format eines Typs zulässig ist.

Microsoft-Word-Dateien lassen sich beispielsweise auf verschiedene Arten identifizieren. Eine Website, die Word-Dateien akzeptiert, könnte daher ein `<input>`-Element wie dieses verwenden:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

Wenn Sie dagegen Mediendateien akzeptieren, möchten Sie möglicherweise jedes Format des jeweiligen Medientyps zulassen:

```html
<input type="file" id="soundFile" accept="audio/*" />
<input type="file" id="videoFile" accept="video/*" />
<input type="file" id="imageFile" accept="image/*" />
```

Das Attribut `accept` überprüft nicht die Typen der ausgewählten Dateien. Es gibt Browsern lediglich Hinweise, damit Benutzer die richtigen Dateitypen auswählen können. In den meisten Fällen können Benutzer im Dateiauswahldialog eine Option aktivieren, mit der sich diese Einschränkung umgehen und eine beliebige Datei auswählen lässt – auch eine Datei mit einem ungeeigneten Typ.

Überprüfen Sie die Anforderungen daher unbedingt serverseitig.

## Beispiele

Wenn `accept` für einen Datei-Input gesetzt ist, sollte der sich öffnende native Dateiauswahldialog nur die Auswahl von Dateien des passenden Typs ermöglichen. Die meisten Betriebssysteme zeigen Dateien, die den Kriterien nicht entsprechen und nicht ausgewählt werden können, ausgegraut an.

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

Beachten Sie, dass im letzten Beispiel mehrere Bilder ausgewählt werden können. Weitere Informationen finden Sie beim Attribut [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple).

## Eindeutige Dateitypspezifikatoren

Ein **eindeutiger Dateitypspezifikator** ist eine Zeichenfolge, die einen Dateityp beschreibt, den Benutzer in einem {{HTMLElement("input")}}-Element vom Typ `file` auswählen können. Ein solcher Spezifikator kann eine der folgenden Formen haben:

- Eine gültige Dateiendung, bei der die Groß- und Kleinschreibung keine Rolle spielt und die mit einem Punkt („.“) beginnt. Beispiele: `.jpg`, `.pdf` oder `.doc`.
- Eine gültige MIME-Typ-Zeichenfolge ohne Erweiterungen.
- Die Zeichenfolge `audio/*` für „beliebige Audiodatei“.
- Die Zeichenfolge `video/*` für „beliebige Videodatei“.
- Die Zeichenfolge `image/*` für „beliebige Bilddatei“.

Das Attribut `accept` enthält als Wert eine Zeichenfolge mit einem oder mehreren dieser eindeutigen Dateitypspezifikatoren, die durch Kommas getrennt sind. Ein Dateiauswahldialog für Inhalte, die als Bild dargestellt werden können – einschließlich gängiger Bildformate und PDF-Dateien –, könnte beispielsweise so aussehen:

```html
<input type="file" accept="image/*,.pdf" />
```

## Datei-Inputs verwenden

### Ein einfaches Beispiel

```html
<div>
  <label for="file">Choose file to upload</label>
  <input type="file" id="file" name="file" multiple />
</div>
```

```css hidden
div {
  margin-bottom: 10px;
}
```

Dies erzeugt die folgende Ausgabe:

{{EmbedLiveSample('A_basic_example', 650, 80)}}

Unabhängig vom Gerät oder Betriebssystem der Benutzer stellt der Datei-Input eine Schaltfläche bereit, die einen Dialog zur Dateiauswahl öffnet.

Das oben gezeigte Attribut [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) legt fest, dass mehrere Dateien gleichzeitig ausgewählt werden können. Benutzer können im Dateiauswahldialog mehrere Dateien auf die Weise auswählen, die ihre Plattform unterstützt, beispielsweise indem sie <kbd>Shift</kbd> oder <kbd>Control</kbd> gedrückt halten und dann auf die Dateien klicken. Wenn pro `<input>` nur eine Datei ausgewählt werden soll, lassen Sie das Attribut `multiple` weg.

### Zulässige Dateitypen einschränken

Häufig sollen Benutzer nicht beliebige Dateien auswählen können, sondern nur Dateien eines oder mehrerer bestimmter Typen. Wenn Ihr Datei-Input beispielsweise das Hochladen eines Profilbilds ermöglicht, sollen wahrscheinlich nur webkompatible Bildformate wie {{Glossary("JPEG", "JPEG")}} oder {{Glossary("PNG", "PNG")}} ausgewählt werden können.

Zulässige Dateitypen können Sie mit dem Attribut [`accept`](/de/docs/Web/HTML/Reference/Elements/input/file#accept) angeben. Es enthält eine durch Kommas getrennte Liste zulässiger Dateiendungen oder MIME-Typen. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem MIME-Typ der Form `image/*`. (Auf vielen Mobilgeräten können Benutzer in diesem Fall auch mit der Kamera ein Foto aufnehmen.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — Akzeptiert alles, was wie ein MS-Word-Dokument aussieht.

Sehen wir uns ein ausführlicheres Beispiel an:

```html
<div>
  <label for="profile_pic">Choose file to upload</label>
  <input
    type="file"
    id="profile_pic"
    name="profile_pic"
    accept=".jpg, .jpeg, .png" />
</div>
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

- [Dateien aus Webanwendungen verwenden](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [File API](/de/docs/Web/API/File)
