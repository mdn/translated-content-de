---
title: "Permissions-Policy: fullscreen-Direktive"
short-title: fullscreen
slug: Web/HTTP/Reference/Headers/Permissions-Policy/fullscreen
l10n:
  sourceCommit: 63c77c01567e7f6e46955ecfc2e380198f0d835c
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der `fullscreen`-Direktive steuert, ob das aktuelle Dokument [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) verwenden darf.

Speziell dort, wo eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) ein {{jsxref('Promise')}} zurückgeben, das mit einem {{jsxref('TypeError')}} abgelehnt wird.

> [!NOTE]
> Wenn sowohl diese Direktive (d.h. über das `allow`-Attribut) als auch das `allowfullscreen`-Attribut auf einem `<iframe>`-Element vorhanden sind, hat diese Direktive Vorrang.

## Syntax

```http
Permissions-Policy: fullscreen=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Allowlist für `fullscreen` ist `self`. Der oberste Browsing-Kontext und gleichartige Ursprünge (same-origin) iframes haben standardmäßig Zugang zur `fullscreen`-Funktion.

## Beispiele

### Grundlegende Nutzung

SecureCorp Inc. möchte `fullscreen` in allen Cross-Origin-Iframes verbieten, außer bei solchen, deren Ursprung `https://example.com` ist. Dies kann durch das Liefern des folgenden HTTP-Antwort-Headers geschehen, um eine Berechtigungsrichtlinie zu definieren:

```http
Permissions-Policy: fullscreen=(self "https://example.com")
```

SecureCorp Inc. muss auch ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut an jedem `<iframe>`-Element einfügen, bei dem `fullscreen` erlaubt werden soll:

```html
<iframe src="https://example.com/presentation" allow="fullscreen"></iframe>
```

> [!NOTE]
> Die Angabe des `Permissions-Policy`-Headers auf diese Weise verbietet `fullscreen` für andere Ursprünge, selbst wenn diese durch das `<iframe>` `allow`-Attribut erlaubt sind.

### Verwendung der Standardrichtlinie

Wenn eine Allowlist für `fullscreen` nicht durch einen `Permissions-Policy`-Antwort-Header definiert ist, wenden Nutzeragenten die Standard-Allowlist `self` an. In diesem Modus ist `fullscreen` im obersten Browsing-Kontext und in gleichartigen Ursprungs-iframes automatisch erlaubt, jedoch nicht in Cross-Origin-Iframes.

Um `fullscreen` in einem Cross-Origin-Iframe zu erlauben, fügen Sie ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut in das `<iframe>`-Element ein:

```html
<iframe src="https://other.com/videoplayer" allow="fullscreen"></iframe>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
