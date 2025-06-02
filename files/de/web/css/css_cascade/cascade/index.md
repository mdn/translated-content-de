---
title: Einführung in den CSS-Cascade
slug: Web/CSS/CSS_cascade/Cascade
l10n:
  sourceCommit: 0145c6497d2f2206dca1326593fe308f7b771a08
---

{{CSSRef}}

Der **Cascade-Algorithmus** definiert, wie User Agents Eigenschaftswerte, die aus verschiedenen Quellen stammen, kombinieren. Der Cascade-Algorithmus bestimmt den Ursprung und die Ebene, die Vorrang hat, wenn in mehr als einer [Ursprung](#ursprungstypen), [Cascading-Ebene](/de/docs/Web/CSS/@layer) oder {{CSSxRef("@scope")}}-Block eine Eigenschaft für ein Element festgelegt wird.

Der Cascade-Algorithmus bildet den Kern von CSS, wie der Name zeigt: _**Cascading**_ Style Sheets. Wenn ein [Selektor](/de/docs/Web/CSS/CSS_selectors) auf ein Element angewandt wird, wird der Eigenschaftswert vom Ursprung mit der höchsten Priorität verwendet, selbst wenn der Selektor aus einem Ursprung oder einer Ebene mit geringerer Priorität eine größere [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) hat.

Dieser Artikel erklärt, was der Cascade-Algorithmus ist und die Reihenfolge, in der {{Glossary("CSS", "CSS")}}-[Deklarationen](/de/docs/Web/API/CSSStyleDeclaration) kaskadieren, unter Berücksichtigung der Cascade-Ebenen und Ursprungstypen. Das Verständnis der Ursprungsprioritäten ist der Schlüssel zum Verständnis des Cascade-Algorithmus.

## Ursprungstypen

Die Aufgabe des CSS-Cascade-Algorithmus ist es, CSS-Deklarationen auszuwählen, um die korrekten Werte für CSS-Eigenschaften zu ermitteln. CSS-Deklarationen stammen aus verschiedenen Ursprungstypen: **[User-Agent-Stylesheets](#user-agent-stylesheets)**, **[Autor-Stylesheets](#autoren-stylesheets)** und **[User-Stylesheets](#user-stylesheets)**.

Obwohl Stylesheets aus diesen unterschiedlichen Ursprüngen stammen und in verschiedenen [Ebenen](/de/docs/Web/CSS/@layer) innerhalb dieser Ursprünge liegen können, überschneiden sie sich hinsichtlich ihres Standardscopings; um das zusammenzuführen, definiert der Cascade-Algorithmus, wie sie interagieren. Bevor wir diese Interaktionen angehen, werden wir in den nächsten Abschnitten einige wichtige Begriffe definieren.

### User-Agent-Stylesheets

User-Agents oder Browser verfügen über grundlegende Stylesheets, die jedem Dokument Standardstile verleihen. Diese Stylesheets werden **User-Agent-Stylesheets** genannt. Die meisten Browser verwenden tatsächliche Stylesheets für diesen Zweck, während andere dies im Code simulieren. Das Endergebnis ist dasselbe.

Einige Browser ermöglichen es den Benutzern, das User-Agent-Stylesheet zu modifizieren, was jedoch selten und nicht steuerbar ist.

Obwohl einige Einschränkungen für User-Agent-Stylesheets durch die HTML-Spezifikation festgelegt sind, haben Browser weitgehende Freiheiten: Das bedeutet, dass es zwischen den Browsern einige Unterschiede gibt. Um den Entwicklungsprozess zu vereinfachen, verwenden Webentwickler möglicherweise ein CSS-Reset-Stylesheet, wie [normalize.css](https://github.com/necolas/normalize.css), das allgemeine Eigenschaftswerte auf einen bekannten Zustand für alle Browser setzt, bevor Änderungen zur Anpassung an ihre spezifischen Anforderungen vorgenommen werden.

Solange das User-Agent-Stylesheet kein [`!important`](/de/docs/Web/CSS/CSS_cascade/Specificity#the_!important_exception) neben einer Eigenschaft enthält und es "wichtig" macht, haben die von Autorenstilen deklarierten Stile, einschließlich eines Reset-Stylesheets, Vorrang vor den User-Agent-Stilen, unabhängig von der Spezifität des zugehörigen Selektors.

### Autoren-Stylesheets

**Autoren-Stylesheets** sind der häufigste Typ von Stylesheet; diese Stile werden von Webentwicklern geschrieben. Diese Stile können User-Agent-Stile zurücksetzen, wie oben erwähnt, und die Stile für das Design einer bestimmten Webseite oder Anwendung definieren. Der Autor bzw. Webentwickler definiert die Stile für das Dokument mit einem oder mehreren verlinkten oder importierten Stylesheets, {{HTMLElement('style')}}-Blöcken und Inline-Stilen, die mit dem [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut definiert sind. Diese Autorenstile definieren das Aussehen der Website — ihr Thema.

### User-Stylesheets

In den meisten Browsern kann der Benutzer (oder Leser) der Website die Stile mit einem benutzerdefinierten **User-Stylesheet** überschreiben, das entwickelt wurde, um die Erfahrung an die Wünsche des Benutzers anzupassen. Abhängig vom User Agent können [Benutzerstile konfiguriert werden](https://www.thoughtco.com/user-style-sheet-3469931) oder über Browser-Erweiterungen hinzugefügt werden.

### Cascade-Ebenen

Die Cascade-Reihenfolge basiert auf dem Ursprungstyp. Die Cascade innerhalb jedes Ursprungstyps basiert auf der Deklarationsreihenfolge von [Cascade-Ebenen](/de/docs/Web/CSS/@layer) innerhalb dieses Typs. Für alle Ursprünge - User-Agent, Autor oder Benutzer - können Stile innerhalb oder außerhalb benannter oder anonymer Ebenen deklariert werden. Wenn Stile mit [`layer`, `layer()`](/de/docs/Web/CSS/@import) oder [`@layer`](/de/docs/Web/CSS/@layer) deklariert werden, werden sie in die angegebene benannte Ebene oder in eine anonyme Ebene platziert, wenn kein Name angegeben ist. Stile, die außerhalb einer Ebene deklariert werden, werden als Teil der zuletzt deklarierten anonymen Ebene behandelt.

Sehen wir uns die kaskadierende Ursprungstyp-Reihenfolge an, bevor wir in die Cascade-Ebenen innerhalb jedes Ursprungstyps eintauchen.

## Kaskadierungsreihenfolge

Der Cascade-Algorithmus bestimmt, wie der Wert für jede Eigenschaft für jedes Dokumenelement gefunden wird. Die folgenden Schritte gelten für den Cascade-Algorithmus:

1. **Relevanz**: Zunächst werden alle Regeln aus den verschiedenen Quellen herausgefiltert, um nur die Regeln zu behalten, die auf ein bestimmtes Element angewendet werden. Das bedeutet Regeln, deren Selektor auf das gegebene Element zutrifft und die Teil einer passenden `media`-At-Regel sind.
2. **Ursprung und Wichtigkeit**: Dann sortiert er diese Regeln entsprechend ihrer Wichtigkeit, das heißt, ob sie von `!important` gefolgt werden oder nicht, und nach ihrem Ursprung. Wenn man die Ebenen fürs Erste ignoriert, ist die Cascade-Reihenfolge wie folgt:

   | Vorrangreihenfolge (niedrig bis hoch) | Ursprung                 | Wichtigkeit  |
   | ------------------------------------- | ------------------------ | ------------ |
   | 1                                     | User-Agent (Browser)     | normal       |
   | 2                                     | Benutzer                 | normal       |
   | 3                                     | Autor (Entwickler)       | normal       |
   | 4                                     | CSS-Keyframe-Animationen |              |
   | 5                                     | Autor (Entwickler)       | `!important` |
   | 6                                     | Benutzer                 | `!important` |
   | 7                                     | User-Agent (Browser)     | `!important` |
   | 8                                     | CSS-Übergänge            |              |

3. **Spezifität**: Bei Gleichheit mit einem Ursprung wird die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) einer Regel berücksichtigt, um einen Wert zu wählen. Die Spezifität der Selektoren wird verglichen, und die Deklaration mit der höchsten Spezifität gewinnt.
4. **Scoping-Nähe**: Wenn zwei Selektoren in der Ursprungsschicht mit gleicher Spezifität vorhanden sind, gewinnt der Eigenschaftswert innerhalb von Bereichen mit der geringsten Anzahl von Sprüngen im DOM-Baum bis zur Scoping-Wurzel. Siehe [How `@scope` conflicts are resolved](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für mehr Details und ein Beispiel.
5. **Reihenfolge der Erscheinung**: Im Ursprung mit Vorrang, wenn es konkurrierende Werte für eine Eigenschaft gibt, die sich in Style-Block-Selektoren mit gleicher Spezifität und Scoping-Nähe befinden, wird die letzte Deklaration in der Stilreihenfolge angewendet.

Der Cascade-Algorithmus ist in aufsteigender Reihenfolge, das bedeutet:

- Animationen haben Vorrang vor normalen Werten, ob sie nun in Benutzer-, Entwickler- oder User-Agent-Stilen deklariert sind.
- Wichtige Werte haben Vorrang vor Animationen, ob sie nun in Benutzer-, Entwickler- oder User-Agent-Stilen deklariert sind.
- Übergänge haben Vorrang vor wichtigen Werten.

> **Hinweis:** **Übergänge und Animationen**
>
> Eigenschaftswerte, die durch Animation {{cssxref('@keyframes')}} festgelegt werden, sind wichtiger als alle normalen Stile (diejenigen ohne [`!important`](/de/docs/Web/CSS/CSS_cascade/Specificity#the_!important_exception)).
>
> Eigenschaftswerte, die in einem {{cssxref('transition')}} festgelegt werden, haben Vorrang vor allen anderen festgelegten Werten, selbst vor denen, die als `!important` gekennzeichnet sind.

Der Cascade-Algorithmus wird _vor_ dem Spezifitäts-Algorithmus angewendet, was bedeutet, dass wenn `:root p { color: red;}` im User-Stylesheet (Reihe 2) deklariert ist, und ein weniger spezifisches `p {color: blue;}` im Autor-Stylesheet (Reihe 3), die Absätze blau sein werden.

## Einfaches Beispiel

Bevor wir uns eingehender damit beschäftigen, wie Cascade-Ebenen die Cascade beeinflussen, schauen wir uns ein Beispiel mit mehreren CSS-Quellen über die verschiedenen Ursprünge an und gehen die Schritte des Cascade-Algorithmus durch:

Hier haben wir ein User-Agent-Stylesheet, zwei Autoren-Stylesheets und ein Benutzer-Stylesheet, ohne Inline-Stile innerhalb des HTML:

**User-Agent-CSS:**

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

**User-CSS:**

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

In diesem Fall sollten die Deklarationen innerhalb der `li` und `.specific` Regeln angewendet werden.

Erneut gibt es fünf Schritte im Cascade-Algorithmus, in der Reihenfolge:

1. Relevanz
2. Ursprung und Wichtigkeit
3. Spezifität
4. Scoping-Nähe
5. Reihenfolge der Erscheinung

Der `1px` ist für Druckmedien. Aufgrund der fehlenden _Relevanz_ basierend auf seinem Medientyp wird er aus der Betrachtung entfernt.

Keine Deklaration ist als `!important` markiert, daher ist die Vorrangreihenfolge Autoren-Stylesheets über Benutzer-Stylesheets über User-Agent-Stylesheet. Basierend auf _Ursprung und Wichtigkeit_ werden `1em` aus dem Benutzer-Stylesheet und `10px` aus dem User-Agent-Stylesheet aus der Betrachtung entfernt.

Beachten Sie, dass der Benutzerstil auf `.specific` von `1em` eine höhere Spezifität hat, es ist jedoch eine normale Deklaration in einem Benutzer-Stylesheet. Als solches hat es eine geringere Priorität als alle Autorenstile und wird durch den Ursprung und Wichtigkeitsschritt des Algorithmus entfernt, bevor die Spezifität überhaupt ins Spiel kommt.

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

Die letzte, die `5px`, ist Teil einer Cascade-Ebene. Normale Deklarationen in Ebenen haben innerhalb desselben Ursprungstyps eine niedrigere Priorität als normale Stile, die nicht in einer Ebene sind. Dies wird ebenfalls durch Schritt 2 des Algorithmus, _Ursprung und Wichtigkeit_, entfernt.

Es bleiben die `0` und die `3px`, die beide denselben Selektor haben, daher dieselbe _Spezifität_. Keiner von ihnen befindet sich innerhalb eines `@scope`-Blocks, daher kommt die Scoping-Nähe in diesem Beispiel ebenfalls nicht ins Spiel.

Dann betrachten wir die _Reihenfolge der Erscheinung_. Die zweite, die letzte der beiden ungeschichteten Autorenstile, gewinnt.

```css
margin-left: 3px;
```

> [!NOTE]
> Die im Benutzer-CSS definierte Deklaration, obwohl sie eine größere Spezifität besitzen könnte, wird nicht ausgewählt, da der _Ursprung und Wichtigkeit_ des Cascade-Algorithmus vor dem Spezifitäts-Algorithmus angewendet wird. Die in einer Cascade-Ebene definierte Deklaration, obwohl sie möglicherweise später im Code vorkommt, wird ebenfalls nicht den Vorrang haben, da normale Stile in Cascade-Ebenen eine geringere Priorität haben als normale ungeschichtete Stile. _Reihenfolge der Erscheinung_ spielt nur dann eine Rolle, wenn sowohl Ursprung, Wichtigkeit und Spezifität gleich sind.

## Autorenstile: Inline-Stile, Ebenen und Priorität

Die [Tabelle in der Kaskadierungsreihenfolge](#kaskadierungsreihenfolge) bietet einen Überblick über die Prioritätenreihenfolge. Die Tabelle fasste die User-Agent-, Benutzer- und Autoren-Ursprungstypstile in zwei Zeilen mit "Ursprungstyp - Normal" und "Ursprungstyp - !important" zusammen. Die Priorität innerhalb jedes Ursprungstyps ist nuancierter. Stile können innerhalb von Ebenen innerhalb ihres Ursprungstyps enthalten sein und bei Autorenstilen gibt es auch die Frage, wo Inline-Stile in der Cascade-Reihenfolge stehen.

Die Reihenfolge, in der Ebenen deklariert werden, ist wichtig, um die Priorität zu bestimmen. Normale Stile in einer Ebene haben Vorrang vor Stilen, die in früheren Ebenen deklariert werden; normale Stile, die außerhalb einer Ebene deklariert werden, haben Vorrang vor normalen geschichteten Stilen, unabhängig von der Spezifität.

In diesem Beispiel hat der Autor die {{CSSXref('@import')}}-Regel von CSS verwendet, um fünf externe Stylesheets innerhalb eines {{HTMLElement('style')}}-Informationselements zu importieren.

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

und dann im Körper des Dokuments haben wir Inline-Stile:

```html
<p style="line-height: 1.6em; text-decoration: overline !important;">Hello</p>
```

Im obigen CSS-Codeblock wurden drei Cascade-Ebenen mit den Namen "A", "B" und "C" erstellt, in dieser Reihenfolge. Drei Stylesheets wurden direkt in Ebenen importiert und zwei wurden importiert, ohne eine Ebene zu erstellen oder einer zuzuordnen. Die "Alle ungeschichteten Stile" in der Liste unten (normale Autorenstil-Priorität - Reihenfolge 4) umfassen Stile aus diesen beiden Stylesheets und den zusätzlichen ungeschichteten CSS-Stilblöcken. Außerdem gibt es zwei Inline-Stile, eine normale `line-height`-Deklaration und eine wichtige `text-decoration`-Deklaration:

| Vorrangreihenfolge (niedrig bis hoch) | Autorenstil                | Wichtigkeit  |
| ------------------------------------- | -------------------------- | ------------ |
| 1                                     | A - Erste Ebene            | normal       |
| 2                                     | B - Zweite Ebene           | normal       |
| 3                                     | C - Letzte Ebene           | normal       |
| 4                                     | Alle ungeschichteten Stile | normal       |
| 5                                     | Inline `style`             | normal       |
| 6                                     | Animationen                |              |
| 7                                     | Alle ungeschichteten Stile | `!important` |
| 8                                     | C - Letzte Ebene           | `!important` |
| 9                                     | B - Zweite Ebene           | `!important` |
| 10                                    | A - Erste Ebene            | `!important` |
| 11                                    | Inline `style`             | `!important` |
| 12                                    | Übergänge                  |              |

In allen Ursprungstypen haben normale Stile, die in Ebenen enthalten sind, die niedrigste Vorrangigkeit. In unserem Beispiel haben die normalen Stile, die der ersten deklarierten Ebene (A) zugeordnet sind, eine geringere Vorrangigkeit als normale Stile in der zweiten deklarierten Ebene (B), die eine geringere Vorrangigkeit als normale Stile in der dritten deklarierten Ebene (C) haben. Diese geschichteten Stile haben eine geringere Vorrangigkeit als alle normalen ungeschichteten Stile, die normale Stile aus `unlayeredStyles.css`, `moreUnlayeredStyles.css` und die `color` von `p` im `<style>` selbst einschließen.

Wenn in einer der Ebenen A, B oder C Stile mit höheren Spezifitätsselektoren vorhanden sind, die ein Element treffen, wie z.B. `:root body p { color: black; }`, spielt das keine Rolle. Diese Deklarationen werden aufgrund des _Ursprungs_ aus der Betrachtung entfernt; normale geschichtete Stile haben weniger Vorrang als normale ungeschichtete Stile. Wenn jedoch der spezifischere Selektor `:root body p { color: black; }` in `unlayeredStyles.css` gefunden wird, da sowohl _Ursprung und Wichtigkeit_ die gleiche Vorrangigkeit haben, würde _Spezifität_ bedeuten, dass die spezifischere, schwarze Deklaration gewinnt.

Die Prioritätsreihenfolge der Ebene kehrt sich für als `!important` deklarierte Stile um. Wichtige Deklarationen, die in einer Ebene gefunden werden, haben Vorrang vor wichtigen Deklarationen, die außerhalb einer Ebene gefunden werden. Wichtige Deklarationen, die in der ersten Ebene (A) gefunden werden, haben Vorrang vor wichtigen Deklarationen, die in der Ebene B gefunden werden, die Vorrang haben vor wichtigen Deklarationen, die in Ebene C gefunden werden, die Vorrang vor wichtigen Deklarationen außerhalb einer Ebene haben.

### Inline-Stile

Nur relevant für Autorenstile sind Inline-Stile, die mit dem `style`-Attribut deklariert werden. Normale Inline-Stile haben Vorrang vor allen anderen normalen Autorenstilen, ganz gleich, wie spezifisch der Selektor ist. Wenn `line-height: 2;` in einem `:root body p`-Selektorblock in einem der fünf importierten Stylesheets deklariert wurde, wäre die Zeilenhöhe dennoch `1.6`. Normale Inline-Stile haben keinen Vorrang vor animierten oder übergangenen Eigenschaften.

Wichtige Inline-Stile haben Vorrang vor allen anderen Autorenstilen, unabhängig davon, ob sie wichtig, inline oder geschichtet sind. Wichtige Inline-Stile haben auch Vorrang vor animierten Eigenschaften, aber nicht vor übergangenen Eigenschaften. Drei Dinge können einen wichtigen Inline-Stil überschreiben:

- Ein wichtiger Benutzerstil.
- Ein wichtiger User-Agent-Stil.
- Eine übergangene Eigenschaft.

### Wichtigkeit und Ebenen

Die Ursprungstyp-Prioritätsreihenfolge wird für wichtige Stile umgekehrt. Wichtige Stile, die außerhalb einer Cascade-Ebene deklariert sind, haben eine niedrigere Priorität als die, die als Teil einer Ebene deklariert sind. Wichtige Stile, die in frühen Ebenen vorkommen, haben Vorrang vor wichtigen Stilen, die in späteren Cascade-Ebenen deklariert werden.

Nehmen Sie zum Beispiel folgendes CSS:

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

Auch wenn das Rot zuerst deklariert wurde und einen weniger spezifischen Selektor hat, da ungeschichtetes CSS Vorrang vor geschichtetem CSS hat, wird der Absatz rot sein. Hätten wir einen Inline-Stil auf dem Absatz gehabt, der auf eine andere Farbe gesetzt ist, wie `<p style="color: black">`, wäre der Absatz schwarz.

Wenn wir `!important` zu diesem CSS-Stück hinzufügen, wird die Prioritätsreihenfolge innerhalb des Stylesheets umgekehrt:

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

Jetzt wird der Absatz blau sein. Das `!important` in der frühesten deklarierten Ebene hat Vorrang vor den nachfolgenden Ebenen und ungeschichteten wichtigen Deklarationen. Wenn der Inline-Stil `!important` enthalten würde, wie `<p style="color: black !important">`, wäre der Absatz erneut schwarz. Die Wichtigkeit im Inline-Stil hat Vorrang vor allen anderen vom Autor deklarierten `!important`-Deklarationen, egal wie spezifisch die Deklaration ist.

> [!NOTE]
> Das `!important`-Flag kehrt die Priorität von Cascade-Ebenen um. Aus diesem Grund versuchen Sie, `!important` nicht zu verwenden, um externe Stile zu überschreiben. Verwenden Sie stattdessen {{cssxref("@import")}} zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Ebenen zu importieren. Das Importieren von Stylesheets in eine Ebene als erste Deklaration in Ihrem CSS setzt deren Priorität herab, und vom Autor definierte Ebenen, die später in Ihrem CSS definiert werden, haben eine höhere Priorität. Das `!important`-Flag sollte nur sparsam, wenn überhaupt, verwendet werden, um erforderliche Stile gegen spätere Überschreibungen zu schützen, in der ersten deklarierten Ebene.

Stile, die übergangen werden, haben Vorrang vor allen wichtigen Stilen, unabhängig davon, wer oder wie sie deklariert werden.

## Vollständige Cascade-Reihenfolge

Jetzt, da wir ein besseres Verständnis für Ursprungstypen und Cascade-Ebenen-Prioritäten haben, erkennen wir, dass die Tabelle in der [Kaskadierungsreihenfolge](#kaskadierungsreihenfolge) genauer durch die folgende Tabelle repräsentiert werden könnte:

<table>
<thead>
  <tr><th>Vorrangreihenfolge <br/>(niedrig bis hoch)</th><th>Stilursprung</th><th>Wichtigkeit</th></tr>
</thead>
<tbody>
  <tr><td rowspan="3">1</td><td>User-Agent - erste deklarierte Ebene</td><td rowspan="3">normal</td></tr>
  <tr><td>User-Agent - letzte deklarierte Ebene</td></tr>
  <tr><td>User-Agent - ungeschichtete Stile</td></tr>
  <tr><td rowspan="3">2</td><td>Benutzer - erste deklarierte Ebene</td><td rowspan="3">normal</td></tr>
  <tr><td>Benutzer - letzte deklarierte Ebene</td></tr>
  <tr><td>Benutzer - ungeschichtete Stile</td></tr>
  <tr><td rowspan="4">3</td><td>Autor - erste deklarierte Ebene</td><td rowspan="4">normal</td></tr>
  <tr><td>Autor - letzte deklarierte Ebene</td></tr>
  <tr><td>Autor - ungeschichtete Stile</td></tr>
  <tr><td>Inline <code>style</code></td></tr>
  <tr><td>4</td><td>Animationen</td><td></td></tr>
  <tr><td rowspan="4">5</td><td>Autor - ungeschichtete Stile</td><td rowspan="4"><code>!important</code></td></tr>
  <tr><td>Autor - letzte deklarierte Ebene</td></tr>
  <tr><td>Autor - erste deklarierte Ebene</td></tr>
  <tr><td>Inline <code>style</code></td></tr>
  <tr><td rowspan="3">6</td><td>Benutzer - ungeschichtete Stile</td><td rowspan="3"><code>!important</td></tr>
  <tr><td>Benutzer - letzte deklarierte Ebene</td></tr>
  <tr><td>Benutzer - erste deklarierte Ebene</td></tr>
  <tr><td rowspan="3">7</td><td>User-Agent - ungeschichtete Stile</td><td rowspan="3"><code>!important</code></td></tr>
  <tr><td>User-Agent - letzte deklarierte Ebene</td></tr>
  <tr><td>User-Agent - erste deklarierte Ebene</td></tr>
  <tr><td>8</td><td>Übergänge</td><td></td></tr>
</tbody>
</table>

## Welche CSS-Entitäten nehmen an der Cascade teil

Nur CSS-Eigenschafts-/Wertepaardeklarationen nehmen an der Cascade teil. CSS-At-Regel-Deskriptoren nehmen nicht an der Cascade teil, und HTML-Präsentationsattribute sind nicht Teil der Cascade.

### At-Regeln

CSS-[At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule), die andere Entitäten als Deklarationen enthalten, wie eine {{ cssxref("@font-face")}}-Regel, die _Deskriptoren_ enthält, nehmen nicht an der Cascade teil.

Im Allgemeinen nehmen die innerhalb von At-Regeln definierten Eigenschaften und Deskriptoren nicht an der Cascade teil. Nur At-Regeln als Ganzes nehmen an der Cascade teil. Zum Beispiel werden innerhalb einer `@font-face`-Regel Schriftarten durch [`font-family`](/de/docs/Web/CSS/@font-face/font-family)-Deskriptoren identifiziert. Wenn mehrere `@font-face`-Regeln mit dem gleichen Deskriptor definiert sind, wird nur die am besten passende `@font-face`-Regel als Ganzes berücksichtigt. Wenn mehr als eine identisch passend ist, werden die gesamten `@font-face`-Deklarationen unter Verwendung der Schritte 1, 2 und 4 des Algorithmus verglichen (es gibt keine Spezifität bei At-Regeln).

Während die in den meisten At-Regeln — wie denen in {{cssxref("@media")}}, {{cssxref("@document")}}, oder {{cssxref("@supports")}} — enthaltenen Deklarationen an der Cascade teilnehmen, kann die At-Regel einen gesamten Selektor irrelevant machen, wie wir es mit dem Druckstil im [einfachen Beispiel](#einfaches_beispiel) gesehen haben.

Deklarationen in {{cssxref("@keyframes")}} nehmen nicht an der Cascade teil. Ebenso wie bei `@font-face` wird nur das `@keyframes`-Segment als Ganzes durch den Cascade-Algorithmus ausgewählt. Die [Prioritätsreihenfolge von Animationen wird unten beschrieben](#css-animationen_und_die_cascade).

Wenn es um {{cssxref("@import")}} geht, nimmt das `@import` selbst nicht an der Cascade teil, aber alle importierten Stile tun es. Wenn das `@import` eine [benannte oder anonyme Ebene](/de/docs/Web/CSS/@layer) definiert, werden die Inhalte des importierten Stylesheets in die angegebene Ebene eingefügt. Alle anderen mit `@import` importierten CSS werden als letzte deklarierte Ebene behandelt. Dies wurde oben besprochen.

Schließlich gehorcht {{cssxref("@charset")}} spezifischen Algorithmen und wird nicht vom Cascade-Algorithmus beeinflusst.

### Präsentationsattribute

Präsentationsattribute sind Attribute im Quelldokument, die das Styling beeinflussen können. Zum Beispiel setzt das veraltete `align`-Attribut die Ausrichtung auf mehreren HTML-Elementen und das `fill`-Attribut definiert die Farbe, die verwendet wird, um SVG-Formen und -Text zu malen und den Endzustand für SVG-Animationen zu definieren. Während sie Autorenstile sind, nehmen Präsentationsattribute nicht an der Cascade teil.

Wenn das HTML-Präsentationsattribut vom User Agent unterstützt wird, werden gültige Präsentationsattribute, die im HTML und SVG enthalten sind, wie die [`align`](/de/docs/Web/HTML/Reference/Elements/img#align)- oder [`fill`](/de/docs/Web/SVG/Reference/Attribute/fill)-Attribute, zu den entsprechenden CSS-Regeln übersetzt (alle SVG-Präsentationsattribute werden als CSS-Eigenschaften unterstützt) und vor allen anderen Stilen mit einer Spezifität von `0` in das Autoren-Stylesheet eingefügt.

Präsentationsattribute können nicht als `!important` deklariert werden.

## CSS-Animationen und die Cascade

[CSS-Animationen](/de/docs/Web/CSS/CSS_animations), die {{cssxref("@keyframes")}}-Regeln verwenden, definieren Animationen zwischen Zuständen. `@keyframes` kaskadieren nicht, was bedeutet, dass zu jedem Zeitpunkt CSS Werte nur aus einem einzigen Satz von `@keyframes` nimmt und niemals mehrere mischt. Wenn mehrere `@keyframes`-Sets mit demselben Animationsnamen definiert sind, wird das zuletzt definierte Set im Ursprung und in der Ebene mit der größten Priorität verwendet. Andere `@keyframes` werden ignoriert, selbst wenn sie andere Eigenschaften animieren.

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

In diesem Beispiel gibt es drei separate Animationsdeklarationen, die `repeatedName` genannt werden. Wenn `animation: infinite 5s alternate repeatedName` auf den Absatz angewendet wird, wird nur eine Animation angewendet: Die Keyframe-Animation, die in der ungeschichteten CSS deklariert ist, hat Vorrang vor den geschichteten Keyframe-Animationsdeklarationen basierend auf der Prioritätsreihenfolge von Ursprung und Ebene. In diesem Beispiel wird nur die Schriftgröße des Elements animiert.

> [!NOTE]
> Es gibt keine wichtigen Animationen, da Eigenschaftsdeklarationen in einem {{cssxref('@keyframes')}}-Block, die `!important` als Teil des Wertes enthalten, ignoriert werden.

## Zurücksetzen von Stilen

Nachdem Ihre Inhalte das Styling fertiggestellt haben, können sie sich in einer Situation wiederfinden, in der sie auf einen bekannten Zustand zurückgesetzt werden müssen. Dies kann bei Animationen, Themenänderungen und dergleichen der Fall sein. Die CSS-Eigenschaft {{cssxref("all")}} ermöglicht es Ihnen, schnell (fast) alles in CSS auf einen bekannten Zustand zurückzusetzen.

`all` erlaubt es Ihnen, sofort alle Eigenschaften auf einen ihrer Anfangszustände, den geerbten Zustand aus der vorherigen Ebene der Cascade, einen bestimmten Ursprung (das User-Agent-Stylesheet, das Autoren-Stylesheet oder das Benutzer-Stylesheet) oder sogar alle Eigenschaftswerte vollständig zu löschen, zurückzusetzen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Cascade-Ebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Initial](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechnet](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [verwendet](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value), und [tatsächlich](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
