---
title: "RTCError: sdpLineNumber-Eigenschaft"
short-title: sdpLineNumber
slug: Web/API/RTCError/sdpLineNumber
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`sdpLineNumber`** der [`RTCError`](/de/docs/Web/API/RTCError)-Schnittstelle gibt die Zeilennummer innerhalb des [SDP](/de/docs/Glossary/SDP) an, bei der ein Syntaxfehler beim Parsen aufgetreten ist.

## Wert

Ein unsignierter Ganzzahlenwert, der die Zeile innerhalb des SDP angibt, in der der durch das `RTCError`-Objekt beschriebene Syntaxfehler auftrat. Die Zeilen werden beginnend mit Zeile 1 nummeriert.

Diese Eigenschaft ist `null`, es sei denn, der Wert von [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) ist `sdp-syntax-error`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
