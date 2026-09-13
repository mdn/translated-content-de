---
title: "RTCSessionDescription: RTCSessionDescription() Konstruktor"
short-title: RTCSessionDescription()
slug: Web/API/RTCSessionDescription/RTCSessionDescription
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebRTC")}}

Der **`RTCSessionDescription()`** Konstruktor erstellt eine neue
[`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) mit seinen Eigenschaften, die entsprechend dem angegebenen Objekt initialisiert sind.

> [!NOTE]
> Dieser Konstruktor wurde als veraltet erklärt, da
> [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) und andere Methoden, die SDP als Eingabe nehmen, nun direkt ein Objekt akzeptieren, das die Eigenschaften [`type`](/de/docs/Web/API/RTCSessionDescription/type) und [`sdp`](/de/docs/Web/API/RTCSessionDescription/sdp) enthält. Sie müssen also keine `RTCSessionDescription` selbst instanziieren.

## Syntax

```js-nolint
new RTCSessionDescription(options)
```

### Werte

- `options`
  - : Ein Objekt, das die Standardwerte für die Sitzungsbeschreibung bereitstellt. Es sollte die folgenden Eigenschaften enthalten:
    - `type`
      - : **Erforderlich.** Ein String, der verwendet wird, um die `type` Eigenschaft des neuen `RTCSessionDescription` Objekts festzulegen. Muss einer der gültigen [`RTCSessionDescription.type`](/de/docs/Web/API/RTCSessionDescription/type) Werte sein.
    - `sdp` {{optional_inline}}
      - : Ein String, der eine {{Glossary("SDP", "SDP")}} Nachricht beschreibt, die die Sitzung beschreibt. Dieser Wert ist standardmäßig ein leerer String (`""`) und darf nicht `null` sein.

## Beispiel

Dieses Beispiel verwendet den Konstruktor, um ein SDP-Angebot in ein
`RTCSessionDescription` Objekt zu konvertieren.

> [!NOTE]
> Dies ist jedoch nicht mehr notwendig;
> [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) und andere Methoden, die SDP als Eingabe nehmen, akzeptieren nun direkt einfache Objekte, sodass Sie keine `RTCSessionDescription` selbst instanziieren müssen.

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

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)
