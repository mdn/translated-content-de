---
title: Einführung in die CSS-Kaskade
slug: Web/CSS/CSS_cascade/Cascade
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{CSSRef}}

Die **Kaskade** ist ein Algorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte aus unterschiedlichen Quellen kombinieren. Die Kaskade definiert die Herkunft und die Ebene, die den Vorrang hat, wenn Deklarationen in mehr als einer [Herkunft](#herkunftstypen), [Kaskadenebene](/de/docs/Web/CSS/@layer) oder einem {{CSSxRef("@scope")}}-Block einen Wert für eine Eigenschaft eines Elements festlegen.

Die Kaskade liegt im Kern von CSS, wie der Name betont: _**Cascading**_ Style Sheets. Wenn ein [Selektor](/de/docs/Web/CSS/CSS_selectors) mit einem Element übereinstimmt, wird der Eigenschaftswert der Herkunft mit dem höchsten Vorrang angewendet, selbst wenn der Selektor aus einer Herkunft oder Ebene mit niedrigerem Vorrang eine größere [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) hat.

Dieser Artikel erklärt, was die Kaskade ist und in welcher Reihenfolge {{Glossary("CSS", "CSS")}} [Deklarationen](/de/docs/Web/API/CSSStyleDeclaration) kaskadieren, und behandelt Kaskadenebenen und Herkunftstypen. Das Verständnis der Herkunftsvorrang hat zentrale Bedeutung für das Verständnis der Kaskade.

## Herkunftstypen

Der Algorithmus der CSS-Kaskade hat die Aufgabe, CSS-Deklarationen auszuwählen, um die korrekten Werte für CSS-Eigenschaften zu bestimmen. CSS-Deklarationen stammen aus verschiedenen Herkunftstypen: **[Benutzeragenten-Stylesheets](#benutzeragenten-stylesheets)**, **[Autor-Stylesheets](#autor-stylesheets)** und **[Benutzer-Stylesheets](#benutzer-stylesheets)**.

Obwohl Stylesheets aus diesen unterschiedlichen Herkünften stammen und innerhalb dieser Herkünfte in unterschiedlichen [Ebenen](/de/docs/Web/CSS/@layer) vorkommen können, überschneiden sie sich in Bezug auf ihren Standardscope. Damit dies funktioniert, definiert der Kaskade-Algorithmus, wie sie interagieren. Bevor wir uns den Interaktionen zuwenden, definieren wir in den nächsten Abschnitten einige Schlüsselbegriffe.

### Benutzeragenten-Stylesheets

Benutzeragenten, oder Browser, haben grundlegende Stylesheets, die jedem Dokument Standardstile geben. Diese Stylesheets werden **Benutzeragenten-Stylesheets** genannt. Die meisten Browser verwenden tatsächliche Stylesheets zu diesem Zweck, während andere sie im Code simulieren. Das Endergebnis ist dasselbe.

Einige Browser erlauben es Benutzern, das Benutzeragenten-Stylesheet zu ändern, aber das ist selten und kann nicht kontrolliert werden.

Obwohl einige Einschränkungen für Benutzeragenten-Stylesheets durch die HTML-Spezifikation festgelegt sind, haben Browser große Spielräume: Das bedeutet, dass zwischen Browsern einige Unterschiede bestehen. Um den Entwicklungsprozess zu vereinfachen, können Webentwickler ein CSS-Reset-Stylesheet wie [normalize.css](https://github.com/necolas/normalize.css) verwenden, das häufige Eigenschaftswerte auf einen bekannten Zustand für alle Browser setzt, bevor sie Änderungen im Sinne ihrer spezifischen Bedürfnisse vornehmen.

Solange das Benutzeragenten-Stylesheet kein [`!important`](/de/docs/Web/CSS/CSS_cascade/Specificity#the_!important_exception) neben einer Eigenschaft enthält, wodurch es "wichtig" wird, haben vom Autor deklarierte Stile, einschließlich eines Reset-Stylesheets, Vorrang vor den Benutzeragenten-Stilen, unabhängig von der Spezifität des zugehörigen Selektors.

### Autor-Stylesheets

**Autor-Stylesheets** sind die häufigsten Stylesheets; dies sind die Stile, die von Webentwicklern geschrieben werden. Diese Stile können Benutzeragenten-Stile zurücksetzen, wie oben erwähnt, und die Stile für das Design einer bestimmten Webseite oder Anwendung definieren. Der Autor, oder Webentwickler, definiert die Stile für das Dokument mithilfe eines oder mehrerer verknüpfter oder importierter Stylesheets, {{HTMLElement('style')}}-Blöcke und In-Line-Stile, die mit dem [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribut definiert werden. Diese Autor-Stile definieren das Aussehen und das Gefühl der Website - das Thema.

### Benutzer-Stylesheets

In den meisten Browsern kann der Benutzer (oder Leser) der Website wählen, ob er Stile mit einem benutzerdefinierten **Benutzer-Stylesheet**, das für die Benutzererfahrung maßgeschneidert ist, überschreiben möchte. Abhängig vom Benutzeragenten, [können Benutzerstile konfiguriert werden](https://www.thoughtco.com/user-style-sheet-3469931) direkt oder über Browsererweiterungen hinzugefügt werden.

### Kaskadenebenen

Die Kaskadenordnung basiert auf Hervorhebung. Die Kaskade innerhalb jedes Herkunftstyps basiert auf der Deklarationsreihenfolge der [Kaskadenebenen](/de/docs/Web/CSS/@layer) innerhalb dieses Typs. Für alle Herkünfte - Benutzeragent, Autor oder Benutzer - können Stile innerhalb oder außerhalb benannter oder anonymer Ebenen deklariert werden. Wenn sie mit [`layer`, `layer()`](/de/docs/Web/CSS/@import) oder [`@layer`](/de/docs/Web/CSS/@layer) deklariert werden, werden Stile in die angegebene benannte Ebene oder in eine anonyme Ebene gesetzt, wenn kein Name angegeben ist. Stile, die außerhalb einer Ebene deklariert werden, gelten als Teil einer anonymen zuletzt deklarierten Ebene.

Werfen wir einen Blick auf den kaskadierenden Herkunftstyp, bevor wir in die Kaskadenebenen innerhalb jedes Herkunftstyps eintauchen.

## Kaskadenordnung

Der Kaskadenalgorithmus bestimmt, wie der Wert festgelegt wird, der für jede Eigenschaft für jedes Dokumentelement angewendet wird. Die folgenden Schritte gelten für den Kaskadenalgorithmus:

1. **Relevanz**: Zuerst filtert er alle Regeln aus den verschiedenen Quellen, um nur die Regeln zu behalten, die für ein gegebenes Element gelten. Das bedeutet Regeln, deren Selektor mit dem gegebenen Element übereinstimmt und die Teil einer geeigneten `media`-@-Regel sind.
2. **Herkunft und Wichtigkeit**: Dann sortiert er diese Regeln nach ihrer Wichtigkeit, das heißt, ob sie von `!important` gefolgt werden oder nicht, und ihrer Herkunft. Wenn wir die Ebenen im Moment ignorieren, ist die Kaskadenreihenfolge wie folgt:

   | Vorrangsordnung (niedrig bis hoch) | Herkunft                  | Wichtigkeit  |
   | ---------------------------------- | ------------------------- | ------------ |
   | 1                                  | Benutzeragent (Browser)   | normal       |
   | 2                                  | Benutzer                  | normal       |
   | 3                                  | Autor (Entwickler)        | normal       |
   | 4                                  | CSS @keyframe-Animationen |              |
   | 5                                  | Autor (Entwickler)        | `!important` |
   | 6                                  | Benutzer                  | `!important` |
   | 7                                  | Benutzeragent (Browser)   | `!important` |
   | 8                                  | CSS-Übergänge             |              |

3. **Spezifität**: Im Falle der Gleichheit mit einer Herkunft wird die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) einer Regel herangezogen, um einen Wert auszuwählen. Die Spezifität der Selektoren wird verglichen, und die Deklaration mit der höchsten Spezifität gewinnt.
4. **Nähe der Scoping**: Wenn zwei Selektoren in der Herkunftsebene mit Vorrang die gleiche Spezifität haben, gewinnt der Eigenschaftswert innerhalb der gesc...

5. **Reihenfolge des Auftretens**: In der Herkunft mit Vorrang wird, wenn es konkurrierende Werte für eine Eigenschaft gibt, die in Stilblöcken zu Selektoren von gleicher Spezifität und Nähe der Scoping passen, die letzte Deklaration in der Stilordnung angewendet.

Die Kaskade ist in aufsteigender Reihenfolge, was bedeutet:

- Animationen haben Vorrang vor normalen Werten, unabhängig davon, ob sie in Benutzer-, Autor- oder Benutzeragenten-Stilen deklariert sind.
- Wichtige Werte haben Vorrang vor Animationen, unabhängig davon, ob sie in Benutzer-, Autor- oder Benutzeragenten-Stilen deklariert sind.
- Übergänge haben Vorrang vor wichtigen Werten.

> **Hinweis:** **Übergänge und Animationen**
>
> Eigenschaftswerte, die durch Animationen mithilfe von {{cssxref('@keyframes')}} gesetzt werden, sind wichtiger als alle normalen Stile (d.h. die ohne [`!important`](/de/docs/Web/CSS/CSS_cascade/Specificity#the_!important_exception) gesetzt werden).
>
> Eigenschaftswerte, die in einem {{cssxref('transition')}} gesetzt werden, haben Vorrang über alle anderen Werte, auch diejenigen, die mit `!important` markiert sind.

Der Kaskadenalgorithmus wird _vor_ dem Spezifitätsalgorithmus angewendet, was bedeutet, wenn `:root p { color: red;}` in dem Benutzer-Stylesheet (Zeile 2) deklariert ist und ein weniger spezifisches `p {color: blue;}` im Autor-Stylesheet (Zeile 3) steht, werden die Absätze blau sein.

## Einfaches Beispiel

Bevor wir uns intensiver mit der Auswirkung von Kaskadenebenen auf die Kaskade befassen, betrachten wir ein Beispiel, das mehrere CSS-Quellen über die verschiedenen Herkünfte hinweg umfasst, und arbeiten die Schritte des Kaskadenalgorithmus durch:

Hier haben wir ein Benutzeragenten-Stylesheet, zwei Autor-Stylesheets und ein Benutzer-Stylesheet, ohne In-Line-Stile im HTML:

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

Noch einmal, es gibt fünf Schritte im Kaskadenalgorithmus, in der Reihenfolge:

1. Relevanz
2. Herkunft und Wichtigkeit
3. Spezifität
4. Näher der Scoping
5. Reihenfolge des Auftretens

Die `1px` ist für Druck-Medien. Aufgrund fehlender _Relevanz_ basierend auf ihrem Medientyp wird sie nicht berücksichtigt.

Keine Deklaration ist als `!important` markiert, also lautet die Vorrangsordnung Autor-Stylesheets über Benutzer-Stylesheets über Benutzeragenten-Stylesheets. Basierend auf _Herkunft und Wichtigkeit_ werden die `1em` aus dem Benutzer-Stylesheet und die `10px` aus dem Benutzeragenten-Stylesheet nicht berücksichtigt.

Beachten Sie, dass selbst wenn der Benutzerstil auf `.specific` von `1em` eine höhere Spezifität hat, es sich um eine normale Deklaration in einem Benutzer-Stylesheet handelt. Daher hat sie einen niedrigeren Vorrang als alle Autor-Stile und wird vom Herkunfts- und Wichtigkeitsschritt des Algorithmus vor der Spezifität nicht berücksichtigt.

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

Die letzte, die `5px`, ist Teil einer Kaskadenebene. Normale Deklarationen in Ebenen haben einen niedrigeren Vorrang als normale Stile, die nicht in einer Ebene innerhalb des gleichen Herkunftstyps liegen. Dies wird auch durch Schritt 2 des Algorithmus, _Herkunft und Wichtigkeit_, beseitigt.

Dies lässt die `0` und die `3px`, die beide denselben Selektor haben und daher dieselbe _Spezifität_. Keiner von ihnen befindet sich innerhalb eines `@scope`-Blocks, daher kommt die Scoping-Nähe in diesem Beispiel ebenfalls nicht ins Spiel.

Wir schauen dann auf die _Reihenfolge des Auftretens_. Beim zweiten, der letzten der beiden unlagen Autor-Stile, gewinnt.

```css
margin-left: 3px;
```

> [!HINWEIS]
> Die Deklaration, die im Benutzer-CSS definiert ist, wird zwar möglicherweise eine größere Spezifität haben, aber nicht ausgewählt, da der _Herkunft und Wichtigkeit_-Algorithmus der Kaskade vor dem _Spezifität_-Algorithmus angewendet wird. Die Deklaration, die in einer Kaskadenebene definiert ist, obwohl sie möglicherweise später im Code vorkommt, wird auch keinen Vorrang haben, da normale Stile in Kaskadenebenen einen geringeren Vorrang haben als normale unlagen Stile. _Reihenfolge des Auftretens_ zählt nur, wenn sowohl Herkunft, Wichtigkeit und Spezifität gleich sind.

## Autor-Stile: In--Stile, Ebenen und Vorrang

Die [Tabelle in Kaskadenordnung](#kaskadenordnung) lieferte eine Übersicht über die Vorrangsordnung. Die Tabelle fasste die Benutzersagen-, Benutzer- und Autor-Herkunftstile in zwei Zeilen zusammen, jeweils mit "Herkunftstyp - normal" und "Herkunftstyp - !important". Der Vorrang innerhalb jedes Herkunftstyps ist nuancierter. Stile können innerhalb von Ebenen innerhalb ihres Herkunftstyps enthalten sein, und bei Autorstilen gibt es auch das Problem, wo In-Line-Stile in der Kaskadenordnung landen.

Die Reihenfolge, in der Ebenen deklariert werden, ist wichtig für das Festlegen des Vorrangs. Normale Stile in einer Ebene haben Vorrang vor Stilen, die in vorhergehenden Ebenen deklariert wurden; normale Stile, die außerhalb einer Ebene deklariert wurden, haben Vorrang vor normalen Ebenenstilen, unabhängig von der Spezifität.

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

und dann im Hauptteil des Dokuments haben wir In-Line-Stile:

```html
<p style="line-height: 1.6em; text-decoration: overline !important;">Hello</p>
```

Im oben stehenden CSS-Block wurden drei Kaskadenebenen mit den Namen "A", "B" und "C" erstellt, in dieser Reihenfolge. Drei Stylesheets wurden direkt in Ebenen importiert, und zwei wurden importiert, ohne eine Ebene zu erstellen oder zuzuweisen.
Die "Alle unlagen Stile" in der unteren Liste (normaler Autor-Stil-Vorrang - Ordnung 4) enthält Stile aus diesen zwei Stylesheets und den zusätzlichen unlagen CSS-Stilblöcken. Zusätzlich gibt es zwei In-Line-Stile, eine normale `line-height`-Deklaration und eine wichtige `text-decoration`-Deklaration:

| Vorrangsordnung (niedrig bis hoch) | Autorenstil             | Wichtigkeit  |
| ---------------------------------- | ----------------------- | ------------ |
| 1                                  | A - erste Ebene         | normal       |
| 2                                  | B - zweite Ebene        | normal       |
| 3                                  | C - letzte Ebene        | normal       |
| 4                                  | Alle ungeregelten Stile | normal       |
| 5                                  | In-Line `style`         | normal       |
| 6                                  | Animationen             |              |
| 7                                  | Alle ungeregelten Stile | `!important` |
| 8                                  | C - letzte Ebene        | `!important` |
| 9                                  | B - zweite Ebene        | `!important` |
| 10                                 | A - erste Ebene         | `!important` |
| 11                                 | In-Line `style`         | `!important` |
| 12                                 | Übergänge               |              |

In allen Herkunftstypen haben normale Stile, die in Ebenen enthalten sind, den niedrigsten Vorrang. In unserem Beispiel haben die normalen Stile, die mit der ersten deklarierten Ebene (A) verbunden sind, einen niedrigeren Vorrang als normale Stile in der zweiten deklarierten Ebene (B), die einen niedrigeren Vorrang als normale Stile in der dritten deklarierten Ebene (C) haben. Diese Ebenenstile haben einen niedrigeren Vorrang als alle normalen unlagen Stile, zu denen auch normale Stile aus `unlayeredStyles.css`, `moreUnlayeredStyles.css` und die `color` des `p` im `<style>` selbst gehören.

Wenn ein beliebiger Ebenenstil in A, B oder C Selektoren mit höherer Spezifität hat, die mit einem Element übereinstimmen, ähnlich wie `:root body p { color: black; }`, ist das egal. Diese Deklarationen werden aufgrund von _Herkunft_ nicht berücksichtigt; normale Ebenenstile haben einen geringeren Vorrang als normale unlagen Stile. Wenn der spezifischere Selektor `:root body p { color: black; }` jedoch in `unlayeredStyles.css` gefunden wurde, da sowohl _Herkunft und Wichtigkeit_ denselben Vorrang haben, bedeutet _Spezifität_, dass die spezifischere, schwarze Deklaration gewinnt.

Die Ebenenreihenfolge des Vorrangs ist umgekehrt für Stile, die als `!important` deklariert werden. Wichtige Deklarationen, die in einer Ebene gefunden werden, haben Vorrang vor wichtigen Deklarationen, die außerhalb einer Ebene gefunden werden. Wichtige Deklarationen, die in der ersten Ebene (A) gefunden werden, haben Vorrang vor wichtigen Deklarationen, die in Ebene B gefunden werden, die Vorrang haben vor wichtigen Deklarationen, die in Ebene C gefunden werden, die Vorrang haben vor wichtigen Deklarationen, die außerhalb einer Ebene gefunden werden.

### In-Line-Stile

Nur Relevanz für Autorenstile haben In-Line-Stile, die mit dem `style`-Attribut deklariert werden. Normale In-Line-Stile haben Vorrang vor allen anderen normalen Autorenstilen, unabhängig von der Spezifität des Selektors. Wenn `line-height: 2;` in einem `:root body p`-Selektorblock in einem der fünf importierten Stylesheets deklariert wäre, wäre die Zeilenhöhe immer noch `1,6`. Normale In-Line-Stile haben keinen Vorrang vor animierten oder übergangenen Eigenschaften.

Wichtige In-Line-Stile haben Vorrang vor allen anderen Autorenstilen, unabhängig davon, ob sie wichtig, inline oder in Ebenen sind. Wichtige In-Line-Stile haben auch Vorrang vor animierten Eigenschaften, aber nicht vor übergangenen Eigenschaften. Drei Dinge können einen wichtigen In-Line-Stil außer Kraft setzen:

- Ein wichtiger Benutzerstil.
- Ein wichtiger Benutzeragentenstil.
- Eine übergangene Eigenschaft.

### Wichtigkeit und Ebenen

Die Vorrangsordnung der Herkunftstypen ist für wichtige Stile umgekehrt. Wichtige Stile, die außerhalb einer Kaskadenebene deklariert werden, haben einen niedrigeren Vorrang als diejenigen, die als Teil einer Ebene deklariert werden. Wichtige Stile, die in frühen Ebenen vorkommen, haben Vorrang vor wichtigen Stilen, die in nachfolgenden Kaskadenebenen deklariert werden.

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

Auch wenn das Rot zuerst deklariert wird und einen weniger spezifischen Selektor hat, da unlagen CSS Vorrang vor Ebenen-CSS hat, wird der Absatz rot sein. Hätten wir einen In-Line-Stil auf dem Absatz hinzugefügt, der ihn auf eine andere Farbe setzt, wie `<p style="color: black">`, wäre der Absatz schwarz.

Wenn wir `!important` zu diesem CSS-Abschnitt hinzufügen, wird die Vorrangsordnung innerhalb des Stylesheets umgekehrt:

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

Nun wird der Absatz blau sein. Das `!important` in der frühesten deklarierten Ebene hat Vorrang vor den nachfolgenden Ebenen und unlagen wichtigen Deklarationen. Wenn der In-Line-Stil `!important` enthalten würde, wie `<p style="color: black !important">`, wäre der Absatz erneut schwarz. In-Line-Wichtigeit hat Vorrang vor allen anderen von Autoren deklarierten `!important`-Deklarationen, egal welche Spezifität.

> [!HINWEIS]
> Der `!important`-Vermerk kehrt die Vorrangsordnung der Kaskadenschichten um. Aus diesem Grund sollten Sie versuchen, `!important` nicht zu verwenden, um externe Stile zu überschreiben. Verwenden Sie stattdessen {{cssxref("@import")}} in Verbindung mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Ebenen zu importieren. Das Importieren von Stylesheets in eine Ebene als erste Deklaration in Ihrem CSS verringert deren Vorrang, und von Autoren definierte Ebenen, die später in Ihrem CSS definiert werden, haben einen höheren Vorrang. Der `!important`-Vermerk sollte nur sparsam verwendet werden, um erforderliche Stile gegen spätere Überlagerungen zu schützen, in der ersten deklarierten Ebene.

Stile, die sich in der Transition befinden, haben Vorrang vor allen wichtigen Stilen, unabhängig davon, wer oder wie sie deklariert werden.

## Vollständige Kaskadenordnung

Jetzt, da wir ein besseres Verständnis für Herkunftstypen und den Ebenenvorrang haben, wurde uns klar, dass die Tabelle in [Kaskadenordnung](#kaskadenordnung) genauer durch die folgende Tabelle dargestellt werden könnte:

<table>
<thead>
  <tr><th>Vorrangsordnung <br/>(niedrig bis hoch)</th><th>Stilherkunft</th><th>Wichtigkeit</th></tr>
</thead>
<tbody>
  <tr><td rowspan="3">1</td><td>Benutzeragent - erste dekl. Ebene</td><td rowspan="3">normal</td></tr>
  <tr><td>Benutzeragent - letzte dekl. Ebene</td></tr>
  <tr><td>Benutzeragent - unlagen Stile</td></tr>
  <tr><td rowspan="3">2</td><td>Benutzer - erste dekl. Ebene</td><td rowspan="3">normal</td></tr>
  <tr><td>Benutzer - letzte dekl. Ebene</td></tr>
  <tr><td>Benutzer - unlagen Stile</td></tr>
  <tr><td rowspan="4">3</td><td>Autor - erste dekl. Ebene</td><td rowspan="4">normal</td></tr>
  <tr><td>Autor - letzte dekl. Ebene</td></tr>
  <tr><td>Autor - unlagen Stile</td></tr>
  <tr><td>Inline <code>style</code></td></tr>
  <tr><td>4</td><td>Animationen</td><td></td></tr>
  <tr><td rowspan="4">5</td><td>Autor - unlagen Stile</td><td rowspan="4"><code>!important</code></td></tr>
  <tr><td>Autor - letzte dekl. Ebene</td></tr>
  <tr><td>Autor - erste dekl. Ebene</td></tr>
  <tr><td>Inline <code>style</code></td></tr>
  <tr><td rowspan="3">6</td><td>Benutzer - unlagen Stile</td><td rowspan="3"><code>!important</td></tr>
  <tr><td>Benutzer - letzte dekl. Ebene</td></tr>
  <tr><td>Benutzer - erste dekl. Ebene</td></tr>
  <tr><td rowspan="3">7</td><td>Benutzeragent - unlagen Stile</td><td rowspan="3"><code>!important</code></td></tr>
  <tr><td>Benutzeragent - letzte dekl. Ebene</td></tr>
  <tr><td>Benutzeragent - erste dekl. Ebene</td></tr>
  <tr><td>8</td><td>Übergänge</td><td></td></tr>
</tbody>
</table>

## Welche CSS-Entitäten nehmen an der Kaskade teil

Nur CSS-Eigenschaft/Wert-Paar-Deklarationen nehmen an der Kaskade teil. CSS-@-Regel-Deskriptoren nehmen nicht an der Kaskade teil und HTML-präsentative Attribute sind nicht Teil der Kaskade.

### At-Regeln

CSS [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule), die andere Einheiten als Deklarationen enthalten, wie eine {{ cssxref("@font-face")}}-Regel mit _Deskriptoren_, nehmen nicht an der Kaskade teil.

Im Allgemeinen nehmen die in At-Regeln definierten Eigenschaften und Deskriptoren nicht an der Kaskade teil. Nur At-Regeln als Ganze nehmen an der Kaskade teil. Zum Beispiel werden innerhalb einer `@font-face`-Regel die Fontnamen durch [`font-family`](/de/docs/Web/CSS/@font-face/font-family)-Deskriptoren identifiziert. Wenn mehrere `@font-face`-Regeln mit demselben Deskriptor definiert sind, wird nur die geeignetste `@font-face`-Regel als Ganzes betrachtet. Wenn mehr als eine identisch geeignet ist, werden die gesamten `@font-face`-Deklarationen mit den Schritten 1, 2 und 4 des Algorithmus verglichen (es gibt keine Spezifität, wenn es um At-Regeln geht).

Während die in den meisten At-Regeln enthaltenen Deklarationen - wie jene in {{cssxref("@media")}}, {{cssxref("@document")}} oder {{cssxref("@supports")}} - an der Kaskade teilnehmen, kann die At-Regel einen gesamten Selektor irrelevant machen, wie wir es bei dem Druckstil im [Beispiel](#einfaches_beispiel) gesehen haben.

Deklarationen in {{cssxref("@keyframes")}} nehmen nicht an der Kaskade teil. Wie bei `@font-face` wird nur das `@keyframes` als Ganzes vom Kaskade-Algorithmus ausgewählt. Die [Vorrangsordnung von Animationen wird unten beschrieben](#css-animationen_und_die_kaskade).

Wenn es um {{cssxref("@import")}} geht, nimmt das `@import` selbst nicht an der Kaskade teil, aber alle importierten Stile tun es. Wenn das `@import` eine [benannte oder anonyme Ebene](/de/docs/Web/CSS/@layer) definiert, werden die Inhalte des importierten Stylesheets in der angegebenen Ebene platziert. Alle anderen mit `@import` importierten CSS werden als zuletzt deklarierte Ebene behandelt. Dies wurde oben diskutiert.

Schließlich gehorcht {{cssxref("@charset")}} bestimmten Algorithmen und wird nicht vom Kaskade-Algorithmus beeinflusst.

### Präsentative Attribute

Präsentative Attribute sind Attribute im Quelldokument, die das Styling beeinträchtigen können. Zum Beispiel legt das eingeschlossene, veraltete `align`-Attribut die Ausrichtung mehrerer HTML-Elemente fest, und das `fill`-Attribut definiert die Farbe, die zum Malen von SVG-Formen und -Text verwendet wird, und definiert den Endstatus für SVG-Animationen. Obwohl es sich um Autorenstile handelt, nehmen Präsentative Attribute nicht an der Kaskade teil.

Wenn das HTML-Präsentative Attribut vom Benutzeragenten unterstützt wird, werden gültige Präsentative Attribute, die in HTML und SVG enthalten sind, wie die [`align`](/de/docs/Web/HTML/Element/img#align) oder [`fill`](/de/docs/Web/SVG/Reference/Attribute/fill)-Attribute, in die entsprechenden CSS-Regeln übersetzt (alle SVG-Präsentative Attribute werden als CSS-Eigenschaften unterstützt) und vor allen anderen Stilen mit einer Spezifität `0` in das Autorenstylesheet eingefügt.

Präsentative Attribute können nicht als `!important` deklariert werden.

## CSS-Animationen und die Kaskade

[CSS-Animationen](/de/docs/Web/CSS/CSS_animations), die {{cssxref("@keyframes")}}-At-Regeln verwenden, definieren Animationen zwischen Zuständen. `@keyframes` kaskadieren nicht, d.h. dass zu jedem beliebigen Zeitpunkt CSS Werte nur von einem einzigen Satz `@keyframes` entnimmt und niemals mehrere mischt. Wenn mehrere Sätze `@keyframes` mit demselben Animationsnamen definiert sind, wird der zuletzt definierte Satz in der Herkunft und Ebene mit dem höchsten Vorrang verwendet. Andere `@keyframes` werden ignoriert, selbst wenn sie unterschiedliche Eigenschaften animieren.

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

In this Beispiel gibt es drei separate Animationsdeklarationen, die den Namen `repeatedName` tragen. Wenn `animation: infinite 5s alternate repeatedName` auf den Absatz angewendet wird, wird nur eine Animation angewendet: Die Keyframe-Animation, die im unlagen CSS definiert ist, hat Vorrang vor den in Ebenen deklarierten Keyframe-Animationen basierend auf der Herkunfts- und Ebenenvorrangsordnung. In diesem Beispiel wird nur die Schriftgröße des Elements animiert.

> [!HINWEIS]
> Es gibt keine wichtigen Animationen, da Eigenschaftsdeklarationen in einem {{cssxref('@keyframes')}}-Block, die `!important` als Teil des Wertes enthalten, ignoriert werden.

## Zurücksetzen von Stilen

Nachdem Ihr Inhalt das Styling abgeschlossen hat, kann es sich in einer Situation befinden, in der es notwendig ist, sie auf einen bekannten Zustand wiederherzustellen. Dies kann in Fällen von Animationen, Themenänderungen etc. geschehen. Die CSS-Eigenschaft {{cssxref("all")}} ermöglicht es Ihnen, schnell (fast) alles in CSS zurück...

`all` ermöglicht es Ihnen, zu wählen, sofort alle Eigenschaften auf einen ihrer ursprünglichen (Standard-)Zustände zurückzusetzen, den von der vorhergehenden Kaskadenebene geerbten Zustand, eine bestimmte Herkunft (das Benutzeragenten-Stylesheet, das Autoren-Stylesheet oder das Benutzer-Stylesheet), oder sogar um die Werte der Eigenschaften komplett zu löschen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Konflikte handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Initial](/de/docs/Web/CSS/CSS_cascade/initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/computed_value), [verwendete](/de/docs/Web/CSS/CSS_cascade/used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/actual_value) Werte
