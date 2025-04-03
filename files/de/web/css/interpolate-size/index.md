---
title: interpolate-size
slug: Web/CSS/interpolate-size
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}{{seecompattable}}

Die **`interpolate-size`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, [Animationen](/de/docs/Web/CSS/CSS_animations) und [Übergänge](/de/docs/Web/CSS/CSS_transitions) zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) Wert und einem {{Glossary("Intrinsic_Size", "intrinsischen Größenwert")}} wie `auto`, [`fit-content`](/de/docs/Web/CSS/fit-content) oder [`max-content`](/de/docs/Web/CSS/max-content) zu aktivieren.

Diese Eigenschaft wird typischerweise verwendet, um die {{cssxref("width")}} und/oder {{cssxref("height")}} eines Containers zwischen einem `<length-percentage>` und der vollen Größe seines Inhalts zu animieren (d.h. zwischen "geschlossen" und "offen" oder "verbergen" und "enthüllen" Zuständen), wenn das Animieren einer nicht-Boxmodell-CSS-Eigenschaft wie {{cssxref("transform")}} keine praktikable Lösung ist.

> [!NOTE]
> Das von `interpolate-size` aktivierte Verhalten kann nicht standardmäßig im gesamten Web aktiviert werden, da viele Webseiten in der Praxis Stylesheets verwenden, die davon ausgehen, dass intrinsische Größenwerte nicht animiert werden können. Eine Aktivierung als Standard würde mehrere Rückwärtskompatibilitätsprobleme verursachen (siehe relevante [CSS WG Diskussion](https://github.com/w3c/csswg-drafts/issues/626#issuecomment-2071016522)).

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

Das Setzen von `interpolate-size: allow-keywords` ermöglicht die Interpolation zwischen einem [`<length-percentage>`](/de/docs/Web/CSS/length-percentage) Wert und einem intrinsischen Größenwert. Beachten Sie, dass es nicht das Animieren zwischen zwei intrinsischen Größenwerten ermöglicht. Ein Ende der Animation muss ein `<length-percentage>` sein.

Der Wert von `interpolate-size` wird vererbt, sodass das Animieren zu (oder von) einem intrinsischen Größenwert für ein gesamtes Dokument aktiviert werden kann, indem es auf der Dokumentwurzel gesetzt wird:

```css
:root {
  interpolate-size: allow-keywords;
}
```

Wenn Sie den Umfang einschränken möchten, können Sie es auf dem relevanten Containerelement setzen. Das Folgende ermöglicht die Interpolation intrinsischer Größen nur für {{htmlelement("main")}} und dessen Nachkommen:

```css
main {
  interpolate-size: allow-keywords;
}
```

> [!NOTE]
> Die Rückgabewerte der {{cssxref("calc-size()")}} Funktion können ebenfalls interpoliert werden. Tatsächlich schließt das Einbinden von `calc-size()` in einen Eigenschaftswert automatisch `interpolate-size: allow-keywords` in die Auswahl mit ein. Da `interpolate-size` jedoch, wie oben beschrieben, vererbt wird, ist es in den meisten Fällen die bevorzugte Lösung für die Aktivierung von Animationsgrößen. Sie sollten `calc-size()` nur verwenden, um intrinsische Größenanimationen zu aktivieren, wenn diese auch Berechnungen erfordern.

### Werte, die interpoliert werden können

Die folgenden intrinsischen Werte können derzeit in Animationen einbezogen werden:

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

Dieses Beispiel zeigt, wie `interpolate-size: allow-keywords` in einem Dokument gesetzt werden kann, um Animationen mit einer intrinsischen Größe zu ermöglichen. Das Demo zeigt ein Charakterabzeichen/"Namensschild", das beim Überfahren mit der Maus oder beim Fokussieren Informationen über den Charakter enthüllt. Die Enthüllung wird von einem {{cssxref("height")}} Übergang zwischen einer festgelegten Länge und `max-content` behandelt.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}} Element mit [`tabindex="0"`](/de/docs/Web/HTML/Global_attributes/tabindex), damit es durch die Tastatur fokussiert werden kann. Das `<section>` enthält {{htmlelement("header")}} und {{htmlelement("main")}} Elemente, die jeweils eigenen Inhalt haben.

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

Im CSS setzen wir zuerst `interpolate-size: allow-keywords` auf das {{cssxref(":root")}}, um es für das gesamte Dokument zu aktivieren.

```css
:root {
  interpolate-size: allow-keywords;
}
```

Dann setzen wir die {{cssxref("height")}} des `<section>` auf `2.5rem` und {{cssxref("overflow")}} auf `hidden`, damit standardmäßig nur das `<header>` angezeigt wird. Anschließend geben wir einen `transition` an, der die `<section>` `height` über 1 Sekunde bei Zustandswechsel animiert. Schließlich setzen wir die `<section>` `height` auf {{cssxref(":hover")}} und {{cssxref(":focus")}} auf `max-content`.

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

Der Rest des CSS wurde aus Gründen der Kürze ausgeblendet.

#### Ergebnis

Versuchen Sie, über das `<section>` zu fahren oder es über die Tastatur zu fokussieren — es wird auf seine volle Höhe animiert und zeigt den gesamten Inhalt an.

{{ EmbedLiveSample('Grundlegende Verwendung von `interpolate-size`', '100%', '225') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("calc-size()")}}
- [Animieren auf Höhe: auto; (und andere intrinsische Größen-Schlüsselwörter) in CSS](https://developer.chrome.com/docs/css-ui/animate-to-height-auto) auf developer.chrome.com (2024)
