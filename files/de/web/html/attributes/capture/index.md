---
title: "HTML-Attribut: capture"
short-title: capture
slug: Web/HTML/Attributes/capture
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das **`capture`**-Attribut gibt an, dass optional eine neue Datei erfasst werden soll und welches Gerät zur Erfassung dieses neuen Mediums verwendet werden soll, wobei der Medientyp durch das [`accept`](/de/docs/Web/HTML/Attributes/accept)-Attribut definiert wird.

Zu den Werten gehören `user` und `environment`. Das capture-Attribut wird beim {{HTMLElement("input/file", "Datei")}}-Eingabetyp unterstützt.

Das `capture`-Attribut nimmt als Wert eine Zeichenkette, die festlegt, welche Kamera zur Erfassung von Bild- oder Videodaten verwendet werden soll, wenn das [accept](/de/docs/Web/HTML/Attributes/accept)-Attribut angibt, dass die Eingabe von einem dieser Typen sein soll.

| Wert          | Beschreibung                                                                    |
| ------------- | ------------------------------------------------------------------------------- |
| `user`        | Die benutzerorientierte Kamera und/oder das Mikrofon sollen verwendet werden.   |
| `environment` | Die nach außen gerichtete Kamera und/oder das Mikrofon sollen verwendet werden. |

> [!NOTE]
> Capture war zuvor ein Boolean-Attribut, das, wenn es vorhanden war, anforderte, dass das Medieneingabegerät des Geräts, wie Kamera oder Mikrofon, anstelle einer Dateieingabe verwendet wird.

{{EmbedInteractiveExample("pages/tabbed/attribute-capture.html", "tabbed-standard")}}

## Beispiele

Wenn es auf einem Dateieingabetyp gesetzt ist, zeigt das Betriebssystem mit Mikrofonen und Kameras eine Benutzeroberfläche an, die die Auswahl einer vorhandenen Datei oder das Erstellen einer neuen Datei ermöglicht.

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

Beachten Sie, dass diese Funktionen auf mobilen Geräten besser funktionieren; wenn Ihr Gerät ein Desktop-Computer ist, erhalten Sie wahrscheinlich einen typischen Dateiauswahldialog.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [File API](/de/docs/Web/API/File)
- [`HTMLInputElement.files`](/de/docs/Web/API/HTMLInputElement/files)
