---
title: Einführung in die CSS-Kaskade
short-title: Introduction
slug: Web/CSS/CSS_cascade/Cascade
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Die **Kaskade** ist ein Algorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte aus verschiedenen Quellen kombinieren. Die Kaskade bestimmt den Ursprung und die Schicht, die Vorrang hat, wenn Deklarationen aus mehr als einem [Ursprung](#ursprungstypen), [Kaskadenschicht](/de/docs/Web/CSS/@layer) oder {{CSSxRef("@scope")}} Block einen Wert für eine Eigenschaft eines Elements festlegen.

Die Kaskade liegt im Kern von CSS, wie durch den Namen betont wird: _**Cascading**_ Style Sheets. Wenn ein [Selektor](/de/docs/Web/CSS/CSS_selectors) ein Element trifft, wird der Eigenschaftswert aus dem Ursprung mit der höchsten Priorität angewendet, selbst wenn der Selektor aus einem Ursprung oder einer Schicht mit niedrigerer Priorität eine höhere [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) hat.

Dieser Artikel erklärt, was die Kaskade ist und die Reihenfolge, in der {{Glossary("CSS", "CSS")}} [Deklarationen](/de/docs/Web/API/CSSStyleDeclaration) kaskadieren, deckt Kaskadenschichten und Ursprungstypen ab. Das Verständnis der Ursprungsvollmacht ist der Schlüssel zum Verständnis der Kaskade.

## Ursprungstypen

Die Aufgabe des CSS-Kaskadenalgorithmus ist es, CSS-Deklarationen auszuwählen, um die richtigen Werte für CSS-Eigenschaften zu bestimmen. CSS-Deklarationen stammen aus verschiedenen Ursprungstypen: **[Benutzeragenten-Stylesheets](#benutzeragenten-stylesheets)**, **[Autoren-Stylesheets](#autoren-stylesheets)** und **[Benutzerstylesheets](#benutzer-stylesheets)**.

Obwohl Stylesheets aus diesen verschiedenen Ursprüngen stammen und sich in verschiedenen [Schichten](/de/docs/Web/CSS/@layer) in jedem dieser Ursprünge befinden können, überlappen sie sich hinsichtlich ihres Standardbereichs; um dies zu ermöglichen, definiert der Kaskadenalgorithmus, wie sie interagieren. Bevor wir uns mit den Interaktionen befassen, werden wir in den nächsten Abschnitten einige Schlüsselbegriffe definieren.

### Benutzeragenten-Stylesheets

Benutzeragenten oder Browser verfügen über grundlegende Stylesheets, die jedem Dokument Standardstile geben. Diese Stylesheets werden als **Benutzeragenten-Stylesheets** bezeichnet. Die meisten Browser verwenden tatsächlich Stylesheets zu diesem Zweck, während andere sie im Code simulieren. Das Endergebnis ist dasselbe.

Einige Browser erlauben es Benutzern, das Benutzeragenten-Stylesheet zu ändern, aber das ist selten und nichts, was kontrolliert werden kann.

Obwohl einige Einschränkungen für Benutzeragenten-Stylesheets durch die HTML-Spezifikation festgelegt sind, haben Browser viel Spielraum: Das bedeutet, dass es einige Unterschiede zwischen den Browsern gibt. Um den Entwicklungsprozess zu vereinfachen, können Webentwickler ein CSS-Reset-Stylesheet verwenden, wie z.B. [normalize.css](https://github.com/necolas/normalize.css), das gemeinsame Eigenschaftswerte auf einen bekannten Zustand für alle Browser setzt, bevor sie Änderungen vornehmen, um ihre spezifischen Bedürfnisse zu erfüllen.

Es sei denn, das Benutzeragenten-Stylesheet enthält ein [`!wichtig`](/de/docs/Web/CSS/CSS_cascade/Specificity#the_!important_exception) neben einer Eigenschaft, das sie als "wichtig" markiert, haben Stile, die von den Autorenstilen erklärt werden, einschließlich eines Reset-Stylesheets, Vorrang vor den Benutzeragentenstilen, unabhängig von der Spezifität des zugehörigen Selektors.

### Autoren-Stylesheets

**Autoren-Stylesheets** sind die häufigste Art von Stylesheets; sie sind die von Webentwicklern geschriebenen Stile. Diese Stile können Benutzeragentenstile zurücksetzen, wie oben erwähnt, und die Stile für das Design einer bestimmten Webseite oder Anwendung definieren. Der Autor oder Webentwickler definiert die Stile für das Dokument mithilfe eines oder mehrerer verlinkter oder importierter Stylesheets, {{HTMLElement('style')}} Blöcke und Inline-Stile, die mit dem [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attribut definiert sind. Diese Autorenstile definieren das Aussehen und die Haptik der Website – ihr Thema.

### Benutzer-Stylesheets

In den meisten Browsern kann der Benutzer (oder Leser) der Website Stile überschreiben, indem er ein benutzerdefiniertes **Benutzerstylesheet** verwendet, das die Erfahrung an die Wünsche des Benutzers anpasst. Abhängig vom Benutzeragenten können [Benutzerstile konfiguriert werden](https://www.thoughtco.com/user-style-sheet-3469931) direkt oder über Browsererweiterungen hinzugefügt werden.

### Kaskadenschichten

Die Kaskadenreihenfolge basiert auf dem Ursprungstyp. Die Kaskade innerhalb jedes Ursprungstyps basiert auf der Deklarationsreihenfolge von [Kaskadenschichten](/de/docs/Web/CSS/@layer) innerhalb dieses Typs. Für alle Ursprünge - Benutzeragenten, Autoren oder Benutzer - können Stile innerhalb oder außerhalb benannter oder anonymer Schichten deklariert werden. Wenn sie mit [`layer`, `layer()`](/de/docs/Web/CSS/@import) oder [`@layer`](/de/docs/Web/CSS/@layer) deklariert werden, werden Stile in die angegebene benannte Schicht oder in eine anonyme Schicht platziert, wenn kein Name angegeben wird. Stile, die außerhalb einer Schicht deklariert werden, werden als Teil einer anonymen zuletzt deklarierten Schicht behandelt.

Schauen wir uns den kaskadierenden Ursprungstyp an, bevor wir uns mit Kaskadenschichten innerhalb jedes Ursprungstyps befassen.

## Kaskadenreihenfolge

Der Kaskadenalgorithmus bestimmt, wie man den Wert findet, der für jede Eigenschaft für jedes Dokumentelement angewendet werden soll. Die folgenden Schritte gelten für den Kaskadenalgorithmus:

1. **Relevanz**: Er filtert zuerst alle Regeln aus den verschiedenen Quellen, um nur die Regeln zu behalten, die auf ein bestimmtes Element anwendbar sind. Das bedeutet Regeln, deren Selektor das gegebene Element trifft und die Teil einer passenden `media` at-rule sind.
2. **Ursprung und Wichtigkeit**: Dann sortiert er diese Regeln nach ihrer Wichtigkeit, also ob sie mit `!wichtig` versehen sind oder nicht, und nach ihrem Ursprung. Wenn man die Schichten ignoriert, ist die Kaskadenreihenfolge wie folgt:

   | Vorrangsreihenfolge (niedrig bis hoch) | Ursprung                      | Wichtigkeit |
   | -------------------------------------- | ----------------------------- | ----------- |
   | 1                                      | benutzer-agent (browser)      | normal      |
   | 2                                      | benutzer                      | normal      |
   | 3                                      | autor (entwickler)            | normal      |
   | 4                                      | CSS-Schlüsselbild-Animationen |             |
   | 5                                      | autor (entwickler)            | `!wichtig`  |
   | 6                                      | benutzer                      | `!wichtig`  |
   | 7                                      | benutzer-agent (browser)      | `!wichtig`  |
   | 8                                      | CSS-Übergänge                 |             |

3. **Spezifität**: Im Falle einer Gleichheit bei einem Ursprung wird die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) einer Regel berücksichtigt, um einen Wert zu wählen. Es wird die Spezifität der Selektoren verglichen, und die Deklaration mit der höchsten Spezifität gewinnt.
4. **Scoping-Nähe**: Wenn zwei Selektoren in der Ursprüngsschicht mit Vorrang die gleiche Spezifität haben, gewinnt der Eigenschaftswert innerhalb der umschlossenen Regeln mit der kleinsten Anzahl von Hops in der DOM-Hierarchie zur Scoping-Wurzel. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.
5. **Erscheinungsreihenfolge**: Im Ursprung mit Vorrang, wenn es konkurrierende Werte für eine Eigenschaft gibt, die in Stilblöcken vorkommen, die auf Selektoren mit gleicher Spezifität und Scoping-Nähe zutreffen, wird die letzte Deklaration in der Stilreihenfolge angewendet.

Die Kaskade ist in aufsteigender Reihenfolge, das bedeutet:

- Animationen haben Vorrang vor normalen Werten, unabhängig davon, ob sie in Benutzer-, Autoren- oder Benutzeragentenstilen deklariert sind.
- Wichtige Werte haben Vorrang vor Animationen, unabhängig davon, ob sie in Benutzer-, Autoren- oder Benutzeragentenstilen deklariert sind.
- Übergänge haben Vorrang vor wichtigen Werten.

> **Hinweis:** **Übergänge und Animationen**
>
> Eigenschaftswerte, die durch Animation {{cssxref('@keyframes')}} festgelegt werden, sind wichtiger als alle normalen Stile (diejenigen ohne [`!wichtig`](/de/docs/Web/CSS/CSS_cascade/Specificity#the_!important_exception) Einstellung).
>
> Eigenschaftswerte, die in einem {{cssxref('transition')}} gesetzt werden, haben Vorrang vor allen anderen gesetzten Werten, selbst denen, die mit `!wichtig` gekennzeichnet sind.

Der Kaskadenalgorithmus wird _vor_ dem Spezifitätsalgorithmus angewendet, das bedeutet, wenn `:root p { color: red;}` im Benutzerstylesheet (Zeile 2) deklariert ist und ein weniger spezifisches `p {color: blue;}` im Autorenstylesheet (Zeile 3) vorhanden ist, werden die Absätze blau.

## Einfaches Beispiel

Bevor wir uns eingehender ansehen, wie Kaskadenschichten die Kaskade beeinflussen, betrachten wir ein Beispiel mit mehreren Quellen von CSS aus den verschiedenen Ursprüngen und arbeiten die Schritte des Kaskadenalgorithmus durch:

Hier haben wir ein Benutzeragenten-Stylesheet, zwei Autoren-Stylesheets und ein Benutzerstylesheet, ohne Inline-Stile im HTML:

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

In diesem Fall sollten Deklarationen innerhalb `li` und `.specific` Regeln angewendet werden.

Noch einmal, es gibt fünf Schritte im Kaskadenalgorithmus, in der Reihenfolge:

1. Relevanz
2. Ursprung und Wichtigkeit
3. Spezifität
4. Scoping-Nähe
5. Erscheinungsreihenfolge

Das `1px` ist für Printmedien. Aufgrund mangelnder _Relevanz_ basierend auf seinem Medientyp wird es aus der Betrachtung entfernt.

Keine Deklaration ist als `!wichtig` markiert, also ist die Vorrangsreihenfolge Autoren-Stylesheets über Benutzerstylesheets über Benutzeragenten-Stylesheet. Basierend auf _Ursprung und Wichtigkeit_ werden das `1em` aus dem Benutzerstylesheet und die `10px` aus dem Benutzeragenten-Stylesheet aus der Betrachtung entfernt.

Beachten Sie, dass selbst wenn der Benutzerstil auf `.specific` von `1em` eine höhere Spezifität hat, es sich um eine normale Deklaration in einem Benutzerstylesheet handelt. Daher hat es eine niedrigere Priorität als alle Autorenstile und wird durch den Schritt Ursprung und Wichtigkeit des Algorithmus entfernt, bevor die Spezifität überhaupt ins Spiel kommt.

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

Die letzte, die `5px`, ist Teil einer Kaskadenschicht. Normale Deklarationen in Schichten haben eine geringere Priorität als normale Stile, die nicht in einer Schicht innerhalb desselben Ursprungstyps liegen. Auch dies wird durch den Schritt 2 des Algorithmus, _Ursprung und Wichtigkeit_, entfernt.

Dies lässt das `0` und die `3px`, die beide denselben Selektor und damit dieselbe _Spezifität_ haben. Keiner von ihnen ist innerhalb eines `@scope` Blocks, also spielt auch die Scoping-Nähe in diesem Beispiel keine Rolle.

Wir schauen uns dann die _Erscheinungsreihenfolge_ an. Der zweite, die letztere der beiden nicht geschichteten Autorenstile, gewinnt.

```css
margin-left: 3px;
```

> [!NOTE]
> Die Deklaration im Benutzer-CSS, obwohl sie möglicherweise eine größere Spezifität hat, wird nicht gewählt, da der Kaskadenalgorithmus der _Ursprung und Wichtigkeit_ vor dem _Spezifitäts_-Algorithmus angewendet wird. Die Deklaration in einer Kaskadenschicht, obwohl sie später im Code vorkommt, wird ebenfalls keine Priorität haben, da normale Stile in Kaskadenschichten weniger Vorrang haben als normale ungeschichtete Stile. _Erscheinungsreihenfolge_ spielt nur eine Rolle, wenn sowohl Ursprung, Wichtigkeit als auch Spezifität gleich sind.

## Autorenstile: Inline-Stile, Schichten und Vorrang

Die [Tabelle in Kaskadenreihenfolge](#kaskadenreihenfolge) bot einen Überblick über die Vorransreihenfolge. Die Tabelle fasste die Benutzeragenten-, Benutzer- und Autorenursprungsstile in zwei Zeilen mit „Ursprungstyp - normal“ und „Ursprungstyp - !wichtig“ zusammen. Der Vorrang innerhalb jedes Ursprungstyps ist nuancierter. Stile können innerhalb von Schichten innerhalb ihres Ursprungstyps enthalten sein, und bei Autorenstilen gibt es auch das Problem, wohin Inline-Stile in der Kaskadenreihenfolge fallen.

Die Reihenfolge, in der Schichten erklärt werden, ist wichtig, um den Vorrang zu bestimmen. Normale Stile in einer Schicht haben Vorrang vor Stilen, die in vorherigen Schichten deklariert wurden; mit normalen Stilen, die außerhalb einer Schicht deklariert werden, haben Vorrang vor normalen geschichteten Stilen, unabhängig von der Spezifität.

In diesem Beispiel hat der Autor die {{CSSXref('@import')}} Regel von CSS verwendet, um fünf externe Stylesheets innerhalb eines {{HTMLElement('style')}} Informationselements zu importieren.

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

Im obigen CSS-Codeblock wurden drei Kaskadenschichten mit den Namen "A", "B" und "C" erstellt, in genau dieser Reihenfolge. Drei Stylesheets wurden direkt in Schichten importiert und zwei wurden importiert, ohne eine Schicht zu erstellen oder zuzuweisen.
Die "Alle ungeschichteten Stile" in der Liste unten (normaler Autorenstilvormerheit - Ordnung 4) umfasst Stile aus diesen beiden Stylesheets und die zusätzlichen ungeschichteten CSS-Stilblöcke. Darüber hinaus gibt es zwei Inline-Stile, eine normale `line-height` Deklaration und eine wichtige `text-decoration` Deklaration:

| Vorrangsreihenfolge (niedrig bis hoch) | Autorenstil                | Wichtigkeit |
| -------------------------------------- | -------------------------- | ----------- |
| 1                                      | A - erste Schicht          | normal      |
| 2                                      | B - zweite Schicht         | normal      |
| 3                                      | C - letzte Schicht         | normal      |
| 4                                      | Alle ungeschichteten Stile | normal      |
| 5                                      | inline `style`             | normal      |
| 6                                      | Animationen                |             |
| 7                                      | Alle ungeschichteten Stile | `!wichtig`  |
| 8                                      | C - letzte Schicht         | `!wichtig`  |
| 9                                      | B - zweite Schicht         | `!wichtig`  |
| 10                                     | A - erste Schicht          | `!wichtig`  |
| 11                                     | inline `style`             | `!wichtig`  |
| 12                                     | Übergänge                  |             |

In allen Ursprungstypen haben normale Stile, die in Schichten enthalten sind, die niedrigste Priorität. In unserem Beispiel haben die normalen Stile, die mit der zuerst deklarierten Schicht (A) verbunden sind, eine niedrigere Priorität als normale Stile in der zweiten deklarierten Schicht (B), die eine niedrigere Priorität als normale Stile in der dritten deklarierten Schicht (C) haben. Diese geschichteten Stile haben eine niedrigere Priorität als alle normalen ungeschichteten Stile, zu denen auch normale Stile aus `unlayeredStyles.css`, `moreUnlayeredStyles.css` und die `color` von `p` im `<style>` selbst gehören.

Selbst wenn in A, B oder C geschichtete Stile mit höherer Spezifität Übereinstimmung mit einem Element enthielten, wie etwa `:root body p { color: black; }`, spielt das keine Rolle. Diese Deklarationen werden aus der Betrachtung ausgeschlossen, weil sie nicht im Ursprung sind; normale geschichtete Stile haben weniger Vorrang als normale ungeschichtete Stile. Wenn jedoch der spezifischere Selektor `:root body p { color: black; }` in `unlayeredStyles.css` gefunden würde, da sowohl _Ursprung und Wichtigkeit_ dieselbe Vorrangstellung haben, würde _Spezifität_ bedeuten, dass die spezifischere, schwarze Deklaration gewinnen würde.

Die Schichtordnung der Vorrangstellung ist für als `!wichtig` erklärte Stile umgekehrt. Wichtige Deklarationen, die sich in einer Schicht befinden, haben Vorrang vor wichtigen Deklarationen, die sich außerhalb einer Schicht befinden. Wichtige Deklarationen, die in der ersten Schicht (A) vorkommen, haben Vorrang vor wichtigen Deklarationen, die in Schicht B vorkommen, die Vorrang vor wichtigen Deklarationen in Schicht C haben, die Vorrang vor wichtigen Deklarationen außerhalb einer Schicht haben.

### Inline-Stile

Nur für Autorenstile relevant sind Inline-Stile, die mit dem `style` Attribut deklariert sind. Normale Inline-Stile haben Vorrang vor allen anderen normalen Autorenstilen, unabhängig von der Spezifität des Selektors. Wenn `line-height: 2;` in einem `:root body p` Selektorblock in einem der fünf importierten Stylesheets deklariert wurde, wäre die Zeilenhöhe immer noch `1.6`. Normale Inline-Stile haben keinen Vorrang vor animierten oder transitionierten Eigenschaften.

Wichtige Inline-Stile haben Vorrang vor allen anderen Autorenstilen, unabhängig davon, ob sie wichtig sind, inline oder geschichtet. Wichtige Inline-Stile haben auch Vorrang vor animierten Eigenschaften, aber nicht vor transitionierten Eigenschaften. Drei Dinge können einen wichtigen Inline-Stil überschreiben:

- Ein wichtiger Benutzerstil.
- Ein wichtiger Benutzeragent-Stil.
- Eine transitionierte Eigenschaft.

### Wichtigkeit und Schichten

Die Vorrangreihenfolge der Ursprungstypen ist umgekehrt für wichtige Stile. Wichtige Stile, die außerhalb einer Kaskadenschicht deklariert sind, haben eine niedrigere Priorität als diejenigen, die als Teil einer Schicht deklariert sind. Wichtige Stile, die in frühen Schichten vorkommen, haben Vorrang vor wichtigen Stilen, die in späteren Kaskadenschichten deklariert sind.

Betrachten Sie beispielsweise die folgende CSS:

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

Obwohl das Rot zuerst deklariert ist und einen weniger spezifischen Selektor hat, da ungeschichtetes CSS Vorrang vor geschichtetem CSS hat, wird der Absatz rot sein. Hätten wir einen Inline-Stil auf dem Absatz eingefügt, der ihn auf eine andere Farbe setzt, wie `<p style="color: black">`, würde der Absatz schwarz sein.

Wenn wir `!wichtig` zu diesem Abschnitt von CSS hinzufügen, wird die Vorrangstellung innerhalb des Stylesheets umgekehrt:

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

Jetzt wird der Absatz blau sein. Das `!wichtig` in der frühesten deklarierten Schicht hat Vorrang vor den nachstehenden Schichten und den ungeschichteten wichtigen Deklarationen. Wenn der Inline-Stil `!wichtig` enthielte, wie `<p style="color: black !important">`, wäre der Absatz wieder schwarz. Die Wichtigkeit von Inline setzt sich gegenüber allen anderen vom Autor deklarierten `!wichtig` Deklarationen durch, egal wie spezifisch sie sind.

> [!NOTE]
> Das `!wichtig`-Flag kehrt den Vorrang der Kaskadenschichten um. Verwenden Sie daher nach Möglichkeit nicht `!wichtig`, um externe Stile zu überschreiben. Verwenden Sie stattdessen {{cssxref("@import")}} in Kombination mit dem Schlüsselwort `layer` oder der Funktion `layer()`, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Schichten zu importieren. Das Importieren von Stylesheets in eine Schicht als erste Deklaration in Ihrem CSS senkt ihren Vorrang, und vom Autor definierte Schichten, die später in Ihrem CSS definiert sind, haben eine höhere Priorität. Das `!wichtig`-Flag sollte nur sparsam verwendet werden, wenn überhaupt, um erforderliche Stile vor späteren Überschreibungen in der zuerst deklarierten Schicht zu schützen.

Stile, die sich in einem Übergang befinden, haben Vorrang vor allen wichtigen Stilen, unabhängig davon, wer sie deklariert hat oder wie sie deklariert wurden.

## Vollständige Kaskadenordnung

Jetzt, da wir ein besseres Verständnis von Ursprungstyp und Kaskadenschichtenvorang haben, erkennen wir, dass die Tabelle in [Kaskadenreihenfolge](#kaskadenreihenfolge) genauer durch die folgende Tabelle dargestellt werden könnte:

<table>
<thead>
  <tr><th>Vorrangsreihenfolge <br/>(niedrig bis hoch)</th><th>Stilorigin</th><th>Wichtigkeit</th></tr>
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
  <tr><td rowspan="4">5</td><td>Autor - ungeschichtete Stile</td><td rowspan="4"><code>!wichtig</code></td></tr>
  <tr><td>Autor - letzte deklarierte Schicht</td></tr>
  <tr><td>Autor - erste deklarierte Schicht</td></tr>
  <tr><td>inline <code>style</code></td></tr>
  <tr><td rowspan="3">6</td><td>Benutzer - ungeschichtete Stile</td><td rowspan="3"><code>!wichtig</code></td></tr>
  <tr><td>Benutzer - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzer - erste deklarierte Schicht</td></tr>
  <tr><td rowspan="3">7</td><td>Benutzeragent - ungeschichtete Stile</td><td rowspan="3"><code>!wichtig</code></td></tr>
  <tr><td>Benutzeragent - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzeragent - erste deklarierte Schicht</td></tr>
  <tr><td>8</td><td>Übergänge</td><td></td></tr>
</tbody>
</table>

## Welche CSS-Entitäten nehmen an der Kaskade teil

Nur CSS-Eigenschafts-/Wertpaardeklarationen nehmen an der Kaskade teil. CSS-At-Regel-Deskriptoren nehmen nicht an der Kaskade teil und HTML-Präsentationsattribute sind nicht Teil der Kaskade.

### At-Regeln

CSS-[At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule), die andere Entitäten als Deklarationen enthalten, wie z.B. eine {{ cssxref("@font-face")}} Regel mit _Deskriptoren_, nehmen nicht an der Kaskade teil.

Der Großteil der in At-Regeln definierten Eigenschaften und Deskriptoren nimmt nicht an der Kaskade teil. Nur At-Regeln als Ganzes nehmen an der Kaskade teil. Zum Beispiel, innerhalb einer `@font-face` Regel werden Schriftartennamen durch [`font-family`](/de/docs/Web/CSS/@font-face/font-family) Deskriptoren identifiziert. Wenn mehrere `@font-face` Regeln mit demselben Deskriptor definiert sind, wird nur die passendste `@font-face` als Ganzes betrachtet. Wenn mehr als eine identisch passend ist, werden die gesamten `@font-face` Deklarationen mit den Schritten 1, 2 und 4 des Algorithmus verglichen (es gibt keine Spezifität bei At-Regeln).

Während die Deklarationen in den meisten At-Regeln – wie denen in {{cssxref("@media")}}, {{cssxref("@document")}}, oder {{cssxref("@supports")}} – an der Kaskade teilnehmen, kann die At-Regel einen gesamten Selektor irrelevant machen, wie wir es im [einfachen Beispiel](#einfaches_beispiel) mit dem Druckstil gesehen haben.

Deklarationen in {{cssxref("@keyframes")}} nehmen nicht an der Kaskade teil. Wie bei `@font-face` wird nur die `@keyframes` als Ganzes über den Kaskadenalgorithmus ausgewählt. Die [Vorrangsreihenfolge der Animation wird unten beschrieben](#css-animationen_und_die_kaskade).

Wenn es um {{cssxref("@import")}} geht, nimmt die `@import` nicht selbst an der Kaskade teil, aber alle importierten Stile tun es. Wenn die `@import` eine [benannte oder anonyme Schicht](/de/docs/Web/CSS/@layer) definiert, werden die Inhalte des importierten Stylesheets in die angegebene Schicht platziert. Alle anderen mit `@import` importierten CSS werden als die letzte deklarierte Schicht behandelt. Dies wurde oben diskutiert.

Schließlich unterliegt {{cssxref("@charset")}} spezifischen Algorithmen und wird nicht vom Kaskadenalgorithmus beeinflusst.

### Präsentationsattribute

Präsentationsattribute sind Attribute im Quelldokument, die das Styling beeinflussen können. Zum Beispiel setzt das deprecated `align` Attribut die Ausrichtung auf mehreren HTML-Elementen und das `fill` Attribut definiert die Farbe, die verwendet wird, um SVG-Formen und Text zu bemalen und definiert den endgültigen Zustand für SVG-Animationen. Obwohl sie Autorenstile sind, nehmen Präsentationsattribute nicht an der Kaskade teil.

Wenn das HTML-Präsentationsattribut vom Benutzeragent unterstützt wird, werden gültige Präsentationsattribute, die in HTML und SVG enthalten sind, wie die [`align`](/de/docs/Web/HTML/Reference/Elements/img#align) oder [`fill`](/de/docs/Web/SVG/Reference/Attribute/fill) Attribute, in die entsprechenden CSS-Regeln (alle SVG-Präsentationsattribute werden als CSS-Eigenschaften unterstützt) übersetzt und in das Autoren-Stylesheet eingefügt, bevor andere Stile mit einer Spezifität von gleich `0`.

Präsentationsattribute können nicht als `!wichtig` deklariert werden.

## CSS-Animationen und die Kaskade

[CSS-Animationen](/de/docs/Web/CSS/CSS_animations), die {{cssxref("@keyframes")}} At-Regeln verwenden, definieren Animationen zwischen Zuständen. `@keyframes` kaskadieren nicht, das bedeutet, zu jedem gegebenen Zeitpunkt nimmt CSS Werte aus nur einem einzigen Satz von `@keyframes` und vermischt niemals mehrere. Wenn mehrere Sets von `@keyframes` mit demselben Animationsnamen definiert sind, wird das zuletzt definierte Set im Ursprung und in der Schicht mit der größten Priorität verwendet. Andere `@keyframes` werden ignoriert, selbst wenn sie unterschiedliche Eigenschaften animieren.

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

In diesem Beispiel gibt es drei separate Animationsdeklarationen mit dem Namen `repeatedName`. Wenn `animation: infinite 5s alternate repeatedName` auf den Absatz angewendet wird, wird nur eine Animation angewendet: die `keyframe` Animation, die im ungeschichteten CSS definiert ist, hat Vorrang vor den geschichteten `keyframe` Animationsdeklarationen basierend auf der Prioritätsordnung von Ursprung und Schicht. In diesem Beispiel wird nur die Schriftgröße des Elements animiert.

> [!NOTE]
> Es gibt keine wichtigen Animationen, da Eigenschaftsdeklarationen in einem {{cssxref('@keyframes')}} Block, die `!wichtig` als Teil des Wertes enthalten, ignoriert werden.

## Zurücksetzen von Stilen

Nachdem Ihr Inhalt die Stile abgeschlossen hat, kann er sich in einer Situation finden, in der er sie in einen bekannten Zustand zurückversetzen muss. Dies kann bei Animationen, Themenänderungen und so weiter passieren. Die CSS-Eigenschaft {{cssxref("all")}} ermöglicht es Ihnen, alles (fast) in CSS schnell in einen bekannten Zustand zurückzusetzen.

`All` ermöglicht es Ihnen, sofort alle Eigenschaften in einen ihrer ursprünglichen (Standard-)Zustände, den von der vorherigen Ebene der Kaskade geerbten Zustand, einen bestimmten Ursprung (das Benutzeragent-Stylesheet, das Autoren-Stylesheet oder das Benutzer-Stylesheet) zurückzusetzen oder die Werte der Eigenschaften gänzlich zu löschen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Initial](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechnet](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [verwendet](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
