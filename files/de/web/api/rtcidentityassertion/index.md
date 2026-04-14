---
title: RTCIdentityAssertion
slug: Web/API/RTCIdentityAssertion
l10n:
  sourceCommit: efb84732016b60b17f81358960f9d5ebf516c5fe
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Das **`RTCIdentityAssertion`** Interface der [WebRTC API](/de/docs/Web/API/WebRTC_API) repräsentiert die Identität eines entfernten Peers der aktuellen Verbindung. Wenn noch kein Peer festgelegt und verifiziert wurde, gibt dieses Interface `null` zurück. Einmal festgelegt, kann es nicht mehr geändert werden.

## Instanz-Eigenschaften

- [`RTCIdentityAssertion.idp`](/de/docs/Web/API/RTCIdentityAssertion/idp) {{Experimental_Inline}}
  - : Gibt den Domainnamen des {{Glossary("Identity_provider", "Identity Providers")}} (IdP) an, der die Identität validiert hat.
- [`RTCIdentityAssertion.name`](/de/docs/Web/API/RTCIdentityAssertion/name) {{Experimental_Inline}}
  - : Gibt die verifizierte Peer-Identität als Zeichenkette in einem E-Mail-Adress-ähnlichen Format an.

## Beispiele

### Zugriff auf die Identität des entfernten Peers

In diesem Beispiel wartet eine Funktion asynchron darauf, dass die Identität des entfernten Peers über [`RTCPeerConnection.peerIdentity`](/de/docs/Web/API/RTCPeerConnection/peerIdentity) verifiziert wird, und protokolliert dann die Domain des {{Glossary("Identity_provider", "Identity Providers")}} und den Identitätsnamen des Peers.

```js
const pc = new RTCPeerConnection();

// …

async function logPeerIdentity() {
  try {
    const identity = await pc.peerIdentity;
    console.log(`IdP domain: ${identity.idp}`);
    console.log(`Peer name: ${identity.name}`);
  } catch (err) {
    console.error("Could not verify peer identity:", err);
  }
}

logPeerIdentity();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCPeerConnection.peerIdentity`](/de/docs/Web/API/RTCPeerConnection/peerIdentity)
- [`RTCPeerConnection.getIdentityAssertion()`](/de/docs/Web/API/RTCPeerConnection/getIdentityAssertion)
- [WebRTC API](/de/docs/Web/API/WebRTC_API)
