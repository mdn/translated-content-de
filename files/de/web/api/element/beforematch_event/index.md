---
title: "Element: beforematch Event"
short-title: beforematch
slug: Web/API/Element/beforematch_event
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef}}{{SeeCompatTable}}

Ein Element erhält ein **`beforematch`**-Ereignis, wenn es sich im _versteckt bis gefunden_-Zustand befindet und der Browser im Begriff ist, seinen Inhalt sichtbar zu machen, weil der Benutzer den Inhalt über die "Auf Seite suchen"-Funktion oder durch Fragmentnavigation gefunden hat.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("beforematch", (event) => {});

onbeforematch = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Nutzungshinweise

Das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden) akzeptiert den Wert `until-found`: Wenn dieser Wert angegeben ist, wird das Element versteckt, aber sein Inhalt ist über die "Auf Seite suchen"-Funktion des Browsers oder eine Fragmentnavigation zugänglich. Wenn diese Funktionen ein Scrollen zu einem Element in einem "versteckt bis gefunden"-Teilbaum verursachen, wird der Browser:

- ein `beforematch`-Ereignis für das versteckte Element auslösen
- das `hidden`-Attribut vom Element entfernen
- zum Element scrollen

## Beispiele

### Verwendung von beforematch

In diesem Beispiel haben wir:

- Zwei {{HTMLElement("div")}}-Elemente. Das erste ist nicht versteckt, während das zweite die Attribute `hidden="until-found"` und `id="until-found-box"` hat.
- Einen Link, dessen Ziel das Fragment `"until-found-box"` ist.

Wir haben auch etwas JavaScript, das auf das `beforematch`-Ereignis horcht, das beim "versteckten bis gefunden" Element ausgelöst wird. Der Ereignis-Handler ändert den Textinhalt der Box.

#### HTML

```html
<a href="#until-found-box">Zum versteckten Inhalt gehen</a>

<div>Ich bin nicht versteckt</div>
<div id="until-found-box" hidden="until-found">Versteckt bis gefunden</div>
```

```html hidden
<button id="reset">Zurücksetzen</button>
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
  () => (untilFound.textContent = "Ich wurde enthüllt!"),
);
```

```js hidden
document.querySelector("#reset").addEventListener("click", () => {
  document.location.hash = "";
  document.location.reload();
});
```

#### Ergebnis

Ein Klick auf die Schaltfläche "Zum versteckten Inhalt gehen" navigiert zum "versteckt bis gefunden"-Element. Das `beforematch`-Ereignis wird ausgelöst, der Textinhalt wird aktualisiert und dann wird der Inhalt des Elements angezeigt.

Um das Beispiel erneut auszuführen, klicken Sie auf "Aktualisieren".

{{EmbedLiveSample("Using beforematch", "", 300)}}

Wenn Ihr Browser den `"until-found"`-Wert des `hidden`-Attributs nicht unterstützt, wird das zweite `<div>`-Element versteckt sein (da `hidden` vor der Hinzufügung des `until-found`-Wertes ein boolescher Wert war).

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Global_attributes/hidden)
