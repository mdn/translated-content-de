---
title: "Permissions-Policy: bluetooth"
slug: Web/HTTP/Headers/Permissions-Policy/bluetooth
l10n:
  sourceCommit: 727b432491cb8fea8e3e7599cc41e0ae5b0120dd
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header `bluetooth`-Direktive steuert, ob das aktuelle Dokument die [Web Bluetooth API](/de/docs/Web/API/Web_Bluetooth_API) verwenden darf.

Konkret bedeutet dies, dass, wo eine definierte Richtlinie die Nutzung dieser Funktion verbietet, die Methoden des {{domxref('Bluetooth')}}-Objekts, das von {{domxref('Navigator.bluetooth')}} zurückgegeben wird, den Zugriff blockieren werden:

- {{DOMxRef("Bluetooth.getAvailability()")}} wird sein zurückgegebenes {{jsxref("Promise")}} immer mit einem Wert von `false` erfüllen.
- {{DOMxRef("Bluetooth.getDevices()")}} wird sein zurückgegebenes {{jsxref("Promise")}} mit einem `SecurityError`-{{domxref("DOMException")}} ablehnen.
- {{DOMxRef("Bluetooth.requestDevice()")}} wird sein zurückgegebenes {{jsxref("Promise")}} mit einem `SecurityError`-{{domxref("DOMException")}} ablehnen.

## Syntax

```http
Permissions-Policy: bluetooth=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis erteilt wird, die Funktion zu nutzen. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für mehr Details.

## Standardrichtlinie

Die Standard-Whitelist für `bluetooth` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Web Bluetooth API in allen Browsing-Kontexten außer für ihren eigenen Ursprung und diejenigen, deren Ursprung `https://example.com` ist, deaktivieren.
Dazu kann sie den folgenden HTTP-Antwort-Header verwenden, um eine Berechtigungsrichtlinie zu definieren:

```http
Permissions-Policy: bluetooth=(self "https://example.com")
```

### Mit einem \<iframe>-Element

FastCorp Inc. möchte `bluetooth` für alle Cross-Origin-Child-Frames deaktivieren, außer für ein bestimmtes `<iframe>`.
Dazu kann sie den folgenden HTTP-Antwort-Header verwenden, um eine Berechtigungsrichtlinie zu definieren:

```http
Permissions-Policy: bluetooth=(self https://other.com/blue)
```

Dann ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut im `<iframe>`-Element einfügen:

```html
<iframe src="https://other.com/blue" allow="bluetooth"></iframe>
```

`<iframe>`-Attribute können Funktionen in bestimmten Frames selektiv aktivieren und in anderen nicht, selbst wenn diese Frames Dokumente vom gleichen Ursprung enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
