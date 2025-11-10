---
title: Verwendung von Layouts mit mehreren Spalten
slug: Web/CSS/Guides/Multicol_layout/Using
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die im **CSS Multi-Column Layout Modul** definierten Eigenschaften erweitern den _Block-Layout-Modus_ und ermöglichen die einfache Definition mehrerer Textspalten. Menschen haben Schwierigkeiten beim Lesen von Texten, wenn die Zeilen zu lang sind. Wenn es zu lange dauert, bis die Augen vom Ende einer Zeile zum Anfang der nächsten Zeile wechseln, können Leser den Überblick verlieren, in welcher Zeile sie waren. Um eine bessere Benutzererfahrung beim Lesen von Texten auf einem großen Bildschirm zu bieten, sollten Sie die Breite des Textes durch die Verwendung von nebeneinander angeordneten Textspalten beschränken, ähnlich wie Zeitungslayouts.

## Verwendung von Spalten

### Spaltenanzahl und -breite

Zwei CSS-Eigenschaften steuern, ob und wie viele Spalten angezeigt werden: {{cssxref("column-count")}} und {{cssxref("column-width")}}.

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

Die Eigenschaft `column-width` legt die gewünschte Mindestbreite der Spalten fest. Wenn `column-count` nicht ebenfalls gesetzt ist, erstellt der Browser automatisch so viele Spalten, wie in die verfügbare Breite passen.

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

In einem Multi-Column-Block fließt der Inhalt nach Bedarf automatisch von einer Spalte in die nächste. Alle HTML-, CSS- und DOM-Funktionalitäten werden innerhalb von Spalten unterstützt, ebenso wie das Bearbeiten und Drucken.

### Die Kurzschreibweise für Spalten

Sie können entweder {{cssxref("column-count")}} oder {{cssxref("column-width")}} verwenden. Da die Werte dieser Eigenschaften nicht überlappen, ist es oft praktisch, die Kurzschreibweise {{cssxref("columns")}} zu verwenden.

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

Die beiden CSS-Deklarationen `column-width: 8em` und `column-count: 12` können durch `columns: 12 8em` ersetzt werden. Der `column-count`-Teil der Kurzschreibweise gibt die maximale Anzahl an Spalten an, die vorhanden sein werden. Die `column-width` ist die Mindestbreite, die jede Spalte haben sollte.

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

Bei einer standardmäßigen `1em` Lücke zwischen den Spalten, gibt es 12 Spalten mit jeweils `8ems` Breite oder mehr, wenn der Container breiter als `103ems` ist (12 Spalten \* `8em` Breite + 7 `1em` Lücken). Wenn der Container weniger als `103ems` Breite aufweist, gibt es weniger als 12 Spalten. Ist der Container weniger als `17ems` breit (`8em` Spalte + `8em` Spalte + `1em` Lücke), wird der Inhalt als eine einzelne Spalte ohne Spaltenlücke angezeigt.

### Höhenausgleich

CSS-Spalten erfordern, dass die Spaltenhöhen ausgeglichen sein müssen: Das bedeutet, der Browser setzt automatisch die maximale Spaltenhöhe so, dass die Höhen des Inhalts in jeder Spalte annähernd gleich sind. Firefox tut dies.

In einigen Situationen ist es jedoch auch nützlich, die maximale Höhe der Spalten explizit festzulegen und dann den Inhalt in der ersten Spalte zu beginnen und so viele Spalten wie nötig zu erstellen, möglicherweise nach rechts überlaufend. Wenn die Höhe durch die CSS-Eigenschaften {{cssxref("height")}} oder {{cssxref("max-height")}} in einem Multi-Column-Block eingeschränkt ist, darf jede Spalte bis zu dieser Höhe wachsen und nicht weiter, bevor eine neue Spalte hinzugefügt wird. Dieser Modus ist auch weitaus effizienter für das Layout.

### Spaltenlücken

Zwischen den Spalten gibt es eine Lücke. Der empfohlene Standard ist `1em`. Diese Größe kann geändert werden, indem die Eigenschaft {{cssxref("column-gap")}} auf den Multi-Column-Block angewendet wird:

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

CSS-Spalten sind ein Layout-Primitiv, das helfen kann, große Textblöcke leichter lesbar zu machen, wenn responsiver Inhalt auf breiten Ansichtsfeldern angesehen wird. Kreative Entwickler können viele Verwendungsmöglichkeiten dafür finden, insbesondere in Verbindung mit [Container-Queries](/de/docs/Web/CSS/Guides/Containment/Container_queries) und mit der automatischen Höhenausgleichsfunktion.
