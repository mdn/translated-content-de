---
title: CSS FAQ
short-title: FAQ
slug: Learn_web_development/Howto/Solve_CSS_problems/CSS_FAQ
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In diesem Artikel finden Sie einige häufig gestellte Fragen (FAQs) zu CSS sowie Antworten, die Ihnen auf Ihrem Weg zum Webentwickler helfen können.

## Warum wird mein gültiges CSS nicht korrekt gerendert?

Browser verwenden die `doctype`-Deklaration, um zu entscheiden, ob das Dokument in einem Modus angezeigt wird, der eher mit Webstandards oder mit alten Browserfehlern kompatibel ist. Eine korrekte und moderne `doctype`-Deklaration am Anfang Ihres HTMLs erhöht die Kompatibilität mit Browserstandards.

Moderne Browser haben zwei Haupt-Rendering-Modi:

- _Quirks-Modus_: auch als Rückwärtskompatibilitätsmodus bezeichnet, erlaubt es, alte Webseiten so darzustellen, wie es ihre Autoren beabsichtigt haben, indem die nicht standardmäßigen Rendering-Regeln verwendet werden, die von älteren Browsern genutzt wurden. Dokumente mit einer unvollständigen, fehlerhaften oder fehlenden `doctype`-Deklaration oder einer bekannten `doctype`-Deklaration, die vor 2001 üblich war, werden im Quirks-Modus gerendert.
- _Standards-Modus_: Der Browser versucht, die W3C-Standards streng zu befolgen. Neue HTML-Seiten sollen für standardskonforme Browser entwickelt werden, weshalb Seiten mit einer modernen `doctype`-Deklaration im Standards-Modus gerendert werden.

