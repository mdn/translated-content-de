---
title: interpolate-size
slug: Web/CSS/interpolate-size
l10n:
  sourceCommit: c0daf1f038fdbdb62d71bfdeaf3a0a083660792c
---

{{CSSRef}}{{seecompattable}}

Die **`interpolate-size`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht [Animationen](/de/docs/Web/CSS/CSS_animations) und [Übergänge](/de/docs/Web/CSS/CSS_transitions) zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) Wert und einem {{Glossary("Intrinsic_Size", "intrinsischen Größenwert")}} wie `auto`, [`fit-content`](/de/docs/Web/CSS/fit-content) oder [`max-content`](/de/docs/Web/CSS/max-content).

Diese Eigenschaft wird typischerweise verwendet, um die {{cssxref("width")}} und/oder {{cssxref("height")}} eines Containers zwischen einem `<length-percentage>` und der vollständigen Größe seines Inhalts zu animieren (d.h. zwischen den Zuständen "geschlossen" und "offen" oder "verbergen" und "anzeigen"), wenn die Animation einer nicht Box-Modell CSS-Eigenschaft, wie {{cssxref("transform")}}, keine praktikable Lösung darstellt.

> [!NOTE]
> Das Verhalten, das durch `interpolate-size` aktiviert wird, kann nicht standardmäßig im gesamten Web aktiviert werden, da viele Websites existieren, die Stylesheets verwenden, die davon ausgehen, dass intrinsische Größenwerte nicht animiert werden können. Die standardmäßige Aktivierung würde mehrere Rückwärtskompatibilitätsprobleme verursachen (siehe relevante [CSS WG Diskussion](https://github.com/w3c/csswg-drafts/issues/626#issuecomment-2071016522)).

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
  - : Ermöglicht die {{Glossary("Interpolation", "Interpolation")}} zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) Wert und einem intrinsischen Größenwert, um die Animation zwischen den beiden zu erlauben.
- `numeric-only`
  - : Das Standardverhalten — intrinsische Größenwerte können nicht interpoliert werden.

## Beschreibung

Das Setzen von `interpolate-size: allow-keywords` ermöglicht die Interpolation zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) Wert und einem intrinsischen Größenwert. Beachten Sie, dass es nicht ermöglicht, zwischen zwei intrinsischen Größenwerten zu animieren. Ein Ende der Animation muss ein `<length-percentage>` sein.

Der Wert `interpolate-size` ist vererbt, daher kann das Animieren zu (oder von) einem intrinsischen Größenwert für ein gesamtes Dokument aktiviert werden, indem es auf der Dokumentwurzel gesetzt wird:

```css
:root {
  interpolate-size: allow-keywords;
}
```

Wenn Sie den Anwendungsbereich einschränken möchten, können Sie ihn auf dem relevanten Containerelement setzen. Das Folgende ermöglicht die Interpolation von intrinsischen Größen nur für {{htmlelement("main")}} und seine Nachkommen:

```css
main {
  interpolate-size: allow-keywords;
}
```

> [!NOTE]
> Die Rückgabewerte der {{cssxref("calc-size()")}} Funktion können ebenfalls interpoliert werden. Tatsächlich wendet das Einschließen von `calc-size()` in einem Eigenschaftswert automatisch `interpolate-size: allow-keywords` auf die Auswahl an. Da jedoch, wie oben erklärt, `interpolate-size` vererbt wird, ist dies die bevorzugte Lösung, um intrinsische Größenanimationen in den meisten Fällen zu ermöglichen. Sie sollten `calc-size()` nur verwenden, um intrinsische Größenanimationen zu ermöglichen, wenn diese auch Berechnungen erfordern.

### Werte, die interpoliert werden können

Die folgenden intrinsischen Werte können derzeit in Animationen einbezogen werden:

- `auto`
- {{cssxref("min-content")}}
- {{cssxref("max-content")}}
- {{cssxref("fit-content")}}
- `content` (für Container, die mit {{cssxref("flex-basis")}} bemessen sind).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `interpolate-size`

Dieses Beispiel zeigt, wie `interpolate-size: allow-keywords` auf einem Dokument gesetzt wird, um Animationen zu ermöglichen, die eine intrinsische Größe umfassen. Das Demo zeigt ein Charakterabzeichen/"Namensschild", das überfahren oder fokussiert werden kann, um Informationen über den Charakter anzuzeigen. Die Anzeige wird durch einen {{cssxref("height")}}-Übergang zwischen einer festgelegten Länge und `max-content` gehandhabt.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}}-Element mit [`tabindex="0"`](/de/docs/Web/HTML/Global_attributes/tabindex), damit es Tastaturfokus empfangen kann. Das `<section>` enthält {{htmlelement("header")}} und {{htmlelement("main")}} Elemente, jeweils mit ihrem eigenen Kindinhalt.

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
  font-family: Arial, Helvetica, sans-serif;
  width: 175px;
  border-radius: 5px;
  background: #eee;
  box-shadow:
    inset 1px 1px 4px rgb(255 255 255 / 0.5),
    inset -1px -1px 4px rgb(0 0 0 / 0.5);
}

header {
  padding: 0.7rem;
  border-bottom: 2px solid #ccc;
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

Im CSS setzen wir zunächst `interpolate-size: allow-keywords` auf das {{cssxref(":root")}}, um es für das gesamte Dokument zu ermöglichen.

```css
:root {
  interpolate-size: allow-keywords;
}
```

Dann setzen wir die {{cssxref("height")}} des `<section>` auf `2.5rem` und {{cssxref("overflow")}} auf `hidden`, sodass nur das `<header>` standardmäßig angezeigt wird, dann spezifizieren wir einen `transition`, der die `<section>` `height` über eine Sekunde während des Zustandswechsels animiert. Schließlich setzen wir die `<section>` `height` bei {{cssxref(":hover")}} und {{cssxref(":focus")}} auf `max-content`.

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

Versuchen Sie, über das `<section>` zu fahren oder es über die Tastatur zu fokussieren — es wird auf seine volle Höhe animiert und zeigt den gesamten Inhalt an.

{{ EmbedLiveSample('Grundlegende Verwendung von `interpolate-size`', '100%', '225') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("calc-size()")}}
- [Animate to height: auto; (and other intrinsic sizing keywords) in CSS](https://developer.chrome.com/docs/css-ui/animate-to-height-auto) auf developer.chrome.com (2024)
