---
title: "WindowClient: ancestorOrigins-Eigenschaft"
short-title: ancestorOrigins
slug: Web/API/WindowClient/ancestorOrigins
l10n:
  sourceCommit: de2e44940354cad9d1922026f5020751919725b8
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die schreibgeschützte **`ancestorOrigins`**-Eigenschaft des [`WindowClient`](/de/docs/Web/API/WindowClient)-Interface ist ein Array von Zeichenfolgen, das die Ursprünge aller Vorgänger des Browsing-Kontexts, der durch diesen `WindowClient` dargestellt wird, in umgekehrter Reihenfolge auflistet.

Das erste Element im Array ist der Ursprung des Elternfensters und das letzte Element ist der Ursprung des Top-Level-Browsing-Kontexts. Wenn dieses Fenster selbst ein Top-Level-Browsing-Kontext ist, dann ist `ancestorOrigins` ein leeres Array.

> [!NOTE]
> Das [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/iframe#referrerpolicy)-Attribut eines eingebettenden `<iframe>` beeinflusst diese Liste. Das Setzen von `referrerpolicy` auf `no-referrer` oder auf `same-origin`, wenn das eingebettete Dokument cross-origin ist, entfernt den Ursprung des Dokuments, das das `<iframe>` enthält, von der `ancestorOrigins`-Liste des eingebetteten Dokuments. Der Ursprung wird durch einen opaken Ursprung ersetzt, der als `"null"` serialisiert wird.

## Wert

Ein Array von Zeichenfolgen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
