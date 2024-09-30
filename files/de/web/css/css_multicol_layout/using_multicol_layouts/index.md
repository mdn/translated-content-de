---
title: Verwendung von Multi-Column-Layouts
slug: Web/CSS/CSS_multicol_layout/Using_multicol_layouts
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die im **CSS-Multi-Column-Layout-Modul** definierten Eigenschaften erweitern den _Block-Layout-Modus_ und ermöglichen die einfache Definition von mehreren Textspalten. Menschen haben Schwierigkeiten, Text zu lesen, wenn die Zeilen zu lang sind. Wenn es zu lange dauert, bis die Augen von einem Zeilenende zum Anfang der nächsten Zeile springen, können Leser den Überblick verlieren, wo sie gerade waren. Um eine bessere Benutzererfahrung beim Lesen von Text auf einem großen Bildschirm zu bieten, sollten Sie die Breite des Textes begrenzen, indem Sie nebeneinanderliegende Textspalten verwenden, wie es Zeitungen tun.

## Verwendung von Spalten

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

Die Eigenschaft `column-width` legt die gewünschte Mindestbreite einer Spalte fest. Wenn `column-count` nicht ebenfalls festgelegt ist, erstellt der Browser automatisch so viele Spalten, wie in die verfügbare Breite passen.

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

In einem Multi-Column-Block fließt der Inhalt bei Bedarf automatisch von einer Spalte in die nächste. Alle HTML-, CSS- und DOM-Funktionen werden innerhalb von Spalten unterstützt, ebenso wie Bearbeitung und Drucken.

### Das Spalten-Kurzform

Sie können entweder {{cssxref("column-count")}} oder {{cssxref("column-width")}} verwenden. Da sich die Werte für diese Eigenschaften nicht überschneiden, ist es oft bequem, die Kurzform {{cssxref("columns")}} zu nutzen.

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

Die beiden CSS-Deklarationen `column-width: 8em` und `column-count: 12` können durch `columns: 12 8em` ersetzt werden. Der `column-count`-Teil der Kurzform ist die maximale Anzahl von Spalten, die vorhanden sein werden. Die `column-width` ist die Mindestbreite, die jede Spalte haben sollte.

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

Angenommen, es gibt einen Standardabstand von `1em` zwischen den Spalten, dann wird es 12 Spalten mit einer Breite von jeweils `8em` oder mehr geben, wenn das Container breiter ist als `103ems` (12 Spalten \* `8em` Breite + 7 `1em` Abstände). Wenn das Container schmaler als `103ems` ist, wird es weniger als 12 Spalten geben. Wenn der Container weniger als `17ems` breit ist (`8em` Spalte + `8em` Spalte + `1em` Abstand), wird der Inhalt als eine einzelne Spalte ohne Spaltenabstand dargestellt.

### Höhenbalancierung

CSS-Spalten erfordern, dass die Spaltenhöhen ausgeglichen werden: das heißt, der Browser stellt die maximale Spaltenhöhe so ein, dass die Höhen des Inhalts in jeder Spalte ungefähr gleich sind. Firefox macht dies.

In einigen Situationen ist es jedoch auch nützlich, die maximale Höhe der Spalten explizit festzusetzen und den Inhalt beginnend mit der ersten Spalte und so viele Spalten wie nötig zu erstellen, eventuell überlaufend nach rechts. Wenn die Höhe eingeschränkt ist, indem die CSS-Eigenschaften {{cssxref("height")}} oder {{cssxref("max-height")}} auf einem Multi-Column-Block festgelegt werden, darf jede Spalte bis zu dieser Höhe wachsen und nicht weiter, bevor eine neue Spalte hinzugefügt wird. Dieser Modus ist auch viel effizienter für das Layout.

### Spaltenabstände

Zwischen den Spalten gibt es einen Abstand. Der empfohlene Standardwert ist `1em`. Diese Größe kann geändert werden, indem die Eigenschaft {{cssxref("column-gap")}} auf den Multi-Column-Block angewendet wird:

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

## Schlussfolgerung

CSS-Spalten sind ein Layout-Grundelement, das helfen kann, große Textblöcke leichter lesbar zu machen, wenn responsiver Inhalt auf breiten Ansichtsfenstern betrachtet wird. Kreative Entwickler können viele Verwendungen dafür finden, insbesondere in Verbindung mit [Container-Queries](/de/docs/Web/CSS/CSS_containment/Container_queries) und der automatischen Höhenbalancierungsfunktion.
