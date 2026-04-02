---
title: "HTMLGeolocationElement: initialPermissionStatus-Eigenschaft"
short-title: initialPermissionStatus
slug: Web/API/HTMLGeolocationElement/initialPermissionStatus
l10n:
  sourceCommit: 3d49f18251e1f3493ef2e3a70519603345f8b7dc
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`initialPermissionStatus`** schreibgeschützte Eigenschaft der [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Schnittstelle gibt einen enumerierten Wert zurück, der den Berechtigungsstatus für die `geolocation`-Funktion beim ersten Laden der Seite darstellt.

Wenn Sie auf den aktuellen Berechtigungsstatus für die `geolocation`-Funktion zugreifen möchten, verwenden Sie die [`HTMLGeolocationElement.permissionStatus`](/de/docs/Web/API/HTMLGeolocationElement/permissionStatus)-Eigenschaft.

## Wert

Ein enumerierter Wert, der einer der folgenden sein kann:

- `granted`
  - : Der Benutzer hat zuvor die Erlaubnis erteilt, dass der Browser die `geolocation`-Funktion verwenden darf, entweder über das {{htmlelement("geolocation")}}-Element oder einen anderen Mechanismus. Beim Verwenden des `<geolocation>`-Elements bedeutet dies, dass der Benutzer zuvor den angezeigten Button gedrückt und eine "erlauben" Option ausgewählt hat.

    Wenn das `<geolocation>`-Element sein [`autolocate`](/de/docs/Web/HTML/Reference/Elements/geolocation#autolocate)-Attribut auf `true` gesetzt hat und die Erlaubnis zuvor erteilt wurde, wird der Browser beginnen, Standortdaten anzufordern, sobald die Seite geladen wird, ohne dass der Benutzer den Button drücken muss.

- `denied`
  - : Der Benutzer hat zuvor die Erlaubnis verweigert, dass der Browser die `geolocation`-Funktion verwenden darf, entweder über das `<geolocation>`-Element oder einen anderen Mechanismus. Beim Verwenden des `<geolocation>`-Elements bedeutet dies, dass der Benutzer zuvor den angezeigten Button gedrückt und eine "nicht erlauben" Option ausgewählt hat.
- `prompt`
  - : Der Benutzer hat zuvor weder die Erlaubnis erteilt noch verweigert, dass der Browser die `geolocation`-Funktion verwenden darf. Beim Verwenden des `<geolocation>`-Elements bedeutet dies, dass der Benutzer zuvor nicht den angezeigten Button gedrückt hat.

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

Wir fügen ein `<geolocation>`-Element und zwei {{htmlelement("p")}}-Elemente hinzu, eines zur Ausgabe von Berechtigungsstatus-Nachrichten und eines zur Ausgabe von Standortdaten.

```html
<geolocation>
  Your browser doesn't support the <code>&lt;geolocation&gt;</code> element.
</geolocation>
<p id="status"></p>
<p id="output"></p>
```

#### JavaScript

In unserem JavaScript beginnen wir damit, Referenzen zu allen unseren drei HTML-Elementen zu erhalten:

```js
const statusElem = document.querySelector("#status");
const outputElem = document.querySelector("#output");
const geo = document.querySelector("geolocation");
```

Anschließend fügen wir eine `if...else if`-Struktur ein, die überprüft, welchen Wert `initialPermissionStatus` hat, und eine Statusnachricht auf dem Bildschirm ausgibt, um den Benutzer darüber zu informieren, wie der Status ist, was er tun muss, um die App zu verwenden, und was der Button tun wird, wenn er gedrückt wird.

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

Schließlich fügen wir einen [`location`](/de/docs/Web/API/HTMLGeolocationElement/location_event)-Ereignislistener zum `HTMLGeolocationElement`-Objekt hinzu, um zu erkennen, wann die Anforderung der Standortdaten zurückgegeben wird. Wenn die Daten erfolgreich zurückgegeben werden, greifen wir über die [`HTMLGeolocationElement.position`](/de/docs/Web/API/HTMLGeolocationElement/position)-Eigenschaft darauf zu und drucken die Breitengrad- und Längengradwerte in den Ausgabeabsatz. Wenn die Datenanforderung fehlschlägt, greifen wir über die [`HTMLGeolocationElement.error`](/de/docs/Web/API/HTMLGeolocationElement/error)-Eigenschaft auf den Fehler zu und drucken ihn in den Ausgabeabsatz.

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

Sehen Sie sich das Beispiel [live ausführen](https://mdn.github.io/dom-examples/geolocation-element/initial-permission-status/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/initial-permission-status)) an. Versuchen Sie, den `<geolocation>`-Button mehrmals auszuwählen, jedes Mal eine andere Option aus dem resultierenden Dialog auszuwählen und die Seite neu zu laden, um zu sehen, wie sich die Ausgabenachricht ändert, um die Situation widerzuspiegeln.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}}-Element
