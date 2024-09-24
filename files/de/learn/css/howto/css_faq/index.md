---
title: CSS-FAQ
slug: Learn/CSS/Howto/CSS_FAQ
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{LearnSidebar}}

In diesem Artikel finden Sie einige häufig gestellte Fragen (FAQs) zu CSS sowie Antworten, die Ihnen auf Ihrem Weg zum Webentwickler helfen können.

## Warum wird mein gültiges CSS nicht korrekt gerendert?

Browser verwenden die `doctype`-Deklaration, um zu entscheiden, ob das Dokument in einem Modus angezeigt wird, der mit Webstandards oder mit alten Browserfehlern kompatibler ist. Eine korrekte und moderne `doctype`-Deklaration zu Beginn Ihres HTML-Dokuments verbessert die Konformität des Browsers mit den Standards.

Moderne Browser haben zwei Hauptdarstellungsmodi:

- _Quirks-Modus_: auch Rückwärtskompatibilitätsmodus genannt, erlaubt die Darstellung von Legacy-Webseiten, wie es die Autoren ursprünglich beabsichtigt hatten, unter Anwendung der nicht standardisierten Darstellungsregeln älterer Browser. Dokumente mit einer unvollständigen, falschen oder fehlenden `doctype`-Deklaration oder einer bekannten `doctype`-Deklaration, die vor 2001 gebräuchlich war, werden im Quirks-Modus gerendert.
- _Standards-Modus_: Der Browser versucht, die W3C-Standards strikt zu befolgen. Neue HTML-Seiten sollten für standardskompatible Browser entworfen werden und daher mit einer modernen `doctype`-Deklaration im Standards-Modus gerendert werden.

