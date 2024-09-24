---
title: hidden
slug: Web/HTML/Global_attributes/hidden
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{HTMLSidebar("Global_attributes")}}

Das **`hidden`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein {{Glossary("enumerated")}} Attribut, das angibt, dass der Browser den Inhalt des Elements nicht rendern soll. Beispielsweise kann es verwendet werden, um Elemente der Seite zu verbergen, die erst verwendet werden können, wenn der Anmeldevorgang abgeschlossen ist.

{{EmbedInteractiveExample("pages/tabbed/attribute-hidden.html","tabbed-shorter")}}

## Beschreibung

Das `hidden`-Attribut wird verwendet, um anzuzeigen, dass der Inhalt eines Elements dem Benutzer nicht angezeigt werden soll. Dieses Attribut kann einen der folgenden Werte annehmen:

- ein leerer String
- das Schlüsselwort `hidden`
- das Schlüsselwort `until-found`

Es gibt zwei Zustände, die mit dem `hidden`-Attribut verbunden sind: den _versteckten_ Zustand und den _versteckt bis gefunden_ Zustand.

- Ein leerer String oder das Schlüsselwort `hidden` setzen das Element in den _versteckten_ Zustand. Zusätzlich setzen ungültige Werte das Element in den _versteckten_ Zustand.

- Das Schlüsselwort `until-found` setzt das Element in den _versteckt bis gefunden_ Zustand.

