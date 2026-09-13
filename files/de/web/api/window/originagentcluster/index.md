---
title: "Window: originAgentCluster-Eigenschaft"
short-title: originAgentCluster
slug: Web/API/Window/originAgentCluster
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`originAgentCluster`**-Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt `true` zurück, wenn dieses Fenster zu einem _origin-gebundenen [Agent-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ gehört: Das bedeutet, dass das Betriebssystem diesem Fenster Ursprungs-spezifische Ressourcen (zum Beispiel einen Betriebssystemprozess) bereitgestellt hat, die nicht mit Fenstern anderer Ursprünge geteilt werden.

Andernfalls gibt diese Eigenschaft `false` zurück.

Fenster, die Teil eines origin-gebundenen Agent-Clusters sind, unterliegen im Vergleich zu Fenstern, die dies nicht sind, einigen zusätzlichen Beschränkungen. Insbesondere können sie nicht:

- [`Document.domain`](/de/docs/Web/API/Document/domain) festlegen, was ein veraltetes Feature ist, das normalerweise erlaubt, dass gleichseitige, verschiedene Ursprungsseiten synchron auf das DOM des anderen zugreifen können.
- [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekte zu anderen gleichseitigen, verschiedenen Ursprungsseiten über [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) senden.
- {{jsxref("SharedArrayBuffer")}} oder [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekte zu anderen gleichseitigen, verschiedenen Ursprungsseiten senden.

Um zu verlangen, dass der Browser dieses Fenster einem origin-gebundenen Agent-Cluster zuweist, muss der Server den {{httpheader("Origin-Agent-Cluster")}}-Antwort-Header senden.

Beachten Sie, dass die Funktion des origin-gebundenen Agent-Clusters nur in {{Glossary("Secure_Context", "sicheren Kontexten")}} unterstützt wird. Wenn eine Website kein sicherer Kontext ist, wird `window.originAgentCluster` immer `false` zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("Origin-Agent-Cluster")}} HTTP-Antwort-Header
- [Anfordern von Leistungsisolation mit dem Origin-Agent-Cluster-Header](https://web.dev/articles/origin-agent-cluster)
