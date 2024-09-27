---
title: RTCSessionDescription
slug: Web/API/RTCSessionDescription
l10n:
  sourceCommit: b913cece0d35b5a7d1b5d3f4c628dcbbddfc7435
---

{{APIRef("WebRTC")}}

Die **`RTCSessionDescription`**-Schnittstelle beschreibt ein Ende einer Verbindung—oder einer möglichen Verbindung—und wie sie konfiguriert ist. Jede `RTCSessionDescription` besteht aus einem Beschreibungs-[`type`](/de/docs/Web/API/RTCSessionDescription/type), der angibt, welchen Teil des Offer/Answer-Aushandlungsprozesses sie beschreibt, und aus dem [SDP](/de/docs/Glossary/SDP)-Descriptor der Sitzung.

Der Prozess der Aushandlung einer Verbindung zwischen zwei Peers beinhaltet den Austausch von `RTCSessionDescription`-Objekten hin und her, wobei jede Beschreibung eine Kombination von Verbindungs-Konfigurationsoptionen vorschlägt, die der Sender der Beschreibung unterstützt. Sobald sich die beiden Peers auf eine Konfiguration für die Verbindung geeinigt haben, ist die Aushandlung abgeschlossen.

## Konstruktor

- [`RTCSessionDescription()`](/de/docs/Web/API/RTCSessionDescription/RTCSessionDescription) {{deprecated_inline}}
  - : Erstellt eine neue `RTCSessionDescription` durch Angabe von `type` und `sdp`. Alle Methoden, die `RTCSessionDescription`-Objekte akzeptieren, akzeptieren auch Objekte mit denselben Eigenschaften, sodass Sie ein einfaches Objekt anstelle einer `RTCSessionDescription`-Instanz verwenden können.

## Instanz-Eigenschaften

_Die `RTCSessionDescription`-Schnittstelle erbt keine Eigenschaften._

- [`RTCSessionDescription.type`](/de/docs/Web/API/RTCSessionDescription/type) {{ReadOnlyInline}}
  - : Ein Enum, der den Typ der Sitzungsbeschreibung beschreibt.
- [`RTCSessionDescription.sdp`](/de/docs/Web/API/RTCSessionDescription/sdp) {{ReadOnlyInline}}
  - : Ein String, der das [SDP](/de/docs/Glossary/SDP) beschreibt, das die Sitzung beschreibt.

## Instanz-Methoden

_Die `RTCSessionDescription` erbt keine Methoden._

- [`RTCSessionDescription.toJSON()`](/de/docs/Web/API/RTCSessionDescription/toJSON)
  - : Gibt eine [JSON](/de/docs/Glossary/JSON)-Beschreibung des Objekts zurück. Die Werte beider Eigenschaften, [`type`](/de/docs/Web/API/RTCSessionDescription/type) und [`sdp`](/de/docs/Web/API/RTCSessionDescription/sdp), sind im erzeugten JSON enthalten.

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
