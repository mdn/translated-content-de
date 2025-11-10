---
title: Umgang mit Leerzeichen
slug: Web/CSS/Guides/Text/Whitespace
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das Vorhandensein von Leerzeichen im [DOM](/de/docs/Web/API/Document_Object_Model) kann Layoutprobleme verursachen und es schwierig machen, den Inhalt des Baums auf unerwartete Weise zu manipulieren, je nachdem, wo sie sich befinden. Dieser Artikel untersucht, wann Schwierigkeiten auftreten können, und zeigt auf, was getan werden kann, um daraus resultierende Probleme zu mildern.

## Was sind Leerzeichen?

{{Glossary("Whitespace", "Leerzeichen")}}-Zeichen bestehen in verschiedenen Programmiersprachenkontexten aus unterschiedlichen Zeichen. [_Dokumenten-Leerzeichen-Zeichen_](https://drafts.csswg.org/css-text-4/#white-space), soweit es die CSS-Leerraumverarbeitungsregeln betrifft, beinhalten nur Leerzeichen (U+0020), Tabs (U+0009), Zeilenumbrüche (LF, U+000A) und Wagenrückläufe (CR, U+000D), wobei CR-Zeichen in jeder Hinsicht gleichbedeutend mit Leerzeichen sind. Diese Zeichen ermöglichen es Ihnen, Ihren Code lesbar zu formatieren. Ein Großteil unseres Quellcodes ist voll von diesen Leerzeichen-Zeichen, und wir neigen dazu, sie nur als Teil eines Produktions-Build-Schritts zu entfernen, um die Dateigröße zu reduzieren.

Beachten Sie, dass diese Liste keine geschützten Leerzeichen (U+00A0, `&nbsp;` in HTML) beinhaltet. Diese Zeichen lösen daher kein [Zusammenfallen](#zusammenfallen_und_transformation) aus, weshalb sie oft verwendet werden, um längere Leerzeichen in HTML zu erzeugen.

CSS definiert auch das Konzept von [_Segmentumbrüchen_](https://drafts.csswg.org/css-text-4/#segment-break), die im Kontext von HTML den LF-Zeichen entsprechen.

## Wie verarbeitet HTML Leerzeichen?

Es ist ein häufiger Mythos, dass "HTML Leerzeichen ignoriert", was nicht stimmt: **HTML bewahrt alle Leerzeichentexteinhalte so, wie Sie sie im Quellcode geschrieben haben.** Als Markup-Sprache erzeugt HTML ein {{Glossary("DOM", "DOM")}}, in dem alle Leerzeichen im Textinhalt bewahrt werden. Diese können über DOM-APIs wie [`Node.textContent`](/de/docs/Web/API/Node/textContent) abgerufen und manipuliert werden. Wenn HTML Leerzeichen aus dem DOM entfernen würde, könnte CSS, eine nachgelagerte Rendering-Engine, die auf dem DOM arbeitet, diese nicht mehr mit der {{cssxref("white-space")}} Eigenschaft bewahren.

> [!NOTE]
> Um klarzustellen: Wir sprechen über Leerzeichen _zwischen HTML-Tags_, die im DOM zu Textknoten werden. Alle Leerzeichen _innerhalb eines Tags_ (zwischen den spitzen Klammern, jedoch nicht als Teil eines Attributwerts) sind nur Teil der HTML-Syntax und erscheinen nicht im DOM.

> [!NOTE]
> Aufgrund der Magie des HTML-Parsings (Zitat aus der [DOM-Spezifikation](https://dom.spec.whatwg.org/#introduction-to-the-dom)) gibt es bestimmte Stellen, an denen Leerzeichen ignoriert werden könnten. Beispielsweise werden Leerzeichen zwischen den `<html>` und `<head>` öffnenden Tags oder zwischen den `</body>` und `</html>` schließenden Tags ignoriert und erscheinen nicht im DOM. Außerdem wird beim Parsen des Textinhalts des {{HTMLElement("pre")}} Elements ein einzelnes führendes Zeilenumbruchszeichen entfernt. Diese Randfälle ignorieren wir.
>
> Darüber hinaus _normalisiert_ der HTML-Parser bestimmte Leerzeichen](https://html.spec.whatwg.org/multipage/parsing.html#preprocessing-the-input-stream): Er ersetzt CR- und {{Glossary("CRLF", "CRLF")}}-Sequenzen mit einem einzelnen LF. CR-Zeichen können jedoch auch entweder über {{Glossary("Character_reference", "Zeichenreferenzen")}} oder JavaScript in das DOM eingefügt werden, sodass die CSS-Leerstellenverarbeitungsregeln immer noch definieren müssen, wie mit ihnen umzugehen ist.

Nehmen Sie das folgende Dokument als Beispiel:

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

Der DOM-Baum dazu sieht folgendermaßen aus:

![Der DOM-Baum, der ein einfaches HTML-Dokument darstellt](dom-string.png)

Beachten Sie, dass:

- Einige Textknoten nur Leerzeichen enthalten.
- Andere Textknoten Leerzeichen am Anfang oder Ende haben können.

> [!NOTE]
> [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) unterstützt das Hervorheben von Textknoten, was es einfacher macht, genau zu sehen, welche Knoten Leerzeichen enthalten. Reine Leerzeichenknoten sind mit einem "whitespace"-Label gekennzeichnet.

Das Bewahren von Leerzeichen-Zeichen im DOM ist in vielerlei Hinsicht nützlich, kann aber auch bestimmte Layouts schwerer umsetzbar machen und Probleme für Entwickler verursachen, die über DOM-Knoten iterieren möchten. Wir werden diese Probleme und einige Lösungsmöglichkeiten später in der [Lösung von häufigen Problemen mit Leerzeichen-Knoten](#lösen_von_häufigen_problemen_mit_leerzeilenknoten) erläutern.

## Wie verarbeitet CSS Leerzeichen?

Wenn das DOM an CSS zur Darstellung übergeben wird, werden die Leerzeichen standardmäßig größtenteils entfernt. Dies bedeutet, dass die Formatierung Ihres Codes für den Endbenutzer nicht sichtbar ist — das Erstellen von Raum um und in Elementen ist die Aufgabe von CSS.

```html-nolint live-sample___html-whitespace
<!doctype html>

  <h1>      Hello      World!     </h1>
```

Dieser Quellcode enthält ein paar Zeilenumbrüche nach dem `doctype` und eine Menge Leerzeichenzeichen vor, nach und im `<h1>`-Element. Aber der Browser ignoriert diese Leerzeichen und zeigt einfach die Worte "Hello World!" an, als ob diese Zeichen überhaupt nicht existieren würden:

{{EmbedLiveSample("html-whitespace")}}

CSS ignoriert die meisten, aber nicht alle Leerzeichen-Zeichen. In diesem Beispiel existiert ein Leerzeichen zwischen "Hello" und "World!", wenn die Seite in einem Browser dargestellt wird. CSS verwendet [einen speziellen Algorithmus](https://drafts.csswg.org/css-text-4/#white-space-processing), um zu entscheiden, welche Leerzeichen für den Benutzer irrelevant sind und wie sie entfernt oder transformiert werden. Wir werden in den nächsten Abschnitten erklären, wie diese Verarbeitung funktioniert.

### Zusammenfallen und Transformation

Betrachten wir ein Beispiel. Um die Leerzeichen-Zeichen deutlicher zu machen, haben wir auch einen Kommentar hinzugefügt, um alle Leerzeichen als ◦, alle Tabs als ⇥ und alle Zeilenumbrüche als ⏎ darzustellen:

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

Dieses Beispiel wird im Browser folgendermaßen dargestellt:

{{EmbedLiveSample('ex-inline')}}

Das `<h1>`-Element enthält:

- Einen Textknoten (bestehend aus einigen Leerzeichen, dem Wort "Hello", einem Zeilenumbruch und einigen Tabs).
- Ein Inline-Element (`<span>`, das ein Leerzeichen und das Wort "World!" enthält).
- Einen weiteren Textknoten (mit einem Tab und Leerzeichen nach dem `<span>`).

Da dieses `<h1>`-Element nur Inline-Elemente enthält, etabliert es einen [Inline-Formatierungskontext](/de/docs/Web/CSS/Guides/Inline_layout/Inline_formatting_context). Dies ist einer der mehreren Layout-Renderkontexte, die Browser-Engines verwenden, um Inhalte auf der Seite anzuordnen.

In diesem Inline-Formatierungskontext werden Leerzeichen-Zeichen wie folgt verarbeitet:

> [!NOTE]
> Dieser Algorithmus kann über die {{cssxref("white-space-collapse")}} Eigenschaft (oder ihre Kurzform {{cssxref("white-space")}}) konfiguriert werden. Wir beginnen mit der Annahme ihres Standardwerts (`white-space-collapse: collapse`), dann betrachten wir, wie verschiedene Eigenschaftswerte diesen Algorithmus beeinflussen.

1. Zuerst werden alle Leerzeichen und Tabs unmittelbar vor und nach einem Zeilenumbruch ignoriert. Wenn wir also unser vorheriges Beispiel-Markup nehmen:

   ```html-nolint
   <h1>◦◦◦Hello◦⏎
   ⇥⇥⇥⇥<span>◦World!</span>⇥◦◦</h1>
   ```

   ...und diese erste Regel anwenden, erhalten wir:

   ```html-nolint
   <h1>◦◦◦Hello⏎
   <span>◦World!</span>⇥◦◦</h1>
   ```

2. Anschließend werden aufeinanderfolgende Zeilenumbrüche zu einem einzigen Zeilenumbruch zusammengefasst. Wir haben in diesem Beispiel keine.
3. Danach werden Zeilen im Quellcode durch Entfernen aller verbleibenden Zeilenumbruchszeichen zu einzelnen Zeilen zusammengefasst. Sie werden entweder in Leerzeichen (U+0020) umgewandelt oder einfach entfernt, je nach dem Kontext vor und nach dem Umbruch. Die genaue Wahl zwischen den beiden ist browser- und sprachabhängig. In unserem Beispiel hier im Englischen (wo Leerzeichen zwischen Wörter trennen) können wir erwarten, dass alle Zeilenumbrüche "in" Leerzeichen umgewandelt werden. Also erhalten wir:

   ```html-nolint
   <h1>◦◦◦Hello◦<span>◦World!</span>◦◦◦</h1>
   ```

   Bemerkenswerterweise werden in Sprachen, die keine Worttrennzeichen haben, wie Chinesisch, Zeilen ohne Zwischenraum verbunden. Also:

   ```html-nolint
   <div>你好
   世界</div>
   ```

   könnte ohne Zwischenräume als "你好世界" wiedergegeben werden, abhängig von den Heuristiken des Browsers.

4. Danach werden alle Tab-Zeichen in Leerzeichen umgewandelt, sodass das Beispiel zu:

   ```html-nolint
   <h1>◦◦◦Hello⏎
   <span>◦World!</span>◦◦◦</h1>
   ```

5. Danach wird jedes Leerzeichen, das unmittelbar einem anderen Leerzeichen folgt (auch über zwei separate Inline-Elemente hinweg), ignoriert, sodass wir mit:

   ```html-nolint
   <h1>◦Hello◦<span>World!</span>◦</h1>
   ```

Dies ist der Grund, warum die Besucher der Webseite den Ausdruck "Hello World!" sauber geschrieben oben auf der Seite sehen, anstatt ein merkwürdig eingerücktes "Hello", gefolgt von einem noch merkwürdiger eingerückten "World!" in der nächsten Zeile.

Nach diesen Schritten verarbeitet der Browser Zeilenumbruch und bidirektionalen Text, den wir hier ignorieren. Beachten Sie, dass nach dem öffnenden `<h1>`-Tag und vor dem schließenden `</h1>`-Tag immer noch Leerzeichen übrig sind, die im Browser jedoch nicht gerendert werden. Dies behandeln wir als Nächstes, wenn jede Zeile angelegt ist.

Unterschiedliche {{cssxref("white-space-collapse")}} Werte überspringen unterschiedliche Schritte dieses Algorithmus:

- `preserve` und `break-spaces`: der gesamte Algorithmus wird übersprungen, und es erfolgt keine Leerraumreduzierung oder -transformation.
- `preserve-breaks`: Schritte 2 und 3 werden übersprungen, und Zeilenumbrüche werden erhalten.
- `preserve-spaces`: Der gesamte Algorithmus wird übersprungen und durch einen einzelnen Schritt ersetzt, um jedes Tab- oder Zeilenumbruchszeichen in ein Leerzeichen zu konvertieren.

Zusammengefasst werden verschiedene Leerzeichen-Zeichen wie folgt reduziert und umgewandelt:

- Tabs werden in der Regel in Leerzeichen umgewandelt.
- Wenn Segmentumbrüche reduziert werden sollen:
  - Sequenzen von Segmentumbrüchen werden zu einem einzelnen Segmentumbruch reduziert.
  - Sie werden in Sprachen, die Wörter mit Leerzeichen trennen (wie Englisch), zu Leerzeichen umgewandelt oder in Sprachen, die keine Worttrennung mit Leerzeichen haben (wie Chinesisch), vollständig entfernt.
- Wenn Leerzeichen reduziert werden sollen:
  - Leerzeichen oder Tabs vor oder nach Segmentumbrüchen werden entfernt.
  - Sequenzen von Leerzeichen werden zu einem einzelnen Leerzeichen reduziert.
- Wenn Leerzeichen beibehalten werden, werden Sequenzen von Leerzeichen als nicht trennend behandelt, außer dass sie am Ende jeder Sequenz weich umschlagen - das heißt, die nächste Zeile beginnt immer mit dem nächsten Nicht-Leerzeichen-Zeichen. Im Falle des `break-spaces` Wertes könnte jedoch ein weicher Umbruch nach jedem Leerzeichen auftreten, sodass die nächste Zeile mit einem oder mehreren Leerzeichen beginnen kann.

### Kürzen und Positionieren

In sowohl [Inline-](/de/docs/Web/CSS/Guides/Inline_layout/Inline_formatting_context) als auch [Block-](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) Formatierungskontexten werden Elemente in _Zeilen_ angelegt. In einem Inline-Formatierungskontext werden Zeilen durch Textumbrüche erstellt. In einem Block-Formatierungskontext hingegen bildet jeder Block seine eigene Zeile. Wenn jede Zeile angelegt wird, werden Leerzeichen weiter verarbeitet. Lassen Sie uns anhand eines Beispiels erklären, wie dies funktioniert.

In diesem Beispiel haben wir wie zuvor die Leerzeichen-Zeichen in einem Kommentar markiert. Wir haben drei Textknoten, die nur Leerzeichen enthalten: einer vor dem ersten `<div>`, einer zwischen den zwei `<div>` und einer nach dem zweiten `<div>`.

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

Dies wird wie folgt gerendert:

{{EmbedLiveSample('ex-block')}}

Die Leerzeichen in diesem Beispiel werden wie folgt behandelt:

> [!NOTE]
> Dieser Algorithmus kann über die {{cssxref("white-space-collapse")}} Eigenschaft (oder ihre Kurzform {{cssxref("white-space")}}) konfiguriert werden. Wir starten mit der Annahme ihres Standardwerts (`white-space-collapse: collapse`) und sehen uns dann an, wie unterschiedliche Eigenschaftswerte diesen Algorithmus beeinflussen.

1. Zuerst werden die Leerzeichen auf dieselbe Weise [reduziert](#zusammenfallen_und_transformation), wie wir es im vorherigen Abschnitt gesehen haben, was dies:

   ```html-nolint
   <body>⏎
   ⇥<div>⇥Hello⇥</div>⏎
   ⏎
   ◦◦◦<div>◦◦World!◦◦</div>◦◦⏎
   </body>
   ```

   ...in dies verwandelt:

   ```html-nolint
   <body>◦<div>◦Hello◦</div>◦<div>◦World!◦</div>◦</body>
   ```

   Die Zeilen werden dann gemäß dem von `<body>` etablierten Block-Formatierungskontext angelegt. In diesem Beispiel wird jeder der fünf Kindknoten von `<body>` als eine separate Zeile angelegt. (Jede Zeile in diesem Codeblock steht für eine Zeile im gerenderten Layout, nicht für eine Zeile in unserem ursprünglichen HTML-Code):

   ```html-nolint
   <body>
   ◦
   <div>◦Hello◦</div>
   ◦
   <div>◦World!◦</div>
   ◦
   </body>
   ```

   Beachten Sie, dass, wenn die Zeilen zu lang werden, jede Zeile umgebrochen und weitere Zeilen erstellt werden können. In Wirklichkeit bestimmen Browser den Inhalt der Zeilen, während die Zeilen angelegt werden. Den Teil, wie der Textumbruch funktioniert, überspringen wir hier.

2. Sequenzen von Leerzeichen am Anfang einer Zeile werden entfernt, also wird das Beispiel zu:

   ```html-nolint
   <body>

   <div>Hello◦</div>

   <div>World!◦</div>

   </body>
   ```

3. Jedes Tab, das zu diesem Zeitpunkt beibehalten wird, wird gemäß {{cssxref("tab-size")}} gerendert. Dies kann nur mit `white-space-collapse` auf `preserve` oder `break-spaces` passieren, weil alle anderen Einstellungen Tabs in Leerzeichen umwandeln.
4. Sequenzen von Leerzeichen am Ende einer Zeile werden entfernt, sodass das oben stehende zu:

   ```html-nolint
   <body>

   <div>Hello</div>

   <div>World!</div>

   </body>
   ```

Die drei leeren Zeilen, die wir jetzt haben, werden im endgültigen Layout keinen Platz einnehmen, da sie keinen sichtbaren Inhalt enthalten. Deshalb haben wir am Ende nur zwei Zeilen, die Platz auf der Seite einnehmen. Die Leute, die die Webseite ansehen, sehen die Wörter "Hello" und "World!" auf zwei separaten Zeilen, genau so, wie man erwarten würde, dass zwei `<div>`-Elemente angelegt werden. Browser ignorieren im Wesentlichen alle Leerzeichen, die im HTML-Code enthalten waren.

Unterschiedliche {{cssxref("white-space-collapse")}} Werte überspringen unterschiedliche Schritte dieses Algorithmus:

- `preserve` und `break-spaces`: Der gesamte Algorithmus wird, bis auf Schritt 3, übersprungen, sodass keine Leerzeichen-Kompaktierung oder -Transformation erfolgt.
- `preserve-spaces`: Der gesamte Algorithmus wird übersprungen, sodass Leerzeichen-Zeichen am Anfang und Ende der Zeilen beibehalten werden.
- `preserve-breaks`: Derselbe Algorithmus wird angewendet wie beim `collapse`-Wert.

## Wie verarbeiten DOM-APIs Leerzeichen?

Wie bereits erwähnt, werden [Leerzeichen im DOM beibehalten](#how_does_html_process_whitespace). Das bedeutet, dass, wenn Sie [`Node.textContent`](/de/docs/Web/API/Node/textContent) abrufen, Sie den Textinhalt so erhalten, wie Sie ihn im HTML-Quellcode geschrieben haben, und wenn Sie [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) abrufen, Sie alle Textknoten erhalten, einschließlich derjenigen, die nur Leerzeichen enthalten.

Nicht alle DOM-APIs bewahren Leerzeichen; einige APIs befassen sich von vornherein mit dem _gerenderten Text_. Zum Beispiel gibt [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) den Text genau so zurück, wie er gerendert wurde, mit allen zusammengestrichenen und gekürzten Leerzeichen. [`Selection.toString()`](/de/docs/Web/API/Selection/toString) gibt den Text so zurück, wie er eingefügt würde, was in der Regel bedeutet, dass Leerzeichen zusammengestrichen wurden. In Firefox (das Leerzeichen zwischen chinesischen Zeichen reduziert, wie im Abschnitt [Zusammenfallen und Transformation](#zusammenfallen_und_transformation) oben erwähnt) werden die zusammengestrichenen Leerzeichen sowohl in dem von `toString()` zurückgegebenen String als auch im eingefügten Text beibehalten.

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

## Lösen von häufigen Problemen mit Leerzeilenknoten

Leerzeichenknoten sind für den Webseitenbesucher aufgrund der CSS-Verarbeitungsregeln unsichtbar, können jedoch bei bestimmten Layouts und DOM-Manipulationen, die auf der genauen Struktur des DOM beruhen, stören. Schauen wir uns einige häufige Probleme an und wie man sie löst.

### Verarbeitung von Leerzeichen zwischen Inline- und Inline-Block-Elementen

Sehen wir uns ein Layoutproblem mit Leerzeichen-Knoten an: Abstände zwischen Inline- und Inline-Block-Elementen. Wie wir zuvor bei Inline- und Blockelementen gesehen haben, werden die meisten Leerzeichen-Zeichen ignoriert, aber worttrennende Zeichen wie Leerzeichen bleiben bestehen. Der zusätzliche Leerraum, der tatsächlich im Layout erscheint, ist hilfreich, um die Wörter im Satz zu trennen.

Bei `inline-block`-Elementen wird es interessanter: Diese Elemente verhalten sich außen wie Inline-Elemente und innen wie Blöcke. (Sie werden oft verwendet, um komplexere UI-Teile anzuzeigen, die nebeneinander auf derselben Zeile platziert werden, wie z.B. Navigationsmenüelemente.) Jegliche Leerzeichen zwischen den angrenzenden Inline- oder Inline-Block-Elementen führen zu Leerzeichen im Layout, genau wie die Leerzeichen zwischen Worten im Text. (Dies kann Entwickler überraschen, denn sie sind Blöcke, und Blöcke zeigen normalerweise keine zusätzlichen Leerzeichen an.)

Betrachten Sie dieses Beispiel (wie zuvor haben wir einen Kommentar im HTML-Code hinzugefügt, um die Leerzeichen-Zeichen zu zeigen):

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

Sie wollen wahrscheinlich nicht die Lücken zwischen den Blöcken. Abhängig von Ihrem Anwendungsfall (wie einer Liste von Avataren oder einer horizontalen Reihe von Navigationsschaltflächen) möchten Sie wahrscheinlich, dass die Elemente dicht aneinander anliegen und den Abstand selbst steuern können.

Der HTML-Inspektor der Firefox DevTools kann Textknoten hervorheben und Ihnen auch genau den Bereich zeigen, den die Elemente einnehmen. Dies ist nützlich, um zu prüfen, ob Sie vermuten, dass es zusätzlichen Rand oder unerwarteten Leerraum gibt, die Lücken verursachen.

![Beispiel für das Darstellen von Leerzeichen zwischen Blöcken im HTML-Inspektor der Firefox DevTools](whitespace-devtools.png)

Es gibt ein paar Möglichkeiten, dieses Problem zu umgehen:

- Verwenden Sie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), um die horizontale Liste von Elementen zu erstellen, anstatt eine `inline-block`-Lösung zu versuchen. Flexbox kümmert sich um den Abstand und die Ausrichtung für Sie und ist definitiv die bevorzugte Lösung:

  ```css
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  ```

- Wenn Sie sich auf `inline-block` verlassen müssen, könnten Sie die `font-size` der Liste auf `0` setzen. Dies funktioniert nur, wenn die Blöcke nicht mit `em`-Einheiten dimensioniert sind (da `em` auf `font-size` basiert, hätten die Blöcke dann auch die Größe `0`). `rem`-Einheiten wären hier eine gute Wahl:

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

- Alternativ könnten Sie negativen Rand auf die Listenelemente setzen:

  ```css
  li {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    margin-right: -0.25rem;
  }
  ```

- Sie können dieses Problem auch lösen, indem Sie Leerzeichenknoten zwischen `<li>`-Elementen vermeiden:

  ```html-nolint
  <li>
    ...
  </li><li>
    ...
  </li>
  ```

### Arbeiten mit Leerzeichen im DOM

Wie bereits erwähnt, werden Leerzeichen beim Rendern [zusammengestrichen und gekürzt](#zusammenfallen_und_transformation), bleiben jedoch im DOM erhalten. Dies kann beim Versuch, Manipulationen am [DOM](/de/docs/Web/API/Document_Object_Model) in JavaScript durchzuführen, einige Fallstricke bieten. Wenn Sie beispielsweise eine Referenz zu einem übergeordneten Knoten haben und dessen erstes Kinderelement mit [`Node.firstChild`](/de/docs/Web/API/Node/firstChild) manipulieren möchten, kann ein zwischengeschalteter Leerzeichenknoten direkt nach dem öffnenden übergeordneten Tag Ihnen das falsche Ergebnis liefern. Der Textknoten würde ausgewählt, anstatt des Elements, das Sie anvisieren möchten.

Ein weiteres Beispiel: Wenn Sie etwas mit einem Teil der Elemente basierend darauf tun möchten, ob sie leer sind (keine Kindknoten haben), könnten Sie [`Node.hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes) verwenden. Aber wenn irgendeines dieser Elemente Textknoten enthält, könnten Sie mit falschen Ergebnissen enden.

Der folgende JavaScript-Code zeigt mehrere Funktionen, die den Umgang mit Leerzeichen im DOM erleichtern:

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

Der folgende Code demonstriert die Verwendung der oben beschriebenen Funktionen. Er iteriert über die Kinder eines Elements (dessen Kinder alle Elemente sind), um dasjenige zu finden, dessen Text `"This is the third paragraph"` ist, und ändert dann das Klassenattribut und den Inhalt dieses Absatzes.

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