Auf Gecko-basierte Browser haben einen dritten [begrenzten Quirks-Modus](https://en.wikipedia.org/wiki/Quirks_mode#Limited_quirks_mode), der nur wenige kleine Eigenheiten besitzt.

Die Standard-`doctype`-Deklaration, die den Standards-Modus auslöst, ist:

```html
<!doctype html>
```

Wann immer möglich, sollten Sie einfach den obigen Doctype verwenden. Es gibt andere gültige Legacy-Doctypes, die den Standards- oder den Beinahe-Standards-Modus auslösen:

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
- Ein CSS-Stylesheet muss mit einem `text/css` MIME-Typ bereitgestellt werden, um angewendet zu werden. Wenn der Webserver es nicht mit diesem Typ bereitstellt, wird es nicht angewendet.

## Was ist der Unterschied zwischen `id` und `class`?

HTML-Elemente können ein `id`- und/oder ein `class`-Attribut haben. Das `id`-Attribut weist dem Element, auf das es angewendet wird, einen Namen zu, und für gültiges Markup kann es nur ein Element mit diesem Namen geben. Das `class`-Attribut weist einem Element einen Klassennamen zu, und dieser Name kann auf viele Elemente innerhalb der Seite angewendet werden. CSS erlaubt es Ihnen, Stile auf bestimmte `id`- und/oder `class`-Namen anzuwenden.

- Verwenden Sie einen klassen-spezifischen Stil, wenn Sie die Stilregeln auf viele Blöcke und Elemente innerhalb der Seite anwenden möchten oder wenn Sie derzeit nur ein Element mit diesem Stil haben, aber möglicherweise später weitere hinzufügen möchten.
- Verwenden Sie einen id-spezifischen Stil, wenn Sie die angewendeten Stilregeln auf einen bestimmten Block oder ein Element beschränken müssen. Dieser Stil wird nur vom Element mit dieser bestimmten id verwendet.

Es wird generell empfohlen, Klassen so oft wie möglich zu verwenden und ids nur in absolut notwendigen spezifischen Anwendungen zu verwenden (z.B. um Label- und Formularelemente zu verbinden oder um Elemente zu stylen, die semantisch einzigartig sein müssen):

- Durch die Verwendung von Klassen wird Ihr Styling erweiterbar – selbst wenn Sie jetzt nur ein Element mit einem bestimmten Regelwerk stylen, möchten Sie möglicherweise später mehr hinzufügen.
- Klassen erlauben das Stylen mehrerer Elemente, wodurch kürzere Stylesheets entstehen können, anstatt die gleiche Stilinformationsregel in mehreren Regeln zu schreiben, die id-Selektoren verwenden. Kürzere Stylesheets sind leistungsfähiger.
- Klassenselektoren haben eine geringere [Spezifität](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity) als id-Selektoren, was es erleichtert, diese bei Bedarf zu überschreiben.

> [!NOTE]
> Siehe [Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors) für weitere Informationen.

## Wie stelle ich den Standardwert einer Eigenschaft wieder her?

Ursprünglich bot CSS kein "default"-Schlüsselwort und die einzige Möglichkeit, den Standardwert einer Eigenschaft wiederherzustellen, bestand darin, diese Eigenschaft explizit erneut zu deklarieren. Zum Beispiel:

```css
/* Die Standardfarbe der Überschrift ist schwarz */
h1 {
  color: red;
}
h1 {
  color: black;
}
```

Dies hat sich mit CSS 2 geändert; das Schlüsselwort [initial](/de/docs/Web/CSS/initial) ist jetzt ein gültiger Wert für eine CSS-Eigenschaft. Es setzt sie auf ihren Standardwert zurück, der in der CSS-Spezifikation der jeweiligen Eigenschaft definiert ist.

```css
/* Die Standardfarbe der Überschrift ist schwarz */
h1 {
  color: red;
}
h1 {
  color: initial;
}
```

## Wie leite ich einen Stil von einem anderen ab?

CSS erlaubt es nicht direkt, einen Stil in Bezug auf einen anderen zu definieren. Das Zuweisen mehrerer Klassen zu einem einzigen Element kann jedoch denselben Effekt erzielen, und [CSS-Variablen](/de/docs/Web/CSS/Using_CSS_custom_properties) bieten jetzt eine Möglichkeit, Stilinformationsbereiche an einem Ort zu definieren, die an mehreren Stellen wiederverwendet werden können.

## Wie weise ich einem Element mehrere Klassen zu?

HTML-Elementen können mehrere Klassen zugewiesen werden, indem die Klassen im `class`-Attribut aufgeführt und durch ein Leerzeichen getrennt werden.

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

<div class="news today">Inhalt der heutigen Nachrichten hier.</div>
```

Wenn die gleiche Eigenschaft in beiden Regeln deklariert ist, wird der Konflikt zuerst durch Spezifität und dann gemäß der Reihenfolge der CSS-Deklarationen gelöst. Die Reihenfolge der Klassen im `class`-Attribut ist nicht relevant.

## Warum funktionieren meine Stilregeln nicht richtig?

Stilregeln, die syntaktisch korrekt sind, funktionieren unter bestimmten Umständen möglicherweise nicht. Sie können die [Regelansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) im _CSS-Pane_ des Inspektors verwenden, um Probleme dieser Art zu debuggen. Die häufigsten Fälle ignorierter Stilregeln sind jedoch unten aufgeführt.

### HTML-Elemente-Hierarchie

Die Art und Weise, wie CSS-Stile auf HTML-Elemente angewendet werden, hängt auch von der Hierarchie der Elemente ab. Es ist wichtig zu beachten, dass eine Regel, die auf einen Nachkommen angewendet wird, den Stil des übergeordneten Elements überschreibt, ungeachtet der Spezifität oder Priorität der CSS-Regeln.

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
<!-- Nachrichtentext ist schwarz, aber der Firmenname ist rot und fett -->
<div class="news">
  (Reuters) <span class="corpName">General Electric</span> (GE.NYS) gab am Donnerstag bekannt…
</div>
```

Im Fall komplexer HTML-Hierarchien überprüfen Sie, ob das Element in einem anderen Element mit einem abweichenden Stil enthalten ist, wenn eine Regel scheinbar ignoriert wird.

### Explizit erneut definierte Stilregel

In CSS-Stylesheets ist die Reihenfolge **wichtig**. Wenn Sie eine Regel definieren und dann dieselbe Regel erneut definieren, wird die letzte Definition verwendet.

```css
#stockTicker {
  font-weight: bold;
}
.stockSymbol {
  color: red;
}
/*  andere Regeln             */
/*  andere Regeln             */
/*  andere Regeln             */
.stockSymbol {
  font-weight: normal;
}
```

```html
<!-- der größte Teil des Textes ist fett, außer "GE", das rot und nicht fett ist -->
<div id="stockTicker">NYS: <span class="stockSymbol">GE</span> +1.0…</div>
```

Um solche Fehler zu vermeiden, versuchen Sie, Regeln für einen bestimmten Selektor nur einmal zu definieren und alle Regeln, die zu diesem Selektor gehören, zu gruppieren.

### Verwendung einer Kurzschreibweise

Die Verwendung von Kurzschreibweisen zur Definition von Stilregeln ist gut, da es eine sehr kompakte Syntax verwendet. Die Verwendung einer Kurzschreibweise mit nur einigen Attributen ist möglich und korrekt, es muss jedoch beachtet werden, dass nicht deklarierte Attribute automatisch auf ihre Standardwerte zurückgesetzt werden. Dies bedeutet, dass eine vorherige Regel für ein einzelnes Attribut implizit überschrieben werden könnte.

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

Im vorherigen Beispiel trat das Problem bei Regeln auf, die zu verschiedenen Elementen gehörten, aber es könnte auch für dasselbe Element passieren, da die Regelreihenfolge **wichtig** ist.

```css
#stockTicker {
  font-weight: bold;
  font: 12px Verdana; /* font-weight ist jetzt auf normal gesetzt */
}
```

### Verwendung des `*`-Selektors

Der `*`-Wildcard-Selektor bezieht sich auf jedes Element und sollte mit besonderer Vorsicht verwendet werden.

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

In diesem Beispiel wird die Regel durch den `body *`-Selektor auf alle Elemente im Körper angewendet, auf jeder Hierarchieebene, einschließlich der `.stockUp`-Klasse. Daher wird `font-weight: bold;`, das auf die `.corpName`-Klasse angewendet wird, durch `font-weight: normal;`, das auf alle Elemente im Körper angewendet wird, überschrieben.

Die Verwendung des \*-Selektors sollte minimiert werden, da es sich um einen langsamen Selektor handelt, insbesondere wenn er nicht als erstes Element eines Selektors verwendet wird. Seine Verwendung sollte so weit wie möglich vermieden werden.

### Spezifität in CSS

Wenn mehrere Regeln auf ein bestimmtes Element angewendet werden, hängt die gewählte Regel von ihrer Stil-[Spezifität](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity) ab. Inline-Stil (in HTML-`style`-Attributen) hat die höchste Spezifität und überschreibt alle Selektoren, gefolgt von ID-Selektoren, dann Klassenselektoren und schließlich Elementselektoren. Die Textfarbe des folgenden {{htmlelement("div")}} wird daher rot sein.

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
<div id="orange" class="green" style="color: red;">Das ist rot</div>
```

Die Regeln sind komplizierter, wenn der Selektor mehrere Teile hat. Eine detailliertere Erklärung, wie die Selektorspezifität berechnet wird, finden Sie in der [CSS-Spezifitätsdokumentation](/de/docs/Web/CSS/Specificity).

## Was bewirken die -moz-\*, -ms-\*, -webkit-\*, -o-\* und -khtml-\* Eigenschaften?

Diese Eigenschaften, genannt _prÄfixierte Eigenschaften_, sind Erweiterungen des CSS-Standards. Sie wurden früher verwendet, um die Verwendung experimenteller und nicht standardisierter Funktionen in Browsern zu ermöglichen, ohne den regulären Namensraum zu verschmutzen, um zukünftige Inkompatibilitäten zu vermeiden, wenn der Standard erweitert wird.

Die Verwendung solcher Eigenschaften auf Produktionswebsites wird nicht empfohlen – sie haben bereits ein erhebliches Kompatibilitätsproblem im Web geschaffen. Beispielsweise verwenden viele Entwickler nur die `-webkit-`-präfixierte Version einer Eigenschaft, wenn die nicht präfixierte Version bereits in allen Browsern vollständig unterstützt wird. Dies bedeutet, dass ein Design, das sich darauf verlässt, in nicht-webkit-basierten Browsern nicht funktionieren würde, obwohl es das könnte. Dies wurde zu einem so großen Problem, dass andere Browser dazu gedrängt wurden, `-webkit-`-präfixierte Aliase zu implementieren, um die Web-Kompatibilität zu verbessern, wie in der [Compatibility Living Standard](https://compat.spec.whatwg.org/) festgelegt.

Browser verwenden keine CSS-Präfixe mehr, wenn sie neue experimentelle Funktionen implementieren. Stattdessen testen sie neue Funktionen hinter konfigurierbaren experimentellen Flags oder nur in Nightly-Browserversionen oder ähnlichen.

Wenn Sie in Ihrer Arbeit Präfixe verwenden müssen, schreiben Sie zuerst die präfixierten Versionen, gefolgt von der nicht präfixierten Standardversion. Auf diese Weise überschreibt die Standardversion automatisch die präfixierten Versionen, wenn sie unterstützt wird. Zum Beispiel:

```css
-webkit-text-stroke: 4px navy;
text-stroke: 4px navy;
```

> [!NOTE]
> Für weitere Informationen zum Umgang mit präfixierten Eigenschaften siehe [Häufige HTML- und CSS-Probleme bewältigen — Umgang mit CSS-Präfixen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#handling_css_prefixes) aus unserem [Cross-browser testing](/de/docs/Learn/Tools_and_testing/Cross_browser_testing) Modul.

> [!NOTE]
> Siehe die [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions) und [WebKit CSS-Erweiterungen](/de/docs/Web/CSS/WebKit_Extensions) für Listen von browser-präfixierten CSS-Eigenschaften.

## Wie bezieht sich z-index auf das Positionieren?

Die z-index-Eigenschaft gibt die Stapelreihenfolge von Elementen an.

Ein Element mit einem höheren z-index/Stapelorientierung wird immer vor einem Element mit einem niedrigeren z-index/Stapelorientierung auf dem Bildschirm gerendert. Z-index funktioniert nur bei Elementen, die eine bestimmte Position (`position:absolute`, `position:relative` oder `position:fixed`) haben.

> [!NOTE]
> Für weitere Informationen lesen Sie unseren [Positionierungsartikel](/de/docs/Learn/CSS/CSS_layout/Positioning), insbesondere den Abschnitt [Einführung in z-index](/de/docs/Learn/CSS/CSS_layout/Positioning#introducing_z-index).
