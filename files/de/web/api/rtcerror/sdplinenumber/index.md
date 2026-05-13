---
title: "RTCError: sdpLineNumber-Eigenschaft"
short-title: sdpLineNumber
slug: Web/API/RTCError/sdpLineNumber
l10n:
  sourceCommit: e7f93b8ebd8b26bd6fae71f7b0b6214a671a4ef9
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`sdpLineNumber`** des [`RTCError`](/de/docs/Web/API/RTCError)-Interfaces gibt die Zeilennummer der {{Glossary("SDP", "SDP")}}-Nachricht an, bei der ein Syntaxfehler aufgetreten ist.

## Wert

Ein ganzzahliger Wert, der die Zeilennummer der SDP-Nachricht angibt, bei der der Syntaxfehler, der durch das `RTCError`-Objekt beschrieben wird, aufgetreten ist. Die Zeilen werden beginnend mit Zeile 1 nummeriert.

Diese Eigenschaft ist `null`, es sei denn, der Wert von [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) ist `sdp-syntax-error`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
