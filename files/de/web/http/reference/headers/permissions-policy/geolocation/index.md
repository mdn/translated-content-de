---
title: "Permissions-Policy: geolocation directive"
short-title: geolocation
slug: Web/HTTP/Reference/Headers/Permissions-Policy/geolocation
l10n:
  sourceCommit: 63c77c01567e7f6e46955ecfc2e380198f0d835c
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} `geolocation`-Direktive steuert, ob das aktuelle Dokument die Verwendung der [`Geolocation`](/de/docs/Web/API/Geolocation) Schnittstelle erlaubt.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von [`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und
[`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) dazu führen, dass die Rückruffunktionen mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Code von
`PERMISSION_DENIED` aufgerufen werden.

## Syntax

```http
Permissions-Policy: geolocation=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-allowlist für `geolocation` ist `self`. Der oberste Browsing-Kontext und gleichherkömmliche iframes haben standardmäßig Zugriff auf die `geolocation`-Funktion.

## Beispiele

### Grundlegende Verwendung

SecureCorp Inc. möchte `geolocation` in allen cross-origin iframes außer denen mit Ursprung `https://example.com` deaktivieren. Dies kann durch die Bereitstellung des folgenden HTTP-Response-Headers erfolgen, um eine Berechtigungsrichtlinie festzulegen:

```http
Permissions-Policy: geolocation=(self "https://example.com")
```

SecureCorp Inc. muss außerdem ein {{HTMLElement('iframe','allow','#Attributes')}} Attribut auf jedem `<iframe>`-Element einfügen, bei dem `geolocation` erlaubt sein soll:

```html
<iframe src="https://example.com/map" allow="geolocation"></iframe>
```

> [!NOTE]
> Die Angabe des `Permissions-Policy`-Headers auf diese Weise erlaubt `geolocation` nicht für andere Ursprünge, selbst wenn sie durch das `<iframe>` `allow` Attribut erlaubt sind.

### Verwendung der Standardrichtlinie

Wenn keine allowlist für `geolocation` durch einen `Permissions-Policy`-Response-Header definiert ist, wenden User Agents die Standard-allowlist `self` an. In diesem Modus ist `geolocation` automatisch im oberen Browsing-Kontext und in gleichherkömmlichen iframes erlaubt, jedoch nicht in cross-origin iframes.

Um `geolocation` in einem cross-origin iframe zu erlauben, fügen Sie ein {{HTMLElement('iframe','allow','#Attributes')}} Attribut auf dem `<iframe>`-Element ein:

```html
<iframe src="https://other.com/store-locator" allow="geolocation"></iframe>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
