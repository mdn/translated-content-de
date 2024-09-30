---
title: "MediaKeySession: expiration-Eigenschaft"
short-title: expiration
slug: Web/API/MediaKeySession/expiration
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`expiration`** schreibgeschützte Eigenschaft des [`MediaKeySession`](/de/docs/Web/API/MediaKeySession)-Interfaces gibt die Zeit zurück, nach der die Schlüssel in der aktuellen Sitzung nicht mehr zur Entschlüsselung von Mediendaten verwendet werden können, oder NaN, wenn keine solche Zeit existiert.

Dieser Wert wird vom CDM bestimmt und in Millisekunden seit dem 1. Januar 1970, UTC, gemessen. Dieser Wert kann sich während der Lebensdauer einer Sitzung ändern, z. B. wenn eine Aktion das Starten eines Fensters auslöst.

## Wert

Eine Zahl oder NaN.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
