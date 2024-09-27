---
title: "WebSocket: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/WebSocket/protocol
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Die **`WebSocket.protocol`** Eigenschaft (nur lesbar) gibt den Namen des vom Server ausgewählten [Sub-Protokolls](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) zurück. Dies wird einer der Zeichenfolgen sein, die im [`protocols`](/de/docs/Web/API/WebSocket/WebSocket#protocols)-Parameter beim Erstellen des [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekts angegeben wurden, oder der leere String, wenn keine Verbindung hergestellt wird.

## Wert

Eine Zeichenfolge.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("Sec-WebSocket-Protocol")}}
