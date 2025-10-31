---
title: CSS FAQ
short-title: FAQ
slug: Learn_web_development/Howto/Solve_CSS_problems/CSS_FAQ
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

In diesem Artikel finden Sie einige häufig gestellte Fragen (FAQs) zu CSS, zusammen mit Antworten, die Ihnen auf Ihrem Weg zum Webentwickler helfen können.

## Warum wird mein CSS, das gültig ist, nicht korrekt gerendert?

Browser verwenden die `doctype`-Deklaration, um zu entscheiden, ob das Dokument in einem Modus angezeigt wird, der eher mit Webstandards oder mit alten Browserfehlern kompatibel ist. Durch die Verwendung einer korrekten und modernen `doctype`-Deklaration am Anfang Ihres HTML-Dokuments wird die Einhaltung der Browserstandards verbessert.

Moderne Browser haben zwei Haupt-Render-Modi:

- _Quirks-Modus_: auch Rückwärtskompatibilitätsmodus genannt, ermöglicht es, ältere Webseiten so zu rendern, wie ihre Autoren es beabsichtigt hatten, gemäß den nicht standardmäßigen Renderregeln, die von älteren Browsern verwendet wurden. Dokumente mit einer unvollständigen, falschen oder fehlenden `doctype`-Deklaration oder einer bekannten `doctype`-Deklaration, die vor 2001 verwendet wurde, werden im Quirks-Modus angezeigt.
- _Standards-Modus_: Der Browser versucht, die W3C-Standards strikt einzuhalten. Neue HTML-Seiten sollten für standardkonforme Browser entworfen sein, und daher werden Seiten mit einer modernen `doctype`-Deklaration im Standards-Modus gerendert.

