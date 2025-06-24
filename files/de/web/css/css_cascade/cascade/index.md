---
title: Einführung in die CSS-Kaskade
short-title: Introduction
slug: Web/CSS/CSS_cascade/Cascade
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{CSSRef}}

Die **Kaskade** ist ein Algorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte aus verschiedenen Quellen kombinieren. Die Kaskade definiert den Ursprung und die Ebene, die Vorrang hat, wenn Deklarationen in mehr als einem [Ursprung](#ursprungstypen), [Kaskadenschicht](/de/docs/Web/CSS/@layer) oder einem {{CSSxRef("@scope")}}-Block einen Wert für eine Eigenschaft an einem Element festlegen.

Die Kaskade liegt im Kern von CSS, wie der Name betont: _**Cascading**_ Style Sheets. Wenn ein [Selektor](/de/docs/Web/CSS/CSS_selectors) mit einem Element übereinstimmt, wird der Eigenschaftswert aus dem Ursprung mit der höchsten Priorität angewendet, selbst wenn der Selektor aus einem Ursprung oder einer Ebene mit niedrigerer Priorität eine größere [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) hat.

Dieser Artikel erklärt, was die Kaskade ist und in welcher Reihenfolge {{Glossary("CSS", "CSS")}}-[Deklarationen](/de/docs/Web/API/CSSStyleDeclaration) kaskadieren, und deckt Kaskadenschichten und Ursprungstypen ab. Das Verständnis der Priorität des Ursprungs ist der Schlüssel zum Verständnis der Kaskade.

## Ursprungstypen

Die Aufgabe des CSS-Kaskade-Algorithmus besteht darin, CSS-Deklarationen auszuwählen, um die korrekten Werte für CSS-Eigenschaften zu bestimmen. CSS-Deklarationen stammen aus verschiedenen Ursprungstypen: **[Benutzeragenten-Stilblätter](#benutzeragenten-stilblätter)**, **[Autor-Stilblätter](#autor-stilblätter)** und **[Benutzer-Stilblätter](#benutzer-stilblätter)**.

Obwohl Stilblätter aus diesen verschiedenen Ursprüngen stammen und sich innerhalb verschiedener [Ebenen](/de/docs/Web/CSS/@layer) in jedem dieser Ursprünge befinden können, überschneiden sie sich in Bezug auf ihren Standardscope. Der Kaskade-Algorithmus definiert, wie sie interagieren. Bevor wir auf die Interaktionen eingehen, definieren wir in den nächsten Abschnitten einige Schlüsselbegriffe.

### Benutzeragenten-Stilblätter

Benutzeragenten oder Browser haben grundlegende Stilblätter, die jedem Dokument Standardstile geben. Diese Stilblätter werden **Benutzeragenten-Stilblätter** genannt. Die meisten Browser verwenden für diesen Zweck tatsächliche Stilblätter, während andere sie im Code simulieren. Das Endergebnis ist dasselbe.

Einige Browser erlauben es Benutzern, das Benutzeragenten-Stilblatt zu ändern, aber das ist selten und nicht steuerbar.

Obwohl einige Einschränkungen an Benutzeragenten-Stilblätter durch die HTML-Spezifikation festgelegt sind, haben Browser viel Spielraum, was bedeutet, dass es einige Unterschiede zwischen den Browsern gibt. Um den Entwicklungsprozess zu vereinfachen, verwenden Webentwickler möglicherweise ein CSS-Reset-Stilblatt wie [normalize.css](https://github.com/necolas/normalize.css), das Common-Property-Werte für alle Browser vorab auf einen bekannten Zustand setzt, bevor Anpassungen vorgenommen werden, um spezifischen Bedürfnissen gerecht zu werden.

Sofern das Benutzeragenten-Stilblatt kein [`!important`](/de/docs/Web/CSS/CSS_cascade/Specificity#the_!important_exception) neben einer Eigenschaft enthält, das sie als "wichtig" markiert, haben von Autoren deklarierte Stile, einschließlich eines Reset-Stilblatts, Vorrang vor den Benutzeragenten-Stilen, unabhängig von der Spezifität des zugehörigen Selektors.

### Autor-Stilblätter

**Autor-Stilblätter** sind der häufigste Stilblatt-Typ; dies sind die Stile, die von Webentwicklern geschrieben werden. Diese Stile können Benutzeragenten-Stile zurücksetzen, wie oben erwähnt, und die Stile für das Design einer bestimmten Webseite oder Anwendung definieren. Der Autor oder Webentwickler definiert die Stile für das Dokument mithilfe eines oder mehrerer verlinkter oder importierter Stilblätter, {{HTMLElement('style')}}-Blöcke und Inline-Stile, die mit dem [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut definiert sind. Diese Autor-Stile bestimmen das Aussehen und das Gefühl der Website — ihr Thema.

### Benutzer-Stilblätter

In den meisten Browsern kann der Benutzer (oder Leser) der Website wählen, Stile durch ein benutzerdefiniertes **Benutzer-Stilblatt** zu überschreiben, das darauf ausgelegt ist, das Erlebnis auf die Wünsche des Benutzers abzustimmen. Abhängig vom Benutzeragenten können [Benutzerstile konfiguriert werden](https://www.thoughtco.com/user-style-sheet-3469931) oder über Browsererweiterungen hinzugefügt werden.

### Kaskadenschichten

Die Kaskadenreihenfolge basiert auf dem Ursprungstyp. Die Kaskade innerhalb jedes Ursprungstyps basiert auf der Deklarationsreihenfolge der [Kaskadenschichten](/de/docs/Web/CSS/@layer) innerhalb dieses Typs. Für alle Ursprünge - Benutzeragenten, Autor oder Benutzer - können Stile innerhalb oder außerhalb von benannten oder anonymen Schichten deklariert werden. Wenn Stile mit [`layer`, `layer()`](/de/docs/Web/CSS/@import) oder [`@layer`](/de/docs/Web/CSS/@layer) deklariert werden, werden sie in die angegebene benannte Schicht oder in eine anonyme Schicht eingeordnet, wenn kein Name angegeben wird. Stile, die außerhalb einer Schicht deklariert sind, werden als Teil einer anonymen zuletzt deklarierten Schicht behandelt.

Lassen Sie uns die kaskadierenden Ursprungstypen betrachten, bevor wir in die Kaskadenschichten innerhalb jedes Ursprungstyps eintauchen.

## Kaskadenordnung

Der Kaskadenalgorithmus bestimmt, wie für jede Eigenschaft eines jeden Dokumentelements der anzuwendende Wert gefunden wird. Die folgenden Schritte gelten für den Kaskadenalgorithmus:

1. **Relevanz**: Zuerst filtert er alle Regeln aus den verschiedenen Quellen, um nur die beizubehalten, die auf ein gegebenes Element angewendet werden. Das bedeutet Regeln, deren Selektor dem gegebenen Element entspricht und die Teil einer geeigneten `media`-@rule sind.
2. **Ursprung und Wichtigkeit**: Dann sortiert er diese Regeln entsprechend ihrer Wichtigkeit, das heißt, ob sie von `!important` gefolgt sind oder nicht, und nach ihrem Ursprung. Ignoriert man vorerst die Schichten, ist die Kaskadenreihenfolge wie folgt:

   | Vorrangiger Ordnung (niedrig bis hoch) | Ursprung                | Wichtigkeit  |
   | -------------------------------------- | ----------------------- | ------------ |
   | 1                                      | Benutzeragent (Browser) | normal       |
   | 2                                      | Benutzer                | normal       |
   | 3                                      | Autor (Entwickler)      | normal       |
   | 4                                      | CSS-Animationsfolgen    |              |
   | 5                                      | Autor (Entwickler)      | `!important` |
   | 6                                      | Benutzer                | `!important` |
   | 7                                      | Benutzeragent (Browser) | `!important` |
   | 8                                      | CSS-Übergänge           |              |

3. **Spezifität**: Bei Gleichheit mit einem Ursprung wird die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) einer Regel herangezogen, um einen Wert gegenüber einem anderen zu wählen. Die Spezifität der Selektoren wird verglichen und die Deklaration mit der höchsten Spezifität gewinnt.
4. **Nähe zur Scope-Hierarchie**: Wenn zwei Selektoren in der Ursprungsschicht mit Vorrang die gleiche Spezifität haben, gewinnt der Eigenschaftswert innerhalb der bereichsbezogenen Regeln mit der geringsten Anzahl an Hops in der DOM-Hierarchie bis zur Root-Ebene. Weitere Details und ein Beispiel finden Sie unter [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved).
5. **Erscheinungsreihenfolge**: Imjenigen Ursprung mit Vorrang, wenn es konkurrierende Werte für eine Eigenschaft in Stilblöcken mit Selektoren gleicher Spezifität und Bereichsnähe gibt, wird die letzte Deklaration in der Stilreihenfolge angewendet.

Die Kaskade ist in aufsteigender Reihenfolge, das bedeutet:

- Animationen haben Vorrang über normale Werte, unabhängig davon, ob sie in Benutzer-, Autoren- oder Agentenstilen deklariert sind.
- Wichtige Werte haben Vorrang über Animationen, unabhängig davon, ob sie in Benutzer-, Autoren- oder Agentenstilen deklariert sind.
- Übergänge haben Vorrang gegenüber wichtigen Werten.

> [!NOTE] > **Übergänge und Animationen**
>
> Eigenschaftswerte, die von Animationen mit {{cssxref('@keyframes')}} festgelegt werden, sind wichtiger als alle normalen Stile (diejenigen ohne [`!important`](/de/docs/Web/CSS/CSS_cascade/Specificity#the_!important_exception) Einstellung).
>
> Eigenschaftswerte, die in einem {{cssxref('transition')}} festgelegt werden, haben Vorrang vor allen anderen Werten, selbst vor denen, die mit `!important` markiert sind.

Der Kaskadenalgorithmus wird _vor_ dem Spezifitätsalgorithmus angewendet, das bedeutet, wenn `:root p { color: red;}` im Benutzerstilblatt (Reihe 2) deklariert ist und ein weniger spezifisches `p {color: blue;}` im Autorenstilblatt (Reihe 3) enthalten ist, werden die Absätze blau.

## Einfaches Beispiel

Bevor wir uns eingehender damit befassen, wie sich Kaskadenschichten auf die Kaskade auswirken, sehen wir uns ein Beispiel mit mehreren Quellen von CSS aus den verschiedenen Ursprüngen an und arbeiten die Schritte des Kaskadenalgorithmus durch:

Hier haben wir ein Benutzeragenten-Stilblatt, zwei Autoren-Stilblätter und ein Benutzer-Stilblatt, ohne Inline-Stile im HTML:

**Benutzeragenten-CSS:**

```css
li {
  margin-left: 10px;
}
```

**Autoren-CSS 1:**

```css
li {
  margin-left: 0;
} /* This is a reset */
```

**Autoren-CSS 2:**

```css
@media screen {
  li {
    margin-left: 3px;
  }
}

@media print {
  li {
    margin-left: 1px;
  }
}

@layer namedLayer {
  li {
    margin-left: 5px;
  }
}
```

**Benutzer-CSS:**

```css
.specific {
  margin-left: 1em;
}
```

**HTML:**

```html
<ul>
  <li class="specific">1<sup>st</sup></li>
  <li>2<sup>nd</sup></li>
</ul>
```

In diesem Fall sollten Deklarationen in `li` und `.specific`-Regeln angewendet werden.

Wie bereits erwähnt, gibt es fünf Schritte im Kaskadenalgorithmus, in Reihenfolge:

1. Relevanz
2. Ursprung und Wichtigkeit
3. Spezifität
4. Näher zur Scope-Hierarchie
5. Erscheinungsreihenfolge

Der `1px` ist für Printmedien. Aufgrund fehlender _Relevanz_ basierend auf seinem Medientyp wird es aus der Überlegung entfernt.

Keine Deklaration ist als `!important` markiert, sodass die Vorrangordnung Autoren-Stilblätter über Benutzer-Stilblätter über das Benutzeragenten-Stilblatt ist. Basierend auf _Ursprung und Wichtigkeit_ werden das `1em` aus dem Benutzerstilblatt und das `10px` aus dem Benutzeragenten-Stilblatt aus der Überlegung entfernt.

Beachten Sie, dass auch wenn der Benutzerstil auf `.specific` von `1em` eine höhere Spezifität hat, es eine normale Deklaration in einem Benutzerstilblatt ist. Als solche hat es einen niedrigeren Vorrang als alle Autorenstile und wird durch den Schritt Ursprung und Wichtigkeit im Algorithmus entfernt, bevor die Spezifität überhaupt ins Spiel kommt.

Es gibt drei Deklarationen in Autoren-Stilblättern:

```css
li {
  margin-left: 0;
} /* from author css 1 */
```

```css
@media screen {
  li {
    margin-left: 3px;
  }
}
```

```css
@layer namedLayer {
  li {
    margin-left: 5px;
  }
}
```

Der letzte, das `5px`, ist Teil einer Kaskadenschicht. Normale Deklarationen in Schichten haben weniger Vorrang als normale Stile, die nicht in einer Schicht innerhalb des gleichen Ursprungstyps sind. Dies wird ebenfalls durch den Algorithmusschritt 2, _Ursprung und Wichtigkeit_, entfernt.

Dies lässt das `0` und das `3px` übrig, die beide denselben Selektor, also dieselbe _Spezifität_ haben. Keines von beiden sind in einem `@scope`-Block enthalten, sodass die Nähe zur Scope-Hierarchie in diesem Beispiel ebenfalls nicht ins Spiel kommt.

Wir schauen dann auf die _Erscheinungsreihenfolge_. Die zweite, die letzte der beiden ungeschichteten Autorenstile, gewinnt.

```css
margin-left: 3px;
```

> [!NOTE]
> Die Deklaration, die im Benutzer-CSS definiert ist, auch wenn sie eine größere Spezifität hat, wird nicht gewählt, da der Kaskadenalgorithmus _Ursprung und Wichtigkeit_ vor dem Spezifitätsalgorithmus angewendet wird. Die in einer Kaskadenschicht definierte Deklaration, obwohl sie möglicherweise später im Code vorkommt, wird ebenfalls keinen Vorrang haben, da normale Stile in Kaskadenschichten weniger Vorrang haben als normale ungeschichtete Stile. _Erscheinungsreihenfolge_ zählt nur, wenn sowohl Ursprung, Wichtigkeit als auch Spezifität gleich sind.

## Autoren-Stile: Inline-Stile, Schichten und Vorrang

Die [Tabelle im Abschnitt Kaskadenordnung](#kaskadenordnung) gibt einen Überblick über die Vorrangreihenfolge. Die Tabelle fasste die Benutzersettings, Benutzer- und Autoreneinstellungen in zwei Zeilen zusammen mit "Ursprungstyp - normal" und "Ursprungstyp - !important". Der Vorrang innerhalb jedes Ursprungstyps ist nuancierter. Stile können innerhalb von Schichten innerhalb ihres Ursprungstyps enthalten sein, und bei Autorenstilen gibt es auch das Problem, wo Inline-Stile in die Kaskadenreihenfolge fallen.

Die Reihenfolge, in der Schichten deklariert werden, ist wichtig für die Bestimmung des Vorrangs. Normale Stile in einer Schicht haben Vorrang gegenüber früher in der Reihenfolge deklarierten Schichten; normale Stile, die außerhalb einer Schicht deklariert sind, haben Vorrang gegenüber normalen geschichteten Stilen, unabhängig von der Spezifität.

In diesem Beispiel hat der Autor die {{CSSXref('@import')}}-Regel von CSS verwendet, um fünf externe Stilblätter innerhalb eines {{HTMLElement('style')}}-Informationsblocks zu importieren.

```html
<style>
  @import "unlayeredStyles.css";
  @import "AStyles.css" layer(A);
  @import "moreUnlayeredStyles.css";
  @import "BStyles.css" layer(B);
  @import "CStyles.css" layer(C);
  p {
    color: red;
    padding: 1em !important;
  }
</style>
```

und dann im Body des Dokuments haben wir Inline-Stile:

```html
<p style="line-height: 1.6em; text-decoration: overline !important;">Hello</p>
```

In dem obigen CSS-Codeblock wurden drei Kaskadenschichten namens "A", "B" und "C" erstellt, in dieser Reihenfolge. Drei Stilblätter wurden direkt in Schichten importiert und zwei wurden ohne Erstellen oder Zuweisen zu einer Schicht importiert.
Die "Alle ungeschichteten Stile" in der Liste unten (normaler Autorstil-Vorrang - Ordnung 4) umfassen Stile aus diesen beiden Stilblättern sowie die zusätzlichen ungeschichteten CSS-Stilblöcke. Zusätzlich gibt es zwei Inline-Stile, eine normale `line-height`-Deklaration und eine wichtige `text-decoration`-Deklaration:

| Vorrangige Ordnung (niedrig bis hoch) | Autorenstil                | Wichtigkeit  |
| ------------------------------------- | -------------------------- | ------------ |
| 1                                     | A - erste Schicht          | normal       |
| 2                                     | B - zweite Schicht         | normal       |
| 3                                     | C - letzte Schicht         | normal       |
| 4                                     | Alle ungeschichteten Stile | normal       |
| 5                                     | Inline `style`             | normal       |
| 6                                     | Animationen                |              |
| 7                                     | Alle ungeschichteten Stile | `!important` |
| 8                                     | C - letzte Schicht         | `!important` |
| 9                                     | B - zweite Schicht         | `!important` |
| 10                                    | A - erste Schicht          | `!important` |
| 11                                    | Inline `style`             | `!important` |
| 12                                    | Übergänge                  |              |

In allen Ursprungstypen haben normale Stile, die in Schichten enthalten sind, den niedrigsten Vorrang. In unserem Beispiel haben die normalen Stile der ersten deklarierten Schicht (A) weniger Vorrang als die normalen Stile der zweiten deklarierten Schicht (B), die weniger Vorrang haben als die normalen Stile der dritten deklarierten Schicht (C). Diese geschichteten Stile haben weniger Vorrang als alle normalen ungeschichteten Stile, die normale Stile von `ungeschichteteStile.css`, `mehrUngeschichteteStile.css` und die `color` von `p` im `<style>` selbst umfassen.

Wenn alle geschichteten Stile in A, B oder C Selektoren mit höherer Spezifität haben, die mit einem Element übereinstimmen, wie `:root body p { color: black; }`, spielt das keine Rolle. Diese Deklarationen werden aufgrund des _Ursprungs_ aus der Berücksichtigung entfernt; normale geschichtete Stile haben weniger Vorrang als normale ungeschichtete Stile. Wenn jedoch der spezifischere Selektor `:root body p { color: black; }` in `ungeschichteteStile.css` gefunden wird, da sowohl _Ursprung und Wichtigkeit_ denselben Vorrang haben, bedeutet _Spezifität_, dass die spezifischere schwarze Deklaration gewinnt.

Der Schicht-Vorrang ist umgekehrt für als `!important` deklarierte Stile. Wichtige Deklarationen, die außerhalb einer Schicht gefunden werden, haben weniger Vorrang als diejenigen, die als Teil einer Schicht deklariert sind. Wichtige Deklarationen, die in der ersten Schicht (A) vorkommen, haben Vorrang vor wichtigen Deklarationen, die in Schicht B vorkommen, und diese haben Vorrang vor wichtigen Deklarationen, die in Schicht C vorkommen, die wiederum Vorrang vor wichtigen Deklarationen haben, die außerhalb einer Schicht gefunden werden.

### Inline-Stile

Nur relevant für Autorenstile sind Inline-Stile, die mit dem `style`-Attribut deklariert werden. Normale Inline-Stile haben Vorrang vor allen anderen normalen Autorenstilen, unabhängig von der Spezifität des Selektors. Wenn `line-height: 2;` in einem `:root body p` Selektorblock in einem der fünf importierten Stilblätter deklariert würde, wäre die Zeilenhöhe immer noch `1.6`. Normale Inline-Stile haben keinen Vorrang vor animierten oder übergangenen Eigenschaften.

Wichtige Inline-Stile haben Vorrang vor allen anderen Autorenstilen, unabhängig davon, ob sie wichtig, inline oder in Schichten sind. Wichtige Inline-Stile haben auch Vorrang vor animierten Eigenschaften, jedoch nicht vor übergangenen Eigenschaften. Drei Dinge können einen wichtigen Inline-Stil überschreiben:

- Ein wichtiger Benutzerstil.
- Ein wichtiger Benutzeragenten-Stil.
- Eine übergangene Eigenschaft.

### Wichtigkeit und Schichten

Die Ursprungstyp-Vorrangsordnung ist für wichtige Stile umgekehrt. Wichtige Stile, die außerhalb aller Kaskadenschichten deklariert sind, haben weniger Vorrang als diejenigen, die als Teil einer Schicht deklariert sind. Wichtige Stile, die in frühen Schichten vorkommen, haben Vorrang vor wichtigen Stilen, die in nachfolgenden Kaskadenschichten deklariert sind.

Nehmen wir zum Beispiel das folgende CSS:

```css
p {
  color: red;
}

@layer B {
  :root p {
    color: blue;
  }
}
```

Auch wenn das Rot zuerst deklariert wird und einen weniger spezifischen Selektor hat, da ungeschichtetes CSS Vorrang gegenüber geschichtetem CSS hat, wird das Paragraph rot sein. Hätten wir einen Inline-Stil am Paragraph eingefügt, der ihn auf eine andere Farbe setzt, wie `<p style="color: black">`, würde das Paragraph schwarz sein.

Wenn wir `!important` zu diesem Stück CSS hinzufügen, wird die Vorrangsreihenfolge innerhalb des Stylesheets umgekehrt:

```css
p {
  color: red !important;
}

@layer B {
  :root p {
    color: blue !important;
  }
}
```

Nun wird das Paragraph blau sein. Das `!important` in der frühesten deklarierten Schicht hat Vorrang über nachfolgende Schichten und ungeschichtete wichtige Deklarationen. Wäre der Inline-Stil `!important` enthalten, wie z.B. `<p style="color: black !important">`, wäre das Paragraph wieder schwarz. Inline-Wichtigkeit hat Vorrang vor allen anderen Autoren-Deklarationen, unabhängig von der Spezifität.

> [!NOTE]
> Das Flag `!important` kehrt den Vorrang der Kaskadenschichten um. Aus diesem Grund versuchen Sie, `!important` nicht zu verwenden, um externe Stile zu überschreiben. Verwenden Sie stattdessen {{cssxref("@import")}} zusammen mit dem `layer` Schlüsselwort oder der `layer()` Funktion, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Schichten zu importieren. Das Importieren von Stylesheets in eine Schicht als erste Deklaration in Ihrem CSS mindert deren Vorrang, und von Autoren definierte Schichten, die später in Ihrem CSS definiert werden, haben einen höheren Vorrang. Das `!important` Flag sollte nur sparsam, wenn überhaupt, verwendet werden, um erforderliche Stile vor späteren Überschreibungen zu schützen, in der zuerst deklarierten Schicht.

Stile, die einen Übergang durchlaufen, haben Vorrang vor allen wichtigen Stilen, egal wer oder wie sie deklariert sind.

## Vollständige Kaskadenordnung

Jetzt, da wir ein besseres Verständnis der Vorrangreihenfolge des Ursprungstyps und der Kaskadenschicht haben, erkennen wir, dass die Tabelle in der [Kaskadenordnung](#kaskadenordnung) genauer durch die folgende Tabelle dargestellt werden könnte:

<table>
<thead>
  <tr><th>Vorrangige Ordnung <br/>(niedrig bis hoch)</th><th>Style-Origin</th><th>Wichtigkeit</th></tr>
</thead>
<tbody>
  <tr><td rowspan="3">1</td><td>Benutzeragent - erste deklarierte Schicht</td><td rowspan="3">normal</td></tr>
  <tr><td>Benutzeragent - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzeragent - ungeschichtete Stile</td></tr>
  <tr><td rowspan="3">2</td><td>Benutzer - erste deklarierte Schicht</td><td rowspan="3">normal</td></tr>
  <tr><td>Benutzer - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzer - ungeschichtete Stile</td></tr>
  <tr><td rowspan="4">3</td><td>Autor - erste deklarierte Schicht</td><td rowspan="4">normal</td></tr>
  <tr><td>Autor - letzte deklarierte Schicht</td></tr>
  <tr><td>Autor - ungeschichtete Stile</td></tr>
  <tr><td>Inline <code>style</code></td></tr>
  <tr><td>4</td><td>Animationen</td><td></td></tr>
  <tr><td rowspan="4">5</td><td>Autor - ungeschichtete Stile</td><td rowspan="4"><code>!important</code></td></tr>
  <tr><td>Autor - letzte deklarierte Schicht</td></tr>
  <tr><td>Autor - erste deklarierte Schicht</td></tr>
  <tr><td>Inline <code>style</code></td></tr>
  <tr><td rowspan="3">6</td><td>Benutzer - ungeschichtete Stile</td><td rowspan="3"><code>!important</td></tr>
  <tr><td>Benutzer - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzer - erste deklarierte Schicht</td></tr>
  <tr><td rowspan="3">7</td><td>Benutzeragent - ungeschichtete Stile</td><td rowspan="3"><code>!important</code></td></tr>
  <tr><td>Benutzeragent - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzeragent - erste deklarierte Schicht</td></tr>
  <tr><td>8</td><td>Übergänge</td><td></td></tr>
</tbody>
</table>

## Welche CSS-Entitäten nehmen in der Kaskade teil

Nur CSS-Eigenschaft/Wert-Paare nehmen an der Kaskade teil. CSS-@Rule-Deskriptoren nehmen nicht an der Kaskade teil, und HTML-Präsentationsattribute gehören nicht zur Kaskade.

### At-Rules

CSS-[At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule), die andere Entitäten als Deklarationen enthalten, wie eine {{cssxref("@font-face")}} Regel mit _Deskriptoren_, nehmen nicht an der Kaskade teil.

Im Allgemeinen nehmen die in At-Rules definierten Eigenschaften und Deskriptoren nicht an der Kaskade teil. Nur die At-Rules als Ganzes nehmen an der Kaskade teil. Zum Beispiel, innerhalb einer `@font-face` Regel, werden Schriftfamiliennamen durch [`font-family`](/de/docs/Web/CSS/@font-face/font-family) Deskriptoren identifiziert. Wenn mehrere `@font-face` Regeln mit demselben Deskriptor definiert sind, wird nur die am besten passende `@font-face` Regel als Ganzes in Betracht gezogen. Wenn mehr als eine gleich passend ist, werden die gesamten `@font-face` Deklarationen mit Schritten 1, 2 und 4 des Algorithmus verglichen (es gibt keine Spezifität hinsichtlich At-Rules).

Während die Deklarationen, die in den meisten At-Rules enthalten sind - wie diejenigen in {{cssxref("@media")}}, {{cssxref("@document")}}, oder {{cssxref("@supports")}} - an der Kaskade teilnehmen, kann die At-Rule dazu führen, dass ein gesamter Selektor nicht relevant ist, wie wir im [einfachen Beispiel](#einfaches_beispiel) mit dem Druckstil gesehen haben.

Deklarationen in {{cssxref("@keyframes")}} nehmen nicht an der Kaskade teil. Wie bei `@font-face`, wird nur das `@keyframes` als Ganzes über den Kaskadenalgorithmus ausgewählt. Die [Vorrangsreihenfolge von Animationen wird unten beschrieben](#css-animationen_und_die_kaskade).

Wenn es um {{cssxref("@import")}} geht, nimmt `@import` nicht selbst an der Kaskade teil, aber alle importierten Stile nehmen teil. Wenn `@import` eine [benannte oder anonyme Schicht](/de/docs/Web/CSS/@layer) definiert, werden die Inhalte des importierten Stylesheets in die angegebene Schicht platziert. Alle anderen mit `@import` importierten CSS werden als die letzte deklarierte Schicht behandelt. Dies wurde oben besprochen.

Schließlich gehorcht {{cssxref("@charset")}} spezifischen Algorithmen und wird nicht vom Kaskadenalgorithmus beeinflusst.

### Präsentationsattribute

Präsentationsattribute sind Attribute im Quelldokument, die das Styling beeinflussen können. Beispielsweise setzt das veraltete `align`-Attribut beim einfügen die Ausrichtung auf mehreren HTML-Elementen und das `fill`-Attribut definiert die Farbe, die zum Malen von SVG-Formen und Text verwendet wird und auch den Endzustand für SVG-Animationen. Obwohl es sich um Autorenstile handelt, nehmen Präsentationsattribute nicht an der Kaskade teil.

Wenn das HTML-Präsentationsattribut vom Benutzeragenten unterstützt wird, werden gültige Präsentationsattribute, die in HTML und SVG enthalten sind, wie das [`align`](/de/docs/Web/HTML/Reference/Elements/img#align) oder das [`fill`](/de/docs/Web/SVG/Reference/Attribute/fill) Attribut, in die entsprechenden CSS-Regeln übersetzt (alle SVG-Präsentationsattribute werden als CSS-Eigenschaften unterstützt) und vor allen anderen Stilen mit einer Spezifität von `0` in das Autorenstilblatt eingefügt.

Präsentationsattribute können nicht als `!important` deklariert werden.

## CSS-Animationen und die Kaskade

[CSS-Animationen](/de/docs/Web/CSS/CSS_animations), die {{cssxref("@keyframes")}} At-Rules verwenden, definieren Animationen zwischen Zuständen. `@keyframes` kaskadieren nicht, das bedeutet, dass zu einem bestimmten Zeitpunkt CSS nur Werte von einem einzigen Satz `@keyframes` nimmt und niemals mehrere mischt. Falls mehrere Sätze `@keyframes` mit demselben Animationsnamen definiert sind, wird der zuletzt definierte Satz im Ursprung und in der Schicht mit dem größten Vorrang verwendet. Andere `@keyframes` werden ignoriert, selbst wenn sie unterschiedliche Eigenschaften animieren.

```css
p {
  animation: infinite 5s alternate repeatedName;
}

@keyframes repeatedName {
  from {
    font-size: 1rem;
  }
  to {
    font-size: 3rem;
  }
}

@layer A {
  @keyframes repeatedName {
    from {
      background-color: yellow;
    }
    to {
      background-color: orange;
    }
  }
}

@layer B {
  @keyframes repeatedName {
    from {
      color: white;
    }
    to {
      color: black;
    }
  }
}
```

In diesem Beispiel gibt es drei separate Animationsdeklarationen mit dem Namen `repeatedName`. Wenn `animation: infinite 5s alternate repeatedName` auf den Absatz angewendet wird, wird nur eine Animation angewendet: die in dem ungeschichteten CSS definierte Keyframe-Animation hat aufgrund der Vorrangsreihenfolge von Ursprung und Schicht Vorrang. In diesem Beispiel wird nur die Schriftgröße des Elements animiert.

> [!NOTE]
> Es gibt keine wichtigen Animationen, da Eigenschaftsdeklarationen in einem {{cssxref('@keyframes')}} block, die `!important` als Teil des Wertes enthalten, ignoriert werden.

## Zurücksetzen von Stilen

Nachdem Ihr Inhalt mit dem Ändern von Stilen fertig ist, kann sich herausstellen, dass er sie in einen bekannten Zustand zurücksetzen muss. Dies kann in Fällen von Animationen, Themenänderungen usw. geschehen. Die CSS-Eigenschaft {{cssxref("all")}} ermöglicht es Ihnen, (fast) alles in CSS schnell in einen bekannten Zustand zurückzusetzen.

`all` ermöglicht es Ihnen, sofort alle Eigenschaften auf einen ihrer anfänglichen (Standard-)Zustände zurückzusetzen, den Zustand, der von der vorherigen Kaskadenebene übernommen wurde, einem bestimmten Ursprung (das Benutzeragenten-Stilblatt, das Autoren-Stilblatt oder das Benutzer-Stilblatt) oder sogar die Werte der Eigenschaften vollständig zu löschen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Initial](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechnet](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [verwendet](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value), und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte.
