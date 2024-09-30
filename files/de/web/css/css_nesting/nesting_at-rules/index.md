---
title: CSS Nesting At-Regeln
slug: Web/CSS/CSS_nesting/Nesting_at-rules
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{CSSRef}}

Jede [At-Regel](/de/docs/Web/CSS/At-rule), deren Körper Stilregeln enthält, kann mithilfe von CSS-Nesting innerhalb einer anderen Stilregel verschachtelt werden. Stilregeln, die innerhalb von At-Regeln verschachtelt sind, übernehmen ihre Nesting-Selektor-Definition von der nächstgelegenen übergeordneten Stilregel. Eigenschaften können direkt innerhalb einer verschachtelten At-Regel enthalten sein, wodurch sie so wirken, als wären sie in einem `& {...}`-Block verschachtelt.

## At-Regeln, die verschachtelt werden können

- {{cssxref('@media')}}
- {{cssxref('@supports')}}
- {{cssxref('@layer')}}
- {{cssxref('@scope')}}
- {{cssxref('@container')}}

## Beispiele

### Verschachtelte `@media`-At-Regel

In diesem Beispiel sehen wir drei Blöcke mit CSS. Der erste zeigt, wie man eine typische At-Regel-Verschachtelung schreibt, der zweite zeigt die erweiterte Schreibweise der Verschachtelung, so wie sie der Browser interpretiert, und der dritte zeigt das äquivalente nicht verschachtelte Beispiel.

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

#### Nicht verschachteltes Äquivalent

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

#### Nicht verschachteltes Äquivalent

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

### Verschachteln von Kaskadenschichten (`@layer`)

[Kaskadenschichten](/de/docs/Web/CSS/@layer) können verschachtelt werden, um [Unterebenen zu erstellen](/de/docs/Web/CSS/@layer#nesting_layers). Diese werden mit einem `.` (Punkt) verbunden.

#### Definieren der übergeordneten und untergeordneten Schichten

Wir beginnen mit der Definition der benannten Kaskadenschichten, bevor wir sie verwenden, ohne Stilzuweisungen.

```css
@layer base {
  @layer support;
}
```

#### Zuweisen von Regeln zu Schichten mit Verschachtelung

Hier weist der `.foo`-Selektor seine Regeln der **Basis**-`@layer` zu. Die verschachtelte **support**-`@layer` erstellt die `base.support`-Unterschicht, und der `&`-Verschachtelungsselektor wird verwendet, um die Regeln für den `.foo .bar`-Selektor zu erstellen.

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

- [CSS-Nesting](/de/docs/Web/CSS/CSS_nesting) Modul
- [`&`-Nesting-Selektor](/de/docs/Web/CSS/Nesting_selector)
- [Verwendung von CSS-Nesting](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [Verschachtelung und Spezifität](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)
- [Verschachtelte Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#nested_queries)
