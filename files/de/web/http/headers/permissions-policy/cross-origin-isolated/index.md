---
title: "Permissions-Policy: cross-origin-isolated"
slug: Web/HTTP/Headers/Permissions-Policy/cross-origin-isolated
l10n:
  sourceCommit: 6d6c7276af1aa286330458c3e84ddc7ea0b435ac
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP {{HTTPHeader("Permissions-Policy")}} Header `cross-origin-isolated` Direktive steuert, ob das aktuelle Dokument APIs verwenden darf, die eine [Cross-Origin-Isolation](/de/docs/Web/API/Window/crossOriginIsolated) erfordern.

Konkret gilt: Wenn eine definierte Richtlinie die Nutzung dieses Features blockiert, werden die Eigenschaften [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) und [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) immer `false` zurückgeben, und das Dokument wird nicht von reduzierten Beschränkungen bei der Nutzung einiger APIs profitieren, die nur Cross-Origin-isolierten Dokumenten gewährt werden. Dies gilt unabhängig von den {{HTTPHeader("Cross-Origin-Embedder-Policy")}} und {{HTTPHeader("Cross-Origin-Opener-Policy")}} Headern und davon, ob das Dokument Cross-Origin-isoliert gewesen wäre, wenn die Erlaubnis erteilt worden wäre.

APIs, die diese Erlaubnis erfordern, umfassen die Verwendung von {{jsxref("SharedArrayBuffer")}} Objekten und [`Performance.now()`](/de/docs/Web/API/Performance/now) mit ungedrosselten Timern — siehe [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) für Informationen über weitere eingeschränkte APIs.

Die Erlaubnis kann verwendet werden, um Beschränkungen auf den Zugriff auf die sensiblen APIs aufrechtzuerhalten, es sei denn, sie werden tatsächlich von einem Cross-Origin-isolierten Dokument benötigt. Beachten Sie, dass, wenn das Feature nicht erlaubt ist, es ansonsten cross-origin-isoliert gewesen wäre; in jeder sonstigen Hinsicht bleibt es dennoch cross-origin-isoliert. Zum Beispiel wird es nur eine {{Glossary("Browsing_context", "Browsing-Context-Gruppe")}} mit Dokumenten desselben Ursprungs teilen.

## Syntax

```http
Permissions-Policy: cross-origin-isolated=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von einem oder mehreren Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird.
    Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `cross-origin-isolated` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
