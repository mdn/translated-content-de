---
title: Verwendung von mehrspaltigen Layouts
slug: Web/CSS/Guides/Multicol_layout/Using
l10n:
  sourceCommit: 32bdfdb82cf91ce9942b694286dec62be2cc20aa
---

Die im **CSS multi-column layout module** definierten Eigenschaften erweitern den _Block Layout-Mode_ und ermöglichen die Definition mehrerer Textspalten. Menschen haben Schwierigkeiten, Text zu lesen, wenn die Zeilen zu lang sind. Wenn es zu lange dauert, bis das Auge vom Ende einer Zeile zum Anfang der nächsten Zeile wechselt, können die Leser den Überblick darüber verlieren, in welcher Zeile sie sich befanden. Um eine bessere Benutzererfahrung beim Lesen von Text auf einem großen Bildschirm zu gewährleisten, sollten Sie die Breite des Textes begrenzen, indem Sie Spalten nebeneinander verwenden, so wie es Zeitungen tun.

## Verwendung von Spalten

### Spaltenanzahl und -breite

Zwei CSS-Eigenschaften steuern, ob und wie viele Spalten erscheinen: {{cssxref("column-count")}} und {{cssxref("column-width")}}.

Die `column-count`-Eigenschaft legt die Anzahl der Spalten auf eine bestimmte Zahl fest. Z.B.,

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

Die `column-width`-Eigenschaft legt die gewünschte Minimalbreite der Spalten fest. Wenn `column-count` nicht ebenfalls gesetzt ist, erstellt der Browser automatisch so viele Spalten, wie in der verfügbaren Breite Platz finden.

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

In einem mehrspaltigen Block fließt der Inhalt automatisch von einer Spalte zur nächsten, wenn nötig. Alle HTML-, CSS- und DOM-Funktionalitäten werden innerhalb der Spalten unterstützt, ebenso wie das Bearbeiten und Drucken.

### Die Spaltenabkürzung

Sie können entweder {{cssxref("column-count")}} oder {{cssxref("column-width")}} verwenden. Da sich die Werte dieser Eigenschaften nicht überschneiden, ist es oft praktisch, die Abkürzung {{cssxref("columns")}} zu verwenden.

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

Die beiden CSS-Deklarationen `column-width: 8em` und `column-count: 12` können durch `columns: 12 8em` ersetzt werden. Der `column-count`-Teil der Abkürzung ist die maximale Anzahl an Spalten, die vorhanden sein werden. Die `column-width` ist die minimale Breite, die jede Spalte haben sollte.

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

Angenommen, es gibt einen Standardabstand von `1em` zwischen den Spalten, wenn das Container breiter als `103ems` ist (12 Spalten \* `8em` Breite jede + 7 `1em` Abstände), wird es 12 Spalten geben, jede mit einer Breite von `8ems` oder mehr. Wenn das Container weniger als `103ems` breit ist, wird es weniger als 12 Spalten geben. Wenn das Container weniger als `17ems` breit ist (`8em` Spalte + `8em` Spalte + `1em` Abstand), wird der Inhalt als eine einzelne Spalte ohne Spaltenabstand angezeigt.

### Höhenausgleich

CSS-Spalten erfordern, dass die Spaltenhöhen ausgeglichen sind: Das heißt, der Browser legt die maximale Spaltenhöhe automatisch so fest, dass die Höhen des Inhalts in jeder Spalte etwa gleich sind. Firefox tut dies.

In einigen Situationen ist es jedoch auch nützlich, die maximale Höhe der Spalten explizit festzulegen und dann den Inhalt beginnend in der ersten Spalte anzuordnen und so viele Spalten wie nötig zu erstellen, möglicherweise mit Überlauf nach rechts. Daher, wenn die Höhe eingeschränkt ist, indem man die CSS-Eigenschaften {{cssxref("height")}} oder {{cssxref("max-height")}} auf einem mehrspaltigen Block setzt, darf jede Spalte bis zu dieser Höhe wachsen und nicht weiter, bevor eine neue Spalte hinzugefügt wird. Dieser Modus ist auch viel effizienter für das Layout.

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

CSS-Spalten sind ein Layout-Primitiv, das helfen kann, große Textblöcke leichter lesbar zu machen, wenn responsiver Inhalt auf breiten Ansichten betrachtet wird. Einfallsreiche Entwickler können viele Anwendungen dafür finden, insbesondere in Verbindung mit [Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries) und der automatischen Höhenausgleichsfunktion.
