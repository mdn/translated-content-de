---
title: "HTMLElement: hidden-Eigenschaft"
short-title: hidden
slug: Web/API/HTMLElement/hidden
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{ APIRef("HTML DOM") }}

Die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Eigenschaft **`hidden`** spiegelt den Wert des [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)-Attributs des Elements wider.

## Wert

Dieses Attribut kann einen von drei Werten haben:

- `true`
  - : Das Element ist verborgen.
- `false`
  - : Das Element ist nicht verborgen. Dies ist der Standardwert für das Attribut.
- `"until-found"`
  - : Das Element ist _verborgen bis gefunden_, was bedeutet, dass es verborgen ist, aber sichtbar wird, wenn es durch eine Seitensuche gefunden oder über eine Fragmentnavigation erreicht wird.

Für Details zur Verwendung dieses Attributs siehe die Seite für das [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden) HTML-Attribut, das durch diese Eigenschaft widergespiegelt wird.

## Beispiele

Hier ist ein Beispiel, bei dem ein versteckter Block verwendet wird, um eine 'Danke'-Nachricht zu enthalten, die angezeigt wird, nachdem ein Benutzer einer ungewöhnlichen Anfrage zugestimmt hat.

### HTML

Das HTML enthält zwei Paneele: ein Willkommens-Paneel, das die Benutzer auffordert, großartig zu sein, und ein nachfolgendes Paneel, das anfangs verborgen ist.

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

Der Inhalt wird mit dem folgenden CSS stilisiert.

```css
.panel {
  font:
    16px "Open Sans",
    Helvetica,
    Arial,
    sans-serif;
  border: 1px solid #2222dd;
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

Das JavaScript fügt einen Ereignis-Listener zum "OK"-Button hinzu, der das "Willkommen"-Paneel versteckt und das "Großartig"-Paneel zeigt:

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
