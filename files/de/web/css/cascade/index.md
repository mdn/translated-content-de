---
title: Einführung in den CSS Cascade
slug: Web/CSS/Cascade
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{CSSRef}}

Der **Cascade** ist ein Algorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte aus unterschiedlichen Quellen kombinieren. Der Cascade definiert, welche Herkunft und Ebene Vorrang hat, wenn Deklarationen aus mehr als einer [Herkunft](#herkunftstypen), [Cascade-Ebene](/de/docs/Web/CSS/@layer) oder {{CSSxRef("@scope")}} Block einen Wert für eine Eigenschaft auf ein Element setzen.

Der Cascade liegt im Kern von CSS, was durch den Namen hervorgehoben wird: _**Cascading**_ Style Sheets. Wenn ein [Selektor](/de/docs/Web/CSS/CSS_selectors) mit einem Element übereinstimmt, wird der Eigenschaftswert der Herkunft mit dem höchsten Vorrang angewendet, auch wenn der Selektor einer Herkunft oder Ebene mit niedrigerem Vorrang eine höhere [Spezifität](/de/docs/Web/CSS/Specificity) hat.

Dieser Artikel erklärt, was der Cascade ist und in welcher Reihenfolge {{Glossary("CSS", "CSS")}} [Deklarationen](/de/docs/Web/API/CSSStyleDeclaration) cascaden, einschließlich Cascade-Ebenen und Herkunftstypen. Das Verständnis von Herkunftsvorrang ist entscheidend für das Verständnis des Cascade.

## Herkunftstypen

Die Aufgabe des CSS-Cascade-Algorithmus besteht darin, CSS-Deklarationen auszuwählen, um die richtigen Werte für CSS-Eigenschaften zu bestimmen. CSS-Deklarationen stammen aus verschiedenen Herkunftstypen: **[Benutzeragenten-Stilelemente](#benutzeragenten-stilelemente)**, **[Autor-Stilelemente](#autor-stilelemente)** und **[Benutzer-Stilelemente](#benutzer-stilelemente)**.

Obwohl Stile aus diesen unterschiedlichen Herkünften stammen und in jedem dieser Herkünfte in unterschiedlichen [Ebenen](/de/docs/Web/CSS/@layer) enthalten sein können, überschneiden sie sich hinsichtlich ihres Standardscopes; um dies zu ermöglichen, definiert der Cascade-Algorithmus, wie sie interagieren. Bevor wir uns mit den Interaktionen befassen, definieren wir in den nächsten Abschnitten einige wichtige Begriffe.

### Benutzeragenten-Stilelemente

Benutzeragenten oder Browser haben grundlegende Stilelemente, die einem Dokument Standardstile geben. Diese Stile werden **Benutzeragenten-Stilelemente** genannt. Die meisten Browser verwenden hierfür tatsächliche Stilelemente, während andere sie im Code simulieren. Das Endergebnis ist das gleiche.

Einige Browser erlauben es Benutzern, das Benutzeragenten-Stilelement zu modifizieren, aber dies ist selten und kann nicht kontrolliert werden.

Obwohl einige Beschränkungen für Benutzeragenten-Stilelemente vom HTML-Standard festgelegt sind, haben Browser viel Spielraum: das bedeutet, dass einige Unterschiede zwischen Browsern existieren. Um den Entwicklungsprozess zu vereinfachen, verwenden Webentwickler möglicherweise ein CSS-Reset-Stilelement, wie [normalize.css](https://github.com/necolas/normalize.css), das gemeinsame Eigenschaftswerte für alle Browser in einen bekannten Zustand versetzt, bevor Anpassungen vorgenommen werden, um ihren spezifischen Anforderungen gerecht zu werden.

Es sei denn, das Benutzeragenten-Stilelement enthält ein [`!important`](/de/docs/Web/CSS/Specificity#the_!important_exception) neben einer Eigenschaft, die es „wichtig“ macht, haben von Autoren deklarierte Stile, einschließlich eines Reset-Stilelements, Vorrang vor den Benutzeragenten-Stilen, unabhängig von der Spezifität des zugehörigen Selektors.

### Autor-Stilelemente

**Autor-Stilelemente** sind die am häufigsten verwendete Art von Stilelementen; dies sind die Stile, die von Webentwicklern geschrieben werden. Diese Stile können Benutzeragenten-Stile zurücksetzen, wie oben erwähnt, und die Stile für das Design einer bestimmten Webseite oder Anwendung definieren. Der Autor oder Webentwickler definiert die Stile für das Dokument mithilfe eines oder mehrerer verlinkter oder importierter Stilelemente, {{HTMLElement('style')}} Blöcke und inline-Stile, die über das [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribut definiert werden. Diese Autorenstile definieren das Aussehen der Website — ihr Thema.

### Benutzer-Stilelemente

In den meisten Browsern kann der Nutzer (oder Leser) der Website wählen, Stile mithilfe eines benutzerdefinierten **Benutzer-Stilelements** zu überschreiben, welches das Erlebnis nach den Wünschen des Benutzers anpasst. Je nach Benutzeragenten können [Benutzerstile konfiguriert werden](https://www.thoughtco.com/user-style-sheet-3469931) oder über Browsererweiterungen hinzugefügt werden.

### Kaskadierungs-Ebenen

Die Kaskadier-Reihenfolge basiert auf dem Herkunftstyp. Die Kaskade innerhalb jedes Herkunftstyps basiert auf der Deklarations-Reihenfolge der [Kaskadierungs-Ebenen](/de/docs/Web/CSS/@layer) innerhalb dieses Typs. Für alle Herkünfte - Benutzeragenten, Autor oder Benutzer - können Stile innerhalb oder außerhalb von benannten oder anonymen Ebenen deklariert werden. Wenn sie mit [`layer`, `layer()`](/de/docs/Web/CSS/@import) oder [`@layer`](/de/docs/Web/CSS/@layer) deklariert werden, werden Stile in die angegebene benannte Ebene oder in eine anonyme Ebene platziert, wenn kein Name angegeben wird. Stile, die außerhalb einer Ebene deklariert werden, werden als Teil einer zuletzt deklarierten anonymen Ebene behandelt.

Lasst uns einen Blick auf den kaskadierenden Herkunftstyp werfen, bevor wir uns in die kaskadierenden Ebenen innerhalb jedes Herkunftstyps vertiefen.

## Kaskadierungsreihenfolge

Der Kaskadierungsalgorithmus bestimmt, wie der Wert gefunden wird, der für jede Eigenschaft für jedes Dokumentelement angewendet wird. Die folgenden Schritte gelten für den Kaskadierungsalgorithmus:

1. **Relevanz**: Zuerst filtert er alle Regeln aus den verschiedenen Quellen, um nur die Regeln beizubehalten, die auf ein bestimmtes Element anwendbar sind. Das bedeutet Regeln, deren Selektor mit dem gegebenen Element übereinstimmt und die Teil einer geeigneten `media` at-rule sind.

2. **Herkunft und Wichtigkeit**: Dann sortiert er diese Regeln nach ihrer Wichtigkeit, das heißt, ob sie von `!important` gefolgt werden oder nicht, und nach ihrer Herkunft. Die Kaskadierungsreihenfolge ohne Berücksichtigung von Ebenen ist wie folgt:

   | Reihenfolge (niedrig zu hoch) | Herkunft                  | Wichtigkeit  |
   | ----------------------------- | ------------------------- | ------------ |
   | 1                             | Benutzeragent (Browser)   | normal       |
   | 2                             | Benutzer                  | normal       |
   | 3                             | Autor (Entwickler)        | normal       |
   | 4                             | CSS @keyframe Animationen |              |
   | 5                             | Autor (Entwickler)        | `!important` |
   | 6                             | Benutzer                  | `!important` |
   | 7                             | Benutzeragent (Browser)   | `!important` |
   | 8                             | CSS Übergänge             |              |

3. **Spezifität**: Bei Gleichheit mit einer Herkunft wird die [Spezifität](/de/docs/Web/CSS/Specificity) einer Regel betrachtet, um einen Wert auszuwählen. Die Spezifität der Selektoren wird verglichen, und die Deklaration mit der höchsten Spezifität gewinnt.
4. **Nähe der Geltungsbereichs**: Wenn zwei Selektoren in der Vorrang-Schicht dieselbe Spezifität haben, gewinnt innerhalb gescopter Regeln der Eigenschaftswert mit der geringsten Anzahl von Sprüngen nach oben in der DOM-Hierarchie zum Wurzelumfang. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für mehr Details und ein Beispiel.
5. **Erscheinungsreihenfolge**: In der vorrangigen Herkunft, wenn es konkurrierende Werte für eine Eigenschaft gibt, die in Stilblöcken übereinstimmender Selektoren mit gleicher Spezifität und Nähe der Geltungsbereiche sind, wird die letzte Deklaration in der Stilreihenfolge angewendet.

Der Cascade ist in aufsteigender Reihenfolge, was bedeutet, dass Animationen Vorrang vor normalen Werten haben, unabhängig davon, ob diese in Benutzer-, Autor- oder Benutzeragenten-Stilen deklariert sind, wichtige Werte haben Vorrang vor Animationen, und Übergänge haben Vorrang vor wichtigen Werten.

> **Hinweis:** **Übergänge und Animationen**
>
> Eigenschaftswerte, die durch Animationen mit {{cssxref('@keyframes')}} festgelegt wurden, sind wichtiger als alle normalen Stile (die ohne [`!important`](/de/docs/Web/CSS/Specificity#the_!important_exception) festgelegt wurden).
>
> Eigenschaftswerte, die in einem {{cssxref('transition')}} festgelegt wurden, haben Vorrang vor allen anderen festgelegten Werten, selbst vor denen, die mit `!important` markiert sind.

Der Cascade-Algorithmus wird _vor_ dem Spezifitätsalgorithmus angewendet, das bedeutet, wenn `:root p { color: red;}` im Benutzer-Stilelement (Zeile 2) und ein weniger spezifisches `p {color: blue;}` im Autor-Stilelement (Zeile 3) erklärt wurde, werden die Absätze blau sein.

## Einfaches Beispiel

Bevor wir einen tieferen Blick darauf werfen, wie Cascade-Ebenen den Cascade beeinflussen, sehen wir uns ein Beispiel an, das mehrere Quellen von CSS aus den verschiedenen Herkünften umfasst und durchlaufen wir die Schritte des Cascade-Algorithmus:

Hier haben wir ein Benutzeragenten-Stilelement, zwei Autor-Stilelemente und ein Benutzer-Stilelement ohne Inline-Stile im HTML:

**Benutzeragenten CSS:**

```css
li {
  margin-left: 10px;
}
```

**Autor CSS 1:**

```css
li {
  margin-left: 0;
} /* This is a reset */
```

**Autor CSS 2:**

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

**Benutzer CSS:**

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

In diesem Fall sollten Deklarationen in `li` und `.specific` Regeln angewendet werden.

Noch einmal gibt es fünf Schritte im Cascade-Algorithmus, in der Reihenfolge:

1. Relevanz
2. Herkunft und Wichtigkeit
3. Spezifität
4. Näherung des Geltungsbereichs
5. Erscheinungsreihenfolge

Der `1px` gilt für Printmedien. Aufgrund des Mangels an _Relevanz_ basierend auf seinem Medientyp wird er aus der Betrachtung entfernt.

Keine Deklaration ist als `!important` markiert, daher ist die Vorrangsfolge Autoren-Stile vor Benutzer-Stilen vor Benutzeragenten-Stilmuster. Basierend auf _Herkunft und Wichtigkeit_ werden das `1em` aus dem Benutzer-Stilelement und das `10px` aus dem Benutzeragenten-Stilelement aus der Betrachtung entfernt.

Beachten Sie, dass selbst wenn der Benutzerstil auf `.specific` von `1em` eine höhere Spezifität aufweist, es sich um eine normale Deklaration in einem Benutzer-Stilelement handelt. Daher hat es eine niedrigere Priorität als alle Autorenstile und wird durch die Herkunfts- und Wichtigkeitsstufe des Algorithmus entfernt, bevor die Spezifität ins Spiel kommt.

Es gibt drei Deklarationen in Autorenstilen:

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

Der letzte, der `5px`, ist Teil einer Cascade-Ebene. Normale Deklarationen in Ebenen haben eine niedrigere Priorität als normale Stile, die nicht in einer Ebene innerhalb des gleichen Herkunftstyps sind. Dies wird auch durch Schritt 2 des Algorithmus entfernt, _Herkunft und Wichtigkeit_.

Dies lässt das `0` und das `3px`, die beide denselben Selektor haben, daher dieselbe _Spezifität_. Keiner von ihnen befindet sich innerhalb eines `@scope` Blocks, so dass die Nähe des Geltungsbereichs in diesem Beispiel ebenfalls nicht ins Spiel kommt.

Wir betrachten dann die _Erscheinungsreihenfolge_. Der zweite, der letzte der beiden unverstärkten Autorenstile, gewinnt.

```css
margin-left: 3px;
```

> [!NOTE]
> Die Deklaration, die im Benutzer-CSS definiert ist, wird, obwohl sie möglicherweise eine größere Spezifität hat, nicht ausgewählt, da der _Herkunft und Wichtigkeit_ Algorithmus des Cascade-Algorithmus angewendet wird, bevor der _Spezifitäts-Algorithmus_. Die in einer Cascade-Ebene definierte Deklaration, obwohl sie später im Code kommt, wird ebenfalls nicht den Vorrang haben, da normale Stile in Cascade-Ebenen weniger Priorität haben als normale unverstärkte Stile. Die _Erscheinungsreihenfolge_ ist nur von Bedeutung, wenn sowohl Herkunft, Wichtigkeit als auch Spezifität gleich sind.

## Autorenstile: Inline-Stile, Ebenen und Vorrang

Die [Tabelle in Kaskadierungsreihenfolge](#kaskadierungsreihenfolge) bot einen Überblick über die Vorrangsreihenfolge. Die Tabelle fasste die Benutzeragenten-, Benutzer- und Autor-Herkunftstile in zwei Zeilen zusammen, je mit "Herkunftstyp - normal" und "Herkunftstyp - !important". Die Vorrangsreihenfolge innerhalb jedes Herkunftstyps ist nuancierter. Stile können in Schichten innerhalb ihres Herkunftstyps enthalten sein, und bei Autorenstilen gibt es auch das Problem, wo Inline-Stile in der Kaskadierungsreihenfolge landen.

Die Reihenfolge, in der Ebenen deklariert werden, ist wichtig, um die Vorrangstellung zu bestimmen. Normale Stile in einer Schicht haben Vorrang vor Stilen, die in vorherigen Ebenen deklariert wurden; mit normalen Stilen, die außerhalb einer Ebene deklariert sind, die Vorrang vor normalen geschichteten Stilen haben, unabhängig von der Spezifität.

In diesem Beispiel hat der Autor die {{CSSXref('@import')}} Regel von CSS verwendet, um fünf externe Stilelemente innerhalb eines {{HTMLElement('style')}} Informations-Elements zu importieren.

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

und dann im Haupttext des Dokuments haben wir Inline-Stile:

```html
<p style="line-height: 1.6em; text-decoration: overline !important;">Hello</p>
```

Im obigen CSS-Codeblock wurden drei Cascade-Ebenen mit den Namen "A", "B" und "C" in dieser Reihenfolge erstellt. Drei Stilelemente wurden direkt in Ebenen importiert und zwei ohne Erstellung oder Zuordnung zu einer Ebene importiert. Die "Alle unverstärkten Stile" in der Liste unten (normale Autorenstil-Vorrangstellung - Reihenfolge 4) umfasst Stile aus diesen beiden Stilelementen und die zusätzlichen unverstärkten CSS-Stilblöcke. Darüber hinaus gibt es zwei Inline-Stile, eine normale `line-height`-Deklaration und eine wichtige `text-decoration`-Deklaration.

| Reihenfolge (niedrig zu hoch) | Autorenstil              | Wichtigkeit  |
| ----------------------------- | ------------------------ | ------------ |
| 1                             | A - erste Ebene          | normal       |
| 2                             | B - zweite Ebene         | normal       |
| 3                             | C - letzte Ebene         | normal       |
| 4                             | Alle unverstärkten Stile | normal       |
| 5                             | inline `style`           | normal       |
| 6                             | Animationen              |              |
| 7                             | Alle unverstärkten Stile | `!important` |
| 8                             | C - letzte Ebene         | `!important` |
| 9                             | B - zweite Ebene         | `!important` |
| 10                            | A - erste Ebene          | `!important` |
| 11                            | inline `style`           | `!important` |
| 12                            | Übergänge                |              |

In allen Herkunftstypen haben die nicht wichtigen Stile, die in Ebenen enthalten sind, die niedrigste Präferenz. In unserem Beispiel haben die normalen Stile, die mit der ersten deklarierten Ebene (A) verbunden sind, eine niedrigere Präferenz als die normalen Stile in der zweiten deklarierten Ebene (B), die eine niedrigere Präferenz als normale Stile in der dritten deklarierten Ebene (C) haben. Diese geschichteten Stile haben eine niedrigere Präferenz als alle normalen unverstärkten Stile, die normale Stile aus `unlayeredStyles.css`, `moreUnlayeredStyles.css` und die `color` von `p` im `<style>` selbst umfassen.

Wenn einer der geschichteten Stile in A, B oder C Selektoren mit höherer Spezifität hat, die mit einem Element übereinstimmen, vergleichbar mit `:root body p { color: black;}`, spielt das keine Rolle. Diese Deklarationen werden aufgrund der _Herkunft_ aus der Betrachtung entfernt; normale geschichtete Stile haben eine geringere Präferenz als normale unverstärkte Stile. Wenn jedoch der spezifischere Selektor `:root body p { color: black;}` in `unlayeredStyles.css` gefunden wird, würde aufgrund der gleichen _Herkunft und Wichtigkeit_ und der gleichen Spezifität der spezifischere, schwarze Deklaration gewinnen.

Die Schichtreihenfolge der Präferenz ist für Stile, die als `!important` erklärt wurden, umgekehrt. Bedeutende Stile, die in einer Schicht deklariert wurden, haben Vorrang vor wichtigen Stilen, die außerhalb einer Schicht deklariert wurden. Bedeutende Stile in der ersten deklarierten Schicht (A) haben Vorrang vor bedeutenden Deklarationen, die in Schicht B gefunden werden, die Vorrang vor C haben, die Vorrang vor bedeutenden Deklarationen in den unverstärkten Stilen haben.

### Inline-Stile

Relevant für Autorenstile sind Inline-Stile, die mit dem `style` Attribut deklariert werden. Normale Inline-Stile haben Vorrang vor allen anderen normalen Autorenstilen, unabhängig von der Spezifität des Selektors. Wäre `line-height: 2;` in einem `:root body p` Selektorblock in einem der fünf importierten Stilelemente deklariert, wäre die Zeilenhöhe dennoch `1.6`.

Normale Inline-Stile haben Vorrang vor allen anderen normalen Autorenstilen, es sei denn, die Eigenschaft wird von einer CSS-Animation verändert.

Alle wichtigen Inline-Stile haben Vorrang vor allen Autorenstilen, wichtig und nicht, inline und nicht, geschichtet und nicht. Wichtige Stile haben auch Vorrang vor animierten Eigenschaften, aber nicht vor Übergangseigenschaften. Drei Dinge können einen wichtigen Inline-Stil übersteuern: 1) ein wichtiger Benutzerstil, 2) ein wichtiger Benutzer-Agenten-Stil oder 3) ein während des Übergangs zu verändernder Eigenschaftswert.

### Wichtigkeit und Ebenen

Die Vorrangsreihenfolge des Herkunftstyps ist für wichtige Stile umgekehrt. Bedeutende Stile, die außerhalb einer Kaskadierungsschicht deklariert wurden, haben eine niedrigere Präferenz als diejenigen, die als Teil einer Schicht deklariert wurden. Bedeutende Werte, die in frühen Varianten vorkommen, haben Vorrang vor wichtigen Stilen, die in späteren Kaskadierungsschichten deklariert wurden.

Betrachten Sie beispielsweise folgendes CSS:

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

Auch wenn das Rot zuerst erklärt wird und einen weniger spezifischen Selektor hat, hat unverstärktes CSS Vorrang vor geschichtetem CSS, der Absatz wird rot sein. Wenn wir einen Inline-Stil am Absatz hinzugefügt hätten, der ihn auf eine andere Farbe setzt, wie z.B. `<p style="color: black">`, würde der Absatz schwarz sein.

Wenn wir `!important` zu diesem kleinen Stück CSS hinzufügen, wird die Vorrangsreihenfolge im Stylesheet umgekehrt:

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

Nun wird der Absatz blau sein. Das `!important` in der frühesten erklärten Ebene hat Vorrang vor nachfolgenden Ebenen und unverstärkten wichtigen Erklärungen. Wenn der Inline-Stil `!important` enthielte, wie z.B. `<p style="color: black !important">`, würde der Absatz wieder schwarz sein. Inline-Wichtigkeit hat Vorrang vor allen anderen Autoren-deklarierten `!important`-Erklärungen, unabhängig von der Spezifität.

> [!NOTE]
> Das `!important`-Flag kehrt den Vorrang von Kaskadierungsschichten um. Aus diesem Grund vermeiden Sie es, `!important` zu verwenden, um externe Stile zu überschreiben. Verwenden Sie stattdessen {{cssxref("@import")}} zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stilmuster (von Frameworks, Widget-Stilblöcken, Bibliotheken usw.) in Ebenen zu importieren. Das Importieren von Stilen in eine Schicht als erste Deklaration in Ihrem CSS senkt ihre Präferenz, und Autoren-definierte Schichten, die später in Ihrem CSS definiert sind, haben eine höhere Präferenz. Das `!important`-Flag sollte nur sparsam, wenn überhaupt, verwendet werden, um erforderliche Stile gegen spätere Überschreibungen als erste deklarierte Schicht zu schützen.

Stile, die sich in Übergängen befinden, haben Vorrang vor allen wichtigen Stilen, unabhängig davon, wer oder wie sie deklariert wurden.

## Komplette Kaskadierungsreihenfolge

Jetzt, da wir ein besseres Verständnis für den Vorrang von Herkunftstypen und Kaskadierungsschichten haben, erkennen wir, dass die Tabelle in [Kaskadierungsreihenfolge](#kaskadierungsreihenfolge) genauer durch die folgende Tabelle dargestellt werden könnte:

<table>
<thead>
  <tr><th>Vorrangreihenfolge <br/>(niedrig zu hoch)</th><th>Stil Herkunft</th><th>Wichtigkeit</th></tr>
</thead>
<tbody>
  <tr><td rowspan="3">1</td><td>Benutzeragent - erste deklarierte Schicht</td><td rowspan="3">normal</td></tr>
  <tr><td>Benutzeragent - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzeragent - unverstärkte Stile</td></tr>
  <tr><td rowspan="3">2</td><td>Benutzer - erste deklarierte Schicht</td><td rowspan="3">normal</td></tr>
  <tr><td>Benutzer - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzer - unverstärkte Stile</td></tr>
  <tr><td rowspan="4">3</td><td>Autor - erste deklarierte Schicht</td><td rowspan="4">normal</td></tr>
  <tr><td>Autor - letzte deklarierte Schicht</td></tr>
  <tr><td>Autor - unverstärkte Stile</td></tr>
  <tr><td>inline <code>style</code></td></tr>
  <tr><td>4</td><td>Animationen</td><td></td></tr>
  <tr><td rowspan="4">5</td><td>Autor - unverstärkte Stile</td><td rowspan="4"><code>!important</code></td></tr>
  <tr><td>Autor - letzte deklarierte Schicht</td></tr>
  <tr><td>Autor - erste deklarierte Schicht</td></tr>
  <tr><td>inline <code>style</code></td></tr>
  <tr><td rowspan="3">6</td><td>Benutzer - unverstärkte Stile</td><td rowspan="3"><code>!important</td></tr>
  <tr><td>Benutzer - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzer - erste deklarierte Schicht</td></tr>
  <tr><td rowspan="3">7</td><td>Benutzeragent - unverstärkte Stile</td><td rowspan="3"><code>!important</code></td></tr>
  <tr><td>Benutzeragent - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzeragent - erste deklarierte Schicht</td></tr>
  <tr><td>8</td><td>Übergänge</td><td></td></tr>
</tbody>
</table>

## Welche CSS-Entitäten nehmen an der Kaskade teil

Nur CSS-Eigenschafts/Werte-Paar-Deklarationen nehmen an der Kaskade teil. CSS at-rule Deskriptoren nehmen nicht an der Kaskade teil und HTML-Präsentationsattribute gehören nicht zur Kaskade.

### At-rules

CSS [at-rules](/de/docs/Web/CSS/At-rule), die andere Entitäten als Deklarationen enthalten, wie eine {{ cssxref("@font-face")}} Regel mit _Deskriptoren_, nehmen nicht an der Kaskade teil.

Im Allgemeinen nehmen die in at-rules definierten Eigenschaften und Deskriptoren nicht an der Kaskade teil. Nur at-rules als Ganzes nehmen an der Kaskade teil. Beispielsweise werden innerhalb einer `@font-face` Regel, Schriftname durch [`font-family`](/de/docs/Web/CSS/@font-face/font-family) Deskriptoren identifiziert. Wenn mehrere `@font-face`-Regeln mit demselben Deskriptor definiert sind, wird nur die geeignetste `@font-face` als Ganzes berücksichtigt. Wenn mehr als eine identisch geeignet ist, werden die gesamten `@font-face`-Deklarationen unter Verwendung der Schritte 1, 2 und 4 des Algorithmus verglichen (es gibt keine Spezifität bei at-rules).

Während die in den meisten at-rules enthaltenen Deklarationen — wie jene in {{cssxref("@media")}}, {{cssxref("@document")}}, oder {{cssxref("@supports")}} — an der Kaskade teilnehmen, kann die at-rule einen gesamten Selektor als nicht relevant bestimmen, wie wir es im [einfachen Beispiel](#einfaches_beispiel) mit dem Druckstil gesehen haben.

Deklarationen in {{cssxref("@keyframes")}} nehmen nicht an der Kaskade teil. Wie bei `@font-face` wird nur das `@keyframes` als Ganzes über den Kaskade-Algorithmus ausgewählt. Die [Vorrangsreihenfolge von Animationen ist unten beschrieben](#css-animationen_und_die_kaskade).

Bei {{cssxref("@import")}} nimmt das `@import` selbst nicht an der Kaskade teil, jedoch nehmen alle importierten Stile daran teil. Wenn `@import` eine [benannte oder anonyme Ebene](/de/docs/Web/CSS/@layer) definiert, werden die Inhalte des importierten Stylesheets in die angegebene Ebene platziert. Alle anderen mit `@import` importierten CSS werden als letzte deklarierte Ebene behandelt. Dies wurde oben diskutiert.

Schließlich folgt {{cssxref("@charset")}} spezifischen Algorithmen und wird nicht vom Kaskade-Algorithmus beeinflusst.

### Präsentationsattribute

Präsentationsattribute sind Attribute im Quelldokument, die das Styling beeinflussen können. Zum Beispiel setzt das veraltete `align`-Attribut die Ausrichtung auf mehreren HTML-Elementen und das `fill`-Attribut definiert die Farbe, die zur Gestaltung von SVG-Formen und Text verwendet wird, und legt den Endzustand für SVG-Animationen fest. Obwohl sie Autoren-Stile sind, nehmen Präsentationsattribute nicht an der Kaskade teil.

Wenn das HTML-Präsentationsattribut vom Benutzeragent unterstützt wird, werden gültige Präsentationsattribute, die in HTML und SVG enthalten sind, wie die [`align`](/de/docs/Web/HTML/Element/img#align) oder [`fill`](/de/docs/Web/SVG/Attribute/fill) Attribute in die entsprechenden CSS-Regeln übersetzt (alle SVG-Präsentationsattribute werden als CSS-Eigenschaften unterstützt) und vor anderen Stilen mit einer Spezifität gleich `0` in das Autorenstilelement eingefügt.

Präsentationsattribute können nicht als `!important` deklariert werden.

## CSS-Animationen und die Kaskade

[CSS-Animationen](/de/docs/Web/CSS/CSS_animations) verwenden {{cssxref("@keyframes")}} at-rules, um Animationen zwischen Zuständen zu definieren. Keyframes kaskadieren nicht, was bedeutet, dass zu jedem gegebenen Zeitpunkt CSS Werte nur aus einem einzigen {{cssxref("@keyframes")}} übernimmt und niemals mehrere zusammenmischt.

Wenn mehrere Keyframe-Animationen mit demselben Animationsnamen definiert sind, wird das zuletzt definierte `@keyframes` in der Herkunft und Schicht mit der größten Präferenz verwendet. Nur eine `@keyframes` Definition wird verwendet, selbst wenn die `@keyframes` verschiedene Eigenschaften animieren. `@keyframes` mit demselben Namen werden nie kombiniert.

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

In diesem Beispiel gibt es drei separate Animationsdeklarationen mit dem Namen `repeatedName`. Wenn `animation: infinite 5s alternate repeatedName` auf den Absatz angewendet wird, wird nur eine Animation angewendet: die im unverstärkten CSS definierte Keyframe-Animation hat Vorrang vor den geschichteten Keyframe-Animationsdeklarationen basierend auf der Herkunfts- und Kaskadierungsschicht-Präferenz. In diesem Beispiel wird nur die Schriftgröße des Elements animiert.

> [!NOTE]
> Es gibt keine wichtigen Animationen, da Eigenschaftsdeklarationen in einem {{cssxref('@keyframes')}} Block, die `!important` als Teil des Werts enthalten, ignoriert werden.

## Stile zurücksetzen

Nachdem Ihr Inhalt die Stile geändert hat, kann er sich in der Situation befinden, dass er sie auf einen bekannten Zustand zurücksetzen muss. Das kann beispielsweise bei Animationen, Themenwechseln usw. passieren. Die CSS-Eigenschaft {{cssxref("all")}} ermöglicht es Ihnen, schnell (fast) alles in CSS auf einen bekannten Zustand zurückzusetzen.

`all` ermöglicht es Ihnen, sofort alle Eigenschaften auf einen ihrer anfänglichen (Standard) Zustände zurückzusetzen, den Zustand, der vom vorherigen Level des Cascade geerbt wurde, eine bestimmte Herkunft (das Benutzeragenten-Stilelement, das Autorenstilelement oder das Benutzerstilelement) oder sogar die Werte der Eigenschaften vollständig zu löschen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Bausteine: der CSS-Cascade](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [Bausteine: Cascade-Ebenen](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)
- [CSS-Cascade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/Syntax)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [At-rules](/de/docs/Web/CSS/At-rule)
- [Anfänglich](/de/docs/Web/CSS/initial_value), [berechnet](/de/docs/Web/CSS/computed_value), [verwendet](/de/docs/Web/CSS/used_value) und [tatsächlich](/de/docs/Web/CSS/actual_value) Werte
