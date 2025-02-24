---
title: "HTML-Attribut: capture"
short-title: capture
slug: Web/HTML/Attributes/capture
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`capture`**-Attribut gibt an, dass optional eine neue Datei erfasst werden soll und welches Gerät zum Erfassen dieses neuen Mediums eines Typs verwendet werden soll, der durch das [`accept`](/de/docs/Web/HTML/Attributes/accept)-Attribut definiert wird.

Zu den Werten gehören `user` und `environment`. Das capture-Attribut wird beim {{HTMLElement("input/file", "file")}} Eingabetyp unterstützt.

Das `capture`-Attribut nimmt als Wert eine Zeichenkette, die angibt, welche Kamera zur Aufnahme von Bild- oder Videodaten verwendet werden soll, wenn das [accept](/de/docs/Web/HTML/Attributes/accept)-Attribut angibt, dass die Eingabe einer dieser Typen sein sollte.

| Wert          | Beschreibung                                                                    |
| ------------- | ------------------------------------------------------------------------------- |
| `user`        | Die benutzerseitige Kamera und/oder das Mikrofon sollten verwendet werden.      |
| `environment` | Die nach außen gerichtete Kamera und/oder das Mikrofon sollten verwendet werden |

> [!NOTE]
> Capture war früher ein Boolesches Attribut, das, wenn es vorhanden war, verlangte, dass die Medienerfassungsgeräte des Geräts wie Kamera oder Mikrofon verwendet werden, anstatt eine Dateieingabe anzufordern.

{{InteractiveExample("HTML Demo: capture", "tabbed-standard")}}

```html interactive-example
<label for="selfie">Take a picture of your face:</label>

<input type="file" id="selfie" name="selfie" accept="image/*" capture="user" />

<label for="picture">Take a picture using back facing camera:</label>

<input
  type="file"
  id="picture"
  name="picture"
  accept="image/*"
  capture="environment" />
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

## Beispiele

Wenn es auf einen Datei-Eingabetyp gesetzt wird, wird auf Betriebssystemen mit Mikrofonen und Kameras eine Benutzeroberfläche angezeigt, die die Auswahl einer vorhandenen Datei oder die Erstellung einer neuen Datei ermöglicht.

```html
<p>
  <label for="soundFile">What does your voice sound like?:</label>
  <input type="file" id="soundFile" capture="user" accept="audio/*" />
</p>
<p>
  <label for="videoFile">Upload a video:</label>
  <input type="file" id="videoFile" capture="environment" accept="video/*" />
</p>
<p>
  <label for="imageFile">Upload a photo of yourself:</label>
  <input type="file" id="imageFile" capture="user" accept="image/*" />
</p>
```

{{EmbedLiveSample('Examples', '100%', 200)}}

Beachten Sie, dass diese besser auf mobilen Geräten funktionieren; wenn Ihr Gerät ein Desktop-Computer ist, erhalten Sie wahrscheinlich einen typischen Dateiauswahldialog.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [File API](/de/docs/Web/API/File)
- [`HTMLInputElement.files`](/de/docs/Web/API/HTMLInputElement/files)
