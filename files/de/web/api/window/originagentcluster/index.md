---
title: "Window: originAgentCluster-Eigenschaft"
short-title: originAgentCluster
slug: Web/API/Window/originAgentCluster
l10n:
  sourceCommit: 43f272adb6ac15537cff3728c78ddf234485fff8
---

{{APIRef}}

Die **`originAgentCluster`** schreibgeschützte Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt `true` zurück, wenn dieses Fenster zu einem _originbasierten [Agenten-Cluster](https://tc39.es/ecma262/#sec-agent-clusters)_ gehört: Das bedeutet, dass das Betriebssystem diesem Fenster eigene Ressourcen (z. B. einen Prozess des Betriebssystems) zugewiesen hat, die nicht mit Fenstern anderer Ursprünge geteilt werden.

Andernfalls gibt diese Eigenschaft `false` zurück.

Fenster, die Teil eines origin-basierten Agenten-Clusters sind, unterliegen im Vergleich zu Fenstern, die dies nicht sind, einigen zusätzlichen Einschränkungen. Insbesondere können sie nicht:

- [`Document.domain`](/de/docs/Web/API/Document/domain) setzen, was ein veraltetes Feature ist, das normalerweise ermöglicht, dass gleiche Seiten mit unterschiedlichen Ursprüngen synchron auf das DOM des anderen zugreifen.
- [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekte über [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) an andere gleichseitige Seiten mit unterschiedlichen Ursprüngen senden.
- {{jsxref("SharedArrayBuffer")}} oder [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekte an andere gleichseitige Seiten mit unterschiedlichen Ursprüngen senden.

Um den Browser zu bitten, diesem Fenster einen origin-basierten Agenten-Cluster zuzuweisen, muss der Server den {{httpheader("Origin-Agent-Cluster")}}-Antwortheader senden.

Beachten Sie, dass das origin-basierte Agenten-Cluster-Feature nur in {{Glossary("Secure_Context", "sicheren Kontexten")}} unterstützt wird. Wenn eine Seite kein sicherer Kontext ist, wird `window.originAgentCluster` immer `false` zurückgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("Origin-Agent-Cluster")}} HTTP-Antwortheader
- [Anfordern von Leistungsisolation mit dem Origin-Agent-Cluster-Header](https://web.dev/articles/origin-agent-cluster)
