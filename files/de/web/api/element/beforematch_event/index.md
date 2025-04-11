---
title: "Element: beforematch-Ereignis"
short-title: beforematch
slug: Web/API/Element/beforematch_event
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef}}{{SeeCompatTable}}

Ein Element erhält ein **`beforematch`**-Ereignis, wenn es sich im _hidden until found_-Zustand befindet und der Browser im Begriff ist, seinen Inhalt anzuzeigen, weil der Benutzer den Inhalt über die "Im-Seite-suchen"-Funktion oder über Fragmentnavigation gefunden hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("beforematch", (event) => {});

onbeforematch = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Verwendungshinweise

Das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden) akzeptiert einen Wert `until-found`: Wenn dieser Wert angegeben ist, ist das Element versteckt, aber sein Inhalt wird für die "Im-Seite-suchen"-Funktion des Browsers oder für Fragmentnavigation zugänglich sein. Wenn diese Funktionen dazu führen, dass zu einem Element in einem "hidden until found"-Teilbaum gescrollt wird, wird der Browser:

- ein `beforematch`-Ereignis auf dem versteckten Element auslösen
- das `hidden`-Attribut vom Element entfernen
- zum Element scrollen

## Beispiele

### Verwendung von beforematch

In diesem Beispiel haben wir:

- Zwei {{HTMLElement("div")}}-Elemente. Das erste ist nicht versteckt, während das zweite die Attribute `hidden="until-found"` und `id="until-found-box"` hat.
- Einen Link, dessen Ziel das Fragment `"until-found-box"` ist.

Wir haben auch etwas JavaScript, das auf das `beforematch`-Ereignis hört, das bei dem versteckten bis gefundenen Element ausgelöst wird. Der Ereignishandler ändert den Textinhalt des Box-Elements.

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

Durch Klicken auf die Schaltfläche "Gehe zu verstecktem Inhalt" wird zu dem "hidden-until-found"-Element navigiert. Das `beforematch`-Ereignis wird ausgelöst, der Textinhalt wird aktualisiert und dann wird der Elementinhalt angezeigt.

Um das Beispiel erneut auszuführen, klicken Sie auf "Neu laden".

{{EmbedLiveSample("Using beforematch", "", 300)}}

Wenn Ihr Browser den `"until-found"`-Aufzählungswert des `hidden`-Attributs nicht unterstützt, wird das zweite `<div>` versteckt sein (da `hidden` vor der Hinzufügung des `until-found`-Werts boolean war).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
