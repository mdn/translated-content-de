---
title: CSS-FAQ
slug: Learn_web_development/Howto/Solve_CSS_problems/CSS_FAQ
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

In diesem Artikel finden Sie einige häufig gestellte Fragen (FAQs) zu CSS, zusammen mit Antworten, die Ihnen bei Ihrem Bestreben, ein Webentwickler zu werden, helfen können.

## Warum wird mein gültiges CSS nicht korrekt gerendert?

Browser verwenden die `doctype`-Deklaration, um zu entscheiden, ob das Dokument in einem Modus dargestellt wird, der besser mit Webstandards oder mit alten Browserfehlern kompatibel ist. Durch die Verwendung einer korrekten und modernen `doctype`-Deklaration am Anfang Ihres HTMLs wird die standardkonforme Darstellung in Browsern verbessert.

Moderne Browser haben zwei Haupt-Wiedergabemodi:

- _Quirks Mode_: auch als Rückwärtskompatibilitätsmodus bekannt, ermöglicht es, dass ältere Webseiten so gerendert werden, wie ihre Autoren es beabsichtigten, gemäß den nicht standardisierten Darstellungsregeln älterer Browser. Dokumente mit einer unvollständigen, falschen oder fehlenden `doctype`-Deklaration oder einer bekannten `doctype`-Deklaration, die vor 2001 gebräuchlich war, werden im Quirks Mode gerendert.
- _Standards Mode_: Der Browser versucht, die W3C-Standards strikt einzuhalten. Neue HTML-Seiten sollten für standard-konforme Browser entworfen werden, daher werden Seiten mit einer modernen `doctype`-Deklaration im Standards Mode gerendert.

