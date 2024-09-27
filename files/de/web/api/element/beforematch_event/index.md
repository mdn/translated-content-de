---
title: "Element: beforematch-Event"
short-title: beforematch
slug: Web/API/Element/beforematch_event
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef}}{{SeeCompatTable}}

Ein Element erhält ein **`beforematch`**-Ereignis, wenn es sich im Zustand _hidden until found_ befindet und der Browser im Begriff ist, seinen Inhalt anzuzeigen, weil der Benutzer den Inhalt durch die "Suchen auf Seite"-Funktion oder durch Fragment-Navigation gefunden hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("beforematch", (event) => {});

onbeforematch = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Verwendungshinweise

Das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden) akzeptiert den Wert `until-found`: wenn dieser Wert angegeben wird, ist das Element zwar verborgen, sein Inhalt wird jedoch für die "Suchen auf Seite"-Funktion des Browsers oder für die Fragment-Navigation zugänglich sein. Wenn diese Funktionen ein Scrollen zu einem Element in einem "hidden until found"-Teilbaum verursachen, wird der Browser:

- ein `beforematch`-Ereignis auf dem versteckten Element auslösen
- das `hidden`-Attribut von dem Element entfernen
- zum Element scrollen

## Beispiele

### Verwendung von beforematch

In diesem Beispiel haben wir:

- Zwei {{HTMLElement("div")}}-Elemente. Das erste ist nicht verborgen, während das zweite die Attribute `hidden="until-found"` und `id="until-found-box"` hat.
- Einen Link, dessen Ziel das "`until-found-box"`-Fragment ist.

Wir haben auch etwas JavaScript, das auf das `beforematch`-Ereignis lauscht, das auf dem "hidden until found"-Element ausgelöst wird. Der Ereignis-Handler ändert den Textinhalt des Kastens.

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

Durch Klicken auf die Schaltfläche "Gehe zu verborgenem Inhalt" wird zum "hidden until found"-Element navigiert. Das `beforematch`-Ereignis wird ausgelöst, der Textinhalt wird aktualisiert und dann wird der Inhalt des Elements angezeigt.

Um das Beispiel erneut auszuführen, klicken Sie auf "Neu laden".

{{EmbedLiveSample("Using beforematch", "", 300)}}

Wenn Ihr Browser den `"until-found"`-enumerierten Wert des `hidden`-Attributs nicht unterstützt, wird das zweite `<div>` verborgen (da `hidden` vor der Hinzufügung des `until-found`-Werts ein boolescher Datentyp war).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)
