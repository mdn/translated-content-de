---
title: "HTMLGeolocationElement: permissionStatus-Eigenschaft"
short-title: permissionStatus
slug: Web/API/HTMLGeolocationElement/permissionStatus
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`permissionStatus`** der [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Schnittstelle gibt einen enumerierten Wert zurück, der den aktuellen Berechtigungsstatus für die `geolocation`-Funktion darstellt.

Wenn Sie den anfänglichen Berechtigungsstatus für die `geolocation`-Funktion abrufen möchten, wie er beim ersten Laden der Seite war, verwenden Sie die [`initialPermissionStatus`](/de/docs/Web/API/HTMLGeolocationElement/initialPermissionStatus)-Eigenschaft.

## Wert

Ein enumerierter Wert, der einer der folgenden sein kann:

- `granted`
  - : Der Benutzer hat dem Browser die Erlaubnis erteilt, die `geolocation`-Funktion zu verwenden, entweder über das {{htmlelement("geolocation")}}-Element oder einen anderen Mechanismus. Beim Verwenden des `<geolocation>`-Elements bedeutet dies, dass der Benutzer den gerenderten Button gedrückt und eine "Erlauben"-Option gewählt hat, woraufhin der Browser beginnt, Standortdaten anzufordern.
- `denied`
  - : Der Benutzer hat dem Browser die Erlaubnis zur Nutzung der `geolocation`-Funktion verweigert, entweder über das `<geolocation>`-Element oder einen anderen Mechanismus. Beim Verwenden des `<geolocation>`-Elements bedeutet dies, dass der Benutzer den gerenderten Button gedrückt und eine Option "Nicht erlauben" gewählt hat, woraufhin der Browser nicht versucht, Standortdaten anzufordern, bis der Benutzer den Button erneut drückt und eine "Erlauben"-Option wählt.
- `prompt`
  - : Der Benutzer hat nicht speziell die Erlaubnis zur Nutzung der `geolocation`-Funktion gewährt oder verweigert, was bedeutet, dass der Browser erst Standortdaten anfordert, wenn die Erlaubnis erteilt wird. Beim Verwenden des `<geolocation>`-Elements bedeutet dies, dass der Benutzer den gerenderten Button noch nicht gedrückt hat. Wenn sie es tun, erhalten sie die Option, die Erlaubnis für den Browser zur Standortdatenanforderung zu gewähren oder zu verweigern.

Der Berechtigungsstatus bleibt zwischen Seitenladevorgängen bestehen. Wenn das `<geolocation>`-Element sein [`autolocate`](/de/docs/Web/HTML/Reference/Elements/geolocation#autolocate)-Attribut auf `true` gesetzt hat und die Berechtigung zuvor erteilt wurde, beginnt der Browser sofort mit der Anforderung von Standortdaten, sobald das `<geolocation>`-Element gerendert wird, ohne dass der Benutzer den Button drücken muss.

## Beispiele

### Grundlegende Verwendung

```html
<geolocation></geolocation>
```

```js
const geo = document.querySelector("geolocation");
console.log(geo.permissionStatus);
// "prompt" if this is the first time the user has accessed this page
```

### Verwendung des Berechtigungsstatus zur Information des Benutzers

In unserem [Eingebettete Karte](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/)-Beispiel ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)) fügen wir einen [`promptaction`](/de/docs/Web/API/HTMLGeolocationElement/promptaction_event)-Ereignislistener zu dem `HTMLGeolocationElement`-Objekt hinzu, das unser `<geolocation>`-Element darstellt.

```js
geo.addEventListener("promptaction", notifyUserGrantPermission);
```

In der referenzierten `notifyUserGrantPermission()`-Funktion verwenden wir die `permissionStatus`-Eigenschaft, um zu überprüfen, ob der Berechtigungsstatus `denied` oder `prompt` ist und bitten in diesem Fall den Benutzer, den Button erneut zu drücken und die Standorterlaubnis zu erteilen. Dies ist nicht notwendig, wenn sie die Erlaubnis gewähren.

```js
function notifyUserGrantPermission() {
  if (geo.permissionStatus === "denied" || geo.permissionStatus === "prompt") {
    statusElem.textContent =
      'Please press the "Use location" button again and allow location for this site.';
  }
}
```

Sehen Sie die Hauptseite [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement) für eine vollständige Einführung in dieses Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}}-Element