Gecko-basierte Browser haben einen dritten [eingeschränkten Quirks-Modus](https://de.wikipedia.org/wiki/Quirks_Mode#Limited_quirks_mode), der nur wenige kleinere Besonderheiten aufweist.

Die Standard-`doctype`-Deklaration, die den Standards-Modus auslöst, lautet:

```html
<!doctype html>
```

Wann immer möglich, sollten Sie nur das obige Doctype verwenden. Es gibt andere gültige ältere Doctypes, die den Standards- oder Beinahe-Standards-Modus auslösen:

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
- Ein CSS-Stylesheet muss mit einem `text/css` MIME-Typ bereitgestellt werden, um angewendet zu werden. Wenn der Webserver es nicht mit diesem Typ liefert, wird es nicht angewendet.

## Was ist der Unterschied zwischen `id` und `class`?

HTML-Elemente können ein `id`- und/oder ein `class`-Attribut haben. Das `id`-Attribut weist dem Element, zu dem es gehört, einen Namen zu, und es kann nur ein Element mit diesem Namen in einem gültigen Markup geben. Das `class`-Attribut weist dem Element einen Klassennamen zu, und dieser Name kann auf viele Elemente innerhalb der Seite angewendet werden. CSS ermöglicht es, Stile auf bestimmte `id`- und/oder `class`-Namen anzuwenden.

- Verwenden Sie stilspezifische Klassen, wenn Sie die Stilregeln auf viele Blöcke und Elemente innerhalb der Seite anwenden möchten, oder wenn Sie derzeit nur ein Element haben, das mit diesem Stil gestylt werden soll, Sie aber später weitere hinzufügen könnten.
- Verwenden Sie stilspezifische IDs, wenn Sie die angewendeten Stilregeln auf einen bestimmten Block oder ein Element beschränken müssen. Dieser Stil wird nur von dem Element mit dieser bestimmten ID verwendet.

Es wird allgemein empfohlen, so oft wie möglich Klassen zu verwenden und IDs nur dann zu verwenden, wenn es absolut notwendig ist, um bestimmte Verwendungen (wie das Verbinden von Label- und Formularelementen oder für die Stilierung von Elementen, die semantisch einzigartig sein müssen) zu unterstützen:

- Die Verwendung von Klassen macht Ihre Stile erweiterbar — selbst wenn Sie jetzt nur ein Element haben, das mit einer bestimmten Regel gestylt werden soll, könnten Sie später weitere hinzufügen wollen.
- Klassen ermöglichen es, mehrere Elemente zu stylen, wodurch kürzere Stylesheets entstehen, anstatt die gleichen Stilinformationen in mehreren Regeln zu schreiben, die ID-Selektoren verwenden. Kürzere Stylesheets sind leistungsfähiger.
- Klassenselektoren haben eine niedrigere [Spezifität](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity) als ID-Selektoren und sind daher leichter zu überschreiben, wenn nötig.

> [!NOTE]
> Weitere Informationen finden Sie unter [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors).

## Wie stelle ich den Standardwert einer Eigenschaft wieder her?

Ursprünglich bot CSS kein „default“-Schlüsselwort, und der einzige Weg, den Standardwert einer Eigenschaft wiederherzustellen, besteht darin, diese Eigenschaft explizit neu zu deklarieren. Zum Beispiel:

```css
/* Heading default color is black */
h1 {
  color: red;
}
h1 {
  color: black;
}
```

Dies hat sich mit CSS 2 geändert; das Schlüsselwort [initial](/de/docs/Web/CSS/Reference/Values/initial) ist jetzt ein gültiger Wert für eine CSS-Eigenschaft. Es setzt sie auf ihren Standardwert zurück, der in der CSS-Spezifikation der jeweiligen Eigenschaft definiert ist.

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

CSS erlaubt es nicht genau, dass ein Stil in Bezug auf einen anderen definiert wird. Das Zuweisen mehrerer Klassen zu einem einzigen Element kann jedoch denselben Effekt erzielen, und [CSS-Variablen](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) bieten nun eine Möglichkeit, Stilinformationen an einem Ort zu definieren, die an mehreren Orten wiederverwendet werden können.

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

Wenn dieselbe Eigenschaft in beiden Regeln deklariert ist, wird der Konflikt zuerst durch Spezifität und dann durch die Reihenfolge der CSS-Deklarationen gelöst. Die Reihenfolge der Klassen im `class`-Attribut ist nicht relevant.

## Warum funktionieren meine Stilregeln nicht richtig?

Stilregeln, die syntaktisch korrekt sind, können unter bestimmten Umständen nicht angewendet werden. Sie können die [Rules Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) des _CSS-Panels_ des Inspectors verwenden, um Probleme dieser Art zu beheben, aber die häufigsten Instanzen ignorierter Stilregeln sind unten aufgeführt.

### Hierarchie von HTML-Elementen

Wie CSS-Stile auf HTML-Elemente angewendet werden, hängt auch von der Hierarchie der Elemente ab. Es ist wichtig, sich daran zu erinnern, dass eine Regel, die auf einen Nachfahren angewendet wird, den Stil des übergeordneten Elements überschreibt, unabhängig von der Spezifität oder Priorität der CSS-Regeln.

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

Im Fall komplexer HTML-Hierarchien, wenn eine Regel ignoriert zu werden scheint, überprüfen Sie, ob das Element innerhalb eines anderen Elements mit einem anderen Stil liegt.

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

### Verwendung einer Kurzschreibweise

Die Verwendung von Kurzschreibweisen zum Definieren von Stilregeln ist gut, da sie eine sehr kompakte Syntax verwendet. Die Verwendung der Kurzschreibweise mit nur einigen Attributen ist möglich und korrekt, aber es muss daran gedacht werden, dass nicht deklarierte Attribute automatisch auf ihre Standardwerte zurückgesetzt werden. Dies bedeutet, dass eine vorherige Regel für ein einzelnes Attribut implizit überschrieben werden könnte.

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

Im vorherigen Beispiel trat das Problem bei Regeln auf, die zu unterschiedlichen Elementen gehören, aber es könnte auch für dasselbe Element passieren, da die Reihenfolge der Regel **wichtig** ist.

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

In diesem Beispiel wendet der `body *`-Selektor die Regel auf alle Elemente im Körper an, auf jeder Hierarchieebene, einschließlich der `.stockUp`-Klasse. Somit wird `font-weight: bold;`, das auf die `.corpName`-Klasse angewendet wird, durch `font-weight: normal;`, das auf alle Elemente im Körper angewendet wird, überschrieben.

Der Gebrauch des \* Selektors sollte minimiert werden, da es sich um einen langsamen Selektor handelt, besonders wenn er nicht als erstes Element eines Selektors verwendet wird. Seine Verwendung sollte möglichst vermieden werden.

### Spezifität in CSS

Wenn mehrere Regeln auf ein bestimmtes Element angewendet werden, hängt die gewählte Regel von ihrer Stil-[Spezifität](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity) ab. Inline-Stil (in HTML `style`-Attributen) hat die höchste Spezifität und überschreibt alle Selektoren, gefolgt von ID-Selektoren, dann Klassenselektoren und schließlich Elementselektoren. Die Textfarbe des unten stehenden {{htmlelement("div")}} wird daher rot sein.

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

Die Regeln sind komplizierter, wenn der Selektor mehrere Teile hat. Eine detailliertere Erklärung darüber, wie die Selektorspezifität berechnet wird, finden Sie in der [CSS-Spezifitätsdokumentation](/de/docs/Web/CSS/Guides/Cascade/Specificity).

## Was bewirken die -moz-\*, -ms-\*, -webkit-\*, -o-\* und -khtml-\* Eigenschaften?

Diese Eigenschaften, _vorgehängte Eigenschaften_ genannt, sind Erweiterungen des CSS-Standards. Sie wurden einmal verwendet, um die Verwendung von experimentellen und nicht standardisierten Funktionen in Browsern zu ermöglichen, ohne den regulären Namensraum zu verschmutzen, um zukünftige Inkompatibilitäten zu vermeiden, wenn der Standard erweitert wird.

Die Verwendung solcher Eigenschaften auf Produktwebseiten wird nicht empfohlen — sie haben bereits ein riesiges Webkompatibilitätschaos geschaffen. Zum Beispiel verwenden viele Entwickler nur die `-webkit-` vorgehängte Version einer Eigenschaft, wenn die nicht vorgehängte Version in allen Browsern vollständig unterstützt wird. Dies bedeutet, dass ein Design, das auf dieser Eigenschaft basiert, in nicht-webkit-basierten Browsern nicht funktionieren würde, obwohl es könnte. Dies wurde zu einem Problem, das so groß war, dass andere Browser dazu gedrängt wurden, `-webkit-` vorgehängte Aliase zu implementieren, um die Webkompatibilität zu verbessern, wie im [Compatibility Living Standard](https://compat.spec.whatwg.org/) festgelegt.

Browser verwenden keine CSS-Präfixe mehr, wenn sie neue experimentelle Funktionen implementieren. Stattdessen testen sie neue Funktionen hinter konfigurierbaren experimentellen Flags oder nur in Nightly-Browserversionen oder ähnlichem.

Wenn Sie in Ihrer Arbeit Präfixe verwenden müssen, schreiben Sie zuerst die vorgehängten Versionen und dann die nicht vorgehängte Standardversion. Auf diese Weise überschreibt die Standardversion automatisch die vorgehängten Versionen, wenn sie unterstützt wird. Zum Beispiel:

```css
-webkit-border-after-color: navy;
border-block-end-color: navy;
```

> [!NOTE]
> Siehe die [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Mozilla_extensions) und [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Webkit_extensions) für Listen von browser-vorgehängten CSS-Eigenschaften.

## Wie hängt z-index mit der Positionierung zusammen?

Die `z-index`-Eigenschaft gibt die Stapelreihenfolge von Elementen an.

Ein Element mit einem höheren z-index/Stapelreihenfolge wird immer vor einem Element mit einem niedrigeren z-index/Stapelreihenfolge auf dem Bildschirm dargestellt. Z-index funktioniert nur bei Elementen, die eine bestimmte Position (`position:absolute`, `position:relative` oder `position:fixed`) haben.

> [!NOTE]
> Weitere Informationen finden Sie in unserem [Positioning](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)-Lernartikel und insbesondere im Abschnitt [Introducing z-index](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#introducing_z-index).
