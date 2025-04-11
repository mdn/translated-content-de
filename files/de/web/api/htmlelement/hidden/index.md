---
title: "HTMLElement: hidden-Eigenschaft"
short-title: hidden
slug: Web/API/HTMLElement/hidden
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Eigenschaft **`hidden`** spiegelt den Wert des [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)-Attributs des Elements wider.

## Wert

Dieses Attribut kann einen von drei Werten haben:

- `true`
  - : Das Element ist versteckt.
- `false`
  - : Das Element ist nicht versteckt. Dies ist der Standardwert für das Attribut.
- `"until-found"`
  - : Das Element ist _versteckt bis gefunden_, was bedeutet, dass es versteckt ist, aber angezeigt wird, wenn es durch eine Seitensuche gefunden oder durch Fragmentnavigation erreicht wird.

Für Details zur Verwendung dieses Attributs siehe die Seite des [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)-HTML-Attributs, das diese Eigenschaft widerspiegelt.

## Beispiele

Hier ist ein Beispiel, bei dem ein versteckter Block verwendet wird, um eine Dankesnachricht zu enthalten, die angezeigt wird, nachdem ein Benutzer einer ungewöhnlichen Anfrage zugestimmt hat.

### HTML

Das HTML enthält zwei Bereiche: einen Willkommensbereich, der die Benutzer fragt, ob sie großartig sein möchten, und einen Folge-Bereich, der zunächst versteckt ist.

```html
<div id="welcome" class="panel">
  <h1>Welcome to Foobar.com!</h1>
  <p>By clicking "OK" you agree to be awesome today!</p>
  <button class="button" id="okButton">OK</button>
</div>

<div id="awesome" class="panel" hidden>
  <h1>Thanks!</h1>
  <p>Thanks for agreeing to be awesome today!</p>
</div>
```

### CSS

Der Inhalt wird mit dem unten stehenden CSS gestylt.

```css
.panel {
  font:
    16px "Open Sans",
    Helvetica,
    Arial,
    sans-serif;
  border: 1px solid #22d;
  padding: 12px;
  width: 500px;
  text-align: center;
}

.button {
  font:
    22px "Open Sans",
    Helvetica,
    Arial,
    sans-serif;
  padding: 5px 36px;
}

h1 {
  margin-top: 0;
  font-size: 175%;
}
```

### JavaScript

Das JavaScript fügt einen Event-Listener zum "OK"-Button hinzu, der das "Willkommen"-Panel versteckt und das "Großartig"-Panel anzeigt:

```js
document.getElementById("okButton").addEventListener(
  "click",
  () => {
    document.getElementById("welcome").hidden = true;
    document.getElementById("awesome").hidden = false;
  },
  false,
);
```

### Ergebnis

{{ EmbedLiveSample('Examples', 560, 200) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [hidden](/de/docs/Web/HTML/Reference/Global_attributes/hidden)-Attribut
- {{cssxref("display")}}
