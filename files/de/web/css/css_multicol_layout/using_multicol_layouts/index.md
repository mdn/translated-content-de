---
title: Verwendung von Mehrspaltenlayouts
slug: Web/CSS/CSS_multicol_layout/Using_multicol_layouts
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die im **CSS-Mehrspaltenlayout-Modul** definierten Eigenschaften erweitern den _Block-Layout-Modus_, wodurch die einfache Definition mehrerer Textspalten ermöglicht wird. Menschen haben Schwierigkeiten beim Lesen von Texten, wenn Zeilen zu lang sind. Wenn es zu lange dauert, bis die Augen vom Ende einer Zeile zum Anfang der nächsten Zeile gelangen, kann es passieren, dass die Leser die Übersicht verlieren, auf welcher Zeile sie sich befanden. Um eine bessere Benutzererfahrung beim Lesen von Texten auf einem großen Bildschirm zu bieten, sollten Sie die Breite des Textes begrenzen, indem Sie nebeneinander platzierte Textspalten verwenden, wie es Zeitungen tun.

## Verwendung von Spalten

### Spaltenanzahl und Breite

Zwei CSS-Eigenschaften steuern, ob und wie viele Spalten erscheinen: {{cssxref("column-count")}} und {{cssxref("column-width")}}.

Die Eigenschaft `column-count` legt die Anzahl der Spalten auf eine bestimmte Anzahl fest. Zum Beispiel:

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

Die Eigenschaft `column-width` legt die minimale gewünschte Spaltenbreite fest. Wenn `column-count` nicht ebenfalls festgelegt ist, erstellt der Browser automatisch so viele Spalten, wie in der verfügbaren Breite passen.

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

In einem mehrspaltigen Block fließt der Inhalt automatisch von einer Spalte in die nächste, wenn dies erforderlich ist. Alle HTML-, CSS- und DOM-Funktionalitäten werden innerhalb von Spalten unterstützt, ebenso wie Bearbeitung und Druck.

### Die Spalten-Kurzschrift

Sie können entweder {{cssxref("column-count")}} oder {{cssxref("column-width")}} verwenden. Da Werte für diese Eigenschaften sich nicht überschneiden, ist es oft bequem, die Kurzschrift {{cssxref("columns")}} zu verwenden.

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

Die beiden CSS-Deklarationen `column-width: 8em` und `column-count: 12` können durch `columns: 12 8em` ersetzt werden. Der `column-count` Teil der Kurzschrift gibt die maximale Anzahl der Spalten an, die vorhanden sein werden. Die `column-width` ist die Mindestbreite, die jede Spalte haben sollte.

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

Angenommen, ein standardmäßiger `1em` Abstand zwischen den Spalten wird verwendet, dann werden, wenn der Container breiter als `103ems` ist (12 Spalten \* `8em` Breite je Spalte + 7 `1em` Abstände), 12 Spalten vorhanden sein, jede mit einer Breite von `8ems` oder mehr. Wenn der Container weniger als `103ems` breit ist, gibt es weniger als 12 Spalten. Wenn der Container weniger als `17ems` breit ist (`8em` Spalte + `8em` Spalte + `1em` Abstand), wird der Inhalt als einzelne Spalte ohne Spaltenabstand angezeigt.

### Höhenbalancierung

CSS-Spalten erfordern, dass die Spaltenhöhen ausgeglichen werden müssen: Das heißt, der Browser setzt automatisch die maximale Spaltenhöhe so, dass die Höhen des Inhalts in jeder Spalte annähernd gleich sind. Firefox tut dies.

In einigen Situationen ist es jedoch auch hilfreich, die maximale Höhe der Spalten explizit festzulegen und dann den Inhalt von der ersten Spalte aus anzuordnen und so viele Spalten wie nötig zu erstellen, möglicherweise mit Überlauf nach rechts. Wenn die Höhe begrenzt ist, indem die CSS-Eigenschaften {{cssxref("height")}} oder {{cssxref("max-height")}} auf einen mehrspaltigen Block angewendet werden, darf jede Spalte bis zu dieser Höhe und nicht weiter wachsen, bevor eine neue Spalte hinzugefügt wird. Dieser Modus ist auch viel effizienter für das Layout.

### Spaltenabstände

Es gibt einen Abstand zwischen den Spalten. Der empfohlene Standard ist `1em`. Diese Größe kann geändert werden, indem die Eigenschaft {{cssxref("column-gap")}} auf den mehrspaltigen Block angewendet wird:

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

CSS-Spalten sind ein Layout-Primitiv, das helfen kann, große Textblöcke leichter lesbar zu machen, wenn responsive Inhalte auf großen Ansichtsbereichen betrachtet werden. Einfallsreiche Entwickler können viele Verwendungszwecke dafür finden, insbesondere in Verbindung mit [Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries) und der automatischen Höhenbalancierung.
