---
title: "HTMLGeolocationElement: permissionStatus-Eigenschaft"
short-title: permissionStatus
slug: Web/API/HTMLGeolocationElement/permissionStatus
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("Navigation API")}}

Die **`permissionStatus`**-Eigenschaft des [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Interfaces zum Nur-Lesen gibt einen enumerierten Wert zurück, der den aktuellen Berechtigungsstatus für das `geolocation`-Feature darstellt.

Wenn Sie auf den anfänglichen Berechtigungsstatus für das `geolocation`-Feature zugreifen möchten, wie er beim ersten Laden der Seite war, verwenden Sie die [`initialPermissionStatus`](/de/docs/Web/API/HTMLGeolocationElement/initialPermissionStatus)-Eigenschaft.

## Wert

Ein enumerierter Wert, der einer der folgenden sein kann:

- `granted`
  - : Der Benutzer hat die Berechtigung für den Browser erteilt, das `geolocation`-Feature zu nutzen, entweder über das {{htmlelement("geolocation")}}-Element oder einen anderen Mechanismus. Bei der Verwendung des `<geolocation>`-Elements bedeutet dies, dass der Benutzer den angezeigten Button gedrückt und eine "Erlauben"-Option ausgewählt hat, woraufhin der Browser beginnt, Standortdaten anzufordern.
- `denied`
  - : Der Benutzer hat die Berechtigung für den Browser abgelehnt, das `geolocation`-Feature zu nutzen, entweder über das `<geolocation>`-Element oder einen anderen Mechanismus. Bei der Verwendung des `<geolocation>`-Elements bedeutet dies, dass der Benutzer den angezeigten Button gedrückt und eine "Nicht erlauben"-Option ausgewählt hat. Der Browser wird keine Standortdaten anfordern, bis der Benutzer den Button erneut drückt und eine "Erlauben"-Option auswählt.
- `prompt`
  - : Der Benutzer hat weder speziell die Berechtigung erteilt noch abgelehnt, dass der Browser das `geolocation`-Feature nutzen darf, was bedeutet, dass der Browser keine Standortdaten anfordern wird, bis sie die Berechtigung erteilen. Bei der Verwendung des `<geolocation>`-Elements bedeutet dies, dass der Benutzer den angezeigten Button noch nicht gedrückt hat. Wenn er dies tut, erhält er die Option, die Berechtigung zu erteilen oder abzulehnen, dass der Browser Standortdaten anfragt.

Der Berechtigungsstatus bleibt zwischen Seitenladevorgängen bestehen. Wenn das `<geolocation>`-Element sein [`autolocate`](/de/docs/Web/HTML/Reference/Elements/geolocation#autolocate)-Attribut auf `true` gesetzt hat und die Berechtigung zuvor erteilt wurde, beginnt der Browser sofort mit der Anforderung von Standortdaten, sobald das `<geolocation>`-Element angezeigt wird, ohne dass der Benutzer den Button drücken muss.

## Beispiele

### Grundlegende Nutzung

```html
<geolocation></geolocation>
```

```js
const geo = document.querySelector("geolocation");
console.log(geo.permissionStatus);
// "prompt" if this is the first time the user has accessed this page
```

### Verwendung des Berechtigungsstatus zur Information des Benutzers

In unserem [Eingebettete Karte](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/)-Beispiel ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)) fügen wir einen [`promptaction`](/de/docs/Web/API/HTMLGeolocationElement/promptaction_event)-Ereignislistener dem `HTMLGeolocationElement`-Objekt hinzu, das unser `<geolocation>`-Element darstellt.

```js
geo.addEventListener("promptaction", notifyUserGrantPermission);
```

In der referenzierten `notifyUserGrantPermission()`-Funktion verwenden wir die `permissionStatus`-Eigenschaft, um zu überprüfen, ob der Berechtigungsstatus `denied` oder `prompt` ist. Falls ja, bitten wir den Benutzer, den Button erneut zu drücken und die Erlaubnis zu erteilen. Wenn sie die Erlaubnis erteilen, müssen wir nicht mehr fragen.

```js
function notifyUserGrantPermission() {
  if (geo.permissionStatus === "denied" || geo.permissionStatus === "prompt") {
    statusElem.textContent =
      'Please press the "Use location" button again and allow location for this site.';
  }
}
```

Die Hauptseite [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement) bietet eine vollständige Anleitung zu diesem Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}}-Element
