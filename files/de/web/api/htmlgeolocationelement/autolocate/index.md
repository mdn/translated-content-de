---
title: "HTMLGeolocationElement: autolocate-Eigenschaft"
short-title: autolocate
slug: Web/API/HTMLGeolocationElement/autolocate
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("Navigation API")}}

Die **`autolocate`**-Eigenschaft des [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Interfaces ruft einen booleschen Wert ab und setzt diesen, der angibt, ob der Browser die Standortdaten sofort anfordern soll, wenn das {{htmlelement("geolocation")}}-Element gerendert wird, vorausgesetzt, die Erlaubnis zur Nutzung der `geolocation`-Funktion wurde bereits erteilt.

Sie spiegelt den Wert des `<geolocation>`-[`autolocate`](/de/docs/Web/HTML/Reference/Elements/geolocation#autolocate)-Attributs wider.

## Wert

Ein boolescher Wert:

- Wenn `true`, werden Standortdaten sofort abgefragt, sobald das `<geolocation>`-Element gerendert wird, vorausgesetzt, die Erlaubnis zur Nutzung der `geolocation`-Funktion wurde bereits erteilt.
- Wenn `false`, werden Standortdaten nur angefordert, wenn der Benutzer die `<geolocation>`-Taste drückt.

Standardmäßig ist der Wert `false`.

Wenn die Erlaubnis zur Nutzung der `geolocation`-Funktion nicht zuvor erteilt wurde, wird die `autolocate`-Eigenschaft ignoriert.

## Beispiele

### Grundlegende Verwendung

```html
<geolocation autolocate></geolocation>
```

```js
const geo = document.querySelector("geolocation");
console.log(geo.autolocate); // true
```

Siehe unser [Beispiel zum eingebetteten Karten-Durchgang](/de/docs/Web/API/HTMLGeolocationElement#embedded_map_example) für ein Praxisbeispiel, das `autolocate` umfasst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}}-Element
