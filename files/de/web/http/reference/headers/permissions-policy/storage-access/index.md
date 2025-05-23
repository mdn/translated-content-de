---
title: "Permissions-Policy: storage-access-Direktive"
short-title: storage-access
slug: Web/HTTP/Reference/Headers/Permissions-Policy/storage-access
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `storage-access` steuert, ob ein Dokument, das in einem Drittanbieter-Kontext geladen wurde (d.h. eingebettet in ein {{htmlelement("iframe")}}), die [Storage Access API](/de/docs/Web/API/Storage_Access_API) verwenden darf, um Zugriff auf nicht partitionierte Cookies zu beantragen.

Dies ist relevant für Benutzeragenten, die standardmäßig den Zugriff auf nicht partitionierte Cookies von Websites blockieren, die in einem Drittanbieter-Kontext geladen werden, um die Privatsphäre zu verbessern (zum Beispiel, um Tracking zu verhindern).

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) ein {{jsxref("Promise")}} zurückgeben, das mit einem [`DOMException`](/de/docs/Web/API/DOMException) des Typs `NotAllowedError` abgelehnt wird.

## Syntax

```http
Permissions-Policy: storage-access=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Zulassungsliste für `storage-access` ist `*`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Storage Access API](/de/docs/Web/API/Storage_Access_API)
- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
