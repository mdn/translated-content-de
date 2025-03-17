---
title: "Permissions-Policy: storage-access"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/storage-access
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP {{HTTPHeader("Permissions-Policy")}}-Header-Direktive `storage-access` steuert, ob ein Dokument, das in einem Drittanbieter-Kontext geladen wurde (d.h. eingebettet in einem {{htmlelement("iframe")}}), die [Storage Access API](/de/docs/Web/API/Storage_Access_API) verwenden darf, um Zugriff auf nicht partionierte Cookies zu beantragen.

Dies ist relevant für User Agents, die standardmäßig den Zugriff auf nicht partionierte Cookies von Websites blockieren, die in einem Drittanbieter-Kontext geladen werden, um die Privatsphäre zu verbessern (zum Beispiel, um Tracking zu verhindern).

Speziell, wo eine definierte Richtlinie die Nutzung dieses Features blockiert, werden Aufrufe von [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) ein {{jsxref("Promise")}} zurückgeben, das mit einem [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` abgelehnt wird.

## Syntax

```http
Permissions-Policy: storage-access=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `storage-access` ist `*`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Storage Access API](/de/docs/Web/API/Storage_Access_API)
- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
