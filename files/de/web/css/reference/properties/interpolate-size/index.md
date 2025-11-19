---
title: interpolate-size
slug: Web/CSS/Reference/Properties/interpolate-size
l10n:
  sourceCommit: 7b291dab974ec1ceb97c83f45ce76c3afada2e63
---

{{seecompattable}}

Die **`interpolate-size`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, [Animationen](/de/docs/Web/CSS/Guides/Animations) und [Übergänge](/de/docs/Web/CSS/Guides/Transitions) zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/Reference/Values/length-percentage) Wert und einem intrinsischen Größenwert wie `auto`, [`fit-content`](/de/docs/Web/CSS/Reference/Values/fit-content) oder [`max-content`](/de/docs/Web/CSS/Reference/Values/max-content) zu aktivieren.

Diese Eigenschaft wird typischerweise verwendet, um die {{cssxref("width")}} und/oder {{cssxref("height")}} eines Containers zwischen einem `<length-percentage>` und der vollen Größe seines Inhalts zu animieren (d.h. zwischen "geschlossen" und "offen" oder "versteckt" und "sichtbar" Zuständen), wenn das Animieren einer Nicht-Box-Modell-CSS-Eigenschaft, wie z.B. {{cssxref("transform")}}, keine praktikable Lösung ist.

> [!NOTE]
> Das durch `interpolate-size` aktivierte Verhalten kann nicht standardmäßig im gesamten Web aktiviert werden, da viele Websites in freier Wildbahn Stylesheets verwenden, die annehmen, dass intrinsische Größenwerte nicht animiert werden können. Das standardmäßige Aktivieren würde mehrere Rückwärtskompatibilitätsprobleme verursachen (siehe relevante [CSS WG Diskussion](https://github.com/w3c/csswg-drafts/issues/626#issuecomment-2071016522)).

## Syntax

```css
/* Keyword values */
interpolate-size: allow-keywords;
interpolate-size: numeric-only;

/* Global values */
interpolate-size: inherit;
interpolate-size: initial;
interpolate-size: revert;
interpolate-size: revert-layer;
interpolate-size: unset;
```

### Werte

- `allow-keywords`
  - : Ermöglicht {{Glossary("Interpolation", "Interpolation")}} zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/Reference/Values/length-percentage) Wert und einem intrinsischen Größenwert, um Animationen zwischen den beiden zu erlauben.
- `numeric-only`
  - : Das Standardverhalten — intrinsische Größenwerte können nicht interpoliert werden.

## Beschreibung

Das Setzen von `interpolate-size: allow-keywords` aktiviert die Interpolation zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/Reference/Values/length-percentage) Wert und einem intrinsischen Größenwert. Beachten Sie, dass es nicht das Animieren zwischen zwei intrinsischen Größenwerten ermöglicht. Ein Ende der Animation muss ein `<length-percentage>` sein.

Der `interpolate-size` Wert wird vererbt, daher kann das Animieren zu (oder von) einem intrinsischen Größenwert für ein gesamtes Dokument aktiviert werden, indem es auf der Dokument-Wurzel gesetzt wird:

```css
:root {
  interpolate-size: allow-keywords;
}
```

Wenn Sie den Geltungsbereich einschränken möchten, können Sie ihn auf dem relevanten Containerelement setzen. Das Folgende ermöglicht das Interpolieren intrinsischer Größen nur für {{htmlelement("main")}} und seine Nachkommen:

```css
main {
  interpolate-size: allow-keywords;
}
```

> [!NOTE]
> Die Rückgabewerte der {{cssxref("calc-size()")}} Funktion können ebenfalls interpoliert werden. In der Tat, das Einschließen von `calc-size()` in einem Eigenschaftswert wendet automatisch `interpolate-size: allow-keywords` auf die Auswahl an. Da jedoch `interpolate-size` wie oben erklärt vererbt wird, ist es die bevorzugte Lösung, um intrinsische Größenanimationen in den meisten Fällen zu aktivieren. Sie sollten `calc-size()` nur verwenden, um intrinsische Größenanimationen zu aktivieren, wenn sie auch Berechnungen erfordern.

