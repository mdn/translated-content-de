---
title: "HTMLGeolocationElement: isValid-Eigenschaft"
short-title: isValid
slug: Web/API/HTMLGeolocationElement/isValid
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`isValid`**-Schreibgeschützte Eigenschaft des [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob das zugehörige {{htmlelement("geolocation")}}-Element gültig oder ungültig (blockiert) ist.

Wenn ein [Blocker](/de/docs/Web/HTML/Reference/Elements/geolocation#geolocation_blocking) auf einem `<geolocation>`-Element aktiv ist, wird es daran gehindert, zu funktionieren (ungültig), entweder vorübergehend oder dauerhaft, abhängig vom Grund.

Sie können den Grund, warum es ungültig ist, über die [`HTMLGeolocationElement.invalidReason`](/de/docs/Web/API/HTMLGeolocationElement/invalidReason)-Eigenschaft abrufen — sehen Sie sich diese Seite an für eine vollständige Liste möglicher Gründe.

## Wert

Ein boolescher Wert:

- Falls `true`, ist das `<geolocation>`-Element gültig und funktionsfähig, was bedeutet, dass es verwendet werden kann, um Standortdaten anzufordern.
- Falls `false`, ist das `<geolocation>`-Element ungültig und nicht funktionsfähig, was bedeutet, dass es nicht verwendet werden kann, um Standortdaten anzufordern.

Standardmäßig `false`.

## Beispiele

### Grundlegende Verwendung

```html
<geolocation></geolocation>
```

```js
const geo = document.querySelector("geolocation");
console.log(geo.isValid);
// true, provided the `<geolocation>` element is not blocked in some way
```

Sehen Sie sich die Seite [`HTMLGeolocationElement.invalidReason`](/de/docs/Web/API/HTMLGeolocationElement/invalidReason) für ein vollständigeres Beispiel, das `isValid` beinhaltet, an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}}-Element
