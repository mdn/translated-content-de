---
title: interpolate-size
slug: Web/CSS/Reference/Properties/interpolate-size
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{seecompattable}}

Die **`interpolate-size`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, [Animationen](/de/docs/Web/CSS/CSS_animations) und [Übergänge](/de/docs/Web/CSS/CSS_transitions) zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) Wert und einem {{Glossary("Intrinsic_Size", "intrinsischen Größenwert")}} wie `auto`, [`fit-content`](/de/docs/Web/CSS/fit-content) oder [`max-content`](/de/docs/Web/CSS/max-content) zu aktivieren.

Diese Eigenschaft wird typischerweise verwendet, um die {{cssxref("width")}} und/oder {{cssxref("height")}} eines Containers zwischen einem `<length-percentage>` und der vollständigen Größe seines Inhalts zu animieren (d.h. zwischen "geschlossen" und "offen" oder "verstecken" und "zeigen" Zuständen), wenn das Animieren einer non-box-model CSS Eigenschaft, wie {{cssxref("transform")}}, keine praktikable Lösung ist.

> [!NOTE]
> Das durch `interpolate-size` gewählte Verhalten kann nicht standardmäßig im gesamten Web aktiviert werden, weil viele Websites existieren, die Stylesheets verwenden, die davon ausgehen, dass intrinsische Größenwerte nicht animierbar sind. Eine Standardaktivierung würde mehrere Rückwärtskompatibilitätsprobleme verursachen (siehe relevante [CSS WG Diskussion](https://github.com/w3c/csswg-drafts/issues/626#issuecomment-2071016522)).

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

Die Einstellung `interpolate-size: allow-keywords` ermöglicht die Interpolation zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) Wert und einem intrinsischen Größenwert. Beachten Sie, dass es nicht ermöglicht, zwischen zwei intrinsischen Größenwerten zu animieren. Ein Ende der Animation muss ein `<length-percentage>` sein.

Der `interpolate-size` Wert wird vererbt, sodass das Animieren zu (oder von) einem intrinsischen Größenwert für ein ganzes Dokument aktiviert werden kann, indem es auf dem Dokumentenstamm gesetzt wird:

```css
:root {
  interpolate-size: allow-keywords;
}
```

Wenn Sie den Geltungsbereich einschränken möchten, können Sie ihn auf das relevante Containerelement setzen. Das folgende Beispiel ermöglicht das Interpolieren von intrinsischen Größen nur für {{htmlelement("main")}} und dessen Nachkommen:

```css
main {
  interpolate-size: allow-keywords;
}
```

> [!NOTE]
> Die Rückgabewerte der Funktion {{cssxref("calc-size()")}} können ebenfalls interpoliert werden. Tatsächlich bewirkt die Einbeziehung von `calc-size()` in einen Eigenschaftswert automatisch die Anwendung von `interpolate-size: allow-keywords` auf die Auswahl. Da `interpolate-size` wie oben beschrieben vererbt wird, ist dies die bevorzugte Lösung, um Animationen von intrinsischen Größen zu aktivieren. Sie sollten `calc-size()` nur verwenden, wenn für diese auch Berechnungen erforderlich sind.

### Werte, die interpoliert werden können

Die folgenden intrinsischen Werte können derzeit in Animationen integriert werden:

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

Dieses Beispiel zeigt, wie `interpolate-size: allow-keywords` auf ein Dokument gesetzt wird, um Animationen mit einer intrinsischen Größe zu ermöglichen. Die Demo zeigt ein Charakterabzeichen/„Namensschild“, das bei Fokus oder Hover Informationen über den Charakter offenbart. Das Aufdecken wird durch einen {{cssxref("height")}} Übergang zwischen einer festgelegten Länge und `max-content` behandelt.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}} Element mit [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), damit es durch die Tastatur fokussiert werden kann. Der `<section>` enthält {{htmlelement("header")}} und {{htmlelement("main")}} Elemente, die jeweils ihren eigenen Inhalt haben.

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

Dann setzen wir die {{cssxref("height")}} des `<section>` auf `2.5rem` und {{cssxref("overflow")}} auf `hidden`, sodass standardmäßig nur der `<header>` angezeigt wird, und spezifizieren einen `transition` Effekt, der die `<section>` `height` über 1 Sekunde während des Zustandswechsels animiert. Schließlich setzen wir die `<section>` `height` bei {{cssxref(":hover")}} und {{cssxref(":focus")}} auf `max-content`.

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

Versuchen Sie, über das `<section>` zu fahren oder es über die Tastatur zu fokussieren — es wird auf seine volle Höhe animieren und den gesamten Inhalt enthüllen.

{{ EmbedLiveSample('Basic `interpolate-size` usage', '100%', '225') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("calc-size()")}}
- [Animate to height: auto; (und andere intrinsische Größen) in CSS](https://developer.chrome.com/docs/css-ui/animate-to-height-auto) auf developer.chrome.com (2024)
