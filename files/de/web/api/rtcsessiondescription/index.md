---
title: RTCSessionBeschreibung
slug: Web/API/RTCSessionDescription
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebRTC")}}

Die **`RTCSessionDescription`**-Schnittstelle beschreibt eine Seite einer Verbindung—oder potenziellen Verbindung—und wie sie konfiguriert ist. Jede `RTCSessionDescription` besteht aus einer Beschreibung {{domxref("RTCSessionDescription.type", "type")}}, die angibt, welchen Teil des Angebots-/Antwort-Verhandlungsprozesses sie beschreibt, und aus dem {{Glossary("SDP")}}-Deskriptor der Sitzung.

Der Prozess der Verhandlung einer Verbindung zwischen zwei Teilnehmern beinhaltet den Austausch von `RTCSessionDescription`-Objekten hin und her, wobei jede Beschreibung eine Kombination von Verbindungskonfigurationsoptionen vorschlägt, die der Absender der Beschreibung unterstützt. Sobald sich die beiden Teilnehmer auf eine Konfiguration für die Verbindung geeinigt haben, ist die Verhandlung abgeschlossen.

## Instanzeigenschaften

_Die `RTCSessionDescription`-Schnittstelle erbt keine Eigenschaften._

- {{domxref("RTCSessionDescription.type")}} {{ReadOnlyInline}}
  - : Ein Enum, das den Typ der Sitzungsbeschreibung beschreibt.
- {{domxref("RTCSessionDescription.sdp")}} {{ReadOnlyInline}}
  - : Eine Zeichenkette, die das {{Glossary("SDP")}} beschreibt, das die Sitzung beschreibt.

## Instanzmethoden

_Die `RTCSessionDescription` erbt keine Methoden._

- {{domxref("RTCSessionDescription.RTCSessionDescription", "RTCSessionDescription()")}} {{deprecated_inline}}
  - : Dieser Konstruktor gibt eine neue `RTCSessionDescription` zurück. Der Parameter ist ein `RTCSessionDescriptionInit`-Dictionary, das die Werte zur Zuweisung der beiden Eigenschaften enthält.
- {{domxref("RTCSessionDescription.toJSON()")}}
  - : Gibt eine {{Glossary("JSON")}}-Beschreibung des Objekts zurück. Die Werte beider Eigenschaften, {{domxref("RTCSessionDescription.type", "type")}} und {{domxref("RTCSessionDescription.sdp", "sdp")}}, sind im erzeugten JSON enthalten.

## Beispiel

```js
signalingChannel.onmessage = (evt) => {
  if (!pc) start(false);

  const message = JSON.parse(evt.data);
  if (message.sdp) {
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

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection.setLocalDescription()")}} und {{domxref("RTCPeerConnection.setRemoteDescription()")}}
