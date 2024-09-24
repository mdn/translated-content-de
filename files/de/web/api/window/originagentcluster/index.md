---
title: "Fenster: originAgentCluster-Eigenschaft"
short-title: originAgentCluster
slug: Web/API/Window/originAgentCluster
l10n:
  sourceCommit: ff4efaf7c02da2c945ecedb3752a9b503da8854b
---

{{APIRef}}{{SeeCompatTable}}

Die **`originAgentCluster`** Leseeigenschaft der {{domxref("Window")}}-Schnittstelle gibt `true` zurück, wenn dieses Fenster zu einem _origin-spezifischen [Agent-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ gehört: Das bedeutet, dass das Betriebssystem diesem Fenster dedizierte Ressourcen (zum Beispiel einen Betriebssystemprozess) zur Verfügung gestellt hat, die nicht mit Fenstern anderer Ursprünge geteilt werden.

Andernfalls gibt diese Eigenschaft `false` zurück.

Fenster, die Teil eines origin-spezifischen Agent-Clusters sind, unterliegen einigen zusätzlichen Beschränkungen im Vergleich zu Fenstern, die dies nicht sind. Insbesondere können sie nicht:

- {{domxref("Document.domain")}} setzen, was ein veraltetes Feature ist, das normalerweise ermöglicht, dass Seiten desselben Standorts aber unterschiedlichen Ursprungs synchron aufeinander zugreifen können.
- [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekte über {{domxref("Window.postMessage()")}} an andere Seiten desselben Standorts, aber unterschiedlichen Ursprungs senden.
- {{jsxref("SharedArrayBuffer")}} oder [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Objekte an andere Seiten desselben Standorts, aber unterschiedlichen Ursprungs senden.

Um zu beantragen, dass der Browser dieses Fenster einem origin-spezifischen Agent-Cluster zuordnet, muss der Server den {{httpheader("Origin-Agent-Cluster")}}-Antwort-Header senden.

Beachten Sie, dass das Feature des origin-spezifischen Agent-Clusters nur in {{glossary("Secure Context", "sicheren Kontexten")}} unterstützt wird. Wenn eine Seite kein sicherer Kontext ist, wird `window.originAgentCluster` immer `false` zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("Origin-Agent-Cluster")}} HTTP-Antwort-Header
- [Anfordern von Leistungsisolation mit dem Origin-Agent-Cluster-Header](https://web.dev/articles/origin-agent-cluster)
