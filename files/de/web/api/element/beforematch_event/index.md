---
title: "Element: beforematch-Ereignis"
short-title: beforematch
slug: Web/API/Element/beforematch_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("DOM")}}

Ein Element empfängt ein **`beforematch`**-Ereignis, wenn es sich im Zustand _hidden until found_ befindet und der Browser seinen Inhalt einblenden wird, weil der Benutzer ihn über die Funktion „Auf Seite suchen“ oder über eine Fragmentnavigation gefunden hat.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("beforematch", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onbeforematch = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Hinweise zur Verwendung

Das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden) akzeptiert den Wert `until-found`: Ist dieser Wert angegeben, ist das Element verborgen, sein Inhalt bleibt jedoch für die Funktion „Auf Seite suchen“ des Browsers und für die Fragmentnavigation zugänglich. Wenn eine dieser Funktionen dazu führt, dass zu einem Element innerhalb eines „hidden until found“-Teilbaums gescrollt wird, geht der Browser wie folgt vor:

1. Er löst ein `beforematch`-Ereignis auf dem verborgenen Element aus.
2. Er entfernt das Attribut `hidden` vom Element.
3. Er scrollt zum Element.

## Beispiele

### beforematch verwenden

In diesem Beispiel gibt es zwei {{HTMLElement("div")}}-Elemente.
Das erste ist sichtbar, während das zweite die Attribute `hidden="until-found"` und `id="until-found-box"` besitzt.
Das Element mit der ID `until-found-box` hat einen gepunkteten roten Rahmen und einen grauen Hintergrund.

Außerdem gibt es einen Link, der auf das Fragment `"until-found-box"` verweist, sowie JavaScript, das auf das Auslösen des `beforematch`-Ereignisses auf diesem verborgenen Element wartet.
Der Event-Handler ändert den Textinhalt des Elements, um eine Aktion zu veranschaulichen, die unmittelbar vor dem Aufheben des Zustands _hidden until found_ stattfinden kann.

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

Wenn Sie auf die Schaltfläche „Go to hidden content“ klicken, gelangen Sie zum Element im Zustand _hidden until found_.
Das `beforematch`-Ereignis wird ausgelöst, der Textinhalt wird aktualisiert und anschließend wird der Inhalt des Elements angezeigt (das Attribut `hidden` wird entfernt).

Um das Beispiel erneut auszuführen, klicken Sie auf „Reload“.

{{EmbedLiveSample("Using beforematch", "", 300)}}

Wenn Ihr Browser den Wert `"until-found"` für das Attribut `hidden` nicht unterstützt, bleibt das zweite `<div>` verborgen (da `hidden` vor der Einführung des Werts `until-found` ein boolesches Attribut war).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)
