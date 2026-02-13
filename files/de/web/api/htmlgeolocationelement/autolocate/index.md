---
title: "HTMLGeolocationElement: autolocate-Eigenschaft"
short-title: autolocate
slug: Web/API/HTMLGeolocationElement/autolocate
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`autolocate`**-Eigenschaft des [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Interfaces liest und setzt einen booleschen Wert, der anzeigt, ob der Browser die Standortdaten sofort anfordern soll, wenn das {{htmlelement("geolocation")}}-Element gerendert wird, vorausgesetzt, die Berechtigung zur Nutzung der `geolocation`-Funktion wurde bereits erteilt.

Sie spiegelt den Wert des [`autolocate`](/de/docs/Web/HTML/Reference/Elements/geolocation#autolocate)-Attributs des `<geolocation>`-Elements wider.

## Wert

Ein boolescher Wert:

- Wenn `true`, werden Standortdaten sofort angefordert, sobald das `<geolocation>`-Element gerendert wird, vorausgesetzt, die Berechtigung zur Nutzung der `geolocation`-Funktion wurde zuvor erteilt.
- Wenn `false`, werden Standortdaten nur angefordert, wenn der Benutzer den `<geolocation>`-Button drückt.

Standardwert ist `false`.

Wenn die Berechtigung zur Nutzung der `geolocation`-Funktion zuvor nicht erteilt wurde, wird die `autolocate`-Eigenschaft ignoriert.

## Beispiele

### Grundlegende Nutzung

```html
<geolocation autolocate></geolocation>
```

```js
const geo = document.querySelector("geolocation");
console.log(geo.autolocate); // true
```

Siehe unser [Einbettungsbeispiel mit Karte](/de/docs/Web/API/HTMLGeolocationElement#embedded_map_example) für ein Praxisbeispiel, das `autolocate` enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}}-Element
