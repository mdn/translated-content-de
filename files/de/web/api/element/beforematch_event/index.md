---
title: "Element: beforematch-Event"
short-title: beforematch
slug: Web/API/Element/beforematch_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}

Ein Element erhält ein **`beforematch`**-Event, wenn es sich im _versteckt bis gefunden_-Zustand befindet und der Browser im Begriff ist, dessen Inhalt anzuzeigen, weil der Benutzer den Inhalt über die „Auf Seite suchen“-Funktion oder über Fragmentnavigation gefunden hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("beforematch", (event) => { })

onbeforematch = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Verwendungshinweise

Das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden) akzeptiert den Wert `until-found`: Wenn dieser Wert angegeben ist, wird das Element versteckt, aber sein Inhalt ist über die „Auf Seite suchen“-Funktion des Browsers oder über die Fragmentnavigation zugänglich. Wenn diese Funktionen dazu führen, dass zu einem Element in einem „versteckt bis gefunden“-Teilbaum gescrollt wird, wird der Browser folgendes tun:

1. Ein `beforematch`-Event auf dem versteckten Element auslösen
2. Das `hidden`-Attribut vom Element entfernen
3. Zum Element scrollen

## Beispiele

### Verwendung von beforematch

In diesem Beispiel haben wir zwei {{HTMLElement("div")}}-Elemente.
Das erste ist sichtbar, während das zweite die Attribute `hidden="until-found"` und `id="until-found-box"` hat.
Das Element mit der `until-found-box`-ID hat einen roten gepunkteten Rahmen und einen grauen Hintergrund.

Wir haben auch einen Link, der das Fragment `"until-found-box"` anvisiert, und JavaScript, das auf das Feuer des `beforematch`-Events bei diesem versteckten Element hört.
Der Ereignishandler ändert den Textinhalt der Box, um eine Aktion zu veranschaulichen, die auftreten kann, wenn der _versteckt bis gefunden_-Zustand entfernt werden soll.

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

Wenn Sie auf die Schaltfläche „Zum versteckten Inhalt gehen“ klicken, navigieren Sie zu dem Element im _versteckt bis gefunden_-Zustand.
Das `beforematch`-Ereignis wird ausgelöst, der Textinhalt wird aktualisiert, und dann wird der Inhalt des Elements angezeigt (das `hidden`-Attribut wird entfernt).

Um das Beispiel erneut auszuführen, klicken Sie auf „Neu laden“.

{{EmbedLiveSample("Using beforematch", "", 300)}}

Wenn Ihr Browser den `"until-found"`-enumerierten Wert des `hidden`-Attributs nicht unterstützt, wird das zweite `<div>` ausgeblendet (da `hidden` vor der Hinzufügung des `until-found`-Wertes einen booleschen Wert hatte).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
