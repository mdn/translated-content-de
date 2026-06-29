---
title: "Navigator: share() Methode"
short-title: share()
slug: Web/API/Navigator/share
l10n:
  sourceCommit: 642395ab2226aed8d0393d5bb9ef7f6f46bd9911
---

{{APIRef("Web Share API")}}{{securecontext_header}}

Die **`share()`** Methode des [`Navigator`](/de/docs/Web/API/Navigator) Interfaces ruft den nativen Freigabemechanismus des Geräts auf, um Daten wie Text, URLs oder Dateien zu teilen. Die verfügbaren _Freigabeziele_ hängen vom Gerät ab, können aber die Zwischenablage, Kontakte, E-Mail-Anwendungen, Websites, Bluetooth usw. umfassen.

Die Methode löst ein {{jsxref("Promise")}} mit `undefined` auf. Unter Windows geschieht dies, wenn das Freigabepopup geöffnet wird, während auf Android das Promise aufgelöst wird, sobald die Daten erfolgreich an das _Freigabeziel_ übergeben wurden.

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ist durch die [web-share](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/web-share) Berechtigungspolitik eingeschränkt. Die `share()` Methode wird Ausnahmen werfen, wenn die Berechtigung unterstützt, aber nicht gewährt wurde.

## Syntax

```js-nolint
share(data)
```

### Parameter

- `data` {{optional_inline}}
  - : Ein Objekt, das die zu teilenden Daten enthält.

    Eigenschaften, die dem Benutzeragenten unbekannt sind, werden ignoriert; Freigabedaten werden nur anhand der vom Benutzeragenten verstandenen Eigenschaften bewertet. Alle Eigenschaften sind optional, aber mindestens eine bekannte Dateneigenschaft muss angegeben werden.

    Mögliche Werte sind:
    - `url` {{optional_inline}}
      - : Ein String, der eine zu teilende URL darstellt.
    - `text` {{optional_inline}}
      - : Ein String, der den zu teilenden Text darstellt.
    - `title` {{optional_inline}}
      - : Ein String, der einen zu teilenden Titel darstellt. Kann vom Ziel ignoriert werden.
    - `files` {{optional_inline}}
      - : Ein Array von [`File`](/de/docs/Web/API/File) Objekten, die die zu teilenden Dateien darstellen. Siehe [unten](#freigebbare_dateitypen) für freigebbare Dateitypen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst oder mit einer der unten angegebenen [Ausnahmen](#ausnahmen) abgelehnt wird.

### Ausnahmen

Das {{jsxref("Promise")}} kann mit einem der folgenden `DOMException` Werte abgelehnt werden:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Dokument ist nicht vollständig aktiv, oder andere Freigabeoperationen sind im Gange.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Eine `web-share` [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) wurde verwendet, um die Nutzung dieser Funktion zu blockieren, das Fenster hat keine {{Glossary("transient_activation", "transiente Aktivierung")}}, oder eine Dateifreigabe wird aufgrund von Sicherheitsüberlegungen blockiert.
- {{jsxref("TypeError")}}
  - : Die angegebenen Freigabedaten können nicht validiert werden. Mögliche Gründe sind:
    - Der `data` Parameter wurde vollständig ausgelassen oder enthält nur Eigenschaften mit unbekannten Werten. Beachten Sie, dass alle Eigenschaften, die vom Benutzeragenten nicht erkannt werden, ignoriert werden.
    - Eine URL ist schlecht formatiert.
    - Dateien sind angegeben, aber die Implementierung unterstützt keine Dateifreigabe.
    - Das Teilen der angegebenen Daten würde vom Benutzeragenten als "feindliche Freigabe" betrachtet werden.

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Benutzer hat die Freigabeoperation abgebrochen oder es sind keine Freigabeziele verfügbar.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Es gab ein Problem beim Starten des Freigabeziels oder beim Übertragen der Daten.

## Freigebbare Dateitypen

Im Folgenden finden Sie eine Liste von Dateitypen, die normalerweise freigegeben werden können. Dennoch sollten Sie immer mit [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) testen, ob die Freigabe erfolgreich wäre.

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

Diese Methode erfordert, dass das aktuelle Dokument die [web-share](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/web-share) Berechtigungspolitik und die {{Glossary("transient_activation", "transiente Aktivierung")}} besitzt. (Sie muss durch ein UI-Ereignis wie ein Button-Klick ausgelöst werden und kann nicht willkürlich durch ein Skript gestartet werden.) Außerdem muss die Methode gültige Daten spezifizieren, die von der nativen Implementierung für das Teilen unterstützt werden.

## Beispiele

### Teilen einer URL

Das folgende Beispiel zeigt einen Button-Klick, der die Web Share API aufruft, um die URL von MDN zu teilen. Dies stammt aus unserem [Web share test](https://mdn.github.io/dom-examples/web-share/) ([siehe den Quellcode](https://github.com/mdn/dom-examples/blob/main/web-share/index.html)).

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

Klicken Sie auf den Button, um den Freigabedialog auf Ihrer Plattform zu starten. Unter dem Button erscheint ein Text, der angibt, ob die Freigabe erfolgreich war oder einen Fehlercode liefert.

{{EmbedLiveSample('Sharing a URL','','','','','','web-share')}}

### Dateien teilen

Um Dateien zu teilen, testen Sie zuerst mit und rufen dann [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) auf. Fügen Sie dann die Dateiliste in den Aufruf von `navigator.share()` ein.

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

Beachten Sie, dass das an `navigator.canShare()` übergebene Datenobjekt nur die `files` Eigenschaft enthält, da `title` und `text` nicht relevant sein sollten.

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

{{EmbedLiveSample('Sharing files','','','','','','web-share')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare)
- <https://wpt.live/web-share/> (Web-Plattform-Tests)
