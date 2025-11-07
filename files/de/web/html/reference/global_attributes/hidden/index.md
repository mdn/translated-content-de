---
title: HTML hidden global attribute
short-title: hidden
slug: Web/HTML/Reference/Global_attributes/hidden
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`hidden`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("enumerated", "aufgezähltes")}} Attribut, das angibt, dass der Browser den Inhalt des Elements nicht rendern soll. Zum Beispiel kann es verwendet werden, um Elemente der Seite auszublenden, die erst nach Abschluss des Anmeldeprozesses verwendet werden können.

{{InteractiveExample("HTML Demo: hidden", "tabbed-shorter")}}

```html interactive-example
<p>
  This content should be read right now, as it is important. I am so glad you
  are able to find it!
</p>

<p hidden>
  This content is not relevant to this page right now, so should not be seen.
  Nothing to see here. Nada.
</p>
```

```css interactive-example
p {
  background: #ffe8d4;
  border: 1px solid #f69d3c;
  padding: 5px;
  border-radius: 5px;
}
```

## Beschreibung

Das `hidden`-Attribut gibt an, dass der Inhalt eines Elements dem Benutzer nicht angezeigt werden soll. Das Attribut kann einen der folgenden Werte annehmen:

- das Schlüsselwort `hidden`
- das Schlüsselwort `until-found`
- ein leerer String oder kein Wert

