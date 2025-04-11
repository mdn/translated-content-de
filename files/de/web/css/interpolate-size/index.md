---
title: interpolate-size
slug: Web/CSS/interpolate-size
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}{{seecompattable}}

Die **`interpolate-size`**-[CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Ihnen, [Animationen](/de/docs/Web/CSS/CSS_animations) und [Übergänge](/de/docs/Web/CSS/CSS_transitions) zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage)-Wert und einem {{Glossary("Intrinsic_Size", "intrinsischen Größenwert")}} wie `auto`, [`fit-content`](/de/docs/Web/CSS/fit-content) oder [`max-content`](/de/docs/Web/CSS/max-content) zu aktivieren.

Diese Eigenschaft wird typischerweise verwendet, um die {{cssxref("width")}} und/oder {{cssxref("height")}} eines Containers zwischen einem `<length-percentage>` und der vollen Größe seines Inhalts zu animieren (d.h. zwischen "geschlossen" und "offen" oder "versteckt" und "offenbarend"), wenn das Animieren einer nicht auf dem Box-Modell basierenden CSS-Eigenschaft, wie {{cssxref("transform")}}, keine praktikable Lösung ist.

> [!NOTE]
> Das Verhalten, das durch `interpolate-size` aktiviert wird, kann standardmäßig nicht im gesamten Web aktiviert werden, weil viele existierende Websites Stylesheets verwenden, die annehmen, dass intrinsische Größenwerte nicht animiert werden können. Eine standardmäßige Aktivierung würde mehrere Rückwärtskompatibilitätsprobleme verursachen (siehe relevante [CSS WG-Diskussion](https://github.com/w3c/csswg-drafts/issues/626#issuecomment-2071016522)).

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
  - : Ermöglicht die {{Glossary("Interpolation", "Interpolation")}} zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage)-Wert und einem intrinsischen Größenwert, um Animationen zwischen diesen beiden zu erlauben.
- `numeric-only`
  - : Das Standardverhalten — intrinsische Größenwerte können nicht interpoliert werden.

## Beschreibung

Das Setzen von `interpolate-size: allow-keywords` ermöglicht die Interpolation zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage)-Wert und einem intrinsischen Größenwert. Beachten Sie, dass es nicht das Animieren zwischen zwei intrinsischen Größenwerten ermöglicht. Ein Ende der Animation muss ein `<length-percentage>` sein.

Der `interpolate-size`-Wert wird vererbt, sodass das Animieren zu (oder von) einem intrinsischen Größenwert für ein gesamtes Dokument aktiviert werden kann, indem man ihn auf dem Dokumentenstamm setzt:

```css
:root {
  interpolate-size: allow-keywords;
}
```

Wenn Sie den Umfang einschränken möchten, können Sie ihn auf das entsprechende Containerelement setzen. Folgendes aktiviert die Interpolation intrinsischer Größen nur für {{htmlelement("main")}} und seine Nachkommen:

```css
main {
  interpolate-size: allow-keywords;
}
```

> [!NOTE]
> Die Rückgabewerte der Funktion {{cssxref("calc-size()")}} können ebenfalls interpoliert werden. Tatsächlich bewirkt das Einbeziehen von `calc-size()` in einem Eigenschaftswert, dass `interpolate-size: allow-keywords` automatisch auf die Auswahl angewendet wird. Da jedoch `interpolate-size` wie oben erklärt vererbt wird, ist es die bevorzugte Lösung zur Aktivierung von Animationen intrinsischer Größe in den meisten Fällen. Sie sollten `calc-size()` nur verwenden, um Animationen intrinsischer Größe zu aktivieren, wenn diese auch Berechnungen erfordern.

### Werte, die interpoliert werden können

Die folgenden intrinsischen Werte können derzeit für Animationen freigegeben werden:

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

### Grundlegende Nutzung von `interpolate-size`

Dieses Beispiel zeigt, wie man `interpolate-size: allow-keywords` auf einem Dokument setzt, um Animationen mit einer intrinsischen Größe zu ermöglichen. Die Demo zeigt ein Charakterabzeichen/Namensschild, das bei Hover oder Fokus Informationen über den Charakter offenbart. Das Offenbaren erfolgt durch einen {{cssxref("height")}}-Übergang zwischen einer festgelegten Länge und `max-content`.

#### HTML

Das HTML enthält ein einziges {{htmlelement("section")}}-Element mit [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) darauf, damit es über die Tastatur fokussiert werden kann. Das `<section>` enthält {{htmlelement("header")}}- und {{htmlelement("main")}}-Elemente, jedes mit eigenem Inhalt.

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

Im CSS setzen wir zuerst `interpolate-size: allow-keywords` auf die {{cssxref(":root")}}, um es für das gesamte Dokument zu aktivieren.

```css
:root {
  interpolate-size: allow-keywords;
}
```

Dann setzen wir die {{cssxref("height")}} des `<section>` auf `2.5rem` und {{cssxref("overflow")}} auf `hidden`, sodass standardmäßig nur der `<header>` angezeigt wird, und spezifizieren einen `transition`, der die `<section>`-`height` über eine Sekunde während eines Zustandswechsels animiert. Schließlich setzen wir die `<section>`-`height` bei {{cssxref(":hover")}} und {{cssxref(":focus")}} auf `max-content`.

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

Der Rest des CSS wurde der Kürze wegen versteckt.

#### Ergebnis

Versuchen Sie, mit der Maus über das `<section>` zu fahren oder es über die Tastatur zu fokussieren — es wird zu seiner vollen Höhe animiert und zeigt den gesamten Inhalt.

{{ EmbedLiveSample('Basic `interpolate-size` usage', '100%', '225') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("calc-size()")}}
- [Animate to height: auto; (and other intrinsic sizing keywords) in CSS](https://developer.chrome.com/docs/css-ui/animate-to-height-auto) auf developer.chrome.com (2024)
