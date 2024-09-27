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

Der Zugriff auf das durch `contentWindow` zurückgegebene [`Window`](/de/docs/Web/API/Window) unterliegt den Regeln der [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy). Das bedeutet, dass der Eltern-Kontext, wenn das `iframe` die gleiche Herkunft wie das übergeordnete Dokument hat, auf das Dokument des `iframe` und dessen internes DOM zugreifen kann. Ist dies nicht der Fall, hat der Zugriff auf die Attribute des Fensters sehr begrenzte Möglichkeiten. Weitere Informationen finden Sie unter ["Cross-origin script API access"](/de/docs/Web/Security/Same-origin_policy#cross-origin_script_api_access).

Seiten können diese Eigenschaft auch verwenden, um herauszufinden, welches `iframe` eine Nachricht gesendet hat, indem sie es mit der [`source`](/de/docs/Web/API/MessageEvent/source)-Eigenschaft des Nachrichtenereignisses vergleichen.

## Beispiele

### Zugriff auf das Dokument eines iframes

Dieses Beispiel ändert das `style`-Attribut des Dokumentenkörpers.

Beachten Sie, dass dies nur funktioniert, wenn das `iframe`-Fenster die gleiche Herkunft wie das übergeordnete Dokument hat. Andernfalls führt der Versuch, auf `contentWindow.document` zuzugreifen, zu einer Ausnahme.

```js
const iframe = document.querySelector("iframe").contentWindow;

iframe.document.querySelector("body").style.backgroundColor = "blue";
// this would turn the 1st iframe in document blue.
```

### Zuordnung von Nachrichtenquellen zu iframes

Dieses Beispiel könnte auf einer Seite ausgeführt werden, die mehrere iframes hostet, von denen jedes ihm Nachrichten mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) senden kann. Wenn die Seite eine Nachricht empfängt, möchte sie wissen, welches `iframe` das Fenster enthält, das die Nachricht gesendet hat.

Dazu überprüft die Seite, wenn sie eine Nachricht empfängt, zunächst, ob die Nachricht von der erwarteten Herkunft stammt, und findet dann das `iframe`, das die Quelle der Nachricht war, indem sie die [`source`](/de/docs/Web/API/MessageEvent/source)-Eigenschaft des Nachrichtenereignisses mit der `contentWindow`-Eigenschaft des iframes vergleicht.

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
