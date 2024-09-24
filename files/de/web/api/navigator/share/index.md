---
title: "Navigator: share()-Methode"
short-title: share()
slug: Web/API/Navigator/share
l10n:
  sourceCommit: 91907f1383139ec2bd1d309d02ffac30b4eee757
---

{{APIRef("Web Share API")}}{{securecontext_header}}

Die **`share()`** Methode der {{domxref("Navigator")}}-Schnittstelle ruft den nativen Freigabemechanismus des Geräts auf, um Daten wie Text, URLs oder Dateien zu teilen. Die verfügbaren _Freigabeziele_ hängen vom Gerät ab, können aber die Zwischenablage, Kontakte und E-Mail-Anwendungen, Websites, Bluetooth usw. umfassen.

Die Methode löst ein {{jsxref("Promise")}} mit `undefined` auf. Unter Windows geschieht dies, wenn das Freigabe-Popup gestartet wird, während unter Android das Promise aufgelöst wird, sobald die Daten erfolgreich an das _Freigabeziel_ übermittelt wurden.

Die [Web Share API](/de/docs/Web/API/Web_Share_API) wird durch die [web-share](/de/docs/Web/HTTP/Headers/Permissions-Policy/web-share) Berechtigungspolitik gesteuert. Die `share()`-Methode wird Ausnahmen werfen, wenn die Erlaubnis unterstützt wird, aber nicht erteilt wurde.

## Syntax

```js-nolint
navigator.share(data)
```

### Parameter

