---
title: "`interpolate-size` CSS property"
short-title: interpolate-size
slug: Web/CSS/Reference/Properties/interpolate-size
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{seecompattable}}

Die **`interpolate-size`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Ihnen, [Animationen](/de/docs/Web/CSS/Guides/Animations) und [Übergänge](/de/docs/Web/CSS/Guides/Transitions) zwischen einem {{cssxref("&lt;length-percentage&gt;")}}-Wert und einer {{Glossary("intrinsic_size", "intrinsischen Größe")}}, {{cssxref("fit-content")}} oder {{cssxref("max-content")}} zu aktivieren.

Diese Eigenschaft wird typischerweise verwendet, um die {{cssxref("width")}} und/oder {{cssxref("height")}} eines Containers zwischen einem `<length-percentage>` und der vollen Größe seines Inhalts zu animieren (d.h. zwischen den Zuständen "geschlossen" und "offen" oder "verbergen" und "enthüllen"), wenn die Animation einer Nicht-Box-Modell-CSS-Eigenschaft, wie z. B. {{cssxref("transform")}}, keine geeignete Lösung ist.

> [!NOTE]
> Das Verhalten, das durch `interpolate-size` aktiviert wird, kann nicht standardmäßig im gesamten Web aktiviert werden, da viele existierende Websites Stylesheets verwenden, die annehmen, dass intrinsische Größenwerte nicht animiert werden können. Eine Aktivierung als Standard würde mehrere Kompatibilitätsprobleme verursachen (siehe relevante [CSS WG Diskussion](https://github.com/w3c/csswg-drafts/issues/626#issuecomment-2071016522)).

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
  - : Ermöglicht die {{Glossary("Interpolation", "Interpolation")}} zwischen einem {{cssxref("length-percentage")}}-Wert und einem intrinsischen Größenwert, um eine Animation zwischen beiden zu ermöglichen.
- `numeric-only`
  - : Das Standardverhalten — intrinsische Größenwerte können nicht interpoliert werden.

## Beschreibung

Das Setzen von `interpolate-size: allow-keywords` ermöglicht die Interpolation zwischen einem {{cssxref("length-percentage")}}-Wert und einem intrinsischen Größenwert. Beachten Sie, dass es nicht das Animieren zwischen zwei intrinsischen Größenwerten ermöglicht. Ein Ende der Animation muss ein `<length-percentage>` sein.

Der `interpolate-size`-Wert wird vererbt, sodass das Animieren zu (oder von) einem intrinsischen Größenwert für ein gesamtes Dokument aktiviert werden kann, indem es auf dem Dokumentenstamm gesetzt wird:

```css
:root {
  interpolate-size: allow-keywords;
}
```

Wenn Sie den Umfang begrenzen möchten, können Sie ihn auf das relevante Containerelement setzen. Das Folgende ermöglicht die Interpolation intrinsischer Größen nur für {{htmlelement("main")}} und dessen Nachfahren:

```css
main {
  interpolate-size: allow-keywords;
}
```

> [!NOTE]
> Die Rückgabewerte der {{cssxref("calc-size()")}}-Funktion können ebenfalls interpoliert werden. Tatsächlich wird durch das Einfügen von `calc-size()` in einen Eigenschaftswert automatisch `interpolate-size: allow-keywords` auf die Auswahl angewendet. Da `interpolate-size` jedoch, wie oben erläutert, vererbt wird, ist dies die bevorzugte Lösung, um intrinsische Größenanimationen in den meisten Fällen zu aktivieren. Sie sollten `calc-size()` nur verwenden, um intrinsische Größenanimationen zu aktivieren, wenn sie auch Berechnungen erfordern.

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

Dieses Beispiel zeigt, wie `interpolate-size: allow-keywords` auf einem Dokument gesetzt wird, um Animationen zu ermöglichen, die eine intrinsische Größe umfassen. Die Demo zeigt ein Charakterabzeichen/"Namensschild", das durch Hover oder Fokus Informationen über den Charakter preisgibt. Das Enthüllen wird durch einen {{cssxref("height")}}-Übergang zwischen einer festgelegten Länge und `max-content` gehandhabt.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}}-Element mit [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), damit es Tastaturfokus erhalten kann. Das `<section>` enthält {{htmlelement("header")}}- und {{htmlelement("main")}}-Elemente, jeweils mit eigenen untergeordneten Inhalten.

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

Im CSS setzen wir zuerst `interpolate-size: allow-keywords` auf dem {{cssxref(":root")}}, um es für das ganze Dokument zu aktivieren.

```css
:root {
  interpolate-size: allow-keywords;
}
```

Dann setzen wir die {{cssxref("height")}} des `<section>` auf `2.5rem` und {{cssxref("overflow")}} auf `hidden`, sodass standardmäßig nur das `<header>` angezeigt wird, und spezifizieren einen `transition`, der die `<section>`-`height` über 1 Sekunde während des Zustandswechsels animiert. Schließlich setzen wir die `<section>`-`height` auf {{cssxref(":hover")}} und {{cssxref(":focus")}} auf `max-content`.

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

Der Rest des CSS wurde der Kürze halber ausgeblendet.

#### Ergebnis

Versuchen Sie, über das `<section>` zu schweben oder es per Tastaturfokus anzusteuern — es wird auf seine volle Höhe animiert und zeigt den gesamten Inhalt an.

{{ EmbedLiveSample('Basic `interpolate-size` usage', '100%', '225') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("calc-size()")}}
- [Animate to height: auto; (and other intrinsic sizing keywords) in CSS](https://developer.chrome.com/docs/css-ui/animate-to-height-auto) auf developer.chrome.com (2024)
