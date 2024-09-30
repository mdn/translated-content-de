---
title: CSS FAQ
slug: Learn/CSS/Howto/CSS_FAQ
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{LearnSidebar}}

In diesem Artikel finden Sie einige häufig gestellte Fragen (FAQs) zu CSS sowie Antworten, die Ihnen auf Ihrem Weg zum Webentwickler helfen können.

## Warum wird mein gültiges CSS nicht korrekt gerendert?

Browser verwenden die `doctype`-Deklaration, um zu wählen, ob das Dokument in einem Modus angezeigt werden soll, der besser mit Webstandards oder alten Browserfehlern kompatibel ist. Eine korrekte und moderne `doctype`-Deklaration zu Beginn Ihres HTMLs verbessert die Kompatibilität mit Browserstandards.

Moderne Browser haben zwei Hauptwiedergabemodi:

- _Quirks Mode_: auch Rückwärtskompatibilitätsmodus genannt, ermöglicht es, dass ältere Webseiten so gerendert werden, wie es ihre Autoren beabsichtigt haben, indem die nicht standardgemäßen Wiedergaberegeln älterer Browser angewendet werden. Dokumente mit einer unvollständigen, falschen oder fehlenden `doctype`-Deklaration oder einer bekannten `doctype`-Deklaration, die vor 2001 häufig verwendet wurde, werden im Quirks Mode gerendert.
- _Standards Mode_: Der Browser versucht, die W3C-Standards strikt einzuhalten. Neue HTML-Seiten sollten für standardkonforme Browser gestaltet sein, und daher werden Seiten mit einer modernen `doctype`-Deklaration im Standards Mode gerendert.

