---
title: Einführung in die CSS-Kaskade
slug: Web/CSS/CSS_cascade/Cascade
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{CSSRef}}

Die **Kaskade** ist ein Algorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte aus verschiedenen Quellen kombinieren. Die Kaskade legt den Ursprung und die Schicht fest, die Vorrang hat, wenn Deklarationen aus mehr als einem [Ursprung](#ursprungstypen), einer [Kaskadenschicht](/de/docs/Web/CSS/@layer) oder einem {{CSSxRef("@scope")}}-Block einen Wert für eine Eigenschaft auf einem Element festlegen.

Die Kaskade liegt im Kern von CSS, wie der Name betont: _**Cascading**_ Style Sheets (kaskadierende Stylesheets). Wenn ein [Selektor](/de/docs/Web/CSS/CSS_selectors) auf ein Element zutrifft, wird der Eigenschaftswert aus dem Ursprung mit dem höchsten Vorrang angewendet, auch wenn der Selektor aus einem Ursprung oder einer Schicht mit niedrigem Vorrang eine höhere [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) hat.

Dieser Artikel erklärt, was die Kaskade ist und in welcher Reihenfolge {{Glossary("CSS", "CSS")}}-[Deklarationen](/de/docs/Web/API/CSSStyleDeclaration) kaskadieren und behandelt Kaskadenschichten und Ursprungstypen. Das Verständnis der Ursprungspriorität ist der Schlüssel zum Verständnis der Kaskade.

## Ursprungstypen

Die Aufgabe des CSS-Kaskadenalgorithmus ist es, CSS-Deklarationen auszuwählen, um die korrekten Werte für CSS-Eigenschaften zu bestimmen. CSS-Deklarationen stammen aus verschiedenen Ursprungstypen: **[Benutzeragenten-Stylesheets](#benutzeragenten-stylesheets)**, **[Autoren-Stylesheets](#autoren-stylesheets)** und **[Benutzer-Stylesheets](#benutzer-stylesheets)**.

Obwohl Stylesheets aus diesen verschiedenen Ursprüngen stammen und sich in unterschiedlichen [Schichten](/de/docs/Web/CSS/@layer) in jedem dieser Ursprünge befinden können, überlappen sie sich hinsichtlich ihres Standardscope; um dies zu ermöglichen, definiert der Kaskadenalgorithmus, wie sie interagieren. Bevor wir auf die Interaktionen eingehen, definieren wir einige Schlüsselbegriffe in den nächsten Abschnitten.

### Benutzeragenten-Stylesheets

Benutzeragenten oder Browser haben grundlegende Stylesheets, die jedem Dokument Standardstile geben. Diese Stylesheets werden **Benutzeragenten-Stylesheets** genannt. Die meisten Browser verwenden zu diesem Zweck tatsächliche Stylesheets, während andere sie im Code simulieren. Das Endergebnis ist dasselbe.

Einige Browser erlauben es den Nutzern, das Benutzeragenten-Stylesheet zu ändern, aber das ist selten und nicht steuerbar.

Obwohl einige Beschränkungen für Benutzeragenten-Stylesheets durch die HTML-Spezifikation festgelegt sind, haben Browser viel Spielraum: Das bedeutet, dass es einige Unterschiede zwischen Browsern gibt. Um den Entwicklungsprozess zu vereinfachen, können Webentwickler ein CSS-Reset-Stylesheet wie [normalize.css](https://github.com/necolas/normalize.css) verwenden, das gemeinsame Eigenschaftswerte für alle Browser auf einen bekannten Zustand setzt, bevor es beginnen, Anpassungen vorzunehmen, die ihren spezifischen Bedürfnissen entsprechen.

Sofern das Benutzeragenten-Stylesheet nicht neben einer Eigenschaft ein [`!important`](/de/docs/Web/CSS/CSS_cascade/Specificity#the_!important_exception) enthält, wodurch es "wichtig" wird, haben von Autoren deklarierte Stile, einschließlich eines Reset-Stylesheets, Vorrang vor den Benutzeragenten-Stilen, unabhängig von der Spezifität des zugehörigen Selektors.

### Autoren-Stylesheets

**Autoren-Stylesheets** sind die gängigste Art von Stylesheets; das sind die Stile, die von Webentwicklern geschrieben werden. Diese Stile können, wie oben erwähnt, Benutzeragenten-Stile zurücksetzen und die Stile für das Design einer bestimmten Webseite oder Anwendung definieren. Der Autor oder Webentwickler definiert die Stile für das Dokument mit einem oder mehreren verlinkten oder importierten Stylesheets, {{HTMLElement('style')}}-Blöcken und Inline-Stilen, die mit dem [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribut definiert sind. Diese Autorenstile definieren das Erscheinungsbild der Website - ihr Thema.

### Benutzer-Stylesheets

In den meisten Browsern kann der Benutzer (oder Leser) der Website auswählen, Stile mit einem benutzerdefinierten **Benutzer-Stylesheet** zu überschreiben, das darauf ausgelegt ist, das Erlebnis an die Wünsche des Benutzers anzupassen. Abhängig vom Benutzeragenten können [Benutzerstile konfiguriert werden](https://www.thoughtco.com/user-style-sheet-3469931) oder über Browsererweiterungen hinzugefügt werden.

### Kaskadenschichten

Die Kaskadenreihenfolge basiert auf dem Ursprungstyp. Die Kaskade innerhalb eines jeden Ursprungstyps basiert auf der Deklarationsreihenfolge der [Kaskadenschichten](/de/docs/Web/CSS/@layer) innerhalb dieses Typs. Für alle Ursprünge - Benutzeragenten, Autoren oder Benutzer - können Stile innerhalb oder außerhalb benannter oder anonymer Schichten deklariert werden. Wenn Stile mit [`layer`, `layer()`](/de/docs/Web/CSS/@import) oder [`@layer`](/de/docs/Web/CSS/@layer) deklariert werden, werden sie in die angegebene benannte Schicht oder in eine anonyme Schicht platziert, wenn kein Name angegeben ist. Stile, die außerhalb einer Schicht deklariert werden, gelten als Teil einer anonymen zuletzt deklarierten Schicht.

Lassen Sie uns einen Blick auf die kaskadierenden Ursprungstypen werfen, bevor wir uns mit den Kaskadenschichten innerhalb jedes Ursprungstyps befassen.

## Kaskadenreihenfolge

Der Kaskadenalgorithmus bestimmt, wie der anzuwendende Wert für jede Eigenschaft für jedes Dokumentelement gefunden wird. Die folgenden Schritte gelten für den Kaskadenalgorithmus:

1. **Relevanz**: Zuerst filtert er alle Regeln aus den verschiedenen Quellen, um nur die Regeln beizubehalten, die auf ein gegebenes Element zutreffen. Das bedeutet Regeln, deren Selektor auf das gegebene Element zutrifft und die Teil eines geeigneten `media` at-rule sind.
2. **Ursprung und Wichtigkeit**: Dann sortiert er diese Regeln nach ihrer Wichtigkeit, d.h. ob sie mit `!important` versehen sind oder nicht, und nach ihrem Ursprung. Ignoriert man die Schichten für den Moment, ist die Kaskadenreihenfolge wie folgt:

   | Vorrangordnung (niedrig bis hoch) | Ursprung                  | Wichtigkeit  |
   | --------------------------------- | ------------------------- | ------------ |
   | 1                                 | Benutzeragent (Browser)   | normal       |
   | 2                                 | Benutzer                  | normal       |
   | 3                                 | Autor (Entwickler)        | normal       |
   | 4                                 | CSS @keyframe-Animationen |              |
   | 5                                 | Autor (Entwickler)        | `!important` |
   | 6                                 | Benutzer                  | `!important` |
   | 7                                 | Benutzeragent (Browser)   | `!important` |
   | 8                                 | CSS-Übergänge             |              |

3. **Spezifität**: Bei Gleichheit mit einem Ursprung wird die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) einer Regel verwendet, um einen Wert auszuwählen. Die Spezifität der Selektoren wird verglichen, und die Deklaration mit der höchsten Spezifität gewinnt.
4. **Nähe des Scopes**: Wenn zwei Selektoren im Ursprungsbereich mit Vorrang die gleiche Spezifität haben, gewinnt der Eigenschaftswert innerhalb der gescopten Regeln, die die wenigsten Sprünge im DOM-Hierarchie aufweisen. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.
5. **Reihenfolge des Erscheinens**: Innerhalb des Ursprungsbereichs mit Vorrang, wenn es konkurrierende Werte für eine Eigenschaft in Stilblöcken gibt, die auf Selektoren mit gleicher Spezifität und Scope-Nähe zutreffen, wird die letzte Deklaration in der Stilreihenfolge angewendet.

Die Kaskade ist aufsteigend, d.h.:

- Animationen haben Vorrang vor normalen Werten, ob sie nun in Benutzer-, Autoren- oder Benutzeragenten-Stilen deklariert sind.
- Wichtige Werte haben Vorrang vor Animationen, ob sie nun in Benutzer-, Autoren- oder Benutzeragenten-Stilen deklariert sind.
- Übergänge haben Vorrang vor wichtigen Werten.

> **Hinweis:** **Übergänge und Animationen**
>
> Eigenschaftswerte, die durch {{cssxref('@keyframes')}}-Animationen festgelegt werden, sind wichtiger als alle normalen Stile (diejenigen ohne festgelegtem [`!important`](/de/docs/Web/CSS/CSS_cascade/Specificity#the_!important_exception)).
>
> Eigenschaftswerte, die in einem {{cssxref('transition')}} festgelegt werden, haben Vorrang vor allen anderen festgelegten Werten, selbst vor solchen, die mit `!important` gekennzeichnet sind.

Der Kaskadenalgorithmus wird _vor_ dem Spezifitätsalgorithmus angewendet, das bedeutet, wenn `:root p { color: red;}` im Benutzer-Stylesheet (Zeile 2) deklariert wird und ein weniger spezifisches `p {color: blue;}` im Autoren-Stylesheet (Zeile 3) steht, werden die Absätze blau sein.

## Einfaches Beispiel

Bevor wir uns genauer ansehen, wie Kaskadenschichten die Kaskade beeinflussen, schauen wir uns ein Beispiel an, bei dem mehrere Quellen von CSS über die verschiedenen Ursprünge hinweg beteiligt sind, und gehen die Schritte des Kaskadenalgorithmus durch:

Hier haben wir ein Benutzeragenten-Stylesheet, zwei Autoren-Stylesheets und ein Benutzer-Stylesheet, ohne Inline-Stile im HTML:

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

In diesem Fall sollten Deklarationen in den Regeln `li` und `.specific` angewendet werden.

Noch einmal, es gibt fünf Schritte im Kaskadenalgorithmus, in der Reihenfolge:

1. Relevanz
2. Ursprung und Wichtigkeit
3. Spezifität
4. Näherung des Scopes
5. Reihenfolge des Erscheinens

Der `1px` ist für Printmedien. Aufgrund des Mangels an _Relevanz_ basierend auf seinem Medientyp wird er aus der Betrachtung entfernt.

Keine Deklaration ist als `!important` markiert, daher ist die Reihenfolge Autoren-Stylesheets über Benutzer-Stylesheets über Benutzeragenten-Stylesheet. Basierend auf _Ursprung und Wichtigkeit_ werden das `1em` aus dem Benutzer-Stylesheet und das `10px` aus dem Benutzeragenten-Stylesheet aus der Betrachtung entfernt.

Beachten Sie, dass selbst wenn der Benutzerstil auf `.specific` von `1em` eine höhere Spezifität hat, es eine normale Deklaration in einem Benutzer-Stylesheet ist. Daher hat es einen geringeren Vorrang als alle Autorenstile und wird durch den Schritt Ursprung und Wichtigkeit des Algorithmus entfernt, bevor die Spezifität überhaupt ins Spiel kommt.

Es gibt drei Deklarationen in Autoren-Stylesheets:

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

Die letzte, die `5px`, ist Teil einer Kaskadenschicht. Normale Deklarationen in Schichten haben einen geringeren Vorrang als normale Stile, die nicht in einer Schicht innerhalb desselben Ursprungstyps liegen. Dies wird auch durch Schritt 2 des Algorithmus, _Ursprung und Wichtigkeit_, entfernt.

Dies lässt die `0` und die `3px`, die beide denselben Selektor, d.h. dieselbe _Spezifität_ haben. Keiner von ihnen ist innerhalb eines `@scope`-Blocks, also kommt die Scope-Nähe in diesem Beispiel ebenfalls nicht ins Spiel.

Dann schauen wir auf die _Reihenfolge des Erscheinens_. Der zweite, der letzte der beiden nicht geschichteten Autorenstile, gewinnt.

```css
margin-left: 3px;
```

> [!NOTE]
> Die im Benutzer-CSS definierte Deklaration, obwohl sie möglicherweise eine größere Spezifität hat, wird nicht ausgewählt, da der Kaskadenalgorithmus _Ursprung und Wichtigkeit_ vor dem _Spezifitäts_ algorithmus angewendet wird. Die in einer Kaskadenschicht definierte Deklaration, obwohl sie später im Code kommt, wird auch nicht den Vorrang erhalten, da normale Stile in Kaskadenschichten weniger Vorrang haben als normale nicht geschichtete Stile. _Reihenfolge des Erscheinens_ spielt nur dann eine Rolle, wenn sowohl Ursprung, Wichtigkeit als auch Spezifität gleich sind.

## Autorenstile: Inline-Stile, Schichten und Vorrang

Die [Tabelle in Kaskadenreihenfolge](#kaskadenreihenfolge) bot einen Überblick über die Vorreihenfolge. Die Tabelle fasste die Benutzagenten-, Benutzer- und Autoren-Ursprungstypstile in zwei Zeilen zusammen mit "Ursprungstyp - normal" und "Ursprungstyp - !important". Der Vorrang innerhalb jedes Ursprungstyps ist nuancierter. Stile können innerhalb von Schichten innerhalb ihres Ursprungstyps enthalten sein, und bei Autorenstilen gibt es auch die Frage, wo Inline-Stile in der Kaskadenreihenfolge landen.

Die Reihenfolge, in der Schichten deklariert werden, ist wichtig, um den Vorrang zu bestimmen. Normale Stile in einer Schicht haben Vorrang vor Stilen, die in früheren Schichten deklariert wurden; mit normal deklarierten Stilen außerhalb einer Schicht, die Vorrang vor normalen geschichteten Stilen unabhängig von der Spezifität haben.

In diesem Beispiel verwendete der Autor die {{CSSXref('@import')}}-Regel von CSS, um fünf externe Stylesheets innerhalb eines {{HTMLElement('style')}}-Informationselements zu importieren.

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

und dann im Körper des Dokuments haben wir Inline-Stile:

```html
<p style="line-height: 1.6em; text-decoration: overline !important;">Hello</p>
```

Im obigen CSS-Codeblock wurden drei Kaskadenschichten namens "A", "B" und "C" erstellt, in dieser Reihenfolge. Drei Stylesheets wurden direkt in Schichten importiert und zwei wurden importiert, ohne eine Schicht zu erstellen oder einer Schicht zugewiesen zu werden.
Die "Alle nicht geschichteten Stile" in der Liste unten (normaler Autorenstil-Vorrang - Ordnung 4) umfassen Stile aus diesen zwei Stylesheets und den zusätzlichen nicht geschichteten CSS-Stilblöcken. Zusätzlich gibt es zwei Inline-Stile, eine normale `line-height`-Deklaration und eine wichtige `text-decoration`-Deklaration:

| Vorrangordnung (niedrig bis hoch) | Autorenstil                | Wichtigkeit  |
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

In allen Ursprungstypen haben normale Stile in Schichten den niedrigsten Vorrang. In unserem Beispiel haben die normalen Stile, die mit der ersten deklarierten Schicht (A) verknüpft sind, einen niedrigeren Vorrang als normale Stile in der zweiten deklarierten Schicht (B), die wiederum einen niedrigeren Vorrang haben als normale Stile in der dritten deklarierten Schicht (C). Diese geschichteten Stile haben einen geringeren Vorrang als alle normalen ungeschichteten Stile, die normale Stile aus `unlayeredStyles.css`, `moreUnlayeredStyles.css` und die `color` von `p` im `<style>` selbst umfassen.

Wenn irgendwelche geschichteten Stile in A, B oder C Selektoren mit höherer Spezifität haben, die mit einem Element übereinstimmen, ähnlich wie `:root body p { color: black; }`, spielt das keine Rolle. Diese Deklarationen werden aufgrund von _Ursprung_ aus der Betrachtung entfernt; normale geschichtete Stile haben weniger Vorrang als normale ungeschichtete Stile. Wenn jedoch der konkretere Selektor `:root body p { color: black; }` in `unlayeredStyles.css` gefunden wurde, da sowohl _Ursprung und Wichtigkeit_ den gleichen Vorrang haben, würde die _Spezifität_ bedeuten, dass die konkretere schwarze Deklaration gewinnen würde.

Die Schichtordnung des Vorrangs wird für Stile, die als `!important` deklariert sind, umgekehrt. Wichtige Deklarationen, die außerhalb einer Schicht gefunden werden, haben einen geringeren Vorrang als die, die als Teil einer Schicht deklariert sind. Wichtige Deklarationen, die in einer frühen Schicht (A) kommen, haben Vorrang vor wichtigen Deklarationen, die in nachfolgenden Kaskadenschichten deklariert sind.

### Inline-Stile

Nur für Autorenstile relevant sind Inline-Stile, die mit dem `style`-Attribut deklariert werden. Normale Inline-Stile haben Vorrang vor jedem anderen normalen Autorenstil, unabhängig von der Spezifität des Selektors. Wenn `line-height: 2;` in einem `:root body p`-Selektorblock in einem der fünf importierten Stylesheets deklariert worden wäre, wäre die Zeilenhöhe immer noch `1.6`. Normale Inline-Stile haben keinen Vorrang vor animierten oder übergangenen Eigenschaften.

Wichtige Inline-Stile haben Vorrang vor allen anderen Autorenstilen, unabhängig davon, ob sie wichtig, inline oder geschichtet sind. Wichtige Inline-Stile haben auch Vorrang vor animierten Eigenschaften, aber nicht vor übergangenen Eigenschaften. Drei Dinge können einen wichtigen Inline-Stil außer Kraft setzen:

- Ein wichtiger Benutzerstil.
- Ein wichtiger Benutzeragentenstil.
- Eine übergangene Eigenschaft.

### Wichtigkeit und Schichten

Die Vorrangordnung des Ursprungstyps wird für wichtige Stile umgekehrt. Wichtige Stile, die außerhalb von Kaskadenschichten deklariert sind, haben weniger Vorrang als die, die in einer Schicht deklariert sind. Wichtige Stile, die in frühen Schichten (A) auftauchen, haben Vorrang vor wichtigen Stilen, die in nachfolgenden Kaskadenschichten deklariert sind.

Nehmen wir das folgende CSS-Beispiel:

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

Obwohl das Rot zuerst deklariert wird und einen weniger spezifischen Selektor hat, hat es, weil ungeschichtete CSS Vorrang vor geschichtetem CSS hat, wird der Absatz rot sein. Hätten wir einen Inline-Stil auf den Absatz eingefügt, der ihn auf eine andere Farbe festlegt, z.B. `<p style="color: black">`, wäre der Absatz schwarz.

Wenn wir `!important` zu diesem Stück CSS hinzufügen, wird die Vorrangordnung innerhalb des Stylesheets umgekehrt:

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

Jetzt wird der Absatz blau sein. Das `!important` in der frühesten deklarierten Schicht hat Vorrang vor nachfolgenden Schichten und ungeschichteten wichtigen Deklarationen. Wenn der Inline-Stil `!important` enthielte, wie z.B. `<p style="color: black !important">`, wäre der Absatz wieder schwarz. Inline-Wichtigkeit hat Vorrang gegenüber allen anderen vom Autor deklarierten `!important`-Deklarationen gleich welcher Spezifität.

> [!NOTE]
> Das `!important`-Flag kehrt den Vorrang der Kaskadenschichten um. Aus diesem Grund sollten Sie nach Möglichkeit nicht `!important` verwenden, um externe Stile zu überschreiben. Stattdessen verwenden Sie {{cssxref("@import")}} zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Schichten zu importieren. Das Importieren von Stylesheets in eine Schicht als erste Deklaration in Ihrem CSS setzt deren Vorrang herab, und autorenspezifische Schichten, die später in Ihrem CSS definiert werden, haben einen höheren Vorrang. Das `!important`-Flag sollte nur sparsam verwendet werden, wenn überhaupt, um erforderliche Stile gegen spätere Überschreibungen zu schützen, in der zuerst deklarierten Schicht.

Stile, die sich im Übergang befinden, haben Vorrang vor allen wichtigen Stilen, egal wer sie erklärt hat.

## Vollständige Kaskadenreihenfolge

Da wir nun ein besseres Verständnis von Ursprungstypen und Kaskadenschichtenvorrang haben, erkennen wir, dass die Tabelle in [Kaskadenreihenfolge](#kaskadenreihenfolge) genauer durch die folgende Tabelle dargestellt werden könnte:

<table>
<thead>
  <tr><th>Vorrangordnung <br/>(niedrig bis hoch)</th><th>Ursprungsstil</th><th>Wichtigkeit</th></tr>
</thead>
<tbody>
  <tr><td rowspan="3">1</td><td>Benutzeragent - erste dekl. Schicht</td><td rowspan="3">normal</td></tr>
  <tr><td>Benutzeragent - letzte dekl. Schicht</td></tr>
  <tr><td>Benutzeragent - ungeschichtete Stile</td></tr>
  <tr><td rowspan="3">2</td><td>Benutzer - erste dekl. Schicht</td><td rowspan="3">normal</td></tr>
  <tr><td>Benutzer - letzte dekl. Schicht</td></tr>
  <tr><td>Benutzer - ungeschichtete Stile</td></tr>
  <tr><td rowspan="4">3</td><td>Autor - erste dekl. Schicht</td><td rowspan="4">normal</td></tr>
  <tr><td>Autor - letzte dekl. Schicht</td></tr>
  <tr><td>Autor - ungeschichtete Stile</td></tr>
  <tr><td>Inline <code>style</code></td></tr>
  <tr><td>4</td><td>Animationen</td><td></td></tr>
  <tr><td rowspan="4">5</td><td>Autor - ungeschichtete Stile</td><td rowspan="4"><code>!important</code></td></tr>
  <tr><td>Autor - letzte dekl. Schicht</td></tr>
  <tr><td>Autor - erste dekl. Schicht</td></tr>
  <tr><td>Inline <code>style</code></td></tr>
  <tr><td rowspan="3">6</td><td>Benutzer - ungeschichtete Stile</td><td rowspan="3"><code>!important</td></tr>
  <tr><td>Benutzer - letzte dekl. Schicht</td></tr>
  <tr><td>Benutzer - erste dekl. Schicht</td></tr>
  <tr><td rowspan="3">7</td><td>Benutzeragent - ungeschichtete Stile</td><td rowspan="3"><code>!important</code></td></tr>
  <tr><td>Benutzeragent - letzte dekl. Schicht</td></tr>
  <tr><td>Benutzeragent - erste dekl. Schicht</td></tr>
  <tr><td>8</td><td>Übergänge</td><td></td></tr>
</tbody>
</table>

## Welche CSS-Entitäten nehmen an der Kaskade teil

Nur CSS-Eigenschaft/Wert-Paar-Deklarationen nehmen an der Kaskade teil. CSS-at-rule-Deskriptoren nehmen nicht an der Kaskade teil, und HTML-Präsentationsattribute sind nicht Teil der Kaskade.

### At-rules

CSS-[at-rules](/de/docs/Web/CSS/CSS_syntax/At-rule), die andere Entitäten als Deklarationen enthalten, wie beispielsweise eine {{ cssxref("@font-face")}}-Regel mit _Deskriptoren_, nehmen nicht an der Kaskade teil.

In den meisten Fällen nehmen die in at-rules definierten Eigenschaften und Deskriptoren nicht an der Kaskade teil. Nur at-rules als Ganzes nehmen an der Kaskade teil. Zum Beispiel werden in einer `@font-face`-Regel Schriftartnamen durch [`font-family`](/de/docs/Web/CSS/@font-face/font-family)-Deskriptoren identifiziert. Wenn mehrere `@font-face`-Regeln mit demselben Deskriptor definiert sind, wird nur die am besten geeignete `@font-face` insgesamt betrachtet. Wenn mehr als eine identisch geeignet ist, werden die gesamten `@font-face`-Deklarationen unter Verwendung der Schritte 1, 2 und 4 des Algorithmus verglichen (bei at-rules gibt es keine Spezifität).

Während die Deklarationen in den meisten at-rules — wie die in {{cssxref("@media")}}, {{cssxref("@document")}} oder {{cssxref("@supports")}} — an der Kaskade teilnehmen, kann die at-rule einen gesamten Selektor als irrelevant festlegen, wie wir mit dem Print-Stil im [einfachen Beispiel](#einfaches_beispiel) gesehen haben.

Deklarationen in {{cssxref("@keyframes")}} nehmen nicht an der Kaskade teil. Wie bei `@font-face` wird nur das `@keyframes` als Ganzes über den Kaskadenalgorithmus ausgewählt. Die [Vorrangordnung von Animationen wird unten beschrieben](#css-animationen_und_die_kaskade).

Was {{cssxref("@import")}} angeht, nimmt das `@import` selbst nicht an der Kaskade teil, aber alle importierten Stile tun das. Wenn das `@import` eine [benannte oder anonyme Schicht](/de/docs/Web/CSS/@layer) definiert, werden die Inhalte des importierten Stylesheets in die angegebene Schicht platziert. Alle anderen mit `@import` importierten CSS werden als die zuletzt deklarierten Schichten behandelt. Dies wurde oben erläutert.

Schließlich gehorcht {{cssxref("@charset")}} spezifischen Algorithmen und wird durch den Kaskadenalgorithmus nicht beeinflusst.

### Präsentationsattribute

Präsentationsattribute sind Attribute im Quelldokument, die das Styling beeinflussen können. Zum Beispiel, wenn sie eingeschlossen werden, setzt das veraltete `align`-Attribut die Ausrichtung auf mehreren HTML-Elementen und das `fill`-Attribut definiert die Farbe, die verwendet wird, um SVG-Formen und Text zu malen und definiert den Endzustand für SVG-Animationen. Obwohl es sich um Autorenstile handelt, nehmen Präsentationsattribute nicht an der Kaskade teil.

Wenn das Präsentationsattribut von HTML-Agenten unterstützt wird, werden gültige Präsentationsattribute, die in HTML und SVG enthalten sind, wie die [`align`](/de/docs/Web/HTML/Element/img#align)- oder [`fill`](/de/docs/Web/SVG/Reference/Attribute/fill)-Attribute, in die entsprechenden CSS-Regeln übersetzt (alle SVG-Präsentationsattribute werden als CSS-Eigenschaften unterstützt) und im Autorenstylesheet vor allen anderen Stilen mit einer Spezifität von `0` eingefügt.

Präsentationsattribute können nicht als `!important` deklariert werden.

## CSS-Animationen und die Kaskade

[CSS-Animationen](/de/docs/Web/CSS/CSS_animations), die {{cssxref("@keyframes")}} at-rules verwenden, definieren Animationen zwischen Zuständen. `@keyframes` kaskadieren nicht, was bedeutet, dass CSS zu einem gegebenen Zeitpunkt Werte nur aus einem einzigen Satz von `@keyframes` nimmt und niemals mehrere mischt. Wenn mehrere `@keyframes`-Sätze mit demselben Animationsnamen definiert sind, wird der zuletzt definierte Satz im Ursprung und in der Schicht mit dem größten Vorrang verwendet. Andere `@keyframes` werden ignoriert, auch wenn sie verschiedene Eigenschaften animieren.

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

In diesem Beispiel gibt es drei separate Animationsdeklarationen mit dem Namen `repeatedName`. Wenn `animation: infinite 5s alternate repeatedName` auf den Absatz angewendet wird, wird nur eine Animation angewendet: die Keyframe-Animation, die im ungeschichteten CSS definiert ist, hat Vorrang vor den in den Schichten deklarierten Keyframe-Animationen basierend auf der Vorrangordnung von Ursprung und Schicht. In diesem Beispiel wird nur die Schriftgröße des Elements animiert.

> [!NOTE]
> Es gibt keine wichtigen Animationen, da Eigenschaftsdeklarationen in einem {{cssxref('@keyframes')}}-Block, die `!important` als Teil des Wertes enthalten, ignoriert werden.

## Zurücksetzen von Stilen

Nachdem Ihr Inhalt Stile verändert hat, kann er sich in einer Situation befinden, in der er sie in einen bekannten Zustand zurücksetzen muss. Dies kann bei Animationen, Themenwechseln usw. der Fall sein. Die CSS-Eigenschaft {{cssxref("all")}} ermöglicht es Ihnen, schnell (fast) alles in CSS auf einen bekannten Zustand zurückzusetzen.

`all` ermöglicht es Ihnen, sofort alle Eigenschaften auf jeden ihrer Anfangszustände zurückzusetzen, auf den vom vorherigen Kaskadenlevel geerbten Zustand, auf einen bestimmten Ursprung (das Benutzeragenten-Stylesheet, das Autoren-Stylesheet oder das Benutzer-Stylesheet) oder sogar die Werte der Eigenschaften vollständig zu löschen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Konflikte handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)-Modul
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [At-rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Initial](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [computed](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [used](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value), und [actual](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
