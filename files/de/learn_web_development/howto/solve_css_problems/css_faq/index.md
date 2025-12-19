---
title: CSS FAQ
short-title: FAQ
slug: Learn_web_development/Howto/Solve_CSS_problems/CSS_FAQ
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

In diesem Artikel finden Sie einige häufig gestellte Fragen (FAQs) zu CSS, sowie Antworten, die Ihnen auf Ihrem Weg zum Webentwickler helfen können.

## Warum wird mein CSS, das gültig ist, nicht richtig gerendert?

Browser verwenden die `doctype`-Deklaration, um zu entscheiden, ob das Dokument in einem Modus angezeigt wird, der eher mit Webstandards oder mit alten Browserfehlern kompatibel ist. Eine korrekte und moderne `doctype`-Deklaration zu Beginn Ihres HTML-Dokuments verbessert die Einhaltung der Browserstandards.

Moderne Browser haben zwei Haupt-Rendering-Modi:

- _Quirks-Modus_: auch Rückwärtskompatibilitätsmodus genannt, ermöglicht es, ältere Webseiten so zu rendern, wie es die Autoren beabsichtigt hatten, indem die nicht-standardmäßigen Rendering-Regeln älterer Browser befolgt werden. Dokumente mit einer unvollständigen, fehlerhaften oder fehlenden `doctype`-Deklaration oder einer bekannten `doctype`-Deklaration, die vor 2001 häufig verwendet wurde, werden im Quirks-Modus gerendert.
- _Standards-Modus_: Der Browser versucht, die W3C-Standards strikt zu befolgen. Neue HTML-Seiten sollten für standardkonforme Browser entworfen werden und werden daher mit einer modernen `doctype`-Deklaration im Standards-Modus gerendert.

