---
title: "RTCIdentityAssertion: name-Eigenschaft"
short-title: name
slug: Web/API/RTCIdentityAssertion/name
l10n:
  sourceCommit: efb84732016b60b17f81358960f9d5ebf516c5fe
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`name`**-Eigenschaft der Schnittstelle [`RTCIdentityAssertion`](/de/docs/Web/API/RTCIdentityAssertion) gibt die verifizierte Peer-Identität an. Sie ist ein String im E-Mail-Adressformat (zum Beispiel `user@example.com`), wie in {{RFC(5322)}} definiert.

## Wert

Ein String, der die verifizierte Peer-Identität in einem {{RFC(5322)}} E-Mail-Adressformat enthält (zum Beispiel `alice@identity.example.com`).

## Beispiele

### Protokollierung des verifizierten Peer-Identitätsnamens

In diesem Beispiel wird das [`RTCPeerConnection.peerIdentity`](/de/docs/Web/API/RTCPeerConnection/peerIdentity)-Versprechen abgewartet, um die Identitätsaussage zu erhalten, und dann wird der verifizierte Identitätsname des Peers protokolliert.

```js
const pc = new RTCPeerConnection();

// …

async function logPeerName() {
  try {
    const identity = await pc.peerIdentity;
    console.log(`Peer identity: ${identity.name}`);
  } catch (err) {
    console.error("Could not verify peer identity:", err);
  }
}

logPeerName();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCIdentityAssertion.idp`](/de/docs/Web/API/RTCIdentityAssertion/idp)
- [`RTCPeerConnection.peerIdentity`](/de/docs/Web/API/RTCPeerConnection/peerIdentity)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
