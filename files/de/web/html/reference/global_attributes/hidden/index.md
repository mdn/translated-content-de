---
title: HTML hidden globales Attribut
short-title: hidden
slug: Web/HTML/Reference/Global_attributes/hidden
l10n:
  sourceCommit: 032373c0ec106ec2d57f6bd14e74e2cc9191907a
---

Das **`hidden`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("enumerated", "enumeriertes")}} Attribut, das angibt, dass der Browser den Inhalt des Elements nicht rendern sollte. Zum Beispiel kann es verwendet werden, um Seitenelemente auszublenden, die erst genutzt werden können, wenn der Anmeldeprozess abgeschlossen ist.

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

Das `hidden`-Attribut gibt an, dass der Inhalt eines Elements dem Benutzer nicht präsentiert werden soll.
Das Attribut kann einen der folgenden Werte annehmen:

- das Schlüsselwort `hidden`
- das Schlüsselwort `until-found`
- ein leerer String oder kein Wert

Ungültige `hidden`-Attributwerte versetzen das Element ebenfalls in den _hidden_-Status. Daher befinden sich alle folgenden Elemente im [_hidden_](#der_hidden-status)-Status:

```html
<span hidden>I'm hidden</span>
<span hidden="">I'm also hidden</span>
<span hidden="hidden">I'm hidden too!</span>
<span hidden="bananas">I'm equally as hidden!</span>
```

Das Schlüsselwort `until-found` versetzt das Element in den [_hidden until found_](#der_hidden_until_found-status)-Status:

```html
<span hidden="until-found">I'm hidden until found</span>
```

### Der hidden-Status

Der _hidden_-Status zeigt an, dass das Element derzeit nicht relevant für die Seite ist oder dass es verwendet wird, um Inhalt zu deklarieren, der von anderen Teilen der Seite wiederverwendet werden soll und nicht direkt dem Benutzer präsentiert werden sollte. Der Browser wird Elemente, die sich im _hidden_-Status befinden, nicht rendern.

Webbrowser können den _hidden_-Status mit `display: none` implementieren, in welchem Fall das Element nicht am Seitenlayout teilnimmt.
Zusätzlich wird eine Änderung des Wertes der CSS {{cssxref("display")}} Eigenschaft eines versteckten Elements den _hidden_-Status überschreiben.
Beispielsweise werden Elemente, die mit `display: block` gestylt sind, trotz des `hidden`-Attributs angezeigt.

### Der hidden until found-Status

Im _hidden until found_-Status ist das Element verborgen, aber sein Inhalt wird für die "Seite durchsuchen"-Funktion des Browsers oder für Fragmentnavigation zugänglich sein.
Wenn diese Features zu einem Element in einem _hidden until found_-Teilbaum scrollen, wird der Browser:

1. Ein [`beforematch`](/de/docs/Web/API/Element/beforematch_event)-Ereignis am versteckten Element auslösen
2. Das `hidden`-Attribut vom Element entfernen
3. Zum Element scrollen

Dies ermöglicht es Ihnen, einen Abschnitt des Inhalts zu kollabieren, während Benutzer ihn dennoch durch Suche oder Navigation finden können.

Browser implementieren _hidden until found_ typischerweise mit {{cssxref("content-visibility", "content-visibility: hidden")}}.
Das bedeutet, dass im Gegensatz zu Elementen im _hidden_-Status, Elemente im _hidden until-found_-Status Boxen generieren und:

- sie am Seitenlayout teilnehmen
- ihre Ränder, Rahmen, Abstände und Hintergründe gerendert werden

Außerdem muss das Element von [Layout-Containment](/de/docs/Web/CSS/Guides/Containment) betroffen sein, um sichtbar gemacht zu werden.
Wenn das Element im _hidden until found_-Status einen `display`-Wert von `none`, `contents` oder `inline` hat, wird das Element nicht von "Seite durchsuchen" oder Fragmentnavigation sichtbar gemacht.

## Anwendungsnotizen

Das `hidden`-Attribut sollte nicht verwendet werden, um Inhalte nur aus einer Präsentation auszublenden.
Wenn etwas als versteckt markiert ist, ist es von allen Präsentationen versteckt, einschließlich zum Beispiel Bildschirmlesegeräten.

Versteckte Elemente sollten nicht von sichtbaren Elementen verlinkt werden, es sei denn, es wird `hidden="until-found"` verwendet.
Zum Beispiel wäre es inkorrekt, das `href`-Attribut zu verwenden, um auf einen Abschnitt mit dem `hidden`-Attribut zu verlinken.
Wenn der Inhalt nicht anwendbar oder relevant ist, sollte er nicht verlinkt werden.

Es ist jedoch in Ordnung, das ARIA-Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) zu verwenden, um auf versteckte Beschreibungen zu verweisen. Auch wenn das Verstecken der Beschreibungen impliziert, dass sie alleine nicht nützlich sind, können sie auf diese Weise hilfreichen Kontext bieten.

Ebenso könnte ein `<canvas>`-Element mit dem `hidden`-Attribut von einer skriptgesteuerten Grafik-Engine als Off-Screen-Puffer verwendet werden, und ein Formularelement könnte auf ein verstecktes Formularelement mit seinem Form-Attribut verweisen.

Zuletzt sei erwähnt, dass Elemente, die Nachfahren eines versteckten Elements sind, weiterhin aktiv sind, was bedeutet, dass `<script>`-Elemente weiterhin ausgeführt werden und Formularelemente weiterhin Daten absenden können:

```html
<div hidden>
  <script>
    console.warn("Boo! I'm hidden *and* running!");
  </script>
</div>
```

## Beispiele

### Verwendung des hidden-Attributs

In diesem Beispiel haben wir drei {{HTMLElement("div")}} Elemente. Das erste und das dritte sind nicht versteckt, während das zweite ein `hidden`-Attribut besitzt.
Beachten Sie, dass das versteckte Element keine generierte Box hat.

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

### Verwendung des until-found Wertes

In diesem Beispiel haben wir drei {{HTMLElement("div")}} Elemente.
Das erste und das dritte sind sichtbar, während das zweite die Attribute `hidden="until-found"` und `id="until-found-box"` besitzt.
Das Element mit der `until-found-box`-ID hat einen gepunkteten roten Rahmen und einen grauen Hintergrund.

Wir haben auch einen Link, der auf das Fragment `"until-found-box"` zielt, und JavaScript, das auf das `beforematch`-Ereignis hört, das bei diesem versteckten Element ausgelöst wird.
Der Ereignis-Handler ändert den Textinhalt der Box, um eine Aktion zu veranschaulichen, die stattfinden kann, wenn der _hidden until found_-Status entfernt werden soll.

#### HTML

```html
<a href="#until-found-box">Go to hidden content</a>

<div>I'm not hidden</div>
<div id="until-found-box" hidden="until-found">Hidden until found</div>
<div>I'm not hidden, either</div>
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

Das Anklicken des Links "Zum versteckten Inhalt gehen" navigiert zum _hidden until found_-Element. Das `beforematch`-Ereignis wird ausgelöst, der Textinhalt wird aktualisiert, und das Element wird sichtbar.
Beachten Sie, dass obwohl der Inhalt des Elements verborgen ist, das Element dennoch eine generierte Box hat, die im Layout Platz einnimmt und mit Hintergrund und Rahmen gerendert wird.

Um das Beispiel erneut auszuführen, klicken Sie auf "Zurücksetzen".

{{EmbedLiveSample("Using until-found", "", 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.hidden`](/de/docs/Web/API/HTMLElement/hidden)
- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- Das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) Attribut
- Das [`beforematch`](/de/docs/Web/API/Element/beforematch_event) Ereignis
