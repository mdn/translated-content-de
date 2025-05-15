---
title: CSS-Nesting von At-Rules
slug: Web/CSS/CSS_nesting/Nesting_at-rules
l10n:
  sourceCommit: 9a45688021d64f8bc519d318182342629a3c59bb
---

{{CSSRef}}

Jede [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule), deren Körper Stilregeln enthält, kann durch CSS-Nesting innerhalb einer anderen Stilregel verschachtelt werden. In at-Rules verschachtelte Stilregeln übernehmen ihre Definition der Verschachtelungsselektoren von der nächstgelegenen übergeordneten Stilregel. Eigenschaften können direkt innerhalb einer verschachtelten at-Rule eingefügt werden und agieren, als wären sie in einem `& {...}` Block verschachtelt.

## At-Rules, die verschachtelt werden können

- {{cssxref('@media')}}
- {{cssxref('@supports')}}
- {{cssxref('@layer')}}
- {{cssxref('@scope')}}
- {{cssxref('@container')}}
- {{cssxref('@starting-style')}}

## Beispiele

### Verschachtelung der `@media`-At-Rule

In diesem Beispiel sehen wir drei Blöcke von CSS. Der erste zeigt, wie typisches at-Rule-Nesting geschrieben wird, der zweite zeigt eine erweiterte Schreibweise des Nestings, wie sie vom Browser interpretiert wird, und der dritte zeigt das nicht verschachtelte Äquivalent.

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

### Mehrfache verschachtelte `@media` At-Rules

At-Rules können innerhalb anderer At-Rules verschachtelt werden. Unten sehen Sie ein Beispiel hierfür und wie es ohne Verschachtelung geschrieben würde.

#### Verschachtelte At-Rules

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

### Verschachtelung von Kaskadenebenen (`@layer`)

[Kaskadenebenen](/de/docs/Web/CSS/@layer) können verschachtelt werden, um [Unterebenen zu erstellen](/de/docs/Web/CSS/@layer#nesting_layers). Diese werden mit einem Punkt `.` verbunden.

#### Definition der Eltern- und Kindebenen

Wir beginnen mit der Definition der benannten Kaskadenebenen, bevor wir sie verwenden, ohne Stilzuweisungen.

```css
@layer base {
  @layer support;
}
```

#### Zuweisung von Regeln zu Ebenen mit Verschachtelung

Hier ordnet der `.foo`-Selektor seine Regeln der **Basis** `@layer` zu. Die verschachtelte **Unterstützungs**-`@layer` erstellt die `base.support`-Unterschicht, und der `&`-Verschachtelungsselektor wird verwendet, um die Regeln für den `.foo .bar`-Selektor zu erstellen.

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

- [Modul CSS-Nesting](/de/docs/Web/CSS/CSS_nesting)
- [`&` Verschachtelungsselektor](/de/docs/Web/CSS/Nesting_selector)
- [Verwendung von CSS-Nesting](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [Verschachtelung und Spezifität](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)
- [Verschachtelung von Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#nested_queries)
