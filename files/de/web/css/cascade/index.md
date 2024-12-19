---
title: Einführung in die CSS-Kaskade
slug: Web/CSS/Cascade
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **Kaskade** ist ein Algorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte aus verschiedenen Quellen kombinieren. Die Kaskade definiert die Herkunft und Ebene, die Vorrang haben, wenn Erklärungen aus mehr als einer [Herkunft](#herkunftstypen), [Kaskadenschicht](/de/docs/Web/CSS/@layer) oder {{CSSxRef("@scope")}}-Block einen Wert für eine Eigenschaft auf einem Element festlegen.

Die Kaskade liegt im Kern von CSS, wie bereits der Name betont: _**Cascading**_ Style Sheets (Kaskadierende Stylesheets). Wenn ein [Selector](/de/docs/Web/CSS/CSS_selectors) mit einem Element übereinstimmt, wird der Eigenschaftswert aus der Herkunft mit der höchsten Priorität angewandt, auch wenn der Selector aus einer weniger wichtigen Herkunft oder Ebene eine höhere [Spezifität](/de/docs/Web/CSS/Specificity) aufweist.

Dieser Artikel erklärt, was die Kaskade ist und in welcher Reihenfolge {{Glossary("CSS", "CSS")}} [Deklarationen](/de/docs/Web/API/CSSStyleDeclaration) kaskadieren, wobei Kaskadenschichten und Herkunftstyp behandelt werden. Das Verständnis der Herkunftspriorität ist der Schlüssel zum Verständnis der Kaskade.

## Herkunftstypen

Der Algorithmus der CSS-Kaskade hat die Aufgabe, CSS-Deklarationen auszuwählen, um die korrekten Werte für CSS-Eigenschaften zu bestimmen. CSS-Deklarationen stammen aus verschiedenen Herkunftstypen: **[Benutzeragenten-Stilblätter](#benutzeragenten-stilblätter)**, **[Autorenstilblätter](#autorenstilblätter)** und **[Benutzerstilblätter](#benutzerstilblätter)**.

Obwohl Stilblätter aus diesen unterschiedlichen Herkünften stammen und sich in verschiedenen [Schichten](/de/docs/Web/CSS/@layer) innerhalb dieser Herkünfte befinden können, überschneiden sie sich hinsichtlich ihres Standardbereichs; um dies zu arrangieren, definiert der Kaskadenalgorithmus, wie sie interagieren. Bevor wir uns mit den Wechselwirkungen befassen, definieren wir in den nächsten Abschnitten einige wichtige Begriffe.

### Benutzeragenten-Stilblätter

Benutzeragenten oder Browser haben grundlegende Stilblätter, die jedem Dokument Standardstile geben. Diese Stilblätter werden als **Benutzeragenten-Stilblätter** bezeichnet. Die meisten Browser verwenden tatsächliche Stilblätter zu diesem Zweck, während andere sie im Code simulieren. Das Endergebnis ist dasselbe.

Einige Browser erlauben es Benutzern, das Benutzeragenten-Stilblatt zu ändern, aber das ist selten und kann nicht kontrolliert werden.

Obwohl einige Einschränkungen für Benutzeragenten-Stilblätter durch die HTML-Spezifikation festgelegt sind, haben Browser viel Spielraum: Das bedeutet, dass es einige Unterschiede zwischen Browsern gibt. Um den Entwicklungsprozess zu vereinfachen, können Webentwickler ein CSS-Reset-Stilblatt wie [normalize.css](https://github.com/necolas/normalize.css) verwenden, das allgemeine Eigenschaften auf einen bekannten Zustand für alle Browser setzt, bevor Änderungen zur Anpassung an spezifische Bedürfnisse vorgenommen werden.

Sofern das Benutzeragenten-Stilblatt nicht ein [`!important`](/de/docs/Web/CSS/Specificity#the_!important_exception) neben einer Eigenschaft enthält, das es als "wichtig" markiert, haben die von Autorenstilen deklarierten Stile, einschließlich eines Reset-Stilblattes, Vorrang vor den Benutzeragenten-Stilen, unabhängig von der Spezifität des zugehörigen Selectors.

### Autorenstilblätter

**Autorenstilblätter** sind die häufigste Art von Stilblättern; diese Stile werden von Webentwicklern geschrieben. Diese Stile können Benutzeragenten-Stile zurücksetzen, wie oben erwähnt, und die Stile für das Design einer bestimmten Webseite oder Anwendung definieren. Der Autor oder Webentwickler definiert die Stile für das Dokument mithilfe eines oder mehrerer verlinkter oder importierter Stilblätter, {{HTMLElement('style')}}-Blöcke und Inline-Stile, die mit dem [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribut definiert sind. Diese Autorenstile definieren das Aussehen und das Gefühl der Website — ihr Thema.

### Benutzerstilblätter

In den meisten Browsern kann der Benutzer (oder Leser) der Website wählen, Stile mit einem benutzerdefinierten **Benutzerstilblatt** zu überschreiben, das darauf ausgelegt ist, das Erlebnis an die Wünsche des Benutzers anzupassen. Abhängig vom Benutzeragenten können [Benutzerstile konfiguriert werden](https://www.thoughtco.com/user-style-sheet-3469931) oder über Browser-Erweiterungen hinzugefügt werden.

### Kaskadenschichten

Die Kaskadenreihenfolge basiert auf dem Herkunftstyp. Die Kaskade innerhalb jedes Herkunftstyps basiert auf der Deklarationsreihenfolge von [Kaskadenschichten](/de/docs/Web/CSS/@layer) innerhalb dieses Typs. Bei allen Herkünften - Benutzeragent, Autor oder Benutzer - können Stile innerhalb oder außerhalb von benannten oder anonymen Schichten deklariert werden. Wenn sie mit [`layer`, `layer()`](/de/docs/Web/CSS/@import) oder [`@layer`](/de/docs/Web/CSS/@layer) deklariert werden, werden Stile in die angegebene benannte Schicht oder in eine anonyme Schicht platziert, wenn kein Name angegeben ist. Stile, die außerhalb einer Schicht deklariert werden, gelten als Teil einer anonymen zuletzt deklarierten Schicht.

Schauen wir uns zunächst den Ursprungstyp der Kaskade an, bevor wir in die Kaskadenschichten innerhalb jedes Ursprungstyps eintauchen.

## Kaskadenreihenfolge

Der Kaskadenalgorithmus bestimmt, wie für jede Eigenschaft für jedes Dokumenelement der anzuwendende Wert gefunden wird. Die folgenden Schritte gelten für den Kaskadenalgorithmus:

1. **Relevanz**: Er filtert zuerst alle Regeln aus den verschiedenen Quellen heraus, um nur die Regeln zu behalten, die für ein bestimmtes Element gelten. Das bedeutet Regeln, deren Selector mit dem gegebenen Element übereinstimmt und die Teil einer geeigneten `media`-At-Regel sind.

2. **Herkunft und Wichtigkeit**: Dann sortiert er diese Regeln nach ihrer Wichtigkeit, das heißt, ob sie von `!important` gefolgt sind oder nicht, und nach ihrer Herkunft. Wenn man die Schichten für den Moment ignoriert, ist die Kaskadenreihenfolge wie folgt:

   | Reihenfolge (niedrig bis hoch) | Herkunft                   | Wichtigkeit |
   | ------------------------------- | -------------------------- | ----------- |
   | 1                               | Benutzeragent (Browser)    | normal      |
   | 2                               | Benutzer                  | normal      |
   | 3                               | Autor (Entwickler)         | normal      |
   | 4                               | CSS @keyframe-Animationen  |             |
   | 5                               | Autor (Entwickler)         | `!important`|
   | 6                               | Benutzer                  | `!important`|
   | 7                               | Benutzeragent (Browser)    | `!important`|
   | 8                               | CSS-Übergänge             |             |

3. **Spezifität**: Bei Gleichheit bei der Herkunft wird die [Spezifität](/de/docs/Web/CSS/Specificity) einer Regel berücksichtigt, um einen Wert auszuwählen. Die Spezifität der Selector wird verglichen und die Deklaration mit der höchsten Spezifität gewinnt.
4. **Berechtigungsnähe**: Wenn zwei Selector in der vorrangigen Ursprungsschicht die gleiche Spezifität haben, gewinnt der Eigenschaftswert innerhalb eingrenzender Regeln mit der geringsten Anzahl von Sprüngen nach oben durch die DOM-Hierarchie zur Wurzel des Gültigkeitsbereichs. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für mehr Details und ein Beispiel.
5. **Reihenfolge des Erscheinens**: In der vorrangigen Herkunft, wenn es konkurrierende Werte für eine Eigenschaft gibt, die in übereinstimmenden Stilblock-Selectors mit gleicher Spezifität und Berechtigungsnähe sind, wird die letzte Deklaration in der Stilreihenfolge angewandt.

Die Kaskade ist in aufsteigender Reihenfolge, was bedeutet, dass Animationen Vorrang vor normalen Werten haben, unabhängig davon, ob diese in Benutzer-, Autoren- oder Benutzeragentenstilen deklariert sind, wichtige Werte haben Vorrang vor Animationen und Übergänge haben Vorrang vor wichtigen Werten.

> **Hinweis:** **Übergänge und Animationen**
> 
> Eigenschaftswerte, die durch die Animation {{cssxref('@keyframes')}} festgelegt werden, sind wichtiger als alle normalen Stile (diejenigen ohne durch [`!important`](/de/docs/Web/CSS/Specificity#the_!important_exception) gesetzte Bedeutung).
> 
> Eigenschaftswerte, die in einem {{cssxref('transition')}} festgelegt werden, haben Vorrang vor allen anderen festgelegten Werten, selbst denen, die mit `!important` markiert sind.

Der Kaskadenalgorithmus wird _vor_ dem Spezifitätsalgorithmus angewendet, was bedeutet, dass wenn `:root p { color: red;}` in einem Benutzerstilblatt (Zeile 2) deklariert ist und ein weniger spezifisches `p {color: blue;}` im Autorenstilblatt (Zeile 3) ist, die Absätze blau sein werden.

## Einfaches Beispiel

Bevor wir einen tieferen Blick darauf werfen, wie Kaskadenschichten die Kaskade beeinflussen, schauen wir uns ein Beispiel an, das mehrere CSS-Quellen aus den verschiedenen Herkünften einbezieht, und durchlaufen die Schritte des Kaskadenalgorithmus:

Hier haben wir ein Benutzeragenten-Stilblatt, zwei Autorenstilblätter und ein Benutzerstilblatt, ohne Inline-Stile im HTML:

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

In diesem Fall sollten Erklärungen innerhalb der `li`- und `.specific`-Regeln gelten.

Noch einmal, es gibt fünf Schritte im Kaskadenalgorithmus, in Reihenfolge:

1. Relevanz
2. Herkunft und Wichtigkeit
3. Spezifität
4. Berechtigungsnähe
5. Reihenfolge des Erscheinens

Die `1px` ist für Druckmedien. Aufgrund der fehlenden _Relevanz_ basierend auf ihrem Medientyp, wird sie aus der Betrachtung entfernt.

Keine Erklärung ist als `!important` gekennzeichnet, daher ist die Vorrangreihenfolge Autorenstilblätter über Benutzerstilblätter über Benutzeragentenstilblatt. Basierend auf _Herkunft und Wichtigkeit_ werden das `1em` aus dem Benutzerstilblatt und das `10px` aus dem Benutzeragenten-Stilblatt aus der Betrachtung entfernt.

Beachten Sie, dass selbst wenn der Benutzerstil auf `.specific` von `1em` eine höhere Spezifität hat, handelt es sich um eine normale Erklärung in einem Benutzerstilblatt. Als solche hat es eine niedrigere Priorität als alle Autorenstile und wird durch den Schritt Herkunft und Bedeutung des Algorithmus entfernt, bevor die Spezifität überhaupt ins Spiel kommt.

Es gibt drei Erklärungen in Autorenstilblättern:

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

Die letzte, die `5px` ist Teil einer Kaskadenschicht. Normale Deklarationen in Schichten haben eine niedrigere Priorität als normale Stile, die nicht in einer Schicht innerhalb des gleichen Herkunftstyps sind. Diese wird ebenfalls durch Schritt 2 des Algorithmus, _Herkunft und Wichtigkeit_, entfernt.

Dies lässt die `0` und `3px` übrig, die beide denselben Selector haben, daher dieselbe _Spezifität_. Keiner von ihnen befindet sich in einem `@scope`-Block, also kommt die Berechtigungsnähe in diesem Beispiel auch nicht zum Tragen.

Dann schauen wir auf die _Reihenfolge des Erscheinens_. Der zweite, der letzte der beiden ungelagerten Autorenstile, gewinnt.

```css
margin-left: 3px;
```

> [!NOTE]
> Die im Benutzer-CSS definierte Erklärung, auch wenn sie möglicherweise eine größere Spezifität aufweist, wird nicht ausgewählt, da der Kaskadenalgorithmus von _Herkunft und Wichtigkeit_ angewandt wird, bevor der _Spezifitätsalgorithmus_ berücksichtigt wird. Die in einer Kaskadenschicht definierte Erklärung, obwohl sie später im Code erscheinen kann, wird auch keinen Vorrang haben, da normale Stile in Kaskadenschichten weniger Priorität haben als normale ungelagerte Stile. _Die Reihenfolge des Erscheinens_ spielt nur dann eine Rolle, wenn sowohl Herkunft, Wichtigkeit als auch Spezifität gleich sind.

## Autorenstile: Inline-Stile, Schichten und Vorrang

Die [Tabelle in Kaskadenreihenfolge](#kaskadenreihenfolge) gab einen Überblick über die Reihenfolge der Priorität. Die Tabelle fasste die Stile der Benutzeragenten, Benutzer und Autoren nach Herkunft in jeweils zwei Zeilen zusammen mit "Herkunftstyp - normal" und "Herkunftstyp - !important". Die Priorität innerhalb jedes Herkunftstyps ist nuancierter. Stile können innerhalb von Schichten innerhalb ihres Herkunftstyps enthalten sein, und bei Autorenstilen gibt es auch das Problem, wo Inline-Stile in der Kaskadenreihenfolge landen.

Die Reihenfolge, in der Schichten deklariert werden, ist wichtig, um die Priorität zu bestimmen. Normale Stile in einer Schicht haben Vorrang vor in vorherigen Schichten deklarierten Stilen; normale Stile, die außerhalb einer Schicht deklariert werden, haben Vorrang vor normalen geschichteten Stilen, unabhängig von ihrer Spezifität.

In diesem Beispiel hat der Autor CSS's {{CSSXref('@import')}}-Regel verwendet, um fünf externe Stilblätter innerhalb eines {{HTMLElement('style')}}-Informationsblockes zu importieren.

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

und dann im Hauptteil des Dokuments haben wir Inline-Stile:

```html
<p style="line-height: 1.6em; text-decoration: overline !important;">Hello</p>
```

Im obigen CSS-Codeblock wurden in dieser Reihenfolge drei Kaskadenschichten mit den Namen "A", "B" und "C" erstellt. Drei Stilblätter wurden direkt in Schichten importiert und zwei wurden importiert, ohne eine Schicht zu erstellen oder zuzuweisen.
Die "Alle ungelagerten Stile" in der Liste unten (normale Autorenstilreihenfolge - Reihenfolge 4) umfasst Stile aus diesen beiden Stilblättern und den zusätzlichen ungelagerten CSS-Stilblöcken. Zusätzlich gibt es zwei Inline-Stile, eine normale `line-height`-Deklaration und eine wichtige `text-decoration`-Deklaration:

| Reihenfolge (niedrig bis hoch) | Autorenstil           | Wichtigkeit |
| ------------------------------- | --------------------- | ----------- |
| 1                               | A - erste Schicht     | normal      |
| 2                               | B - zweite Schicht    | normal      |
| 3                               | C - letzte Schicht    | normal      |
| 4                               | Alle ungelagerten Stile | normal      |
| 5                               | inline `style`        | normal      |
| 6                               | Animationen           |             |
| 7                               | Alle ungelagerten Stile | `!important`|
| 8                               | C - letzte Schicht    | `!important`|
| 9                               | B - zweite Schicht    | `!important`|
| 10                              | A - erste Schicht     | `!important`|
| 11                              | inline `style`        | `!important`|
| 12                              | Übergänge             |             |

In allen Herkunftstypen haben die nicht wichtigen Stile, die in Schichten enthalten sind, die niedrigste Priorität. In unserem Beispiel haben die normalen Stile, die mit der ersten deklarierten Schicht (A) verbunden sind, eine niedrigere Priorität als die normalen Stile in der zweiten deklarierten Schicht (B), die eine niedrigere Priorität haben als normale Stile in der dritten deklarierten Schicht (C). Diese geschichteten Stile haben eine niedrigere Priorität als alle normalen ungelagerten Stile, die normale Stile aus `unlayeredStyles.css`, `moreUnlayeredStyles.css` und die `color` von `p` im `<style>` selbst beinhalten.

Wenn einer der geschichteten Stile in A, B oder C Selector mit höherer Spezifität besitzt, die mit einem Element übereinstimmen, ähnlich `:root body p { color: black;}`, spielt es keine Rolle. Diese Erklärungen werden aufgrund von _Herkunft_ aus der Betrachtung ausgeschlossen; normale geschichtete Stile haben weniger Priorität als normale ungelagerte Stile. Wenn jedoch der spezifischere Selector `:root body p { color: black;}` in `unlayeredStyles.css` gefunden würde, da _Herkunft und Wichtigkeit_ die gleiche Priorität haben, würde _Spezifität_ bedeuten, dass die spezifischere, schwarze Erklärung gewinnen würde.

Die Reihenfolge der Schichtpriorität wird für als `!important` deklarierte Stile umgekehrt. Wichtige Stile, die in einer Schicht deklariert werden, haben Vorrang vor wichtigen Stilen, die außerhalb einer Schicht deklariert werden. Wichtige Stile in der ersten deklarierten Schicht (A) haben Vorrang vor wichtigen Erklärungen, die in Schicht B gefunden werden, die wiederum Vorrang vor C haben, die Vorrang vor wichtigen Erklärungen in den ungelagerten Stilen haben.

### Inline-Stile

Nur für Autorenstile bedeutsam sind Inline-Stile, die mit dem `style`-Attribut deklariert werden. Normale Inline-Stile haben Vorrang vor allen anderen normalen Autorenstilen, unabhängig von der Spezifität des Selectors. Wenn `line-height: 2;` in einem `:root body p`-Selector-Block in einem der fünf importierten Stilblätter deklariert würde, wäre die Zeilenhöhe immer noch `1.6`.

Normale Inline-Stile haben Vorrang vor allen anderen normalen Autorenstilen, es sei denn, die Eigenschaft wird durch eine CSS-Animation verändert.

Alle wichtigen Inline-Stile haben Vorrang vor allen Autorenstilen, wichtig und nicht, inline und nicht, geschichtet und nicht. Wichtige Stile haben auch Vorrang vor animierten Eigenschaften, aber nicht vor Übergangseigenschaften. Drei Dinge können einen wichtigen Inline-Stil überschreiben: 1) ein wichtiger Benutzerstil, 2) ein wichtiger Benutzeragentstil oder 3) ein Wert, der über einen Übergang eingestellt wird.

### Wichtigkeit und Schichten

Die Reihenfolge der Herkunftstyp-Priorität wird für wichtige Stile umgekehrt. Wichtige Stile, die außerhalb jeder Kaskadenschicht deklariert werden, haben eine niedrigere Priorität als solche, die als Teil einer Schicht deklariert werden. Wichtige Werte, die in frühen Schichten kommen, haben Vorrang vor wichtigen Stilen, die in nachfolgenden Kaskadenschichten deklariert werden.

Betrachten Sie zum Beispiel das folgende CSS:

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

Obwohl das Rot zuerst deklariert wird und einen weniger spezifischen Selector hat, weil ungelagertes CSS Vorrang vor geschichtetem CSS hat, wird der Absatz rot sein. Hätten wir einen Inline-Stil auf dem Absatz eingestellt, der ihn auf eine andere Farbe setzen würde, wie `<p style="color: black">`, würde der Absatz schwarz sein.

Wenn wir `!important` zu diesem CSS-Fragment hinzufügen, wird die Prioritätsreihenfolge innerhalb des Stylesheets umgekehrt:

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

Jetzt wird der Absatz blau sein. Das `!important` in der frühest deklarierten Schicht hat Vorrang vor nachfolgenden Schichten und ungelagerten wichtigen Deklarationen. Wenn der Inline-Stil `!important` enthalten würde, wie `<p style="color: black !important">`, wäre der Absatz wieder schwarz. Inline-Bedeutung hat Vorrang vor allen anderen von Autoren deklarierten `!important`-Deklarationen, unabhängig von der Spezifität.

> [!NOTE]
> Das `!important`-Flag kehrt die Priorität von Kaskadenschichten um. Aus diesem Grund versuchen Sie, `!important` nicht zu verwenden, um externe Stile zu überschreiben. Verwenden Sie stattdessen {{cssxref("@import")}} zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stylesheets (von Frameworks, Widget-Stilblättern, Bibliotheken usw.) in Schichten zu importieren. Das Importieren von Stylesheets in eine Schicht als erste Deklaration in Ihrem CSS vermindert ihre Priorität und von Autoren definierte Schichten, die später in Ihrem CSS definiert werden, haben eine höhere Priorität. Das `!important`-Flag sollte nur sparsam verwendet werden, wenn überhaupt, um erforderliche Stile gegen spätere Überschreibungen zu schützen, in der zuerst deklarierten Schicht.

Stile, die sich im Übergang befinden, haben Vorrang vor allen wichtigen Stilen, unabhängig von der Herkunft oder wie sie deklariert wurden.

## Vollständige Kaskadenreihenfolge

Jetzt, da wir ein besseres Verständnis von Herkunftstyp- und Kaskadenschicht-Priorität haben, erkennen wir, dass die Tabelle in [Kaskadenreihenfolge](#kaskadenreihenfolge) genauer durch die folgende Tabelle dargestellt werden könnte:

<table>
<thead>
  <tr><th>Prioritätsordnung <br/>(niedrig bis hoch)</th><th>Stilherkunft</th><th>Wichtigkeit</th></tr>
</thead>
<tbody>
  <tr><td rowspan="3">1</td><td>Benutzeragent - erste deklarierte Schicht</td><td rowspan="3">normal</td></tr>
  <tr><td>Benutzeragent - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzeragent - ungelagerte Stile</td></tr>
  <tr><td rowspan="3">2</td><td>Benutzer - erste deklarierte Schicht</td><td rowspan="3">normal</td></tr>
  <tr><td>Benutzer - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzer - ungelagerte Stile</td></tr>
  <tr><td rowspan="4">3</td><td>Autor - erste deklarierte Schicht</td><td rowspan="4">normal</td></tr>
  <tr><td>Autor - letzte deklarierte Schicht</td></tr>
  <tr><td>Autor - ungelagerte Stile</td></tr>
  <tr><td>inline <code>style</code></td></tr>
  <tr><td>4</td><td>Animationen</td><td></td></tr>
  <tr><td rowspan="4">5</td><td>Autor - ungelagerte Stile</td><td rowspan="4"><code>!important</code></td></tr>
  <tr><td>Autor - letzte deklarierte Schicht</td></tr>
  <tr><td>Autor - erste deklarierte Schicht</td></tr>
  <tr><td>inline <code>style</code></td></tr>
  <tr><td rowspan="3">6</td><td>Benutzer - ungelagerte Stile</td><td rowspan="3"><code>!important</code></td></tr>
  <tr><td>Benutzer - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzer - erste deklarierte Schicht</td></tr>
  <tr><td rowspan="3">7</td><td>Benutzeragent - ungelagerte Stile</td><td rowspan="3"><code>!important</code></td></tr>
  <tr><td>Benutzeragent - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzeragent - erste deklarierte Schicht</td></tr>
  <tr><td>8</td><td>Übergänge</td><td></td></tr>
</tbody>
</table>

## Welche CSS-Entitäten nehmen an der Kaskade teil

Nur CSS-Eigenschafts-/Wertpaar-Deklarationen nehmen an der Kaskade teil. CSS-At-Regel-Beschreibungen nehmen nicht an der Kaskade teil und HTML-präsentative Attribute sind nicht Teil der Kaskade.

### At-Regeln

CSS-[At-Regeln](/de/docs/Web/CSS/At-rule), die andere Entitäten als Deklarationen enthalten, wie eine {{ cssxref("@font-face")}}-Regel mit _Beschreibungen_, nehmen nicht an der Kaskade teil.

Zum größten Teil nehmen die in At-Regeln definierten Eigenschaften und Beschreibungen nicht an der Kaskade teil. Nur At-Regeln selbst nehmen an der Kaskade teil. Zum Beispiel werden innerhalb einer `@font-face`-Regel Schriftnamen durch [`font-family`](/de/docs/Web/CSS/@font-face/font-family)-Beschreibungen identifiziert. Wenn mehrere `@font-face`-Regeln mit derselben Beschreibung definiert sind, wird nur die passendste `@font-face` als Ganzes betrachtet. Wenn mehr als eine identisch passend ist, werden die gesamten `@font-face`-Deklarationen mit den Schritten 1, 2 und 4 des Algorithmus verglichen (es gibt keine Spezifität, wenn es um At-Regeln geht).

Während die in den meisten At-Regeln enthaltenen Deklarationen — wie diejenigen in {{cssxref("@media")}}, {{cssxref("@document")}} oder {{cssxref("@supports")}} — an der Kaskade teilnehmen, könnte die At-Regel einen gesamten Selector als nicht relevant machen, wie wir im [einfachen Beispiel](#einfaches_beispiel) mit dem Druckstil gesehen haben.

Deklarationen in {{cssxref("@keyframes")}} nehmen nicht an der Kaskade teil. Wie bei `@font-face` wird nur die `@keyframes`-Regel als Ganzes über den Kaskadenalgorithmus ausgewählt. Die [Prioritätsordnung von Animationen wird im Folgenden beschrieben](#css-animationen_und_die_kaskade).

Wenn es um {{cssxref("@import")}} geht, nimmt `@import` selbst nicht an der Kaskade teil, aber alle importierten Stile nehmen daran teil. Wenn `@import` eine [benannte oder anonyme Schicht](/de/docs/Web/CSS/@layer) definiert, werden die Inhalte des importierten Stilblatts in die angegebene Schicht eingefügt. Alle anderen mit `@import` importierten CSS werden als letzte deklarierte Schicht behandelt. Dies wurde oben diskutiert.

Schließlich gehorcht {{cssxref("@charset")}} bestimmten Algorithmen und wird nicht vom Kaskadenalgorithmus beeinflusst.

### Präsentative Attribute

Präsentative Attribute sind Attribute im Quelldokument, die das Styling beeinflussen können. Zum Beispiel setzt das veraltete `align`-Attribut die Ausrichtung auf mehreren HTML-Elementen und das `fill`-Attribut definiert die Farbe, die zum Malen von SVG-Formen und -Texten verwendet wird, und definiert den Endzustand für SVG-Animationen. Obwohl sie Autorenstile sind, nehmen Präsentative Attribute nicht an der Kaskade teil.

Wenn das HTML-Präsentationsattribut vom Benutzeragenten unterstützt wird, werden gültige Präsentationsattribute, die in HTML und SVG enthalten sind, wie die [`align`](/de/docs/Web/HTML/Element/img#align)- oder [`fill`](/de/docs/Web/SVG/Attribute/fill)-Attribute, in die entsprechenden CSS-Regeln übersetzt (alle SVG-Präsentationsattribute werden als CSS-Eigenschaften unterstützt) und in das Autorenstilblatt vor allen anderen Stilen mit einer Spezifität gleich `0` eingefügt.

Präsentative Attribute können nicht als `!important` deklariert werden.

## CSS-Animationen und die Kaskade

[CSS-Animationen](/de/docs/Web/CSS/CSS_animations), die {{ cssxref("@keyframes")}}-Regeln verwenden, definieren Animationen zwischen Zuständen. Keyframes kaskadieren nicht, das bedeutet, dass zu jedem gegebenen Zeitpunkt CSS nur Werte aus einem einzigen {{cssxref("@keyframes")}} annimmt und nie mehrere zusammen mischt.

Wenn mehrere Keyframe-Animationen mit demselben Animationsnamen definiert sind, wird die zuletzt definierte `@keyframes` in der Herkunft und Schicht mit der größten Priorität verwendet. Nur eine `@keyframes`-Definition wird verwendet, selbst wenn die `@keyframes` unterschiedliche Eigenschaften animiert. `@keyframes` mit demselben Namen werden niemals kombiniert.

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

In diesem Beispiel gibt es drei separate Animationsdeklarationen mit dem Namen `repeatedName`. Wenn `animation: infinite 5s alternate repeatedName` auf den Absatz angewendet wird, wird nur eine Animation angewendet: die Keyframe-Animation, die im ungelagerten CSS deklariert ist, hat Vorrang vor den geschichteten Keyframe-Animationsdeklarationen, basierend auf der Herkunfts- und Kaskaden-Schicht-Prioritätsordnung. In diesem Beispiel wird nur die Schriftgröße des Elements animiert.

> [!NOTE]
> Es gibt keine wichtigen Animationen, da Eigenschaftsdeklarationen in einem {{cssxref('@keyframes')}}-Block, die `!important` als Teil des Wertes enthalten, ignoriert werden.

## Zurücksetzen von Stilen

Nachdem Ihr Inhalt das Styling beendet hat, kann es in einer Situation sein, in der es die Stile auf einen bekannten Zustand zurücksetzen muss. Dies kann in Fällen von Animationen, Themenänderungen und dergleichen passieren. Die CSS-Eigenschaft {{cssxref("all")}} ermöglicht Ihnen, schnell (fast) alles in CSS auf einen bekannten Zustand zurückzusetzen.

`all` ermöglicht Ihnen die sofortige Wiederherstellung aller Eigenschaften auf einen ihrer ursprünglichen (standardmäßigen) Zustände, den von der vorherigen Ebene der Kaskade geerbten Zustand, eine bestimmte Herkunft (das Benutzeragenten-Stilblatt, das Autorenstilblatt oder das Benutzerstilblatt) oder sogar das vollständige Löschen der Werte der Eigenschaften.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/Syntax)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [At-Regeln](/de/docs/Web/CSS/At-rule)
- [Empfohlene](/de/docs/Web/CSS/initial_value), [berechnete](/de/docs/Web/CSS/computed_value), [verwendete](/de/docs/Web/CSS/used_value) und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
