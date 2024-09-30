---
title: "Window: performance-Eigenschaft"
short-title: performance
slug: Web/API/Window/performance
l10n:
  sourceCommit: 54962bbd1d367115cfd01b4e1ba6b552e8b68eb7
---

{{APIRef("Performance API")}}

Die **`performance`**-Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt ein [`Performance`](/de/docs/Web/API/Performance)-Objekt zurück, das verwendet werden kann, um Leistungsinformationen über Code zu sammeln, der im Kontext des Fensters ausgeführt wird.

Leistungseinträge sind kontextspezifisch. Wenn Sie eine Markierung im Haupt-Thread (oder einem anderen Worker) erstellen, können Sie diese in einem Worker-Thread nicht sehen und umgekehrt.

## Wert

Ein [`Performance`](/de/docs/Web/API/Performance)-Objekt, das Zugriff auf leistungs- und zeitbezogene Informationen über Code bietet, der im Kontext des Fensters ausgeführt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WorkerGlobalScope.performance`](/de/docs/Web/API/WorkerGlobalScope/performance)
