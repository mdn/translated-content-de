---
title: CSS FAQ
short-title: FAQ
slug: Learn_web_development/Howto/Solve_CSS_problems/CSS_FAQ
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

In diesem Artikel finden Sie einige häufig gestellte Fragen (FAQs) zu CSS sowie Antworten, die Ihnen auf Ihrem Weg zum Webentwickler helfen können.

## Warum wird mein gültiges CSS nicht korrekt gerendert?

Browser verwenden die `doctype`-Deklaration, um zu entscheiden, ob das Dokument in einem Modus angezeigt wird, der mit Webstandards oder mit alten Browserfehlern besser kompatibel ist. Die Verwendung einer korrekten und modernen `doctype`-Deklaration am Anfang Ihres HTML-Dokuments verbessert die Einhaltung der Browserstandards.

Moderne Browser haben zwei Hauptmodi für das Rendering:

- _Quirks-Modus_: auch Rückwärtskompatibilitätsmodus genannt, ermöglicht es, ältere Webseiten so zu rendern, wie ihre Autoren es beabsichtigt haben, gemäß den nicht standardisierten Rendering-Regeln, die von älteren Browsern verwendet wurden. Dokumente mit einer unvollständigen, fehlerhaften oder fehlenden `doctype`-Deklaration oder mit einer bekannten `doctype`-Deklaration, die vor 2001 üblich war, werden im Quirks-Modus gerendert.
- _Standards-Modus_: Der Browser versucht, die W3C-Standards strikt zu befolgen. Neue HTML-Seiten sollten für standardkonforme Browser gestaltet werden, und infolgedessen werden Seiten mit einer modernen `doctype`-Deklaration im Standards-Modus gerendert.

