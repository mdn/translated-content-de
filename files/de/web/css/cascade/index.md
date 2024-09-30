---
title: Einführung in den CSS-Cascade
slug: Web/CSS/Cascade
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **Cascade** ist ein Algorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte aus verschiedenen Quellen kombinieren. Die Cascade definiert die Herkunft und Ebene, die Vorrang hat, wenn in mehr als einem [Ursprung](#ursprungstypen), [Cascadeschicht](/de/docs/Web/CSS/@layer) oder {{CSSxRef("@scope")}}-Block ein Wert für eine Eigenschaft an einem Element gesetzt wird.

Die Cascade liegt im Kern von CSS, wie der Name betont: _**Cascading**_ Style Sheets. Wenn ein [Selektor](/de/docs/Web/CSS/CSS_selectors) mit einem Element übereinstimmt, wird der Eigenschaftswert des Ursprungs mit dem höchsten Vorrang angewendet, selbst wenn der Selektor aus einem Ursprung oder einer Ebene mit niedrigerem Vorrang eine höhere [Spezifität](/de/docs/Web/CSS/Specificity) hat.

Dieser Artikel erklärt, was die Cascade ist und in welcher Reihenfolge [CSS](/de/docs/Glossary/CSS)-[Deklarationen](/de/docs/Web/API/CSSStyleDeclaration) kaskadieren, und behandelt Cascadeschichten und Ursprungstypen. Das Verständnis der Ursprungspriorität ist der Schlüssel zum Verständnis der Cascade.

## Ursprungstypen

Die Aufgabe des CSS-Cascade-Algorithmus besteht darin, CSS-Deklarationen auszuwählen, um die richtigen Werte für CSS-Eigenschaften zu bestimmen. CSS-Deklarationen stammen aus unterschiedlichen Ursprungstypen: **[Benutzeragenten-Stilblätter](#benutzeragenten-stilblätter)**, **[Autorenstilblätter](#autorenstilblätter)** und **[Benutzerstilblätter](#benutzerstilblätter)**.

Obwohl Stilblätter aus diesen unterschiedlichen Ursprüngen stammen und sich in unterschiedlichen [Ebenen](/de/docs/Web/CSS/@layer) in jedem dieser Ursprünge befinden können, überschneiden sie sich hinsichtlich ihres Standardbereichs; damit dies funktioniert, definiert der Kaskadenalgorithmus, wie sie interagieren. Bevor wir auf die Interaktionen eingehen, definieren wir in den nächsten Abschnitten einige Schlüsselbegriffe.

### Benutzeragenten-Stilblätter

Benutzeragenten oder Browser verfügen über grundlegende Stilblätter, die jedem Dokument Standardstile verleihen. Diese Stilblätter werden als **Benutzeragenten-Stilblätter** bezeichnet. Die meisten Browser verwenden tatsächliche Stilblätter für diesen Zweck, während andere sie im Code simulieren. Das Endergebnis ist das gleiche.

Einige Browser ermöglichen es Benutzern, das Benutzeragenten-Stilblatt zu ändern, aber dies ist selten und kann nicht gesteuert werden.

Obwohl einige Einschränkungen für Benutzeragenten-Stilblätter durch die HTML-Spezifikation festgelegt sind, haben Browser viel Spielraum: Das bedeutet, dass es einige Unterschiede zwischen Browsern gibt. Um den Entwicklungsprozess zu vereinfachen, verwenden Webentwickler möglicherweise ein CSS-Reset-Stilblatt, wie z.B. [normalize.css](https://github.com/necolas/normalize.css), das allgemeine Eigenschaftswerte in allen Browsern auf einen bekannten Zustand setzt, bevor Änderungen gemäß ihren spezifischen Bedürfnissen vorgenommen werden.

Sofern das Benutzeragenten-Stilblatt nicht ein [`!important`](/de/docs/Web/CSS/Specificity#the_!important_exception) neben einer Eigenschaft enthält, die es "wichtig" macht, haben von Autoren deklarierte Stile, einschließlich eines Reset-Stilblatts, Vorrang vor den Benutzeragenten-Stilen, unabhängig von der Spezifität des zugehörigen Selektors.

### Autorenstilblätter

**Autorenstilblätter** sind die häufigste Art von Stilblättern; dies sind die von Webentwicklern geschriebenen Stile. Diese Stile können Benutzeragenten-Stile zurücksetzen, wie oben erwähnt, und definieren die Stile für das Design einer bestimmten Webseite oder Anwendung. Der Autor oder Webentwickler definiert die Stile für das Dokument mithilfe eines oder mehrerer verlinkter oder importierter Stilblätter, {{HTMLElement('style')}}-Blöcke und eingebetteter Stile, die mit dem [`style`](/de/docs/Web/HTML/Global_attributes#style)-Attribut definiert sind. Diese Autorenstile definieren das Aussehen und Gefühl der Website — ihr Thema.

### Benutzerstilblätter

In den meisten Browsern kann der Benutzer (oder Leser) der Website wählen, Stile mithilfe eines benutzerdefinierten **Benutzerstilblatts** zu überschreiben, um die Erfahrung an die Wünsche des Benutzers anzupassen. Je nach Benutzeragenten können [Benutzerstile konfiguriert werden](https://www.thoughtco.com/user-style-sheet-3469931) direkt oder über Browser-Erweiterungen hinzugefügt werden.

### Cascadeschichten

Die Kaskadenreihenfolge basiert auf dem Ursprungstyp. Die Cascade innerhalb jedes Ursprungstyps basiert auf der Deklarationsreihenfolge der [Cascadeschichten](/de/docs/Web/CSS/@layer) innerhalb dieses Typs. Für alle Ursprünge - Benutzeragent, Autor oder Benutzer - können Stile innerhalb oder außerhalb benannter oder anonymer Schichten deklariert werden. Wenn sie mit [`layer`, `layer()`](/de/docs/Web/CSS/@import) oder [`@layer`](/de/docs/Web/CSS/@layer) deklariert werden, werden die Stile in die angegebene benannte Schicht oder in eine anonyme Schicht eingefügt, wenn kein Name angegeben wird. Stile, die außerhalb einer Schicht deklariert sind, werden als Teil einer zuletzt deklarierten anonymen Schicht behandelt.

Schauen wir uns den Kaskaden-Ursprungstyp an, bevor wir in die Kaskadenschichten innerhalb jedes Ursprungstyps eintauchen.

## Kaskadenreihenfolge

Der Kaskadenalgorithmus bestimmt, wie der Wert für jede Eigenschaft für jedes Dokumentelement ermittelt wird. Die folgenden Schritte gelten für den Kaskadenalgorithmus:

1. **Relevanz**: Zunächst filtert der Algorithmus alle Regeln aus den verschiedenen Quellen, um nur die Regeln zu behalten, die auf ein bestimmtes Element angewendet werden. Das bedeutet, Regeln, deren Selektor mit dem gegebenen Element übereinstimmt und die Teil einer geeigneten `media`-At-Regel sind.

2. **Ursprung und Wichtigkeit**: Dann sortiert der Algorithmus diese Regeln nach ihrer Wichtigkeit, das heißt, ob sie von `!important` gefolgt werden oder nicht, und nach ihrem Ursprung. Ignoriert man vorerst die Schichten, ist die Kaskadenreihenfolge wie folgt:

   | Reihenfolge (niedrig bis hoch) | Ursprung                   | Wichtigkeit   |
   | ------------------------------- | -------------------------- | ------------- |
   | 1                               | Benutzeragent (Browser)    | normal        |
   | 2                               | Benutzer                   | normal        |
   | 3                               | Autor (Entwickler)         | normal        |
   | 4                               | CSS @keyframe-Animationen  |               |
   | 5                               | Autor (Entwickler)         | `!important`  |
   | 6                               | Benutzer                   | `!important`  |
   | 7                               | Benutzeragent (Browser)    | `!important`  |
   | 8                               | CSS-Übergänge              |               |

3. **Spezifität**: Im Falle von Gleichheit mit einem Ursprung wird die [Spezifität](/de/docs/Web/CSS/Specificity) einer Regel betrachtet, um einen Wert auszuwählen. Die Spezifizität der Selektoren wird verglichen, und die Deklaration mit der höchsten Spezifizität gewinnt.
4. **Scoping-Nähe**: Wenn zwei Selektoren in der Ursprungs-Ebene mit Vorrang die gleiche Spezifizität haben, gewinnt der Eigenschaftswert innerhalb von gescopteten Regeln mit der kleinsten Anzahl an Sprüngen in der DOM-Hierarchie zur Scope-Wurzel. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.
5. **Reihenfolge des Erscheinens**: Im Ursprungsbereich mit Vorrang wird, wenn es konkurrierende Werte für eine Eigenschaft gibt, die in einem Selektor mit gleicher Spezifizität und Scoping-Nähe übereinstimmen, die letzte Deklaration in der Stilreihenfolge angewendet.

Die Cascade ist in aufsteigender Reihenfolge, was bedeutet, dass Animationen Vorrang vor normal deklarierten Werten haben, unabhängig davon, ob diese in Benutzer-, Autoren- oder Benutzeragentenstilen deklariert sind, wichtige Werte haben Vorrang vor Animationen, und Übergänge haben Vorrang vor wichtigen Werten.

> **Note:** **Transitions und Animationen**
>
> Eigenschaftswerte, die durch Animationen mit {{cssxref('@keyframes')}} festgelegt werden, sind wichtiger als alle normalen Stile (diejenigen, die ohne [`!important`](/de/docs/Web/CSS/Specificity#the_!important_exception) gesetzt werden).
>
> Eigenschaftswerte, die in einem {{cssxref('transition')}} festgelegt werden, haben Vorrang vor allen anderen gesetzten Werten, auch denen mit `!important` markierten.

Der Kaskadenalgorithmus wird _vor_ dem Spezifizitätsalgorithmus angewendet, was bedeutet, wenn `:root p { color: red;}` im Benutzerstilblatt (Zeile 2) und ein weniger spezifisches `p {color: blue;}` im Autorenstilblatt (Zeile 3) deklariert ist, werden die Absätze blau.

## Einfaches Beispiel

Bevor wir einen tieferen Blick darauf werfen, wie Kaskadenschichten die Cascade beeinflussen, schauen wir uns ein Beispiel an, das mehrere Quellen von CSS über die verschiedenen Ursprünge hinweg beinhaltet, und arbeiten die Schritte des Kaskadenalgorithmus durch:

Hier haben wir ein Benutzeragenten-Stilblatt, zwei Autoren-Stilblätter und ein Benutzerstilblatt, ohne eingebettete Stile im HTML:

**Benutzeragent-CSS:**

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

Nochmals, es gibt fünf Schritte im Kaskadenalgorithmus, in der Reihenfolge:

1. Relevanz
2. Ursprung und Wichtigkeit
3. Spezifizität
4. Scoping-Nähe
5. Reihenfolge des Erscheinens

Das `1px` ist für Printmedien. Aufgrund fehlender _Relevanz_ basierend auf seinem Medientyp wird es aus der Betrachtung entfernt.

Keine Deklaration ist als `!important` markiert, daher ist die Vorrangreihenfolge Autorenstilblätter vor Benutzerstilblättern vor Benutzeragenten-Stilblatt. Basierend auf _Ursprung und Wichtigkeit_ wird das `1em` aus dem Benutzerstilblatt und das `10px` aus dem Benutzeragenten-Stilblatt aus der Betrachtung entfernt.

Beachten Sie, dass selbst wenn der Benutzerstil auf `.specific` von `1em` eine höhere Spezifizität hat, es sich um eine normale Deklaration in einem Benutzerstilblatt handelt. Daher hat es einen niedrigeren Vorrang als alle Autorenstile und wird durch Schritt 2 des Algorithmus, _Ursprung und Wichtigkeit_, vor der Spezifizität entfernt.

Es gibt drei Deklarationen in Autorenstilblättern:

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

Die letzte, das `5px` befindet sich in einer Kaskadenschicht. Normale Deklarationen in Schichten haben innerhalb des gleichen Ursprungstyps einen geringeren Vorrang als normale Stile, die nicht in einer Schicht sind. Dies wird ebenfalls durch Schritt 2 des Algorithmus, _Ursprung und Wichtigkeit_, entfernt.

Dies lässt das `0` und das `3px`, die beide den gleichen Selektor haben, daher die gleiche _Spezifität_. Weder ist in einem `@scope`-Block, sodass auch die Scoping-Nähe in diesem Beispiel keine Rolle spielt.

Dann schauen wir auf die _Reihenfolge des Erscheinens_. Die zweite, die letzte der beiden nicht geschichteten Autorenstile, gewinnt.

```css
margin-left: 3px;
```

> [!NOTE]
> Die Deklaration, definiert im Benutzer-CSS, obwohl sie eine größere Spezifizität haben mag, wird nicht gewählt, da der Kaskadenalgorithmus auf _Ursprung und Wichtigkeit_ vor dem _Spezifitäts_-Algorithmus angewendet wird. Die Deklaration in einer Kaskadenschicht, obwohl sie später im Code kommt, hat ebenfalls keinen Vorrang, da normale Stile in Kaskadenschichten weniger Vorrang haben als normale nicht geschichtete Stile. _Reihenfolge des Erscheinens_ zählt nur, wenn sowohl Ursprung, Wichtigkeit als auch Spezifizität gleich sind.

## Autorenstile: Inline-Stile, Schichten und Vorrang

Die [Tabelle in Kaskadenreihenfolge](#kaskadenreihenfolge) bot eine Übersicht über die Vorrangordnung. Die Tabelle fasste die Benutzeragenten-, Benutzer- und Autoren-Ursprungstypstile in zwei Zeilen zusammen: mit "Ursprungstyp - normal" und "Ursprungstyp - !important". Der Vorrang innerhalb jedes Ursprungstyps ist nuancierter. Stile können innerhalb von Schichten innerhalb ihres Ursprungstyps enthalten sein, und bei Autorenstilen gibt es auch das Problem, wo Inline-Stile in der Kaskadenreihenfolge stehen.

Die Reihenfolge, in der Schichten deklariert werden, ist entscheidend für die Bestimmung des Vorrangs. Normale Stile in einer Schicht haben Vorrang vor Stilen, die in vorherigen Schichten deklariert sind; mit normalen Stilen, die außerhalb einer Schicht deklariert sind, haben Vorrang vor normalen geschichteten Stilen, unabhängig von der Spezifizität.

In diesem Beispiel hat der Autor die {{CSSXref('@import')}}-Regel von CSS verwendet, um fünf externe Stilblätter innerhalb eines {{HTMLElement('style')}} Informations-Elements zu importieren.

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

In dem obigen CSS-Codeblock wurden drei Kaskadenschichten mit den Namen "A", "B" und "C" in dieser Reihenfolge erstellt. Drei Stilblätter wurden direkt in Schichten importiert, und zwei wurden ohne Erstellung oder Zuordnung einer Schicht importiert. Die "Alle nicht geschichteten Stile" in der nachstehenden Liste (normaler Autorenstilvorrang - Reihenfolge 4) umfasst Stile aus diesen beiden Stilblättern und den zusätzlichen nicht geschichteten CSS-Stilblöcken. Darüber hinaus gibt es zwei Inline-Stile, eine normale `line-height`-Deklaration und eine wichtige `text-decoration`-Deklaration:

| Reihenfolge (niedrig bis hoch) | Autorenstil                | Wichtigkeit    |
| ------------------------------- | -------------------------- | -------------- |
| 1                               | A - erste Schicht          | normal         |
| 2                               | B - zweite Schicht         | normal         |
| 3                               | C - letzte Schicht         | normal         |
| 4                               | Alle nicht geschichteten Stile | normal      |
| 5                               | inline `style`             | normal         |
| 6                               | Animationen                |                |
| 7                               | Alle nicht geschichteten Stile | `!important` |
| 8                               | C - letzte Schicht         | `!important`   |
| 9                               | B - zweite Schicht         | `!important`   |
| 10                              | A - erste Schicht          | `!important`   |
| 11                              | inline `style`             | `!important`   |
| 12                              | Übergänge                  |                |

In allen Ursprungstypen haben die nicht wichtigen Stile, die in Schichten enthalten sind, den niedrigsten Vorrang. In unserem Beispiel haben die normalen Stile, die mit der zuerst deklarierten Schicht (A) verbunden sind, einen niedrigeren Vorrang als normale Stile in der zweiten deklarierten Schicht (B), die einen niedrigeren Vorrang als normale Stile in der dritten deklarierten Schicht (C) haben. Diese geschichteten Stile haben einen niedrigeren Vorrang als alle normalen nicht geschichteten Stile, zu denen auch normale Stile aus `unlayeredStyles.css`, `moreUnlayeredStyles.css` und die `color` von `p` im `<style>` selbst gehören.

Wenn einer der geschichteten Stile in A, B oder C Selektoren mit höherer Spezifizität hat, die mit einem Element übereinstimmen, ähnlich wie `:root body p { color: black;}`, spielt es keine Rolle. Diese Deklarationen werden aus der Betrachtung entfernt, wegen _Ursprung_; normale geschichtete Stile haben einen geringeren Vorrang als normale nicht geschichtete Stile. Wenn jedoch der spezifischere Selector `:root body p { color: black;}` in `unlayeredStyles.css` gefunden wird, bedeuten sowohl _Ursprung als auch Wichtigkeit_ die gleiche Vorrangposition, _Spezifizität_ würde bedeuten, dass die spezifischere, schwarze Deklaration gewinnen würde.

Die Schicht-Reihenfolge im Vorrang wird für Stile, die als `!important` deklariert sind, invertiert. Wichtige Stile, die in einer Schicht deklariert sind, haben Vorrang vor wichtigen Stilen, die außerhalb einer Schicht deklariert sind. Wichtige Werte, die früh in den Schichten vorkommen, haben Vorrang vor wichtigen Stilen, die in späteren Kaskadenschichten deklariert sind.

### Inline-Stile

Nur für Autorenstile von Belang sind Inline-Stile, die mit dem `style`-Attribut deklariert werden. Normale Inline-Stile haben Vorrang vor allen anderen normalen Autorenstilen, unabhängig von der Spezifizität des Selektors. Wenn `line-height: 2;` in einem `:root body p`-Selector-Block in einem der fünf importierten Stilblätter deklariert wäre, wäre die Zeilenhöhe immer noch `1.6`.

Normale Inline-Stile haben Vorrang vor allen anderen normalen Autorenstilen, es sei denn, die Eigenschaft wird von einer CSS-Animation geändert.

Alle wichtigen Inline-Stile haben Vorrang vor allen Autorenstilen, wichtig und nicht, inline und nicht, geschichtet und nicht. Wichtige Stile haben auch Vorrang vor animierten Eigenschaften, aber nicht vor Übergangseigenschaften. Drei Dinge können einen wichtigen Inline-Stil überschreiben: 1) ein wichtiger Benutzerstil, 2) ein wichtiger Benutzeragenten-Stil oder 3) ein übergehender Eigenschaftswert.

### Wichtigkeit und Schichten

Die Vorrangordnung des Ursprungstyps wird für wichtige Stile invertiert. Wichtige Stile, die außerhalb einer Kaskadenschicht deklariert werden, haben einen geringeren Vorrang als diejenigen, die als Teil einer Schicht deklariert sind. Die frühen wichtigen Werte in Schichten haben Vorrang vor wichtigen Stilen, die in nachfolgenden Kaskadenschichten deklariert sind.

Zum Beispiel im folgenden CSS:

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

Auch wenn das Rot zuerst deklariert wird und einen weniger spezifischen Selektor hat, weil nicht geschichtetes CSS Vorrang hat vor geschichtetem CSS, wird der Absatz rot sein. Hätten wir einen Inline-Stil auf dem Absatz gesetzt, der eine andere Farbe festlegt, wie `<p style="color: black">`, würde der Absatz schwarz sein.

Wenn wir `!important` zu diesem CSS hinzufügen, wird die Vorrangordnung im Stylesheet umgekehrt:

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

Jetzt wird der Absatz blau sein. Das `!important` in der am frühesten deklarierten Schicht hat Vorrang vor nachfolgenden Schichten und nicht geschichteten wichtigen Deklarationen. Wenn der Inline-Stil `!important` enthalten würde, wie beispielsweise `<p style="color: black !important">`, würde der Absatz wieder schwarz sein. Inline-Wichtigkeit hat Vorrang vor allen anderen vom Autor deklarierten `!important`-Deklarationen, unabhängig von der Spezifizität.

> [!NOTE]
> Das `!important`-Flag kehrt die Vorrangordnung der Kaskadenschichten um. Aus diesem Grund sollten Sie `!important` nicht verwenden, um externe Stile zu überschreiben. Verwenden Sie stattdessen {{cssxref("@import")}} zusammen mit dem `layer`-Keyword oder der `layer()`-Funktion, um externe Stilblätter (von Frameworks, Widget-Stilblättern, Bibliotheken usw.) in Schichten zu importieren. Das Importieren von Stilblättern in eine Schicht als erste Deklaration in Ihrem CSS senkt deren Vorrang, und vom Autor definierte Schichten, die später in Ihrem CSS definiert sind, haben höheren Vorrang. Das `!important`-Flag sollte nur sparsam, wenn überhaupt, verwendet werden, um erforderliche Stile vor späteren Überschreibungen zu schützen, in der zuerst deklarierten Schicht.

Stile, die Übergänge durchmachen, haben Vorrang vor allen wichtigen Stilen, egal, wer oder wie sie deklariert sind.

## Vollständige Kaskadenreihenfolge

Da wir nun ein besseres Verständnis der Ursprungstypen und der Kaskadenschichtvorrang haben, erkennen wir, dass die Tabelle in [Kaskadenreihenfolge](#kaskadenreihenfolge) genauer durch die folgende Tabelle dargestellt werden könnte:

<table>
<thead>
  <tr><th>Vorrang-Reihenfolge <br/>(niedrig bis hoch)</th><th>Stil-Ursprung</th><th>Wichtigkeit</th></tr>
</thead>
<tbody>
  <tr><td rowspan="3">1</td><td>Benutzeragent - erste deklarierte Schicht</td><td rowspan="3">normal</td></tr>
  <tr><td>Benutzeragent - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzeragent - nicht geschichtete Stile</td></tr>
  <tr><td rowspan="3">2</td><td>Benutzer - erste deklarierte Schicht</td><td rowspan="3">normal</td></tr>
  <tr><td>Benutzer - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzer - nicht geschichtete Stile</td></tr>
  <tr><td rowspan="4">3</td><td>Autor - erste deklarierte Schicht</td><td rowspan="4">normal</td></tr>
  <tr><td>Autor - letzte deklarierte Schicht</td></tr>
  <tr><td>Autor - nicht geschichtete Stile</td></tr>
  <tr><td>inline <code>style</code></td></tr>
  <tr><td>4</td><td>Animationen</td><td></td></tr>
  <tr><td rowspan="4">5</td><td>Autor - unlayered styles</td><td rowspan="4"><code>!important</code></td></tr>
  <tr><td>Autor - last declared layer</td></tr>
  <tr><td>Autor - first declared layer</td></tr>
  <tr><td>inline <code>style</code></td></tr>
  <tr><td rowspan="3">6</td><td>Benutzer - nicht geschichtete Stile</td><td rowspan="3"><code>!important</code></td></tr>
  <tr><td>Benutzer - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzer - erste deklarierte Schicht</td></tr>
  <tr><td rowspan="3">7</td><td>Benutzeragent - nicht geschichtete Stile</td><td rowspan="3"><code>!important</code></td></tr>
  <tr><td>Benutzeragent - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzeragent - erste deklarierte Schicht</td></tr>
  <tr><td>8</td><td>Übergänge</td><td></td></tr>
</tbody>
</table>

## Welche CSS-Entitäten nehmen an der Cascade teil

Nur CSS-Eigenschafts-/Wertpaar-Deklarationen nehmen an der Cascade teil. CSS-At-Regel-Deskriptoren nehmen nicht an der Cascade teil und HTML-Präsentationsattribute sind nicht Teil der Cascade.

### At-Regeln

CSS-[At-Regeln](/de/docs/Web/CSS/At-rule), die andere Entitäten als Deklarationen enthalten, wie eine {{ cssxref("@font-face")}}-Regelmit _Deskriptoren_, nehmen nicht an der Cascade teil.

Im Allgemeinen nehmen die Eigenschaften und Deskriptoren, die in At-Regeln definiert sind, nicht an der Cascade teil. Nur die At-Regeln als Ganzes nehmen an der Cascade teil. Zum Beispiel innerhalb eines `@font-face`-Regels werden Schriftartnamen durch [`font-family`](/de/docs/Web/CSS/@font-face/font-family)-Deskriptoren identifiziert. Wenn mehrere `@font-face`-Regeln mit demselben Deskriptor definiert sind, wird nur die passendste `@font-face`, als Ganzes, in Betracht gezogen. Wenn mehr als eine identisch passend ist, werden die gesamten `@font-face`-Deklarationen unter Verwendung der Schritte 1, 2 und 4 des Algorithmus verglichen (es gibt keine Spezifizität bei At-Regeln).

Während die Deklarationen in den meisten At-Regeln - wie diejenigen in {{cssxref("@media")}}, {{cssxref("@document")}} oder {{cssxref("@supports")}} - an der Cascade teilnehmen, kann die At-Regel einen gesamten Selektor als nicht relevant machen, wie wir im [einfachen Beispiel](#einfaches_beispiel) mit dem Druckstil gesehen haben.

Deklarationen in {{cssxref("@keyframes")}} nehmen nicht an der Cascade teil. Wie bei `@font-face` wird nur die `@keyframes` als Ganzes durch den Kaskadenalgorithmus ausgewählt. Die [Vorrangordre für Animationen wird unten beschrieben](#css-animationen_und_die_cascade).

Was {{cssxref("@import")}} betrifft, nimmt das `@import` selbst nicht an der Cascade teil, aber alle importierten Stile nehmen teil. Wenn das `@import` eine [benannte oder anonyme Schicht](/de/docs/Web/CSS/@layer) definiert, werden die Inhalte des importierten Stilblatts in die angegebene Schicht eingefügt. Alle anderen mit `@import` importierten CSS werden als letzte deklarierten Schicht behandelt. Dies wurde oben erörtert.

Zuletzt gehorcht {{cssxref("@charset")}} spezifischen Algorithmen und wird nicht vom Kaskadenalgorithmus beeinflusst.

### Präsentationsattribute

Präsentationsattribute sind Attribute im Quelldokument, die das Styling beeinflussen können. Zum Beispiel legt das veraltete `align`-Attribut die Ausrichtung auf mehreren HTML-Elementen fest, und das `fill`-Attribut definiert die Farbe, die zum Malen von SVG-Formen und -Text verwendet wird und den Endzustand für SVG-Animationen. Obwohl sie Autorenstile sind, nehmen Präsentationsattribute nicht an der Cascade teil.

Wenn das HTML-Präsentationsattribut vom Benutzeragenten unterstützt wird, werden gültige Präsentationsattribute, die in HTML und SVG enthalten sind, wie die [`align`](/de/docs/Web/HTML/Element/img#align) oder [`fill`](/de/docs/Web/SVG/Attribute/fill)-Attribute, in die entsprechenden CSS-Regeln übersetzt (alle SVG-Präsentationsattribute werden als CSS-Eigenschaften unterstützt) und als Teil des Autorenstilblatts eingefügt, bevor andere Stile mit einer Spezifizität von `0`.

Präsentationsattribute können nicht als `!important` deklariert werden.

## CSS-Animationen und die Cascade

[CSS-Animationen](/de/docs/Web/CSS/CSS_animations), die mit {{ cssxref("@keyframes")}}-Regeln arbeiten, definieren Animationen zwischen Zuständen. Keyframes kaskadieren nicht, was bedeutet, dass CSS zu jedem gegebenen Zeitpunkt Werte nur aus einem einzigen {{cssxref("@keyframes")}} nimmt und niemals mehrere mischt.

Wenn mehrere Keyframe-Animationen mit demselben Animationsnamen definiert sind, wird die zuletzt definierte `@keyframes` im Ursprung und in der Schicht mit der größten Vorrang genommen. Nur eine `@keyframes`-Definition wird verwendet, selbst wenn die `@keyframes` unterschiedliche Eigenschaften animieren. `@keyframes` mit demselben Namen werden niemals kombiniert.

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

In diesem Beispiel gibt es drei separate Animationsdeklarationen mit dem Namen `repeatedName`. Wenn `animation: infinite 5s alternate repeatedName` auf den Absatz angewendet wird, wird nur eine Animation angewendet: die Keyframe-Animation, die im nicht geschichteten CSS definiert ist, hat Vorrang vor den geschichteten Keyframe-Animationsdeklarationen basierend auf Ursprung und Kaskadenschicht-Vorrangordnung. In diesem Beispiel wird nur die Schriftgröße des Elements animiert.

> [!NOTE]
> Es gibt keine wichtigen Animationen, da Eigenschaftsdeklarationen in einem {{cssxref('@keyframes')}}-Block, die `!important` als Teil des Wertes enthalten, ignoriert werden.

## Zurücksetzen von Stilen

Nachdem Ihre Inhalte das Styling abgeschlossen haben, kann es vorkommen, dass sie in einer Situation sind, in der sie die Stile auf einen bekannten Zustand zurücksetzen müssen. Dies kann bei Animationen, Themenänderungen usw. passieren. Die CSS-Eigenschaft {{cssxref("all")}} ermöglicht es Ihnen, schnell (fast) alles in CSS auf einen bekannten Zustand zurückzusetzen.

`all` ermöglicht es Ihnen, sofort alle Eigenschaften auf einen ihrer ursprünglichen (Standard-)Zustände zurückzusetzen, den Zustand, der von der vorherigen Ebene der Cascade geerbt wurde, einen bestimmten Ursprung (das Benutzeragenten-Stilblatt, das Autorenstilblatt oder das Benutzerstilblatt) oder sogar die Werte der Eigenschaften vollständig zu löschen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Bausteine: die CSS-Cascade](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [Bausteine: Kaskadenschichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)
- [CSS Cascade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/Syntax)
- [Spezifizität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [At-Regeln](/de/docs/Web/CSS/At-rule)
- [Initial](/de/docs/Web/CSS/initial_value), [berechnet](/de/docs/Web/CSS/computed_value), [verwendet](/de/docs/Web/CSS/used_value) und [aktuell](/de/docs/Web/CSS/actual_value) Werte
