---
title: "Permissions-Policy: bluetooth"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/bluetooth
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}} {{SeeCompatTable}}

Die HTTP-Direktive {{HTTPHeader("Permissions-Policy")}} `bluetooth` steuert, ob das aktuelle Dokument die [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) verwenden darf.

Speziell in Fällen, in denen eine definierte Richtlinie die Nutzung dieses Features untersagt, blockieren die Methoden des [`Bluetooth`](/de/docs/Web/API/Bluetooth) Objekts, das von [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) zurückgegeben wird, den Zugriff:

- [`Bluetooth.getAvailability()`](/de/docs/Web/API/Bluetooth/getAvailability) wird sein zurückgegebenes {{jsxref("Promise")}} immer mit dem Wert `false` erfüllen.
- [`Bluetooth.getDevices()`](/de/docs/Web/API/Bluetooth/getDevices) wird sein zurückgegebenes {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ablehnen.
- [`Bluetooth.requestDevice()`](/de/docs/Web/API/Bluetooth/requestDevice) wird sein zurückgegebenes {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ablehnen.

## Syntax

```http
Permissions-Policy: bluetooth=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Features erteilt wurde. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Whitelist für `bluetooth` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Web Bluetooth API in allen Browsing-Kontexten außer für den eigenen Ursprung und den Ursprung `https://example.com` deaktivieren. Dies kann durch die Bereitstellung des folgenden HTTP-Antwort-Headers erreicht werden, um eine Berechtigungsrichtlinie zu definieren:

```http
Permissions-Policy: bluetooth=(self "https://example.com")
```

### Mit einem `<iframe>`-Element

FastCorp Inc. möchte `bluetooth` für alle Cross-Origin-Kinderframes deaktivieren, außer für ein bestimmtes `<iframe>`. Dies kann durch die Bereitstellung des folgenden HTTP-Antwort-Headers erreicht werden, um eine Berechtigungsrichtlinie zu definieren:

```http
Permissions-Policy: bluetooth=(self https://other.com/blue)
```

Dann fügen Sie ein {{HTMLElement('iframe','allow','#Attributes')}} Attribut auf dem `<iframe>`-Element hinzu:

```html
<iframe src="https://other.com/blue" allow="bluetooth"></iframe>
```

`<iframe>`-Attribute können selektiv Features in bestimmten Frames aktivieren und in anderen nicht, selbst wenn diese Frames Dokumente vom gleichen Ursprung enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
