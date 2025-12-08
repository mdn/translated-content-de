---
title: "NavigationActivation: from Eigenschaft"
short-title: from
slug: Web/API/NavigationActivation/from
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die schreibgeschützte **`from`** Eigenschaft des [`NavigationActivation`](/de/docs/Web/API/NavigationActivation) Interfaces enthält ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) Objekt, das den Verlaufseintrag für das ausgehende ("from") Dokument in der Navigation darstellt.

## Wert

Ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) Objekt oder `null`, wenn das ausgehende Dokument:

- Nicht gleichen Ursprungs wie das eingehende Dokument ist.
- Das initiale `about:blank` Dokument ist.

## Beispiele

Siehe die Hauptseite der [`NavigationActivation`](/de/docs/Web/API/NavigationActivation).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Navigation API](/de/docs/Web/API/Navigation_API)
- [View Transition API](/de/docs/Web/API/View_Transition_API)
