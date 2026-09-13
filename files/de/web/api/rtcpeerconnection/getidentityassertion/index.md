---
title: "RTCPeerConnection: getIdentityAssertion() Methode"
short-title: getIdentityAssertion()
slug: Web/API/RTCPeerConnection/getIdentityAssertion
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{APIRef("WebRTC")}}

Die **`getIdentityAssertion()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle initiiert das Sammeln einer Identitätsbehauptung.
Dies hat nur dann eine Wirkung, wenn der [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) nicht `"closed"` ist.

Es wird nicht erwartet, dass die Anwendung, die mit dem `RTCPeerConnection` arbeitet, dies tut: Dies wird automatisch durchgeführt; ein expliziter Aufruf ermöglicht es Ihnen lediglich, den Bedarf vorwegzunehmen.

## Syntax

```js-nolint
getIdentityAssertion()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, der sich zu einer Identitätsbehauptung auflöst, die als Zeichenkette kodiert ist.

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
