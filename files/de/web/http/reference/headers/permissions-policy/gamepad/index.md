---
title: "Permissions-Policy: gamepad"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/gamepad
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}} {{SeeCompatTable}}

Die HTTP-Direktive {{HTTPHeader("Permissions-Policy")}} `gamepad` steuert, ob das aktuelle Dokument die [Gamepad API](/de/docs/Web/API/Gamepad_API) verwenden darf.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe an [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen. Zusätzlich werden die Ereignisse [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) nicht ausgelöst.

## Syntax

```http
Permissions-Policy: gamepad=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standardliste für `gamepad` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Gamepad API in allen Browserkontexten deaktivieren, außer für den eigenen Ursprung und für die, deren Ursprung `https://example.com` ist. Dies kann durch das Liefern des folgenden HTTP-Antwort-Headers erreicht werden, um eine Berechtigungsrichtlinie zu definieren:

```http
Permissions-Policy: gamepad=(self "https://example.com")
```

### Mit einem `<iframe>`-Element

FastCorp Inc. möchte `gamepad` für alle cross-origin Kinder-Frames deaktivieren, mit Ausnahme eines bestimmten `<iframe>`. Dies kann durch das Liefern des folgenden HTTP-Antwort-Headers erreicht werden, um eine Berechtigungsrichtlinie zu definieren:

```http
Permissions-Policy: gamepad=(self)
```

Dann fügen Sie ein {{HTMLElement('iframe','allow','#Attributes')}} Attribut im `<iframe>`-Element hinzu:

```html
<iframe src="https://other.com/game" allow="gamepad"></iframe>
```

Iframe-Attribute können Funktionen in bestimmten Frames selektiv aktivieren und in anderen nicht, selbst wenn diese Frames Dokumente vom gleichen Ursprung enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
