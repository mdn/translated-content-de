---
title: "HTMLIFrameElement: browsingTopics-Eigenschaft"
short-title: browsingTopics
slug: Web/API/HTMLIFrameElement/browsingTopics
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browserherstellern abgelehnt. Siehe den Abschnitt [Standards-Positionen](/de/docs/Web/API/Topics_API#standards_positions) für Details zur Ablehnung.

Die **`browsingTopics`**-Eigenschaft des [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) Interface ist ein boolescher Wert, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die zugehörige {{htmlelement("iframe")}}-Quelle in einem {{httpheader("Sec-Browsing-Topics")}}-Header gesendet werden sollen. Dies entspricht dem `browsingtopics` HTML-Attribut.

Weitere Details finden Sie unter [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using).

## Wert

Ein boolescher Wert. Der Standardwert ist `false`; setzen Sie ihn auf `true`, um die zugehörige `<iframe>`-Quellenanfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, der die ausgewählten Themen für den aktuellen Benutzer enthält.

## Beispiele

### Abrufen

Setzen Sie `browsingtopics` auf `true` und laden Sie dann die Inhalte des `<iframe>` deklarativ:

```html
<iframe browsingtopics title="Advertising container" src="adtech1.example">
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

Setzen Sie `browsingtopics` auf `true` und laden Sie dann die Inhalte des `<iframe>` über ein Skript:

```js
const iframeElem = document.querySelector("iframe");

iframeElem.browsingTopics = true;
iframeElem.title = "Advertising container";
iframeElem.src = "adtech1.example";
```

## Spezifikationen

Diese Funktion ist nicht Teil eines offiziellen Standards, obwohl sie im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
