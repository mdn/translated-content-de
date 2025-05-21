---
title: "Element: beforematch Ereignis"
short-title: beforematch
slug: Web/API/Element/beforematch_event
l10n:
  sourceCommit: b114c920cc7dea474cfe05b7bacd053a1b2d411f
---

{{APIRef}}

Ein Element empfängt ein **`beforematch`** Ereignis, wenn es sich im Zustand _versteckt bis gefunden_ befindet und der Browser im Begriff ist, seinen Inhalt anzuzeigen, weil der Benutzer den Inhalt über die Funktion "Auf der Seite suchen" oder durch Fragment-Navigation gefunden hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

```js-nolint
addEventListener("beforematch", (event) => { })

onbeforematch = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Nutzungshinweise

Das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden) akzeptiert den Wert `until-found`: Wenn dieser Wert angegeben ist, wird das Element versteckt, aber sein Inhalt wird für die "Auf der Seite suchen"-Funktion des Browsers oder für die Fragment-Navigation zugänglich. Wenn diese Funktionen ein Scrollen zu einem Element in einem "versteckt bis gefunden"-Teilbaum veranlassen, wird der Browser:

1. Ein `beforematch` Ereignis auf dem versteckten Element auslösen
2. Das `hidden` Attribut vom Element entfernen
3. Zum Element scrollen

## Beispiele

### Verwendung von beforematch

In diesem Beispiel haben wir zwei {{HTMLElement("div")}} Elemente.
Das erste ist sichtbar, während das zweite die Attribute `hidden="until-found"` und `id="until-found-box"` besitzt.
Das Element mit der `until-found-box` ID hat einen gepunkteten roten Rand und einen grauen Hintergrund.

Wir haben auch einen Link, der auf das `"until-found-box"` Fragment zielt, und JavaScript, das auf das Auslösen des `beforematch` Ereignisses bei diesem versteckten Element wartet.
Der Ereignishandler ändert den Textinhalt des Kastens, um eine Aktion zu veranschaulichen, die erfolgen kann, wenn der Zustand _versteckt bis gefunden_ im Begriff ist, entfernt zu werden.

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

div#until-found-box {
  color: red;
  border: 5px dotted red;
  background-color: lightgray;
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

Wenn Sie auf die Schaltfläche "Zum versteckten Inhalt gehen" klicken, wird zum Element im Zustand _versteckt bis gefunden_ navigiert.
Das `beforematch` Ereignis wird ausgelöst, der Textinhalt wird aktualisiert und dann wird der Inhalt des Elements angezeigt (das `hidden` Attribut wird entfernt).

Um das Beispiel erneut auszuführen, klicken Sie auf "Neu laden".

{{EmbedLiveSample("Using beforematch", "", 300)}}

Wenn Ihr Browser den `"until-found"` enumerierten Wert des `hidden` Attributs nicht unterstützt, wird das zweite `<div>` verborgen sein (da `hidden` vor der Hinzufügung des `until-found` Wertes ein boolescher Wert war).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
