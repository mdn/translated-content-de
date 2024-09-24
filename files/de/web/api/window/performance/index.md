---
title: "Window: performance-Eigenschaft"
short-title: performance
slug: Web/API/Window/performance
l10n:
  sourceCommit: 54962bbd1d367115cfd01b4e1ba6b552e8b68eb7
---

{{APIRef("Performance API")}}

Die **`performance`**-Eigenschaft der {{domxref("Window")}}-Schnittstelle gibt ein {{domxref("Performance")}}-Objekt zurück, das verwendet werden kann, um Leistungsinformationen über den im Fensterbereich laufenden Code zu sammeln.

Leistungseinträge sind kontextbezogen. Wenn Sie ein Markierung auf dem Hauptthread (oder einem anderen Worker) erstellen, können Sie es nicht in einem Worker-Thread sehen und umgekehrt.

## Wert

Ein {{domxref("Performance")}}-Objekt, das Zugriff auf leistungs- und zeitbezogene Informationen über den im Fensterbereich laufenden Code bietet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WorkerGlobalScope.performance")}}
