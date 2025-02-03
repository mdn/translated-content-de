---
title: "RTCSessionDescription: type-Eigenschaft"
short-title: type
slug: Web/API/RTCSessionDescription/type
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("WebRTC")}}

Die Eigenschaft **`RTCSessionDescription.type`** ist ein schreibgeschützter
String-Wert, der den Typ der Beschreibung angibt.

## Wert

Die möglichen Werte sind:

- `"answer"`
  - : Das in der [`sdp`](/de/docs/Web/API/RTCSessionDescription/sdp)-Eigenschaft enthaltene SDP ist die endgültige Wahl im Austausch. Mit anderen Worten, diese Sitzungsbeschreibung beschreibt die vereinbarte Konfiguration und wird gesendet, um die Verhandlung abzuschließen.
- `"offer"`
  - : Das Sitzungsbeschreibungsobjekt beschreibt den ersten Vorschlag in einem Angebot/Antwort-Austausch. Der Sitzungsverhandlungsprozess beginnt mit einem Angebot, das vom Anrufer an den Angerufenen gesendet wird.
- `"pranswer"`
  - : Das Sitzungsbeschreibungsobjekt beschreibt eine vorläufige Antwort; also eine Antwort auf ein vorheriges Angebot, die nicht die endgültige Antwort darstellt. Sie wird üblicherweise von älterer Hardware verwendet.
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
