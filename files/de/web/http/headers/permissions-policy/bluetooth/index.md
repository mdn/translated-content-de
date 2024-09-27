---
title: "Permissions-Policy: bluetooth"
slug: Web/HTTP/Headers/Permissions-Policy/bluetooth
l10n:
  sourceCommit: 727b432491cb8fea8e3e7599cc41e0ae5b0120dd
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP {{HTTPHeader("Permissions-Policy")}} Header `bluetooth` Directive steuert, ob das aktuelle Dokument die [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) verwenden darf.

Speziell dort, wo eine definierte Richtlinie die Nutzung dieser Funktion untersagt, blockieren die Methoden des [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekts, das durch [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) zurückgegeben wird, den Zugriff:

- [`Bluetooth.getAvailability()`](/de/docs/Web/API/Bluetooth/getAvailability) wird die zurückgegebene {{jsxref("Promise")}} immer mit einem Wert von `false` erfüllen.
- [`Bluetooth.getDevices()`](/de/docs/Web/API/Bluetooth/getDevices) wird die zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ablehnen.
- [`Bluetooth.requestDevice()`](/de/docs/Web/API/Bluetooth/requestDevice) wird die zurückgegebene {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ablehnen.

## Syntax

```http
Permissions-Policy: bluetooth=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Zugriffsliste für `bluetooth` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Web Bluetooth API in allen Browsing-Kontexten deaktivieren, außer für den eigenen Ursprung und diejenigen, deren Ursprung `https://example.com` ist. Sie kann dies tun, indem sie den folgenden HTTP-Antwortheader sendet, um eine Permissions Policy zu definieren:

```http
Permissions-Policy: bluetooth=(self "https://example.com")
```

### Mit einem \<iframe>-Element

FastCorp Inc. möchte `bluetooth` für alle Cross-Origin-Kinderrahmen deaktivieren, außer für ein bestimmtes `<iframe>`. Sie kann dies tun, indem sie den folgenden HTTP-Antwortheader sendet, um eine Permissions Policy zu definieren:

```http
Permissions-Policy: bluetooth=(self https://other.com/blue)
```

Dann ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut im `<iframe>`-Element einschließen:

```html
<iframe src="https://other.com/blue" allow="bluetooth"></iframe>
```

`<iframe>`-Attribute können Funktionen selektiv in bestimmten Frames aktivieren, und nicht in anderen, selbst wenn diese Frames Dokumente vom gleichen Ursprung enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
