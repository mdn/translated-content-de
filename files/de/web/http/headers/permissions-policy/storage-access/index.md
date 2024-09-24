---
title: "Permissions-Policy: storage-access"
slug: Web/HTTP/Headers/Permissions-Policy/storage-access
l10n:
  sourceCommit: b18b0ea6e71c1178cbdffbe096b4d3ac3947c583
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `storage-access` steuert, ob ein Dokument, das in einem Drittanbieter-Kontext geladen wird (z. B. eingebettet in einem {{htmlelement("iframe")}}), die {{domxref("Storage Access API", "Storage Access API", "", "nocode")}} verwenden darf, um Zugriff auf nicht partitionierte Cookies anzufordern.

Dies ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf nicht partitionierte Cookies von in einem Drittanbieter-Kontext geladenen Seiten blockieren, um die Privatsphäre zu verbessern (beispielsweise, um Tracking zu verhindern).

Speziell wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von {{domxref("Document.requestStorageAccess()")}} ein {{jsxref("Promise")}} zurückgeben, das mit einem {{domxref("DOMException")}} vom Typ `NotAllowedError` abgelehnt wird.

## Syntax

```http
Permissions-Policy: storage-access=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion gewährt wird. Siehe [„Permissions-Policy“ > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Vorgabepolitik

Die standardmäßige Erlaubnisliste für `storage-access` ist `*`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Storage Access API](/de/docs/Web/API/Storage_Access_API)
- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
