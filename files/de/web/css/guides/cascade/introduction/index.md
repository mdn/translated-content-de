---
title: Einführung in die CSS-Kaskade
short-title: Introduction
slug: Web/CSS/Guides/Cascade/Introduction
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **Kaskade** ist ein Algorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte aus verschiedenen Quellen kombinieren. Die Kaskade definiert den Ursprung und die Schicht, die den Vorrang hat, wenn Deklarationen aus mehr als einem [Ursprung](#ursprungstypen), einer [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) oder einem {{CSSxRef("@scope")}}-Block einen Wert für eine Eigenschaft eines Elements festlegen.

Die Kaskade liegt im Kern von CSS, wie der Name betont: _**Cascading**_ Style Sheets. Wenn ein [Selektor](/de/docs/Web/CSS/Guides/Selectors) mit einem Element übereinstimmt, wird der Eigenschaftswert aus dem Ursprung mit der höchsten Priorität angewendet, selbst wenn der Selektor aus einem Ursprung oder einer Schicht mit niedrigerer Priorität eine höhere [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) aufweist.

Dieser Artikel erklärt, was die Kaskade ist und in welcher Reihenfolge {{Glossary("CSS", "CSS")}}-[Deklarationen](/de/docs/Web/API/CSSStyleDeclaration) kaskadieren, einschließlich der Kaskadenschichten und Ursprungstypen. Das Verständnis der Ursprungspriorität ist der Schlüssel zum Verständnis der Kaskade.

## Ursprungstypen

Die Aufgabe des CSS-Kaskaden-Algorithmus besteht darin, CSS-Deklarationen auszuwählen, um die korrekten Werte für CSS-Eigenschaften zu bestimmen. CSS-Deklarationen stammen aus verschiedenen Ursprungstypen: **[Benutzeragenten-Stylesheets](#benutzeragenten-stylesheets)**, **[Autor-Stylesheets](#autor-stylesheets)** und **[Benutzer-Stylesheets](#benutzer-stylesheets)**.

Obwohl Stylesheets aus diesen verschiedenen Ursprüngen stammen und sich in unterschiedlichen [Schichten](/de/docs/Web/CSS/Reference/At-rules/@layer) innerhalb dieser Ursprünge befinden können, überschneiden sie sich hinsichtlich ihres Standardbereichs. Um dies zu ermöglichen, definiert der Kaskaden-Algorithmus, wie sie miteinander interagieren. Bevor wir uns mit den Interaktionen befassen, werden wir in den nächsten Abschnitten einige Schlüsselbegriffe definieren.

### Benutzeragenten-Stylesheets

Benutzeragenten, oder Browser, haben grundlegende Stylesheets, die Dokumenten Standardstile verleihen. Diese Stylesheets werden als **Benutzeragenten-Stylesheets** bezeichnet. Die meisten Browser verwenden für diesen Zweck tatsächliche Stylesheets, während andere sie im Code simulieren. Das Endergebnis ist dasselbe.

Einige Browser erlauben es Benutzern, das Benutzeragenten-Stylesheet zu ändern, aber das ist selten und nicht steuerbar.

Obwohl einige Einschränkungen für Benutzeragenten-Stylesheets durch die HTML-Spezifikation festgelegt sind, haben Browser viel Spielraum, was bedeutet, dass es einige Unterschiede zwischen den Browsern gibt. Um den Entwicklungsprozess zu vereinfachen, verwenden Webentwickler möglicherweise ein CSS-Reset-Stylesheet wie [normalize.css](https://github.com/necolas/normalize.css), das gemeinsame Eigenschaftswerte auf einen bekannten Zustand für alle Browser setzt, bevor Anpassungen vorgenommen werden, um ihren spezifischen Anforderungen zu entsprechen.

Es sei denn, das Benutzeragenten-Stylesheet enthält ein [`!important`](/de/docs/Web/CSS/Guides/Cascade/Specificity#the_!important_exception) neben einer Eigenschaft, die es "wichtig" macht, haben vom Autor deklarierte Stile, einschließlich eines Reset-Stylesheets, Vorrang vor den Benutzeragenten-Stilen, unabhängig von der Spezifität des zugehörigen Selektors.

### Autor-Stylesheets

**Autor-Stylesheets** sind die häufigste Art von Stylesheets; dies sind die vom Webentwickler geschriebenen Stile. Diese Stile können Benutzeragenten-Stile zurücksetzen, wie oben erwähnt, und die Stile für das Design einer bestimmten Webseite oder Anwendung definieren. Der Autor oder Webentwickler definiert die Stile für das Dokument unter Verwendung eines oder mehrerer verlinkter oder importierter Stylesheets, {{HTMLElement('style')}}-Blöcke und Inline-Stile, die mit dem [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut definiert sind. Diese Autorenstile definieren das Aussehen und Gefühl der Website — deren Thema.

### Benutzer-Stylesheets

In den meisten Browsern kann der Benutzer (oder Leser) der Website die Stile mit einem benutzerdefinierten **Benutzer-Stylesheet** überschreiben, das darauf ausgelegt ist, die Erfahrung an die Wünsche des Benutzers anzupassen. Abhängig vom Benutzeragenten können [Benutzerstile konfiguriert](https://www.thoughtco.com/user-style-sheet-3469931) oder über Browser-Erweiterungen hinzugefügt werden.

### Kaskadenschichten

Die Kaskadenreihenfolge basiert auf dem Ursprungstyp. Die Kaskade innerhalb jedes Ursprungstyps basiert auf der Deklarationsreihenfolge der [Kaskadenschichten](/de/docs/Web/CSS/Reference/At-rules/@layer) innerhalb dieses Typs. Bei allen Ursprüngen - Benutzeragent, Autor oder Benutzer - können Stile innerhalb oder außerhalb benannter oder anonymer Schichten deklariert werden. Wenn Stile mit [`layer`, `layer()`](/de/docs/Web/CSS/Reference/At-rules/@import) oder [`@layer`](/de/docs/Web/CSS/Reference/At-rules/@layer) deklariert werden, werden sie in die angegebene benannte Schicht oder, wenn kein Name angegeben ist, in eine anonyme Schicht eingefügt. Stile, die außerhalb einer Schicht deklariert werden, werden als Teil einer anonym zuletzt deklarierten Schicht behandelt.

Werfen wir einen Blick auf den kaskadierenden Ursprungstyp, bevor wir uns mit den Kaskadenschichten innerhalb jedes Ursprungstyps befassen.

## Kaskadenreihenfolge

Der Kaskadenalgorithmus bestimmt, wie der anzuwendende Wert für jede Eigenschaft für jedes Dokumentelement ermittelt wird. Die folgenden Schritte gelten für den Kaskadenalgorithmus:

1. **Relevanz**: Zuerst filtert er alle Regeln aus den verschiedenen Quellen, um nur die Regeln zu behalten, die für ein gegebenes Element gelten. Das bedeutet Regeln, deren Selektor mit dem gegebenen Element übereinstimmt und die Teil eines passenden `media`-Regeln sind.
2. **Ursprung und Wichtigkeit**: Dann sortiert er diese Regeln nach ihrer Wichtigkeit, d.h. ob sie `!important` sind oder nicht, und nach ihrem Ursprung. Unabhängig von den Schichten ist die Kaskadenreihenfolge wie folgt:

   | Prioritätsreihenfolge (niedrig bis hoch) | Ursprung                 | Wichtigkeit  |
   | ---------------------------------------- | ------------------------ | ------------ |
   | 1                                        | Benutzeragent (Browser)  | normal       |
   | 2                                        | Benutzer                | normal       |
   | 3                                        | Autor (Entwickler)      | normal       |
   | 4                                        | CSS-Schlüsselbild-Animationen |              |
   | 5                                        | Autor (Entwickler)      | `!important` |
   | 6                                        | Benutzer                | `!important` |
   | 7                                        | Benutzeragent (Browser)  | `!important` |
   | 8                                        | CSS-Transitions          |              |

3. **Spezifität**: Bei Gleichheit innerhalb eines Ursprungs wird die [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) einer Regel berücksichtigt, um einen Wert auszuwählen. Die Spezifität der Selektoren wird verglichen, und die Deklaration mit der höchsten Spezifität gewinnt.
4. **Spezifität der Bereichsnähe**: Wenn zwei Selektoren in der Ursprungsgruppe mit Vorrang die gleiche Spezifität haben, gewinnt der Eigenschaftswert innerhalb von bereichsgesteuerten Regeln mit der geringsten Anzahl von Hops im DOM-Hierarchie zum Bereichswurzel. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved) für mehr Details und ein Beispiel.
5. **Erscheinungsreihenfolge**: Im Ursprung mit Vorrang, wenn es konkurrierende Werte für eine Eigenschaft gibt, die in einem Stilblock sind, der mit Selektoren von gleicher Spezifität und Bereichsnähe übereinstimmt, wird die letzte Deklaration in der Stilreihenfolge angewendet.

Die Kaskade ist in aufsteigender Reihenfolge, was bedeutet:

- Animationen haben Vorrang vor normalen Werten, unabhängig davon, ob sie in Benutzer-, Autor- oder Benutzeragenten-Stilen deklariert sind.
- Wichtige Werte haben Vorrang vor Animationen, unabhängig davon, ob sie in Benutzer-, Autor- oder Benutzeragenten-Stilen deklariert sind.
- Übergänge haben Vorrang vor wichtigen Werten.

> [!NOTE]
> **Übergänge und Animationen**
>
> Eigenschaftswerte, die durch Animation {{cssxref('@keyframes')}} gesetzt werden, sind wichtiger als alle normalen Stile (die ohne [`!important`](/de/docs/Web/CSS/Guides/Cascade/Specificity#the_!important_exception) gesetzt sind).
>
> Eigenschaftswerte, die in einem {{cssxref('transition')}} festgelegt werden, haben Vorrang vor allen anderen gesetzten Werten, selbst wenn sie mit `!important` markiert sind.

Der Kaskadenalgorithmus wird _vor_ dem Spezifitätsalgorithmus angewendet, was bedeutet, dass, wenn `:root p { color: red; }` im Benutzer-Stylesheet (Zeile 2) deklariert ist und ein weniger spezifisches `p { color: blue; }` im Autor-Stylesheet (Zeile 3) enthalten ist, die Absätze blau sein werden.

## Einfaches Beispiel

Bevor wir einen tieferen Blick darauf werfen, wie Kaskadenschichten die Kaskade beeinflussen, schauen wir uns ein Beispiel an, das mehrere Quellen von CSS über die verschiedenen Ursprünge hinweg einbezieht, und arbeiten die Schritte des Kaskadenalgorithmus durch:

Hier haben wir ein Benutzeragenten-Stylesheet, zwei Autor-Stylesheets und ein Benutzer-Stylesheet, ohne Inline-Stile im HTML:

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

Nochmals, es gibt fünf Schritte im Kaskadenalgorithmus, in der Reihenfolge:

1. Relevanz
2. Ursprung und Wichtigkeit
3. Spezifität
4. Bereichsnähe
5. Erscheinungsreihenfolge

Das `1px` ist für Printmedien. Aufgrund des Mangels an _Relevanz_ basierend auf seinem Medientyp wird es aus der Betrachtung entfernt.

Keine Deklaration ist als `!important` markiert, daher ist die Prioritätsordnung Autor-Stylesheets über Benutzer-Stylesheets über Benutzeragenten-Stylesheets. Basierend auf _Ursprung und Wichtigkeit_ wird das `1em` aus dem Benutzer-Stylesheet und das `10px` aus dem Benutzeragenten-Stylesheet aus der Betrachtung entfernt.

Beachten Sie, dass selbst wenn der Benutzerstil auf `.specific` von `1em` eine höhere Spezifität hat, er eine normale Deklaration in einem Benutzer-Stylesheet ist. Daher hat er eine niedrigere Priorität als alle Autorenstile und wird durch den Schritt Ursprung und Wichtigkeit des Algorithmus entfernt, bevor die Spezifität überhaupt ins Spiel kommt.

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

Der letzte, das `5px`, ist Teil einer Kaskadenschicht. Normale Deklarationen in Schichten haben innerhalb desselben Ursprungstyps eine niedrigere Priorität als normale Stile außerhalb einer Schicht. Dies wird auch durch Schritt 2 des Algorithmus, _Ursprung und Wichtigkeit_, entfernt.

Dies hinterlässt das `0` und das `3px`, die beide denselben Selektor haben und daher dieselbe _Spezifität_ aufweisen. Keiner von ihnen befindet sich in einem `@scope`-Block, sodass die Bereichsnähe in diesem Beispiel ebenfalls keine Rolle spielt.

Dann betrachten wir die _Erscheinungsreihenfolge_. Der zweite, der letzte der beiden ungeschichteten Autorenstile, gewinnt.

```css
margin-left: 3px;
```

> [!NOTE]
> Die im Benutzer-CSS definierte Deklaration, obwohl sie möglicherweise eine größere Spezifität aufweist, wird nicht ausgewählt, da der Kaskadenalgorithmus _Ursprung und Wichtigkeit_ vor dem _Spezifitätsalgorithmus_ anwendet. Die in einer Kaskadenschicht definierte Deklaration, obwohl sie später im Code vorkommt, erhält ebenfalls keinen Vorrang, da normale Stile in Kaskadenschichten eine geringere Priorität haben als normale ungeschichtete Stile. _Erscheinungsreihenfolge_ ist nur wichtig, wenn sowohl Ursprung, Wichtigkeit als auch Spezifität gleich sind.

## Autorstile: Inline-Stile, Schichten und Vorrang

Die [Tabelle in Kaskadenreihenfolge](#kaskadenreihenfolge) lieferte einen Überblick über die Vorrangordnung. Die Tabelle fasste die Benutzeragenten-, Benutzer- und Autor-Ursprung-Stile in zwei Zeilen zusammen, mit "Ursprungstyp - normal" und "Ursprungstyp - !important". Der Vorrang innerhalb jedes Ursprungstyps ist nuancierter. Stile können innerhalb ihrer Ursprungstyp in Schichten enthalten sein und bei Autorenstilen gibt es auch die Frage, wo Inline-Stile in der Kaskadenreihenfolge landen.

Die Reihenfolge, in der Schichten deklariert werden, ist wichtig, um den Vorrang zu bestimmen. Normale Stile in einer Schicht haben Vorrang vor Stilen, die in vorherigen Schichten deklariert wurden; wobei normale Stile, die außerhalb einer Schicht deklariert sind, Vorrang vor normalen geschichteten Stilen haben, unabhängig von der Spezifität.

In diesem Beispiel hat der Autor die CSS-{{CSSXref('@import')}}-Regel verwendet, um fünf externe Stylesheets innerhalb eines {{HTMLElement('style')}}-Informationselements zu importieren.

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

und dann im Hauptteil des Dokuments haben wir Inline-Stile:

```html
<p style="line-height: 1.6em; text-decoration: overline !important;">Hello</p>
```

Im obigen CSS-Codeblock wurden drei Kaskadenschichten mit den Namen "A", "B" und "C" erstellt, in dieser Reihenfolge. Drei Stylesheets wurden direkt in Schichten importiert und zwei wurden importiert, ohne eine Schicht zu erstellen oder zugewiesen zu werden. Die "Alle ungeschichteten Stile" in der Liste unten (normaler Vorrang der Autorenstile - Ordnung 4) umfassen Stile aus diesen beiden Stylesheets und den zusätzlichen ungeschichteten CSS-Stilblöcken. Zusätzlich gibt es zwei Inline-Stile, eine normale `line-height`-Deklaration und eine wichtige `text-decoration`-Deklaration:

| Prioritätsreihenfolge (niedrig bis hoch) | Autorstil            | Wichtigkeit  |
| ---------------------------------- | --------------------- | ------------ |
| 1                                | A - erste Schicht         | normal       |
| 2                                | B - zweite Schicht        | normal       |
| 3                                | C - letzte Schicht        | normal       |
| 4                                | Alle ungeschichteten Stile | normal       |
| 5                                | Inline-`style`          | normal       |
| 6                                | Animationen            |              |
| 7                                | Alle ungeschichteten Stile | `!important` |
| 8                                | C - letzte Schicht        | `!important` |
| 9                                | B - zweite Schicht        | `!important` |
| 10                               | A - erste Schicht         | `!important` |
| 11                               | Inline-`style`          | `!important` |
| 12                               | Übergänge               |              |

Bei allen Ursprungstypen haben normale Stile, die in Schichten enthalten sind, den geringsten Vorrang. In unserem Beispiel haben die normalen Stile, die mit der ersten deklarierten Schicht (A) assoziiert sind, einen geringeren Vorrang als normale Stile in der zweiten deklarierten Schicht (B), die wiederum einen geringeren Vorrang als normale Stile in der dritten deklarierten Schicht (C) haben. Diese geschichteten Stile haben eine geringere Priorität als alle normalen ungeschichteten Stile, was normale Stile aus `unlayeredStyles.css`, `moreUnlayeredStyles.css` und die `color` von `p` im `<style>` selbst beinhaltet.

Wenn irgendwelche geschichteten Stile in A, B oder C Selektoren mit höherer Spezifität haben, die mit einem Element übereinstimmen, wie `:root body p { color: black; }`, spielt das keine Rolle. Diese Deklarationen werden aufgrund des _Ursprungs_ nicht berücksichtigt; normale geschichtete Stile haben weniger Vorrang als normale ungeschichtete Stile. Wenn jedoch der spezifischere Selektor `:root body p { color: black; }` in `unlayeredStyles.css` enthalten wäre, würde die höhere Spezifität beim _Ursprungs- und Wichtigkeitsalgorithmus_, das höhere Vorrang hätte, bedeuten, dass die spezifischere, schwarze Deklaration gewinnen würde.

Die Reihenfolge der Vorrangigkeit ist für Stile, die als `!important` deklariert sind, umgekehrt. Bedeutende Deklarationen, die außerhalb einer Kaskadenschicht getroffen werden, haben einen niedrigeren Vorrang als die innerhalb einer Schicht deklarierten. Bedeutende Deklarationen in der ersten Schicht (A) haben Vorrang vor bedeutenden Deklarationen in Schicht B, die Vorrang vor bedeutenden Deklarationen in Schicht C haben, welche Vorrang vor bedeutenden Deklarationen außerhalb einer Schicht haben.

### Inline-Stile

Nur für Autorenstile relevant sind Inline-Stile, die mit dem `style`-Attribut deklariert werden. Normale Inline-Stile haben Vorrang vor allen anderen normalen Autorenstilen, unabhängig von der Spezifität des Selektors. Wenn `line-height: 2;` in einem `:root body p`-Selektorblock in einem der fünf importierten Stylesheets deklariert würde, wäre die Zeilenhöhe immer noch `1.6`. Normale Inline-Stile haben keinen Vorrang vor animierten oder übergangenen Eigenschaften.

Bedeutende Inline-Stile haben Vorrang vor allen anderen Autorenstilen, unabhängig davon, ob sie bedeutend, inline oder geschichtet sind. Bedeutende Inline-Stile haben auch Vorrang vor animierten Eigenschaften, jedoch nicht vor übergangenen Eigenschaften. Drei Dinge können einen bedeutenden Inline-Stil überschreiben:

- Ein bedeutender Benutzerstil.
- Ein bedeutender Benutzeragentenstil.
- Eine übergangene Eigenschaft.

### Wichtigkeit und Schichten

Die Prioritätsreihenfolge des Ursprungstyps wird für bedeutende Stile umgekehrt. Bedeutende Stile, die außerhalb einer Kaskadenschicht deklariert werden, haben einen niedrigeren Vorrang als solche, die Teil einer Schicht sind. Bedeutende Stile, die in frühen Schichten vorkommen, haben Vorrang vor bedeutenden Stilen, die in nachfolgenden Kaskadenschichten deklariert werden.

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

Selbst wenn das Rot zuerst deklariert wird und einen weniger spezifischen Selektor hat, weil ungeschichtetes CSS Vorrang vor geschichtetem CSS hat, wird das Absatz rot. Wenn wir einen Inline-Stil auf dem Absatz hätten, der ihn auf eine andere Farbe setzt, wie `<p style="color: black">`, wäre der Absatz schwarz.

Wenn wir `!important` zu diesem CSS-Bit hinzufügen, wird die Vorrangsreihenfolge innerhalb des Stylesheets umgekehrt:

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

Jetzt wird der Absatz blau. Das `!important` in der frühest deklarierten Schicht hat Vorrang vor nachfolgenden Schichten und ungeschichteten wichtigen Deklarationen. Wenn der Inline-Stil `!important` enthalten würde, wie `<p style="color: black !important">`, wäre der Absatz wieder schwarz. Der bedeutende Inline-Stil hat Vorrang vor allen anderen vom Autor deklarierten `!important`-Deklarationen, unabhängig von ihrer Spezifität.

> [!NOTE]
> Das `!important`-Flag kehrt die Vorrangsreihenfolge der Kaskadenschichten um. Aus diesem Grund sollten Sie nach Möglichkeit `!important` nicht verwenden, um externe Stile zu überschreiben. Stattdessen sollten Sie {{cssxref("@import")}} zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion verwenden, um externe Stylesheets (aus Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Schichten zu importieren. Importieren von Stylesheets in eine Schicht als erste Deklaration in Ihrem CSS senkt deren Vorrang, und vom Autor definierte Schichten, die später in Ihrem CSS definiert werden, haben höheren Vorrang. Das `!important`-Flag sollte nur sparsam verwendet werden, wenn überhaupt, um erforderliche Stile vor späteren Überschreibungen in der zuerst deklarierten Schicht zu schützen.

Stile, die sich übergängen, haben Vorrang vor allen wichtigen Stilen, unabhängig davon, wer sie deklariert oder wie sie deklariert werden.

## Vollständige Kaskadenordnung

Jetzt, da wir ein besseres Verständnis für Ursprungstypen und Kaskadenschichtenvorrang haben, erkennen wir, dass die Tabelle in [Kaskadenreihenfolge](#kaskadenreihenfolge) genauer durch die folgende Tabelle dargestellt werden könnte:

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
  <tr><td>Inline-<code>style</code></td></tr>
  <tr><td>4</td><td>Animationen</td><td></td></tr>
  <tr><td rowspan="4">5</td><td>Autor - ungeschichtete Stile</td><td rowspan="4"><code>!important</code></td></tr>
  <tr><td>Autor - letzte deklarierte Schicht</td></tr>
  <tr><td>Autor - erste deklarierte Schicht</td></tr>
  <tr><td>Inline-<code>style</code></td></tr>
  <tr><td rowspan="3">6</td><td>Benutzer - ungeschichtete Stile</td><td rowspan="3"><code>!important</td></tr>
  <tr><td>Benutzer - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzer - erste deklarierte Schicht</td></tr>
  <tr><td rowspan="3">7</td><td>Benutzeragent - ungeschichtete Stile</td><td rowspan="3"><code>!important</code></td></tr>
  <tr><td>Benutzeragent - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzeragent - erste deklarierte Schicht</td></tr>
  <tr><td>8</td><td>Übergänge</td><td></td></tr>
</tbody>
</table>

## Welche CSS-Entitäten nehmen an der Kaskade teil

Nur CSS-Eigenschafts/Wert-Paar-Deklarationen nehmen an der Kaskade teil. CSS-At-Regel-Deskriptoren nehmen nicht an der Kaskade teil und HTML-Präsentationsattribute sind nicht Teil der Kaskade.

### At-Regeln

CSS-[At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules), die Entitäten enthalten, die keine Deklarationen sind, wie eine {{ cssxref("@font-face")}}-Regel, die _Deskriptoren_ enthält, nehmen nicht an der Kaskade teil.

Zum größten Teil nehmen die in At-Regeln definierten Eigenschaften und Deskriptoren nicht an der Kaskade teil. Nur At-Regeln als Ganzes nehmen an der Kaskade teil. Beispielsweise werden innerhalb einer `@font-face`-Regel Schriftarten durch [`font-family`](/de/docs/Web/CSS/Reference/At-rules/@font-face/font-family)-Deskriptoren identifiziert. Wenn mehrere `@font-face`-Regeln mit dem gleichen Deskriptor definiert sind, wird nur das passendste `@font-face` als Ganzes berücksichtigt. Wenn mehr als eine identisch passend ist, werden die gesamten `@font-face`-Deklarationen mit den Schritten 1, 2 und 4 des Algorithmus verglichen (es gibt keine Spezifität bei At-Regeln).

Obwohl die in den meisten At-Regeln enthaltenen Deklarationen - wie beispielsweise in {{cssxref("@media")}}, {{cssxref("@document")}} oder {{cssxref("@supports")}} - an der Kaskade teilnehmen, kann die At-Regel einen gesamten Selektor irrelevant machen, wie wir es im [einfachen Beispiel](#einfaches_beispiel) mit dem Druckstil gesehen haben.

Deklarationen in {{cssxref("@keyframes")}} nehmen nicht an der Kaskade teil. Wie bei `@font-face` wird nur das `@keyframes` als Ganzes durch den Kaskadenalgorithmus ausgewählt. Die [Vorrangigkeit der Animation wird unten beschrieben](#css-animationen_und_die_kaskade).

In Bezug auf {{cssxref("@import")}} nimmt das `@import` selbst nicht an der Kaskade teil, aber alle importierten Stile tun dies. Wenn das `@import` eine [benannte oder anonyme Schicht](/de/docs/Web/CSS/Reference/At-rules/@layer) definiert, werden die Inhalte des importierten Stylesheets in die angegebene Schicht eingefügt. Alle anderen mit `@import` importierten CSS werden als letzte deklarierte Schicht behandelt. Dies wurde oben bereits diskutiert.

Abschließend gehorcht {{cssxref("@charset")}} spezifischen Algorithmen und wird nicht durch den Kaskadenalgorithmus beeinflusst.

### Präsentationsattribute

Präsentationsattribute sind Attribute im Quelldokument, die das Styling beeinflussen können. Zum Beispiel, wenn das veraltete `align`-Attribut enthalten ist, legt es die Ausrichtung auf mehrere HTML-Elemente fest, und das `fill`-Attribut definiert die Farbe, die zum Malen von SVG-Formen und -Text verwendet wird, und definiert den Endzustand für SVG-Animationen. Obwohl sie Autorenstile sind, nehmen Präsentationsattribute nicht an der Kaskade teil.

Wenn das HTML-Präsentationsattribut vom Benutzeragenten unterstützt wird, werden gültige Präsentationsattribute, die in HTML und SVG enthalten sind, wie die [`align`](/de/docs/Web/HTML/Reference/Elements/img#align) oder [`fill`](/de/docs/Web/SVG/Reference/Attribute/fill) Attribute, in die entsprechenden CSS-Regeln übersetzt (alle SVG-Präsentationsattribute werden als CSS-Eigenschaften unterstützt) und im Autoren-Stylesheet vor anderen Stilen mit einer Spezifität von `0` eingefügt.

Präsentationsattribute können nicht als `!important` deklariert werden.

## CSS-Animationen und die Kaskade

[CSS-Animationen](/de/docs/Web/CSS/Guides/Animations), die {{cssxref("@keyframes")}}-Regel-At-Regeln verwenden, definieren Animationen zwischen Zuständen. `@keyframes` kaskadieren nicht, was bedeutet, dass zu jedem Zeitpunkt CSS Werte nur aus einem einzigen Satz von `@keyframes` übernimmt und niemals mehrere mischt. Wenn mehrere Sätze von `@keyframes` mit demselben Animationsnamen definiert sind, wird der zuletzt definierte Satz im Ursprung und der Schicht mit der größten Priorität verwendet. Andere `@keyframes` werden ignoriert, auch wenn sie unterschiedliche Eigenschaften animieren.

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

In diesem Beispiel gibt es drei separate Animationsdeklarationen mit dem Namen `repeatedName`. Wenn `animation: infinite 5s alternate repeatedName` auf den Absatz angewendet wird, wird nur eine Animation angewendet: Die Schlüsselbild-Animation, die in dem ungeschichteten CSS definiert ist, hat Vorrang vor den geschichteten Schlüsselbild-Animationsdeklarationen basierend auf Ursprung und Schichtvorhalt. In diesem Beispiel wird nur die Schriftgröße des Elements animiert.

> [!NOTE]
> Es gibt keine wichtigen Animationen, da Eigenschaftsdeklarationen in einem {{cssxref('@keyframes')}}-Block, die `!important` als Teil des Wertes enthalten, ignoriert werden.

## Zurücksetzen der Stile

Nachdem Ihr Inhalt die Stile geändert hat, kann es erforderlich sein, sie in einen bekannten Zustand zurückzusetzen. Dies kann in Fällen von Animationen, Themenänderungen und so weiter passieren. Die CSS-Eigenschaft {{cssxref("all")}} ermöglicht es Ihnen, schnell (fast) alles in CSS in einen bekannten Zustand zurückzusetzen.

`all` ermöglicht Ihnen, sofort alle Eigenschaften auf einen ihrer initialen (Standard-)Zustände zurückzusetzen, den Zustand, der von der vorherigen Ebene der Kaskade geerbt wurde, einem bestimmten Ursprung (das Benutzeragenten-Stylesheet, das Autoren-Stylesheet oder das Benutzer-Stylesheet) oder sogar die Werte der Eigenschaften vollständig zu löschen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Konflikte verwalten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- [At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [Initial](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [berechnet](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [verwendet](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value), und [tatsächliche](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value) Werte
