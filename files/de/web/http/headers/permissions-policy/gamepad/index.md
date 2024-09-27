---
title: "Permissions-Policy: gamepad"
slug: Web/HTTP/Headers/Permissions-Policy/gamepad
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `gamepad` steuert, ob das aktuelle Dokument die [Gamepad API](/de/docs/Web/API/Gamepad_API) verwenden darf.

Speziell in Fällen, in denen eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe an [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen. Außerdem werden die Ereignisse [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) nicht ausgelöst.

## Syntax

```http
Permissions-Policy: gamepad=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis erteilt wird, die Funktion zu nutzen. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die standardmäßige erlaubte Liste für `gamepad` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Gamepad API in allen Browsing-Kontexten deaktivieren, außer für ihren eigenen Ursprung und die, deren Ursprung `https://example.com` ist.
Dies kann durch die Bereitstellung des folgenden HTTP-Antwort-Headers geschehen, um eine Berechtigungsrichtlinie zu definieren:

```http
Permissions-Policy: gamepad=(self "https://example.com")
```

### Mit einem `<iframe>`-Element

FastCorp Inc. möchte `gamepad` für alle Cross-Origin-Kind-Frames deaktivieren, außer für ein bestimmtes `<iframe>`.
Dies kann durch die Bereitstellung des folgenden HTTP-Antwort-Headers geschehen, um eine Berechtigungsrichtlinie zu definieren:

```http
Permissions-Policy: gamepad=(self)
```

Dann fügen Sie ein Attribut {{HTMLElement('iframe','allow','#Attributes')}} zu dem `<iframe>`-Element hinzu:

```html
<iframe src="https://other.com/game" allow="gamepad"></iframe>
```

Iframe-Attribute können Funktionen selektiv in bestimmten Frames aktivieren, in anderen jedoch nicht, selbst wenn diese Frames Dokumente vom gleichen Ursprung enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
