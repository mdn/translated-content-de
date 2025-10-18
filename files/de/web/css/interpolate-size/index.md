---
title: interpolate-size
slug: Web/CSS/interpolate-size
l10n:
  sourceCommit: 6ed02a2b0e0d891f7d3b4c2a6b1d9cc05c90ed9c
---

{{seecompattable}}

Die **`interpolate-size`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, [Animationen](/de/docs/Web/CSS/CSS_animations) und [Transitionen](/de/docs/Web/CSS/CSS_transitions) zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) Wert und einem {{Glossary("Intrinsic_Size", "intrinsischen Größenwert")}}, wie `auto`, [`fit-content`](/de/docs/Web/CSS/fit-content) oder [`max-content`](/de/docs/Web/CSS/max-content), zu aktivieren.

Diese Eigenschaft wird typischerweise verwendet, um die {{cssxref("width")}} und/oder {{cssxref("height")}} eines Containers zwischen einem `<length-percentage>` und der vollen Größe seines Inhalts zu animieren (d.h. zwischen "geschlossen" und "offen" oder "versteckt" und "offenbarte" Zustände), wenn eine Animation einer nicht-Boxenmodell-CSS-Eigenschaft, wie z. B. {{cssxref("transform")}}, keine praktikable Lösung ist.

> [!NOTE]
> Das durch `interpolate-size` aktivierte Verhalten kann nicht standardmäßig im Web aktiviert werden, da viele existierende Websites Stylesheets verwenden, die voraussetzen, dass intrinsische Größenwerte nicht animiert werden können. Eine standardmäßige Aktivierung würde mehrere Rückwärtskompatibilitätsprobleme verursachen (siehe relevante [CSS WG Diskussion](https://github.com/w3c/csswg-drafts/issues/626#issuecomment-2071016522)).

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
  - : Ermöglicht die {{Glossary("Interpolation", "Interpolation")}} zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) Wert und einem intrinsischen Größenwert, um eine Animation zwischen den beiden zu ermöglichen.
- `numeric-only`
  - : Das Standardverhalten — intrinsische Größenwerte können nicht interpoliert werden.

## Beschreibung

Die Einstellung `interpolate-size: allow-keywords` ermöglicht die Interpolation zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) Wert und einem intrinsischen Größenwert. Beachten Sie, dass damit das Animieren zwischen zwei intrinsischen Größenwerten nicht ermöglicht wird. Ein Ende der Animation muss ein `<length-percentage>` sein.

Der `interpolate-size` Wert wird vererbt, sodass das Animieren zu (oder von) einem intrinsischen Größenwert für ein gesamtes Dokument aktiviert werden kann, indem er auf der Wurzel des Dokuments gesetzt wird:

```css
:root {
  interpolate-size: allow-keywords;
}
```

Wenn Sie den Anwendungsbereich einschränken möchten, können Sie ihn auf das relevante Containerelement setzen. Das folgende Beispiel ermöglicht die Interpolation intrinsischer Größen nur für {{htmlelement("main")}} und seine Nachkommen:

```css
main {
  interpolate-size: allow-keywords;
}
```

> [!NOTE]
> Auch die Rückgabewerte der {{cssxref("calc-size()")}} Funktion können interpoliert werden. Im Effekt wird durch die Aufnahme von `calc-size()` in einen Eigenschaftswert automatisch `interpolate-size: allow-keywords` auf die Auswahl angewendet. Aufgrund der oben erklärten Vererbung von `interpolate-size` ist dies jedoch die bevorzugte Lösung, um intrinsische Größenanimationen in den meisten Fällen zu ermöglichen. Sie sollten `calc-size()` nur verwenden, um intrinsische Größenanimationen zu ermöglichen, wenn diese auch Berechnungen erfordern.

### Werte, die interpoliert werden können

Die folgenden intrinsischen Werte können derzeit für Animationen aktiviert werden:

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

Dieses Beispiel zeigt, wie `interpolate-size: allow-keywords` auf ein Dokument gesetzt wird, um Animationen mit einer intrinsischen Größe zu ermöglichen. Die Demo zeigt ein Charakterabzeichen/"Namensschild", das durch Hover oder Fokus Informationen über den Charakter offenbaren kann. Die Offenbarung erfolgt durch eine {{cssxref("height")}} Transition zwischen einer festgelegten Länge und `max-content`.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}} Element mit dem Attribut [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), damit es Tastaturfokus empfangen kann. Der `<section>` enthält {{htmlelement("header")}} und {{htmlelement("main")}} Elemente, von denen jedes eigene Kindinhalte hat.

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

Im CSS setzen wir zunächst `interpolate-size: allow-keywords` auf das {{cssxref(":root")}}, um es für das gesamte Dokument zu aktivieren.

```css
:root {
  interpolate-size: allow-keywords;
}
```

Anschließend setzen wir die {{cssxref("height")}} des `<section>` auf `2.5rem` und {{cssxref("overflow")}} auf `hidden`, sodass standardmäßig nur das `<header>` angezeigt wird, dann spezifizieren wir eine `transition`, die die `<section>` `height` über 1 Sekunde während des Zustandswechsels animiert. Schließlich setzen wir die `<section>` `height` auf {{cssxref(":hover")}} und {{cssxref(":focus")}} auf `max-content`.

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

Der Rest des CSS wurde der Klarheit halber verborgen.

#### Ergebnis

Versuchen Sie, über das `<section>` zu fahren oder es mit der Tastatur zu fokussieren — es wird auf seine volle Höhe animiert und zeigt den gesamten Inhalt.

{{ EmbedLiveSample('Basic `interpolate-size` usage', '100%', '225') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("calc-size()")}}
- [Animate to height: auto; (und andere intrinsische Größenbegriffe) in CSS](https://developer.chrome.com/docs/css-ui/animate-to-height-auto) auf developer.chrome.com (2024)
