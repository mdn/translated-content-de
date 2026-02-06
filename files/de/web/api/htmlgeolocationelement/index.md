---
title: HTMLGeolocationElement
slug: Web/API/HTMLGeolocationElement
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("HTML DOM")}}

Das **`HTMLGeolocationElement`** Interface der [HTML DOM API](/de/docs/Web/API/HTML_DOM_API) repräsentiert das {{htmlelement("geolocation")}} Element und bietet Zugriff auf dessen Eigenschaften und Ereignisse.

Dieses Element basiert auf und erbt Eigenschaften und Methoden vom [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface.

> [!NOTE]
> Das `<geolocation>` Element und das `HTMLGeolocationElement` Interface ermöglichen es dem Benutzer, seine Standortdaten auf konsistentere und intuitivere Weise mit der Seite zu teilen als die ältere [Geolocation API](/de/docs/Web/API/Geolocation_API).

{{InheritanceDiagram}}

## Konstruktor

- [`HTMLGeolocationElement()`](/de/docs/Web/API/HTMLGeolocationElement/HTMLGeolocationElement) {{experimental_inline}}
  - : Erstellt eine neue `HTMLGeolocationElement` Objektinstanz. Beachten Sie, dass dieser Konstruktor nicht direkt aufgerufen wird, sondern über eine DOM-Methode wie [`Document.createElement()`](/de/docs/Web/API/Document/createElement).

## Instanzeigenschaften

_Erbt auch Eigenschaften vom übergeordneten Interface [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`autolocate`](/de/docs/Web/API/HTMLGeolocationElement/autolocate) {{experimental_inline}}
  - : Ein boolescher Wert, der angibt, ob der Browser Standortdaten sofort anfordern soll, wenn das `<geolocation>` Element gerendert wird, vorausgesetzt, zuvor wurde die Erlaubnis erteilt. Reflektiert den Wert des `<geolocation>` [`autolocate`](/de/docs/Web/HTML/Reference/Elements/geolocation#autolocate) Attributs.
- [`error`](/de/docs/Web/API/HTMLGeolocationElement/error) {{readonlyinline}} {{experimental_inline}}
  - : Ein [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError) Objekt, das Fehlerinformationen darstellt, im Falle eines Fehlers bei der Datenabfrage.
- [`initialPermissionStatus`](/de/docs/Web/API/HTMLGeolocationElement/initialPermissionStatus) {{readonlyinline}} {{experimental_inline}}
  - : Ein enumerierter Wert, der den Erlaubnisstatus für die `geolocation` Funktion beim ersten Laden der Seite darstellt.
- [`invalidReason`](/de/docs/Web/API/HTMLGeolocationElement/invalidReason) {{readonlyinline}} {{experimental_inline}}
  - : Ein enumerierter Wert, der den Grund darstellt, warum das `<geolocation>` Element ungültig ist ([blockiert](/de/docs/Web/HTML/Reference/Elements/geolocation#geolocation_blocking)), falls dies der Fall ist.
- [`isValid`](/de/docs/Web/API/HTMLGeolocationElement/isValid) {{readonlyinline}} {{experimental_inline}}
  - : Ein boolescher Wert, der angibt, ob das `<geolocation>` Element gültig oder ungültig (blockiert) ist.
- [`permissionStatus`](/de/docs/Web/API/HTMLGeolocationElement/permissionStatus) {{readonlyinline}} {{experimental_inline}}
  - : Ein String, der den aktuellen Erlaubnisstatus für die `geolocation` Funktion darstellt.
- [`position`](/de/docs/Web/API/HTMLGeolocationElement/position) {{readonlyinline}} {{experimental_inline}}
  - : Ein [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition) Objekt, das die Position des Benutzers im Falle einer erfolgreichen Standort-Datenabfrage darstellt.
- [`watch`](/de/docs/Web/API/HTMLGeolocationElement/watch) {{experimental_inline}}
  - : Ein boolescher Wert, der anzeigt, ob der Browser die Standortdaten des Benutzers kontinuierlich aktualisieren soll, sobald sich die Position des Geräts ändert, oder nur einmal abgerufen werden soll. Reflektiert den Wert des `<geolocation>` [`watch`](/de/docs/Web/HTML/Reference/Elements/geolocation#watch) Attributs.

## Instanzmethoden

_Erbt Eigenschaften vom übergeordneten Interface [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignisse

_Erbt auch Ereignisse vom übergeordneten Interface [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`location`](/de/docs/Web/API/HTMLGeolocationElement/location_event) {{experimental_inline}}
  - : Wird ausgelöst, wann immer der Browser Standortdaten oder Fehlerinformationen erhält, wenn die Standortabfrage nicht erfolgreich war.
- [`promptaction`](/de/docs/Web/API/HTMLGeolocationElement/promptaction_event) {{experimental_inline}}
  - : Wird ausgelöst, wann immer der Benutzer das `<geolocation>` Element aktiviert und eine Option aus dem resultierenden Dialogfeld auswählt, entweder um `geolocation` Erlaubnis zu erteilen oder zu verweigern.
- [`promptdismiss`](/de/docs/Web/API/HTMLGeolocationElement/promptdismiss_event) {{experimental_inline}}
  - : Wird ausgelöst, wann immer der Benutzer das `<geolocation>` Element aktiviert und das resultierende Dialogfeld schließt, indem Sie den "Schließen"-Button oder die <kbd>Esc</kbd> Taste drücken.
- [`validationstatuschange`](/de/docs/Web/API/HTMLGeolocationElement/validationstatuschange_event) {{experimental_inline}}
  - : Wird ausgelöst, wann immer sich der [`isValid`](/de/docs/Web/API/HTMLGeolocationElement/isValid) Wert des `<geolocation>` Elements ändert.

## Beschreibung

Das `HTMLGeolocationElement` Interface repräsentiert das {{htmlelement("geolocation")}} Element, welches ein interaktives Steuerungselement erstellt, damit der Benutzer seine Standortdaten mit der Seite teilen kann.

Wenn der Benutzer das Steuerungselement aktiviert, wird ihm ein Dialogfeld angezeigt, in dem er um Erlaubnis gebeten wird, seine Standortdaten zu teilen. Wenn die Erlaubnis erteilt wird, versucht der Browser im Hintergrund, die Standortdaten des Benutzers mithilfe der Geolocation API abzurufen.

Standardmäßig fordert der Browser einmal Standortdaten an, als ob die Methode [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) aufgerufen worden wäre. Wenn jedoch das [`watch`](/de/docs/Web/HTML/Reference/Elements/geolocation#watch) Attribut auf `true` gesetzt ist, aktualisiert der Browser die Daten immer dann, wenn sich die Position des Geräts ändert, als ob [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) aufgerufen worden wäre.

Wenn die Datenabfrage abgeschlossen ist, wird das [`location`](/de/docs/Web/API/HTMLGeolocationElement/location_event) Ereignis ausgelöst, das es Ihnen ermöglicht, entsprechend zu reagieren, zum Beispiel indem Sie die Daten abrufen und die Position auf einer Karte plotten.

- Wenn Standortdaten erfolgreich abgerufen werden, sind sie in der [`HTMLGeolocationElement.position`](/de/docs/Web/API/HTMLGeolocationElement/position) Eigenschaft verfügbar, die ein [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition) Objekt enthält.
- Wenn das Abrufen von Daten nicht erfolgreich ist, sind Fehlerinformationen in der [`HTMLGeolocationElement.error`](/de/docs/Web/API/HTMLGeolocationElement/error) Eigenschaft verfügbar, die ein [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError) Objekt enthält.

Die Ereignisse [`promptaction`](/de/docs/Web/API/HTMLGeolocationElement/promptaction_event) und [`promptdismiss`](/de/docs/Web/API/HTMLGeolocationElement/promptdismiss_event) ermöglichen es Ihnen, auf die Benutzerinteraktionen mit dem `<geolocation>` Dialogfeld zu reagieren, beispielsweise um den Benutzer zu bitten, eine andere Wahl zu treffen, falls die Erlaubnis zum Zugriff auf die Daten verweigert wurde.

Wenn ein [Blocker](/de/docs/Web/HTML/Reference/Elements/geolocation#geolocation_blocking) auf einem {{htmlelement("geolocation")}} Element aktiv ist, wird es funktionsunfähig gemacht (ungültig), entweder vorübergehend oder dauerhaft, je nach Grund. Sie können überprüfen, ob es ungültig ist, indem Sie die [`HTMLGeolocationElement.isValid`](/de/docs/Web/API/HTMLGeolocationElement/isValid) Eigenschaft abfragen. Sie können auch den Grund, warum es ungültig ist, über die [`HTMLGeolocationElement.invalidReason`](/de/docs/Web/API/HTMLGeolocationElement/invalidReason) Eigenschaft zurückgeben - siehe diese Seite für eine vollständige Liste möglicher Gründe.

## Beispiele

### Grundlegende Nutzung

Für minimale Beispiele, die das `<geolocation>` Element und das zugehörige `HTMLGeolocationElement` Objekt verwenden, um Standortdaten zurückzugeben, siehe unser [Grundbeispiel](https://mdn.github.io/dom-examples/geolocation-element/basic-example/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-example)) und [Grundlagen-Beispiel für Beobachtung](https://mdn.github.io/dom-examples/geolocation-element/basic-watch-example/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-watch-example)).

Siehe die [`<geolocation>`](/de/docs/Web/HTML/Reference/Elements/geolocation#basic_usage_example) Referenzseite für eine Schritt-für-Schritt-Anleitung.

### Integriertes Kartenbeispiel

Dieses Beispiel nutzt das `<geolocation>` Element, um Ihren aktuellen Standort abzurufen, der auf einer Karte dargestellt wird, die mit [Leaflet JS](https://leafletjs.com/) gerendert wird. Das Beispiel verwendet auch einen regulären `<button>` Fallback, um die Standortdaten in nicht unterstützenden Browsern abzurufen.

#### HTML

Wir fügen ein `<geolocation>` Element mit einem `autolocate` Attribut ein, damit der Browser versucht, Standortdaten automatisch abzurufen, vorausgesetzt, die `geolocation` Erlaubnis wurde zuvor erteilt. Im `<geolocation>` Element nisten wir ein {{htmlelement("button")}} Fallback, welches in Browsern, die `<geolocation>` nicht unterstützen, dargestellt wird, um Standortdaten anfordern zu können.

```html
<geolocation autolocate>
  <button id="fallback">Use location</button>
</geolocation>
```

Als nächstes fügen wir ein {{htmlelement("p")}} Element ein, um Statusnachrichten und Fehler auszugeben.

```html
<p id="status">Status:</p>
```

Zuletzt fügen wir ein {{htmlelement("div")}} Element ein, um die Karte darin darzustellen.

```html
<div id="map"></div>
```

#### JavaScript

In unserem Skript beginnen wir damit, eine Referenz zum Status-`<p>` Element zu erhalten:

```js
const statusElem = document.querySelector("#status");
```

Als nächstes überprüfen wir, ob das `<geolocation>` Element unterstützt wird, indem wir `typeof HTMLGeolocationElement === "function"` testen:

```js
if (typeof HTMLGeolocationElement === "function") {
  // <geolocation> is supported
} else {
  // <geolocation> is not supported; use fallback button
}
```

Wenn `<geolocation>` unterstützt wird, wird der `if` Block ausgeführt. Er beginnt damit, eine Referenz zum `<geolocation>` Element zu erhalten:

```js
const geo = document.querySelector("geolocation");
```

Als nächstes fügen wir einen [`location`](/de/docs/Web/API/HTMLGeolocationElement/location_event) Ereignislistener zum resultierenden `HTMLGeolocationElement` Objekt hinzu, um zu erkennen, wann die Standortanforderung zurückgegeben wird. Wenn die Daten erfolgreich zurückgegeben werden, greifen wir über die [`HTMLGeolocationElement.position`](/de/docs/Web/API/HTMLGeolocationElement/position) Eigenschaft darauf zu und holen die Breitengrad- und Längengradwerte ab. Wir protokollieren diese in die Konsole und zeichnen sie dann auf einer Karte, indem wir sie zusammen mit einer Referenz zum `HTMLGeolocationElement` Objekt in die `drawMap()` Funktion (die wir später definieren werden) übergeben. Wenn die Anfrage fehlschlägt, greifen wir über die [`HTMLGeolocationElement.error`](/de/docs/Web/API/HTMLGeolocationElement/error) Eigenschaft auf den Fehler zu und protokollieren die Fehlermeldung in die Konsole.

```js
geo.addEventListener("location", () => {
  if (geo.position) {
    console.log(
      `${geo.position.coords.latitude},${geo.position.coords.longitude}`,
    );
    drawMap(geo.position.coords.latitude, geo.position.coords.longitude, geo);
  } else if (geo.error) {
    console.log(geo.error.message);
  }
});
```

Als nächstes fügen wir [`promptdismiss`](/de/docs/Web/API/HTMLGeolocationElement/promptdismiss_event) und [`promptaction`](/de/docs/Web/API/HTMLGeolocationElement/promptaction_event) Ereignislistener zum resultierenden `HTMLGeolocationElement` Objekt hinzu. Diese ermöglichen es uns, Funktionen als Antwort auf das Schließen oder die Auswahl einer Option im `<geolocation>` Dialogfeld durch den Benutzer auszuführen.

```js
geo.addEventListener("promptdismiss", notifyUserRetrySelection);
geo.addEventListener("promptaction", notifyUserGrantPermission);
```

Schließlich definieren wir die `notifyUserRetrySelection()` und `notifyUserGrantPermission()` Funktionen, auf die in den beiden vorherigen Ereignislistenern verwiesen wird. Erstere gibt eine Nachricht im Status-Absatz aus, die dem Benutzer sagt, er solle die Taste erneut drücken und Standorterlaubnis erteilen, da wir in diesem Fall möchten, dass der Benutzer es immer noch einmal versucht. Letztere nutzt die [`HTMLGeolocationElement.permissionStatus`](/de/docs/Web/API/HTMLGeolocationElement/permissionStatus) Eigenschaft, um zu überprüfen, ob der Erlaubnisstatus `denied` oder `prompt` ist und fordert den Benutzer auf, die Taste erneut zu drücken und Standorterlaubnis zu erteilen, falls dies nötig ist. Falls der Benutzer die Erlaubnis bereits erteilt hat, müssen wir nicht noch einmal fragen.

```js
function notifyUserRetrySelection() {
  statusElem.textContent =
    'Please press the "Use location" button again and allow location for this site.';
}

function notifyUserGrantPermission() {
  if (geo.permissionStatus === "denied" || geo.permissionStatus === "prompt") {
    statusElem.textContent =
      'Please press the "Use location" button again and allow location for this site.';
  }
}
```

Wenn `<geolocation>` nicht unterstützt wird, wird der `else` Block ausgeführt. Dieser beginnt damit, eine Referenz zum Fallback-`<button>` Element zu erhalten:

```js
const fallback = document.querySelector("#fallback");
```

Als nächstes fügen wir einen `click` Ereignishandler zum resultierenden `HTMLButtonElement` Objekt hinzu. Innerhalb davon nutzen wir einen [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) Aufruf, um die Erfolgs- und Fehlerszenarien im `HTMLGeolocationElement` Codepfad zu emulieren. Das Ergebnis ist dasselbe — wir zeichnen entweder die Standortdaten auf einer Karte, indem wir sie zusammen mit einer Referenz zum `HTMLButtonElement` Objekt in die `drawMap()` Funktion übergeben, oder geben die Fehlermeldung im Status-Absatz aus.

```js
fallback.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      drawMap(position.coords.latitude, position.coords.longitude, fallback);
    },
    (error) => {
      statusElem.textContent += `${error.message}, `;
    },
  );
});
```

Der letzte Schritt ist die Definition der `drawMap()` Funktion, die die Breitengrad- und Längengrad-Daten als Argumente annimmt, zusammen mit einer Referenz zum Button, der den Befehl ausgelöst hat. Der Funktionskörper nutzt [Leaflet JS](https://leafletjs.com/) Code (siehe den [Leaflet Quick Start Guide](https://leafletjs.com/examples/quick-start/) für eine Erklärung), um die Position des Benutzers auf der Karte zu plotten, gibt eine Erfolgsmeldung im Statusabsatz aus und versteckt den Button. Der letzte Schritt ist eine Vereinfachung, um zu verhindern, dass der Code fehlerhaft wird, wenn der Benutzer die Taste nach einem Erfolg erneut drückt.

```js
function drawMap(lat, long, btn) {
  const map = L.map("map").setView([lat, long], 13);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  const marker = L.marker([lat, long]).addTo(map);

  statusElem.textContent = "Map drawn successfully.";
  btn.style.display = "none";
}
```

#### Ergebnis

Sehen Sie diesen Code [live in Aktion](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)). Versuchen Sie, die Demos in einem unterstützenden Browser und einem nicht unterstützenden Browser zu betrachten, wenn möglich, und achten Sie auf den Unterschied im Berechtigungsdialogfluss, wenn Sie die Erlaubnis zur Nutzung von `geolocation` erteilen.

Versuchen Sie auch Folgendes:

- Nachdem Sie die `geolocation` Erlaubnis erteilt und die Karte gesehen haben, versuchen Sie, diese Erlaubnis über die verfügbaren Browsereinstellungen zu widerrufen, und laden Sie die Seite neu, um das Beispiel zurückzusetzen.
- Versuchen Sie nun, die Erlaubnis zur Nutzung von `geolocation` zu verweigern oder das Erlaubnisdialogfeld zu schließen und beachten Sie, wie die von uns eingerichteten Ereignislistener für `promptdismiss` und `promptaction` dazu führen, dass eine Nachricht im Statusabsatz ausgegeben wird, um dem Benutzer zu helfen, die Seite zu nutzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}} Element
- Die {{httpheader("Permissions-Policy/geolocation", "geolocation")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [Geolocation API](/de/docs/Web/API/Geolocation_API)
- [Permissions API](/de/docs/Web/API/Permissions_API)
- [Vorstellung des `<geolocation>` HTML-Elements](https://developer.chrome.com/blog/geolocation-html-element) auf developer.chrome.com (2026)
