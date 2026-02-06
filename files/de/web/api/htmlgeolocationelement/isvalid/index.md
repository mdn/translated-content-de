---
title: "HTMLGeolocationElement: isValid-Eigenschaft"
short-title: isValid
slug: Web/API/HTMLGeolocationElement/isValid
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("Navigation API")}}

Die **`isValid`** schreibgeschützte Eigenschaft des [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob das zugehörige {{htmlelement("geolocation")}}-Element gültig oder ungültig (blockiert) ist.

Wenn ein [Blocker](/de/docs/Web/HTML/Reference/Elements/geolocation#geolocation_blocking) auf einem `<geolocation>`-Element aktiv ist, wird es daran gehindert zu funktionieren (ungültig), entweder vorübergehend oder dauerhaft, je nach Grund.

Sie können den Grund, warum es ungültig ist, über die [`HTMLGeolocationElement.invalidReason`](/de/docs/Web/API/HTMLGeolocationElement/invalidReason)-Eigenschaft abrufen – auf dieser Seite finden Sie eine vollständige Liste der möglichen Gründe.

## Wert

Ein boolescher Wert:

- Wenn `true`, ist das `<geolocation>`-Element gültig und funktionsfähig, was bedeutet, dass es verwendet werden kann, um Standortdaten anzufordern.
- Wenn `false`, ist das `<geolocation>`-Element ungültig und nicht funktionsfähig, was bedeutet, dass es nicht verwendet werden kann, um Standortdaten anzufordern.

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

Siehe die Seite [`HTMLGeolocationElement.invalidReason`](/de/docs/Web/API/HTMLGeolocationElement/invalidReason) für ein vollständigeres Beispiel mit `isValid`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}}-Element
