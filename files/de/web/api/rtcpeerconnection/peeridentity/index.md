---
title: "RTCPeerConnection: peerIdentity-Eigenschaft"
short-title: peerIdentity
slug: Web/API/RTCPeerConnection/peerIdentity
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`peerIdentity`**-Eigenschaft der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle gibt ein JavaScript-{{jsxref("Promise")}} zurück, das auf eine [`RTCIdentityAssertion`](/de/docs/Web/API/RTCIdentityAssertion) aufgelöst wird, die einen String enthält, der den entfernten Peer identifiziert.
Sobald dieses Versprechen erfolgreich aufgelöst ist, ist die resultierende Identität die **Ziel-Peer-Identität** und kann für die Dauer der Verbindung nicht geändert werden.

## Wert

Ein JavaScript-{{jsxref("Promise")}}, das auf eine [`RTCIdentityAssertion`](/de/docs/Web/API/RTCIdentityAssertion) aufgelöst wird, die die Identität des entfernten Peers beschreibt.

Wenn ein Fehler auftritt, während versucht wird, eine eingehende Identitätsaussage zu validieren (das heißt, die Informationen, die die Identität eines Peers beschreiben), wird das Versprechen abgelehnt.
Falls es keine bereits vorhandene Ziel-Peer-Identität gibt, wird `peerIdentity` auf ein neu erstelltes Versprechen gesetzt und der Prozess beginnt von neuem, bis der Prozess erfolgreich ist oder keine weiteren Authentifizierungsversuche mehr stattfinden.

> [!NOTE]
> Das durch [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) zurückgegebene Versprechen kann nicht aufgelöst werden, bis eine gesetzte Ziel-Peer-Identität validiert wurde.
> Wenn die Identität noch nicht validiert wurde, wird das durch `setRemoteDescription()` zurückgegebene Versprechen abgelehnt.
> Wenn keine Ziel-Peer-Identität vorhanden ist, muss `setRemoteDescription()` nicht auf die Validierung warten, bevor es aufgelöst wird.

## Beispiele

In diesem Beispiel wird eine Funktion `getIdentityAssertion()` erstellt, die asynchron darauf wartet, dass die Identität des Peers verifiziert wird, und dann die Identität an den Aufrufer zurückgibt.
Wenn ein Fehler auftritt und das Versprechen abgelehnt wird, wird dieser Fehler im Konsolenprotokoll erfasst und `null` an den Aufrufer zurückgegeben.

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