Gecko-basierte Browser haben einen dritten [begrenzten Quirks-Modus](https://en.wikipedia.org/wiki/Quirks_mode#Limited_quirks_mode), der nur wenige kleinere Mängel aufweist.

Die Standard-`doctype`-Deklaration, die den Standards Mode auslöst, ist:

```html
<!doctype html>
```

Wenn möglich, sollten Sie einfach die obige `doctype` verwenden. Es gibt andere gültige Legacy-Doctypes, die den Standards oder Fast-Standards-Modus auslösen:

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
- Ein CSS-Stylesheet muss mit einem `text/css` MIME-Typ bereitgestellt werden. Wenn der Webserver es nicht mit diesem Typ bereitstellt, wird es nicht angewendet.

## Was ist der Unterschied zwischen `id` und `class`?

HTML-Elemente können ein `id`- und/oder `class`-Attribut haben. Das `id`-Attribut weist dem Element, auf das es angewendet wird, einen Namen zu, und für gültiges Markup kann es nur ein Element mit diesem Namen geben. Das `class`-Attribut weist dem Element einen Klassennamen zu, und dieser Name kann auf viele Elemente innerhalb der Seite angewendet werden. CSS ermöglicht es Ihnen, Stile anhand von bestimmten `id`- und/oder `class`-Namen anzuwenden.

- Verwenden Sie einen klassenbezogenen Stil, wenn Sie die Stilregeln auf viele Blöcke und Elemente innerhalb der Seite anwenden möchten, oder wenn Sie derzeit nur ein Element haben, das mit diesem Stil gestaltet werden soll, aber möglicherweise später mehr hinzufügen möchten.
- Verwenden Sie einen id-spezifischen Stil, wenn Sie die angewendeten Stilregeln auf einen bestimmten Block oder ein Element beschränken müssen. Dieser Stil wird nur vom Element mit dieser bestimmten id verwendet.

Es wird im Allgemeinen empfohlen, Klassen so weit wie möglich zu verwenden und ids nur dann zu verwenden, wenn es absolut notwendig ist, z.B. um Label- und Formularelemente zu verbinden oder um Elemente zu stylen, die semantisch einzigartig sein müssen:

- Die Verwendung von Klassen macht Ihr Styling erweiterbar — selbst wenn Sie jetzt nur ein Element mit einem bestimmten Regelwerk stylen müssen, könnten Sie später weitere hinzufügen.
- Klassen ermöglichen es, mehrere Elemente zu stylen, was zu kürzeren Stylesheets führen kann, anstatt das gleiche Styling mehrmals mit id-Selektoren schreiben zu müssen. Kürzere Stylesheets sind performanter.
- Klassenselektoren haben eine niedrigere [Spezifität](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity) als id-Selektoren, was sie einfacher zu überschreiben macht, falls nötig.

> [!NOTE]
> Weitere Informationen finden Sie unter [Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors).

## Wie setze ich den Standardwert einer Eigenschaft zurück?

Ursprünglich bot CSS kein "default"-Schlüsselwort, und die einzige Möglichkeit, den Standardwert einer Eigenschaft zurückzusetzen, besteht darin, diese Eigenschaft explizit neu zu deklarieren. Zum Beispiel:

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

CSS erlaubt es nicht direkt, einen Stil in Bezug auf einen anderen zu definieren. Das Zuweisen mehrerer Klassen zu einem einzigen Element kann jedoch denselben Effekt erzielen, und [CSS-Variablen](/de/docs/Web/CSS/Using_CSS_custom_properties) bieten jetzt eine Möglichkeit, Stilinformationen an einem Ort zu definieren, die an mehreren Stellen wiederverwendet werden können.

## Wie weise ich einem Element mehrere Klassen zu?

HTML-Elementen können mehrere Klassen zugewiesen werden, indem die Klassen im `class`-Attribut aufgelistet und durch ein Leerzeichen getrennt werden.

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

Wenn dieselbe Eigenschaft in beiden Regeln deklariert wird, wird der Konflikt zuerst durch Spezifität, dann entsprechend der Reihenfolge der CSS-Deklarationen gelöst. Die Reihenfolge der Klassen im `class`-Attribut ist nicht relevant.

## Warum funktionieren meine Stilregeln nicht richtig?

Stilregeln, die syntaktisch korrekt sind, gelten möglicherweise in bestimmten Situationen nicht. Sie können die [Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) des _CSS-Bereichs_ des Inspektors verwenden, um Probleme dieser Art zu debuggen. Die häufigsten Fälle von ignorierten Stilregeln sind unten aufgeführt.

### Hierarchie von HTML-Elementen

Die Art und Weise, wie CSS-Stile auf HTML-Elemente angewendet werden, hängt auch von der Hierarchie der Elemente ab. Es ist wichtig zu bedenken, dass eine Regel, die auf einen Nachkommen angewendet wird, den Stil des Elternteils überschreibt, ungeachtet jeglicher Spezifität oder Priorität der CSS-Regeln.

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

Die Verwendung von Kurzform-Eigenschaften zur Definition von Stilregeln ist vorteilhaft, da sie eine sehr kompakte Syntax verwenden. Es ist möglich und korrekt, Kurzformen mit nur einigen Attributen zu verwenden, jedoch sollte beachtet werden, dass nicht deklarierte Attribute automatisch auf ihre Standardwerte zurückgesetzt werden. Dies bedeutet, dass eine vorherige Regel für ein einzelnes Attribut implizit überschrieben werden könnte.

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

Im obigen Beispiel trat das Problem bei Regeln auf, die zu unterschiedlichen Elementen gehörten, es könnte jedoch auch für dasselbe Element passieren, da die Reihenfolge der Regeln **wichtig** ist.

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

In diesem Beispiel wendet der `body *`-Selektor die Regel auf alle Elemente innerhalb des Bodys an, auf jeder Hierarchieebene, einschließlich der `.stockUp`-Klasse. Daher wird `font-weight: bold;`, das auf die `.corpName`-Klasse angewendet wird, durch `font-weight: normal;`, das auf alle Elemente im Body angewendet wird, überschrieben.

Die Verwendung des \* Selektors sollte minimiert werden, da es sich um einen langsamen Selektor handelt, insbesondere wenn er nicht als erstes Element eines Selektors verwendet wird. Seine Verwendung sollte so weit wie möglich vermieden werden.

### Spezifität in CSS

Wenn mehrere Regeln auf ein bestimmtes Element angewendet werden, hängt die gewählte Regel von ihrer Stil-[Spezifität](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity) ab. Inline-Stil (in HTML-`style`-Attributen) hat die höchste Spezifität und überschreibt jegliche Selektoren, gefolgt von ID-Selektoren, dann Klassenselektoren und schließlich Elementselektoren. Die Textfarbe des untenstehenden {{htmlelement("div")}} wird daher rot sein.

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

Die Regeln sind komplizierter, wenn der Selektor mehrere Teile hat. Eine detailliertere Erklärung, wie die Spezifität von Selektoren berechnet wird, finden Sie in der [CSS-Spezifität-Dokumentation](/de/docs/Web/CSS/Specificity).

## Was bewirken die -moz-\*, -ms-\*, -webkit-\*, -o-\* und -khtml-\* Eigenschaften?

Diese Eigenschaften, genannt _Prefixed Properties_, sind Erweiterungen des CSS-Standards. Sie wurden früher verwendet, um experimentelle und nicht standardisierte Funktionen in Browsern verwenden zu können, ohne den regulären Namensraum zu verschmutzen, und künftige Inkompatibilitäten zu verhindern, wenn der Standard erweitert wird.

Die Verwendung solcher Eigenschaften auf Produktionsseiten wird nicht empfohlen — sie haben bereits ein großes Problem mit der Webkompatibilität geschaffen. Viele Entwickler verwenden beispielsweise nur die `-webkit-`-präfixierte Version einer Eigenschaft, wenn die nicht-präfixierte Version in allen Browsern vollständig unterstützt wird. Dies bedeutet, dass ein Design, das auf dieser Eigenschaft basiert, nicht in Nicht-Webkit-basierten Browsern funktionieren würde, obwohl es könnte. Dieses Problem wurde so groß, dass andere Browser gezwungen wurden, `-webkit-`-präfixierte Aliase zu implementieren, um die Webkompatibilität zu verbessern, wie im [Compatibility Living Standard](https://compat.spec.whatwg.org/) festgelegt.

Browser verwenden keine CSS-Präfixe mehr beim Implementieren neuer experimenteller Funktionen. Stattdessen testen sie neue Funktionen hinter konfigurierbaren experimentellen Flags oder nur in Nightly-Browser-Versionen oder ähnlichen.

Wenn Sie in Ihrer Arbeit Präfixe verwenden müssen, schreiben Sie zuerst die Präfixversionen, gefolgt von der nicht-präfixierten Standardversion. Auf diese Weise wird die Standardversion automatisch die Präfixversionen überschreiben, wenn sie unterstützt wird. Zum Beispiel:

```css
-webkit-text-stroke: 4px navy;
text-stroke: 4px navy;
```

> [!NOTE]
> Weitere Informationen zum Umgang mit Präfixeigenschaften finden Sie unter [Lösung häufiger HTML- und CSS-Probleme — Umgang mit CSS-Präfixen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#handling_css_prefixes) in unserem Modul [Cross-Browser-Testing](/de/docs/Learn/Tools_and_testing/Cross_browser_testing).

> [!NOTE]
> Siehe die [Mozilla CSS Extensions](/de/docs/Web/CSS/Mozilla_Extensions) und [WebKit CSS Extensions](/de/docs/Web/CSS/WebKit_Extensions) für Listen von browserpräfixierten CSS-Eigenschaften.

## Wie hängt z-index mit dem Positionierungsverhalten zusammen?

Die z-index Eigenschaft gibt die Stapelreihenfolge der Elemente an.

Ein Element mit einem höheren z-index/Stapelreihenfolge wird immer vor einem Element mit einem niedrigeren z-index/Stapelreihenfolge auf dem Bildschirm gerendert. Z-index funktioniert nur bei Elementen, die eine spezifizierte Position haben (`position:absolute`, `position:relative` oder `position:fixed`).

> [!NOTE]
> Weitere Informationen finden Sie in unserem [Positionierungsleitfaden](/de/docs/Learn/CSS/CSS_layout/Positioning), insbesondere im Abschnitt [Einführung in z-index](/de/docs/Learn/CSS/CSS_layout/Positioning#introducing_z-index).
