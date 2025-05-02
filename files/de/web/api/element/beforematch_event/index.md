---
title: "Element: beforematch-Ereignis"
short-title: beforematch
slug: Web/API/Element/beforematch_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{SeeCompatTable}}

Ein Element erhält ein **`beforematch`** Ereignis, wenn es sich im Zustand _hidden until found_ befindet und der Browser kurz davor ist, seinen Inhalt zu enthüllen, weil der Benutzer den Inhalt über die "Auf Seite suchen"-Funktion oder durch Fragmentnavigation gefunden hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandler-Eigenschaft.

```js-nolint
addEventListener("beforematch", (event) => { })

onbeforematch = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Verwendungshinweise

Das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden) akzeptiert den Wert `until-found`: Wenn dieser Wert angegeben ist, wird das Element verborgen, aber sein Inhalt wird für die "Auf Seite suchen"-Funktion des Browsers oder für die Fragmentnavigation zugänglich sein. Wenn diese Funktionen dazu führen, dass zu einem Element in einem "hidden until found"-Teilbaum gescrollt wird, wird der Browser:

- ein `beforematch` Ereignis auf dem verborgenen Element auslösen
- das `hidden` Attribut vom Element entfernen
- zum Element scrollen

## Beispiele

### Verwendung von beforematch

In diesem Beispiel haben wir:

- Zwei {{HTMLElement("div")}} Elemente. Das erste ist nicht verborgen, während das zweite die Attribute `hidden="until-found"` und `id="until-found-box"` besitzt.
- Einen Link, dessen Ziel das Fragment `"until-found-box"` ist.

Wir haben auch etwas JavaScript, das auf das `beforematch` Ereignis hört, das auf dem verborgenen bis gefundenen Element ausgelöst wird. Der Ereignisbehandler ändert den Textinhalt des Kastens.

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

Durch Klicken auf die Schaltfläche "Go to hidden content" gelangt man zu dem bis zur Entdeckung verborgenen Element. Das `beforematch` Ereignis wird ausgelöst, der Textinhalt wird aktualisiert und dann wird der Inhalt des Elements angezeigt.

Um das Beispiel erneut auszuführen, klicken Sie auf "Reload".

{{EmbedLiveSample("Using beforematch", "", 300)}}

Wenn Ihr Browser den enumerierten Wert `"until-found"` des `hidden` Attributs nicht unterstützt, wird das zweite `<div>` versteckt sein (da `hidden` vor der Hinzufügung des `until-found` Wertes ein boolescher Wert war).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
