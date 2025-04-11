---
title: "HTML-Attribut: capture"
short-title: capture
slug: Web/HTML/Reference/Attributes/capture
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`capture`**-Attribut gibt an, dass optional eine neue Datei erfasst werden soll und welches Gerät für die Erfassung des neuen Mediums verwendet werden soll, welches durch das [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attribut definiert ist.

Zu den Werten gehören `user` und `environment`. Das capture-Attribut wird beim {{HTMLElement("input/file", "file")}}-Eingabetyp unterstützt.

Das `capture`-Attribut nimmt als Wert einen String an, der angibt, welche Kamera zur Erfassung von Bild- oder Videodaten verwendet werden soll, sofern das [accept](/de/docs/Web/HTML/Reference/Attributes/accept)-Attribut angibt, dass die Eingabe einer dieser Typen sein soll.

| Wert          | Beschreibung                                                 |
| ------------- | ------------------------------------------------------------- |
| `user`        | Die benutzergerichtete Kamera und/oder das Mikrofon sollten verwendet werden. |
| `environment` | Die nach außen gerichtete Kamera und/oder das Mikrofon sollten verwendet werden. |

> [!NOTE]
> Capture war zuvor ein Boolean-Attribut, das, falls vorhanden, verlangte, dass das Medienerfassungsgerät des Geräts wie Kamera oder Mikrofon anstelle eines Datei-Inputs verwendet wird.

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

Wenn es bei einem Dateieingabetyp gesetzt ist, werden Betriebssysteme mit Mikrofonen und Kameras eine Benutzeroberfläche anzeigen, die die Auswahl aus einer vorhandenen Datei oder die Erstellung einer neuen ermöglicht.

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

Beachten Sie, dass diese auf mobilen Geräten besser funktionieren; wenn Ihr Gerät ein Desktop-Computer ist, erhalten Sie wahrscheinlich einen typischen Dateiauswahldialog.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [Datei-API](/de/docs/Web/API/File)
- [`HTMLInputElement.files`](/de/docs/Web/API/HTMLInputElement/files)
