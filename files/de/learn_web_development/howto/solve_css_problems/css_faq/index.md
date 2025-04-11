---
title: CSS-FAQ
slug: Learn_web_development/Howto/Solve_CSS_problems/CSS_FAQ
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

In diesem Artikel finden Sie einige häufig gestellte Fragen (FAQs) zu CSS, zusammen mit Antworten, die Ihnen auf Ihrem Weg zum Webentwickler helfen könnten.

## Warum wird mein CSS, das gültig ist, nicht korrekt dargestellt?

Browser verwenden die `doctype`-Deklaration, um zu entscheiden, ob sie das Dokument in einem Modus anzeigen, der stärker mit Webstandards oder mit alten Browser-Problemen kompatibel ist. Eine korrekte und moderne `doctype`-Deklaration am Anfang Ihres HTML-Dokuments verbessert die Standardskompatibilität des Browsers.

Moderne Browser haben zwei Hauptdarstellungsmodi:

- _Quirks-Modus_: auch Rückwärtskompatibilitätsmodus genannt, ermöglicht es älteren Webseiten, so gerendert zu werden, wie es die Autoren beabsichtigten, indem die nicht standardmäßigen Darstellungsregeln älterer Browser befolgt werden. Dokumente mit einer unvollständigen, fehlerhaften oder fehlenden `doctype`-Deklaration oder einer bekannten `doctype`-Deklaration, die vor 2001 häufig verwendet wurde, werden im Quirks-Modus dargestellt.
- _Standards-Modus_: der Browser versucht strikt, die W3C-Standards zu befolgen. Neue HTML-Seiten sollen für standardskonforme Browser entwickelt werden, und daher werden Seiten mit einer modernen `doctype`-Deklaration im Standards-Modus gerendert.

