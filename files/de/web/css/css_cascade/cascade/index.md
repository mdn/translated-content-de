---
title: Einführung in den CSS-Cascade
slug: Web/CSS/CSS_cascade/Cascade
l10n:
  sourceCommit: dfd18cb9ee7c6195d07cd937d206b53246f7507e
---

{{CSSRef}}

Der **Cascade** ist ein Algorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte aus verschiedenen Quellen kombinieren. Der Cascade definiert, welche Quelle und Ebene Vorrang hat, wenn Deklarationen aus mehr als einem [Ursprungstyp](#ursprungstypen), [Cascade-Ebene](/de/docs/Web/CSS/@layer) oder {{CSSxRef("@scope")}} Block einen Wert für eine Eigenschaft auf einem Element setzen.

Der Cascade steht im Kern von CSS, was durch den Namen betont wird: _**Cascading**_ Style Sheets. Wenn ein [Selektor](/de/docs/Web/CSS/CSS_selectors) mit einem Element übereinstimmt, wird der Eigenschaftswert aus dem Ursprung mit der höchsten Priorität angewendet, selbst wenn der Selektor aus einem Ursprung oder einer Ebene mit niedrigerer Priorität eine höhere [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) hat.

Dieser Artikel erklärt, was der Cascade ist und in welcher Reihenfolge {{Glossary("CSS", "CSS")}}-[Deklarationen](/de/docs/Web/API/CSSStyleDeclaration) kaskadieren und behandelt Cascade-Ebenen und Ursprungstyp. Das Verständnis der Ursprungshierarchie ist entscheidend für das Verständnis des Cascade.

## Ursprungstypen

Die Aufgabe des CSS-Cascade-Algorithmus besteht darin, CSS-Deklarationen auszuwählen, um die korrekten Werte für CSS-Eigenschaften zu bestimmen. CSS-Deklarationen stammen aus verschiedenen Ursprungstypen: **[Benutzeragenten-Stylesheets](#benutzeragenten-stylesheets)**, **[Autoren-Stylesheets](#autoren-stylesheets)** und **[Benutzerstylesheets](#benutzerstylesheets)**.

Obwohl Stylesheets aus diesen verschiedenen Ursprüngen stammen und in jeder dieser Ursprünge in verschiedenen [Ebenen](/de/docs/Web/CSS/@layer) sein können, überschneiden sie sich in Bezug auf ihren Standardscope; Damit dies funktioniert, definiert der Cascade-Algorithmus, wie sie interagieren. Bevor wir uns mit den Interaktionen befassen, definieren wir in den nächsten Abschnitten einige Schlüsselbegriffe.

### Benutzeragenten-Stylesheets

Benutzeragenten oder Browser haben grundlegende Stylesheets, die Standardstile für jedes Dokument bereitstellen. Diese Stylesheets werden **Benutzeragenten-Stylesheets** genannt. Die meisten Browser verwenden dafür tatsächliche Stylesheets, während andere sie im Code simulieren. Das Endergebnis ist dasselbe.

Einige Browser erlauben es Benutzern, das Benutzeragenten-Stylesheet zu ändern, aber dies ist selten und kann nicht kontrolliert werden.

Obwohl einige Einschränkungen für Benutzeragenten-Stylesheets durch die HTML-Spezifikation festgelegt sind, haben Browser viel Spielraum: das bedeutet, dass es zwischen Browsern einige Unterschiede gibt. Um den Entwicklungsprozess zu vereinfachen, verwenden Webentwickler möglicherweise ein CSS-Reset-Stylesheet, wie z.B. [normalize.css](https://github.com/necolas/normalize.css), das bekannte Eigenschaftswerte auf einen bekannten Zustand für alle Browser setzt, bevor Anpassungen vorgenommen werden, um den spezifischen Bedürfnissen zu entsprechen.

Es sei denn, das Benutzeragenten-Stylesheet enthält ein [`!important`](/de/docs/Web/CSS/CSS_cascade/Specificity#the_!important_exception) neben einer Eigenschaft, das sie "wichtig" macht, haben von Autoren deklarierte Stile, einschließlich eines Reset-Stylesheets, Vorrang vor den Benutzeragenten-Stilen, unabhängig von der Spezifität des zugehörigen Selektors.

### Autoren-Stylesheets

**Autoren-Stylesheets** sind die häufigste Art von Stylesheet; dies sind die von Webentwicklern geschriebenen Stile. Diese Stile können Benutzeragenten-Stile zurücksetzen, wie oben erwähnt, und definieren die Stile für das Design einer bestimmten Webseite oder Anwendung. Der Autor oder Webentwickler definiert die Stile für das Dokument mithilfe eines oder mehrerer verlinkter oder importierter Stylesheets, {{HTMLElement('style')}}-Blöcken und Inline-Stilen, die mit dem [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribut definiert sind. Diese Autoren-Stile definieren das Aussehen und Verhalten der Website — ihr Thema.

### Benutzerstylesheets

In den meisten Browsern kann der Benutzer (oder Leser) der Website die Stile mit einem benutzerdefinierten **Benutzerstylesheet** überschreiben, das entwickelt wurde, um das Erlebnis an die Wünsche des Benutzers anzupassen. Abhängig vom Benutzeragenten können [Benutzerstile konfiguriert werden](https://www.thoughtco.com/user-style-sheet-3469931) direkt oder über Browser-Erweiterungen hinzugefügt werden.

### Cascade-Ebenen

Die Reihenfolge der Kaskadierung basiert auf dem Ursprungstyp. Die Kaskadierung innerhalb jedes Ursprungstyps basiert auf der Deklarationsreihenfolge der [Cascade-Ebenen](/de/docs/Web/CSS/@layer) innerhalb dieses Typs. Für alle Ursprünge - Benutzeragent, Autor oder Benutzer - können Stile innerhalb oder außerhalb benannter oder anonymer Ebenen deklariert werden. Wenn sie mit [`layer`, `layer()`](/de/docs/Web/CSS/@import) oder [`@layer`](/de/docs/Web/CSS/@layer) deklariert werden, werden Stile in die angegebene benannte Ebene oder in eine anonyme Ebene eingesetzt, wenn kein Name angegeben ist. Stile, die außerhalb einer Ebene deklariert werden, werden als Teil einer zuletzt deklarierten anonymen Ebene behandelt.

Sehen wir uns die Kaskadierung des Ursprungstyps an, bevor wir uns mit den Kaskadenebenen innerhalb jedes Ursprungstyps befassen.

## Kaskadierungsreihenfolge

Der Kaskadierungsalgorithmus bestimmt, wie der Wert für jede Eigenschaft für jedes Dokumentelement angewendet wird. Die folgenden Schritte gelten für den Kaskadierungsalgorithmus:

1. **Relevanz**: Zunächst werden alle Regeln aus den verschiedenen Quellen gefiltert, um nur die Regeln zu behalten, die auf ein gegebenes Element angewendet werden. Das bedeutet Regeln, deren Selektor mit dem gegebenen Element übereinstimmt und die Teil einer angemessenen `media`-at-rule sind.
2. **Ursprung und Wichtigkeit**: Dann werden diese Regeln nach ihrer Wichtigkeit sortiert, das heißt, ob sie von `!important` gefolgt werden oder nicht, und nach ihrem Ursprung. Ignoriert man zunächst die Ebenen, ist die Kaskadenreihenfolge wie folgt:

   | Prioritätsreihenfolge (niedrig bis hoch) | Ursprung                | Wichtigkeit  |
   | ---------------------------------------- | ----------------------- | ------------ |
   | 1                                        | Benutzeragent (Browser) | normal       |
   | 2                                        | Benutzer                | normal       |
   | 3                                        | Autor (Entwickler)      | normal       |
   | 4                                        | CSS-Animationssequenzen |              |
   | 5                                        | Autor (Entwickler)      | `!important` |
   | 6                                        | Benutzer                | `!important` |
   | 7                                        | Benutzeragent (Browser) | `!important` |
   | 8                                        | CSS-Übergänge           |              |

3. **Spezifität**: Bei Gleichheit mit einem Ursprung wird die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) einer Regel betrachtet, um einen Wert auszuwählen. Die Spezifität der Selektoren wird verglichen und die Deklaration mit der höchsten Spezifität gewinnt.
4. **Nähe des Scopes**: Wenn zwei Selektoren in der Ursprungsebene mit Vorrang dieselbe Spezifität haben, gewinnt der Eigenschaftswert innerhalb der gescopteten Regeln mit der kleinsten Anzahl von Sprüngen in der DOM-Hierarchie zur Scoperoot. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für mehr Details und ein Beispiel.
5. **Erscheinungsreihenfolge**: Im Ursprung mit Vorrang, wenn es konkurrierende Werte für eine Eigenschaft gibt, die in Style-Blöcken mit Selektoren mit gleicher Spezifität und Nähe des Scopes übereinstimmen, wird die letzte Deklaration in der Stylesheet-Reihenfolge angewendet.

Die Kaskade ist aufsteigend, das heißt:

- Animationen haben Vorrang vor normalen Werten, egal ob sie in Benutzer-, Autoren- oder Benutzeragenten-Stilen deklariert sind.
- Wichtige Werte haben Vorrang vor Animationen, egal ob sie in Benutzer-, Autoren- oder Benutzeragenten-Stilen deklariert sind.
- Übergänge haben Vorrang vor wichtigen Werten.

> **Hinweis:** **Übergänge und Animationen**
>
> Eigenschaftswerte, die durch Animationen mit {{cssxref('@keyframes')}} gesetzt werden, sind wichtiger als alle normalen Styles (diejenigen ohne [`!important`](/de/docs/Web/CSS/CSS_cascade/Specificity#the_!important_exception) gesetzt).
>
> Eigenschaftswerte, die in einem {{cssxref('transition')}} gesetzt werden, haben Vorrang vor allen anderen gesetzten Werten, auch denen, die mit `!important` markiert sind.

Der Kaskadenalgorithmus wird _vor_ dem Spezifitäts-Algorithmus angewendet, was bedeutet, dass wenn `:root p { color: red;}` in einem Benutzerstylesheet (Reihe 2) deklariert ist und ein weniger spezifisches `p {color: blue;}` im Autorenstylesheet (Reihe 3), werden die Absätze blau.

## Einfaches Beispiel

Bevor wir einen genaueren Blick darauf werfen, wie sich Cascade-Ebenen auf die Kaskade auswirken, schauen wir uns ein Beispiel an, das mehrere Quellen von CSS aus verschiedenen Ursprüngen einbezieht und die Schritte des Cascade-Algorithmus durchgeht:

Hier haben wir ein Benutzeragenten-Stylesheet, zwei Autoren-Stylesheets und ein Benutzer-Stylesheet, ohne Inline-Stile im HTML:

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

In diesem Fall sollten die Deklarationen innerhalb der `li`- und `.specific`-Regeln angewendet werden.

Insgesamt gibt es fünf Schritte im Kaskadenalgorithmus, in der Reihenfolge:

1. Relevanz
2. Ursprung und Wichtigkeit
3. Spezifität
4. Näher des Scopes
5. Erscheinungsreihenfolge

Der `1px` ist für Druckmedien. Aufgrund mangelnder _Relevanz_ basierend auf ihrem Medientyp wird es aus der Betrachtung entfernt.

Keine Deklaration ist als `!important` gekennzeichnet, daher ist die Prioritätsreihenfolge Autoren-Stylesheets über Benutzer-Stylesheets über Benutzeragenten-Stylesheet. Basiert auf _Ursprung und Wichtigkeit_, wird die `1em` aus dem Benutzer-Stylesheet sowie die `10px` aus dem Benutzeragenten-Stylesheet aus der Betrachtung entfernt.

Beachten Sie, dass selbst wenn der Benutzerstil in `.specific` von `1em` eine höhere Spezifität hat, er eine normale Deklaration in einem Benutzer-Stylesheet ist. Daher hat er eine niedrigere Priorität als alle Autorenstile und wird durch den Schritt Ursprung und Wichtigkeit des Algorithmus entfernt, bevor Spezifität überhaupt ins Spiel kommt.

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

Die letzte, die `5px`, ist Teil einer Cascade-Ebene. Normale Deklarationen in Ebenen haben eine geringere Priorität als normale Stile, die nicht in einer Ebene innerhalb desselben Ursprungstyps liegen. Dies wird auch durch Schritt 2 des Algorithmus, _Ursprung und Wichtigkeit_, entfernt.

Dies lässt die `0` und die `3px`, die beide denselben Selektor, daher dieselbe _Spezifität_, haben. Keiner von ihnen befindet sich innerhalb eines `@scope`-Blocks, daher spielt die Nähe des Scopes in diesem Beispiel auch keine Rolle.

Dann betrachten wir die _Erscheinungsreihenfolge_. Die zweite, die letzte der beiden ungefilterten Autorenstile, gewinnt.

```css
margin-left: 3px;
```

> [!NOTE]
> Die in den Benutzer-CSS definierte Deklaration, auch wenn sie eine höhere Spezifität aufweisen könnte, wird nicht ausgewählt, da der Kaskadenalgorithmus _Ursprung und Wichtigkeit_ vor dem _Spezifitäts_-Algorithmus angewandt wird. Die in einer Cascade-Ebene definierte Deklaration, auch wenn sie später im Code kommt, wird ebenfalls nicht den Vorrang übernehmen, da normale Stile in Cascade-Ebenen eine geringere Priorität haben als normale ungefilterte Stile. Die _Erscheinungsreihenfolge_ ist nur dann von Bedeutung, wenn sowohl Ursprung, Wichtigkeit als auch Spezifität gleich sind.

## Autorenstile: Inline-Stile, Ebenen und Priorität

Die [Tabelle in Kaskadierungsreihenfolge](#kaskadierungsreihenfolge) bietet einen Überblick über die Prioritätsreihenfolge. Die Tabelle fasste die Stile der Benutzeragenten-, Benutzer- und Autoren-Ursprungstypen in zwei Zeilen zusammen, mit "Ursprungstyp - normal" und "Ursprungstyp - !important". Die Priorität innerhalb jedes Ursprungstyps ist differenzierter. Stile können innerhalb von Ebenen innerhalb ihres Ursprungstyps enthalten sein, und bei Autorenstilen gibt es auch die Frage, wo Inline-Stile in der Kaskadenreihenfolge landen.

Die Reihenfolge, in der Ebenen deklariert werden, ist wichtig, um die Prioritäten zu bestimmen. Normale Stile innerhalb einer Ebene haben Vorrang vor Stilen, die in vorherigen Ebenen deklariert wurden; normale Stile, die außerhalb jeder Ebene deklariert werden, haben Vorrang vor normalen Stilen in Ebenen, ungeachtet der Spezifität.

In diesem Beispiel hat der Autor die `@import`-Regel von CSS verwendet, um fünf externe Stylesheets innerhalb eines `{{HTMLElement('style')}}`-Informationselements zu importieren.

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

Im CSS-Codeblock oben wurden drei Cascade-Ebenen mit den Namen "A", "B" und "C" erstellt, in dieser Reihenfolge. Drei Stylesheets wurden direkt in Ebenen importiert, und zwei wurden ohne Erstellen oder Zuweisung zu einer Ebene importiert.
Die "Alle ungefilterten Stile" in der folgenden Liste (normale Autor-Stil-Priorität - Ordnung 4) enthalten Stile aus diesen beiden Stylesheets und den zusätzlichen ungefilterten CSS-Style-Blöcken. Darüber hinaus gibt es zwei Inline-Stile, eine normale `line-height`-Deklaration und eine wichtige `text-decoration`-Deklaration:

| Prioritätsreihenfolge (niedrig bis hoch) | Autorenstil              | Wichtigkeit  |
| ---------------------------------------- | ------------------------ | ------------ |
| 1                                        | A - erste Ebene          | normal       |
| 2                                        | B - zweite Ebene         | normal       |
| 3                                        | C - letzte Ebene         | normal       |
| 4                                        | Alle ungefilterten Stile | normal       |
| 5                                        | Inline `style`           | normal       |
| 6                                        | Animationen              |              |
| 7                                        | Alle ungefilterten Stile | `!important` |
| 8                                        | C - letzte Ebene         | `!important` |
| 9                                        | B - zweite Ebene         | `!important` |
| 10                                       | A - erste Ebene          | `!important` |
| 11                                       | Inline `style`           | `!important` |
| 12                                       | Übergänge                |              |

Bei allen Ursprungstypen haben normale Stile, die in Ebenen enthalten sind, die geringste Priorität. In unserem Beispiel haben die normalen Stile, die mit der zuerst deklarierten Ebene (A) verknüpft sind, geringere Priorität als normale Stile in der zweitdeklarierten Ebene (B), die wiederum geringere Priorität haben als normale Stile in der dritte deklarierten Ebene (C). Diese geschichteten Stile haben eine geringere Priorität als alle normalen ungefilterten Stile, die normale Stile aus `unlayeredStyles.css`, `moreUnlayeredStyles.css` und die `color` von `p` im `<style>` selbst umfassen.

Wenn irgendwelche geschichteten Stile in A, B oder C Selektoren mit höherer Spezifität haben, die mit einem Element übereinstimmen, ähnlich wie `:root body p { color: black; }`, spielt das keine Rolle. Diese Deklarationen werden aufgrund des _Ursprungs entfernt; normale geschichtete Stile haben weniger Priorität als normale ungefilterte Stile. Wenn jedoch der spezifischere Selektor `:root body p { color: black; }` in `unlayeredStyles.css` gefunden wird, da sowohl \_Ursprung und Wichtigkeit_ die gleiche Priorität haben, würde _Spezifität_ bedeuten, dass die spezifischere, schwarze Deklaration gewinnt.

Die Reihenfolge der Ebenenpriorität ist für Stile, die als `!important` deklariert sind, umgekehrt. Wichtige Deklarationen, die in einer Ebene gefunden werden, haben Vorrang vor wichtigen Deklarationen, die außerhalb einer Ebene gefunden werden. Wichtige Deklarationen, die in der ersten Ebene (A) gefunden werden, haben Vorrang vor wichtigen Deklarationen, die in der Ebene B gefunden werden, die wiederum Vorrang haben vor wichtigen Deklarationen, die in der Ebene C gefunden werden, die wiederum Vorrang haben vor wichtigen Deklarationen, die außerhalb einer Ebene gefunden werden.

### Inline-Stile

Nur relevant für Autorenstile sind Inline-Stile, die mit dem `style`-Attribut deklariert werden. Normale Inline-Stile haben Vorrang vor allen anderen normalen Autorenstilen, unabhängig von der Spezifität des Selektors. Wenn `line-height: 2;` in einem `:root body p`-Selektorblock in irgendeinem der fünf importierten Stylesheets deklariert wäre, würde die Zeilenhöhe immer noch `1.6` betragen. Normale Inline-Stile haben keinen Vorrang vor animierten oder übergangen Eigenschaften.

Wichtige Inline-Stile haben Vorrang vor allen anderen Autorenstilen, unabhängig davon, ob sie wichtig, inline oder geschichtet sind. Wichtige Inline-Stile haben auch Vorrang vor animierten Eigenschaften, jedoch nicht vor übergangene Eigenschaften. Drei Dinge können einen wichtigen Inline-Stil überschreiben:

- Ein wichtiger Benutzerstil.
- Ein wichtiger Benutzeragentenstil.
- Eine übergangene Eigenschaft.

### Wichtigkeit und Ebenen

Die Prioritätsreihenfolge des Ursprungstyps ist für wichtige Stile umgekehrt. Wichtige Stile, die außerhalb einer Kasakadenschicht deklariert sind, haben eine geringere Priorität als solche, die als Teil einer Ebene deklariert sind. Wichtige Stile, die früh in den Ebenen deklariert werden, haben Vorrang vor wichtigen Stilen, die in nachfolgenden Kasakadenschichten deklariert werden.

Betrachten Sie das folgende CSS:

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

Auch wenn das Rot zuerst deklariert wird und einen weniger spezifischen Selektor hat, weil ungefiltertes CSS Vorrang vor geschichtetem CSS hat, wird der Absatz rot. Hätten wir einen Inline-Stil am Absatz hinzugefügt, der ihn auf eine andere Farbe setzt, wie `<p style="color: black">`, der Absatz wäre schwarz.

Wenn wir `!important` zu diesem CSS-Block hinzufügen, wird die Prioritätsreihenfolge im Stylesheet umgekehrt:

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

Nun wird der Absatz blau. Das `!important` in der frühesten deklarierten Ebene hat Vorrang vor nachfolgenden Ebenen und ungefilterten wichtigen Deklarationen. Wenn der Inline-Stil `!important` enthielte, wie `<p style="color: black !important">`, wäre der Absatz wieder schwarz. Inline-Wichtigkeit hat tatsächlich Vorrang vor allen anderen vom Autor deklarierten `!important`-Deklarationen, unabhängig von der Spezifität.

> [!NOTE]
> Der `!important`-Indikator kehrt die Priorität von Kasakadenschichten um. Aus diesem Grund versuchen Sie, `!important` nicht zu verwenden, um externe Stile zu überschreiben. Stattdessen verwenden Sie {{cssxref("@import")}} zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Ebenen zu importieren. Indem Sie Stylesheets als erste Deklaration in Ihrem CSS in eine Ebene importieren, wird ihre Priorität herabgestuft und vom Autor definierte Ebenen, die später in Ihrem CSS definiert werden, haben höhere Priorität. Der `!important`-Indikator sollte nur sparsam, wenn überhaupt, verwendet werden, um erforderliche Stile vor späteren Überschreibungen zu schützen, in der ersten deklarierten Ebene.

Über das gesamte Stylesheet hinweg haben Übergangsstile Vorrang vor allen wichtigen Stilen, unabhängig davon, wer sie deklariert oder wie.

## Volle Kaskadenreihenfolge

Jetzt, da wir ein besseres Verständnis der Ursprungstypen und der Priorität der Cascade-Ebenen haben, erkennen wir, dass die Tabelle in [Kaskadierungsreihenfolge](#kaskadierungsreihenfolge) genauer durch die folgende Tabelle dargestellt werden könnte:

<table>
<thead>
  <tr><th>Prioritätsreihenfolge <br/>(niedrig bis hoch)</th><th>Stilursprung</th><th>Wichtigkeit</th></tr>
</thead>
<tbody>
  <tr><td rowspan="3">1</td><td>Benutzeragent - erste deklarierte Ebene</td><td rowspan="3">normal</td></tr>
  <tr><td>Benutzeragent - letzte deklarierte Ebene</td></tr>
  <tr><td>Benutzeragent - ungefilterte Stile</td></tr>
  <tr><td rowspan="3">2</td><td>Benutzer - erste deklarierte Ebene</td><td rowspan="3">normal</td></tr>
  <tr><td>Benutzer - letzte deklarierte Ebene</td></tr>
  <tr><td>Benutzer - ungefilterte Stile</td></tr>
  <tr><td rowspan="4">3</td><td>Autor - erste deklarierte Ebene</td><td rowspan="4">normal</td></tr>
  <tr><td>Autor - letzte deklarierte Ebene</td></tr>
  <tr><td>Autor - ungefilterte Stile</td></tr>
  <tr><td>Inline <code>style</code></td></tr>
  <tr><td>4</td><td>Animationen</td><td></td></tr>
  <tr><td rowspan="4">5</td><td>Autor - ungefilterte Stile</td><td rowspan="4"><code>!important</code></td></tr>
  <tr><td>Autor - letzte deklarierte Ebene</td></tr>
  <tr><td>Autor - erste deklarierte Ebene</td></tr>
  <tr><td>Inline <code>style</code></td></tr>
  <tr><td rowspan="3">6</td><td>Benutzer - ungefilterte Stile</td><td rowspan="3"><code>!important</td></tr>
  <tr><td>Benutzer - letzte deklarierte Ebene</td></tr>
  <tr><td>Benutzer - erste deklarierte Ebene</td></tr>
  <tr><td rowspan="3">7</td><td>Benutzeragent - ungefilterte Stile</td><td rowspan="3"><code>!important</code></td></tr>
  <tr><td>Benutzeragent - letzte deklarierte Ebene</td></tr>
  <tr><td>Benutzeragent - erste deklarierte Ebene</td></tr>
  <tr><td>8</td><td>Übergänge</td><td></td></tr>
</tbody>
</table>

## Welche CSS-Entitäten nehmen an der Kaskade teil

Nur CSS-Eigenschafts-/Wertepaardeklarationen nehmen an der Kaskade teil. CSS-At-Rule-Deskriptoren nehmen nicht an der Kaskade teil und HTML-präsentation Attribute sind nicht Teil der Kaskade.

### At-regeln

CSS-[At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule), die andere Entitäten als Deklarationen enthalten, wie eine {{ cssxref("@font-face")}}-Regel, die _Deskriptoren_ enthält, nehmen nicht an der Kaskade teil.

Zum größten Teil nehmen die Eigenschaften und Deskriptoren, die in At-Regeln definiert sind, nicht an der Kaskade teil. Nur At-Regeln als Ganzes nehmen an der Kaskade teil. Innerhalb einer `@font-face`-Regel werden zum Beispiel Schriftnamen durch [`font-family`](/de/docs/Web/CSS/@font-face/font-family)-Deskriptoren identifiziert. Wenn mehrere `@font-face`-Regeln mit denselben Deskriptoren definiert sind, wird nur die passendste `@font-face` als Ganzes betrachtet. Wenn mehr als eine gleich passend ist, werden die gesamten `@font-face`-Deklarationen mit Schritten 1, 2 und 4 des Algorithmus verglichen (es gibt keine Spezifität im Bezug auf At-Regeln).

Während die Deklarationen, die in den meisten At-Regeln enthalten sind - wie jene in {{cssxref("@media")}}, {{cssxref("@document")}}, oder {{cssxref("@supports")}} - an der Kaskade teilnehmen, kann die At-Regel einen gesamten Selektor irrelevant machen, wie wir im Beispiel mit der Druckausgabe im [Grundlegendes Beispiel](#einfaches_beispiel) gesehen haben.

Deklarationen in {{cssxref("@keyframes")}} nehmen nicht an der Kaskade teil. So wie bei `@font-face` wird nur das `@keyframes` als Ganzes durch den Kaskadenalgorithmus ausgewählt. Die [Prioritätsreihenfolge von Animationen wird unten beschrieben](#css-animationen_und_die_kaskade).

Wenn es um {{cssxref("@import")}} geht, nimmt die `@import` selbst nicht an der Kaskade teil, aber alle importierten Stile tun dies. Wenn das `@import` eine [benannte oder anonyme Ebene](/de/docs/Web/CSS/@layer) definiert, werden die Inhalte des importierten Stylesheets in die angegebene Ebene platziert. Alle anderen mit `@import` importierten CSS werden als letzte deklarierte Ebene behandelt. Dies wurde oben behandelt.

Schließlich gehorcht {{cssxref("@charset")}} spezifischen Algorithmen und wird nicht durch den Kaskadenalgorithmus beeinflusst.

### Präsentative Attribute

Präsentationsattribute sind Attribute im Quellendokument, die das Styling beeinflussen können. Zum Beispiel setzt das veraltete `align`-Attribut die Ausrichtung auf mehreren HTML-Elementen und das `fill`-Attribut definiert die Farbe, die verwendet wird, um SVG-Formen und Text zu malen, und definiert den Endzustand für SVG-Animationen. Während es sich um Autorenstile handelt, nehmen Präsentationsattribute nicht an der Kaskade teil.

Wenn das HTML-Präsentationsattribut vom Benutzeragenten unterstützt wird, werden gültige präsentative Attribute, die in HTML und SVG enthalten sind, wie die [`align`](/de/docs/Web/HTML/Element/img#align) oder [`fill`](/de/docs/Web/SVG/Reference/Attribute/fill)-Attribute, in die entsprechenden CSS-Regeln (alle SVG-Präsentationsattribute werden als CSS-Eigenschaften unterstützt) übersetzt und in das Autorenstylesheet vor jedem anderen Stil mit einer Spezifität gleich `0` eingefügt.

Präsentationsattribute können nicht als `!important` deklariert werden.

## CSS-Animationen und die Kaskade

[CSS-Animationen](/de/docs/Web/CSS/CSS_animations), die `@keyframes`-Regeln verwenden, definieren Animationen zwischen Zuständen. `@keyframes` kaskadieren nicht, was bedeutet, dass CSS zu jedem Zeitpunkt nur Werte aus einem einzigen Satz von `@keyframes` übernimmt und niemals mehrere miteinander mischt. Wenn mehrere Sätze von `@keyframes` mit demselben Animationsnamen definiert sind, wird der zuletzt definierte Satz im Ursprung und in der Ebene mit der höchsten Priorität verwendet. Andere `@keyframes` werden ignoriert, selbst wenn sie verschiedene Eigenschaften animieren.

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

In diesem Beispiel gibt es drei separate Animationsdeklarationen mit dem Namen `repeatedName`. Wenn `animation: infinite 5s alternate repeatedName` auf den Absatz angewendet wird, wird nur eine Animation angewendet: das Schlüsselrahmen-Animation, die im ungefilterten CSS definiert ist, hat Vorrang vor den in den Ebenen deklarierten Schlüsselrahmen-Animationsdeklarationen basierend auf der Prioritätsreihenfolge von Ursprung und Ebene. In diesem Beispiel wird nur die Schriftgröße des Elements animiert.

> [!NOTE]
> Es gibt keine wichtigen Animationen, da Eigenschaftsdeklarationen in einem {{cssxref('@keyframes')}}-Block, die `!important` als Teil des Wertes beinhalten, ignoriert werden.

## Zurücksetzen von Stilen

Nachdem Ihr Inhalt die Stile abgeändert hat, kann er sich in einer Situation befinden, in der er sie in einen bekannten Zustand zurückversetzen muss. Dies kann in Fällen von Animationen, Themenänderungen usw. passieren. Die CSS-Eigenschaft {{cssxref("all")}} ermöglicht es Ihnen, schnell (fast) alles in CSS auf einen bekannten Zustand zurückzusetzen.

`all` ermöglicht es Ihnen, sofort alle Eigenschaften auf einen ihrer Anfangszustände, den vererbten Zustand von der vorherigen Ebene der Kaskade, einen bestimmten Ursprung (das Benutzeragent-Stylesheet, das Autoren-Stylesheet oder das Benutzer-Stylesheet) oder sogar alle Werte der Eigenschaften vollständig leeren zurückzusetzen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadierungsebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade)-Modul
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Anfangs-](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [verwendete](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
