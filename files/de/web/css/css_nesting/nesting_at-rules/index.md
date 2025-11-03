---
title: CSS-Nesting-At-Regeln
short-title: Verschachtelte At-Regeln
slug: Web/CSS/CSS_nesting/Nesting_at-rules
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Jede [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), deren Body Stilregeln enthält, kann mittels CSS-Nesting in eine andere Stilregel verschachtelt werden. Stilregeln, die in At-Regeln verschachtelt sind, übernehmen ihre Verschachtelungsselektor-Definition von der nächstgelegenen übergeordneten Stilregel. Eigenschaften können direkt in eine verschachtelte At-Regel eingefügt werden, als ob sie in einem `& {...}` Block verschachtelt wären.

## At-Regeln, die verschachtelt werden können

- {{cssxref('@media')}}
- {{cssxref('@supports')}}
- {{cssxref('@layer')}}
- {{cssxref('@scope')}}
- {{cssxref('@container')}}
- {{cssxref('@starting-style')}}

## Beispiele

### Verschachtelte `@media`-At-Regel

In diesem Beispiel sehen wir drei Blöcke von CSS. Der erste zeigt, wie man typische At-Regel-Verschachtelung schreibt, der zweite ist eine erweiterte Schreibweise der Verschachtelung, wie sie der Browser interpretiert, und der dritte zeigt das nicht-verschachtelte Äquivalent.

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

### Verschachtelung von Kaskadenebenen (`@layer`)

[Kaskadenebenen](/de/docs/Web/CSS/@layer) können verschachtelt werden, um [Kinder-Ebenen zu erstellen](/de/docs/Web/CSS/@layer#nesting_layers). Diese werden mit einem `.` (Punkt) verbunden.

#### Definition der Eltern- & Kind-Ebenen

Wir beginnen mit der Definition der benannten Kaskadenebenen, bevor wir sie ohne Stilzuweisungen verwenden.

```css
@layer base {
  @layer support;
}
```

#### Zuweisung von Regeln zu Ebenen mit Verschachtelung

Hier weist der `.foo` Selektor seine Regeln der **base** `@layer` zu. Die verschachtelte **support** `@layer` erstellt die `base.support` Unterebene, und der `&` Verschachtelungsselektor wird verwendet, um die Regeln für den `.foo .bar` Selektor zu erstellen.

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
- [`&` Verschachtelungsselektor](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector)
- [CSS-Nesting verwenden](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [Verschachtelung und Spezifität](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)
- [Verschachtelte Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#nested_queries)