Gecko-basierte Browser haben einen dritten [limited quirks mode](https://en.wikipedia.org/wiki/Quirks_mode#Limited_quirks_mode), der nur wenige kleine Eigenheiten hat.

Die standardmäßige `doctype`-Deklaration, die den Standards-Modus aktiviert, ist:

```html
<!doctype html>
```

Wann immer möglich, sollten Sie einfach die obige Doctype-Deklaration verwenden. Es gibt andere gültige, ältere Doctypes, die den Standards- oder Fast-Standards-Modus auslösen werden:

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
- Um angewendet zu werden, muss ein CSS-Stylesheet mit einem `text/css`-MIME-Typ bereitgestellt werden. Wenn der Webserver es nicht mit diesem Typ bereitstellt, wird es nicht angewendet.

## Was ist der Unterschied zwischen `id` und `class`?

HTML-Elemente können ein `id`- und/oder `class`-Attribut haben. Das `id`-Attribut weist dem Element, auf das es angewendet wird, einen Namen zu, und für gültiges Markup darf es nur ein Element mit diesem Namen geben. Das `class`-Attribut weist dem Element einen Klassennamen zu, und dieser Name kann auf viele Elemente innerhalb der Seite angewendet werden. CSS ermöglicht es Ihnen, Stile auf bestimmte `id`- und/oder `class`-Namen anzuwenden.

- Verwenden Sie einen klassen-spezifischen Stil, wenn Sie die Stilregeln auf viele Blöcke und Elemente auf der Seite anwenden möchten, oder wenn Sie derzeit nur ein Element mit diesem Stil versehen möchten, aber später mehr hinzufügen möchten.
- Verwenden Sie einen id-spezifischen Stil, wenn Sie die angewendeten Stilregeln auf einen bestimmten Block oder ein Element beschränken müssen. Dieser Stil wird nur von dem Element mit dieser bestimmten ID verwendet.

In der Regel wird empfohlen, Klassen so oft wie möglich zu verwenden und IDs nur dann zu verwenden, wenn es absolut notwendig ist (z. B. um Label- und Formularelemente zu verbinden oder um Elemente zu gestalten, die semantisch einzigartig sein müssen):

- Die Verwendung von Klassen macht Ihr Styling erweiterbar — auch wenn Sie jetzt nur ein Element haben, das mit einem bestimmten Regelwerk gestaltet werden muss, könnten Sie später mehr hinzufügen möchten.
- Klassen ermöglichen es Ihnen, mehrere Elemente zu gestalten, wodurch kürzere Stylesheets entstehen können, anstatt die gleiche Stilinformation in mehreren Regeln ausschreiben zu müssen, die ID-Selektoren verwenden. Kürzere Stylesheets sind leistungsfähiger.
- Klassenselektoren haben eine niedrigere [Spezifität](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity) als Id-Selektoren und sind daher einfacher zu überschreiben, falls nötig.

> [!NOTE]
> Siehe [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) für weitere Informationen.

## Wie stelle ich den Standardwert einer Eigenschaft wieder her?

Ursprünglich bot CSS kein "default"-Schlüsselwort an und die einzige Möglichkeit, den Standardwert einer Eigenschaft wiederherzustellen, bestand darin, diese Eigenschaft explizit neu zu deklarieren. Zum Beispiel:

```css
/* Heading default color is black */
h1 {
  color: red;
}
h1 {
  color: black;
}
```

Dies hat sich mit CSS 2 geändert; das Schlüsselwort [initial](/de/docs/Web/CSS/initial) ist jetzt ein gültiger Wert für eine CSS-Eigenschaft. Es setzt die Eigenschaft auf ihren Standardwert zurück, der in der CSS-Spezifikation der jeweiligen Eigenschaft definiert ist.

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

CSS ermöglicht es nicht genau, einen Stil in Bezug auf einen anderen zu definieren. Das Zuweisen mehrerer Klassen zu einem einzelnen Element kann jedoch denselben Effekt erzielen, und [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) bieten jetzt eine Möglichkeit, Stilinformationen an einer Stelle zu definieren, die an mehreren Stellen wiederverwendet werden können.

## Wie weise ich einem Element mehrere Klassen zu?

HTML-Elementen können mehrere Klassen zugewiesen werden, indem die Klassen im `class`-Attribut aufgelistet werden, mit einem Leerzeichen dazwischen.

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

Wenn dieselbe Eigenschaft in beiden Regeln deklariert ist, wird der Konflikt zunächst durch Spezifität und dann gemäß der Reihenfolge der CSS-Deklarationen gelöst. Die Reihenfolge der Klassen im `class`-Attribut ist nicht relevant.

## Warum funktionieren meine Stilregeln nicht richtig?

Stilregeln, die syntaktisch korrekt sind, könnten in bestimmten Situationen nicht angewendet werden. Sie können die [Regelnansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) des _CSS-Panels_ des Inspektors verwenden, um Probleme dieser Art zu debuggen, aber die häufigsten Instanzen ignorierter Stilregeln sind unten aufgelistet.

### HTML-Elemente-Hierarchie

Die Art und Weise, wie CSS-Stile auf HTML-Elemente angewendet werden, hängt auch von der Hierarchie der Elemente ab. Es ist wichtig zu beachten, dass eine Regel, die auf einen Nachfahren angewendet wird, den Stil des Elternelements überschreibt, ungeachtet der Spezifität oder Priorität der CSS-Regeln.

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

In CSS-Stylesheets ist die Reihenfolge **entscheidend**. Wenn Sie eine Regel definieren und dann dieselbe Regel neu definieren, wird die letzte Definition verwendet.

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

Um diese Art von Fehler zu vermeiden, versuchen Sie, Regeln nur einmal für einen bestimmten Selektor zu definieren und alle Regeln, die zu diesem Selektor gehören, zu gruppieren.

### Verwendung einer Kurzschreibweise

Die Verwendung von Kurzschreibweisen zum Definieren von Stilregeln ist gut, weil sie eine sehr kompakte Syntax verwendet. Die Verwendung von Kurzschriften mit nur einigen Attributen ist möglich und korrekt, aber es muss beachtet werden, dass nicht deklarierte Attribute automatisch auf ihre Standardwerte zurückgesetzt werden. Das bedeutet, dass eine frühere Regel für ein einzelnes Attribut implizit überschrieben werden könnte.

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

Im vorherigen Beispiel trat das Problem bei Regeln für verschiedene Elemente auf, es kann aber auch bei demselben Element passieren, weil die Reihenfolge der Regeln **wichtig** ist.

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

In diesem Beispiel wendet der `body *`-Selektor die Regel auf alle Elemente innerhalb des Bodys auf jeder Hierarchieebene an, einschließlich der `.stockUp`-Klasse. So wird `font-weight: bold;`, das auf die `.corpName`-Klasse angewendet wird, von `font-weight: normal;`, das auf alle Elemente des Bodys angewendet wird, überschrieben.

Die Verwendung des \*-Selektors sollte minimiert werden, da es sich um einen langsamen Selektor handelt, besonders wenn er nicht als erstes Element eines Selektors verwendet wird. Seine Verwendung sollte so weit wie möglich vermieden werden.

### Spezifität in CSS

Wenn mehrere Regeln auf ein bestimmtes Element angewendet werden, hängt die gewählte Regel von ihrer Stil-[Spezifität](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity) ab. Inline-Stil (in HTML `style`-Attributen) hat die höchste Spezifität und überschreibt alle Selektoren, gefolgt von ID-Selektoren, dann Klassen-Selektoren und schließlich Element-Selektoren. Die Textfarbe des untenstehenden {{htmlelement("div")}} wird daher rot sein.

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

## Was tun die Eigenschaften -moz-\*, -ms-\*, -webkit-\*, -o-\* und -khtml-\*?

Diese Eigenschaften, _präfixierte Eigenschaften_ genannt, sind Erweiterungen des CSS-Standards. Sie wurden einst verwendet, um die Verwendung experimenteller und nicht standardmäßiger Funktionen in Browsern zu ermöglichen, ohne den regulären Namensraum zu verschmutzen, um zukünftige Inkompatibilitäten zu vermeiden, wenn der Standard erweitert wird.

Die Verwendung solcher Eigenschaften auf Produktionswebseiten wird nicht empfohlen — sie haben bereits ein großes Webkompatibilitätsproblem geschaffen. Zum Beispiel verwenden viele Entwickler nur die `-webkit-`-präfixierte Version einer Eigenschaft, wenn die nicht präfixierte Version von allen Browsern vollständig unterstützt wird. Dies bedeutet, dass ein Design, das von dieser Eigenschaft abhängt, in nicht-webkit-basierten Browsern nicht funktionieren würde, obwohl es das könnte. Dies wurde zu einem so großen Problem, dass andere Browser gezwungen waren, `-webkit-`-präfixierte Aliase zu implementieren, um die Webkompatibilität zu verbessern, wie im [Kompatibilitätslebensstandard](https://compat.spec.whatwg.org/) beschrieben.

Browser verwenden keine CSS-Präfixe mehr, wenn neue experimentelle Funktionen implementiert werden. Stattdessen testen sie neue Funktionen hinter konfigurierbaren experimentellen Flags oder nur in Nightly-Browserversionen oder ähnlichen.

Wenn Sie in Ihrer Arbeit gezwungen sind, Präfixe zu verwenden, schreiben Sie zuerst die präfixierten Versionen, gefolgt von der nicht präfixierten Standardversion. Auf diese Weise überschreibt die Standardversion automatisch die präfixierten Versionen, wenn sie unterstützt wird. Zum Beispiel:

```css
-webkit-text-stroke: 4px navy;
text-stroke: 4px navy;
```

> [!NOTE]
> Siehe die [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions) und [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions) für Listen von Browser-präfixierten CSS-Eigenschaften.

## Wie hängt z-index mit der Positionierung zusammen?

Die `z-index`-Eigenschaft gibt die Stapelreihenfolge von Elementen an.

Ein Element mit einem höheren Z-Index/Stapelreihenfolge wird immer vor einem Element mit einem niedrigeren Z-Index/Stapelreihenfolge auf dem Bildschirm gerendert. Der Z-Index funktioniert nur bei Elementen, die eine bestimmte Position (`position:absolute`, `position:relative` oder `position:fixed`) haben.

> [!NOTE]
> Für weitere Informationen sehen Sie sich unseren [Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning)-Lernartikel an, insbesondere den Abschnitt [Z-Index einführen](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#introducing_z-index).
