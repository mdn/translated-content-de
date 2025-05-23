---
title: "Permissions-Policy: bluetooth-Direktive"
short-title: bluetooth
slug: Web/HTTP/Reference/Headers/Permissions-Policy/bluetooth
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}} {{SeeCompatTable}}

Das HTTP-Header {{HTTPHeader("Permissions-Policy")}} `bluetooth` steuert, ob das aktuelle Dokument die [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) verwenden darf.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion verbietet, verweigern die Methoden des [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekts, das durch [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) zurückgegeben wird, den Zugriff:

- [`Bluetooth.getAvailability()`](/de/docs/Web/API/Bluetooth/getAvailability) wird immer sein zurückgegebenes {{jsxref("Promise")}} mit einem Wert von `false` erfüllen.
- [`Bluetooth.getDevices()`](/de/docs/Web/API/Bluetooth/getDevices) wird sein zurückgegebenes {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ablehnen.
- [`Bluetooth.requestDevice()`](/de/docs/Web/API/Bluetooth/requestDevice) wird sein zurückgegebenes {{jsxref("Promise")}} mit einem `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ablehnen.

## Syntax

```http
Permissions-Policy: bluetooth=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis erteilt wird, die Funktion zu nutzen. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Whitelist für `bluetooth` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Web Bluetooth API in allen Browsing-Kontexten deaktivieren, außer für deren eigenen Ursprung und solche mit dem Ursprung `https://example.com`. Dies kann durch die Zustellung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungsrichtlinie erreicht werden:

```http
Permissions-Policy: bluetooth=(self "https://example.com")
```

### Mit einem `<iframe>`-Element

FastCorp Inc. möchte `bluetooth` für alle Cross-Origin-Kindrahmen deaktivieren, außer für ein bestimmtes `<iframe>`. Dies kann durch die Zustellung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungsrichtlinie erreicht werden:

```http
Permissions-Policy: bluetooth=(self https://other.com/blue)
```

Fügen Sie dann ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut zum `<iframe>`-Element hinzu:

```html
<iframe src="https://other.com/blue" allow="bluetooth"></iframe>
```

`<iframe>`-Attribute können Funktionen selektiv in bestimmten Frames aktivieren und in anderen nicht, selbst wenn diese Frames Dokumente vom selben Ursprung enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
