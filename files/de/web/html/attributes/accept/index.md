---
title: "HTML-Attribut: accept"
short-title: accept
slug: Web/HTML/Attributes/accept
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das **`accept`**-Attribut nimmt als Wert eine durch Kommata getrennte Liste von einem oder mehreren Dateitypen oder [einzigartige Dateityp-Spezifizierer](#einzigartige_dateityp-spezifizierer) an, die beschreiben, welche Dateitypen erlaubt sind.

{{EmbedInteractiveExample("pages/tabbed/attribute-accept.html", "tabbed-shorter")}}

## Übersicht

Die `accept`-Eigenschaft ist ein Attribut des {{HTMLElement("input/file", "file")}} {{htmlelement("input")}}-Typs. Sie wurde im {{htmlelement("form")}}-Element unterstützt, aber zugunsten von {{HTMLElement("input/file", "file")}} entfernt.

Da ein gegebener Dateityp auf mehr als eine Weise identifiziert werden kann, ist es nützlich, eine umfassende Menge von Typenspezifizierern bereitzustellen, wenn Sie Dateien eines bestimmten Typs benötigen, oder verwenden Sie das Wildcard, um anzugeben, dass ein Format jeglicher Typ akzeptabel ist.

Es gibt zum Beispiel mehrere Möglichkeiten, Microsoft Word-Dateien zu identifizieren. Eine Website, die Word-Dateien akzeptiert, könnte ein `<input>` wie folgt verwenden:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

Wenn Sie hingegen eine Mediendatei akzeptieren möchten, möchten Sie eventuell jedes Format dieses Medientyps einbeziehen:

```html
<input type="file" id="soundFile" accept="audio/*" />
<input type="file" id="videoFile" accept="video/*" />
<input type="file" id="imageFile" accept="image/*" />
```

Das `accept`-Attribut prüft nicht die Typen der ausgewählten Dateien; es gibt Hinweise für Browser, Benutzer zu führen, die richtigen Dateitypen auszuwählen. In den meisten Fällen ist es Benutzern immer noch möglich, eine Option im Dateiauswahldialog umzuschalten, die es ihnen ermöglicht, diese zu überschreiben und jede gewünschte Datei auszuwählen, und dann die falschen Dateitypen auszuwählen.

Aufgrund dessen sollten Sie sicherstellen, dass die erwartete Anforderung serverseitig validiert wird.

## Beispiele

Wenn es auf einen Datei-Input-Typ gesetzt ist, sollte der native Dateiaufpicker, der geöffnet wird, nur das Auswählen von Dateien des richtigen Dateityps ermöglichen. Die meisten Betriebssysteme heben Dateien, die nicht mit den Kriterien übereinstimmen, auf und machen sie nicht auswählbar.

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

Beachten Sie, dass das letzte Beispiel es Ihnen ermöglicht, mehrere Bilder auszuwählen. Siehe das Attribut [`multiple`](/de/docs/Web/HTML/Element/input#multiple) für weitere Informationen.

## Einzigartige Dateityp-Spezifizierer

Ein **einzigartiger Dateityp-Spezifizierer** ist eine Zeichenfolge, die einen Typ von Datei beschreibt, der von einem Benutzer in einem {{HTMLElement("input")}}-Element vom Typ `file` ausgewählt werden kann. Jeder einzigartige Dateityp-Spezifizierer kann eine der folgenden Formen annehmen:

- Eine gültige, nicht Groß-Klein-schrift-sensitive Dateinamenerweiterung, die mit einem Punkt (".")-Zeichen beginnt. Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Eine gültige MIME-Typ-Zeichenfolge, ohne Erweiterungen.
- Die Zeichenfolge `audio/*`, was "jede Audiodatei" bedeutet.
- Die Zeichenfolge `video/*`, was "jede Videodatei" bedeutet.
- Die Zeichenfolge `image/*`, was "jede Bilddatei" bedeutet.

Das `accept`-Attribut nimmt als seinen Wert eine Zeichenfolge, die einen oder mehrere dieser einzigartigen Dateityp-Spezifizierer enthält, getrennt durch Kommata. Zum Beispiel, ein Dateiauswähler, der Inhalte benötigt, die als Bild dargestellt werden können, einschließlich sowohl standardmäßiger Bildformate als auch PDF-Dateien, könnte so aussehen:

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
> Sie können dieses Beispiel auch auf GitHub finden — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html), und auch [sehen Sie es live laufen](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Unabhängig vom Gerät oder Betriebssystem des Benutzers bietet die Dateieingabe einen Button, der einen Dateiauswahldialog öffnet, der es dem Benutzer ermöglicht, eine Datei auszuwählen.

Durch Einbeziehung des Attributes [`multiple`](/de/docs/Web/HTML/Element/input#multiple), wie oben gezeigt, wird festgelegt, dass mehrere Dateien gleichzeitig ausgewählt werden können. Der Benutzer kann auf irgendeine Weise, die seine gewählte Plattform erlaubt, mehrere Dateien aus dem Dateiauswähler auswählen (z. B. durch Halten von <kbd>Umschalt</kbd> oder <kbd>Strg</kbd> und dann klicken). Wenn Sie nur möchten, dass der Benutzer eine einzelne Datei pro `<input>` auswählt, lassen Sie das `multiple`-Attribut weg.

### Akzeptierte Dateitypen einschränken

Oft möchten Sie nicht, dass der Benutzer irgendeinen beliebigen Dateityp auswählen kann; stattdessen möchten Sie häufig, dass sie Dateien eines bestimmten Typs oder bestimmter Typen auswählen. Wenn Ihre Dateieingabe beispielsweise Benutzern das Hochladen eines Profilbildes ermöglicht, möchten Sie wahrscheinlich, dass sie webkompatible Bildformate auswählen, wie [JPEG](/de/docs/Glossary/JPEG) oder [PNG](/de/docs/Glossary/PNG).

Akzeptable Dateitypen können mit dem Attribut [`accept`](/de/docs/Web/HTML/Element/input/file#accept) spezifiziert werden, das eine kommagetrennte Liste von erlaubten Dateierweiterungen oder MIME-Typen annimmt. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptieren von PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*` MIME-Typ. (Viele mobile Geräte ermöglichen dem Benutzer auch, ein Bild mit der Kamera aufzunehmen, wenn dies verwendet wird.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — alles akzeptieren, was einem MS Word-Dokument ähnelt.

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
- [File API](/de/docs/Web/API/File)
