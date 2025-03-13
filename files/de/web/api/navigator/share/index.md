---
title: "Navigator: share() Methode"
short-title: share()
slug: Web/API/Navigator/share
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Web Share API")}}{{securecontext_header}}

Die **`share()`** Methode der [`Navigator`](/de/docs/Web/API/Navigator) Schnittstelle ruft den nativen Sharing-Mechanismus des Geräts auf, um Daten wie Text, URLs oder Dateien zu teilen. Die verfügbaren _Sharing-Ziele_ hängen vom Gerät ab, können aber die Zwischenablage, Kontakte und E-Mail-Anwendungen, Websites, Bluetooth usw. umfassen.

Die Methode löst ein {{jsxref("Promise")}} mit `undefined` auf. Auf Windows geschieht dies, wenn das Share-Popup gestartet wird, während auf Android das Promise aufgelöst wird, sobald die Daten erfolgreich an das _Sharing-Ziel_ übergeben wurden.

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ist durch die [web-share](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/web-share) Berechtigungspolicy beschränkt. Die `share()`-Methode wird Ausnahmen auslösen, wenn die Erlaubnis unterstützt wird, aber nicht gewährt wurde.

## Syntax

```js-nolint
share(data)
```

### Parameter

- `data` {{optional_inline}}

  - : Ein Objekt, das die zu teilenden Daten enthält.

    Unbekannte Eigenschaften für den Benutzeragenten werden ignoriert; geteilte Daten werden nur auf Eigenschaften bewertet, die vom Benutzeragenten verstanden werden. Alle Eigenschaften sind optional, aber es muss mindestens eine bekannte Dateneigenschaft angegeben werden.

    Mögliche Werte sind:

    - `url` {{optional_inline}}
      - : Ein String, der eine zu teilende URL darstellt.
    - `text` {{optional_inline}}
      - : Ein String, der zu teilenden Text darstellt.
    - `title` {{optional_inline}}
      - : Ein String, der einen zu teilenden Titel darstellt. Kann vom Ziel ignoriert werden.
    - `files` {{optional_inline}}
      - : Ein Array von [`File`](/de/docs/Web/API/File) Objekten, die zu teilende Dateien repräsentieren. Siehe [unten](#teilbare_dateitypen) für teilbare Dateitypen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst wird oder mit einer der unten aufgeführten [Ausnahmen](#ausnahmen) zurückgewiesen wird.

### Ausnahmen

Das {{jsxref("Promise")}} kann mit einem der folgenden `DOMException` Werte abgelehnt werden:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Dokument ist nicht vollständig aktiv oder andere Sharing-Operationen sind in Bearbeitung.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Eine `web-share` [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) wurde verwendet, um die Nutzung dieser Funktion zu blockieren, das Fenster hat keine {{Glossary("transient_activation", "transiente Aktivierung")}} oder ein Dateishare wird aus Sicherheitsgründen blockiert.
- {{jsxref("TypeError")}}

  - : Die angegebenen geteilten Daten können nicht validiert werden. Mögliche Gründe sind:

    - Der `data` Parameter wurde vollständig weggelassen oder enthält nur Eigenschaften mit unbekannten Werten. Beachten Sie, dass alle Eigenschaften, die vom Benutzeragenten nicht erkannt werden, ignoriert werden.
    - Eine URL ist schlecht formatiert.
    - Dateien sind angegeben, aber die Implementierung unterstützt kein Dateisharing.
    - Das Teilen der angegebenen Daten würde vom Benutzeragenten als "feindliches Teilen" angesehen werden.

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Benutzer hat die Share-Operation abgebrochen oder es sind keine Sharing-Ziele verfügbar.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Es gab ein Problem beim Starten des Sharing-Ziels oder beim Übertragen der Daten.

## Teilbare Dateitypen

Die folgende Liste zeigt in der Regel teilbare Dateitypen. Sie sollten jedoch immer mit [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) testen, ob das Teilen erfolgreich sein würde.

- Applikation
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

Diese Methode erfordert, dass das aktuelle Dokument die [web-share](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/web-share) Berechtigungspolicy und {{Glossary("transient_activation", "transiente Aktivierung")}} hat. (Sie muss durch ein UI-Event wie einen Button-Klick ausgelöst werden und kann nicht an beliebigen Punkten durch ein Skript gestartet werden.) Weiterhin muss die Methode gültige Daten spezifizieren, die von der nativen Implementierung für das Teilen unterstützt werden.

## Beispiele

### Teilen einer URL

Das folgende Beispiel zeigt einen Button-Klick, der die Web Share API aufruft, um die URL von MDN zu teilen. Dies stammt aus unserem [Web share test](https://mdn.github.io/dom-examples/web-share/) ([siehe den Quellcode](https://github.com/mdn/dom-examples/blob/main/web-share/index.html)).

#### HTML

Das HTML erstellt lediglich einen Button zum Starten des Sharings und einen Absatz, um das Ergebnis des Tests anzuzeigen.

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

Klicken Sie auf den Button, um das Share-Dialogfeld auf Ihrem Gerät zu starten. Unterhalb des Buttons erscheint ein Text, der angibt, ob das Teilen erfolgreich war oder einen Fehlercode liefert.

{{EmbedLiveSample('Sharing a URL','','','','','','web-share')}}

### Dateien teilen

Um Dateien zu teilen, testen Sie zuerst mit und rufen Sie [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) auf. Danach fügen Sie die Liste der Dateien im Aufruf von `navigator.share()` hinzu.

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

Beachten Sie, dass das Datenobjekt, das an `navigator.canShare()` übergeben wird, nur die Eigenschaft `files` enthält, da `title` und `text` keine Rolle spielen sollten.

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
- <https://wpt.live/web-share/> (Web-Plattform-Tests)
