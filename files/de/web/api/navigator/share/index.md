---
title: "Navigator: share() Methode"
short-title: share()
slug: Web/API/Navigator/share
l10n:
  sourceCommit: 20ab1482dedfed0d77fbbf1b58b3992e8ba503a0
---

{{APIRef("Web Share API")}}{{securecontext_header}}

Die **`share()`**-Methode der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle ruft den nativen Freigabemechanismus des Geräts auf, um Daten wie Text, URLs oder Dateien zu teilen. Die verfügbaren _Share-Ziele_ hängen vom Gerät ab, können aber die Zwischenablage, Kontakte und E-Mail-Anwendungen, Websites, Bluetooth usw. umfassen.

Die Methode löst ein {{jsxref("Promise")}} mit `undefined` auf. Unter Windows geschieht dies, wenn das Share-Popup gestartet wird, während auf Android das Versprechen aufgelöst wird, sobald die Daten erfolgreich an das _Share-Ziel_ übergeben wurden.

Die [Web Share API](/de/docs/Web/API/Web_Share_API) ist durch die [web-share](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/web-share)-Berechtigungsrichtlinie eingeschränkt. Die `share()`-Methode wird Ausnahmen auslösen, wenn die Berechtigung unterstützt wird, aber nicht erteilt wurde.

## Syntax

```js-nolint
share(data)
```

### Parameter

- `data` {{optional_inline}}
  - : Ein Objekt, das zu teilende Daten enthält.

    Eigenschaften, die dem User-Agent unbekannt sind, werden ignoriert; Share-Daten werden nur anhand von Eigenschaften bewertet, die dem User-Agent bekannt sind. Alle Eigenschaften sind optional, aber mindestens eine bekannte Dateneigenschaft muss angegeben werden.

    Mögliche Werte sind:
    - `url` {{optional_inline}}
      - : Ein String, der eine zu teilende URL darstellt. Ein leerer String (`""`) bezieht sich auf die aktuelle Seiten-URL.
    - `text` {{optional_inline}}
      - : Ein String, der einen zu teilenden Text darstellt.
    - `title` {{optional_inline}}
      - : Ein String, der einen zu teilenden Titel darstellt. Kann vom Ziel ignoriert werden.
    - `files` {{optional_inline}}
      - : Ein Array von [`File`](/de/docs/Web/API/File)-Objekten, die freizugebende Dateien darstellen. Siehe [unten](#freigebbare_dateitypen) für freigegebene Dateitypen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` aufgelöst oder mit einer der unten angegebenen [Ausnahmen](#ausnahmen) abgelehnt wird.

### Ausnahmen

Das {{jsxref("Promise")}} kann mit einem der folgenden `DOMException`-Werte abgelehnt werden:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Dokument ist nicht voll aktiv oder andere Freigabevorgänge sind im Gange.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Eine `web-share` [Permissions-Richtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) wurde verwendet, um die Nutzung dieser Funktion zu blockieren, das Fenster hat keine {{Glossary("transient_activation", "transiente Aktivierung")}}, oder eine Dateifreigabe wird aus Sicherheitsgründen blockiert.
- {{jsxref("TypeError")}}
  - : Die angegebenen Freigabe-Daten können nicht validiert werden. Mögliche Gründe sind:
    - Der `data`-Parameter wurde vollständig weggelassen oder enthält nur Eigenschaften mit unbekannten Werten. Beachten Sie, dass alle vom User-Agent nicht erkannten Eigenschaften ignoriert werden.
    - Eine URL ist falsch formatiert.
    - Dateien sind angegeben, aber die Implementierung unterstützt keine Dateifreigabe.
    - Die Freigabe der angegebenen Daten würde vom User-Agent als "feindliche Freigabe" angesehen.

- `AbortError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Benutzer hat den Freigabevorgang abgebrochen oder es sind keine Share-Ziele verfügbar.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Es gab ein Problem beim Starten des Freigabeziels oder beim Übertragen der Daten.

## Freigebbare Dateitypen

Im Folgenden finden Sie eine Liste der normalerweise freigebbaren Dateitypen. Sie sollten jedoch immer mit [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) testen, ob die Freigabe erfolgreich wäre.

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

Diese Methode erfordert, dass das aktuelle Dokument die [web-share](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/web-share) Permissions-Richtlinie und {{Glossary("transient_activation", "transiente Aktivierung")}} besitzt. (Es muss durch ein UI-Ereignis wie einen Button-Klick ausgelöst werden und kann nicht an beliebigen Stellen durch ein Skript gestartet werden.) Außerdem muss die Methode gültige Daten angeben, die von der nativen Implementierung für die Freigabe unterstützt werden.

## Beispiele

### Teilen einer URL

Das folgende Beispiel zeigt einen Button-Klick, der die Web Share API aufruft, um die URL von MDN zu teilen. Dies ist von unserem [Web share test](https://mdn.github.io/dom-examples/web-share/) ([Quellcode ansehen](https://github.com/mdn/dom-examples/blob/main/web-share/index.html)).

#### HTML

Das HTML erstellt lediglich einen Button, um die Freigabe auszulösen, und einen Absatz, um das Ergebnis des Tests anzuzeigen.

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

Klicken Sie auf die Schaltfläche, um das Share-Dialogfeld auf Ihrer Plattform zu starten. Text wird unterhalb der Schaltfläche angezeigt, um anzuzeigen, ob die Freigabe erfolgreich war oder einen Fehlercode bereitzustellen.

{{EmbedLiveSample('Sharing a URL','','','','','','web-share')}}

### Teilen von Dateien

Um Dateien zu teilen, testen Sie zuerst und rufen Sie [`navigator.canShare()`](/de/docs/Web/API/Navigator/canShare) auf. Dann schließen Sie die Liste der Dateien in den Aufruf von `navigator.share()` ein.

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

Beachten Sie, dass das Datenobjekt, das an `navigator.canShare()` übergeben wird, nur die `files`-Eigenschaft enthält, da `title` und `text` keine Rolle spielen sollten.

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
