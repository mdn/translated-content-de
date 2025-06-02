---
title: CSS FAQ
short-title: FAQ
slug: Learn_web_development/Howto/Solve_CSS_problems/CSS_FAQ
l10n:
  sourceCommit: 0145c6497d2f2206dca1326593fe308f7b771a08
---

In diesem Artikel finden Sie einige häufig gestellte Fragen (FAQs) zu CSS, zusammen mit Antworten, die Ihnen auf Ihrem Weg zum Webentwickler helfen können.

## Warum wird mein CSS, das gültig ist, nicht korrekt gerendert?

Browser verwenden die `doctype`-Deklaration, um zu entscheiden, ob das Dokument in einem Modus angezeigt wird, der mit Webstandards oder mit alten Browser-Fehlern besser kompatibel ist. Eine korrekte und moderne `doctype`-Deklaration zu Beginn Ihres HTML verbessert die Standardkonformität des Browsers.

Moderne Browser haben zwei Haupt-Rendering-Modi:

- _Quirks Mode_: auch Rückwärtskompatibilitätsmodus genannt, erlaubt es, ältere Webseiten so darzustellen, wie es ihre Autoren beabsichtigt haben, und folgt dabei den nicht standardmäßigen Rendering-Regeln, die von älteren Browsern verwendet werden. Dokumente mit einer unvollständigen, inkorrekten oder fehlenden `doctype`-Deklaration oder einer allgemein bekannten `doctype`-Deklaration aus der Zeit vor 2001 werden im Quirks Mode gerendert.
- _Standards Mode_: der Browser versucht strikt, den W3C-Standards zu folgen. Neue HTML-Seiten sollen für standardkonforme Browser entwickelt werden, weshalb Seiten mit einer modernen `doctype`-Deklaration im Standards Mode gerendert werden.

