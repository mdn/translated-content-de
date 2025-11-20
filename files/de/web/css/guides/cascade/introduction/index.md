---
title: Einführung in den CSS-Cascade
short-title: Introduction
slug: Web/CSS/Guides/Cascade/Introduction
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

Der **Cascade** ist ein Algorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte kombinieren, die aus unterschiedlichen Quellen stammen. Der Cascade definiert den Ursprung und die Ebene, die Vorrang hat, wenn Deklarationen in mehr als einem [Ursprung](#ursprungstypen), einer [Cascade-Ebene](/de/docs/Web/CSS/Reference/At-rules/@layer) oder {{CSSxRef("@scope")}}-Block einen Wert für eine Eigenschaft eines Elements festlegen.

Der Cascade liegt im Kern von CSS, wie der Name betont: _**Cascading**_ Style Sheets. Wenn ein [Selektor](/de/docs/Web/CSS/Guides/Selectors) mit einem Element übereinstimmt, wird der Eigenschaftswert vom Ursprung mit dem höchsten Vorrang angewendet, selbst wenn der Selektor von einem Ursprung oder einer Ebene mit niedrigerem Vorrang eine größere [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) aufweist.

Dieser Artikel erklärt, was der Cascade ist und in welcher Reihenfolge {{Glossary("CSS", "CSS")}}-[Deklarationen](/de/docs/Web/API/CSSStyleDeclaration) abgewickelt werden, einschließlich Cascade-Ebenen und Ursprungstypen. Das Verständnis der Priorität von Ursprüngen ist der Schlüssel zum Verständnis des Cascade.

## Ursprungstypen

Die Aufgabe des CSS-Cascade-Algorithmus besteht darin, CSS-Deklarationen auszuwählen, um die korrekten Werte für CSS-Eigenschaften zu bestimmen. CSS-Deklarationen stammen aus verschiedenen Ursprungstypen: **[Benutzeragenten-Stileheets](#benutzeragenten-stileheets)**, **[Autor-Stileheets](#autor-stileheets)** und **[Benutzer-Stileheets](#benutzer-stileheets)**.

Obwohl Stileheets aus diesen unterschiedlichen Ursprüngen kommen und sich innerhalb unterschiedlicher [Ebenen](/de/docs/Web/CSS/Reference/At-rules/@layer) in jedem dieser Ursprünge befinden können, überschneiden sie sich in Bezug auf ihren Standardumfang; um dies zu ermöglichen, definiert der Cascade-Algorithmus, wie sie interagieren. Bevor wir die Interaktionen ansprechen, werden wir in den nächsten Abschnitten einige Schlüsselbegriffe definieren.

### Benutzeragenten-Stileheets

Benutzeragenten oder Browser haben grundlegende Stileheets, die jedem Dokument Standardstile verleihen. Diese Stileheets werden als **Benutzeragenten-Stileheets** bezeichnet. Die meisten Browser verwenden für diesen Zweck tatsächliche Stileheets, während andere sie im Code simulieren. Das Endergebnis ist dasselbe.

Einige Browser erlauben es Benutzern, das Benutzeragenten-Stileheet zu modifizieren, aber dies ist selten und kann nicht gesteuert werden.

Obwohl einige Einschränkungen für Benutzeragenten-Stileheets durch die HTML-Spezifikation festgelegt sind, haben Browser viel Freiheit: Das bedeutet, dass es einige Unterschiede zwischen Browsern gibt. Um den Entwicklungsprozess zu vereinfachen, können Webentwickler ein CSS-Reset-Stilesheet verwenden, wie zum Beispiel [normalize.css](https://github.com/necolas/normalize.css), das Standardwerte für alle Browser auf einen bekannten Zustand setzt, bevor sie Änderungen vornehmen, um ihren spezifischen Bedürfnissen gerecht zu werden.

Sofern das Benutzeragenten-Stilesheet kein [`!important`](/de/docs/Web/CSS/Guides/Cascade/Specificity#the_!important_exception) neben einer Eigenschaft enthält, das sie "wichtig" macht, haben von Autoren deklarierte Stile einschließlich eines Reset-Stilesheets Vorrang vor den Benutzeragenten-Stilen, unabhängig von der Spezifität des zugehörigen Selektors.

### Autor-Stileheets

**Autor-Stileheets** sind die häufigste Art von Stileheets; dies sind die Stile, die von Webentwicklern geschrieben werden. Diese Stile können Benutzeragenten-Stile zurücksetzen, wie oben erwähnt, und die Stile für das Design einer gegebenen Webseite oder Anwendung definieren. Der Autor oder Webentwickler definiert die Stile für das Dokument durch die Verwendung eines oder mehrerer verlinkter oder importierter Stileheets, {{HTMLElement('style')}}-Blöcke und Inline-Stile, die mit dem [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut definiert sind. Diese Autorenstile definieren das Aussehen und das Gefühl der Website – ihr Thema.

### Benutzer-Stileheets

In den meisten Browsern kann der Benutzer (oder Leser) der Website wählen, Stile mit einem benutzerdefinierten **Benutzer-Stilesheet** außer Kraft zu setzen, das dazu entworfen ist, das Erlebnis auf die Wünsche des Benutzers abzustimmen. Abhängig vom Benutzeragenten können [Benutzerstile konfiguriert werden](https://www.thoughtco.com/user-style-sheet-3469931) oder über Browser-Erweiterungen hinzugefügt werden.

### Cascade-Ebenen

Die Reihenfolge im Cascade basiert auf dem Ursprungstyp. Der Cascade innerhalb jedes Ursprungstyps basiert auf der Deklarationsreihenfolge von [Cascade-Ebenen](/de/docs/Web/CSS/Reference/At-rules/@layer) innerhalb dieses Typs. Für alle Ursprünge – Benutzeragent, Autor oder Benutzer – können Stile innerhalb oder außerhalb benannter oder anonymer Ebenen deklariert werden. Wenn sie mit [`layer`, `layer()`](/de/docs/Web/CSS/Reference/At-rules/@import) oder [`@layer`](/de/docs/Web/CSS/Reference/At-rules/@layer) deklariert werden, werden Stile in die benannte Ebene oder in eine anonyme Ebene eingeordnet, wenn kein Name angegeben ist. Stile, die außerhalb einer Ebene deklariert werden, werden behandelt, als ob sie Teil der zuletzt deklarierten anonymen Ebene wären.

Werfen wir einen Blick auf die Art des Cascading-Ursprungs, bevor wir uns mit den Cascade-Ebenen innerhalb jedes Ursprungstyps befassen.

## Cascading-Reihenfolge

Der Cascade-Algorithmus bestimmt, wie der anzuwendende Wert für jede Eigenschaft für jedes Dokumentelement ermittelt wird. Die folgenden Schritte gelten für den Cascade-Algorithmus:

1. **Relevanz**: Zuerst filtert er alle Regeln aus den verschiedenen Quellen, um nur die Regeln beizubehalten, die auf ein bestimmtes Element angewendet werden. Das bedeutet Regeln, deren Selektor auf das gegebene Element passt und die Teil einer geeigneten `media`-At-Regel sind.
2. **Ursprung und Wichtigkeit**: Dann sortiert er diese Regeln entsprechend ihrer Wichtigkeit, das heißt, ob sie von `!important` gefolgt werden oder nicht, und nach ihrem Ursprung. Die Cascade-Reihenfolge ohne Berücksichtigung der Ebenen ist wie folgt:

   | Vorrangordnung (niedrig bis hoch) | Ursprung                        | Wichtigkeit  |
   | --------------------------------- | ------------------------------- | ------------ |
   | 1                                 | Benutzeragent (Browser)         | normal       |
   | 2                                 | Benutzer                        | normal       |
   | 3                                 | Autor (Entwickler)              | normal       |
   | 4                                 | CSS-Schlüsselrahmen-Animationen |              |
   | 5                                 | Autor (Entwickler)              | `!important` |
   | 6                                 | Benutzer                        | `!important` |
   | 7                                 | Benutzeragent (Browser)         | `!important` |
   | 8                                 | CSS-Übergänge                   |              |

3. **Spezifität**: Bei Gleichheit des Ursprungs wird die [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) einer Regel berücksichtigt, um einen Wert auszuwählen. Die Spezifität der Selektoren wird verglichen, und die Deklaration mit der höchsten Spezifität gewinnt.
4. **Scoping-Nähe**: Wenn zwei Selektoren in der Ursprungsebene mit Vorrang dieselbe Spezifität haben, gewinnt der Eigenschaftswert innerhalb von Skopierungen mit der kleinsten Anzahl von Schritten nach oben in der DOM-Hierarchie zur Skopierungswurzel. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.
5. **Reihenfolge des Erscheinens**: In der Ursprungsebene mit Vorrang, wenn es konkurrierende Werte für eine Eigenschaft gibt, die in Stilblöcken mit passenden Selektoren gleicher Spezifität und Skoping-Nähe enthalten sind, wird die letzte Deklaration in der Reihenfolge der Stile angewendet.

Der Cascade ist aufsteigend, was bedeutet:

- Animationen haben Vorrang vor normalen Werten, egal ob sie in Benutzer-, Autor- oder Benutzeragenten-Stilen deklariert sind.
- Wichtige Werte haben Vorrang vor Animationen, unabhängig davon, ob sie in Benutzer-, Autor- oder Benutzeragenten-Stilen deklariert sind.
- Übergänge haben Vorrang vor wichtigen Werten.

> [!NOTE]
> **Übergänge und Animationen**
>
> Eigenschaftswerte, die durch Animation {{cssxref('@keyframes')}} festgelegt werden, sind wichtiger als alle normalen Stile (diejenigen ohne [`!important`](/de/docs/Web/CSS/Guides/Cascade/Specificity#the_!important_exception) gesetzt).
>
> Eigenschaftswerte, die in einer {{cssxref('transition')}} festgelegt werden, haben Vorrang vor allen anderen gesetzten Werten, selbst denen mit `!important`.

Der Cascade-Algorithmus wird _vor_ dem Spezifitätsalgorithmus angewendet, was bedeutet, wenn `:root p { color: red;}` im Benutzer-Stilesheet (Zeile 2) deklariert ist und ein weniger spezifisches `p {color: blue;}` im Autor-Stilesheet (Zeile 3), werden die Absätze blau sein.

## Einfaches Beispiel

Bevor wir uns eingehender damit befassen, wie Cascade-Ebenen den Cascade beeinflussen, werfen wir einen Blick auf ein Beispiel mit mehreren Quellen von CSS aus den verschiedenen Ursprüngen und arbeiten die Schritte des Cascade-Algorithmus durch:

Hier haben wir ein Benutzeragenten-Stilesheet, zwei Autor-Stilesheets und ein Benutzer-Stilesheet, ohne Inline-Stile im HTML:

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

In diesem Fall sollten Deklarationen innerhalb der `li`- und `.specific`-Regeln angewendet werden.

Erneut gibt es fünf Schritte im Cascade-Algorithmus, in Reihenfolge:

1. Relevanz
2. Ursprung und Wichtigkeit
3. Spezifität
4. Scoping-Nähe
5. Reihenfolge des Erscheinens

Das `1px` ist für Druckmedien. Aufgrund mangelnder _Relevanz_ basierend auf seinem Medientyp wird es nicht berücksichtigt.

Keine Deklaration ist als `!important` markiert, daher ist die Vorrangordnung Autor-Stilesheets vor Benutzer-Stilesheets vor Benutzeragenten-Stilesheet. Basierend auf _Ursprung und Wichtigkeit_ werden das `1em` aus dem Benutzer-Stilesheet und das `10px` aus dem Benutzeragenten-Stilesheet nicht berücksichtigt.

Beachten Sie, dass selbst wenn der Benutzer-Stil auf `.specific` von `1em` eine höhere Spezifität hat, es sich um eine normale Deklaration in einem Benutzer-Stilesheet handelt. Daher hat sie einen niedrigeren Vorrang als jede Autoren-Stile, und wird durch den Schritt Ursprung und Bedeutung des Algorithmus entfernt, bevor die Spezifität überhaupt ins Spiel kommt.

Es gibt drei Deklarationen in Autoren-Stilesheets:

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

Die letzte, die `5px`, ist Teil einer Cascade-Ebene. Normale Deklarationen in Ebenen haben niedrigeren Vorrang als normale Stile, die nicht in einer Ebene innerhalb desselben Ursprungstyps sind. Dies wird ebenfalls durch Schritt 2 des Algorithmus, _Ursprung und Wichtigkeit_, entfernt.

Dies lässt die `0` und die `3px` übrig, die beide denselben Selektor haben, daher dieselbe _Spezifität_. Keiner von ihnen befindet sich innerhalb eines `@scope`-Blocks, daher spielt die Skoping-Nähe in diesem Beispiel ebenfalls keine Rolle.

Wir sehen uns dann die _Reihenfolge des Erscheinens_ an. Die zweite, die letzte der beiden nicht geschichteten Autoren-Stile, gewinnt.

```css
margin-left: 3px;
```

> [!NOTE]
> Die Deklaration, die im Benutzer-CSS definiert ist, wird nicht gewählt, auch wenn sie möglicherweise eine größere Spezifität hat, da der _Ursprung und die Wichtigkeit_ des Cascade-Algorithmus vor dem _Spezifitäts_-Algorithmus angewendet werden. Die in einer Cascade-Ebene definierte Deklaration wird nicht den Vorrang haben, selbst wenn sie später im Code kommt, da normale Stile in Cascade-Ebenen weniger Vorrang haben als normale nicht geschichtete Stile. _Reihenfolge des Erscheinens_ ist nur dann von Bedeutung, wenn sowohl Ursprung, Bedeutung als auch Spezifität gleich sind.

## Autor-Stile: Inline-Stile, Ebenen und Vorrang

Die [Tabelle in Cascading-Reihenfolge](#cascading-reihenfolge) bietet einen Überblick über die Vorrangordnung. Die Tabelle fasste die Benutzeragenten-, Benutzer- und Autor-Ursprungstypen-Stile in jeweils zwei Zeilen mit "Ursprungstyp - normal" und "Ursprungstyp - !important" zusammen. Der Vorrang innerhalb jedes Ursprungstyps ist differenzierter. Stile können innerhalb ihrer Ursprungstypebenen enthalten sein, und bei Autorenstilen gibt es auch die Frage, wo Inline-Stile in der Cascade-Reihenfolge stehen.

Die Reihenfolge, in der Ebenen deklariert werden, ist wichtig, um den Vorrang zu bestimmen. Normale Stile in einer Ebene haben Vorrang vor Stilen, die in vorherigen Ebenen deklariert wurden; wobei normale Stile, die außerhalb einer Ebene deklariert wurden, Vorrang vor normalen geschichteten Stilen haben, unabhängig von der Spezifität.

In diesem Beispiel verwendete der Autor die {{CSSXref('@import')}}-Regel von CSS, um fünf externe Stilblätter innerhalb eines {{HTMLElement('style')}}-Informationselements zu importieren.

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

Im obigen CSS-Codeblock wurden drei Cascade-Ebenen mit den Namen "A", "B" und "C" erstellt, in dieser Reihenfolge. Drei Stileheets wurden direkt in Ebenen importiert und zwei wurden ohne Erstellung oder Zuweisung zu einer Ebene importiert. Die "Alle nicht geschichteten Stile" in der folgenden Liste (normaler Autorstil-Vorrang - Reihenfolge 4) umfasst Stile aus diesen beiden Stilblättern und den zusätzlichen ungeschichteten CSS-Stilblöcken. Darüber hinaus gibt es zwei Inline-Stile, eine normale `line-height`-Deklaration und eine wichtige `text-decoration`-Deklaration:

| Vorrangordnung (niedrig bis hoch) | Autorenstil                | Wichtigkeit  |
| --------------------------------- | -------------------------- | ------------ |
| 1                                 | A - erste Ebene            | normal       |
| 2                                 | B - zweite Ebene           | normal       |
| 3                                 | C - letzte Ebene           | normal       |
| 4                                 | Alle ungeschichteten Stile | normal       |
| 5                                 | Inline-`style`             | normal       |
| 6                                 | Animationen                |              |
| 7                                 | Alle ungeschichteten Stile | `!important` |
| 8                                 | C - letzte Ebene           | `!important` |
| 9                                 | B - zweite Ebene           | `!important` |
| 10                                | A - erste Ebene            | `!important` |
| 11                                | Inline-`style`             | `!important` |
| 12                                | Übergänge                  |              |

In allen Ursprungstypen haben normale Stile, die in Ebenen enthalten sind, den niedrigsten Vorrang. In unserem Beispiel haben die normalen Stile, die mit der zuerst deklarierten Ebene (A) verbunden sind, einen niedrigeren Vorrang als normale Stile in der zweiten deklarierten Ebene (B), die wiederum einen niedrigeren Vorrang als normale Stile in der dritten deklarierten Ebene (C) haben. Diese geschichteten Stile haben weniger Vorrang als alle normalen ungeschichteten Stile, einschließlich normaler Stile aus `unlayeredStyles.css`, `moreUnlayeredStyles.css` und der `color` von `p` im `<style>` selbst.

Wenn irgendwelche geschichteten Stile in A, B oder C Selektoren mit höherer Spezifität hätten, die mit einem Element übereinstimmen, ähnlich wie `:root body p { color: black; }`, spielt das keine Rolle. Diese Deklarationen werden aufgrund des _Ursprungs_ nicht berücksichtigt; normale geschichtete Stile haben weniger Vorrang als normale ungeschichtete Stile. Wenn jedoch der spezifischere Selektor `:root body p { color: black; }` in `unlayeredStyles.css` gefunden würde, würden bei gleicher _Herkunft und Wichtigkeit_ die _Spezifität_ bedeuten, dass die spezifischeren, schwarzen Deklaration gewinnt.

Die Reihenfolge des Vorrangs der Ebene wird für als `!important` deklarierte Stile umgekehrt. Wichtige Deklarationen, die in einer Ebene gefunden werden, haben Vorrang vor wichtigen Deklarationen, die außerhalb einer Ebene gefunden werden. Wichtige Deklarationen in der ersten Ebene (A) haben Vorrang vor wichtigen Deklarationen, die in Ebene B gefunden werden, die wiederum Vorrang vor wichtigen Deklarationen in Ebene C haben, die wiederum Vorrang vor wichtigen Deklarationen haben, die außerhalb einer Ebene gefunden werden.

### Inline-Stile

Nur für Autorenstile sind Inline-Stile relevant, die mit dem `style`-Attribut deklariert sind. Normale Inline-Stile haben Vorrang vor allen anderen normalen Autorenstilen, unabhängig von der Spezifität des Selektors. Wenn `line-height: 2;` in einem `:root body p`-Selektorblock in einem der fünf importierten Stilblätter deklariert wäre, würde die Zeilenhöhe dennoch `1.6` betragen. Normale Inline-Stile haben keinen Vorrang vor animierten oder übergangenen Eigenschaften.

Wichtige Inline-Stile haben Vorrang vor allen anderen Autorenstilen, unabhängig davon, ob sie wichtig, inline oder geschichtet sind. Wichtige Inline-Stile haben auch Vorrang vor animierten Eigenschaften, jedoch nicht vor übergangenen Eigenschaften. Drei Dinge können einen wichtigen Inline-Stil außer Kraft setzen:

- Ein wichtiger Benutzerstil.
- Ein wichtiger Benutzeragentenstil.
- Eine übergangene Eigenschaft.

### Bedeutung und Ebenen

Die Vorrangsreihenfolge des Ursprungstyps ist für wichtige Stile umgekehrt. Wichtige Stile, die außerhalb einer Cascade-Ebene deklariert werden, haben weniger Vorrang als solche, die als Teil einer Ebene deklariert werden. Wichtige Stile, die in frühen Ebenen kommen, haben Vorrang vor wichtigen Stilen, die in nachfolgenden Cascade-Ebenen deklariert werden.

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

Selbst wenn das Rot zuerst deklariert wird und ein weniger spezifischer Selektor hat, da nicht geschichtetes CSS Vorrang vor geschichtetem CSS hat, wird der Absatz rot sein. Hätten wir einen Inline-Stil auf dem Absatz eingefügt, der ihn auf eine andere Farbe setzt, wie `<p style="color: black">`, würde der Absatz schwarz sein.

Wenn wir `!important` zu diesem Stück CSS hinzufügen, wird die Vorrangsreihenfolge innerhalb des Stylesheets umgekehrt:

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

Jetzt wird der Absatz blau sein. Das `!important` in der frühesten deklarierten Ebene hat Vorrang vor nachfolgenden Ebenen und nicht geschichteten wichtigen Deklarationen. Wenn der Inline-Stil `!important` enthielte, wie `<p style="color: black !important">`, würde der Absatz ebenfalls schwarz sein. Inline-Wichtigkeit hat Vorrang vor allen anderen vom Autor deklarierten `!important`-Deklarationen, unabhängig von der Spezifität.

> [!NOTE]
> Das `!important`-Flag kehrt die Vorrangsreihenfolge der Cascade-Ebenen um. Aus diesem Grund sollten Sie `!important` nicht benutzen, um externe Stile zu überschreiben. Verwenden Sie stattdessen {{cssxref("@import")}} zusammen mit dem Schlüsselwort `layer` oder der Funktion `layer()`, um externe Stilblätter (aus Frameworks, Widget-Stilblättern, Bibliotheken usw.) in Ebenen zu importieren. Das Importieren von Stilblättern in eine Ebene als erste Deklaration in Ihrem CSS senkt ihren Vorrang, und vom Autor definierte Ebenen, die später in Ihrem CSS definiert werden, haben einen höheren Vorrang. Das `!important`-Flag sollte nur sparsam, wenn überhaupt, verwendet werden, um erforderliche Stile gegen spätere Überschreibungen in der zuerst deklarierten Ebene zu schützen.

Stile, die sich im Übergang befinden, haben Vorrang vor allen wichtigen Stilen, egal von wem oder wie sie deklariert werden.

## Vollständige Cascade-Reihenfolge

Jetzt, da wir ein besseres Verständnis des Ursprungstyps und der Cascade-Ebenen-Vorrang haben, erkennen wir, dass die Tabelle in [Cascading-Reihenfolge](#cascading-reihenfolge) genauer durch die folgende Tabelle dargestellt werden könnte:

<table>
<thead>
  <tr><th>Vorrangordnung <br/>(niedrig bis hoch)</th><th>Stil-Ursprung</th><th>Wichtigkeit</th></tr>
</thead>
<tbody>
  <tr><td rowspan="3">1</td><td>Benutzeragent - erste deklarierte Ebene</td><td rowspan="3">normal</td></tr>
  <tr><td>Benutzeragent - letzte deklarierte Ebene</td></tr>
  <tr><td>Benutzeragent - nicht geschichtete Stile</td></tr>
  <tr><td rowspan="3">2</td><td>Benutzer - erste deklarierte Ebene</td><td rowspan="3">normal</td></tr>
  <tr><td>Benutzer - letzte deklarierte Ebene</td></tr>
  <tr><td>Benutzer - nicht geschichtete Stile</td></tr>
  <tr><td rowspan="4">3</td><td>Autor - erste deklarierte Ebene</td><td rowspan="4">normal</td></tr>
  <tr><td>Autor - letzte deklarierte Ebene</td></tr>
  <tr><td>Autor - nicht geschichtete Stile</td></tr>
  <tr><td>Inline <code>style</code></td></tr>
  <tr><td>4</td><td>Animationen</td><td></td></tr>
  <tr><td rowspan="4">5</td><td>Autor - nicht geschichtete Stile</td><td rowspan="4"><code>!important</code></td></tr>
  <tr><td>Autor - letzte deklarierte Ebene</td></tr>
  <tr><td>Autor - erste deklarierte Ebene</td></tr>
  <tr><td>Inline <code>style</code></td></tr>
  <tr><td rowspan="3">6</td><td>Benutzer - nicht geschichtete Stile</td><td rowspan="3"><code>!important</td></tr>
  <tr><td>Benutzer - letzte deklarierte Ebene</td></tr>
  <tr><td>Benutzer - erste deklarierte Ebene</td></tr>
  <tr><td rowspan="3">7</td><td>Benutzeragent - nicht geschichtete Stile</td><td rowspan="3"><code>!important</code></td></tr>
  <tr><td>Benutzeragent - letzte deklarierte Ebene</td></tr>
  <tr><td>Benutzeragent - erste deklarierte Ebene</td></tr>
  <tr><td>8</td><td>Übergänge</td><td></td></tr>
</tbody>
</table>

## Welche CSS-Entitäten nehmen an der Cascade teil

Nur CSS-Eigenschaft/Wert-Paar-Deklarationen nehmen an der Cascade teil. CSS-At-Regel-Deskriptoren nehmen nicht an der Cascade teil und HTML-Präsentationsattribute sind nicht Teil der Cascade.

### At-Regeln

CSS-[At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules), die andere Entitäten als Deklarationen enthalten, wie eine {{ cssxref("@font-face")}}-Regel mit _Deskriptoren_, nehmen nicht an der Cascade teil.

Zum größten Teil nehmen die in At-Regeln definierten Eigenschaften und Deskriptoren nicht an der Cascade teil. Nur At-Regeln als Ganzes nehmen an der Cascade teil. Zum Beispiel innerhalb einer `@font-face`-Regel werden Schriftartnamen durch [`font-family`](/de/docs/Web/CSS/Reference/At-rules/@font-face/font-family)-Deskriptoren identifiziert. Wenn mehrere `@font-face`-Regeln mit demselben Deskriptor definiert wurden, wird nur die am besten geeignete `@font-face` als Ganzes betrachtet. Wenn mehr als eine identisch geeignet ist, werden die gesamten `@font-face`-Deklarationen mit den Schritten 1, 2, und 4 des Algorithmus verglichen (es gibt keine Spezifität, wenn es um At-Regeln geht).

Während die in den meisten At-Regeln enthaltenen Deklarationen — wie die in {{cssxref("@media")}}, {{cssxref("@document")}}, oder {{cssxref("@supports")}} — an der Cascade teilnehmen, kann die At-Regel einen gesamten Selektor irrelevant machen, wie wir es im [einfachen Beispiel](#einfaches_beispiel) gesehen haben.

Deklarationen in {{cssxref("@keyframes")}} nehmen nicht an der Cascade teil. Ebenso wie `@font-face` wird nur das `@keyframes` als Ganzes über den Cascade-Algorithmus ausgewählt. Die [Vorrangsordnung der Animation ist unten beschrieben](#css-animationen_und_der_cascade).

Wenn es um {{cssxref("@import")}} geht, nimmt das `@import` selbst nicht an der Cascade teil, aber alle importierten Stile nehmen daran teil. Wenn das `@import ` eine [benannte oder anonyme Ebene](/de/docs/Web/CSS/Reference/At-rules/@layer) definiert, werden die Inhalte des importierten Stilblatts in die angegebene Ebene platziert. Alle anderen mit `@import` importierten CSS werden als letzte deklarierte Ebene behandelt. Dies wurde oben behandelt.

Schließlich folgt {{cssxref("@charset")}} spezifischen Algorithmen und ist nicht durch den Cascade-Algorithmus beeinflusst.

### Präsentationsattribute

Präsentationsattribute sind Attribute im Quelldokument, die das Styling beeinflussen können. Zum Beispiel setzt das so enthaltene, veraltete `align`-Attribut die Ausrichtung auf mehreren HTML-Elementen und das `fill`-Attribut definiert die Farbe, die verwendet wird, um SVG-Formen und -Text zu malen, und definiert den Endzustand für SVG-Animationen. Während sie Autorenstile sind, nehmen Präsentationsattribute nicht an der Cascade teil.

Wenn das HTML-Präsentationsattribut vom Benutzeragenten unterstützt wird, werden gültige Präsentationsattribute, die in HTML und SVG enthalten sind, wie die [`align`](/de/docs/Web/HTML/Reference/Elements/img#align) oder [`fill`](/de/docs/Web/SVG/Reference/Attribute/fill)-Attribute in die entsprechenden CSS-Regeln (alle SVG-Präsentationsattribute werden als CSS-Eigenschaften unterstützt) übersetzt und im Autor-Stilblatt vor allen anderen Stilen mit einer Spezifität von `0` eingefügt.

Präsentationsattribute können nicht als `!important` deklariert werden.

## CSS-Animationen und der Cascade

[CSS-Animationen](/de/docs/Web/CSS/Guides/Animations), die {{cssxref("@keyframes")}}-At-Regeln nutzen, definieren Animationen zwischen den Zuständen. `@keyframes` kaskadieren nicht, was bedeutet, dass CSS zu jedem beliebigen Zeitpunkt Werte nur aus einem einzigen Satz von `@keyframes` nimmt und nie mehrere mischt. Wenn mehrere Sätze von `@keyframes` mit demselben Animationsnamen definiert sind, wird der zuletzt im Ursprung und der Ebene mit dem höchsten Vorrang definierte Satz verwendet. Andere `@keyframes` werden ignoriert, selbst wenn sie verschiedene Eigenschaften animieren.

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

In diesem Beispiel gibt es drei separate Animationsdeklarationen namens `repeatedName`. Wenn `animation: infinite 5s alternate repeatedName` auf den Absatz angewendet wird, wird nur eine Animation angewendet: die Keyframe-Animation, die im nicht geschichteten CSS definiert ist, hat Vorrang vor den geschichteten Keyframe-Animationsdeklarationen basierend auf Ursprung- und Ebenen-vorrangsordnung. In diesem Beispiel wird nur die Schriftgröße des Elements animiert.

> [!NOTE]
> Es gibt keine wichtigen Animationen, da Eigenschaftsdeklarationen in einem {{cssxref('@keyframes')}}-Block, die `!important` als Teil des Wertes enthalten, ignoriert werden.

## Zurücksetzen von Styles

Nachdem Ihr Inhalt die Stile verändert hat, kann es vorkommen, dass er sie in einem bekannten Zustand wiederherstellen muss. Dies kann in Fällen von Animationen, Themenwechseln usw. vorkommen. Die CSS-Eigenschaft {{cssxref("all")}} ermöglicht es Ihnen, schnell (fast) alles in CSS auf einen bekannten Zustand zurückzusetzen.

`all` ermöglicht es Ihnen, sofort alle Eigenschaften in einen beliebigen ihrer ursprünglichen (standardmäßigen) Zustände zurückzusetzen, den von der vorherigen Ebene der Cascade geerbten Zustand, einen bestimmten Ursprung (das Benutzeragenten-Stilblatt, das Autoren-Stilblatt oder das Benutzer-Stilblatt) oder sogar die Werte der Eigenschaften vollständig zu löschen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade)-Modul
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Cascade-Ebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- [At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- Werte: [initial](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [computed](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [used](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value), und [actual](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
