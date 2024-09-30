---
title: "WindowClient: `ancestorOrigins`-Eigenschaft"
short-title: ancestorOrigins
slug: Web/API/WindowClient/ancestorOrigins
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die schreibgeschützte Eigenschaft **`ancestorOrigins`** der [`WindowClient`](/de/docs/Web/API/WindowClient)-Schnittstelle ist ein Array von Zeichenfolgen, die die Ursprünge aller Vorfahren des durch diesen `WindowClient` dargestellten Browsing-Kontexts in umgekehrter Reihenfolge auflisten.

Das erste Element im Array ist der Ursprung des Elternfensters, und das letzte Element ist der Ursprung des obersten Browsing-Kontexts. Wenn dieses Fenster selbst ein oberster Browsing-Kontext ist, dann ist `ancestorOrigins` ein leeres Array.

## Wert

Ein Array von Zeichenfolgen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
