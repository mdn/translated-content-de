---
title: "Window: Eigenschaft originAgentCluster"
short-title: originAgentCluster
slug: Web/API/Window/originAgentCluster
l10n:
  sourceCommit: 43bd841296433b2c1adb8fa9d819212f86b37358
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`originAgentCluster`** der Schnittstelle [`Window`](/de/docs/Web/API/Window) gibt `true` zurück, wenn dieses Fenster zu einem _nach Origin getrennten [Agent-Cluster](/de/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing)_ gehört. Das bedeutet, dass das Betriebssystem der Origin dieses Fensters dedizierte Ressourcen (beispielsweise einen Betriebssystemprozess) bereitgestellt hat, die nicht mit Fenstern anderer Origins geteilt werden.

Andernfalls gibt diese Eigenschaft `false` zurück.

Für Fenster, die zu einem nach Origin getrennten Agent-Cluster gehören, gelten im Vergleich zu anderen Fenstern zusätzliche Einschränkungen. Insbesondere können sie Folgendes nicht:

- [`Document.domain`](/de/docs/Web/API/Document/domain) setzen. Dies ist eine ältere Funktion, die es Same-Site-Seiten mit unterschiedlichen Origins normalerweise ermöglicht, synchron auf das DOM der jeweils anderen Seite zuzugreifen.
- [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekte über [`Window.postMessage()`](/de/docs/Web/API/Window/postMessage) an Same-Site-Seiten mit anderen Origins senden.
- {{jsxref("SharedArrayBuffer")}}- oder [`WebAssembly.Memory`](/de/docs/WebAssembly/Reference/JavaScript_interface/Memory)-Objekte an Same-Site-Seiten mit anderen Origins senden.

Um anzufordern, dass der Browser dieses Fenster einem nach Origin getrennten Agent-Cluster zuordnet, verwenden Sie den HTTP-Antwortheader {{httpheader("Origin-Agent-Cluster")}}.

Beachten Sie, dass die Funktion für nach Origin getrennte Agent-Cluster nur in {{Glossary("Secure_Context", "sicheren Kontexten")}} unterstützt wird. Wenn eine Website keinen sicheren Kontext verwendet, gibt `window.originAgentCluster` immer `false` zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTTP-Antwortheader {{httpheader("Origin-Agent-Cluster")}}
- [Leistungsisolierung mit dem Origin-Agent-Cluster-Header anfordern](https://web.dev/articles/origin-agent-cluster)
