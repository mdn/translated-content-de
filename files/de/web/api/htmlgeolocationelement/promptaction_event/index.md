---
title: "HTMLGeolocationElement: promptaction-Ereignis"
short-title: promptaction
slug: Web/API/HTMLGeolocationElement/promptaction_event
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Das **`promptaction`**-Ereignis der [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Schnittstelle wird ausgelöst, wenn der Benutzer das `<geolocation>`-Element aktiviert und im erscheinenden Dialog eine Option auswählt, entweder um die `geolocation`-Berechtigung zu gewähren oder zu verweigern.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("promptaction", (event) => { })

onpromptaction = (event) => { }
```

## Ereignistyp

Ein [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Verwendung von `promptaction`, um auf Benutzerberechtigungswahl zu reagieren

In unserem [Karten-Einbettungs-Demo](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)) verwenden wir einen `promptaction`-Event-Handler, um auf die Wahl des Benutzers im `<geolocation>`-Berechtigungsdialog zu reagieren:

```js
geo.addEventListener("promptaction", notifyUserGrantPermission);
```

In der Funktion `notifyUserGrantPermission()` verwenden wir die [`HTMLGeolocationElement.permissionStatus`](/de/docs/Web/API/HTMLGeolocationElement/permissionStatus)-Eigenschaft, um zu überprüfen, ob der Berechtigungsstatus `denied` oder `prompt` ist. Wenn dies der Fall ist, bitten wir den Benutzer, den Button erneut zu drücken und die Standortfreigabe zu erlauben. Dies ist nicht notwendig, wenn die Erlaubnis bereits erteilt wurde.

```js
function notifyUserGrantPermission() {
  if (geo.permissionStatus === "denied" || geo.permissionStatus === "prompt") {
    statusElem.textContent =
      'Please press the "Use location" button again and allow location for this site.';
  }
}
```

Siehe die Hauptseite von [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement) für eine vollständige Schritt-für-Schritt-Anleitung zu diesem Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}}-Element
