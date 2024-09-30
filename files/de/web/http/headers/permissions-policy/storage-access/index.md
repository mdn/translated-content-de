---
title: "Permissions-Policy: storage-access"
slug: Web/HTTP/Headers/Permissions-Policy/storage-access
l10n:
  sourceCommit: b18b0ea6e71c1178cbdffbe096b4d3ac3947c583
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP {{HTTPHeader("Permissions-Policy")}} Header `storage-access` Direktive steuert, ob ein Dokument, das in einem Drittanbieter-Kontext geladen wird (d.h. eingebettet in ein {{htmlelement("iframe")}}), die [Storage Access API](/de/docs/Web/API/Storage_Access_API) verwenden darf, um Zugriff auf nicht partitionierte Cookies anzufordern.

Dies ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf nicht partitionierte Cookies durch in einem Drittanbieter-Kontext geladene Websites blockieren, um die Privatsphäre zu verbessern (beispielsweise zur Verhinderung von Tracking).

Insbesondere in Fällen, in denen eine definierte Richtlinie die Nutzung dieses Features blockiert, werden Anrufe von [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) ein {{jsxref("Promise")}} zurückgeben, das mit einem [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` abgelehnt wird.

## Syntax

```http
Permissions-Policy: storage-access=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `storage-access` ist `*`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Storage Access API](/de/docs/Web/API/Storage_Access_API)
- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
