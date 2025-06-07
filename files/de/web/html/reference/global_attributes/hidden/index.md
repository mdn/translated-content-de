---
title: HTML `hidden` globales Attribut
short-title: hidden
slug: Web/HTML/Reference/Global_attributes/hidden
l10n:
  sourceCommit: 7885271e36e9d2744296c01f400653f63caa6f75
---

{{HTMLSidebar("Global_attributes")}}

Das **`hidden`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("enumerated", "aufzählbares")}} Attribut, das angibt, dass der Browser die Inhalte des Elements nicht rendern soll. Zum Beispiel kann es verwendet werden, um Elemente der Seite auszublenden, die erst genutzt werden können, wenn der Anmeldevorgang abgeschlossen ist.

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

Das `hidden`-Attribut gibt an, dass der Inhalt eines Elements dem Benutzer nicht präsentiert werden soll. Das Attribut kann einen der folgenden Werte annehmen:

- das Schlüsselwort `hidden`
- das Schlüsselwort `until-found`
- ein leerer String oder kein Wert

Ungültige `hidden`-Attributwerte versetzen das Element ebenfalls in den _hidden_-Zustand. Daher befinden sich alle folgenden Elemente im [_hidden_](#der_hidden-zustand) Zustand:

```html
<span hidden>I'm hidden</span>
<span hidden="">I'm also hidden</span>
<span hidden="hidden">I'm hidden too!</span>
<span hidden="bananas">I'm equally as hidden!</span>
```

Das Schlüsselwort `until-found` versetzt das Element in den [_hidden until found_](#der_hidden_until_found-zustand) Zustand:

```html
<span hidden="until-found">I'm hidden until found</span>
```

### Der hidden-Zustand

Der _hidden_-Zustand zeigt an, dass das Element momentan nicht relevant für die Seite ist oder dass es dazu verwendet wird, Inhalte zur Wiederverwendung durch andere Teile der Seite bereitzustellen und nicht direkt dem Benutzer präsentiert werden soll. Der Browser wird Elemente im _hidden_-Zustand nicht rendern.

Webbrowser können den _hidden_-Zustand mit `display: none` implementieren, wodurch das Element nicht am Seitenlayout teilnimmt. Außerdem überschreibt das Ändern des CSS {{cssxref("display")}}-Eigenschaftswerts eines verborgenen Elements den _hidden_-Zustand. Beispielsweise werden Elemente, die mit `display: block` gestaltet sind, dargestellt, trotz der Anwesenheit des `hidden`-Attributs.

### Der hidden until found-Zustand

Im _hidden until found_-Zustand ist das Element verborgen, aber sein Inhalt ist für die "Auf Seite suchen"-Funktion des Browsers oder die Fragmentnavigation zugänglich. Wenn diese Funktionen dazu führen, dass zu einem Element in einem _hidden until found_-Teilbaum gescrollt wird, wird der Browser:

1. Ein [`beforematch`](/de/docs/Web/API/Element/beforematch_event)-Ereignis auf dem verborgenen Element auslösen
2. Das `hidden`-Attribut vom Element entfernen
3. Zum Element scrollen

Dies ermöglicht es Ihnen, einen Abschnitt von Inhalten zu komprimieren, während die Benutzer dennoch in der Lage sind, ihn durch Suche oder Navigation zu finden.

Browser implementieren _hidden until found_ typischerweise mit {{cssxref("content-visibility", "content-visibility: hidden")}}. Dies bedeutet, dass, im Gegensatz zu Elementen im _hidden_-Zustand, Elemente im _hidden until-found_-Zustand Boxen erzeugen, und:

- sie am Seitenlayout teilnehmen
- ihre Ränder, Rahmen, Abstände und Hintergründe gerendert werden

Auch muss das Element von der [Layout-Eindämmung](/de/docs/Web/CSS/CSS_containment) betroffen sein, um enthüllt zu werden. Wenn das Element im _hidden until found_-Zustand einen `display`-Wert von `none`, `contents` oder `inline` hat, wird das Element von "Auf Seite suchen" oder der Fragmentnavigation nicht enthüllt.

## Nutzungshinweise

Das `hidden`-Attribut darf nicht verwendet werden, um Inhalte nur in einer Präsentation zu verbergen. Wenn etwas als verborgen markiert ist, ist es in allen Präsentationen versteckt, einschließlich Bildungswerkzeugen, wie z.B. Bildschirmleser.

Verborgene Elemente sollten nicht mit sichtbaren Elementen verlinkt werden, es sei denn, Sie verwenden `hidden="until-found"`.
Zum Beispiel wäre es falsch, das `href`-Attribut zu verwenden, um zu einem Abschnitt mit dem `hidden`-Attribut zu verlinken.
Wenn der Inhalt nicht anwendbar oder relevant ist, sollte er nicht verlinkt werden.

Es ist jedoch in Ordnung, das ARIA-Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) zu verwenden, um auf versteckte Beschreibungen zu verweisen. Während das Verbergen der Beschreibungen impliziert, dass sie für sich allein nicht nützlich sind, können sie beim Verweisen auf diese Weise hilfreichen Kontext liefern.

Ebenso könnte ein Canvas-Element mit dem `hidden`-Attribut von einer skriptgesteuerten Grafik-Engine als Off-Screen-Puffer verwendet werden, und ein Formularelement könnte sich mit seinem `form`-Attribut auf ein verborgenes Formularelement beziehen.

Schließlich ist zu beachten, dass Elemente, die Nachkommen eines verborgenen Elements sind, immer noch aktiv sind, was bedeutet, dass Skriptelemente weiterhin ausgeführt werden können und Formularelemente weiterhin senden können:

```html
<div hidden>
  <script>
    console.warn("Boo! I'm hidden *and* running!");
  </script>
</div>
```

## Beispiele

### Verwendung des hidden-Attributs

In diesem Beispiel haben wir drei {{HTMLElement("div")}}-Elemente. Das erste und das dritte sind nicht versteckt, während das zweite ein `hidden`-Attribut hat. Beachten Sie, dass das verborgene Element keine erzeugte Box hat.

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

In diesem Beispiel haben wir drei {{HTMLElement("div")}}-Elemente. Das erste und das dritte sind sichtbar, während das zweite die Attribute `hidden="until-found"` und `id="until-found-box"` besitzt. Das Element mit einer `until-found-box`-ID hat einen gepunkteten roten Rand und einen grauen Hintergrund.

Wir haben auch einen Link, der auf das Fragment `"until-found-box"` zielt, und JavaScript, das auf das `beforematch`-Ereignis wartet, das auf diesem verborgenen Element ausgelöst wird. Der Ereignis-Handler ändert den Textinhalt der Box, um eine Aktion zu veranschaulichen, die auftreten kann, wenn der _hidden until found_-Zustand entfernt werden soll.

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

Beim Klicken auf den Link "Zum versteckten Inhalt gehen" wird zum _hidden until found_-Element navigiert. Das `beforematch`-Ereignis wird ausgelöst, der Textinhalt wird aktualisiert, und das Element wird sichtbar. Beachten Sie, dass obwohl der Inhalt des Elements verborgen ist, das Element immer noch eine erzeugte Box hat, die im Layout Platz einnimmt und mit Hintergrund und Rändern gerendert wird.

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
