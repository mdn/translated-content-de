---
title: "Element: beforematch-Ereignis"
short-title: beforematch
slug: Web/API/Element/beforematch_event
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef}}{{SeeCompatTable}}

Ein Element erhält ein **`beforematch`**-Ereignis, wenn es sich im Zustand _versteckt bis gefunden_ befindet und der Browser im Begriff ist, seinen Inhalt anzuzeigen, weil der Benutzer den Inhalt über die "Seite durchsuchen"-Funktion oder durch Fragmentnavigation gefunden hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("beforematch", (event) => {});

onbeforematch = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Nutzungshinweise

Das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden) akzeptiert den Wert `until-found`: wenn dieser Wert angegeben ist, wird das Element versteckt, aber sein Inhalt wird für die "Seite durchsuchen"-Funktion des Browsers oder für die Fragmentnavigation zugänglich sein. Wenn diese Funktionen zu einem Bildlauf zu einem Element in einem "versteckt bis gefunden"-Unterbaum führen, wird der Browser:

- ein `beforematch`-Ereignis auf dem versteckten Element auslösen
- das `hidden`-Attribut vom Element entfernen
- zum Element scrollen

## Beispiele

### Verwendung von beforematch

In diesem Beispiel haben wir:

- Zwei {{HTMLElement("div")}}-Elemente. Das erste ist nicht versteckt, während das zweite die Attribute `hidden="until-found"` und `id="until-found-box"` hat.
- Einen Link, dessen Ziel das `"until-found-box"`-Fragment ist.

Wir haben auch etwas JavaScript, das auf das Auslösen des `beforematch`-Ereignisses auf dem versteckten, bis gefundenen Element hört. Der Ereignishandler ändert den Textinhalt des Kastens.

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

Wenn Sie auf die Schaltfläche "Gehe zu verstecktem Inhalt" klicken, wird zum versteckten-bis-gefundenen Element navigiert. Das `beforematch`-Ereignis wird ausgelöst, der Textinhalt wird aktualisiert, und dann wird der Inhalt des Elements angezeigt.

Um das Beispiel erneut auszuführen, klicken Sie auf "Neu laden".

{{EmbedLiveSample("Using beforematch", "", 300)}}

Wenn Ihr Browser den `hidden`-Attributwert `"until-found"` nicht unterstützt, wird das zweite `<div>` versteckt sein (da `hidden` vor der Hinzufügung des `until-found`-Werts boolesch war).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)
