---
title: "Permissions-Policy: storage-access"
slug: Web/HTTP/Headers/Permissions-Policy/storage-access
l10n:
  sourceCommit: b18b0ea6e71c1178cbdffbe096b4d3ac3947c583
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} `storage-access`-Direktive steuert, ob ein Dokument, das in einem Drittanbieter-Kontext geladen wird (z.B. eingebettet in einem {{htmlelement("iframe")}}), die [Storage Access API](/de/docs/Web/API/Storage_Access_API) verwenden darf, um Zugang zu unpartitionierten Cookies zu beantragen.

Dies ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf unpartitionierte Cookies durch in einem Drittanbieter-Kontext geladene Seiten blockieren, um die Privatsphäre zu verbessern (zum Beispiel, um Tracking zu verhindern).

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert, werden Anrufe an [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) ein {{jsxref("Promise")}} zurückgeben, das mit einem [`DOMException`](/de/docs/Web/API/DOMException) des Typs `NotAllowedError` abgelehnt wird.

## Syntax

```http
Permissions-Policy: storage-access=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die standardmäßige Erlaubnisliste für `storage-access` ist `*`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Storage Access API](/de/docs/Web/API/Storage_Access_API)
- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
