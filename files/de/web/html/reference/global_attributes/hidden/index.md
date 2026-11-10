---
title: Globales HTML-Attribut `hidden`
short-title: hidden
slug: Web/HTML/Reference/Global_attributes/hidden
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das **`hidden`**-[globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("enumerated", "Aufzählungsattribut")}}, das angibt, dass der Browser den Inhalt des Elements nicht darstellen soll. Damit lassen sich beispielsweise Seitenelemente verbergen, die erst nach Abschluss der Anmeldung verwendet werden können.

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

Das Attribut `hidden` gibt an, dass der Inhalt eines Elements den Nutzenden nicht angezeigt werden soll.
Das Attribut kann einen der folgenden Werte annehmen:

- das Schlüsselwort `hidden`
- das Schlüsselwort `until-found`
- eine leere Zeichenfolge oder keinen Wert

Auch ungültige Werte für das Attribut `hidden` versetzen das Element in den Zustand _hidden_. Daher befinden sich alle folgenden Elemente im Zustand [_hidden_](#der_zustand_„hidden“):

```html
<span hidden>I'm hidden</span>
<span hidden="">I'm also hidden</span>
<span hidden="hidden">I'm hidden too!</span>
<span hidden="bananas">I'm equally as hidden!</span>
```

Das Schlüsselwort `until-found` versetzt das Element in den Zustand [_hidden until found_](#der_zustand_„hidden_until_found“):

```html
<span hidden="until-found">I'm hidden until found</span>
```

### Der Zustand „hidden“

Der Zustand _hidden_ gibt an, dass das Element derzeit für die Seite nicht relevant ist oder dass es Inhalte zur Wiederverwendung durch andere Teile der Seite bereitstellt und den Nutzenden nicht direkt angezeigt werden soll. Der Browser stellt Elemente im Zustand _hidden_ nicht dar.

Webbrowser können den Zustand _hidden_ mit `display: none` umsetzen. In diesem Fall nimmt das Element nicht am Seitenlayout teil.
Wird der Wert der CSS-Eigenschaft {{cssxref("display")}} eines verborgenen Elements geändert, überschreibt dies außerdem den Zustand _hidden_.
Beispielsweise werden Elemente mit `display: block` trotz des Attributs `hidden` angezeigt.

### Der Zustand „hidden until found“

Im Zustand _hidden until found_ ist das Element verborgen, sein Inhalt bleibt jedoch für die Funktion „Auf Seite suchen“ des Browsers und für die Fragmentnavigation zugänglich.
Wenn diese Funktionen bewirken, dass zu einem Element innerhalb eines Teilbaums im Zustand _hidden until found_ gescrollt wird, führt der Browser folgende Schritte aus:

1. Er löst ein [`beforematch`](/de/docs/Web/API/Element/beforematch_event)-Ereignis auf dem verborgenen Element aus.
2. Er entfernt das Attribut `hidden` vom Element.
3. Er scrollt zum Element.

So können Sie einen Inhaltsabschnitt einklappen, ohne zu verhindern, dass Nutzende ihn über die Suche oder Navigation finden.

Browser setzen _hidden until found_ üblicherweise mit {{cssxref("content-visibility", "content-visibility: hidden")}} um.
Anders als Elemente im Zustand _hidden_ erzeugen Elemente im Zustand _hidden until found_ daher Boxen:

- Sie nehmen am Seitenlayout teil.
- Ihre Außenabstände, Rahmen, Innenabstände und Hintergründe werden dargestellt.

Damit das Element eingeblendet werden kann, muss es außerdem dem [Layout-Containment](/de/docs/Web/CSS/Guides/Containment) unterliegen.
Hat ein Element im Zustand _hidden until found_ für `display` den Wert `none`, `contents` oder `inline`, wird es weder durch „Auf Seite suchen“ noch durch die Fragmentnavigation eingeblendet.

## Hinweise zur Verwendung

Das Attribut `hidden` darf nicht verwendet werden, um Inhalte nur in einer bestimmten Darstellungsform zu verbergen.
Wenn etwas als verborgen gekennzeichnet ist, ist es in allen Darstellungsformen verborgen, auch beispielsweise für Screenreader.

Auf verborgene Elemente sollte nicht von sichtbaren Elementen aus verlinkt werden, es sei denn, `hidden="until-found"` wird verwendet.
Beispielsweise wäre es falsch, mit dem Attribut `href` auf einen Abschnitt mit dem Attribut `hidden` zu verlinken.
Wenn der Inhalt nicht anwendbar oder relevant ist, sollte nicht auf ihn verlinkt werden.

Das ARIA-Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) kann jedoch verwendet werden, um auf verborgene Beschreibungen zu verweisen. Auch wenn das Verbergen der Beschreibungen bedeutet, dass sie für sich genommen nicht nützlich sind, können sie bei einer solchen Referenzierung hilfreichen Kontext liefern.

Ebenso könnte ein canvas-Element mit dem Attribut `hidden` von einer skriptgesteuerten Grafik-Engine als Offscreen-Puffer verwendet werden. Ein Formularsteuerelement könnte über sein form-Attribut auf ein verborgenes Formularelement verweisen.

Beachten Sie schließlich, dass Elemente, die Nachfahren eines verborgenen Elements sind, weiterhin aktiv sind. Das bedeutet, dass script-Elemente weiterhin ausgeführt und Formularelemente weiterhin übermittelt werden können:

```html
<div hidden>
  <script>
    console.warn("Boo! I'm hidden *and* running!");
  </script>
</div>
```

## Beispiele

### Das Attribut `hidden` verwenden

In diesem Beispiel gibt es drei {{HTMLElement("div")}}-Elemente. Das erste und das dritte sind nicht verborgen, während das zweite ein Attribut `hidden` hat.
Beachten Sie, dass für das verborgene Element keine Box erzeugt wird.

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

### Den Wert `until-found` verwenden

In diesem Beispiel gibt es drei {{HTMLElement("div")}}-Elemente.
Das erste und das dritte sind sichtbar, während das zweite die Attribute `hidden="until-found"` und `id="until-found-box"` hat.
Das Element mit der ID `until-found-box` hat einen gepunkteten roten Rahmen und einen grauen Hintergrund.

Außerdem gibt es einen Link zum Fragment `"until-found-box"` und JavaScript, das auf das Auslösen des Ereignisses `beforematch` auf diesem verborgenen Element wartet.
Der Ereignishandler ändert den Textinhalt der Box, um zu veranschaulichen, welche Aktion ausgeführt werden kann, bevor der Zustand _hidden until found_ aufgehoben wird.

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

Wenn Sie auf den Link „Go to hidden content“ klicken, gelangen Sie zum Element im Zustand _hidden until found_. Das Ereignis `beforematch` wird ausgelöst, der Textinhalt wird aktualisiert und das Element wird sichtbar.
Beachten Sie, dass für das Element trotz seines verborgenen Inhalts eine Box erzeugt wird. Sie nimmt Platz im Layout ein; Hintergrund und Rahmen werden dargestellt.

Um das Beispiel erneut auszuführen, klicken Sie auf „Reset“.

{{EmbedLiveSample("using_the_until-found_value", "", 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.hidden`](/de/docs/Web/API/HTMLElement/hidden)
- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- Das Attribut [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- Das Ereignis [`beforematch`](/de/docs/Web/API/Element/beforematch_event)
