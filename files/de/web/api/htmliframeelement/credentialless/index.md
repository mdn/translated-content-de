---
title: "HTMLIFrameElement: Credentialless-Eigenschaft"
short-title: credentialless
slug: Web/API/HTMLIFrameElement/credentialless
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`credentialless`**-Eigenschaft der {{domxref("HTMLIFrameElement")}}-Schnittstelle gibt an, ob das {{htmlelement("iframe")}} credentialless ist. Das bedeutet, dass Dokumente darin unter Verwendung neuer, temporärer Kontexte geladen werden.

Diese Kontexte haben keinen Zugriff auf das Netzwerk, Cookies und gespeicherte Daten, die mit ihrem Ursprung in Verbindung stehen. Stattdessen verwenden sie neue Kontexte, die auf die Lebenszeit des obersten Dokuments beschränkt sind. Das bedeutet, dass gespeicherte Daten nicht mehr zugänglich sind, nachdem der Benutzer die Seite verlässt oder neu lädt.

Im Gegenzug können die Einbettungsregeln der {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit gesetztem COEP Drittanbieter-Dokumente einbetten können, die dies nicht tun. Siehe [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless) für eine ausführlichere Erklärung.

## Wert

Ein boolescher Wert. Der Standardwert ist `false`; setzen Sie ihn auf `true`, um das `<iframe>` credentialless zu machen.

## Beispiele

### Abrufen

Geben Sie ein credentialless `<iframe>` wie folgt an:

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
console.log(iframeElem.credentialless); // gibt true in unterstützenden Browsern zurück
```

### Setzen

Alternativ können Sie die Mindestangaben im HTML angeben:

```html
<iframe width="960" height="600"> </iframe>
```

Und setzen Sie `credentialless` auf `true`, dann laden Sie die Inhalte des `<iframe>` über ein Skript:

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
