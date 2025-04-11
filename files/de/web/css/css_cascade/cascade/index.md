---
title: Einführung in den CSS-Cascade
slug: Web/CSS/CSS_cascade/Cascade
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Der **Cascade** ist ein Algorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte aus verschiedenen Quellen kombinieren. Die Cascade legt fest, welche Quelle und welche Ebene Vorrang hat, wenn in mehr als einem [Herkunftstyp](#ursprungstypen), [Cascadenschicht](/de/docs/Web/CSS/@layer) oder {{CSSxRef("@scope")}}-Block ein Wert für eine Eigenschaft an einem Element festgelegt wird.

Die Cascade bildet den Kern von CSS, was durch den Namen betont wird: _**Cascading**_ Style Sheets. Wenn ein [Selektor](/de/docs/Web/CSS/CSS_selectors) mit einem Element übereinstimmt, wird der Eigenschaftswert von der Quelle mit der höchsten Vorrangstufe übernommen, auch wenn der Selektor von einer Quelle oder Ebene mit niedrigerem Vorrang eine höhere [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) hat.

Dieser Artikel erklärt, was die Cascade ist und in welcher Reihenfolge {{Glossary("CSS", "CSS")}}-[Deklarationen](/de/docs/Web/API/CSSStyleDeclaration) kaskadiert werden, einschließlich Cascalagory Layers und Herkunftstypen. Das Verständnis der Herkunftsvorrangigkeit ist der Schlüssel zum Verständnis der Cascade.

## Ursprungstypen

Die Aufgabe des CSS-Cascade-Algorithmus ist es, CSS-Deklarationen auszuwählen, um die korrekten Werte für CSS-Eigenschaften zu bestimmen. CSS-Deklarationen stammen aus verschiedenen Ursprungstypen: **[Benutzeragenten-Stile]**(#benutzeragenten-stile), **[Autor-Stile]**(#autor-stile) und **[Benutzerstile]**(#benutzerstile).

Obwohl Stile aus diesen verschiedenen Ursprüngen stammen und sich innerhalb verschiedener [Schichten](/de/docs/Web/CSS/@layer) in jedem dieser Ursprünge befinden können, überschneiden sie sich in Bezug auf ihren standardmäßigen Anwendungsbereich; um dies zu ermöglichen, definiert der Cascade-Algorithmus, wie sie miteinander interagieren. Bevor wir auf die Interaktionen eingehen, werden wir in den nächsten Abschnitten einige Schlüsselbegriffe definieren.

### Benutzeragenten-Stile

Benutzeragenten, oder Browser, haben grundlegende Stylesheets, die jedem Dokument Standardstile geben. Diese Stylesheets werden als **Benutzeragenten-Stile** bezeichnet. Die meisten Browser verwenden dafür tatsächliche Stylesheets, während andere diese in Code simulieren. Das Endergebnis ist dasselbe.

Einige Browser erlauben es den Benutzern, das Benutzeragenten-Stylesheet zu ändern, aber dies ist selten und kann nicht gesteuert werden.

Obwohl einige Einschränkungen für Benutzeragenten-Styles von der HTML-Spezifikation festgelegt sind, haben Browser viel Spielraum: Das bedeutet, dass es einige Unterschiede zwischen den Browsern gibt. Um den Entwicklungsprozess zu vereinfachen, können Webentwickler ein CSS-Reset-Stylesheet verwenden, wie beispielsweise [normalize.css](https://github.com/necolas/normalize.css), welches gängige Eigenschaftswerte auf einen bekannten Zustand für alle Browser setzt, bevor Veränderungen vorgenommen werden, um ihren spezifischen Bedürfnissen zu entsprechen.

Solange das Benutzeragenten-Stylesheet kein [`!important`](/de/docs/Web/CSS/CSS_cascade/Specificity#the_!important_exception) neben einer Eigenschaft enthält, das es "wichtig" macht, haben vom Autor deklarierte Stile, einschließlich eines Reset-Stylesheets, Vorrang vor den Benutzeragenten-Stilen, unabhängig von der Spezifität des zugehörigen Selektors.

### Autor-Stile

**Autor-Stile** sind die gebräuchlichsten Stylesheets; diese Stile werden von Webentwicklern geschrieben. Diese Stile können Benutzeragenten-Stile zurücksetzen, wie oben erwähnt, und definieren die Stile für das Design einer gegebenen Webseite oder Anwendung. Der Autor, oder Webdesigner, definiert die Stile für das Dokument mit einem oder mehreren verlinkten oder importierten Stylesheets, {{HTMLElement('style')}}-Blöcken und Inline-Stilen, die mit dem[`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut definiert sind. Diese Autor-Stile definieren das Aussehen und die Atmosphäre der Website – ihr Thema.

### Benutzerstile

In den meisten Browsern kann der Benutzer (oder Leser) der Website die Stile mit einem benutzerdefinierten **Benutzer-Stylesheet** überschreiben, das entworfen wurde, um die Erfahrung an die Wünsche des Benutzers anzupassen. Abhängig vom Benutzeragenten können die [Benutzerstile konfiguriert werden](https://www.thoughtco.com/user-style-sheet-3469931) oder über Browsererweiterungen hinzugefügt werden.

### Cascadenschichten

Die Cascade-Ordnung basiert auf dem Ursprungstyp. Die Kaskade innerhalb jedes Ursprungstyps basiert auf der Deklarationsreihenfolge der [Cascadenschichten](/de/docs/Web/CSS/@layer) innerhalb dieses Typs. Für alle Ursprünge – Benutzeragent, Autor oder Benutzer – können Stile innerhalb oder außerhalb benannter oder anonymer Schichten deklariert werden. Wenn Stile mit [`layer`, `layer()`](/de/docs/Web/CSS/@import) oder [`@layer`](/de/docs/Web/CSS/@layer) deklariert werden, werden sie in die angegebene benannte Schicht platziert, oder in eine anonyme Schicht, wenn kein Name angegeben ist. Stile, die außerhalb einer Schicht deklariert werden, werden als Bestandteil einer zuletzt deklarierten anonymen Schicht behandelt.

Lassen Sie uns einen Blick auf den kaskadierenden Ursprungstyp werfen, bevor wir uns mit den Cascadenschichten innerhalb jedes Ursprungstyps befassen.

## Cascade-Reihenfolge

Der Cascade-Algorithmus bestimmt, wie der Wert ermittelt wird, der für jede Eigenschaft für jedes Dokumentelement angewendet werden soll. Die folgenden Schritte gelten für den Cascade-Algorithmus:

1. **Relevanz**: Es filtert zuerst alle Regeln aus den verschiedenen Quellen, um nur die Regeln zu behalten, die auf ein bestimmtes Element angewendet werden. Das bedeutet Regeln, deren Selektor mit dem gegebenen Element übereinstimmt und die Teil einer geeigneten `media`-At-Regel sind.
2. **Herkunft und Wichtigkeit**: Danach sortiert es diese Regeln nach ihrer Wichtigkeit, das heißt, ob sie von `!important` gefolgt werden oder nicht, und nach ihrer Herkunft. Wenn man Schichten im Moment ignoriert, ist die Cascade-Ordnung wie folgt:

   | Vorrangordnung (niedrig bis hoch) | Ursprung                       | Wichtigkeit  |
   | --------------------------------- | ------------------------------ | ------------ |
   | 1                                 | Benutzeragent (Browser)        | normal       |
   | 2                                 | Benutzer                       | normal       |
   | 3                                 | Autor (Entwickler)             | normal       |
   | 4                                 | CSS-Schlüsselframe-Animationen |              |
   | 5                                 | Autor (Entwickler)             | `!important` |
   | 6                                 | Benutzer                       | `!important` |
   | 7                                 | Benutzeragent (Browser)        | `!important` |
   | 8                                 | CSS-Übergänge                  |              |

3. **Spezifität**: Im Falle der Gleichheit mit einer Herkunft wird die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) einer Regel berücksichtigt, um einen Wert zu wählen. Die Spezifität der Selektoren wird verglichen, und die Deklaration mit der höchsten Spezifität gewinnt.
4. **Anwendungsbereich-Nähe**: Wenn zwei Selektoren in der Ursprungs-Schicht mit Vorrang die gleiche Spezifität haben, gewinnt der Eigenschaftswert innerhalb von eingeräumten Regeln mit der kleinsten Anzahl von Sprüngen entlang der DOM-Hierarchie zur Anwendungsbereich-Wurzel. Siehe [Resolution von @scope-Konflikten](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.
5. **Erscheinungsreihenfolge**: In der Ursprungs-Schicht mit Vorrang, wenn es konkurrierende Werte für eine Eigenschaft gibt, die in Stilblöcken befindliche Selektoren mit gleicher Spezifität und Anwendungsbereich-Nähe stimmen, wird die letzte Deklaration in der Stilordnung angewendet.

Die Cascade ist in aufsteigender Ordnung, was bedeutet:

- Animationen haben Vorrang vor normalen Werten, egal ob sie in Benutzer-, Autoren- oder Benutzeragenten-Stilen deklariert sind.
- Wichtige Werte haben Vorrang vor Animationen, egal ob sie in Benutzer-, Autoren- oder Benutzeragenten-Stilen deklariert sind.
- Übergänge haben Vorrang vor wichtigen Werten.

> **Hinweis:** **Übergänge und Animationen**
>
> Eigenschaftswerte, die durch {{cssxref('@keyframes')}} Animation gesetzt werden, sind wichtiger als alle normalen Stile (die ohne [`!important`](/de/docs/Web/CSS/CSS_cascade/Specificity#the_!important_exception) festgelegt werden).
>
> Eigenschaftswerte, die in einer {{cssxref('transition')}} festgelegt werden, haben Vorrang vor allen anderen gesetzten Werten, selbst wenn sie mit `!important` gekennzeichnet sind.

Der Cascade-Algorithmus wird _bevor_ der Spezifitätsalgorithmus angewendet, was bedeutet, dass wenn `:root p { color: red;}` in der Benutzer-Stylesheet (Zeile 2) deklariert ist und ein weniger spezifisches `p {color: blue;}` im Autor-Stylesheet (Zeile 3) enthalten ist, die Absätze blau sein werden.

## Einfaches Beispiel

Bevor wir uns eingehender damit befassen, wie Cascadenschichten die Kaskade beeinflussen, schauen wir uns ein Beispiel an, das mehrere Quellen von CSS über die verschiedenen Ursprünge hinweg umfasst, und arbeiten die Schritte des Cascade-Algorithmus durch:

Hier haben wir ein Benutzeragenten-Stylesheet, zwei Autor-Stylesheets und ein Benutzer-Stylesheet, ohne Inline-Stile innerhalb des HTML:

**Benutzeragenten-CSS:**

```css
li {
  margin-left: 10px;
}
```

**Autor-CSS 1:**

```css
li {
  margin-left: 0;
} /* This is a reset */
```

**Autor-CSS 2:**

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

In diesem Fall sollten Deklarationen innerhalb der `li`- und `.specific`-Regeln angewendet werden.

Wieder gibt es fünf Schritte im Cascade-Algorithmus, in Ordnung:

1. Relevanz
2. Herkunft und Wichtigkeit
3. Spezifität
4. Anwendungsbereich-Nähe
5. Erscheinungsreihenfolge

Das `1px` ist für Druckmedien. Aufgrund mangelnder _Relevanz_ basierend auf dem Medientyp wird es nicht berücksichtigt.

Keine Deklaration ist als `!important` gekennzeichnet, daher ist die Vorrangordnung Autor-Stylesheets vor Benutzer-Stylesheets vor Benutzeragenten-Stylesheet. Basierend auf _Herkunft und Wichtigkeit_ werden das `1em` vom Benutzer-Stylesheet und das `10px` vom Benutzeragenten-Stylesheet nicht berücksichtigt.

Beachten Sie, dass selbst wenn der Benutzerstil auf `.specific` von `1em` eine höhere Spezifität hat, es sich um eine normale Deklaration in einem Benutzer-Stylesheet handelt. Daher hat er einen niedrigeren Vorrang als alle Autor-Stile und wird durch den Herkunfts- und Wichtigkeitsschritt des Algorithmus entfernt, bevor die Spezifität ins Spiel kommt.

Es gibt drei Deklarationen in Autor-Stylesheets:

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

Das letzte davon, das `5px`, ist Teil einer Cascadenschicht. Normale Deklarationen in Schichten haben einen niedrigeren Vorrang als normale nicht geschichtete Stile innerhalb desselben Ursprungstyps. Dies wird auch in Schritt 2 des Algorithmus entfernt, _Herkunft und Wichtigkeit_.

Dies lässt das `0` und das `3px`, die beide denselben Selektor haben, daher dieselbe _Spezifität_. Keiner von ihnen befindet sich innerhalb eines `@scope`-Blocks, daher kommt die Anwendungsbereich-Nähe in diesem Beispiel ebenfalls nicht ins Spiel.

Dann schauen wir auf _Erscheinungsreihenfolge_. Die zweite, die letzte der beiden ungeschichteten Autor-Stile, gewinnt.

```css
margin-left: 3px;
```

> [!NOTE]
> Die in der Benutzer-CSS definierte Deklaration, obwohl sie eine höhere Spezifität haben mag, wird nicht ausgewählt, da der _Herkunft und Wichtigkeit_-Algorithmus der Cascade angewendet wird, bevor der Spezifizität-Algorithmus greift. Auch die in einer Cascadenschicht definierte Deklaration, obwohl sie später im Code erscheint, wird nicht im Vorrang stehen, da normale Stile in Cascadenschichten einen niedrigeren Vorrang haben als normale nicht geschichtete Stile. Die _Erscheinungsreihenfolge_ zählt nur, wenn Herkunft, Wichtigkeit und Spezifizität gleich sind.

## Autor-Stile: Inline-Stile, Schichten und Vorrangigkeit

Die [Tabelle in der Cascade-Reihenfolge](#cascade-reihenfolge) bietet einen Überblick über die Vorrangordnung. Die Tabelle fasst Benutzeragenten-, Benutzer- und Autoren-Ursprungstypen in je zwei Zeilen mit "Ursprungstyp - normal" und "Ursprungstyp - !important" zusammen. Die Vorrangigkeit innerhalb jedes Ursprungstyps ist nuancierter. Stile können innerhalb von Schichten innerhalb ihres Ursprungstyps enthalten sein, und bei Autor-Stilen gibt es auch die Frage, wo Inline-Stile in der Cascade-Ordnung landen.

Die Reihenfolge, in der Schichten deklariert sind, ist wichtig, um den Vorrang zu bestimmen. Normale Stile in einer Schicht haben Vorrang gegenüber Stilen, die in früheren Schichten deklariert sind; mit normalen Stilen, die außerhalb einer Schicht deklariert sind und Vorrang vor normalen geschichteten Stilen haben, unabhängig von der Spezifität.

In diesem Beispiel hat der Autor die {{CSSXref('@import')}}-Regel von CSS verwendet, um fünf externe Stylesheets innerhalb eines {{HTMLElement('style')}}-Informationselements zu importieren.

```html
<style>
  @import unlayeredStyles.css;
  @import AStyles.css layer(A);
  @import moreUnlayeredStyles.css;
  @import BStyles.css layer(B);
  @import CStyles.css layer(C);
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

Im obigen CSS-Codeblock wurden drei Cascadenschichten mit den Namen "A", "B" und "C" erstellt, in dieser Reihenfolge. Drei Stylesheets wurden direkt in Schichten importiert, und zwei wurden importiert, ohne eine Schicht zu erstellen oder zugewiesen zu werden.
Die "Alle ungeschichteten Stile" in der nachstehenden Liste (normale Autor-Style-Vorrangordnung – Reihenfolge 4) umfasst Stile aus diesen beiden Stylesheets und die zusätzlichen ungeschichteten CSS-Style-Blöcke. Zusätzlich gibt es zwei Inline-Stile, eine normale `line-height`-Deklaration und eine wichtige `text-decoration`-Deklaration:

| Vorrangordnung (niedrig bis hoch) | Autor-Stil                 | Wichtigkeit  |
| --------------------------------- | -------------------------- | ------------ |
| 1                                 | A - erste Schicht          | normal       |
| 2                                 | B - zweite Schicht         | normal       |
| 3                                 | C - letzte Schicht         | normal       |
| 4                                 | Alle ungeschichteten Stile | normal       |
| 5                                 | Inline `style`             | normal       |
| 6                                 | Animationen                |              |
| 7                                 | Alle ungeschichteten Stile | `!important` |
| 8                                 | C - letzte Schicht         | `!important` |
| 9                                 | B - zweite Schicht         | `!important` |
| 10                                | A - erste Schicht          | `!important` |
| 11                                | Inline `style`             | `!important` |
| 12                                | Übergänge                  |              |

In allen Ursprungstypen haben normale Stile, die in Schichten enthalten sind, den niedrigsten Vorrang. In unserem Beispiel haben die normalen Stile, die mit der ersten deklarierten Schicht (A) verbunden sind, einen niedrigeren Vorrang als normale Stile in der zweiten deklarierten Schicht (B), die wiederum einen niedrigeren Vorrang als normale Stile in der dritten deklarierten Schicht (C) haben. Diese geschichteten Stile haben einen niedrigeren Vorrang als alle normalen ungeschichteten Stile, die normale Stile aus `unlayeredStyles.css`, `moreUnlayeredStyles.css`, und die `color` der `p` im `<style>` selbst umfassen.

Wenn irgendwelche geschichteten Stile in A, B oder C Selektoren mit höherer Spezifität haben, die mit einem Element übereinstimmen, ähnlich wie `:root body p { color: black; }`, ist das irrelevant. Diese Deklarationen werden wegen des _Ursprungs_ aus der Betrachtung entfernt; normale geschichtete Stile haben einen niedrigeren Vorrang als normale ungeschichtete Stile. Wenn jedoch der spezifischere Selektor `:root body p { color: black; }` in `unlayeredStyles.css` gefunden würde, hätten sowohl _Ursprung und Wichtigkeit_ die gleiche Vorrangigkeit. _Spezifität_ würde bedeuten, dass die spezifischere, schwarze Deklaration gewinnen würde.

Die Schichtenvorrangordnung ist invertiert für als `!important` deklarierte Stile. Wichtige Deklarationen, die außerhalb jeder Cascadenschicht gefunden werden, haben einen niedrigeren Vorrang als diejenigen, die als Teil einer Schicht deklariert sind. Wichtige Deklarationen, die in der ersten Schicht (A) gefunden werden, haben Vorrang vor wichtigen Deklarationen, die in Schicht B deklariert sind, welche Vorrang vor wichtigen Deklarationen haben, die in Schicht C deklariert sind, welche wiederum Vorrang vor wichtigen Deklarationen haben, die außerhalb einer Schicht gefunden werden.

### Inline-Stile

Nur für Autor-Stile relevant sind Inline-Stile, die mit dem `style`-Attribut deklariert werden. Normale Inline-Stile haben Vorrang vor allen anderen normalen Autor-Stilen, unabhängig von der Spezifität des Selektors. Wenn `line-height: 2;` in einem `:root body p`-Selektorblock in einem der fünf importierten Stylesheets deklariert wäre, wäre die Zeilenhöhe dennoch `1.6`. Normale Inline-Stile haben keinen Vorrang vor animierten oder übergangenen Eigenschaften.

Wichtige Inline-Stile haben Vorrang vor allen anderen Autor-Stilen, unabhängig davon, ob sie wichtig, inline oder geschichtet sind. Wichtige Inline-Stile haben auch Vorrang vor animierten Eigenschaften, aber nicht vor übergangenen Eigenschaften. Drei Dinge können einen wichtigen Inline-Stil überschreiben:

- Ein wichtiger Benutzerstil.
- Ein wichtiger Benutzeragentenstil.
- Eine übergangene Eigenschaft.

### Wichtigkeit und Schichten

Die Ursprungsartvorrangordnung ist umgekehrt für wichtige Stile. Wichtige Stile, die außerhalb jeder Cascadenschicht deklariert sind, haben einen niedrigeren Vorrang als diejenigen, die als Teil einer Schicht deklariert sind. Wichtige Stile, die in frühen Schichten kommen, haben Vorrang vor wichtigen Stilen, die in nachfolgenden Cascadenschichten deklariert sind.

Nehmen Sie zum Beispiel das folgende CSS:

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

Selbst wenn das Rot zuerst deklariert ist und einen weniger spezifischen Selektor hat, weil ungeschichtetes CSS Vorrang vor geschichtetem CSS hat, wird der Absatz rot sein. Hätten wir jedoch einen Inline-Stil im Absatz eingefügt, welcher ihn auf eine andere Farbe setzt, etwa `<p style="color: black">`, würde der Absatz schwarz werden.

Wenn wir `!important` zu diesem Abschnitt von CSS hinzufügen, wird die Vorrangordnung innerhalb des Stylesheets umgekehrt:

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

Jetzt wird der Absatz blau. Das `!important` in der frühesten deklarierten Schicht hat Vorrang vor nachfolgenden Schichten und ungeschichteten wichtigen Deklarationen. Wenn der Inline-Stil `!important` enthält, wie `<p style="color: black !important">`, würde der Absatz erneut schwarz sein. Die Wichtigkeit von Inline-Stilen hat Vorrang vor allen anderen Autor-deklarierten `!important`-Deklarationen, unabhängig von der Spezifität.

> [!NOTE]
> Das `!important`-Flag kehrt den Vorrang der Cascadenschichten um. Aus diesem Grund sollten Sie versuchen, `!important` nicht zu verwenden, um externe Stile zu überschreiben. Stattdessen verwenden Sie {{cssxref("@import")}} zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Schichten zu importieren. Das Importieren von Stylesheets in eine Schicht als erste Deklaration in Ihrem CSS setzt deren Vorrang herab und von Autoren definierte Schichten, die später in Ihrem CSS definiert werden, haben einen höheren Vorrang. Das `!important`-Flag sollte nur sparsam, wenn überhaupt, verwendet werden, um erforderliche Stile gegen spätere Überschreibungen in der ersten deklarierten Schicht zu schützen.

Stile, die sich im Übergang befinden, haben Vorrang vor allen wichtigen Stilen, unabhängig davon, wer sie deklariert hat oder wie sie deklariert sind.

## Vollständige Cascade-Reihenfolge

Jetzt, da wir ein besseres Verständnis der Vorrangigkeit von Ursprungstyp und Cascadenschichten haben, erkennen wir, dass die Tabelle in der [Cascade-Reihenfolge](#cascade-reihenfolge) genauer durch die folgende Tabelle dargestellt werden könnte:

<table>
<thead>
  <tr><th>Vorrangordnungs <br/>(niedrig bis hoch)</th><th>Stilursprung</th><th>Wichtigkeit</th></tr>
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

## Welche CSS-Entitäten nehmen an der Cascade teil

Nur CSS-Propertie-/Wertpaar-Deklarationen nehmen an der Cascade teil. CSS-At-Regel-Deskriptoren nehmen nicht an der Cascade teil und HTML-Präsentationsattribute sind nicht Teil der Cascade.

### At-Regeln

CSS-[At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule), die andere Entitäten als Deklarationen enthalten, wie eine {{ cssxref("@font-face")}}-Regel mit _Deskriptoren_, nehmen nicht an der Cascade teil.

Zum größten Teil nehmen die in At-Regeln definierten Eigenschaften und Deskriptoren nicht an der Cascade teil. Nur gesamte At-Regeln nehmen an der Cascade teil. Zum Beispiel werden innerhalb einer `@font-face`-Regel Schriftartnamen durch [`font-family`](/de/docs/Web/CSS/@font-face/font-family)-Deskriptoren identifiziert. Wenn mehrere `@font-face`-Regeln mit demselben Deskriptor definiert sind, wird nur die geeignetste `@font-face`-Regel als Ganzes berücksichtigt. Wenn mehr als eine identisch geeignet ist, werden die gesamten `@font-face`-Deklarationen anhand von Schritt 1, 2 und 4 des Algorithmus verglichen (es gibt keine Spezifität, wenn es um At-Regeln geht).

Während die in den meisten At-Regeln enthaltenen Deklarationen – wie die in {{cssxref("@media")}}, {{cssxref("@document")}}, oder {{cssxref("@supports")}} – an der Cascade teilnehmen, kann die At-Regel einen gesamten Selektor irrelevant machen, wie wir mit dem Druckstil im [einfachen Beispiel](#einfaches_beispiel) gesehen haben.

Deklarationen in {{cssxref("@keyframes")}} nehmen nicht an der Cascade teil. Ähnlich wie bei `@font-face` wird nur die `@keyframes` als Ganzes über den Cascade-Algorithmus ausgewählt. Die [Vorrangordnung der Animationen ist unten beschrieben](#css-animationen_und_die_cascade).

Bei {{cssxref("@import")}} nimmt das `@import` selbst nicht an der Cascade teil, aber alle importierten Stile nehmen daran teil. Wenn das `@import` eine [benannte oder anonyme Schicht](/de/docs/Web/CSS/@layer) definiert, werden die Inhalte des importierten Stylesheets in die angegebene Schicht platziert. Alle anderen mit `@import` importierten CSS werden als letzte deklarierte Schicht behandelt. Dies wurde oben ausführlich behandelt.

Schließlich unterliegt {{cssxref("@charset")}} spezifischen Algorithmen und wird nicht vom Cascade-Algorithmus beeinflusst.

### Präsentationsattribute

Präsentationsattribute sind Attribute im Quellendokument, die das Styling beeinflussen können. Beispielsweise setzt das veraltete `align`-Attribut die Ausrichtung mehrerer HTML-Elemente und das `fill`-Attribut definiert die Farbe, die verwendet wird, um SVG-Formen und Texte zu malen, und auch den Endzustand für SVG-Animationen. Während sie Autor-Stile sind, nehmen Präsentationsattribute nicht an der Cascade teil.

Wenn das HTML Präsentationsattribute vom Benutzeragenten unterstützt wird, werden gültige Präsentationsattribute, die in HTML und SVG enthalten sind, wie die [`align`](/de/docs/Web/HTML/Reference/Elements/img#align)- oder [`fill`](/de/docs/Web/SVG/Reference/Attribute/fill)-Attribute, in die entsprechenden CSS-Regeln (alle SVG-Präsentationsattribute werden als CSS-Eigenschaften unterstützt) übersetzt und als Autor-Stylesheet vor allen anderen Stilen mit einer Spezifität gleich `0` eingefügt.

Präsentationsattribute können nicht als `!important` deklariert werden.

## CSS-Animationen und die Cascade

[CSS-Animationen](/de/docs/Web/CSS/CSS_animations), die {{cssxref("@keyframes")}}-At-Regeln verwenden, definieren Animationen zwischen Zuständen. `@keyframes` kaskadieren nicht, was bedeutet, dass CSS zu einem bestimmten Zeitpunkt nur Werte aus einem einzigen Satz von `@keyframes` übernimmt und niemals mehrere mischt. Wenn mehrere Sätze von `@keyframes` mit demselben Animationsnamen definiert sind, wird der letzte definierte Satz im Ursprung und in der Schicht mit dem größten Vorrang verwendet. Andere `@keyframes` werden ignoriert, selbst wenn sie unterschiedliche Eigenschaften animieren.

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

In diesem Beispiel gibt es drei separate Animationsdeklarationen namens `repeatedName`. Wenn `animation: infinite 5s alternate repeatedName` auf den Absatz angewendet wird, wird nur eine Animation angewendet: die Keyframe-Animation, die im ungeschichteten CSS definiert ist, hat Vorrang vor den geschichteten Keyframe-Animationsdeklarationen basierend auf Ursprungs- und Schichtenvorrangordnung. In diesem Beispiel wird nur die Schriftgröße des Elements animiert.

> [!NOTE]
> Es gibt keine wichtigen Animationen, da Eigenschaftsdeklarationen in einem {{cssxref('@keyframes')}}-Block, die `!important` als Teil des Wertes enthalten, ignoriert werden.

## Zurücksetzen von Stilen

Nachdem Ihre Inhalte die Stile verändert haben, kann es erforderlich sein, sie in einen bekannten Zustand zurückzusetzen. Dies kann bei Animationen, Themenänderungen usw. erforderlich sein. Die CSS-Eigenschaft {{cssxref("all")}} ermöglicht es Ihnen, schnell fast alles in CSS auf einen bekannten Zustand zurückzusetzen.

Mit `all` können Sie alle Eigenschaften sofort auf einen ihrer Anfangszustände, den Zustand, der vom vorherigen Level der Cascade geerbt wird, einen bestimmten Ursprung (das Benutzeragenten-Stylesheet, das Autor-Stylesheet, oder das Benutzer-Stylesheet) oder sogar, um die Werte der Eigenschaften vollständig zu löschen, zurücksetzen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Cascalagory Layers](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)-Modul
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Anfangs](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechnet](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [verwendet](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
