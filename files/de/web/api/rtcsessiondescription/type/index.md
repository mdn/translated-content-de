---
title: "RTCSessionDescription: type Eigenschaft"
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
  - : Das in der [`sdp`](/de/docs/Web/API/RTCSessionDescription/sdp) Eigenschaft enthaltene SDP ist die endgültige Wahl im Austausch. Mit anderen Worten beschreibt diese Sitzungsbeschreibung die vereinbarte Konfiguration und wird gesendet, um die Verhandlung abzuschließen.
- `"offer"`
  - : Das Sitzungsbeschreibungsobjekt beschreibt den ersten Vorschlag in einem Angebot/Antwort-Austausch. Der Verhandlungsprozess der Sitzung beginnt mit einem Angebot, das vom Anrufer an den Angerufenen gesendet wird.
- `"pranswer"`
  - : Das Sitzungsbeschreibungsobjekt beschreibt eine vorläufige Antwort; das heißt, eine Antwort auf ein vorheriges Angebot, die nicht die endgültige Antwort ist. Sie wird in der Regel von älteren Geräten verwendet.
- `"rollback"`
  - : Dieser spezielle Typ mit einer leeren Sitzungsbeschreibung wird verwendet, um zum vorherigen stabilen Zustand zurückzukehren.

## Beispiel

```js
// The remote description has been set previously on pc, a RTCPeerConnection

alert(pc.remoteDescription.type);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
