---
title: CSS-FAQ
short-title: FAQ
slug: Learn_web_development/Howto/Solve_CSS_problems/CSS_FAQ
l10n:
  sourceCommit: 1f6d5b39a5883789ece6b570227648113c7021a1
---

In diesem Artikel finden Sie einige häufig gestellte Fragen (FAQs) zu CSS, zusammen mit Antworten, die Ihnen auf dem Weg zum Webentwickler helfen können.

## Warum wird mein CSS, das gültig ist, nicht korrekt gerendert?

Browser verwenden die `doctype`-Deklaration, um zu entscheiden, ob das Dokument in einem Modus angezeigt wird, der mit Webstandards oder mit alten Browserfehlern kompatibler ist. Die Verwendung einer korrekten und modernen `doctype`-Deklaration zu Beginn Ihres HTML-Dokuments verbessert die Standardkonformität in Browsern.

Moderne Browser haben zwei Haupt-Rendering-Modi:

- _Quirks-Modus_: auch als Rückwärtskompatibilitätsmodus bezeichnet, erlaubt es, dass ältere Webseiten so dargestellt werden, wie ihre Autoren es beabsichtigt haben, basierend auf den nicht standardmäßigen Rendering-Regeln älterer Browser. Dokumente mit einer unvollständigen, fehlerhaften oder fehlenden `doctype`-Deklaration oder einer bekannten `doctype`-Deklaration, die vor 2001 gebräuchlich war, werden im Quirks-Modus gerendert.
- _Standards-Modus_: der Browser versucht, den W3C-Standards strikt zu folgen. Neue HTML-Seiten werden erwartet, für standardkonforme Browser entworfen zu werden, und daher werden Seiten mit einer modernen `doctype`-Deklaration im Standards-Modus gerendert.

