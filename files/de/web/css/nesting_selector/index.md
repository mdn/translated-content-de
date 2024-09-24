---
title: "&-Verschachtelungs-Selektor"
slug: Web/CSS/Nesting_selector
l10n:
  sourceCommit: c6b772b874485e67bb8cf8eff8c1874deb2e66c3
---

{{CSSRef}}

Der CSS **`&`-Verschachtelungs-Selektor** gibt die Beziehung zwischen Eltern- und Kindregeln bei der Verwendung von [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) explizit an. Er macht die selektierten Kinderregeln _relativ zum Elternelement_. Ohne den `&`-Verschachtelungs-Selektor würden die Kinderregel-Selektoren Kind-Elemente selektieren. Die Kinderregel-Selektoren haben das gleiche [Spezifitätsgewicht](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity) wie wenn sie innerhalb von {{cssxref(":is", ":is()")}} wären.

> **Note:** _Kinderregel_ bedeutet nicht _Kinder-Element-Selektor_. Eine Kinderregel kann Elternelemente oder Kind-Elemente abhängig von der Verwendung des `&`-Verschachtelungs-Selektors anvisieren.

Wird der `&`-Verschachtelungs-Selektor in einer nicht verschachtelten Stilregel verwendet, repräsentiert er die [Stammung der Gültigkeit](/de/docs/Web/CSS/:scope).

## Syntax

```css
parentRule {
  /* Eigenschaften der Elternregel */
  & childRule {
    /* Eigenschaften der Kinderregel */
  }
}
```

### `&`-Verschachtelungs-Selektor und Leerzeichen

Betrachten Sie den folgenden Code, bei dem die Verschachtelung _ohne_ den `&`-Verschachtelungs-Selektor erfolgt.

```css
.parent-rule {
  /* Eigenschaften der Elternregel */
  .child-rule {
    /* Eigenschaften der Kinderregel */
  }
}
```

Wenn der Browser die verschachtelten Selektoren parst, fügt er automatisch ein Leerzeichen zwischen den Selektoren hinzu, um eine neue CSS-Selektorenregel zu erstellen. Der folgende Code zeigt die äquivalenten nicht verschachtelten Regeln:

```css
.parent-rule {
  /* Eigenschaften der Elternregel */
}

.parent-rule .child-rule {
  /* Eigenschaften für Nachkommene der .child-rule von .parent-rule Vorfahren */
}
```

Wenn die verschachtelte Regel direkt (ohne Leerzeichen) an die Elternregel angehängt werden muss, wie z.B. bei der Verwendung von {{cssxref('Pseudo-classes', 'pseudo-class')}} oder zur Erstellung von [komplexen Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector), muss der `&`-Verschachtelungs-Selektor unmittelbar vorangestellt werden, um den gewünschten Effekt zu erreichen.

Betrachten Sie ein Beispiel, bei dem wir ein Element stylen möchten, um Stile bereitzustellen, die jederzeit angewendet werden, und auch einige Stile nur bei Hover zu verschachteln. Wenn der `&`-Verschachtelungs-Selektor nicht enthalten ist, wird ein Leerzeichen hinzugefügt und wir erhalten einen Regelsatz, der die verschachtelten Stile auf jeden _gehoverten Nachkommen des Elternregel-Selektors_ anwendet. Das ist jedoch nicht das, was wir wollen.

```css
.parent-rule {
  /* Eigenschaften der Elternregel */
  :hover {
    /* Eigenschaften der Kinderregel */
  }
}

/* der Browser interpretiert die oben verschachtelten Regeln wie unten gezeigt */
.parent-rule {
  /* Eigenschaften der Elternregel */
}

.parent-rule *:hover {
  /* Eigenschaften der Kinderregel */
}
```

Mit dem `&`-Verschachtelungs-Selektor, der ohne Leerzeichen hinzugefügt wird, werden die vom Elterselektor ausgewählten Elemente beim Hover gestylt.

```css
.parent-rule {
  /* Eigenschaften der Elternregel */
  &:hover {
    /* Eigenschaften der Kinderregel */
  }
}

/* der Browser interpretiert die oben verschachtelten Regeln wie unten gezeigt */
.parent-rule {
  /* Eigenschaften der Elternregel */
}

.parent-rule:hover {
  /* Eigenschaften der Kinderregel */
}
```

## Anfügen des `&`-Verschachtelungs-Selektors

Der `&`-Verschachtelungs-Selektor kann auch angefügt werden, um den Kontext der Regeln umzukehren.

```css
.card {
  /* .card-Stile */
  .featured & {
    /* .featured .card-Stile */
  }
}

/* der Browser interpretiert die oben verschachtelten Regeln wie folgt */

.card {
  /* .card-Stile */
}

.featured .card {
  /* .featured .card-Stile */
}
```

Der `&`-Verschachtelungs-Selektor kann mehrfach platziert werden:

```css
.card {
  /* .card-Stile */
  .featured & & & {
    /* .featured .card .card .card-Stile */
  }
}

/* der Browser interpretiert die oben verschachtelten Regeln wie folgt */

.card {
  /* .card-Stile */
}

.featured .card .card .card {
  /* .featured .card .card .card-Stile */
}
```

## Beispiele

Beide der folgenden Beispiele produzieren die gleichen Ergebnisse. Das erste verwendet normale CSS-Stile und das zweite verwendet den `&`-Verschachtelungs-Selektor.

### Verwendung normaler CSS-Stile

Dieses Beispiel verwendet normales CSS-Styling.

#### HTML

```html
<p class="example">
  This paragraph <a href="#">contains a link</a>, try hovering or focusing it.
</p>
```

#### CSS

```css
.example {
  font-family: system-ui;
  font-size: 1.2rem;
}

.example > a {
  color: tomato;
}

.example > a:hover,
.example > a:focus {
  color: ivory;
  background-color: tomato;
}
```

#### Resultat

{{EmbedLiveSample('Original_CSS_styles','100%','65')}}

### Verwendung von `&` in verschachtelten CSS-Stilen

Dieses Beispiel verwendet verschachteltes CSS-Styling.

#### HTML

```html
<p class="example">
  This paragraph <a href="#">contains a link</a>, try hovering or focusing it.
</p>
```

#### CSS

```css
.example {
  font-family: system-ui;
  font-size: 1.2rem;
  & > a {
    color: tomato;
    &:hover,
    &:focus {
      color: ivory;
      background-color: tomato;
    }
  }
}
```

#### Resultat

{{EmbedLiveSample('Nested_CSS_styles','100%','65')}}

### Verwendung von `&` außerhalb der verschachtelten Regel

Wird der `&`-Verschachtelungs-Selektor in einer nicht verschachtelten Stilregel verwendet, repräsentiert er die [Stammung der Gültigkeit](/de/docs/Web/CSS/:scope).

```html
<p>Hover over the output box to change document's background color.</p>
```

```css
& {
  color: blue;
  font-weight: bold;
}

&:hover {
  background-color: wheat;
}
```

#### Resultat

In diesem Fall gelten alle Stile für das [Dokument](/de/docs/Web/API/Document).

{{EmbedLiveSample('Usage_outside_nested_rule','100%','65')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- Modul [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting)
- Modul [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)
