---
title: RTCSessionDescription
slug: Web/API/RTCSessionDescription
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("WebRTC")}}

Die Schnittstelle **`RTCSessionDescription`** beschreibt eine Seite einer Verbindung – oder einer möglichen Verbindung – und ihre Konfiguration. Jede `RTCSessionDescription` besteht aus einem [`type`](/de/docs/Web/API/RTCSessionDescription/type), der angibt, welchen Teil des Offer/Answer-Aushandlungsprozesses sie beschreibt, und einem {{Glossary("SDP", "SDP")}}-Deskriptor der Sitzung.

Bei der Aushandlung einer Verbindung zwischen zwei Peers werden `RTCSessionDescription`-Objekte ausgetauscht. Jede Beschreibung schlägt dabei eine Kombination von Konfigurationsoptionen für die Verbindung vor, die der Absender unterstützt. Sobald sich die beiden Peers auf eine Konfiguration für die Verbindung geeinigt haben, ist die Aushandlung abgeschlossen.

## Konstruktor

- [`RTCSessionDescription()`](/de/docs/Web/API/RTCSessionDescription/RTCSessionDescription) {{deprecated_inline}}
  - : Erstellt eine neue `RTCSessionDescription` durch Angabe von `type` und `sdp`. Alle Methoden, die `RTCSessionDescription`-Objekte akzeptieren, akzeptieren auch Objekte mit denselben Eigenschaften. Daher können Sie statt einer `RTCSessionDescription`-Instanz ein einfaches Objekt verwenden.

## Instanzeigenschaften

_Die Schnittstelle `RTCSessionDescription` erbt keine Eigenschaften._

- [`RTCSessionDescription.type`](/de/docs/Web/API/RTCSessionDescription/type) {{ReadOnlyInline}}
  - : Ein Enum, das den Typ der Sitzungsbeschreibung angibt.
- [`RTCSessionDescription.sdp`](/de/docs/Web/API/RTCSessionDescription/sdp) {{ReadOnlyInline}}
  - : Eine Zeichenfolge mit dem {{Glossary("SDP", "SDP")}}, das die Sitzung beschreibt.

## Instanzmethoden

_Die Schnittstelle `RTCSessionDescription` erbt keine Methoden._

- [`RTCSessionDescription.toJSON()`](/de/docs/Web/API/RTCSessionDescription/toJSON)
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `RTCSessionDescription`-Objekt repräsentiert. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Beispiel

```js
signalingChannel.onmessage = (evt) => {
  if (!pc) start(false);

  const message = JSON.parse(evt.data);
  if (message.type && message.sdp) {
    pc.setRemoteDescription(
      new RTCSessionDescription(message),
      () => {
        // if we received an offer, we need to answer
        if (pc.remoteDescription.type === "offer") {
          pc.createAnswer(localDescCreated, logError);
        }
      },
      logError,
    );
  } else {
    pc.addIceCandidate(
      new RTCIceCandidate(message.candidate),
      () => {},
      logError,
    );
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) und [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription)
