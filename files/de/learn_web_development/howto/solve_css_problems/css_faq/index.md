---
title: CSS FAQ
short-title: FAQ
slug: Learn_web_development/Howto/Solve_CSS_problems/CSS_FAQ
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

In diesem Artikel finden Sie einige häufig gestellte Fragen (FAQs) zu CSS sowie Antworten, die Ihnen auf Ihrem Weg zum Webentwickler helfen können.

## Warum wird mein CSS, das gültig ist, nicht korrekt gerendert?

Browser verwenden die `doctype`-Deklaration, um zu entscheiden, ob das Dokument in einem Modus angezeigt werden soll, der eher mit Webstandards kompatibel ist oder mit alten Browserfehlern. Durch eine korrekte und moderne `doctype`-Deklaration am Anfang Ihres HTML-Dokuments wird die Einhaltung der Browserstandards verbessert.

Moderne Browser haben zwei Haupt-Darstellungsmodi:

- _Quirks Mode_: auch Rückwärtskompatibilitätsmodus genannt, erlaubt es, ältere Webseiten so darzustellen, wie ihre Autoren es beabsichtigten, und folgt den nicht standardisierten Darstellungsregeln, die von älteren Browsern verwendet wurden. Dokumente mit einer unvollständigen, fehlerhaften oder fehlenden `doctype`-Deklaration oder einer bekannten `doctype`-Deklaration aus der Zeit vor 2001 werden im Quirks Mode gerendert.
- _Standards Mode_: der Browser versucht, die W3C-Standards streng zu befolgen. Neue HTML-Seiten sollten für standardkonforme Browser gestaltet sein, und infolgedessen werden Seiten mit einer modernen `doctype`-Deklaration im Standards Mode gerendert.

