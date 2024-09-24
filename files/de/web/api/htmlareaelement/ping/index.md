---
title: "HTMLAreaElement: ping-Eigenschaft"
short-title: ping
slug: Web/API/HTMLAreaElement/ping
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{ApiRef("HTML DOM")}}

Die **`ping`**-Eigenschaft der {{domxref("HTMLAreaElement")}}-Schnittstelle ist eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Body PING an die URLs.

Sie spiegelt das `ping`-Attribut des {{HTMLElement("area")}}-Elements wider.

> [!NOTE]
> Diese Eigenschaft ist in Firefox nicht wirksam und ihre Nutzung kann aufgrund von Datenschutz- und Sicherheitsbedenken eingeschränkt sein.

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
console.log(areaCollection[0].ping); // Ausgabe: "https://example-tracking.com https://example-analytics.com"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLAnchorElement.ping")}}-Eigenschaft