Gecko-basierte Browser haben einen dritten [limitierten Quirks-Modus](https://de.wikipedia.org/wiki/Modus_Quirks#Begrenzter_Quirks-Modus), der nur wenige kleinere Besonderheiten enthält.

Die Standard-`doctype`-Deklaration, die den Standards-Modus auslöst, ist:

```html
<!doctype html>
```

Wann immer möglich, sollten Sie einfach den obigen Doctype verwenden. Es gibt andere gültige ältere Doctypes, die den Standards- oder den fast-Standards-Modus auslösen:

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

- Der Pfad zur CSS-Datei ist falsch.
- Ein CSS-Stylesheet muss mit einem MIME-Typ `text/css` bereitgestellt werden. Wenn der Webserver es nicht mit diesem Typ bereitstellt, wird es nicht angewendet.

## Was ist der Unterschied zwischen `id` und `class`?

HTML-Elemente können ein `id`- und/oder `class`-Attribut haben. Das `id`-Attribut weist dem Element, auf das es angewendet wird, einen Namen zu, und für gültiges Markup kann es nur ein Element mit diesem Namen geben. Das `class`-Attribut weist dem Element einen Klassennamen zu, und dieser Name kann auf viele Elemente innerhalb der Seite angewendet werden. CSS ermöglicht es Ihnen, Stile auf bestimmte `id`- und/oder `class`-Namen anzuwenden.

- Verwenden Sie einen klassen-spezifischen Stil, wenn Sie die Stilregeln auf viele Blöcke und Elemente innerhalb der Seite anwenden möchten, oder wenn Sie momentan nur ein Element mit diesem Stil haben, aber später möglicherweise mehr hinzufügen möchten.
- Verwenden Sie einen id-spezifischen Stil, wenn Sie die angewendeten Stilregeln auf einen bestimmten Block oder ein Element beschränken müssen. Dieser Stil wird nur vom Element mit dieser bestimmten id verwendet.

Es wird allgemein empfohlen, so oft wie möglich Klassen zu verwenden und Ids nur zu verwenden, wenn es absolut notwendig ist für spezifische Anwendungen (wie um Label und Formularelemente zu verbinden oder um Elemente zu stylen, die semantisch einzigartig sein müssen):

- Die Verwendung von Klassen macht Ihr Styling erweiterbar — selbst wenn Sie jetzt nur ein Element mit einem bestimmten Regelwerk stylen, könnten Sie später mehr hinzufügen.
- Klassen erlauben es Ihnen, mehrere Elemente zu stylen, daher können sie zu kürzeren Stylesheets führen, anstatt dieselben Stilinformationen in mehreren Regeln zu schreiben, die id-Selektoren verwenden. Kürzere Stylesheets sind performanter.
- Klassenselektoren haben eine geringere [Spezifität](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#Spezifizität) als id-Selektoren und sind daher leichter zu überschreiben, wenn nötig.

> [!NOTE]
> Siehe [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) für weitere Informationen.

## Wie stelle ich den Standardwert einer Eigenschaft wieder her?

Ursprünglich bot CSS kein "default" Schlüsselwort und die einzige Möglichkeit, den Standardwert einer Eigenschaft wiederherzustellen, ist, diese Eigenschaft explizit neu zu deklarieren. Zum Beispiel:

```css
/* Heading default color is black */
h1 {
  color: red;
}
h1 {
  color: black;
}
```

Dies hat sich mit CSS 2 geändert; das Schlüsselwort [initial](/de/docs/Web/CSS/initial) ist jetzt ein gültiger Wert für eine CSS-Eigenschaft. Es setzt diese auf ihren Standardwert zurück, der in der CSS-Spezifikation der betreffenden Eigenschaft definiert ist.

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

CSS erlaubt es nicht genau, einen Stil in Bezug auf einen anderen zu definieren. Das Zuweisen mehrerer Klassen zu einem einzelnen Element kann jedoch denselben Effekt erzielen, und [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) bieten nun eine Möglichkeit, Stilinformationen an einem Ort zu definieren, die an mehreren Orten wiederverwendet werden können.

## Wie weise ich einem Element mehrere Klassen zu?

HTML-Elemente können mehreren Klassen zugewiesen werden, indem die Klassen im `class`-Attribut aufgelistet werden, wobei ein Leerzeichen sie trennt.

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

Wenn die gleiche Eigenschaft in beiden Regeln deklariert wird, wird der Konflikt zuerst durch Spezifität und dann entsprechend der Reihenfolge der CSS-Deklarationen gelöst. Die Reihenfolge der Klassen im `class`-Attribut ist nicht relevant.

## Warum funktionieren meine Stilregeln nicht richtig?

Stilregeln, die syntaktisch korrekt sind, werden möglicherweise unter bestimmten Umständen nicht angewendet. Sie können die [Regelnansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) des _CSS Pane_ des Inspectors verwenden, um Probleme dieser Art zu debuggen, aber die häufigsten Fälle ignorierter Stilregeln sind unten aufgeführt.

### HTML-Element-Hierarchie

Die Art und Weise, wie CSS-Stile auf HTML-Elemente angewendet werden, hängt auch von der Hierarchie der Elemente ab. Es ist wichtig, daran zu denken, dass eine auf einen Nachkommen angewandte Regel den Stil des übergeordneten Elements überschreibt, trotz einer möglichen Spezifität oder Priorität der CSS-Regeln.

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

Im Fall komplexer HTML-Hierarchien sollten Sie, wenn eine Regel ignoriert zu werden scheint, überprüfen, ob sich das Element in einem anderen Element mit einem anderen Stil befindet.

### Explizit neu definierte Stilregel

In CSS-Stylesheets ist die Reihenfolge **wichtig**. Wenn Sie eine Regel definieren und dann dieselbe Regel erneut definieren, wird die letzte Definition verwendet.

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

Um diesen Fehler zu vermeiden, versuchen Sie, Regeln für einen bestimmten Selektor nur einmal zu definieren und gruppieren Sie alle Regeln, die zu diesem Selektor gehören.

### Verwendung einer Kurzschreibeigenschaft

Die Verwendung von Kurzschreibweisen für die Definition von Stilregeln ist gut, da es eine sehr kompakte Syntax verwendet. Die Verwendung von Kurzschreibweisen mit nur einigen Attributen ist möglich und korrekt, aber es muss daran gedacht werden, dass nicht deklarierte Attribute automatisch auf ihre Standardwerte zurückgesetzt werden. Dies bedeutet, dass eine vorherige Regel für ein einzelnes Attribut implizit überschrieben werden könnte.

```css
#stockTicker {
  font-size: 12px;
  font-family: "Verdana";
  font-weight: bold;
}
.stockSymbol {
  font: 14px "Arial";
  color: red;
}
```

```html
<div id="stockTicker">NYS: <span class="stockSymbol">GE</span> +1.0…</div>
```

Im obigen Beispiel trat das Problem bei Regeln auf, die zu verschiedenen Elementen gehören, aber es könnte auch für dasselbe Element passieren, da die Regelreihenfolge **wichtig** ist.

```css
#stockTicker {
  font-weight: bold;
  font: 12px "Verdana"; /* font-weight is now set to normal */
}
```

### Verwendung des `*`-Selektors

Der `*`-Wildcard-Selektor bezieht sich auf jedes Element und muss mit besonderer Vorsicht verwendet werden.

```css
body * {
  font-weight: normal;
}
#stockTicker {
  font: 12px "Verdana";
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

In diesem Beispiel wendet der `body *`-Selektor die Regel auf alle Elemente innerhalb des Körpers an, unabhängig von der Hierarchieebene, einschließlich der `.stockUp`-Klasse. Daher wird `font-weight: bold;`, das auf die `.corpName`-Klasse angewendet wird, durch `font-weight: normal;` überschrieben, das auf alle Elemente im Körper angewendet wird.

Die Verwendung des \*-Selektors sollte minimiert werden, da es sich um einen langsamen Selektor handelt, insbesondere wenn er nicht als erstes Element eines Selektors verwendet wird. Seine Verwendung sollte so weit wie möglich vermieden werden.

### Spezifität in CSS

Wenn mehrere Regeln auf ein bestimmtes Element angewendet werden, hängt die ausgewählte Regel von ihrer Stil-[Spezifität](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#Spezifizität) ab. Inline-Stil (in HTML `style`-Attributen) hat die höchste Spezifität und überschreibt alle Selektoren, gefolgt von ID-Selektoren, dann Klassenselektoren und schließlich Elementselektoren. Die Textfarbe des folgenden {{htmlelement("div")}} wird daher rot sein.

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

Die Regeln sind komplizierter, wenn der Selektor mehrere Teile hat. Eine detailliertere Erklärung, wie die Selektorspezifität berechnet wird, finden Sie in der [CSS-Spezifizitätsdokumentation](/de/docs/Web/CSS/CSS_cascade/Specificity).

## Was bewirken die -moz-\*, -ms-\*, -webkit-\*, -o-\* und -khtml-\* Eigenschaften?

Diese Eigenschaften, sogenannte _präfixierte Eigenschaften_, sind Erweiterungen des CSS-Standards. Sie wurden einst verwendet, um die Nutzung experimenteller und nicht standardmäßiger Funktionen in Browsern zu ermöglichen, ohne den regulären Namensraum zu verschmutzen, um zukünftige Inkompatibilitäten zu vermeiden, wenn der Standard erweitert wird.

Die Verwendung solcher Eigenschaften auf Produktionswebsites wird nicht empfohlen — sie haben bereits ein großes Webkompatibilitätschaos verursacht. Zum Beispiel verwenden viele Entwickler nur die mit `-webkit-` präfixierte Version einer Eigenschaft, wenn die nicht präfixierte Version in allen Browsern vollständig unterstützt wird. Dies bedeutet, dass ein Design, das auf diese Eigenschaft angewiesen ist, in nicht-webkit-basierten Browsern nicht funktionieren würde, obwohl es könnte. Dies wurde zu einem Problem, das so groß war, dass andere Browser gezwungen wurden, `-webkit-`-präfixierte Aliase zu implementieren, um die Webkompatibilität zu verbessern, wie in den [Compatibility Living Standard](https://compat.spec.whatwg.org/) spezifiziert.

Browser verwenden CSS-Prefixe nicht mehr, wenn sie neue experimentelle Funktionen implementieren. Vielmehr testen sie neue Funktionen hinter konfigurierbaren experimentellen Flags oder nur in Nightly-Browserversionen oder ähnlichen.

Wenn Sie in Ihrer Arbeit Präfixe verwenden müssen, schreiben Sie zuerst die präfixierten Versionen und dann die nicht präfixierte Standardversion. Auf diese Weise überschreibt die Standardversion automatisch die präfixierten Versionen, wenn sie unterstützt wird. Zum Beispiel:

```css
-webkit-border-after-color: navy;
border-block-end-color: navy;
```

> [!NOTE]
> Siehe die [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Mozilla_extensions) und [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Webkit_extensions) für Listen browser-präfixierter CSS-Eigenschaften.

## Wie hängt z-index mit dem Positionieren zusammen?

Die `z-index`-Eigenschaft gibt die Stapelreihenfolge von Elementen an.

Ein Element mit einem höheren z-index/Stapelreihenfolge wird immer vor einem Element mit einem niedrigeren z-index/Stapelreihenfolge auf dem Bildschirm gerendert. Z-index funktioniert nur bei Elementen, die eine angegebene Position (`position:absolute`, `position:relative` oder `position:fixed`) haben.

> [!NOTE]
> Für weitere Informationen lesen Sie unseren [Positionieren](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) Lernartikel, insbesondere den Abschnitt [Einführung in z-index](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#introducing_z-index).
