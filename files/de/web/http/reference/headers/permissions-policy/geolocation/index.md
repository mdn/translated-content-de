---
title: "Permissions-Policy: geolocation directive"
short-title: geolocation
slug: Web/HTTP/Reference/Headers/Permissions-Policy/geolocation
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header
`geolocation`-Direktive steuert, ob das aktuelle Dokument die
[`Geolocation`](/de/docs/Web/API/Geolocation)-Schnittstelle verwenden darf.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von
[`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und
[`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) dazu führen, dass die Rückruffunktionen dieser Methoden mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Code von
`PERMISSION_DENIED` aufgerufen werden.

Standardmäßig kann die Geolocation-API in obersten Dokumentenebenen und deren
gleichherkunftsbezogenen Kindrahmen verwendet werden. Diese Direktive erlaubt oder verhindert, dass nicht gleichherkunftsbezogene Rahmen auf Geolocation zugreifen. Dies schließt auch gleichherkunftsbezogene Rahmen ein.

## Syntax

```http
Permissions-Policy: geolocation=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis gewährt wird, die Funktion zu nutzen. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `geolocation` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Geolocation-API in allen Browsing-Kontexten deaktivieren, außer für den eigenen Ursprung und für diejenigen, deren Ursprung `https://example.com` ist. Dies kann durch die Bereitstellung des folgenden HTTP-Antwort-Headers zur Definition einer Permissions Policy erreicht werden:

```http
Permissions-Policy: geolocation=(self "https://example.com")
```

### Mit einem `<iframe>`-Element

FastCorp Inc. möchte `geolocation` für alle nicht gleichherkunftsbezogenen Kindrahmen deaktivieren, außer für ein spezifisches `<iframe>`. Dies kann durch die Bereitstellung des folgenden HTTP-Antwort-Headers zur Definition einer Permissions Policy erreicht werden:

```http
Permissions-Policy: geolocation=(self)
```

Dann wird ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut auf dem `<iframe>`-Element eingeschlossen:

```html
<iframe src="https://other.com/map" allow="geolocation"></iframe>
```

Interessanterweise können `allow`-Attribute selektiv Funktionen in bestimmten Rahmen aktivieren, und nicht in anderen, selbst wenn diese Rahmen Dokumente vom gleichen Ursprung enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
