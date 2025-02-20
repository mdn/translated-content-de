---
title: CSS-FAQ
slug: Learn_web_development/Howto/Solve_CSS_problems/CSS_FAQ
l10n:
  sourceCommit: a29769d6d10261f771321eb60f3990029c160924
---

{{LearnSidebar}}

In diesem Artikel finden Sie einige häufig gestellte Fragen (FAQs) zu CSS sowie Antworten, die Ihnen bei Ihrem Weg zum Webentwickler helfen können.

## Warum wird mein gültiges CSS nicht korrekt gerendert?

Browser verwenden die `doctype`-Deklaration, um zu bestimmen, ob das Dokument in einem Modus angezeigt wird, der stärker mit Webstandards oder mit alten Browserfehlern kompatibel ist. Die Verwendung einer korrekten und modernen `doctype`-Deklaration am Anfang Ihres HTML-Dokuments verbessert die Einhaltung von Standards in Browsern.

Moderne Browser haben zwei Haupt-Render-Modi:

- _Quirks-Modus_: Auch als Rückwärtskompatibilitätsmodus bezeichnet, ermöglicht es der Quirks-Modus, dass ältere Webseiten gemäß den Vorgaben ihrer Autoren gerendert werden, indem die nicht standardmäßigen Rendering-Regeln älterer Browser verwendet werden. Dokumente mit einer unvollständigen, fehlerhaften oder fehlenden `doctype`-Deklaration oder einer bekannten `doctype`-Deklaration aus der Zeit vor 2001 werden im Quirks-Modus gerendert.
- _Standards-Modus_: Der Browser versucht, die W3C-Standards strikt einzuhalten. Neue HTML-Seiten sollen für standardkonforme Browser entworfen werden, wodurch Seiten mit einer modernen `doctype`-Deklaration im Standards-Modus gerendert werden.

