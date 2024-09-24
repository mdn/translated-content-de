---
title: "RTCPeerConnection: Eigenschaft peerIdentity"
short-title: peerIdentity
slug: Web/API/RTCPeerConnection/peerIdentity
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`peerIdentity`** schreibgeschützte Eigenschaft des {{domxref("RTCPeerConnection")}}-Interfaces gibt ein JavaScript-{{jsxref("Promise")}} zurück, das zu einer {{domxref("RTCIdentityAssertion")}} aufgelöst wird, welche eine Zeichenkette enthält, die den entfernten Peer identifiziert. Sobald dieses Versprechen erfolgreich aufgelöst ist, bleibt die resultierende Identität die **Zielpeer-Identität** und kann für die Dauer der Verbindung nicht mehr geändert werden.

## Wert

Ein JavaScript-{{jsxref("Promise")}}, das zu einer {{domxref("RTCIdentityAssertion")}} aufgelöst wird und die Identität des entfernten Peers beschreibt.

Tritt ein Fehler auf, während versucht wird, eine eingehende Identitätsbehauptung zu validieren (d.h. die Informationen, die die Identität eines Peers beschreiben), wird das Promise abgelehnt. Wenn es noch keine Zielpeer-Identität gibt, wird `peerIdentity` auf ein neu erstelltes Promise gesetzt und der Prozess beginnt von neuem, bis der Prozess erfolgreich ist oder keine weiteren Authentifizierungsversuche unternommen werden.

> [!NOTE]
> Das von {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}} zurückgegebene Promise kann erst aufgelöst werden, nachdem eine festgelegte Zielpeer-Identität validiert wurde. Wenn die Identität noch nicht validiert wurde, wird das Promise von `setRemoteDescription()` abgelehnt. Wenn keine Zielpeer-Identität vorhanden ist, muss `setRemoteDescription()` nicht auf die Validierung warten, bevor es aufgelöst wird.

## Beispiele

In diesem Beispiel wird eine Funktion `getIdentityAssertion()` erstellt, die asynchron wartet, bis die Identität des Peers verifiziert ist, und dann die Identität an den Aufrufer zurückgibt. Tritt ein Fehler auf und das Promise wird abgelehnt, wird dieser Fehler in der Konsole protokolliert und `null` an den Aufrufer zurückgegeben.

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
