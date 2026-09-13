---
title: "HTMLIFrameElement: browsingTopics-Eigenschaft"
short-title: browsingTopics
slug: Web/API/HTMLIFrameElement/browsingTopics
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}{{non-standard_header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browseranbietern abgelehnt. Siehe den Abschnitt [Standards Positionen](/de/docs/Web/API/Topics_API#standards_positions) für Details zur Ablehnung.

Die **`browsingTopics`**-Eigenschaft des [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Interfaces ist ein boolescher Wert, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die zugehörige {{htmlelement("iframe")}}-Quelle in einem {{httpheader("Sec-Browsing-Topics")}}-Header gesendet werden sollen. Dies spiegelt das `browsingtopics` HTML-Attribut wider.

## Wert

Ein boolean. Der Standardwert ist `false`; setzen Sie ihn auf `true`, um die zugehörige `<iframe>`-Quellenanfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, der die ausgewählten Themen für den aktuellen Benutzer enthält.

## Beispiele

### Abrufen

Setzen Sie `browsingtopics` auf `true` und laden Sie dann den `<iframe>`-Inhalt deklarativ:

```html
<iframe browsingtopics title="Advertising container" src="ad-tech1.example">
  ...
</iframe>
```

Protokollieren Sie den `browsingTopics`-Wert über ein Skript:

```js
const iframeElem = document.querySelector("iframe");
console.log(iframeElem.browsingTopics); // will return true in supporting browsers
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
iframeElem.src = "ad-tech1.example";
```

## Spezifikationen

Dieses Merkmal ist kein Teil eines offiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
