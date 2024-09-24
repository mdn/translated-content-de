---
title: "Navigator: canShare()-Methode"
short-title: canShare()
slug: Web/API/Navigator/canShare
l10n:
  sourceCommit: 91907f1383139ec2bd1d309d02ffac30b4eee757
---

{{APIRef("Web Share API")}}{{securecontext_header}}

Die **`canShare()`**-Methode der {{domxref("Navigator")}}-Schnittstelle gibt `true` zurück, wenn der entsprechende Aufruf von {{domxref("navigator.share()")}} erfolgreich wäre.

Die Methode gibt `false` zurück, wenn die Daten nicht _validiert_ werden können. Gründe, warum die Daten ungültig sein könnten, umfassen:

- Der `data`-Parameter wurde ausgelassen oder enthält nur Eigenschaften mit unbekannten Werten. Beachten Sie, dass alle Eigenschaften, die vom Benutzersystem nicht erkannt werden, ignoriert werden.
- Eine URL ist schlecht formatiert.
- Dateien werden angegeben, aber die Implementierung unterstützt kein Teilen von Dateien.
- Das Teilen der angegebenen Daten würde vom Benutzersystem als „feindliches Teilen“ betrachtet werden.

Die [Web Share API](/de/docs/Web/API/Web_Share_API) wird durch die [web-share](/de/docs/Web/HTTP/Headers/Permissions-Policy/web-share)-Berechtigungsrichtlinie gesteuert. Die `canShare()`-Methode wird `false` zurückgeben, wenn die Berechtigung unterstützt, aber nicht erteilt wurde.

## Syntax

```js-nolint
canShare()
canShare(data)
```

### Parameter

- `data` {{optional_inline}}

  - : Ein Objekt, das die zu testenden Teilungsdaten definiert.
    In der Regel wird, wenn dieser Aufruf `true` zurückgibt, ein Objekt mit denselben Eigenschaften an {{domxref("navigator.share()")}} übergeben.

    Eigenschaften, die dem Benutzersystem unbekannt sind, werden ignoriert; Teilungsdaten werden nur auf Eigenschaften überprüft, die das Benutzersystem versteht.
    Alle Eigenschaften sind optional, aber mindestens eine bekannte Dateneigenschaft muss angegeben werden, sonst gibt die Methode `false` zurück.

    Mögliche Werte sind:

    - `url` {{optional_inline}}
      - : Ein String, der eine zu teilende URL darstellt.
    - `text` {{optional_inline}}
      - : Ein String, der zu teilenden Text darstellt.
    - `title` {{optional_inline}}
      - : Ein String, der den zu teilenden Titel darstellt.
    - `files` {{optional_inline}}
      - : Ein Array von {{domxref("File")}}-Objekten, das die zu teilenden Dateien darstellt.

### Rückgabewert

Gibt `true` zurück, wenn die angegebenen `data` mit {{domxref("Navigator.share()")}} geteilt werden können, andernfalls `false`.

## Beispiele

### Senden der MDN-URL

Das Beispiel verwendet `navigator.canShare()`, um zu überprüfen, ob `navigator.share()` die angegebenen Daten teilen kann.

#### HTML

Das HTML erstellt einfach einen Absatz, um das Testergebnis anzuzeigen.

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
  resultPara.textContent = "navigator.canShare() wird nicht unterstützt.";
} else if (navigator.canShare(shareData)) {
  resultPara.textContent =
    "navigator.canShare() wird unterstützt. Wir können navigator.share() verwenden, um die Daten zu senden.";
} else {
  resultPara.textContent = "Die angegebenen Daten können nicht geteilt werden.";
}
```

#### Ergebnis

Das untenstehende Feld sollte angeben, ob `navigator.canShare()` in diesem Browser unterstützt wird und ob wir `navigator.share()` verwenden können, um die angegebenen Daten zu teilen:

{{EmbedLiveSample('Sending_the_MDN_URL')}}

### Beispiel für die Funktionserkennung

Diese Methode prüft, ob eine bestimmte Dateneigenschaft gültig und teilbar ist.
Wenn sie mit einer einzigen `data`-Eigenschaft verwendet wird, gibt sie nur dann `true` zurück, wenn diese Eigenschaft gültig ist und auf der Plattform geteilt werden kann.

Der Code unten zeigt, wie geprüft wird, ob eine Dateneigenschaft unterstützt wird.

```js
// Funktion, die möglicherweise nicht unterstützt wird
let testShare = { someNewProperty: "Data to share" };

// Komplexe Daten, die neuen Schlüssel verwenden
const shareData = {
  title: "MDN",
  text: "Learn web development on MDN!",
  url: "https://developer.mozilla.org",
  someNewProperty: "Data to share",
};

// Überprüfen Sie, ob der Schlüssel vor dem Teilen gültig und unterstützt ist
if (navigator.canShare(testShare)) {
  // Verwenden Sie navigator.share(), um 'shareData' zu teilen
} else {
  // Fall behandeln, dass neue Dateneigenschaft nicht geteilt werden kann.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("navigator.share()")}}
