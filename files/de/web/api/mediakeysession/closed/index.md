---
title: "MediaKeySession: closed-Eigenschaft"
short-title: closed
slug: Web/API/MediaKeySession/closed
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die schreibgeschützte **`closed`**-Eigenschaft des [`MediaKeySession`](/de/docs/Web/API/MediaKeySession)-Interfaces gibt ein {{jsxref('Promise')}} zurück, das signalisiert, wann eine [`MediaKeySession`](/de/docs/Web/API/MediaKeySession) geschlossen wird. Dieses Versprechen kann nur erfüllt und niemals abgelehnt werden. Das Schließen einer Sitzung bedeutet, dass Lizenzen und Schlüssel, die mit ihr verbunden sind, nicht mehr zum Entschlüsseln von Mediendaten gültig sind.

## Wert

Ein {{jsxref("Promise")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
