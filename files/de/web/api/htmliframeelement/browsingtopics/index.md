---
title: "HTMLIFrameElement: browsingTopics-Eigenschaft"
short-title: browsingTopics
slug: Web/API/HTMLIFrameElement/browsingTopics
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Diese Funktion stößt derzeit auf Ablehnung von zwei Browseranbietern. Weitere Informationen zur Ablehnung finden Sie im Abschnitt [Standards positions](/de/docs/Web/API/Topics_API#standards_positions).

Die **`browsingTopics`**-Eigenschaft des {{domxref("HTMLIFrameElement")}}-Interfaces ist ein Boolean, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des zugehörigen {{htmlelement("iframe")}} in einem {{httpheader("Sec-Browsing-Topics")}}-Header gesendet werden sollen. Dies spiegelt das `browsingtopics` HTML-Attribut wider.

Siehe [Using the Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

## Wert

Ein Boolean. Der Standardwert ist `false`; setzen Sie ihn auf `true`, um die zugehörige `<iframe>`-Quellenanfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, der die ausgewählten Themen für den aktuellen Benutzer enthält.

## Beispiele

### Abrufen

Setzen Sie `browsingtopics` auf `true` und laden Sie dann den `<iframe>`-Inhalt deklarativ:

```html
<iframe browsingtopics title="Advertising container" src="adtech1.example">
  ...
</iframe>
```

Protokollieren Sie den `browsingTopics`-Wert über ein Skript:

```js
const iframeElem = document.querySelector("iframe");
console.log(iframeElem.browsingTopics); // wird in unterstützenden Browsern true zurückgeben
```

### Setzen

Geben Sie ein minimales `<iframe>` an:

```html
<iframe> ... </iframe>
```

Setzen Sie `browsingtopics` auf `true` und laden Sie dann den `<iframe>`-Inhalt über ein Skript:

```js
const iframeElem = document.querySelector("iframe");

iframeElem.browsingTopics = true;
iframeElem.title = "Advertising container";
iframeElem.src = "adtech1.example";
```

## Spezifikationen

Diese Funktion ist Teil eines inoffiziellen Standards, obwohl sie im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert wird.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
