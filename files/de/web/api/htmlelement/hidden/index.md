---
title: "HTMLElement: versteckte Eigenschaft"
short-title: hidden
slug: Web/API/HTMLElement/hidden
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{ APIRef("HTML DOM") }}

Die [`HTMLElement`](/de/docs/Web/API/HTMLElement) Eigenschaft **`hidden`** spiegelt den Wert des `hidden` Attributs des Elements wider.

## Wert

Dieses Attribut kann einen von drei Werten haben:

- `true`
  - : Das Element ist verborgen.
- `false`
  - : Das Element ist nicht verborgen. Dies ist der Standardwert des Attributs.
- `"until-found"`
  - : Das Element ist _verborgen, bis es gefunden wird_, was bedeutet, dass es versteckt ist, aber enthüllt wird, wenn es durch eine Seitensuche gefunden oder durch Fragmentnavigation erreicht wird.

Details zur Verwendung dieses Attributs finden Sie auf der Seite für das [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden) HTML-Attribut, auf das sich diese Eigenschaft bezieht.

## Beispiele

Hier ist ein Beispiel, bei dem ein versteckter Block verwendet wird, um eine „Danke“-Nachricht zu enthalten, die angezeigt wird, nachdem ein Benutzer einer ungewöhnlichen Anfrage zugestimmt hat.

### HTML

Das HTML enthält zwei Bereiche: ein Willkommenspanel, das die Benutzer fragt, ob sie großartig sein möchten, und ein Folgepanel, das anfänglich versteckt ist.

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

Der Inhalt wird mit dem folgenden CSS gestaltet.

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

Das JavaScript fügt einen Event-Listener zum "OK"-Button hinzu, der das "Willkommen"-Panel ausblendet und das "Großartig"-Panel anzeigt:

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

- [hidden](/de/docs/Web/HTML/Global_attributes/hidden) Attribut
- {{cssxref("display")}}
