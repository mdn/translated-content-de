---
title: "HTMLIFrameElement: allow-Eigenschaft"
short-title: allow
slug: Web/API/HTMLIFrameElement/allow
l10n:
  sourceCommit: 8beb479c558d4220932721e61b6a334d5b5c274a
---

{{APIRef("HTML DOM")}}

Die **`allow`**-Eigenschaft des [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Interfaces gibt die [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) an, die für dieses `<iframe>`-Element angegeben ist. Die Richtlinie definiert, welche Funktionen dem `<iframe>`-Element zur Verfügung stehen (zum Beispiel Zugriff auf das `microphone`, `camera`, `battery`, `web-share` usw.) basierend auf der Herkunft der Anfrage.

Die durch das `allow`-Attribut angegebene Permissions Policy stellt eine zusätzliche Einschränkung über die Richtlinie dar, die im {{HTTPHeader("Permissions-Policy")}}-Header angegeben ist. Sie ersetzt diesen nicht.

Weitere Details finden Sie in der [Syntax der Permissions Policy für `<iframe>`](/de/docs/Web/HTTP/Headers/Permissions-Policy#iframes).

Sie spiegelt das `allow`-Attribut des {{HTMLElement("iframe")}}-Elements wider.

## Wert

Ein String, der die [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) angibt, die für dieses {{HTMLElement("iframe")}}-Element spezifiziert ist, dabei muss jede Richtlinie durch ein Leerzeichen getrennt werden.

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

Siehe [Permissions Policy im `<iframe>`-Element](/de/docs/Web/HTTP/Headers/Permissions-Policy#iframes) für weitere verfügbare Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
