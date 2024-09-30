---
title: "Navigator: canShare()-Methode"
short-title: canShare()
slug: Web/API/Navigator/canShare
l10n:
  sourceCommit: 91907f1383139ec2bd1d309d02ffac30b4eee757
---

{{APIRef("Web Share API")}}{{securecontext_header}}

Die **`canShare()`**-Methode der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt `true` zurück, wenn der entsprechende Aufruf von [`navigator.share()`](/de/docs/Web/API/Navigator/share) erfolgreich wäre.

Die Methode gibt `false` zurück, wenn die Daten nicht _validiert_ werden können. Gründe, warum die Daten ungültig sein könnten, sind:

- Der `data`-Parameter wurde weggelassen oder enthält nur Eigenschaften mit unbekannten Werten. Beachten Sie, dass alle Eigenschaften, die dem Benutzeragenten nicht bekannt sind, ignoriert werden.
- Eine URL ist schlecht formatiert.
- Dateien werden angegeben, aber die Implementierung unterstützt kein Datei-Sharing.
- Das Teilen der angegebenen Daten würde vom Benutzeragenten als ein "feindlicher Teilen" angesehen werden.

Die [Web Share API](/de/docs/Web/API/Web_Share_API) wird durch die Berechtigungsrichtlinie [web-share](/de/docs/Web/HTTP/Headers/Permissions-Policy/web-share) gesteuert.
Die `canShare()`-Methode gibt `false` zurück, wenn die Berechtigung unterstützt, aber nicht erteilt wurde.

## Syntax

```js-nolint
canShare()
canShare(data)
```

### Parameter

- `data` {{optional_inline}}

  - : Ein Objekt, das die zu testenden Share-Daten definiert.
    Typischerweise wird ein Objekt mit denselben Eigenschaften an [`navigator.share()`](/de/docs/Web/API/Navigator/share) übergeben, wenn dieser Aufruf `true` zurückgibt.

    Eigenschaften, die dem Benutzeragenten unbekannt sind, werden ignoriert; freigegebene Daten werden nur anhand von Eigenschaften beurteilt, die dem Benutzeragenten bekannt sind.
    Alle Eigenschaften sind optional, aber es muss mindestens eine bekannte Dateneigenschaft angegeben werden, oder die Methode gibt `false` zurück.

    Mögliche Werte sind:

    - `url` {{optional_inline}}
      - : Ein String, der eine zu teilende URL darstellt.
    - `text` {{optional_inline}}
      - : Ein String, der den zu teilenden Text darstellt.
    - `title` {{optional_inline}}
      - : Ein String, der den zu teilenden Titel darstellt.
    - `files` {{optional_inline}}
      - : Ein Array von [`File`](/de/docs/Web/API/File)-Objekten, die die zu teilenden Dateien darstellen.

### Rückgabewert

Gibt `true` zurück, wenn die angegebenen `data` mit [`Navigator.share()`](/de/docs/Web/API/Navigator/share) geteilt werden können, andernfalls `false`.

## Beispiele

### Senden der MDN-URL

Das Beispiel verwendet `navigator.canShare()`, um zu überprüfen, ob `navigator.share()` die angegebenen Daten teilen kann.

#### HTML

Das HTML erstellt nur einen Absatz, in dem das Ergebnis des Tests angezeigt wird.

```html
<p class="result"></p>
```

#### JavaScript

```js
let shareData = {
  title: "MDN",
  text: "Learn web development on MDN!",
  url: "https://developer.mozilla.org",
};

const resultPara = document.querySelector(".result");

if (!navigator.canShare) {
  resultPara.textContent = "navigator.canShare() not supported.";
} else if (navigator.canShare(shareData)) {
  resultPara.textContent =
    "navigator.canShare() supported. We can use navigator.share() to send the data.";
} else {
  resultPara.textContent = "Specified data cannot be shared.";
}
```

#### Ergebnis

Der untenstehende Kasten sollte angeben, ob `navigator.canShare()` in diesem Browser unterstützt wird und, wenn ja, ob wir `navigator.share()` verwenden können, um die angegebenen Daten zu teilen:

{{EmbedLiveSample('Sending_the_MDN_URL')}}

### Beispiel zur Funktionserkennung

Diese Methode testet, ob eine bestimmte Dateneigenschaft gültig und teilbar ist.
Wenn sie mit einer einzelnen `data`-Eigenschaft verwendet wird, gibt sie nur `true` zurück, wenn diese Eigenschaft gültig ist und auf der Plattform geteilt werden kann.

Der untenstehende Code zeigt, wie überprüft wird, ob eine Dateneigenschaft unterstützt wird.

```js
// Feature that may not be supported
let testShare = { someNewProperty: "Data to share" };

// Complex data that uses new key
const shareData = {
  title: "MDN",
  text: "Learn web development on MDN!",
  url: "https://developer.mozilla.org",
  someNewProperty: "Data to share",
};

// Test that the key is valid and supported before sharing
if (navigator.canShare(testShare)) {
  // Use navigator.share() to share 'shareData'
} else {
  // Handle case that new data property can't be shared.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`navigator.share()`](/de/docs/Web/API/Navigator/share)
