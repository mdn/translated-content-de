---
title: "Permissions-Policy: storage-access-Direktive"
short-title: storage-access
slug: Web/HTTP/Reference/Headers/Permissions-Policy/storage-access
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `storage-access` steuert, ob ein Dokument, das in einem Drittanbieter-Kontext geladen wird (d.h. eingebettet in einem {{htmlelement("iframe")}}), die [Storage Access API](/de/docs/Web/API/Storage_Access_API) verwenden darf, um Zugriff auf unpartitionierte Cookies anzufordern.

Dies ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf unpartitionierte Cookies für Seiten blockieren, die in einem Drittanbieter-Kontext geladen werden, um die Privatsphäre zu verbessern (zum Beispiel, um Tracking zu verhindern).

Insbesondere wenn eine definierte Richtlinie die Nutzung dieses Features blockiert, werden Aufrufe von [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) ein {{jsxref("Promise")}} zurückgeben, das mit einem [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `NotAllowedError` abgelehnt wird.

## Syntax

```http
Permissions-Policy: storage-access=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für mehr Details.

## Standardrichtlinie

Die standardmäßige Zulassungsliste für `storage-access` ist `*`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Storage Access API](/de/docs/Web/API/Storage_Access_API)
- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
