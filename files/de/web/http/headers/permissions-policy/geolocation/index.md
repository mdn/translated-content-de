---
title: "Permissions-Policy: Geolocation"
slug: Web/HTTP/Headers/Permissions-Policy/geolocation
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header mit der Direktive `geolocation` steuert, ob das aktuelle Dokument die {{domxref('Geolocation')}}-Schnittstelle verwenden darf.

Speziell in Fällen, in denen eine definierte Richtlinie die Nutzung dieses Features blockiert, führen Aufrufe von {{domxref('Geolocation.getCurrentPosition','getCurrentPosition()')}} und {{domxref('Geolocation.watchPosition','watchPosition()')}} dazu, dass die Rückruffunktionen dieser Funktionen mit einem {{domxref('GeolocationPositionError')}}-Code von `PERMISSION_DENIED` aufgerufen werden.

Standardmäßig kann die Geolocation-API innerhalb von Dokumenten der obersten Ebene und deren same-origin-Kind-Frames verwendet werden. Diese Direktive erlaubt oder verhindert den Zugriff auf Geolocation durch cross-origin-Frames. Dies schließt same-origin-Frames ein.

## Syntax

```http
Permissions-Policy: geolocation=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Verwendung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `geolocation` ist `self`.

## Beispiele

### Allgemeines Beispiel

Die SecureCorp Inc. möchte die Geolocation-API in allen Browsing-Kontexten deaktivieren, außer für ihren eigenen Ursprung und diejenigen, deren Ursprung `https://example.com` ist. Dies kann sie tun, indem sie den folgenden HTTP-Antwort-Header liefert, um eine Berechtigungsrichtlinie zu definieren:

```http
Permissions-Policy: geolocation=(self "https://example.com")
```

### Mit einem \<iframe>-Element

Die FastCorp Inc. möchte `geolocation` für alle cross-origin-Kind-Frames deaktivieren, außer für ein bestimmtes `<iframe>`. Dies kann sie tun, indem sie den folgenden HTTP-Antwort-Header liefert, um eine Berechtigungsrichtlinie zu definieren:

```http
Permissions-Policy: geolocation=(self)
```

Dann fügen Sie ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut zum `<iframe>`-Element hinzu:

```html
<iframe src="https://other.com/map" allow="geolocation"></iframe>
```

Interessanterweise können `allow`-Attribute Funktionen selektiv in bestimmten Frames aktivieren und in anderen nicht, selbst wenn diese Frames Dokumente desselben Ursprungs enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
