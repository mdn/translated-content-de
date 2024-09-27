---
title: "HTMLIFrameElement: credentialless Eigenschaft"
short-title: credentialless
slug: Web/API/HTMLIFrameElement/credentialless
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`credentialless`**-Eigenschaft des [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Interfaces gibt an, ob das {{htmlelement("iframe")}} credentialless ist. Das bedeutet, dass Dokumente innerhalb des Frames in neuen, temporären Kontexten geladen werden.

Diese Kontexte haben keinen Zugriff auf die Netzwerkinformationen, Cookies und Speicherdaten, die mit ihrem Ursprung verbunden sind. Stattdessen verwenden sie neue, lokale Daten, die an die Lebensdauer des obersten Dokuments gebunden sind. Das bedeutet, dass gespeicherte Daten nicht mehr zugänglich sind, nachdem der Benutzer die Seite verlässt oder neu lädt.

Im Gegenzug können die Einbettungsregeln der {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) gelockert werden, sodass Dokumente mit gesetztem COEP Drittanbieter-Dokumente einbetten können, die dies nicht tun. Siehe [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless) für eine ausführlichere Erklärung.

## Wert

Ein boolescher Wert. Der Standardwert ist `false`; setzen Sie ihn auf `true`, um das `<iframe>` credentialless zu machen.

## Beispiele

### Abrufen

Spezifizieren Sie ein credentialless `<iframe>` wie folgt:

```html
<iframe
  src="https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)"
  title="Spectre vulnerability Wikipedia page"
  width="960"
  height="600"
  credentialless></iframe>
```

Geben Sie den Wert der `credentialless`-Eigenschaft zurück:

```js
const iframeElem = document.querySelector("iframe");
console.log(iframeElem.credentialless); // will return true in supporting browsers
```

### Festlegen

Alternativ spezifizieren Sie das Minimum an Details im HTML:

```html
<iframe width="960" height="600"> </iframe>
```

Und setzen Sie `credentialless` auf `true`, laden Sie dann die Inhalte des `<iframe>` über ein Skript:

```js
const iframeElem = document.querySelector("iframe");

iframeElem.credentialless = true;
iframeElem.title = "Spectre vulnerability Wikipedia page";
iframeElem.src =
  "https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless)
- {{htmlelement("iframe")}}
