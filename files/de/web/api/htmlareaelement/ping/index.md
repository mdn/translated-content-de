---
title: "HTMLAreaElement: ping-Eigenschaft"
short-title: ping
slug: Web/API/HTMLAreaElement/ping
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{ApiRef("HTML DOM")}}

Die **`ping`**-Eigenschaft der [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Schnittstelle ist eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Body PING an die URLs.

Sie spiegelt das `ping`-Attribut des {{HTMLElement("area")}}-Elements wider.

> [!NOTE]
> Diese Eigenschaft ist in Firefox nicht wirksam und ihre Nutzung kann aufgrund von Bedenken bezüglich der Privatsphäre und Sicherheit eingeschränkt sein.

## Beispiel

```html
<map name="example-map" id="example-map">
  <area
    href="https://example.com"
    ping="https://example-tracking.com https://example-analytics.com"
    alt="example" />
</map>
```

```js
const areaCollection = document.getElementById("example-map").areas;
console.log(areaCollection[0].ping); // Output: "https://example-tracking.com https://example-analytics.com"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLAnchorElement.ping`](/de/docs/Web/API/HTMLAnchorElement/ping)-Eigenschaft
