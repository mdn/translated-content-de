---
title: RTCSessionDescription
slug: Web/API/RTCSessionDescription
l10n:
  sourceCommit: e1dc7af1b7a1743dc84e2584ecfce309a461c479
---

{{APIRef("WebRTC")}}

Die **`RTCSessionDescription`**-Schnittstelle beschreibt ein Ende einer Verbindung – oder einer potenziellen Verbindung – und wie diese konfiguriert ist. Jede `RTCSessionDescription` besteht aus einem Beschreibungs-[`type`](/de/docs/Web/API/RTCSessionDescription/type)-Parameter, der angibt, welchen Teil des Angebots-/Antwortverhandlungsprozesses sie beschreibt, und aus dem {{Glossary("SDP", "SDP")}}-Descriptor der Sitzung.

Der Prozess der Aushandlung einer Verbindung zwischen zwei Peers beinhaltet den Austausch von `RTCSessionDescription`-Objekten, wobei jede Beschreibung eine Kombination von Verbindungskonfigurationsoptionen vorschlägt, die der Absender der Beschreibung unterstützt. Sobald sich die beiden Peers auf eine Konfiguration der Verbindung geeinigt haben, ist die Verhandlung abgeschlossen.

## Konstruktor

- [`RTCSessionDescription()`](/de/docs/Web/API/RTCSessionDescription/RTCSessionDescription) {{deprecated_inline}}
  - : Erstellt eine neue `RTCSessionDescription`, indem der `type` und `sdp` angegeben werden. Alle Methoden, die `RTCSessionDescription`-Objekte akzeptieren, akzeptieren auch Objekte mit denselben Eigenschaften, sodass Sie statt der Erstellung einer `RTCSessionDescription`-Instanz ein einfaches Objekt verwenden können.

## Instanzeigenschaften

_Die `RTCSessionDescription`-Schnittstelle erbt keine Eigenschaften._

- [`RTCSessionDescription.type`](/de/docs/Web/API/RTCSessionDescription/type) {{ReadOnlyInline}}
  - : Ein Enum, das den Typ der Sitzungsbeschreibung beschreibt.
- [`RTCSessionDescription.sdp`](/de/docs/Web/API/RTCSessionDescription/sdp) {{ReadOnlyInline}}
  - : Ein String, der die {{Glossary("SDP", "SDP")}} beschreibt, die die Sitzung beschreibt.

## Instanzmethoden

_Die `RTCSessionDescription`-Schnittstelle erbt keine Methoden._

- [`RTCSessionDescription.toJSON()`](/de/docs/Web/API/RTCSessionDescription/toJSON)
  - : Gibt eine {{Glossary("JSON", "JSON")}}-Beschreibung des Objekts zurück. Die Werte beider Eigenschaften, [`type`](/de/docs/Web/API/RTCSessionDescription/type) und [`sdp`](/de/docs/Web/API/RTCSessionDescription/sdp), sind im generierten JSON enthalten.

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
