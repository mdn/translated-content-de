---
title: "`hidden` HTML globales Attribut"
short-title: hidden
slug: Web/HTML/Reference/Global_attributes/hidden
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

Das **`hidden`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("enumerated", "enumeriertes")}} Attribut, das anzeigt, dass der Browser die Inhalte des Elements nicht darstellen soll. Zum Beispiel kann es verwendet werden, um Elemente der Seite auszublenden, die nicht genutzt werden können, bis der Anmeldeprozess abgeschlossen ist.

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

Das `hidden`-Attribut zeigt an, dass der Inhalt eines Elements dem Benutzer nicht dargestellt werden soll.
Das Attribut kann einen der folgenden Werte annehmen:

- das Schlüsselwort `hidden`
- das Schlüsselwort `until-found`
- ein leerer String oder kein Wert

Ungültige Werte des `hidden`-Attributs versetzen das Element ebenfalls in den _verborgenen_ Zustand. Daher befinden sich alle folgenden Elemente im [_verborgenen_](#der_verborgene_zustand) Zustand:

```html
<span hidden>I'm hidden</span>
<span hidden="">I'm also hidden</span>
<span hidden="hidden">I'm hidden too!</span>
<span hidden="bananas">I'm equally as hidden!</span>
```

Das Schlüsselwort `until-found` versetzt das Element in den [_verborgen bis gefunden_](#der_verborgen_bis_gefunden_zustand) Zustand:

```html
<span hidden="until-found">I'm hidden until found</span>
```

### Der verborgene Zustand

Der _verborgene_ Zustand weist darauf hin, dass das Element derzeit für die Seite nicht relevant ist oder dass es verwendet wird, um Inhalte zu deklarieren, die von anderen Teilen der Seite wiederverwendet werden sollen, und nicht direkt dem Benutzer präsentiert werden sollten. Der Browser rendert keine Elemente, die sich im _verborgenen_ Zustand befinden.

Webbrowser können den _verborgenen_ Zustand mit `display: none` umsetzen, wobei das Element nicht am Seitenlayout beteiligt ist.
Eine Änderung des CSS-Werts {{cssxref("display")}} bei einem verborgenen Element wird den _verborgenen_ Zustand überschreiben.
Beispielsweise werden Elemente, die auf `display: block` gesetzt sind, angezeigt, obwohl das `hidden`-Attribut vorhanden ist.

### Der verborgen bis gefunden Zustand

Im _verborgen bis gefunden_ Zustand ist das Element versteckt, aber sein Inhalt wird für die "Seite durchsuchen"-Funktion oder für die Fragmentnavigation des Browsers zugänglich sein.
Wenn diese Funktionen einen Bildlauf zu einem Element in einem _verborgen bis gefunden_ Unterbaum verursachen, wird der Browser:

1. Ein [`beforematch`](/de/docs/Web/API/Element/beforematch_event) Ereignis am verborgenen Element auslösen
2. Das `hidden`-Attribut vom Element entfernen
3. Zum Element scrollen

Dies ermöglicht Ihnen, einen Abschnitt von Inhalten zu falten, während es Benutzern dennoch möglich ist, ihn durch Suche oder Navigation zu finden.

Browser implementieren _verborgen bis gefunden_ typischerweise mit {{cssxref("content-visibility", "content-visibility: hidden")}}.
Das bedeutet, dass, im Gegensatz zu Elementen im _verborgenen_ Zustand, Elemente im _verborgen bis gefunden_ Zustand Boxen generieren, und:

- sie am Seitenlayout teilnehmen
- ihre Ränder, Rahmen, Polster und der Hintergrund gerendert werden

Auch muss das Element von [Layout-Eindämmung](/de/docs/Web/CSS/Guides/Containment) betroffen sein, um sichtbar zu werden.
Falls das Element im _verborgen bis gefunden_ Zustand einen `display` Wert von `none`, `contents` oder `inline` hat, wird es von der "Seite durchsuchen" oder Fragmentnavigation nicht sichtbar gemacht.

## Verwendungshinweise

Das `hidden`-Attribut darf nicht verwendet werden, um Inhalte nur für eine Präsentation zu verbergen.
Wenn etwas als verborgen markiert ist, ist es aus allen Präsentationen verborgen, einschließlich z.B. Screenreadern.

Verborgene Elemente sollten nicht von sichtbaren Elementen verlinkt werden, es sei denn, Sie nutzen `hidden="until-found"`.
Zum Beispiel wäre es inkorrekt, das `href`-Attribut zu verwenden, um auf einen Abschnitt mit dem `hidden`-Attribut zu verlinken.
Wenn der Inhalt nicht anwendbar oder relevant ist, sollte er nicht verlinkt werden.

Es ist jedoch in Ordnung, das ARIA-Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) zu verwenden, um auf verborgene Beschreibungen zu verweisen. Während das Verbergen der Beschreibungen impliziert, dass sie allein nicht nützlich sind, können sie in dieser Weise eine hilfreiche Kontextualisierung bieten.

Ebenso könnte ein Canvas-Element mit dem `hidden`-Attribut von einer geskripteten Grafik-Engine als Off-Screen-Puffer verwendet werden, und ein Formularelement könnte auf ein verborgenes Formularelement unter Verwendung seines Form-Attributs verweisen.

Schließlich beachten Sie, dass Elemente, die Nachfolger eines verborgenen Elements sind, weiterhin aktiv bleiben, was bedeutet, dass Script-Elemente weiterhin ausgeführt werden können und Formularelemente weiterhin eingereicht werden können:

```html
<div hidden>
  <script>
    console.warn("Boo! I'm hidden *and* running!");
  </script>
</div>
```

## Beispiele

### Verwendung des hidden Attributs

In diesem Beispiel haben wir drei {{HTMLElement("div")}}-Elemente. Das erste und das dritte sind nicht verborgen, während das zweite das `hidden`-Attribut besitzt.
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

### Verwendung des until-found Werts

In diesem Beispiel haben wir drei {{HTMLElement("div")}}-Elemente.
Das erste und das dritte sind sichtbar, während das zweite die Attribute `hidden="until-found"` und `id="until-found-box"` hat.
Das Element mit der ID `until-found-box` hat einen gepunkteten roten Rahmen und einen grauen Hintergrund.

Wir haben auch einen Link, der auf das Fragment `"until-found-box"` zielt, und JavaScript, das auf das `beforematch`-Ereignis hört, das bei diesem versteckten Element ausgelöst wird.
Der Ereignishandler ändert den Textinhalt der Box, um eine Aktion zu veranschaulichen, die erfolgt, wenn der _verborgen bis gefunden_ Zustand entfernt werden soll.

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

Ein Klick auf den "Go to hidden content"-Link navigiert zum _verborgen bis gefunden_ Element. Das `beforematch`-Ereignis wird ausgelöst, der Textinhalt wird aktualisiert und das Element wird sichtbar.
Beachten Sie, dass obwohl der Inhalt des Elements ausgeblendet ist, das Element immer noch eine generierte Box hat, die im Layout Platz einnimmt und deren Hintergrund und Rahmen gerendert werden.

Um das Beispiel erneut auszuführen, klicken Sie auf "Reset".

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
