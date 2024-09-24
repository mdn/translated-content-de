---
title: "RTCSessionDescription: RTCSessionDescription() Konstruktor"
short-title: RTCSessionDescription()
slug: Web/API/RTCSessionDescription/RTCSessionDescription
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}{{deprecated_header}}

Der **`RTCSessionDescription()`** Konstruktor erzeugt eine neue
{{domxref("RTCSessionDescription")}} mit ihren Eigenschaften, die wie im angegebenen Objekt beschrieben initialisiert werden.

> [!NOTE]
> Dieser Konstruktor wurde als veraltet eingestuft, da
> {{domxref("RTCPeerConnection.setLocalDescription()")}} und andere Methoden, die SDP als Eingabe akzeptieren, nun direkt ein Objekt akzeptieren, das dem
> `RTCSessionDescriptionInit`-Wörterbuch entspricht. Sie müssen also keine
> `RTCSessionDescription` selbst instanziieren.

## Syntax

```js-nolint
new RTCSessionDescription(options)
```

### Werte

- `options` {{optional_inline}}

  - : Ein Objekt, das die Standardwerte für die Sitzungsbeschreibung bereitstellt; das Objekt entspricht dem `RTCSessionDescriptionInit`-Wörterbuch. Dieses Wörterbuch hat die folgenden Eigenschaften:

    - `type`
      - : **Erforderlich.** Ein String, der verwendet wird, um die `type`-Eigenschaft des neuen `RTCSessionDescription`-Objekts festzulegen.
    - `sdp`
      - : Ein String, der eine {{Glossary("SDP")}}-Nachricht beschreibt. Dieser Wert ist standardmäßig ein leerer String (`""`) und darf nicht `null` sein.

## Beispiel

Dieses Beispiel verwendet den Konstruktor, um ein SDP-Angebot in ein
`RTCSessionDescription`-Objekt umzuwandeln.

> [!NOTE]
> Dies ist jedoch nicht mehr notwendig;
> {{domxref("RTCPeerConnection.setLocalDescription()")}} und andere Methoden, die SDP als Eingabe akzeptieren, akzeptieren nun direkt ein Objekt, das dem
> `RTCSessionDescriptionInit`-Wörterbuch entspricht, sodass Sie keine
> `RTCSessionDescription` selbst instanziieren müssen.

```js
navigator.getUserMedia({ video: true }, (stream) => {
  pc.onaddstream({ stream });
  // Adding a local stream won't trigger the onaddstream callback
  pc.addStream(stream);

  pc.createOffer((offer) => {
    pc.setLocalDescription(
      new RTCSessionDescription(offer),
      () => {
        // send the offer to a server to be forwarded to the friend you're calling.
      },
      error,
    );
  }, error);
});
```

## Spezifikationen

Dieses Feature ist Teil keiner aktuellen Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- {{domxref("RTCSessionDescription")}}
