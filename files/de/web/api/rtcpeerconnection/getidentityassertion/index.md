---
title: "RTCPeerConnection: getIdentityAssertion()-Methode"
short-title: getIdentityAssertion()
slug: Web/API/RTCPeerConnection/getIdentityAssertion
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`getIdentityAssertion()`**-Methode des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Interfaces initiiert das Sammeln eines Identitätsnachweises.
Dies hat nur eine Auswirkung, wenn der [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) nicht `"closed"` ist.

Die Methode gibt ein JavaScript {{jsxref("Promise")}} zurück, das zu einem als String codierten Identitätsnachweis aufgelöst wird.

Es wird nicht erwartet, dass die Anwendung, die mit der `RTCPeerConnection` arbeitet, dies ausführt: dies geschieht automatisch; ein expliziter Aufruf erlaubt nur, den Bedarf vorherzusehen.

## Syntax

```js-nolint
getIdentityAssertion()
```

_Diese Methode hat weder Parameter noch einen Rückgabewert._

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
