---
title: HTMLGeolocationElement
slug: Web/API/HTMLGeolocationElement
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Das **`HTMLGeolocationElement`**-Interface der [HTML DOM API](/de/docs/Web/API/HTML_DOM_API) repräsentiert das {{htmlelement("geolocation")}}-Element und bietet Zugriff auf dessen Eigenschaften und Ereignisse.

Dieses Element basiert auf und erbt Eigenschaften und Methoden vom [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface.

> [!NOTE]
> Das `<geolocation>`-Element und das `HTMLGeolocationElement`-Interface ermöglichen es dem Benutzer, seine Standortdaten auf konsistentere und intuitivere Weise mit der Seite zu teilen als die ältere [Geolocation API](/de/docs/Web/API/Geolocation_API).

{{InheritanceDiagram}}

## Konstruktor

- [`HTMLGeolocationElement()`](/de/docs/Web/API/HTMLGeolocationElement/HTMLGeolocationElement) {{experimental_inline}}
  - : Erstellt eine neue Instanz des `HTMLGeolocationElement`-Objekts. Beachten Sie, dass dieser Konstruktor nicht direkt aufgerufen wird, sondern über eine DOM-Methode wie [`Document.createElement()`](/de/docs/Web/API/Document/createElement).

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`autolocate`](/de/docs/Web/API/HTMLGeolocationElement/autolocate) {{experimental_inline}}
  - : Ein boolescher Wert, der angibt, ob der Browser sofort Standortdaten anfordern soll, wenn das `<geolocation>`-Element gerendert wird, vorausgesetzt, die Erlaubnis wurde zuvor erteilt. Spiegelt den Wert des `<geolocation>`-[`autolocate`](/de/docs/Web/HTML/Reference/Elements/geolocation#autolocate)-Attributs wider.
- [`error`](/de/docs/Web/API/HTMLGeolocationElement/error) {{readonlyinline}} {{experimental_inline}}
  - : Ein [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekt, das Fehlerinformationen darstellt, falls es zu einem Fehler beim Abrufen von Daten kommt.
- [`initialPermissionStatus`](/de/docs/Web/API/HTMLGeolocationElement/initialPermissionStatus) {{readonlyinline}} {{experimental_inline}}
  - : Ein enumerierter Wert, der den Berechtigungsstatus für die `geolocation`-Funktion beim ersten Laden der Seite darstellt.
- [`invalidReason`](/de/docs/Web/API/HTMLGeolocationElement/invalidReason) {{readonlyinline}} {{experimental_inline}}
  - : Ein enumerierter Wert, der den Grund angibt, warum das `<geolocation>`-Element ungültig ist ([blockiert](/de/docs/Web/HTML/Reference/Elements/geolocation#geolocation_blocking)), wenn dies der Fall ist.
- [`isValid`](/de/docs/Web/API/HTMLGeolocationElement/isValid) {{readonlyinline}} {{experimental_inline}}
  - : Ein boolescher Wert, der angibt, ob das `<geolocation>`-Element gültig oder ungültig (blockiert) ist.
- [`permissionStatus`](/de/docs/Web/API/HTMLGeolocationElement/permissionStatus) {{readonlyinline}} {{experimental_inline}}
  - : Eine Zeichenfolge, die den aktuellen Berechtigungsstatus für die `geolocation`-Funktion darstellt.
- [`position`](/de/docs/Web/API/HTMLGeolocationElement/position) {{readonlyinline}} {{experimental_inline}}
  - : Ein [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekt, das die Position des Benutzers darstellt, wenn das Abrufen von Standortdaten erfolgreich war.
- [`watch`](/de/docs/Web/API/HTMLGeolocationElement/watch) {{experimental_inline}}
  - : Ein boolescher Wert, der angibt, ob der Browser kontinuierlich die Standortdaten des Benutzers aktualisieren soll, wann immer sich die Position seines Geräts ändert, oder nur einmal abrufen soll. Spiegelt den Wert des `<geolocation>`-[`watch`](/de/docs/Web/HTML/Reference/Elements/geolocation#watch)-Attributs wider.

## Instanzmethoden

_Erbt Eigenschaften von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignisse

_Erbt auch Ereignisse von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`location`](/de/docs/Web/API/HTMLGeolocationElement/location_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn der Browser Standortdaten erhält oder Fehlerinformationen, wenn die Anfrage nach Standortdaten nicht erfolgreich war.
- [`promptaction`](/de/docs/Web/API/HTMLGeolocationElement/promptaction_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn der Benutzer das `<geolocation>`-Element aktiviert und eine Option aus dem resultierenden Dialogfeld auswählt, entweder um `geolocation`-Berechtigung zu gewähren oder zu verweigern.
- [`promptdismiss`](/de/docs/Web/API/HTMLGeolocationElement/promptdismiss_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn der Benutzer das `<geolocation>`-Element aktiviert und das resultierende Dialogfeld schließt, indem er die "Schließen"-Schaltfläche drückt oder die <kbd>Esc</kbd>-Taste.
- [`validationstatuschange`](/de/docs/Web/API/HTMLGeolocationElement/validationstatuschange_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn sich der [`isValid`](/de/docs/Web/API/HTMLGeolocationElement/isValid)-Wert des `<geolocation>`-Elements ändert.

## Beschreibung

Das `HTMLGeolocationElement`-Interface repräsentiert das {{htmlelement("geolocation")}}-Element, das ein interaktives Steuerelement erstellt, mit dem der Benutzer seine Standortdaten mit der Seite teilen kann.

Wenn der Benutzer das Steuerelement aktiviert, wird ihm ein Dialogfeld angezeigt, das ihn um Erlaubnis bittet, seine Standortdaten zu teilen. Wenn er die Erlaubnis erteilt, versucht der Browser im Hintergrund, die Standortdaten des Benutzers mithilfe der Geolocation-API abzurufen.

Standardmäßig fordert der Browser Standortdaten nur einmal an, als ob die Methode [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) aufgerufen worden wäre. Wenn jedoch das [`watch`](/de/docs/Web/HTML/Reference/Elements/geolocation#watch)-Attribut auf `true` gesetzt ist, aktualisiert der Browser die Daten bei jeder Änderung der Geräteposition, als ob [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) aufgerufen worden wäre.

Wenn die Datenanfrage zurückkehrt, wird das [`location`](/de/docs/Web/API/HTMLGeolocationElement/location_event)-Ereignis ausgelöst, sodass Sie angemessen reagieren können, zum Beispiel durch das Abrufen der Daten und das Anzeigen der Position auf einer Karte.

- Wenn Standortdaten erfolgreich abgerufen werden, stehen sie in der [`HTMLGeolocationElement.position`](/de/docs/Web/API/HTMLGeolocationElement/position)-Eigenschaft zur Verfügung, die ein [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekt enthält.
- Wenn die Datenerfassung nicht erfolgreich ist, stehen Fehlerinformationen in der [`HTMLGeolocationElement.error`](/de/docs/Web/API/HTMLGeolocationElement/error)-Eigenschaft zur Verfügung, die ein [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekt enthält.

Die [`promptaction`](/de/docs/Web/API/HTMLGeolocationElement/promptaction_event)- und [`promptdismiss`](/de/docs/Web/API/HTMLGeolocationElement/promptdismiss_event)-Ereignisse ermöglichen es Ihnen, auf Benutzerinteraktionen mit dem `<geolocation>`-Dialogfeld zu reagieren, zum Beispiel, um den Benutzer aufzufordern, eine andere Wahl zu treffen, wenn er die Erlaubnis zur Datenzugriffserteilung verweigert hat.

Wenn ein [Blocker](/de/docs/Web/HTML/Reference/Elements/geolocation#geolocation_blocking) auf einem {{htmlelement("geolocation")}}-Element aktiv ist, wird seine Funktion verhindert (ungültig), entweder vorübergehend oder dauerhaft, abhängig vom Grund. Sie können überprüfen, ob es ungültig ist, indem Sie die [`HTMLGeolocationElement.isValid`](/de/docs/Web/API/HTMLGeolocationElement/isValid)-Eigenschaft abfragen. Sie können auch den Grund für die Ungültigkeit über die [`HTMLGeolocationElement.invalidReason`](/de/docs/Web/API/HTMLGeolocationElement/invalidReason)-Eigenschaft abrufen — siehe die Seite für eine vollständige Liste möglicher Gründe.

## Beispiele

### Grundlegende Verwendung

Für minimale Beispiele, die das `<geolocation>`-Element und das zugehörige `HTMLGeolocationElement`-Objekt verwenden, um Standortdaten zurückzugeben, siehe unser [Grundlagenbeispiel](https://mdn.github.io/dom-examples/geolocation-element/basic-example/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-example)) und das [Basis-Watch-Beispiel](https://mdn.github.io/dom-examples/geolocation-element/basic-watch-example/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-watch-example)).

Siehe die [`<geolocation>`](/de/docs/Web/HTML/Reference/Elements/geolocation#basic_usage_example)-Referenzseite für eine Anleitung.

### Eingebettetes Kartenbeispiel

Dieses Beispiel verwendet das `<geolocation>`-Element, um Ihren aktuellen Standort zu ermitteln, der auf einer mit [Leaflet JS](https://leafletjs.com/) gerenderten Karte dargestellt wird. Das Beispiel verwendet auch einen regulären `<button>`-Fallback, um die Standortdaten in nicht unterstützten Browsern abzurufen.

#### HTML

Wir fügen ein `<geolocation>`-Element mit einem `autolocate`-Attribut ein, damit der Browser versucht, Standortdaten automatisch abzurufen, vorausgesetzt, die `geolocation`-Berechtigung wurde zuvor erteilt. Im `<geolocation>`-Element nisten wir eine {{htmlelement("button")}}-Ersatzlösung ein, die in Browsern gerendert wird, die `<geolocation>` nicht unterstützen, um die Anforderung von Standortdaten zu ermöglichen.

```html
<geolocation autolocate>
  <button id="fallback">Use location</button>
</geolocation>
```

Als Nächstes fügen wir ein {{htmlelement("p")}}-Element ein, um Statusmeldungen und Fehler auszugeben.

```html
<p id="status">Status:</p>
```

Schließlich fügen wir ein {{htmlelement("div")}}-Element ein, um die Karte darzustellen.

```html
<div id="map"></div>
```

#### JavaScript

In unserem Skript beginnen wir mit dem Abrufen einer Referenz auf das Status-`<p>`-Element:

```js
const statusElem = document.querySelector("#status");
```

Als Nächstes erkennen wir, ob das `<geolocation>`-Element unterstützt wird, indem wir `typeof HTMLGeolocationElement === "function"` testen:

```js
if (typeof HTMLGeolocationElement === "function") {
  // <geolocation> is supported
} else {
  // <geolocation> is not supported; use fallback button
}
```

Wenn `<geolocation>` unterstützt wird, wird der `if`-Block ausgeführt. Er beginnt mit dem Abrufen einer Referenz auf das `<geolocation>`-Element:

```js
const geo = document.querySelector("geolocation");
```

Als Nächstes fügen wir einen [`location`](/de/docs/Web/API/HTMLGeolocationElement/location_event)-Ereignislistener zum resultierenden `HTMLGeolocationElement`-Objekt hinzu, um zu erkennen, wann die Anfrage nach Standortdaten zurückgegeben wird. Wenn die Daten erfolgreich zurückgegeben werden, greifen wir über die [`HTMLGeolocationElement.position`](/de/docs/Web/API/HTMLGeolocationElement/position)-Eigenschaft darauf zu und rufen die Breitengrad- und Längengradwerte ab. Wir protokollieren diese in der Konsole und zeichnen sie dann auf einer Karte, indem wir sie zusammen mit einer Referenz auf das `HTMLGeolocationElement`-Objekt in die `drawMap()`-Funktion übergeben (die wir später definieren werden). Wenn die Datenanforderung fehlschlägt, greifen wir über die [`HTMLGeolocationElement.error`](/de/docs/Web/API/HTMLGeolocationElement/error)-Eigenschaft auf den Fehler zu und protokollieren die Fehlermeldung in der Konsole.

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

Als Nächstes fügen wir [`promptdismiss`](/de/docs/Web/API/HTMLGeolocationElement/promptdismiss_event)- und [`promptaction`](/de/docs/Web/API/HTMLGeolocationElement/promptaction_event)-Ereignislistener zum resultierenden `HTMLGeolocationElement`-Objekt hinzu. Diese ermöglichen es uns, Funktionen als Reaktion auf das Schließen des `<geolocation>`-Dialogs durch den Benutzer oder das Auswählen einer Option aus dem Dialog auszuführen.

```js
geo.addEventListener("promptdismiss", notifyUserRetrySelection);
geo.addEventListener("promptaction", notifyUserGrantPermission);
```

Zum Schluss des `if`-Blocks definieren wir die Funktionen `notifyUserRetrySelection()` und `notifyUserGrantPermission()`, auf die in den beiden vorherigen Ereignislistenern verwiesen wird. Erstere gibt eine Nachricht im Status-Absatz aus, die dem Benutzer mitteilt, dass er die Schaltfläche erneut drücken und die Standortfreigabe zulassen soll, da wir in diesem Fall immer möchten, dass er es erneut versucht. Letztere verwendet die [`HTMLGeolocationElement.permissionStatus`](/de/docs/Web/API/HTMLGeolocationElement/permissionStatus)-Eigenschaft, um zu überprüfen, ob der Berechtigungsstatus `denied` oder `prompt` ist, und wenn ja, bitten wir sie, die Schaltfläche erneut zu drücken und den Standort zuzulassen. Es ist nicht notwendig, zu fragen, wenn sie die Erlaubnis bereits erteilt haben.

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

Wenn `<geolocation>` nicht unterstützt wird, wird der `else`-Block ausgeführt. Dieser beginnt mit dem Abrufen einer Referenz auf das Fallback-`<button>`-Element:

```js
const fallback = document.querySelector("#fallback");
```

Als Nächstes fügen wir dem resultierenden `HTMLButtonElement`-Objekt einen `click`-Ereignishandler hinzu. Darin verwenden wir einen [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition)-Aufruf, um die Erfolgs- und Fehlerfälle im `HTMLGeolocationElement`-Codepfad zu emulieren. Das Ergebnis ist das gleiche — wir zeigen entweder die Standortdaten auf einer Karte an, indem wir sie in die `drawMap()`-Funktion (zusammen mit einer Referenz auf das `HTMLButtonElement`-Objekt) übergeben, oder drucken die Fehlermeldung in den Statusparagraph.

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

Der letzte Schritt besteht darin, die `drawMap()`-Funktion zu definieren, die die Breitengrad- und Längengrad-Daten sowie eine Referenz auf die Schaltfläche, die den Befehl ausgelöst hat, als Argumente übernimmt. Der Funktionskörper verwendet [Leaflet JS](https://leafletjs.com/)-Code (siehe den [Leaflet Quick Start Guide](https://leafletjs.com/examples/quick-start/) für eine Erklärung), um die Position des Benutzers auf einer Karte darzustellen, gibt eine Erfolgsmeldung im Statusabsatz aus und verbirgt die Schaltfläche. Der letzte Schritt ist eine Vereinfachung, um zu verhindern, dass der Code fehlerhaft wird, wenn der Benutzer die Schaltfläche nach dem Erfolg erneut drückt.

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

Siehe diesen Code [live in Aktion](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)). Versuchen Sie, die Demos in einem unterstützten und einem nicht unterstützten Browser anzusehen, und beachten Sie den Unterschied im Berechtigungsdialogfluss, wenn Sie die Erlaubnis zur Verwendung von `geolocation` erteilen.

Probieren Sie auch Folgendes:

- Nachdem Sie die `geolocation`-Berechtigung erteilt und die Kartenanzeige gesehen haben, versuchen Sie, diese Berechtigung mit den verfügbaren Browsersteuerungen zu widerrufen, und laden Sie die Seite neu, um das Beispiel zurückzusetzen.
- Versuchen Sie nun, die Erlaubnis zur Nutzung von `geolocation` zu verweigern oder den Berechtigungsdialog abzubrechen, und beachten Sie, wie die `promptdismiss`- und `promptaction`-Ereignislistener, die wir zuvor eingerichtet haben, eine Nachricht in den Statusabsatz drucken, die dem Benutzer bei der Nutzung der Seite hilft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}}-Element
- Die {{httpheader("Permissions-Policy/geolocation", "geolocation")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [Geolocation API](/de/docs/Web/API/Geolocation_API)
- [Permissions API](/de/docs/Web/API/Permissions_API)
- [Einführung des `<geolocation>` HTML-Elements](https://developer.chrome.com/blog/geolocation-html-element) auf developer.chrome.com (2026)
