---
title: "HTMLIFrameElement: browsingTopics-Eigenschaft"
short-title: browsingTopics
slug: Web/API/HTMLIFrameElement/browsingTopics
l10n:
  sourceCommit: c807b72777506cd8aaa8d888b7a187dbc6079ca1
---

{{APIRef("HTML DOM")}}{{non-standard_header}}{{deprecated_header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browser-Anbietern abgelehnt. Details zur Ablehnung finden Sie im Abschnitt [Standards-Positionen](/de/docs/Web/API/Topics_API#standards_positions).

Die **`browsingTopics`**-Eigenschaft des [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Interfaces ist ein Boolean, der angibt, dass die ausgewählten Themen für den aktuellen Nutzer mit der Anforderung für die Quelle des zugehörigen {{htmlelement("iframe")}} in einem {{httpheader("Sec-Browsing-Topics")}}-Header gesendet werden sollen. Dies spiegelt das HTML-Attribut `browsingtopics` wider.

## Wert

Ein Boolean. Der Standardwert ist `false`; setzen Sie ihn auf `true`, um die Anforderung für die Quelle des zugehörigen `<iframe>` mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, der die ausgewählten Themen für den aktuellen Nutzer enthält.

## Beispiele

### Get

Setzen Sie `browsingtopics` auf `true` und laden Sie dann den Inhalt des `<iframe>` deklariert:

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

### Set

Geben Sie ein minimales `<iframe>` an:

```html
<iframe> ... </iframe>
```

Setzen Sie `browsingtopics` auf `true` und laden Sie dann den Inhalt des `<iframe>` per Skript:

```js
const iframeElem = document.querySelector("iframe");

iframeElem.browsingTopics = true;
iframeElem.title = "Advertising container";
iframeElem.src = "ad-tech1.example";
```

## Spezifikationen

Dieses Feature ist nicht Teil eines offiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
