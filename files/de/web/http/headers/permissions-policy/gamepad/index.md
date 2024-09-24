---
title: "Permissions-Policy: gamepad"
slug: Web/HTTP/Headers/Permissions-Policy/gamepad
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header mit der Direktive `gamepad` steuert, ob das aktuelle Dokument die [Gamepad API](/de/docs/Web/API/Gamepad_API) verwenden darf.

Insbesondere wird, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert, ein Aufruf von {{domxref('Navigator.getGamepads()')}} einen `SecurityError`-{{domxref('DOMException')}} auslösen. Darüber hinaus werden die Ereignisse {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} und {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} nicht ausgelöst.

## Syntax

```http
Permissions-Policy: gamepad=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `gamepad` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Gamepad-API in allen Browser-Kontexten deaktivieren, außer für den eigenen Ursprung und für die, deren Ursprung `https://example.com` ist.
Dies kann durch die Bereitstellung des folgenden HTTP-Antwort-Headers erreicht werden, um eine Berechtigungsrichtlinie zu definieren:

```http
Permissions-Policy: gamepad=(self "https://example.com")
```

### Mit einem \<iframe>-Element

FastCorp Inc. möchte `gamepad` für alle fremden untergeordneten Frames deaktivieren, außer für ein bestimmtes `<iframe>`.
Dies kann durch die Bereitstellung des folgenden HTTP-Antwort-Headers erreicht werden, um eine Berechtigungsrichtlinie zu definieren:

```http
Permissions-Policy: gamepad=(self)
```

Fügen Sie dann ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut auf dem `<iframe>`-Element hinzu:

```html
<iframe src="https://other.com/game" allow="gamepad"></iframe>
```

Iframe-Attribute können selektiv Features in bestimmten Frames und nicht in anderen aktivieren, selbst wenn diese Frames Dokumente vom selben Ursprung enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
