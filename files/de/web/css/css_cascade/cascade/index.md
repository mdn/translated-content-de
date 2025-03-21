---
title: Einführung in das CSS-Kaskadieren
slug: Web/CSS/CSS_cascade/Cascade
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Der **Kaskade** ist ein Algorithmus, der definiert, wie Nutzeragenten Eigenschaftswerte aus verschiedenen Quellen kombinieren. Die Kaskade legt fest, welche Herkunft und Schicht Vorrang haben, wenn Deklarationen aus mehr als einer [Herkunft](#herkunftstypen), einer [Kaskadenschicht](/de/docs/Web/CSS/@layer) oder einem {{CSSxRef("@scope")}} Block einen Wert für eine Eigenschaft eines Elements setzen.

Das Kaskadieren liegt im Kern von CSS, was der Name unterstreicht: _**Cascading**_ Style Sheets. Wenn ein [Selektor](/de/docs/Web/CSS/CSS_selectors) zu einem Element passt, wird der Eigenschaftswert von der Herkunft mit der höchsten Priorität angewendet, selbst wenn der Selektor aus einer Herkunft mit niedrigerer Priorität oder Schicht eine höhere [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) hat.

Dieser Artikel erklärt, was die Kaskade ist und die Reihenfolge, in der {{Glossary("CSS", "CSS")}}-[Deklarationen](/de/docs/Web/API/CSSStyleDeclaration) kaskadieren, einschließlich Kaskadenschichten und Herkunftstyp. Das Verständnis der Priorität von Herkunft ist der Schlüssel zum Verständnis der Kaskade.

## Herkunftstypen

Die Aufgabe des CSS-Kaskaden-Algorithmus besteht darin, CSS-Deklarationen auszuwählen, um die richtigen Werte für CSS-Eigenschaften zu bestimmen. CSS-Deklarationen stammen aus verschiedenen Herkunftstypen: **[Nutzeragenten-Stilblätter](#nutzeragenten-stilblätter)**, **[Autoren-Stilblätter](#autoren-stilblätter)** und **[Nutzer-Stilblätter](#nutzer-stilblätter)**.

Obwohl Stilblätter aus diesen verschiedenen Herkünften stammen und in verschiedenen [Schichten](/de/docs/Web/CSS/@layer) innerhalb dieser Herkünfte liegen können, überschneiden sie sich hinsichtlich ihres Standardbereichs; um dies zu ermöglichen, definiert der Kaskaden-Algorithmus, wie sie interagieren. Bevor wir uns mit den Interaktionen befassen, werden wir in den nächsten Abschnitten einige Schlüsselbegriffe definieren.

### Nutzeragenten-Stilblätter

Nutzeragenten oder Browser haben grundlegende Stilblätter, die jedem Dokument Standardstile zuweisen. Diese Stilblätter werden **Nutzeragenten-Stilblätter** genannt. Die meisten Browser verwenden tatsächliche Stilblätter zu diesem Zweck, während andere diese in Code simulieren. Das Endergebnis ist dasselbe.

Einige Browser erlauben es Nutzern, das Nutzeragenten-Stilblatt zu ändern, aber dies ist selten und nicht steuerbar.

Obwohl einige Einschränkungen für Nutzeragenten-Stilblätter durch die HTML-Spezifikation festgelegt sind, haben Browser viel Spielraum: das bedeutet, einige Unterschiede zwischen den Browsern existieren. Um den Entwicklungsprozess zu vereinfachen, können Webentwickler ein CSS-Reset-Stilblatt wie [normalize.css](https://github.com/necolas/normalize.css) verwenden, das allgemeine Eigenschaftswerte für alle Browser in einen bekannten Zustand versetzt, bevor sie Änderungen entsprechend ihren spezifischen Bedürfnissen vornehmen.

Es sei denn, das Nutzeragenten-Stilblatt enthält ein [`!important`](/de/docs/Web/CSS/CSS_cascade/Specificity#the_!important_exception) neben einer Eigenschaft, die sie "wichtig" macht, haben durch Autoren deklarierte Stile, einschließlich eines Reset-Stilblattes, Vorrang vor den Nutzeragenten-Stilen, unabhängig von der Spezifität des zugehörigen Selektors.

### Autoren-Stilblätter

**Autoren-Stilblätter** sind der gebräuchlichste Typ von Stilblättern; dies sind die Stile, die von Webentwicklern geschrieben werden. Diese Stile können, wie oben erwähnt, Nutzeragenten-Stile zurückzusetzen und definieren die Stile für das Design einer bestimmten Webseite oder Anwendung. Der Autor oder Webentwickler definiert die Stile für das Dokument unter Verwendung eines oder mehrerer verknüpfter oder importierter Stilblätter, {{HTMLElement('style')}}-Blöcke und Inline-Stile, die mit dem [`style`](/de/docs/Web/HTML/Global_attributes/style) Attribut definiert sind. Diese Autorenstile definieren das Aussehen und die Haptik der Website — ihr Thema.

### Nutzer-Stilblätter

In den meisten Browsern kann der Nutzer (oder Leser) der Website die Stile mit einem benutzerdefinierten **Nutzer-Stilblatt** überschreiben, das darauf ausgelegt ist, das Erlebnis nach den Wünschen des Benutzers anzupassen. Je nach Nutzeragenten können [Nutzerstile konfiguriert werden](https://www.thoughtco.com/user-style-sheet-3469931) oder über Browsererweiterungen hinzugefügt werden.

### Kaskadenschichten

Die Kaskadenreihenfolge basiert auf dem Herkunftstyp. Die Kaskade innerhalb jedes Herkunftstyps basiert auf der Deklarationsreihenfolge der [Kaskadenschichten](/de/docs/Web/CSS/@layer) innerhalb dieses Typs. Für alle Herkünfte - Nutzeragenten, Autoren oder Nutzer - können Stile innerhalb oder außerhalb benannter oder anonymer Schichten deklariert werden. Wenn sie unter Verwendung von [`layer`, `layer()`](/de/docs/Web/CSS/@import) oder [`@layer`](/de/docs/Web/CSS/@layer) deklariert werden, werden Stile in die angegebene benannte Schicht oder in eine anonyme Schicht eingeordnet, wenn kein Name angegeben ist. Stile, die außerhalb einer Schicht deklariert werden, werden als Teil einer anonymen zuletzt deklarierten Schicht behandelt.

Schauen wir uns den kaskadierenden Herkunftstyp an, bevor wir in die Kaskadenschichten innerhalb eines jeden Herkunftstyps eintauchen.

## Kaskadierende Reihenfolge

Der Kaskaden-Algorithmus bestimmt, wie der anzuwendende Wert für jede Eigenschaft für jedes Dokumentelement gefunden wird. Die folgenden Schritte gelten für den Kaskaden-Algorithmus:

1. **Relevanz**: Zuerst filtert er alle Regeln aus verschiedenen Quellen, um nur die Regeln zu behalten, die für ein bestimmtes Element gelten. Das bedeutet Regeln, deren Selektor zu dem gegebenen Element passt und die Teil einer passenden `media` At-Regel sind.
2. **Herkunft und Wichtigkeit**: Dann sortiert er diese Regeln nach ihrer Wichtigkeit, d.h. ob sie von `!important` gefolgt werden oder nicht, und nach ihrer Herkunft. Bei Nichtberücksichtigung der Schichten ist die Kaskadenreihenfolge wie folgt:

   | Prioritätsreihenfolge (niedrig bis hoch) | Herkunft                  | Wichtigkeit  |
   | ---------------------------------------- | ------------------------- | ------------ |
   | 1                                        | Nutzeragent (Browser)     | normal       |
   | 2                                        | Nutzer                    | normal       |
   | 3                                        | Autor (Entwickler)        | normal       |
   | 4                                        | CSS-@keyframe-Animationen |              |
   | 5                                        | Autor (Entwickler)        | `!important` |
   | 6                                        | Nutzer                    | `!important` |
   | 7                                        | Nutzeragent (Browser)     | `!important` |
   | 8                                        | CSS-Übergänge             |              |

3. **Spezifität**: Bei Gleichheit mit einer Herkunft wird die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) einer Regel herangezogen, um einen Wert auszuwählen oder einen anderen zu wählen. Die Spezifität der Selektoren wird verglichen, und die Deklaration mit der größten Spezifität gewinnt.
4. **Abstand zur Bereichsquelle**: Wenn zwei Selektoren in der vorrangigen Ursprungsschicht die gleiche Spezifität haben, gewinnt der Eigenschaftswert innerhalb von bereichsbeschränkten Regeln mit der kleinsten Anzahl an "Hops" die DOM-Hierarchie hinauf zur Bereichsquelle. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.
5. **Reihenfolge des Auftretens**: In der vorrangigen Herkunft, wenn es konkurrierende Werte für eine Eigenschaft gibt, die in einem Stilblock übereinstimmende Selektoren mit gleicher Spezifität und Bereichsquelle aufweisen, wird die letzte Deklaration in der Stilreihenfolge angewendet.

Die Kaskade ist in aufsteigender Reihenfolge, was bedeutet:

- Animationen haben Vorrang vor normalen Werten, egal ob sie in Nutzer-, Autoren- oder Nutzeragenten-Stilen deklariert sind.
- Wichtige Werte haben Vorrang vor Animationen, egal ob sie in Nutzer-, Autoren- oder Nutzeragenten-Stilen deklariert sind.
- Übergänge haben Vorrang vor wichtigen Werten.

> **Hinweis:** **Übergänge und Animationen**
>
> Eigenschaftswerte, die durch Animation {{cssxref('@keyframes')}} gesetzt werden, sind wichtiger als alle normalen Stile (solche ohne [`!important`](/de/docs/Web/CSS/CSS_cascade/Specificity#the_!important_exception)).
>
> Eigenschaftswerte, die in einem {{cssxref('transition')}} gesetzt werden, haben Vorrang vor allen anderen gesetzten Werten, selbst denen, die mit `!important` markiert sind.

Der Kaskaden-Algorithmus wird _vor_ dem Spezifitäts-Algorithmus angewendet, was bedeutet, dass, wenn `:root p { color: red;}` im Nutzer-Stilblatt deklariert wird (Reihe 2) und ein weniger spezifisches `p {color: blue;}` im Autoren-Stilblatt (Reihe 3) steht, die Absätze blau sein werden.

## Einfaches Beispiel

Bevor wir einen tieferen Blick darauf werfen, wie Kaskadenschichten die Kaskade beeinflussen, schauen wir uns ein Beispiel mit mehreren CSS-Quellen aus verschiedenen Herkünften an und arbeiten die Schritte des Kaskaden-Algorithmus durch:

Hier haben wir ein Nutzeragenten-Stilblatt, zwei Autoren-Stilblätter und ein Nutzer-Stilblatt, ohne Inline-Stile innerhalb des HTML:

**Nutzeragenten-CSS:**

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

**Nutzer-CSS:**

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

In diesem Fall sollten Deklarationen innerhalb der `li`- und `.specific`-Regeln gelten.

Ein weiteres Mal gibt es fünf Schritte im Kaskaden-Algorithmus, und zwar in der Reihenfolge:

1. Relevanz
2. Herkunft und Wichtigkeit
3. Spezifität
4. Abstand zur Bereichsquelle
5. Reihenfolge des Auftretens

Das `1px` ist für Printmedien. Aufgrund fehlender _Relevanz_ basierend auf dem Medientyp wird es aus der Betrachtung ausgeschlossen.

Keine Deklaration ist als `!important` markiert, sodass die Prioritätsreihenfolge Autoren-Stilblätter über Nutzer-Stilblätter über Nutzeragenten-Stilblatt lautet. Basierend auf _Herkunft und Wichtigkeit_ werden das `1em` aus dem Nutzer-Stilblatt und das `10px` aus dem Nutzeragenten-Stilblatt aus der Betrachtung ausgeschlossen.

Beachten Sie, dass selbst wenn der Nutzerstil auf `.specific` von `1em` eine höhere Spezifität hat, ist es eine normale Deklaration in einem Nutzer-Stilblatt. Daher hat es eine niedrigere Priorität als alle Autoren-Stile und wird bei der Herkunft und Wichtigkeit im Algorithmus entfernt, bevor die Spezifität überhaupt ins Spiel kommt.

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

Die letzte, die `5px`, ist Teil einer Kaskadenschicht. Normale Deklarationen in Schichten haben eine niedrigere Priorität als normale Stile, die nicht in einer Schicht sind, innerhalb desselben Herkunftstyps. Diese ist auch aufgrund Schritt 2 des Algorithmus, _Herkunft und Wichtigkeit_, entfernt.

Übrig bleiben die `0` und die `3px`, die beide den gleichen Selektor haben, daher auch die gleiche _Spezifität_. Keine von ihnen ist innerhalb eines `@scope`-Blocks, daher spielt die Nähe der Bereichsquelle in diesem Beispiel auch keine Rolle.

Dann schauen wir auf die _Reihenfolge des Auftretens_. Die zweite, die letzte der beiden nicht geschichteten Autoren-Stile, gewinnt.

```css
margin-left: 3px;
```

> [!NOTE]
> Die im Nutzer-CSS definierte Deklaration, obwohl sie vielleicht größere Spezifität hat, wird nicht gewählt, da der Kaskaden-Algorithmus' _Herkunft und Wichtigkeit_ vor dem _Spezifität_ Algorithmus angewendet wird. Die in einer Kaskadenschicht definierte Deklaration, obwohl sie möglicherweise später im Code kommt, wird auch nicht die oberste Priorität haben, da normale Stile in Kaskadenschichten weniger Vorrang haben als normale nicht geschichtete Stile. _Reihenfolge des Auftretens_ spielt nur eine Rolle, wenn sowohl Herkunft, Wichtigkeit als auch Spezifität gleich sind.

## Autoren-Stile: Inline-Stile, Schichten und Vorrang

Die [Tabelle in Kaskadierende Reihenfolge](#kaskadierende_reihenfolge) bot einen Überblick über die Reihenfolge der Priorität. Die Tabelle fasste die Nutzeragenten-, Nutzer- und Autoren-Herkunftstyp-Stile in zwei Zeilen für jede zusammen mit "Herkunftstyp - normal" und "Herkunftstyp - !important". Die Priorität innerhalb jedes Herkunftstyps ist nuancierter. Stile können innerhalb von Schichten ihres Herkunftstyps liegen und bei Autorenstilen gibt es auch die Frage, wo Inline-Stile in der Kaskadenreihenfolge landen.

Die Reihenfolge, in der Schichten deklariert werden, ist wichtig für die Bestimmung der Priorität. Normale Stile in einer Schicht haben Vorrang vor Stilen, die in vorhergehenden Schichten deklariert wurden; mit normalen Stilen, die außerhalb einer Schicht deklariert wurden und Vorrang vor normalen geschichteten Stilen, unabhängig von der Spezifität.

In diesem Beispiel hat der Autor die {{CSSXref('@import')}}-Regel von CSS verwendet, um fünf externe Stile innerhalb eines {{HTMLElement('style')}}-Informationselements zu importieren.

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

Im obigen CSS-Codeblock wurden drei Kaskadenschichten namens "A", "B" und "C" erstellt, in dieser Reihenfolge. Drei Stilblätter wurden direkt in Schichten importiert und zwei wurden ohne Erstellen oder Zuweisung zu einer Schicht importiert.
Die "Alle nicht geschichteten Stile" in der Liste unten (normale Autorenstil-Priorität - Reihenfolge 4) umfassen Stile aus diesen beiden Stilblättern und den zusätzlichen nicht geschichteten CSS-Stilblöcken. Zusätzlich gibt es zwei Inline-Stile, eine normale `line-height`-Deklaration und eine wichtige `text-decoration` Deklaration:

| Prioritätsreihenfolge (niedrig bis hoch) | Autorenstil                    | Wichtigkeit  |
| ---------------------------------------- | ------------------------------ | ------------ |
| 1                                        | A - erste Schicht              | normal       |
| 2                                        | B - zweite Schicht             | normal       |
| 3                                        | C - letzte Schicht             | normal       |
| 4                                        | Alle nicht geschichteten Stile | normal       |
| 5                                        | Inline `style`                 | normal       |
| 6                                        | Animationen                    |              |
| 7                                        | Alle nicht geschichteten Stile | `!important` |
| 8                                        | C - letzte Schicht             | `!important` |
| 9                                        | B - zweite Schicht             | `!important` |
| 10                                       | A - erste Schicht              | `!important` |
| 11                                       | Inline `style`                 | `!important` |
| 12                                       | Übergänge                      |              |

In allen Herkunftstypen haben normale Stile, die in Schichten enthalten sind, die niedrigste Priorität. In unserem Beispiel haben die normalen Stile, die mit der ersten deklarierten Schicht (A) verbunden sind, eine niedrigere Priorität als normale Stile in der zweiten deklarierten Schicht (B), die eine niedrigere Priorität als normale Stile in der dritten deklarierten Schicht (C) haben. Diese geschichteten Stile haben eine niedrigere Priorität als alle normalen nicht geschichteten Stile, die normale Stile aus `unlayeredStyles.css`, `moreUnlayeredStyles.css` und die `color` von `p` im `<style>` selbst umfassen.

Wenn geschichtete Stile in A, B oder C Selektoren mit höherer Spezifität passend zu einem Element haben, ähnlich `:root body p { color: black; }`, spielt das keine Rolle. Diese Deklarationen werden von der Betrachtung ausgeschlossen, weil _Herkunft_; normale geschichtete Stile haben weniger Vorrang als normale nicht geschichtete Stile. Wenn jedoch der spezifischere Selektor `:root body p { color: black; }` in `unlayeredStyles.css` gefunden würde, da sowohl _Herkunft und Wichtigkeit_ die gleiche Priorität haben, würde _specificity_ bedeuten, dass die spezifischere, schwarze Deklaration gewinnen würde.

Die Schichtreihenfolge der Priorität wird für Stile, die als `!important` deklariert sind, umgekehrt. Wichtige Deklarationen, die in einer Schicht gefunden werden, haben Vorrang vor wichtigen Deklarationen, die außerhalb einer Schicht gefunden werden. Wichtige Deklarationen in der ersten Schicht (A) haben Vorrang vor wichtigen Deklarationen in der Schicht B, die Vorrang vor wichtigen Deklarationen in der Schicht C haben, die Vorrang vor wichtigen Deklarationen haben, die außerhalb einer Schicht gefunden werden.

### Inline-Stile

Nur für Autorenstile relevant sind Inline-Stile, die mit dem `style`-Attribut deklariert werden. Normale Inline-Stile haben Vorrang über alle anderen normalen Autoren-Stile, unabhängig von der Spezifität des Selektors. Wenn `line-height: 2;` in einem `:root body p`-Selektorblock in einem der fünf importierten Stilblätter deklariert wäre, wäre die Zeilenhöhe immer noch `1.6`. Normale Inline-Stile haben keinen Vorrang über animierte oder übergangene Eigenschaften.

Wichtige Inline-Stile haben Vorrang über alle anderen Autoren-Stile, unabhängig davon, ob sie wichtig, inline oder geschichtet sind. Wichtige Inline-Stile haben auch Vorrang über animierte Eigenschaften, jedoch nicht über Übergangseigenschaften. Drei Dinge können einen wichtigen Inline-Stil überschreiben:

- Ein wichtiger Nutzerstil.
- Ein wichtiger Nutzeragent-Stil.
- Eine übergangene Eigenschaft.

### Wichtigkeit und Schichten

Die Reihenfolge der Herkunftstyp-Priorität wird für wichtige Stile umgekehrt. Wichtige Stile, die außerhalb einer Kaskadenschicht deklariert sind, haben eine niedrigere Priorität als die, die als Teil einer Schicht deklariert wurden. Wichtige Stile, die in frühen Schichten deklariert sind, haben Vorrang vor wichtigen Stilen, die in nachfolgenden Kaskadenschichten deklariert wurden.

Beispielsweise der folgende CSS:

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

Obwohl das Rot als erstes deklariert ist und einen weniger spezifischen Selektor hat, gewinnt der Absatz rot, weil nicht geschichtetes CSS Vorrang vor geschichtetem CSS hat. Hätten wir einen Inline-Stil am Absatz hinzugefügt, der ihn auf eine andere Farbe wie `<p style="color: black">` setzen würde, wäre der Absatz schwarz.

Wenn wir `!important` zu diesem CSS-Stück hinzufügen, wird die Prioritätsreihenfolge im Stylesheet umgekehrt:

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

Jetzt wird der Absatz blau. Das `!important` in der frühesten deklarierten Schicht hat Vorrang vor nachfolgenden Schichten und nicht geschichteten wichtigen Deklarationen. Wenn der Inline-Stil `!important` enthalten würde, wie `<p style="color: black !important">`, wäre der Absatz wieder schwarz. Inline-Wichtigkeit hat Vorrang über alle anderen von Autoren deklarierten `!important`-Deklarationen, unabhängig von der Spezifität.

> [!NOTE]
> Die `!important`-Markierung kehrt die Priorität von Kaskadenschichten um. Aus diesem Grund sollten Sie nach Möglichkeit nicht `!important` verwenden, um externe Stile zu überschreiben. Stattdessen verwenden Sie {{cssxref("@import")}} zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stilblätter (von Frameworks, Widget-Stilblättern, Bibliotheken usw.) in Schichten zu importieren. Indem Sie Stilblätter als erste Deklaration in Ihrem CSS in eine Schicht importieren, setzen Sie ihre Priorität herab, und von Autoren definierte Schichten, die später in Ihrem CSS definiert werden, haben eine höhere Priorität. Die `!important`-Markierung sollte nur sparsam verwendet werden, wenn überhaupt, um erforderliche Stile gegen spätere Überschreibungen zu schützen, in der ersten deklarierten Schicht.

Stile, die einen Übergang durchlaufen, haben Vorrang vor allen wichtigen Stilen, unabhängig davon, wer oder wie sie deklariert sind.

## Gesamtordnung der Kaskade

Nun, da wir ein besseres Verständnis für die Priorität von Herkunftstyp und Kaskadenschicht haben, erkennen wir, dass die Tabelle in [Kaskadierende Reihenfolge](#kaskadierende_reihenfolge) genauer durch die folgende Tabelle dargestellt werden könnte:

<table>
<thead>
  <tr><th>Prioritätsreihenfolge <br/>(niedrig bis hoch)</th><th>Stilherkunft</th><th>Wichtigkeit</th></tr>
</thead>
<tbody>
  <tr><td rowspan="3">1</td><td>Nutzeragent - erste deklarierte Schicht</td><td rowspan="3">normal</td></tr>
  <tr><td>Nutzeragent - letzte deklarierte Schicht</td></tr>
  <tr><td>Nutzeragent - nicht geschichtete Stile</td></tr>
  <tr><td rowspan="3">2</td><td>Benutzer - erste deklarierte Schicht</td><td rowspan="3">normal</td></tr>
  <tr><td>Benutzer - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzer - nicht geschichtete Stile</td></tr>
  <tr><td rowspan="4">3</td><td>Autor - erste deklarierte Schicht</td><td rowspan="4">normal</td></tr>
  <tr><td>Autor - letzte deklarierte Schicht</td></tr>
  <tr><td>Autor - nicht geschichtete Stile</td></tr>
  <tr><td>Inline <code>style</code></td></tr>
  <tr><td>4</td><td>Animationen</td><td></td></tr>
  <tr><td rowspan="4">5</td><td>Autor - nicht geschichtete Stile</td><td rowspan="4"><code>!important</code></td></tr>
  <tr><td>Autor - letzte deklarierte Schicht</td></tr>
  <tr><td>Autor - erste deklarierte Schicht</td></tr>
  <tr><td>Inline <code>style</code></td></tr>
  <tr><td rowspan="3">6</td><td>Benutzer - nicht geschichtete Stile</td><td rowspan="3"><code>!important</td></tr>
  <tr><td>Benutzer - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzer - erste deklarierte Schicht</td></tr>
  <tr><td rowspan="3">7</td><td>Nutzeragent - nicht geschichtete Stile</td><td rowspan="3"><code>!important</code></td></tr>
  <tr><td>Nutzeragent - letzte deklarierte Schicht</td></tr>
  <tr><td>Nutzeragent - erste deklarierte Schicht</td></tr>
  <tr><td>8</td><td>Übergänge</td><td></td></tr>
</tbody>
</table>

## Welche CSS-Entitäten an der Kaskade teilnehmen

Nur CSS-Eigenschafts-/Wertpaardeklarationen nehmen an der Kaskade teil. CSS-At-Regel-Deskriptoren nehmen nicht an der Kaskade teil und HTML-Darstellungsattribute sind nicht Teil der Kaskade.

### At-Regeln

CSS-[At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule), die andere Einheiten als Deklarationen enthalten, wie z.B. eine {{ cssxref("@font-face")}}-Regel, die _Deskriptoren_ enthält, nehmen nicht an der Kaskade teil.

In den meisten Fällen nehmen die in At-Regeln definierten Eigenschaften und Deskriptoren nicht an der Kaskade teil. Nur At-Regeln als Ganzes nehmen an der Kaskade teil. Beispielsweise, innerhalb einer `@font-face` Regel werden Schriftarten durch [`font-family`](/de/docs/Web/CSS/@font-face/font-family) Deskriptoren identifiziert. Wenn mehrere `@font-face` Regeln mit dem gleichen Deskriptor definiert sind, wird nur die geeignetste `@font-face` als Ganzes betrachtet. Wenn mehr als eine identisch geeignet ist, werden die gesamten `@font-face` Deklarationen unter Verwendung der Schritte 1, 2 und 4 des Algorithmus verglichen (es gibt keine Spezifität bei At-Regeln).

Während die Deklarationen der meisten At-Regeln - wie die in {{cssxref("@media")}}, {{cssxref("@document")}}, oder {{cssxref("@supports")}} - an der Kaskade teilnehmen, kann die At-Regel einen gesamten Selektor als irrelevant machen, wie wir mit dem Druckstil im [grundlegenden Beispiel](#einfaches_beispiel) gesehen haben.

Deklarationen in {{cssxref("@keyframes")}} nehmen nicht an der Kaskade teil. Wie bei `@font-face`, wird nur das `@keyframes` als Ganzes über den Kaskaden-Algorithmus ausgewählt. Die [Prioritätsordnung von Animationen wird unten beschrieben](#css-animationen_und_die_kaskade).

Bei {{cssxref("@import")}} nimmt das `@import` selbst nicht an der Kaskade teil, aber alle importierten Stile. Wenn das `@import` eine [benannte oder anonyme Schicht](/de/docs/Web/CSS/@layer) definiert, werden die Inhalte des importierten Stilblattes in die angegebene Schicht eingeordnet. Alle anderen mit `@import` importierten CSS werden als letzte deklarierte Schicht behandelt. Dies wurde oben diskutiert.

Schließlich gehorcht {{cssxref("@charset")}} spezifischen Algorithmen und wird nicht durch den Kaskaden-Algorithmus beeinflusst.

### Präsentationsattribute

Präsentationsattribute sind Attribute im Quelldokument, die sich auf das Styling auswirken können. Zum Beispiel setzt das veraltete Attribut `align`, wenn es enthalten ist, die Ausrichtung für mehrere HTML-Elemente und das Attribut `fill` definiert die Farbe, die zum Malen von SVG-Formen und -Text verwendet wird und bestimmt den endgültigen Zustand für SVG-Animationen. Obwohl sie Autorenstile sind, nehmen Präsentationsattribute nicht an der Kaskade teil.

Wenn das HTML-Präsentationsattribut vom Nutzeragenten unterstützt wird, werden gültige Präsentationsattribute, die in HTML und SVG enthalten sind, wie die [`align`](/de/docs/Web/HTML/Element/img#align) oder [`fill`](/de/docs/Web/SVG/Reference/Attribute/fill) Attribute, in die entsprechenden CSS-Regeln übersetzt (alle SVG-Präsentationsattribute werden als CSS-Eigenschaften unterstützt) und vor allen anderen Stilen mit einer Spezifität gleich `0` in das Autoren-Stilblatt eingefügt.

Präsentationsattribute können nicht als `!important` deklariert werden.

## CSS-Animationen und die Kaskade

[CSS-Animationen](/de/docs/Web/CSS/CSS_animations), die {{cssxref("@keyframes")}}-At-Regeln verwenden, definieren Animationen zwischen Zuständen. `@keyframes` kaskadieren nicht, das bedeutet, dass zu jedem gegebenen Zeitpunkt CSS-Werte nur aus einem einzigen Satz von `@keyframes` entnommen werden und nie mehrere gemischt werden. Wenn mehrere Sätze von `@keyframes` mit demselben Animationsnamen definiert sind, wird der zuletzt definierte Satz in der Herkunft und Schicht mit der größten Priorität verwendet. Andere `@keyframes` werden ignoriert, selbst wenn sie verschiedene Eigenschaften animieren.

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

In diesem Beispiel gibt es drei separate Animationsdeklarationen mit dem Namen `repeatedName`. Wenn `animation: infinite 5s alternate repeatedName` auf den Absatz angewendet wird, wird nur eine Animation angewendet: die Schlüsselbild-Animation, die in dem nicht geschichteten CSS definiert wird, hat Vorrang vor den in den geschichteten Schlüsselbild-Animationsdeklarationen basierend auf der Herkunft und Schicht-Prioritätsreihenfolge. In diesem Beispiel wird nur die Schriftgröße des Elements animiert.

> [!NOTE]
> Es gibt keine wichtigen Animationen, da Eigenschaftsdeklarationen in einem {{cssxref('@keyframes')}}-Block, die `!important` als Teil des Wertes enthalten, ignoriert werden.

## Zurücksetzen von Stilen

Nachdem Ihr Inhalt das Styling abgeschlossen hat, kann er sich in einer Situation befinden, in der er zurückgesetzt werden muss, um sie in einen bekannten Zustand zu versetzen. Dies kann in Fällen von Animationen, Themenänderungen und so weiter geschehen. Durch die CSS-Eigenschaft {{cssxref("all")}} können Sie schnell (fast) alles in CSS wieder in einen bekannten Zustand versetzen.

`all` lässt Ihnen die Option, alle Eigenschaften sofort auf einen ihrer ursprünglichen (Standard-)Zustände zurückzusetzen, den Zustand, den Sie von der vorherigen Ebene der Kaskade vererbt haben, eine spezifische Herkunft (das Nutzeragent-Stilblatt, das Autoren-Stilblatt oder das Nutzer-Stilblatt) oder sogar die Werte der Eigenschaften vollständig zu löschen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadieren und Vererbung](/de/docs/Web/CSS/CSS_cascade)-Modul
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Initialwert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value), [berechneter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed-value), [verwendeter Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used-value) und [tatsächlicher Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual-value)
