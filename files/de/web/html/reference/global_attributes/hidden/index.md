---
title: hidden
slug: Web/HTML/Reference/Global_attributes/hidden
l10n:
  sourceCommit: b114c920cc7dea474cfe05b7bacd053a1b2d411f
---

{{HTMLSidebar("Global_attributes")}}

Das **`hidden`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("enumerated", "aufgezähltes")}} Attribut, das angibt, dass der Browser den Inhalt des Elements nicht rendern soll. Zum Beispiel kann es verwendet werden, um Elemente der Seite zu verbergen, die nicht genutzt werden können, bis der Anmeldevorgang abgeschlossen ist.

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

Das `hidden`-Attribut gibt an, dass der Inhalt eines Elements dem Benutzer nicht angezeigt werden soll.
Das Attribut nimmt einen der folgenden Werte an:

- das Schlüsselwort `hidden`
- das Schlüsselwort `until-found`
- einen leeren String oder keinen Wert

Ungültige `hidden`-Attributwerte versetzen das Element ebenfalls in den _hidden_-Zustand. Daher befinden sich alle folgenden Elemente im [_hidden_](#der_verborgene_zustand)-Zustand:

```html
<span hidden>I'm hidden</span>
<span hidden="">I'm also hidden</span>
<span hidden="hidden">I'm hidden too!</span>
<span hidden="bananas">I'm equally as hidden!</span>
```

Das Schlüsselwort `until-found` versetzt das Element in den [_hidden until found_](#der_verborgen_bis_gefunden_zustand)-Zustand:

```html
<span hidden="until-found">I'm hidden until found</span>
```

### Der verborgene Zustand

Der _verborgene_ Zustand zeigt an, dass das Element derzeit nicht relevant für die Seite ist oder dass es verwendet wird, um Inhalte für die Wiederverwendung durch andere Teile der Seite zu deklarieren und nicht direkt dem Benutzer angezeigt werden soll. Der Browser wird Elemente im _verborgenen_ Zustand nicht rendern.

Webbrowser können den _verborgenen_ Zustand mit `display: none` implementieren, in welchem Fall das Element nicht an der Seiten-Layoutgestaltung teilnimmt.
Zusätzlich wird das Ändern des Werts der CSS-Eigenschaft {{cssxref("display")}} auf einem verborgenen Element den _verborgenen_ Zustand überschreiben.
Beispielsweise werden Elemente, die mit `display: block` gestylt sind, trotz der Anwesenheit des `hidden`-Attributs angezeigt.

### Der verborgen bis gefunden Zustand

Im _verborgen bis gefunden_ Zustand ist das Element verborgen, aber sein Inhalt wird für die "Finden auf Seite"-Funktion des Browsers oder die Fragmentnavigation zugänglich sein.
Wenn diese Funktionen ein Scrollen zu einem Element in einem _verborgen bis gefunden_-Teilbaum verursachen, wird der Browser:

1. Ein [`beforematch`](/de/docs/Web/API/Element/beforematch_event) Ereignis auf dem verborgenen Element auslösen
2. Das `hidden`-Attribut vom Element entfernen
3. Zum Element scrollen

Dies ermöglicht es Ihnen, einen Abschnitt von Inhalten zu kollabieren, während es den Benutzern trotzdem ermöglicht wird, ihn durch Suche oder Navigation zu finden.

Browser implementieren _verborgen bis gefunden_ typischerweise mit {{cssxref("content-visibility", "content-visibility: hidden")}}.
Das bedeutet, dass, im Gegensatz zu Elementen im _verborgenen_ Zustand, Elemente im _verborgen bis gefunden_ Zustand Boxen generieren, und:

- sie an der Seiten-Layoutgestaltung teilnehmen
- ihre Ränder, Umrandungen, Abstände und Hintergründe gerendert werden

Außerdem muss das Element von [Layout-Einschränkungen](/de/docs/Web/CSS/CSS_containment) betroffen sein, um sichtbar gemacht zu werden.
Wenn das Element im _verborgen bis gefunden_-Zustand einen `display`-Wert von `none`, `contents` oder `inline` hat, wird es durch "Finden auf Seite" oder Fragmentnavigation nicht sichtbar gemacht.

## Verwendungshinweise

Das `hidden`-Attribut darf nicht verwendet werden, um Inhalte nur aus einer Darstellung zu verbergen.
Wenn etwas als verborgen markiert ist, ist es aus allen Darstellungen, inklusive zum Beispiel Bildschirmlesegeräten, verborgen.

Verborgene Elemente sollten nicht von sichtbaren Elementen verlinkt werden, es sei denn, es wird `hidden="until-found"` verwendet.
Zum Beispiel wäre es falsch, das `href`-Attribut zu verwenden, um zu einem Abschnitt mit dem `hidden`-Attribut zu verlinken.
Wenn der Inhalt nicht zutreffend oder relevant ist, sollte er nicht verlinkt werden.

Es ist jedoch in Ordnung, das ARIA-Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) zu verwenden, um auf verborgene Beschreibungen zu verweisen. Während das Verbergen der Beschreibungen impliziert, dass sie für sich genommen nicht nützlich sind, können sie in dieser Weise referenziert nützlichen Kontext bieten.

Ebenso könnte ein Canvas-Element mit dem `hidden`-Attribut von einer skriptbasierten Grafik-Engine als Off-Screen-Puffer verwendet werden, und ein Formularelement könnte auf ein verborgenes Formular-Element durch sein Formular-Attribut verweisen.

Abschließend beachten Sie, dass Elemente, die Nachkommen eines verborgenen Elements sind, weiterhin aktiv sind, was bedeutet, dass Skriptelemente weiterhin ausgeführt werden können und Formularelemente weiterhin abgesendet werden können:

```html
<div hidden>
  <script>
    console.warn("Boo! I'm hidden *and* running!");
  </script>
</div>
```

## Beispiele

### Verwendung des hidden-Attributs

In diesem Beispiel haben wir drei {{HTMLElement("div")}}-Elemente. Das erste und das dritte sind nicht verborgen, während das zweite ein `hidden`-Attribut hat.
Beachten Sie, dass das verborgene Element keine generierte Box hat.

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

### Verwendung des until-found-Werts

In diesem Beispiel haben wir drei {{HTMLElement("div")}}-Elemente.
Das erste und das dritte sind sichtbar, während das zweite die Attribute `hidden="until-found"` und `id="until-found-box"` hat.
Das Element mit einer `id` von `until-found-box` hat eine gepunktete rote Umrandung und einen grauen Hintergrund.

Wir haben auch einen Link, der auf das "`until-found-box`"-Fragment zielt, und JavaScript, das auf das `beforematch`-Ereignis lauscht, das sich an diesem verborgenen Element ereignet.
Der Ereignishandler ändert den Textinhalt der Box, um eine Aktion zu veranschaulichen, die erfolgen kann, wenn der _verborgen bis gefunden_-Zustand entfernt werden soll.

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

Beim Anklicken des Links "Gehe zu verborgenen Inhalten" wird zum _verborgen bis gefunden_-Element navigiert. Das `beforematch`-Ereignis wird ausgelöst, der Textinhalt wird aktualisiert und das Element wird sichtbar.
Beachten Sie, dass der Inhalt des Elements verborgen ist, das Element jedoch weiterhin eine generierte Box hat, die Platz im Layout einnimmt, und Hintergrund und Umrandungen gerendert werden.

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
