---
title: "NavigationActivation: from-Eigenschaft"
short-title: from
slug: Web/API/NavigationActivation/from
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`from`**-Eigenschaft der {{domxref("NavigationActivation")}}-Schnittstelle enthält ein {{domxref("NavigationHistoryEntry")}}-Objekt, das den Verlaufseintrag für das ausgehende („from“) Dokument in der Navigation darstellt.

## Wert

Ein {{domxref("NavigationHistoryEntry")}}-Objekt oder `null`, wenn das ausgehende Dokument:

- Nicht gleichen Ursprungs wie das eingehende Dokument ist.
- Das initiale `about:blank`-Dokument ist.

## Beispiele

Siehe die Hauptseite der {{domxref("NavigationActivation")}}.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Navigation API](/de/docs/Web/API/Navigation_API)
- [View Transitions API](/de/docs/Web/API/View_Transitions_API)
