---
title: "Element: beforematch Ereignis"
short-title: beforematch
slug: Web/API/Element/beforematch_event
l10n:
  sourceCommit: a61be259435257328a25c462cb0f42bc91981a6f
---

{{APIRef}}

Ein Element erhält ein **`beforematch`** Ereignis, wenn es sich im _versteckt bis gefunden_ Zustand befindet und der Browser im Begriff ist, seinen Inhalt aufzudecken, weil der Benutzer den Inhalt über die "Im-Dokument-Suchen"-Funktion oder durch Fragmentnavigation gefunden hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("beforematch", (event) => { })

onbeforematch = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Verwendungshinweise

Das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden) akzeptiert den Wert `until-found`: Wenn dieser Wert angegeben ist, wird das Element versteckt, aber sein Inhalt wird für die "Im-Dokument-Suchen"-Funktion des Browsers oder für die Fragmentnavigation zugänglich sein. Wenn diese Funktionen dazu führen, dass zu einem Element in einem "versteckt bis gefunden"-Unterbaum gescrollt wird, wird der Browser:

- ein `beforematch` Ereignis auf dem versteckten Element auslösen
- das `hidden` Attribut vom Element entfernen
- zum Element scrollen

## Beispiele

### Verwendung von beforematch

In diesem Beispiel haben wir:

- Zwei {{HTMLElement("div")}}-Elemente. Das erste ist nicht versteckt, während das zweite die Attribute `hidden="until-found"` und `id="until-found-box"` hat.
- Einen Link, dessen Ziel das Fragment `"until-found-box"` ist.

Wir haben auch etwas JavaScript, das auf das `beforematch` Ereignis des "versteckt bis gefunden"-Elements lauscht. Der Event-Handler ändert den Textinhalt der Box.

#### HTML

```html
<a href="#until-found-box">Go to hidden content</a>

<div>I'm not hidden</div>
<div id="until-found-box" hidden="until-found">Hidden until found</div>
```

```html hidden
<button id="reset">Reset</button>
```

#### CSS

```css
div {
  height: 40px;
  width: 300px;
  border: 5px dashed black;
  margin: 1rem 0;
  padding: 1rem;
  font-size: 2rem;
}
```

```css hidden
#until-found-box {
  scroll-margin-top: 200px;
}
```

#### JavaScript

```js
const untilFound = document.querySelector("#until-found-box");
untilFound.addEventListener(
  "beforematch",
  () => (untilFound.textContent = "I've been revealed!"),
);
```

```js hidden
document.querySelector("#reset").addEventListener("click", () => {
  document.location.hash = "";
  document.location.reload();
});
```

#### Ergebnis

Klicken auf die Schaltfläche "Go to hidden content" navigiert zum "versteckt bis gefunden"-Element. Das `beforematch` Ereignis wird ausgelöst, der Textinhalt wird aktualisiert und anschließend wird der Inhalt des Elements angezeigt.

Um das Beispiel erneut auszuführen, klicken Sie auf "Reload".

{{EmbedLiveSample("Using beforematch", "", 300)}}

Wenn Ihr Browser den `"until-found"` enumerierten Wert des `hidden` Attributs nicht unterstützt, wird das zweite `<div>` versteckt sein (da `hidden` vor der Hinzufügung des `until-found` Werts ein boolescher Wert war).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
