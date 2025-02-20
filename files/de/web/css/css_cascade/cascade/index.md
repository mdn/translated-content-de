---
title: Einführung in die CSS-Kaskade
slug: Web/CSS/CSS_cascade/Cascade
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Die **Kaskade** ist ein Algorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte aus verschiedenen Quellen kombinieren. Die Kaskade beschreibt die Herkunft und die Ebene, die Vorrang hat, wenn Erklärungen in mehr als einer [Herkunft](#herkunftstypen), [Kaskadenschicht](/de/docs/Web/CSS/@layer) oder {{CSSxRef("@scope")}}-Block einen Wert für eine Eigenschaft eines Elements festlegen.

Die Kaskade bildet das Herzstück von CSS, wie der Name betont: _**Cascading**_ Style Sheets. Wenn ein [Selektor](/de/docs/Web/CSS/CSS_selectors) mit einem Element übereinstimmt, wird der Eigenschaftswert aus der Herkunft mit der höchsten Priorität angewendet, auch wenn der Selektor aus einer Herkunft oder Ebene mit niedrigerer Priorität eine höhere [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) hat.

Dieser Artikel erklärt, was die Kaskade ist und in welcher Reihenfolge {{Glossary("CSS", "CSS")}}-[Deklarationen](/de/docs/Web/API/CSSStyleDeclaration) kaskadieren, und behandelt Kaskadenschichten und Herkunftstypen. Das Verständnis der Herkunftspriorität ist der Schlüssel zum Verständnis der Kaskade.

## Herkunftstypen

Die Aufgabe des CSS-Kaskadenalgorithmus besteht darin, CSS-Deklarationen auszuwählen, um die richtigen Werte für CSS-Eigenschaften zu bestimmen. CSS-Deklarationen stammen aus verschiedenen Herkunftstypen: **[Benutzeragenten-Stilblätter](#benutzeragenten-stilblätter)**, **[Autoren-Stilblätter](#autoren-stilblätter)** und **[Benutzer-Stilblätter](#benutzer-stilblätter)**.

Obwohl Stilblätter aus diesen unterschiedlichen Herkünften stammen und in jeder dieser Herkünfte in verschiedenen [Schichten](/de/docs/Web/CSS/@layer) vorhanden sein können, überschneiden sie sich hinsichtlich ihres Standardscope; um dies zu ermöglichen, definiert der Kaskadenalgorithmus, wie sie interagieren. Bevor wir uns mit den Interaktionen befassen, werden wir in den nächsten Abschnitten einige Schlüsselbegriffe definieren.

### Benutzeragenten-Stilblätter

Benutzeragenten, oder Browser, haben grundlegende Stilblätter, die Standardstile für jedes Dokument bereitstellen. Diese Stilblätter werden **Benutzeragenten-Stilblätter** genannt. Die meisten Browser verwenden dafür tatsächliche Stilblätter, während andere sie im Code simulieren. Das Endergebnis ist dasselbe.

Einige Browser ermöglichen es Benutzern, das Benutzeragenten-Stilblatt zu ändern, aber das ist selten und kann nicht kontrolliert werden.

Obwohl einige Einschränkungen für Benutzeragenten-Stilblätter durch die HTML-Spezifikation festgelegt sind, haben Browser große Freiheiten: Das bedeutet, dass es einige Unterschiede zwischen den Browsern gibt. Um den Entwicklungsprozess zu vereinfachen, können Webentwickler ein CSS-Reset-Stilblatt verwenden, wie [normalize.css](https://github.com/necolas/normalize.css), das bekannte Eigenschaftswerte für alle Browser auf einen bekannten Zustand setzt, bevor Änderungen vorgenommen werden, um den spezifischen Bedürfnissen zu entsprechen.

Sofern das Benutzeragenten-Stilblatt kein [`!important`](/de/docs/Web/CSS/CSS_cascade/Specificity#the_!important_exception) neben einer Eigenschaft enthält und diese „wichtig“ macht, haben von Autoren deklarierte Stile, einschließlich eines Reset-Stilblatts, Vorrang vor den Benutzeragenten-Stilen, unabhängig von der Spezifität des zugehörigen Selektors.

### Autoren-Stilblätter

**Autoren-Stilblätter** sind der häufigste Stilblatt-Typ; dies sind die Stile, die von Webentwicklern geschrieben werden. Diese Stile können Benutzeragenten-Stile zurücksetzen, wie oben erwähnt, und die Stile für das Design einer bestimmten Webseite oder Anwendung definieren. Der Autor, oder Webentwickler, definiert die Stile für das Dokument mithilfe eines oder mehrerer verknüpfter oder importierter Stilblätter, {{HTMLElement('style')}}-Blocken und eingebetteten Stilen, die mit dem [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribut definiert sind. Diese Autorenstile definieren das Aussehen und das Thema der Website – ihr Thema.

### Benutzer-Stilblätter

In den meisten Browsern kann der Benutzer (oder Leser) der Website wählen, Stile mit einem benutzerdefinierten **Benutzerstilblatt** zu überschreiben, um das Erlebnis an die Wünsche des Benutzers anzupassen. Abhängig vom Benutzeragenten können [Benutzerstile konfiguriert werden](https://www.thoughtco.com/user-style-sheet-3469931) oder über Browsererweiterungen hinzugefügt werden.

### Kaskadenschichten

Die Kaskadenreihenfolge basiert auf dem Herkunftstyp. Die Kaskade innerhalb jedes Herkunftstyps basiert auf der Deklarationsreihenfolge der [Kaskadenschichten](/de/docs/Web/CSS/@layer) innerhalb dieses Typs. Für alle Herkünfte - Benutzeragenten, Autoren oder Benutzer - können Stile innerhalb oder außerhalb benannter oder anonymer Schichten deklariert werden. Wenn sie unter Verwendung von [`layer`, `layer()`](/de/docs/Web/CSS/@import) oder [`@layer`](/de/docs/Web/CSS/@layer) deklariert werden, werden Stile in die angegebene benannte Schicht oder in eine anonyme Schicht platziert, wenn kein Name angegeben wird. Stile, die außerhalb einer Schicht deklariert sind, werden als Teil einer anonymen zuletzt deklarierten Schicht betrachtet.

Werfen wir einen Blick auf die kaskadierende Herkunft, bevor wir auf die Kaskadenschichten innerhalb jedes Herkunftstyps eingehen.

## Kaskadenreihenfolge

Der Kaskadenalgorithmus bestimmt, wie der Wert für jede Eigenschaft für jedes Dokumentelement gefunden wird. Die folgenden Schritte gelten für den Kaskadenalgorithmus:

1. **Relevanz**: Zuerst filtert er alle Regeln aus verschiedenen Quellen, um nur die Regeln zu behalten, die auf ein bestimmtes Element zutreffen. Das bedeutet Regeln, deren Selektor mit dem gegebenen Element übereinstimmt und die Teil einer entsprechenden `media`-At-Regel sind.
2. **Herkunft und Wichtigkeit**: Dann sortiert er diese Regeln nach ihrer Wichtigkeit, d.h., ob sie von `!important` gefolgt werden oder nicht, und nach ihrer Herkunft. Ignorieren wir für den Moment die Schichten, ist die Kaskadenreihenfolge wie folgt:

   | Prioritätsreihenfolge (niedrig bis hoch) | Herkunft                  | Wichtigkeit  |
   | ---------------------------------------- | ------------------------- | ------------ |
   | 1                                        | Benutzeragent (Browser)   | normal       |
   | 2                                        | Benutzer                  | normal       |
   | 3                                        | Autor (Entwickler)        | normal       |
   | 4                                        | CSS @keyframe-Animationen |              |
   | 5                                        | Autor (Entwickler)        | `!important` |
   | 6                                        | Benutzer                  | `!important` |
   | 7                                        | Benutzeragent (Browser)   | `!important` |
   | 8                                        | CSS-Transitionen          |              |

3. **Spezifität**: Im Fall von Gleichheit bei einer Herkunft wird die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) einer Regel betrachtet, um einen Wert auszuwählen. Die Spezifität der Selektoren wird verglichen, und die Deklaration mit der höchsten Spezifität gewinnt.
4. **Nahbereich der Abdeckung**: Wenn zwei Selektoren in der Ursprungs-Ebene mit Vorrang die gleiche Spezifität haben, gewinnt der Eigenschaftswert innerhalb abgedeckter Regeln mit der geringsten Anzahl von Sprüngen die DOM-Hierarchie hinauf zum Ursprung. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.
5. **Reihenfolge des Erscheinens**: In der Herkunft mit Vorrang, wenn es konkurrierende Werte für eine Eigenschaft gibt, die sich in Stileblöcken mit passenden Selektoren gleicher Spezifität und Nahbereich der Abdeckung befinden, wird die letzte Deklaration in der Stilreihenfolge angewendet.

Die Kaskade ist in aufsteigender Reihenfolge, das bedeutet:

- Animationen haben Vorrang vor normalen Werten, ob sie in Benutzer-, Autoren- oder Benutzeragenten-Stilen deklariert sind.
- Wichtige Werte haben Vorrang vor Animationen, ob sie in Benutzer-, Autoren- oder Benutzeragenten-Stilen deklariert sind.
- Transitionen haben Vorrang vor wichtigen Werten.

> **Hinweis:** **Übergänge und Animationen**
>
> Eigenschaftswerte, die durch Animationen mit {{cssxref('@keyframes')}} gesetzt werden, sind wichtiger als alle normalen Stile (jene ohne [`!important`](/de/docs/Web/CSS/CSS_cascade/Specificity#the_!important_exception) gesetzt).
>
> Eigenschaftswerte, die in einer {{cssxref('transition')}} gesetzt werden, haben Vorrang vor allen anderen gesetzten Werten, auch denen mit `!important`.

Der Kaskadenalgorithmus wird _vor_ dem Spezifitätsalgorithmus angewendet, das bedeutet, wenn `:root p { color: red;}` in dem Benutzerstilblatt (Zeile 2) deklariert ist und ein weniger spezifisches `p {color: blue;}` im Autorenstilblatt (Zeile 3), werden die Absätze blau sein.

## Einfaches Beispiel

Bevor wir einen tieferen Blick darauf werfen, wie Kaskadenschichten die Kaskade beeinflussen, sehen wir uns ein Beispiel mit mehreren Quellen von CSS aus den verschiedenen Herkünften an und gehen wir durch die Schritte des Kaskadenalgorithmus:

Hier haben wir ein Benutzeragenten-Stilblatt, zwei Autoren-Stilblätter und ein Benutzer-Stilblatt, ohne eingebettete Stile im HTML:

**Benutzeragenten CSS:**

```css
li {
  margin-left: 10px;
}
```

**Autoren CSS 1:**

```css
li {
  margin-left: 0;
} /* This is a reset */
```

**Autoren CSS 2:**

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

In diesem Fall sollten Deklarationen innerhalb der `li`- und `.specific`-Regeln angewendet werden.

Noch einmal, es gibt fünf Schritte im Kaskadenalgorithmus, in Reihenfolge:

1. Relevanz
2. Herkunft und Wichtigkeit
3. Spezifität
4. Nahbereich der Abdeckung
5. Reihenfolge des Erscheinens

Das `1px` ist für Printmedien. Aufgrund fehlender _Relevanz_ basierend auf seinem Medientyp wird es aus der Betrachtung ausgeschlossen.

Keine Deklaration ist als `!important` markiert, sodass die Prioritätsreihenfolge ist: Autoren-Stilblätter über Benutzer-Stilblätter über das Benutzeragenten-Stilblatt. Basierend auf _Herkunft und Wichtigkeit_, werden das `1em` aus dem Benutzerstilblatt und das `10px` aus dem Benutzeragenten-Stilblatt aus der Betrachtung ausgeschlossen.

Beachten Sie, dass selbst wenn der Benutzerstil auf `.specific` von `1em` eine höhere Spezifität hat, es sich um eine normale Deklaration in einem Benutzerstilblatt handelt. Daher hat es eine niedrigere Priorität als alle Autorenstile und wird durch den Herkunfts- und Wichtigkeitsschritt des Algorithmus entfernt, bevor die Spezifität ins Spiel kommt.

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

Die letzte, die `5px`-Deklaration, ist Teil einer Kaskadenschicht. Normale Deklarationen in Schichten haben niedrigere Priorität als normale Stile, die nicht in einer Schicht innerhalb desselben Herkunftstyps sind. Dies wird auch durch Schritt 2 des Algorithmus entfernt, _Herkunft und Wichtigkeit_.

Dies lässt die `0` und die `3px`, die beide den gleichen Selektor haben, daher die gleiche _Spezifität_. Keiner von ihnen befindet sich innerhalb eines `@scope`-Blocks, sodass die Nahbereich der Abdeckung in diesem Beispiel auch nicht ins Spiel kommt.

Wir betrachten dann die _Reihenfolge des Erscheinens_. Die zweite, die letzte der beiden nicht geschichteten Autorenstile, gewinnt.

```css
margin-left: 3px;
```

> [!NOTE]
> Die im Benutzerstil definierte Deklaration wird nicht ausgewählt, obwohl sie möglicherweise eine höhere Spezifität hat, da der Kaskadenalgorithmus' _Herkunft und Wichtigkeit_ vor dem Spezifitätsalgorithmus angewendet wird. Die in einer Kaskadenschicht definierte Deklaration, auch wenn sie später im Code kommt, wird nicht den Vorrang haben, da normale Stile in Kaskadenschichten weniger Vorrang als normale ungeschichtete Stile haben. _Reihenfolge des Erscheinens_ spielt nur dann eine Rolle, wenn Herkunft, Wichtigkeit und Spezifität gleich sind.

## Autorenstile: Inline-Stile, Schichten und Priorität

Die [Tabelle in Kaskadenreihenfolge](#kaskadenreihenfolge) gibt einen Überblick über die Prioritätsreihenfolge. Die Tabelle fasste die Benutzeragent-, Benutzer- und Autoren-Ursprungstypen in zwei Zeilen zusammen mit „Ursprungstyp - Normal“ und „Ursprungstyp - !wichtig“. Die Priorität innerhalb jedes Ursprungstyps ist nuancierter. Stile können innerhalb von Schichten innerhalb ihres Ursprungstyps enthalten sein, und bei Autorenstilen gibt es auch das Problem, wo Inline-Stile in die Kaskadenreihenfolge fallen.

Die Reihenfolge, in der Schichten deklariert werden, ist wichtig, um die Priorität zu bestimmen. Normale Stile in einer Schicht haben Vorrang vor Stilen, die in vorherigen Schichten deklariert wurden; normale Stile, die außerhalb einer Schicht deklariert werden, haben Vorrang vor normalen geschichteten Stilen, unabhängig von der Spezifität.

In diesem Beispiel hat der Autor die {{CSSXref('@import')}}-Regel von CSS verwendet, um fünf externe Stilblätter innerhalb eines {{HTMLElement('style')}}-Informationsblocks zu importieren.

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

Im oben gezeigten CSS-Codeblock wurden drei Kaskadenschichten mit den Namen „A“, „B“ und „C“ erstellt, in dieser Reihenfolge. Drei Stilblätter wurden direkt in Schichten importiert und zwei wurden importiert, ohne eine Schicht zu erstellen oder zuzuweisen.
Die "Alle ungeschichteten Stile" in der folgenden Liste (normale Priorität für Autorenstile - Ordnung 4) umfasst Stile aus diesen beiden Stilblättern und den zusätzlichen ungeschichteten CSS-Stilblöcken. Darüber hinaus gibt es zwei Inline-Stile, eine normale `line-height`-Deklaration und eine wichtige `text-decoration`-Deklaration:

| Prioritätsreihenfolge (niedrig bis hoch) | Autorenstil                | Wichtigkeit  |
| ---------------------------------------- | -------------------------- | ------------ |
| 1                                        | A - erste Schicht          | normal       |
| 2                                        | B - zweite Schicht         | normal       |
| 3                                        | C - letzte Schicht         | normal       |
| 4                                        | Alle ungeschichteten Stile | normal       |
| 5                                        | Inline `style`             | normal       |
| 6                                        | Animationen                |              |
| 7                                        | Alle ungeschichteten Stile | `!important` |
| 8                                        | C - letzte Schicht         | `!important` |
| 9                                        | B - zweite Schicht         | `!important` |
| 10                                       | A - erste Schicht          | `!important` |
| 11                                       | Inline `style`             | `!important` |
| 12                                       | Transitionen               |              |

In allen Ursprungstypen haben normale Stile, die in Schichten enthalten sind, die niedrigste Priorität. In unserem Beispiel haben die mit den ersten deklarierten Schichten (A) verbundenen normalen Stile eine niedrigere Priorität als normale Stile in der zweiten deklarierten Schicht (B), die eine niedrigere Priorität haben als normale Stile in der dritten deklarierten Schicht (C). Diese geschichteten Stile haben eine niedrigere Priorität als alle normalen ungeschichteten Stile, die normale Stile aus `unlayeredStyles.css`, `moreUnlayeredStyles.css` und das `color`-Attribut von `p` im `<style>` selbst umfassen.

Wenn irgendein geschichteter Stil in A, B oder C Selektoren mit höherer Spezifität hat, die ein Element treffen, ähnlich wie `:root body p { color: black; }`, spielt das keine Rolle. Diese Deklarationen werden aufgrund der _Herkunft_ nicht berücksichtigt; normale geschichtete Stile haben weniger Vorrang als normale ungeschichtete Stile. Wenn jedoch der spezifischere Selektor `:root body p { color: black; }` in `unlayeredStyles.css` gefunden wird, da sowohl _Herkunft als auch Wichtigkeit_ die gleiche Priorität haben, würde die _Spezifität_ bedeuten, dass die spezifischere schwarze Deklaration gewinnen würde.

Die Prioritätsreihenfolge der Schichten ist für Stile, die als `!important` deklariert sind, umgekehrt. Wichtige Deklarationen, die in einer Schicht gefunden werden, haben Vorrang vor wichtigen Deklarationen, die außerhalb einer Schicht gefunden werden. Wichtige Deklarationen, die in der ersten Schicht (A) gefunden werden, haben Vorrang vor wichtigen Deklarationen in Schicht B, die Vorrang vor wichtigen Deklarationen in Schicht C haben, die Vorrang vor wichtigen Deklarationen haben, die außerhalb einer Schicht gefunden werden.

### Inline-Stile

Für Autorenstile sind nur Inline-Stile relevant, die mit dem `style`-Attribut deklariert werden. Normale Inline-Stile haben Vorrang vor allen anderen normalen Autorenstilen, unabhängig von der Spezifität des Selektors. Wenn `line-height: 2;` in einem `:root body p`-Selektorblock in einem der fünf importierten Stilblätter deklariert wäre, wäre die Zeilenhöhe immer noch `1.6`. Normale Inline-Stile haben jedoch keinen Vorrang vor animierten oder übergangenen Eigenschaften.

Wichtige Inline-Stile haben Vorrang vor allen anderen Autorenstilen, unabhängig davon, ob sie wichtig, inline oder geschichtet sind. Wichtige Inline-Stile haben auch Vorrang vor animierten Eigenschaften, nicht jedoch vor übergangenen Eigenschaften. Drei Dinge können einen wichtigen Inline-Stil überschreiben:

- Ein wichtiger Benutzerstil.
- Ein wichtiger Benutzeragentenstil.
- Eine übergangene Eigenschaft.

### Bedeutung und Ebenen

Die Prioritätsreihenfolge des Herkunftstyps ist für wichtige Stile umgekehrt. Wichtige Stile, die außerhalb einer beliebigen Kaskadenschicht deklariert werden, haben eine niedrigere Priorität als diejenigen, die als Teil einer Schicht deklariert werden. Wichtige Stile, die in frühen Schichten kommen, haben Vorrang vor wichtigen Stilen, die in nachfolgenden Kaskadenschichten deklariert werden.

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

Selbst wenn das Rot zuerst deklariert wurde und einen weniger spezifischen Selektor hat, weil ungeschichtetes CSS Vorrang vor geschichtetem CSS hat, wird der Absatz rot sein. Hätten wir einen Inline-Stil dem Absatz zugewiesen, der ihn anders färbt, wie `<p style="color: black">`, wäre der Absatz schwarz.

Wenn wir `!important` zu diesem Stück CSS hinzufügen, wird die Prioritätsreihenfolge innerhalb des Stylesheets umgekehrt:

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

Jetzt wird der Absatz blau sein. Das `!important` in der frühesten deklarierten Schicht hat Vorrang vor nachfolgenden Schichten und ungeschichteten wichtigen Deklarationen. Wenn der Inline-Stil `!important` enthielte, wie `<p style="color: black !important">`, wäre der Absatz wieder schwarz. Innerhalb der Wichtigkeit haben Inline-Stile Vorrang vor allen anderen von Autoren deklarierten `!important`-Deklarationen, unabhängig von der Spezifität.

> [!NOTE]
> Der `!important`-Flag kehrt die Priorität von Kaskadenschichten um. Aus diesem Grund sollten Sie versuchen, `!important` nicht zu verwenden, um externe Stile zu überschreiben. Verwenden Sie stattdessen {{cssxref("@import")}} zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Schichten zu importieren. Das Importieren von Stylesheets in eine Schicht als erste Deklaration in Ihrem CSS reduziert deren Priorität, und benutzerdefinierte Schichten, die später in Ihrem CSS definiert werden, haben eine höhere Priorität. Der `!important`-Flag sollte nur sparsam verwendet werden, und wenn, dann ausschließlich, um notwendige Stile vor späteren Überschreibungen zu schützen, in der ersten deklarierten Schicht.

Stile, die sich im Übergang befinden, haben Vorrang vor allen wichtigen Stilen, unabhängig davon, wer oder wie sie deklariert werden.

## Vollständige Kaskadenreihenfolge

Jetzt, da wir ein besseres Verständnis für Herkunfts- und Kaskadenschichtpriorität haben, erkennen wir, dass die Tabelle in [Kaskadenreihenfolge](#kaskadenreihenfolge) genauer durch die folgende Tabelle dargestellt werden könnte:

<table>
<thead>
  <tr><th>Prioritätsreihenfolge <br/>(niedrig bis hoch)</th><th>Stilursprung</th><th>Wichtigkeit</th></tr>
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
  <tr><td>8</td><td>Transitionen</td><td></td></tr>
</tbody>
</table>

## Welche CSS-Entitäten an der Kaskade beteiligt sind

Nur CSS-Eigenschaftswerte-Paar-Deklarationen sind an der Kaskade beteiligt. CSS-At-Regel-Deskriptoren sind nicht an der Kaskade beteiligt, und HTML-Präsentationsattribute sind nicht Teil der Kaskade.

### At-Regeln

CSS-[At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule), die andere Entitäten als Deklarationen enthalten, wie eine {{ cssxref("@font-face")}}-Regel, die _Deskriptoren_ enthält, sind nicht an der Kaskade beteiligt.

Zum größten Teil sind die in At-Regeln definierten Eigenschaften und Deskriptoren nicht Teil der Kaskade. Nur At-Regeln als Ganzes sind an der Kaskade beteiligt. Zum Beispiel innerhalb einer `@font-face`-Regel, werden Schriftartnamen durch [`font-family`](/de/docs/Web/CSS/@font-face/font-family)-Deskriptoren identifiziert. Wenn mehrere `@font-face`-Regeln mit demselben Deskriptor definiert sind, wird nur die am besten geeignete `@font-face` als Ganzes betrachtet. Wenn mehr als eine gleich geeignet ist, werden die gesamten `@font-face`-Deklarationen anhand der Schritte 1, 2 und 4 des Algorithmus verglichen (es gibt keine Spezifität, wenn es um At-Regeln geht).

Während die Deklarationen, die in den meisten At-Regeln enthalten sind — wie diejenigen in {{cssxref("@media")}}, {{cssxref("@document")}}, oder {{cssxref("@supports")}} — an der Kaskade beteiligt sind, kann die At-Regel einen gesamten Selektor irrelevant machen, wie wir es im [einfachen Beispiel](#einfaches_beispiel) mit der Print-Stilregel gesehen haben.

Deklarationen in {{cssxref("@keyframes")}} sind nicht Teil der Kaskade. Wie bei `@font-face`, wird nur das `@keyframes` als Ganzes über den Kaskadenalgorithmus ausgewählt. Die [Prioritätsreihenfolge von Animationen wird unten beschrieben](#css-animationen_und_die_kaskade).

Wenn es um {{cssxref("@import")}} geht, ist das `@import` selbst nicht an der Kaskade beteiligt, aber alle importierten Stile sind es. Wenn das `@import` eine [benannte oder anonyme Schicht](/de/docs/Web/CSS/@layer) definiert, werden die Inhalte des importierten Stilblatts in die angegebene Schicht platziert. Alle anderen mit `@import` importierten CSS werden als letzte deklarierte Schicht betrachtet. Dies wurde oben diskutiert.

Schließlich befolgt {{cssxref("@charset")}} spezifische Algorithmen und wird nicht durch den Kaskadenalgorithmus beeinflusst.

### Präsentationsattribute

Präsentationsattribute sind Attribute im Quelldokument, die das Styling beeinflussen können. Beispielsweise legt das veraltete `align`-Attribut, wenn es enthalten ist, die Ausrichtung auf mehreren HTML-Elementen fest und das `fill`-Attribut definiert die Farbe, die verwendet wird, um SVG-Formen und Text zu malen, und definiert den Endzustand für SVG-Animationen. Obwohl sie Autorenstile sind, sind Präsentationsattribute nicht Teil der Kaskade.

Wenn das HTML-Präsentationsattribut vom Benutzeragenten unterstützt wird, werden gültige Präsentationsattribute, die in HTML und SVG enthalten sind, wie die [`align`](/de/docs/Web/HTML/Element/img#align) oder [`fill`](/de/docs/Web/SVG/Attribute/fill)-Attribute, in die entsprechenden CSS-Regeln übersetzt (alle SVG-Präsentationsattribute werden als CSS-Eigenschaften unterstützt) und im Autorenstilblatt vor allen anderen Stilen mit einer Spezifität gleich `0` eingefügt.

Präsentationsattribute können nicht als `!important` deklariert werden.

## CSS-Animationen und die Kaskade

[CSS-Animationen](/de/docs/Web/CSS/CSS_animations), die {{cssxref("@keyframes")}}-At-Regeln verwenden, definieren Animationen zwischen Zuständen. `@keyframes` sind nicht Teil der Kaskade, das bedeutet, dass CSS zu jedem gegebenen Zeitpunkt Werte nur aus einem einzigen Set von `@keyframes` nimmt und niemals mehrere mischt. Wenn mehrere Sets von `@keyframes` mit demselben Animationsnamen definiert sind, wird das letzte definierte Set in der Herkunft und Schicht mit der höchsten Priorität verwendet. Andere `@keyframes` werden ignoriert, selbst wenn sie andere Eigenschaften animieren.

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

In diesem Beispiel gibt es drei separate Animationsdeklarationen mit dem Namen `repeatedName`. Wenn `animation: infinite 5s alternate repeatedName` auf den Absatz angewendet wird, wird nur eine Animation angewendet: die keyframe-Animation, die im ungeschichteten CSS definiert ist, hat Vorrang vor den geschichteten keyframe-Animationsdeklarationen basierend auf der Herkunfts- und Schichtprioritätsreihenfolge. In diesem Beispiel wird nur die Schriftgröße des Elements animiert.

> [!NOTE]
> Es gibt keine wichtigen Animationen, da Eigenschaftsdeklarationen in einem {{cssxref('@keyframes')}}-Block, die `!important` als Teil des Wertes enthalten, ignoriert werden.

## Styles zurücksetzen

Nachdem Ihre Inhalte das Stylesheet verändert haben, kann es sein, dass sie sich in einer Situation befinden, in der sie es auf einen bekannten Zustand zurücksetzen müssen. Dies kann bei Animationen, Themenänderungen usw. der Fall sein. Die CSS-Eigenschaft {{cssxref("all")}} ermöglicht es Ihnen, (fast) alles in CSS schnell auf einen bekannten Zustand zurückzusetzen.

`all` ermöglicht es Ihnen, sofort alle Eigenschaften auf ihren ursprünglichen (Standard-)Zustand zurückzusetzen, den Zustand, der vom vorherigen Level der Kaskade geerbt wurde, eine bestimmte Herkunft (das Benutzeragenten-Stilblatt, das Autoren-Stilblatt oder das Benutzer-Stilblatt), oder sogar die Werte der Eigenschaften vollständig zu löschen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)-Modul
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Initial](/de/docs/Web/CSS/CSS_cascade/initial_value), [berechnet](/de/docs/Web/CSS/CSS_cascade/computed_value), [verwendet](/de/docs/Web/CSS/CSS_cascade/used_value) und [aktuelle](/de/docs/Web/CSS/CSS_cascade/actual_value) Werte
