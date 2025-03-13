---
title: "HTMLIFrameElement: allow-Eigenschaft"
short-title: allow
slug: Web/API/HTMLIFrameElement/allow
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("HTML DOM")}}

Die **`allow`**-Eigenschaft der [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Schnittstelle gibt an, welche [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) für dieses `<iframe>`-Element festgelegt wurde. Die Richtlinie definiert, welche Funktionen für das `<iframe>`-Element verfügbar sind (zum Beispiel Zugriff auf `microphone`, `camera`, `battery`, `web-share`, usw.) basierend auf dem Ursprung der Anfrage.

Die durch das `allow`-Attribut festgelegte Berechtigungsrichtlinie stellt eine weitere Einschränkung zusätzlich zur Richtlinie dar, die im {{HTTPHeader("Permissions-Policy")}}-Header angegeben ist. Sie ersetzt diesen nicht.

Siehe [`<iframe>`'s Permissions Policy Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) für weitere Details.

Es spiegelt das `allow`-Attribut des {{HTMLElement("iframe")}}-Elements wider.

## Wert

Ein String, der die für dieses {{HTMLElement("iframe")}}-Element festgelegte [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) angibt, wobei jede Richtlinie durch ein Leerzeichen getrennt sein muss.

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

Siehe [Permissions Policy im `<iframe>`-Element](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes) für weitere verfügbare Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