### Werte, die interpoliert werden können

Die folgenden intrinsischen Werte können derzeit für Animationen optiert werden:

- `auto`
- {{cssxref("min-content")}}
- {{cssxref("max-content")}}
- {{cssxref("fit-content")}}
- `content` (für Container, die mit {{cssxref("flex-basis")}} dimensioniert werden).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `interpolate-size`

Dieses Beispiel zeigt, wie Sie `interpolate-size: allow-keywords` auf ein Dokument setzen, um Animationen mit einer intrinsischen Größe zu aktivieren. Die Demo zeigt ein Charakterabzeichen/"Namensschild", das beim Überfahren oder Fokussieren Informationen über den Charakter enthüllt. Die Enthüllung wird durch einen {{cssxref("height")}} Übergang zwischen einer festgelegten Länge und `max-content` gesteuert.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}} Element mit [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), sodass es Tastaturfokus erhalten kann. Das `<section>` enthält {{htmlelement("header")}} und {{htmlelement("main")}} Elemente, jeweils mit eigenem Kinderinhalt.

```html
<section tabindex="0">
  <header>
    <h2>Tanuki</h2>
  </header>
  <main>
    <p>Tanuki is the silent phantom of MDN.</p>
    <ul>
      <li><strong>Height</strong>: 3.03m</li>
      <li><strong>Weight</strong>: 160kg</li>
      <li><strong>Tech Fu</strong>: 7</li>
      <li><strong>Bad Jokes</strong>: 9</li>
    </ul>
  </main>
</section>
```

#### CSS

```css hidden
* {
  box-sizing: border-box;
}

section {
  font-family: "Helvetica", "Arial", sans-serif;
  width: 175px;
  border-radius: 5px;
  background: #eeeeee;
  box-shadow:
    inset 1px 1px 4px rgb(255 255 255 / 0.5),
    inset -1px -1px 4px rgb(0 0 0 / 0.5);
}

header {
  padding: 0.7rem;
  border-bottom: 2px solid #cccccc;
}

main {
  padding: 10px;
}

h2 {
  margin: 0;
  font-weight: normal;
  font-size: 1.1rem;
  text-align: center;
  letter-spacing: 1px;
}

p,
li {
  font-size: 0.8rem;
  line-height: 1.5;
}

p {
  margin-top: 0;
}
```

Im CSS setzen wir zuerst `interpolate-size: allow-keywords` auf das {{cssxref(":root")}}, um es für das gesamte Dokument zu aktivieren.

```css
:root {
  interpolate-size: allow-keywords;
}
```

Dann setzen wir die {{cssxref("height")}} des `<section>` auf `2.5rem` und {{cssxref("overflow")}} auf `hidden`, sodass standardmäßig nur der `<header>` angezeigt wird, dann spezifizieren wir eine `transition`, die die `<section>` `height` über 1 Sekunde während eines Zustandswechsels animiert. Schließlich setzen wir die `<section>` `height` auf {{cssxref(":hover")}} und {{cssxref(":focus")}} auf `max-content`.

```css
section {
  height: 2.5rem;
  overflow: hidden;
  transition: height ease 1s;
}

section:hover,
section:focus {
  height: max-content;
}
```

Der Rest des CSS wurde der Kürze halber verborgen.

#### Ergebnis

Versuchen Sie, über das `<section>` zu fahren oder es über die Tastatur zu fokussieren — es wird auf seine volle Höhe animiert und zeigt den gesamten Inhalt an.

{{ EmbedLiveSample('Basic `interpolate-size` usage', '100%', '225') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("calc-size()")}}
- [Animate to height: auto; (and other intrinsic sizing keywords) in CSS](https://developer.chrome.com/docs/css-ui/animate-to-height-auto) auf developer.chrome.com (2024)
