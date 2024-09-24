---
title: "HTML-Attribut: accept"
short-title: accept
slug: Web/HTML/Attributes/accept
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das **`accept`**-Attribut nimmt als Wert eine kommagetrennte Liste von einem oder mehreren Dateitypen oder [einzigartigen Dateityp-Spezifikatoren](#einzigartige_dateityp-spezifikatoren) an, die beschreiben, welche Dateitypen erlaubt sind.

{{EmbedInteractiveExample("pages/tabbed/attribute-accept.html", "tabbed-shorter")}}

## Überblick

Die accept-Eigenschaft ist ein Attribut des {{HTMLElement("input/file", "file")}}-Typs von {{htmlelement("input")}}. Es wurde auf dem {{htmlelement("form")}}-Element unterstützt, wurde jedoch zugunsten von {{HTMLElement("input/file", "file")}} entfernt.

Da ein bestimmter Dateityp auf mehr als eine Weise identifiziert werden kann, ist es sinnvoll, eine umfassende Menge von Typenspezifikatoren bereitzustellen, wenn Sie Dateien eines bestimmten Typs benötigen, oder das Platzhalterzeichen zu verwenden, um anzugeben, dass ein beliebiges Format akzeptabel ist.

Zum Beispiel gibt es mehrere Möglichkeiten, Microsoft Word-Dateien zu identifizieren, sodass eine Website, die Word-Dateien akzeptiert, ein `<input>` wie dieses verwenden könnte:

```html
<input
  type="file"
  id="docpicker"
  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
```

Während, wenn Sie eine Mediendatei akzeptieren, Sie möglicherweise jedes Format dieses Medientyps einschließen möchten:

```html
<input type="file" id="soundFile" accept="audio/*" />
<input type="file" id="videoFile" accept="video/*" />
<input type="file" id="imageFile" accept="image/*" />
```

Das `accept`-Attribut überprüft nicht die Typen der ausgewählten Dateien; es bietet Hinweise für Browser, um die Benutzer bei der Auswahl der richtigen Dateitypen zu unterstützen. Es ist in den meisten Fällen möglich, dass Benutzer eine Option im Dateiauswahl-Dialog umschalten, die es ermöglicht, diese zu überschreiben und jede Datei nach Wunsch auszuwählen, und dann falsche Dateitypen auszuwählen.

Aus diesem Grund sollten Sie sicherstellen, dass die erwartete Anforderung serverseitig validiert wird.

## Beispiele

Wenn auf einem Datei-Eingabetyp gesetzt, sollte der native Dateiauswahldialog, der geöffnet wird, nur das Auswählen von Dateien des richtigen Dateityps ermöglichen. Die meisten Betriebssysteme hellen Dateien auf, die nicht den Kriterien entsprechen und nicht wählbar sind.

```html
<p>
  <label for="soundFile">Wählen Sie eine Audiodatei aus:</label>
  <input type="file" id="soundFile" accept="audio/*" />
</p>
<p>
  <label for="videoFile">Wählen Sie eine Videodatei aus:</label>
  <input type="file" id="videoFile" accept="video/*" />
</p>
<p>
  <label for="imageFile">Wählen Sie einige Bilder aus:</label>
  <input type="file" id="imageFile" accept="image/*" multiple />
</p>
```

{{EmbedLiveSample('Examples', '100%', 200)}}

Beachten Sie, dass das letzte Beispiel das Auswählen mehrerer Bilder erlaubt. Siehe das [`multiple`](/de/docs/Web/HTML/Element/input#multiple) Attribut für weitere Informationen.

## Einzigartige Dateityp-Spezifikatoren

Ein **einzigartiger Dateityp-Spezifikator** ist ein String, der einen Dateityp beschreibt, der von einem Benutzer in einem {{HTMLElement("input")}}-Element vom Typ `file` ausgewählt werden kann. Jeder einzigartige Dateityp-Spezifikator kann eine der folgenden Formen annehmen:

- Eine gültige, nicht case-sensitive Dateierweiterung, die mit einem Punkt (".") beginnt. Zum Beispiel: `.jpg`, `.pdf` oder `.doc`.
- Ein gültiger MIME-Typ-String, ohne Erweiterungen.
- Der String `audio/*`, der bedeutet "jede Audiodatei".
- Der String `video/*`, der bedeutet "jede Videodatei".
- Der String `image/*`, der bedeutet "jede Bilddatei".

Das `accept`-Attribut nimmt als Wert einen String an, der einen oder mehrere dieser einzigartigen Dateityp-Spezifikatoren enthält, durch Kommas getrennt. Zum Beispiel könnte ein Dateiauswahldialog, der Inhalte benötigt, die als Bild dargestellt werden können, sowohl Standardbildformate als auch PDF-Dateien umfassen, so aussehen:

```html
<input type="file" accept="image/*,.pdf" />
```

## Verwendung von Dateieingaben

### Ein einfaches Beispiel

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="file">Wählen Sie eine Datei zum Hochladen</label>
    <input type="file" id="file" name="file" multiple />
  </div>
  <div>
    <button>Absenden</button>
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
> Sie finden dieses Beispiel auch auf GitHub — siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/file-examples/simple-file.html), und sehen Sie es auch [live laufen](https://mdn.github.io/learning-area/html/forms/file-examples/simple-file.html).

Unabhängig vom Gerät oder Betriebssystem des Benutzers bietet die Dateieingabe einen Button, der einen Dateiauswahldialog öffnet, der es dem Benutzer erlaubt, eine Datei auszuwählen.

Das Einschließen des `multiple`-Attributs, wie oben gezeigt, gibt an, dass mehrere Dateien auf einmal ausgewählt werden können. Der Benutzer kann mehrere Dateien aus dem Dateiauswahldialog auf jede Weise auswählen, die seine gewählte Plattform erlaubt (z.B. durch Halten der <kbd>Shift</kbd>- oder <kbd>Control</kbd>-Taste und anschließendem Klicken). Wenn Sie möchten, dass der Benutzer nur eine einzige Datei pro `<input>` auswählt, lassen Sie das `multiple`-Attribut weg.

### Einschränkung akzeptierter Dateitypen

Oft möchten Sie nicht, dass der Benutzer einen beliebigen Dateityp auswählen kann; stattdessen möchten Sie oft, dass er Dateien eines bestimmten Typs oder bestimmter Typen auswählt. Zum Beispiel, wenn Ihre Dateieingabe es Benutzern ermöglicht, ein Profilbild hochzuladen, möchten Sie wahrscheinlich, dass sie webkompatible Bildformate wie {{Glossary("JPEG")}} oder {{Glossary("PNG")}} auswählen.

Akzeptable Dateitypen können mit dem [`accept`](/de/docs/Web/HTML/Element/input/file#accept)-Attribut angegeben werden, das eine kommagetrennte Liste von erlaubten Dateierweiterungen oder MIME-Typen annimmt. Einige Beispiele:

- `accept="image/png"` oder `accept=".png"` — Akzeptiert PNG-Dateien.
- `accept="image/png, image/jpeg"` oder `accept=".png, .jpg, .jpeg"` — Akzeptiert PNG- oder JPEG-Dateien.
- `accept="image/*"` — Akzeptiert jede Datei mit einem `image/*` MIME-Typ. (Viele mobile Geräte erlauben dem Benutzer auch, ein Bild mit der Kamera aufzunehmen, wenn dies verwendet wird.)
- `accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"` — akzeptiert alles, das nach einem MS Word-Dokument "riecht".

Lassen Sie uns ein vollständigeres Beispiel betrachten:

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="profile_pic">Wählen Sie eine Datei zum Hochladen</label>
    <input
      type="file"
      id="profile_pic"
      name="profile_pic"
      accept=".jpg, .jpeg, .png" />
  </div>
  <div>
    <button>Absenden</button>
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

- [Verwendung von Dateien aus Web-Anwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [File API](/de/docs/Web/API/File)
