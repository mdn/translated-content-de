---
title: interpolate-size
slug: Web/CSS/interpolate-size
l10n:
  sourceCommit: a3eec14af0580dad6eae65980686cee6cafc2c68
---

{{seecompattable}}

Die **`interpolate-size`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, [Animationen](/de/docs/Web/CSS/CSS_animations) und [Übergänge](/de/docs/Web/CSS/CSS_transitions) zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) Wert und einem {{Glossary("Intrinsic_Size", "intrinsischen Größenwert")}} wie `auto`, [`fit-content`](/de/docs/Web/CSS/fit-content) oder [`max-content`](/de/docs/Web/CSS/max-content) zu aktivieren.

Diese Eigenschaft wird typischerweise verwendet, um die {{cssxref("width")}} und/oder {{cssxref("height")}} eines Containers zwischen einem `<length-percentage>` und der vollen Größe seines Inhalts (d.h. zwischen "geschlossen" und "offen" oder "verbergen" und "anzeigen") zu animieren, wenn die Animation einer Nicht-Box-Modell-CSS-Eigenschaft, wie zum Beispiel {{cssxref("transform")}}, keine brauchbare Lösung darstellt.

> [!NOTE]
> Das durch `interpolate-size` ermöglichte Verhalten kann nicht standardmäßig im gesamten Web aktiviert werden, da viele existierende Webseiten Stylesheets nutzen, die annehmen, dass intrinsische Größenwerte nicht animiert werden können. Eine Standardaktivierung würde mehrere Rückwärtskompatibilitätsprobleme verursachen (siehe relevante [CSS WG-Diskussion](https://github.com/w3c/csswg-drafts/issues/626#issuecomment-2071016522)).

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
  - : Ermöglicht {{Glossary("Interpolation", "Interpolation")}} zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) Wert und einem intrinsischen Größenwert, um Animationen zwischen den beiden zu ermöglichen.
- `numeric-only`
  - : Das Standardverhalten — intrinsische Größenwerte können nicht interpoliert werden.

## Beschreibung

Durch die Einstellung `interpolate-size: allow-keywords` wird die Interpolation zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) Wert und einem intrinsischen Größenwert ermöglicht. Beachten Sie, dass es nicht ermöglicht, zwischen zwei intrinsischen Größenwerten zu animieren. Ein Endpunkt der Animation muss ein `<length-percentage>` sein.

Der `interpolate-size` Wert wird vererbt, sodass das Animieren zu (oder von) einem intrinsischen Größenwert für ein gesamtes Dokument aktiviert werden kann, indem es auf der Wurzel des Dokuments gesetzt wird:

```css
:root {
  interpolate-size: allow-keywords;
}
```

Wenn Sie den Anwendungsbereich einschränken möchten, können Sie es auf dem relevanten Containerelement festlegen. Das folgende Beispiel aktiviert die Interpolation von intrinsischen Größen nur für {{htmlelement("main")}} und seine Nachkommen:

```css
main {
  interpolate-size: allow-keywords;
}
```

> [!NOTE]
> Die Rückgabewerte der {{cssxref("calc-size()")}} Funktion können ebenfalls interpoliert werden. Im Effekt bewirkt das Einbeziehen von `calc-size()` in einen Eigenschaftswert automatisch die Anwendung von `interpolate-size: allow-keywords` auf die Auswahl. Da jedoch `interpolate-size` wie oben erklärt vererbt wird, ist es die bevorzugte Lösung, um intrinsische Größenanimationen in den meisten Fällen zu aktivieren. Sie sollten `calc-size()` nur verwenden, um intrinsische Größenanimationen zu aktivieren, wenn sie auch Berechnungen erfordern.

### Werte, die interpoliert werden können

Die folgenden intrinsischen Werte können derzeit in Animationen eingebunden werden:

- `auto`
- {{cssxref("min-content")}}
- {{cssxref("max-content")}}
- {{cssxref("fit-content")}}
- `content` (für Container, die mit {{cssxref("flex-basis")}} dimensioniert sind).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `interpolate-size`

Dieses Beispiel demonstriert, wie `interpolate-size: allow-keywords` auf ein Dokument gesetzt wird, um Animationen mit einer intrinsischen Größe zu aktivieren. Das Beispiel zeigt ein Charakterabzeichen/"Namensschild", das durch einen Hover oder Fokus Informationen über den Charakter offenbart. Das Offenlegen wird durch einen {{cssxref("height")}} Übergang zwischen einer festen Länge und `max-content` gehandhabt.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}} Element mit [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), gesetzt damit es über die Tastatur fokussiert werden kann. Das `<section>` enthält {{htmlelement("header")}} und {{htmlelement("main")}} Elemente, jeweils mit eigenem Inhalt.

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
  font-weight: 400;
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

Im CSS setzen wir zuerst `interpolate-size: allow-keywords` auf {{cssxref(":root")}}, um es für das gesamte Dokument zu aktivieren.

```css
:root {
  interpolate-size: allow-keywords;
}
```

Dann setzen wir die {{cssxref("height")}} des `<section>` auf `2.5rem` und {{cssxref("overflow")}} auf `hidden`, sodass standardmäßig nur das `<header>` gezeigt wird. Anschließend spezifizieren wir einen `transition`, der die `<section>` `height` über 1 Sekunde während eines Zustandswechsels animiert. Schließlich setzen wir die `<section>` `height` auf {{cssxref(":hover")}} und {{cssxref(":focus")}} auf `max-content`.

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

Der Rest des CSS wurde um der Kürze willen ausgelassen.

#### Ergebnis

Versuchen Sie, über das `<section>` zu fahren oder es über die Tastatur zu fokussieren — es wird zu seiner vollen Höhe animiert und offenbart den gesamten Inhalt.

{{ EmbedLiveSample('Basic `interpolate-size` usage', '100%', '225') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("calc-size()")}}
- [Animate to height: auto; (and other intrinsic sizing keywords) in CSS](https://developer.chrome.com/docs/css-ui/animate-to-height-auto) auf developer.chrome.com (2024)
