---
title: "HTMLIFrameElement: credentialless-Eigenschaft"
short-title: credentialless
slug: Web/API/HTMLIFrameElement/credentialless
l10n:
  sourceCommit: dd868507df863ab4f37d53c960c76e20e9ee365f
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`credentialless`**-Eigenschaft der [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Schnittstelle gibt an, ob das {{htmlelement("iframe")}} credentialless ist, was bedeutet, dass Dokumente im Inneren mit neuen, flüchtigen Kontexten geladen werden.

Diese Kontexte haben keinen Zugriff auf ihr Netzwerk, Cookies und Speicherdaten, die mit ihrem Ursprung verbunden sind. Stattdessen verwenden sie neue, lokale zum Top-Level-Dokument gehörige Kontexte. Das bedeutet, dass gespeicherte Daten nicht mehr zugänglich sind, nachdem der Benutzer die Seite verlässt oder neu lädt.

Im Gegenzug können die Einbettungsregeln des {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) aufgehoben werden, sodass Dokumente mit gesetzt COEP Dokumente von Drittanbietern einbetten können, die es nicht haben. Siehe [IFrame credentialless](/de/docs/Web/HTTP/Guides/IFrame_credentialless) für eine tiefere Erklärung.

## Wert

Ein Boolescher Wert. Der Standardwert ist `false`; setzen Sie ihn auf `true`, um das `<iframe>` credentialless zu machen.

## Beispiele

### Abrufen

Geben Sie ein credentialless `<iframe>` folgendermaßen an:

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

### Setzen

Alternativ können Sie die Mindestangaben im HTML machen:

```html
<iframe width="960" height="600"> </iframe>
```

Und setzen Sie `credentialless` auf `true`, um dann die Inhalte des `<iframe>` über ein Skript zu laden:

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

- [IFrame credentialless](/de/docs/Web/HTTP/Guides/IFrame_credentialless)
- {{htmlelement("iframe")}}