Somit setzen alle folgenden das Element in den [_versteckten_](#der_versteckte_zustand) Zustand:

```html
<span hidden>I'm hidden</span>
<span hidden="">I'm also hidden</span>
<span hidden="hidden">I'm hidden too!</span>
```

Das folgende setzt das Element in den [_versteckt bis gefunden_](#der_versteckt_bis_gefunden_zustand) Zustand:

```html
<span hidden="until-found">I'm hidden until found</span>
```

Das `hidden`-Attribut darf nicht verwendet werden, um Inhalte nur von einer Präsentation zu verbergen. Wenn etwas als versteckt markiert ist, wird es von allen Präsentationen verborgen, einschließlich beispielsweise Bildschirmlesern.

Versteckte Elemente sollten nicht von nicht versteckten Elementen verlinkt werden. Zum Beispiel wäre es falsch, das `href`-Attribut zu verwenden, um auf einen Abschnitt zu verlinken, der mit dem `hidden`-Attribut markiert ist. Wenn der Inhalt nicht anwendbar oder relevant ist, gibt es keinen Grund, darauf zu verlinken.

Es wäre jedoch in Ordnung, das ARIA-Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) zu verwenden, um auf Beschreibungen zu verweisen, die selbst versteckt sind. Während das Verbergen der Beschreibungen impliziert, dass sie für sich genommen nicht nützlich sind, könnten sie so geschrieben werden, dass sie im spezifischen Kontext des Verweises von dem Element, das sie beschreiben, nützlich sind.

Ähnlich könnte ein Canvas-Element mit dem `hidden`-Attribut von einer gescripteten Grafik-Engine als Off-Screen-Puffer verwendet werden, und ein Form-Control könnte auf ein verstecktes Form-Element mit seinem Form-Attribut verweisen.

Elemente, die Nachkommen eines versteckten Elements sind, bleiben aktiv, was bedeutet, dass script-Elemente weiterhin ausgeführt werden können und Formularelemente weiterhin gesendet werden können.

### Der versteckte Zustand

Der _versteckte_ Zustand zeigt an, dass das Element derzeit nicht relevant für die Seite ist oder dass es verwendet wird, um Inhalte für die Wiederverwendung durch andere Teile der Seite zu deklarieren und nicht direkt für den Benutzer präsentiert werden sollte. Der Browser wird Elemente, die sich im _versteckten_ Zustand befinden, nicht rendern.

Webbrowser können den _versteckten_ Zustand mit `display: none` implementieren, in welchem Fall das Element nicht am Seiten-Layout teilnimmt. Das bedeutet auch, dass die Änderung des Wertes der CSS-Eigenschaft {{cssxref("display")}} auf einem Element im _versteckten_ Zustand den Zustand überschreibt. Zum Beispiel werden Elemente, die mit `display: block` gestaltet sind, trotz des Vorhandenseins des `hidden`-Attributs angezeigt.

### Der versteckt bis gefunden Zustand

Im _versteckt bis gefunden_ Zustand ist das Element verborgen, aber der Inhalt wird für die "Find in page"-Funktion des Browsers oder für Fragmentnavigation zugänglich sein. Wenn diese Funktionen ein Scrollen zu einem Element in einem _versteckt bis gefunden_ Unterbaum bewirken, wird der Browser:

- ein [`beforematch`](/de/docs/Web/API/Element/beforematch_event) Ereignis für das versteckte Element auslösen
- das `hidden`-Attribut vom Element entfernen
- zum Element scrollen

Dies ermöglicht es einem Entwickler, einen Abschnitt von Inhalten zu kollabieren, ihn aber durch die Suche in der Seite und über Fragmentnavigation zugänglich und durchsuchbar zu machen.

Beachten Sie, dass Browser normalerweise _versteckt bis gefunden_ mit {{cssxref("content-visibility", "content-visibility: hidden")}} implementieren. Dies bedeutet, dass im Gegensatz zu Elementen im _versteckten_ Zustand Elemente im _versteckt bis gefunden_ Zustand Boxen generieren werden, was bedeutet, dass:

- das Element am Seiten-Layout teilnimmt
- Rand, Rahmen, Polster und Hintergrund für das Element gerendert werden.

Außerdem muss das Element von [Layout-Einschluss](/de/docs/Web/CSS/CSS_containment) betroffen sein, um sichtbar gemacht zu werden. Dies bedeutet, dass, wenn das Element im _versteckt bis gefunden_ Zustand einen `display`-Wert von `none`, `contents` oder `inline` hat, das Element nicht durch die Suche auf der Seite oder Fragmentnavigation aufgedeckt wird.

## Beispiele

### Verwendung von until-found

In diesem Beispiel haben wir:

- Drei {{HTMLElement("div")}}-Elemente. Das erste und das dritte sind nicht versteckt, während das zweite die Attribute `hidden="until-found"` und `id="until-found-box"` hat.
- Einen Link, dessen Ziel das `"until-found-box"` Fragment ist.

Das Element, das bis gefunden versteckt ist, hat einen gepunkteten roten Rahmen und einen grauen Hintergrund.

Wir haben auch etwas JavaScript, das auf das `beforematch`-Ereignis reagiert, das auf dem bis gefunden versteckten Element gefeuert wird. Der Ereignishandler ändert den Textinhalt des Kastens.

#### HTML

```html
<a href="#until-found-box">Gehe zu verstecktem Inhalt</a>

<div>Ich bin nicht versteckt</div>
<div id="until-found-box" hidden="until-found">Versteckt bis gefunden</div>
<div>Ich bin nicht versteckt</div>
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

Beachten Sie, dass, obwohl der Inhalt des Elements versteckt ist, das Element immer noch eine generierte Box hat, die im Layout Platz einnimmt und der Hintergrund und die Rahmen gerendert werden.

Ein Klick auf die Schaltfläche "Gehe zu verstecktem Inhalt" navigiert zu dem bis gefunden versteckten Element. Das `beforematch`-Ereignis wird ausgelöst, der Textinhalt wird aktualisiert, und der Inhalt des Elements wird angezeigt.

Um das Beispiel erneut auszuführen, klicken Sie auf "Zurücksetzen".

{{EmbedLiveSample("Using until-found", "", 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("HTMLElement.hidden")}}
- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes)
- Das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) Attribut
- Das [`beforematch`](/de/docs/Web/API/Element/beforematch_event) Ereignis
