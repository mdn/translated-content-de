---
title: "Navigator: share() Methode"
short-title: share()
slug: Web/API/Navigator/share
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Web Share API")}}{{securecontext_header}}

Die **`share()`** Methode des [`Navigator`](/de/docs/Web/API/Navigator) Interfaces ruft den nativen Sharing-Mechanismus des Geräts auf, um Daten wie Text, URLs oder Dateien zu teilen. Die verfügbaren _Freigabezielen_ hängen vom Gerät ab, können aber die Zwischenablage, Kontakte und E-Mail-Anwendungen, Websites, Bluetooth usw. umfassen.

Die Methode löst ein {{jsxref("Promise")}} mit `undefined` auf.
Unter Windows geschieht dies, wenn das Freigabe-Popup gestartet wird, während unter Android das Promise aufgelöst wird, sobald die Daten erfolgreich an das _Freigabeziel_ übergeben wurden.

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ist durch die Berechtigungsrichtlinie [web-share](/de/docs/Web/HTTP/Headers/Permissions-Policy/web-share) abgesichert.
Die `share()` Methode wird Ausnahmen werfen, wenn die Berechtigung unterstützt wird, aber nicht gewährt wurde.

## Syntax

```js-nolint
share(data)
```

### Parameter

- `data` {{optional_inline}}

  - : Ein Objekt, das die zu teilenden Daten enthält.

    Dem Benutzeragenten unbekannte Eigenschaften werden ignoriert; Freigabedaten werden nur auf Eigenschaften bewertet, die der Benutzeragent versteht.
    Alle Eigenschaften sind optional, aber mindestens eine bekannte Dateneigenschaft muss angegeben werden.

    Mögliche Werte sind:

    - `url` {{optional_inline}}
      - : Ein String, der eine URL darstellt, die geteilt werden soll.
    - `text` {{optional_inline}}
      - : Ein String, der Text darstellt, der geteilt werden soll.
    - `title` {{optional_inline}}
      - : Ein String, der einen Titel darstellt, der geteilt werden soll. Kann vom Ziel ignoriert werden.
    - `files` {{optional_inline}}
      - : Ein Array von [`File`](/de/docs/Web/API/File) Objekten, die Dateien darstellen, die geteilt werden sollen. Siehe [unten](#teilbare_dateitypen) für teilbare Dateitypen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird oder mit einer der unten angegebenen [Ausnahmen](#ausnahmen) abgelehnt wird.

### Ausnahmen

Das {{jsxref("Promise")}} kann mit einem der folgenden `DOMException` Werte abgelehnt werden:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Dokument ist nicht vollständig aktiv oder andere Freigabevorgänge sind im Gange.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Eine `web-share` [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) wurde verwendet, um die Nutzung dieser Funktion zu blockieren, das Fenster hat keine {{Glossary("transient_activation", "transiente Aktivierung")}}, oder eine Dateifreigabe wird aus Sicherheitsgründen blockiert.
- {{jsxref("TypeError")}}

  - : Die angegebenen Freigabedaten können nicht validiert werden. Mögliche Gründe sind:

    - Der `data` Parameter wurde vollständig weggelassen oder enthält nur Eigenschaften mit unbekannten Werten. Beachten Sie, dass alle Eigenschaften, die vom Benutzeragenten nicht erkannt werden, ignoriert werden.
    - Eine URL ist schlecht formatiert.
    - Dateien sind angegeben, aber die Implementierung unterstützt keine Dateifreigabe.
    - Das Teilen der angegebenen Daten würde vom Benutzeragenten als "feindliche Freigabe" betrachtet werden.

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Benutzer hat den Freigabevorgang abgebrochen oder es sind keine Freigabezielen verfügbar.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Es gab ein Problem beim Starten des Freigabeziels oder beim Übertragen der Daten.

## Teilbare Dateitypen

Die folgende Liste zeigt in der Regel teilbare Dateitypen. Es sollte jedoch immer mit [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) getestet werden, ob das Teilen erfolgreich wäre.

- Anwendung
  - `.pdf` - `application/pdf`
- Audio
  - `.flac` - `audio/flac`
  - `.m4a` - `audio/x-m4a`
  - `.mp3` - `audio/mpeg` (akzeptiert auch `audio/mp3`)
  - `.oga` - `audio/ogg`
  - `.ogg` - `audio/ogg`
  - `.opus` - `audio/ogg`
  - `.wav` - `audio/wav`
  - `.weba` - `audio/webm`
- Bild
  - `.avif` - `image/avif`
  - `.bmp` - `image/bmp`
  - `.gif` - `image/gif`
  - `.ico` - `image/x-icon`
  - `.jfif` - `image/jpeg`
  - `.jpeg` - `image/jpeg`
  - `.jpg` - `image/jpeg`
  - `.pjp` - `image/jpeg`
  - `.pjpeg` - `image/jpeg`
  - `.png` - `image/png`
  - `.svg` - `image/svg+xml`
  - `.svgz` - `image/svg+xml`
  - `.tif` - `image/tiff`
  - `.tiff` - `image/tiff`
  - `.webp` - `image/webp`
  - `.xbm` - `image/x-xbitmap`
- Text
  - `.css` - `text/css`
  - `.csv` - `text/csv`
  - `.ehtml` - `text/html`
  - `.htm` - `text/html`
  - `.html` - `text/html`
  - `.shtm` - `text/html`
  - `.shtml` - `text/html`
  - `.text` - `text/plain`
  - `.txt` - `text/plain`
- Video
  - `.m4v` - `video/mp4`
  - `.mp4` - `video/mp4`
  - `.mpeg` - `video/mpeg`
  - `.mpg` - `video/mpeg`
  - `.ogm` - `video/ogg`
  - `.ogv` - `video/ogg`
  - `.webm` - `video/webm`

## Sicherheit

Diese Methode erfordert, dass das aktuelle Dokument die [web-share](/de/docs/Web/HTTP/Headers/Permissions-Policy/web-share) Berechtigungsrichtlinie und {{Glossary("transient_activation", "transiente Aktivierung")}} hat. (Es muss durch ein UI-Ereignis wie einen Button-Klick ausgelöst werden und kann nicht zu beliebigen Zeitpunkten von einem Skript gestartet werden.) Weiterhin muss die Methode gültige Daten angeben, die von der nativen Implementierung für das Teilen unterstützt werden.

## Beispiele

### Teilen einer URL

Das folgende Beispiel zeigt einen Button-Klick, der die Web Share API aufruft, um die URL von MDN zu teilen.
Dies stammt aus unserem [Web Share Test](https://mdn.github.io/dom-examples/web-share/) ([sehen Sie sich den Quellcode an](https://github.com/mdn/dom-examples/blob/main/web-share/index.html)).

#### HTML

Das HTML erstellt einfach einen Button, um die Freigabe auszulösen, und einen Absatz, in dem das Ergebnis des Tests angezeigt wird.

```html
<p><button>Share MDN!</button></p>
<p class="result"></p>
```

#### JavaScript

```js
const shareData = {
  title: "MDN",
  text: "Learn web development on MDN!",
  url: "https://developer.mozilla.org",
};

const btn = document.querySelector("button");
const resultPara = document.querySelector(".result");

// Share must be triggered by "user activation"
btn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
    resultPara.textContent = "MDN shared successfully";
  } catch (err) {
    resultPara.textContent = `Error: ${err}`;
  }
});
```

#### Ergebnis

Klicken Sie auf den Button, um den Freigabedialog auf Ihrem Plattform zu starten. Unterhalb des Buttons erscheint ein Text, der angibt, ob die Freigabe erfolgreich war oder einen Fehlercode liefert.

{{EmbedLiveSample('Sharing a URL','','','','','','web-share')}}

### Dateien teilen

Um Dateien zu teilen, testen Sie zuerst mit und rufen Sie dann [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) auf. Schließen Sie dann die Dateiliste in den Aufruf von `navigator.share()` ein.

#### HTML

```html
<div>
  <label for="files">Select images to share:</label>
  <input id="files" type="file" accept="image/*" multiple />
</div>
<button id="share" type="button">Share your images!</button>
<output id="output"></output>
```

#### JavaScript

Beachten Sie, dass das Datenobjekt, das an `navigator.canShare()` übergeben wird, nur die `files` Eigenschaft enthält, da `title` und `text` keine Rolle spielen sollten.

```js
const input = document.getElementById("files");
const output = document.getElementById("output");

document.getElementById("share").addEventListener("click", async () => {
  const files = input.files;

  if (files.length === 0) {
    output.textContent = "No files selected.";
    return;
  }

  // feature detecting navigator.canShare() also implies
  // the same for the navigator.share()
  if (!navigator.canShare) {
    output.textContent = `Your browser doesn't support the Web Share API.`;
    return;
  }

  if (navigator.canShare({ files })) {
    try {
      await navigator.share({
        files,
        title: "Images",
        text: "Beautiful images",
      });
      output.textContent = "Shared!";
    } catch (error) {
      output.textContent = `Error: ${error.message}`;
    }
  } else {
    output.textContent = `Your system doesn't support sharing these files.`;
  }
});
```

#### Ergebnis

{{EmbedLiveSample('Sharing files')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare)
- <https://wpt.live/web-share/> (Webplattform-Tests)
