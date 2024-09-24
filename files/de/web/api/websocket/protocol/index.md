---
title: "WebSocket: protocol-Eigenschaft"
short-title: protocol
slug: Web/API/WebSocket/protocol
l10n:
  sourceCommit: c69e36924e1849fdc9b7fc49a3f4c550efa3468a
---

{{APIRef("WebSockets API")}}

Die **`WebSocket.protocol`** Eigenschaft ist unveränderbar und gibt den Namen des [Subprotokolls](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) zurück, das der Server ausgewählt hat. Dies wird einer der Strings sein, die im [`protocols`](/de/docs/Web/API/WebSocket/WebSocket#protocols)-Parameter beim Erstellen des {{domxref("WebSocket")}}-Objekts angegeben wurden, oder der leere String, wenn keine Verbindung hergestellt wird.

## Wert

Ein String.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{httpheader("Sec-WebSocket-Protocol")}}
