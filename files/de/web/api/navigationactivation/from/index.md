---
title: "NavigationActivation: from-Eigenschaft"
short-title: from
slug: Web/API/NavigationActivation/from
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte **`from`**-Eigenschaft der [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Schnittstelle enthält ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekt, das den Verlaufseintrag für das ausgehende ("von") Dokument in der Navigation darstellt.

## Wert

Ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekt oder `null`, wenn das ausgehende Dokument:

- Nicht vom gleichen Ursprung wie das eingehende Dokument ist.
- Das anfängliche `about:blank`-Dokument ist.

## Beispiele

Siehe die Hauptseite zu [`NavigationActivation`](/de/docs/Web/API/NavigationActivation).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Navigation API](/de/docs/Web/API/Navigation_API)
- [View Transition API](/de/docs/Web/API/View_Transition_API)
