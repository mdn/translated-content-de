---
title: CSS-Nesting-At-Regeln
short-title: Verschachtelung von At-Regeln
slug: Web/CSS/CSS_nesting/Nesting_at-rules
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{CSSRef}}

Jede [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), deren Körper Style-Regeln enthält, kann mithilfe von CSS-Nesting innerhalb einer anderen Style-Regel verschachtelt werden. Style-Regeln, die innerhalb von At-Regeln verschachtelt sind, übernehmen ihre Verschachtelungsselektor-Definition von der nächsten übergeordneten Style-Regel. Eigenschaften können direkt in eine verschachtelte At-Regel aufgenommen werden und wirken, als wären sie in einem `& {...}` Block verschachtelt.

## At-Regeln, die verschachtelt werden können

- {{cssxref('@media')}}
- {{cssxref('@supports')}}
- {{cssxref('@layer')}}
- {{cssxref('@scope')}}
- {{cssxref('@container')}}
- {{cssxref('@starting-style')}}

## Beispiele

### Verschachtelte `@media` At-Regel

In diesem Beispiel sehen wir drei Blöcke von CSS. Der erste zeigt, wie man typische At-Regel-Verschachtelungen schreibt, der zweite ist eine erweiterte Schreibweise der Verschachtelung, wie sie der Browser parst, und der dritte zeigt das nicht-verschachtelte Äquivalent.

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

### Mehrere verschachtelte `@media` At-Regeln

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

### Verschachtelung von Kaskadierungsschichten (`@layer`)

[Kaskadierungsschichten](/de/docs/Web/CSS/@layer) können verschachtelt werden, um [Unter-Schichten zu erstellen](/de/docs/Web/CSS/@layer#nesting_layers). Diese werden mit einem `.` (Punkt) verbunden.

#### Definition der übergeordneten und untergeordneten Schichten

Wir beginnen mit der Definition der benannten Kaskadierungsschichten, bevor wir sie verwenden, ohne Zuweisung von Stilregeln.

```css
@layer base {
  @layer support;
}
```

#### Zuweisung von Regeln zu Schichten mit Verschachtelung

Hier weist der `.foo` Selektor seine Regeln der **Basis-**`@layer` zu. Die verschachtelte **support** `@layer` erstellt die `base.support` Unter-Schicht, und der `&` Verschachtelungsselektor wird verwendet, um die Regeln für den `.foo .bar` Selektor zu erstellen.

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
- [`&` Nesting-Selektor](/de/docs/Web/CSS/Nesting_selector)
- [Verwendung von CSS-Nesting](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [Verschachtelung und Spezifität](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)
- [Verschachtelung von Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#nested_queries)
