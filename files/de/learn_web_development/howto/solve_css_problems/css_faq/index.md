---
title: CSS-FAQ
short-title: FAQ
slug: Learn_web_development/Howto/Solve_CSS_problems/CSS_FAQ
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

In diesem Artikel finden Sie einige häufig gestellte Fragen (FAQs) zu CSS sowie Antworten, die Ihnen auf Ihrem Weg zum Webentwickler helfen können.

## Warum wird mein CSS, das gültig ist, nicht korrekt gerendert?

Browser verwenden die `doctype`-Deklaration, um zu wählen, ob das Dokument in einem Modus angezeigt wird, der eher mit Webstandards oder mit alten Browserfehlern kompatibel ist. Eine korrekte und moderne `doctype`-Deklaration am Anfang Ihres HTMLs wird die Einhaltung der Browserstandards verbessern.

Moderne Browser haben zwei Haupt-Rendering-Modi:

- _Quirks Mode_: auch Rückwärtskompatibilitätsmodus genannt, ermöglicht es, alte Webseiten so zu rendern, wie ihre Autoren es beabsichtigt haben, und zwar nach den nicht standardmäßigen Rendering-Regeln, die von älteren Browsern verwendet wurden. Dokumente mit einer unvollständigen, fehlerhaften oder fehlenden `doctype`-Deklaration oder einer bekannten `doctype`-Deklaration, die vor 2001 üblich war, werden im Quirks Mode gerendert.
- _Standards Mode_: der Browser versucht die W3C-Standards strikt zu befolgen. Neue HTML-Seiten sollen für standardkonforme Browser entworfen werden, und infolgedessen werden Seiten mit einer modernen `doctype`-Deklaration im Standards Mode gerendert.

