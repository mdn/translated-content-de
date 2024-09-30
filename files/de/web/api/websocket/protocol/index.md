---
title: "WebSocket: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/WebSocket/protocol
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`WebSocket.protocol`** gibt den Namen des vom Server ausgewählten [Subprotokolls](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) zurück. Dies wird einer der im [`protocols`](/de/docs/Web/API/WebSocket/WebSocket#protocols)-Parameter bei der Erstellung des [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekts angegebenen Zeichenfolgen sein oder die leere Zeichenfolge, wenn keine Verbindung hergestellt wurde.

## Wert

Eine Zeichenfolge.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("Sec-WebSocket-Protocol")}}
