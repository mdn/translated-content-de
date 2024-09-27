---
title: CSS-FAQ
slug: Learn/CSS/Howto/CSS_FAQ
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{LearnSidebar}}

In diesem Artikel finden Sie einige häufig gestellte Fragen (FAQs) zu CSS sowie Antworten, die Ihnen auf Ihrem Weg zum Webentwickler helfen können.

## Warum wird mein CSS, das gültig ist, nicht korrekt dargestellt?

Browser nutzen die `doctype`-Deklaration, um zu entscheiden, ob das Dokument im Modus, der Webstandards besser unterstützt, oder im Modus mit alten Browser-Bugs angezeigt wird. Eine korrekte und moderne `doctype`-Deklaration am Anfang Ihres HTML-Dokuments verbessert die Konformität mit Browserstandards.

Moderne Browser haben zwei Haupt-Rendermodi:

- _Quirks-Modus_: auch als Rückwärtskompatibilitätsmodus bezeichnet, erlaubt es, ältere Webseiten so darzustellen, wie ihre Autoren es beabsichtigt hatten, indem die nicht-standardmäßigen Rendering-Regeln älterer Browser verwendet werden. Dokumente mit einer unvollständigen, fehlerhaften oder fehlenden `doctype`-Deklaration oder einer bekannten `doctype`-Deklaration, die vor 2001 üblich war, werden im Quirks-Modus dargestellt.
- _Standards-Modus_: Der Browser versucht, die W3C-Standards strikt zu befolgen. Neue HTML-Seiten sollen für standardskonforme Browser gestaltet werden; daher werden Seiten mit einer modernen `doctype`-Deklaration im Standards-Modus dargestellt.

