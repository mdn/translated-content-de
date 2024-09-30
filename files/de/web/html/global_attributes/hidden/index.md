---
title: hidden
slug: Web/HTML/Global_attributes/hidden
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{HTMLSidebar("Global_attributes")}}

Das **`hidden`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein [aufzählbares](/de/docs/Glossary/enumerated) Attribut, das anzeigt, dass der Browser den Inhalt des Elements nicht rendern soll. Zum Beispiel kann es benutzt werden, um Elemente der Seite zu verbergen, die erst nach Abschluss des Login-Prozesses verwendet werden können.

{{EmbedInteractiveExample("pages/tabbed/attribute-hidden.html","tabbed-shorter")}}

## Beschreibung

Das `hidden`-Attribut wird verwendet, um anzuzeigen, dass der Inhalt eines Elements dem Benutzer nicht präsentiert werden soll. Dieses Attribut kann einen der folgenden Werte annehmen:

- ein leerer String
- das Schlüsselwort `hidden`
- das Schlüsselwort `until-found`

Es gibt zwei Zustände, die mit dem `hidden`-Attribut verbunden sind: den _versteckten_ Zustand und den _versteckt bis gefunden_ Zustand.

- Ein leerer String oder das Schlüsselwort `hidden` versetzt das Element in den _versteckten_ Zustand. Zusätzlich setzen ungültige Werte das Element ebenfalls in diesen Zustand.

- Das Schlüsselwort `until-found` versetzt das Element in den _versteckt bis gefunden_ Zustand.

Daher setzen alle folgenden Beispiele das Element in den [_versteckten_](#der_versteckte_zustand) Zustand:

```html
<span hidden>I'm hidden</span>
<span hidden="">I'm also hidden</span>
<span hidden="hidden">I'm hidden too!</span>
```

Das folgende Beispiel setzt das Element in den [_versteckt bis gefunden_](#der_versteckt_bis_gefunden_zustand) Zustand:

```html
<span hidden="until-found">I'm hidden until found</span>
```

Das `hidden`-Attribut darf nicht verwendet werden, um Inhalte nur in einer Präsentation zu verstecken. Wenn etwas als versteckt markiert ist, ist es in allen Präsentationen verborgen, einschließlich zum Beispiel Screenreadern.

Versteckte Elemente sollten nicht von nicht versteckten Elementen verlinkt werden. Zum Beispiel wäre es falsch, das `href`-Attribut zu verwenden, um auf einen Abschnitt zu verlinken, der mit dem `hidden`-Attribut markiert ist. Wenn der Inhalt nicht anwendbar oder relevant ist, gibt es keinen Grund, darauf zu verlinken.

Es wäre jedoch zulässig, das ARIA-Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) zu verwenden, um auf Beschreibungen zu verweisen, die selbst versteckt sind. Während das Verstecken der Beschreibungen impliziert, dass sie für sich genommen nicht nützlich sind, könnten sie so geschrieben sein, dass sie im spezifischen Kontext, von dem Element, das sie beschreiben, nützlich sind.

Ähnlich kann ein Canvas-Element mit dem `hidden`-Attribut von einer skriptgesteuerten Grafik-Engine als Off-Screen-Puffer verwendet werden, und ein Formularelement könnte auf ein verstecktes Formularelement mit seinem Formular-Attribut verweisen.

Elemente, die Nachkommen eines versteckten Elements sind, bleiben aktiv, was bedeutet, dass `script`-Elemente weiterhin ausgeführt werden können und Formularelemente weiterhin übermittelt werden können.

### Der versteckte Zustand

Der _versteckte_ Zustand zeigt an, dass das Element momentan nicht relevant für die Seite ist oder dass es verwendet wird, um Inhalte für andere Teile der Seite zur Wiederverwendung zu deklarieren und nicht direkt dem Nutzer präsentiert werden sollte. Der Browser rendert keine Elemente, die sich im _versteckten_ Zustand befinden.

Webbrowser könnten den _versteckten_ Zustand mit `display: none` implementieren, in welchem Fall das Element nicht am Seitenlayout teilnimmt. Dies bedeutet auch, dass das Ändern des Wertes der CSS-Eigenschaft {{cssxref("display")}} eines Elements im _versteckten_ Zustand diesen Zustand überschreiben wird. Beispielsweise werden Elemente im Stil `display: block` angezeigt, obwohl das `hidden`-Attribut vorhanden ist.

### Der versteckt bis gefunden Zustand

Im _versteckt bis gefunden_ Zustand ist das Element verborgen, aber sein Inhalt wird für die "Finde auf Seite"-Funktion des Browsers oder für Fragmentnavigation zugänglich sein. Wenn diese Funktionen dazu führen, dass zu einem Element in einem _versteckt bis gefunden_ Unterbaum gescrollt wird, wird der Browser:

- ein [`beforematch`](/de/docs/Web/API/Element/beforematch_event) Ereignis auf dem versteckten Element auslösen
- das `hidden`-Attribut vom Element entfernen
- zum Element scrollen

Dies ermöglicht es einem Entwickler, einen Abschnitt von Inhalten zu kollabieren, ihn aber durchsuchbar und zugänglich über Fragmentnavigation zu machen.

Beachten Sie, dass Browser typischerweise _versteckt bis gefunden_ mit {{cssxref("content-visibility", "content-visibility: hidden")}} implementieren. Dies bedeutet, dass im Gegensatz zu Elementen im _versteckten_ Zustand, Elemente im _versteckt bis gefunden_ Zustand erzeugte Boxen haben werden, was bedeutet, dass:

- das Element am Seitenlayout teilnimmt
- Rand, Rahmen, Auffüllung und Hintergrund des Elements gerendert werden.

Außerdem muss das Element von [Layout-Einschließung](/de/docs/Web/CSS/CSS_containment) betroffen sein, um sichtbar gemacht zu werden. Das bedeutet, dass wenn das Element im _versteckt bis gefunden_ Zustand einen `display`-Wert von `none`, `contents` oder `inline` hat, das Element nicht durch die Seitensuche oder Fragmentnavigation sichtbar gemacht wird.

## Beispiele

### Verwendung von until-found

In diesem Beispiel haben wir:

- Drei {{HTMLElement("div")}}-Elemente. Das erste und das dritte sind nicht versteckt, während das zweite die Attribute `hidden="until-found"` und `id="until-found-box"` hat.
- Einen Link, dessen Ziel das Fragment `"until-found-box"` ist.

Das versteckte bis gefundene Element hat einen gepunkteten roten Rand und einen grauen Hintergrund.

Wir haben auch ein JavaScript, das auf das `beforematch`-Ereignis des versteckten bis gefundenen Elements hört. Der Ereignis-Handler ändert den Textinhalt des Kastens.

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

Beachten Sie, dass obwohl der Inhalt des Elements versteckt ist, das Element immer noch eine erzeugte Box hat, die im Layout Platz einnimmt und mit Hintergrund und Rahmen gerendert wird.

Das Klicken auf den Button "Gehe zu verstecktem Inhalt" navigiert zum versteckten bis gefundenen Element. Das `beforematch`-Ereignis wird ausgelöst, der Textinhalt wird aktualisiert und der Elementinhalt wird angezeigt.

Um das Beispiel erneut auszuführen, klicken Sie auf "Zurücksetzen".

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
