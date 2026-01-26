---
title: Einführung in die CSS-Kaskade
short-title: Introduction
slug: Web/CSS/Guides/Cascade/Introduction
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **Kaskade** ist ein Algorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte aus verschiedenen Quellen kombinieren. Die Kaskade legt den Ursprung und die Ebene fest, die Vorrang hat, wenn Deklarationen in mehr als einem [Ursprung](#ursprungstypen), einer [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) oder einem {{CSSxRef("@scope")}} Block einen Wert für eine Eigenschaft eines Elements festlegen.

Die Kaskade steht im Zentrum von CSS, wie der Name betont: _**Cascading**_ Style Sheets. Wenn ein [Selektor](/de/docs/Web/CSS/Guides/Selectors) mit einem Element übereinstimmt, wird der Eigenschaftswert aus dem Ursprung mit der höchsten Priorität angewendet, auch wenn der Selektor aus einem Ursprung oder einer Schicht mit geringerer Priorität eine größere [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) aufweist.

Dieser Artikel erklärt, was die Kaskade ist und in welcher Reihenfolge {{Glossary("CSS", "CSS")}} [Deklarationen](/de/docs/Web/API/CSSStyleDeclaration) kaskadieren, einschließlich der Kaskadenschichten und Ursprungstypen. Das Verständnis der Priorität des Ursprungs ist der Schlüssel zum Verständnis der Kaskade.

## Ursprungstypen

Der Job des CSS-Kaskadenalgorithmus ist es, CSS-Deklarationen auszuwählen, um die richtigen Werte für CSS-Eigenschaften zu bestimmen. CSS-Deklarationen stammen aus verschiedenen Ursprungstypen: **[Benutzeragenten-Stylesheets](#benutzeragenten-stylesheets)**, **[Autor-Stylesheets](#autor-stylesheets)** und **[Benutzer-Stylesheets](#benutzer-stylesheets)**.

Obwohl Stylesheets aus diesen verschiedenen Ursprüngen stammen und in verschiedenen [Schichten](/de/docs/Web/CSS/Reference/At-rules/@layer) in jedem dieser Ursprünge sein können, überschneiden sie sich in Bezug auf ihren Standardbereich; um dies zu ermöglichen, definiert der Kaskadenalgorithmus, wie sie interagieren. Bevor wir uns den Wechselwirkungen zuwenden, werden wir in den nächsten Abschnitten einige Schlüsselbegriffe definieren.

### Benutzeragenten-Stylesheets

Benutzeragenten oder Browser haben grundlegende Stylesheets, die jedem Dokument Standardstile geben. Diese Stylesheets werden **Benutzeragenten-Stylesheets** genannt. Die meisten Browser verwenden tatsächliche Stylesheets für diesen Zweck, während andere sie im Code simulieren. Das Endergebnis ist dasselbe.

Einige Browser erlauben es Benutzern, das Benutzeragenten-Stylesheet zu modifizieren, aber das ist selten und kann nicht kontrolliert werden.

Obwohl einige Einschränkungen für Benutzeragenten-Stylesheets durch die HTML-Spezifikation festgelegt sind, haben Browser viele Freiheiten: das bedeutet, dass es zwischen Browsern einige Unterschiede gibt. Um den Entwicklungsprozess zu vereinfachen, verwenden Webentwickler möglicherweise ein CSS-Reset-Stylesheet, wie [normalize.css](https://github.com/necolas/normalize.css), das gemeinsame Eigenschaftswerte auf einen bekannten Zustand für alle Browser festlegt, bevor Anpassungen vorgenommen werden, um ihren spezifischen Bedürfnissen gerecht zu werden.

Sofern das Benutzeragenten-Stylesheet nicht ein [`!important`](/de/docs/Web/CSS/Guides/Cascade/Specificity#the_!important_exception) neben einer Eigenschaft enthält, die es "wichtig" macht, haben von Autoren festgelegte Stile, einschließlich eines Reset-Stylesheets, Vorrang vor den Benutzeragenten-Stilen, unabhängig von der Spezifität des zugehörigen Selektors.

### Autor-Stylesheets

**Autor-Stylesheets** sind die häufigste Art von Stylesheets; diese Stile werden von Webentwicklern geschrieben. Diese Stile können Benutzeragenten-Stile zurücksetzen, wie oben erwähnt, und definieren die Stile für das Design einer bestimmten Webseite oder Anwendung. Der Autor oder Webentwickler definiert die Stile für das Dokument mithilfe eines oder mehrerer verlinkter oder importierter Stylesheets, {{HTMLElement('style')}} Blöcke und inline Stile, die mit dem [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attribut definiert sind. Diese Autorstile definieren das Aussehen und die Haptik der Website — ihr Thema.

### Benutzer-Stylesheets

In den meisten Browsern kann der Benutzer (oder Leser) der Website die Stile mithilfe eines benutzerdefinierten **Benutzerstylesheets** überschreiben, das darauf ausgelegt ist, das Erlebnis an die Wünsche des Benutzers anzupassen. Je nach Benutzeragent können [Benutzerstile konfiguriert werden](https://www.thoughtco.com/user-style-sheet-3469931) direkt oder über Browsererweiterungen hinzugefügt werden.

### Kaskadenschichten

Die Kaskadenreihenfolge basiert auf dem Ursprungstyp. Die Kaskade innerhalb jedes Ursprungstyps basiert auf der Deklarationsreihenfolge der [Kaskadenschichten](/de/docs/Web/CSS/Reference/At-rules/@layer) innerhalb dieses Typs. Für alle Ursprünge - Benutzeragenten, Autor oder Benutzer - können Stile innerhalb oder außerhalb benannter oder anonymer Schichten deklariert werden. Wenn Stile mit [`layer`, `layer()`](/de/docs/Web/CSS/Reference/At-rules/@import) oder {{cssxref("@layer")}} deklariert werden, werden die Stile in die angegebene benannte Schicht oder in eine anonyme Schicht eingeordnet, wenn kein Name angegeben ist. Stile, die außerhalb einer Schicht deklariert werden, werden als Teil einer anonymen zuletzt deklarierten Schicht behandelt.

Werfen wir einen Blick auf den kaskadierenden Ursprungstyp, bevor wir uns in jeder Ursprungstyp in Kaskadenschichten vertiefen.

## Kaskadenreihenfolge

Der Kaskadenalgorithmus bestimmt, wie der Wert für jede Eigenschaft für jedes Dokumentelement gefunden werden soll. Die folgenden Schritte gelten für den Kaskadenalgorithmus:

1. **Relevanz**: Zuerst filtert er alle Regeln aus den verschiedenen Quellen, um nur die Regeln zu behalten, die für ein bestimmtes Element gelten. Das bedeutet Regeln, deren Selektor mit dem gegebenen Element übereinstimmt und die Teil einer geeigneten `media` at-rule sind.
2. **Ursprung und Wichtigkeit**: Dann sortiert er diese Regeln nach ihrer Wichtigkeit, also ob sie von `!important` gefolgt werden oder nicht, und nach ihrem Ursprung. Ignoriert man die Schichten zunächst, ist die Kaskadenreihenfolge wie folgt:

   | Prioritätsreihenfolge (niedrig zu hoch) | Ursprung                 | Wichtigkeit  |
   | --------------------------------------- | ------------------------ | ------------ |
   | 1                                       | Benutzeragent (Browser)  | normal       |
   | 2                                       | Benutzer                 | normal       |
   | 3                                       | Autor (Entwickler)       | normal       |
   | 4                                       | CSS Keyframe-Animationen |              |
   | 5                                       | Autor (Entwickler)       | `!important` |
   | 6                                       | Benutzer                 | `!important` |
   | 7                                       | Benutzeragent (Browser)  | `!important` |
   | 8                                       | CSS-Übergänge            |              |

3. **Spezifität**: Bei Gleichheit mit einem Ursprung wird die [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) einer Regel berücksichtigt, um einen Wert auszuwählen. Die Spezifität der Selektoren wird verglichen, und die Deklaration mit der höchsten Spezifität gewinnt.
4. **Nähe zum Scope**: Wenn zwei Selektoren in der Ursprungsschicht mit Vorrang die gleiche Spezifität aufweisen, gewinnt der Eigenschaftswert innerhalb von Scoped-Regeln mit der geringsten Anzahl von Sprüngen die DOM-Hierarchie bis zur Scope-Wurzel. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.
5. **Reihenfolge des Erscheinens**: Im Ursprung mit Vorrang, wenn es konkurrierende Werte für eine Eigenschaft gibt, die in Style-Blöcken Übereinstimmungsselektoren mit gleicher Spezifität und Scope-Nähe aufweisen, wird die letzte Deklaration in der Stile-Reihenfolge angewendet.

Die Kaskade erfolgt in aufsteigender Reihenfolge, was bedeutet:

- Animationen haben Vorrang vor normalen Werten, egal ob in Benutzer-, Autoren- oder Benutzeragenten-Stilen deklariert.
- Wichtige Werte haben Vorrang vor Animationen, egal ob in Benutzer-, Autoren- oder Benutzeragenten-Stilen deklariert.
- Übergänge haben Vorrang vor wichtigen Werten.

> [!NOTE]
> **Übergänge und Animationen**
>
> Eigenschaftswerte, die durch Animation {{cssxref('@keyframes')}} gesetzt werden, sind wichtiger als alle normalen Stile (diejenigen ohne [`!important`](/de/docs/Web/CSS/Guides/Cascade/Specificity#the_!important_exception) Set).
>
> Eigenschaftswerte, die in einer {{cssxref('transition')}} gesetzt werden, haben Vorrang vor allen anderen gesetzten Werten, selbst wenn sie mit `!important` markiert sind.

Der Kaskadenalgorithmus wird _vor_ dem Spezifitätsalgorithmus angewendet, was bedeutet, dass wenn `:root p { color: red;}` im Benutzer-Stylesheet (Reihe 2) und ein weniger spezifisches `p {color: blue;}` im Autor-Stylesheet (Reihe 3) deklariert ist, die Absätze blau sind.

## Einfaches Beispiel

Bevor wir einen tieferen Blick darauf werfen, wie Kaskadenschichten die Kaskade beeinflussen, werfen wir einen Blick auf ein Beispiel, das mehrere Quellen von CSS über die verschiedenen Ursprünge hinweg einbezieht, und arbeiten wir die Schritte des Kaskadenalgorithmus durch:

Hier haben wir ein Benutzeragenten-Stylesheet, zwei Autoren-Stylesheets und ein Benutzer-Stylesheet ohne Inline-Stile im HTML:

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

In diesem Fall sollten Deklarationen innerhalb von `li` und `.specific`-Regeln angewendet werden.

Erneut gibt es fünf Schritte im Kaskadenalgorithmus, in der Reihenfolge:

1. Relevanz
2. Ursprung und Wichtigkeit
3. Spezifität
4. Nähe zum Scope
5. Reihenfolge des Erscheinens

Das `1px` gilt für Medien des Typs "Print". Aufgrund mangelnder _Relevanz_ auf Basis seines Medientyps wird es von der Betrachtung ausgeschlossen.

Keine Deklaration ist als `!important` markiert, sodass die Prioritätsreihenfolge Autoren-Stylesheets über Benutzer-Stylesheets über Benutzeragenten-Stylesheet ist. Basierend auf _Ursprung und Wichtigkeit_ werden das `1em` aus dem Benutzer-Stylesheet und das `10px` aus dem Benutzeragenten-Stylesheet von der Betrachtung ausgeschlossen.

Obwohl der Benutzerstil auf `.specific` von `1em` eine höhere Spezifität aufweist, ist er eine normale Deklaration in einem Benutzer-Stylesheet. Daher hat er eine niedrigere Priorität als alle Autorenstile und wird durch den Ursprung-und-Wichtigkeit-Schritt des Algorithmus entfernt, bevor die Spezifität überhaupt ins Spiel kommt.

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

Die letzte, das `5px`, ist Teil einer Kaskadenschicht. Normale Deklarationen in Schichten haben eine niedrigere Priorität als normale Stile außerhalb einer Schicht innerhalb desselben Ursprungstyps. Dies wird ebenfalls durch Schritt 2 des Algorithmus, _Ursprung und Wichtigkeit_, entfernt.

Dies lässt das `0` und das `3px` übrig, die beide den gleichen Selektor haben, daher die gleiche _Spezifität_. Keines von ihnen befindet sich innerhalb eines `@scope`-Blocks, sodass die Nähe zum Scope in diesem Beispiel ebenfalls keine Rolle spielt.

Wir schauen uns dann die _Reihenfolge des Erscheinens_ an. Der zweite, die letzte der beiden nicht geschichteten Autorenstile, gewinnt.

```css
margin-left: 3px;
```

> [!NOTE]
> Die Deklaration, die im Benutzer-CSS definiert ist, wird nicht ausgewählt, obwohl sie möglicherweise eine größere Spezifität hat, da der Kaskadenalgorithmus mit _Ursprung und Wichtigkeit_ vor dem _Spezifitätsalgorithmus_ angewendet wird. Die in einer Kaskadenschicht definierte Deklaration wird ebenfalls aufgrund des Ursprungs nicht ausgewählt, selbst wenn sie später im Code kommt, da normale Stile in Kaskadenschichten weniger Vorrang haben als normale, nicht geschichtete Stile. _Reihenfolge des Erscheinens_ ist nur relevant, wenn sowohl _Ursprung, Wichtigkeit als auch Spezifität_ gleich sind.

## Autorenstile: Inline-Stile, Schichten und Vorrang

Die [Tabelle in der Kaskadenreihenfolge](#kaskadenreihenfolge) bot eine Übersicht über die Prioritätsreihenfolge. Die Tabelle fasste die Benutzeragenten-, Benutzer- und Autor-Ursprungst

ypen in zwei Zeilen zusammen: "Ursprungstyp - normal" und "Ursprungstyp - !important". Die Vorrang innerhalb jedes Ursprungstyps ist nuancierter. Stile können innerhalb von Schichten innerhalb ihres Ursprungstyps enthalten sein, und bei Autorenstilen gibt es auch die Frage, wo Inline-Stile in der Kaskadenreihenfolge landen.

Die Reihenfolge, in der Schichten deklariert werden, ist wichtig, um den Vorrang zu bestimmen. Normale Stile in einer Schicht haben Vorrang vor Stilen, die in vorherigen Schichten deklariert sind; mit normalen Stilen, die außerhalb einer Schicht deklariert sind und Vorrang vor normalen geschichteten Stilen haben, unabhängig von der Spezifität.

In diesem Beispiel hat der Autor die {{CSSXref('@import')}} Regel verwendet, um fünf externe Stylesheets innerhalb eines {{HTMLElement('style')}} Informationselements zu importieren.

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

Im obigen CSS-Codeblock wurden drei Kaskadenschichten mit den Namen "A", "B" und "C" erstellt, in dieser Reihenfolge. Drei Stylesheets wurden direkt in Schichten importiert und zwei wurden ohne die Erstellung oder Zuordnung zu einer Schicht importiert. Die "Alle nicht geschichteten Stile" in der Liste unten (normaler Autostiervorrang - Reihenfolge 4) umfasst Stile aus diesen beiden Stylesheets und den zusätzlichen nicht geschichteten CSS-Stilblöcken. Zusätzlich gibt es zwei Inline-Stile, eine normale `line-height` Deklaration und eine wichtige `text-decoration` Deklaration:

| Prioritätsreihenfolge (niedrig zu hoch) | Autor-Stil                     | Wichtigkeit  |
| --------------------------------------- | ------------------------------ | ------------ |
| 1                                       | A - erste Schicht              | normal       |
| 2                                       | B - zweite Schicht             | normal       |
| 3                                       | C - letzte Schicht             | normal       |
| 4                                       | Alle nicht geschichteten Stile | normal       |
| 5                                       | Inline `style`                 | normal       |
| 6                                       | Animationen                    |              |
| 7                                       | Alle nicht geschichteten Stile | `!important` |
| 8                                       | C - letzte Schicht             | `!important` |
| 9                                       | B - zweite Schicht             | `!important` |
| 10                                      | A - erste Schicht              | `!important` |
| 11                                      | Inline `style`                 | `!important` |
| 12                                      | Übergänge                      |              |

In allen Ursprungstypen haben normale Stile, die in Schichten enthalten sind, den niedrigsten Vorrang. In unserem Beispiel haben die normalen Stile, die mit der ersten deklarierten Schicht (A) assoziiert sind, eine niedrigere Priorität als normale Stile in der zweiten deklarierten Schicht (B), die eine niedrigere Priorität als normale Stile in der dritten deklarierten Schicht (C) haben. Diese geschichteten Stile haben eine niedrigere Priorität als alle normalen nicht geschichteten Stile, die normale Stile aus `unlayeredStyles.css`, `moreUnlayeredStyles.css` und die `color` von `p` im `<style>` selbst umfassen.

Wenn irgendein geschichteter Stil in A, B oder C Selektoren mit höherer Spezifität hat, die einem Element entsprechen, spielt es keine Rolle. Diese Deklarationen werden aufgrund des Ursprungs entfernt; normale geschichtete Stile haben weniger Vorrang als normale nicht geschichtete Stile. Wenn jedoch der spezifischere Selektor `:root body p { color: black; }` in `unlayeredStyles.css` gefunden würde, hätten sowohl _Ursprung als auch Wichtigkeit_ den gleichen Vorrang, _Spezifität_ würde bedeuten, dass die spezifischere, schwarze Deklaration gewinnen würde.

Die Ebenenreihenfolge des Vorrangs ist für Stile, die als `!important` deklariert sind, invertiert. Wichtige Deklarationen, die in einer Schicht gefunden werden, haben Vorrang vor wichtigen Deklarationen, die außerhalb einer Schicht gefunden werden. Wichtige Deklarationen, die in der ersten Schicht (A) gefunden werden, haben Vorrang vor wichtigen Deklarationen, die in Schicht B gefunden werden, die Vorrang vor wichtigen Deklarationen in Schicht C haben, die Vorrang vor wichtigen Deklarationen haben, die außerhalb einer Schicht gefunden werden.

### Inline-Stile

Nur auf Autorenstile beziehen sich Inline-Stile, die mit dem `style`-Attribut deklariert sind. Normale Inline-Stile haben Vorrang vor allen anderen normalen Autorenstilen, unabhängig von der Spezifität des Selektors. Wenn `line-height: 2;` in einem `:root body p` Selektorblock in einem der fünf importierten Stylesheets deklariert würde, wäre die Linienhöhe trotzdem `1.6`. Normale Inline-Stile haben keinen Vorrang vor animierten oder übergangenen Eigenschaften.

Wichtige Inline-Stile haben Vorrang vor allen anderen Autorenstilen, unabhängig davon, ob sie wichtig, inline oder geschichtet sind. Wichtige Inline-Stile haben auch Vorrang vor animierten Eigenschaften, jedoch nicht vor übergangenen Eigenschaften. Drei Dinge können einen wichtigen Inline-Stil überschreiben:

- Ein wichtiger Benutzerstil.
- Ein wichtiger Benutzeragentenstil.
- Eine übergangene Eigenschaft.

### Wichtigkeit und Schichten

Die Vorrangreihenfolge des Ursprungstyps ist für wichtige Stile invertiert. Wichtige Stile, die außerhalb irgendeiner Kaskadenschicht deklariert werden, haben weniger Vorrang als die, die innerhalb einer Schicht deklariert werden. Wichtige Stile, die in frühen Schichten gefunden werden, haben Vorrang vor wichtigen Stilen, die in nachfolgenden Kaskadenschichten deklariert wurden.

Betrachten Sie zum Beispiel folgendes CSS:

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

Selbst wenn das Rot zuerst deklariert und einen weniger spezifischen Selektor aufweist, da nicht geschichtetes CSS Vorrang vor geschichtetem CSS hat, wird der Absatz rot angezeigt. Hätten wir einen Inline-Stil am Absatz hinzugefügt, der auf eine andere Farbe gesetzt ist, wie `<p style="color: black">`, würde der Absatz schwarz sein.

Wenn wir `!important` zu diesem CSS hinzufügen, wird die Vorrangreihenfolge innerhalb des Stylesheets umgekehrt:

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

Jetzt wird der Absatz blau. Das `!important` in der am frühesten deklarierten Schicht hat Vorrang vor nachfolgenden Schichten und nicht geschichteten wichtigen Deklarationen. Wenn der Inline-Stil `!important` enthalten würde, wie `<p style="color: black !important">`, wäre der Absatz erneut schwarz. Inline-Wichtigkeit hat Vorrang vor allen anderen von Autoren deklarierten `!important`-Deklarationen, unabhängig von der Spezifität.

> [!NOTE]
> Das `!important`-Flag kehrt die Vorrangreihenfolge von Kaskadenschichten um. Aus diesem Grund sollten Sie versuchen, `!important` nicht zu verwenden, um **externe Stile** zu überschreiben. Stattdessen verwenden Sie {{cssxref("@import")}} zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Schichten zu importieren. Das Importieren von Stylesheets in eine Schicht als erste Deklaration in Ihrem CSS senkt ihren Vorrang, und von Autoren definierte Schichten, die später in Ihrem CSS definiert werden, haben einen höheren Vorrang. Das `!important`-Flag sollte nur sparsam, wenn überhaupt, verwendet werden, um erforderliche Stile vor späteren Überschreibungen in der ersten deklarierten Schicht zu schützen.

Stile, die in Transition befindlich sind, haben Vorrang vor allen wichtigen Stilen, egal von wem oder wie sie deklariert wurden.

## Vollständige Kaskadenreihenfolge

Jetzt, da wir ein besseres Verständnis von Ursprungstypen und Kaskadenschicht-Vorrang haben, realisieren wir, dass die Tabelle in der [Kaskadenreihenfolge](#kaskadenreihenfolge) genauer durch die folgende Tabelle dargestellt werden könnte:

<table>
<thead>
  <tr><th>Prioritätsreihenfolge <br/>(niedrig zu hoch)</th><th>Stilursprung</th><th>Wichtigkeit</th></tr>
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
  <tr><td>Inline <code>style</code></td></tr>
  <tr><td>4</td><td>Animationen</td><td></td></tr>
  <tr><td rowspan="4">5</td><td>Autor - nicht geschichtete Stile</td><td rowspan="4"><code>!important</code></td></tr>
  <tr><td>Autor - letzte deklarierte Schicht</td></tr>
  <tr><td>Autor - erste deklarierte Schicht</td></tr>
  <tr><td>Inline <code>style</code></td></tr>
  <tr><td rowspan="3">6</td><td>Benutzer - nicht geschichtete Stile</td><td rowspan="3"><code>!important</code></td></tr>
  <tr><td>Benutzer - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzer - erste deklarierte Schicht</td></tr>
  <tr><td rowspan="3">7</td><td>Benutzeragent - nicht geschichtete Stile</td><td rowspan="3"><code>!important</code></td></tr>
  <tr><td>Benutzeragent - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzeragent - erste deklarierte Schicht</td></tr>
  <tr><td>8</td><td>Transitions</td><td></td></tr>
</tbody>
</table>

## Welche CSS-Entitäten nehmen an der Kaskade teil

Nur CSS Eigenschafts-/Wertpaardeklarationen nehmen an der Kaskade teil. CSS-At-Regel-Deskriptoren nehmen nicht an der Kaskade teil und HTML-Präsentationsattribute sind nicht Teil der Kaskade.

### At-Regeln

CSS [At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules) die andere Entitäten als Deklarationen enthalten, wie eine {{ cssxref("@font-face")}} Regel, die _Deskriptoren_ enthält, nehmen nicht an der Kaskade teil.

Größtenteils nehmen die in At-Regeln definierten Eigenschaften und Deskriptoren nicht an der Kaskade teil. Nur At-Regeln als Ganzes nehmen an der Kaskade teil. Beispielsweise werden innerhalb einer `@font-face` Regel Font-Namen durch [`font-family`](/de/docs/Web/CSS/Reference/At-rules/@font-face/font-family) Deskriptoren identifiziert. Wenn mehrere `@font-face` Regeln mit demselben Deskriptor definiert sind, wird nur die passendste `@font-face` als Ganzes berücksichtigt. Wenn mehr als eine identisch passend ist, werden die gesamten `@font-face` Deklarationen mithilfe der Schritte 1, 2 und 4 des Algorithmus miteinander verglichen (es gibt keine Spezifität bei At-Regeln).

Während die in den meisten At-Regeln enthaltenen Deklarationen — wie die in {{cssxref("@media")}}, {{cssxref("@document")}}, oder {{cssxref("@supports")}} — an der Kaskade teilnehmen, kann die At-Regel einen kompletten Selektor irrelev,ant machen, wie wir beim Druckstil im [einfachen Beispiel](#einfaches_beispiel) gesehen haben.

Deklarationen in {{cssxref("@keyframes")}} nehmen nicht an der Kaskade teil. Genau wie bei `@font-face` wird nur das `@keyframes` als Ganzes durch den Kaskadenalgorithmus ausgewählt. Die [Vorrangreihenfolge der Animation wird unten beschrieben](#css-animationen_und_die_kaskade).

Wenn es um {{cssxref("@import")}} geht, nimmt das `@import` selbst nicht an der Kaskade teil, aber alle importierten Stile tun es. Wenn das `@import` eine [benannte oder anonyme Schicht](/de/docs/Web/CSS/Reference/At-rules/@layer) definiert, werden die Inhalte des importierten Stylesheets in die spezifizierte Schicht eingeordnet. Alle anderen mit `@import` importierten CSS werden als die zuletzt deklarierten Schicht behandelt. Dies wurde oben diskutiert.

Schließlich befolgt {{cssxref("@charset")}} spezifische Algorithmen und wird nicht vom Kaskadenalgorithmus beeinflusst.

### Präsentationsattribute

Präsentationsattribute sind Attribute im Quelldokument, die das Styling beeinflussen können. Beispielsweise setzt das veraltete `align`-Attribut die Ausrichtung auf mehrere HTML-Elemente und das `fill`-Attribut definiert die Farbe, die zum Malen von SVG-Formen und Text verwendet wird, und definiert den Endzustand für SVG-Animationen. Während es sich um Autorenstile handelt, nehmen Präsentationsattribute nicht an der Kaskade teil.

Wenn das HTML-Präsentationsattribut vom Benutzeragenten unterstützt wird, werden gültige Präsentationsattribute, die in HTML und SVG enthalten sind, wie die [`align`](/de/docs/Web/HTML/Reference/Elements/img#align) oder [`fill`](/de/docs/Web/SVG/Reference/Attribute/fill) Attribute, in die entsprechenden CSS-Regeln (alle SVG-Präsentationsattribute werden als CSS-Eigenschaften unterstützt) übersetzt und in das Autorenstylesheet eingefügt, bevor andere Stile mit einer Spezifität von `0` deklariert sind.

Präsentationsattribute können nicht als `!important` deklariert werden.

## CSS-Animationen und die Kaskade

[CSS-Animationen](/de/docs/Web/CSS/Guides/Animations), die {{cssxref("@keyframes")}} At-Regeln verwenden, definieren Animationen zwischen Zuständen. `@keyframes` kaskadieren nicht, was bedeutet, dass zu einem gegebenen Zeitpunkt CSS Werte aus nur einem einzigen Satz von `@keyframes` nimmt und nie mehrere mischt. Wenn mehrere Sätze von `@keyframes` mit demselben Animationsnamen definiert sind, wird der zuletzt definierte Satz im Ursprung und in der Schicht mit dem größten Vorrang verwendet. Andere `@keyframes` werden ignoriert, selbst wenn sie unterschiedliche Eigenschaften animieren.

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

In diesem Beispiel gibt es drei separate Animationsdeklarationen mit dem Namen `repeatedName`. Wenn `animation: infinite 5s alternate repeatedName` auf den Absatz angewendet wird, wird nur eine Animation angewendet: Die Keyframe-Animation, die im nicht geschichteten CSS definiert ist, hat Vorrang vor den geschichteten Keyframe-Animationsdeklarationen basierend auf der Vorrangreihenfolge von Ursprung und Schicht. In diesem Beispiel wird nur die Schriftgröße des Elements animiert.

> [!NOTE]
> Es gibt keine wichtigen Animationen, da Eigenschaftsdeklarationen in einem {{cssxref('@keyframes')}} Block, die `!important` als Teil des Wertes enthalten, ignoriert werden.

## Zurücksetzen von Stilen

Nachdem Ihr Inhalt die Stile verändert hat, kann er sich in einer Situation befinden, in der er sie in einen bekannten Zustand zurücksetzen muss. Dies kann in Fällen von Animationen, Themenänderungen usw. passieren. Die CSS-Eigenschaft {{cssxref("all")}} ermöglicht es Ihnen, (fast) alles in CSS schnell in einen bekannten Zustand zurückzusetzen.

`all` ermöglicht es Ihnen, sofort alle Eigenschaften auf einen beliebigen ihrer Anfangszustände, den vom vorherigen Level der Kaskade geerbten Zustand, einen spezifischen Ursprung (das Benutzeragentenstylesheet, das Autorenstylesheet oder das Benutzerstylesheet) zurückzusetzen, oder sogar die Werte der Eigenschaften vollständig zu löschen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
- [Lernen: Konflikte handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- [At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- Werte: [initial](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [computed](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [used](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) und [actual](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
