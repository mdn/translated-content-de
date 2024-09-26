---
title: "Permissions-Policy: geolocation"
slug: Web/HTTP/Headers/Permissions-Policy/geolocation
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header
`geolocation`-Direktive steuert, ob das aktuelle Dokument die
{{domxref('Geolocation')}}-Schnittstelle verwenden darf.

Konkret bedeutet dies, dass bei einer definierten Richtlinie, die die Nutzung dieses Merkmals blockiert, Aufrufe von
{{domxref('Geolocation.getCurrentPosition','getCurrentPosition()')}} und
{{domxref('Geolocation.watchPosition','watchPosition()')}} dazu führen, dass die Rückruffunktion dieser Methoden mit einem {{domxref('GeolocationPositionError')}}-Code von
`PERMISSION_DENIED` aufgerufen wird.

Standardmäßig kann die Geolocation-API in Dokumenten auf der obersten Ebene und deren Child-Frames mit demselben Origin verwendet werden. Diese Direktive ermöglicht oder verhindert den Zugriff von Cross-Origin-Frames auf die Geolokation. Dies schließt auch Frames mit demselben Origin ein.

## Syntax

```http
Permissions-Policy: geolocation=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Siehe [„Permissions-Policy“ > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für mehr Details.

## Standardrichtlinie

Die Standardzulassungsliste für `geolocation` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Geolocation-API in allen Browsing-Kontexten deaktivieren,
außer für seinen eigenen Origin und diejenigen, deren Origin `https://example.com` ist. Dies kann durch die Bereitstellung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungsrichtlinie geschehen:

```http
Permissions-Policy: geolocation=(self "https://example.com")
```

### Mit einem \<iframe>-Element

FastCorp Inc. möchte `geolocation` für alle Cross-Origin-Child-Frames deaktivieren, außer für ein bestimmtes `<iframe>`. Dies kann durch die Bereitstellung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungsrichtlinie geschehen:

```http
Permissions-Policy: geolocation=(self)
```

Dann fügen Sie ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut im
`<iframe>`-Element hinzu:

```html
<iframe src="https://other.com/map" allow="geolocation"></iframe>
```

Interessanterweise können `allow`-Attribute selektiv Funktionen in bestimmten Frames aktivieren und in anderen nicht, selbst wenn diese Frames Dokumente des gleichen Ursprungs enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
