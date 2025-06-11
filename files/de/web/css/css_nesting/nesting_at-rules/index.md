---
title: CSS-Verschachtelung von At-Regeln
short-title: Verschachtelung von At-Regeln
slug: Web/CSS/CSS_nesting/Nesting_at-rules
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Jede [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), deren Körper Stilregeln enthält, kann mit CSS-Verschachtelung innerhalb einer anderen Stilregel verschachtelt werden. Stilregeln, die in At-Regeln verschachtelt sind, übernehmen ihre Verschachtelungsselektor-Definition von der nächstgelegenen übergeordneten Stilregel. Eigenschaften können direkt in einer verschachtelten At-Regel enthalten sein, als ob sie in einem `& {...}`-Block verschachtelt wären.

## At-Regeln, die verschachtelt werden können

- {{cssxref('@media')}}
- {{cssxref('@supports')}}
- {{cssxref('@layer')}}
- {{cssxref('@scope')}}
- {{cssxref('@container')}}
- {{cssxref('@starting-style')}}

## Beispiele

### Verschachtelte `@media`-At-Regel

In diesem Beispiel sehen wir drei Blöcke von CSS. Der erste zeigt, wie typische At-Regel-Verschachtelung geschrieben wird, der zweite ist eine erweiterte Methode, um die Verschachtelung so zu schreiben, wie der Browser sie analysiert, und der dritte zeigt das nicht-verschachtelte Äquivalent.

#### Verschachteltes CSS

```css
.foo {
  display: grid;
  @media (orientation: landscape) {
    grid-auto-flow: column;
  }
}
```

#### Erweitertes verschachteltes CSS

```css
.foo {
  display: grid;
  @media (orientation: landscape) {
    & {
      grid-auto-flow: column;
    }
  }
}
```

#### Nicht-verschachteltes Äquivalent

```css
.foo {
  display: grid;
}

@media (orientation: landscape) {
  .foo {
    grid-auto-flow: column;
  }
}
```

### Mehrere verschachtelte `@media`-At-Regeln

At-Regeln können innerhalb anderer At-Regeln verschachtelt werden. Unten sehen Sie ein Beispiel dafür und wie es ohne Verschachtelung geschrieben würde.

#### Verschachtelte At-Regeln

```css
.foo {
  display: grid;
  @media (orientation: landscape) {
    grid-auto-flow: column;
    @media (min-width: 1024px) {
      max-inline-size: 1024px;
    }
  }
}
```

#### Nicht-verschachteltes Äquivalent

```css
.foo {
  display: grid;
}
@media (orientation: landscape) {
  .foo {
    grid-auto-flow: column;
  }
}
@media (orientation: landscape) and (min-width: 1024px) {
  .foo {
    max-inline-size: 1024px;
  }
}
```

### Verschachtelte Kaskadenschichten (`@layer`)

[Kaskadenschichten](/de/docs/Web/CSS/@layer) können verschachtelt werden, um [untergeordnete Schichten zu erstellen](/de/docs/Web/CSS/@layer#nesting_layers). Diese werden mit einem `.` (Punkt) verbunden.

#### Definition der übergeordneten und untergeordneten Schichten

Wir beginnen mit der Definition der benannten Kaskadenschichten, bevor wir sie verwenden, ohne Stilzuweisungen.

```css
@layer base {
  @layer support;
}
```

#### Zuweisen von Regeln zu Schichten mit Verschachtelung

Hier weist der `.foo`-Selektor seine Regeln der **Grundlage**-`@layer` zu. Die verschachtelte **Unterstützungs**-`@layer` erstellt die `base.support`-Unterschicht, und der `&`-Verschachtelungsselektor wird verwendet, um die Regeln für den `.foo .bar`-Selektor zu erstellen.

```css
.foo {
  @layer base {
    block-size: 100%;
    @layer support {
      & .bar {
        min-block-size: 100%;
      }
    }
  }
}
```

#### Äquivalent ohne Verschachtelung

```css
@layer base {
  .foo {
    block-size: 100%;
  }
}
@layer base.support {
  .foo .bar {
    min-block-size: 100%;
  }
}
```

## Siehe auch

- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
- [`&`-Verschachtelungsselektor](/de/docs/Web/CSS/Nesting_selector)
- [Verwendung der CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [Verschachtelung und Spezifität](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)
- [Verschachtelung von Containerabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#nested_queries)
