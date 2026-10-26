---
title: "HTMLGeolocationElement: Ereignis validationstatuschange"
short-title: validationstatuschange
slug: Web/API/HTMLGeolocationElement/validationstatuschange_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Das Ereignis **`validationstatuschange`** der Schnittstelle [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement) wird ausgelöst, wenn sich der Wert von [`isValid`](/de/docs/Web/API/HTMLGeolocationElement/isValid) des {{htmlelement("geolocation")}}-Elements ändert.

Dies geschieht, wenn einem `<geolocation>`-Element ein [Blocker](/de/docs/Web/HTML/Reference/Elements/geolocation#geolocation_blocking) hinzugefügt oder ein Blocker daraus entfernt wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("validationstatuschange", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle verwenden:

```js-nolint
onvalidationstatuschange = (event) => { }
```

## Ereignistyp

Ein [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Ungültigkeitsgründe mit `validationstatuschange` ausgeben

In unserer [Demo zur Untersuchung von Ungültigkeitsgründen](https://mdn.github.io/dom-examples/geolocation-element/exploring-invalid-reasons/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/exploring-invalid-reasons)) verwenden wir einen `validationstatuschange`-Event-Handler, um zu melden, wenn ein `<geolocation>`-Element gültig wird, und den Grund für die Ungültigkeit auszugeben, wenn es ungültig wird:

```js
geo.addEventListener("validationstatuschange", () => {
  if (geo.isValid) {
    reasonElem.textContent = `<geolocation> is valid`;
  } else {
    reasonElem.textContent = `Invalid reason: ${geo.invalidReason}`;
  }
});
```

Bei jeder Änderung des Validierungsstatus prüfen wir mit [`HTMLGeolocationElement.isValid`](/de/docs/Web/API/HTMLGeolocationElement/isValid), ob das `<geolocation>`-Element gültig ist. Ist dies der Fall, geben wir eine entsprechende Bestätigung als Textinhalt des `<p>`-Elements aus. Ist das `<geolocation>`-Element ungültig, geben wir den Wert von [`HTMLGeolocationElement.invalidReason`](/de/docs/Web/API/HTMLGeolocationElement/invalidReason) als Textinhalt des `<p>`-Elements aus.

Eine vollständige Erläuterung dieses Beispiels finden Sie auf der Seite zu [`HTMLGeolocationElement.invalidReason`](/de/docs/Web/API/HTMLGeolocationElement/invalidReason).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}}-Element
