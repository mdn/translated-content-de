---
title: "HTMLGeolocationElement: watch-Eigenschaft"
short-title: watch
slug: Web/API/HTMLGeolocationElement/watch
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("Navigation API")}}

Die **`watch`**-Eigenschaft der [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Schnittstelle liest und setzt einen booleschen Wert, der anzeigt, ob der Browser die Standortdaten des Benutzers kontinuierlich aktualisieren soll, wann immer sich die Position des Geräts ändert, oder nur einmal abgerufen werden soll.

Sie spiegelt den Wert des `<geolocation>`-[`watch`](/de/docs/Web/HTML/Reference/Elements/geolocation#watch)-Attributs wider.

## Wert

Ein boolescher Wert:

- Wenn `true`, werden Standortdaten kontinuierlich angefordert, als ob die [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition)-Methode aufgerufen wurde.
- Wenn `false`, werden Standortdaten nur einmal angefordert, als ob die [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition)-Methode aufgerufen wurde.

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

### Standortdaten kontinuierlich abrufen

In diesem Beispiel rufen wir Standortdaten kontinuierlich ab und geben sie auf der Seite aus.

#### HTML

Wir fügen ein {{htmlelement("geolocation")}}-Element mit einem `watch`-Attribut ein. Wenn der Benutzer auf die resultierende Schaltfläche klickt und die Erlaubnis zur Nutzung der `geolocation`-Funktion erteilt, beginnt der Browser, Standortdaten kontinuierlich anzufordern, wann immer sich die Position des Geräts ändert. Außerdem fügen wir ein {{htmlelement("p")}}-Element ein, um Standortdaten und Fehler auszugeben.

```html
<geolocation watch></geolocation>
<p id="output"></p>
```

#### JavaScript

In unserem JavaScript beginnen wir damit, Referenzen auf den Ausgabepunkt und das `<geolocation>`-Element zu erfassen und testen den `watch`-Wert, indem wir auf die `watch`-Eigenschaft zugreifen.

```js
const outputElem = document.querySelector("#output");
const geo = document.querySelector("geolocation");
console.log(geo.watch); // true
```

Als Nächstes fügen wir dem resultierenden `HTMLGeolocationElement`-Objekt einen [`location`](/de/docs/Web/API/HTMLGeolocationElement/location_event)-Ereignislistener hinzu, um zu erkennen, wann die Standortdatenanforderung zurückgegeben wird. Wenn die Daten erfolgreich zurückgegeben werden, greifen wir über die [`HTMLGeolocationElement.position`](/de/docs/Web/API/HTMLGeolocationElement/position)-Eigenschaft darauf zu und geben die Breiten- und Längengradwerte in das Ausgabeelement aus. Wenn die Datenanforderung fehlschlägt, greifen wir über die [`HTMLGeolocationElement.error`](/de/docs/Web/API/HTMLGeolocationElement/error)-Eigenschaft auf den Fehler zu und geben die Fehlermeldung im Ausgabeelement aus.

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

Sehen Sie sich diesen Code [live in Aktion](https://mdn.github.io/dom-examples/geolocation-element/basic-watch-example/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-watch-example)) an. Der vollständige Code enthält auch einen Fallback für Browser, die das `<geolocation>`-Element nicht unterstützen.

Versuchen Sie, die Demo in einem unterstützten und einem nicht unterstützten Browser anzuzeigen, wenn möglich, und beachten Sie den Unterschied im Berechtigungsdialog, wenn Sie die Erlaubnis zur Nutzung von `geolocation` gewähren oder verweigern.

Beachten Sie auch, dass, da das `watch`-Attribut des `<geolocation>`-Elements auf `true` gesetzt ist, die Standortdaten angefordert werden und das `location`-Ereignis kontinuierlich ausgelöst wird, jedes Mal, wenn der Benutzer den Standort wechselt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("geolocation")}}-Element
