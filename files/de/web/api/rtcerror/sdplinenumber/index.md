---
title: "RTCError: sdpLineNumber-Eigenschaft"
short-title: sdpLineNumber
slug: Web/API/RTCError/sdpLineNumber
l10n:
  sourceCommit: ca5cf1046e4619808440e4505d9fa579a1309ead
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`sdpLineNumber`** des [`RTCError`](/de/docs/Web/API/RTCError)-Interfaces gibt die Zeilennummer innerhalb des {{Glossary("SDP", "SDP")}} an, an der ein Syntaxfehler beim Parsen aufgetreten ist.

## Wert

Ein vorzeichenloser Ganzzahlwert, der die Zeile innerhalb des SDP angibt, an der der durch das `RTCError`-Objekt beschriebene Syntaxfehler auftrat. Die Zeilen sind ab Zeile 1 nummeriert.

Diese Eigenschaft ist `null`, es sei denn, der Wert von [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) ist `sdp-syntax-error`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
