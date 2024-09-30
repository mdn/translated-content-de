---
title: "HTMLIFrameElement: Eigenschaften allow"
short-title: allow
slug: Web/API/HTMLIFrameElement/allow
l10n:
  sourceCommit: 8beb479c558d4220932721e61b6a334d5b5c274a
---

{{APIRef("HTML DOM")}}

Die **`allow`**-Eigenschaft der [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Schnittstelle zeigt die für dieses `<iframe>`-Element festgelegte [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) an. Die Richtlinie definiert, welche Funktionen dem `<iframe>`-Element zur Verfügung stehen (z. B. der Zugriff auf das `microphone`, `camera`, `battery`, `web-share` usw.), basierend auf der Herkunft der Anfrage.

Die durch das `allow`-Attribut festgelegte Permissions Policy stellt eine zusätzliche Einschränkung zu der im {{HTTPHeader("Permissions-Policy")}}-Header spezifizierten Richtlinie dar. Sie ersetzt diese nicht.

Siehe die [Syntax der Permissions Policy von `<iframe>`](/de/docs/Web/HTTP/Headers/Permissions-Policy#iframes) für weitere Details.

Es spiegelt das `allow`-Attribut des {{HTMLElement("iframe")}}-Elements wider.

## Wert

Ein String, der die [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) für dieses {{HTMLElement("iframe")}}-Element angibt. Jede Richtlinie muss durch ein Leerzeichen getrennt sein.

## Beispiele

```html
<iframe
  id="el"
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

```js
const el = document.getElementById("el");
console.log(el.allow); // Output: "geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"
```

Siehe [Permissions Policy im `<iframe>`-Element](/de/docs/Web/HTTP/Headers/Permissions-Policy#iframes) für mehr verfügbare Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
