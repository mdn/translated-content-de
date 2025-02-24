---
title: hidden
slug: Web/HTML/Global_attributes/hidden
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar("Global_attributes")}}

Das **`hidden`** [Globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein {{Glossary("enumerated", "Aufzählungsattribut")}}, das angibt, dass der Browser die Inhalte des Elements nicht rendern soll. Beispielsweise kann es verwendet werden, um Elemente der Seite zu verbergen, die erst genutzt werden können, wenn der Anmeldeprozess abgeschlossen ist.

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

Das `hidden`-Attribut wird verwendet, um anzuzeigen, dass der Inhalt eines Elements dem Benutzer nicht präsentiert werden soll. Dieses Attribut kann einen der folgenden Werte annehmen:

- einen leeren String
- das Schlüsselwort `hidden`
- das Schlüsselwort `until-found`

Es gibt zwei Zustände, die mit dem `hidden`-Attribut verbunden sind: den _hidden_-Zustand und den _hidden until found_-Zustand.

- Ein leerer String oder das Schlüsselwort `hidden` versetzt das Element in den _hidden_-Zustand. Außerdem setzen ungültige Werte das Element in den _hidden_-Zustand.

- Das Schlüsselwort `until-found` versetzt das Element in den _hidden until found_-Zustand.

Daher setzen alle folgenden Beispiele das Element in den [_hidden_](#der_hidden-zustand)-Zustand:

```html
<span hidden>I'm hidden</span>
<span hidden="">I'm also hidden</span>
<span hidden="hidden">I'm hidden too!</span>
```

Das folgende Beispiel setzt das Element in den [_hidden until found_](#der_hidden_until_found-zustand)-Zustand:

```html
<span hidden="until-found">I'm hidden until found</span>
```

Das `hidden`-Attribut darf nicht verwendet werden, um Inhalte nur in einer Präsentation zu verbergen. Wenn etwas als verborgen markiert ist, ist es in allen Präsentationen verborgen, einschließlich beispielsweise Bildschirmlesegeräten.

Verborgene Elemente sollten nicht von nicht verborgenen Elementen verlinkt werden. Beispielsweise wäre es nicht korrekt, das `href`-Attribut zu verwenden, um auf einen mit dem `hidden`-Attribut markierten Abschnitt zu verlinken. Wenn der Inhalt nicht anwendbar oder relevant ist, gibt es keinen Grund, darauf zu verweisen.

Es wäre jedoch in Ordnung, das ARIA-Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) zu verwenden, um sich auf Beschreibungen zu beziehen, die selbst verborgen sind. Während das Verbergen der Beschreibungen impliziert, dass sie für sich genommen nicht nützlich sind, könnten sie auf eine Weise geschrieben werden, die im spezifischen Kontext der Referenz vom beschreibenden Element nützlich ist.

Ein ähnliches Beispiel wäre ein `canvas`-Element mit dem `hidden`-Attribut, das von einer skriptgesteuerten Grafik-Engine als Off-Screen-Puffer verwendet werden könnte, und ein Formularkontrollfeld könnte sich auf ein verborgenes Formular-Element mit seinem `form`-Attribut beziehen.

Elemente, die Nachkommen eines verborgenen Elements sind, bleiben aktiv, was bedeutet, dass `script`-Elemente weiterhin ausgeführt werden können und Formularelemente weiterhin senden können.

### Der hidden-Zustand

Der _hidden_-Zustand gibt an, dass das Element derzeit nicht relevant für die Seite ist oder dass es verwendet wird, um Inhalte für die Wiederverwendung durch andere Teile der Seite zu deklarieren und dem Benutzer nicht direkt präsentiert werden sollte. Der Browser wird Elemente, die im _hidden_-Zustand sind, nicht rendern.

Webbrowser können den _hidden_-Zustand durch `display: none` implementieren, was bedeutet, dass das Element nicht am Seitenlayout teilnimmt. Dies bedeutet auch, dass das Ändern des Wertes der CSS-Eigenschaft {{cssxref("display")}} auf einem Element im _hidden_-Zustand diesen Zustand außer Kraft setzt. Zum Beispiel werden als `display: block` gestylte Elemente trotz des Vorhandenseins des `hidden`-Attributs angezeigt.

### Der hidden until found-Zustand

Im _hidden until found_-Zustand ist das Element verborgen, aber sein Inhalt wird für die "Seite durchsuchen"-Funktion des Browsers oder für die Fragment-Navigation zugänglich sein. Wenn diese Funktionen dazu führen, dass zu einem Element in einem _hidden until found_-Subtree gescrollt wird, wird der Browser:

- ein [`beforematch`](/de/docs/Web/API/Element/beforematch_event)-Event auf dem verborgenen Element auslösen
- das `hidden`-Attribut vom Element entfernen
- zum Element scrollen

Dies ermöglicht einem Entwickler, einen Abschnitt des Inhalts zu kollabieren, jedoch suchbar und über Fragment-Navigation zugänglich zu machen.

Beachten Sie, dass Browser _hidden until found_ typischerweise mit {{cssxref("content-visibility", "content-visibility: hidden")}} implementieren. Das bedeutet, dass im Gegensatz zu Elementen im _hidden_-Zustand Elemente im _hidden until found_-Zustand generierte Boxen haben werden, was bedeutet, dass:

- das Element am Seitenlayout teilnimmt
- Rand, Ränder, Innenabstände und Hintergrund des Elements gerendert werden.

Auch muss das Element von [Layout-Einschluss](/de/docs/Web/CSS/CSS_containment) betroffen sein, um enthüllt zu werden. Dies bedeutet, dass wenn das Element im _hidden until found_-Zustand einen `display`-Wert von `none`, `contents` oder `inline` hat, dann wird das Element durch die Seitensuche oder Fragment-Navigation nicht enthüllt.

## Beispiele

### Verwendung von until-found

In diesem Beispiel haben wir:

- Drei {{HTMLElement("div")}}-Elemente. Das erste und das dritte sind nicht verborgen, während das zweite `hidden="until-found"` und `id="until-found-box"` Attribute hat.
- Einen Link, dessen Ziel das `"until-found-box"` Fragment ist.

Das `hidden until found` Element hat einen gepunkteten roten Rand und einen grauen Hintergrund.

Wir haben auch etwas JavaScript, das auf das `beforematch`-Event horcht, das auf dem `hidden until found`-Element ausgelöst wird. Der Ereignishandler ändert den Textinhalt des Kastens.

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

Beachten Sie, dass, obwohl der Inhalt des Elements verborgen ist, das Element immer noch eine generierte Box hat, die Platz im Layout einnimmt und mit Hintergrund und Rändern gerendert wird.

Das Klicken auf die "Gehe zu verborgenen Inhalten"-Schaltfläche navigiert zum `hidden until found`-Element. Das `beforematch`-Event wird ausgelöst, der Textinhalt wird aktualisiert und der Elementinhalt wird angezeigt.

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
- Das [`beforematch`](/de/docs/Web/API/Element/beforematch_event) Event
