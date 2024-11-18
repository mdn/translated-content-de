---
title: "Permissions-Policy: bluetooth"
slug: Web/HTTP/Headers/Permissions-Policy/bluetooth
l10n:
  sourceCommit: 727b432491cb8fea8e3e7599cc41e0ae5b0120dd
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `bluetooth` steuert, ob das aktuelle Dokument die [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) verwenden darf.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieses Features verbietet, werden die Methoden des [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekts, das von [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) zurückgegeben wird, den Zugriff blockieren:

- [`Bluetooth.getAvailability()`](/de/docs/Web/API/Bluetooth/getAvailability) wird seine zurückgegebene {{jsxref("Promise")}} immer mit einem Wert von `false` erfüllen.
- [`Bluetooth.getDevices()`](/de/docs/Web/API/Bluetooth/getDevices) wird seine zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ablehnen.
- [`Bluetooth.requestDevice()`](/de/docs/Web/API/Bluetooth/requestDevice) wird seine zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ablehnen.

## Syntax

```http
Permissions-Policy: bluetooth=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Allowlist für `bluetooth` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Web Bluetooth API in allen Browsing-Kontexten deaktivieren, außer für ihren eigenen Ursprung und die, deren Ursprung `https://example.com` ist.
Sie kann dies tun, indem sie den folgenden HTTP-Antwort-Header sendet, um eine Berechtigungsrichtlinie zu definieren:

```http
Permissions-Policy: bluetooth=(self "https://example.com")
```

### Mit einem `<iframe>`-Element

FastCorp Inc. möchte `bluetooth` für alle Cross-Origin-Kinderframes deaktivieren, außer für ein bestimmtes `<iframe>`.
Dies kann durch die Auslieferung des folgenden HTTP-Antwort-Headers erfolgen, um eine Berechtigungsrichtlinie zu definieren:

```http
Permissions-Policy: bluetooth=(self https://other.com/blue)
```

Fügen Sie dann ein {{HTMLElement('iframe','allow','#Attributes')}} Attribut zum `<iframe>`-Element hinzu:

```html
<iframe src="https://other.com/blue" allow="bluetooth"></iframe>
```

`<iframe>`-Attribute können Features in bestimmten Frames selektiv aktivieren, und nicht in anderen, selbst wenn diese Frames Dokumente vom gleichen Ursprung enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
