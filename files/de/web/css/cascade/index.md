---
title: Einführung in die CSS-Kaskade
slug: Web/CSS/Cascade
l10n:
  sourceCommit: c9c86abc12c3bdd3fdb07c73a0d1cf88cdd0e1bc
---

{{CSSRef}}

Die **Kaskade** ist ein Algorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte aus verschiedenen Quellen kombinieren. Die Kaskade legt fest, welche Herkunft und Ebene Vorrang hat, wenn Deklarationen aus mehr als einem [Ursprung](#ursprungstypen), [Kaskadenschicht](/de/docs/Web/CSS/@layer) oder {{CSSxRef("@scope")}}-Block einen Wert für eine Eigenschaft auf einem Element setzen.

Die Kaskade steht im Mittelpunkt von CSS, wie der Name betont: _**Cascading**_ Style Sheets. Wenn ein [Selektor](/de/docs/Web/CSS/CSS_selectors) mit einem Element übereinstimmt, wird der Eigenschaftswert aus dem Ursprung mit der höchsten Priorität angewendet, selbst wenn der Selektor aus einem Ursprung oder einer Schicht mit niedrigerer Priorität eine höhere [Spezifität](/de/docs/Web/CSS/Specificity) aufweist.

Dieser Artikel erklärt, was die Kaskade ist und in welcher Reihenfolge {{Glossary("CSS", "CSS")}}-[Deklarationen](/de/docs/Web/API/CSSStyleDeclaration) kaskadieren und behandelt Kaskadenschichten und Ursprungstypen. Das Verständnis der Ursprungspriorität ist der Schlüssel zum Verständnis der Kaskade.

## Ursprungstypen

Der Algorithmus der CSS-Kaskade hat die Aufgabe, CSS-Deklarationen auszuwählen, um die korrekten Werte für CSS-Eigenschaften zu bestimmen. CSS-Deklarationen stammen aus verschiedenen Ursprungstypen: **[Browser-Stilblätter](#browser-stilblätter)**, **[Autoren-Stilblätter](#autoren-stilblätter)** und **[Benutzer-Stilblätter](#benutzer-stilblätter)**.

Obwohl Stilblätter aus diesen unterschiedlichen Ursprüngen stammen und sich in verschiedenen [Schichten](/de/docs/Web/CSS/@layer) in jedem dieser Ursprünge befinden können, überschneiden sie sich in Bezug auf ihren Standardanwendungsbereich; um dies zu ermöglichen, definiert der Kaskadenalgorithmus, wie sie interagieren. Bevor wir auf die Interaktionen eingehen, definieren wir einige Schlüsselbegriffe in den nächsten Abschnitten.

### Browser-Stilblätter

Benutzeragenten, oder Browser, besitzen grundlegende Stilblätter, die jedem Dokument Standardstile verleihen. Diese Stilblätter werden als **Benutzeragenten-Stilblätter** bezeichnet. Die meisten Browser verwenden dafür tatsächliche Stilblätter, während andere sie im Code simulieren. Das Endergebnis ist dasselbe.

Einige Browser ermöglichen es Benutzern, das Benutzeragenten-Stilblatt zu ändern, aber das ist selten und kann nicht gesteuert werden.

Obwohl bestimmte Einschränkungen für Benutzeragenten-Stilblätter durch die HTML-Spezifikation festgelegt sind, haben Browser viel Freiheit, was bedeutet, dass es einige Unterschiede zwischen Browsern gibt. Um den Entwicklungsprozess zu vereinfachen, können Webentwickler ein Reset-CSS-Stilblatt verwenden, wie zum Beispiel [normalize.css](https://github.com/necolas/normalize.css), das gemeinsame Eigenschaftswerte auf einen bekannten Zustand für alle Browser setzt, bevor mit Änderungen zur Anpassung an spezifische Bedürfnisse begonnen wird.

Sofern das Benutzeragenten-Stilblatt nicht ein [`!important`](/de/docs/Web/CSS/Specificity#the_!important_exception) neben einer Eigenschaft enthält, die es "wichtig" macht, haben die von Autorenstilen deklarierten Stile, einschließlich eines Reset-Stilblatts, Vorrang vor den Benutzeragenten-Stilen, unabhängig von der Spezifität des zugehörigen Selektors.

### Autoren-Stilblätter

**Autoren-Stilblätter** sind die häufigste Art von Stilblättern; sie sind die Stile, die von Webentwicklern geschrieben werden. Diese Stile können Benutzeragenten-Stile zurücksetzen, wie oben erwähnt, und die Stile für das Design einer bestimmten Webseite oder Anwendung definieren. Der Autor, oder Webentwickler, definiert die Stile für das Dokument mithilfe von einem oder mehreren verlinkten oder importierten Stilblättern, {{HTMLElement('style')}}-Blöcken und Inline-Stilen, die mit dem [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribut definiert sind. Diese Autorenstile definieren das Aussehen und Verhalten der Website — ihr Thema.

### Benutzer-Stilblätter

In den meisten Browsern kann der Benutzer oder Leser der Website wählen, die Stile mithilfe eines benutzerdefinierten **Benutzer-Stilblatts** zu überschreiben, das darauf ausgelegt ist, das Erlebnis an die Wünsche des Benutzers anzupassen. Abhängig vom Benutzeragenten können [Benutzerstile konfiguriert werden](https://www.thoughtco.com/user-style-sheet-3469931) oder über Browsererweiterungen hinzugefügt werden.

### Kaskadenschichten

Die Kaskadenreihenfolge basiert auf dem Ursprungstyp. Die Kaskade innerhalb jedes Ursprungstypen basiert auf der Deklarationsreihenfolge der [Kaskadenschichten](/de/docs/Web/CSS/@layer) innerhalb dieses Typs. Für alle Ursprünge - Benutzeragent, Autor oder Benutzer - können Stile innerhalb oder außerhalb von benannten oder anonymen Schichten deklariert werden. Wenn sie mit [`layer`, `layer()`](/de/docs/Web/CSS/@import) oder [`@layer`](/de/docs/Web/CSS/@layer) deklariert werden, werden Stile in die angegebene benannte Schicht oder in eine anonyme Schicht platziert, wenn kein Name angegeben wurde. Stile, die außerhalb einer Schicht deklariert sind, werden als Teil einer zuletzt deklarierten anonymen Schicht behandelt.

Betrachten wir den kaskadierenden Ursprungstyp, bevor wir uns den Kaskadenschichten innerhalb jedes Ursprungstyps zuwenden.

## Kaskadenreihenfolge

Der Kaskadenalgorithmus bestimmt, wie der Wert für jede Eigenschaft für jedes Dokumentelement angewendet wird. Die folgenden Schritte gelten für den Kaskadenalgorithmus:

1. **Relevanz**: Zuerst filtert er alle Regeln aus den verschiedenen Quellen, um nur die Regeln zu behalten, die auf ein bestimmtes Element angewendet werden. Das bedeutet Regeln, deren Selektor mit dem gegebenen Element übereinstimmt und die Teil einer passenden `media`-Regel sind.
2. **Ursprung und Wichtigkeit**: Dann sortiert er diese Regeln nach ihrer Wichtigkeit, das heißt, ob sie mit `!important` versehen sind oder nicht, und nach ihrem Ursprung. Ignorieren wir für einen Moment die Schichten, ist die Kaskadenreihenfolge wie folgt:

   | Reihenfolge (niedrig bis hoch) | Ursprung                  | Wichtigkeit  |
   | ------------------------------ | ------------------------- | ------------ |
   | 1                              | Benutzeragent (Browser)   | normal       |
   | 2                              | Benutzer                  | normal       |
   | 3                              | Autor (Entwickler)        | normal       |
   | 4                              | CSS @keyframe Animationen |              |
   | 5                              | Autor (Entwickler)        | `!important` |
   | 6                              | Benutzer                  | `!important` |
   | 7                              | Benutzeragent (Browser)   | `!important` |
   | 8                              | CSS Übergänge             |              |

3. **Spezifität**: Im Falle der Gleichheit mit einem Ursprung wird die [Spezifität](/de/docs/Web/CSS/Specificity) einer Regel berücksichtigt, um einen Wert auszuwählen. Die Spezifität der Selektoren wird verglichen, und die Deklaration mit der höchsten Spezifität gewinnt.
4. **Nähe zum Anwendungsbereich**: Wenn zwei Selektoren in der Ursachenschicht mit Vorrang die gleiche Spezifität haben, gewinnt der Eigenschaftswert in geschachtelten Regeln mit der geringsten Anzahl von Sprüngen in der DOM-Hierarchie bis zur Anwendungsbereichswurzel. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.
5. **Reihenfolge des Erscheinens**: Im Ursprung mit Vorrang, wenn es konkurrierende Werte für eine Eigenschaft gibt, die in Stilblöcken enthalten sind, die Selektoren mit gleicher Spezifität und Nähe zum Anwendungsbereich entsprechen, wird die letzte Deklaration in der Stilreihenfolge angewendet.

Die Kaskade ist in aufsteigender Reihenfolge, was bedeutet:

- Animationen haben Vorrang vor normalen Werten, unabhängig davon, ob sie in Benutzer-, Autoren- oder Benutzeragentenstilen deklariert sind.
- Wichtige Werte haben Vorrang vor Animationen, unabhängig davon, ob sie in Benutzer-, Autoren- oder Benutzeragentenstilen deklariert sind.
- Übergänge haben Vorrang vor wichtigen Werten.

> **Hinweis:** **Übergänge und Animationen**
>
> Eigenschaftswerte, die durch die Animation {{cssxref('@keyframes')}} gesetzt werden, sind wichtiger als alle normalen Stile (d. h. solche ohne [`!important`](/de/docs/Web/CSS/Specificity#the_!important_exception)).
>
> Eigenschaftswerte, die in einem {{cssxref('transition')}} gesetzt werden, haben Vorrang vor allen anderen gesetzten Werten, selbst die mit `!important`.

Der Kaskadenalgorithmus wird _vor_ dem Spezifitätsalgorithmus angewendet. Das heißt, wenn `:root p { color: red;}` im Benutzerstilblatt (Reihe 2) deklariert ist und ein weniger spezifisches `p {color: blue;}` im Autorenstilblatt (Reihe 3) vorhanden ist, werden die Absätze blau sein.

## Einfaches Beispiel

Bevor wir einen tieferen Blick darauf werfen, wie Kaskadenschichten die Kaskade beeinflussen, schauen wir uns ein Beispiel an, bei dem mehrere Quellen von CSS aus den verschiedenen Ursprüngen eingebunden sind und arbeiten die Schritte des Kaskadenalgorithmus durch:

Hier haben wir ein Benutzeragenten-Stilblatt, zwei Autoren-Stilblätter und ein Benutzer-Stilblatt, ohne Inline-Stile innerhalb des HTML:

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

In diesem Fall sollten Deklarationen innerhalb der `li` und `.specific` Regeln angewendet werden.

Noch einmal, es gibt fünf Schritte im Kaskadenalgorithmus, in dieser Reihenfolge:

1. Relevanz
2. Ursprung und Wichtigkeit
3. Spezifität
4. Nähe zum Anwendungsbereich
5. Erscheinungsreihenfolge

Das `1px` ist für Medien im Druckformat. Aufgrund mangelnder _Relevanz_ basierend auf seinem Medientyp wird es von der Berücksichtigung ausgeschlossen.

Keine Deklaration ist als `!important` gekennzeichnet, sodass die Reihenfolge der Priorität Autoren-Stilblätter über Benutzer-Stilblätter über Benutzeragenten-Stilblätter ist. Basierend auf _Ursprung und Wichtigkeit_ werden das `1em` aus dem Benutzerstilblatt und das `10px` aus dem Benutzeragenten-Stilblatt von der Berücksichtigung ausgeschlossen.

Beachten Sie, dass auch wenn der Benutzerstil auf `.specific` mit `1em` eine höhere Spezifität aufweist, es sich um eine normale Deklaration in einem Benutzer-Stilblatt handelt. Als solche hat sie eine geringere Priorität als alle Autorenstile und wird vom Schritt Ursprung und Wichtigkeit des Algorithmus entfernt, bevor die Spezifität ins Spiel kommt.

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

Die letzte, `5px`, ist Teil einer Kaskadenschicht. Normale Deklarationen in Schichten haben eine geringere Priorität als normale Stile, die nicht in einer Schicht innerhalb des gleichen Ursprungstyps sind. Auch dies wird im Schritt 2 des Algorithmus, _Ursprung und Wichtigkeit_, ausgeschlossen.

Dies lässt `0` und `3px`, die beide den gleichen Selektor und daher die gleiche _Spezifität_ haben. Keiner von ihnen befindet sich in einem `@scope`-Block, sodass die Nähe zum Anwendungsbereich in diesem Beispiel ebenfalls nicht ins Spiel kommt.

Dann schauen wir auf _Reihenfolge des Erscheinens_. Der zweite, der letzte der beiden nicht geschichteten Autorenstile, gewinnt.

```css
margin-left: 3px;
```

> [!NOTE]
> Die im Benutzer-CSS definierte Deklaration wird nicht ausgewählt, auch wenn sie möglicherweise eine höhere Spezifität hat, da der Kaskadenalgorithmus zuerst auf _Ursprung und Wichtigkeit_ angewendet wird, bevor der _Spezifitäts_-Algorithmus berücksichtigt wird. Die in einer Kaskadenschicht definierte Deklaration wird ebenfalls nicht den Vorrang haben, auch wenn sie später im Code kommt, da normale Stile in Kaskadenschichten eine geringere Priorität haben als normale, nicht geschichtete Stile. _Reihenfolge des Erscheinens_ zählt nur, wenn sowohl Ursprung, Wichtigkeit als auch Spezifität gleich sind.

## Autorenstile: Inline-Stile, Schichten und Priorität

Die [Tabelle in Kaskadenreihenfolge](#kaskadenreihenfolge) lieferte eine Übersicht über die Prioritätenreihenfolge. Die Tabelle fasste die Benutzersagenten-, Benutzer- und Autorenstile in zwei Zeilen zusammen mit "Ursprungstyp - normal" und "Ursprungstyp - !important". Die Priorität innerhalb jedes Ursprungstyps ist jedoch differenzierter. Stile können in Schichten innerhalb ihres Ursprungstyps enthalten sein, und bei Autorenstilen gibt es auch das Problem, wo Inline-Stile in der Kaskadenreihenfolge landen.

Die Reihenfolge, in der Schichten deklariert werden, ist wichtig für die Bestimmung von Prioritäten. Normale Stile in einer Schicht haben Vorrang vor Stilen, die zuvor in Schichten deklariert wurden; wobei normale Stile, die außerhalb von Schichten deklariert werden, Vorrang vor normalen geschichteten Stilen haben, unabhängig von der Spezifität.

In diesem Beispiel verwendete der Autor die {{CSSXref('@import')}}-Regel von CSS, um fünf externe Stilblätter innerhalb eines {{HTMLElement('style')}}-Informationselements zu importieren.

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

Im obigen CSS-Codeblock wurden drei Kaskadenschichten mit den Namen "A", "B" und "C" erstellt, in dieser Reihenfolge. Drei Stilblätter wurden direkt in Schichten importiert, und zwei wurden ohne die Erstellung einer Schicht oder deren Zuweisung importiert.
Die "Alle nicht geschichteten Stile" in der folgenden Liste (normale Autorenstil-Priorität - Reihenfolge 4) umfassen Stile aus diesen beiden Stilblättern und den zusätzlichen nicht geschichteten CSS-Stilblöcken. Darüber hinaus gibt es zwei Inline-Stile, eine normale `line-height`-Deklaration und eine wichtige `text-decoration`-Deklaration:

| Reihenfolge (niedrig bis hoch) | Autorenstil                    | Wichtigkeit  |
| ------------------------------ | ------------------------------ | ------------ |
| 1                              | A - erste Schicht              | normal       |
| 2                              | B - zweite Schicht             | normal       |
| 3                              | C - letzte Schicht             | normal       |
| 4                              | Alle nicht geschichteten Stile | normal       |
| 5                              | inline `style`                 | normal       |
| 6                              | Animationen                    |              |
| 7                              | Alle nicht geschichteten Stile | `!important` |
| 8                              | C - letzte Schicht             | `!important` |
| 9                              | B - zweite Schicht             | `!important` |
| 10                             | A - erste Schicht              | `!important` |
| 11                             | inline `style`                 | `!important` |
| 12                             | Übergänge                      |              |

In allen Ursprungstypen haben normale Stile, die in Schichten enthalten sind, die niedrigste Priorität. In unserem Beispiel haben die normalen Stile, die mit der zuerst deklarierten Schicht (A) verbunden sind, eine geringere Priorität als die normalen Stile in der zweitdeklarierten Schicht (B), die eine geringere Priorität als die normalen Stile in der drittdeklarierten Schicht (C) haben. Diese geschichteten Stile haben eine geringere Priorität als alle normalen nicht geschichteten Stile, die normale Stile aus `unlayeredStyles.css`, `moreUnlayeredStyles.css` und die `Farbe` des `p` im `<style>` selbst umfasst.

Wenn irgendwelche geschichteten Stile in A, B oder C Selektoren mit höherer Spezifität haben, die zu einem Element passen, ähnlich wie `:root body p { color: black; }`, spielt das keine Rolle. Diese Deklarationen werden aufgrund des _Ursprungs_ nicht berücksichtigt; normale geschichtete Stile haben eine geringere Priorität als normale nicht geschichtete Stile. Wenn jedoch der spezifischere Selektor `:root body p { color: black; }` in `unlayeredStyles.css` gefunden wurde, bedeutet dies, dass beide _Ursprung und Wichtigkeit_ die gleiche Priorität haben und _Spezifität_ bedeuten würde, dass die spezifischere, schwarze Deklaration gewinnen würde.

Die Schichtenreihenfolge der Priorität wird für als `!important` deklarierte Stile umgekehrt. Wichtige Deklarationen, die in einer Schicht gefunden werden, haben Vorrang vor wichtigen Deklarationen, die außerhalb einer Schicht gefunden werden. Wichtige Deklarationen, die in der ersten Schicht (A) gefunden werden, haben Vorrang vor wichtigen Deklarationen, die in Schicht B deklariert sind, die Vorrang vor wichtigen Deklarationen in Schicht C haben, die wiederum Vorrang vor wichtigen Deklarationen haben, die außerhalb einer Schicht deklariert sind.

### Inline-Stile

Nur für Autorenstile relevant sind Inline-Stile, die mit dem `style`-Attribut deklariert werden. Normale Inline-Stile haben Vorrang vor allen anderen normalen Autorenstilen, unabhängig von der Spezifität des Selektors. Wenn `line-height: 2;` in einer `:root body p`-Selektorblock in einem der fünf importierten Stilblätter deklariert wurde, würde die Zeilenhöhe immer noch `1.6` betragen. Normale Inline-Stile haben keinen Vorrang vor animierten oder übergangenen Eigenschaften.

Wichtige Inline-Stile haben Vorrang vor allen anderen Autorenstilen, unabhängig davon, ob sie wichtig, inline oder in einer Schicht sind. Wichtige Inline-Stile haben auch Vorrang vor animierten Eigenschaften, aber nicht vor übergangenen Eigenschaften. Drei Dinge können einen wichtigen Inline-Stil überschreiben:

- Ein wichtiger Benutzerstil.
- Ein wichtiger Benutzeragentenstil.
- Eine übergangene Eigenschaft.

### Wichtigkeit und Ebenen

Die Reihenfolge der Prioritäten der Ursprungstypen ist für wichtige Stile umgekehrt. Wichtige Stile, die außerhalb einer Kaskadenschicht deklariert sind, haben eine geringere Priorität als diejenigen, die als Teil einer Schicht deklariert sind. Wichtige Stile, die in frühen Schichten vorkommen, haben Vorrang vor wichtigen Stilen, die in späteren Kaskadenschichten deklariert sind.

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

Auch wenn das Rot zuerst deklariert wurde und einen weniger spezifischen Selektor hat, wird der Absatz rot sein, weil nicht geschichtetes CSS Vorrang vor geschichtetem CSS hat. Hätten wir einen Inline-Stil am Absatz mit einer anderen Farbe hinzugefügt, z.B. `<p style="color: black">`, wäre der Absatz schwarz.

Wenn wir `!important` zu diesem CSS hinzufügen, ändert sich die Prioritätenreihenfolge im Stylesheet:

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

Jetzt wird der Absatz blau. Das `!important` in der frühesten deklarierten Schicht hat Vorrang vor nachfolgenden Schichten und nicht geschichteten wichtigen Deklarationen. Wenn der Inline-Stil `!important` enthalten würde, wie z.B. `<p style="color: black !important">`, wäre der Absatz erneut schwarz. Inline-Wichtigkeit hat Vorrang vor allen anderen vom Autor deklarierten `!important`-Deklarationen, unabhängig von der Spezifität.

> [!NOTE]
> Das `!important`-Flag kehrt die Priorität der Kaskadenschichten um. Verwenden Sie daher nach Möglichkeit nicht `!important`, um externe Stile zu überschreiben. Verwenden Sie stattdessen {{cssxref("@import")}} zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Schichten zu importieren. Das Importieren von Stylesheets in eine Schicht als erste Deklaration in Ihrem CSS senkt deren Priorität, und die vom Autor definierten Schichten, die später in Ihrem CSS definiert sind, haben eine höhere Priorität. Das `!important`-Flag sollte nur sparsam, wenn überhaupt, verwendet werden, um notwendige Stile gegen spätere Überschreibungen abzusichern, in der zuerst deklarierten Schicht.

Stile, die sich im Übergang befinden, haben Vorrang vor allen wichtigen Stilen, unabhängig davon, wer oder wie sie deklariert sind.

## Vollständige Kaskadenreihenfolge

Jetzt, wo wir ein besseres Verständnis der Ursprungstypen und der Priorität von Kaskadenschichten haben, stellt sich heraus, dass die Tabelle in [Kaskadenreihenfolge](#kaskadenreihenfolge) genauer durch die folgende Tabelle dargestellt werden könnte:

<table>
<thead>
  <tr><th>Reihenfolge <br/>(niedrig bis hoch)</th><th>Stilherkunft</th><th>Wichtigkeit</th></tr>
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
  <tr><td rowspan="4">5</td><td>Autor - nicht geschichtete Stile</td><td rowspan="4"><code>!important</code></td></tr>
  <tr><td>Autor - letzte deklarierte Schicht</td></tr>
  <tr><td>Autor - erste deklarierte Schicht</td></tr>
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

## Welche CSS-Entitäten an der Kaskade teilnehmen

Nur CSS Eigenschafts-/Wertpaardeklarationen nehmen an der Kaskade teil. CSS Regelbeschreibungen nehmen nicht an der Kaskade teil, und HTML-Präsentationsattribute sind nicht Teil der Kaskade.

### Regel-Deklarationen

CSS [Regel-Deklarationen](/de/docs/Web/CSS/At-rule), die andere Entitäten als Deklarationen enthalten, wie eine {{cssxref("@font-face")}}-Regel, die _Beschreibungen_ enthält, nehmen nicht an der Kaskade teil.

Im Allgemeinen nehmen die in Regel-Deklarationen definierten Eigenschaften und Beschreibungen nicht an der Kaskade teil. Nur Regel-Deklarationen als Ganzes nehmen an der Kaskade teil. Zum Beispiel werden innerhalb einer `@font-face`-Regel Schriftartnamen durch [`font-family`](/de/docs/Web/CSS/@font-face/font-family)-Beschreibungen identifiziert. Wenn mehrere `@font-face`-Regel-Deklarationen mit derselben Beschreibung definiert sind, wird nur das passendste `@font-face` insgesamt berücksichtigt. Wenn mehrere identisch passend sind, werden die gesamten `@font-face`-Deklarationen unter Verwendung der Schritte 1, 2 und 4 des Algorithmus verglichen (es gibt keine Spezifität bei Regel-Deklarationen).

Während die in den meisten Regel-Deklarationen enthaltenen Deklarationen — wie die in {{cssxref("@media")}}, {{cssxref("@document")}} oder {{cssxref("@supports")}} — an der Kaskade teilnehmen, kann die Regel-Deklaration als Ganzes dazu führen, dass ein ganzer Selektor irrelevant ist, wie wir im [einfachen Beispiel](#einfaches_beispiel) mit dem Druckstil gesehen haben.

Deklarationen in {{cssxref("@keyframes")}} nehmen nicht an der Kaskade teil. Wie bei `@font-face` wird nur die gesamte `@keyframes`-Regel über den Kaskadenalgorithmus ausgewählt. Die [Reihenfolge der Animationen ist unten beschrieben](#css-animationen_und_die_kaskade).

Im Falle von {{cssxref("@import")}} nimmt das `@import` selbst nicht an der Kaskade teil, aber alle importierten Stile machen es. Wenn das `@import` eine [benannte oder anonyme Schicht](/de/docs/Web/CSS/@layer) definiert, werden die Inhalte des importierten Stilblattes in die angegebene Schicht platziert. Alle anderen mit `@import` importierten CSS werden als letzte deklarierte Schicht behandelt. Dies wurde bereits oben besprochen.

Schließlich folgt {{cssxref("@charset")}} spezifischen Algorithmen und ist nicht von dem Kaskadenalgorithmus betroffen.

### Präsentationsattribute

Präsentationsattribute sind Attribute im Quelldokument, die das Styling beeinflussen können. Wenn sie enthalten sind, setzt das veraltete `align`-Attribut die Ausrichtung auf mehrere HTML-Elemente und das `fill`-Attribut definiert die Farbe, die verwendet wird, um SVG-Formen und -Text zu malen und den Endzustand für SVG-Animationen zu bestimmen. Obwohl sie Autorenstile sind, nehmen Präsentationsattribute nicht an der Kaskade teil.

Wenn das HTML-Präsentationsattribut vom Benutzeragenten unterstützt wird, werden gültige Präsentationsattribute, die in HTML und SVG enthalten sind, wie die [`align`](/de/docs/Web/HTML/Element/img#align) oder [`fill`](/de/docs/Web/SVG/Attribute/fill)-Attribute, in die entsprechenden CSS-Regeln übersetzt (alle SVG-Präsentationsattribute werden als CSS-Eigenschaften unterstützt) und vor allen anderen Stilen mit einer Spezifität von `0` in das Autorenstilblatt eingefügt.

Präsentationsattribute können nicht als `!important` deklariert werden.

## CSS-Animationen und die Kaskade

[CSS-Animationen](/de/docs/Web/CSS/CSS_animations), die {{cssxref("@keyframes")}}-Regel verwenden, definieren Animationen zwischen Zuständen. `@keyframes` kaskadieren nicht, wodurch CSS zu jedem beliebigen Zeitpunkt Werte aus nur einem einzigen Satz `@keyframes` verwendet und niemals mehrere mischt. Wenn mehrere Sätze von `@keyframes` mit demselben Animationsnamen definiert sind, wird der zuletzt definierte Satz in der Herkunft und Ebene mit der größten Priorität verwendet. Andere `@keyframes`-Regel-Deklarationen werden ignoriert, selbst wenn sie unterschiedliche Eigenschaften animieren.

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

In diesem Beispiel gibt es drei separate Animationsdeklarationen mit dem Namen `repeatedName`. Wenn `animation: infinite 5s alternate repeatedName` auf den Absatz angewendet wird, wird nur eine Animation angewendet: die `keyframe`-Animation, die in dem nicht geschichteten CSS definiert ist, hat Vorrang vor den geschichteten Deklarationen der `keyframe`-Animationen basierend auf dem Herkunfts- und Schichtenpräzedenzordnungs. In diesem Beispiel wird nur die Schriftgröße des Elements animiert.

> [!NOTE]
> Es gibt keine wichtigen Animationen, da Eigenschaftsdeklarationen in einem {{cssxref('@keyframes')}}-Block, die `!important` als Teil des Wertes enthalten, ignoriert werden.

## Stile zurücksetzen

Nachdem Ihr Inhalt die Stile fertig verändert hat, kann er sich in einer Situation befinden, in der er sie zu einem bekannten Zustand wiederherstellen muss. Dies kann in Fällen von Animationen, Themenänderungen und ähnlichem passieren. Die CSS-Eigenschaft {{cssxref("all")}} ermöglicht es Ihnen, schnell (fast) alles in CSS auf einen bekannten Zustand zurückzusetzen.

`alle` ermöglicht es Ihnen, sofort alle Eigenschaften auf ihren Anfangszustand, den Zustand, der von der vorherigen Ebene der Kaskade geerbt wurde, einen bestimmten Ursprung (das Benutzeragenten-Stilblatt, das Autoren-Stilblatt oder das Benutzer-Stilblatt) oder sogar die Werte der Eigenschaften vollständig zu löschen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Konfliktbehandlung](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierungs- und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/Syntax)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [At-Rules](/de/docs/Web/CSS/At-rule)
- [Anfangs-](/de/docs/Web/CSS/initial_value), [berechnete](/de/docs/Web/CSS/computed_value), [verwendete](/de/docs/Web/CSS/used_value) und [tatsächliche Werte](/de/docs/Web/CSS/actual_value)
