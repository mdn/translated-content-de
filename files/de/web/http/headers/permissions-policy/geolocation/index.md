---
title: "Permissions-Policy: geolocation"
slug: Web/HTTP/Headers/Permissions-Policy/geolocation
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header
enthält die Direktive `geolocation`, die steuert, ob dem aktuellen Dokument die Nutzung der [`Geolocation`](/de/docs/Web/API/Geolocation)-Schnittstelle erlaubt ist.

Insbesondere wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von
[`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und
[`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) dazu führen, dass die Rückruffunktionen dieser Funktionen
mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Code von `PERMISSION_DENIED` aufgerufen werden.

Standardmäßig kann die Geolocation-API in Dokumenten der obersten Ebene und ihren
gleichherkunftlichen Kind-Frames verwendet werden. Diese Direktive erlaubt oder verhindert den Zugriff auf Geolocation durch fremde Frames. Dies schließt gleichherkunftliche Frames ein.

## Syntax

```http
Permissions-Policy: geolocation=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `geolocation` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Geolocation-API in allen Browsing-Kontexten deaktivieren,
außer für den eigenen Ursprung und solche, deren Ursprung `https://example.com` ist. Dies kann durch Bereitstellung des folgenden HTTP-Antwort-Headers zur Definition einer Permissions Policy erreicht werden:

```http
Permissions-Policy: geolocation=(self "https://example.com")
```

### Mit einem \<iframe>-Element

FastCorp Inc. möchte `geolocation` für alle fremden Kind-Frames deaktivieren,
mit Ausnahme eines bestimmten `<iframe>`. Dies kann durch Bereitstellung des folgenden
HTTP-Antwort-Headers zur Definition einer Permissions Policy erreicht werden:

```http
Permissions-Policy: geolocation=(self)
```

Dann fügen Sie ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut für das
`<iframe>`-Element ein:

```html
<iframe src="https://other.com/map" allow="geolocation"></iframe>
```

Interessanterweise können `allow`-Attribute Funktionen selektiv in bestimmten Frames aktivieren und in anderen nicht,
selbst wenn diese Frames Dokumente mit gleichem Ursprung enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
