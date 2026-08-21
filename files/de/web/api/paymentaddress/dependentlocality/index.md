---
title: "PaymentAddress: dependentLocality-Eigenschaft"
short-title: dependentLocality
slug: Web/API/PaymentAddress/dependentLocality
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Payment Request API")}}{{SecureContext_Header}}{{Non-standard_Header}}

Die schreibgeschützte **`dependentLocality`**-Eigenschaft der [`PaymentAddress`](/de/docs/Web/API/PaymentAddress)-Schnittstelle ist ein Zeichenfolgenwert, der eine Unterlokalitätsbezeichnung innerhalb einer Stadt enthält, wie z.B. ein Stadtteil, Bezirk, Distrikt oder im Vereinigten Königreich eine anhängige Örtlichkeit. Auch bekannt als ein _Post town_.

## Wert

Eine Zeichenkette, die den Unterlokalitätsteil der Adresse angibt. Dies kann eine leere Zeichenfolge sein, wenn keine Unterlokalität verfügbar oder erforderlich ist. Es wird verwendet, um Klarheit zu schaffen, wenn eine Stadt Bereiche mit identischen Straßennamen enthält.

Eine Unterlokalität ist ein Bereich innerhalb einer Stadt, wie z.B. ein Stadtteil, Bezirk oder Distrikt. Im Vereinigten Königreich wird dies verwendet, um die **Post town** anzugeben (offiziell von Royal Mail als **dependent locality** bekannt). Dies ist ein Merkmal zur eindeutigen Identifikation von Adressen in Orten, in denen eine Stadt Bereiche mit identischen Straßennamen haben kann.

## Browser-Kompatibilität

{{Compat}}
