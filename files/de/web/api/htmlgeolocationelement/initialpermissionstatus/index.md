---
title: "HTMLGeolocationElement: initialPermissionStatus-Eigenschaft"
short-title: initialPermissionStatus
slug: Web/API/HTMLGeolocationElement/initialPermissionStatus
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`initialPermissionStatus`** des [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Interfaces gibt einen enumerierten Wert zurück, der den Berechtigungsstatus für das `geolocation`-Feature beim ersten Laden der Seite darstellt.

Wenn Sie den aktuellen Berechtigungsstatus für das `geolocation`-Feature abrufen möchten, verwenden Sie die [`HTMLGeolocationElement.permissionStatus`](/de/docs/Web/API/HTMLGeolocationElement/permissionStatus)-Eigenschaft.

## Wert

Ein enumerierter Wert, der einer der folgenden sein kann:

- `granted`
  - : Der Benutzer hat zuvor die Erlaubnis erteilt, dass der Browser das `geolocation`-Feature verwenden darf, entweder über das {{htmlelement("geolocation")}}-Element oder einen anderen Mechanismus. Beim Verwenden des `<geolocation>`-Elements bedeutet dies, dass der Benutzer zuvor den angezeigten Button gedrückt und eine "Erlauben"-Option ausgewählt hat.

    Wenn das `<geolocation>`-Element das [`autolocate`](/de/docs/Web/HTML/Reference/Elements/geolocation#autolocate)-Attribut auf `true` gesetzt hat, und die Erlaubnis zuvor erteilt wurde, wird der Browser beginnen, Standortdaten anzufordern, sobald die Seite geladen wird, ohne dass der Benutzer den Button drücken muss.

- `denied`
  - : Der Benutzer hat zuvor die Erlaubnis verweigert, dass der Browser das `geolocation`-Feature verwenden darf, entweder über das `<geolocation>`-Element oder einen anderen Mechanismus. Beim Verwenden des `<geolocation>`-Elements bedeutet dies, dass der Benutzer zuvor den angezeigten Button gedrückt und eine "Nicht erlauben"-Option ausgewählt hat.
- `prompt`
  - : Der Benutzer hat zuvor weder die Erlaubnis erteilt noch verweigert, dass der Browser das `geolocation`-Feature verwenden darf. Beim Verwenden des `<geolocation>`-Elements bedeutet dies, dass der Benutzer zuvor den angezeigten Button nicht gedrückt hat.

## Beispiele

### Grundlegende Verwendung

```html
<geolocation></geolocation>
```

```js
const geo = document.querySelector("geolocation");
console.log(geo.initialPermissionStatus);
// "granted" if the user previously granted permission before reloading the page
```

### Verwendung des anfänglichen Berechtigungsstatus, um den Benutzer beim Laden der Seite zu informieren

In diesem Beispiel verwenden wir den anfänglichen Berechtigungsstatus, um eine entsprechende Nachricht auf dem Bildschirm auszugeben, die den Benutzer darüber informiert, welche Aktion der {{htmlelement("geolocation")}}-Button ausführen wird.

#### HTML

Wir fügen ein `<geolocation>`-Element und zwei {{htmlelement("p")}}-Elemente hinzu, eines für die Ausgabe von Berechtigungsstatusmeldungen und eines für die Ausgabe von Standortdaten.

```html
<geolocation>
  Your browser doesn't support the <code>&lt;geolocation&gt;</code> element.
</geolocation>
<p id="status"></p>
<p id="output"></p>
```

#### JavaScript

In unserem JavaScript beginnen wir damit, Referenzen zu allen drei unserer HTML-Elemente zu erhalten:

```js
const statusElem = document.querySelector("#status");
const outputElem = document.querySelector("#output");
const geo = document.querySelector("geolocation");
```

Als Nächstes integrieren wir eine `if...else if`-Struktur, die überprüft, welchen Wert `initialPermissionStatus` hat, und eine Statusmeldung auf den Bildschirm ausgibt, um den Benutzer über den Status zu informieren, was er tun muss, um die App zu verwenden, und was der Button bei Betätigung tun wird.

```js
if (geo.initialPermissionStatus === "prompt") {
  statusElem.textContent =
    "Please press the button to allow access to your location data and start requesting it.";
} else if (geo.initialPermissionStatus === "denied") {
  statusElem.textContent =
    "Permission previously denied. Please press the button to allow access to your location data and start requesting it.";
} else if (geo.initialPermissionStatus === "granted") {
  statusElem.textContent =
    "Permission previously granted. Please press the button to start requesting location data.";
}
```

Schließlich fügen wir dem `HTMLGeolocationElement`-Objekt einen [`location`](/de/docs/Web/API/HTMLGeolocationElement/location_event)-Ereignislistener hinzu, um zu erkennen, wann die Standortdatenanfrage zurückgegeben wird. Wenn die Daten erfolgreich abgerufen werden, greifen wir über die [`HTMLGeolocationElement.position`](/de/docs/Web/API/HTMLGeolocationElement/position)-Eigenschaft darauf zu und geben die Breitengrad- und Längengrad-Werte im Ausgabebereich aus. Wenn die Datenanfrage fehlschlägt, greifen wir über die [`HTMLGeolocationElement.error`](/de/docs/Web/API/HTMLGeolocationElement/error)-Eigenschaft auf den Fehler zu und geben ihn im Ausgabebereich aus.

```js
geo.addEventListener("location", () => {
  statusElem.textContent = "Data requested";
  if (geo.position) {
    outputElem.textContent += `(${geo.position.coords.latitude},${geo.position.coords.longitude}), `;
  } else if (geo.error) {
    outputElem.textContent += `${geo.error.message}, `;
  }
});
```

#### Ergebnis

Sehen Sie sich das Beispiel [live in Aktion](https://mdn.github.io/dom-examples/geolocation-element/initial-permission-status/) an ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/initial-permission-status)). Versuchen Sie, den `<geolocation>`-Button mehrmals zu drücken, indem Sie jedes Mal eine andere Option im resultierenden Dialog auswählen und die Seite neu laden, um zu sehen, wie sich die Ausgabemeldung ändert, um die Situation widerzuspiegeln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}}-Element
