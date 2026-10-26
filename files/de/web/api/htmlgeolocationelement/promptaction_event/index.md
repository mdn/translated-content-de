---
title: "HTMLGeolocationElement: promptaction-Ereignis"
short-title: promptaction
slug: Web/API/HTMLGeolocationElement/promptaction_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Das **`promptaction`**-Ereignis der [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Schnittstelle wird ausgelöst, wenn der Benutzer das `<geolocation>`-Element aktiviert und im daraufhin angezeigten Dialog eine Option auswählt, um die `geolocation`-Berechtigung entweder zu erteilen oder zu verweigern.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("promptaction", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onpromptaction = (event) => { }
```

## Ereignistyp

Ein [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Mit `promptaction` auf die Berechtigungsentscheidung des Benutzers reagieren

In unserer [Demo einer eingebetteten Karte](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)) verwenden wir einen `promptaction`-Event-Handler, um auf die Entscheidung des Benutzers im Berechtigungsdialog des `<geolocation>`-Elements zu reagieren:

```js
geo.addEventListener("promptaction", notifyUserGrantPermission);
```

In der Funktion `notifyUserGrantPermission()` prüfen wir mit der Eigenschaft [`HTMLGeolocationElement.permissionStatus`](/de/docs/Web/API/HTMLGeolocationElement/permissionStatus), ob der Berechtigungsstatus `denied` oder `prompt` ist. Falls ja, bitten wir den Benutzer, die Schaltfläche erneut zu drücken und den Standortzugriff zu erlauben. Wenn die Berechtigung bereits erteilt wurde, ist das nicht nötig.

```js
function notifyUserGrantPermission() {
  if (geo.permissionStatus === "denied" || geo.permissionStatus === "prompt") {
    statusElem.textContent =
      'Please press the "Use location" button again and allow location for this site.';
  }
}
```

Eine vollständige Erläuterung dieses Beispiels finden Sie auf der Hauptseite zu [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}}-Element
