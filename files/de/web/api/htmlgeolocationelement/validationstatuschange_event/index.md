---
title: "HTMLGeolocationElement: validationstatuschange Ereignis"
short-title: validationstatuschange
slug: Web/API/HTMLGeolocationElement/validationstatuschange_event
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("HTML DOM")}}

Das **`validationstatuschange`** Ereignis der [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement) Schnittstelle wird ausgelöst, wann immer sich der [`isValid`](/de/docs/Web/API/HTMLGeolocationElement/isValid) Wert des {{htmlelement("geolocation")}} Elements ändert.

Dies geschieht, wenn ein [Blocker](/de/docs/Web/HTML/Reference/Elements/geolocation#geolocation_blocking) zu einem `<geolocation>` Element hinzugefügt oder von diesem entfernt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("validationstatuschange", (event) => { })

onvalidationstatuschange = (event) => { }
```

## Ereignistyp

Ein [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Verwendung von `validationstatuschange`, um ungültige Gründe zu melden

In unserem [Demo zur Erkundung ungültiger Gründe](https://mdn.github.io/dom-examples/geolocation-element/exploring-invalid-reasons/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/exploring-invalid-reasons)) verwenden wir einen `validationstatuschange` Ereignishandler, um zu melden, wenn ein `<geolocation>` Element gültig wird, und die ungültigen Gründe zu melden, wenn es ungültig wird:

```js
geo.addEventListener("validationstatuschange", () => {
  if (geo.isValid) {
    reasonElem.textContent = `<geolocation> is valid`;
  } else {
    reasonElem.textContent = `Invalid reason: ${geo.invalidReason}`;
  }
});
```

Wann immer sich der Validierungsstatus ändert, überprüfen wir, ob das `<geolocation>` Element gültig ist, indem wir [`HTMLGeolocationElement.isValid`](/de/docs/Web/API/HTMLGeolocationElement/isValid) verwenden, und falls dies der Fall ist, drucken wir eine Bestätigungsmeldung in den Textinhalt des `<p>` Elements. Wenn das `<geolocation>` Element ungültig ist, drucken wir den [`HTMLGeolocationElement.invalidReason`](/de/docs/Web/API/HTMLGeolocationElement/invalidReason) in den Textinhalt des `<p>` Elements.

Sehen Sie sich die [`HTMLGeolocationElement.invalidReason`](/de/docs/Web/API/HTMLGeolocationElement/invalidReason) Seite für eine vollständige Darstellung dieses Beispiels an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}} Element