Gecko-basierte Browser haben einen dritten [Limited Quirks Mode](https://de.wikipedia.org/wiki/Quirks_Mode#Limited_quirks_mode), der nur wenige kleinere Besonderheiten aufweist.

Die Standard-`doctype`-Deklaration, die den Standards Mode auslöst, ist:

```html
<!doctype html>
```

Wenn möglich, sollten Sie einfach die obige Doctype verwenden. Es gibt andere gültige alte Doctypes, die den Standards- oder Beinahe-Standardsmodus auslösen:

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

## Warum wird mein gültiges CSS überhaupt nicht gerendert?

Hier sind einige mögliche Ursachen:

- Der Pfad zur CSS-Datei ist falsch.
- Ein CSS-Stylesheet muss mit dem MIME-Typ `text/css` bereitgestellt werden, damit es angewendet wird. Wenn der Webserver es nicht mit diesem Typ bereitstellt, wird es nicht angewendet.

## Was ist der Unterschied zwischen `id` und `class`?

HTML-Elemente können ein `id`- und/oder `class`-Attribut besitzen. Das `id`-Attribut weist dem angewendeten Element einen Namen zu, und für validen Markup kann es nur ein Element mit diesem Namen geben. Das `class`-Attribut weist dem Element einen Klassennamen zu, und dieser Name kann für viele Elemente innerhalb der Seite verwendet werden. CSS ermöglicht es Ihnen, Stile auf bestimmte `id`- und/oder `class`-Namen anzuwenden.

- Verwenden Sie einen klassen-spezifischen Stil, wenn Sie die Stilregeln auf viele Blöcke und Elemente innerhalb der Seite anwenden möchten, oder wenn Sie aktuell nur ein Element haben, das Sie mit diesem Stil stylen möchten, aber später vielleicht weitere hinzufügen möchten.
- Verwenden Sie einen id-spezifischen Stil, wenn Sie die angewandten Stilregeln auf einen bestimmten Block oder ein Element beschränken müssen. Dieser Stil wird nur vom Element mit dieser bestimmten id verwendet.

Es wird generell empfohlen, Klassen so viel wie möglich zu verwenden und ids nur dann, wenn es absolut notwendig ist für spezifische Verwendungen (wie um Label und Formularelemente zu verbinden oder um Elemente zu stylen, die semantisch einzigartig sein müssen):

- Durch die Verwendung von Klassen wird Ihr Styling erweiterbar — selbst wenn Sie aktuell nur ein Element mit einem bestimmten Regelwerk stylen, möchten Sie möglicherweise später mehr hinzufügen.
- Klassen ermöglichen das Stylen mehrerer Elemente, was zu kürzeren Stylesheets führen kann, anstatt die gleichen Stilinformationen in mehreren Regeln zu wiederholen, die id-Selektoren verwenden. Kürzere Stylesheets sind performanter.
- Klassenselektoren haben eine niedrigere [Spezifität](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity) als id-Selektoren, was es einfacher macht, sie bei Bedarf zu überschreiben.

> [!NOTE]
> Siehe [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) für weitere Informationen.

## Wie stelle ich den Standardwert einer Eigenschaft wieder her?

Ursprünglich bot CSS kein "default"-Schlüsselwort, und die einzige Möglichkeit, den Standardwert einer Eigenschaft wiederherzustellen, bestand darin, diese Eigenschaft explizit neu zu deklarieren. Zum Beispiel:

```css
/* Heading default color is black */
h1 {
  color: red;
}
h1 {
  color: black;
}
```

Dies hat sich mit CSS 2 geändert; das Schlüsselwort [initial](/de/docs/Web/CSS/initial) ist nun ein gültiger Wert für eine CSS-Eigenschaft. Damit wird sie auf ihren Standardwert zurückgesetzt, der in der CSS-Spezifikation der gegebenen Eigenschaft definiert ist.

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

CSS erlaubt es nicht direkt, einen Stil in Bezug auf einen anderen zu definieren. Das Zuweisen mehrerer Klassen zu einem einzelnen Element kann jedoch denselben Effekt bieten, und [CSS-Variablen](/de/docs/Web/CSS/Using_CSS_custom_properties) bieten jetzt eine Möglichkeit, Stilinformationen an einem Ort zu definieren, die an mehreren Orten wiederverwendet werden können.

## Wie weise ich einem Element mehrere Klassen zu?

HTML-Elemente können mehrere Klassen zugewiesen bekommen, indem die Klassen im `class`-Attribut aufgelistet werden, wobei ein Leerzeichen sie voneinander trennt.

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

Wenn die gleiche Eigenschaft in beiden Regeln deklariert ist, wird der Konflikt zuerst durch Spezifität und dann gemäß der Reihenfolge der CSS-Deklarationen gelöst. Die Reihenfolge der Klassen im `class`-Attribut ist nicht relevant.

## Warum funktionieren meine Stilregeln nicht richtig?

Stilregeln, die syntaktisch korrekt sind, werden in bestimmten Situationen möglicherweise nicht angewendet. Sie können die [Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) des _CSS Pane_ des Inspektors verwenden, um Probleme dieser Art zu debuggen, aber die häufigsten Fälle ignorierter Stilregeln sind unten aufgeführt.

### HTML-Elemente-Hierarchie

Die Art und Weise, wie CSS-Stile auf HTML-Elemente angewendet werden, hängt auch von der Hierarchie der Elemente ab. Es ist wichtig zu bedenken, dass eine Regel, die auf einen Nachkommen angewendet wird, den Stil des Elternteils überschreibt, unabhängig von der Spezifität oder Priorität der CSS-Regeln.

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

Bei komplexen HTML-Hierarchien, wenn eine Regel ignoriert zu sein scheint, überprüfen Sie, ob das Element innerhalb eines anderen Elements mit einem anderen Stil ist.

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

Um diesen Fehler zu vermeiden, versuchen Sie, Regeln nur einmal für einen bestimmten Selektor zu definieren und gruppieren Sie alle Regeln, die zu diesem Selektor gehören.

### Verwendung einer Kurzform-Eigenschaft

Der Einsatz von Kurzform-Eigenschaften zum Definieren von Stilregeln ist gut, da sie eine sehr kompakte Syntax verwenden. Es ist möglich und korrekt, Kurzformen mit nur einigen Attributen zu verwenden, allerdings muss bedacht werden, dass nicht deklarierte Attribute automatisch auf ihre Standardwerte zurückgesetzt werden. Dies bedeutet, dass eine vorherige Regel für ein einzelnes Attribut implizit überschrieben werden könnte.

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

Im vorherigen Beispiel trat das Problem bei Regeln auf, die zu verschiedenen Elementen gehörten, aber es könnte auch für dasselbe Element passieren, da die Reihenfolge der Regeln **wichtig** ist.

```css
#stockTicker {
  font-weight: bold;
  font: 12px Verdana; /* font-weight is now set to normal */
}
```

### Verwendung des `*`-Selektors

Der `*`-Wildcards-Selektor bezieht sich auf jedes Element und muss mit besonderer Vorsicht verwendet werden.

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

In diesem Beispiel wendet der `body *`-Selektor die Regel auf alle Elemente innerhalb des Körpers an, auf jeder Hierarchieebene, einschließlich der `.stockUp`-Klasse. Daher wird `font-weight: bold;`, das auf die `.corpName`-Klasse angewendet wurde, durch `font-weight: normal;`, das auf alle Elemente im Body angewendet wird, überschrieben.

Die Verwendung des \*-Selektors sollte minimiert werden, da es sich um einen langsamen Selektor handelt, besonders wenn er nicht als erstes Element eines Selektors verwendet wird. Seine Verwendung sollte so weit wie möglich vermieden werden.

### Spezifität in CSS

Wenn mehrere Regeln auf ein bestimmtes Element angewendet werden, wird die Regel gewählt, die die höchste [Spezifität](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity) hat. Inline-Stil (in HTML `style`-Attributen) hat die höchste Spezifität und überschreibt jegliche Selektoren, gefolgt von ID-Selektoren, dann Klassenselektoren und schließlich Elementselektoren. Die Textfarbe des folgenden {{htmlelement("div")}} wird daher rot sein.

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

Die Regeln sind komplizierter, wenn der Selektor mehrere Teile hat. Eine detailliertere Erklärung, wie die Selektorenspezifität berechnet wird, finden Sie in der [CSS-Spezifitätsdokumentation](/de/docs/Web/CSS/Specificity).

## Was bedeuten die Eigenschaften -moz-\*, -ms-\*, -webkit-\*, -o-\* und -khtml-\*?

Diese Eigenschaften, _präfigierte Eigenschaften_ genannt, sind Erweiterungen des CSS-Standards. Sie wurden einst verwendet, um die Verwendung experimenteller und nicht standardisierter Funktionen in Browsern zu ermöglichen, ohne den regulären Namensraum zu verschmutzen, um zukünftige Inkompatibilitäten zu vermeiden, wenn der Standard erweitert wird.

Die Verwendung solcher Eigenschaften auf Produktionswebseiten wird nicht empfohlen — sie haben bereits ein großes Problem mit Web-Kompatibilität verursacht. Viele Entwickler verwenden zum Beispiel nur die `-webkit-`-präfigierte Version einer Eigenschaft, wenn die nicht-präfigierte Version bereits vollständig in allen Browsern unterstützt wird. Das bedeutet, dass ein Design, das von dieser Eigenschaft abhängt, in nicht-webkit-basierten Browsern nicht funktionieren würde, obwohl es könnte. Dieses Problem wurde so groß, dass andere Browser gezwungen waren, `-webkit-`-präfigierte Aliase zu implementieren, um die Web-Kompatibilität zu verbessern, wie im [Kompatibilitäts-Living-Standard](https://compat.spec.whatwg.org/) beschrieben.

Browser verwenden keine CSS-Präfixe mehr, wenn sie neue experimentelle Funktionen implementieren. Stattdessen testen sie neue Funktionen hinter konfigurierbaren experimentellen Flags oder nur in Nightly-Browserversionen oder Ähnlichem.

Wenn Sie in Ihrer Arbeit Präfixe verwenden müssen, schreiben Sie zuerst die präfixierten Versionen, gefolgt von der nicht-präfixierten Standardversion. Auf diese Weise überschreibt die Standardversion automatisch die präfixierten Versionen, wenn sie unterstützt wird. Zum Beispiel:

```css
-webkit-text-stroke: 4px navy;
text-stroke: 4px navy;
```

> [!NOTE]
> Siehe die [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions) und [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions) für Listen von browser-gestützten CSS-Eigenschaften.

## Wie steht z-index in Beziehung zur Positionierung?

Die `z-index`-Eigenschaft gibt die Stapelreihenfolge von Elementen an.

Ein Element mit einem höheren z-index/Stapelreihenfolge wird immer vor einem Element mit einem niedrigeren z-index/Stapelreihenfolge auf dem Bildschirm dargestellt. Der Z-Index funktioniert nur bei Elementen, die eine spezifizierte Position (`position:absolute`, `position:relative` oder `position:fixed`) haben.

> [!NOTE]
> Für weitere Informationen siehe unseren [Positionsleitfaden](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) sowie insbesondere den Abschnitt [Einführung in den z-Index](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#introducing_z-index).
