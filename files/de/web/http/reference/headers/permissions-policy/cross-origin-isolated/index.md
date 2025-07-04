---
title: "Permissions-Policy: cross-origin-isolated Richtlinie"
short-title: cross-origin-isolated
slug: Web/HTTP/Reference/Headers/Permissions-Policy/cross-origin-isolated
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header `cross-origin-isolated`-Direktive kontrolliert, ob das aktuelle Dokument APIs verwenden darf, die [cross-origin isolation](/de/docs/Web/API/Window/crossOriginIsolated) erfordern.

Insbesondere wenn eine definierte Richtlinie die Nutzung dieses Features blockiert, werden die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) immer `false` zurückgeben, und das Dokument profitiert nicht von den reduzierten Einschränkungen bei der Nutzung einiger APIs, die nur für cross-origin isolierte Dokumente gewährt werden.
Dies gilt unabhängig von den {{HTTPHeader("Cross-Origin-Embedder-Policy")}}- und {{HTTPHeader("Cross-Origin-Opener-Policy")}}-Headern und davon, ob das Dokument cross-origin isoliert gewesen wäre, wenn die Berechtigung erteilt worden wäre.

Die APIs, die diese Berechtigung erfordern, schließen die Nutzung von {{jsxref("SharedArrayBuffer")}}-Objekten und [`Performance.now()`](/de/docs/Web/API/Performance/now) mit ungedrosselten Timern ein — siehe [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) für Informationen über andere eingeschränkte APIs.

Die Berechtigung kann verwendet werden, um Einschränkungen für den Zugriff auf die sensiblen APIs aufrechtzuerhalten, es sei denn, sie werden tatsächlich von einem cross-origin isolierten Dokument benötigt.
Beachten Sie, dass, wenn das Feature nicht erlaubt ist, es aber ansonsten cross-origin isoliert gewesen wäre, es in jeder anderen Hinsicht immer noch cross-origin isoliert ist.
Zum Beispiel wird es nur eine {{Glossary("Browsing_context", "Browsing-Kontextgruppe")}} mit Dokumenten im selben Ursprung teilen.

## Syntax

```http
Permissions-Policy: cross-origin-isolated=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von einem oder mehreren Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird.
    Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Whitelist für `cross-origin-isolated` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
