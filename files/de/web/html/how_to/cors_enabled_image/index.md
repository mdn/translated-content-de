---
title: Verwendung von Cross-Origin-Bildern in einem Canvas
short-title: Verwendung von Cross-Origin-Bildern
slug: Web/HTML/How_to/CORS_enabled_image
l10n:
  sourceCommit: f08eb478696946da474cf5c5ecdead4f5955f1b4
---

{{HTMLSidebar}}

HTML bietet ein [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin) Attribut für Bilder, das in Kombination mit einem entsprechenden {{Glossary("CORS", "CORS")}} Header Bilder vom {{ HTMLElement("img") }} Element erlaubt, die von fremden Ursprüngen geladen werden, in einem {{HTMLElement("canvas")}} verwendet zu werden, als wären sie vom aktuellen Ursprung geladen worden.

Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für Details, wie das `crossorigin` Attribut verwendet wird.

## Sicherheit und verunreinigte Canvas-Elemente

Da die Pixel eines Canvas-Bitmaps aus verschiedenen Quellen stammen können, einschließlich Bildern oder Videos von anderen Hosts, ist es unvermeidlich, dass Sicherheitsprobleme auftreten können.

Sobald Sie ein Canvas mit Daten füllen, die von einem anderen Ursprung ohne CORS-Zulassung geladen wurden, wird das Canvas **verunreinigt**. Ein verunreinigtes Canvas gilt nicht mehr als sicher, und jeder Versuch, Bilddaten vom Canvas abzurufen, führt dazu, dass eine Ausnahme ausgelöst wird.

Wenn die Quelle des fremden Inhalts ein HTML {{HTMLElement("img")}} oder SVG {{SVGElement("svg")}} Element ist, ist es nicht erlaubt, den Inhalt des Canvas abzurufen.

Wenn der fremde Inhalt von einem Bild stammt, das entweder als [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`ImageBitMap`](/de/docs/Web/API/ImageBitmap) bezogen wurde, und die Bildquelle die gleichen Ursprungsregeln nicht erfüllt, werden Versuche, den Inhalt des Canvas zu lesen, blockiert.

Das Aufrufen einer der folgenden Methoden auf einem verunreinigten Canvas führt zu einem Fehler:

- Aufrufen von [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) auf dem Kontext des Canvas
- Aufrufen von [`toBlob()`](/de/docs/Web/API/HTMLCanvasElement/toBlob), [`toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) oder [`captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream) auf dem {{HTMLElement("canvas")}} Element selbst

Der Versuch, eine dieser Aktionen auszuführen, wenn das Canvas verunreinigt ist, führt dazu, dass ein `SecurityError` ausgelöst wird. Dies schützt die Benutzer davor, dass private Daten durch das Verwenden von Bildern zum Abrufen von Informationen von entfernten Websites ohne Erlaubnis offengelegt werden.

## Speichern eines Bildes von einem fremden Ursprung

In diesem Beispiel möchten wir erlauben, dass Bilder von einem fremden Ursprung abgerufen und im lokalen Speicher gespeichert werden. Die Implementierung erfordert sowohl die Konfiguration des Servers als auch das Schreiben von Code für die Website selbst.

### Webserver-Konfiguration

Das Erste, was wir benötigen, ist ein Server, der so konfiguriert ist, dass er Bilder mit dem {{HTTPHeader("Access-Control-Allow-Origin")}} Header hostet, der den Cross-Origin-Zugriff auf Bilddateien erlaubt.

