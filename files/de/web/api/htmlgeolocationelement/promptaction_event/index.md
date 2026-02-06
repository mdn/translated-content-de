---
title: "HTMLGeolocationElement: promptaction Ereignis"
short-title: promptaction
slug: Web/API/HTMLGeolocationElement/promptaction_event
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("HTML DOM")}}

Das **`promptaction`**-Ereignis der [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Schnittstelle wird ausgelöst, wenn der Benutzer das `<geolocation>`-Element aktiviert und eine Option aus dem sich öffnenden Dialog auswählt, entweder um die `geolocation`-Berechtigung zu erteilen oder zu verweigern.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("promptaction", (event) => { })

onpromptaction = (event) => { }
```

## Ereignistyp

Ein [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Verwendung von `promptaction`, um auf Benutzerberechtigungsentscheidungen zu reagieren

In unserem [Embedded map demo](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)) verwenden wir einen `promptaction`-Ereignishandler, um auf die Entscheidung des Benutzers im `<geolocation>`-Berechtigungsdialog zu reagieren:

```js
geo.addEventListener("promptaction", notifyUserGrantPermission);
```

In der Funktion `notifyUserGrantPermission()` verwenden wir die [`HTMLGeolocationElement.permissionStatus`](/de/docs/Web/API/HTMLGeolocationElement/permissionStatus)-Eigenschaft, um zu überprüfen, ob der Berechtigungsstatus `denied` oder `prompt` ist. Falls ja, bitten wir den Benutzer, erneut den Knopf zu drücken und die Standortfreigabe zu erlauben. Diese Anfrage ist nicht erforderlich, wenn die Berechtigung bereits erteilt wurde.

```js
function notifyUserGrantPermission() {
  if (geo.permissionStatus === "denied" || geo.permissionStatus === "prompt") {
    statusElem.textContent =
      'Please press the "Use location" button again and allow location for this site.';
  }
}
```

Die Hauptseite von [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement) bietet eine vollständige Einführung in dieses Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}} Element
