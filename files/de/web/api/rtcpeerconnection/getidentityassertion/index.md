---
title: "RTCPeerConnection: getIdentityAssertion()-Methode"
short-title: getIdentityAssertion()
slug: Web/API/RTCPeerConnection/getIdentityAssertion
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("WebRTC")}}

Die **`getIdentityAssertion()`**-Methode des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Interfaces initiiert die Erfassung einer Identitätsbehauptung.
Dies hat nur eine Wirkung, wenn der [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) nicht `"closed"` ist.

Es wird nicht erwartet, dass die Anwendung, die mit der `RTCPeerConnection` arbeitet, dies explizit aufruft: Dies wird automatisch erledigt; ein expliziter Aufruf ermöglicht es nur, den Bedarf vorherzusehen.

## Syntax

```js-nolint
getIdentityAssertion()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, der in eine als Zeichenkette kodierte Identitätsbehauptung aufgelöst wird.

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
