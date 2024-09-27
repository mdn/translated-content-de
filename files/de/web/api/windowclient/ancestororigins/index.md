---
title: "WindowClient: ancestorOrigins-Eigenschaft"
short-title: ancestorOrigins
slug: Web/API/WindowClient/ancestorOrigins
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`ancestorOrigins`**-Schreibeigenschaft des [`WindowClient`](/de/docs/Web/API/WindowClient)-Interfaces ist ein Array von Zeichenfolgen, das die Ursprünge aller Vorfahren des durch diesen `WindowClient` dargestellten Browsing-Kontexts in umgekehrter Reihenfolge auflistet.

Das erste Element im Array ist der Ursprung des Elternfensters, und das letzte Element ist der Ursprung des Browsing-Kontexts der obersten Ebene. Wenn dieses Fenster selbst ein Browsing-Kontext der obersten Ebene ist, dann ist `ancestorOrigins` ein leeres Array.

## Wert

Ein Array von Zeichenfolgen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
