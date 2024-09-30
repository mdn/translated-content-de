---
title: "Permissions-Policy: geolocation"
slug: Web/HTTP/Headers/Permissions-Policy/geolocation
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Das HTTP-{{HTTPHeader("Permissions-Policy")}}-Header
`geolocation`-Direktive steuert, ob das aktuelle Dokument die
[`Geolocation`](/de/docs/Web/API/Geolocation)-Schnittstelle verwenden darf.

Konkret gesagt, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, führen Aufrufe von
[`getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) und
[`watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) dazu, dass die Rückruffunktionen dieser Methoden mit einem [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Code von
`PERMISSION_DENIED` aufgerufen werden.

Standardmäßig kann die Geolocation-API in Top-Level-Dokumenten und deren
gleichoriginigen Kindelementen verwendet werden. Diese Direktive erlaubt oder verhindert, dass Cross-Origin-Frames auf die Geolocation zugreifen. Dies schließt gleichoriginige Frames mit ein.

## Syntax

```http
Permissions-Policy: geolocation=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Zulassungsliste für `geolocation` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Geolocation-API in allen Browser-Kontexten deaktivieren,
außer für seinen eigenen Ursprung und solche, deren Ursprung `https://example.com` ist. Dies kann durch die Auslieferung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungsrichtlinie erfolgen:

```http
Permissions-Policy: geolocation=(self "https://example.com")
```

### Mit einem \<iframe>-Element

FastCorp Inc. möchte `geolocation` für alle Cross-Origin-Kindframes deaktivieren,
mit Ausnahme eines bestimmten `<iframe>`. Dies kann durch die Auslieferung des folgenden
HTTP-Antwort-Headers zur Definition einer Berechtigungsrichtlinie erfolgen:

```http
Permissions-Policy: geolocation=(self)
```

Dann fügen Sie ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut zum
`<iframe>`-Element hinzu:

```html
<iframe src="https://other.com/map" allow="geolocation"></iframe>
```

Interessanterweise können `allow`-Attribute Funktionen selektiv in bestimmten Frames aktivieren und in anderen deaktivieren, selbst wenn diese Frames Dokumente desselben Ursprungs enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
