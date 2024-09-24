---
title: "RTCPeerConnection: Methode getIdentityAssertion()"
short-title: getIdentityAssertion()
slug: Web/API/RTCPeerConnection/getIdentityAssertion
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`getIdentityAssertion()`**-Methode der Schnittstelle {{domxref("RTCPeerConnection")}} initiiert das Sammeln einer Identitätsbehauptung.
Dies hat nur dann Auswirkungen, wenn der {{domxref("RTCPeerConnection.signalingState", "signalingState")}} nicht auf `"closed"` gesetzt ist.

Die Methode gibt ein JavaScript {{jsxref("Promise")}} zurück, das sich zu einer als String kodierten Identitätsbehauptung auflöst.

Es wird nicht erwartet, dass die Anwendung, die mit dem `RTCPeerConnection` arbeitet, dies explizit aufruft; ein expliziter Aufruf ermöglicht lediglich, den Bedarf vorwegzunehmen.

## Syntax

```js-nolint
getIdentityAssertion()
```

_Für diese Methode gibt es weder Parameter noch einen Rückgabewert._

## Beispiel

```js
const pc = new RTCPeerConnection();

pc.setIdentityProvider("developer.mozilla.org");
const assertion = await pc.getIdentityAssertion();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
