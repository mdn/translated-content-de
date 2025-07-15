---
title: Einführung in die CSS-Kaskade
short-title: Introduction
slug: Web/CSS/CSS_cascade/Cascade
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **Kaskade** ist ein Algorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte aus verschiedenen Quellen kombinieren. Die Kaskade legt die Herkunft und Schicht fest, die Vorrang hat, wenn in mehr als einem [Ursprung](#herkunftstypen), [Kaskadenschicht](/de/docs/Web/CSS/@layer) oder {{CSSxRef("@scope")}} Block ein Wert für eine Eigenschaft an einem Element gesetzt wird.

Die Kaskade bildet den Kern von CSS, wie der Name schon andeutet: _**Cascading**_ Style Sheets. Wenn ein [Selektor](/de/docs/Web/CSS/CSS_selectors) ein Element trifft, wird der Eigenschaftswert aus dem Ursprung mit der höchsten Priorität angewendet, selbst wenn der Selektor von einem Ursprung oder einer Schicht mit niedrigerer Priorität eine höhere [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aufweist.

Dieser Artikel erklärt, was die Kaskade ist und die Reihenfolge, in der {{Glossary("CSS", "CSS")}}-[Deklarationen](/de/docs/Web/API/CSSStyleDeclaration) kaskadieren, wobei Kaskadenschichten und Herkunftstypen behandelt werden. Das Verständnis der Vorrangigkeit der Herkunft ist der Schlüssel zum Verständnis der Kaskade.

## Herkunftstypen

Die Aufgabe des CSS-Kaskadenalgorithmus ist es, CSS-Deklarationen auszuwählen, um die richtigen Werte für CSS-Eigenschaften zu bestimmen. CSS-Deklarationen stammen aus verschiedenen Herkunftstypen: **[Benutzeragenten-Stilvorlagen](#benutzeragenten-stilvorlagen)**, **[Autoren-Stilvorlagen](#autoren-stilvorlagen)** und **[Benutzer-Stilvorlagen](#benutzer-stilvorlagen)**.

Auch wenn Stilvorlagen aus diesen verschiedenen Ursprüngen stammen und sich in unterschiedlichen [Schichten](/de/docs/Web/CSS/@layer) innerhalb dieser Ursprünge befinden können, überschneiden sie sich in Bezug auf ihren Standardscope; um dies zu ermöglichen, definiert der Kaskadenalgorithmus, wie sie interagieren. Bevor wir uns den Interaktionen widmen, definieren wir in den nächsten Abschnitten einige Schlüsselbegriffe.

### Benutzeragenten-Stilvorlagen

Benutzeragenten oder Browser haben grundlegende Stilvorlagen, die jedem Dokument Standardstile zuweisen. Diese Stilvorlagen werden **Benutzeragenten-Stilvorlagen** genannt. Die meisten Browser verwenden dafür tatsächliche Stilvorlagen, während andere sie im Code simulieren. Das Endergebnis ist dasselbe.

Einige Browser erlauben es Benutzern, die Benutzeragenten-Stilvorlage zu ändern, aber das ist selten und kann nicht gesteuert werden.

Obwohl einige Beschränkungen für Benutzeragenten-Stilvorlagen durch die HTML-Spezifikation festgelegt sind, haben Browser viel Spielraum: Das bedeutet, dass es einige Unterschiede zwischen Browsern gibt. Um den Entwicklungsprozess zu vereinfachen, können Webentwickler eine CSS-Reset-Stilvorlage, wie zum Beispiel [normalize.css](https://github.com/necolas/normalize.css), verwenden, die gemeinsame Eigenschaftswerte für alle Browser in einen bekannten Zustand versetzt, bevor sie mit Anpassungen beginnen, um ihren spezifischen Anforderungen gerecht zu werden.

Wenn eine Benutzeragenten-Stilvorlage kein [`!important`](/de/docs/Web/CSS/CSS_cascade/Specificity#the_!important_exception) neben einer Eigenschaft enthält und sie damit "wichtig" macht, haben die von Autorenstilen, einschließlich einer Reset-Stilvorlage, deklarierten Stile Vorrang vor den Benutzeragenten-Stilen, unabhängig von der Spezifität des zugehörigen Selektors.

### Autoren-Stilvorlagen

**Autoren-Stilvorlagen** sind die häufigste Art von Stilvorlagen; es handelt sich um die Stile, die von Webentwicklern geschrieben wurden. Diese Stile können Benutzeragenten-Stile zurücksetzen, wie oben erwähnt, und die Stile für das Design einer bestimmten Webseite oder Anwendung definieren. Der Autor oder Webentwickler definiert die Stile für das Dokument mit einer oder mehreren verlinkten oder importierten Stilvorlagen, {{HTMLElement('style')}} Blöcken und Inline-Stilen, die mit dem [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attribut definiert werden. Diese Autorenstile definieren das Aussehen und das Gefühl der Webseite - ihr Thema.

### Benutzer-Stilvorlagen

In den meisten Browsern kann der Benutzer (oder Leser) der Webseite wählen, die Stile mit einer benutzerdefinierten **Benutzer-Stilvorlage** zu überschreiben, die darauf ausgelegt ist, das Erlebnis an die Wünsche des Benutzers anzupassen. Abhängig vom Benutzeragenten können [Benutzerstile konfiguriert](https://www.thoughtco.com/user-style-sheet-3469931) werden oder über Browsererweiterungen hinzugefügt werden.

### Kaskadenschichten

Die Kaskadenreihenfolge basiert auf dem Herkunftstyp. Die Kaskade innerhalb jedes Herkunftstyps basiert auf der Deklarationsreihenfolge der [Kaskadenschichten](/de/docs/Web/CSS/@layer) innerhalb dieses Typs. Für alle Ursprünge - Benutzeragent, Autor oder Benutzer - können Stile innerhalb oder außerhalb benannter oder anonymer Schichten deklariert werden. Wenn sie mit [`layer`, `layer()`](/de/docs/Web/CSS/@import) oder [`@layer`](/de/docs/Web/CSS/@layer) deklariert werden, werden die Stile in die angegebene benannte Schicht oder in eine anonyme Schicht eingeordnet, wenn kein Name angegeben ist. Stile, die außerhalb einer Schicht deklariert sind, werden als Teil einer zuletzt deklarierten anonymen Schicht behandelt.

Schauen wir uns die kaskadierende Herkunftsart an, bevor wir uns mit den Kaskadenschichten innerhalb jeder Herkunftsart befassen.

## Kaskadierende Reihenfolge

Der Kaskadenalgorithmus bestimmt, wie der Wert ermittelt wird, der für jede Eigenschaft für jedes Dokumentelement angewendet wird. Die folgenden Schritte gelten für den Kaskadenalgorithmus:

1. **Relevanz**: Zuerst filtert er alle Regeln aus den verschiedenen Quellen, um nur die Regeln zu behalten, die auf ein gegebenes Element anwendbar sind. Das bedeutet Regeln, deren Selektor auf das gegebene Element zutrifft und die Teil einer geeigneten `media` at-rule sind.
2. **Herkunft und Wichtigkeit**: Dann sortiert er diese Regeln nach ihrer Wichtigkeit, d.h. ob sie von `!important` gefolgt werden oder nicht, und nach ihrer Herkunft. Schichten vorerst ignorierend, sieht die Kaskadenreihenfolge folgendermaßen aus:

   | Vorrangordnung (niedrig bis hoch) | Herkunft                | Wichtigkeit  |
   | --------------------------------- | ----------------------- | ------------ |
   | 1                                 | Benutzeragent (Browser) | normal       |
   | 2                                 | Benutzer                | normal       |
   | 3                                 | Autor (Entwickler)      | normal       |
   | 4                                 | CSS-Animationen         |              |
   | 5                                 | Autor (Entwickler)      | `!important` |
   | 6                                 | Benutzer                | `!important` |
   | 7                                 | Benutzeragent (Browser) | `!important` |
   | 8                                 | CSS-Übergänge           |              |

3. **Spezifität**: Im Falle von Gleichheit mit einer Herkunft wird die [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) einer Regel berücksichtigt, um einen Wert auszuwählen. Die Spezifität der Selektoren wird verglichen, und die Erklärung mit der höchsten Spezifität gewinnt.
4. **Scoping-Nähe**: Wenn zwei Selektoren in der Ursprungsschicht mit Vorrang die gleiche Spezifität haben, gewinnt der Eigenschaftswert innerhalb von gescoped Regeln mit der kleinsten Anzahl von Hops nach oben in der DOM-Hierarchie zur Scope-Root. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für mehr Details und ein Beispiel.
5. **Erscheinungsreihenfolge**: In der Herkunft mit Vorrang, wenn es konkurrierende Werte für eine Eigenschaft gibt, die in einem Stilblock übereinstimmende Selektoren mit gleicher Spezifität und Scoping-Nähe haben, wird die letzte Deklaration in der Stilreihenfolge angewendet.

Die Kaskade ist in aufsteigender Reihenfolge, was bedeutet:

- Animationen haben Vorrang vor normalen Werten, unabhängig davon, ob sie in Benutzer-, Autor- oder Benutzeragentenstilen deklariert wurden.
- Wichtige Werte haben Vorrang vor Animationen, unabhängig davon, ob sie in Benutzer-, Autor- oder Benutzeragentenstilen deklariert wurden.
- Übergänge haben Vorrang vor wichtigen Werten.

> [!NOTE]
> **Übergänge und Animationen**
>
> Eigenschaftswerte, die durch Animationen {{cssxref('@keyframes')}} festgelegt werden, sind wichtiger als alle normalen Stile (diese ohne [`!important`](/de/docs/Web/CSS/CSS_cascade/Specificity#the_!important_exception) Einstellung).
>
> Eigenschaftswerte, die in einem {{cssxref('transition')}} festgelegt werden, haben Vorrang vor allen anderen festgelegten Werten, selbst denen, die mit `!important` gekennzeichnet sind.

Der Kaskadenalgorithmus wird _vor_ dem Spezifitätsalgorithmus angewendet, was bedeutet, wenn `:root p { color: red;}` in der Benutzer-Stilvorlage (Zeile 2) deklariert ist und ein weniger spezifisches `p {color: blue;}` in der Autoren-Stilvorlage (Zeile 3) vorhanden ist, werden die Absätze blau sein.

## Grundlegendes Beispiel

Bevor wir uns detaillierter damit befassen, wie Kaskadenschichten die Kaskade beeinflussen, betrachten wir ein Beispiel, das verschiedene Quellen von CSS über die verschiedenen Urspünge hinweg einbezieht, und arbeiten die Schritte des Kaskadenalgorithmus durch:

Hier haben wir eine Benutzeragenten-Stilvorlage, zwei Autorenstilvorlagen und eine Benutzerstilvorlage, ohne Inline-Stile im HTML:

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

In diesem Fall sollten Deklarationen innerhalb von `li` und `.specific` Regeln angewendet werden.

Es gibt erneut fünf Schritte im Kaskadenalgorithmus, in Reihenfolge:

1. Relevanz
2. Herkunft und Wichtigkeit
3. Spezifität
4. Scoping-Nähe
5. Erscheinungsreihenfolge

Die `1px` ist für Druckmedien. Aufgrund mangelnder _Relevanz_ basierend auf ihrem Medientyp wird sie aus der Betrachtung entfernt.

Keine Deklaration ist als `!important` gekennzeichnet, daher ist die Vorrangordnung Autoren-Stilvorlagen über Benutzer-Stilvorlagen über Benutzeragenten-Stilvorlage. Basierend auf _Herkunft und Wichtigkeit_ werden das `1em` aus der Benutzer-Stilvorlage und das `10px` aus der Benutzeragenten-Stilvorlage aus der Betrachtung entfernt.

Beachten Sie, dass selbst wenn der Benutzerstil auf `.specific` von `1em` eine höhere Spezifität hat, es sich um eine normale Deklaration in einer Benutzer-Stilvorlage handelt. Daher hat es eine niedrigere Vorrangigkeit als alle Autorenstile und wird durch den Ursprung und die Wichtigkeit des Algorithmus entfernt, bevor die Spezifität überhaupt ins Spiel kommt.

Es gibt drei Deklarationen in Autoren-Stilvorlagen:

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

Die letzte, die `5px` ist Teil einer Kaskadenschicht. Normale Deklarationen in Schichten haben niedrigere Vorrangigkeit als normale Stile, die nicht in einer Schicht innerhalb desselben Herkunftstyps sind. Dies wird auch durch Schritt 2 des Algorithmus, _Herkunft und Wichtigkeit_, entfernt.

Dies lässt das `0` und das `3px`, die beide den gleichen Selektor haben, daher die gleiche _Spezifität_. Keiner von ihnen ist innerhalb eines `@scope` Blocks, so dass die Scoping-Nähe in diesem Beispiel ebenfalls keine Rolle spielt.

Wir betrachten dann _Erscheinungsreihenfolge_. Das zweite, das letzte der beiden ungeschichteten Autorenstile, gewinnt.

```css
margin-left: 3px;
```

> [!NOTE]
> Die in der Benutzer CSS definierte Deklaration, auch wenn sie eine größere Spezifität haben mag, wird nicht gewählt, da der Kaskadenalgorithmus _Herkunft und Wichtigkeit_ vor der _Spezifität_ anwendet. Die in einer Kaskadenschicht definierte Deklaration wird ebenfalls nicht den Vorrang erhalten, auch wenn sie später im Code kommt, da normale Stile in Kaskadenschichten weniger Vorrang haben als normale ungeschichtete Stile. _Erscheinungsreihenfolge_ spielt nur dann eine Rolle, wenn sowohl Herkunft, Wichtigkeit als auch Spezifität gleich sind.

## Autorenstile: Inline-Stile, Schichten und Vorrangigkeit

Die [Tabelle in Kaskadierende Reihenfolge](#kaskadierende_reihenfolge) bot einen Überblick über die Vorrangordnung. Die Tabelle fasste die Benutzeragenten-, Benutzer- und Autoren-Herkunftstypstile in zwei Zeilen zusammen mit "Herkunftstyp - normal" und "Herkunftstyp - !important". Der Vorrang innerhalb jedes Herkunftstyps ist nuancierter. Stile können innerhalb von Schichten innerhalb ihres Herkunftstyps enthalten sein, und bei Autorenstilen gibt es auch die Frage, wo Inline-Stile in der Kaskadenordnung landen.

Die Reihenfolge, in der Schichten deklariert werden, ist wichtig, um den Vorrang zu bestimmen. Normale Stile in einer Schicht haben Vorrang vor Stilen, die in früheren Schichten deklariert wurden; wobei normale Stile, die außerhalb einer Schicht deklariert werden, Vorrang vor normalen geschichteten Stilen haben, unabhängig von der Spezifität.

In diesem Beispiel verwendete der Autor die {{CSSXref('@import')}} Regel von CSS, um fünf externe Stilvorlagen innerhalb eines {{HTMLElement('style')}} Informationselements zu importieren.

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

Im obigen CSS-Codeblock wurden drei Kaskadenschichten namens "A", "B" und "C" in dieser Reihenfolge erstellt. Drei Stilvorlagen wurden direkt in die Schichten importiert, und zwei wurden importiert, ohne dass eine Schicht erstellt oder zugeordnet wurde.
Die "Alle ungeschichteten Stile" in der Liste unten (normaler Autorenstil-Vorrang - Ordnung 4) umfasst Stile aus diesen zwei Stilvorlagen und den zusätzlichen ungeschichteten CSS-Stilblöcken. Zusätzlich gibt es zwei Inline-Stile, ein normales `line-height` Deklaration und eine wichtige `text-decoration` Deklaration:

| Vorrangordnung (niedrig bis hoch) | Autorenstil                | Wichtigkeit  |
| --------------------------------- | -------------------------- | ------------ |
| 1                                 | A - erste Schicht          | normal       |
| 2                                 | B - zweite Schicht         | normal       |
| 3                                 | C - letzte Schicht         | normal       |
| 4                                 | Alle ungeschichteten Stile | normal       |
| 5                                 | Inline `style`             | normal       |
| 6                                 | Animationen                |              |
| 7                                 | Alle ungeschichteten Stile | `!important` |
| 8                                 | C - letzte Schicht         | `!important` |
| 9                                 | B - zweite Schicht         | `!important` |
| 10                                | A - erste Schicht          | `!important` |
| 11                                | Inline `style`             | `!important` |
| 12                                | Übergänge                  |              |

In allen Herkunftstypen haben normale Stile, die sich in Schichten befinden, die niedrigste Vorrangigkeit. In unserem Beispiel haben die normalen Stile, die mit der ersten deklarierten Schicht (A) verbunden sind, eine niedrigere Vorrangigkeit als die normalen Stile in der zweiten deklarierten Schicht (B), die eine niedrigere Vorrangigkeit als die normalen Stile in der dritten deklarierten Schicht (C) haben. Diese geschichteten Stile haben eine niedrigere Vorrangigkeit als alle normalen ungeschichteten Stile, zu denen normale Stile aus `unlayeredStyles.css`, `moreUnlayeredStyles.css` und der `color` von `p` im `<style>` selbst gehören.

Wenn irgendwelche geschichteten Stile in A, B oder C Selektoren mit höherer Spezifität haben, die auf ein Element zutreffen, ähnlich wie `:root body p { color: black; }`, spielt das keine Rolle. Diese Deklarationen werden aufgrund des _Ursprungs_ von der Betrachtung ausgeschlossen; normale geschichtete Stile haben weniger Vorrang als normale ungeschichtete Stile. Wenn jedoch der spezifischere Selektor `:root body p { color: black; }` in `unlayeredStyles.css` gefunden würde, hätte die spezifischere schwarze Deklaration aufgrund ihrer höheren Spezifität Vorrang, da sowohl _Ursprung und Wichtigkeit_ die gleiche Vorrangigkeit haben.

Die Layer-Vorrangordnung wird für Stile, die als `!important` deklariert sind, umgekehrt. Wichtige Deklarationen, die in einer Schicht gefunden werden, haben Vorrang vor wichtigen Deklarationen, die außerhalb einer Schicht gefunden werden. Wichtige Deklarationen, die in der ersten Schicht (A) vorkommen, haben Vorrang vor wichtigen Deklarationen, die in Schicht B vorkommen, die Vorrang vor wichtigen Deklarationen haben, die in Schicht C vorkommen, die Vorrang vor wichtigen Deklarationen haben, die außerhalb einer Schicht gefunden werden.

### Inline-Stile

Nur für Autorenstile sind Inline-Stile, die mit dem Attribut `style` deklariert wurden. Normale Inline-Stile haben Vorrang vor allen anderen normalen Autorenstilen, unabhängig von der Spezifität des Selektors. Wenn `line-height: 2;` in einem `:root body p` Selektorblock in einem der fünf importierten Stilvorlagen deklariert worden wäre, wäre die Zeilenhöhe trotzdem `1.6`. Normale Inline-Stile haben keinen Vorrang vor animierten oder übergangenen Eigenschaften.

Wichtige Inline-Stile haben Vorrang vor allen anderen Autorenstilen, unabhängig davon, ob sie wichtig, inline oder geschichtet sind. Wichtige Inline-Stile haben auch Vorrang vor animierten Eigenschaften, aber nicht vor übergangenen Eigenschaften. Drei Dinge können einen wichtigen Inline-Stil überschreiben:

- Ein wichtiger Benutzerstil.
- Ein wichtiger Benutzeragentenstil.
- Eine übergangene

Eigenschaft.

### Wichtigkeit und Schichten

Die Vorrangordnung des Herkunftstyps wird für wichtige Stile umgekehrt. Wichtige Stile, die außerhalb einer Kaskadenschicht definiert sind, haben weniger Vorrang als jene, die als Teil einer Schicht definiert sind. Wichtige Stile, die in frühen Schichten vorkommen, haben Vorrang vor wichtigen Stilen, die in nachfolgenden Kaskadenschichten deklariert sind.

Nehmen Sie zum Beispiel den folgenden CSS:

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

Auch wenn das Rot zuerst deklariert ist und einen weniger spezifischen Selektor hat, wird der Absatz aufgrund der ungeschichteten CSS, die Vorrang vor geschichteter CSS hat, rot sein. Wenn wir einen Inline-Stil auf dem Absatz hätten, der ihn auf eine andere Farbe setzt, wie `<p style="color: black">`, wäre der Absatz schwarz.

Wenn wir `!important` zu diesem CSS-Block hinzufügen, wird die Vorrangordnung mit dem Stylesheet umgekehrt:

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

Jetzt wird der Absatz blau sein. Das `!important` in der zuerst deklarierten Schicht hat Vorrang vor nachfolgenden Schichten und ungeschichteten wichtigen Deklarationen. Wenn der Inline-Stil `!important` enthielte, wie `<p style="color: black !important">`, wäre der Absatz erneut schwarz. Die Wichtigkeit von Inline-Stilen hat Vorrang vor allen anderen vom Autor deklarierten `!important`-Deklarationen, unabhängig von der Spezifität.

> [!NOTE]
> Das `!important`-Flag invertiert die Vorrangordnung von Kaskadenschichten. Aus diesem Grund sollten Sie `!important` vermeiden, um externe Stile zu überschreiben. Verwenden Sie stattdessen {{cssxref("@import")}} zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stile (von Frameworks, Widget-Stilen, Bibliotheken usw.) in Schichten zu importieren. Durch das Importieren von Stilen in eine Schicht als erste Deklaration in Ihrem CSS wird ihre Vorrangigkeit herabgesetzt, und vom Autor definierte Schichten, die später in Ihrem CSS definiert sind, haben höhere Priorität. Das `!important`-Flag sollte nur sparsam, wenn überhaupt, verwendet werden, um erforderliche Stile gegen spätere Überschreibungen zu schützen, in der zuerst deklarierten Schicht.

Stile, die sich im Übergang befinden, haben Vorrang vor allen wichtigen Stilen, egal von wem oder wie sie deklariert werden.

## Komplette Kaskadenreihenfolge

Jetzt, da wir ein besseres Verständnis für Vorrangordnung von Herkunftstypen und Kaskadenschichten haben, können wir erkennen, dass die Tabelle in [Kaskadierende Reihenfolge](#kaskadierende_reihenfolge) genauer durch die folgende Tabelle dargestellt werden könnte:

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
  <tr><td>8</td><td>Übergänge</td><td></td></tr>
</tbody>
</table>

## Welche CSS-Entitäten nehmen an der Kaskade teil

Nur CSS-Eigenschafts/Wert-Paar-Deklarationen nehmen an der Kaskade teil. CSS-Atregel-Deskriptoren nehmen nicht an der Kaskade teil, und HTML-Präsentationsattribute sind nicht Teil der Kaskade.

### At-Regeln

CSS [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule), die Entitäten enthalten, die keine Deklarationen sind, wie eine {{cssxref("@font-face")}} Regel mit _Deskriptoren_, nehmen nicht an der Kaskade teil.

Meistens nehmen die Eigenschaften und Deskriptoren, die in At-Regeln definiert sind, nicht an der Kaskade teil. Nur die At-Regeln als Ganzes nehmen an der Kaskade teil. Zum Beispiel, innerhalb einer `@font-face` Regel, werden Schriftarten durch [`font-family`](/de/docs/Web/CSS/@font-face/font-family) Deskriptoren identifiziert. Wenn mehrere `@font-face` Regeln mit dem gleichen Deskriptor definiert sind, wird nur das passendste `@font-face` als Ganzes betrachtet. Wenn mehr als eines identisch passend ist, werden die gesamten `@font-face` Deklarationen unter Verwendung der Schritte 1, 2 und 4 des Algorithmus verglichen (es gibt keine Spezifität bei At-Regeln).

Während die Deklarationen in den meisten At-Regeln - wie denen in {{cssxref("@media")}}, {{cssxref("@document")}}, oder {{cssxref("@supports")}} - an der Kaskade teilnehmen, kann die At-Regel einen gesamten Selektor irrelevant machen, wie wir im [Grundbeispiel](#grundlegendes_beispiel) mit dem Druckstil gesehen haben.

Deklarationen in {{cssxref("@keyframes")}} nehmen nicht an der Kaskade teil. Genau wie bei `@font-face` wird nur das `@keyframes` als Ganzes ausgewählt, was den Kaskadenalgorithmus betrifft. Die [Vorrangordnung von Animationen wird unten beschrieben](#css-animationen_und_die_kaskade).

Im Falle von {{cssxref("@import")}}, nimmt das `@import` selbst nicht an der Kaskade teil, aber alle importierten Stile schon. Wenn das `@import` eine [benannte oder anonyme Schicht](/de/docs/Web/CSS/@layer) definiert, werden die Inhalte der importierten Stilvorlage in die angegebene Schicht einsortiert. Alle anderen mit `@import` importierten CSS werden als letzte deklarierte Schicht behandelt. Dies wurde oben besprochen.

Schließlich folgt {{cssxref("@charset")}} spezifischen Algorithmen und wird nicht vom Kaskadenalgorithmus beeinflusst.

### Präsentationsattribute

Präsentationsattribute sind Attribute im Quelldokument, die das Styling beeinflussen können. Wenn sie eingefügt sind, legt das veraltete `align`-Attribut zum Beispiel die Ausrichtung mehrerer HTML-Elemente fest, und das `fill`-Attribut definiert die Farbe, die verwendet wird, um SVG-Formen und -Text zu malen, und definiert den Endzustand für SVG-Animationen. Obwohl es sich um Autorenstile handelt, nehmen Präsentationsattribute nicht an der Kaskade teil.

Wenn das HTML-Präsentationsattribut vom Benutzeragenten unterstützt wird, werden gültige Präsentationsattribute, die in HTML und SVG enthalten sind, wie die [`align`](/de/docs/Web/HTML/Reference/Elements/img#align) oder [`fill`](/de/docs/Web/SVG/Reference/Attribute/fill) Attribute, in die entsprechenden CSS-Regeln (alle SVG-Präsentationsattribute werden als CSS-Eigenschaften unterstützt) übersetzt und in die Autorenstilvorlage vor allen anderen Stilen mit einer Spezifität von `0` eingefügt.

Präsentationsattribute können nicht als `!important` deklariert werden.

## CSS-Animationen und die Kaskade

[CSS-Animationen](/de/docs/Web/CSS/CSS_animations), bei denen {{cssxref("@keyframes")}} At-Regeln verwendet werden, definieren Animationen zwischen Zuständen. `@keyframes` werden nicht kaskadiert, was bedeutet, dass zu jedem gegebenen Zeitpunkt CSS Werte aus nur einem einzigen Satz von `@keyframes` nimmt und niemals mehrere mischt. Wenn mit dem gleichen Animationsnamen mehrere Sätze von `@keyframes` definiert sind, wird das zuletzt in der Herkunft und Schicht mit der größten Vorrangigkeit definierte Set verwendet. Andere `@keyframes` werden ignoriert, selbst wenn sie verschiedene Eigenschaften animieren.

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

In diesem Beispiel gibt es drei separate Animationsdeklarationen mit dem Namen `repeatedName`. Wenn `animation: infinite 5s alternate repeatedName` auf den Absatz angewendet wird, wird nur eine Animation angewendet: Die Keyframe-Animation, die im ungeschichteten CSS definiert ist, hat Vorrang vor den geschichteten Keyframe-Animationsdeklarationen basierend auf Herkunft und Schichtvorrangordnung. In diesem Beispiel wird nur die Schriftgröße des Elements animiert.

> [!NOTE]
> Es gibt keine wichtigen Animationen, da Eigenschaftsdeklarationen in einem {{cssxref('@keyframes')}}-Block, die `!important` als Teil des Werts enthalten, ignoriert werden.

## Zurücksetzen von Stilen

Nachdem Ihr Inhalt die Stile geändert hat, kann es sein, dass es notwendig ist, sie auf einen bekannten Zustand zurückzusetzen. Dies kann bei Animationen, Themenänderungen usw. der Fall sein. Mit der CSS-Eigenschaft {{cssxref("all")}} können Sie schnell (fast) alles in CSS auf einen bekannten Zustand zurücksetzen.

`all` ermöglicht es Ihnen, sofort alle Eigenschaften auf einen ihrer Anfangszustände, den von der vorherigen Ebene der Kaskade vererbten Zustand, einen bestimmten Ursprung (die Benutzeragenten-Stilvorlage, die Autoren-Stilvorlage oder die Benutzer-Stilvorlage) oder sogar die Werte der Eigenschaften vollständig zu löschen.

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
- [Anfangs-,](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) [berechnete,](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) [verwendete,](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) und [aktuelle](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
