---
title: "RTCSessionDescription: type-Eigenschaft"
short-title: type
slug: Web/API/RTCSessionDescription/type
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("WebRTC")}}

Die Eigenschaft **`RTCSessionDescription.type`** ist ein schreibgeschützter
Zeichenfolgenwert, der den Typ der Beschreibung beschreibt.

## Syntax

```js-nolint
const value = sessionDescription.type
sessionDescription.type = value
```

### Wert

Die möglichen Werte sind:

- `"answer"`
  - : Der SDP, der in der {{domxref("RTCSessionDescription.sdp", "sdp")}} Eigenschaft enthalten ist, ist die endgültige Wahl im Austausch. Mit anderen Worten, diese Sitzungsbeschreibung beschreibt die vereinbarte Konfiguration und wird gesendet, um die Verhandlung abzuschließen.
- `"offer"`
  - : Das Sitzungsbeschreibungsobjekt beschreibt den anfänglichen Vorschlag in einem Angebot/Antwort-Austausch. Der Sitzungsverhandlungsprozess beginnt mit einem Angebot, das vom Anrufer an den Angerufenen gesendet wird.
- `"pranswer"`
  - : Das Sitzungsbeschreibungsobjekt beschreibt eine vorläufige Antwort; das heißt, eine Antwort auf ein vorheriges Angebot, die nicht die endgültige Antwort ist. Es wird normalerweise von älterer Hardware verwendet.
- `"rollback"`
  - : Dieser spezielle Typ mit einer leeren Sitzungsbeschreibung wird verwendet, um auf den vorherigen stabilen Zustand zurückzusetzen.

## Beispiel

```js
// Die Remote-Beschreibung wurde zuvor auf pc, einem RTCPeerConnection, gesetzt

alert(pc.remoteDescription.type);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
