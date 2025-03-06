---
title: hidden
slug: Web/HTML/Global_attributes/hidden
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar("Global_attributes")}}

Das **`hidden`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein {{Glossary("enumerated", "aufzählbares")}} Attribut, das angibt, dass der Browser den Inhalt des Elements nicht rendern soll. Zum Beispiel kann es verwendet werden, um Elemente der Seite zu verbergen, die erst genutzt werden können, nachdem der Anmeldeprozess abgeschlossen ist.

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

Das `hidden`-Attribut wird verwendet, um anzuzeigen, dass der Inhalt eines Elements nicht dem Benutzer präsentiert werden soll. Dieses Attribut kann einen der folgenden Werte annehmen:

- einen leeren String
- das Schlüsselwort `hidden`
- das Schlüsselwort `until-found`

Es gibt zwei Zustände, die mit dem `hidden`-Attribut verbunden sind: den _versteckten_ Zustand und den _versteckt bis gefunden_ Zustand.

- Ein leerer String oder das Schlüsselwort `hidden` versetzen das Element in den _versteckten_ Zustand. Zusätzlich setzen ungültige Werte das Element in den _versteckten_ Zustand.

- Das Schlüsselwort `until-found` setzt das Element in den _versteckt bis gefunden_ Zustand.

Daher setzen alle folgenden das Element in den [_versteckten_](#der_versteckte_zustand) Zustand:

```html
<span hidden>I'm hidden</span>
<span hidden="">I'm also hidden</span>
<span hidden="hidden">I'm hidden too!</span>
```

Das folgende setzt das Element in den [_versteckt bis gefunden_](#der_versteckt_bis_gefunden_zustand) Zustand:

```html
<span hidden="until-found">I'm hidden until found</span>
```

Das `hidden`-Attribut darf nicht dazu verwendet werden, um Inhalte nur von einer Präsentation zu verbergen. Wenn etwas als versteckt markiert ist, ist es von allen Präsentationen versteckt, einschließlich zum Beispiel Bildschirmlesern.

Versteckte Elemente sollten nicht von nicht-versteckten Elementen verlinkt werden. Zum Beispiel wäre es falsch, das `href`-Attribut zu verwenden, um zu einem Abschnitt zu verlinken, der mit dem `hidden`-Attribut markiert ist. Wenn der Inhalt nicht anwendbar oder relevant ist, gibt es keinen Grund, darauf zu verlinken.

Es wäre jedoch in Ordnung, das ARIA-Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) zu verwenden, um auf Beschreibungen zu verweisen, die selbst versteckt sind. Während das Verstecken der Beschreibungen impliziert, dass sie alleine nicht nützlich sind, könnten sie so geschrieben sein, dass sie im spezifischen Kontext des Verweises von dem Element, das sie beschreiben, nützlich sind.

Ähnlich könnte ein Canvas-Element mit dem `hidden`-Attribut von einem geskripteten Grafik-Engine als Off-Screen-Puffer verwendet werden, und ein Formularelement könnte auf ein verstecktes Formularfeld mit seinem Form-Attribut verweisen.

Elemente, die Nachkommen eines versteckten Elements sind, bleiben aktiv, was bedeutet, dass Skriptelemente weiterhin ausgeführt und Formularelemente weiterhin gesendet werden können.

### Der versteckte Zustand

Der _versteckte_ Zustand zeigt an, dass das Element momentan nicht relevant für die Seite ist oder dass es verwendet wird, um Inhalte zu deklarieren, die von anderen Teilen der Seite wiederverwendet werden und nicht direkt dem Benutzer präsentiert werden sollten. Der Browser wird Elemente, die sich im _versteckten_ Zustand befinden, nicht rendern.

Webbrowser können den _versteckten_ Zustand mit `display: none` implementieren, in welchem Fall das Element nicht am Seitendesign teilnimmt. Dies bedeutet auch, dass die Änderung des Wertes der CSS-Eigenschaft {{cssxref("display")}} bei einem Element im _versteckten_ Zustand den Zustand überschreiben wird. Zum Beispiel werden Elemente, die mit `display: block` gestylt sind, trotz der Anwesenheit des `hidden`-Attributs angezeigt.

### Der versteckt bis gefunden Zustand

Im _versteckt bis gefunden_ Zustand ist das Element versteckt, aber sein Inhalt wird für die Suchfunktion des Browsers "find in page" oder für die Fragment-Navigation zugänglich sein. Wenn diese Funktionen dazu führen, dass zu einem Element in einem _versteckt bis gefunden_ Teilbaum gescrollt wird, wird der Browser:

- ein [`beforematch`](/de/docs/Web/API/Element/beforematch_event)-Ereignis auf dem versteckten Element auslösen
- das `hidden`-Attribut vom Element entfernen
- zu dem Element scrollen

Dies ermöglicht es einem Entwickler, einen Abschnitt von Inhalten zusammenzufalten, ihn aber durchsuchbar und zugänglich über Fragment-Navigation zu machen.

Beachten Sie, dass Browser üblicherweise _versteckt bis gefunden_ mit {{cssxref("content-visibility", "content-visibility: hidden")}} implementieren. Dies bedeutet, dass im Gegensatz zu Elementen im _versteckten_ Zustand Elemente im _versteckt bis gefunden_ Zustand generierte Boxen haben, was bedeutet, dass:

- das Element am Seitendesign teilnimmt
- Rand, Rahmen, Polsterung und Hintergrund des Elements gerendert werden.

Des Weiteren muss das Element von der [layout containment](/de/docs/Web/CSS/CSS_containment) betroffen sein, um angezeigt zu werden. Das bedeutet, dass, wenn das Element im _versteckt bis gefunden_ Zustand einen `display`-Wert von `none`, `contents` oder `inline` hat, das Element nicht durch "find in page" oder Fragment-Navigation sichtbar gemacht wird.

## Beispiele

### Verwendung von until-found

In diesem Beispiel haben wir:

- Drei {{HTMLElement("div")}}-Elemente. Das erste und das dritte sind nicht versteckt, während das zweite die Attribute `hidden="until-found"` und `id="until-found-box"` hat.
- Einen Link, dessen Ziel das Fragment `"until-found-box"` ist.

Das versteckt bis gefundene Element hat einen gepunkteten roten Rahmen und einen grauen Hintergrund.

Es gibt auch ein JavaScript, das bei Eintreten des `beforematch`-Ereignisses auf dem versteckt bis gefundenen Element lauscht. Der Ereignishandler ändert den Textinhalt der Box.

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

Beachten Sie, dass obwohl der Inhalt des Elements versteckt ist, das Element immer noch eine generierte Box hat, die im Layout Platz einnimmt und mit Hintergrund und Rahmen gerendert wird.

Durch Klicken auf die Schaltfläche "Go to hidden content" wird zu dem versteckt bis gefundenen Element navigiert. Das `beforematch`-Ereignis wird ausgelöst, der Textinhalt wird aktualisiert, und der Elementinhalt wird angezeigt.

Um das Beispiel erneut auszuführen, klicken Sie auf "Reset".

{{EmbedLiveSample("Using until-found", "", 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.hidden`](/de/docs/Web/API/HTMLElement/hidden)
- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes)
- Das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)-Attribut
- Das [`beforematch`](/de/docs/Web/API/Element/beforematch_event)-Ereignis
