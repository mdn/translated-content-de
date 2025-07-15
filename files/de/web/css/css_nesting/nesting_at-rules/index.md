---
title: CSS-Nesting-Anweisungen
short-title: Verschachtelung von Anweisungen
slug: Web/CSS/CSS_nesting/Nesting_at-rules
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Jede [Anweisung](/de/docs/Web/CSS/CSS_syntax/At-rule), deren Körper Stilregeln enthält, kann mithilfe von CSS-Nesting innerhalb einer anderen Stilregel verschachtelt werden. Innerhalb von Anweisungen verschachtelte Stilregeln übernehmen ihre Verschachtelungs-Selektor-Definition von der nächstgelegenen übergeordneten Stilregel. Eigenschaften können direkt in eine verschachtelte Anweisung aufgenommen werden, was so wirkt, als wären sie in einem `& {...}`-Block verschachtelt.

## Anweisungen, die verschachtelt werden können

- {{cssxref('@media')}}
- {{cssxref('@supports')}}
- {{cssxref('@layer')}}
- {{cssxref('@scope')}}
- {{cssxref('@container')}}
- {{cssxref('@starting-style')}}

## Beispiele

### Verschachtelte `@media`-Anweisung

In diesem Beispiel sehen wir drei CSS-Blöcke. Der erste zeigt, wie man typische Anweisungsverschachtelung schreibt, der zweite ist eine erweiterte Schreibweise der Verschachtelung, wie der Browser sie analysiert, und der dritte zeigt das nicht verschachtelte Äquivalent.

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

### Mehrere verschachtelte `@media`-Anweisungen

Anweisungen können innerhalb anderer Anweisungen verschachtelt werden. Unten sehen Sie ein Beispiel dafür und wie es ohne Verschachtelung geschrieben würde.

#### Verschachtelte Anweisungen

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
@media (orientation: landscape) and (width >= 1024px) {
  .foo {
    max-inline-size: 1024px;
  }
}
```

### Verschachtelung von Kaskadenebenen (`@layer`)

[Kaskadenebenen](/de/docs/Web/CSS/@layer) können verschachtelt werden, um [Unterebenen zu erstellen](/de/docs/Web/CSS/@layer#nesting_layers). Diese werden mit einem `.` (Punkt) verbunden.

#### Definition der Eltern- und Kindebenen

Wir beginnen mit der Definition der benannten Kaskadenebenen, bevor wir sie ohne Zuordnung von Stilen verwenden.

```css
@layer base {
  @layer support;
}
```

#### Zuweisung von Regeln zu Ebenen mit Verschachtelung

Hier weist der `.foo`-Selektor seine Regeln der **base** `@layer` zu. Die verschachtelte **support** `@layer` erstellt die `base.support` Unterebene, und der `&`-Verschachtelungs-Selektor wird verwendet, um die Regeln für den `.foo .bar`-Selektor zu erstellen.

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
- [`&` Verschachtelungs-Selektor](/de/docs/Web/CSS/Nesting_selector)
- [Verwendung von CSS-Nesting](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [Verschachtelung und Spezifität](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)
- [Verschachtelung von Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#nested_queries)
