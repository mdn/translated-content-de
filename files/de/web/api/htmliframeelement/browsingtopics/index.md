---
title: "HTMLIFrameElement: browsingTopics-Eigenschaft"
short-title: browsingTopics
slug: Web/API/HTMLIFrameElement/browsingTopics
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browser-Anbietern abgelehnt. Einzelheiten zur Ablehnung finden Sie im Abschnitt [Standards Positionen](/de/docs/Web/API/Topics_API#standards_positions).

Die **`browsingTopics`**-Eigenschaft des [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Interfaces ist ein Boolean, der angibt, dass die ausgewählten Themen für den aktuellen Benutzer mit der Anforderung für die zugehörige Quelle des {{htmlelement("iframe")}} in einem {{httpheader("Sec-Browsing-Topics")}}-Header gesendet werden sollen. Dies entspricht dem HTML-Attribut `browsingtopics`.

Weitere Details finden Sie unter [Verwendung der Topics API](/de/docs/Web/API/Topics_API/Using).

## Wert

Ein Boolean. Der Standardwert ist `false`; setzen Sie ihn auf `true`, um die zugehörige `<iframe>`-Quellenanfrage mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, der die ausgewählten Themen für den aktuellen Benutzer enthält.

## Beispiele

### Get

Setzen Sie `browsingtopics` auf `true` und laden Sie dann den Inhalt des `<iframe>` deklarativ:

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

Setzen Sie `browsingtopics` auf `true` und laden Sie dann den Inhalt des `<iframe>` über ein Skript:

```js
const iframeElem = document.querySelector("iframe");

iframeElem.browsingTopics = true;
iframeElem.title = "Advertising container";
iframeElem.src = "ad-tech1.example";
```

## Spezifikationen

Dieses Feature ist nicht Teil eines offiziellen Standards, obwohl es in dem [Unofficial Proposal Draft der Topics API](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
