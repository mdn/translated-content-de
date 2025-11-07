---
title: CSS-Nesting von At-Rules
short-title: Nesting von At-Rules
slug: Web/CSS/CSS_nesting/Nesting_at-rules
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Jede [At-Rule](/de/docs/Web/CSS/CSS_syntax/At-rules), deren Körper Stilregeln enthält, kann unter Verwendung von CSS-Nesting in eine andere Stilregel verschachtelt werden. Stilregeln, die in At-Rules verschachtelt sind, übernehmen ihre Nesting-Selektor-Definition von der nächstgelegenen übergeordneten Stilregel. Eigenschaften können direkt in eine verschachtelte At-Rule aufgenommen werden und wirken so, als wären sie in einem `& {...}`-Block verschachtelt.

## At-Rules, die verschachtelt werden können

- {{cssxref('@media')}}
- {{cssxref('@supports')}}
- {{cssxref('@layer')}}
- {{cssxref('@scope')}}
- {{cssxref('@container')}}
- {{cssxref('@starting-style')}}

## Beispiele

### Verschachtelte `@media`-At-Rule

In diesem Beispiel sehen wir drei CSS-Blöcke. Der erste zeigt, wie man typisches At-Rule-Nesting schreibt, der zweite ist eine erweiterte Schreibweise des Nestings, wie der Browser es interpretiert, und der dritte zeigt das nicht-verschachtelte Äquivalent.

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

### Mehrfach verschachtelte `@media`-At-Rules

At-Rules können innerhalb anderer At-Rules verschachtelt werden. Unten sehen Sie ein Beispiel dafür und wie es ohne Verschachtelung geschrieben würde.

#### Verschachtelte At-Rules

```css
.foo {
  display: grid;
  @media (orientation: landscape) {
    grid-auto-flow: column;
    @media (width >= 1024px) {
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
@media (orientation: landscape) and (width >= 1024px) {
  .foo {
    max-inline-size: 1024px;
  }
}
```

### Verschachteln von Kaskadenebenen (`@layer`)

[Kaskadenebenen](/de/docs/Web/CSS/Reference/At-rules/@layer) können verschachtelt werden, um [untergeordnete Ebenen zu erstellen](/de/docs/Web/CSS/Reference/At-rules/@layer#nesting_layers). Diese werden mit einem `.` (Punkt) verbunden.

#### Definition der übergeordneten und untergeordneten Ebenen

Wir beginnen damit, die benannten Kaskadenebenen zu definieren, bevor wir sie verwenden, ohne irgendwelche Stilzuweisungen.

```css
@layer base {
  @layer support;
}
```

#### Zuweisung von Regeln zu Ebenen mit Verschachtelung

Hier weist der `.foo`-Selektor seine Regeln der **Basis**-`@layer` zu. Die verschachtelte **Support**-`@layer` erstellt die `base.support`-Unterebene, und der `&`-Nesting-Selektor wird verwendet, um die Regeln für den `.foo .bar`-Selektor zu erstellen.

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
- [`&`-Nesting-Selektor](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector)
- [Verwendung von CSS-Nesting](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [Nesting und Spezifität](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)
- [Verschachtelung von Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#nested_queries)
