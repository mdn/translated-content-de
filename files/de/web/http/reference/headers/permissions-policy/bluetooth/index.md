---
title: "Permissions-Policy: bluetooth-Direktive"
short-title: bluetooth
slug: Web/HTTP/Reference/Headers/Permissions-Policy/bluetooth
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} `bluetooth`-Direktive kontrolliert, ob das aktuelle Dokument die [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) verwenden darf.

Konkret wird, wenn eine festgelegte Richtlinie die Nutzung dieses Features untersagt, der Zugriff auf die Methoden des [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekts, das von [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) zurückgegeben wird, blockiert:

- [`Bluetooth.getAvailability()`](/de/docs/Web/API/Bluetooth/getAvailability) wird sein zurückgegebenes {{jsxref("Promise")}} immer mit einem Wert von `false` erfüllen.
- [`Bluetooth.getDevices()`](/de/docs/Web/API/Bluetooth/getDevices) wird sein zurückgegebenes {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ablehnen.
- [`Bluetooth.requestDevice()`](/de/docs/Web/API/Bluetooth/requestDevice) wird sein zurückgegebenes {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ablehnen.

## Syntax

```http
Permissions-Policy: bluetooth=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis erteilt wird, das Feature zu verwenden. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-allowlist für `bluetooth` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Web Bluetooth API in allen Browsing-Kontexten deaktivieren, außer für den eigenen Ursprung und Ursprünge, die `https://example.com` sind. Dies kann durch Bereitstellung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungsrichtlinie erfolgen:

```http
Permissions-Policy: bluetooth=(self "https://example.com")
```

### Mit einem `<iframe>`-Element

FastCorp Inc. möchte `bluetooth` für alle fremden Ursprung-Kinderrahmen deaktivieren, außer für ein bestimmtes `<iframe>`. Dies kann durch Bereitstellung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungsrichtlinie erreicht werden:

```http
Permissions-Policy: bluetooth=(self https://other.com/blue)
```

Dann ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut im `<iframe>`-Element einfügen:

```html
<iframe src="https://other.com/blue" allow="bluetooth"></iframe>
```

`<iframe>`-Attribute können die Funktionen selektiv in bestimmten Rahmen aktivieren und in anderen nicht, selbst wenn diese Rahmen Dokumente vom gleichen Ursprung enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