Gecko-basierte Browser haben einen dritten [eingeschränkten Quirks Mode](https://en.wikipedia.org/wiki/Quirks_mode#Limited_quirks_mode), der nur wenige kleinere Besonderheiten aufweist.

Die Standard-`doctype`-Deklaration, die den Standards Mode auslöst, ist:

```html
<!doctype html>
```

Wann immer möglich, sollten Sie einfach das obige Doctype verwenden. Es gibt andere gültige Legacy-Doctypes, die Standards- oder Beinahe-Standardsmodus auslösen:

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

- Sie haben den Pfad zur CSS-Datei falsch angegeben.
- Um angewendet zu werden, muss ein CSS-Stylesheet mit einem `text/css` MIME-Typ bereitgestellt werden. Wenn es der Webserver nicht mit diesem Typ bereitstellt, wird es nicht angewendet.

## Was ist der Unterschied zwischen `id` und `class`?

HTML-Elemente können ein `id`- und/oder `class`-Attribut haben. Das `id`-Attribut weist dem Element, auf das es angewendet wird, einen Namen zu, und für gültiges Markup darf es nur ein Element mit diesem Namen geben. Das `class`-Attribut weist dem Element einen Klassennamen zu, und dieser Name kann auf viele Elemente innerhalb der Seite angewendet werden. CSS ermöglicht es, Stile auf bestimmte `id`- und/oder `class`-Namen anzuwenden.

- Verwenden Sie einen klassenspezifischen Stil, wenn Sie die Styling-Regeln auf viele Blöcke und Elemente innerhalb der Seite anwenden möchten, oder wenn Sie derzeit nur ein Element zum Gestalten haben, aber später möglicherweise weitere hinzufügen möchten.
- Verwenden Sie einen ID-spezifischen Stil, wenn Sie die angewendeten Styling-Regeln auf einen bestimmten Block oder ein spezifisches Element beschränken müssen. Dieser Stil wird nur von dem Element mit dieser bestimmten ID verwendet.

Es wird allgemein empfohlen, soweit möglich Klassen zu verwenden und IDs nur dann zu nutzen, wenn es absolut notwendig ist für spezifische Anwendungen (wie um Etikett- und Formularelemente zu verbinden oder um Elemente zu stylen, die semantisch einzigartig sein müssen):

- Die Verwendung von Klassen macht Ihr Styling erweiterbar — selbst wenn Sie jetzt nur ein Element mit einem bestimmten Regelwerk gestalten müssen, möchten Sie vielleicht später weitere hinzufügen.
- Klassen ermöglichen das Stylen mehrerer Elemente, weshalb sie zu kürzeren Stylesheets führen können, anstatt die gleichen Styling-Informationen in mehreren Regeln mit ID-Selektoren ausschreiben zu müssen. Kürzere Stylesheets sind leistungsfähiger.
- Klassenselektoren haben eine geringere [Spezifität](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity) als ID-Selektoren, daher sind sie leichter zu überschreiben, falls nötig.

> [!NOTE]
> Siehe [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) für weitere Informationen.

## Wie stelle ich den Standardwert einer Eigenschaft wieder her?

Anfangs bot CSS kein "default"-Schlüsselwort und die einzige Möglichkeit, den Standardwert einer Eigenschaft wiederherzustellen, war die explizite Neudeklaration dieser Eigenschaft. Zum Beispiel:

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

CSS erlaubt es nicht genau, einen Stil in Bezug auf einen anderen zu definieren. Das Zuweisen mehrerer Klassen zu einem einzigen Element kann jedoch denselben Effekt erzielen, und [CSS Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) bieten jetzt eine Möglichkeit, Stilinformationen an einem Ort zu definieren, die an mehreren Stellen wiederverwendet werden können.

## Wie weise ich einem Element mehrere Klassen zu?

HTML-Elementen können mehrere Klassen zugewiesen werden, indem die Klassen im `class`-Attribut aufgelistet werden, wobei ein Leerzeichen sie trennt.

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

Wenn die gleiche Eigenschaft in beiden Regeln deklariert ist, wird der Konflikt zuerst durch Spezifität und dann nach der Reihenfolge der CSS-Deklarationen gelöst. Die Reihenfolge der Klassen im `class`-Attribut ist nicht relevant.

## Warum funktionieren meine Stilregeln nicht richtig?

Stilregeln, die syntaktisch korrekt sind, können in bestimmten Situationen möglicherweise nicht angewendet werden. Sie können die [Regelnansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) des _CSS-Paneel_ des Inspektors verwenden, um Probleme dieser Art zu debuggen, aber die häufigsten Fälle ignorierter Stilregeln sind unten aufgelistet.

### HTML-Elemente-Hierarchie

Die Art und Weise, wie CSS-Stile auf HTML-Elemente angewendet werden, hängt auch von deren Hierarchie ab. Es ist wichtig zu beachten, dass eine auf einen Nachfahren angewendete Regel den Stil des übergeordneten Elements überschreibt, unabhängig von der Spezifität oder Priorität der CSS-Regeln.

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

Im Falle komplexer HTML-Hierarchien, wenn eine Regel ignoriert zu werden scheint, überprüfen Sie, ob sich das Element innerhalb eines anderen Elements mit einem anderen Stil befindet.

### Explizit neu definierte Stilregel

In CSS-Stylesheets ist die Reihenfolge **wichtig**. Wenn Sie eine Regel definieren und dann die gleiche Regel erneut definieren, wird die letzte Definition verwendet.

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

Um diesen Fehler zu vermeiden, versuchen Sie, Regeln nur einmal für einen bestimmten Selektor zu definieren und alle Regeln, die zu diesem Selektor gehören, zu gruppieren.

### Verwendung einer Kurzschreibweise

Die Verwendung von Kurzschreibweisen zur Definition von Stilregeln ist gut, weil sie eine sehr kompakte Syntax verwenden. Die Verwendung von Kurzschreibweise mit nur einigen Attributen ist möglich und korrekt, aber es muss daran gedacht werden, dass nicht deklarierte Attribute automatisch auf ihre Standardwerte zurückgesetzt werden. Das bedeutet, dass eine vorherige Regel für ein einzelnes Attribut implizit überschrieben werden könnte.

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

Im vorherigen Beispiel trat das Problem auf Regeln für verschiedene Elemente auf, es könnte aber auch für dasselbe Element passieren, da die Regelreihenfolge **wichtig** ist.

```css
#stockTicker {
  font-weight: bold;
  font: 12px Verdana; /* font-weight is now set to normal */
}
```

### Verwendung des `*`-Selektors

Der `*`-Wildcard-Selektor bezieht sich auf jedes Element und muss mit besonderer Sorgfalt verwendet werden.

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

In diesem Beispiel wendet der `body *`-Selektor die Regel auf alle Elemente innerhalb des `body` an, in jeder Hierarchiestufe, einschließlich der `.stockUp`-Klasse. Daher wird `font-weight: bold;`, das auf die `.corpName`-Klasse angewendet wurde, von `font-weight: normal;` überschrieben, das auf alle Elemente im `body` angewendet wird.

Die Verwendung des \* Selektors sollte auf ein Minimum beschränkt werden, da er ein langsamer Selektor ist, insbesondere wenn er nicht als erstes Element eines Selektors verwendet wird. Seine Verwendung sollte soweit wie möglich vermieden werden.

### Spezifität in CSS

Wenn mehrere Regeln auf ein bestimmtes Element angewendet werden, hängt die ausgewählte Regel von ihrer Stil-[Spezifität](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity) ab. Inline-Stil (in HTML-`style`-Attributen) hat die höchste Spezifität und überschreibt alle Selektoren, gefolgt von ID-Selektoren, dann Klassenselektoren und schließlich Elementselektoren. Die Textfarbe des unten angegebenen {{htmlelement("div")}} wird daher rot sein.

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

Die Regeln sind komplizierter, wenn der Selektor mehrere Teile hat. Eine detailliertere Erklärung, wie die Spezifität von Selektoren berechnet wird, finden Sie in der [CSS-Spezifitätsdokumentation](/de/docs/Web/CSS/CSS_cascade/Specificity).

## Was machen die -moz-\*, -ms-\*, -webkit-\*, -o-\* und -khtml-\* Eigenschaften?

Diese Eigenschaften, sogenannte _geprefixte Eigenschaften_, sind Erweiterungen des CSS-Standards. Sie wurden einmal verwendet, um die Nutzung von experimentellen und nicht standardisierten Funktionen in Browsern zu ermöglichen, ohne den regulären Namensraum zu verschmutzen, um zukünftige Inkompatibilitäten zu vermeiden, wenn der Standard erweitert wird.

Die Verwendung solcher Eigenschaften auf Produktionswebsites wird nicht empfohlen — sie haben bereits ein riesiges Kompatibilitätschaos im Web verursacht. Zum Beispiel verwenden viele Entwickler nur die `-webkit-` prefixierte Version einer Eigenschaft, obwohl die nicht prfixierte Version von allen Browsern vollständig unterstützt wird. Das bedeutet, dass ein Design, das von dieser Eigenschaft abhängt, in nicht-webkit-basierten Browsern nicht funktionieren würde, obwohl es könnte. Dieses Problem wurde so groß, dass andere Browser gezwungen waren, `-webkit-` präfixierte Aliase zu implementieren, um die Webkompatibilität zu verbessern, wie in der [Compatibility Living Standard](https://compat.spec.whatwg.org/) angegeben.

Browser verwenden keine CSS-Präfixe mehr, wenn sie neue experimentelle Funktionen implementieren. Stattdessen testen sie neue Funktionen hinter konfigurierbaren experimentellen Flags oder nur in Nightly-Browser-Versionen oder ähnlichem.

Wenn Sie in Ihrer Arbeit gezwungen sind, Präfixe zu verwenden, schreiben Sie die geprexten Versionen zuerst, gefolgt von der nicht-geprexten Standardversion. Auf diese Weise überschreibt die Standardversion automatisch die geprexten Versionen, wenn sie unterstützt wird. Zum Beispiel:

```css
-webkit-border-after-color: navy;
border-block-end-color: navy;
```

> [!NOTE]
> Siehe die [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions) und [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions) für Listen der browser-geprexten CSS-Eigenschaften.

## Wie verhält sich z-index in Bezug auf das Positionieren?

Die `z-index`-Eigenschaft bestimmt die Stapelreihenfolge von Elementen.

Ein Element mit einem höheren Z-Index/Stapelreihenfolge wird immer vor einem Element mit einem niedrigeren Z-Index/Stapelreihenfolge auf dem Bildschirm gerendert. Z-Index funktioniert nur bei Elementen, die eine spezifische Position (wie `position:absolute`, `position:relative` oder `position:fixed`) haben.

> [!NOTE]
> Für weitere Informationen siehe unseren [Positionieren](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) Lernartikel, insbesondere den Abschnitt [Einführung in z-index](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#introducing_z-index).
