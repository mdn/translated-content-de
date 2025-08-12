---
title: "HTMLElement: hidden-Eigenschaft"
short-title: hidden
slug: Web/API/HTMLElement/hidden
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
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
  - : Das Element ist _verborgen bis es gefunden wird_, was bedeutet, dass es verborgen ist, aber sichtbar wird, wenn es durch eine Seitensuche gefunden oder durch Fragmentnavigation erreicht wird.

Für Details zur Verwendung dieses Attributs siehe die Seite für das [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)-HTML-Attribut, das durch diese Eigenschaft reflektiert wird.

## Beispiele

Hier ist ein Beispiel, in dem ein versteckter Block verwendet wird, um eine "Danke"-Nachricht zu enthalten, die angezeigt wird, nachdem ein Benutzer einer ungewöhnlichen Anfrage zugestimmt hat.

### HTML

Das HTML enthält zwei Panels: ein Willkommens-Panel, das die Benutzer bittet, der Großartigkeit zuzustimmen, und ein Folge-Panel, das ursprünglich verborgen ist.

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

Der Inhalt wird mit dem untenstehenden CSS gestaltet.

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

Das JavaScript fügt dem "OK"-Button einen Event-Listener hinzu, der das "welcome"-Panel verbirgt und das "awesome"-Panel anzeigt:

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
