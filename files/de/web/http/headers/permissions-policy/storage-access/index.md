---
title: "Permissions-Policy: storage-access"
slug: Web/HTTP/Headers/Permissions-Policy/storage-access
l10n:
  sourceCommit: b18b0ea6e71c1178cbdffbe096b4d3ac3947c583
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-{{HTTPHeader("Permissions-Policy")}}-Header-Direktive `storage-access` steuert, ob ein in einem Drittanbieterkontext (d. h. eingebettet in einem {{htmlelement("iframe")}}) geladenes Dokument die {{domxref("Storage Access API", "Storage Access API", "", "nocode")}} verwenden darf, um Zugriff auf unpartitionierte Cookies anzufordern.

Dies ist relevant für User Agents, die standardmäßig den Zugriff auf unpartitionierte Cookies von in einem Drittanbieterkontext geladenen Websites blockieren, um die Privatsphäre zu verbessern (zum Beispiel, um Tracking zu verhindern).

Insbesondere bei einer definierten Richtlinie, die die Nutzung dieser Funktion blockiert, werden {{domxref("Document.requestStorageAccess()")}}-Aufrufe ein {{jsxref("Promise")}} zurückgeben, das mit einem {{domxref("DOMException")}} vom Typ `NotAllowedError` ablehnt.

## Syntax

```http
Permissions-Policy: storage-access=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wurde. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Warteliste für `storage-access` ist `*`.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Storage Access API](/de/docs/Web/API/Storage_Access_API)
- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
