---
title: "HTMLAreaElement: ping-Eigenschaft"
short-title: ping
slug: Web/API/HTMLAreaElement/ping
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{ApiRef("HTML DOM")}}

Die **`ping`**-Eigenschaft des [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Interfaces ist eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Körper PING an die URLs.

Sie spiegelt das `ping`-Attribut des {{HTMLElement("area")}}-Elements wider.

> [!NOTE]
> Diese Eigenschaft ist in Firefox nicht wirksam und ihre Verwendung kann aufgrund von Datenschutz- und Sicherheitsbedenken eingeschränkt sein.

## Beispiel

```html
<map>
  <area
    href="https://example.com"
    ping="https://example-tracking.com https://example-analytics.com"
    alt="example" />
</map>
```

```js
const areaCollection = document.getElementsByTagName("map")[0].areas;
console.log(areaCollection[0].ping); // Output: "https://example-tracking.com https://example-analytics.com"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLAnchorElement.ping`](/de/docs/Web/API/HTMLAnchorElement/ping)-Eigenschaft
