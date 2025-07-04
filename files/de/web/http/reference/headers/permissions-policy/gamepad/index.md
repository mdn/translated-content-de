---
title: "Permissions-Policy: gamepad-Direktive"
short-title: gamepad
slug: Web/HTTP/Reference/Headers/Permissions-Policy/gamepad
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header mit der `gamepad`-Direktive steuert, ob das aktuelle Dokument die [Gamepad-API](/de/docs/Web/API/Gamepad_API) verwenden darf.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, führen Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) zu einem `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException). Außerdem werden die Events [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) nicht ausgelöst.

## Syntax

```http
Permissions-Policy: gamepad=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Allowlist für `gamepad` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Gamepad-API in allen Browsing-Kontexten deaktivieren, außer für den eigenen Ursprung und für Ursprünge, deren Ursprung `https://example.com` ist. Dies kann durch die Bereitstellung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungsrichtlinie erreicht werden:

```http
Permissions-Policy: gamepad=(self "https://example.com")
```

### Mit einem `<iframe>`-Element

FastCorp Inc. möchte `gamepad` für alle fremden Kinderframes deaktivieren, außer für ein spezifisches `<iframe>`. Dies kann durch die Bereitstellung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungsrichtlinie erreicht werden:

```http
Permissions-Policy: gamepad=(self)
```

Dann fügen Sie dem `<iframe>`-Element ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut hinzu:

```html
<iframe src="https://other.com/game" allow="gamepad"></iframe>
```

Iframe-Attribute können Funktionen in bestimmten Frames selektiv aktivieren und in anderen nicht, selbst wenn diese Frames Dokumente aus demselben Ursprung enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
