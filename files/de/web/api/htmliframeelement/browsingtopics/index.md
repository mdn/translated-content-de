---
title: "HTMLIFrameElement: browsingTopics-Eigenschaft"
short-title: browsingTopics
slug: Web/API/HTMLIFrameElement/browsingTopics
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{APIRef("HTML DOM")}}{{non-standard_header}}{{deprecated_header}}

> [!WARNING]
> Dieses Feature wird momentan von zwei Browser-Anbietern abgelehnt. Einzelheiten zur Ablehnung finden Sie im Abschnitt [Standards positions](/de/docs/Web/API/Topics_API#standards_positions).

Die **`browsingTopics`**-Eigenschaft des [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Interfaces ist ein boolescher Wert, der angibt, dass die ausgewählten Themen des aktuellen Benutzers mit der Anfrage für die zugeordnete Quelle des {{htmlelement("iframe")}} im {{httpheader("Sec-Browsing-Topics")}}-Header gesendet werden sollen. Dies spiegelt das `browsingtopics`-HTML-Attribut wider.

Weitere Informationen finden Sie unter [Using the Topics API](/de/docs/Web/API/Topics_API/Using).

## Wert

Ein boolescher Wert. Der Standardwert ist `false`; setzen Sie ihn auf `true`, um die Anfrage für die zugeordnete `<iframe>`-Quelle mit einem {{httpheader("Sec-Browsing-Topics")}}-Header zu senden, der die ausgewählten Themen für den aktuellen Benutzer enthält.

## Beispiele

### Abfragen

Setzen Sie `browsingtopics` auf `true`, und laden Sie dann den Inhalt des `<iframe>` deklarativ:

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

Definieren Sie ein minimales `<iframe>`:

```html
<iframe> ... </iframe>
```

Setzen Sie `browsingtopics` auf `true`, und laden Sie dann den Inhalt des `<iframe>` über ein Skript:

```js
const iframeElem = document.querySelector("iframe");

iframeElem.browsingTopics = true;
iframeElem.title = "Advertising container";
iframeElem.src = "ad-tech1.example";
```

## Spezifikationen

Dieses Feature ist kein Teil eines offiziellen Standards, obwohl es im [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/) spezifiziert ist.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Topics API](/de/docs/Web/API/Topics_API)
