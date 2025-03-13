---
title: "Permissions-Policy: cross-origin-isolated"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/cross-origin-isolated
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `cross-origin-isolated` steuert, ob das aktuelle Dokument APIs verwenden darf, die [cross-origin isolation](/de/docs/Web/API/Window/crossOriginIsolated) erfordern.

Konkret wird, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert, die Eigenschaft [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) immer `false` zurückgeben, und das Dokument profitiert nicht von reduzierten Beschränkungen bei der Nutzung einiger APIs, die nur Dokumenten mit cross-origin isolation gewährt werden. Dies gilt unabhängig von den {{HTTPHeader("Cross-Origin-Embedder-Policy")}} und {{HTTPHeader("Cross-Origin-Opener-Policy")}} Headern, und ob das Dokument cross-origin isoliert gewesen wäre, wenn die Erlaubnis erteilt worden wäre.

Die APIs, die diese Berechtigung erfordern, umfassen die Verwendung von {{jsxref("SharedArrayBuffer")}} Objekten und [`Performance.now()`](/de/docs/Web/API/Performance/now) mit nicht gedrosselten Timern — siehe [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) für Informationen über andere eingeschränkte APIs.

Die Berechtigung kann verwendet werden, um Einschränkungen für den Zugriff auf die sensiblen APIs aufrechtzuerhalten, es sei denn, sie werden tatsächlich von einem cross-origin isolierten Dokument benötigt. Beachten Sie, dass, wenn das Feature nicht erlaubt ist, es ansonsten jedoch cross-origin isoliert gewesen wäre, es in allen anderen Aspekten immer noch cross-origin isoliert ist. Zum Beispiel wird es nur eine {{Glossary("Browsing_context", "Browsing-Kontext-Gruppe")}} mit Dokumenten im selben Ursprung teilen.

## Syntax

```http
Permissions-Policy: cross-origin-isolated=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von einem oder mehreren Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Allowed-Liste für `cross-origin-isolated` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
