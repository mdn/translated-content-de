---
title: "HTMLElement: hidden-Eigenschaft"
short-title: hidden
slug: Web/API/HTMLElement/hidden
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
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
  - : Das Element ist _versteckt bis es gefunden wird_, das bedeutet, es ist verborgen, wird aber angezeigt, wenn es über eine Seitensuche gefunden oder durch Fragmentnavigation erreicht wird.

Für Details zur Verwendung dieses Attributs siehe die Seite für das [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)-HTML-Attribut, das diese Eigenschaft reflektiert.

## Beispiele

Hier ist ein Beispiel, in dem ein versteckter Block verwendet wird, der eine 'Danke'-Nachricht enthält, die angezeigt wird, nachdem ein Benutzer einer ungewöhnlichen Anfrage zugestimmt hat.

### HTML

Das HTML enthält zwei Panels: ein Willkommens-Paneel, das die Nutzer auffordert, dem "awesome"-Sein zuzustimmen, und ein Folge-Paneel, das zunächst versteckt ist.

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

Der Inhalt wird mit dem folgenden CSS gestylt.

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

Das JavaScript fügt einen Event-Listener für die "OK"-Schaltfläche hinzu, die das "welcome"-Panel ausblendet und das "awesome"-Panel zeigt:

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
