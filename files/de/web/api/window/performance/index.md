---
title: "Window: performance-Eigenschaft"
short-title: performance
slug: Web/API/Window/performance
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`performance`** der Schnittstelle [`Window`](/de/docs/Web/API/Window) gibt ein [`Performance`](/de/docs/Web/API/Performance)-Objekt zurück. Damit können Sie Leistungsinformationen über Code erfassen, der im Gültigkeitsbereich des Fensters ausgeführt wird.

Performance-Einträge gelten jeweils nur für ihren Kontext. Wenn Sie auf dem Haupt-Thread (oder in einem anderen Worker) eine Markierung erstellen, können Sie diese in einem Worker-Thread nicht sehen und umgekehrt.

## Wert

Ein [`Performance`](/de/docs/Web/API/Performance)-Objekt, das Zugriff auf Leistungs- und Zeitinformationen über Code bietet, der im Gültigkeitsbereich des Fensters ausgeführt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WorkerGlobalScope.performance`](/de/docs/Web/API/WorkerGlobalScope/performance)
