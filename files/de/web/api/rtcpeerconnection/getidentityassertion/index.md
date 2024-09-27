---
title: "RTCPeerConnection: Methode getIdentityAssertion()"
short-title: getIdentityAssertion()
slug: Web/API/RTCPeerConnection/getIdentityAssertion
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`getIdentityAssertion()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle initiiert das Sammeln einer Identitätsbestätigung.
Dies hat nur eine Wirkung, wenn der [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) nicht `"closed"` ist.

Die Methode gibt ein JavaScript-{{jsxref("Promise")}} zurück, das zu einer als Zeichenkette codierten Identitätsbestätigung aufgelöst wird.

Es wird nicht erwartet, dass die Anwendung, die sich mit der `RTCPeerConnection` befasst, dies manuell durchführt; ein expliziter Aufruf ermöglicht lediglich, den Bedarf vorwegzunehmen.

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
