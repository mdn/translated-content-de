---
title: "Permissions-Policy: bluetooth-Direktive"
short-title: bluetooth
slug: Web/HTTP/Reference/Headers/Permissions-Policy/bluetooth
l10n:
  sourceCommit: 63c77c01567e7f6e46955ecfc2e380198f0d835c
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} `bluetooth`-Direktive steuert, ob das aktuelle Dokument die [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) verwenden darf.

Konkret bedeutet dies, dass bei einer definierten Richtlinie, die die Nutzung dieser Funktion verbietet, die Methoden des [`Bluetooth`](/de/docs/Web/API/Bluetooth)-Objekts, das von [`Navigator.bluetooth`](/de/docs/Web/API/Navigator/bluetooth) zurückgegeben wird, den Zugriff blockieren:

- [`Bluetooth.getAvailability()`](/de/docs/Web/API/Bluetooth/getAvailability) wird immer sein zurückgegebenes {{jsxref("Promise")}} mit einem Wert von `false` erfüllen.
- [`Bluetooth.getDevices()`](/de/docs/Web/API/Bluetooth/getDevices) wird sein zurückgegebenes {{jsxref("Promise")}} mit einem `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) ablehnen.
- [`Bluetooth.requestDevice()`](/de/docs/Web/API/Bluetooth/requestDevice) wird sein zurückgegebenes {{jsxref("Promise")}} mit einem `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) ablehnen.

## Syntax

```http
Permissions-Policy: bluetooth=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standardzulassungsliste für `bluetooth` ist `self`. Der oberste Browsing-Kontext und gleich-originige iframes haben standardmäßig Zugriff auf die `bluetooth`-Funktion.

## Beispiele

### Grundlegende Verwendung

SecureCorp Inc. möchte `bluetooth` in allen cross-origin iframes außer denen, deren Ursprung `https://example.com` ist, verbieten. Dies kann erreicht werden, indem der folgende HTTP-Antwort-Header gesendet wird, um eine Berechtigungsrichtlinie zu definieren:

```http
Permissions-Policy: bluetooth=(self "https://example.com")
```

SecureCorp Inc. muss auch ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut in jedem `<iframe>`-Element angeben, in dem `bluetooth` erlaubt sein soll:

```html
<iframe src="https://example.com/blue" allow="bluetooth"></iframe>
```

> [!NOTE]
> Wenn der `Permissions-Policy`-Header auf diese Weise festgelegt wird, wird `bluetooth` für andere Ursprünge nicht erlaubt, auch wenn sie durch das `<iframe>` `allow`-Attribut zugelassen sind.

### Verwendung der Standardrichtlinie

Wenn eine Zulassungsliste für `bluetooth` nicht durch einen `Permissions-Policy`-Antwort-Header definiert ist, werden Benutzeragenten die Standardzulassungsliste `self` anwenden. In diesem Modus ist `bluetooth` im obersten Browsing-Kontext und bei gleich-originigen iframes automatisch erlaubt, jedoch nicht in cross-origin iframes.

Um `bluetooth` in einem cross-origin iframe zuzulassen, fügen Sie ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut im `<iframe>`-Element ein:

```html
<iframe src="https://other.com/blue" allow="bluetooth"></iframe>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
