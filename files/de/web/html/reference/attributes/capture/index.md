---
title: "HTML-Attribut: capture"
short-title: capture
slug: Web/HTML/Reference/Attributes/capture
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`capture`**-Attribut gibt optional an, dass eine neue Datei erfasst werden soll und welches Gerät verwendet werden soll, um das neue Medium eines vom [`accept`](/de/docs/Web/HTML/Reference/Attributes/accept)-Attribut definierten Typs zu erfassen.

Zu den Werten gehören `user` und `environment`. Das `capture`-Attribut wird für den {{HTMLElement("input/file", "file")}} Eingabetyp unterstützt.

Das `capture`-Attribut nimmt als Wert eine Zeichenkette an, die angibt, welche Kamera zur Erfassung von Bild- oder Videodaten verwendet werden soll, falls das [accept](/de/docs/Web/HTML/Reference/Attributes/accept)-Attribut angibt, dass die Eingabe einer dieser Typen sein sollte.

| Wert          | Beschreibung                                                                            |
| ------------- | --------------------------------------------------------------------------------------- |
| `user`        | Die zur Benutzerseite gerichtete Kamera und/oder das Mikrofon sollten verwendet werden. |
| `environment` | Die nach außen gerichtete Kamera und/oder das Mikrofon sollten verwendet werden.        |

> [!NOTE]
> Capture war zuvor ein boolesches Attribut, das bei Vorhandensein anforderte, dass das Medienerfassungsgerät des Geräts, wie Kamera oder Mikrofon, anstelle der Anforderung einer Dateieingabe verwendet wird.

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

Wenn es auf einen Datei-Eingabetyp gesetzt ist, zeigen Betriebssysteme mit Mikrofonen und Kameras eine Benutzeroberfläche, die die Auswahl aus einer vorhandenen Datei oder das Erstellen einer neuen Datei ermöglicht.

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

Beachten Sie, dass diese Funktion auf mobilen Geräten besser funktioniert. Wenn Ihr Gerät ein Desktop-Computer ist, wird wahrscheinlich ein typischer Dateiauswahldialog angezeigt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [File API](/de/docs/Web/API/File)
- [`HTMLInputElement.files`](/de/docs/Web/API/HTMLInputElement/files)
