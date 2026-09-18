---
title: HTMLGeolocationElement
slug: Web/API/HTMLGeolocationElement
l10n:
  sourceCommit: 76c2e04d720aa8260ba7d75788ed96776aac35c6
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Das **`HTMLGeolocationElement`**-Interface der [HTML DOM API](/de/docs/Web/API/HTML_DOM_API) repräsentiert das {{htmlelement("geolocation")}}-Element und bietet Zugriff auf dessen Eigenschaften und Ereignisse.

Dieses Element basiert auf dem [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface und erbt dessen Eigenschaften und Methoden.

> [!NOTE]
> Das `<geolocation>`-Element und das `HTMLGeolocationElement`-Interface ermöglichen es dem Benutzer, seine Standortdaten auf konsistentere und intuitivere Weise mit der Seite zu teilen als die ältere [Geolocation API](/de/docs/Web/API/Geolocation_API).

{{InheritanceDiagram}}

## Konstruktor

- [`HTMLGeolocationElement()`](/de/docs/Web/API/HTMLGeolocationElement/HTMLGeolocationElement) {{experimental_inline}}
  - : Erstellt eine neue `HTMLGeolocationElement`-Objektinstanz. Beachten Sie, dass dieser Konstruktor nicht direkt, sondern über eine DOM-Methode wie [`Document.createElement()`](/de/docs/Web/API/Document/createElement) aufgerufen wird.

## Instanzeigenschaften

_Erbt außerdem Eigenschaften von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`autolocate`](/de/docs/Web/API/HTMLGeolocationElement/autolocate) {{experimental_inline}}
  - : Ein boolescher Wert, der angibt, ob der Browser sofort Standortdaten anfordern soll, wenn das `<geolocation>`-Element gerendert wird, sofern die Berechtigung zuvor erteilt wurde. Entspricht dem Wert des [`autolocate`](/de/docs/Web/HTML/Reference/Elements/geolocation#autolocate)-Attributs von `<geolocation>`.
- [`error`](/de/docs/Web/API/HTMLGeolocationElement/error) {{readonlyinline}} {{experimental_inline}}
  - : Ein [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekt, das bei einem Fehler beim Abrufen der Daten Fehlerinformationen repräsentiert.
- [`initialPermissionStatus`](/de/docs/Web/API/HTMLGeolocationElement/initialPermissionStatus) {{readonlyinline}} {{experimental_inline}} {{deprecated_inline}}
  - : Ein Aufzählungswert, der den Berechtigungsstatus für die Funktion `geolocation` beim ersten Laden der Seite repräsentiert.
- [`invalidReason`](/de/docs/Web/API/HTMLGeolocationElement/invalidReason) {{readonlyinline}} {{experimental_inline}}
  - : Ein Aufzählungswert, der den Grund angibt, warum das `<geolocation>`-Element ungültig ist ([blockiert](/de/docs/Web/HTML/Reference/Elements/geolocation#geolocation_blocking)), sofern dies der Fall ist.
- [`isValid`](/de/docs/Web/API/HTMLGeolocationElement/isValid) {{readonlyinline}} {{experimental_inline}}
  - : Ein boolescher Wert, der angibt, ob das `<geolocation>`-Element gültig oder ungültig (blockiert) ist.
- [`permissionStatus`](/de/docs/Web/API/HTMLGeolocationElement/permissionStatus) {{readonlyinline}} {{experimental_inline}}
  - : Ein String, der den aktuellen Berechtigungsstatus für die Funktion `geolocation` repräsentiert.
- [`position`](/de/docs/Web/API/HTMLGeolocationElement/position) {{readonlyinline}} {{experimental_inline}}
  - : Ein [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekt, das bei erfolgreichem Abruf der Standortdaten die Position des Benutzers repräsentiert.
- [`watch`](/de/docs/Web/API/HTMLGeolocationElement/watch) {{experimental_inline}}
  - : Ein boolescher Wert, der angibt, ob der Browser die Standortdaten des Benutzers fortlaufend aktualisieren soll, sobald sich die Position seines Geräts ändert, oder sie nur einmal abrufen soll. Entspricht dem Wert des [`watch`](/de/docs/Web/HTML/Reference/Elements/geolocation#watch)-Attributs von `<geolocation>`.

## Instanzmethoden

_Erbt Eigenschaften von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Ereignisse

_Erbt außerdem Ereignisse von seinem übergeordneten Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`location`](/de/docs/Web/API/HTMLGeolocationElement/location_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn der Browser Standortdaten empfängt oder Fehlerinformationen, wenn die Standortdatenanforderung nicht erfolgreich war.
- [`promptaction`](/de/docs/Web/API/HTMLGeolocationElement/promptaction_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn der Benutzer das `<geolocation>`-Element aktiviert und im daraufhin angezeigten Dialog eine Option auswählt, um die `geolocation`-Berechtigung entweder zu erteilen oder abzulehnen.
- [`promptdismiss`](/de/docs/Web/API/HTMLGeolocationElement/promptdismiss_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn der Benutzer das `<geolocation>`-Element aktiviert und den daraufhin angezeigten Dialog durch Drücken der Schaltfläche „Schließen“ oder der Taste <kbd>Esc</kbd> schließt.
- [`validationstatuschange`](/de/docs/Web/API/HTMLGeolocationElement/validationstatuschange_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn sich der Wert von [`isValid`](/de/docs/Web/API/HTMLGeolocationElement/isValid) des `<geolocation>`-Elements ändert.

## Beschreibung

Das `HTMLGeolocationElement`-Interface repräsentiert das {{htmlelement("geolocation")}}-Element, das ein interaktives Steuerelement erstellt, über das der Benutzer seine Standortdaten mit der Seite teilen kann.

Wenn der Benutzer das Steuerelement aktiviert, wird ihm ein Dialogfeld angezeigt, in dem er um Erlaubnis gebeten wird, seine Standortdaten zu teilen. Wenn er die Berechtigung erteilt, versucht der Browser, die Standortdaten des Benutzers im Hintergrund mithilfe der Geolocation API abzurufen.

Standardmäßig fordert der Browser Standortdaten einmalig an, als ob die Methode [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) aufgerufen worden wäre. Wenn jedoch das Attribut [`watch`](/de/docs/Web/HTML/Reference/Elements/geolocation#watch) auf `true` gesetzt ist, aktualisiert der Browser die Daten, sobald sich die Geräteposition ändert, als ob [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) aufgerufen worden wäre.

Wenn die Datenanforderung zurückgegeben wird, wird das Ereignis [`location`](/de/docs/Web/API/HTMLGeolocationElement/location_event) ausgelöst, sodass Sie angemessen reagieren können, beispielsweise indem Sie die Daten abrufen und den Standort auf einer Karte darstellen.

- Wenn Standortdaten erfolgreich abgerufen werden, sind sie in der Eigenschaft [`HTMLGeolocationElement.position`](/de/docs/Web/API/HTMLGeolocationElement/position) verfügbar, die ein [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekt enthält.
- Wenn der Datenabruf nicht erfolgreich ist, sind Fehlerinformationen in der Eigenschaft [`HTMLGeolocationElement.error`](/de/docs/Web/API/HTMLGeolocationElement/error) verfügbar, die ein [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekt enthält.

Die Ereignisse [`promptaction`](/de/docs/Web/API/HTMLGeolocationElement/promptaction_event) und [`promptdismiss`](/de/docs/Web/API/HTMLGeolocationElement/promptdismiss_event) ermöglichen es Ihnen, auf die Interaktionen des Benutzers mit dem `<geolocation>`-Dialogfeld zu reagieren, beispielsweise indem Sie ihn bitten, eine andere Auswahl zu treffen, wenn er die Berechtigung für den Datenzugriff abgelehnt hat.

Wenn auf einem {{htmlelement("geolocation")}}-Element ein [Blockierer](/de/docs/Web/HTML/Reference/Elements/geolocation#geolocation_blocking) aktiv ist, wird seine Funktionsweise verhindert (es ist ungültig), entweder vorübergehend oder dauerhaft, abhängig vom Grund. Sie können über die Eigenschaft [`HTMLGeolocationElement.isValid`](/de/docs/Web/API/HTMLGeolocationElement/isValid) prüfen, ob es ungültig ist. Über die Eigenschaft [`HTMLGeolocationElement.invalidReason`](/de/docs/Web/API/HTMLGeolocationElement/invalidReason) können Sie außerdem den Grund ermitteln, warum es ungültig ist — auf dieser Seite finden Sie eine vollständige Liste möglicher Gründe.

## Beispiele

### Grundlegende Verwendung

Minimale Beispiele, die das `<geolocation>`-Element und das zugehörige `HTMLGeolocationElement`-Objekt verwenden, um Standortdaten zurückzugeben, finden Sie in unserem [grundlegenden Beispiel](https://mdn.github.io/dom-examples/geolocation-element/basic-example/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-example)) und [grundlegenden `watch`-Beispiel](https://mdn.github.io/dom-examples/geolocation-element/basic-watch-example/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-watch-example)).

Eine Schritt-für-Schritt-Erklärung finden Sie auf der Referenzseite zu [`<geolocation>`](/de/docs/Web/HTML/Reference/Elements/geolocation#basic_usage_example).

### Beispiel mit eingebetteter Karte

Dieses Beispiel verwendet das `<geolocation>`-Element, um Ihren aktuellen Standort abzurufen, der auf einer mit [Leaflet JS](https://leafletjs.com/) gerenderten Karte dargestellt wird. Das Beispiel verwendet außerdem ein reguläres `<button>` als Fallback, um die Standortdaten in nicht unterstützenden Browsern abzurufen.

#### HTML

Wir fügen ein `<geolocation>`-Element mit einem `autolocate`-Attribut ein, damit der Browser versucht, Standortdaten automatisch abzurufen, sofern die `geolocation`-Berechtigung zuvor erteilt wurde. Innerhalb des `<geolocation>`-Elements verschachteln wir einen {{htmlelement("button")}}-Fallback, der in Browsern gerendert wird, die `<geolocation>` nicht unterstützen, um das Anfordern von Standortdaten zu ermöglichen.

```html
<geolocation autolocate>
  <button id="fallback">Use location</button>
</geolocation>
```

Als Nächstes fügen wir ein {{htmlelement("p")}}-Element ein, um Statusmeldungen und Fehler darin auszugeben.

```html
<p id="status">Status:</p>
```

Abschließend fügen wir ein {{htmlelement("div")}}-Element ein, in dem die Karte gerendert wird.

```html
<div id="map"></div>
```

#### JavaScript

In unserem Skript beginnen wir damit, eine Referenz auf das Status-`<p>`-Element abzurufen:

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

Wenn `<geolocation>` unterstützt wird, wird der `if`-Block ausgeführt. Zunächst wird eine Referenz auf das `<geolocation>`-Element abgerufen:

```js
const geo = document.querySelector("geolocation");
```

Als Nächstes fügen wir dem resultierenden `HTMLGeolocationElement`-Objekt einen Ereignis-Listener für [`location`](/de/docs/Web/API/HTMLGeolocationElement/location_event) hinzu, um zu erkennen, wann die Standortdatenanforderung zurückgegeben wird. Wenn die Daten erfolgreich zurückgegeben werden, greifen wir über die Eigenschaft [`HTMLGeolocationElement.position`](/de/docs/Web/API/HTMLGeolocationElement/position) darauf zu und rufen die Werte für Breitengrad und Längengrad ab. Wir geben diese in der Konsole aus und stellen sie dann auf einer Karte dar, indem wir sie zusammen mit einer Referenz auf das `HTMLGeolocationElement`-Objekt an die Funktion `drawMap()` übergeben (die wir später definieren werden). Wenn die Datenanforderung fehlschlägt, greifen wir über die Eigenschaft [`HTMLGeolocationElement.error`](/de/docs/Web/API/HTMLGeolocationElement/error) auf den Fehler zu und geben die Fehlermeldung in der Konsole aus.

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

Als Nächstes fügen wir dem resultierenden `HTMLGeolocationElement`-Objekt Ereignis-Listener für [`promptdismiss`](/de/docs/Web/API/HTMLGeolocationElement/promptdismiss_event) und [`promptaction`](/de/docs/Web/API/HTMLGeolocationElement/promptaction_event) hinzu. Dadurch können wir Funktionen ausführen, wenn der Benutzer die `<geolocation>`-Eingabeaufforderung schließt beziehungsweise eine Option in der Eingabeaufforderung auswählt.

```js
geo.addEventListener("promptdismiss", notifyUserRetrySelection);
geo.addEventListener("promptaction", notifyUserGrantPermission);
```

Abschließend definieren wir für den `if`-Block die Funktionen `notifyUserRetrySelection()` und `notifyUserGrantPermission()`, auf die in den beiden vorherigen Ereignis-Listenern verwiesen wird. Die erste gibt eine Meldung im Statusabsatz aus, die den Benutzer auffordert, die Schaltfläche erneut zu drücken und den Standortzugriff zu erlauben, da er es in diesem Fall immer erneut versuchen soll. Die zweite verwendet die Eigenschaft [`HTMLGeolocationElement.permissionStatus`](/de/docs/Web/API/HTMLGeolocationElement/permissionStatus), um zu prüfen, ob der Berechtigungsstatus `denied` oder `prompt` lautet. Wenn dies der Fall ist, wird der Benutzer aufgefordert, die Schaltfläche erneut zu drücken und den Standortzugriff zu erlauben. Dies ist nicht erforderlich, wenn er die Berechtigung bereits erteilt hat.

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

Wenn `<geolocation>` nicht unterstützt wird, wird der `else`-Block ausgeführt. Zunächst wird eine Referenz auf das Fallback-`<button>`-Element abgerufen:

```js
const fallback = document.querySelector("#fallback");
```

Als Nächstes fügen wir dem resultierenden `HTMLButtonElement`-Objekt einen `click`-Ereignishandler hinzu. Darin verwenden wir einen Aufruf von [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition), um die Erfolgs- und Fehlerfälle im `HTMLGeolocationElement`-Codepfad nachzubilden. Das Ergebnis ist dasselbe — entweder stellen wir die Standortdaten auf einer Karte dar, indem wir sie zusammen mit einer Referenz auf das `HTMLButtonElement`-Objekt an die Funktion `drawMap()` übergeben, oder wir geben die Fehlermeldung im Statusabsatz aus.

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

Der letzte Schritt besteht darin, die Funktion `drawMap()` zu definieren, die die Breitengrad- und Längengraddaten sowie eine Referenz auf die Schaltfläche, die den Befehl ausgelöst hat, als Argumente annimmt. Der Funktionsrumpf verwendet [Leaflet JS](https://leafletjs.com/)-Code (eine Erklärung finden Sie im [Leaflet Quick Start Guide](https://leafletjs.com/examples/quick-start/)), um den Standort des Benutzers auf einer Karte darzustellen, gibt eine Erfolgsmeldung im Statusabsatz aus und blendet die Schaltfläche aus. Der letzte Schritt ist eine Vereinfachung, um zu verhindern, dass der Code einen Fehler auslöst, wenn der Benutzer die Schaltfläche nach einem Erfolg erneut drückt.

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

Sehen Sie diesen Code [live ausgeführt](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)). Sehen Sie sich die Demos nach Möglichkeit in einem unterstützten und einem nicht unterstützten Browser an und beachten Sie den Unterschied im Ablauf des Berechtigungsdialogs, wenn Sie die Berechtigung zur Verwendung von `geolocation` erteilen.

Probieren Sie außerdem Folgendes aus:

- Nachdem Sie die `geolocation`-Berechtigung erteilt und die gerenderte Karte gesehen haben, versuchen Sie, diese Berechtigung über die verfügbaren Browser-Steuerelemente zu widerrufen, und aktualisieren Sie dann die Seite, um das Beispiel zurückzusetzen.
- Versuchen Sie nun, die Berechtigung zur Verwendung von `geolocation` abzulehnen oder den Berechtigungsdialog zu schließen, und beachten Sie, wie die zuvor eingerichteten Ereignis-Listener für `promptdismiss` und `promptaction` bewirken, dass im Statusabsatz eine Meldung ausgegeben wird, die dem Benutzer bei der Verwendung der Seite hilft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}}-Element
- Die {{httpheader("Permissions-Policy/geolocation", "geolocation")}}-[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [Geolocation API](/de/docs/Web/API/Geolocation_API)
- [Permissions API](/de/docs/Web/API/Permissions_API)
- [Einführung in das HTML-Element `<geolocation>`](https://developer.chrome.com/blog/geolocation-html-element) auf developer.chrome.com (2026)
