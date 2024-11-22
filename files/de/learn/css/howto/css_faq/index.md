---
title: CSS-FAQ
slug: Learn/CSS/Howto/CSS_FAQ
l10n:
  sourceCommit: b692821c494fd3a25dd883b6fe14998fa2621f7b
---

{{LearnSidebar}}

In diesem Artikel finden Sie einige häufig gestellte Fragen (FAQs) zu CSS, zusammen mit Antworten, die Ihnen auf Ihrem Weg, ein Webentwickler zu werden, helfen könnten.

## Warum rendert mein CSS, das gültig ist, nicht richtig?

Browser verwenden die `doctype`-Deklaration, um zu entscheiden, ob sie das Dokument in einem Modus anzeigen, der mehr mit Webstandards kompatibel ist, oder mit alten Browserfehlern. Indem Sie eine korrekte und moderne `doctype`-Deklaration am Anfang Ihres HTML verwenden, verbessern Sie die Einhaltung der Browserstandards.

Moderne Browser haben zwei Haupt-Rendering-Modi:

- _Quirks-Modus_: auch Rückwärtskompatibilitätsmodus genannt, ermöglicht es Altdokumenten, wie von ihren Autoren beabsichtigt, dargestellt zu werden, indem sie die nicht standardmäßigen Rendering-Regeln älterer Browser verwenden. Dokumente mit einer unvollständigen, falschen oder fehlenden `doctype`-Deklaration oder einer bekannten `doctype`-Deklaration, die häufig vor 2001 verwendet wurde, werden im Quirks-Modus gerendert.
- _Standardmodus_: der Browser versucht, die W3C-Standards strikt zu befolgen. Neue HTML-Seiten sollten so gestaltet sein, dass sie mit standardkonformen Browsern funktionieren, und daher werden Seiten mit einer modernen `doctype`-Deklaration im Standardmodus gerendert.

