---
title: "HTMLGeolocationElement: Eigenschaft initialPermissionStatus"
short-title: initialPermissionStatus
slug: Web/API/HTMLGeolocationElement/initialPermissionStatus
l10n:
  sourceCommit: 76c2e04d720aa8260ba7d75788ed96776aac35c6
---

{{APIRef("Navigation API")}}

Die schreibgeschützte Eigenschaft **`initialPermissionStatus`** des Interfaces [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement) gibt einen aufzählbaren Wert zurück, der den Berechtigungsstatus für die Funktion `geolocation` beim ersten Laden der Seite darstellt.

Wenn Sie auf den aktuellen Berechtigungsstatus für die Funktion `geolocation` zugreifen möchten, verwenden Sie die Eigenschaft [`HTMLGeolocationElement.permissionStatus`](/de/docs/Web/API/HTMLGeolocationElement/permissionStatus).

## Wert

Ein aufzählbarer Wert, der einer der folgenden sein kann:

- `granted`
  - : Der Benutzer hat dem Browser zuvor die Berechtigung zur Verwendung der Funktion `geolocation` erteilt, entweder über das Element {{htmlelement("geolocation")}} oder einen anderen Mechanismus. Bei Verwendung des Elements `<geolocation>` bedeutet dies, dass der Benutzer zuvor die gerenderte Schaltfläche gedrückt und eine Option zum Erlauben ausgewählt hat.

    Wenn für das Element `<geolocation>` sein Attribut [`autolocate`](/de/docs/Web/HTML/Reference/Elements/geolocation#autolocate) auf `true` gesetzt ist und die Berechtigung zuvor erteilt wurde, beginnt der Browser sofort nach dem Laden der Seite mit der Anforderung von Standortdaten, ohne dass der Benutzer die Schaltfläche drücken muss.

- `denied`
  - : Der Benutzer hat dem Browser zuvor die Berechtigung zur Verwendung der Funktion `geolocation` verweigert, entweder über das Element `<geolocation>` oder einen anderen Mechanismus. Bei Verwendung des Elements `<geolocation>` bedeutet dies, dass der Benutzer zuvor die gerenderte Schaltfläche gedrückt und eine Option zum Nicht-Erlauben ausgewählt hat.
- `prompt`
  - : Der Benutzer hat dem Browser zuvor weder die Berechtigung zur Verwendung der Funktion `geolocation` erteilt noch verweigert. Bei Verwendung des Elements `<geolocation>` bedeutet dies, dass der Benutzer zuvor nicht die gerenderte Schaltfläche gedrückt hat.

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

### Verwenden des anfänglichen Berechtigungsstatus, um den Benutzer beim Laden der Seite zu informieren

In diesem Beispiel verwenden wir den anfänglichen Berechtigungsstatus, um eine passende Meldung auf dem Bildschirm auszugeben, die den Benutzer darüber informiert, welche Aktion die Schaltfläche {{htmlelement("geolocation")}} ausführen wird.

#### HTML

Wir fügen ein `<geolocation>`-Element und zwei {{htmlelement("p")}}-Elemente ein: eines zur Ausgabe von Berechtigungsstatusmeldungen und eines zur Ausgabe von Standortdaten.

```html
<geolocation>
  Your browser doesn't support the <code>&lt;geolocation&gt;</code> element.
</geolocation>
<p id="status"></p>
<p id="output"></p>
```

#### JavaScript

In unserem JavaScript beginnen wir damit, Referenzen auf alle drei HTML-Elemente abzurufen:

```js
const statusElem = document.querySelector("#status");
const outputElem = document.querySelector("#output");
const geo = document.querySelector("geolocation");
```

Als Nächstes fügen wir eine `if...else if`-Struktur ein, die prüft, wie `initialPermissionStatus` lautet, und eine Statusmeldung auf dem Bildschirm ausgibt. Diese informiert den Benutzer über den Status, darüber, was er tun muss, um die App zu verwenden, und was die Schaltfläche beim Drücken tun wird.

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

Abschließend fügen wir dem Objekt `HTMLGeolocationElement` einen Event-Listener für [`location`](/de/docs/Web/API/HTMLGeolocationElement/location_event) hinzu, um zu erkennen, wann die Anforderung von Standortdaten zurückgegeben wird. Wenn die Daten erfolgreich zurückgegeben werden, greifen wir über die Eigenschaft [`HTMLGeolocationElement.position`](/de/docs/Web/API/HTMLGeolocationElement/position) darauf zu und geben die Breiten- und Längengradwerte im Ausgabeabsatz aus. Wenn die Datenanforderung fehlschlägt, greifen wir über die Eigenschaft [`HTMLGeolocationElement.error`](/de/docs/Web/API/HTMLGeolocationElement/error) auf den Fehler zu und geben ihn im Ausgabeabsatz aus.

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

Sehen Sie sich das Beispiel [live an](https://mdn.github.io/dom-examples/geolocation-element/initial-permission-status/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/initial-permission-status)). Wählen Sie die Schaltfläche `<geolocation>` mehrfach aus, wählen Sie jedes Mal eine andere Option im daraufhin angezeigten Dialog und laden Sie die Seite neu, um zu sehen, wie sich die Ausgabemeldung entsprechend der Situation ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Element {{htmlelement("geolocation")}}
