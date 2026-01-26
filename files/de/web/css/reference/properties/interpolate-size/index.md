---
title: interpolate-size
slug: Web/CSS/Reference/Properties/interpolate-size
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

{{seecompattable}}

Die **`interpolate-size`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, [Animationen](/de/docs/Web/CSS/Guides/Animations) und [Übergänge](/de/docs/Web/CSS/Guides/Transitions) zwischen einem {{cssxref("&lt;length-percentage&gt;")}}-Wert und einer {{Glossary("intrinsic_size", "intrinsischen Größe")}}, {{cssxref("fit-content")}} oder {{cssxref("max-content")}} zu aktivieren.

Diese Eigenschaft wird typischerweise verwendet, um die {{cssxref("width")}} und/oder {{cssxref("height")}} eines Containers zwischen einem `<length-percentage>` und der vollen Größe seines Inhalts (d.h. zwischen „geschlossen“ und „offen“ oder „versteckt“ und „offenbart“ Zuständen) zu animieren, wenn die Animation einer Nicht-Box-Modell-CSS-Eigenschaft, wie z. B. {{cssxref("transform")}}, keine gangbare Lösung ist.

> [!NOTE]
> Das durch `interpolate-size` aktivierte Verhalten kann nicht standardmäßig im gesamten Web aktiviert werden, da viele Websites in freier Natur Stylesheets verwenden, die davon ausgehen, dass intrinsische Größenwerte nicht animiert werden können. Dies standardmäßig zu aktivieren, würde mehrere Rückwärtskompatibilitätsprobleme verursachen (siehe relevante [CSS WG Diskussion](https://github.com/w3c/csswg-drafts/issues/626#issuecomment-2071016522)).

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
  - : Ermöglicht {{Glossary("Interpolation", "Interpolation")}} zwischen einem {{cssxref("length-percentage")}}-Wert und einem intrinsischen Größenwert, um Animationen zwischen den beiden zu ermöglichen.
- `numeric-only`
  - : Das Standardverhalten — intrinsische Größenwerte können nicht interpoliert werden.

## Beschreibung

Die Einstellung `interpolate-size: allow-keywords` ermöglicht die Interpolation zwischen einem {{cssxref("length-percentage")}}-Wert und einem intrinsischen Größenwert. Beachten Sie, dass es nicht das Animieren zwischen zwei intrinsischen Größenwerten ermöglicht. Ein Endpunkt der Animation muss ein `<length-percentage>` sein.

Der `interpolate-size`-Wert wird vererbt, sodass das Animieren zu (oder von) einem intrinsischen Größenwert für ein ganzes Dokument aktiviert werden kann, indem er auf der Dokumentwurzel gesetzt wird:

```css
:root {
  interpolate-size: allow-keywords;
}
```

Wenn Sie den Geltungsbereich einschränken möchten, können Sie ihn auf dem relevanten Containerelement setzen. Das Folgende ermöglicht die Interpolation von intrinsischen Größen nur für {{htmlelement("main")}} und seine Nachkommen:

```css
main {
  interpolate-size: allow-keywords;
}
```

> [!NOTE]
> Die Rückgabewerte der {{cssxref("calc-size()")}}-Funktion können ebenfalls interpoliert werden. Durch die Verwendung von `calc-size()` in einem Eigenschaftswert wird `interpolate-size: allow-keywords` automatisch auf die Auswahl angewendet. Da `interpolate-size` jedoch wie oben erklärt vererbt wird, ist es die bevorzugte Lösung, um intrinsische Größenanimationen in den meisten Fällen zu aktivieren. Sie sollten `calc-size()` nur verwenden, um intrinsische Größenanimationen zu aktivieren, wenn diese auch Berechnungen erfordern.

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

### Grundlegende `interpolate-size` Nutzung

Dieses Beispiel demonstriert, wie `interpolate-size: allow-keywords` in einem Dokument gesetzt wird, um Animationen mit einer intrinsischen Größe zu ermöglichen. Die Demo zeigt ein Charakter-Abzeichen/"Namensschild", das bei Hover oder Fokus Informationen über den Charakter offenbart. Die Offenbarung wird durch einen {{cssxref("height")}}-Übergang zwischen einer festgelegten Länge und `max-content` gehandhabt.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}}-Element mit [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), damit es Tastaturfokus empfangen kann. Das `<section>` enthält {{htmlelement("header")}} und {{htmlelement("main")}}-Elemente, jedes mit eigenem Kindinhalt.

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

Im CSS setzen wir zuerst `interpolate-size: allow-keywords` auf dem {{cssxref(":root")}}, um es für das gesamte Dokument zu aktivieren.

```css
:root {
  interpolate-size: allow-keywords;
}
```

Dann setzen wir die `<section>`-{{cssxref("height")}} auf `2.5rem` und {{cssxref("overflow")}} auf `hidden`, sodass nur der `<header>` standardmäßig angezeigt wird, und spezifizieren dann einen `transition`, der die `<section>` `height` über 1 Sekunde während des Zustandswechsels animiert. Schließlich setzen wir die `<section>` `height` auf {{cssxref(":hover")}} und {{cssxref(":focus")}} auf `max-content`.

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

Versuchen Sie, über die `<section>` zu fahren oder sie über die Tastatur in den Fokus zu setzen — sie wird auf ihre volle Höhe animiert und enthüllt den gesamten Inhalt.

{{ EmbedLiveSample('Basic `interpolate-size` usage', '100%', '225') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("calc-size()")}}
- [Animate to height: auto; (and other intrinsic sizing keywords) in CSS](https://developer.chrome.com/docs/css-ui/animate-to-height-auto) auf developer.chrome.com (2024)
