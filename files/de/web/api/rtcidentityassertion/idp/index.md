---
title: "RTCIdentityAssertion: idp-Eigenschaft"
short-title: idp
slug: Web/API/RTCIdentityAssertion/idp
l10n:
  sourceCommit: efb84732016b60b17f81358960f9d5ebf516c5fe
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`idp`**-Eigenschaft des [`RTCIdentityAssertion`](/de/docs/Web/API/RTCIdentityAssertion)-Interfaces gibt den Domänennamen des {{Glossary("Identity_provider", "Identity Providers")}} (IdP) an, der die Identitätsbehauptung validiert hat (ein geprüfter Nachweis der Identität des entfernten Peers).

## Wert

Ein String, der den Domänennamen des Identity Providers enthält, der diese Identität validiert hat.

## Beispiele

### Anzeige der Domäne des Identity Providers

In diesem Beispiel wird die [`RTCPeerConnection.peerIdentity`](/de/docs/Web/API/RTCPeerConnection/peerIdentity)-Promise mit einem [`RTCIdentityAssertion`](/de/docs/Web/API/RTCIdentityAssertion) aufgelöst, dessen `idp`-Eigenschaft in die Konsole protokolliert wird.

```js
const pc = new RTCPeerConnection();

// …

async function getIdentityProvider() {
  try {
    const identity = await pc.peerIdentity;
    console.log(`Identity provider: ${identity.idp}`);
  } catch (err) {
    console.error("Failed to get peer identity:", err);
  }
}

getIdentityProvider();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCIdentityAssertion.name`](/de/docs/Web/API/RTCIdentityAssertion/name)
- [`RTCPeerConnection.peerIdentity`](/de/docs/Web/API/RTCPeerConnection/peerIdentity)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