Gecko-basierte Browser haben einen dritten [limitierten Quirks-Mode](https://en.wikipedia.org/wiki/Quirks_mode#Limited_quirks_mode), der nur wenige kleinere Eigenheiten hat.

Die standardmäßige `doctype`-Deklaration, die den Standards Mode auslöst, ist:

```html
<!doctype html>
```

Wenn möglich, sollten Sie einfach das oben genannte `doctype` verwenden. Es gibt andere gültige ältere `doctypes`, die den Standards- oder Fast-Standards-Modus auslösen:

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

## Warum wird mein CSS, das gültig ist, überhaupt nicht gerendert?

Hier sind einige mögliche Ursachen:

- Sie haben den Pfad zur CSS-Datei falsch angegeben.
- Damit ein CSS-Stylesheet angewendet werden kann, muss es mit einem MIME-Typ `text/css` bereitgestellt werden. Wenn der Webserver es nicht mit diesem Typ bereitstellt, wird es nicht angewendet.

## Was ist der Unterschied zwischen `id` und `class`?

HTML-Elemente können ein `id`- und/oder `class`-Attribut haben. Das `id`-Attribut weist dem Element, auf das es angewendet wird, einen Namen zu, und für gültiges Markup kann es nur ein Element mit diesem Namen geben. Das `class`-Attribut weist dem Element einen Klassennamen zu, und dieser Name kann auf viele Elemente innerhalb der Seite angewendet werden. CSS ermöglicht es Ihnen, Stile auf bestimmte `id`- und/oder `class`-Namen anzuwenden.

- Verwenden Sie einen klassenspezifischen Stil, wenn Sie die Stilregeln auf viele Blöcke und Elemente innerhalb der Seite anwenden möchten, oder wenn Sie derzeit nur ein Element haben, das mit diesem Stil gestaltet werden soll, es aber später mehr hinzufügen möchten.
- Verwenden Sie einen id-spezifischen Stil, wenn Sie die angewandten Stilregeln auf einen bestimmten Block oder ein Element beschränken müssen. Dieser Stil wird nur von dem Element verwendet, das diese bestimmte id hat.

Es wird allgemein empfohlen, Klassen so weit wie möglich zu verwenden und ids nur dann, wenn es absolut notwendig ist, für spezifische Anwendungen (wie zum Verbinden von Beschriftungen und Formularelementen oder zum Stylen von Elementen, die semantisch einzigartig sein müssen):

- Durch die Verwendung von Klassen wird Ihr Stil erweiterbar — selbst wenn Sie jetzt nur ein Element haben, das mit einem bestimmten Regelwerk gestaltet werden soll, könnten Sie später mehr hinzufügen wollen.
- Klassen ermöglichen es, mehrere Elemente zu stylen, was zu kürzeren Stylesheets führen kann, anstatt die gleichen Stilinformationen in mehreren Regeln, die id-Selektoren verwenden, wiederholen zu müssen. Kürzere Stylesheets sind leistungsfähiger.
- Klassenselektoren haben eine geringere [Spezifität](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity) als id-Selektoren und sind daher leichter zu überschreiben, wenn nötig.

> [!NOTE]
> Weitere Informationen finden Sie unter [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors).

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

Dies hat sich mit CSS 2 geändert; das Schlüsselwort [initial](/de/docs/Web/CSS/initial) ist jetzt ein gültiger Wert für eine CSS-Eigenschaft. Es setzt sie auf ihren Standardwert zurück, der in der CSS-Spezifikation der jeweiligen Eigenschaft definiert ist.

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

CSS erlaubt es nicht genau, einen Stil in Bezug auf einen anderen zu definieren. Das Zuweisen mehrerer Klassen zu einem einzigen Element kann jedoch den gleichen Effekt bieten, und [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) bieten jetzt eine Möglichkeit, Stilinformationen an einer Stelle zu definieren, die an mehreren Stellen wiederverwendet werden können.

## Wie weise ich einem Element mehrere Klassen zu?

HTML-Elementen können mehrere Klassen zugewiesen werden, indem die Klassen im `class`-Attribut aufgeführt und durch Leerzeichen getrennt werden.

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

Wenn dieselbe Eigenschaft in beiden Regeln deklariert wird, wird der Konflikt zuerst durch Spezifität und dann gemäß der Reihenfolge der CSS-Deklarationen aufgelöst. Die Reihenfolge der Klassen im `class`-Attribut ist nicht relevant.

## Warum funktionieren meine Stilregeln nicht richtig?

Stilregeln, die syntaktisch korrekt sind, werden möglicherweise in bestimmten Situationen nicht angewendet. Sie können die [Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) des _CSS-Paneels_ des Inspectors verwenden, um Probleme dieser Art zu debuggen, aber die häufigsten Fälle von ignorierten Stilregeln sind unten aufgeführt.

### HTML-Elemente-Hierarchie

Die Art und Weise, wie CSS-Stile auf HTML-Elemente angewendet werden, hängt auch von der Hierarchie der Elemente ab. Es ist wichtig zu bedenken, dass eine Regel, die auf einen Nachkommen angewendet wird, den Stil des übergeordneten Elements überschreibt, unabhängig von der Spezifität oder Priorität der CSS-Regeln.

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

Im Falle komplexer HTML-Hierarchien sollte, wenn eine Regel ignoriert zu werden scheint, überprüft werden, ob das Element innerhalb eines anderen Elements mit einem anderen Stil liegt.

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

Um diese Art von Fehler zu vermeiden, versuchen Sie, Regeln für einen bestimmten Selektor nur einmal zu definieren und alle Regeln, die zu diesem Selektor gehören, zusammenzufassen.

### Verwendung einer Kurzschreibweise

Die Verwendung von Kurzschreibweisen zur Definition von Stilregeln ist gut, da sie eine sehr kompakte Syntax verwenden. Es ist möglich und korrekt, Kurzschreibungen mit nur einigen Attributen zu verwenden, aber es muss beachtet werden, dass nicht deklarierte Attribute automatisch auf ihre Standardwerte zurückgesetzt werden. Dies bedeutet, dass eine vorherige Regel für ein einzelnes Attribut implizit überschrieben werden könnte.

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

Im vorherigen Beispiel trat das Problem bei Regeln auf, die zu verschiedenen Elementen gehörten, aber es könnte auch beim selben Element passieren, da die Regelnreihe **wichtig** ist.

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

In diesem Beispiel wendet der `body *`-Selektor die Regel auf alle Elemente innerhalb des Bodys an, auf jeder Hierarchieebene, einschließlich der `.stockUp`-Klasse. Daher wird `font-weight: bold;`, das auf die `.corpName`-Klasse angewandt wird, von `font-weight: normal;` überschrieben, das auf alle Elemente im Body angewandt wird.

Die Verwendung des \*-Selektors sollte minimiert werden, da es sich um einen langsamen Selektor handelt, insbesondere wenn er nicht als erstes Element eines Selektors verwendet wird. Seine Verwendung sollte so weit wie möglich vermieden werden.

### Spezifität in CSS

Wenn mehrere Regeln auf ein bestimmtes Element angewendet werden, hängt die gewählte Regel von ihrer Stil[Spezifität](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity) ab. Inline-Stile (in HTML `style`-Attributen) haben die höchste Spezifität und überschreiben alle Selektoren, gefolgt von ID-Selektoren, dann Klassenselektoren und schließlich Elementselektoren. Die Textfarbe des unten stehenden {{htmlelement("div")}} wird daher rot sein.

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

Die Regeln sind komplizierter, wenn der Selektor mehrere Teile hat. Eine ausführlichere Erklärung, wie die Spezifität von Selektoren berechnet wird, finden Sie in der [CSS-Spezifitätsdokumentation](/de/docs/Web/CSS/CSS_cascade/Specificity).

## Was bewirken die Eigenschaften -moz-\*, -ms-\*, -webkit-\*, -o-\* und -khtml-\*?

Diese Eigenschaften, genannt _präfixierte Eigenschaften_, sind Erweiterungen des CSS-Standards. Sie wurden einst verwendet, um die Verwendung experimenteller und nicht standardisierter Funktionen in Browsern zu ermöglichen, ohne den regulären Namensraum zu verschmutzen, um zukünftige Inkompatibilitäten bei der Erweiterung des Standards zu verhindern.

Die Verwendung solcher Eigenschaften auf Produktionswebsites wird nicht empfohlen — sie haben bereits ein großes Web-Kompatibilitätsproblem geschaffen. Zum Beispiel nutzen viele Entwickler nur die `-webkit-`-präfixierte Version einer Eigenschaft, wenn die nicht-präfixierte Version in allen Browsern vollständig unterstützt wird. Dies bedeutet, dass ein Design, das auf dieser Eigenschaft basiert, in nicht-webkit-basierten Browsern nicht funktionieren würde, obwohl es könnte. Dies wurde zu einem Problem, das groß genug war, dass andere Browser gezwungen wurden, `-webkit-`-präfixierte Aliase zu implementieren, um die Webkompatibilität zu verbessern, wie im [Kompatibilitäts-Living-Standard](https://compat.spec.whatwg.org/) spezifiziert.

Browser verwenden keine CSS-Präfixe mehr, wenn sie neue experimentelle Funktionen implementieren. Stattdessen testen sie neue Funktionen hinter konfigurierbaren experimentellen Flags oder nur in Nightly-Browserversionen oder ähnlichen.

Wenn Sie gezwungen sind, Präfixe in Ihrer Arbeit zu verwenden, schreiben Sie zuerst die präfixierten Versionen, gefolgt von der nicht-präfixierten Standardversion. Auf diese Weise überschreibt die Standardversion automatisch die präfixierten Versionen, wenn sie unterstützt wird. Zum Beispiel:

```css
-webkit-text-stroke: 4px navy;
text-stroke: 4px navy;
```

> [!NOTE]
> Sehen Sie die [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions) und [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions) für Listen von browser-spezifischen CSS-Eigenschaften.

## Wie hängt der z-index mit der Positionierung zusammen?

Die `z-index`-Eigenschaft gibt die Stapelreihenfolge von Elementen an.

Ein Element mit einem höheren z-index/Stapelreihenfolge wird auf dem Bildschirm immer vor einem Element mit einem niedrigeren z-index/Stapelreihenfolge gerendert. Der Z-Index funktioniert nur bei Elementen, die eine bestimmte Position haben (`position:absolute`, `position:relative` oder `position:fixed`).

> [!NOTE]
> Weitere Informationen finden Sie in unserem Lernartikel zur [Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning), insbesondere im Abschnitt [Einführung in den Z-Index](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#introducing_z-index).
