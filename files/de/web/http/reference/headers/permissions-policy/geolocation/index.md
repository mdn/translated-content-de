---
title: "Permissions-Policy: geolocation"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/geolocation
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Die HTTP-Direktive {{HTTPHeader("Permissions-Policy")}} `geolocation` steuert, ob das aktuelle Dokument die [`Geolocation`](/de/docs/Web/API/Geolocation)-Schnittstelle verwenden darf.

Insbesondere wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, führen Aufrufe von [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und [`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) dazu, dass die Rückruffunktionen mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Code von `PERMISSION_DENIED` aufgerufen werden.

Standardmäßig kann die Geolocation-API in obersten Dokumenten und deren gleichherkunft Kinderrahmen verwendet werden. Diese Direktive erlaubt oder verhindert den Zugriff auf Geolocation durch fremdherkunft Frames. Dazu gehören auch gleichherkunft Frames.

## Syntax

```http
Permissions-Policy: geolocation=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung dieser Funktion erteilt wird. Weitere Einzelheiten finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Whitelist für `geolocation` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Geolocation-API in allen Browsing-Kontexten deaktivieren, außer für den eigenen Ursprung und jene, deren Ursprung `https://example.com` ist. Dies kann durch die Bereitstellung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungsrichtlinie erfolgen:

```http
Permissions-Policy: geolocation=(self "https://example.com")
```

### Mit einem `<iframe>`-Element

FastCorp Inc. möchte `geolocation` für alle fremdherkunft Kinderrahmen deaktivieren, außer für ein spezifisches `<iframe>`. Dies kann durch die Bereitstellung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungsrichtlinie erfolgen:

```http
Permissions-Policy: geolocation=(self)
```

Dann schließen Sie ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut auf dem `<iframe>`-Element ein:

```html
<iframe src="https://other.com/map" allow="geolocation"></iframe>
```

Interessanterweise können `allow`-Attribute Funktionen in bestimmten Rahmen selektiv aktivieren und in anderen nicht, selbst wenn diese Rahmen Dokumente aus der gleichen Herkunft enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
