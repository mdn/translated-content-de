---
title: Verwenden von mehrspaltigen Layouts
slug: Web/CSS/CSS_multicol_layout/Using_multicol_layouts
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die im **CSS multi-column layout module** definierten Eigenschaften erweitern den _Block-Layout-Modus_, was die einfache Definition mehrerer Textspalten ermöglicht. Menschen haben Probleme beim Lesen von Text, wenn Zeilen zu lang sind. Wenn es zu lange dauert, von einem Zeilenende zum Anfang der nächsten zu gelangen, können Leser die Übersicht verlieren, auf welcher Zeile sie sich befanden. Um das Benutzererlebnis beim Lesen von Text auf einem großen Bildschirm zu verbessern, sollten Sie die Breite des Textes begrenzen, indem Sie Textspalten nebeneinander platzieren, genau wie es Zeitungen tun.

## Verwenden von Spalten

### Spaltenanzahl und -breite

Zwei CSS-Eigenschaften steuern, ob und wie viele Spalten erscheinen: {{cssxref("column-count")}} und {{cssxref("column-width")}}.

Die Eigenschaft `column-count` legt die Anzahl der Spalten auf eine bestimmte Zahl fest. Zum Beispiel:

## Beispiel 1

### HTML

```html
<div id="col">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </p>
  <p>
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.
  </p>
  <p>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur.
  </p>
  <p>
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.
  </p>
</div>
```

### CSS

```css
#col {
  column-count: 2;
}
```

### Ergebnis

Der Inhalt wird in zwei Spalten angezeigt:

{{EmbedLiveSample("Example_1", "100%")}}

Die Eigenschaft `column-width` legt die gewünschte minimale Spaltenbreite fest. Wenn `column-count` nicht ebenfalls festgelegt ist, erzeugt der Browser automatisch so viele Spalten, wie in die verfügbare Breite passen.

## Beispiel 2

### HTML

```html
<div id="wid">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</div>
```

### CSS

```css
#wid {
  column-width: 100px;
}
```

### Ergebnis

{{EmbedLiveSample("Example_2", "100%")}}

In einem mehrspaltigen Block fließt der Inhalt automatisch bei Bedarf von einer Spalte zur nächsten. Alle HTML-, CSS- und DOM-Funktionalitäten werden innerhalb von Spalten unterstützt, ebenso wie das Bearbeiten und Drucken.

### Die columns-Kurzform

Sie können entweder {{cssxref("column-count")}} oder {{cssxref("column-width")}} verwenden. Da sich die Werte für diese Eigenschaften nicht überschneiden, ist es oft bequem, die Kurzform {{cssxref("columns")}} zu verwenden.

## Beispiel 3

In diesem Beispiel wird die CSS-Deklaration `column-width: 12em` durch `columns: 12em` ersetzt.

### HTML

```html
<div id="col_short">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</div>
```

### CSS

```css
#col_short {
  columns: 12em;
}
```

{{EmbedLiveSample("Example_3", "100%")}}

## Beispiel 4

In diesem Beispiel wird die CSS-Deklaration `column-count: 4` durch `columns: 4` ersetzt.

### HTML

```html
<div id="columns_4">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</div>
```

### CSS

```css
#columns_4 {
  columns: 4;
}
```

### Ergebnis

{{EmbedLiveSample("Example_4", "100%")}}

## Beispiel 5

Die beiden CSS-Deklarationen `column-width: 8em` und `column-count: 12` können durch `columns: 12 8em` ersetzt werden. Der `column-count`-Teil der Kurzform ist die maximale Anzahl der Spalten, die vorhanden sein werden. Die `column-width` ist die Mindestbreite, die jede Spalte haben sollte.

### HTML

```html
<div id="columns_12">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</div>
```

### CSS

```css
#columns_12 {
  columns: 12 8em;
}
```

### Ergebnis

{{EmbedLiveSample("Example_5", "100%")}}

Unter der Annahme eines Standardabstands von `1em` zwischen den Spalten: Wenn der Container breiter als `103em` ist (12 Spalten \* `8em` Breite jede + 7 `1em` Abstände), wird es 12 Spalten geben, jede mit einer Breite von `8em` oder mehr. Wenn der Container weniger als `103em` breit ist, wird es weniger als 12 Spalten geben. Wenn der Container weniger als `17em` breit ist (`8em` Spalte + `8em` Spalte + `1em` Abstand), wird der Inhalt als eine einzelne Spalte ohne Spaltenabstand angezeigt.

### Höhenausgleich

CSS-Spalten erfordern, dass die Spaltenhöhen ausgeglichen werden: Das heißt, der Browser legt automatisch die maximale Spaltenhöhe so fest, dass die Höhen des Inhalts in jeder Spalte ungefähr gleich sind. Firefox tut dies.

In einigen Situationen ist es jedoch auch nützlich, die maximale Höhe der Spalten explizit festzulegen und dann den Inhalt von der ersten Spalte ausgehend zu layouten, wobei so viele Spalten wie nötig erstellt werden, möglicherweise überlaufend nach rechts. Wenn also die Höhe eingeschränkt ist, indem die CSS-Eigenschaften {{cssxref("height")}} oder {{cssxref("max-height")}} auf einem mehrspaltigen Block gesetzt werden, darf jede Spalte bis zu dieser Höhe wachsen und nicht weiter, bevor eine neue Spalte hinzugefügt wird. Dieser Modus ist auch viel effizienter für Layout.

### Spaltenabstände

Es gibt einen Abstand zwischen den Spalten. Die empfohlene Standardeinstellung ist `1em`. Diese Größe kann geändert werden, indem die Eigenschaft {{cssxref("column-gap")}} auf den mehrspaltigen Block angewendet wird:

## Beispiel 6

### HTML

```html
<div id="column_gap">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</div>
```

### CSS

```css
#column_gap {
  column-count: 5;
  column-gap: 2em;
}
```

### Ergebnis

{{EmbedLiveSample("Example_6", "100%")}}

## Fazit

CSS-Spalten sind ein Layout-Primitiv, das dazu beitragen kann, große Textblöcke leichter lesbar zu machen, wenn responsiver Inhalt auf breiten Ansichtsfenstern betrachtet wird. Kreative Entwickler können viele Verwendungen dafür finden, insbesondere in Kombination mit [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) und mit der automatischen Höhenausgleichsfunktion.
