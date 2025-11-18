---
title: CSS-Nesting von At-Rules
short-title: Verschachteln von At-Rules
slug: Web/CSS/Guides/Nesting/At-rules
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Jede [At-Rule](/de/docs/Web/CSS/Guides/Syntax/At-rules), deren Block Stilregeln enthält, kann mithilfe der CSS-Verschachtelung innerhalb einer anderen Stilregel verschachtelt werden. Stilregeln, die in At-Rules verschachtelt sind, übernehmen ihre Definition des Verschachtelungsselectors von der nächsten übergeordneten Stilregel. Eigenschaften können direkt in eine verschachtelte At-Rule aufgenommen werden, als ob sie in einem `& {...}` Block verschachtelt wären.

## At-Rules, die verschachtelt werden können

- {{cssxref('@media')}}
- {{cssxref('@supports')}}
- {{cssxref('@layer')}}
- {{cssxref('@scope')}}
- {{cssxref('@container')}}
- {{cssxref('@starting-style')}}

## Beispiele

### Verschachtelung der `@media`-At-Rule

In diesem Beispiel sehen wir drei Blöcke von CSS. Der erste zeigt, wie man eine typische At-Rule-Verschachtelung schreibt, der zweite ist eine erweiterte Art, die Verschachtelung so zu schreiben, wie sie der Browser parst, und der dritte zeigt das nicht verschachtelte Äquivalent.

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

### Mehrere verschachtelte `@media`-At-Rules

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

### Verschachtelung von Kaskadenschichten (`@layer`)

[Kaskadenschichten](/de/docs/Web/CSS/Reference/At-rules/@layer) können verschachtelt werden, um [Kindschichten zu erstellen](/de/docs/Web/CSS/Reference/At-rules/@layer#nesting_layers). Diese werden mit einem Punkt `.` verbunden.

#### Definition der übergeordneten und untergeordneten Schichten

Wir beginnen damit, die benannten Kaskadenschichten zu definieren, bevor wir sie ohne Stilzuweisungen verwenden.

```css
@layer base {
  @layer support;
}
```

#### Zuweisung von Regeln zu Schichten mit Verschachtelung

Hier weist der `.`foo`-Selektor seine Regeln der **Base** `@layer`zu. Die verschachtelte **Support**`@layer`erstellt die`base.support`-Unterschicht, und der `&`-Verschachtelungsselektor wird verwendet, um die Regeln für den `.foo .bar`-Selektor zu erstellen.

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
- [`&` Verschachtelungsselektor](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector)
- [CSS-Verschachtelung verwenden](/de/docs/Web/CSS/Guides/Nesting/Using)
- [Verschachtelung und Spezifität](/de/docs/Web/CSS/Guides/Nesting/Nesting_and_specificity)
- [Verschachtelte Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#nested_queries)
