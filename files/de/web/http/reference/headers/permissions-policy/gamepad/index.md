---
title: "Permissions-Policy: gamepad-Direktive"
short-title: gamepad
slug: Web/HTTP/Reference/Headers/Permissions-Policy/gamepad
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header `gamepad`-Direktive steuert, ob das aktuelle Dokument die [Gamepad-API](/de/docs/Web/API/Gamepad_API) verwenden darf.

Konkret bedeutet das, dass wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) einen `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) auslösen. Darüber hinaus werden die Ereignisse [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) nicht ausgelöst.

## Syntax

```http
Permissions-Policy: gamepad=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `gamepad` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Gamepad-API in allen Browsing-Kontexten deaktivieren, außer für den eigenen Ursprung und diejenigen, deren Ursprung `https://example.com` ist.
Dies kann durch die Lieferung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungsrichtlinie erreicht werden:

```http
Permissions-Policy: gamepad=(self "https://example.com")
```

### Mit einem `<iframe>`-Element

FastCorp Inc. möchte `gamepad` für alle Cross-Origin-Kindrahmen deaktivieren, außer für ein spezifisches `<iframe>`.
Dies kann durch die Lieferung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungsrichtlinie erreicht werden:

```http
Permissions-Policy: gamepad=(self)
```

Fügen Sie dann ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut in das `<iframe>`-Element ein:

```html
<iframe src="https://other.com/game" allow="gamepad"></iframe>
```

Iframe-Attribute können Funktionen in bestimmten Frames selektiv aktivieren und in anderen nicht, selbst wenn diese Frames Dokumente vom gleichen Ursprung enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