- `data` {{optional_inline}}

  - : Ein Objekt, das zu teilende Daten enthält.

    Eigenschaften, die dem Benutzeragenten unbekannt sind, werden ignoriert; Freigabedaten werden nur auf Eigenschaften geprüft, die vom Benutzeragenten verstanden werden. Alle Eigenschaften sind optional, aber mindestens eine bekannte Dateneigenschaft muss angegeben werden.

    Mögliche Werte sind:

    - `url` {{optional_inline}}
      - : Ein String, der eine zu teilende URL repräsentiert.
    - `text` {{optional_inline}}
      - : Ein String, der zu teilenden Text repräsentiert.
    - `title` {{optional_inline}}
      - : Ein String, der einen zu teilenden Titel repräsentiert. Kann vom Ziel ignoriert werden.
    - `files` {{optional_inline}}
      - : Ein Array von {{domxref("File")}}-Objekten, die zu teilende Dateien repräsentieren. Siehe [unten](#teilbare_dateitypen) für teilbare Dateitypen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` auflöst oder mit einer der [Ausnahmen](#ausnahmen) abgelehnt wird, die unten angegeben sind.

### Ausnahmen

Das {{jsxref("Promise")}} kann mit einem der folgenden `DOMException`-Werte abgelehnt werden:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Das Dokument ist nicht vollständig aktiv oder andere Freigabevorgänge sind in Bearbeitung.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Eine `web-share` [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) wurde verwendet, um die Nutzung dieser Funktion zu blockieren, das Fenster hat keine {{Glossary("transient activation")}}, oder eine Dateifreigabe wird aus Sicherheitsgründen blockiert.
- {{jsxref("TypeError")}}

  - : Die angegebenen Freigabedaten können nicht validiert werden. Mögliche Gründe sind:

    - Der `data`-Parameter wurde vollständig weggelassen oder enthält nur Eigenschaften mit unbekannten Werten. Beachten Sie, dass alle Eigenschaften, die vom Benutzeragenten nicht erkannt werden, ignoriert werden.
    - Eine URL ist schlecht formatiert.
    - Dateien werden angegeben, aber die Implementierung unterstützt keine Dateifreigabe.
    - Das Teilen der angegebenen Daten würde vom Benutzeragenten als „feindliches Teilen“ betrachtet werden.

- `AbortError` {{domxref("DOMException")}}
  - : Der Benutzer hat die Freigabeoperation abgebrochen oder es sind keine Freigabeziele verfügbar.
- `DataError` {{domxref("DOMException")}}
  - : Es gab ein Problem beim Starten des Freigabeziels oder beim Übertragen der Daten.

## Teilbare Dateitypen

Die folgende Liste enthält üblicherweise teilbare Dateitypen. Sie sollten jedoch immer mit {{domxref("navigator.canShare()")}} prüfen, ob das Teilen erfolgreich wäre.

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

Diese Methode erfordert, dass das aktuelle Dokument die [web-share](/de/docs/Web/HTTP/Headers/Permissions-Policy/web-share) Berechtigungspolitik und {{Glossary("transient activation")}} hat. (Sie muss durch ein UI-Ereignis wie einen Button-Klick ausgelöst werden und kann nicht zu beliebigen Zeitpunkten durch ein Skript gestartet werden.) Darüber hinaus muss die Methode gültige Daten angeben, die von der nativen Implementierung zum Teilen unterstützt werden.

## Beispiele

### Teilen einer URL

Das folgende Beispiel zeigt, wie ein Button-Klick die Web Share API aufruft, um die URL von MDN zu teilen. Dies stammt aus unserem [Web Share Test](https://mdn.github.io/dom-examples/web-share/) ([siehe den Quellcode](https://github.com/mdn/dom-examples/blob/main/web-share/index.html)).

#### HTML

Das HTML erstellt lediglich einen Button, um die Freigabe auszulösen, und einen Absatz, um das Ergebnis des Tests anzuzeigen.

```html
<p><button>Teilen Sie MDN!</button></p>
<p class="result"></p>
```

#### JavaScript

```js
const shareData = {
  title: "MDN",
  text: "Lernen Sie Webentwicklung bei MDN!",
  url: "https://developer.mozilla.org",
};

const btn = document.querySelector("button");
const resultPara = document.querySelector(".result");

// Share muss durch "user activation" ausgelöst werden
btn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
    resultPara.textContent = "MDN erfolgreich geteilt";
  } catch (err) {
    resultPara.textContent = `Fehler: ${err}`;
  }
});
```

#### Ergebnis

Klicken Sie auf den Button, um das Freigabedialogfeld auf Ihrer Plattform zu starten. Unter dem Button erscheint ein Text, der anzeigt, ob die Freigabe erfolgreich war oder ein Fehlercode bereitgestellt wird.

{{EmbedLiveSample('Teilen einer URL','','','','','','web-share')}}

### Teilen von Dateien

Um Dateien zu teilen, testen Sie zuerst und rufen Sie {{domxref("navigator.canShare()")}} auf. Fügen Sie dann die Liste der Dateien in den Aufruf von `navigator.share()` ein.

#### HTML

```html
<div>
  <label for="files">Wählen Sie Bilder zum Teilen aus:</label>
  <input id="files" type="file" accept="image/*" multiple />
</div>
<button id="share" type="button">Teilen Sie Ihre Bilder!</button>
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
    output.textContent = "Keine Dateien ausgewählt.";
    return;
  }

  // Die Funktionserkennung von navigator.canShare() impliziert auch
  // das gleiche für navigator.share()
  if (!navigator.canShare) {
    output.textContent = `Ihr Browser unterstützt die Web Share API nicht.`;
    return;
  }

  if (navigator.canShare({ files })) {
    try {
      await navigator.share({
        files,
        title: "Bilder",
        text: "Schöne Bilder",
      });
      output.textContent = "Geteilt!";
    } catch (error) {
      output.textContent = `Fehler: ${error.message}`;
    }
  } else {
    output.textContent = `Ihr System unterstützt das Teilen dieser Dateien nicht.`;
  }
});
```

#### Ergebnis

{{EmbedLiveSample('Files Teilen')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("navigator.canShare()")}}
- <https://wpt.live/web-share/> (Web-Plattform-Tests)
