---
title: "`::-webkit-progress-bar` CSS pseudo-element"
short-title: ::-webkit-progress-bar
slug: Web/CSS/Reference/Selectors/::-webkit-progress-bar
l10n:
  sourceCommit: e8551ed116f8be8684765108079bed2c2f876132
---

{{Non-standard_header}}

Das **`::-webkit-progress-bar`**-[CSS](/de/docs/Web/CSS)-[Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert den gesamten Balken eines {{HTMLElement("progress")}}-Elements. Normalerweise ist nur der ungefüllte Teil des Balkens sichtbar, da es standardmäßig unter dem Pseudoelement {{ cssxref("::-webkit-progress-value") }} dargestellt wird. Es ist ein Kindelement des Pseudoelements {{cssxref("::-webkit-progress-inner-element")}} und das Elternelement des Pseudoelements {{cssxref("::-webkit-progress-value")}}.

> [!NOTE]
> Damit `::-webkit-progress-value` wirksam wird, muss {{cssxref("appearance")}} für das `<progress>`-Element auf `none` gesetzt werden.

## Syntax

```css
::-webkit-progress-bar {
  /* ... */
}
```

## Beispiele

### HTML

```html
<progress value="10" max="50"></progress>
```

### CSS

```css
progress {
  -webkit-appearance: none;
}

::-webkit-progress-bar {
  background-color: orange;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 200, 50)}}

Der obige Code erzeugt in einem WebKit- oder Blink-Browser einen Fortschrittsbalken, der so aussieht:

![Der Fortschrittsbalken ist ein horizontaler Balken, der etwa so hoch wie ein Buchstabe ist. Die linken 20 % sind grün, die rechten 80 % orange.](progress-bar.png)

## Spezifikationen

Nicht Bestandteil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die von WebKit/Blink verwendeten Pseudoelemente zur Gestaltung anderer Teile eines {{HTMLElement("progress")}}-Elements:
  - {{ cssxref("::-webkit-progress-value") }}
  - {{ cssxref("::-webkit-progress-inner-element") }}

- {{ cssxref("::-moz-progress-bar") }}
