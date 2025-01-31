---
title: "Window: originAgentCluster-Eigenschaft"
short-title: originAgentCluster
slug: Web/API/Window/originAgentCluster
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

{{APIRef}}{{SeeCompatTable}}

Die schreibgeschützte **`originAgentCluster`**-Eigenschaft der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt `true` zurück, wenn dieses Fenster zu einem ursprungsbezogenen _[Agenten-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ gehört: Das bedeutet, dass das Betriebssystem diesem Ursprung des Fensters dedizierte Ressourcen (z.B. einen Betriebssystemprozess) zur Verfügung gestellt hat, die nicht mit Fenstern von anderen Ursprüngen geteilt werden.

Andernfalls gibt diese Eigenschaft `false` zurück.

Fenster, die Teil eines ursprungsbezogenen Agenten-Clusters sind, unterliegen einigen zusätzlichen Einschränkungen im Vergleich zu Fenstern, die dies nicht sind. Insbesondere können sie nicht:

- [`Document.domain`](/de/docs/Web/API/Document/domain) setzen, was ein veraltetes Feature ist, das normalerweise erlaubt, dass seitenübergreifende Seiten desselben Ursprungs synchron auf das DOM des anderen zugreifen können.
- [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekte an andere seitenübergreifende Seiten desselben Ursprungs via [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) senden.
- {{jsxref("SharedArrayBuffer")}} oder [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekte an andere seitenübergreifende Seiten desselben Ursprungs senden.

Um zu verlangen, dass der Browser dieses Fenster einem ursprungsbezogenen Agenten-Cluster zuweist, muss der Server den {{httpheader("Origin-Agent-Cluster")}}-Antwortheader senden.

Beachten Sie, dass die Funktion des ursprungsbezogenen Agenten-Clusters nur in {{Glossary("Secure_Context", "sicheren Kontexten")}} unterstützt wird. Ist eine Seite kein sicherer Kontext, wird `window.originAgentCluster` immer `false` zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("Origin-Agent-Cluster")}} HTTP-Antwortheader
- [Anfordern von Leistungsisolation mit dem Origin-Agent-Cluster-Header](https://web.dev/articles/origin-agent-cluster)
