---
title: "HTMLGeolocationElement: validationstatuschange-Ereignis"
short-title: validationstatuschange
slug: Web/API/HTMLGeolocationElement/validationstatuschange_event
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Das **`validationstatuschange`**-Ereignis des [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Interfaces wird ausgelöst, wann immer sich der Wert [`isValid`](/de/docs/Web/API/HTMLGeolocationElement/isValid) des {{htmlelement("geolocation")}}-Elements ändert.

Dies erfolgt, wenn ein [Blocker](/de/docs/Web/HTML/Reference/Elements/geolocation#geolocation_blocking) zu einem `<geolocation>`-Element hinzugefügt oder von diesem entfernt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("validationstatuschange", (event) => { })

onvalidationstatuschange = (event) => { }
```

## Ereignistyp

Ein [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Verwendung von `validationstatuschange`, um ungültige Gründe zu melden

In unserem [Exploring invalid reasons demo](https://mdn.github.io/dom-examples/geolocation-element/exploring-invalid-reasons/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/exploring-invalid-reasons)) verwenden wir einen `validationstatuschange`-Ereignis-Handler, um zu melden, wann ein `<geolocation>`-Element gültig wird, und den ungültigen Grund zu berichten, wenn es ungültig wird:

```js
geo.addEventListener("validationstatuschange", () => {
  if (geo.isValid) {
    reasonElem.textContent = `<geolocation> is valid`;
  } else {
    reasonElem.textContent = `Invalid reason: ${geo.invalidReason}`;
  }
});
```

Wann immer sich der Validierungsstatus ändert, prüfen wir, ob das `<geolocation>`-Element mit [`HTMLGeolocationElement.isValid`](/de/docs/Web/API/HTMLGeolocationElement/isValid) gültig ist. Falls ja, geben wir eine Bestätigungsnachricht in den Textinhalt des `<p>`-Elements aus. Ist das `<geolocation>`-Element ungültig, geben wir den [`HTMLGeolocationElement.invalidReason`](/de/docs/Web/API/HTMLGeolocationElement/invalidReason) im Textinhalt des `<p>`-Elements aus.

Besuchen Sie die Seite [`HTMLGeolocationElement.invalidReason`](/de/docs/Web/API/HTMLGeolocationElement/invalidReason) für eine vollständige Erläuterung dieses Beispiels.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}}-Element