Gecko-basierte Browser haben einen dritten [eingeschränkten Quirks-Modus](https://en.wikipedia.org/wiki/Quirks_mode#Limited_quirks_mode), der nur wenige kleinere Eigenheiten aufweist.

Die Standard-`doctype`-Deklaration, die den Standards-Modus aktiviert, ist:

```html
<!doctype html>
```

Wenn möglich, sollten Sie einfach den obigen Doctype verwenden. Es gibt weitere gültige, ältere Doctypes, die den Standards- oder den Fast-Standards-Modus aktivieren:

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

## Warum wird mein gültiges CSS überhaupt nicht gerendert?

Hier sind einige mögliche Ursachen:

- Sie haben den Pfad zur CSS-Datei falsch angegeben.
- Ein CSS-Stylesheet muss mit einem MIME-Typ `text/css` bereitgestellt werden, um angewendet zu werden. Wenn der Webserver es nicht mit diesem Typ bereitstellt, wird es nicht angewendet.

## Was ist der Unterschied zwischen `id` und `class`?

HTML-Elemente können ein `id`- und/oder `class`-Attribut haben. Das `id`-Attribut weist dem Element, auf das es angewendet wird, einen Namen zu, und es kann im gültigen Markup nur ein Element mit diesem Namen geben. Das `class`-Attribut weist dem Element einen Klassennamen zu, und dieser Name kann auf viele Elemente innerhalb der Seite angewendet werden. CSS ermöglicht es Ihnen, Stile auf bestimmte `id`- und/oder `class`-Namen anzuwenden.

- Verwenden Sie einen klassenspezifischen Stil, wenn Sie die Stilregeln auf viele Blöcke und Elemente innerhalb der Seite anwenden möchten, oder wenn Sie derzeit nur ein Element mit diesem Stil haben, aber später weitere hinzufügen möchten.
- Verwenden Sie einen id-spezifischen Stil, wenn Sie die angewendeten Stilregeln auf einen bestimmten Block oder ein bestimmtes Element beschränken müssen. Dieser Stil wird nur von dem Element mit dieser bestimmten id verwendet.

Es wird allgemein empfohlen, Klassen so weit wie möglich zu verwenden und ids nur dann, wenn sie unbedingt für spezielle Zwecke benötigt werden (wie zum Verbinden von Label- und Formularelementen oder zum Stylen von Elementen, die semantisch einzigartig sein müssen):

- Die Verwendung von Klassen macht Ihr Styling erweiterbar — selbst wenn Sie derzeit nur ein Element mit einem bestimmten Regelsatz stylen, könnten Sie später mehr hinzufügen wollen.
- Klassen ermöglichen es, mehrere Elemente zu stylen, was zu kürzeren Stylesheets führen kann, anstatt die gleiche Styling-Information in mehreren Regeln mit id-Selektoren zu schreiben. Kürzere Stylesheets sind performanter.
- Klassenselektoren haben eine geringere [Spezifität](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity) als id-Selektoren und sind daher leichter zu überschreiben, wenn nötig.

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

Dies hat sich mit CSS 2 geändert; das Schlüsselwort [initial](/de/docs/Web/CSS/Reference/Values/initial) ist jetzt ein gültiger Wert für eine CSS-Eigenschaft. Es setzt diese auf ihren Standardwert zurück, der in der CSS-Spezifikation der jeweiligen Eigenschaft definiert ist.

```css
/* Heading default color is black */
h1 {
  color: red;
}
h1 {
  color: initial;
}
```

## Wie leite ich einen Stil aus einem anderen ab?

CSS erlaubt es nicht direkt, einen Stil im Sinne eines anderen zu definieren. Jedoch kann die Zuweisung mehrerer Klassen zu einem einzelnen Element den gleichen Effekt erzielen, und [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) bieten nun eine Möglichkeit, Stilinformationen an einem Ort zu definieren, die an mehreren Stellen wiederverwendet werden können.

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

Wenn dieselbe Eigenschaft in beiden Regeln deklariert wird, wird der Konflikt zuerst durch Spezifität und dann entsprechend der Reihenfolge der CSS-Deklarationen gelöst. Die Reihenfolge der Klassen im `class`-Attribut ist nicht relevant.

## Warum funktionieren meine Stilregeln nicht richtig?

Stilregeln, die syntaktisch korrekt sind, werden möglicherweise unter bestimmten Umständen nicht angewendet. Sie können die [Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) des _CSS-Bereichs_ des Inspektors verwenden, um Probleme dieser Art zu debuggen, aber die häufigsten Fälle von ignorierten Stilregeln sind unten aufgelistet.

### HTML-Elementhierarchie

Die Art und Weise, wie CSS-Stile auf HTML-Elemente angewendet werden, hängt auch von der Hierarchie der Elemente ab. Es ist wichtig, sich daran zu erinnern, dass eine auf einen Nachkommen angewendete Regel den Stil des Elternteils überschreibt, trotz jeglicher Spezifität oder Priorität der CSS-Regeln.

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

Im Falle komplexer HTML-Hierarchien, wenn eine Regel ignoriert zu werden scheint, überprüfen Sie, ob das Element in einem anderen Element mit einem unterschiedlichen Stil enthalten ist.

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

Um diesen Fehler zu vermeiden, versuchen Sie, Regeln nur einmal für einen bestimmten Selektor zu definieren und gruppieren Sie alle Regeln, die zu diesem Selektor gehören.

### Verwendung einer Kurzschreibweiseigenschaft

Die Verwendung von Kurzschreibweiseigenschaften zur Definition von Stilregeln ist gut, da sie eine sehr kompakte Syntax verwenden. Es ist möglich und korrekt, Kurzschreibweise mit nur einigen Attributen zu verwenden, aber man muss sich daran erinnern, dass nicht deklarierte Attribute automatisch auf ihre Standardwerte zurückgesetzt werden. Das bedeutet, dass eine vorherige Regel für ein einzelnes Attribut implizit überschrieben werden könnte.

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

Im obigen Beispiel trat das Problem bei Regeln auf, die zu verschiedenen Elementen gehörten, aber es könnte auch für dasselbe Element passieren, da die Reihenfolge der Regeln **wichtig** ist.

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

In diesem Beispiel wird die Regel mit dem `body *`-Selektor auf alle Elemente im body angewendet, auf jeder Hierarchieebene, einschließlich der `.stockUp`-Klasse. Daher wird `font-weight: bold;`, das auf die `.corpName`-Klasse angewendet wird, von `font-weight: normal;` überschrieben, das auf alle Elemente im body angewendet wird.

Die Verwendung des \*-Selektors sollte minimiert werden, da er ein langsamer Selektor ist, besonders wenn er nicht als erstes Element eines Selektors verwendet wird. Seine Verwendung sollte so weit wie möglich vermieden werden.

### Spezifität in CSS

Wenn mehrere Regeln auf ein bestimmtes Element angewendet werden, hängt die gewählte Regel von ihrer Stil-[Spezifität](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity) ab. Inline-Stil (in HTML `style`-Attributen) hat die höchste Spezifität und überschreibt alle anderen Selektoren, gefolgt von ID-Selektoren, dann Klassenselektoren und schließlich Elementselektoren. Die Textfarbe des untenstehenden {{htmlelement("div")}} wird daher rot sein.

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

Die Regeln sind komplizierter, wenn der Selektor mehrere Teile hat. Eine detailliertere Erklärung, wie die Spezifität von Selektoren berechnet wird, finden Sie in der [Spezifität-Dokumentation](/de/docs/Web/CSS/CSS_cascade/Specificity).

## Was machen die -moz-\*, -ms-\*, -webkit-\*, -o-\* und -khtml-\* Eigenschaften?

Diese Eigenschaften, _präfixierte Eigenschaften_ genannt, sind Erweiterungen des CSS-Standards. Sie wurden einmal verwendet, um die Nutzung experimenteller und nicht standardgemäßer Features in Browsern zu ermöglichen, ohne den regulären Namensraum zu verschmutzen, um zukünftige Inkompatibilitäten bei der Erweiterung des Standards zu vermeiden.

Die Verwendung solcher Eigenschaften auf Produktionswebsites wird nicht empfohlen — sie haben bereits ein großes Kompatibilitätschaos im Web verursacht. Beispielsweise verwenden viele Entwickler nur die `-webkit-`-präfixierte Version einer Eigenschaft, während die nicht-präfixierte Version in allen Browsern vollständig unterstützt wird. Das bedeutet, dass ein Design, das sich auf diese Eigenschaft stützt, nicht in Nicht-WebKit-basierten Browsern funktionieren würde, obwohl es eigentlich könnte. Dieses Problem wurde so groß, dass andere Browser gezwungen waren, `-webkit-`-präfixierte Aliase zu implementieren, um die Webkompatibilität zu verbessern, wie im [Kompatibilitäts-Living-Standard](https://compat.spec.whatwg.org/) spezifiziert.

Browser verwenden keine CSS-Präfixe mehr, wenn sie neue experimentelle Funktionen implementieren. Stattdessen testen sie neue Funktionen hinter konfigurierbaren experimentellen Flags oder nur in Nightly-Browserversionen oder ähnlichen.

Wenn Sie gezwungen sind, Präfixe in Ihrer Arbeit zu verwenden, schreiben Sie zuerst die präfixierten Versionen, gefolgt von der nicht-präfixierten Standardversion. Auf diese Weise überschreibt die Standardversion automatisch die präfixierten Versionen, wenn sie unterstützt wird. Zum Beispiel:

```css
-webkit-border-after-color: navy;
border-block-end-color: navy;
```

> [!NOTE]
> Siehe die [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Mozilla_extensions) und [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Webkit_extensions) für Listen von browser-präfixierten CSS-Eigenschaften.

## Wie hängt `z-index` mit der Positionierung zusammen?

Die Eigenschaft `z-index` gibt die Stapelreihenfolge von Elementen an.

Ein Element mit einem höheren z-index/Stapelreihenfolge wird immer vor einem Element mit einer niedrigeren z-index/Stapelreihenfolge auf dem Bildschirm gerendert. Z-index funktioniert nur bei Elementen, die eine spezifizierte Position (`position:absolute`, `position:relative` oder `position:fixed`) haben.

> [!NOTE]
> Für weitere Informationen lesen Sie unseren [Leitfaden zur Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning), insbesondere den Abschnitt [Einführung in z-index](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#introducing_z-index).