Gecko-basierte Browser haben einen dritten [begrenzten Quirks-Modus](https://de.wikipedia.org/wiki/Quirks_mode#Limited_quirks_mode), der nur wenige kleinere Eigenheiten aufweist.

Die Standard-`doctype`-Deklaration, die den Standards-Modus auslöst, lautet:

```html
<!doctype html>
```

Wann immer es möglich ist, sollten Sie den obigen Doctype verwenden. Es gibt andere gültige ältere Doctypes, die den Standards- oder Beinahe-Standards-Modus auslösen:

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

## Warum wird mein CSS, das gültig ist, überhaupt nicht dargestellt?

Hier sind einige mögliche Ursachen:

- Der Pfad zur CSS-Datei ist falsch.
- Damit ein CSS-Stylesheet angewendet wird, muss es mit einem `text/css` MIME-Typ ausgeliefert werden. Wenn der Webserver es nicht mit diesem Typ ausliefert, wird es nicht angewendet.

## Was ist der Unterschied zwischen `id` und `class`?

HTML-Elemente können ein `id`- und/oder `class`-Attribut haben. Das `id`-Attribut weist dem Element, auf das es angewendet wird, einen Namen zu, und für gültiges Markup darf es nur ein Element mit diesem Namen geben. Das `class`-Attribut weist dem Element einen Klassennamen zu, der auf viele Elemente innerhalb der Seite angewendet werden kann. CSS erlaubt es, Stile auf bestimmte `id`- und/oder `class`-Namen anzuwenden.

- Verwenden Sie eine klassenspezifische Stilregel, wenn Sie die Styling-Regeln auf viele Blöcke und Elemente innerhalb der Seite anwenden möchten oder wenn Sie derzeit nur ein Element haben, das Sie mit diesem Stil versehen möchten, aber später möglicherweise weitere hinzufügen möchten.
- Verwenden Sie eine id-spezifische Stilregel, wenn Sie die angewandten Styling-Regeln auf einen spezifischen Block oder ein Element beschränken müssen. Dieser Stil wird nur von dem Element mit dieser bestimmten id verwendet.

Es wird generell empfohlen, Klassen so viel wie möglich zu verwenden und ids nur dann zu verwenden, wenn es absolut notwendig ist für spezifische Verwendung (wie zum Verbinden von Label- und Formularelementen oder zum Stylen von Elementen, die semantisch einzigartig sein müssen):

- Die Verwendung von Klassen macht Ihr Styling erweiterbar — auch wenn Sie jetzt nur ein Element mit einer bestimmten Regel versehen, möchten Sie vielleicht später mehr hinzufügen.
- Klassen erlauben es, mehrere Elemente zu stylen, was zu kürzeren Stylesheets führen kann, anstatt dasselbe Styling in mehreren Regeln mit id-Selektoren ausschreiben zu müssen. Kürzere Stylesheets sind leistungsfähiger.
- Klassenselektoren haben eine niedrigere [Spezifität](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity) als id-Selektoren und sind daher einfacher zu überschreiben, wenn nötig.

> [!NOTE]
> Weitere Informationen finden Sie unter [Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors).

## Wie stelle ich den Standardwert einer Eigenschaft wieder her?

Ursprünglich bot CSS kein "default"-Schlüsselwort, und die einzige Möglichkeit, den Standardwert einer Eigenschaft wiederherzustellen, bestand darin, diese Eigenschaft explizit erneut zu deklarieren. Zum Beispiel:

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

CSS erlaubt es nicht direkt, einen Stil in Bezug auf einen anderen zu definieren. Das Zuweisen mehrerer Klassen zu einem einzigen Element kann jedoch denselben Effekt erzielen, und [CSS-Variablen](/de/docs/Web/CSS/Using_CSS_custom_properties) bieten jetzt eine Möglichkeit, Stilinformationen an einem Ort zu definieren, die an mehreren Orten wiederverwendet werden können.

## Wie weise ich einem Element mehrere Klassen zu?

HTML-Elemente können mehrere Klassen zugewiesen bekommen, indem die Klassen im `class`-Attribut aufgelistet werden, wobei ein Leerzeichen sie trennt.

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

Wenn dieselbe Eigenschaft in beiden Regeln deklariert ist, wird der Konflikt zuerst durch Spezifität und dann nach der Reihenfolge der CSS-Deklarationen gelöst. Die Reihenfolge der Klassen im `class`-Attribut ist nicht relevant.

## Warum funktionieren meine Stilregeln nicht richtig?

Stilregeln, die syntaktisch korrekt sind, können in bestimmten Situationen nicht angewendet werden. Sie können die [Regelnansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) des _CSS-Paneels_ des Inspektors verwenden, um Probleme dieser Art zu debuggen, aber die häufigsten Fälle ignorierter Stilregeln sind unten aufgeführt.

### HTML-Elemente-Hierarchie

Die Art und Weise, wie CSS-Stile auf HTML-Elemente angewendet werden, hängt auch von der Hierarchie der Elemente ab. Es ist wichtig, sich daran zu erinnern, dass eine Regel, die auf einen Nachkommen angewendet wird, den Stil des übergeordneten Elements überschreibt, unabhängig von der Spezifität oder Priorität der CSS-Regeln.

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

Im Falle komplexer HTML-Hierarchien, wenn eine Regel ignoriert zu werden scheint, überprüfen Sie, ob das Element sich innerhalb eines anderen Elements mit einem anderen Stil befindet.

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

Um diesen Fehler zu vermeiden, versuchen Sie, Regeln nur einmal für einen bestimmten Selektor zu definieren, und gruppieren Sie alle Regeln, die zu diesem Selektor gehören.

### Verwendung einer Sammelattribut-Eigenschaft

Die Verwendung von Sammelattribut-Eigenschaften zur Definition von Stilregeln ist gut, da sie eine sehr kompakte Syntax verwenden. Es ist möglich und korrekt, Sammelattribute mit nur einigen Attributen zu verwenden, aber es muss daran gedacht werden, dass nicht deklarierte Attribute automatisch auf ihre Standardwerte zurückgesetzt werden. Das bedeutet, dass eine vorherige Regel für ein einzelnes Attribut implizit überschrieben werden könnte.

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

Im obigen Beispiel trat das Problem bei Regeln auf, die zu verschiedenen Elementen gehörten, aber es könnte auch für dasselbe Element geschehen, weil die Reihenfolge der Regeln **wichtig** ist.

```css
#stockTicker {
  font-weight: bold;
  font: 12px Verdana; /* font-weight is now set to normal */
}
```

### Verwendung des `*`-Selektors

Der `*`-Wildcard-Selektor bezieht sich auf ein beliebiges Element und muss mit besonderer Sorgfalt verwendet werden.

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

In diesem Beispiel wendet der `body *`-Selektor die Regel auf alle Elemente innerhalb des Bodys an, auf jeder Hierarchieebene, einschließlich der `.stockUp`-Klasse. Daher wird `font-weight: bold;`, das auf die `.corpName`-Klasse angewendet wurde, durch `font-weight: normal;` überschrieben, das auf alle Elemente im Body angewendet wird.

Die Verwendung des \*-Selektors sollte minimiert werden, da er ein langsamer Selektor ist, insbesondere wenn er nicht als erstes Element eines Selektors verwendet wird. Sein Gebrauch sollte so weit wie möglich vermieden werden.

### Spezifität in CSS

Wenn mehrere Regeln auf ein bestimmtes Element angewendet werden, hängt die ausgewählte Regel von ihrer Stil-[Spezifität](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity) ab. Inline-Stil (in HTML-`style`-Attributen) hat die höchste Spezifität und überschreibt alle Selektoren, gefolgt von ID-Selektoren, dann Klassenselektoren und schließlich Elementselektoren. Die Textfarbe des unten stehenden {{htmlelement("div")}} wird deshalb rot sein.

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

Die Regeln sind komplizierter, wenn der Selektor mehrere Teile hat. Eine detailliertere Erklärung darüber, wie die Spezifität von Selektoren berechnet wird, finden Sie in der [CSS-Spezifitätsdokumentation](/de/docs/Web/CSS/Specificity).

## Was bewirken die Eigenschaften -moz-\*, -ms-\*, -webkit-\*, -o-\* und -khtml-\*?

Diese Eigenschaften, die als _präfixierte Eigenschaften_ bezeichnet werden, sind Erweiterungen der CSS-Norm. Sie wurden einst verwendet, um die Nutzung experimenteller und nicht-standardisierter Funktionen in Browsern zu ermöglichen, ohne den regulären Namensraum zu verschmutzen, um zukünftige Inkompatibilitäten zu vermeiden, wenn der Standard erweitert wird.

Die Verwendung solcher Eigenschaften auf Produktionswebsites wird nicht empfohlen — sie haben bereits ein großes Webkompatibilitätsproblem verursacht. Viele Entwickler verwenden zum Beispiel nur die `-webkit-`-präfixierte Version einer Eigenschaft, wenn die nicht-präfixierte Version in allen Browsern vollständig unterstützt wird. Das bedeutet, dass ein Design, das auf dieser Eigenschaft beruht, in nicht-webkit-basierten Browsern nicht funktionieren würde, obwohl es könnte. Dies wurde zu einem so großen Problem, dass andere Browser gezwungen wurden, `-webkit-`-präfixierte Aliase zu implementieren, um die Webkompatibilität zu verbessern, wie im [Compatibility Living Standard](https://compat.spec.whatwg.org/) beschrieben.

Browser verwenden keine CSS-Präfixe mehr, wenn neue experimentelle Funktionen implementiert werden. Stattdessen testen sie neue Funktionen hinter konfigurierbaren experimentellen Flags oder nur in Nightly-Browserversionen oder ähnlichen.

Wenn Sie in Ihrer Arbeit dazu verpflichtet sind, Präfixe zu verwenden, schreiben Sie zuerst die präfixierten Versionen, gefolgt von der standardmäßigen, nicht präfixierten Version. Auf diese Weise wird die Standardversion automatisch die präfixierten Versionen überschreiben, wenn sie unterstützt wird. Zum Beispiel:

```css
-webkit-text-stroke: 4px navy;
text-stroke: 4px navy;
```

> [!NOTE]
> Weitere Informationen zum Umgang mit präfixierten Eigenschaften finden Sie unter [Umgang mit häufigen HTML- und CSS-Problemen — Umgang mit CSS-Präfixen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#handling_css_prefixes) in unserem [Cross-Browser Testing](/de/docs/Learn/Tools_and_testing/Cross_browser_testing) Modul.

> [!NOTE]
> Weitere Informationen zu browser-präfixierten CSS-Eigenschaften finden Sie in den [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions) und [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions).

## Wie steht der z-index in Bezug auf die Positionierung?

Die z-index-Eigenschaft legt die Stapelreihenfolge von Elementen fest.

Ein Element mit einem höheren z-index/Stapelreihenfolge wird immer vor einem Element mit einem niedrigeren z-index/Stapelreihenfolge auf dem Bildschirm gerendert. Der z-index funktioniert nur bei Elementen, die eine definierte Position haben (`position:absolute`, `position:relative` oder `position:fixed`).

> [!NOTE]
> Weitere Informationen finden Sie in unserem Lernartikel über [Positionierung](/de/docs/Learn/CSS/CSS_layout/Positioning), insbesondere im Abschnitt [Einführung in den z-index](/de/docs/Learn/CSS/CSS_layout/Positioning#introducing_z-index).