Ungültige Werte für das `hidden`-Attribut setzen das Element ebenfalls in den _versteckt_-Status. Daher befinden sich alle folgenden Elemente im [_versteckt_](#der_versteckt-status)-Status:

```html
<span hidden>I'm hidden</span>
<span hidden="">I'm also hidden</span>
<span hidden="hidden">I'm hidden too!</span>
<span hidden="bananas">I'm equally as hidden!</span>
```

Das Schlüsselwort `until-found` setzt das Element in den [_hidden until found_](#der_'hidden_until_found'-status)-Status:

```html
<span hidden="until-found">I'm hidden until found</span>
```

### Der versteckt-Status

Der _versteckt_-Status gibt an, dass das Element derzeit nicht relevant für die Seite ist oder dass es verwendet wird, um Inhalt zu deklarieren, der von anderen Teilen der Seite erneut verwendet werden soll, und nicht direkt dem Benutzer präsentiert werden soll. Der Browser wird Elemente, die sich im _versteckt_-Status befinden, nicht rendern.

Webbrowser können den _versteckt_-Status mit `display: none` implementieren, in welchem Fall das Element nicht am Seitenlayout teilnimmt. Außerdem überschreibt das Ändern des Werts der CSS-Eigenschaft {{cssxref("display")}} auf einem versteckten Element den _versteckt_-Status. Elemente, die mit `display: block` gestaltet sind, werden beispielsweise angezeigt, trotz des Vorhandenseins des `hidden`-Attributs.

### Der 'hidden until found'-Status

Im _hidden until found_-Status ist das Element versteckt, aber sein Inhalt bleibt für die "Seite durchsuchen"-Funktion des Browsers oder für die Fragmentnavigation zugänglich. Wenn diese Funktionen ein Scrollen zu einem Element in einem _hidden until found_-Unterbaum auslösen, wird der Browser:

1. Ein [`beforematch`](/de/docs/Web/API/Element/beforematch_event)-Ereignis auf dem versteckten Element auslösen
2. Das `hidden`-Attribut vom Element entfernen
3. Zum Element scrollen

Dies ermöglicht es, einen Abschnitt von Inhalten zu reduzieren, während es Benutzern dennoch erlaubt wird, ihn durch Suche oder Navigation zu finden.

Browser implementieren typischerweise _hidden until found_ mit {{cssxref("content-visibility", "content-visibility: hidden")}}. Das bedeutet, dass, anders als Elemente im _versteckt_-Status, Elemente im _hidden until found_-Status Boxen erzeugen, und:

- sie am Seitenlayout teilnehmen
- ihre Ränder, Rahmen, Abstände und der Hintergrund gerendert werden

Außerdem muss das Element von [Layout-Einschränkungen](/de/docs/Web/CSS/Guides/Containment) betroffen sein, um sichtbar gemacht zu werden. Wenn das Element im _hidden until found_-Status einen `display`-Wert von `none`, `contents` oder `inline` hat, wird es durch "Seite durchsuchen" oder Fragmentnavigation nicht sichtbar gemacht.

## Hinweise zur Verwendung

Das `hidden`-Attribut darf nicht verwendet werden, um Inhalte nur in einer Darstellung zu verstecken. Wenn etwas als versteckt markiert ist, ist es aus allen Darstellungen ausgeblendet, einschließlich beispielsweise Bildschirmlesegeräten.

Versteckte Elemente sollten nicht von sichtbaren Elementen verlinkt werden, es sei denn, es wird `hidden="until-found"` verwendet. Zum Beispiel wäre es falsch, das `href`-Attribut zu verwenden, um auf einen Abschnitt mit dem `hidden`-Attribut zu verlinken. Wenn der Inhalt nicht anwendbar oder relevant ist, sollte er nicht verlinkt werden.

Allerdings ist es in Ordnung, das ARIA-Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) zu verwenden, um auf versteckte Beschreibungen zu verweisen. Auch wenn das Verbergen der Beschreibungen impliziert, dass sie nicht allein nützlich sind, können sie beim Verweisen auf diese Weise hilfreichen Kontext bieten.

Ähnlich kann ein Canvas-Element mit dem `hidden`-Attribut von einer geskripteten Grafik-Engine als Offscreen-Puffer verwendet werden, und ein Formular-Steuerelement könnte auf ein verstecktes Formularelement mittels seines form-Attributs verweisen.

Schließlich sollte beachtet werden, dass Elemente, die Nachkommen eines versteckten Elements sind, weiterhin aktiv sind, was bedeutet, dass Skriptelemente weiterhin ausgeführt werden können und Formularelemente weiterhin übermittlungen können:

```html
<div hidden>
  <script>
    console.warn("Boo! I'm hidden *and* running!");
  </script>
</div>
```

## Beispiele

### Verwendung des hidden-Attributs

In diesem Beispiel haben wir drei {{HTMLElement("div")}}-Elemente. Das erste und das dritte sind nicht versteckt, während das zweite ein `hidden`-Attribut hat. Beachten Sie, dass das versteckte Element keine erzeugte Box hat.

```html
<div>I'm not hidden</div>
<div hidden>I'm hiding!</div>
<div>I'm not hidden, either</div>
```

```css hidden
div {
  height: 40px;
  width: 300px;
  border: 5px dashed black;
  margin: 1rem 0;
  padding: 1rem;
  font-size: 2rem;
}
```

{{EmbedLiveSample("using_the_hidden_attribute", "", 300)}}

### Verwendung des until-found-Wertes

In diesem Beispiel haben wir drei {{HTMLElement("div")}}-Elemente. Das erste und das dritte sind sichtbar, während das zweite die Attribute `hidden="until-found"` und `id="until-found-box"` hat. Das Element mit der id `until-found-box` hat einen gepunkteten roten Rahmen und einen grauen Hintergrund.

Wir haben auch einen Link, der auf das Fragment `"until-found-box"` zielt, und JavaScript, das auf das `beforematch`-Ereignis hört, das auf diesem versteckten Element ausgelöst wird. Der Ereignishandler ändert den Textinhalt der Box, um eine Aktion zu veranschaulichen, die erfolgen kann, wenn der _hidden until found_-Status entfernt werden soll.

#### HTML

```html
<a href="#until-found-box">Go to hidden content</a>

<div>I'm not hidden</div>
<div id="until-found-box" hidden="until-found">Hidden until found</div>
<div>I'm hidden</div>
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

Wenn Sie auf den Link "Gehe zu verstecktem Inhalt" klicken, navigieren Sie zu dem _hidden until found_-Element. Das `beforematch`-Ereignis wird ausgelöst, der Textinhalt wird aktualisiert, und das Element wird sichtbar. Beachten Sie, dass obwohl der Inhalt des Elements versteckt ist, das Element dennoch eine erzeugte Box hat, die Platz im Layout einnimmt, und der Hintergrund sowie die Ränder gerendert werden.

Um das Beispiel erneut auszuführen, klicken Sie auf "Zurücksetzen".

{{EmbedLiveSample("Using until-found", "", 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.hidden`](/de/docs/Web/API/HTMLElement/hidden)
- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- Das ARIA-Attribut [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- Das [`beforematch`](/de/docs/Web/API/Element/beforematch_event)-Ereignis
