---
title: "HTMLGeolocationElement: Eigenschaft initialPermissionStatus"
short-title: initialPermissionStatus
slug: Web/API/HTMLGeolocationElement/initialPermissionStatus
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("Navigation API")}}

Die schreibgeschützte Eigenschaft **`initialPermissionStatus`** der [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Schnittstelle gibt einen enumerierten Wert zurück, der den Berechtigungsstatus für die `geolocation`-Funktion beim ersten Laden der Seite darstellt.

Wenn Sie auf den aktuellen Berechtigungsstatus für die `geolocation`-Funktion zugreifen möchten, verwenden Sie die [`HTMLGeolocationElement.permissionStatus`](/de/docs/Web/API/HTMLGeolocationElement/permissionStatus)-Eigenschaft.

## Wert

Ein enumerierter Wert, der einer der folgenden sein kann:

- `granted`
  - : Der Benutzer hat zuvor die Erlaubnis erteilt, dass der Browser die `geolocation`-Funktion verwenden darf, entweder über das {{htmlelement("geolocation")}}-Element oder einen anderen Mechanismus. Wenn das `<geolocation>`-Element verwendet wird, bedeutet das, dass der Benutzer zuvor die gerenderte Schaltfläche gedrückt und eine "zulassen"-Option ausgewählt hat.

    Falls das `<geolocation>`-Element das [`autolocate`](/de/docs/Web/HTML/Reference/Elements/geolocation#autolocate)-Attribut auf `true` gesetzt hat und die Erlaubnis zuvor erteilt wurde, wird der Browser beginnen, Standortdaten anzufordern, sobald die Seite geladen wird, ohne dass der Benutzer die Schaltfläche drücken muss.

- `denied`
  - : Der Benutzer hat zuvor die Erlaubnis verweigert, dass der Browser die `geolocation`-Funktion verwenden darf, entweder über das `<geolocation>`-Element oder einen anderen Mechanismus. Wenn das `<geolocation>`-Element verwendet wird, bedeutet das, dass der Benutzer zuvor die gerenderte Schaltfläche gedrückt und eine "nicht zulassen"-Option ausgewählt hat.
- `prompt`
  - : Der Benutzer hat der Verwendung der `geolocation`-Funktion durch den Browser weder zuvor zugestimmt noch widersprochen. Wenn das `<geolocation>`-Element verwendet wird, bedeutet das, dass der Benutzer die gerenderte Schaltfläche noch nicht gedrückt hat.

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

### Verwendung des anfänglichen Berechtigungsstatus zur Benutzerinformation beim Laden der Seite

In diesem Beispiel verwenden wir den anfänglichen Berechtigungsstatus, um eine entsprechende Nachricht auf dem Bildschirm auszugeben, die den Benutzer darüber informiert, welche Aktion die {{htmlelement("geolocation")}}-Schaltfläche ausführen wird.

#### HTML

Wir fügen ein `<geolocation>`-Element und zwei {{htmlelement("p")}}-Elemente ein, eines zur Ausgabe von Berechtigungsstatusnachrichten und eines zur Ausgabe von Standortdaten.

```html
<geolocation>
  Your browser doesn't support the <code>&lt;geolocation&gt;</code> element.
</geolocation>
<p id="status"></p>
<p id="output"></p>
```

#### JavaScript

In unserem JavaScript beginnen wir damit, Referenzen zu allen drei unserer HTML-Elemente zu erfassen:

```js
const statusElem = document.querySelector("#status");
const outputElem = document.querySelector("#output");
const geo = document.querySelector("geolocation");
```

Als Nächstes fügen wir eine `if...else if`-Struktur hinzu, die überprüft, welcher `initialPermissionStatus` vorliegt, und eine Statusmeldung auf dem Bildschirm ausgibt, um den Benutzer darüber zu informieren, welchen Status es gibt, was zum Verwenden der App notwendig ist und was die Schaltfläche bei Betätigung tun wird.

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

Abschließend fügen wir einen [`location`](/de/docs/Web/API/HTMLGeolocationElement/location_event)-Ereignislistener zum `HTMLGeolocationElement`-Objekt hinzu, um zu erkennen, wann die Standortdatenanforderung zurückgegeben wird. Wenn die Daten erfolgreich zurückgegeben werden, greifen wir darauf über die [`HTMLGeolocationElement.position`](/de/docs/Web/API/HTMLGeolocationElement/position)-Eigenschaft zu und geben die Breiten- und Längengradwerte im Ausgabeabsatz aus. Wenn die Datenanforderung fehlschlägt, greifen wir über die [`HTMLGeolocationElement.error`](/de/docs/Web/API/HTMLGeolocationElement/error)-Eigenschaft auf den Fehler zu und geben ihn im Ausgabeabsatz aus.

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

Sehen Sie sich das Beispiel [live ausgeführt](https://mdn.github.io/dom-examples/geolocation-element/initial-permission-status/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/initial-permission-status)) an. Versuchen Sie, die `<geolocation>`-Schaltfläche mehrmals auszuwählen und jedes Mal eine andere Option im resultierenden Dialogfeld zu wählen und die Seite neu zu laden, um zu sehen, wie sich die Ausgabemeldung zur Darstellung der Situation ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}}-Element
