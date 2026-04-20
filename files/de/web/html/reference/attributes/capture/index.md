---
title: "`capture` HTML-Attribut"
short-title: capture
slug: Web/HTML/Reference/Attributes/capture
l10n:
  sourceCommit: b50ed7ac1c2ca21b4b5cfb594474a17da3f2e6c2
---

Das **`capture`**-Attribut gibt an, dass optional eine neue Datei aufgenommen werden soll und welches Gerät zur Aufnahme dieser neuen Medien eines vom [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attribut definierten Typs verwendet werden soll.

Werte umfassen `user` und `environment`. Das `capture`-Attribut wird für den {{HTMLElement("input/file", "file")}} Eingabetyp unterstützt.

Das `capture`-Attribut nimmt als Wert einen String, der angibt, welche Kamera für die Aufnahme von Bild- oder Videodaten verwendet werden soll, wenn das [accept](/de/docs/Web/HTML/Reference/Attributes/accept)-Attribut angibt, dass die Eingabe einer dieser Typen sein sollte.

| Wert          | Beschreibung                                                                     |
| ------------- | -------------------------------------------------------------------------------- |
| `user`        | Die benutzerorientierte Kamera und/oder das Mikrofon sollten verwendet werden.   |
| `environment` | Die nach außen gerichtete Kamera und/oder das Mikrofon sollten verwendet werden. |

> [!NOTE]
> Capture war zuvor ein Boolean-Attribut, welches, wenn vorhanden, verlangte, dass das Medienerfassungsgerät(e) des Geräts wie Kamera oder Mikrofon verwendet wird, anstatt eine Dateieingabe anzufordern.

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

Wenn es auf einen Dateieingabetyp gesetzt ist, zeigen Betriebssysteme mit Mikrofonen und Kameras eine Benutzeroberfläche an, die die Auswahl aus einer vorhandenen Datei oder die Erstellung einer neuen Datei ermöglicht.

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
- [File API](/de/docs/Web/API/File)
- [`HTMLInputElement.files`](/de/docs/Web/API/HTMLInputElement/files)
