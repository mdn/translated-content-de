---
title: "HTMLIFrameElement: contentWindow-Eigenschaft"
short-title: contentWindow
slug: Web/API/HTMLIFrameElement/contentWindow
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("HTML DOM")}}

Die **`contentWindow`**-Eigenschaft gibt das [Window](/de/docs/Web/API/Window)-Objekt eines [HTMLIFrameElement](/de/docs/Web/API/HTMLIFrameElement) zurück.

Dieses Attribut ist schreibgeschützt.

## Wert

Ein [Window](/de/docs/Web/API/Window)-Objekt.

## Beschreibung

Der Zugriff auf das von `contentWindow` zurückgegebene [`Window`](/de/docs/Web/API/Window) unterliegt den Regeln der [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy). Das bedeutet, wenn das iframe dieselbe Herkunft wie das übergeordnete Element hat, kann das übergeordnete Element auf das Dokument des iframes und dessen internes DOM zugreifen. Wenn sie unterschiedlich sind (cross-origin), ist der Zugriff auf die Attribute des Fensters sehr eingeschränkt. Siehe ["Cross-Origin Script API Access"](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_script_api_access) für Details.

Seiten können diese Eigenschaft auch verwenden, um festzustellen, welches iframe eine Nachricht mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) gesendet hat, indem sie es mit der [`source`](/de/docs/Web/API/MessageEvent/source)-Eigenschaft des Nachrichtenereignisses vergleichen.

## Beispiele

### Zugriff auf das Dokument eines iframes

Dieses Beispiel ändert das `style`-Attribut des Dokumentkörpers.

Beachten Sie, dass dies nur funktioniert, wenn das Fenster des iframes dieselbe Herkunft wie sein übergeordnetes Element hat: Andernfalls führt der Versuch, auf `contentWindow.document` zuzugreifen, zu einer Ausnahme.

```js
const iframe = document.querySelector("iframe").contentWindow;

iframe.document.querySelector("body").style.backgroundColor = "blue";
// this would turn the 1st iframe in document blue.
```

### Zuordnung von Nachrichtenquellen zu iframes

Dieses Beispiel könnte auf einer Seite laufen, die mehrere iframes hostet, von denen jedes mit [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) Nachrichten senden kann. Wenn die Seite eine Nachricht erhält, möchte sie wissen, welches iframe das Fenster enthält, das die Nachricht gesendet hat.

Dazu überprüft die Seite zunächst, wenn sie eine Nachricht erhält, ob die Nachricht von der erwarteten Herkunft stammt. Dann findet sie das iframe, das die Quelle der Nachricht war, indem sie die [`source`](/de/docs/Web/API/MessageEvent/source)-Eigenschaft des Nachrichtenereignisses mit der `contentWindow`-Eigenschaft des iframes vergleicht.

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
