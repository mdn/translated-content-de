---
title: HTML globales Attribut `hidden`
short-title: hidden
slug: Web/HTML/Reference/Global_attributes/hidden
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`hidden`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("enumerated", "aufzählbares")}} Attribut, das angibt, dass der Browser den Inhalt des Elements nicht rendern soll. Es kann beispielsweise verwendet werden, um Elemente der Seite zu verbergen, die nicht genutzt werden können, bis der Anmeldeprozess abgeschlossen ist.

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
Das Attribut kann einen der folgenden Werte annehmen:

- das Schlüsselwort `hidden`
- das Schlüsselwort `until-found`
- ein leerer String oder kein Wert

Ungültige `hidden`-Attributwerte setzen das Element ebenfalls in den _hidden_-Zustand. Daher befinden sich alle folgenden Elemente im [_hidden_](#der_versteckte_zustand)-Zustand:

```html
<span hidden>I'm hidden</span>
<span hidden="">I'm also hidden</span>
<span hidden="hidden">I'm hidden too!</span>
<span hidden="bananas">I'm equally as hidden!</span>
```

Das Schlüsselwort `until-found` setzt das Element in den [_hidden until found_](#der_"hidden_until_found"_zustand)-Zustand:

```html
<span hidden="until-found">I'm hidden until found</span>
```

### Der versteckte Zustand

Der _hidden_-Zustand zeigt an, dass das Element derzeit nicht relevant für die Seite ist oder dass es zur Deklaration von Inhalten für die Wiederverwendung in anderen Teilen der Seite verwendet wird und dem Benutzer nicht direkt präsentiert werden soll. Der Browser rendert keine Elemente, die sich im _hidden_-Zustand befinden.

Webbrowser können den _hidden_-Zustand mit `display: none` implementieren, in welchem Fall das Element nicht am Seitenlayout teilnimmt.
Zusätzlich wird das Ändern des Werts der CSS-Eigenschaft {{cssxref("display")}} auf einem verborgenen Element den _hidden_-Zustand außer Kraft setzen.
Zum Beispiel werden Elemente, die mit `display: block` gestylt sind, trotz des Vorhandenseins des `hidden`-Attributs angezeigt.

### Der "hidden until found" Zustand

Im _hidden until found_-Zustand ist das Element verborgen, aber sein Inhalt ist für die "Im-Seiten-Suche"-Funktion des Browsers oder für die Fragment-Navigation zugänglich.
Wenn diese Funktionen zu einem Element in einem _hidden until found_-Teilbaum scrollen, wird der Browser:

1. Ein [`beforematch`](/de/docs/Web/API/Element/beforematch_event)-Ereignis auf dem verborgenen Element auslösen
2. Das `hidden`-Attribut vom Element entfernen
3. Zum Element scrollen

Dies ermöglicht es Ihnen, einen Abschnitt eines Inhalts zu komprimieren, während Benutzer ihn dennoch durch Suche oder Navigation finden können.

Browser implementieren _hidden until found_ typischerweise mit {{cssxref("content-visibility", "content-visibility: hidden")}}.
Das bedeutet, dass im Gegensatz zu Elementen im _hidden_-Zustand Elemente im _hidden until-found_-Zustand Boxen generieren und:

- am Seitenlayout teilnehmen
- ihre Ränder, Rahmen, Polsterungen und Hintergründe gerendert werden

Zusätzlich muss das Element von [Layout-Einschließung](/de/docs/Web/CSS/CSS_containment) betroffen sein, um enthüllt zu werden.
Wenn das Element im _hidden until found_-Zustand einen `display`-Wert von `none`, `contents` oder `inline` hat, wird es durch "Im-Seiten-Suche" oder Fragment-Navigation nicht enthüllt.

## Hinweise zur Verwendung

Das `hidden`-Attribut darf nicht verwendet werden, um Inhalte nur aus einer Präsentation zu verbergen.
Wenn etwas als versteckt markiert ist, ist es in allen Präsentationen verborgen, einschließlich zum Beispiel Screenreadern.

Verborgene Elemente sollten nicht von sichtbaren Elementen verlinkt werden, es sei denn, es wird `hidden="until-found"` verwendet.
Zum Beispiel wäre es falsch, das `href`-Attribut zu verwenden, um auf einen Abschnitt mit dem `hidden`-Attribut zu verlinken.
Wenn der Inhalt nicht zutreffend oder relevant ist, sollte er nicht verlinkt werden.

Es ist jedoch in Ordnung, das ARIA-Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) zu verwenden, um auf versteckte Beschreibungen zu verweisen. Auch wenn das Verbergen der Beschreibungen impliziert, dass sie alleine nicht nützlich sind, können sie in dieser Weise nützlichen Kontext bieten.

Ebenso könnte ein canvas-Element mit dem `hidden`-Attribut von einer geskripteten Grafik-Engine als Off-Screen-Puffer verwendet werden, und ein Formularelement könnte auf ein verborgenes Formularelement unter Verwendung seines form-Attributs verweisen.

Schließlich beachten Sie, dass Elemente, die Nachfahren eines verborgenen Elements sind, weiterhin aktiv bleiben, was bedeutet, dass Skriptelemente weiterhin ausgeführt und Formularelemente weiterhin gesendet werden können:

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

In diesem Beispiel haben wir drei {{HTMLElement("div")}}-Elemente.
Das erste und das dritte sind sichtbar, während das zweite die Attribute `hidden="until-found"` und `id="until-found-box"` hat.
Das Element mit der ID `until-found-box` hat einen gepunkteten roten Rahmen und einen grauen Hintergrund.

Wir haben auch einen Link, der auf das Fragment `"until-found-box"` abzielt, und JavaScript, das auf das `beforematch`-Ereignis hört, das bei diesem verborgenen Element ausgelöst wird.
Der Ereignishandler ändert den Textinhalt der Box, um eine Aktion zu veranschaulichen, die auftreten kann, wenn der _hidden until found_-Zustand entfernt wird.

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

Wenn Sie auf den Link "Gehe zu verborgenen Inhalten" klicken, navigieren Sie zu dem _hidden until found_-Element. Das `beforematch`-Ereignis wird ausgelöst, der Textinhalt wird aktualisiert, und das Element wird sichtbar.
Beachten Sie, dass, obwohl der Inhalt des Elements verborgen ist, das Element dennoch eine generierte Box hat, die im Layout Platz einnimmt und deren Hintergrund und Rahmen gerendert werden.

Um das Beispiel erneut auszuführen, klicken Sie auf "Zurücksetzen".

{{EmbedLiveSample("Using until-found", "", 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.hidden`](/de/docs/Web/API/HTMLElement/hidden)
- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- Das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)-Attribut
- Das [`beforematch`](/de/docs/Web/API/Element/beforematch_event)-Ereignis