Gecko-basierte Browser haben einen dritten [begrenzten Quirks-Mode](https://en.wikipedia.org/wiki/Quirks_mode#Limited_quirks_mode), der nur wenige kleinere Eigenheiten aufweist.

Die Standard-`doctype`-Deklaration, die den Standards Mode auslöst, ist:

```html
<!doctype html>
```

Wann immer möglich, sollten Sie einfach die oben genannte `doctype`-Deklaration verwenden. Es gibt andere gültige ältere Doctypes, die den Standards- oder den Fast-Standards-Modus auslösen:

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
- Um angewendet zu werden, muss ein CSS-Stylesheet mit einem `text/css` MIME-Typ bereitgestellt werden. Wenn der Webserver es nicht mit diesem Typ liefert, wird es nicht angewendet.

## Was ist der Unterschied zwischen `id` und `class`?

HTML-Elemente können ein `id`- und/oder ein `class`-Attribut haben. Das `id`-Attribut weist dem Element, auf das es angewendet wird, einen Namen zu, und für gültiges Markup kann es nur ein Element mit diesem Namen geben. Das `class`-Attribut weist dem Element einen Klassennamen zu, und dieser Name kann auf vielen Elementen innerhalb der Seite verwendet werden. CSS erlaubt es Ihnen, Stile auf bestimmte `id`- und/oder `class`-Namen anzuwenden.

- Verwenden Sie einen klassenspezifischen Stil, wenn Sie die Stilregeln auf viele Blöcke und Elemente innerhalb der Seite anwenden möchten, oder wenn Sie derzeit nur ein Element haben, das Sie mit diesem Stil gestalten möchten, jedoch später weitere hinzufügen könnten.
- Verwenden Sie einen id-spezifischen Stil, wenn Sie die angewendeten Stilregeln auf einen bestimmten Block oder ein Element beschränken müssen. Dieser Stil wird nur von dem Element mit dieser speziellen ID verwendet.

Es wird allgemein empfohlen, so oft wie möglich Klassen zu verwenden und IDs nur dann, wenn es unbedingt erforderlich ist, für spezifische Anwendungen (wie zur Verbindung von Label- und Formularelementen oder für die Gestaltung von Elementen, die semantisch einzigartig sein müssen):

- Die Verwendung von Klassen macht Ihr Styling erweiterbar — selbst wenn Sie jetzt nur ein Element mit einem bestimmten Regelwerk gestalten, könnten Sie später weitere hinzufügen wollen.
- Klassen ermöglichen es Ihnen, mehrere Elemente zu stylen, was zu kürzeren Stylesheets führen kann, anstatt dieselben Stylinginformationen in mehreren Regeln mit ID-Selektoren ausformulieren zu müssen. Kürzere Stylesheets sind leistungsstärker.
- Klassenselektoren haben eine niedrigere [Spezifität](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity) als ID-Selektoren, daher sind sie leichter zu überschreiben, wenn nötig.

> [!NOTE]
> Siehe [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) für weitere Informationen.

## Wie stelle ich den Standardwert einer Eigenschaft wieder her?

Ursprünglich bot CSS kein "default"-Schlüsselwort und die einzige Möglichkeit, den Standardwert einer Eigenschaft wiederherzustellen, bestand darin, diese Eigenschaft explizit neu zu deklarieren. Zum Beispiel:

```css
/* Heading default color is black */
h1 {
  color: red;
}
h1 {
  color: black;
}
```

Dies hat sich mit CSS 2 geändert. Das Schlüsselwort [initial](/de/docs/Web/CSS/initial) ist jetzt ein gültiger Wert für eine CSS-Eigenschaft. Es setzt sie auf ihren Standardwert zurück, der in der CSS-Spezifikation der gegebenen Eigenschaft definiert ist.

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

CSS erlaubt es nicht direkt, einen Stil in Bezug auf einen anderen zu definieren. Das Zuweisen mehrerer Klassen zu einem einzelnen Element kann jedoch denselben Effekt bieten, und [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) bieten nun eine Möglichkeit, Stilinformationen an einem Ort zu definieren, die an mehreren Stellen wiederverwendet werden können.

## Wie weise ich einem Element mehrere Klassen zu?

HTML-Elementen können mehrere Klassen zugewiesen werden, indem die Klassen im `class`-Attribut aufgelistet und durch Leerzeichen getrennt werden.

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

Wenn dieselbe Eigenschaft in beiden Regeln deklariert ist, wird der Konflikt zuerst durch Spezifität und dann gemäß der Reihenfolge der CSS-Deklarationen aufgelöst. Die Reihenfolge der Klassen im `class`-Attribut ist nicht relevant.

## Warum funktionieren meine Stilregeln nicht richtig?

Stilregeln, die syntaktisch korrekt sind, werden möglicherweise in bestimmten Situationen nicht angewendet. Sie können die [Regelnansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) des _CSS-Fensters_ des Inspektors verwenden, um Probleme dieser Art zu debuggen, aber die häufigsten Fälle von ignorierten Stilregeln sind unten aufgeführt.

### HTML-Elementhierarchie

Die Art und Weise, wie CSS-Stile auf HTML-Elemente angewendet werden, hängt auch von der Hierarchie der Elemente ab. Es ist wichtig zu beachten, dass eine Regel, die auf einen Nachkommen angewendet wird, den Stil des übergeordneten Elements überschreibt, unabhängig von der Spezifität oder Priorität der CSS-Regeln.

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

In CSS-Stylesheets ist die Reihenfolge wichtig. Wenn Sie eine Regel definieren und dann dieselbe Regel neu definieren, wird die letzte Definition verwendet.

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

### Verwendung einer Kurzbezeichnungseigenschaft

Die Verwendung von Kurzbezeichnungseigenschaften zur Definition von Stilregeln ist gut, da sie eine sehr kompakte Syntax verwenden. Die Verwendung von Kurzbezeichnungen mit nur einigen Attributen ist möglich und korrekt, aber es muss daran erinnert werden, dass nicht deklarierte Attribute automatisch auf ihre Standardwerte zurückgesetzt werden. Das bedeutet, dass eine vorherige Regel für ein einzelnes Attribut implizit überschrieben werden könnte.

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

Im obigen Beispiel trat das Problem bei Regeln auf, die zu verschiedenen Elementen gehörten, aber es könnte auch für dasselbe Element passieren, da die Regelreihenfolge wichtig ist.

```css
#stockTicker {
  font-weight: bold;
  font: 12px "Verdana"; /* font-weight is now set to normal */
}
```

### Verwendung des `*` Selektors

Der `*` Wildcard-Selektor bezieht sich auf jedes Element und muss mit besonderer Vorsicht verwendet werden.

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

In diesem Beispiel wendet der `body *`-Selektor die Regel auf alle Elemente innerhalb des Bodys an, in jeder Hierarchieebene, einschließlich der `.stockUp`-Klasse. Daher wird `font-weight: bold;`, das auf die `.corpName`-Klasse angewendet wird, von `font-weight: normal;`, das auf alle Elemente im Body angewendet wird, überschrieben.

Die Verwendung des \* Selektors sollte minimiert werden, da es sich um einen langsamen Selektor handelt, insbesondere wenn er nicht als erstes Element eines Selektors verwendet wird. Seine Verwendung sollte so weit wie möglich vermieden werden.

### Spezifität in CSS

Wenn mehrere Regeln auf ein bestimmtes Element angewendet werden, hängt die gewählte Regel von ihrer Stil-[Spezifität](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity) ab. Inline-Stile (in HTML `style`-Attributen) haben die höchste Spezifität und überschreiben alle Selektoren, gefolgt von ID-Selektoren, dann Klassenselektoren und schließlich Elementselektoren. Die Textfarbe des unten stehenden {{htmlelement("div")}} wird daher rot sein.

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

Die Regeln sind komplizierter, wenn der Selektor mehrere Teile hat. Eine detailliertere Erklärung darüber, wie die Selektorspezifität berechnet wird, finden Sie in der [CSS-Spezifizitätsdokumentation](/de/docs/Web/CSS/CSS_cascade/Specificity).

## Was bewirken die -moz-\*, -ms-\*, -webkit-\*, -o-\* und -khtml-\* Eigenschaften?

Diese Eigenschaften, genannt _präfixierte Eigenschaften_, sind Erweiterungen des CSS-Standards. Sie wurden einst verwendet, um die Verwendung experimenteller und nicht standardmäßiger Funktionen in Browsern zu ermöglichen, ohne den regulären Namensraum zu verschmutzen und zukünftige Inkompatibilitäten zu vermeiden, die entstehen könnten, wenn der Standard erweitert wird.

Die Verwendung solcher Eigenschaften auf Produktionswebsites wird nicht empfohlen, da sie bereits ein großes Problem der Webkompatibilität geschaffen haben. Zum Beispiel verwenden viele Entwickler nur die `-webkit-`-präfixierte Version einer Eigenschaft, wenn die nicht-präfixierte Version vollständig von allen Browsern unterstützt wird. Das bedeutet, dass ein Design, das auf diese Eigenschaft angewiesen ist, in nicht-webkit-basierten Browsern nicht funktionieren würde, obwohl es eigentlich könnte. Dieses Problem wurde so groß, dass andere Browser gezwungen waren, `-webkit-`-präfixierte Aliasse zu implementieren, um die Webkompatibilität zu verbessern, wie in der [Compatibility Living Standard](https://compat.spec.whatwg.org/) festgelegt.

Browser verwenden keine CSS-Präfixe mehr, wenn sie neue experimentelle Funktionen implementieren. Stattdessen testen sie neue Funktionen hinter konfigurierbaren experimentellen Flags oder nur in Nightly-Browser-Versionen oder ähnlichen.

Wenn Sie in Ihrer Arbeit Präfixe verwenden müssen, schreiben Sie die präfixierten Versionen zuerst, gefolgt von der nicht-präfixierten Standardversion. Auf diese Weise wird die Standardversion automatisch die präfixierten Versionen überschreiben, wenn sie unterstützt wird. Zum Beispiel:

```css
-webkit-border-after-color: navy;
border-block-end-color: navy;
```

> [!NOTE]
> Siehe die [Mozilla CSS Extensions](/de/docs/Web/CSS/Mozilla_Extensions) und [WebKit CSS Extensions](/de/docs/Web/CSS/WebKit_Extensions) für Listen browserpräfixierter CSS-Eigenschaften.

## Wie steht der z-index in Bezug zum Positionieren?

Die `z-index`-Eigenschaft gibt die Stapelreihenfolge von Elementen an.

Ein Element mit einem höheren `z-index`/Stapelreihenfolge wird immer vor einem Element mit einem niedrigeren `z-index`/Stapelreihenfolge auf dem Bildschirm gerendert. `Z-index` funktioniert nur bei Elementen, die eine festgelegte Position haben (`position:absolute`, `position:relative` oder `position:fixed`).

> [!NOTE]
> Für weitere Informationen siehe unseren [Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Positioning) Lehrartikel, insbesondere den Abschnitt [Introducing z-index](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#introducing_z-index).
