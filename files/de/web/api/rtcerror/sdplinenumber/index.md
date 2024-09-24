---
title: "RTCError: sdpLineNumber-Eigenschaft"
short-title: sdpLineNumber
slug: Web/API/RTCError/sdpLineNumber
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`sdpLineNumber`** des {{domxref("RTCError")}}-Interfaces gibt die Zeilennummer innerhalb des {{Glossary("SDP")}} an, an der beim Parsen ein Syntaxfehler aufgetreten ist.

## Wert

Ein nicht-negativer Ganzzahlenwert, der die Zeile innerhalb des SDP angibt, in der der im `RTCError`-Objekt beschriebene Syntaxfehler aufgetreten ist. Die Zeilen beginnen mit Nummer 1.

Diese Eigenschaft ist `null`, es sei denn, der Wert von {{domxref("RTCError.errorDetail", "errorDetail")}} ist `sdp-syntax-error`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
