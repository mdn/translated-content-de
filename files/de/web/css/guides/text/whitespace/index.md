---
title: Umgang mit Leerraum
slug: Web/CSS/Guides/Text/Whitespace
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Das Vorhandensein von Leerraum im [DOM](/de/docs/Web/API/Document_Object_Model) kann Layoutprobleme verursachen und die Manipulation des Inhaltsbaums auf unerwartete Weise erschweren, je nachdem, wo er sich befindet. Dieser Artikel untersucht, wann Schwierigkeiten auftreten können, und behandelt Möglichkeiten zur Minderung der daraus resultierenden Probleme.

## Was ist Leerraum?

{{Glossary("Whitespace", "Leerraum")}}-Zeichen bestehen aus verschiedenen Zeichen in unterschiedlichen Programmierkontexten. [_Dokument-Leerzeichen-Zeichen_](https://drafts.csswg.org/css-text-4/#white-space) umfassen laut den CSS-Verarbeitungsregeln für Leerraum nur Leerzeichen (U+0020), Tabulatoren (U+0009), Zeilenumbrüche (LF, U+000A) und Wagenrückläufe (CR, U+000D), wobei CR-Zeichen in jeder Hinsicht den Leerzeichen gleichgestellt sind. Diese Zeichen ermöglichen es Ihnen, Ihren Code zur besseren Lesbarkeit zu formatieren. Ein Großteil unseres Quellcodes ist voll von diesen Leerzeichen, und wir entfernen sie in der Regel nur als Teil eines Produktions-Build-Schritts, um die Dateigröße zu reduzieren.

Beachten Sie, dass diese Liste keine geschützten Leerzeichen (U+00A0, `&nbsp;` in HTML) enthält. Diese Zeichen lösen keine [Reduzierung](#reduzierung_und_transformation) aus, weshalb sie häufig verwendet werden, um längere Abstände in HTML zu erstellen.

CSS definiert auch das Konzept von [_Segmentumbruch_](https://drafts.csswg.org/css-text-4/#segment-break), welches im HTML-Kontext den LF-Zeichen entspricht.

## Wie verarbeitet HTML Leerraum?

Es ist ein verbreiteter Mythos, dass "HTML Leerraum ignoriert", was nicht stimmt: **HTML bewahrt den gesamten Leerraum-Textinhalt so auf, wie Sie ihn im Quellcode geschrieben haben.** Als Markup-Sprache erzeugt HTML ein {{Glossary("DOM", "DOM")}}, in dem der gesamte Leerraum im Textinhalt bewahrt wird, das über DOM-APIs wie [`Node.textContent`](/de/docs/Web/API/Node/textContent) abgerufen und manipuliert werden kann. Wenn HTML den Leerraum aus dem DOM entfernen würde, könnte CSS, eine nachgeschaltete Rendering-Engine, die auf dem DOM arbeitet, diesen nicht mit der {{cssxref("white-space")}}-Eigenschaft bewahren.

> [!NOTE]
> Um es klarzustellen, wir sprechen von Leerraum _zwischen HTML-Tags_, der zu Textknoten im DOM wird. Jeglicher Leerraum _innerhalb eines Tags_ (zwischen den spitzen Klammern, aber nicht als Teil eines Attributwerts) ist einfach Teil der HTML-Syntax und erscheint nicht im DOM.

> [!NOTE]
> Aufgrund der "Magie", die HTML-Parsing ist (Zitat aus der [DOM-Spezifikation](https://dom.spec.whatwg.org/#introduction-to-the-dom)), gibt es bestimmte Stellen, an denen Leerraumzeichen ignoriert werden könnten. Zum Beispiel wird Leerraum zwischen den Öffnungstags `<html>` und `<head>` oder zwischen den Schließungstags `</body>` und `</html>` ignoriert und erscheint nicht im DOM. Auch beim Parsen des Textinhalts des {{HTMLElement("pre")}}-Elements wird ein führendes Newline-Zeichen entfernt. Diese Randfälle ignorieren wir.
>
> Darüber hinaus normalisiert der HTML-Parser [_bestimmte Leerzeichen_](https://html.spec.whatwg.org/multipage/parsing.html#preprocessing-the-input-stream): Er ersetzt CR und {{Glossary("CRLF", "CRLF")}}-Sequenzen durch ein einziges LF. CR-Zeichen können jedoch entweder über {{Glossary("Character_reference", "Zeichenreferenzen")}} oder JavaScript in das DOM eingefügt werden, sodass die CSS-Verarbeitungsregeln für Leerraum weiterhin definieren müssen, wie sie zu behandeln sind.

Betrachten Sie folgendes Dokumentbeispiel:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>My Document</title>
  </head>
  <body>
    <h1>Header</h1>
    <p>Paragraph</p>
  </body>
</html>
```

Der DOM-Baum für dieses Beispiel sieht folgendermaßen aus:

![Der DOM-Baum, der ein einfaches HTML-Dokument darstellt](dom-string.png)

Beachten Sie:

- Einige Textknoten enthalten nur Leerraum.
- Andere Textknoten können Leerraum am Anfang oder Ende haben.

> [!NOTE]
> [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) unterstützt das Hervorheben von Textknoten, wodurch es einfacher wird, genau zu sehen, welche Knoten Leerraumzeichen enthalten. Reine Leerraumknoten sind mit einem "whitespace"-Label markiert.

Das Beibehalten von Leerraumzeichen im DOM ist in vielerlei Hinsicht nützlich, kann jedoch auch die Implementierung bestimmter Layouts erschweren und Probleme für Entwickler verursachen, die über DOM-Knoten iterieren möchten. Diese Probleme und einige Lösungen werden wir später im Abschnitt [Lösungen für häufige Probleme mit Leerraumknoten](#lösungen_für_häufige_probleme_mit_leerraumknoten) untersuchen.

## Wie verarbeitet CSS Leerraum?

Wenn das DOM an CSS zum Rendern übergeben wird, wird der Leerraum standardmäßig weitgehend entfernt. Das bedeutet, dass die Art und Weise, wie Ihr Code formatiert ist, für den Endbenutzer nicht sichtbar ist — das Erzeugen von Abständen um und in Elementen ist die Aufgabe von CSS.

```html-nolint live-sample___html-whitespace
<!doctype html>

  <h1>      Hello      World!     </h1>
```

Dieser Quellcode enthält ein paar Zeilenumbrüche nach dem `doctype` und eine Menge Leerzeichen vor, nach und innerhalb des `<h1>`-Elements. Aber der Browser ignoriert diese Leerzeichen und zeigt die Worte "Hello World!" an, als ob diese Zeichen überhaupt nicht existieren:

{{EmbedLiveSample("html-whitespace")}}

CSS ignoriert die meisten, aber nicht alle Leerzeichenzeichen. In diesem Beispiel existiert eines der Leerzeichen zwischen "Hello" und "World!" noch, wenn die Seite in einem Browser angezeigt wird. CSS verwendet [einen spezifischen Algorithmus](https://drafts.csswg.org/css-text-4/#white-space-processing), um zu entscheiden, welche Leerzeichenzeichen für den Benutzer irrelevant sind und wie sie entfernt oder transformiert werden. Wir werden erklären, wie diese Verarbeitung in den nächsten Abschnitten funktioniert.

### Reduzierung und Transformation

Schauen wir uns ein Beispiel an. Um die Leerzeichenzeichen auffälliger zu machen, haben wir auch einen Kommentar hinzugefügt, um alle Leerzeichen als ◦, alle Tabs als ⇥ und alle Zeilenumbrüche als ⏎ darzustellen:

<!-- markdownlint-disable no-hard-tabs -->

```html-nolint live-sample___ex-inline
<h1>   Hello
				<span> World!</span>	  </h1>

<!--
<h1>◦◦◦Hello◦⏎
⇥⇥⇥⇥<span>◦World!</span>⇥◦◦</h1>
-->
```

<!-- markdownlint-enable no-hard-tabs -->

Dieses Beispiel wird im Browser so gerendert:

{{EmbedLiveSample('ex-inline')}}

Das `<h1>`-Element enthält:

- Einen Textknoten (bestehend aus einigen Leerzeichen, dem Wort "Hello", einem Zeilenumbruch und einigen Tabs).
- Ein Inline-Element (`<span>`, welches ein Leerzeichen und das Wort "World!" enthält).
- Einen weiteren Textknoten (mit einem Tab und Leerzeichen nach dem `<span>`).

Da dieses `<h1>`-Element nur Inline-Elemente enthält, etabliert es einen [Inline-Formatierungskontext](/de/docs/Web/CSS/Guides/Inline_layout/Inline_formatting_context). Dies ist einer der mehreren Layoutkontexte, die Browser-Engines verwenden, um Inhalte auf der Seite anzuordnen.

Innerhalb dieses Inline-Formatierungskontextes werden Leerzeichenzeichen wie folgt verarbeitet:

> [!NOTE]
> Dieser Algorithmus kann über die {{cssxref("white-space-collapse")}}-Eigenschaft (oder deren Kurzform {{cssxref("white-space")}}) konfiguriert werden. Wir beginnen mit der Annahme des Standardwertes (`white-space-collapse: collapse`) und sehen dann, wie verschiedene Eigenschaftswerte diesen Algorithmus beeinflussen.

1. Zuerst werden alle Leerzeichen und Tabs unmittelbar vor und nach einem Zeilenumbruch ignoriert. Nehmen wir also unser Beispiel-Markup von vorher:

   ```html-nolint
   <h1>◦◦◦Hello◦⏎
   ⇥⇥⇥⇥<span>◦World!</span>⇥◦◦</h1>
   ```

   ...und wenden diese erste Regel an, erhalten wir:

   ```html-nolint
   <h1>◦◦◦Hello⏎
   <span>◦World!</span>⇥◦◦</h1>
   ```

2. Dann werden aufeinanderfolgende Zeilenumbrüche zu einem einzigen Zeilenumbruch zusammengefasst. In diesem Beispiel haben wir keinen.
3. Danach werden Zeilen im Quellcode zu einzelnen Zeilen zusammengefügt, indem alle verbleibenden Zeilenumbruchzeichen entfernt werden. Sie werden entweder in Leerzeichen (U+0020) umgewandelt oder einfach entfernt, abhängig vom Kontext vor und nach dem Umbruch. Die genaue Wahl hängt vom Browser und der Sprache ab. In unserem Beispiel hier auf Englisch (wo Leerzeichen Wörter trennen), können wir erwarten, dass alle Zeilenumbrüche in Leerzeichen umgewandelt werden. So enden wir mit:

   ```html-nolint
   <h1>◦◦◦Hello◦<span>◦World!</span>◦◦◦</h1>
   ```

   Bemerkenswert ist, dass in Sprachen ohne Worttrennzeichen, wie Chinesisch, die Zeilen ohne dazwischenliegende Leerzeichen zusammengefügt werden. So:

   ```html-nolint
   <div>你好
   世界</div>
   ```

   könnte je nach Browserheuristik als "你好世界" ohne Leerzeichen dazwischen gerendert werden.

4. Als nächstes werden alle Tabulatorzeichen in Leerzeichen umgewandelt, so dass das Beispiel wird zu:

   ```html-nolint
   <h1>◦◦◦Hello⏎
   <span>◦World!</span>◦◦◦</h1>
   ```

5. Danach wird jedes Leerzeichen, das unmittelbar auf ein anderes Leerzeichen folgt (sogar über zwei separate Inline-Elemente hinweg), ignoriert, so dass wir am Ende haben:

   ```html-nolint
   <h1>◦Hello◦<span>World!</span>◦</h1>
   ```

Aus diesem Grund werden Besucher der Webseite den Ausdruck "Hello World!" schön geschrieben oben auf der Seite sehen, anstatt ein seltsam eingezogenes "Hello", gefolgt von einem noch seltsamer eingezogenen "World!" in der nächsten Zeile.

Nach diesen Schritten verarbeitet der Browser den Zeilenumbruch und den bidirektionalen Text, was wir hier ignorieren werden. Beachten Sie, dass nach dem Öffnen des `<h1>`-Tags und vor dem Schließen des `</h1>`-Tags weiterhin Leerzeichen vorhanden sind, aber diese werden im Browser nicht angezeigt. Darauf gehen wir als nächstes ein, wenn jede Zeile Layout erhält.

Verschiedene {{cssxref("white-space-collapse")}}-Werte überspringen verschiedene Schritte dieses Algorithmus:

- `preserve` und `break-spaces`: Der gesamte Algorithmus wird übersprungen, und es erfolgt keine Leerzeichenzusammenführung oder Transformation.
- `preserve-breaks`: Schritte 2 und 3 werden übersprungen, und Zeilenumbrüche werden beibehalten.
- `preserve-spaces`: Der gesamte Algorithmus wird übersprungen und durch einen einzelnen Schritt ersetzt, um jedes Tabulatorzeichen oder jeden Zeilenumbruch in ein Leerzeichen umzuwandeln.

Zusammengefasst werden verschiedene Leerzeichenzeichen auf folgende Weise zusammengefasst und transformiert:

- Tabs werden im Allgemeinen in Leerzeichen umgewandelt.
- Wenn Segmentumbrüche zusammengefasst werden sollen:
  - Sequenzen von Segmentumbrüchen werden zu einem einzigen Segmentumbruch zusammengefasst.
  - Sie werden in Sprachen, in denen Wörter mit Leerzeichen getrennt werden (wie Englisch), in Leerzeichen umgewandelt oder in Sprachen, die Wörter nicht mit Leerzeichen trennen (wie Chinesisch), ganz entfernt.
- Wenn Leerzeichen zusammengefügt werden sollen:
  - Leerzeichen oder Tabs vor oder nach Segmentumbrüchen werden entfernt.
  - Sequenzen von Leerzeichen werden zu einem einzigen Leerzeichen zusammengefasst.
- Wenn Leerzeichen erhalten bleiben, werden Sequenzen von Leerzeichen als nicht brechend behandelt, außer dass sie am Ende jeder Sequenz weich umbrechen - das heißt, die nächste Zeile beginnt immer mit dem nächsten Nicht-Leerzeichenzeichen. Im Fall des `break-spaces`-Wertes könnte jedoch ein weicher Umbruch nach jedem Leerzeichen auftreten, sodass die nächste Zeile mit einem oder mehreren Leerzeichen beginnen kann.

### Kürzen und Positionieren

In sowohl [Inline](/de/docs/Web/CSS/Guides/Inline_layout/Inline_formatting_context) als auch [Block](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) Formatierungskontexten werden Elemente in _Zeilen_ angeordnet. In einem Inline-Formatierungskontext werden Zeilen durch Textumbruch erstellt. In einem Blockformatierungskontext hingegen bildet jeder Block seine eigene Zeile. Wenn jede Zeile layoutiert wird, wird der Leerraum weiter verarbeitet. Schauen wir uns ein Beispiel an, um zu erklären, wie das funktioniert.

In diesem Beispiel, wie zuvor, haben wir Leerraumzeichen in einem Kommentar markiert. Wir haben drei Textknoten, die nur Leerraum enthalten: einen vor dem ersten `<div>`, einen zwischen den beiden `<div>`s und einen nach dem zweiten `<div>`.

<!-- markdownlint-disable no-hard-tabs -->

```html-nolint live-sample___ex-block
<body>
	<div>	Hello	</div>

   <div>  World!   </div>
</body>

<!--
<body>⏎
⇥<div>⇥Hello⇥</div>⏎
⏎
◦◦◦<div>◦◦World!◦◦</div>◦◦⏎
</body>
-->
```

<!-- markdownlint-enable no-hard-tabs -->

Dies wird so gerendert:

{{EmbedLiveSample('ex-block')}}

Der Leerraum in diesem Beispiel wird folgendermaßen behandelt:

> [!NOTE]
> Dieser Algorithmus kann über die {{cssxref("white-space-collapse")}}-Eigenschaft (oder deren Kurzform {{cssxref("white-space")}}) konfiguriert werden. Wir beginnen mit der Annahme des Standardwertes (`white-space-collapse: collapse`) und sehen dann, wie verschiedene Eigenschaftswerte diesen Algorithmus beeinflussen.

1. Zuerst wird der Leerraum in der gleichen Weise [zusammengefasst](#reduzierung_und_transformation), wie wir es im vorherigen Abschnitt gesehen haben, sodass daraus:

   ```html-nolint
   <body>⏎
   ⇥<div>⇥Hello⇥</div>⏎
   ⏎
   ◦◦◦<div>◦◦World!◦◦</div>◦◦⏎
   </body>
   ```

   ...dies wird:

   ```html-nolint
   <body>◦<div>◦Hello◦</div>◦<div>◦World!◦</div>◦</body>
   ```

   Die Zeilen werden dann entsprechend dem durch `<body>` etablierten Blockformatierungskontext layoutiert. In diesem Beispiel wird jeder der fünf Kindknoten von `<body>` als separate Zeile layoutiert. (Jede Zeile in diesem Codeblock repräsentiert eine Zeile im gerenderten Layout und nicht eine Zeile in unserem ursprünglichen HTML-Code):

   ```html-nolint
   <body>
   ◦
   <div>◦Hello◦</div>
   ◦
   <div>◦World!◦</div>
   ◦
   </body>
   ```

   Beachten Sie, dass, wenn die Zeilen zu lang werden, jede Zeile umgebrochen werden kann und mehr Zeilen entstehen können. In Wirklichkeit bestimmen Browser den Inhalt der Zeilen während die Zeilen layoutiert werden. Wir überspringen den Teil darüber, wie der Textumbruch funktioniert.

2. Sequenzen von Leerzeichen am Anfang einer Zeile werden entfernt, sodass das Beispiel wird zu:

   ```html-nolint
   <body>

   <div>Hello◦</div>

   <div>World!◦</div>

   </body>
   ```

3. Jede Tabulator, die zu diesem Zeitpunkt beibehalten wird, wird gemäß {{cssxref("tab-size")}} gerendert. Dies kann nur mit `white-space-collapse` auf `preserve` oder `break-spaces` passieren, da alle anderen Einstellungen Tabs in Leerzeichen umwandeln.
4. Sequenzen von Leerzeichen am Ende einer Zeile werden entfernt, somit wird das oben genannte:

   ```html-nolint
   <body>

   <div>Hello</div>

   <div>World!</div>

   </body>
   ```

Die drei leeren Zeilen, die wir jetzt haben, nehmen im endgültigen Layout keinen Platz ein, da sie keinen sichtbaren Inhalt enthalten. So enden wir mit nur zwei Zeilen, die Platz auf der Seite einnehmen. Die Besucher der Webseite sehen die Wörter "Hello" und "World!" auf zwei separaten Zeilen, genau so, wie man erwarten würde, dass zwei `<div>`s angeordnet sind. Browser ignorieren im Wesentlichen den gesamten Leerraum, der im HTML-Code enthalten war.

Verschiedene {{cssxref("white-space-collapse")}}-Werte überspringen verschiedene Schritte dieses Algorithmus:

- `preserve` und `break-spaces`: Der gesamte Algorithmus wird übersprungen, außer Schritt 3, also erfolgt keine Leerzeichenzusammenführung oder Transformation.
- `preserve-spaces`: Der gesamte Algorithmus wird übersprungen, also werden Leerzeichen am Anfang und Ende von Zeilen beibehalten.
- `preserve-breaks`: Der gleiche Algorithmus wird angewendet wie beim `collapse`-Wert.

## Wie verarbeiten DOM-APIs Leerraum?

Wie zuvor erwähnt, wird [Leerraum im DOM beibehalten](#how_does_html_process_whitespace). Das bedeutet, dass wenn Sie [`Node.textContent`](/de/docs/Web/API/Node/textContent) abrufen, erhalten Sie den Textinhalt, wie Sie ihn im HTML-Quellcode geschrieben haben, und wenn Sie [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) abrufen, erhalten Sie alle Textknoten, einschließlich derer, die nur Leerraum enthalten.

Nicht alle DOM-APIs bewahren Leerraum; einige APIs arbeiten mit dem _gerenderten Text_ nach Design. Beispielsweise gibt [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) den Text genau so zurück, wie er gerendert wurde, mit allen Leerzeichen zusammengefasst und abgeschnitten. [`Selection.toString()`](/de/docs/Web/API/Selection/toString) gibt den Text so zurück, wie er eingefügt würde, was im Allgemeinen bedeutet, dass Leerraum zusammengefasst wird. In Firefox (das den Leerraum zwischen chinesischen Zeichen zusammenfasst, wie im Abschnitt [Reduzierung und Transformation](#reduzierung_und_transformation) oben erwähnt), bleibt der zusammengefasste Leerraum sowohl in der von `toString()` zurückgegebenen Zeichenkette als auch im eingefügten Text erhalten.

```html
<div id="test">Hello world!</div>
```

```js
const div = document.getElementById("test");
console.log(div.textContent); // "  Hello\n  world!\n"
console.log(div.innerText); // "Hello world!"
const selection = document.getSelection();
selection.selectAllChildren(div);
console.log(selection.toString()); // "Hello world!"
```

## Lösungen für häufige Probleme mit Leerraumknoten

Leerraumknoten sind für den Webseitenbesucher aufgrund der CSS-Verarbeitungsregeln unsichtbar, aber sie können bestimmte Layouts und DOM-Manipulationen stören, die auf der genauen Struktur des DOM basieren. Lassen Sie uns einige häufige Probleme und deren Lösungen betrachten.

### Leerraumverarbeitung zwischen Inline- und Inline-Blockelementen

Schauen wir uns ein Layoutproblem mit Leerraumknoten an: Leerzeichen zwischen Inline- und Inline-Blockelementen. Wie wir zuvor bei Inline- und Blockelementen gesehen haben, werden die meisten Leerzeichenzeichen ignoriert, aber worttrennende Zeichen wie Leerzeichen bleiben bestehen. Der zusätzliche Leerraum, der ins Layout gelangt, hilft, die Wörter im Satz zu trennen.

Mit `inline-block`-Elementen wird es interessanter: Diese Elemente verhalten sich außen wie Inline-Elemente und innen wie Blöcke. (Sie werden oft verwendet, um komplexere UI-Stücke darzustellen, die nebeneinander auf derselben Zeile platziert sind, wie Navigationsmenüelemente.) Jeder Leerraum zwischen benachbarten Inline- oder Inline-Blockelementen führt zu Leerstellen im Layout, genauso wie die Leerstellen zwischen Wörtern im Text. (Dies kann Entwickler überraschen, da sie Blöcke sind und Blöcke normalerweise keine zusätzlichen Leerstellen zeigen.)

Betrachten Sie dieses Beispiel (wie zuvor, haben wir einen Kommentar im HTML-Code hinzugefügt, um die Leerzeichenzeichen darzustellen):

```css live-sample___inline-block
.people-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.people-list li {
  display: inline-block;
  width: 2em;
  height: 2em;
  background: #ff0066;
  border: 1px solid;
}
```

```html live-sample___inline-block
<ul class="people-list">
  <li></li>

  <li></li>

  <li></li>

  <li></li>

  <li></li>
</ul>

<!--
<ul class="people-list">⏎
◦◦<li></li>⏎
⏎
◦◦<li></li>⏎
⏎
◦◦<li></li>⏎
⏎
◦◦<li></li>⏎
⏎
◦◦<li></li>⏎
</ul>
-->
```

Dies wird wie folgt gerendert:

{{EmbedLiveSample('inline-block')}}

Sie wollen wahrscheinlich nicht die Lücken zwischen den Blöcken. Abhängig von Ihrem Anwendungsfall (wie einer Liste von Avataren oder einer horizontalen Reihe von Navigationsknöpfen) möchten Sie wahrscheinlich, dass die Elemente aneinander stoßen und in der Lage sein, jeden Abstand selbst zu steuern.

Der Firefox DevTools HTML Inspector kann Textknoten hervorheben und auch genau das Gebiet zeigen, das die Elemente einnehmen. Dies ist nützlich, um zu überprüfen, ob Sie vermuten, dass zusätzliche Ränder oder unerwarteter Leerraum Lücken verursachen.

![Beispiel für die Anzeige von Leerzeichen zwischen Blöcken im Firefox DevTools HTML Inspector](whitespace-devtools.png)

Es gibt einige Möglichkeiten, dieses Problem zu umgehen:

- Verwenden Sie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), um die horizontale Liste von Elementen zu erstellen, anstatt zu versuchen, eine `inline-block`-Lösung. Flexbox kümmert sich um Abstände und Ausrichtung und ist definitiv die bevorzugte Lösung:

  ```css
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  ```

- Wenn Sie sich auf `inline-block` verlassen müssen, könnten Sie die [`font-size`](/de/docs/Web/CSS/Reference/Properties/font-size) der Liste auf `0` setzen. Dies funktioniert nur, wenn die Blöcke nicht mit `em`-Einheiten dimensioniert sind (da `em` auf `font-size` basiert, würde die Blockgröße auch auf `0` enden). Das Verwenden von `rem`-Einheiten wäre hier eine gute Wahl:

  ```css
  ul {
    font-size: 0;
    /* … */
  }

  li {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    /* … */
  }
  ```

- Alternativ könnten Sie einen negativen Rand auf die Listenelemente setzen:

  ```css
  li {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    margin-right: -0.25rem;
  }
  ```

- Sie können dieses Problem auch lösen, indem Sie Leerraumknoten zwischen den `<li>`-Elementen vermeiden:

  ```html-nolint
  <li>
    ...
  </li><li>
    ...
  </li>
  ```

### Arbeiten mit Leerraum im DOM

Wie zuvor erwähnt, wird Leerraum beim Rendern [zusammengefasst und gekürzt](#reduzierung_und_transformation), aber im DOM beibehalten. Dies kann einige Stolpersteine darstellen, wenn Sie in JavaScript [DOM](/de/docs/Web/API/Document_Object_Model)-Manipulationen durchführen möchten. Wenn Sie beispielsweise einen Verweis auf einen übergeordneten Knoten haben und dessen erstes Kindelement über [`Node.firstChild`](/de/docs/Web/API/Node/firstChild) manipulieren möchten, gibt ein rätselhaft vorhandener Leerraumknoten direkt nach dem öffnenden Eltern-Tag das falsche Ergebnis. Der Textknoten würde anstelle des Ziel-Elements ausgewählt.

Ein weiteres Beispiel: Wenn Sie etwas für eine Teilmenge von Elementen basierend darauf tun möchten, ob sie leer sind (keine Kindknoten haben), könnten Sie [`Node.hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes) verwenden. Aber wenn eines dieser Elemente Textknoten enthält, könnten Sie zu falschen Ergebnissen kommen.

Der folgende JavaScript-Code zeigt mehrere Funktionen, die es einfacher machen, mit Leerraum im DOM umzugehen:

```js
/**
 * Throughout, whitespace is defined as one of the characters
 *  "\t" TAB \u0009
 *  "\n" LF  \u000A
 *  "\r" CR  \u000D
 *  " "  SPC \u0020
 *
 * This does not use JavaScript's "\s" because that includes non-breaking
 * spaces (and also some other characters).
 */

/**
 * Determine whether a node's text content is entirely whitespace.
 *
 * @param nod  A node implementing the `CharacterData` interface (i.e.,
 *             a `Text`, `Comment`, or `CDATASection` node)
 * @return     `true` if all of the text content of `nod` is whitespace,
 *             otherwise `false`.
 */
function isAllWs(nod) {
  return !/[^\t\n\r ]/.test(nod.textContent);
}

/**
 * Determine if a node should be ignored by the iterator functions.
 *
 * @param nod  An object implementing the `Node` interface.
 * @return     `true` if the node is:
 *                1) A `Text` node that is all whitespace
 *                2) A `Comment` node
 *             and otherwise `false`.
 */
function isIgnorable(nod) {
  return (
    nod.nodeType === 8 || // a comment node
    (nod.nodeType === 3 && isAllWs(nod))
  ); // a text node, all ws
}

/**
 * Version of `previousSibling` that skips nodes that are entirely
 * whitespace or comments. (Normally `previousSibling` is a property
 * of all DOM nodes that gives the sibling node, the node that is
 * a child of the same parent, that occurs immediately before the
 * reference node.)
 *
 * @param sib  The reference node.
 * @return     The closest previous sibling to `sib` that is not
 *             ignorable according to `isIgnorable`, or `null` if
 *             no such node exists.
 */
function nodeBefore(sib) {
  while ((sib = sib.previousSibling)) {
    if (!isIgnorable(sib)) {
      return sib;
    }
  }
  return null;
}

/**
 * Version of `nextSibling` that skips nodes that are entirely
 * whitespace or comments.
 *
 * @param sib  The reference node.
 * @return     The closest next sibling to `sib` that is not
 *             ignorable according to `isIgnorable`, or `null`
 *             if no such node exists.
 */
function nodeAfter(sib) {
  while ((sib = sib.nextSibling)) {
    if (!isIgnorable(sib)) {
      return sib;
    }
  }
  return null;
}

/**
 * Version of `lastChild` that skips nodes that are entirely
 * whitespace or comments. (Normally `lastChild` is a property
 * of all DOM nodes that gives the last of the nodes contained
 * directly in the reference node.)
 *
 * @param sib  The reference node.
 * @return     The last child of `sib` that is not ignorable
 *             according to `isIgnorable`, or `null` if no
 *             such node exists.
 */
function lastChild(par) {
  let res = par.lastChild;
  while (res) {
    if (!isIgnorable(res)) {
      return res;
    }
    res = res.previousSibling;
  }
  return null;
}

/**
 * Version of `firstChild` that skips nodes that are entirely
 * whitespace and comments.
 *
 * @param sib  The reference node.
 * @return     The first child of `sib` that is not ignorable
 *             according to `isIgnorable`, or `null` if no
 *             such node exists.
 */
function firstChild(par) {
  let res = par.firstChild;
  while (res) {
    if (!isIgnorable(res)) {
      return res;
    }
    res = res.nextSibling;
  }
  return null;
}

/**
 * Version of `data` that doesn't include whitespace at the beginning
 * and end and normalizes all whitespace to a single space. (Normally
 * `data` is a property of text nodes that gives the text of the node.)
 *
 * @param txt  The text node whose data should be returned
 * @return     A string giving the contents of the text node with
 *             whitespace collapsed.
 */
function dataOf(txt) {
  let data = txt.textContent;
  data = data.replace(/[\t\n\r ]+/g, " ");
  if (data[0] === " ") {
    data = data.substring(1, data.length);
  }
  if (data[data.length - 1] === " ") {
    data = data.substring(0, data.length - 1);
  }
  return data;
}
```

Der folgende Code demonstriert die Verwendung der obigen Funktionen. Er iteriert über die Kinder eines Elements (dessen Kinder alle Elemente sind), um dasjenige zu finden, dessen Text "This is the third paragraph" ist, und ändert dann das Klassenattribut und den Inhalt jenes Absatzes.

```js
let cur = firstChild(document.getElementById("test"));
while (cur) {
  if (dataOf(cur.firstChild) === "This is the third paragraph.") {
    cur.className = "magic";
    cur.firstChild.textContent = "This is the magic paragraph.";
  }
  cur = nodeAfter(cur);
}
```