Nehmen wir an, wir betreiben unsere Website mit [Apache](https://httpd.apache.org/). Betrachten Sie die HTML5 Boilerplate [Apache-Server-Konfigurationsdatei für CORS-Bilder](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/cross-origin/images.conf), wie unten gezeigt:

```xml
<IfModule mod_setenvif.c>
  <IfModule mod_headers.c>
    <FilesMatch "\.(avifs?|bmp|cur|gif|ico|jpe?g|jxl|a?png|svgz?|webp)$">
      SetEnvIf Origin ":" IS_CORS
      Header set Access-Control-Allow-Origin "*" env=IS_CORS
    </FilesMatch>
  </IfModule>
</IfModule>
```

Kurz gesagt, dies konfiguriert den Server so, dass Grafikdateien (die mit den Erweiterungen ".bmp", ".cur", ".gif", ".ico", ".jpg", ".jpeg", ".png", ".svg", ".svgz" und ".webp") von überall im Internet Cross-Origin zugegriffen werden können.

### Implementierung der Speicherfunktion

Jetzt, da der Server so konfiguriert ist, dass er die Bilder Cross-Origin abrufen lässt, können wir den Code schreiben, der dem Benutzer erlaubt, sie im [lokalen Speicher](/de/docs/Web/API/Web_Storage_API) zu speichern, als ob sie von derselben Domain serviert würden, auf der der Code ausgeführt wird.

Der Schlüssel liegt darin, das [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/img#crossorigin) Attribut zu verwenden, indem [`crossOrigin`](/de/docs/Web/API/HTMLImageElement/crossOrigin) am [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) gesetzt wird, in dem das Bild geladen wird. Dies teilt dem Browser mit, beim Herunterladen der Bilddaten Cross-Origin-Zugriff zu verlangen.

#### Starten des Downloads

Der Code, der den Download startet (zum Beispiel, wenn der Benutzer auf einen "Download"-Button klickt), sieht so aus:

```js
function startDownload() {
  let imageURL =
    "https://cdn.glitch.com/4c9ebeb9-8b9a-4adc-ad0a-238d9ae00bb5%2Fmdn_logo-only_color.svg?1535749917189";
  let imageDescription = "The Mozilla logo";

  downloadedImg = new Image();
  downloadedImg.crossOrigin = "anonymous";
  downloadedImg.addEventListener("load", imageReceived, false);
  downloadedImg.alt = imageDescription;
  downloadedImg.src = imageURL;
}
```

Wir verwenden hier eine fest codierte URL (`imageURL`) und einen zugehörigen beschreibenden Text (`imageDescription`), aber das könnte leicht von irgendwoher kommen. Um den Download des Bildes zu starten, erstellen wir ein neues [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Objekt mit dem [`Image()`](/de/docs/Web/API/HTMLImageElement/Image) Konstruktor. Das Bild wird dann so konfiguriert, dass Cross-Origin-Downloads zugelassen werden, indem das `crossOrigin` Attribut auf `"anonymous"` gesetzt wird (das bedeutet, dass das Bild Cross-Origin ohne Authentifizierung heruntergeladen werden darf). Ein Event-Listener wird für das [`load`](/de/docs/Web/API/Window/load_event) Ereignis, das auf dem Bildelement ausgelöst wird, hinzugefügt, was bedeutet, dass die Bilddaten empfangen wurden. Alternativer Text wird dem Bild hinzugefügt; während `<canvas>` das `alt` Attribut nicht unterstützt, kann der Wert verwendet werden, um ein `aria-label` oder den inneren Inhalt des Canvas zu setzen.

Schließlich wird das [`src`](/de/docs/Web/API/HTMLImageElement/src) Attribut des Bildes auf die URL des herunterzuladenden Bildes gesetzt; dies löst den Start des Downloads aus.

#### Empfangen und Speichern des Bildes

Der Code, der das neu heruntergeladene Bild verarbeitet, befindet sich in der `imageReceived()` Methode:

```js
function imageReceived() {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  canvas.width = downloadedImg.width;
  canvas.height = downloadedImg.height;
  canvas.innerText = downloadedImg.alt;

  context.drawImage(downloadedImg, 0, 0);
  imageBox.appendChild(canvas);

  try {
    localStorage.setItem("saved-image-example", canvas.toDataURL("image/png"));
  } catch (err) {
    console.error(`Error: ${err}`);
  }
}
```

`imageReceived()` wird aufgerufen, um das `"load"` Ereignis auf dem `HTMLImageElement` zu behandeln, das das heruntergeladene Bild empfängt. Dieses Ereignis wird ausgelöst, sobald die heruntergeladenen Daten vollständig verfügbar sind. Es beginnt, indem ein neues {{HTMLElement("canvas")}} Element erstellt wird, das wir verwenden, um das Bild in eine Daten-URL zu konvertieren, und indem der Zugriff auf den 2D-Zeichnungskontext des Canvas ([`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)) in der Variablen `context` erfolgt.

Die Größe des Canvas wird angepasst, um dem empfangenen Bild zu entsprechen, der innere Text wird auf die Bildbeschreibung gesetzt, dann wird das Bild mit [`drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage) in das Canvas gezeichnet. Das Canvas wird dann in das Dokument eingefügt, damit das Bild sichtbar ist.

Jetzt ist es an der Zeit, das Bild tatsächlich lokal zu speichern. Dazu verwenden wir den lokalen Speichermekanismus der Web Storage API, auf den über das globale [`localStorage`](/de/docs/Web/API/Window/localStorage) zugegriffen wird. Die Canvas-Methode [`toDataURL()`](/de/docs/Web/API/HTMLCanvasElement/toDataURL) wird verwendet, um das Bild in eine data:// URL, die ein PNG-Bild repräsentiert, zu konvertieren, das dann unter Verwendung von [`setItem()`](/de/docs/Web/API/Storage/setItem) im lokalen Speicher gespeichert wird.

## Siehe auch

- [Using Cross-domain images in WebGL and Chrome 13](https://blog.chromium.org/2011/07/using-cross-domain-images-in-webgl-and.html)
- [HTML-Spezifikation - das `crossorigin` Attribut](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-crossorigin)
- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
