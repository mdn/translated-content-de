---
title: CSS-Nesting mit At-Regeln
short-title: Verschachteln von At-Regeln
slug: Web/CSS/Guides/Nesting/At-rules
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Jede [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules), deren Körper Stilregeln enthält, kann mit CSS-Nesting innerhalb einer anderen Stilregel verschachtelt werden. Die verschachtelten Stilregeln innerhalb von At-Regeln übernehmen ihre Nesting-Selektor-Definition von der nächstgelegenen übergeordneten Stilregel. Eigenschaften können direkt innerhalb einer verschachtelten At-Regel enthalten sein und wirken so, als ob sie in einem `& {...}`-Block verschachtelt wären.

## At-Regeln, die verschachtelt werden können

- {{cssxref('@media')}}
- {{cssxref('@supports')}}
- {{cssxref('@layer')}}
- {{cssxref('@scope')}}
- {{cssxref('@container')}}
- {{cssxref('@starting-style')}}

## Beispiele

### Verschachtelte `@media`-At-Regel

In diesem Beispiel sehen wir drei Blöcke von CSS. Der erste zeigt, wie man typische At-Regel-Verschachtelungen schreibt, der zweite ist eine erweiterte Schreibweise der Verschachtelung, wie der Browser sie analysiert, und der dritte zeigt das nicht verschachtelte Äquivalent.

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

### Mehrfach verschachtelte `@media`-At-Regeln

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

[Kaskadenebenen](/de/docs/Web/CSS/Reference/At-rules/@layer) können verschachtelt werden, um [Unterebenen zu erstellen](/de/docs/Web/CSS/Reference/At-rules/@layer#nesting_layers), die mit einem Punkt `.` verbunden sind.

#### Definition der übergeordneten und untergeordneten Ebenen

Wir beginnen mit der Definition der benannten Kaskadenebenen, bevor wir sie verwenden, ohne stilistische Zuordnungen.

```css
@layer base {
  @layer support;
}
```

#### Zuweisen von Regeln zu Ebenen mit Verschachtelung

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

- [CSS-Nesting](/de/docs/Web/CSS/Guides/Nesting) Modul
- [`&` nesting selector](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector)
- [Verwendung von CSS-Nesting](/de/docs/Web/CSS/Guides/Nesting/Using)
- [Verschachtelung und Spezifität](/de/docs/Web/CSS/Guides/Nesting/Nesting_and_specificity)
- [Verschachtelte Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#nested_queries)