Auf Gecko basierende Browser haben einen dritten [eingeschränkten Quirks-Modus](https://en.wikipedia.org/wiki/Quirks_mode#Limited_quirks_mode), der nur wenige kleinere Eigenarten aufweist.

Die standardmäßige `doctype`-Deklaration, die den Standardmodus auslöst, lautet:

```html
<!doctype html>
```

Wann immer möglich, sollten Sie einfach den oben genannten Doctype verwenden. Es gibt andere gültige veraltete Doctypes, die den Standard- oder Fast-Standardmodus auslösen:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

## Warum rendert mein CSS, das gültig ist, überhaupt nicht?

Hier sind einige mögliche Ursachen:

- Sie haben den Pfad zur CSS-Datei falsch angegeben.
- Ein CSS-Stylesheet muss mit einem `text/css`-MIME-Typ bereitgestellt werden, damit es angewendet wird. Wenn der Webserver es nicht mit diesem Typ bereitstellt, wird es nicht angewendet.

## Was ist der Unterschied zwischen `id` und `class`?

HTML-Elemente können ein `id`- und/oder `class`-Attribut haben. Das `id`-Attribut weist dem Element, auf das es angewendet wird, einen Namen zu, und für gültiges Markup kann es nur ein Element mit diesem Namen geben. Das `class`-Attribut weist dem Element einen Klassennamen zu, und dieser Name kann auf viele Elemente innerhalb der Seite angewendet werden. CSS ermöglicht es Ihnen, Stile auf bestimmte `id`- und/oder `class`-Namen anzuwenden.

- Verwenden Sie einen klassenspezifischen Stil, wenn Sie die Gestaltungsregeln auf viele Blöcke und Elemente innerhalb der Seite anwenden möchten, oder wenn Sie derzeit nur ein Element haben, das Sie mit diesem Stil gestalten möchten, Sie jedoch später weitere hinzufügen könnten.
- Verwenden Sie einen id-spezifischen Stil, wenn Sie die angewendeten Gestaltungsregeln auf einen bestimmten Block oder ein bestimmtes Element beschränken müssen. Dieser Stil wird nur vom Element mit dieser speziellen id verwendet.

Es wird allgemein empfohlen, Klassen so oft wie möglich zu verwenden und ids nur dann zu verwenden, wenn es absolut notwendig ist, wie zum Beispiel um Label- und Formularelemente zu verbinden oder für die Gestaltung von Elementen, die semantisch einzigartig sein müssen:

- Die Verwendung von Klassen macht Ihre Gestaltung erweiterbar — selbst wenn Sie derzeit nur ein Element mit einem bestimmten Regelsatz gestalten, könnten Sie später weitere hinzufügen.
- Klassen ermöglichen es Ihnen, mehrere Elemente zu stylen, was dazu führen kann, dass Stylesheets kürzer sind, anstatt die gleichen Gestaltungsinformationen in mehreren Regeln zu schreiben, die id-Selektoren verwenden. Kürzere Stylesheets sind leistungsfähiger.
- Klassenselektoren haben eine geringere [Spezifität](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity) als id-Selektoren und sind daher bei Bedarf leichter zu überschreiben.

> [!NOTE]
> Siehe [Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors) für weitere Informationen.

## Wie kann ich den Standardwert einer Eigenschaft wiederherstellen?

Anfangs bot CSS kein "default"-Schlüsselwort und der einzige Weg, den Standardwert einer Eigenschaft wiederherzustellen, bestand darin, diese Eigenschaft ausdrücklich neu zu deklarieren. Zum Beispiel:

```css
/* Heading default color is black */
h1 {
  color: red;
}
h1 {
  color: black;
}
```

Dies hat sich mit CSS 2 geändert; das Schlüsselwort [initial](/de/docs/Web/CSS/initial) ist jetzt ein gültiger Wert für eine CSS-Eigenschaft. Es setzt die Eigenschaft auf ihren Standardwert zurück, der in der CSS-Spezifikation der betreffenden Eigenschaft definiert ist.

```css
/* Heading default color is black */
h1 {
  color: red;
}
h1 {
  color: initial;
}
```

## Wie leite ich einen Stil von einem anderen ab?

CSS erlaubt es nicht genau, einen Stil in Bezug auf einen anderen zu definieren. Durch das Zuweisen mehrerer Klassen zu einem einzelnen Element kann jedoch derselbe Effekt erzielt werden, und [CSS-Variablen](/de/docs/Web/CSS/Using_CSS_custom_properties) bieten jetzt eine Möglichkeit, Gestaltungsinformationen an einem Ort zu definieren, die an mehreren Stellen wiederverwendet werden können.

## Wie weise ich einem Element mehrere Klassen zu?

HTML-Elementen können mehrere Klassen zugewiesen werden, indem die Klassen im `class`-Attribut aufgelistet werden, wobei ein Leerzeichen als Trennzeichen dient.

```html
<style>
  .news {
    background: black;
    color: white;
  }
  .today {
    font-weight: bold;
  }
</style>

<div class="news today">Content of today's news goes here.</div>
```

Wenn dieselbe Eigenschaft in beiden Regeln deklariert ist, wird der Konflikt zuerst durch die Spezifität und dann entsprechend der Reihenfolge der CSS-Deklarationen gelöst. Die Reihenfolge der Klassen im `class`-Attribut ist nicht relevant.

## Warum funktionieren meine Stilregeln nicht richtig?

Stilregeln, die syntaktisch korrekt sind, gelten möglicherweise in bestimmten Situationen nicht. Sie können die [Rules view](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) des _CSS-Paneels_ im Inspektor verwenden, um Probleme dieser Art zu debuggen, aber die häufigsten Fälle von ignorierten Stilregeln sind unten aufgeführt.

### HTML-Elemente-Hierarchie

Die Art und Weise, wie CSS-Stile auf HTML-Elemente angewendet werden, hängt auch von der Hierarchie der Elemente ab. Es ist wichtig, daran zu denken, dass eine Regel, die auf einen Nachkommen angewendet wird, den Stil des übergeordneten Elements überschreibt, unabhängig von der Spezifität oder Priorität der CSS-Regeln.

```css
.news {
  color: black;
}
.corpName {
  font-weight: bold;
  color: red;
}
```

```html
<!-- news item text is black, but corporate name is red and in bold -->
<div class="news">
  (Reuters) <span class="corpName">General Electric</span> (GE.NYS) announced on
  Thursday…
</div>
```

Im Falle komplexer HTML-Hierarchien, wenn eine Regel ignoriert zu werden scheint, sollten Sie überprüfen, ob sich das Element innerhalb eines anderen Elements mit einem anderen Stil befindet.

### Explizit neu definierte Stilregel

In CSS-Stylesheets ist die Reihenfolge **wichtig**. Wenn Sie eine Regel definieren und dann dieselbe Regel neu definieren, wird die letzte Definition verwendet.

```css
#stockTicker {
  font-weight: bold;
}
.stockSymbol {
  color: red;
}
/*  other rules             */
/*  other rules             */
/*  other rules             */
.stockSymbol {
  font-weight: normal;
}
```

```html
<!-- most text is in bold, except "GE", which is red and not bold -->
<div id="stockTicker">NYS: <span class="stockSymbol">GE</span> +1.0…</div>
```

Um diese Art von Fehler zu vermeiden, versuchen Sie, Regeln nur einmal für einen bestimmten Selektor zu definieren, und gruppieren Sie alle Regeln, die zu diesem Selektor gehören.

### Verwendung einer Kurznotation

Die Verwendung von Kurznotationen für die Definition von Stilregeln ist gut, da sie eine sehr kompakte Syntax verwendet. Die Nutzung der Kurznotation mit nur einigen Attributen ist möglich und korrekt, aber es muss daran erinnert werden, dass nicht deklarierte Attribute automatisch auf ihre Standardwerte zurückgesetzt werden. Dies bedeutet, dass eine vorherige Regel für ein einzelnes Attribut implizit überschrieben werden könnte.

```css
#stockTicker {
  font-size: 12px;
  font-family: Verdana;
  font-weight: bold;
}
.stockSymbol {
  font: 14px Arial;
  color: red;
}
```

```html
<div id="stockTicker">NYS: <span class="stockSymbol">GE</span> +1.0…</div>
```

Im vorherigen Beispiel trat das Problem bei Regeln für verschiedene Elemente auf, aber es könnte auch für dasselbe Element auftreten, weil die Reihenfolge der Regeln **wichtig** ist.

```css
#stockTicker {
  font-weight: bold;
  font: 12px Verdana; /* font-weight is now set to normal */
}
```

### Verwendung des `*`-Selektors

Der `*`-Wildcard-Selektor bezieht sich auf jedes Element und muss mit besonderer Vorsicht verwendet werden.

```css
body * {
  font-weight: normal;
}
#stockTicker {
  font: 12px Verdana;
}
.corpName {
  font-weight: bold;
}
.stockUp {
  color: red;
}
```

```html
<div id="section">
  NYS: <span class="corpName"><span class="stockUp">GE</span></span> +1.0…
</div>
```

In diesem Beispiel wendet der `body *`-Selektor die Regel auf alle Elemente im Körper an, auf jeder Hierarchieebene, einschließlich der `.stockUp`-Klasse. Daher wird `font-weight: bold;`, das auf die `.corpName`-Klasse angewendet wird, durch `font-weight: normal;`, das auf alle Elemente im Körper angewendet wird, überschrieben.

Die Verwendung des \*-Selektors sollte minimiert werden, da er ein langsamer Selektor ist, insbesondere wenn er nicht als erstes Element eines Selektors verwendet wird. Seine Verwendung sollte so weit wie möglich vermieden werden.

### Spezifität in CSS

Wenn mehrere Regeln auf ein bestimmtes Element angewendet werden, hängt die gewählte Regel von ihrer [Spezifität](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity) ab. Ein Inline-Stil (in HTML-`style`-Attributen) hat die höchste Spezifität und überschreibt alle Selektoren, gefolgt von ID-Selektoren, dann Klassenselektoren und schließlich Elementselektoren. Die Textfarbe des folgenden {{htmlelement("div")}} wird daher rot sein.

```css
div {
  color: black;
}
#orange {
  color: orange;
}
.green {
  color: green;
}
```

```html
<div id="orange" class="green" style="color: red;">This is red</div>
```

Die Regeln sind komplizierter, wenn der Selektor mehrere Teile hat. Eine detailliertere Erklärung, wie die Selektor-Spezifität berechnet wird, finden Sie in der [CSS-Spezifitätsdokumentation](/de/docs/Web/CSS/Specificity).

## Was bewirken die -moz-\*, -ms-\*, -webkit-\*, -o-\* und -khtml-\* Eigenschaften?

Diese Eigenschaften, genannt _präprafixierte Eigenschaften_, sind Erweiterungen des CSS-Standards. Sie wurden einst verwendet, um die Nutzung experimenteller und nicht standardmäßiger Funktionen in Browsern zu ermöglichen, ohne den regulären Namensraum zu verschmutzen, um zukünftige Inkompatibilitäten zu vermeiden, wenn der Standard erweitert wird.

Die Verwendung solcher Eigenschaften auf Produktionswebsites wird nicht empfohlen — sie haben bereits ein großes Webkompatibilitätsproblem geschaffen. Zum Beispiel verwenden viele Entwickler nur die mit `-webkit-` vorangestellte Version einer Eigenschaft, wenn die nicht vorangestellte Version weltweit von allen Browsern unterstützt wird. Das bedeutet, dass ein Design, das sich auf diese Eigenschaft stützt, in nicht auf WebKit basierenden Browsern nicht funktioniert, obwohl es könnte. Dieses Problem war so groß, dass andere Browser gezwungen wurden, `-webkit-` vorangestellte Aliase zu implementieren, um die Webkompatibilität zu verbessern, wie es im [Compatibility Living Standard](https://compat.spec.whatwg.org/) spezifiziert ist.

Browser verwenden keine CSS-Präfixe mehr, wenn sie neue experimentelle Features implementieren. Stattdessen testen sie neue Funktionen hinter konfigurierbaren experimentellen Flags oder nur in Nightly-Browser-Versionen oder ähnlichem.

Wenn Sie in Ihrer Arbeit Präfixe verwenden müssen, schreiben Sie zuerst die mit Präfixen versehenen Versionen und dann die nicht mit Präfixen versehene Standardversion. Auf diese Weise überschreibt die Standardversion automatisch die mit Präfixen versehenen Versionen, wenn sie unterstützt werden. Zum Beispiel:

```css
-webkit-text-stroke: 4px navy;
text-stroke: 4px navy;
```

> [!NOTE]
> Weitere Informationen zum Umgang mit vorangestellten Eigenschaften finden Sie unter [Umgang mit häufigen HTML- und CSS-Problemen — Umgang mit CSS-Präfixen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#handling_css_prefixes) aus unserem [Cross-Browser-Testing](/de/docs/Learn/Tools_and_testing/Cross_browser_testing) Modul.

> [!NOTE]
> Siehe die [Mozilla-CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions) und [WebKit-CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions) für Listen von browser-spezifischen CSS-Eigenschaften.

## Wie hängt z-index mit der Positionierung zusammen?

Die `z-index`-Eigenschaft gibt die Stapelreihenfolge von Elementen an.

Ein Element mit einem höheren z-index/Stapelreihenfolge wird immer vor einem Element mit einem niedrigeren z-index/Stapelreihenfolge auf dem Bildschirm gerendert. Z-index funktioniert nur bei Elementen, die eine festgelegte Position haben (`position:absolute`, `position:relative`, oder `position:fixed`).

> [!NOTE]
> Weitere Informationen finden Sie in unserem Artikel [Positioning](/de/docs/Learn/CSS/CSS_layout/Positioning) und insbesondere im Abschnitt [Introducing z-index](/de/docs/Learn/CSS/CSS_layout/Positioning#introducing_z-index).
