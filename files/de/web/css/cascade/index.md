---
title: Einführung in den CSS-Kaskade
slug: Web/CSS/Cascade
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **Kaskade** ist ein Algorithmus, der definiert, wie Benutzeragenten Eigenschaftswerte kombinieren, die aus verschiedenen Quellen stammen. Die Kaskade definiert die Herkunft und Ebene, die den Vorrang hat, wenn Erklärungen in mehr als einer [Herkunft](#ursprungstypen), [Kaskadenebene](/de/docs/Web/CSS/@layer) oder einem {{CSSxRef("@scope")}}-Block einen Wert für eine Eigenschaft eines Elements festlegen.

Die Kaskade steht im Kern von CSS, was durch den Namen betont wird: _**Cascading**_ Style Sheets. Wenn ein [Selektor](/de/docs/Web/CSS/CSS_selectors) mit einem Element übereinstimmt, wird der Eigenschaftswert aus der Herkunft mit dem höchsten Vorrang angewendet, selbst wenn der Selektor aus einer Herkunft oder Ebene mit niedrigerem Vorrang eine höhere [Spezifität](/de/docs/Web/CSS/Specificity) hat.

Dieser Artikel erklärt, was die Kaskade ist und in welcher Reihenfolge {{Glossary("CSS")}}-[Deklarationen](/de/docs/Web/API/CSSStyleDeclaration) kaskadieren, einschließlich Kaskadenebenen und Herkunftstyp. Das Verstehen der Vorrangstellung der Herkunft ist der Schlüssel zum Verständnis der Kaskade.

## Ursprungstypen

Der Job des CSS-Kaskade-Algorithmus besteht darin, CSS-Deklarationen auszuwählen, um die korrekten Werte für CSS-Eigenschaften zu bestimmen. CSS-Deklarationen stammen aus verschiedenen Ursprungstypen: **[Benutzeragenten-Stylesheets](#benutzeragenten-stylesheets)**, **[Autor-Stylesheets](#autor-stylesheets)** und **[Benutzer-Stylesheets](#benutzer-stylesheets)**.

Obwohl Stylesheets aus diesen verschiedenen Ursprüngen kommen und sich in verschiedenen [Ebenen](/de/docs/Web/CSS/@layer) innerhalb dieser Ursprünge befinden können, überschneiden sie sich in Bezug auf ihren Standardbereich; um dies zu ermöglichen, definiert der Kaskade-Algorithmus, wie sie interagieren. Bevor wir auf die Interaktionen eingehen, werden wir in den nächsten Abschnitten einige Schlüsselbegriffe definieren.

### Benutzeragenten-Stylesheets

Benutzeragenten oder Browser haben grundlegende Stylesheets, die Standardstile für jedes Dokument bereitstellen. Diese Stylesheets werden **Benutzeragenten-Stylesheets** genannt. Die meisten Browser verwenden echte Stylesheets zu diesem Zweck, während andere sie im Code simulieren. Das Endergebnis ist dasselbe.

Einige Browser erlauben es Benutzern, das Benutzeragenten-Stylesheet zu ändern, aber dies ist selten und nicht etwas, das kontrolliert werden kann.

Obwohl einige Einschränkungen für Benutzeragenten-Stylesheets durch die HTML-Spezifikation festgelegt sind, haben Browser viel Spielraum: das bedeutet, dass es einige Unterschiede zwischen Browsern gibt. Um den Entwicklungsprozess zu vereinfachen, verwenden Webentwickler möglicherweise ein CSS-Reset-Stylesheet, wie [normalize.css](https://github.com/necolas/normalize.css), das häufige Eigenschaftswerte in einen bekannten Zustand für alle Browser versetzt, bevor sie beginnen, Anpassungen vorzunehmen, die ihren spezifischen Bedürfnissen entsprechen.

Es sei denn, das Benutzeragenten-Stylesheet enthält ein [`!important`](/de/docs/Web/CSS/Specificity#the_!important_exception) neben einer Eigenschaft und macht sie damit "wichtig", haben von Autor-Styles erklärte Stile, einschließlich eines Reset-Stylesheets, Vorrang vor den Benutzeragenten-Stilen, unabhängig von der Spezifität des zugehörigen Selektors.

### Autor-Stylesheets

**Autor-Stylesheets** sind die häufigste Art von Stylesheet; dies sind die Stile, die von Webentwicklern geschrieben wurden. Diese Stile können wie oben erwähnt Benutzeragenten-Stile zurücksetzen und die Designstile einer bestimmten Webseite oder Anwendung definieren. Der Autor oder Webentwickler definiert die Stile für das Dokument mithilfe eines oder mehrerer verlinkter oder importierter Stylesheets, {{HTMLElement('style')}}-Blöcken und eingebetteter Stile, die mit dem [`style`](/de/docs/Web/HTML/Global_attributes#style) Attribut definiert sind. Diese Autor-Stile definieren das Aussehen und das Gefühl der Website — ihr Thema.

### Benutzer-Stylesheets

In den meisten Browsern kann der Benutzer (oder Leser) der Website wählen, die Stile mit einem benutzerdefinierten **Benutzer-Stylesheet** zu überschreiben, das darauf ausgelegt ist, das Erlebnis an die Wünsche des Benutzers anzupassen. Abhängig vom Benutzeragenten können [Benutzerstile konfiguriert](https://www.thoughtco.com/user-style-sheet-3469931) oder über Browsererweiterungen hinzugefügt werden.

### Kaskadenebenen

Die Kaskadenordnung basiert auf dem Ursprungstyp. Die Kaskade innerhalb jedes Ursprungstyps basiert auf der Deklarationsreihenfolge der [Kaskadenebenen](/de/docs/Web/CSS/@layer) innerhalb dieses Typs. Für alle Ursprünge - Benutzeragent, Autor oder Benutzer - können Stile innerhalb oder außerhalb benannter oder anonymer Ebenen erklärt werden. Wenn sie mit [`layer`, `layer()`](/de/docs/Web/CSS/@import) oder [`@layer`](/de/docs/Web/CSS/@layer) erklärt werden, werden Stile in die angegebene benannte Ebene oder in eine anonyme Ebene platziert, wenn kein Name angegeben wird. Stile, die außerhalb einer Ebene erklärt werden, werden als Teil einer anonymen zuletzt erklärten Ebene behandelt.

Lassen Sie uns einen Blick auf den kaskadierenden Ursprungstyp werfen, bevor wir in die Kaskadenebenen innerhalb jedes Ursprungstyps eintauchen.

## Kaskadenreihenfolge

Der Kaskadenalgorithmus bestimmt, wie der Wert für jede Eigenschaft für jedes Dokumentelement gefunden wird. Die folgenden Schritte gelten für den Kaskadenalgorithmus:

1. **Relevanz**: Zuerst werden alle Regeln aus den verschiedenen Quellen gefiltert, um nur die Regeln zu behalten, die für ein bestimmtes Element gelten. Das bedeutet, dass Regeln, deren Selektor mit dem angegebenen Element übereinstimmt und die Teil einer geeigneten `media` at-rule sind, erhalten bleiben.

2. **Herkunft und Wichtigkeit**: Dann werden diese Regeln nach ihrer Wichtigkeit sortiert, das heißt, ob sie von `!important` gefolgt werden oder nicht, und nach ihrer Herkunft. Ignorieren wir die Ebenen vorerst, so ist die Kaskadenreihenfolge wie folgt:

   | Reihenfolge (niedrig bis hoch) | Ursprung                   | Wichtigkeit |
   | ------------------------------- | -------------------------- | ----------- |
   | 1                               | Benutzeragent (Browser)    | normal      |
   | 2                               | Benutzer                   | normal      |
   | 3                               | Autor (Entwickler)         | normal      |
   | 4                               | CSS @keyframe-Animationen  |             |
   | 5                               | Autor (Entwickler)         | `!important`|
   | 6                               | Benutzer                   | `!important`|
   | 7                               | Benutzeragent (Browser)    | `!important`|
   | 8                               | CSS-Übergänge              |             |

3. **Spezifität**: Bei Gleichheit mit einer Herkunft wird die [Spezifität](/de/docs/Web/CSS/Specificity) einer Regel zur Auswahl eines Wertes oder eines anderen verwendet. Die Spezifität der Selektoren wird verglichen, und die Deklaration mit der höchsten Spezifität gewinnt.
4. **Nähe zum Geltungsbereich**: Wenn zwei Selektoren in der Ursprungsschicht mit Vorrang dieselbe Spezifität haben, gewinnt der Eigenschaftswert innerhalb von `@scope`-Regeln mit der kleinsten Anzahl von Sprüngen im DOM-Hierarchie zum Umfangsursprung. Siehe [Wie `@scope`-Konflikte aufgelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.
5. **Erscheinungsreihenfolge**: In der Herkunft mit Vorrang, wenn es konkurrierende Werte für eine Eigenschaft gibt, die in Stilblöcken mit Selektoren gleicher Spezifität und Nähedistanz enthalten sind, wird die letzte Deklaration in der Stilreihenfolge angewendet.

Die Kaskade ist in aufsteigender Reihenfolge, was bedeutet, dass Animationen Vorrang vor normalen Werten haben, egal ob diese in Benutzer-, Autor- oder Benutzeragentenstilen erklärt sind. Wichtige Werte haben Vorrang vor Animationen und Übergänge haben Vorrang vor wichtigen Werten.

> **Hinweis:** **Übergänge und Animationen**
>
> Eigenschaftswerte, die durch Animationen {{cssxref('@keyframes')}} gesetzt werden, sind wichtiger als alle normalen Stile (diejenigen ohne [`!important`](/de/docs/Web/CSS/Specificity#the_!important_exception)).
>
> Eigenschaftswerte, die in einem {{cssxref('transition')}} festgelegt werden, haben Vorrang vor allen anderen gesetzten Werten, selbst denen, die mit `!important` markiert sind.

Der Kaskadenalgorithmus wird _vor_ dem Spezifitätsalgorithmus angewendet, was bedeutet, wenn `:root p { color: red;}` im Benutzer-Stylesheet erklärt wird (Reihe 2) und ein weniger spezifisches `p {color: blue;}` im Autor-Stylesheet (Reihe 3) vorliegt, werden die Absätze blau sein.

## Einfaches Beispiel

Bevor wir einen genaueren Blick darauf werfen, wie Kaskadenebenen die Kaskade beeinflussen, wollen wir ein Beispiel betrachten, das mehrere Quellen von CSS über die verschiedenen Ursprünge hinweg umfasst und die Schritte des Kaskadenalgorithmus durchgehen:

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
} /* Dies ist ein Reset */
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

In diesem Fall sollten Deklarationen innerhalb von `li` und `.specific`-Regeln gelten.

Einmal mehr gibt es fünf Schritte im Kaskadenalgorithmus, der Reihe nach:

1. Relevanz
2. Herkunft und Wichtigkeit
3. Spezifität
4. Nähe zum Geltungsbereich
5. Erscheinungsreihenfolge

Der Wert von `1px` ist für Print-Medien. Wegen der fehlenden _Relevanz_ basierend auf seinem Medientyp wird es aus der Betrachtung entfernt.

Keine Deklaration ist als `!important` markiert, daher ist die Vorrangreihenfolge Autor-Stylesheets über Benutzer-Stylesheets über Benutzeragenten-Stylesheet. Basierend auf _Herkunft und Wichtigkeit_ werden die `1em` aus dem Benutzer-Stylesheet und die `10px` aus dem Benutzeragenten-Stylesheet aus der Betrachtung entfernt.

Beachten Sie, dass selbst wenn der Benutzerstil auf `.specific` von `1em` eine höhere Spezifität hat, er eine normale Deklaration in einem Benutzer-Stylesheet ist. Daher hat er eine niedrigere Vorrangstellung als alle Autor-Stile und wird durch den Schritt der Herkunft und Wichtigkeit des Algorithmus entfernt, bevor die Spezifität überhaupt ins Spiel kommt.

Es gibt drei Deklarationen in Autor-Stylesheets:

```css
li {
  margin-left: 0;
} /* von autor css 1 */
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

Die letzte, die `5px` ist Teil einer Kaskadenschicht. Normale Deklarationen in Schichten haben einen niedrigeren Vorrang als normale Stile, die nicht in einer Schicht im selben Ursprungstyp sind. Dies wird auch durch Schritt 2 des Algorithmus, _Herkunft und Wichtigkeit_, entfernt.

Dies lässt die `0` und die `3px`, die beide denselben Selektor haben, daher die gleiche _Spezifität_. Keiner von beiden ist innerhalb eines `@scope`-Blocks, so dass die Nähe zum Geltungsbereich in diesem Beispiel auch keine Rolle spielt.

Dann betrachten wir die _Erscheinungsreihenfolge_. Die zweite, die letzte der beiden nicht geschichteten Autorstile, gewinnt.

```css
margin-left: 3px;
```

> [!NOTE]
> Die in Benutzer-CSS definierte Deklaration, obwohl sie möglicherweise eine größere Spezifität hat, wird nicht gewählt, da der Kaskadenalgorithmus auf _Herkunft und Wichtigkeit_ angewendet wird, bevor der _Spezifitätsalgorithmus_ eingesetzt wird. Die in einer Kaskadenschicht definierte Deklaration wird auch dann keinen Vorrang haben, wenn sie später im Code kommt, da normale Stile in Kaskadenschichten weniger Vorrang haben als normale nicht geschichtete Stile. _Erscheinungsreihenfolge_ spielt nur dann eine Rolle, wenn sowohl Herkunft, Wichtigkeit als auch Spezifität gleich sind.

## Autorenstile: Inline-Stile, Ebenen und Vorrang

Die [Tabelle in Kaskadenreihenfolge](#kaskadenreihenfolge) bietet einen Überblick über die Vorrangstellung. Die Tabelle fasst die Stile der Benutzeragenten, Benutzer und Autor-Ursprungstypen in zwei Zeilen mit "Ursprungstyp - normal" und "Ursprungstyp - !important" zusammen. Der Vorrang innerhalb jedes Ursprungstyps ist nuancierter. Stile können innerhalb von Schichten innerhalb ihres Ursprungstyps enthalten sein, und bei Autorenstilen gibt es auch die Frage, wo Inline-Stile in der Kaskadenreihenfolge landen.

Die Reihenfolge, in der Schichten erklärt werden, ist wichtig, um den Vorrang zu bestimmen. Normale Stile in einer Schicht haben Vorrang vor Stilen, die in vorherigen Schichten erklärt wurden; normale Stile, die außerhalb einer Schicht erklärt werden, haben Vorrang vor geschichteten normalen Stilen, unabhängig von der Spezifität.

In diesem Beispiel hat der Autor die {{CSSXref('@import')}}-Regel verwendet, um fünf externe Stylesheets innerhalb eines {{HTMLElement('style')}}-Informationselements zu importieren.

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

In dem obigen CSS-Codeblock wurden drei Kaskadenschichten namens "A", "B" und "C" in dieser Reihenfolge erstellt. Drei Stylesheets wurden direkt in Schichten importiert, und zwei wurden importiert, ohne dass eine Schicht erstellt oder zugewiesen wurde. Die "Alle nicht geschichteten Stile" in der unten stehenden Liste (normaler Autorstil-Vorrang - Ordnung 4) umfasst Stile aus diesen beiden Stylesheets und die zusätzlichen nicht geschichteten CSS-Stilblöcke. Zusätzlich gibt es zwei Inline-Stile, eine normale `line-height`-Deklaration und eine wichtige `text-decoration`-Deklaration:

| Ordnung (niedrig bis hoch) | Autorstil            | Wichtigkeit    |
| --------------------------- | ------------------- | -------------  |
| 1                           | A - erste Schicht   | normal         |
| 2                           | B - zweite Schicht  | normal         |
| 3                           | C - letzte Schicht  | normal         |
| 4                           | Alle nicht geschichteten Stile | normal |
| 5                           | inline `style`      | normal         |
| 6                           | Animationen         |                |
| 7                           | Alle nicht geschichteten Stile | `!important` |
| 8                           | C - letzte Schicht  | `!important`   |
| 9                           | B - zweite Schicht  | `!important`   |
| 10                          | A - erste Schicht   | `!important`   |
| 11                          | inline `style`      | `!important`   |
| 12                          | Übergänge           |                |

In allen Ursprungstypen haben die nicht wichtigen Stile, die in Schichten enthalten sind, den niedrigsten Vorrang. In unserem Beispiel haben die normalen Stile, die mit der ersten deklarierten Schicht (A) verbunden sind, einen niedrigeren Vorrang als normale Stile in der zweiten deklarierten Schicht (B), die einen niedrigeren Vorrang als normale Stile in der dritten deklarierten Schicht (C) haben. Diese geschichteten Stile haben einen niedrigeren Vorrang als alle normalen nicht geschichteten Stile, was die normalen Stile aus `unlayeredStyles.css`, `moreUnlayeredStyles.css` und das `color` von `p` im `<style>` selbst einschließt.

Wenn einer der geschichteten Stile in A, B oder C, Selektoren mit höherer Spezifität, die mit einem Element übereinstimmen, hat, ähnlich wie `:root body p { color: black;}`, spielt es keine Rolle. Diese Deklarationen werden aus der Betrachtung entfernt wegen des _Ursprungs_; normale geschichtete Stile haben weniger Vorrang als normale nicht geschichtete Stile. Wenn jedoch der spezifischere Selektor `:root body p { color: black;}` in `unlayeredStyles.css` enthalten war, da sowohl _Herkunft und Wichtigkeit_ denselben Vorrang haben, würde _Spezifität_ bedeuten, dass die spezifischere, schwarze Deklaration gewinnen würde.

Die Vorrangstellung der Schichten wird für Stile, die als `!important` erklärt werden, invertiert. Wichtige Stile, die in einer Schicht erklärt werden, haben Vorrang vor wichtigen Stilen, die außerhalb einer Schicht erklärt werden. Wichtige Stile in der ersten deklarierten Schicht (A) haben Vorrang vor wichtigen Deklarationen, die in der Schicht B erklärt werden, die Vorrang vor C haben, die Vorrang vor wichtigen Deklarationen in den nicht geschichteten Stilen haben.

### Inline-Stile

Nur relevant für Autor-Stile sind Inline-Stile, die mit dem `style` Attribut erklärt werden. Normale Inline-Stile haben Vorrang vor allen anderen normalen Autorenstilen, unabhängig von der Spezifität des Selektors. Wenn `line-height: 2;` in einem `:root body p` Selektorblock in einem der fünf importierten Stylesheets erklärt wurde, wäre die Zeilenhöhe immer noch `1.6`.

Normale Inline-Stile haben Vorrang vor allen anderen normalen Autorenstilen, es sei denn, die Eigenschaft wird durch eine CSS-Animation verändert.

Alle wichtigen Inline-Stile haben Vorrang vor allen Autorenstilen, wichtig und nicht, inline und nicht, geschichtet und nicht. Wichtige Stile haben auch Vorrang vor animierten Eigenschaften, aber nicht vor Übergangseigenschaften. Drei Dinge können einen wichtigen Inline-Stil außer Kraft setzen: 1) ein wichtiger Benutzerstil, 2) ein wichtiger Benutzeragentenstil oder 3) ein übergangener Eigenschaftswert.

### Wichtigkeit und Schichten

Die Vorrangstellung des Ursprungstyps wird für wichtige Stile umgekehrt. Wichtige Stile, die außerhalb einer Kaskadenschicht erklärt werden, haben einen niedrigeren Vorrang als die, die als Teil einer Schicht erklärt werden. Wichtige Werte, die früh in den Schichten auftreten, haben Vorrang vor wichtigen Stilen, die in nachfolgenden Kaskadenschichten erklärt werden.

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

Selbst wenn das Rot zuerst erklärt wird und einen weniger spezifischen Selektor hat, da nicht geschichtetes CSS Vorrang vor geschichtetem CSS hat, wird der Absatz rot sein. Hätten wir einen Inline-Stil auf den Absatz gesetzt, um ihn in einer anderen Farbe festzulegen, z. B. `<p style="color: black">`, wäre der Absatz schwarz.

Wenn wir `!important` zu diesem CSS hinzufügen, wird die Vorrangstellung innerhalb des Stylesheets umgekehrt:

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

Jetzt wird der Absatz blau. Das `!important` in der frühesten deklarierten Schicht hat Vorrang gegenüber späteren Schichten und nicht geschichteten wichtigen Deklarationen. Wenn der Inline-Stil `!important` enthalten würde, wie zum Beispiel `<p style="color: black !important">`, wäre der Absatz wieder schwarz. Die Wichtigkeit von Inline-Stilen hat Vorrang vor allen anderen von Autoren erklärten `!important` Deklarationen, unabhängig von der Spezifität.

> [!NOTE]
> Das `!important`-Flag kehrt die Vorrangstellung der Kaskadenschichten um. Aus diesem Grund sollten Sie versuchen, nicht `!important` zu verwenden, um externe Stile zu überschreiben. Verwenden Sie stattdessen {{cssxref("@import")}} zusammen mit dem `layer`-Schlüsselwort oder der `layer()`-Funktion, um externe Stylesheets (von Frameworks, Widget-Stylesheets, Bibliotheken usw.) in Schichten zu importieren. Wenn Sie Stylesheets als erste Deklaration in Ihrem CSS in eine Schicht importieren, wird deren Vorrang herabgesetzt, und später in Ihrem CSS definierte Autorenebenen haben einen höheren Vorrang. Das `!important`-Flag sollte nur sparsam verwendet werden, wenn überhaupt, um erforderliche Stile gegen spätere Überschreibungen in der ersten deklarierten Schicht zu schützen.

Stile, die sich im Übergang befinden, haben Vorrang vor allen wichtigen Stilen, unabhängig davon, von wem oder wie sie erklärt wurden.

## Vollständige Kaskadenreihenfolge

Nachdem wir ein besseres Verständnis der Vorrangstellung von Ursprungstypen und Kaskadenschichten haben, stellen wir fest, dass die Tabelle in [Kaskadenreihenfolge](#kaskadenreihenfolge) genauer durch die folgende Tabelle dargestellt werden könnte:

<table>
<thead>
  <tr><th>Vorrangstellung <br/>(niedrig bis hoch)</th><th>Stil-Ursprung</th><th>Wichtigkeit</th></tr>
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
  <tr><td>inline <code>style</code></td></tr>
  <tr><td>4</td><td>Animationen</td><td></td></tr>
  <tr><td rowspan="4">5</td><td>Autor - nicht geschichtete Stile</td><td rowspan="4"><code>!important</code></td></tr>
  <tr><td>Autor - letzte deklarierte Schicht</td></tr>
  <tr><td>Autor - erste deklarierte Schicht</td></tr>
  <tr><td>inline <code>style</code></td></tr>
  <tr><td rowspan="3">6</td><td>Benutzer - nicht geschichtete Stile</td><td rowspan="3"><code>!important</td></tr>
  <tr><td>Benutzer - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzer - erste deklarierte Schicht</td></tr>
  <tr><td rowspan="3">7</td><td>Benutzeragent - nicht geschichtete Stile</td><td rowspan="3"><code>!important</code></td></tr>
  <tr><td>Benutzeragent - letzte deklarierte Schicht</td></tr>
  <tr><td>Benutzeragent - erste deklarierte Schicht</td></tr>
  <tr><td>8</td><td>Übergänge</td><td></td></tr>
</tbody>
</table>

## Welche CSS-Entitäten nehmen an der Kaskade teil

Nur CSS-Eigenschaft/Wert-Paar-Deklarationen nehmen an der Kaskade teil. CSS-At-Rules-Deskriptoren nehmen nicht an der Kaskade teil und HTML-Darstellungsattribute sind nicht Teil der Kaskade.

### At-Rules

CSS-[At-Rules](/de/docs/Web/CSS/At-rule), die Entitäten enthalten, die keine Deklarationen sind, wie eine {{ cssxref("@font-face")}}-Regel, die _Deskriptoren_ enthält, nehmen nicht an der Kaskade teil.

Größtenteils nehmen die innerhalb von At-Rules definierten Eigenschaften und Deskriptoren nicht an der Kaskade teil. Nur die At-Rules als Ganzes nehmen an der Kaskade teil. Innerhalb einer `@font-face`-Regel werden beispielsweise Schriftartnamen durch [`font-family`](/de/docs/Web/CSS/@font-face/font-family)-Deskriptoren identifiziert. Wenn mehrere `@font-face`-Regeln mit demselben Deskriptor definiert sind, wird nur die am besten geeignete `@font-face` als Ganzes betrachtet. Wenn mehr als eine identisch geeignet ist, werden die gesamten `@font-face`-Deklarationen mit den Schritten 1, 2 und 4 des Algorithmus verglichen (es gibt keine Spezifität bei At-Rules).

Obwohl die innerhalb der meisten At-Rules enthaltenen Deklarationen — wie die in {{cssxref("@media")}}, {{cssxref("@document")}}, oder {{cssxref("@supports")}} — an der Kaskade teilnehmen, kann die At-Rule einen gesamten Selektor irrelevant machen, wie wir es mit dem Print-Stil im [einfachen Beispiel](#einfaches_beispiel) gesehen haben.

Deklarationen in {{cssxref("@keyframes")}} nehmen nicht an der Kaskade teil. Wie bei `@font-face` wird nur das `@keyframes` als Ganzes über den Kaskadenalgorithmus ausgewählt. Die [Vorrangstellung der Animation wird unten beschrieben](#css-animationen_und_die_kaskade).

Wenn es um {{cssxref("@import")}} geht, nimmt das `@import` selbst nicht an der Kaskade teil, aber alle importierten Stile nehmen an der Kaskade teil. Wenn das `@import` eine [benannte oder anonyme Schicht](/de/docs/Web/CSS/@layer) definiert, werden die Inhalte des importierten Stylesheets in die angegebene Schicht platziert. Alle anderen mit `@import` importierten CSS werden als letzte deklarierte Schicht behandelt. Dies wurde oben erörtert.

Schließlich folgt {{cssxref("@charset")}} spezifischen Algorithmen und wird nicht vom Kaskadenalgorithmus beeinflusst.

### Präsentationsattribute

Präsentationsattribute sind Attribute im Quelldokument, die das Styling beeinflussen können. Zum Beispiel legt das möglicherweise enthaltene, veraltete `align`-Attribut die Ausrichtung auf mehreren HTML-Elementen und das `fill`-Attribut die Farbe fest, die verwendet wird, um SVG-Formen und Text zu malen, und definiert den Endzustand für SVG-Animationen. Während sie Autorenstile sind, nehmen Präsentationsattribute nicht an der Kaskade teil.

Wenn das HTML-Darstellungsattribut vom Benutzeragent unterstützt wird, werden gültige Präsentationsattribute, die in HTML und SVG enthalten sind, wie die [`align`](/de/docs/Web/HTML/Element/img#align) oder [`fill`](/de/docs/Web/SVG/Attribute/fill) Attribute, in die entsprechenden CSS-Regeln übersetzt (alle SVG-Darstellungsattribute werden als CSS-Eigenschaften unterstützt) und in das Autoren-Stylesheet vor allen anderen Stilen mit einer Spezifität von `0` eingefügt.

Präsentationsattribute können nicht als `!important` erklärt werden.

## CSS-Animationen und die Kaskade

[CSS-Animationen](/de/docs/Web/CSS/CSS_animations), die {{ cssxref("@keyframes")}} At-Rules verwenden, definieren Animationen zwischen Zuständen. Keyframes kaskadieren nicht, was bedeutet, dass CSS zu jeder gegebenen Zeit Werte nur von einem einzigen {{cssxref("@keyframes")}} übernimmt und niemals mehrere miteinander kombiniert.

Wenn mehrere Keyframe-Animationen mit demselben Animationsnamen definiert sind, gewinnt das zuletzt definierte `@keyframes` im Ursprung und in der Schicht mit dem größten Vorrang. Nur eine `@keyframes`-Definition wird verwendet, selbst wenn die `@keyframes` unterschiedliche Eigenschaften animieren. `@keyframes` mit demselben Namen werden niemals kombiniert.

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

In diesem Beispiel gibt es drei separate Animationsdeklarationen mit dem Namen `repeatedName`. Wenn `animation: infinite 5s alternate repeatedName` auf den Absatz angewendet wird, wird nur eine Animation angewendet: die Keyframe-Animation, die im nicht geschichteten CSS definiert ist, hat Vorrang vor den geschichteten Keyframe-Animationsdeklarationen basierend auf Ursprung und Kaskadenschicht-Vorrangstellung. In diesem Beispiel wird nur die Schriftgröße des Elements animiert.

> [!NOTE]
> Es gibt keine wichtigen Animationen, da Eigenschaftsdeklarationen in einem {{cssxref('@keyframes')}}-Block, die `!important` als Teil des Wertes enthalten, ignoriert werden.

## Zurücksetzen von Stilen

Nachdem Ihr Inhalt das Styling beendet hat, kann es sich in einer Situation befinden, in der er es auf einen bekannten Zustand zurücksetzen muss. Dies kann in Fällen von Animationen, Themenänderungen und so weiter passieren. Die CSS-Eigenschaft {{cssxref("all")}} ermöglicht es Ihnen, (fast) alles in CSS schnell auf einen bekannten Zustand zurückzusetzen.

`all` ermöglicht es Ihnen, alle Eigenschaften sofort auf einen ihrer Anfangszustände, den Zustand, der von der vorherigen Ebene der Kaskade geerbt wurde, einen spezifischen Ursprung (das Benutzeragenten-Stylesheet, das Autoren-Stylesheet oder das Benutzer-Stylesheet) zurückzusetzen, oder auch die Werte der Eigenschaften vollständig zu löschen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Bausteine: die CSS-Kaskade](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [Bausteine: Kaskadenschichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade)-Modul
- [CSS-Syntax](/de/docs/Web/CSS/Syntax)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [At-Rules](/de/docs/Web/CSS/At-rule)
- [Initial](/de/docs/Web/CSS/initial_value), [berechnet](/de/docs/Web/CSS/computed_value), [benutzt](/de/docs/Web/CSS/used_value) und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