Gecko-basierte Browser haben einen dritten [eingeschränkten Quirks-Modus](https://en.wikipedia.org/wiki/Quirks_mode#Limited_quirks_mode), der nur wenige kleinere Eigenheiten hat.

Die Standard-`doctype`-Deklaration, die den Standards-Modus auslöst, lautet:

```html
<!doctype html>
```

Wann immer möglich, sollten Sie einfach das obige `doctype` verwenden. Es gibt andere gültige ältere Doctypes, die den Standards- oder Fast-Standards-Modus auslösen:

```html
<!doctype html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

```html
<!doctype html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

```html
<!doctype html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

```html
<!doctype html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

## Warum wird mein CSS, das gültig ist, überhaupt nicht gerendert?

Hier sind einige mögliche Ursachen:

- Der Pfad zur CSS-Datei ist falsch.
- Ein CSS-Stylesheet muss mit einem `text/css` MIME-Typ bereitgestellt werden, um angewendet zu werden. Wenn der Webserver es nicht mit diesem Typ liefert, wird es nicht angewendet.

## Was ist der Unterschied zwischen `id` und `class`?

HTML-Elemente können ein `id`- und/oder `class`-Attribut haben. Das `id`-Attribut weist dem Element, auf das es angewendet wird, einen Namen zu und es kann nur ein Element mit diesem Namen für gültiges Markup geben. Das `class`-Attribut weist dem Element einen Klassennamen zu, und dieser Name kann auf vielen Elementen innerhalb der Seite verwendet werden. CSS ermöglicht es Ihnen, Stile auf spezifische `id`- und/oder `class`-Namen anzuwenden.

- Verwenden Sie einen klassen-spezifischen Stil, wenn Sie die Stilregeln auf viele Blöcke und Elemente innerhalb der Seite anwenden möchten, oder wenn Sie derzeit nur ein Element haben, das Sie mit diesem Stil gestalten möchten, und später weitere hinzufügen möchten.
- Verwenden Sie einen id-spezifischen Stil, wenn Sie die angewendeten Stilregeln auf einen bestimmten Block oder ein Element beschränken müssen. Dieser Stil wird nur von dem Element mit dieser bestimmten id verwendet.

Es wird generell empfohlen, Klassen so oft wie möglich zu verwenden und ids nur dann zu verwenden, wenn sie unbedingt erforderlich sind (wie z.B. um Label- und Formularelemente zu verbinden oder für die Gestaltung von Elementen, die semantisch einzigartig sein müssen):

- Die Verwendung von Klassen macht Ihre Gestaltung erweiterbar — selbst wenn Sie jetzt nur ein Element mit einem bestimmten Regelwerk gestalten, könnten Sie später mehr hinzufügen möchten.
- Klassen ermöglichen es Ihnen, mehrere Elemente zu gestalten, was zu kürzeren Stylesheets führen kann, da nicht die gleichen Stilinformationen in mehreren Regeln mit id-Selektoren ausgeschrieben werden müssen. Kürzere Stylesheets sind leistungsfähiger.
- Klassenselektoren haben eine niedrigere [Spezifität](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity) als id-Selektoren und sind daher leichter zu überschreiben, wenn es nötig ist.

> [!NOTE]
> Siehe [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) für weitere Informationen.

## Wie stelle ich den Standardwert einer Eigenschaft wieder her?

Anfänglich bot CSS kein "default"-Schlüsselwort und die einzige Möglichkeit, den Standardwert einer Eigenschaft wiederherzustellen, bestand darin, diese Eigenschaft ausdrücklich neu zu deklarieren. Zum Beispiel:

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

CSS erlaubt es nicht direkt, einen Stil in Bezug auf einen anderen zu definieren. Das Zuweisen mehrerer Klassen zu einem einzigen Element kann jedoch denselben Effekt erzielen, und [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) bieten jetzt eine Möglichkeit, Stilinformationsdaten an einem Ort zu definieren, die an mehreren Stellen wiederverwendet werden können.

## Wie weise ich einem Element mehrere Klassen zu?

HTML-Elemente können durch Auflistung der Klassen im `class`-Attribut, mit einem Leerzeichen zur Trennung, mehreren Klassen zugewiesen werden.

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

Wenn die gleiche Eigenschaft in beiden Regeln deklariert ist, wird der Konflikt zuerst durch Spezifität und dann durch die Reihenfolge der CSS-Deklarationen gelöst. Die Reihenfolge der Klassen im `class`-Attribut ist nicht relevant.

## Warum funktionieren meine Stilregeln nicht richtig?

Stilregeln, die syntaktisch korrekt sind, können in bestimmten Situationen nicht angewendet werden. Sie können die [Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) des _CSS-Pane_ des Inspectors verwenden, um Probleme dieser Art zu beheben, aber die häufigsten Fälle ignorierter Stilregeln sind unten aufgeführt.

### Hierarchie der HTML-Elemente

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

Bei komplexen HTML-Hierarchien, wenn eine Regel ignoriert zu werden scheint, überprüfen Sie, ob sich das Element innerhalb eines anderen Elements mit einem anderen Stil befindet.

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

Um diesen Fehler zu vermeiden, versuchen Sie, Regeln für einen bestimmten Selector nur einmal zu definieren und gruppieren Sie alle Regeln, die zu diesem Selector gehören.

### Verwendung einer Kurzschreibweise

Die Verwendung von Kurzschreibweise für die Definition von Stilregeln ist gut, da es eine sehr kompakte Syntax verwendet. Die Verwendung von Kurzschreibweise mit nur einigen Attributen ist möglich und richtig, aber es muss daran gedacht werden, dass nicht deklarierte Attribute automatisch auf ihre Standardwerte zurückgesetzt werden. Das bedeutet, dass eine vorherige Regel für ein einzelnes Attribut implizit überschrieben werden könnte.

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

Im obigen Beispiel trat das Problem bei Regeln auf, die zu unterschiedlichen Elementen gehören, aber es könnte auch für dasselbe Element passieren, weil die Reihenfolge der Regeln **wichtig** ist.

```css
#stockTicker {
  font-weight: bold;
  font: 12px "Verdana"; /* font-weight is now set to normal */
}
```

### Verwendung des `*`-Selectors

Der `*`-Wildcard-Selector bezieht sich auf jedes Element und muss mit besonderer Sorgfalt verwendet werden.

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

In diesem Beispiel wendet der `body *`-Selector die Regel auf alle Elemente innerhalb des body an, auf jeder Hierarchieebene, einschließlich der `.stockUp`-Klasse. Daher wird `font-weight: bold;`, das auf die `.corpName`-Klasse angewendet wird, durch `font-weight: normal;` überschrieben, das auf alle Elemente im body angewendet wird.

Der Gebrauch des `*`-Selectors sollte minimiert werden, da es ein langsamer Selector ist, insbesondere wenn er nicht als erstes Element eines Selectors verwendet wird. Seine Verwendung sollte so weit wie möglich vermieden werden.

### Spezifität in CSS

Wenn auf ein bestimmtes Element mehrere Regeln angewendet werden, hängt die gewählte Regel von ihrer Stil-[Spezifität](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity) ab. Inline-Stile (in HTML `style`-Attributen) haben die höchste Spezifität und überschreiben alle Selektoren, gefolgt von ID-Selektoren, dann Klassenselektoren und schließlich Elementselektoren. Die Textfarbe des unten stehenden {{htmlelement("div")}} wird daher rot sein.

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

Die Regeln sind komplizierter, wenn der Selector mehrere Teile hat. Eine detailliertere Erklärung, wie die Selektorspezifität berechnet wird, finden Sie in der [CSS-Spezifitätsdokumentation](/de/docs/Web/CSS/CSS_cascade/Specificity).

## Was bewirken die -moz-\*, -ms-\*, -webkit-\*, -o-\* und -khtml-\* Eigenschaften?

Diese Eigenschaften, sogenannte _präfixierte Eigenschaften_, sind Erweiterungen des CSS-Standards. Sie wurden früher verwendet, um die Nutzung experimenteller und nicht standardmäßiger Funktionen in Browsern zu ermöglichen, ohne den regulären Namensraum zu verschmutzen, und zukünftigen Inkompatibilitäten vorzubeugen, die auftreten könnten, wenn der Standard erweitert wird.

Die Verwendung solcher Eigenschaften auf Produktionswebsites wird nicht empfohlen — sie haben bereits ein großes Problem mit der Webkompatibilität geschaffen. Beispielsweise verwenden viele Entwickler nur die `-webkit-`-präfixierte Version einer Eigenschaft, wenn die nicht-präfixierte Version von allen Browsern vollständig unterstützt wird. Dies bedeutet, dass ein Design, das von dieser Eigenschaft abhängt, in nicht-webkit-basierten Browsern nicht funktionieren würde, obwohl es könnte. Dies wurde so sehr zu einem Problem, dass andere Browser gezwungen wurden, `-webkit-`-präfixierte Aliase zu implementieren, um die Webkompatibilität zu verbessern, wie es im [Compatibility Living Standard](https://compat.spec.whatwg.org/) angegeben ist.

Browser verwenden keine CSS-Präfixe mehr, wenn sie neue experimentelle Funktionen implementieren. Stattdessen testen sie neue Funktionen hinter konfigurierbaren experimentellen Flags oder nur in Nightly-Versionen des Browsers oder ähnlichen.

Wenn Sie in Ihrer Arbeit Präfixe verwenden müssen, schreiben Sie zuerst die präfixierten Versionen gefolgt von der nicht-präfixierten Standardversion. Auf diese Weise wird die Standardversion die präfixierten Versionen automatisch überschreiben, wenn sie unterstützt wird. Zum Beispiel:

```css
-webkit-border-after-color: navy;
border-block-end-color: navy;
```

> [!NOTE]
> Siehe die [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Mozilla_extensions) und [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Webkit_extensions) für Listen von browserpräfixierten CSS-Eigenschaften.

## Wie steht z-index in Beziehung zur Positionierung?

Die `z-index`-Eigenschaft gibt die Stapelreihenfolge von Elementen an.

Ein Element mit einem höheren z-index/Stapelreihenfolge wird immer vor einem Element mit einem niedrigeren z-index/Stapelreihenfolge auf dem Bildschirm gerendert. Z-index funktioniert nur bei Elementen, die eine spezifizierte Position (`position:absolute`, `position:relative` oder `position:fixed`) haben.

> [!NOTE]
> Für weitere Informationen, siehe unseren [Positionierungs-Leitfaden](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) und insbesondere den Abschnitt [Einführung in z-index](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#introducing_z-index).
