---
title: "HTML-Attribut: capture"
short-title: capture
slug: Web/HTML/Attributes/capture
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das **`capture`**-Attribut gibt an, dass optional eine neue Datei aufgenommen werden soll und welches Gerät zur Aufnahme des neuen Mediums verwendet werden soll. Der Medientyp wird durch das [`accept`](/de/docs/Web/HTML/Attributes/accept)-Attribut definiert.

Mögliche Werte sind `user` und `environment`. Das capture-Attribut wird beim {{HTMLElement("input/file", "file")}}-Eingabetyp unterstützt.

Das `capture`-Attribut nimmt als seinen Wert einen String, der angibt, welche Kamera zur Aufnahme von Bild- oder Videodaten verwendet werden soll, wenn das [accept](/de/docs/Web/HTML/Attributes/accept)-Attribut angibt, dass die Eingabe einer dieser Typen sein sollte.

| Wert          | Beschreibung                                               |
| ------------- | ---------------------------------------------------------- |
| `user`        | Die benutzerorientierte Kamera und/oder das Mikrofon sollten verwendet werden.   |
| `environment` | Die nach außen gerichtete Kamera und/oder das Mikrofon sollten verwendet werden. |

> [!NOTE]
> Capture war früher ein boolesches Attribut, das, falls vorhanden, verlangte, dass das Medienaufnahmegerät(e) des Geräts, wie z.B. Kamera oder Mikrofon, verwendet wird, anstatt eine Dateieingabe anzufordern.

{{EmbedInteractiveExample("pages/tabbed/attribute-capture.html", "tabbed-standard")}}

## Beispiele

Wenn es bei einem Datei-Eingabetyp gesetzt ist, werden Betriebssysteme mit Mikrofonen und Kameras eine Benutzeroberfläche anzeigen, die die Auswahl zwischen einer vorhandenen Datei oder der Erstellung einer neuen ermöglicht.

```html
<p>
  <label for="soundFile">Wie klingt Ihre Stimme?:</label>
  <input type="file" id="soundFile" capture="user" accept="audio/*" />
</p>
<p>
  <label for="videoFile">Laden Sie ein Video hoch:</label>
  <input type="file" id="videoFile" capture="environment" accept="video/*" />
</p>
<p>
  <label for="imageFile">Laden Sie ein Foto von sich selbst hoch:</label>
  <input type="file" id="imageFile" capture="user" accept="image/*" />
</p>
```

{{EmbedLiveSample('Examples', '100%', 200)}}

Beachten Sie, dass diese besser auf mobilen Geräten funktionieren; wenn Ihr Gerät ein Desktop-Computer ist, wird wahrscheinlich ein typischer Dateiauswahldialog angezeigt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Dateien aus Webanwendungen](/de/docs/Web/API/File_API/Using_files_from_web_applications)
- [File API](/de/docs/Web/API/File)
- {{domxref('HTMLInputElement.files')}}
