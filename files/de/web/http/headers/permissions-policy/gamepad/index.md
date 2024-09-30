---
title: "Permissions-Policy: gamepad"
slug: Web/HTTP/Headers/Permissions-Policy/gamepad
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `gamepad` steuert, ob das aktuelle Dokument die Nutzung der [Gamepad API](/de/docs/Web/API/Gamepad_API) erlaubt.

Insbesondere wird bei einer definierten Richtlinie, die die Nutzung dieses Features blockiert, ein `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) bei Aufrufen von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) ausgelöst. Zusätzlich werden die Ereignisse [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) nicht ausgelöst.

## Syntax

```http
Permissions-Policy: gamepad=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-`allowlist` für `gamepad` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Gamepad API in allen Browserkontexten deaktivieren, außer für den eigenen Ursprung und diejenigen mit dem Ursprung `https://example.com`.
Dies kann durch das Senden des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungsrichtlinie erreicht werden:

```http
Permissions-Policy: gamepad=(self "https://example.com")
```

### Mit einem \<iframe>-Element

FastCorp Inc. möchte `gamepad` für alle Cross-Origin-Kindrahmen deaktivieren, außer für ein bestimmtes `<iframe>`.
Dies kann durch das Senden des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungsrichtlinie erreicht werden:

```http
Permissions-Policy: gamepad=(self)
```

Dann fügen Sie ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut zum `<iframe>`-Element hinzu:

```html
<iframe src="https://other.com/game" allow="gamepad"></iframe>
```

Iframe-Attribute können Funktionen selektiv in bestimmten Rahmen aktivieren und in anderen nicht, selbst wenn diese Rahmen Dokumente desselben Ursprungs enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
