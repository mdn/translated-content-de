---
title: hidden
slug: Web/HTML/Reference/Global_attributes/hidden
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}

Das **`hidden`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("enumerated", "aufzählbares")}} Attribut, das angibt, dass der Browser die Inhalte des Elements nicht rendern sollte. Zum Beispiel kann es verwendet werden, um Elemente der Seite zu verstecken, die nicht genutzt werden können, bis der Anmeldeprozess abgeschlossen ist.

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

Das `hidden`-Attribut wird verwendet, um anzuzeigen, dass der Inhalt eines Elements dem Benutzer nicht gezeigt werden soll. Dieses Attribut kann einen der folgenden Werte annehmen:

- einen leeren String
- das Schlüsselwort `hidden`
- das Schlüsselwort `until-found`

Es gibt zwei Zustände, die mit dem `hidden`-Attribut verbunden sind: der _verdeckte_ Zustand und der _verdeckte bis gefunden_ Zustand.

- Ein leerer String oder das Schlüsselwort `hidden` setzen das Element in den _verdeckten_ Zustand. Zudem setzen ungültige Werte das Element in den _verdeckten_ Zustand.

- Das Schlüsselwort `until-found` setzt das Element in den _verdeckten bis gefunden_ Zustand.

So setzen zum Beispiel alle folgenden den Elementzustand auf [_versteckt_](#der_versteckte_zustand):

```html
<span hidden>I'm hidden</span>
<span hidden="">I'm also hidden</span>
<span hidden="hidden">I'm hidden too!</span>
```

Folgendes setzt das Element in den Zustand [_versteckt bis gefunden_](#der_versteckte_bis_gefunden_zustand):

```html
<span hidden="until-found">I'm hidden until found</span>
```

Das `hidden`-Attribut darf nicht verwendet werden, um Inhalte nur von einer Präsentation zu verstecken. Wenn etwas als versteckt markiert ist, ist es bei allen Präsentationen versteckt, einschließlich beispielsweise bei Screenreadern.

Versteckte Elemente sollten nicht von nicht versteckten Elementen verlinkt werden. Es wäre zum Beispiel falsch, das `href`-Attribut zu verwenden, um auf einen Abschnitt zu verlinken, der mit dem `hidden`-Attribut markiert ist. Wenn der Inhalt nicht anwendbar oder relevant ist, gibt es keinen Grund, darauf zu verlinken.

Es wäre jedoch in Ordnung, das ARIA-Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) zu verwenden, um sich auf Beschreibungen zu beziehen, die ihrerseits versteckt sind. Auch wenn das Verstecken der Beschreibungen impliziert, dass sie für sich genommen nicht nützlich sind, könnten sie in einer Weise geschrieben sein, die im spezifischen Kontext des Bezugs von dem Element, das sie beschreiben, nützlich ist.

Ähnlich könnte ein Canvas-Element mit dem `hidden`-Attribut von einer skriptbasierten Grafik-Engine als Off-Screen-Puffer verwendet werden, und ein Formularelement könnte sich auf ein verstecktes Formularelement mit seinem form-Attribut beziehen.

Elemente, die Nachkommen eines versteckten Elements sind, bleiben dennoch aktiv, was bedeutet, dass Skriptelemente weiterhin ausgeführt werden können und Formularelemente weiterhin gesendet werden können.

### Der versteckte Zustand

Der _versteckte_ Zustand zeigt an, dass das Element derzeit nicht relevant für die Seite ist oder dass es verwendet wird, um Inhalte zu deklarieren, die von anderen Teilen der Seite wiederverwendet werden sollen und nicht direkt dem Benutzer präsentiert werden sollten. Der Browser wird Elemente, die sich im _verdeckten_ Zustand befinden, nicht rendern.

Webbrowser können den _verdeckten_ Zustand mit `display: none` implementieren, in welchem Fall das Element nicht am Seitenlayout teilnimmt. Das bedeutet auch, dass das Ändern des Wertes der CSS-Eigenschaft {{cssxref("display")}} bei einem Element im _verdeckten_ Zustand den Zustand überschreiben wird. Zum Beispiel werden Elemente, die mit `display: block` gestylt sind, angezeigt, obwohl das `hidden`-Attribut vorhanden ist.

### Der versteckte bis gefunden Zustand

Im _verdeckten bis gefunden_ Zustand ist das Element versteckt, aber sein Inhalt wird über die "Auf der Seite suchen"-Funktion des Browsers oder über Fragment-Navigation zugänglich sein. Wenn diese Funktionen dazu führen, dass zu einem Element in einem _verdeckten bis gefunden_ Baum gescrollt wird, wird der Browser:

- ein [`beforematch`](/de/docs/Web/API/Element/beforematch_event) Ereignis auf dem versteckten Element auslösen
- das `hidden`-Attribut vom Element entfernen
- zum Element scrollen

Dies ermöglicht es einem Entwickler, einen Inhaltabschnitt zu verkleinern, ihn jedoch über Fragment-Navigation auffindbar und zugänglich zu machen.

Beachten Sie, dass Browser den "versteckt bis gefunden"-Zustand typischerweise mit {{cssxref("content-visibility", "content-visibility: hidden")}} implementieren. Das bedeutet, dass im Gegensatz zu Elementen im "verdeckten" Zustand Elemente im "versteckt bis gefunden" Zustand generierte Boxen haben werden, was bedeutet:

- das Element wird am Seitenlayout teilnehmen
- Rand, Rahmen, Auffüllung und Hintergrund des Elements werden gerendert.

Außerdem muss das Element von [Layout-Containment](/de/docs/Web/CSS/CSS_containment) betroffen sein, um angezeigt zu werden. Dies bedeutet, dass, wenn das Element im "versteckt bis gefunden" Zustand einen `display` Wert von `none`, `contents` oder `inline` hat, das Element nicht durch Suchvorgänge auf der Seite oder durch Fragment-Navigation angezeigt wird.

## Beispiele

### Verwendung von until-found

In diesem Beispiel haben wir:

- Drei {{HTMLElement("div")}}-Elemente. Das erste und das dritte sind nicht versteckt, während das zweite die Attribute `hidden="until-found"` und `id="until-found-box"` hat.
- Einen Link, dessen Ziel das Fragment `"until-found-box"` ist.

Das "versteckt bis gefunden" Element hat einen punktierten roten Rahmen und einen grauen Hintergrund.

Wir haben auch ein JavaScript, das auf das `beforematch`-Ereignis hört, das bei dem "versteckt bis gefunden" Element ausgelöst wird. Der Ereignishandler ändert den Textinhalt des Kastens.

#### HTML

```html
<a href="#until-found-box">Go to hidden content</a>

<div>I'm not hidden</div>
<div id="until-found-box" hidden="until-found">Hidden until found</div>
<div>I'm not hidden</div>
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

Beachten Sie, dass obwohl der Inhalt des Elements versteckt ist, das Element trotzdem eine generierte Box hat, die Raum im Layout einnimmt und mit Hintergrund und Rahmen gerendert wird.

Das Klicken auf die Schaltfläche "Gehe zu verstecktem Inhalt" navigiert zum "versteckt bis gefunden" Element. Das `beforematch`-Ereignis wird ausgelöst, der Textinhalt wird aktualisiert und der Inhalt des Elements wird angezeigt.

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
