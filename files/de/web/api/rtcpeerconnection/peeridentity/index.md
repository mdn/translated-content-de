---
title: "RTCPeerConnection: peerIdentity-Eigenschaft"
short-title: peerIdentity
slug: Web/API/RTCPeerConnection/peerIdentity
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`peerIdentity`** der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle gibt ein JavaScript-{{jsxref("Promise")}} zurück, das zu einer [`RTCIdentityAssertion`](/de/docs/Web/API/RTCIdentityAssertion) aufgelöst wird, die einen String enthält, der den entfernten Peer identifiziert. Sobald dieses Versprechen erfolgreich aufgelöst wurde, ist die resultierende Identität die **Ziel-Peer-Identität** und kann während der gesamten Verbindung nicht geändert werden.

## Wert

Ein JavaScript-{{jsxref("Promise")}}, das zu einer [`RTCIdentityAssertion`](/de/docs/Web/API/RTCIdentityAssertion) aufgelöst wird, die die Identität des entfernten Peers beschreibt.

Tritt ein Fehler auf, während versucht wird, eine eingehende Identitätsbehauptung zu validieren (d. h. die Informationen, die die Identität eines Peers beschreiben), wird das Versprechen abgelehnt. Wenn es noch keine Ziel-Peer-Identität gibt, wird `peerIdentity` auf ein neu erstelltes Versprechen gesetzt und der Vorgang beginnt erneut, bis der Prozess erfolgreich ist oder keine weiteren Versuche zur Authentifizierung unternommen werden.

> [!NOTE]
> Das von [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) zurückgegebene Versprechen kann nicht aufgelöst werden, bis eine festgelegte Ziel-Peer-Identität validiert ist. Wenn die Identität noch nicht validiert wurde, wird das von `setRemoteDescription()` zurückgegebene Versprechen abgelehnt. Gibt es keine Ziel-Peer-Identität, muss `setRemoteDescription()` nicht auf die Validierung warten, bevor es aufgelöst wird.

## Beispiele

In diesem Beispiel wird eine Funktion, `getIdentityAssertion()`, erstellt, die asynchron darauf wartet, dass die Identität des Peers verifiziert wird, und dann die Identität an den Aufrufer zurückgibt. Tritt ein Fehler auf und das Versprechen wird abgelehnt, wird dieser Fehler in der Konsole protokolliert und es wird `null` an den Aufrufer zurückgegeben.

```js
let pc = new RTCPeerConnection();

// …

async function getIdentityAssertion(pc) {
  try {
    const identity = await pc.peerIdentity;
    return identity;
  } catch (err) {
    console.log("Error identifying remote peer: ", err);
    return null;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
