---
title: "HTMLGeolocationElement: watch-Eigenschaft"
short-title: watch
slug: Web/API/HTMLGeolocationElement/watch
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`watch`**-Eigenschaft des [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement) Interfaces erhält und setzt einen booleschen Wert, der angibt, ob der Browser die Standortdaten des Benutzers kontinuierlich aktualisieren soll, wann immer sich die Position des Geräts ändert, oder ob sie nur einmal abgerufen werden sollen.

Sie spiegelt den Wert des `<geolocation>` [`watch`](/de/docs/Web/HTML/Reference/Elements/geolocation#watch) Attributs wider.

## Wert

Ein boolescher Wert:

- Wenn `true`, werden Standortdaten kontinuierlich angefordert, als ob die Methode [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) aufgerufen wurde.
- Wenn `false`, werden die Standortdaten nur einmal angefordert, als ob die Methode [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) aufgerufen wurde.

Standardmäßig `false`.

## Beispiele

### Grundlegende Verwendung

```html
<geolocation watch></geolocation>
```

```js
const geo = document.querySelector("geolocation");
console.log(geo.watch); // true
```

### Kontinuierliche Abfrage von Standortdaten

In diesem Beispiel rufen wir kontinuierlich Standortdaten ab und geben sie auf der Seite aus.

#### HTML

Wir integrieren ein {{htmlelement("geolocation")}}-Element mit einem `watch` Attribut. Wenn der Benutzer auf den resultierenden Button klickt und die Berechtigung zur Nutzung der `geolocation` Funktion erteilt, wird der Browser damit beginnen, kontinuierlich Standortdaten anzufordern, wann immer sich die Position des Geräts ändert. Wir fügen auch ein {{htmlelement("p")}}-Element hinzu, um Standortdaten und Fehler auszugeben.

```html
<geolocation watch></geolocation>
<p id="output"></p>
```

#### JavaScript

In unserem JavaScript greifen wir zunächst auf das Ausgabe-Absatz- und `<geolocation>`-Element zu und testen den `watch` Wert, indem wir die `watch` Eigenschaft abfragen.

```js
const outputElem = document.querySelector("#output");
const geo = document.querySelector("geolocation");
console.log(geo.watch); // true
```

Anschließend fügen wir einen [`location`](/de/docs/Web/API/HTMLGeolocationElement/location_event) Ereignislistener zu dem resultierenden `HTMLGeolocationElement`-Objekt hinzu, um zu erkennen, wann die Standortdatenanfrage zurückgegeben wird. Wenn die Daten erfolgreich zurückgegeben werden, greifen wir auf sie über die [`HTMLGeolocationElement.position`](/de/docs/Web/API/HTMLGeolocationElement/position) Eigenschaft zu und geben die Breitengrad- und Längengradwerte im Ausgabeabsatz aus. Wenn die Datenanfrage fehlschlägt, greifen wir über die [`HTMLGeolocationElement.error`](/de/docs/Web/API/HTMLGeolocationElement/error) Eigenschaft auf den Fehler zu und geben die Fehlermeldung im Ausgabeabsatz aus.

```js
geo.addEventListener("location", () => {
  if (geo.position) {
    outputElem.textContent += `(${geo.position.coords.latitude},${geo.position.coords.longitude}), `;
  } else if (geo.error) {
    outputElem.textContent += `${geo.error.message}, `;
  }
});
```

#### Ergebnis

Sehen Sie sich diesen Code [live in Aktion](https://mdn.github.io/dom-examples/geolocation-element/basic-watch-example/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-watch-example)) an. Der vollständige Code beinhaltet auch einen Fallback für Browser, die das `<geolocation>`-Element nicht unterstützen.

Versuchen Sie, das Demo in einem unterstützten und einem nicht unterstützten Browser anzusehen, und beachten Sie den Unterschied im Ablauf des Berechtigungsdialogs, wenn Sie die Erlaubnis zur Nutzung der `geolocation`-Funktion erteilen oder verweigern.

Beachten Sie auch, dass, da das `<geolocation>` `watch` Attribut auf `true` gesetzt ist, die Standortdaten angefordert werden und das `location` Ereignis kontinuierlich ausgelöst wird, jedes Mal, wenn der Benutzer den Standort ändert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}}-Element
