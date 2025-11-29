---
title: "HTMLIFrameElement: contentWindow-Eigenschaft"
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

Der Zugriff auf das [`Window`](/de/docs/Web/API/Window), das von `contentWindow` zurückgegeben wird, unterliegt den Regeln, die durch die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) definiert sind. Das bedeutet, dass, wenn der iframe die gleiche Herkunft wie das übergeordnete Element hat, das übergeordnete Element auf das Dokument des iframes und dessen internes DOM zugreifen kann. Wenn sie unterschiedliche Herkunft haben, hat es sehr eingeschränkten Zugriff auf die Attribute des Fensters. Siehe ["Cross-origin script API access"](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_script_api_access) für Details.

Seiten können diese Eigenschaft auch nutzen, um herauszufinden, welcher iframe eine Nachricht gesendet hat, indem sie es mit der [`source`](/de/docs/Web/API/MessageEvent/source)-Eigenschaft des Message-Events vergleichen, die von [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) verwendet wird.

## Beispiele

### Zugriff auf das Dokument eines iframes

Dieses Beispiel ändert das `style`-Attribut des Dokumentkörpers.

Beachten Sie, dass dies nur funktioniert, wenn das Fenster des iframes die gleiche Herkunft wie sein übergeordnetes Element hat: andernfalls führt der Versuch, `contentWindow.document` zu zugreifen, zu einer Ausnahme.

```js
const iframe = document.querySelector("iframe").contentWindow;

iframe.document.querySelector("body").style.backgroundColor = "blue";
// this would turn the 1st iframe in document blue.
```

### Zuordnung von Nachrichtenquellen zu iframes

Dieses Beispiel könnte auf einer Seite ausgeführt werden, die mehrere iframes hostet, von denen jedes ihm Nachrichten mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) senden kann. Wenn die Seite eine Nachricht empfängt, möchte sie wissen, welcher iframe das Fenster enthält, das die Nachricht gesendet hat.

Um dies zu erreichen, überprüft die Seite zuerst, wenn sie eine Nachricht empfängt, dass diese von der erwarteten Herkunft stammt, und findet dann den iframe, der die Quelle der Nachricht war, indem sie die [`source`](/de/docs/Web/API/MessageEvent/source)-Eigenschaft des Message-Events mit der `contentWindow`-Eigenschaft des iframes vergleicht.

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

## Browser-Kompatibilität

{{Compat}}
