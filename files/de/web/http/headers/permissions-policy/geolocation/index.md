---
title: "Permissions-Policy: geolocation"
slug: Web/HTTP/Headers/Permissions-Policy/geolocation
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header
`geolocation`-Direktive steuert, ob das aktuelle Dokument die
[`Geolocation`](/de/docs/Web/API/Geolocation)-Schnittstelle verwenden darf.

Konkret, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert, führen Aufrufe von
[`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und
[`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) dazu, dass die Callbacks dieser Funktionen
mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Code von
`PERMISSION_DENIED` aufgerufen werden.

Standardmäßig kann die Geolocation-API innerhalb von Top-Level-Dokumenten und ihren
gleichartigen, ursprungsidentischen Child-Frames verwendet werden. Diese Direktive erlaubt oder verhindert,
dass cross-origin Frames auf Geolocation zugreifen. Dies schließt gleichartige Frames ein.

## Syntax

```http
Permissions-Policy: geolocation=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Features erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Whitelist für `geolocation` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Geolocation-API innerhalb aller Browsing-Kontexte
deaktivieren, außer für ihren eigenen Ursprung und diejenigen, deren Ursprung `https://example.com` ist. Dies kann durch Bereitstellung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungspolitik erfolgen:

```http
Permissions-Policy: geolocation=(self "https://example.com")
```

### Mit einem `<iframe>`-Element

FastCorp Inc. möchte `geolocation` für alle cross-origin Child-Frames deaktivieren,
außer für ein bestimmtes `<iframe>`. Dies kann durch Bereitstellung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungspolitik erfolgen:

```http
Permissions-Policy: geolocation=(self)
```

Dann fügen Sie ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut zum
`<iframe>`-Element hinzu:

```html
<iframe src="https://other.com/map" allow="geolocation"></iframe>
```

Interessanterweise können `allow`-Attribute Features selektiv in bestimmten Frames aktivieren und in anderen nicht, selbst wenn diese Frames Dokumente vom gleichen Ursprung enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
