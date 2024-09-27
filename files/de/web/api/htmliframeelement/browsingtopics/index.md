---
title: "HTMLIFrameElement: browsingTopics-Eigenschaft"
short-title: browsingTopics
slug: Web/API/HTMLIFrameElement/browsingTopics
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browseranbietern abgelehnt. Weitere Details zur Ablehnung finden Sie im Abschnitt [Standards positions](/de/docs/Web/API/Topics_API#standards_positions).

Die **`browsingTopics`**-Eigenschaft der [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Schnittstelle ist ein Boolean, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anfrage für die Quelle des zugehörigen {{htmlelement("iframe")}} in einem {{httpheader("Sec-Browsing-Topics")}}-Header gesendet werden sollen. Dies spiegelt das HTML-Attribut `browsingtopics` wider.

Siehe [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using) für weitere Details.

## Wert

Ein Boolean. Der Standardwert ist `false`; setzen Sie ihn auf `true`, um die zugehörige `<iframe>`-Quellenanfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, der die ausgewählten Themen für den aktuellen Benutzer enthält.

## Beispiele

### Abfragen

Setzen Sie `browsingtopics` auf `true` und laden Sie dann den `<iframe>`-Inhalt deklarativ:

```html
<iframe browsingtopics title="Advertising container" src="adtech1.example">
  ...
</iframe>
```

Protokollieren Sie den Wert von `browsingTopics` über ein Skript:

```js
const iframeElem = document.querySelector("iframe");
console.log(iframeElem.browsingTopics); // will return true in supporting browsers
```

### Festlegen

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

Dieses Merkmal ist kein Teil eines offiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
