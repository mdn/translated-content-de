---
title: hidden
slug: Web/HTML/Global_attributes/hidden
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{HTMLSidebar("Global_attributes")}}

Das **`hidden`**-[Globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein [aufzählbares](/de/docs/Glossary/enumerated) Attribut, das angibt, dass der Browser die Inhalte des Elements nicht rendern sollte. Zum Beispiel kann es verwendet werden, um Elemente der Seite zu verbergen, die erst genutzt werden können, wenn der Anmeldeprozess abgeschlossen ist.

{{EmbedInteractiveExample("pages/tabbed/attribute-hidden.html","tabbed-shorter")}}

## Beschreibung

Das `hidden`-Attribut wird verwendet, um anzugeben, dass der Inhalt eines Elements dem Benutzer nicht angezeigt werden soll. Dieses Attribut kann einen der folgenden Werte annehmen:

- eine leere Zeichenkette
- das Schlüsselwort `hidden`
- das Schlüsselwort `until-found`

Es gibt zwei Zustände, die mit dem `hidden`-Attribut assoziiert sind: den _hidden_ Zustand und den _hidden until found_ Zustand.

- Eine leere Zeichenkette oder das Schlüsselwort `hidden` versetzt das Element in den _hidden_ Zustand. Zudem setzen ungültige Werte das Element in den _hidden_ Zustand.

- Das Schlüsselwort `until-found` versetzt das Element in den _hidden until found_ Zustand.

Daher setzen alle folgenden Konfigurationen das Element in den [_hidden_](#der_versteckte_zustand) Zustand:

```html
<span hidden>I'm hidden</span>
<span hidden="">I'm also hidden</span>
<span hidden="hidden">I'm hidden too!</span>
```

Die folgende Konfiguration versetzt das Element in den [_hidden until found_](#der_versteckte_bis_gefunden_zustand) Zustand:

```html
<span hidden="until-found">I'm hidden until found</span>
```

Das `hidden`-Attribut darf nicht verwendet werden, um Inhalte nur in einer Darstellung zu verbergen. Wenn etwas als versteckt markiert ist, ist es in allen Darstellungen verborgen, einschließlich beispielsweise für Screenreader.

Versteckte Elemente sollten nicht von nicht versteckten Elementen verlinkt werden. Zum Beispiel wäre es nicht korrekt, das `href`-Attribut zu verwenden, um zu einem Abschnitt zu verlinken, der mit dem `hidden`-Attribut markiert ist. Wenn der Inhalt nicht anwendbar oder relevant ist, gibt es keinen Grund, auf ihn zu verlinken.

Es wäre jedoch in Ordnung, das ARIA [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)-Attribut zu verwenden, um auf Beschreibungen zu verweisen, die selbst versteckt sind. Während das Verstecken der Beschreibungen impliziert, dass sie für sich allein nicht nützlich sind, könnten sie so geschrieben sein, dass sie im spezifischen Kontext des Verweises von dem Element, das sie beschreiben, nützlich sind.

Ähnlich könnte ein Canvas-Element mit dem `hidden`-Attribut von einer skriptgesteuerten Grafik-Engine als Off-Screen-Puffer verwendet werden, und ein Formularelement könnte mit seinem `form`-Attribut auf ein verstecktes Formularelement verweisen.

Elemente, die Nachkommen eines versteckten Elements sind, bleiben aktiv, was bedeutet, dass Skriptelemente weiterhin ausgeführt werden können und Formularelemente weiterhin senden können.

### Der versteckte Zustand

Der _hidden_ Zustand zeigt an, dass das Element derzeit für die Seite nicht relevant ist, oder dass es verwendet wird, um Inhalte für die Wiederverwendung durch andere Teile der Seite zu deklarieren und nicht direkt dem Benutzer präsentiert werden sollte. Der Browser wird Elemente, die im _hidden_ Zustand sind, nicht rendern.

Webbrowser können den _hidden_ Zustand mithilfe von `display: none` implementieren, wobei das Element nicht am Seitenlayout teilnimmt. Dies bedeutet auch, dass das Ändern des Werts der CSS {{cssxref("display")}}-Eigenschaft auf einem Element im _hidden_ Zustand den Zustand überschreibt. Zum Beispiel werden Elemente, die mit `display: block` gestylt sind, angezeigt, obwohl das `hidden`-Attribut vorhanden ist.

### Der versteckte bis gefunden Zustand

Im _hidden until found_ Zustand ist das Element versteckt, aber sein Inhalt wird von der "Find in Page"-Funktion des Browsers oder der Fragment-Navigation zugänglich sein. Wenn diese Funktionen dazu führen, dass zu einem Element in einem _hidden until found_ Teilbaum gescrollt wird, wird der Browser:

- ein [`beforematch`](/de/docs/Web/API/Element/beforematch_event)-Ereignis auf dem versteckten Element auslösen
- das `hidden`-Attribut vom Element entfernen
- zum Element scrollen

Dies ermöglicht es einem Entwickler, einen Abschnitt von Inhalten zu kollabieren, ihn jedoch durchsuchbar und über die Fragment-Navigation zugänglich zu machen.

Beachten Sie, dass Browser den _hidden until found_ Zustand typischerweise mit {{cssxref("content-visibility", "content-visibility: hidden")}} implementieren. Das bedeutet, dass im Gegensatz zu Elementen im _hidden_ Zustand, Elemente im _hidden until found_ Zustand generierte Boxen haben werden, was bedeutet, dass:

- das Element am Seitenlayout teilnimmt
- Rand, Ränder, Auffüllungen und Hintergrund für das Element gerendert werden.

Außerdem muss das Element von der [Layout-Beschränkung](/de/docs/Web/CSS/CSS_containment) beeinflusst sein, um angezeigt zu werden. Das bedeutet, dass wenn das Element im _hidden until found_ Zustand einen `display`-Wert von `none`, `contents` oder `inline` hat, dann wird das Element nicht durch Page-Searching oder Fragment-Navigation sichtbar gemacht.

## Beispiele

### Verwendung von until-found

In diesem Beispiel haben wir:

- Drei {{HTMLElement("div")}}-Elemente. Das erste und das dritte sind nicht versteckt, während das zweite die Attribute `hidden="until-found"` und `id="until-found-box"` hat.
- Einen Link, dessen Ziel das `"until-found-box"`-Fragment ist.

Das versteckte bis gefundene Element hat einen gepunkteten roten Rand und einen grauen Hintergrund.

Wir haben auch etwas JavaScript, das auf das `beforematch`-Ereignis hört, das auf dem versteckten bis gefundenen Element ausgelöst wird. Der Ereignishandler ändert den Textinhalt des Kastens.

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

Beachten Sie, dass obwohl der Inhalt des Elements verborgen ist, das Element dennoch eine generierte Box hat, die im Layout Platz beansprucht und Hintergrund sowie Ränder gerendert werden.

Das Klicken auf die Schaltfläche "Go to hidden content" navigiert zu dem versteckten bis gefundenen Element. Das `beforematch`-Ereignis wird ausgelöst, der Textinhalt wird aktualisiert und der Elementinhalt wird angezeigt.

Um das Beispiel erneut auszuführen, klicken Sie auf "Reset".

{{EmbedLiveSample("Using until-found", "", 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.hidden`](/de/docs/Web/API/HTMLElement/hidden)
- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes)
- Das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) Attribut
- Das [`beforematch`](/de/docs/Web/API/Element/beforematch_event) Ereignis
