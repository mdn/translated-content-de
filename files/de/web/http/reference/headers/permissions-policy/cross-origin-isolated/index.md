---
title: "Permissions-Policy: `cross-origin-isolated` Direktive"
short-title: cross-origin-isolated
slug: Web/HTTP/Reference/Headers/Permissions-Policy/cross-origin-isolated
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der `cross-origin-isolated` Direktive steuert, ob das aktuelle Dokument APIs verwenden darf, die [cross-origin isolation](/de/docs/Web/API/Window/crossOriginIsolated) erfordern.

Insbesondere wird, wenn eine definierte Richtlinie die Verwendung dieser Funktion blockiert, die Eigenschaft [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) immer `false` zurückgeben. Das Dokument wird somit nicht von reduzierten Einschränkungen bei der Nutzung einiger APIs profitieren, die nur für cross-origin isolierte Dokumente zugänglich sind. Dies gilt unabhängig von den {{HTTPHeader("Cross-Origin-Embedder-Policy")}} und {{HTTPHeader("Cross-Origin-Opener-Policy")}} Headers und unabhängig davon, ob das Dokument cross-origin isoliert gewesen wäre, wenn die Erlaubnis erteilt worden wäre.

Zu den APIs, die diese Erlaubnis benötigen, gehört die Verwendung von {{jsxref("SharedArrayBuffer")}} Objekten und [`Performance.now()`](/de/docs/Web/API/Performance/now) mit ungedrosselten Timern — siehe [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) für Informationen zu anderen eingeschränkten APIs.

Die Erlaubnis kann genutzt werden, um Einschränkungen für den Zugriff auf die sensiblen APIs aufrechtzuerhalten, es sei denn, sie werden tatsächlich von einem cross-origin isolierten Dokument benötigt.
Beachten Sie, dass, wenn die Funktion nicht erlaubt ist, aber ansonsten cross-origin isoliert gewesen wäre, sie in allen anderen Aspekten dennoch cross-origin isoliert bleibt. Zum Beispiel wird es nur eine {{Glossary("Browsing_context", "browsing context group")}} mit Dokumenten des gleichen Ursprungs teilen.

## Syntax

```http
Permissions-Policy: cross-origin-isolated=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von einer oder mehreren Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird.
    Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `cross-origin-isolated` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
