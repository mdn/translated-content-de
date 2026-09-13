---
title: "WebTransport: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/WebTransport/protocol
l10n:
  sourceCommit: 8413520d9fd826c98db89ff8165408139635d454
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte **`protocol`**-Eigenschaft der [`WebTransport`](/de/docs/Web/API/WebTransport)-Schnittstelle gibt das anwendungsspezifische Protokoll zurück, das vom Server ausgewählt wurde.

Der Wert wird aus den im [`protocols`](/de/docs/Web/API/WebTransport/WebTransport#protocols)-Konstruktor-Option angebotenen Protokollen ausgewählt.
Beachten Sie, dass der Wert festgelegt wird, sobald das [`ready`](/de/docs/Web/API/WebTransport/ready)-Versprechen erfüllt ist.
Es ist der leere String, wenn `protocols` nicht verwendet wurde oder wenn der Server sich entschieden hat, keines der angebotenen Protokolle auszuwählen.

## Wert

Ein String.
Standardmäßig `""`.

## Beispiele

### Anfordern und Lesen eines ausgehandelten Protokolls

Dieses Beispiel zeigt, wie Sie eine Reihe von Protokollkandidaten anfordern und das vom Server ausgewählte zurücklesen können.

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  const transport = new WebTransport(url, {
    protocols: ["chat", "file-transfer"],
  });

  try {
    // The connection can be used once ready fulfills
    await transport.ready;
    console.log(transport.protocol); // e.g. "chat", or "" if none was selected
    return transport;
  } catch (error) {
    // Ready may reject if the offered protocols aren't supported
    console.error(`Connection failed: ${error}`);
  }
}

initTransport(url);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
