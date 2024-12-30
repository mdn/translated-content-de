---
title: Einführung in das CSS-Cascading
slug: Web/CSS/Cascade
l10n:
  sourceCommit: 30082a3450d45b62662baf0c94992dfd88d60267
---

{{CSSRef}}

Der **Cascading** ist ein Algorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte aus verschiedenen Quellen kombinieren. Die Cascade legt fest, welche Quelle und Schicht Vorrang hat, wenn Deklarationen aus mehr als einem [Ursprung](#ursprungstypen), einer [Cascading-Schicht](/de/docs/Web/CSS/@layer) oder einem {{CSSxRef("@scope")}}-Block einen Wert für eine Eigenschaft an einem Element festlegen.

Die Cascading liegt im Kern von CSS, wie der Name betont: _**Cascading**_ Style Sheets. Wenn ein [Selektor](/de/docs/Web/CSS/CSS_selectors) ein Element trifft, wird der Eigenschaftswert aus dem Ursprung mit der höchsten Priorität angewendet, selbst wenn der Selektor aus einem Ursprung oder einer Schicht mit niedrigerer Priorität eine höhere [Spezifität](/de/docs/Web/CSS/Specificity) besitzt.

Dieser Artikel erklärt, was die Cascading ist und die Reihenfolge, in der {{Glossary("CSS", "CSS")}}-[Deklarationen](/de/docs/Web/API/CSSStyleDeclaration) kaskadieren, einschließlich Betrachtung der Kaskadenschichten und Ursprungstypen. Das Verständnis der Ursprungsvorrangstellung ist der Schlüssel zum Verständnis der Cascading.

## Ursprungstypen

Der Algorithmus der CSS-Cascading hat die Aufgabe, CSS-Deklarationen auszuwählen, um die korrekten Werte für CSS-Eigenschaften zu bestimmen. CSS-Deklarationen kommen aus verschiedenen Ursprungstypen: **[User-Agent-Stylesheets](#user-agent-stylesheets)**, **[Autor-Stylesheets](#autor-stylesheets)** und **[Benutzer-Stylesheets](#benutzer-stylesheets)**.

Obwohl Stylesheets aus diesen verschiedenen Ursprüngen kommen und in verschiedenen [Schichten](/de/docs/Web/CSS/@layer) innerhalb dieser Ursprünge sein können, überschneiden sie sich in Bezug auf ihren Standardscope; um dies zu ermöglichen, definiert der Cascade-Algorithmus, wie sie interagieren. Bevor wir die Interaktionen ansprechen, definieren wir in den nächsten Abschnitten einige Schlüsselbegriffe.

### User-Agent-Stylesheets

Benutzeragenten, oder Browser, verfügen über grundlegende Stylesheets, die Standardstile für jedes Dokument festlegen. Diese Stylesheets werden **User-Agent-Stylesheets** genannt. Die meisten Browser verwenden dafür tatsächliche Stylesheets, während andere sie im Code simulieren. Das Endergebnis ist das gleiche.

Einige Browser erlauben es Benutzern, das User-Agent-Stylesheet zu ändern, aber das ist selten und lässt sich nicht kontrollieren.

Obwohl einige Einschränkungen für User-Agent-Stylesheets durch die HTML-Spezifikation festgelegt werden, haben Browser viel Spielraum: Das bedeutet, dass es einige Unterschiede zwischen Browsern gibt. Um den Entwicklungsprozess zu vereinfachen, können Webentwickler ein CSS-Reset-Stylesheet, wie [normalize.css](https://github.com/necolas/normalize.css), verwenden, das bekannte Eigenschaftswerte für alle Browser auf einen bekannten Zustand setzt, bevor Veränderungen vorgenommen werden, um ihren spezifischen Bedürfnissen zu entsprechen.

Sofern das User-Agent-Stylesheet kein [`!important`](/de/docs/Web/CSS/Specificity#the_!important_exception) neben einer Eigenschaft enthält, das es "wichtig" macht, haben vom Autor deklarierte Styles, einschließlich eines Reset-Stylesheets, Vorrang vor den User-Agent-Styles, unabhängig von der Spezifität des zugehörigen Selektors.

### Autor-Stylesheets

**Autor-Stylesheets** sind der häufigste Typ von Stylesheets; dies sind die Stile, die von Webentwicklern geschrieben werden. Diese Stile können User-Agent-Stile zurücksetzen, wie oben erwähnt, und die Stile für das Design einer bestimmten Webseite oder Anwendung definieren. Der Autor oder Webentwickler definiert die Stile für das Dokument mit einem oder mehreren verknüpften oder importierten Stylesheets, {{HTMLElement('style')}}-Blöcken und Inline-Stilen, die mit dem [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribut definiert sind. Diese Autorstile definieren das Aussehen und Gefühl der Website — ihr Thema.

### Benutzer-Stylesheets

In den meisten Browsern kann der Benutzer (oder Leser) der Website die Stile mit einem benutzerdefinierten **Benutzer-Stylesheet**, das darauf ausgelegt ist, das Erlebnis an die Wünsche des Benutzers anzupassen, überschreiben. Je nach Benutzeragenten können [Benutzerstile konfiguriert werden](https://www.thoughtco.com/user-style-sheet-3469931) oder über Browsererweiterungen hinzugefügt werden.

### Cascading-Schichten

Die Reihenfolge der Cacade basiert auf dem Ursprungstyp. Die Cascade innerhalb jedes Typs basiert auf der Deklarationsreihenfolge der [Cascadingschichten](/de/docs/Web/CSS/@layer) innerhalb dieses Typs. Für alle Ursprünge – Benutzeragent, Autor oder Benutzer – können Stile innerhalb oder außerhalb von benannten oder anonymen Schichten deklariert werden. Wenn sie mit [`layer`, `layer()`](/de/docs/Web/CSS/@import) oder [`@layer`](/de/docs/Web/CSS/@layer) deklariert werden, werden Stile in die angegebene benannte Schicht gestellt oder in eine anonyme Schicht, wenn kein Name angegeben wird. Stile, die außerhalb einer Schicht deklariert werden, werden als Teil einer anonymen zuletzt deklarierten Schicht behandelt.

Werfen Sie einen Blick auf den Ursprungstyp der Cascade, bevor Sie sich in die Cascade-Schichten innerhalb jedes Ursprungstyps vertiefen.

## Cascading-Reihenfolge

Der Cascading-Algorithmus bestimmt, wie der Wert zu finden ist, der für jede Eigenschaft für jedes Dokumentelement angewendet wird. Die folgenden Schritte gelten für den Cascading-Algorithmus:

1. **Relevanz**: Zuerst filtert er alle Regeln aus den verschiedenen Quellen, um nur die Regeln zu behalten, die auf ein bestimmtes Element anwendbar sind. Das bedeutet Regeln, deren Selektor das gegebene Element trifft und die Teil einer geeigneten `media`-at-rule sind.
2. **Ursprung und Wichtigkeit**: Dann sortiert er diese Regeln nach ihrer Wichtigkeit, also ob sie von `!important` gefolgt werden oder nicht, und nach ihrem Ursprung. Schichten werden zunächst ignoriert; die Cascade-Reihenfolge ist wie folgt:

   | Vorrangsreihenfolge (niedrig zu hoch) | Ursprung                  | Wichtigkeit  |
   | ------------------------------------- | ------------------------- | ------------ |
   | 1                                     | Benutzeragent (Browser)   | normal       |
   | 2                                     | Benutzer                  | normal       |
   | 3                                     | Autor (Entwickler)        | normal       |
   | 4                                     | CSS @keyframe-Animationen |              |
   | 5                                     | Autor (Entwickler)        | `!important` |
   | 6                                     | Benutzer                  | `!important` |
   | 7                                     | Benutzeragent (Browser)   | `!important` |
   | 8                                     | CSS-Übergänge             |              |

3. **Spezifität**: Bei Gleichheit mit einem Ursprung wird die [Spezifität](/de/docs/Web/CSS/Specificity) einer Regel herangezogen, um einen Wert über einen anderen zu wählen. Die Spezifität der Selektoren wird verglichen, und die Deklaration mit der höchsten Spezifität gewinnt.
4. **Scope-Nähe**: Wenn zwei Selektoren in der Ursprungs-Schicht mit Vorrang die gleiche Spezifität haben, gewinnt der Eigenschaftswert innerhalb von Scoped-Regeln mit der kleinsten Anzahl von Sprüngen in der DOM-Hierarchie zur Scope-Wurzel. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.
5. **Reihenfolge des Erscheinens**: Im Ursprung mit Vorrang, wenn es konkurrierende Werte für eine Eigenschaft gibt, die in Styleblöcken zu Selektoren mit gleicher Spezifität und Scope-Nähe passen, wird die letzte Deklaration in der Stil-Reihenfolge angewendet.

Die Cascade ist in aufsteigender Reihenfolge, was bedeutet:

- Animationen haben Vorrang vor normalen Werten, egal ob sie in Benutzer-, Autoren- oder Benutzeragent-Stilen deklariert sind.
- Wichtige Werte haben Vorrang vor Animationen, egal ob sie in Benutzer-, Autoren- oder Benutzeragent-Stilen deklariert sind.
- Übergänge haben Vorrang vor wichtigen Werten.

> **Hinweis:** **Übergänge und Animationen**
>
> Eigenschaftswerte, die durch Animation {{cssxref('@keyframes')}} gesetzt werden, sind wichtiger als alle normalen Stile (jene ohne [`!important`](/de/docs/Web/CSS/Specificity#the_!important_exception) setzen).
>
> Eigenschaftswerte, die in einem {{cssxref('transition')}} festgelegt werden, haben Vorrang vor allen anderen gesetzten Werten, selbst solchen, die mit `!important` gekennzeichnet sind.

Der Cascade-Algorithmus wird _vor_ dem Spezifitätsalgorithmus angewendet, was bedeutet, wenn `:root p { color: red;}` im Benutzer-Stylesheet (Zeile 2) deklariert wird und ein weniger spezifisches `p {color: blue;}` im Autoren-Stylesheet (Zeile 3) vorliegt, dann werden die Absätze blau sein.

## Einfaches Beispiel

Bevor wir uns genauer ansehen, wie Cascade-Schichten die cascade beeinflussen, schauen wir uns ein Beispiel mit mehreren Quellen von CSS über die verschiedenen Ursprünge an und gehen die Schritte des Cascade-Algorithmus durch:

Hier haben wir ein User-Agent-Stylesheet, zwei Autor-Stylesheets und ein Benutzer-Stylesheet, ohne Inline-Stile innerhalb des HTML:

**User-Agent CSS:**

```css
li {
  margin-left: 10px;
}
```

**Autor CSS 1:**

```css
li {
  margin-left: 0;
} /* This is a reset */
```

**Autor CSS 2:**

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

In diesem Fall sollten Deklarationen innerhalb der `li` und `.specific`-Regeln angewendet werden.

Erneut gibt es fünf Schritte im Cascade-Algorithmus, in dieser Reihenfolge:

1. Relevanz
2. Ursprung und Wichtigkeit
3. Spezifität
4. Scope-Nähe
5. Reihenfolge des Erscheinens

Das `1px` ist für Printmedien. Aufgrund mangelnder _Relevanz_ basierend auf seinem Medientyp wird es aus der Betrachtung entfernt.

Keine Deklaration ist mit `!important` markiert, daher ist die Vorrangsreihenfolge Autor-Stylesheets über Benutzer-Stylesheets über User-Agent-Stylesheet. Basierend auf _Ursprung und Wichtigkeit_ werden das `1em` aus dem Benutzer-Stylesheet und das `10px` aus dem User-Agent-Stylesheet aus der Betrachtung entfernt.

Beachten Sie, dass selbst wenn der Benutzerstil auf `.specific` von `1em` eine höhere Spezifität hat, es sich um eine normale Deklaration in einem Benutzer-Stylesheet handelt. Daher hat es eine geringere Vorrangstellung als alle Autorenstile und wird durch den Schritt Ursprung und Wichtigkeit des Algorithmus entfernt, bevor die Spezifität ins Spiel kommt.

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

Die letzte, das `5px`, ist Teil einer Cascade-Schicht. Normale Deklarationen in Schichten haben eine geringere Vorrangstellung als normale Stile, die nicht in einer Schicht innerhalb desselben Ursprungstyps sind. Dies wird ebenfalls durch Schritt 2 des Algorithmus, _Ursprung und Wichtigkeit_, entfernt.

Es verbleiben die `0` und die `3px`, die beide den gleichen Selektor und damit die gleiche _Spezifität_ haben. Keiner von ihnen befindet sich in einem `@scope`-Block, sodass die Scope-Nähe in diesem Beispiel nicht ins Spiel kommt.

Wir betrachten dann die _Reihenfolge des Erscheinens_. Die zweite, die letzte der zwei ungeschichteten Autorenstile, gewinnt.

```css
margin-left: 3px;
```

> [!NOTE]
> Die Deklaration, die im Benutzer-CSS definiert ist, obwohl sie möglicherweise eine größere Spezifität hat, wird nicht gewählt, da der _Ursprung und die Wichtigkeit_ des Cascade-Algorithmus angewendet werden, bevor der Spezifitätsalgorithmus verwendet wird. Die Deklaration, die in einer Cascade-Schicht definiert ist, wird ebenfalls nicht übernommen, selbst wenn sie später im Code folgt, da normale Stile in Cascadingschichten weniger Vorrang haben als normale ungeschichtete Stile. _Reihenfolge des Erscheinens_ ist nur von Bedeutung, wenn sowohl Ursprung, Wichtigkeit und Spezifität gleich sind.

## Autorenstile: Inline-Stile, Schichten und Vorrang

Die [Tabelle in Cascading-Reihenfolge](#cascading-reihenfolge) bietet einen Überblick über die Vorrangsreihenfolge. Die Tabelle fasste die Benutzeragent-, Benutzer- und Autor-Stile nach Ursprungstyp in zwei Zeilen mit „Ursprungstyp - normal“ und „Ursprungstyp - !important“ zusammen. Die Vorrangstellung innerhalb jedes Ursprungstyps ist nuancierter. Stile können innerhalb von Schichten innerhalb ihres Ursprungstyps enthalten sein, und bei Autorenstilen gibt es auch die Frage, wo Inline-Stile in der Cascade-Reihenfolge landen.

Die Reihenfolge, in der Schichten deklariert werden, ist wichtig für die Bestimmung der Vorrangstellung. Normale Stile in einer Schicht haben Vorrang vor in früheren Schichten deklarierten Stilen; wobei normale Stile, die außerhalb einer Schicht deklariert werden, Vorrang vor normalen geschichteten Stilen unabhängig von der Spezifität haben.

In diesem Beispiel verwendete der Autor die {{CSSXref('@import')}}-Regel von CSS, um fünf externe Stylesheets innerhalb eines {{HTMLElement('style')}}-Informationselements zu importieren.

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

und dann im Hauptteil des Dokuments haben wir Inline-Stile:

```html
<p style="line-height: 1.6em; text-decoration: overline !important;">Hello</p>
```

In dem obigen CSS-Codeblock wurden drei Cascade-Schichten namens "A", "B" und "C" erstellt, in dieser Reihenfolge. Drei Stylesheets wurden direkt in Schichten importiert und zwei wurden ohne Erstellung oder Zuweisung zu einer Schicht importiert.
Die "Alle ungeschichteten Stile" in der Liste unten (normale Autorstilvorwahl - Ordnung 4) umfasst Stile aus diesen beiden Stylesheets und den zusätzlichen ungeschichteten CSS-Stilblöcken. Zusätzlich gibt es zwei Inline-Stile, eine normale `line-height`-Deklaration und eine wichtige `text-decoration`-Deklaration:

| Vorrangsreihenfolge (niedrig zu hoch) | Autorenstil                | Wichtigkeit  |
| ------------------------------------- | -------------------------- | ------------ |
| 1                                     | A - erste Schicht          | normal       |
| 2                                     | B - zweite Schicht         | normal       |
| 3                                     | C - letzte Schicht         | normal       |
| 4                                     | Alle ungeschichteten Stile | normal       |
| 5                                     | Inline-`style`             | normal       |
| 6                                     | Animationen                |              |
| 7                                     | Alle ungeschichteten Stile | `!important` |
| 8                                     | C - letzte Schicht         | `!important` |
| 9                                     | B - zweite Schicht         | `!important` |
| 10                                    | A - erste Schicht          | `!important` |
| 11                                    | Inline-`style`             | `!important` |
| 12                                    | Übergänge                  |              |

In allen Herkunftstypen haben normale in Schichten enthaltene Stile die niedrigste Priorität. In unserem Beispiel haben die normalen Stile, die mit der zuerst deklarierten Schicht (A) verbunden sind, eine niedrigere Priorität als die normalen Stile in der zweitdeklarierten Schicht (B), die wiederum eine niedrigere Priorität als die normalen Stile in der drittdeklarierten Schicht (C) haben. Diese geschichteten Stile haben eine niedrigere Priorität als alle normalen ungeschichteten Stile, die die normalen Stile aus `unlayeredStyles.css`, `moreUnlayeredStyles.css` und die `color` des `p` im `<style>` selbst umfassen.

Wenn irgendwelche geschichteten Stile in A, B oder C Selektoren mit höherer Spezifität haben, die zu einem Element passen, ähnlich wie `:root body p { color: black; }`, spielt das keine Rolle. Diese Deklarationen werden aufgrund von _Ursprung_ aus der Betrachtung entfernt; normale geschichtete Stile haben weniger Vorrang als normale ungeschichtete Stile. Wenn jedoch der spezifische Selektor `:root body p { color: black; }` in `unlayeredStyles.css` gefunden wurde, da _Herkunft und Wichtigkeit_ die gleiche Priorität haben, würde _Spezifität_ bedeuten, dass die spezifischere, schwarze Deklaration gewinnen würde.

Die Schichtreihenfolge der Priorität ist für Stile, die als `!important` deklariert sind, umgekehrt. Wichtige Deklarationen, die in einer Schicht gefunden werden, haben Vorrang vor wichtigen Deklarationen, die außerhalb einer Schicht gefunden werden. Wichtige Deklarationen, die in der ersten Schicht (A) gefunden werden, haben Vorrang vor wichtigen Deklarationen, die in der Schicht B gefunden werden, die Vorrang vor wichtigen Deklarationen haben, die in der Schicht C gefunden werden, die wiederum Vorrang vor wichtigen Deklarationen haben, die außerhalb einer Schicht gefunden werden.

### Inline-Stile

Nur relevant für Autorenstile sind Inline-Stile, die mit dem `style`-Attribut deklariert werden. Normale Inline-Stile haben Vorrang vor allen anderen normalen Autorenstilen, egal wie spezifisch der Selektor ist. Wenn `line-height: 2;` in einem `:root body p` Selector-Block in einem der fünf importierten Stylesheets deklariert wurde, wäre die Zeilenhöhe immer noch `1.6`. Normale Inline-Stile haben keinen Vorrang vor animierten oder Übergangseigenschaften.

Wichtige Inline-Stile haben Vorrang vor allen anderen Autorenstilen, unabhängig davon, ob sie wichtig, inline oder geschichtet sind. Wichtige Inline-Stile haben auch Vorrang vor animierten Eigenschaften, jedoch nicht vor Übergangseigenschaften. Drei Dinge können einen wichtigen Inline-Stil überschreiben:

- Ein wichtiger Benutzerstil.
- Ein wichtiger Benutzeragentenstil.
- Eine Übergangseigenschaft.

### Wichtigkeit und Schichten

Die Prioritätsreihenfolge des Herkunftstyps ist für wichtige Stile umgekehrt. Wichtigste Stile, die außerhalb einer Cascade-Schicht deklariert sind, haben eine niedrigere Priorität als diejenigen, die als Teil einer Schicht deklariert sind. Wichtigste Stile, die in frühen Schichten kommen, haben Vorrang vor wichtigen Stilen, die in späteren Cascade-Schichten deklariert sind.

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

Auch wenn das Rot zuerst deklariert und der Selektor weniger spezifisch ist, da ungeschichtetes CSS Vorrang vor geschichtetem CSS hat, wird der Absatz rot sein. Hätten wir einen Inline-Stil auf dem Absatz hinzugefügt, um ihn auf eine andere Farbe einzustellen, z. B. `<p style="color: black">`, wäre der Absatz schwarz.

Wenn wir zu diesem CSS `!important` hinzufügen, wird die Prioritätsreihenfolge innerhalb des Stylesheets umgekehrt:

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

Jetzt wird der Absatz blau sein. Das `!important` in der frühestens deklarierten Schicht hat Vorrang vor nachfolgenden Schichten und ungeschichteten wichtigen Deklarationen. Wenn der Inline-Stil `!important` enthalten würde, z. B. `<p style="color: black !important">`, wäre der Absatz wieder schwarz. Inline-Wichtigkeit hat Vorrang vor allen anderen vom Autor deklarierten `!important`-Deklarationen, unabhängig von der Spezifität.

> [!NOTE]
> Das `!important`-Flag kehrt die Prioritätenreihenfolge der Cascade-Schichten um. Aus diesem Grund sollten Sie `!important` nicht verwenden, um externe Stile zu überschreiben. Verwenden Sie stattdessen {{cssxref("@import")}} zusammen mit dem `layer`-Keyword oder der `layer()`-Funktion, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Schichten zu importieren. Das Importieren von Stylesheets in eine Schicht als erste Deklaration in Ihrem CSS senkt deren Priorität, und autorendefinierte Schichten, die später in Ihrem CSS definiert sind, werden eine höhere Priorität haben. Das `!important`-Flag sollte nur sparsam, wenn überhaupt, verwendet werden, um erforderliche Stile gegen spätere Überschreibungen abzusichern, in der ersten deklarierten Schicht.

Stile, die sich im Übergang befinden, haben Vorrang vor allen wichtigen Stilen, unabhängig davon, von wem oder wie sie deklariert wurden.

## Komplette Cascade-Reihenfolge

Nun, da wir ein besseres Verständnis von Herkunftstyp und Cascade-Schicht-Priorität haben, erkennen wir, dass die Tabelle in [Cascading-Reihenfolge](#cascading-reihenfolge) genauer dargestellt werden könnte durch die folgende Tabelle:

<table>
<thead>
  <tr><th>Vorrangsreihenfolge <br/>(niedrig bis hoch)</th><th>Stilursprung</th><th>Wichtigkeit</th></tr>
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

## Welche CSS-Entitäten nehmen an der Cascade teil

Nur CSS-Eigenschafts-/Wertepaar-Deklarationen nehmen an der Cascade teil. CSS-At-Regel-Deskriptoren nehmen nicht an der Cascading teil und HTML-Darstellungsattribute sind nicht Teil der Cascading.

### At-Regeln

CSS [At-Regeln](/de/docs/Web/CSS/At-rule), die Entitäten andere als Deklarationen enthalten, wie zum Beispiel eine {{ cssxref("@font-face")}}-Regel, die _Deskriptoren_ enthält, nehmen nicht an der Cascade teil.

Zum größten Teil nehmen die in At-Regeln definierten Eigenschaften und Deskriptoren nicht an der Cascade teil. Nur At-Regeln als Ganzes nehmen an der Cascade teil. Zum Beispiel innerhalb einer `@font-face`-Regel werden Schriftartnamen durch [`font-family`](/de/docs/Web/CSS/@font-face/font-family)-Deskriptoren identifiziert. Wenn mehrere `@font-face`-Regeln mit dem gleichen Deskriptor definiert sind, wird nur die am besten geeignete `@font-face`-Regel als Ganzes in Betracht gezogen. Wenn mehr als eine identisch geeignet ist, werden die gesamten `@font-face`-Deklarationen mit den Schritten 1, 2 und 4 des Algorithmus verglichen (es gibt keine Spezifität bei At-Regeln).

Während die in den meisten At-Regeln enthaltenen Deklarationen - wie die in {{cssxref("@media")}}, {{cssxref("@document")}} oder {{cssxref("@supports")}} - an der Cascade teilnehmen, kann die At-Regel einen gesamten Selektor als nicht relevant machen, wie wir es mit dem Druckstil im [einfachen Beispiel](#einfaches_beispiel) gesehen haben.

Deklarationen in {{cssxref("@keyframes")}} nehmen nicht an der Cascade teil. Wie bei `@font-face` wird nur das `@keyframes` als Ganzes über den Cascade-Algorithmus ausgewählt. Die [Prioritätsreihenfolge der Animation wird unten beschrieben](#css-animationen_und_die_cascade).

Bei {{cssxref("@import")}} nimmt das `@import` selbst nicht an der Cascade teil, aber alle importierten Stile tun dies. Wenn das `@import` eine [benannte oder anonyme Schicht](/de/docs/Web/CSS/@layer) definiert, werden die Inhalte des importierten Stylesheets in die angegebene Schicht gelegt. Alle anderen CSS, die mit `@import` importiert wurden, werden als die zuletzt deklarierte Schicht behandelt. Dies wurde oben diskutiert.

Schließlich gehorcht {{cssxref("@charset")}} spezifischen Algorithmen und ist nicht vom Cascade-Algorithmus betroffen.

### Präsentationsattribute

Präsentationsattribute sind Attribute im Quelldokument, die das Styling beeinflussen können. Beispielsweise legt das veraltete `align`-Attribut, wenn es enthalten ist, die Ausrichtung bei mehreren HTML-Elementen fest und das `fill`-Attribut definiert die Farbe, die zum Zeichnen von SVG-Formen und Text verwendet wird, und definiert den Endzustand für SVG-Animationen. Während sie Autorenstile sind, nehmen Präsentationsattribute nicht an der Cascade teil.

Wenn das HTML-Präsentationsattribut vom Benutzeragenten unterstützt wird, werden gültige Präsentationsattribute, die in HTML und SVG enthalten sind, wie die [`align`](/de/docs/Web/HTML/Element/img#align) oder [`fill`](/de/docs/Web/SVG/Attribute/fill) Attribute, in die entsprechenden CSS-Regeln übersetzt (alle SVG-Präsentationsattribute werden als CSS-Eigenschaften unterstützt) und im Autoren-Stylesheet vor allen anderen Stilen eingefügt mit einer Spezifität gleich `0`.

Präsentationsattribute können nicht als `!important` deklariert werden.

## CSS-Animationen und die Cascade

[CSS-Animationen](/de/docs/Web/CSS/CSS_animations), die {{cssxref("@keyframes")}}-Regeln verwenden, definieren Animationen zwischen Zuständen. `@keyframes` kaskadieren nicht, was bedeutet, dass zu jeder Zeit CSS Werte nur aus einem einzigen Satz von `@keyframes` verwendet und niemals mehrere mischt. Wenn mehrere Sätze von `@keyframes` mit dem gleichen Animationsnamen definiert sind, wird der zuletzt definierte Satz im Ursprung und in der Schicht mit der größten Priorität verwendet. Andere `@keyframes` werden ignoriert, selbst wenn sie andere Eigenschaften animieren.

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

In diesem Beispiel gibt es drei separate Animationsdeklarationen mit dem Namen `repeatedName`. Wenn `animation: infinite 5s alternate repeatedName` auf den Absatz angewendet wird, wird nur eine Animation angewendet: die im ungeschichteten CSS definierte Keyframe-Animation hat Vorrang vor den geschichteten Keyframe-Animationsdeklarationen basierend auf Ursprung und Schicht-Prioritätsreihenfolge. In diesem Beispiel wird nur die Schriftgröße des Elements animiert.

> [!NOTE]
> Es gibt keine wichtigen Animationen, da Eigenschaftsdeklarationen in einem {{cssxref('@keyframes')}}-Block, der `!important` als Teil des Wertes enthält, ignoriert werden.

## Zurücksetzen von Stilen

Nachdem Ihr Inhalt das Styling abgeschlossen hat, kann er sich in einer Situation befinden, in der er diese auf einen bekannten Zustand zurücksetzen muss. Dies kann bei Animationen, Themenwechseln usw. geschehen. Die CSS-Eigenschaft {{cssxref("all")}} ermöglicht es Ihnen, schnell (fast) alles in CSS in einen bekannten Zustand zurückzusetzen.

`all` erlaubt es Ihnen, sofort alle Eigenschaften auf einen ihrer ursprünglichen (Standard-)Zustände zurückzusetzen, den Zustand, der von der vorherigen Ebene der Cascade geerbt wurde, einen bestimmten Ursprung (das Benutzeragent-Stylesheet, das Autor-Stylesheet oder das Benutzer-Stylesheet) oder sogar die Werte der Eigenschaften vollständig zu löschen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Cascade-Ebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Cascade- und Vererbungsmodul](/de/docs/Web/CSS/CSS_cascade)
- [CSS-Syntax](/de/docs/Web/CSS/Syntax)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [At-Regeln](/de/docs/Web/CSS/At-rule)
- [Initiale](/de/docs/Web/CSS/initial_value), [berechnete](/de/docs/Web/CSS/computed_value), [verwendete](/de/docs/Web/CSS/used_value) und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
