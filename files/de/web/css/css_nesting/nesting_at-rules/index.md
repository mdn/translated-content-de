---
title: CSS-Nesting von At-Rules
slug: Web/CSS/CSS_nesting/Nesting_at-rules
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Jede [At-Rule](/de/docs/Web/CSS/CSS_syntax/At-rule), deren Inhalt Style-Regeln enthält, kann mithilfe von CSS-Nesting in einer anderen Style-Regel verschachtelt werden. Style-Regeln, die innerhalb von At-Rules verschachtelt sind, übernehmen ihre Definition für den Verschachtelungs-Selektor von der nächstgelegenen übergeordneten Style-Regel. Eigenschaften können direkt in einer verschachtelten At-Rule enthalten sein, als ob sie in einem `& {...}`-Block verschachtelt wären.

## Verschachtelbare At-Rules

- {{cssxref('@media')}}
- {{cssxref('@supports')}}
- {{cssxref('@layer')}}
- {{cssxref('@scope')}}
- {{cssxref('@container')}}

## Beispiele

### Verschachtelung der `@media`-At-Rule

In diesem Beispiel sehen wir drei CSS-Blöcke. Der erste zeigt, wie typische At-Rule-Verschachtelung geschrieben wird, der zweite zeigt eine erweiterte Schreibweise der Verschachtelung, wie sie der Browser interpretiert, und der dritte zeigt die nicht-verschachtelte Entsprechung.

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

#### Nicht-verschachtelte Entsprechung

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

At-Rules können in anderen At-Rules verschachtelt werden. Unten sehen Sie ein Beispiel dafür und wie es ohne Verschachtelung geschrieben würde.

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

#### Nicht-verschachtelte Entsprechung

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

### Verschachtelung von Cascade Layers (`@layer`)

[Cascade Layers](/de/docs/Web/CSS/@layer) können verschachtelt werden, um [Child-Layers zu erstellen](/de/docs/Web/CSS/@layer#nesting_layers). Diese werden mit einem `.` (Punkt) verbunden.

#### Definition der Parent- und Child-Layers

Wir beginnen mit der Definition der benannten Cascade Layers, bevor wir sie ohne Zuweisung von Stilen verwenden.

```css
@layer base {
  @layer support;
}
```

#### Zuweisung von Regeln zu Layers mit Verschachtelung

Hier weist der `.foo`-Selector seine Regeln dem **base** `@layer` zu. Die verschachtelte **support**-`@layer` erstellt den `base.support`-Sublayer, und der `&`-Verschachtelungs-Selektor wird verwendet, um die Regeln für den `.foo .bar`-Selector zu erstellen.

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

#### Entsprechung ohne Verschachtelung

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

- [CSS-Nesting](/de/docs/Web/CSS/CSS_nesting)-Modul
- [`&` Nesting-Selektor](/de/docs/Web/CSS/Nesting_selector)
- [Verwendung von CSS-Nesting](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [Nesting und Spezifität](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)
- [Verschachtelung von Container-Queries](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#nested_queries)
