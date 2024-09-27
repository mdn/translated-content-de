---
title: "MediaKeySession: closed-Eigenschaft"
short-title: closed
slug: Web/API/MediaKeySession/closed
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`closed`** schreibgeschützte Eigenschaft des [`MediaKeySession`](/de/docs/Web/API/MediaKeySession)-Interfaces gibt ein {{jsxref('Promise')}} zurück, das signalisiert, wann eine [`MediaKeySession`](/de/docs/Web/API/MediaKeySession) geschlossen wird.
Dieses Promise kann nur erfüllt und wird nie abgelehnt.
Das Schließen einer Sitzung bedeutet, dass die damit verbundenen Lizenzen und Schlüssel nicht mehr gültig sind, um Mediendaten zu entschlüsseln.

## Wert

Ein {{jsxref("Promise")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
