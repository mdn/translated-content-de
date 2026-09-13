---
title: "RTCError: sdpLineNumber Eigenschaft"
short-title: sdpLineNumber
slug: Web/API/RTCError/sdpLineNumber
l10n:
  sourceCommit: 581220b4299dd4c44544f7c200440129067a9d9d
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`sdpLineNumber`** schreibgeschützte Eigenschaft der [`RTCError`](/de/docs/Web/API/RTCError)-Schnittstelle gibt die Zeilennummer der {{Glossary("SDP", "SDP")}}-Nachricht an, in der ein Syntaxfehler aufgetreten ist.

## Wert

Ein ganzzahliger Wert, der die Zeilennummer der SDP-Nachricht angibt, in der der vom `RTCError`-Objekt beschriebene Syntaxfehler aufgetreten ist. Die Zeilen sind beginnend mit Zeile 1 durchnummeriert.

Diese Eigenschaft ist `null`, sofern der Wert von [`errorDetail`](/de/docs/Web/API/RTCError/errorDetail) nicht `sdp-syntax-error` ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
