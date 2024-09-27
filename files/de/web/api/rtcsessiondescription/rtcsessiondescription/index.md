---
title: "RTCSessionDescription: RTCSessionDescription() Konstruktor"
short-title: RTCSessionDescription()
slug: Web/API/RTCSessionDescription/RTCSessionDescription
l10n:
  sourceCommit: b913cece0d35b5a7d1b5d3f4c628dcbbddfc7435
---

{{APIRef("WebRTC")}}{{deprecated_header}}

Der **`RTCSessionDescription()`** Konstruktor erstellt eine neue
[`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) mit ihren Eigenschaften, wie im angegebenen Objekt beschrieben, initialisiert.

> [!NOTE]
> Dieser Konstruktor wurde veraltet, da
> [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) und andere Methoden, die SDP als Eingabe akzeptieren, jetzt direkt ein Objekt mit den Eigenschaften [`type`](/de/docs/Web/API/RTCSessionDescription/type) und [`sdp`](/de/docs/Web/API/RTCSessionDescription/sdp) annehmen. Daher müssen Sie selbst keine `RTCSessionDescription` mehr instanziieren.

## Syntax

```js-nolint
new RTCSessionDescription(options)
```

### Werte

- `options`

  - : Ein Objekt, das die Standardwerte für die Sitzungsbeschreibung bereitstellt. Es sollte die folgenden Eigenschaften enthalten:

    - `type`
      - : **Erforderlich.** Ein Zeichenkette, die verwendet wird, um die `type`-Eigenschaft des neuen `RTCSessionDescription`-Objekts festzulegen. Muss einer der gültigen [`RTCSessionDescription.type`](/de/docs/Web/API/RTCSessionDescription/type) Werte sein.
    - `sdp` {{optional_inline}}
      - : Eine Zeichenkette, die eine [SDP](/de/docs/Glossary/SDP)-Nachricht beschreibt, die die Sitzung beschreibt. Dieser Wert ist standardmäßig eine leere Zeichenkette (`""`) und darf nicht `null` sein.

## Beispiel

Dieses Beispiel verwendet den Konstruktor, um ein SDP-Angebot in ein
`RTCSessionDescription`-Objekt umzuwandeln.

> [!NOTE]
> Dies ist jedoch nicht mehr notwendig;
> [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) und andere Methoden, die SDP als Eingabe akzeptieren, akzeptieren jetzt direkt einfache Objekte, sodass Sie selbst keine `RTCSessionDescription` mehr instanziieren müssen.

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