Gecko-basierte Browser haben einen dritten [Limited Quirks Mode](https://de.wikipedia.org/wiki/Quirks_Mode#Limited_quirks_mode), der nur wenige kleinere Eigenheiten aufweist.

Die Standard-`doctype`-Deklaration, die den Standards-Modus auslöst, lautet:

```html
<!doctype html>
```

Wann immer möglich, sollten Sie einfach den oben genannten Doctype verwenden. Es gibt andere gültige Legacy-Doctypes, die den Standards- oder den Almost-Standards-Modus auslösen:

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
- Ein CSS-Stylesheet muss mit einem MIME-Typ `text/css` bereitgestellt werden. Wenn der Webserver es nicht mit diesem Typ bereitstellt, wird es nicht angewendet.

## Was ist der Unterschied zwischen `id` und `class`?

HTML-Elemente können ein `id`- und/oder `class`-Attribut haben. Das `id`-Attribut weist dem Element, auf das es angewendet wird, einen Namen zu; für gültiges Markup darf es nur ein Element mit diesem Namen geben. Das `class`-Attribut weist dem Element einen Klassennamen zu, und dieser Name kann auf viele Elemente innerhalb der Seite angewendet werden. CSS ermöglicht es Ihnen, Stile auf bestimmte `id`- und/oder `class`-Namen anzuwenden.

- Verwenden Sie einen klassenspezifischen Stil, wenn Sie die Stilregeln auf viele Blöcke und Elemente innerhalb der Seite anwenden möchten, oder wenn Sie derzeit nur ein Element zum Stylen mit diesem Stil haben, aber später mehr hinzufügen könnten.
- Verwenden Sie einen id-spezifischen Stil, wenn Sie die angewandten Stilregeln auf einen bestimmten Block oder ein Element beschränken müssen. Dieser Stil wird nur von dem Element mit der entsprechenden id verwendet.

Es wird im Allgemeinen empfohlen, Klassen so viel wie möglich zu verwenden und ids nur dann zu verwenden, wenn es unbedingt erforderlich ist für spezifische Verwendungen (wie das Verbinden von Label- und Formularelementen oder für das Styling von Elementen, die semantisch einzigartig sein müssen):

- Durch die Verwendung von Klassen wird Ihr Styling erweiterbar — selbst wenn Sie derzeit nur ein Element mit einem bestimmten Regelwerk haben, könnten Sie später mehr hinzufügen.
- Klassen ermöglichen es Ihnen, mehrere Elemente zu stylen, daher können sie zu kürzeren Stylesheets führen, anstatt die gleiche Stilinformationsmehrfachregel mit id-Selektoren ausschreiben zu müssen. Kürzere Stylesheets sind leistungsfähiger.
- Klassenselektoren haben eine niedrigere [Spezifität](/de/docs/Learn/Styling_the_Web/CSS_basics/Cascade_and_inheritance#spezifität) als ID-Selektoren, sodass sie bei Bedarf leichter überschrieben werden können.

> [!NOTE]
> Weitere Informationen finden Sie unter [Selektoren](/de/docs/Learn/Styling_the_Web/CSS_basics/Selectors).

## Wie stelle ich den Standardwert einer Eigenschaft wieder her?

Anfangs bot CSS kein "default"-Schlüsselwort und die einzige Möglichkeit, den Standardwert einer Eigenschaft wiederherzustellen, bestand darin, diese Eigenschaft explizit neu zu deklarieren. Zum Beispiel:

```css
/* Heading default color is black */
h1 {
  color: red;
}
h1 {
  color: black;
}
```

Dies hat sich mit CSS 2 geändert; das Schlüsselwort {{cssxref("initial")}} ist jetzt ein gültiger Wert für eine CSS-Eigenschaft. Es setzt sie auf ihren Standardwert zurück, der in der CSS-Spezifikation der gegebenen Eigenschaft definiert wird.

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

CSS erlaubt es nicht direkt, dass ein Stil in Bezug auf einen anderen definiert wird. Das Zuweisen mehrerer Klassen zu einem einzelnen Element kann jedoch denselben Effekt erzielen, und [CSS-Variablen](/de/docs/Web/CSS/Anleitungen/Umgang_mit_CSS-Variablen) bieten jetzt eine Möglichkeit, Stilinformationen an einem Ort zu definieren, die an mehreren Stellen wiederverwendet werden können.

## Wie weise ich einem Element mehrere Klassen zu?

HTML-Elemente können mehrere Klassen zugewiesen bekommen, indem die Klassen im `class`-Attribut mit einem Leerzeichen dazwischen aufgelistet werden.

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

Wenn die gleiche Eigenschaft in beiden Regeln deklariert ist, wird der Konflikt zuerst durch die Spezifität und dann entsprechend der Reihenfolge der CSS-Deklarationen gelöst. Die Reihenfolge der Klassen im `class`-Attribut ist nicht relevant.

## Warum funktionieren meine Stilregeln nicht richtig?

Stilregeln, die syntaktisch korrekt sind, können in bestimmten Situationen nicht angewendet werden. Sie können die [Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) des _CSS-Fensters_ des Inspectors verwenden, um Probleme dieser Art zu debuggen, aber die häufigsten Fälle von ignorierten Stilregeln sind unten aufgeführt.

### HTML-Elemente-Hierarchie

Der Weg, wie CSS-Stile auf HTML-Elemente angewendet werden, hängt auch von der Hierarchie der Elemente ab. Es ist wichtig zu beachten, dass eine Regel, die auf einen Nachkommen angewendet wird, den Stil des Elternteils überschreibt, ungeachtet jeglicher Spezifität oder Priorität von CSS-Regeln.

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

Bei komplexen HTML-Hierarchien, wenn eine Regel scheinbar ignoriert wird, prüfen Sie, ob das Element sich innerhalb eines anderen Elements mit einem anderen Stil befindet.

### Explizit neu definierte Stilregel

In CSS-Stylesheets ist die Reihenfolge **wichtig**. Wenn Sie eine Regel definieren und dann die gleiche Regel neu definieren, wird die letzte Definition verwendet.

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

### Verwendung einer Kurzschreibweise

Die Verwendung von Kurzschreibweisen für die Definition von Stilregeln ist gut, weil sie eine sehr kompakte Syntax verwenden. Die Verwendung von Kurzschreibweisen mit nur einigen Attributen ist möglich und korrekt, aber es muss daran gedacht werden, dass nicht deklarierte Attribute automatisch auf ihre Standardwerte zurückgesetzt werden. Dies bedeutet, dass eine vorherige Regel für ein einzelnes Attribut implizit überschrieben werden könnte.

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

Im obigen Beispiel trat das Problem bei Regeln auf, die zu verschiedenen Elementen gehörten, aber es könnte auch für das gleiche Element passieren, da die Reihenfolge der Regel **entscheidend** ist.

```css
#stockTicker {
  font-weight: bold;
  font: 12px "Verdana"; /* font-weight is now set to normal */
}
```

### Verwendung des `*`-Selektors

Der `*`-Wildcard-Selektor bezieht sich auf jedes Element und muss mit besonderer Sorgfalt verwendet werden.

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

In diesem Beispiel wendet der `body *`-Selektor die Regel auf alle Elemente innerhalb des Körpers an, in jeder Hierarchie-Ebene, einschließlich der `.stockUp`-Klasse. So wird `font-weight: bold;`, das auf die `.corpName`-Klasse angewendet wurde, von `font-weight: normal;`, das auf alle Elemente im Körper angewendet wird, überschrieben.

Die Verwendung des \*-Selectors sollte minimiert werden, da es sich um einen langsamen Selektor handelt, insbesondere wenn er nicht als das erste Element eines Selektors verwendet wird. Seine Verwendung sollte so weit wie möglich vermieden werden.

### Spezifität in CSS

Wenn mehrere Regeln auf ein bestimmtes Element angewendet werden, hängt die ausgewählte Regel von ihrer Stil-[Spezifität](/de/docs/Learn/Styling_the_Web/CSS_basics/Cascade_and_inheritance#spezifität) ab. Inline-Stil (in HTML `style`-Attributen) hat die höchste Spezifität und wird alle Selektoren überschreiben, gefolgt von ID-Selektoren, dann Klassen-Selektoren und schließlich Elementselektoren. Die Textfarbe des untenstehenden {{htmlelement("div")}} wird daher rot sein.

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

Die Regeln sind komplizierter, wenn der Selektor mehrere Teile hat. Eine detailliertere Erklärung darüber, wie die Spezifität von Selektoren berechnet wird, finden Sie in der [CSS-Spezifitätsdokumentation](/de/docs/Web/CSS/Cascade_and_inheritance#spezifität_erklärt).

## Was bedeuten die -moz-\*, -ms-\*, -webkit-\*, -o-\* und -khtml-\* Eigenschaften?

Diese Eigenschaften, genannt _präfixierte Eigenschaften_, sind Erweiterungen des CSS-Standards. Sie wurden einst verwendet, um die Verwendung experimenteller und nicht-standardisierter Funktionen in Browsern ohne Verschmutzung des regulären Namensraums zu ermöglichen und zukünftige Inkompatibilitäten zu verhindern, wenn der Standard erweitert wird.

Die Verwendung solcher Eigenschaften auf produktiven Websites wird nicht empfohlen — sie haben bereits ein großes Kompatibilitätsproblem im Web verursacht. Zum Beispiel verwenden viele Entwickler nur die `-webkit-`-präfixierte Version einer Eigenschaft, wenn die nicht-präfixierte Version in allen Browsern vollständig unterstützt wird. Dies bedeutet, dass ein Design, das auf diese Eigenschaft angewiesen ist, in nicht-Webkit-basierten Browsern nicht funktionieren würde, obwohl es könnte. Dieses Problem wurde so groß, dass andere Browser dazu gedrängt wurden, `-webkit-`-präfixierte Aliase zu implementieren, um die Web-Kompatibilität zu verbessern, wie in der [Compatibility Living Standard](https://compat.spec.whatwg.org/) beschrieben.

Browser verwenden keine CSS-Präfixe mehr, wenn sie neue experimentelle Funktionen implementieren. Stattdessen testen sie neue Funktionen hinter konfigurierbaren experimentellen Flags oder nur in Nightly-Browser-Versionen oder ähnlichen.

Wenn Sie in Ihrer Arbeit Präfixe verwenden müssen, schreiben Sie zuerst die präfixierten Versionen gefolgt von der nicht-präfixierten Standardversion. Auf diese Weise wird die Standardversion automatisch die präfixierten Versionen überschreiben, wenn sie unterstützt wird. Zum Beispiel:

```css
-webkit-border-after-color: navy;
border-block-end-color: navy;
```

> [!NOTE]
> Siehe die [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Mozilla_extensions) und [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Webkit_extensions) für Listen von browserpräfixierten CSS-Eigenschaften.

## Wie verhält sich z-index in Bezug auf die Positionierung?

Die `z-index`-Eigenschaft spezifiziert die Stapelreihenfolge von Elementen.

Ein Element mit einem höheren Z-Index/Stapelreihenfolge wird immer vor einem Element mit einem niedrigeren Z-Index/Stapelreihenfolge auf dem Bildschirm gerendert. Z-Index funktioniert nur bei Elementen, die eine spezifizierte Position (`position:absolute`, `position:relative` oder `position:fixed`) haben.

> [!NOTE]
> Weitere Informationen finden Sie in unserem [Positionierung](/de/docs/Learn/Styling_the_Web/CSS_Layout/Positioning)-Lernartikel, insbesondere im Abschnitt [Einführung von z-index](/de/docs/Learn/Styling_the_Web/CSS_Layout/Positioning#einführung_von_z-index).
