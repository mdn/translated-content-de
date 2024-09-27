---
title: "Window: originAgentCluster Eigenschaft"
short-title: originAgentCluster
slug: Web/API/Window/originAgentCluster
l10n:
  sourceCommit: ff4efaf7c02da2c945ecedb3752a9b503da8854b
---

{{APIRef}}{{SeeCompatTable}}

Die **`originAgentCluster`** schreibgeschützte Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt `true` zurück, wenn dieses Fenster zu einem _origin-keyed [agent cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ gehört: Dies bedeutet, dass das Betriebssystem diesem Fenster dedizierte Ressourcen (z. B. einen Betriebssystemprozess) zugewiesen hat, die nicht mit Fenstern anderer Ursprünge geteilt werden.

Andernfalls gibt diese Eigenschaft `false` zurück.

Fenster, die Teil eines origin-keyed Agent-Clusters sind, unterliegen einigen zusätzlichen Einschränkungen im Vergleich zu Fenstern, die dies nicht sind. Insbesondere können sie nicht:

- [`Document.domain`](/de/docs/Web/API/Document/domain) setzen, eine veraltete Funktion, die normalerweise erlaubt, dass seitenübergreifende Seiten gleichen Ursprungs synchron auf die DOMs der anderen zugreifen.
- [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekte an andere seitenübergreifende Seiten gleichen Ursprungs über [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) senden.
- {{jsxref("SharedArrayBuffer")}} oder [`WebAssembly.Memory`](/de/docs/WebAssembly/JavaScript_interface/Memory)-Objekte an andere seitenübergreifende Seiten gleichen Ursprungs senden.

Um zu verlangen, dass der Browser dieses Fenster einem origin-keyed Agent-Cluster zuweist, muss der Server den {{httpheader("Origin-Agent-Cluster")}} Antwort-Header senden.

Beachten Sie, dass die Funktion des origin-keyed Agent-Clusters nur in [sicheren Kontexten](/de/docs/Glossary/Secure_Context) unterstützt wird. Wenn eine Site kein sicherer Kontext ist, wird `window.originAgentCluster` immer `false` zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("Origin-Agent-Cluster")}} HTTP-Antwort-Header
- [Anfordern von Leistungsisolation mit dem Origin-Agent-Cluster-Header](https://web.dev/articles/origin-agent-cluster)
