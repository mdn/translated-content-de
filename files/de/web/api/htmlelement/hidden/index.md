---
title: "HTMLElement: hidden-Eigenschaft"
short-title: hidden
slug: Web/API/HTMLElement/hidden
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("HTML DOM") }}

Die {{domxref("HTMLElement")}}-Eigenschaft **`hidden`** spiegelt den Wert des [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)-Attributs des Elements wider.

## Wert

Dieses Attribut kann einen der drei folgenden Werte haben:

- `true`
  - : Das Element ist versteckt.
- `false`
  - : Das Element ist nicht versteckt. Dies ist der Standardwert für das Attribut.
- `"until-found"`
  - : Das Element ist _versteckt, bis es gefunden wird_. Das bedeutet, dass es versteckt ist, aber angezeigt wird, wenn es durch eine Seitensuche oder durch Fragmentnavigation erreicht wird.

Einzelheiten zur Verwendung dieses Attributs finden Sie auf der Seite für das [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)-HTML-Attribut, das diese Eigenschaft widerspiegelt.

## Beispiele

Hier ist ein Beispiel, bei dem ein versteckter Block verwendet wird, um eine "Danke"-Nachricht zu enthalten, die angezeigt wird, nachdem ein Benutzer einer ungewöhnlichen Anfrage zugestimmt hat.

### HTML

Das HTML enthält zwei Bereiche: ein Willkommenspanel, das die Benutzer auffordert, der Großartigkeit zuzustimmen, und ein Folgepanel, das zunächst versteckt ist.

```html
<div id="welcome" class="panel">
  <h1>Willkommen bei Foobar.com!</h1>
  <p>Durch Klicken auf "OK" stimmen Sie zu, heute großartig zu sein!</p>
  <button class="button" id="okButton">OK</button>
</div>

<div id="awesome" class="panel" hidden>
  <h1>Danke!</h1>
  <p>Danke, dass Sie zugestimmt haben, heute großartig zu sein!</p>
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

Das JavaScript fügt einen Event-Listener zum "OK"-Button hinzu, der das "welcome"-Panel ausblendet und das "awesome"-Panel anzeigt:

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

- [hidden](/de/docs/Web/HTML/Global_attributes#hidden) Attribut
- {{cssxref("display")}}
