---
title: "HTMLAnchorElement: ping-Eigenschaft"
short-title: ping
slug: Web/API/HTMLAnchorElement/ping
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{ApiRef("HTML DOM")}}

Die **`ping`**-Eigenschaft des [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interfaces ist eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Körper PING an die URLs.

Sie spiegelt das `ping`-Attribut des {{HTMLElement("a")}}-Elements wider.

> [!NOTE]
> Diese Eigenschaft ist in Firefox nicht wirksam und ihre Nutzung kann aufgrund von Datenschutz- und Sicherheitsbedenken eingeschränkt sein.

## Beispiel

```html
<a
  id="exampleLink"
  href="https://example.com"
  ping="https://example-tracking.com https://example-analytics.com"
  >Example Link</a
>
```

```js
const anchorElement = document.getElementById("exampleLink");
console.log(anchorElement.ping); // Output: "https://example-tracking.com https://example-analytics.com"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLAreaElement.ping`](/de/docs/Web/API/HTMLAreaElement/ping)-Eigenschaft
