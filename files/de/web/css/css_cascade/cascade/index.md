---
title: Einführung in die CSS-Kaskade
short-title: Introduction
slug: Web/CSS/CSS_cascade/Cascade
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **Kaskade** ist ein Algorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte aus verschiedenen Quellen kombinieren. Die Kaskade definiert den Ursprung und die Ebene, die Vorrang hat, wenn Deklarationen in mehr als einem [Ursprung](#ursprungstypen), einer [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) oder einem {{CSSxRef("@scope")}}-Block einen Wert für eine Eigenschaft eines Elements festlegen.

Die Kaskade ist der Kern von CSS, wie der Name betont: _**Cascading**_ Style Sheets. Wenn ein [Selektor](/de/docs/Web/CSS/CSS_selectors) mit einem Element übereinstimmt, wird der Eigenschaftswert vom Ursprung mit der höchsten Priorität angewendet, selbst wenn der Selektor von einem Ursprung mit niedrigerer Priorität oder Ebene eine höhere [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufweist.

Dieser Artikel erklärt, was die Kaskade ist und in welcher Reihenfolge {{Glossary("CSS", "CSS")}}-[Deklarationen](/de/docs/Web/API/CSSStyleDeclaration) kaskadieren und behandelt Kaskadenschichten und Ursprungstypen. Das Verstehen der Ursprungsvorrangigkeit ist entscheidend, um die Kaskade zu verstehen.

## Ursprungstypen

Die Aufgabe des CSS-Kaskadenalgorithmus besteht darin, CSS-Deklarationen auszuwählen, um die korrekten Werte für CSS-Eigenschaften zu ermitteln. CSS-Deklarationen stammen aus verschiedenen Ursprungstypen: **[Benutzeragent-Stylesheets](#benutzeragent-stylesheets)**, **[Autor-Stylesheets](#autor-stylesheets)** und **[Benutzer-Stylesheets](#benutzer-stylesheets)**.

Obwohl Stylesheets aus diesen verschiedenen Ursprüngen stammen und sich in unterschiedlichen [Schichten](/de/docs/Web/CSS/Reference/At-rules/@layer) innerhalb dieser Ursprünge befinden können, überschneiden sie sich in Bezug auf ihren Standardscope. Um dies zu ermöglichen, definiert der Kaskadenalgorithmus, wie sie interagieren. Bevor wir uns mit den Interaktionen befassen, definieren wir in den nächsten Abschnitten einige wichtige Begriffe.

### Benutzeragent-Stylesheets

Benutzeragenten oder Browser haben grundlegende Stylesheets, die jedem Dokument Standardstile verleihen. Diese Stylesheets werden als **Benutzeragent-Stylesheets** bezeichnet. Die meisten Browser verwenden für diesen Zweck tatsächliche Stylesheets, während andere sie im Code simulieren. Das Endergebnis ist dasselbe.

Einige Browser erlauben es den Benutzern, das Benutzeragent-Stylesheet zu ändern, aber das ist selten und nicht kontrollierbar.

Obwohl einige Einschränkungen für Benutzeragent-Stylesheets in der HTML-Spezifikation festgelegt sind, haben die Browser viel Spielraum: Das bedeutet, dass es einige Unterschiede zwischen Browsern gibt. Um den Entwicklungsprozess zu vereinfachen, können Webentwickler ein CSS-Reset-Stylesheet wie [normalize.css](https://github.com/necolas/normalize.css) verwenden, das allgemeine Eigenschaftswerte für alle Browser auf einen bekannten Zustand setzt, bevor sie Änderungen vornehmen, die ihren spezifischen Anforderungen entsprechen.

Solange das Benutzeragent-Stylesheet kein [`!important`](/de/docs/Web/CSS/CSS_cascade/Specificity#the_!important_exception) neben einer Eigenschaft enthält, wodurch es "wichtig" wird, haben von Autor-Styles deklarierte Styles, einschließlich eines Reset-Stylesheets, Vorrang vor den Benutzeragent-Stilen, unabhängig von der Spezifität des zugehörigen Selektors.

### Autor-Stylesheets

**Autor-Stylesheets** sind die häufigste Art von Stylesheets; dies sind die Stile, die von Webentwicklern geschrieben wurden. Diese Stile können, wie oben erwähnt, Benutzeragent-Stile zurücksetzen und die Stile für das Design einer gegebenen Webseite oder Anwendung definieren. Der Autor oder Webentwickler definiert die Stile für das Dokument unter Verwendung eines oder mehrerer verlinkter oder importierter Stylesheets, {{HTMLElement('style')}}-Blöcken und inline definierten Stilen mit dem [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut. Diese Autorenstile definieren das Aussehen und das Gefühl der Website — ihr Thema.

### Benutzer-Stylesheets

In den meisten Browsern kann der Benutzer (oder Leser) der Website die Stile mithilfe eines benutzerdefinierten **Benutzer-Stylesheets** überschreiben, das darauf ausgelegt ist, die Erfahrung nach den Wünschen des Benutzers zu gestalten. Abhängig vom Benutzeragenten können [Benutzerstile konfiguriert werden](https://www.thoughtco.com/user-style-sheet-3469931) oder über Browsererweiterungen hinzugefügt werden.

### Kaskadenschichten

Die Kaskadenreihenfolge basiert auf dem Ursprungstyp. Die Kaskade innerhalb jedes Ursprungstyps basiert auf der Deklarationsreihenfolge der [Kaskadenschichten](/de/docs/Web/CSS/Reference/At-rules/@layer) innerhalb dieses Typs. Für alle Ursprünge - Benutzeragent, Autor oder Benutzer - können Stile innerhalb oder außerhalb benannter oder anonymer Schichten deklariert werden. Wenn Stile mit [`layer`, `layer()`](/de/docs/Web/CSS/Reference/At-rules/@import) oder [`@layer`](/de/docs/Web/CSS/Reference/At-rules/@layer) deklariert werden, werden sie in die angegebene benannte Schicht oder in eine anonyme Schicht platziert, falls kein Name angegeben ist. Stile, die außerhalb einer Schicht deklariert werden, werden als Teil einer anonymen zuletzt deklarierten Schicht behandelt.

Schauen wir uns die Kaskade des Ursprungstyps an, bevor wir uns mit Kaskadenschichten innerhalb jedes Ursprungstyps befassen.

## Kaskadenreihenfolge

Der Kaskadenalgorithmus bestimmt, wie der anzuwendende Wert für jede Eigenschaft für jedes Dokumentelement gefunden wird. Die folgenden Schritte gelten für den Kaskadenalgorithmus:

1. **Relevanz**: Zuerst filtert er alle Regeln aus den verschiedenen Quellen, um nur die Regeln zu behalten, die auf ein gegebenes Element zutreffen. Das bedeutet Regeln, deren Selektor mit dem gegebenen Element übereinstimmt und die Teil einer passenden `media`-At-Regel sind.
2. **Ursprung und Wichtigkeit**: Dann sortiert er diese Regeln nach ihrer Wichtigkeit, das heißt, ob sie von `!important` gefolgt werden oder nicht, und nach ihrem Ursprung. Lässt man die Schichten außer Acht, ist die Kaskadenreihenfolge wie folgt:

   | Vorrangordnung (niedrig bis hoch) | Ursprung                 | Wichtigkeit  |
   | --------------------------------- | ------------------------ | ------------ |
   | 1                                 | Benutzeragent (Browser)  | normal       |
   | 2                                 | Benutzer                 | normal       |
   | 3                                 | Autor (Entwickler)       | normal       |
   | 4                                 | CSS-Keyframe-Animationen |              |
   | 5                                 | Autor (Entwickler)       | `!important` |
   | 6                                 | Benutzer                 | `!important` |
   | 7                                 | Benutzeragent (Browser)  | `!important` |
   | 8                                 | CSS-Übergänge            |              |

3. **Spezifität**: Bei Gleichheit mit einem Ursprung wird die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) einer Regel herangezogen, um einen Wert zu wählen. Die Spezifität der Selektoren wird verglichen und die Deklaration mit der höchsten Spezifität gewinnt.
4. **Scoping-Nähe**: Wenn zwei Selektoren in der Ursprungsschicht mit Vorrang die gleiche Spezifität aufweisen, gewinnt der Eigenschaftswert innerhalb von Scoped-Regeln mit der geringsten Anzahl von Schritten in der DOM-Hierarchie zur Ursprung. Details und ein Beispiel finden Sie unter [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved).
5. **Erscheinungsreihenfolge**: Im Ursprung mit Vorrang, wenn es konkurrierende Werte für eine Eigenschaft gibt, die zu Stilblöcken gehören, die Selektoren mit gleicher Spezifität und Scoping-Nähe haben, wird die letzte Deklaration in der Stilreihenfolge verwendet.

Die Kaskade ist in aufsteigender Reihenfolge, was bedeutet:

- Animationen haben Vorrang vor normalen Werten, egal ob sie in Benutzer-, Autor- oder Benutzeragent-Stilen deklariert wurden.
- Wichtige Werte haben Vorrang vor Animationen, egal ob sie in Benutzer-, Autor- oder Benutzeragent-Stilen deklariert wurden.
- Übergänge haben Vorrang vor wichtigen Werten.

> [!NOTE]
> **Übergänge und Animationen**
>
> Eigenschaftswerte, die durch Animationen mittels {{cssxref('@keyframes')}} gesetzt werden, sind wichtiger als alle normalen Stile (solche, bei denen kein [`!important`](/de/docs/Web/CSS/CSS_cascade/Specificity#the_!important_exception) gesetzt ist).
>
> Eigenschaftswerte, die in einem {{cssxref('transition')}} gesetzt werden, haben Vorrang vor allen anderen gesetzten Werten, sogar denen mit `!important`.

Der Kaskadenalgorithmus wird _vor_ dem Spezifizierungsalgorithmus angewendet. Das bedeutet, wenn `:root p { color: red;}` im Benutzer-Stylesheet (Reihe 2) deklariert ist und ein weniger spezifisches `p {color: blue;}` im Autor-Stylesheet (Reihe 3), werden die Absätze blau sein.

## Einfaches Beispiel

Bevor wir uns eingehender damit befassen, wie Kaskadenschichten die Kaskade beeinflussen, schauen wir uns ein Beispiel an, das mehrere Quellen von CSS über die verschiedenen Ursprünge hinweg umfasst, und durchlaufen die Schritte des Kaskadenalgorithmus:

Hier haben wir ein Benutzeragent-Stylesheet, zwei Autor-Stylesheets und ein Benutzer-Stylesheet, ohne eingebettete Stile im HTML:

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

In diesem Fall sollten die Deklarationen innerhalb der Regeln `li` und `.specific` angewendet werden.

Noch einmal, es gibt fünf Schritte im Kaskadenalgorithmus, in Reihenfolge:

1. Relevanz
2. Ursprung und Wichtigkeit
3. Spezifität
4. Scoping-Nähe
5. Erscheinungsreihenfolge

Das `1px` gilt für Printmedien. Aufgrund fehlender _Relevanz_ basierend auf seinem Medientyp wird es nicht berücksichtigt.

Keine Deklaration ist als `!important` markiert, daher ist die Vorrangordnung Autor-Stylesheets über Benutzer-Stylesheets über Benutzeragent-Stylesheet. Basierend auf _Ursprung und Wichtigkeit_ werden das `1em` aus dem Benutzer-Stylesheet und das `10px` aus dem Benutzeragent-Stylesheet nicht berücksichtigt.

Beachten Sie, dass der Benutzerstil auf `.specific` von `1em` zwar eine höhere Spezifität hat, es jedoch eine normale Deklaration in einem Benutzer-Stylesheet ist. Daher hat es eine niedrigere Vorrang als alle Autorstile und wird durch den Schritt Ursprung und Wichtigkeit des Algorithmus entfernt, bevor die Spezifizität überhaupt ins Spiel kommt.

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

Die letzte, das `5px`, ist Teil einer Kaskadenschicht. Normale Deklarationen in Schichten haben niedrigere Vorrang als normale Stile in der gleichen Ursprungstype, die nicht in einer Schicht sind. Auch dies wird durch Schritt 2 des Algorithmus, _Ursprung und Wichtigkeit_, entfernt.

Dies lässt das `0` und das `3px`, die beide denselben Selektor haben und daher dieselbe _Spezifität_ aufweisen. Keiner von ihnen befindet sich innerhalb eines `@scope`-Blocks, daher spielt die Scoping-Nähe in diesem Beispiel ebenfalls keine Rolle.

Wir betrachten dann die _Erscheinungsreihenfolge_. Die zweite, die letzte der beiden nicht in Schichten eingeordneten Autorenstile, gewinnt.

```css
margin-left: 3px;
```

> [!NOTE]
> Die Deklaration, die im Benutzer-CSS definiert ist, wird, obwohl sie möglicherweise eine größere Spezifität hat, nicht gewählt, da der Kaskadenalgorithmus zuvor angewendet wird, bevor der Algorithmus _Spezifität_. Die in einer Kaskadenschicht definierte Deklaration, auch wenn sie später im Code kommt, wird auch nicht vorrangig behandelt, da normale Stile in Kaskadenschichten weniger Vorrang haben als normale ungeschichtete Stile. Die _Erscheinungsreihenfolge_ ist nur von Bedeutung, wenn sowohl Ursprung, Wichtigkeit als auch Spezifität gleich sind.

## Autorstile: Inline-Stile, Schichten und Vorrang

Die [Tabelle in Kaskadenreihenfolge](#kaskadenreihenfolge) bot einen Überblick über die Vorrangordnung. Die Tabelle fasste die Benutzeragent-, Benutzer- und Autorenstile von Ursprungstypen in zwei Zeilen zusammen mit "Ursprungstyp - normal" und "Ursprungstyp - !important". Der Vorrang innerhalb jedes Ursprungstyps ist nuancierter. Stile können innerhalb ihrer Ursprungstype in Schichten enthalten sein, und bei Autorenstilen gibt es auch die Frage, wo Inline-Stile in der Kaskadenreihenfolge stehen.

Die Reihenfolge, in der Schichten deklariert werden, ist wichtig, um den Vorrang zu bestimmen. Normale Stile in einer Schicht haben Vorrang vor Stilen, die in früheren Schichten deklariert wurden; normale Stile, die außerhalb einer Schicht deklariert wurden, haben Vorrang vor normalen geschichteten Stilen unabhängig von der Spezifität.

In diesem Beispiel hat der Autor das {{CSSXref('@import')}} verwendet, um fünf externe Stylesheets innerhalb eines {{HTMLElement('style')}}-Informationselements zu importieren.

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

Im obigen CSS-Codeblock wurden drei Kaskadenschichten mit den Namen "A", "B" und "C" erstellt, in dieser Reihenfolge. Drei Stylesheets wurden direkt in Schichten importiert, und zwei wurden ohne Erstellung oder Zuweisung zu einer Schicht importiert.
Die "Alle ungeschichteten Stile" in der folgenden Liste (Vorrang normaler Autorenstile - Reihenfolge 4) umfasst Stile aus diesen beiden Stylesheets und den zusätzlichen ungeschichteten CSS-Stilblöcken. Darüber hinaus gibt es zwei Inline-Stile, eine normale `line-height`-Deklaration und eine wichtige `text-decoration`-Deklaration:

| Vorrangordnung (niedrig bis hoch) | Autorenstil                | Wichtigkeit  |
| --------------------------------- | -------------------------- | ------------ |
| 1                                 | A - erste Schicht          | normal       |
| 2                                 | B - zweite Schicht         | normal       |
| 3                                 | C - letzte Schicht         | normal       |
| 4                                 | Alle ungeschichteten Stile | normal       |
| 5                                 | inline `style`             | normal       |
| 6                                 | Animationen                |              |
| 7                                 | Alle ungeschichteten Stile | `!important` |
| 8                                 | C - letzte Schicht         | `!important` |
| 9                                 | B - zweite Schicht         | `!important` |
| 10                                | A - erste Schicht          | `!important` |
| 11                                | inline `style`             | `!important` |
| 12                                | Transitionen               |              |

In allen Ursprungstypen haben normale Stile, die in Schichten enthalten sind, den niedrigsten Vorrang. In unserem Beispiel haben die normalen Stile, die mit der zuerst deklarierten Schicht (A) assoziiert sind, einen niedrigeren Vorrang als normale Stile in der zweiten deklarierten Schicht (B), die wiederum einen niedrigeren Vorrang als normale Stile in der dritten deklarierten Schicht (C) haben. Diese geschichteten Stile haben einen niedrigeren Vorrang als alle normalen ungeschichteten Stile, die normale Stile aus `unlayeredStyles.css`, `moreUnlayeredStyles.css` und die `color` von `p` in dem `<style>` selbst umfassen.

Wenn irgendwelche geschichteten Stile in A, B oder C Selektoren mit höherer Spezifität haben, die auf ein Element zutreffen, ähnlich wie `:root body p { color: black; }`, spielt das keine Rolle. Diese Deklarationen werden aufgrund des _Ursprungs_ nicht berücksichtigt; normale geschichtete Stile haben weniger Vorrang als normale ungeschichtete Stile. Wenn jedoch der spezifischere Selektor `:root body p { color: black; }` in `unlayeredStyles.css` gefunden wird, und sowohl die _Wichtigkeit_ als auch der _Ursprung_ den gleichen Vorrang haben, bedeutet _Spezifität_, dass die spezifischere, schwarze Deklaration gewinnen würde.

Die Schichtvorrangfolge ist für Stile, die als `!important` deklariert sind, umgekehrt. Wichtig Deklarationen in einer Schicht haben Vorrang vor wichtigen Deklarationen, die außerhalb einer Schicht deklariert sind. Wichtig Deklarationen, die in der ersten Schicht (A) gefunden werden, haben Vorrang vor wichtigen Deklarationen, die in Schicht B deklariert sind, die wiederum vor wichtigen Deklarationen in Schicht C Vorrang haben, die wiederum Vorrang vor wichtigen Deklarationen außerhalb einer Schicht haben.

### Inline-Stile

Nur für Autorenstile relevant sind Inline-Stile, die mit dem `style`-Attribut deklariert werden. Normale Inline-Stile haben Vorrang vor allen anderen normalen Autorenstilen, unabhängig von der Spezifität des Selektors. Wenn `line-height: 2;` in einem `:root body p`-Selektorblock in einem der fünf importierten Stylesheets deklariert wurde, würde die Zeilenhöhe immer noch `1.6` betragen. Normale Inline-Stile haben keinen Vorrang vor animierten oder übergangenen Eigenschaften.

Wichtige Inline-Stile haben Vorrang vor allen anderen Autorenstilen, unabhängig davon, ob sie wichtig, inline oder geschichtet sind. Wichtige Inline-Stile haben auch Vorrang vor animierten Eigenschaften, aber nicht vor übergangenen Eigenschaften. Drei Dinge können einen wichtigen Inline-Stil außer Kraft setzen:

- Ein wichtiger Benutzerstil.
- Ein wichtiger Benutzeragent-Stil.
- Eine übergangene Eigenschaft.

### Wichtigkeit und Schichten

Die Ursprungstyp-Vorrangfolge ist für wichtige Stile umgekehrt. Wichtig Deklarationen, die außerhalb jeder Kaskadenschicht deklariert werden, haben weniger Vorrang als die in einer Schicht deklarierten wichtigen Deklarationen. Wichtige Deklarationen, die in frühen Schichten vorkommen, haben Vorrang vor später deklarierten wichtigen Deklarationen in nachfolgenden Kaskadenschichten.

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

Selbst wenn das Rot zuerst deklariert wird und einen weniger spezifischen Selektor hat, da ungeschichtetes CSS Vorrang vor geschichtetem CSS hat, wird der Absatz rot sein. Hätten wir einen Inline-Stil am Absatz, der ihn auf eine andere Farbe setzt, wie `<p style="color: black">`, würde der Absatz schwarz sein.

Wenn wir zu diesem CSS-Teil `!important` hinzufügen, wird die Vorrangfolge im Stylesheet umgekehrt:

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

Jetzt wird der Absatz blau sein. Das `!important` in der frühesten deklarierten Schicht hat Vorrang vor nachfolgenden Schichten und ungeschichteten wichtigen Deklarationen. Wenn der Inline-Stil `!important` enthielte, wie `<p style="color: black !important">`, wäre der Absatz erneut schwarz. Wichtigkeit von Inline-Stilen hat Vorrang vor allen anderen vom Autor deklarierten `!important`-Deklarationen, unabhängig von der Spezifität.

> [!NOTE]
> Das `!important`-Flag kehrt die Vorrangfolge von Kaskadenschichten um. Aus diesem Grund versuchen Sie, `!important` nicht zu verwenden, um externe Stile zu überschreiben. Stattdessen verwenden Sie {{cssxref("@import")}} zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Schichten zu importieren. Das Importieren von Stylesheets in eine Schicht als erste Deklaration in Ihrem CSS verringert deren Vorrang, und vom Autor definierte Schichten, die später in Ihrem CSS definiert werden, haben einen höheren Vorrang. Das `!important`-Flag sollte nur sparsam verwendet werden, falls überhaupt, um erforderliche Stile vor späteren Überschreibungen zu schützen, in der ersten deklarierten Schicht.

Stile, die gerade übergehen, haben Vorrang vor allen wichtigen Stilen, unabhängig davon, wer oder wie sie deklariert wurden.

## Vollständige Kaskadenreihenfolge

Jetzt, da wir ein besseres Verständnis von Ursprungstyp und Kaskadenschicht-Vorrang haben, erkennen wir, dass die Tabelle in der [Kaskadenreihenfolge](#kaskadenreihenfolge) genauer durch die folgende Tabelle dargestellt werden könnte:

<table>
<thead>
  <tr><th>Vorrangordnung <br/>(niedrig bis hoch)</th><th>Stilherkunft</th><th>Wichtigkeit</th></tr>
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
  <tr><td>8</td><td>Transitionen</td><td></td></tr>
</tbody>
</table>

## Welche CSS-Entitäten nehmen an der Kaskade teil

Nur CSS-Eigenschafts/Werte-Paar-Deklarationen nehmen an der Kaskade teil. CSS-At-Rule-Deskriptoren nehmen nicht an der Kaskade teil und HTML-Präsentationsattribute sind nicht Teil der Kaskade.

### At-rules

CSS-[At-rules](/de/docs/Web/CSS/CSS_syntax/At-rules), die andere Einheiten als Deklarationen enthalten, wie z.B. eine {{ cssxref("@font-face")}}-Regel, die _Deskriptoren_ enthält, nehmen nicht an der Kaskade teil.

Im Allgemeinen nehmen die in At-rules definierten Eigenschaften und Deskriptoren nicht an der Kaskade teil. Nur At-rules als Ganzes nehmen an der Kaskade teil. Zum Beispiel, innerhalb einer `@font-face`-Regel, werden Schriftnamen durch [`font-family`](/de/docs/Web/CSS/Reference/At-rules/@font-face/font-family) Deskriptoren identifiziert. Wenn mehrere `@font-face`-Regeln mit demselben Deskriptor definiert sind, wird nur die am besten geeignete `@font-face` als Ganzes berücksichtigt. Wenn mehrere gleich geeignet sind, werden die gesamten `@font-face`-Deklarationen mithilfe der Schritte 1, 2 und 4 des Algorithmus verglichen (es gibt keine Spezifizität, wenn es um At-rules geht).

Während die in den meisten At-rules enthaltenen Deklarationen — wie z.B. die in {{cssxref("@media")}}, {{cssxref("@document")}} oder {{cssxref("@supports")}} — an der Kaskade teilnehmen, kann die At-rule einen gesamten Selektor als nicht relevant machen, wie wir es im [einfachen Beispiel](#einfaches_beispiel) mit dem Druckstil gesehen haben.

Deklarationen in {{cssxref("@keyframes")}} nehmen nicht an der Kaskade teil. Ebenso wie bei `@font-face` wird nur die `@keyframes` als Ganzes durch den Kaskadenalgorithmus ausgewählt. Die [Vorrangordnung der Animation wird unten beschrieben](#css-animationen_und_die_kaskade).

Bei {{cssxref("@import")}} nimmt das `@import` selbst nicht an der Kaskade teil, aber alle importierten Stile tun dies. Wenn das `@import` eine [benannte oder anonyme Schicht](/de/docs/Web/CSS/Reference/At-rules/@layer) festlegt, werden die Inhalte des importierten Stylesheets in die angegebene Schicht gestellt. Alle anderen mit `@import` importierten CSS werden als letzte deklarierte Schicht behandelt. Dies wurde oben besprochen.

Schließlich befolgt {{cssxref("@charset")}} spezifische Algorithmen und wird nicht durch den Kaskadenalgorithmus beeinflusst.

### Präsentationsattribute

Präsentationsattribute sind Attribute im Quelldokument, die das Styling beeinflussen können. Zum Beispiel setzt das veraltete `align`-Attribut die Ausrichtung an mehreren HTML-Elementen und das `fill`-Attribut definiert die Farbe, die zum Zeichnen von SVG-Formen und -Text verwendet wird, und definiert den Endzustand für SVG-Animationen. Obwohl es sich um Autorenstile handelt, nehmen Präsentationsattribute nicht an der Kaskade teil.

Wenn das HTML-Präsentationsattribut vom Benutzeragent unterstützt wird, werden gültige Präsentationsattribute in HTML und SVG, wie die [`align`](/de/docs/Web/HTML/Reference/Elements/img#align)- oder [`fill`](/de/docs/Web/SVG/Reference/Attribute/fill)-Attribute, in die entsprechenden CSS-Regeln übersetzt (alle SVG-Präsentationsattribute werden als CSS-Eigenschaften unterstützt) und vor allen anderen Stilen in das Autoren-Stylesheet mit einer Spezifität von `0` eingefügt.

Präsentationsattribute können nicht als `!important` deklariert werden.

## CSS-Animationen und die Kaskade

[CSS-Animationen](/de/docs/Web/CSS/CSS_animations), die {{cssxref("@keyframes")}}-At-Rules verwenden, definieren Animationen zwischen Zuständen. `@keyframes` kaskadieren nicht, was bedeutet, dass CSS zu einem bestimmten Zeitpunkt nur Werte aus einem einzigen Satz von `@keyframes` übernimmt und niemals mehrere mischt. Wenn mehrere Sätze von `@keyframes` mit demselben Animationsnamen definiert sind, wird der zuletzt definierte Satz im Ursprung und der Schicht mit dem größten Vorrang verwendet. Andere `@keyframes` werden ignoriert, selbst wenn sie andere Eigenschaften animieren.

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

In diesem Beispiel gibt es drei separate Animationsdeklarationen mit dem Namen `repeatedName`. Wenn `animation: infinite 5s alternate repeatedName` auf den Absatz angewendet wird, wird nur eine Animation angewendet: Die Keyframe-Animation, die im ungeschichteten CSS definiert ist, hat Vorrang vor den Keyframe-Animationsdeklarationen in Schichten basierend auf Ursprungs- und Schichtvorrangfolge. In diesem Beispiel wird nur die Schriftgröße des Elements animiert.

> [!NOTE]
> Es gibt keine wichtigen Animationen, da Eigenschaftsdeklarationen in einem {{cssxref('@keyframes')}}-Block, die `!important` als Teil des Wertes enthalten, ignoriert werden.

## Zurücksetzen von Stilen

Nachdem Ihr Inhalt die Stile fertiggestellt hat, kann es vorkommen, dass es sie in einen bekannten Zustand zurücksetzen muss. Dies kann in Fällen von Animationen, Themenwechseln usw. passieren. Die CSS-Eigenschaft {{cssxref("all")}} lässt Sie schnell (fast) alles in CSS auf einen bekannten Zustand zurücksetzen.

`all` lässt Sie wählen, sofort alle Eigenschaften auf einen ihrer ursprünglichen (Standard-)Zustände zurückzusetzen, den Zustand, der von der vorherigen Ebene der Kaskade geerbt wurde, einen bestimmten Ursprung (das Benutzeragent-Stylesheet, das Autoren-Stylesheet, oder das Benutzer-Stylesheet), oder sogar die Werte der Eigenschaften vollständig zu löschen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rules)
- [Ursprünglicher](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechneter](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [verwendeter](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value), und [tatsächlicher](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Wert
