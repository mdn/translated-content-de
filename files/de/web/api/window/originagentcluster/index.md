---
title: "Window: originAgentCluster-Eigenschaft"
short-title: originAgentCluster
slug: Web/API/Window/originAgentCluster
l10n:
  sourceCommit: ff4efaf7c02da2c945ecedb3752a9b503da8854b
---

{{APIRef}}{{SeeCompatTable}}

Die **`originAgentCluster`** schreibgeschützte Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt `true` zurück, wenn dieses Fenster zu einem _ursprungsbezogenen [Agenten-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ gehört: Dies bedeutet, dass das Betriebssystem diesem Ursprungsfenster dedizierte Ressourcen zugewiesen hat (z.B. einen Betriebssystemprozess), die nicht mit Fenstern anderer Ursprünge geteilt werden.

Andernfalls gibt diese Eigenschaft `false` zurück.

Fenster, die Teil eines ursprungsbezogenen Agenten-Clusters sind, unterliegen im Vergleich zu Fenstern, die es nicht sind, einigen zusätzlichen Einschränkungen. Insbesondere können sie nicht:

- [`Document.domain`](/de/docs/Web/API/Document/domain) festlegen, was ein veraltetes Feature ist, das normalerweise erlaubt, dass gleichseitige, ursprungsübergreifende Seiten synchron auf die DOMs der anderen zugreifen.
- [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekte über [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) an andere gleichseitige ursprungsübergreifende Seiten senden.
- {{jsxref("SharedArrayBuffer")}} oder [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Objekte an andere gleichseitige ursprungsübergreifende Seiten senden.

Um zu verlangen, dass der Browser dieses Fenster einem ursprungsbezogenen Agenten-Cluster zuweist, muss der Server das {{httpheader("Origin-Agent-Cluster")}} Antwortheader senden.

Beachten Sie, dass das Feature des ursprungsbezogenen Agenten-Clusters nur in {{Glossary("Secure_Context", "sicheren Kontexten")}} unterstützt wird. Wenn eine Seite kein sicherer Kontext ist, wird `window.originAgentCluster` immer `false` zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("Origin-Agent-Cluster")}} HTTP-Antwortheader
- [Anfrage nach Leistungsisolation mit dem Origin-Agent-Cluster-Header](https://web.dev/articles/origin-agent-cluster)
