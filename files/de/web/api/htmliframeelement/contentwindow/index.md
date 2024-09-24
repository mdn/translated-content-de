---
title: "HTMLIFrameElement: contentWindow Eigenschaft"
short-title: contentWindow
slug: Web/API/HTMLIFrameElement/contentWindow
l10n:
  sourceCommit: fc169d56cd8590bdba25d61c5d4ba221e4c64d7c
---

{{APIRef("HTML DOM")}}

Die **`contentWindow`**-Eigenschaft gibt das [Window](/de/docs/Web/API/Window)-Objekt eines [HTMLIFrameElement](/de/docs/Web/API/HTMLIFrameElement) zurück.

Dieses Attribut ist schreibgeschützt.

## Wert

Ein [Window](/de/docs/Web/API/Window)-Objekt.

## Beschreibung

Der Zugriff auf das durch `contentWindow` zurückgegebene {{domxref("Window")}} unterliegt den Regeln der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy). Das bedeutet, dass, wenn das iframe dieselbe Herkunft wie das Elternteil hat, das Elternteil auf das Dokument des iframes und dessen internes DOM zugreifen kann, und wenn sie eine unterschiedliche Herkunft haben, ist der Zugriff auf die Attribute des Fensters stark eingeschränkt. Details finden Sie unter ["Cross-origin script API access"](/de/docs/Web/Security/Same-origin_policy#cross-origin_script_api_access).

Seiten können diese Eigenschaft auch verwenden, um herauszufinden, welches iframe eine Nachricht mit {{domxref("Window.postMessage()")}} gesendet hat, indem es mit der {{domxref("MessageEvent.source", "source")}}-Eigenschaft des Nachrichtenevents verglichen wird.

## Beispiele

### Zugriff auf das Dokument eines iframes

Dieses Beispiel ändert das `style`-Attribut des Dokumentenbodys.

Beachten Sie, dass dies nur funktioniert, wenn das Fenster des iframes dieselbe Herkunft wie das Elternteil hat: Andernfalls wird beim Versuch, auf `contentWindow.document` zuzugreifen, eine Ausnahme ausgelöst.

```js
const iframe = document.querySelector("iframe").contentWindow;

iframe.document.querySelector("body").style.backgroundColor = "blue";
// dadurch würde das erste iframe im Dokument blau gefärbt werden.
```

### Zuordnung von Nachrichtenquellen zu iframes

Dieses Beispiel könnte auf einer Seite laufen, die mehrere iframes hostet, von denen jedes Nachrichten mit {{domxref("Window.postMessage()")}} senden kann. Wenn die Seite eine Nachricht erhält, möchte sie wissen, welches iframe das Fenster enthält, das die Nachricht gesendet hat.

Um dies zu tun, überprüft die Seite, wenn sie eine Nachricht erhält, zunächst, dass die Nachricht von der erwarteten Herkunft stammt, und findet dann das iframe, das die Quelle der Nachricht war, indem es die {{domxref("MessageEvent.source", "source")}}-Eigenschaft des Nachrichtenevents mit der `contentWindow`-Eigenschaft des iframes vergleicht.

```js
const expectedOrigin = "https://example.org";

const iframes = Array.from(document.querySelectorAll("iframe"));

window.addEventListener("message", (e) => {
  if (e.origin !== expectedOrigin) return;

  const sourceIframe = iframes.find(
    (iframe) => iframe.contentWindow === e.source,
  );

  console.log(sourceIframe);
});
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
