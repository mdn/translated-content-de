---
title: "MediaKeySession: Eigenschaft closed"
short-title: closed
slug: Web/API/MediaKeySession/closed
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`closed`** schreibgeschützte Eigenschaft der {{domxref('MediaKeySession')}}-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das signalisiert, wann eine {{domxref('MediaKeySession')}} geschlossen wird. Dieses Promise kann nur erfüllt werden und wird niemals abgelehnt. Das Schließen einer Sitzung bedeutet, dass Lizenzen und Schlüssel, die mit dieser Sitzung verbunden sind, nicht mehr gültig sind, um Mediendaten zu entschlüsseln.

## Wert

Ein {{jsxref("Promise")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
