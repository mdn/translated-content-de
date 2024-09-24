---
title: "HTMLIFrameElement: Eigenschaft allow"
short-title: allow
slug: Web/API/HTMLIFrameElement/allow
l10n:
  sourceCommit: 8beb479c558d4220932721e61b6a334d5b5c274a
---

{{APIRef("HTML DOM")}}

Die **`allow`**-Eigenschaft des Interfaces {{domxref("HTMLIFrameElement")}} zeigt die [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) an, die für dieses `<iframe>`-Element festgelegt ist. Die Richtlinie definiert, welche Funktionen dem `<iframe>`-Element zur Verfügung stehen (zum Beispiel Zugriff auf `microphone`, `camera`, `battery`, `web-share` usw.) basierend auf der Herkunft der Anfrage.

Die durch das Attribut `allow` festgelegte Berechtigungsrichtlinie implementiert eine weitere Einschränkung zusätzlich zu der im {{HTTPHeader("Permissions-Policy")}} Header festgelegten Richtlinie. Sie ersetzt diese nicht.

Siehe [Berechtigungsrichtlinien-Syntax von `<iframe>`](/de/docs/Web/HTTP/Headers/Permissions-Policy#iframes) für weitere Details.

Es spiegelt das `allow`-Attribut des {{HTMLElement("iframe")}}-Elements wider.

## Wert

Ein String zeigt die für dieses {{HTMLElement("iframe")}}-Element festgelegte [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) an, jede Richtlinie muss durch ein Leerzeichen getrennt sein.

## Beispiele

```html
<iframe
  id="el"
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

```js
const el = document.getElementById("el");
console.log(el.allow); // Ausgabe: "geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"
```

Siehe [Berechtigungsrichtlinie im `<iframe>`-Element](/de/docs/Web/HTTP/Headers/Permissions-Policy#iframes) für weitere verfügbare Beispiele.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
