---
title: "HTMLElement: hidden-Eigenschaft"
short-title: hidden
slug: Web/API/HTMLElement/hidden
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

{{ APIRef("HTML DOM") }}

Die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Eigenschaft **`hidden`** spiegelt den Wert des [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)-Attributes des Elements wider.

## Wert

Dieses Attribut kann einen von drei Werten haben:

- `true`
  - : Das Element ist versteckt.
- `false`
  - : Das Element ist nicht versteckt. Dies ist der Standardwert für das Attribut.
- `"until-found"`
  - : Das Element ist _versteckt bis gefunden_, was bedeutet, dass es versteckt ist, aber sichtbar wird, wenn es durch die Suchfunktion auf der Seite gefunden oder über Fragmentnavigation erreicht wird.

Für Details zur Verwendung dieses Attributs siehe die Seite für das [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)-HTML-Attribut, das diese Eigenschaft widerspiegelt.

## Beispiele

Hier ist ein Beispiel, bei dem ein versteckter Block verwendet wird, um eine "Danke"-Nachricht zu enthalten, die nach der Zustimmung eines Nutzers zu einer ungewöhnlichen Anfrage angezeigt wird.

### HTML

Das HTML enthält zwei Bereiche: ein Willkommensfeld, das die Nutzer auffordert, einer großartigen Sache zuzustimmen, und ein nachträgliches Feld, das anfänglich versteckt ist.

```html
<div id="welcome" class="panel">
  <h1>Welcome to my website!</h1>
  <p>By clicking "OK" you agree to be awesome today!</p>
  <button class="button" id="okButton">OK</button>
</div>

<div id="awesome" class="panel" hidden>
  <h1>Thanks!</h1>
  <p>Thanks for agreeing to be awesome today!</p>
</div>
```

### CSS

Der Inhalt wird mithilfe des folgenden CSS gestylt.

```css
.panel {
  font:
    16px "Open Sans",
    "Helvetica",
    "Arial",
    sans-serif;
  border: 1px solid #2222dd;
  padding: 12px;
  width: 500px;
  text-align: center;
}

.button {
  font:
    22px "Open Sans",
    "Helvetica",
    "Arial",
    sans-serif;
  padding: 5px 36px;
}

h1 {
  margin-top: 0;
  font-size: 175%;
}
```

### JavaScript

Das JavaScript fügt dem "OK"-Button einen Event Listener hinzu, der das "welcome"-Panel versteckt und das "awesome"-Panel anzeigt:

```js
document.getElementById("okButton").addEventListener("click", () => {
  document.getElementById("welcome").hidden = true;
  document.getElementById("awesome").hidden = false;
});
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
