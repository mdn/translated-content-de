---
title: "NavigationActivation: from-Eigenschaft"
short-title: from
slug: Web/API/NavigationActivation/from
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`from`**-Eigenschaft der [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekt enthält, das den Verlaufseintrag für das ausgehende ("from") Dokument in der Navigation darstellt.

## Wert

Ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekt oder `null`, wenn das ausgehende Dokument:

- Nicht gleichen Ursprungs wie das eingehende Dokument ist.
- Das anfängliche `about:blank`-Dokument ist.

## Beispiele

Siehe die Hauptseite von [`NavigationActivation`](/de/docs/Web/API/NavigationActivation).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Navigation API](/de/docs/Web/API/Navigation_API)
- [View Transitions API](/de/docs/Web/API/View_Transitions_API)
