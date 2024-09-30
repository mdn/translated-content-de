---
title: "HTMLIFrameElement: Credentialless-Eigenschaft"
short-title: credentialless
slug: Web/API/HTMLIFrameElement/credentialless
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`credentialless`**-Eigenschaft der [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Schnittstelle gibt an, ob das {{htmlelement("iframe")}} credentialless ist, was bedeutet, dass Dokumente innerhalb des Elements in neuen, temporären Kontexten geladen werden.

Diese Kontexte haben keinen Zugriff auf ihr Netzwerk, Cookies und Speicherdaten, die mit ihrem Ursprung verknüpft sind. Stattdessen verwenden sie neue Kontexte, die auf die Lebensdauer des übergeordneten Dokuments beschränkt sind. Dies bedeutet, dass alle gespeicherten Daten nach dem Verlassen oder Neuladen der Seite nicht mehr zugänglich sind.

Im Gegenzug können die Einbettungsregeln der {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit gesetztem COEP Drittanbieterdokumente einbetten können, die dies nicht haben. Siehe [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless) für eine ausführlichere Erklärung.

## Wert

Ein boolescher Wert. Der Standardwert ist `false`; setzen Sie ihn auf `true`, um das `<iframe>` credentialless zu machen.

## Beispiele

### Abfragen

Spezifizieren Sie ein credentialless `<iframe>` wie folgt:

```html
<iframe
  src="https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)"
  title="Spectre vulnerability Wikipedia page"
  width="960"
  height="600"
  credentialless></iframe>
```

Geben Sie den `credentialless`-Eigenschaftswert zurück:

```js
const iframeElem = document.querySelector("iframe");
console.log(iframeElem.credentialless); // will return true in supporting browsers
```

### Setzen

Alternativ können Sie das Minimum an Details im HTML angeben:

```html
<iframe width="960" height="600"> </iframe>
```

Und setzen Sie `credentialless` auf `true`, um dann den `<iframe>`-Inhalt über ein Skript zu laden:

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
