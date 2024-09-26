---
title: "Permissions-Policy: bluetooth"
slug: Web/HTTP/Headers/Permissions-Policy/bluetooth
l10n:
  sourceCommit: 727b432491cb8fea8e3e7599cc41e0ae5b0120dd
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `bluetooth` steuert, ob das aktuelle Dokument die [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) verwenden darf.

Insbesondere wenn eine festgelegte Richtlinie die Nutzung dieses Features verbietet, werden die Methoden des {{domxref('Bluetooth')}}-Objekts, das durch {{domxref('Navigator.bluetooth')}} zurückgegeben wird, den Zugriff blockieren:

- {{DOMxRef("Bluetooth.getAvailability()")}} wird immer sein zurückgegebenes {{jsxref("Promise")}} mit einem Wert von `false` erfüllen.
- {{DOMxRef("Bluetooth.getDevices()")}} wird sein zurückgegebenes {{jsxref("Promise")}} mit einem `SecurityError` {{domxref("DOMException")}} ablehnen.
- {{DOMxRef("Bluetooth.requestDevice()")}} wird sein zurückgegebenes {{jsxref("Promise")}} mit einem `SecurityError` {{domxref("DOMException")}} ablehnen.

## Syntax

```http
Permissions-Policy: bluetooth=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für mehr Details.

## Standardrichtlinie

Die Standard-Whitelist für `bluetooth` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Web Bluetooth API in allen Browsing-Kontexten außer für den eigenen Ursprung und solche, deren Ursprung `https://example.com` ist, deaktivieren.
Dies kann durch die Bereitstellung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungsrichtlinie erreicht werden:

```http
Permissions-Policy: bluetooth=(self "https://example.com")
```

### Mit einem \<iframe>-Element

FastCorp Inc. möchte `bluetooth` für alle cross-origin-Kinderframes deaktivieren, außer für ein bestimmtes `<iframe>`.
Dies kann durch die Bereitstellung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungsrichtlinie erreicht werden:

```http
Permissions-Policy: bluetooth=(self https://other.com/blue)
```

Dann fügen Sie ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut zum `<iframe>`-Element hinzu:

```html
<iframe src="https://other.com/blue" allow="bluetooth"></iframe>
```

`<iframe>`-Attribute können selektiv Features in bestimmten Frames aktivieren und in anderen nicht, selbst wenn diese Frames Dokumente vom gleichen Ursprung enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
