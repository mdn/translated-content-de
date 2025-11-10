---
title: "Permissions-Policy: geolocation-Direktive"
short-title: geolocation
slug: Web/HTTP/Reference/Headers/Permissions-Policy/geolocation
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP {{HTTPHeader("Permissions-Policy")}}-Header
die `geolocation`-Direktive steuert, ob das aktuelle Dokument die
[`Geolocation`](/de/docs/Web/API/Geolocation)-Schnittstelle verwenden darf.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert, wird bei Aufrufen von
[`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und
[`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) die Rückruffunktion mit einem
[`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Code von
`PERMISSION_DENIED` aufgerufen.

Standardmäßig kann die Geolocation-API innerhalb von Top-Level-Dokumenten und deren
Child-Frames gleicher Herkunft verwendet werden. Diese Direktive erlaubt oder verhindert den Zugriff von Cross-Origin-Frames
auf Geolocation. Dies schließt Frames gleicher Herkunft ein.

## Syntax

```http
Permissions-Policy: geolocation=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Features erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Whitelist für `geolocation` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Geolocation-API in allen Browsing-Kontexten
außerhalb des eigenen Ursprungs und von Ursprüngen, die `https://example.com` sind, deaktivieren. Dies
kann durch das Senden des folgenden HTTP-Antwort-Headers zur Definition einer Permissions Policy erreicht werden:

```http
Permissions-Policy: geolocation=(self "https://example.com")
```

### Mit einem `<iframe>`-Element

FastCorp Inc. möchte `geolocation` für alle Cross-Origin-Child-Frames
deaktivieren, mit Ausnahme eines bestimmten `<iframe>`. Dies kann durch das Senden des folgenden
HTTP-Antwort-Headers zur Definition einer Permissions Policy erreicht werden:

```http
Permissions-Policy: geolocation=(self)
```

Anschließend kann ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut dem
`<iframe>`-Element hinzugefügt werden:

```html
<iframe src="https://other.com/map" allow="geolocation"></iframe>
```

Interessanterweise können `allow`-Attribute selektiv Features in bestimmten Frames aktivieren und in anderen nicht,
selbst wenn diese Frames Dokumente aus demselben Ursprung enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
