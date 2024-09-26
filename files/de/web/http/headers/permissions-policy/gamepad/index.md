---
title: "Permissions-Policy: gamepad"
slug: Web/HTTP/Headers/Permissions-Policy/gamepad
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header `gamepad`-Direktive steuert, ob das aktuelle Dokument die [Gamepad-API](/de/docs/Web/API/Gamepad_API) verwenden darf.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von {{domxref('Navigator.getGamepads()')}} einen `SecurityError` {{domxref('DOMException')}} auslösen. Darüber hinaus werden die Ereignisse {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} und {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} nicht ausgelöst.

## Syntax

```http
Permissions-Policy: gamepad=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion gewährt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Whitelist für `gamepad` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Gamepad-API in allen Browsing-Kontexten außer ihrem eigenen Ursprung und denen, deren Ursprung `https://example.com` ist, deaktivieren.
Dies kann durch die Lieferung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungspolitik erreicht werden:

```http
Permissions-Policy: gamepad=(self "https://example.com")
```

### Mit einem \<iframe>-Element

FastCorp Inc. möchte `gamepad` für alle kinderübergreifenden Rahmen deaktivieren, außer für ein spezifisches `<iframe>`.
Dies kann durch die Lieferung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungspolitik erreicht werden:

```http
Permissions-Policy: gamepad=(self)
```

Fügen Sie dann ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut am `<iframe>`-Element ein:

```html
<iframe src="https://other.com/game" allow="gamepad"></iframe>
```

Iframe-Attribute können Funktionen in bestimmten Rahmen selektiv aktivieren und in anderen nicht, auch wenn diese Rahmen Dokumente aus demselben Ursprung enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
