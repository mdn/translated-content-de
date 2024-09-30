---
title: "NavigationActivation: from-Eigenschaft"
short-title: from
slug: Web/API/NavigationActivation/from
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`from`**-Schreibgeschützte-Eigenschaft des [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Interfaces enthält ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekt, das den Verlaufseintrag für das ausgehende ("from") Dokument in der Navigation darstellt.

## Wert

Ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekt oder `null`, wenn das ausgehende Dokument:

- Nicht demselben Ursprung wie das eingehende Dokument entstammt.
- Das initiale `about:blank` Dokument ist.

## Beispiele

Sehen Sie sich die Hauptseite des [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Navigation API](/de/docs/Web/API/Navigation_API)
- [View Transitions API](/de/docs/Web/API/View_Transitions_API)
