---
title: Einführung in die CSS-Kaskade
short-title: Introduction
slug: Web/CSS/Guides/Cascade/Introduction
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Die **Kaskade** ist ein Algorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte aus verschiedenen Quellen kombinieren. Die Kaskade legt die Ursprünge und Ebenen fest, die Vorrang haben, wenn Deklarationen aus mehr als einem [Ursprung](#ursprungstypen), [Kaskadenebene](/de/docs/Web/CSS/Reference/At-rules/@layer) oder {{CSSxRef("@scope")}}-Block einen Wert für eine Eigenschaft eines Elements festlegen.

Die Kaskade liegt im Kern von CSS, was der Name betont: _**Cascading**_ Style Sheets. Wenn ein [Selektor](/de/docs/Web/CSS/Guides/Selectors) mit einem Element übereinstimmt, wird der Eigenschaftswert aus dem Ursprung mit dem höchsten Vorrang angewendet, selbst wenn der Selektor aus einem Ursprung oder einer Ebene mit niedrigerem Vorrang eine höhere [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) hat.

Dieser Artikel erklärt, was die Kaskade ist und die Reihenfolge, in der {{Glossary("CSS", "CSS")}}-[Deklarationen](/de/docs/Web/API/CSSStyleDeclaration) kaskadieren, und behandelt Kaskadenebenen und Ursprungstypen. Das Verständnis der Ursprungspriorität ist der Schlüssel zum Verständnis der Kaskade.

## Ursprungstypen

Die Aufgabe des CSS-Kaskadenalgorithmus ist es, CSS-Deklarationen auszuwählen, um die richtigen Werte für CSS-Eigenschaften zu bestimmen. CSS-Deklarationen stammen aus verschiedenen Ursprungstypen: **[Benutzeragenten-Stileheets](#benutzeragenten-stileheets)**, **[Autoren-Stileheets](#autoren-stileheets)** und **[Benutzer-Stileheets](#benutzer-stileheets)**.

Obwohl Stylesheets aus diesen verschiedenen Ursprüngen stammen und sich in verschiedenen [Ebenen](/de/docs/Web/CSS/Reference/At-rules/@layer) innerhalb dieser Ursprünge befinden können, überschneiden sie sich in Bezug auf ihren Standardscope; um dies zu ermöglichen, definiert der Kaskadenalgorithmus, wie sie interagieren. Bevor wir auf die Interaktionen eingehen, werden wir in den nächsten Abschnitten einige Schlüsselbegriffe definieren.

### Benutzeragenten-Stileheets

Benutzeragenten oder Browser haben grundlegende Stylesheets, die jedem Dokument Standardstile geben. Diese Stylesheets werden als **Benutzeragenten-Stileheets** bezeichnet. Die meisten Browser verwenden für diesen Zweck tatsächliche Stylesheets, während andere sie im Code simulieren. Das Endergebnis ist dasselbe.

Einige Browser erlauben es den Benutzern, das Benutzeragenten-Stileheet zu ändern, aber das ist selten und nicht steuerbar.

Obwohl einige Einschränkungen der Benutzeragenten-Stileheets durch die HTML-Spezifikation festgelegt sind, haben Browser viel Spielraum: Dies bedeutet, dass es einige Unterschiede zwischen den Browsern gibt. Um den Entwicklungsprozess zu vereinfachen, können Webentwickler ein CSS-Reset-Stileheet verwenden, wie z.B. [normalize.css](https://github.com/necolas/normalize.css), das allgemeine Eigenschaftswerte auf einen bekannten Zustand für alle Browser setzt, bevor sie Änderungen vornehmen, um ihre spezifischen Bedürfnisse zu erfüllen.

Sofern das Benutzeragenten-Stileheet nicht ein [`!important`](/de/docs/Web/CSS/Guides/Cascade/Specificity#the_!important_exception) neben einer Eigenschaft enthält, um es "wichtig" zu machen, haben vom Autor deklarierte Stile, einschließlich eines Reset-Stilesheets, Vorrang vor den Benutzeragenten-Stilen, unabhängig von der Spezifität des zugehörigen Selektors.

### Autoren-Stileheets

**Autoren-Stileheets** sind die häufigste Art von Stylesheets; dies sind die vom Webentwickler geschriebenen Stile. Diese Stile können Benutzeragenten-Stile zurücksetzen, und definieren die Stile für das Design einer bestimmten Webseite oder Anwendung. Der Autor oder Webentwickler definiert die Stile für das Dokument mit einem oder mehreren verlinkten oder importierten Stylesheets, {{HTMLElement('style')}}-Blöcken und Inline-Stilen, die mit dem [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut definiert sind. Diese Autorenstile definieren das Aussehen und Gefühl der Website — ihr Thema.

### Benutzer-Stileheets

In den meisten Browsern kann der Benutzer der Website die Stile mit einem benutzerdefinierten **Benutzer-Stileheet** überschreiben, um die Erfahrung an die Wünsche des Benutzers anzupassen. Abhängig vom Benutzeragenten können [Benutzerstile konfiguriert](https://www.thoughtco.com/user-style-sheet-3469931) oder über Browsererweiterungen hinzugefügt werden.

### Kaskadenebenen

Die Kaskadenreihenfolge basiert auf dem Ursprungstyp. Die Kaskade innerhalb jedes Ursprungstyps basiert auf der Deklarationsreihenfolge der [Kaskadenebenen](/de/docs/Web/CSS/Reference/At-rules/@layer) innerhalb dieses Typs. Für alle Ursprünge - Benutzeragenten, Autor oder Benutzer - können Stile innerhalb oder außerhalb von benannten oder anonymen Ebenen deklariert werden. Wenn Stile mit [`layer`, `layer()`](/de/docs/Web/CSS/Reference/At-rules/@import) oder [`@layer`](/de/docs/Web/CSS/Reference/At-rules/@layer) deklariert werden, werden sie in die angegebene benannte Ebene oder in eine anonyme Ebene platziert, wenn kein Name angegeben ist. Stile, die außerhalb einer Ebene deklariert sind, werden als Teil einer zuletzt deklarierten anonymen Ebene betrachtet.

Werfen wir einen Blick auf die kaskadierende Ursprungsart, bevor wir in Kaskadenebenen innerhalb jedes Ursprungstyps eintauchen.

## Kaskadenreihenfolge

Der Kaskadenalgorithmus bestimmt, wie der anzuwendende Wert für jede Eigenschaft für jedes Dokumentelement gefunden wird. Die folgenden Schritte gelten für den Kaskadenalgorithmus:

1. **Relevanz**: Zuerst filtert er alle Regeln aus den verschiedenen Quellen, um nur die Regeln zu behalten, die auf ein bestimmtes Element zutreffen. Das bedeutet Regeln, deren Selektor mit dem gegebenen Element übereinstimmt und die Teil einer geeigneten `media`-@-Regel sind.
2. **Ursprung und Wichtigkeit**: Dann sortiert er diese Regeln nach ihrer Wichtigkeit, das heißt, ob sie von `!important` gefolgt werden oder nicht, und nach ihrem Ursprung. Ignorieren wir für den Moment die Ebenen, so ist die Kaskadenreihenfolge wie folgt:

   | Vorrangsreihenfolge (niedrig bis hoch) | Ursprung                      | Wichtigkeit  |
   | -------------------------------------- | ----------------------------- | ------------ |
   | 1                                      | Benutzeragent (Browser)       | normal       |
   | 2                                      | Benutzer                      | normal       |
   | 3                                      | Autor (Entwickler)            | normal       |
   | 4                                      | CSS-Schlüsselbild-Animationen |              |
   | 5                                      | Autor (Entwickler)            | `!important` |
   | 6                                      | Benutzer                      | `!important` |
   | 7                                      | Benutzeragent (Browser)       | `!important` |
   | 8                                      | CSS-Übergänge                 |              |

3. **Spezifität**: Im Falle der Gleichheit mit einem Ursprung wird die [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) einer Regel herangezogen, um einen Wert auszuwählen. Die Spezifität der Selektoren wird verglichen, und die Deklaration mit der höchsten Spezifität gewinnt.
4. **Scoping-Nähe**: Wenn zwei Selektoren in der Ursprungsebene mit Vorrang die gleiche Spezifität haben, gewinnt der Eigenschaftswert innerhalb der gescoped Regeln mit der kleinsten Anzahl von Hops in der DOM-Hierarchie zur Scope-Wurzel. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.
5. **Erscheinungsreihenfolge**: Im Ursprung mit Vorrang, wenn es konkurrierende Werte für eine Eigenschaft gibt, die in Stilblöcken sind, die Selektoren mit gleicher Spezifität und Scoping-Nähe entsprechen, wird die letzte Deklaration in der Stilreihenfolge angewendet.

Die Kaskade ist aufsteigend, das bedeutet:

- Animationen haben Vorrang vor normalen Werten, egal ob sie in Benutzer-, Autoren- oder Benutzeragentenstilen deklariert sind.
- Wichtige Werte haben Vorrang vor Animationen, egal ob sie in Benutzer-, Autoren- oder Benutzeragentenstilen deklariert sind.
- Übergänge haben Vorrang vor wichtigen Werten.

> [!NOTE]
> **Übergänge und Animationen**
>
> Eigenschaftswerte, die durch die Animation {{cssxref('@keyframes')}} festgelegt sind, sind wichtiger als alle normalen Stile (die ohne [`!important`](/de/docs/Web/CSS/Guides/Cascade/Specificity#the_!important_exception) festgelegt sind).
>
> Eigenschaftswerte, die in einem {{cssxref('transition')}} festgelegt sind, haben Vorrang vor allen anderen festgelegten Werten, sogar denen, die mit `!important` markiert sind.

Der Kaskadenalgorithmus wird _vor_ dem Spezifitätsalgorithmus angewendet, das heißt, wenn `:root p { color: red;}` im Benutzerstileheet (Zeile 2) und ein weniger spezifisches `p {color: blue;}` im Autorenstileheet (Zeile 3) deklariert ist, werden die Absätze blau.

## Einfaches Beispiel

Bevor wir uns eingehender mit der Auswirkung von Kaskadenebenen auf die Kaskade befassen, schauen wir uns ein Beispiel an, das mehrere Quellen von CSS über die verschiedenen Ursprünge hinweg umfasst, und arbeiten die Schritte des Kaskadenalgorithmus durch:

Hier haben wir ein Benutzeragenten-Stileheet, zwei Autoren-Stileheets und ein Benutzer-Stileheet, ohne Inline-Stile im HTML:

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

In diesem Fall sollten Deklarationen innerhalb der `li`- und `.specific`-Regeln angewendet werden.

Noch einmal, es gibt fünf Schritte im Kaskadenalgorithmus, in der Reihenfolge:

1. Relevanz
2. Ursprung und Wichtigkeit
3. Spezifität
4. Scoping-Nähe
5. Erscheinungsreihenfolge

Das `1px` ist für Druckmedien. Aufgrund fehlender _Relevanz_ basierend auf seinem Medientyp wird es aus der Betrachtung entfernt.

Keine Deklaration ist als `!important` markiert, sodass die Vorrangsreihenfolge Autoren-Stileheets über Benutzer-Stileheets über Benutzeragenten-Stileheet ist. Basierend auf _Ursprung und Wichtigkeit_ werden das `1em` aus dem Benutzer-Stileheet und das `10px` aus dem Benutzeragenten-Stileheet aus der Betrachtung entfernt.

Beachten Sie, dass selbst wenn der Benutzerstil auf `.specific` von `1em` eine höhere Spezifität hat, es eine normale Deklaration in einem Benutzer-Stileheet ist. Daher hat es einen niedrigeren Vorrang als alle Autoren-Stile und wird durch den Schritt "Ursprung und Wichtigkeit" des Algorithmus entfernt, bevor die Spezifität überhaupt eine Rolle spielt.

Es gibt drei Deklarationen in Autoren-Stileheets:

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

Die letzte, die `5px` ist Teil einer Kaskadenschicht. Normale Deklarationen in Schichten haben einen niedrigeren Vorrang als normale Stile, die nicht in einer Schicht im gleichen Ursprungstyp sind. Dies wird ebenfalls durch Schritt 2 des Algorithmus, _Ursprung und Wichtigkeit_, entfernt.

Das lässt das `0` und das `3px`, die beide den gleichen Selektor und daher die gleiche _Spezifität_ haben. Keiner von ihnen ist in einem `@scope`-Block, sodass Scoping-Nähe in diesem Beispiel auch nicht ins Spiel kommt.

Wir achten dann auf _Erscheinungsreihenfolge_. Die zweite, die letzte der beiden nicht geschichteten Autorenstile, gewinnt.

```css
margin-left: 3px;
```

> [!NOTE]
> Die Deklaration, die im Benutzer-CSS definiert ist, wird, obwohl sie möglicherweise eine größere Spezifität hat, nicht ausgewählt, da der Kaskadenalgorithmus' _Ursprung und Wichtigkeit_ vor dem _Spezifitäts= algorithmus angewendet wird. Die Deklaration, die in einer Kaskadenschicht definiert ist, mag später im Code kommen, wird aber auch keinen Vorrang haben, da normale Stile in Kaskadenschichten weniger Vorrang als normale, nicht geschichtete Stile haben. \_Erscheinungsreihenfolge_ spielt nur dann eine Rolle, wenn Herkunft, Wichtigkeit und Spezifität gleich sind.

## Autorenstile: Inline-Stile, Ebenen und Vorrang

Die [Tabelle in Kaskadenreihenfolge](#kaskadenreihenfolge) bot einen Überblick über die Vorrangsreihenfolge. Die Tabelle fasste die Typen der Benutzeragent-, Benutzer- und Autorenstile in zwei Linien zusammen mit "Urprungstyp - normal" und "Urprungstyp - !important". Der Vorrang innerhalb jedes Ursprungstyps ist nuancierter. Stile können innerhalb von Ebenen innerhalb ihres Ursprungstyps enthalten sein, und bei Autorenstilen gibt es auch die Frage, wo Inline-Stile in der Kaskadenreihenfolge landen.

Die Reihenfolge, in der Ebenen deklariert werden, ist wichtig für die Bestimmung des Vorrangs. Normale Stile in einer Ebene haben Vorrang vor zuvor deklarierten Ebenen; normale Stile, die außerhalb einer Ebene deklariert sind, haben Vorrang vor normal geschichteten Stilen unabhängig von der Spezifität.

In diesem Beispiel verwendete der Autor die {{CSSXref('@import')}}-Regel von CSS, um fünf externe Stylesheets innerhalb eines {{HTMLElement('style')}}-Informationselements zu importieren.

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

Im obigen CSS-Codeblock wurden drei Kaskadenschichten mit den Namen "A", "B" und "C" erstellt, in dieser Reihenfolge. Drei Stylesheets wurden direkt in Schichten importiert, und zwei wurden importiert, ohne eine Schicht zu erstellen oder zugewiesen zu werden.
Die "Alle ungesehenen Stile" in der nachstehenden Liste (normaler Autorenstil-Vorrang - Ordnung 4) umfasst Stile aus diesen beiden Stylesheets und die zusätzlichen nicht geschichteten CSS-Stilblöcke. Darüber hinaus gibt es zwei Inline-Stile, eine normale `line-height`-Deklaration und eine wichtige `text-decoration`-Deklaration:

| Vorrangsreihenfolge (niedrig bis hoch) | Autorenstil            | Wichtigkeit  |
| -------------------------------------- | ---------------------- | ------------ |
| 1                                      | A - erste Ebene        | normal       |
| 2                                      | B - zweite Ebene       | normal       |
| 3                                      | C - letzte Ebene       | normal       |
| 4                                      | Alle ungesehenen Stile | normal       |
| 5                                      | inline `style`         | normal       |
| 6                                      | Animationen            |              |
| 7                                      | Alle ungesehenen Stile | `!important` |
| 8                                      | C - letzte Ebene       | `!important` |
| 9                                      | B - zweite Ebene       | `!important` |
| 10                                     | A - erste Ebene        | `!important` |
| 11                                     | inline `style`         | `!important` |
| 12                                     | Übergänge              |              |

In allen Ursprungstypen haben normale Stile, die in Ebenen enthalten sind, den niedrigsten Vorrang. In unserem Beispiel haben die normalen Stile, die mit der zuerst deklarierten Ebene (A) verbunden sind, einen niedrigeren Vorrang als normale Stile in der zweitdeklarierten Ebene (B), die einen niedrigeren Vorrang haben als normale Stile in der drittdeklarierten Ebene (C). Diese geschichteten Stile haben einen niedrigeren Vorrang als alle normalen, nicht geschichteten Stile, die normale Stile aus `unlayeredStyles.css`, `moreUnlayeredStyles.css` und die `color` von `p` im `<style>` selbst umfassen.

Wenn irgendein geschichteter Stil in A, B oder C Selektoren mit höherer Spezifität hat, die mit einem Element übereinstimmen, ähnlich wie `:root body p { color: black; }`, spielt das keine Rolle. Diese Deklarationen werden aufgrund von _Ursprung_ aus der Betrachtung entfernt; normale geschichtete Stile haben weniger Vorrang als normale, nicht geschichtete Stile. Wenn jedoch der spezifischere Selektor `:root body p { color: black; }` in `unlayeredStyles.css` gefunden würde, da sowohl _Ursprung und Wichtigkeit_ den gleichen Vorrang haben, würde _Spezifität_ bedeuten, dass die spezifischere, schwarze Deklaration gewinnen würde.

Die Ebenenreihenfolge des Vorrangs ist für Stile, die als `!important` deklariert sind, umgekehrt. Wichtige Deklarationen, die außerhalb einer Ebene gefunden werden, haben einen niedrigeren Vorrang als die, die als Teil einer Ebene deklariert sind. Wichtige Deklarationen, die in der ersten Ebene (A) auftreten, haben Vorrang vor wichtigen Deklarationen, die in Ebene B deklariert sind, die Vorrang vor wichtigen Deklarationen haben, die in Ebene C deklariert sind, die Vorrang vor wichtigen Deklarationen haben, die außerhalb einer Ebene gefunden werden.

### Inline-Stile

Nur für Autorenstile relevant sind Inline-Stile, die mit dem `style`-Attribut deklariert werden. Normale Inline-Stile haben Vorrang vor allen anderen normalen Autorenstilen, unabhängig von der Spezifität des Selektors. Wenn `line-height: 2;` in einem `:root body p`-Selektorblock in einem der fünf importierten Stylesheets deklariert wäre, wäre die Zeilenhöhe trotzdem `1.6`. Normale Inline-Stile haben keinen Vorrang vor animierten oder übergegangenen Eigenschaften.

Wichtige Inline-Stile haben Vorrang vor allen anderen Autorenstilen, unabhängig davon, ob sie wichtig, inline oder geschichtet sind. Wichtige Inline-Stile haben auch Vorrang vor animierten Eigenschaften, aber nicht vor übergegangenen Eigenschaften. Drei Dinge können einen wichtigen Inline-Stil überschreiben:

- Ein wichtiger Benutzerstil.
- Ein wichtiger Benutzeragenten-Stil.
- Eine übergangene Eigenschaft.

### Wichtigkeit und Ebenen

Die Vorrangsreihenfolge des Ursprungstyps ist für wichtige Stile umgekehrt. Wichtige Stile, die außerhalb einer Kaskadenschicht deklariert sind, haben einen niedrigeren Vorrang als diejenigen, die als Teil einer Schicht deklariert sind. Wichtige Stile, die in frühen Schichten auftreten, haben Vorrang vor wichtigen Stilen, die in späteren Kaskadenschichten deklariert sind.

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

Obwohl das Rot zuerst deklariert und einen weniger spezifischen Selektor hat, wird das Paragraph aufgrund des Vorrangs von nicht geschichteten CSS gegenüber geschichteten CSS rot sein. Hätten wir eine Inline-Stil auf das Paragraph gesetzt, der es auf eine andere Farbe setzt, wie `<p style="color: black">`, wäre das Paragraph schwarz.

Wenn wir `!important` zu diesem Stück CSS hinzufügen, ist die Vorrangsreihenfolge innerhalb des Stylesheets umgekehrt:

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

Jetzt wird das Paragraph blau. Das `!important` in der frühest deklarierten Schicht hat Vorrang vor nachfolgenden Schichten und ungeschichteten wichtigen Deklarationen. Wenn der Inline-Stil `!important` enthalten würde, wie `<p style="color: black !important">`, wäre das Paragraph erneut schwarz. Inline-Wichtigkeit hat Vorrang vor allen anderen vom Autor deklarierten `!important`-Deklarationen, unabhängig von der Spezifität.

> [!NOTE]
> Das `!important`-Flag kehrt den Vorrang der Kaskadenschichten um. Aus diesem Grund versuchen Sie nicht, `!important` zu verwenden, um externe Stile zu überschreiben. Verwenden Sie stattdessen {{cssxref("@import")}} zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Ebenen zu importieren. Das Importieren von Stylesheets in eine Schicht als erste Deklaration in Ihrem CSS demontiert deren Vorrang, und vom Autor definierte Schichten, die später in Ihrem CSS definiert sind, haben einen höheren Vorrang. Das `!important`-Flag sollte nur sparsam, wenn überhaupt, verwendet werden, um erforderliche Stile vor späteren Überschreibungen zu schützen, in der zuerst deklarierten Schicht.

Stile, die sich im Übergang befinden, haben Vorrang vor allen wichtigen Stilen, egal wer oder wie sie deklariert sind.

## Vollständige Kaskadenordnung

Jetzt, da wir ein besseres Verständnis für Ursprungstyp- und Kaskadenschichtvorrang haben, erkennen wir, dass die Tabelle in [Kaskadenreihenfolge](#kaskadenreihenfolge) genauer durch die folgende Tabelle dargestellt werden könnte:

<table>
<thead>
  <tr><th>Vorrangsreihenfolge <br/>(niedrig bis hoch)</th><th>Stilursprung</th><th>Wichtigkeit</th></tr>
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
  <tr><td>inline <code>style</code></td></tr>
  <tr><td>4</td><td>Animationen</td><td></td></tr>
  <tr><td rowspan="4">5</td><td>Autor - ungeschichtete Stile</td><td rowspan="4"><code>!important</code></td></tr>
  <tr><td>Autor - letzte deklarierte Schicht</td></tr>
  <tr><td>Autor - erste deklarierte Schicht</td></tr>
  <tr><td>inline <code>style</code></td></tr>
  <tr><td rowspan="3">6</td><td>Benutzer - ungeschichtete Stile</td><td rowspan="3"><code>!important</code></td></tr>
  <tr><td>Benutzer - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzer - erste deklarierte Schicht</td></tr>
  <tr><td rowspan="3">7</td><td>Benutzeragent - ungeschichtete Stile</td><td rowspan="3"><code>!important</code></td></tr>
  <tr><td>Benutzeragent - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzeragent - erste deklarierte Schicht</td></tr>
  <tr><td>8</td><td>Übergänge</td><td></td></tr>
</tbody>
</table>

## Welche CSS-Entitäten nehmen an der Kaskade teil

Nur CSS-Entsprechungs-/Wertpaar-Deklarationen nehmen an der Kaskade teil. CSS-@-Regel-Deskriptoren nehmen nicht an der Kaskade teil und HTML-Präsentationsattribute sind kein Teil der Kaskade.

### At-Regeln

CSS-[At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules), die andere Entitäten als Deklarationen enthalten, wie z.B. eine {{ cssxref("@font-face")}}-Regel, die _Deskriptoren_ enthält, nehmen nicht an der Kaskade teil.

Im Wesentlichen nehmen die in At-Regeln definierten Eigenschaften und Deskriptoren nicht an der Kaskade teil. Nur At-Regeln als Ganzes nehmen an der Kaskade teil. Zum Beispiel, innerhalb einer `@font-face`-Regel werden Schriftarten durch [`font-family`](/de/docs/Web/CSS/Reference/At-rules/@font-face/font-family)-Deskriptoren identifiziert. Wenn mehrere `@font-face`-Regeln mit demselben Deskriptor definiert sind, wird nur die am besten geeignete `@font-face` als Ganzes betrachtet. Wenn mehr als eine identisch geeignet ist, werden die gesamten `@font-face`-Deklarationen mit den Schritten 1, 2 und 4 des Algorithmus verglichen (es gibt keine Spezifität, wenn es um At-Regeln geht).

Während die in den meisten At-Regeln enthaltenen Deklarationen – wie diejenigen in {{cssxref("@media")}}, {{cssxref("@document")}}, oder {{cssxref("@supports")}} – an der Kaskade teilnehmen, kann die At-Regel einen gesamten Selektor irrelevant machen, wie wir im [einfachen Beispiel](#einfaches_beispiel) mit dem Druckstil gesehen haben.

Deklarationen in {{cssxref("@keyframes")}} nehmen nicht an der Kaskade teil. Wie bei `@font-face` wird nur das `@keyframes`-Ganze über den Kaskadenalgorithmus ausgewählt. Der [Vorrangsordnung von Animationen ist unten beschrieben](#css-animationen_und_die_kaskade).

Im Hinblick auf {{cssxref("@import")}} beteiligt sich das `@import` selbst nicht an der Kaskade, aber alle importierten Stile tun dies. Wenn das `@import` eine [benannte oder anonyme Ebene](/de/docs/Web/CSS/Reference/At-rules/@layer) definiert, werden die Inhalte des importierten Stylesheets in die angegebene Ebene eingefügt. Alle anderen mit `@import` importierten CSS werden als zuletzt deklarierte Ebene behandelt. Dies wurde oben besprochen.

Schließlich gehorcht {{cssxref("@charset")}} spezifischen Algorithmen und wird nicht durch den Kaskadenalgorithmus betroffen.

### Präsentationsattribute

Präsentationsattribute sind Attribute im Quelldokument, die die Gestaltung beeinflussen können. Beispielsweise legt das veraltete `align`-Attribut, wenn es eingefügt wird, die Ausrichtung auf mehrere HTML-Elemente fest und das `fill`-Attribut definiert die Farbe, die zum Malen von SVG-Formen und Text verwendet wird und den Endzustand für SVG-Animationen definiert. Während es sich um Autorenstile handelt, nehmen Präsentationsattribute nicht an der Kaskade teil.

Wenn das HTML-Präsentationsattribut vom Benutzeragent unterstützt wird, werden gültige Präsentationsattribute, die in HTML und SVG enthalten sind, wie die [`align`](/de/docs/Web/HTML/Reference/Elements/img#align)- oder [`fill`](/de/docs/Web/SVG/Reference/Attribute/fill)-Attribute, in die entsprechenden CSS-Regeln übersetzt (alle SVG-Präsentationsattribute werden als CSS-Eigenschaften unterstützt) und werden im Autorenstileheet vor allen anderen Stilen mit einer Spezifität von `0` eingefügt.

Präsentationsattribute können nicht als `!important` deklariert werden.

## CSS-Animationen und die Kaskade

[CSS-Animationen](/de/docs/Web/CSS/Guides/Animations), mit {{cssxref("@keyframes")}}-At-Regeln, definieren Animationen zwischen Zuständen. `@keyframes` kaskadieren nicht, was bedeutet, dass CSS zu jedem Zeitpunkt Werte aus nur einem einzelnen `@keyframes`-Satz nimmt und nie mehrere mischt. Wenn mehrere `@keyframes`-Sätze mit demselben Animationsnamen definiert sind, wird der zuletzt definierte Satz im Ursprung und der Ebene, der den größten Vorrang hat verwendet. Andere `@keyframes` werden ignoriert, selbst wenn sie verschiedene Eigenschaften animieren.

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

In diesem Beispiel gibt es drei separate Animationsdeklarationen mit dem Namen `repeatedName`. Wenn `animation: infinite 5s alternate repeatedName` auf den Absatz angewendet wird, wird nur eine Animation angewendet: die Schlüsselbild-Animation, die im nicht geschichteten CSS definiert ist, hat Vorrang vor den geschichteten Schlüsselbild-Animationsdeklarationen basierend auf Ursprungs- und Ebenen-Vorrangsordnung. In diesem Beispiel wird nur die Schriftgröße des Elements animiert.

> [!NOTE]
> Es gibt keine wichtigen Animationen, da Eigenschaftsdeklarationen in einem {{cssxref('@keyframes')}}-Block, die `!important` als Teil des Werts enthalten, ignoriert werden.

## Zurücksetzen von Stilen

Nachdem Ihr Inhalt die Stile abgeschlossen hat, kann er sich in einer Situation befinden, in der er sie auf einen bekannten Zustand zurücksetzen muss. Dies kann in Fällen von Animationen, Themenänderungen usw. auftreten. Die CSS-Eigenschaft {{cssxref("all")}} erlaubt es Ihnen, (fast) alles in CSS schnell auf einen bekannten Zustand zurückzusetzen.

`all` lässt Sie sofort alle Eigenschaften in einen ihrer ursprünglichen (Standardeinstellungen) Zustand, den von der vorherigen Ebene der Kaskade geerbten Zustand, einen bestimmten Ursprung (das Benutzeragenten-Stileheet, das Autorenstileheet oder das Benutzerstileheet) oder sogar die Werte der Eigenschaften vollständig löschen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- [At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [Initial](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [berechnet](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [verwendet](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) und [tatsächliche](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value) Werte
