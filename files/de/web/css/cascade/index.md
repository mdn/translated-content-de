---
title: Einführung in die CSS-Cascade
slug: Web/CSS/Cascade
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **Cascade** ist ein Algorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte aus verschiedenen Quellen kombinieren. Die Cascade definiert die Herkunft und die Ebene, die Vorrang hat, wenn Deklarationen aus mehr als einer [Herkunft](#herkunftstypen), [Cascade-Ebene](/de/docs/Web/CSS/@layer) oder einem {{CSSxRef("@scope")}} Block einen Wert für eine Eigenschaft eines Elements festlegen.

Die Cascade steht im Kern von CSS, wie der Name betont: _**Cascading**_ Style Sheets. Wenn ein [Selektor](/de/docs/Web/CSS/CSS_selectors) zu einem Element passt, wird der Eigenschaftswert von der Herkunft mit der höchsten Priorität angewendet, selbst wenn der Selektor einer Herkunft oder Ebene mit niedrigerer Priorität eine größere [Spezifität](/de/docs/Web/CSS/Specificity) hat.

Dieser Artikel erklärt, was die Cascade ist und die Reihenfolge, in der [CSS](/de/docs/Glossary/CSS) [Deklarationen](/de/docs/Web/API/CSSStyleDeclaration) kaskadieren, einschließlich der Cascade-Ebenen und des Herkunftstyps. Das Verständnis der Herkunftsvorrangstellung ist entscheidend für das Verständnis der Cascade.

## Herkunftstypen

Die Aufgabe des CSS-Cascade-Algorithmus besteht darin, CSS-Deklarationen auszuwählen, um die korrekten Werte für CSS-Eigenschaften zu bestimmen. CSS-Deklarationen stammen aus verschiedenen Herkunftstypen: **[Benutzeragent-Stilblätter](#benutzeragent-stilblätter)**, **[Autor-Stilblätter](#autor-stilblätter)** und **[Benutzer-Stilblätter](#benutzer-stilblätter)**.

Obwohl Stilblätter aus diesen verschiedenen Herkünften stammen und sich in unterschiedlichen [Ebenen](/de/docs/Web/CSS/@layer) innerhalb dieser Herkünfte befinden können, überschneiden sie sich hinsichtlich ihres Standardscope; um dies zu ermöglichen, definiert der Cascade-Algorithmus, wie sie interagieren. Bevor wir auf die Interaktionen eingehen, definieren wir einige Schlüsselbegriffe in den nächsten Abschnitten.

### Benutzeragent-Stilblätter

Benutzeragenten oder Browser haben grundlegende Stilblätter, die jedem Dokument Standardstile verleihen. Diese Stilblätter werden als **Benutzeragent-Stilblätter** bezeichnet. Die meisten Browser verwenden tatsächliche Stilblätter zu diesem Zweck, während andere sie im Code simulieren. Das Endergebnis ist dasselbe.

Einige Browser erlauben Benutzern, das Benutzeragent-Stilblatt zu ändern, aber das ist selten und nichts, was kontrolliert werden kann.

Obwohl einige Einschränkungen für Benutzeragent-Stilblätter von der HTML-Spezifikation festgelegt werden, haben Browser einen großen Spielraum: Das bedeutet, dass einige Unterschiede zwischen Browsern bestehen. Um den Entwicklungsprozess zu vereinfachen, können Webentwickler ein CSS-Reset-Stilblatt verwenden, wie z.B. [normalize.css](https://github.com/necolas/normalize.css), das häufige Eigenschaftswerte auf einen bekannten Zustand für alle Browser setzt, bevor sie Anpassungen vornehmen, um ihren spezifischen Bedürfnissen gerecht zu werden.

Sofern das Benutzeragent-Stilblatt nicht ein [`!important`](/de/docs/Web/CSS/Specificity#the_!important_exception) neben einer Eigenschaft beinhaltet und es "wichtig" macht, haben von Autorstilen deklarierte Stile, einschließlich eines Reset-Stilblattes, Vorrang vor den Benutzeragent-Stilen, unabhängig von der Spezifität des zugehörigen Selektors.

### Autor-Stilblätter

**Autor-Stilblätter** sind der häufigste Stilblatttyp; dies sind die von Webentwicklern geschriebenen Stile. Diese Stile können Benutzeragent-Stile wie oben beschrieben zurücksetzen und die Stile für das Design einer bestimmten Webseite oder Anwendung festlegen. Der Autor oder Webentwickler definiert die Stile für das Dokument unter Verwendung eines oder mehrerer verlinkter oder importierter Stilblätter, {{HTMLElement('style')}}-Blöcke und Inline-Stile, die mit dem [`style`](/de/docs/Web/HTML/Global_attributes#style)-Attribut definiert sind. Diese Autorstile definieren das Aussehen und das Gefühl der Website - ihr Thema.

### Benutzer-Stilblätter

In den meisten Browsern kann der Benutzer (oder Leser) der Website Stile mit einem benutzerdefinierten **Benutzerstilblatt** überschreiben, das darauf abzielt, das Erlebnis an die Wünsche des Benutzers anzupassen. Abhängig vom Benutzeragent können [Benutzerstile konfiguriert werden](https://www.thoughtco.com/user-style-sheet-3469931) direkt oder über Browser-Erweiterungen hinzugefügt werden.

### Cascade-Ebenen

Die Cascade-Reihenfolge basiert auf dem Herkunftstyp. Die Cascade innerhalb jedes Herkunftstyps basiert auf der Deklarationsreihenfolge der [Cascade-Ebenen](/de/docs/Web/CSS/@layer) innerhalb dieses Typs. Bei allen Herkünften - Benutzeragent, Autor oder Benutzer - können Stile innerhalb oder außerhalb von benannten oder anonymen Ebenen deklariert werden. Wenn sie mit [`layer`, `layer()`](/de/docs/Web/CSS/@import) oder [`@layer`](/de/docs/Web/CSS/@layer) angegeben werden, werden Stile in die benannte Ebene eingeteilt oder in eine anonyme Ebene, wenn kein Name angegeben wird. Stile, die außerhalb einer Ebene deklariert sind, werden als Teil einer zuletzt deklarierten anonymen Ebene angesehen.

Sehen wir uns die kaskadierende Herkunftstypen an, bevor wir die Cascade-Ebenen innerhalb jedes Herkunftstyps untersuchen.

## Kaskadierungsreihenfolge

Der Kaskadenalgorithmus bestimmt, wie der Wert für jede Eigenschaft für jedes Dokumentelement gefunden wird. Die folgenden Schritte gelten für den Kaskadenalgorithmus:

1. **Relevanz**: Es filtert zunächst alle Regeln aus den verschiedenen Quellen, um nur die Regeln zu behalten, die für ein bestimmtes Element gelten. Das bedeutet, dass Regeln, deren Selektor zu dem gegebenen Element passt und die Teil eines geeigneten `media`-Attributs sind, wichtig sind.

2. **Herkunft und Wichtigkeit**: Dann sortiert es diese Regeln nach ihrer Wichtigkeit, das heißt, ob sie von `!important` gefolgt werden, und nach ihrer Herkunft. Wenn man Ebenen vorerst ignoriert, sieht die Kaskadenreihenfolge wie folgt aus:

   | Reihenfolge (niedrig zu hoch) | Herkunft                  | Wichtigkeit  |
   | ----------------------------- | ------------------------- | ------------ |
   | 1                             | Benutzeragent (Browser)   | normal       |
   | 2                             | Benutzer                  | normal       |
   | 3                             | Autor (Entwickler)        | normal       |
   | 4                             | CSS @keyframe-Animationen |              |
   | 5                             | Autor (Entwickler)        | `!important` |
   | 6                             | Benutzer                  | `!important` |
   | 7                             | Benutzeragent (Browser)   | `!important` |
   | 8                             | CSS-Übergänge             |              |

3. **Spezifität**: Im Falle von Gleichheit mit einer Herkunft wird die [Spezifität](/de/docs/Web/CSS/Specificity) einer Regel berücksichtigt, um einen Wert auszuwählen. Die Spezifität der Selektoren wird verglichen und die Deklaration mit der höchsten Spezifität gewinnt.
4. **Nähe des Scopes**: Wenn zwei Selektoren in der Herkunftsebene mit Vorrang die gleiche Spezifität haben, gewinnt der Eigenschaftswert innerhalb von gescopten Regeln mit der kleinsten Anzahl von Sprüngen nach oben in der DOM-Hierarchie zur Scope-Wurzel. Siehe [Wie `@scope`-Konflikte aufgelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.
5. **Reihenfolge des Erscheinens**: In der Herkunft mit Vorrang, wenn es konkurrierende Werte für eine Eigenschaft gibt, die sich in Stilblöcken mit übereinstimmenden Selektoren gleicher Spezifität und Scoping-Nähe befinden, wird die zuletzt erklärte Deklaration in der Stilordnung angewendet.

Die Cascade ist aufsteigend, was bedeutet, dass Animationen Vorrang vor normalen Werten haben, unabhängig davon, ob diese in Benutzer-, Autoren- oder Benutzeragentstilen deklariert werden. Wichtigere Werte haben Vorrang vor Animationen, und Übergänge haben Vorrang vor Wichtigkeitswerten.

> **Hinweis:** **Übergänge und Animationen**
>
> Eigenschaftswerte, die durch Animationen mit {{cssxref('@keyframes')}} festgelegt werden, sind wichtiger als alle normalen Stile (solche ohne [`!important`](/de/docs/Web/CSS/Specificity#the_!important_exception) gesetzt).
>
> Eigenschaftswerte, die in einem {{cssxref('transition')}} festgelegt werden, haben Vorrang vor allen anderen festgelegten Werten, sogar denen, die mit `!important` markiert sind.

Der Kaskadenalgorithmus wird _vor_ dem Spezifitätsalgorithmus angewendet, was bedeutet, dass wenn `:root p { color: red;}` im Benutzerstilblatt (Reihe 2) deklariert ist und ein weniger spezifisches `p {color: blue;}` im Autorenstilblatt (Reihe 3), die Absätze blau sein werden.

## Einfaches Beispiel

Bevor wir uns tiefer mit der Auswirkung von Cascade-Ebenen auf die Cascade auseinandersetzen, betrachten wir ein Beispiel, das mehrere CSS-Quellen über die verschiedenen Herkünfte hinweg umfasst, und arbeiten die Schritte des Kaskadenalgorithmus durch:

Hier haben wir ein Benutzeragent-Stilblatt, zwei Autorenstilblätter und ein Benutzerstilblatt, ohne Inline-Stile im HTML:

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

In diesem Fall sollten Deklarationen innerhalb der `li`- und `.specific`-Regeln gelten.

Noch einmal, es gibt fünf Schritte im Kaskadenalgorithmus, in der Reihenfolge:

1. Relevanz
2. Herkunft und Wichtigkeit
3. Spezifität
4. Scoping-Nähe
5. Reihenfolge des Erscheinens

Die `1px` ist für Printmedien. Aufgrund des _mangelnden Relevanz_ basierend auf ihrem Medientyp wird sie von der Betrachtung ausgeschlossen.

Keine Deklaration ist als `!important` markiert, sodass die Vorrangordnung Autorenstilblätter über Benutzerstilblätter über Benutzeragent-Stilblätter ist. Basierend auf _Herkunft und Wichtigkeit_ werden die `1em` aus dem Benutzerstilblatt und die `10px` aus dem Benutzeragent-Stilblatt von der Betrachtung ausgeschlossen.

Beachten Sie, dass selbst wenn der Benutzerstil auf `.specific` von `1em` eine höhere Spezifität hat, es sich um eine normale Deklaration in einem Benutzerstilblatt handelt. Als solche hat es einen niedrigeren Vorrang als alle Autorenstile und wird von der Herkunft und Wichtigkeit des Algorithmus entfernt, bevor die Spezifität überhaupt ins Spiel kommt.

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

Die letzte, die `5px`, ist Teil einer Cascade-Ebene. Normale Deklarationen in Ebenen haben niedrigeren Vorrang als normale nicht geschichtete Stile innerhalb desselben Herkunftstyps. Auch dies wird von Schritt 2 des Algorithmus entfernt, _Herkunft und Wichtigkeit_.

Dies lässt das `0` und das `3px` übrig, die beide denselben Selektor haben, daher dieselbe _Spezifität_. Keines von beiden befindet sich in einem `@scope`-Block, also spielt die Scoping-Nähe in diesem Beispiel auch keine Rolle.

Wir betrachten dann die _Reihenfolge des Erscheinens_. Die zweite, die letzte der beiden ungeschichteten Autorenstile, gewinnt.

```css
margin-left: 3px;
```

> [!NOTE]
> Die in der Benutzer-CSS definierte Deklaration, während sie möglicherweise eine größere Spezifität hat, wird nicht gewählt, da der _Ursprung und die Wichtigkeit_ des Kaskadenalgorithmus vor dem _Spezifitäts_-Algorithmus angewendet wird. Die in einer Cascade-Schicht definierte Deklaration, obwohl sie später im Code kommt, wird ebenfalls keinen Vorrang haben, da normale Stile in Cascade-Schichten weniger Vorrang haben als normale ungeschichtete Stile. _Reihenfolge des Erscheinens_ ist nur dann wichtig, wenn sowohl Ursprung, Wichtigkeit als auch Spezifität gleich sind.

## Autorstile: Inline-Stile, Ebenen und Vorrang

Die [Tabelle in Kaskadierungsreihenfolge](#kaskadierungsreihenfolge) bot einen Überblick über die Vorrangordnung. Die Tabelle fasste die Benutzeragent-, Benutzer- und Autorenstiltypstile in zwei Zeilen für jeden Typ zusammen mit "Herkunftstyp - normal" und "Herkunftstyp - !important". Der Vorrang innerhalb jedes Herkunftstyps ist nuancierter. Stile können innerhalb von Ebenen innerhalb ihres Herkunftstyps enthalten sein, und bei Autorenstilen ist auch die Frage, wo Inline-Stile in der Kaskadenreihenfolge stehen.

Die Reihenfolge, in der Ebenen deklariert werden, ist wichtig für die Bestimmung der Vorrangordnung. Normale Stile in einer Ebene haben Vorrang vor Stilen, die in vorherigen Ebenen deklariert wurden; Normale Stile, die außerhalb einer Ebene deklariert sind, haben Vorrang vor normalen geschichteten Stilen, unabhängig von ihrer Spezifität.

In diesem Beispiel verwendete der Autor die {{CSSXref('@import')}}-Regel von CSS, um fünf externe Stilblätter innerhalb eines {{HTMLElement('style')}}-Informations-Elements zu importieren.

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

Im oben genannten CSS-Codeblock wurden drei Cascade-Ebenen namens "A", "B" und "C" in dieser Reihenfolge erstellt. Drei Stilblätter wurden direkt in Ebenen importiert und zwei wurden ohne Erstellen oder Zuweisen einer Ebene importiert. Die "Alle ungeschichteten Stile" in der Liste unten (normale Autorstil-Vorrang - Reihenfolge 4) enthalten Stile von diesen beiden Stilblättern und die zusätzlichen ungeschichteten CSS-Stilblöcke. Darüber hinaus gibt es zwei Inline-Stile, eine normale `line-height`-Deklaration und eine wichtige `text-decoration`-Deklaration:

| Reihenfolge (niedrig zu hoch) | Autorstil                  | Wichtigkeit  |
| ----------------------------- | -------------------------- | ------------ |
| 1                             | A - erste Ebene            | normal       |
| 2                             | B - zweite Ebene           | normal       |
| 3                             | C - letzte Ebene           | normal       |
| 4                             | Alle ungeschichteten Stile | normal       |
| 5                             | inline `style`             | normal       |
| 6                             | Animationen                |              |
| 7                             | Alle ungeschichteten Stile | `!important` |
| 8                             | C - letzte Ebene           | `!important` |
| 9                             | B - zweite Ebene           | `!important` |
| 10                            | A - erste Ebene            | `!important` |
| 11                            | inline `style`             | `!important` |
| 12                            | Übergänge                  |              |

In allen Herkunftstypen haben die nicht wichtigen Stile, die in Ebenen enthalten sind, die geringste Vorrangstellung. In unserem Beispiel haben die normalen Stile, die mit der ersten deklarierten Ebene (A) assoziiert sind, eine niedrigere Vorrangstellung als normale Stile in der zweiten deklarierten Ebene (B), die wiederum eine niedrigere Vorrangstellung als normale Stile in der dritten deklarierten Ebene (C) haben. Diese geschichteten Stile haben eine niedrigere Vorrangstellung als alle normalen ungeschichteten Stile, zu denen normale Stile aus `unlayeredStyles.css`, `moreUnlayeredStyles.css` und die `Farbe` von `p` im `<style>` selbst gehören.

Wenn einer der geschichteten Stile in A, B oder C Selektoren mit höherer Spezifität enthält, die zu einem Element passen, ähnlich wie `:root body p { color: black;}`, spielt das keine Rolle. Diese Deklarationen werden aufgrund des _Ursprungs_ von der Betrachtung ausgeschlossen; normale geschichtete Stile haben weniger Vorrang als normale ungeschichtete Stile. Wenn jedoch der spezifischere Selektor `:root body p { color: black;}` in `unlayeredStyles.css` gefunden wird, da _Ursprung und Wichtigkeit_ die gleiche Vorrangstellung haben, bedeutet _Spezifität_, dass die spezifischere schwarze Deklaration gewinnen würde.

Die Schichtordnung der Vorrangstellung ist umgekehrt für Stile, die als `!important` deklariert wurden. Wichtige Stile, die in einer Schicht deklariert werden, haben Vorrang vor wichtigen Stilen, die außerhalb einer Schicht deklariert werden. Wichtige Werte, die in früh deklarierten Schichten vorkommen, haben Vorrang vor wichtigen Stilen, die in nachfolgenden Cascade-Schichten deklariert werden.

### Inline-Stile

Relevant sind nur Inline-Stile des Autors, die mit dem `style`-Attribut deklariert werden. Normale Inline-Stile haben Vorrang vor allen anderen normalen Autorenstilen, unabhängig von der Spezifität des Selektors. Wenn `line-height: 2;` in einem `:root body p`-Selektorblock in einem der fünf importierten Stilblätter deklariert wurde, wäre die Zeilenhöhe immer noch `1.6`.

Normale Inline-Stile haben Vorrang vor allen anderen normalen Autorenstilen, es sei denn, die Eigenschaft wird durch eine CSS-Animation verändert.

Alle wichtigen Inline-Stile haben Vorrang vor allen Autorenstilen, wichtig und nicht, inline und nicht, geschichtet und nicht. Wichtige Stile haben auch Vorrang vor animierten Eigenschaften, jedoch nicht vor Eigenschaften, die gerade übegeführt werden. Drei Dinge können einen wichtigen Inline-Stil außer Kraft setzen: 1) ein wichtiger Benutzer-Stil, 2) ein wichtiger Benutzeragent-Stil oder 3) ein Wert einer Eigenschaft, die gerade übergeht.

### Wichtigkeit und Ebenen

Der Vorrang der Herkunftstypenreihenfolge wird für wichtige Stile umgekehrt. Wichtige Stile, die außerhalb einer Cascade-Schicht deklariert werden, haben einen niedrigeren Vorrang als solche, die als Teil einer Schicht deklariert sind. Wichtige Werte, die in den ersten deklarierten Schichten vorkommen, haben Vorrang vor wichtigen Stilen, die in nachfolgenden Cascade-Schichten deklariert werden.

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

Obwohl das Rot zuerst deklariert wird und einen weniger speziellen Selektor hat, da ungeschichtetes CSS Vorrang vor geschichtetem CSS hat, wird der Absatz rot sein. Hätten wir einen Inline-Stil am Absatz hinzugefügt, um ihn auf eine andere Farbe zu setzen, wie `<p style="color: black">`, wäre der Absatz schwarz.

Wenn wir `!important` zu diesem Teil des CSS hinzufügen, wird die Vorrangordnung innerhalb des Stylesheets umgekehrt:

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

Jetzt wird der Absatz blau sein. Das `!important` in der frühesten deklarierten Schicht hat Vorrang vor nachfolgenden Schichten und ungeschichteten, wichtigen Deklarationen. Wenn der Inline-Stil `!important` enthalten hätte, wie `<p style="color: black !important">`, wäre der Absatz wieder schwarz. Wichtigkeit bei Inline-Stilen hat Vorrang vor allen anderen autorisierten `!important` Deklarationen, unabhängig von der Spezifität.

> [!NOTE]
> Das `!important`-Flag kehrt den Vorrang von Cascade-Ebenen um. Verwenden Sie aus diesem Grund `!important` nur sparsam, um externe Stile zu überschreiben. Verwenden Sie stattdessen {{cssxref("@import")}} zusammen mit dem `layer`-Keyword oder der `layer()`-Funktion, um externe Stilblätter (von Frameworks, Widget-Stilblättern, Bibliotheken usw.) in Ebenen zu importieren. Importieren Sie Stilblätter in eine Schicht als erste Deklaration in Ihrem CSS, demote deren Vorrangstellung, und benutzerdefinierte Ebenen, die später in Ihrem CSS definiert werden, haben höhere Vorrangstellung. Das `!important`-Flag sollte, wenn überhaupt, nur sparsam verwendet werden, um erforderliche Stile vor späteren Überschreibungen in der ersten deklarierten Schicht zu schützen.

Stile, die in Übergängen übergehen, haben Vorrang vor allen wichtigen Stilen, unabhängig davon, wer oder wie sie deklariert werden.

## Vollständige Kaskadenreihenfolge

Jetzt, da wir ein besseres Verständnis von Herkunftstyp und Cascade-Ebenen haben, stellen wir fest, dass die Tabelle in [Kaskadierungsreihenfolge](#kaskadierungsreihenfolge) genau durch die folgende Tabelle dargestellt werden könnte:

<table>
<thead>
  <tr><th>Vorrangordnung <br/>(niedrig zu hoch)</th><th>Stilursprung</th><th>Wichtigkeit</th></tr>
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

## Welche CSS-Entitäten nehmen an der Cascade teil

Nur CSS Eigenschaftswert-Paare nehmen an der Cascade teil. CSS @-Regel-Deskriptoren nehmen nicht an der Cascade teil und HTML-Präsentationsattribute sind nicht Teil der Cascade.

### At-Rules

CSS [At-Rules](/de/docs/Web/CSS/At-rule), die andere Entitäten als Deklarationen enthalten, wie eine {{cssxref("@font-face")}}-Regel mit _Deskriptoren_, nehmen nicht an der Cascade teil.

Im Grunde genommen nehmen die in At-Rules definierten Eigenschaften und Deskriptoren nicht an der Cascade teil. Nur At-Rules als Ganzes nehmen an der Cascade teil. Zum Beispiel identifizieren innerhalb einer `@font-face`-Regel Schriftnamen Kennzeichen [`font-family`](/de/docs/Web/CSS/@font-face/font-family) Deskriptoren. Wenn mehrere `@font-face`-Regeln mit demselben Deskriptor definiert sind, wird nur das passendste `@font-face` als Ganzes berücksichtigt. Wenn mehr als eines identisch passend ist, werden die gesamten `@font-face`-Deklarationen unter Verwendung der Schritte 1, 2 und 4 des Algorithmus verglichen (es gibt keine Spezifität bei At-Rules).

Während die Deklarationen, die in den meisten At-Rules — wie die in {{cssxref("@media")}}, {{cssxref("@document")}} oder {{cssxref("@supports")}} — enthalten sind, an der Cascade teilnehmen, kann eine At-Rule genau wie im [einfachen Beispiel](#einfaches_beispiel) gesehen die gesamte Regel unwichtig machen.

Deklarationen in {{cssxref("@keyframes")}} nehmen nicht an der Cascade teil. Genauso wie bei `@font-face` wird nur die `@keyframes` als Ganzes über den Kaskadenalgorithmus ausgewählt. Die [Vorrangstellung der Animation wird unten beschrieben](#css-animationen_und_die_cascade).

Wenn es um {{cssxref("@import")}} geht, nimmt das `@import` nicht selbst an der Cascade teil, aber alle importierten Stile tun dies. Wenn das `@import` definiert ist in [benannte oder anonyme Ebenen](/de/docs/Web/CSS/@layer), werden die Inhalte des importierten Stylesheets in die angegebene Ebene eingefügt. Alle anderen mit `@import` importierten CSS werden als letzte deklarierte Schicht behandelt. Dies wurde oben besprochen.

Schließlich gehorcht {{cssxref("@charset")}} bestimmten Algorithmen und ist vom Cascade Algorithmus nicht betroffen.

### Presentationsattribute

Presentationsattribute sind Attribute im Quelldokument, die das Styling beeinflussen können. Zum Beispiel wird, wenn enthalten, das veraltete `align`-Attribut die Ausrichtung auf mehreren HTML-Elementen setzen und das `fill`-Attribut definiert die Farbe, die verwendet wird, um SVG Formen und Text zu malen und definiert den Endzustand für SVG-Animationen. Während es sich um Autorenstile handelt, nehmen Presentationsattribute nicht an der Cascade teil.

Wenn das HTML-Darstellungsattribut vom Benutzeragent unterstützt wird, werden gültige Präsentationsattribute, die im HTML und SVG enthalten sind, wie das [`align`](/de/docs/Web/HTML/Element/img#align) oder [`fill`](/de/docs/Web/SVG/Attribute/fill) Attribute, in die entsprechenden CSS-Regeln übersetzt (alle SVG-Präsentationsattribute werden als CSS-Eigenschaften unterstützt) und im Autorenstilblatt vor allen anderen Stilen mit einer Spezifität gleich `0` eingefügt.

Präsentationsattribute können nicht `!important` deklariert werden.

## CSS-Animationen und die Cascade

[CSS-Animationen](/de/docs/Web/CSS/CSS_animations), die {{cssxref("@keyframes")}} At-Rules verwenden, definieren Animationen zwischen Zuständen. Keyframes kaskadieren nicht, was bedeutet, dass zu jedem Zeitpunkt CSS nur Werte von einem einzigen {{cssxref("@keyframes")}} nimmt und niemals mehrere mischt.

Wenn mehrere Keyframe-Animationen mit demselben Animationsnamen definiert sind, wird die zuletzt definierte `@keyframes` der Herkunft und Ebene mit der größten Vorrangstellung verwendet. Nur eine `@keyframes`-Definition wird verwendet, selbst wenn die `@keyframes` verschiedene Eigenschaften animieren. `@keyframes` mit demselben Namen werden niemals kombiniert.

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

In diesem Beispiel gibt es drei separate Animationsdeklarationen mit dem Namen `repeatedName`. Wenn `animation: infinite 5s alternate repeatedName` auf den Absatz angewendet wird, wird nur eine Animation angewendet: Die Keyframe-Animation, die in dem ungeschichteten CSS deklariert ist, hat Vorrang vor den geschichteten Keyframe-Animationsdeklarationen basierend auf Vorrang des Ursprungs und der Cascade-Ebenenordnung. In diesem Beispiel wird nur die Schriftgröße des Elements animiert.

> [!NOTE]
> Es gibt keine wichtigen Animationen, da Eigenschaftsdeklarationen in einem {{cssxref('@keyframes')}}-Block, die `!important` als Teil des Wertes enthalten, ignoriert werden.

## Zurücksetzen von Stilen

Nachdem Ihr Inhalt die Stile geändert hat, kann er sich in einer Situation finden, in der er die Stile auf einen bekannten Zustand zurücksetzen muss. Dies kann in Fällen von Animationen, Themenänderungen usw. geschehen. Die CSS-Eigenschaft {{cssxref("all")}} ermöglicht es Ihnen, (fast) alles in CSS schnell auf einen bekannten Zustand zurückzusetzen.

`all` lässt Sie wählen, alle Eigenschaften sofort auf einen ihrer Anfangszustände, den Zustand, der von der vorherigen Ebene der Cascade geerbt wurde, einen spezifischen Ursprung (das Benutzeragent-Stilblatt, das Autorenstilblatt oder das Benutzerstilblatt) oder sogar die Werte der Eigenschaften vollständig zu löschen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Bausteine: die CSS-Cascade](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [Bausteine: Cascade-Ebenen](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)
- [CSS-Cascade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/Syntax)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [At-Rules](/de/docs/Web/CSS/At-rule)
- [Initial](/de/docs/Web/CSS/initial_value), [computed](/de/docs/Web/CSS/computed_value), [used](/de/docs/Web/CSS/used_value) und [actual](/de/docs/Web/CSS/actual_value) Werte