Gecko-basierte Browser haben einen dritten [Limited-Quirks-Modus](https://en.wikipedia.org/wiki/Quirks_mode#Limited_quirks_mode), der nur wenige geringfügige Abweichungen umfasst.

Die standardmäßige `doctype`-Deklaration, die den Standards-Modus auslöst, lautet:

```html
<!doctype html>
```

Wenn immer möglich, sollten Sie die oben angegebene `doctype`-Deklaration verwenden. Es gibt andere gültige, ältere `doctype`-Deklarationen, die den Standards- oder Almost-Standards-Modus auslösen:

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

Mögliche Ursachen können sein:

- Der Pfad zur CSS-Datei ist falsch.
- Damit ein CSS-Stylesheet angewendet wird, muss es mit einem MIME-Typ `text/css` geliefert werden. Wenn der Webserver es nicht mit diesem Typ bereitstellt, wird es nicht angewendet.

## Was ist der Unterschied zwischen `id` und `class`?

HTML-Elemente können ein `id`- und/oder ein `class`-Attribut haben. Das `id`-Attribut weist dem entsprechenden Element einen Namen zu, und für gültiges Markup darf es innerhalb eines Dokuments nur ein Element mit diesem Namen geben. Das `class`-Attribut weist dem Element einen Klassennamen zu, und dieser Name kann auf viele Elemente innerhalb der Seite angewendet werden. CSS ermöglicht es, Stile auf bestimmte `id`- und/oder `class`-Namen anzuwenden.

- Verwenden Sie einen klassenspezifischen Stil, wenn Sie die Stilregeln auf viele Blöcke und Elemente auf der Seite anwenden möchten oder wenn Sie derzeit nur ein Element mit diesem Stil haben, aber später weitere hinzufügen könnten.
- Verwenden Sie einen id-spezifischen Stil, wenn Sie die angewandten Stilregeln auf einen bestimmten Block oder ein bestimmtes Element beschränken müssen. Dieser Stil wird nur von dem Element mit dieser bestimmten id verwendet.

Es wird generell empfohlen, nach Möglichkeit Klassen zu verwenden und ids nur für spezielle Verwendungen (z. B. zur Verknüpfung von Label- und Formularelementen oder für Elemente, die semantisch einzigartig sein müssen) zu nutzen:

- Die Verwendung von Klassen macht Ihren Stil erweiterbar — selbst wenn Sie derzeit nur ein Element mit einer bestimmten Regel stylen, könnten Sie später weitere hinzufügen.
- Klassen ermöglichen es, mehrere Elemente zu stylen, wodurch kürzere Stylesheets entstehen können, anstatt dieselben Stilinformationen mehrfach für id-Selektoren schreiben zu müssen. Kürzere Stylesheets sind leistungsfähiger.
- Klassenselektoren haben eine niedrigere [Spezifität](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity) als id-Selektoren, was es einfacher macht, sie bei Bedarf zu überschreiben.

> [!NOTE]
> Weitere Informationen finden Sie unter [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors).

## Wie stelle ich den Standardwert einer Eigenschaft wieder her?

Anfangs bot CSS kein "default"-Schlüsselwort, und die einzige Möglichkeit, den Standardwert einer Eigenschaft wiederherzustellen, bestand darin, diese Eigenschaft explizit erneut zu deklarieren. Zum Beispiel:

```css
/* Heading default color is black */
h1 {
  color: red;
}
h1 {
  color: black;
}
```

Dies hat sich mit CSS 2 geändert. Das Schlüsselwort [initial](/de/docs/Web/CSS/initial) ist nun ein gültiger Wert für eine CSS-Eigenschaft. Es setzt die Eigenschaft auf ihren Standardwert zurück, der in der CSS-Spezifikation der jeweiligen Eigenschaft definiert ist.

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

CSS erlaubt es nicht direkt, einen Stil in Bezug auf einen anderen zu definieren. Das Zuweisen mehrerer Klassen zu einem einzelnen Element kann jedoch denselben Effekt erzielen, und [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) bieten nun eine Möglichkeit, Stilinformationen an einem Ort zu definieren, die an mehreren Stellen wiederverwendet werden können.

## Wie weise ich einem Element mehrere Klassen zu?

HTML-Elemente können mehrere Klassen zugewiesen bekommen, indem die Klassen im `class`-Attribut mit einem Leerzeichen getrennt aufgelistet werden.

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

Wenn dieselbe Eigenschaft in beiden Regeln deklariert ist, wird der Konflikt zuerst durch die Spezifität und dann entsprechend der Reihenfolge der CSS-Deklarationen aufgelöst. Die Reihenfolge der Klassen im `class`-Attribut spielt dabei keine Rolle.

## Warum funktionieren meine Stilregeln nicht richtig?

Syntaktisch korrekte Stilregeln werden möglicherweise in bestimmten Situationen nicht angewendet. Sie können die [Rules-Ansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) des _CSS-Bereichs_ des Inspektors verwenden, um Probleme dieser Art zu debuggen. Nachfolgend sind einige häufige Fälle von ignorierten Stilregeln aufgeführt.

### HTML-Element-Hierarchie

Die Art und Weise, wie CSS-Stile auf HTML-Elemente angewendet werden, hängt auch von der Hierarchie der Elemente ab. Es ist wichtig zu beachten, dass eine Regel, die auf ein Nachkommen-Element angewendet wird, den Stil des übergeordneten Elements außer Kraft setzt, ungeachtet der Spezifität oder Priorität der CSS-Regeln.

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

Bei komplexen HTML-Hierarchien sollten Sie, falls eine Regel ignoriert zu werden scheint, überprüfen, ob das Element innerhalb eines anderen Elements mit einem anderen Stil liegt.

### Explizit neu definierte Stilregel

In CSS-Stylesheets ist die Reihenfolge **wichtig**. Wenn Sie eine Regel definieren und dieselbe Regel anschließend noch einmal neu definieren, wird die letzte Definition verwendet.

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

### Verwendung einer Kurzschreibweise

Das Verwenden von Kurzschreibweisen für Stilregeln ist sinnvoll, da es eine sehr kompakte Syntax bietet. Die Verwendung von Kurzschreibweisen mit nur einigen Attributen ist möglich und korrekt, aber es muss beachtet werden, dass nicht deklarierte Attribute automatisch auf ihre Standardwerte zurückgesetzt werden. Dies bedeutet, dass eine vorherige Regel für ein einzelnes Attribut implizit überschrieben werden könnte.

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

Im vorherigen Beispiel trat das Problem bei Regeln für unterschiedliche Elemente auf, es könnte jedoch auch für dasselbe Element auftreten, da die Reihenfolge der Regeln **wichtig** ist.

```css
#stockTicker {
  font-weight: bold;
  font: 12px Verdana; /* font-weight is now set to normal */
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

In diesem Beispiel wird die Regel durch den `body *`-Selektor auf alle Elemente im Body angewendet, unabhängig vom Hierarchielevel, einschließlich der `.stockUp`-Klasse. Daher wird `font-weight: bold;`, das auf die `.corpName`-Klasse angewendet wurde, durch `font-weight: normal;` überschrieben, das auf alle Elemente im Body angewendet wird.

Die Verwendung des `*`-Selektors sollte minimiert werden, da es sich um einen langsamen Selektor handelt, insbesondere wenn er nicht als erstes Element eines Selektors verwendet wird. Sein Einsatz sollte, wenn möglich, vermieden werden.

### Spezifität in CSS

Wenn mehrere Regeln auf ein bestimmtes Element zutreffen, hängt die gewählte Regel von ihrer [Spezifität](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity) ab. Inline-Stile (in HTML-`style`-Attributen) haben die höchste Spezifität und überschreiben alle Selektoren, gefolgt von ID-Selektoren, dann Klassen-Selektoren und schließlich Elemente-Selektoren. Die Textfarbe des folgenden {{htmlelement("div")}} wird also rot sein.

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

Die Regeln werden komplizierter, wenn der Selektor aus mehreren Teilen besteht. Eine detailliertere Erklärung, wie die Spezifität von Selektoren berechnet wird, finden Sie in der [CSS-Spezifität-Dokumentation](/de/docs/Web/CSS/CSS_cascade/Specificity).

## Was bewirken die Eigenschaften -moz-\*, -ms-\*, -webkit-\*, -o-\* und -khtml-\*?

Diese Eigenschaften, sogenannte _präfixierte Eigenschaften_, sind Erweiterungen des CSS-Standards. Sie wurden früher verwendet, um die Nutzung experimenteller und nicht standardisierter Funktionen in Browsern zu ermöglichen, ohne den regulären Namensraum zu verschmutzen, und so zukünftige Inkompatibilitäten bei der Erweiterung des Standards zu verhindern.

Die Verwendung solcher Eigenschaften auf produktiven Websites wird nicht empfohlen — sie haben bereits ein großes Problem mit der Webkompatibilität geschaffen. Zum Beispiel verwenden viele Entwickler nur die `-webkit-`-Version einer Eigenschaft, obwohl die nicht-präfixierte Version in allen Browsern vollständig unterstützt wird. Dies führt dazu, dass ein Design, das auf dieser Eigenschaft basiert, in nicht-webkit-basierten Browsern nicht funktioniert, obwohl es möglich wäre. Dieses Problem wurde so groß, dass andere Browser dazu gedrängt wurden, `-webkit-`-präfixierte Aliasnamen zu implementieren, um die Webkompatibilität zu verbessern, wie in der [Compatibility Living Standard](https://compat.spec.whatwg.org/) beschrieben.

Browser nutzen keine CSS-Präfixe mehr, um neue experimentelle Funktionen zu implementieren. Stattdessen werden neue Funktionen hinter konfigurierbaren experimentellen Flags oder nur in Nightly-Browser-Versionen und ähnlichen getestet.

Falls Sie Präfixe verwenden müssen, schreiben Sie zuerst die präfixierten Versionen, gefolgt von der standardisierten Version. Auf diese Weise überschreibt die Standardversion automatisch die Präfixversionen, sobald sie unterstützt wird. Zum Beispiel:

```css
-webkit-text-stroke: 4px navy;
text-stroke: 4px navy;
```

> [!NOTE]
> Siehe die [Mozilla CSS Extensions](/de/docs/Web/CSS/Mozilla_Extensions) und [WebKit CSS Extensions](/de/docs/Web/CSS/WebKit_Extensions) für Listen von browser-spezifischen CSS-Eigenschaften.

## Wie hängt z-index mit Positionierung zusammen?

Die `z-index`-Eigenschaft legt die Stapelreihenfolge von Elementen fest.

Ein Element mit einem höheren z-Index wird immer vor einem Element mit einem niedrigeren z-Index auf dem Bildschirm gerendert. Z-Index funktioniert nur bei Elementen, die eine festgelegte Position haben (`position:absolute`, `position:relative` oder `position:fixed`).

> [!NOTE]
> Weitere Informationen finden Sie in unserem [Positionierungsartikel](/de/docs/Learn_web_development/Core/CSS_layout/Positioning), insbesondere im Abschnitt [Einführung in z-index](/de/docs/Learn_web_development/Core/CSS_layout/Positioning#introducing_z-index).
