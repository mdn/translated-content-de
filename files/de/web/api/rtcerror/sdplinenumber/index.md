---
title: "RTCError: sdpLineNumber-Eigenschaft"
short-title: sdpLineNumber
slug: Web/API/RTCError/sdpLineNumber
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`sdpLineNumber`** der Schnittstelle [`RTCError`](/de/docs/Web/API/RTCError) gibt die Zeilennummer innerhalb des {{Glossary("SDP", "SDP")}} an, bei der ein Syntaxfehler beim Parsen auftrat.

## Wert

Ein vorzeichenloser ganzzahliger Wert, der die Zeile innerhalb des SDP angibt, bei der der durch das `RTCError`-Objekt beschriebene Syntaxfehler aufgetreten ist. Die Zeilen sind beginnend mit Zeile 1 nummeriert.

Diese Eigenschaft ist `null`, es sei denn, der Wert von [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) ist `sdp-syntax-error`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
