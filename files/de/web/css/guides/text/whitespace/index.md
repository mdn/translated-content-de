---
title: Umgang mit Leerzeichen
slug: Web/CSS/Guides/Text/Whitespace
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Das Vorhandensein von Leerzeichen im [DOM](/de/docs/Web/API/Document_Object_Model) kann je nach Platzierung Layoutprobleme verursachen und die Manipulation des Inhaltsbaums auf unerwartete Weise erschweren. Dieser Artikel untersucht, wann Schwierigkeiten auftreten können, und zeigt auf, was getan werden kann, um daraus resultierende Probleme zu mildern.

## Was sind Leerzeichen?

{{Glossary("Whitespace", "Leerzeichen")}}-Zeichen bestehen aus unterschiedlichen Zeichen in verschiedenen Programmiersprachen-Kontexten. [_Dokument-Whitespace-Zeichen_](https://drafts.csswg.org/css-text-4/#white-space), soweit es die CSS-Whitespace-Verarbeitungsregeln betrifft, umfassen nur Leerzeichen (U+0020), Tabs (U+0009), Zeilenumbrüche (LF, U+000A) und Wagenrückläufe (CR, U+000D), wobei CR-Zeichen in jeder Hinsicht Leerzeichen entsprechen. Diese Zeichen ermöglichen es Ihnen, Ihren Code für bessere Lesbarkeit zu formatieren. Ein Großteil unseres Quellcodes ist voll von diesen Leerzeichen und wir neigen dazu, sie nur im Rahmen eines Produktions-Build-Schritts zu entfernen, um die Dateigröße zu reduzieren.

Beachten Sie, dass diese Liste keine nicht trennbaren Leerzeichen (U+00A0, `&nbsp;` in HTML) enthält. Diese Zeichen lösen somit kein [Zusammenfallen](#zusammenfallen_und_transformation) aus, weshalb sie häufig verwendet werden, um längere Abstände in HTML zu erzeugen.

CSS definiert auch das Konzept von [_Segment-Unterbrechungen_](https://drafts.csswg.org/css-text-4/#segment-break), die im Kontext von HTML den LF-Zeichen entsprechen.

## Wie verarbeitet HTML Leerzeichen?

Es ist ein häufiger Mythos, dass „HTML Leerzeichen ignoriert“, was nicht wahr ist: **HTML bewahrt alle Leerzeichen im Textinhalt so, wie Sie sie im Quellcode geschrieben haben.** Als Markup-Sprache erzeugt HTML ein {{Glossary("DOM", "DOM")}}, bei dem alle Leerzeichen im Textinhalt erhalten bleiben, die über DOM-APIs wie [`Node.textContent`](/de/docs/Web/API/Node/textContent) abgerufen und manipuliert werden können. Wenn HTML Leerzeichen aus dem DOM entfernen würde, könnte CSS, eine nachgelagerte Rendering-Engine, die mit dem DOM arbeitet, diese nicht mit der {{cssxref("white-space")}}-Eigenschaft bewahren.

> [!NOTE]
> Um klarzustellen: Wir sprechen hier von Leerzeichen _zwischen HTML-Tags_, die im DOM zu Textknoten werden. Jegliche Leerzeichen _innerhalb eines Tags_ (zwischen den spitzen Klammern, aber nicht als Teil eines Attributwerts) gehören lediglich zur HTML-Syntax und erscheinen nicht im DOM.

> [!NOTE]
> Aufgrund der „Magie“ des HTML-Parsings (Zitat aus der [DOM-Spezifikation](https://dom.spec.whatwg.org/#introduction-to-the-dom)) gibt es bestimmte Stellen, an denen Leerzeichenzeichen ignoriert werden könnten. Zum Beispiel werden Leerzeichen zwischen den öffnenden `<html>`- und `<head>`-Tags oder zwischen den schließenden `</body>`- und `</html>`-Tags ignoriert und erscheinen nicht im DOM. Auch beim Parsen des Textinhalts des {{HTMLElement("pre")}}-Elements wird ein führendes einzelnes Zeilenumbruchszeichen entfernt. Wir ignorieren diese Randfälle.
>
> Darüber hinaus normalisiert der HTML-Parser bestimmte Leerzeichen ([siehe hier](https://html.spec.whatwg.org/multipage/parsing.html#preprocessing-the-input-stream)): Er ersetzt CR- und {{Glossary("CRLF", "CRLF")}}-Sequenzen durch ein einzelnes LF. CR-Zeichen können jedoch auch über {{Glossary("Character_reference", "Zeichenreferenzen")}} oder JavaScript in das DOM eingefügt werden, sodass die CSS-Whitespace-Verarbeitungsregeln weiterhin definieren müssen, wie sie zu behandeln sind.

Betrachten Sie zum Beispiel das folgende Dokument:

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
- Andere Textknoten können Leerzeichen am Anfang oder Ende haben.

> [!NOTE]
> [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) unterstützt das Hervorheben von Textknoten, was es einfacher macht zu sehen, welche Knoten genau Leerzeichen enthalten. Reine Whitespace-Knoten sind mit einem „whitespace“-Label gekennzeichnet.

Das Bewahren von Leerzeichen im DOM ist in vielerlei Hinsicht nützlich, kann aber auch die Implementierung bestimmter Layouts erschweren und Probleme für Entwickler verursachen, die über DOM-Knoten iterieren möchten. Wir werden diese Probleme und einige Lösungen später im Abschnitt [Lösen von häufigen Problemen mit Leerzeichenknoten](#lösen_von_häufigen_problemen_mit_leerzeichenknoten) betrachten.

## Wie verarbeitet CSS Leerzeichen?

Wenn das DOM zur Darstellung an CSS übergeben wird, werden Leerzeichen standardmäßig weitgehend entfernt. Das bedeutet, dass die Art und Weise, wie Ihr Code formatiert ist, für den Endbenutzer nicht sichtbar ist — Platz um und in Elementen zu schaffen, ist die Aufgabe von CSS.

```html-nolint live-sample___html-whitespace
<!doctype html>

  <h1>      Hello      World!     </h1>
```

Dieser Quellcode enthält ein paar Zeilenumbrüche nach dem `doctype` und eine Menge Leerzeichen vor, nach und innerhalb des `<h1>`-Elements. Aber der Browser ignoriert diese Leerzeichen und zeigt einfach die Worte "Hello World!" an, als ob diese Zeichen überhaupt nicht existierten:

{{EmbedLiveSample("html-whitespace")}}

CSS ignoriert die meisten, aber nicht alle, Leerzeichen. In diesem Beispiel existiert eines der Leerzeichen zwischen „Hello“ und „World!“ weiterhin, wenn die Seite in einem Browser gerendert wird. CSS verwendet [einen speziellen Algorithmus](https://drafts.csswg.org/css-text-4/#white-space-processing), um zu entscheiden, welche Leerzeichen für den Benutzer irrelevant sind und wie sie entfernt oder transformiert werden. Wir werden erklären, wie diese Verarbeitung in den nächsten Abschnitten funktioniert.

### Zusammenfallen und Transformation

Schauen wir uns ein Beispiel an. Um die Leerzeichen deutlicher zu machen, haben wir auch einen Kommentar hinzugefügt, um alle Leerzeichen als ◦, alle Tabs als ⇥ und alle Zeilenumbrüche als ⏎ darzustellen:

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

Dieses Beispiel wird im Browser wie folgt dargestellt:

{{EmbedLiveSample('ex-inline')}}

Das `<h1>`-Element enthält:

- Einen Textknoten (bestehend aus einigen Leerzeichen, dem Wort „Hello“, einem Zeilenumbruch und einigen Tabs).
- Ein Inline-Element (`<span>`, das ein Leerzeichen und das Wort „World!“ enthält).
- Einen weiteren Textknoten (mit einem Tab und Leerzeichen nach dem `<span>`).

Da dieses `<h1>`-Element nur Inline-Elemente enthält, erzeugt es einen [Inline-Formatierungskontext](/de/docs/Web/CSS/Guides/Inline_layout/Inline_formatting_context). Dies ist einer der mehreren Layout-Rendering-Kontexte, die Browser-Engines verwenden, um Inhalte auf der Seite anzuordnen.

In diesem Inline-Formatierungskontext werden Leerzeichenzeichen wie folgt verarbeitet:

> [!NOTE]
> Dieser Algorithmus kann über die {{cssxref("white-space-collapse")}}-Eigenschaft (oder deren Kurzform-Eigenschaft {{cssxref("white-space")}}) konfiguriert werden. Wir beginnen mit dem Standardwert (`white-space-collapse: collapse`) und betrachten dann, wie verschiedene Eigenschaftswerte diesen Algorithmus beeinflussen.

1. Zunächst werden alle Leerzeichen und Tabs unmittelbar vor und nach einem Zeilenumbruch ignoriert. Wenn wir also unser vorheriges Markupbeispiel nehmen:

   ```html-nolint
   <h1>◦◦◦Hello◦⏎
   ⇥⇥⇥⇥<span>◦World!</span>⇥◦◦</h1>
   ```

   ...und diese erste Regel anwenden, erhalten wir:

   ```html-nolint
   <h1>◦◦◦Hello⏎
   <span>◦World!</span>⇥◦◦</h1>
   ```

2. Als nächstes werden aufeinanderfolgende Zeilenumbrüche zu einem einzelnen Zeilenumbruch zusammengeführt. In diesem Beispiel haben wir keine.
3. Danach werden Zeilen im Quellcode zu Einzelzeilen zusammengeführt, indem alle verbleibenden Zeilenumbruchszeichen entfernt werden. Sie werden entweder in Leerzeichen (U+0020) umgewandelt oder einfach entfernt, abhängig vom Kontext davor und danach. Die genaue Auswahl zwischen den beiden ist browser- und sprachabhängig. In unserem Beispiel hier im Englischen (wo Leerzeichen Wörter trennen), können wir erwarten, dass alle Zeilenumbrüche in Leerzeichen „umgewandelt“ werden. So landen wir bei:

   ```html-nolint
   <h1>◦◦◦Hello◦<span>◦World!</span>⇥◦◦</h1>
   ```

   Bemerkenswert ist, dass in Sprachen, die keine Worttrenner haben, wie Chinesisch, Zeilen ohne dazwischenliegendes Leerzeichen verbunden werden. So könnte:

   ```html-nolint
   <div>你好
   世界</div>
   ```

   als „你好世界“ ohne jegliche Leerzeichen dazwischen dargestellt werden, abhängig von den Heuristiken des Browsers.

4. Als nächstes werden alle Tab-Zeichen in Leerzeichen umgewandelt, sodass das Beispiel wird:

   ```html-nolint
   <h1>◦◦◦Hello◦<span>◦World!</span>◦◦◦</h1>
   ```

5. Danach wird jedes Leerzeichen, das unmittelbar einem anderen Leerzeichen folgt (auch über zwei separate Inline-Elemente hinweg), ignoriert, sodass wir enden mit:

   ```html-nolint
   <h1>◦Hello◦<span>World!</span>◦</h1>
   ```

Deshalb sehen Besucher der Webseite oben auf der Seite die Phrase „Hello World!“ schön geschrieben, anstatt ein seltsam eingerücktes „Hello“, gefolgt von einem noch seltsamer eingerückten „World!“ auf der nächsten Zeile.

Nach diesen Schritten verarbeitet der Browser den Zeilenumbruch und bidirektionalen Text, was wir hier ignorieren. Beachten Sie, dass nach dem öffnenden `<h1>`-Tag und vor dem schließenden `</h1>`-Tag immer noch Leerzeichen vorhanden sind, die im Browser nicht dargestellt werden. Wir werden das als Nächstes behandeln, da jede Zeile ausgelegt wird.

Unterschiedliche {{cssxref("white-space-collapse")}}-Werte überspringen unterschiedliche Schritte dieses Algorithmus:

- `preserve` und `break-spaces`: Der gesamte Algorithmus wird übersprungen, und es erfolgt keine Zusammenführung oder Transformation der Leerzeichen.
- `preserve-breaks`: Schritte 2 und 3 werden übersprungen, und Zeilenumbrüche bleiben erhalten.
- `preserve-spaces`: Der gesamte Algorithmus wird übersprungen und durch einen einzigen Schritt ersetzt, um jeden Tab oder Zeilenumbruch in ein Leerzeichen umzuwandeln.

Kurz gesagt, unterschiedliche Leerzeichenzeichen werden auf folgende Weise zusammengefallen und transformiert:

- Tabs werden im Allgemeinen in Leerzeichen umgewandelt.
- Wenn Segment-Unterbrechungen zusammenfallen sollen:
  - Sequenzen von Segment-Unterbrechungen werden in eine einzige Segment-Unterbrechung zusammengefasst.
  - Sie werden in Sprachen, die Wörter mit Leerzeichen trennen (wie Englisch), in Leerzeichen umgewandelt oder in Sprachen, die Wörter nicht mit Leerzeichen trennen (wie Chinesisch), ganz entfernt.
- Wenn Leerzeichen zusammenfallen sollen:
  - Leerzeichen oder Tabs vor oder nach Segment-Unterbrechungen werden entfernt.
  - Sequenzen von Leerzeichen werden auf ein einziges Leerzeichen zusammengeführt.
- Wenn Leerzeichen erhalten bleiben, werden Sequenzen von Leerzeichen als ungebrochen behandelt, außer dass sie am Ende jeder Sequenz sanft umgebrochen werden — das heißt, die nächste Zeile beginnt immer mit dem nächsten Nicht-Leerzeichen-Zeichen. Im Fall des `break-spaces`-Wertes könnte jedoch ein sanfter Zeilenumbruch potenziell nach jedem Leerzeichen erfolgen, sodass die nächste Zeile mit einem oder mehreren Leerzeichen beginnen kann.

### Trimmen und Positionierung

In sowohl [Inline-](/de/docs/Web/CSS/Guides/Inline_layout/Inline_formatting_context) als auch [Block-](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) Formatierungskontexten werden Elemente in _Linien_ angeordnet. In einem Inline-Formatierungskontext werden Linien durch Textumbruch erstellt. In einem Block-Formatierungskontext bildet dagegen jeder Block seine eigene Linie. Während jede Linie ausgelegt wird, werden Leerzeichen weiterverarbeitet. Werfen wir einen Blick auf ein Beispiel, um zu erklären, wie das funktioniert.

In diesem Beispiel, wie zuvor, haben wir die Leerzeichen in einem Kommentar markiert. Wir haben drei Textknoten, die nur Leerzeichen enthalten: einen vor dem ersten `<div>`, einen zwischen den 2 `<div>`s und einen nach dem zweiten `<div>`.

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

Dies wird wie folgt dargestellt:

{{EmbedLiveSample('ex-block')}}

Die Leerzeichen in diesem Beispiel werden wie folgt behandelt:

> [!NOTE]
> Dieser Algorithmus kann über die {{cssxref("white-space-collapse")}}-Eigenschaft (oder deren Kurzform-Eigenschaft {{cssxref("white-space")}}) konfiguriert werden. Wir beginnen mit dem Standardwert (`white-space-collapse: collapse`) und betrachten dann, wie verschiedene Eigenschaftswerte diesen Algorithmus beeinflussen.

1. Zuerst werden die Leerzeichen [zusammengefallen](#zusammenfallen_und_transformation) auf die gleiche Weise, wie wir es im vorherigen Abschnitt gesehen haben, was dies:

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

   Linien werden dann gemäß dem durch `<body>` festgelegten Block-Formatierungskontext ausgelegt. In diesem Beispiel wird jeder der fünf untergeordneten Knoten von `<body>` als separate Linie ausgelegt. (Jede Zeile in diesem Codeblock stellt eine Linie in der gerenderten Darstellung dar, nicht eine Zeile in unserem ursprünglichen HTML-Code):

   ```html-nolint
   <body>
   ◦
   <div>◦Hello◦</div>
   ◦
   <div>◦World!◦</div>
   ◦
   </body>
   ```

   Beachten Sie, dass, wenn die Linien zu lang werden, jede Linie umbrochen werden kann und weitere Zeilen erzeugt werden. In Wirklichkeit bestimmen Browser den Inhalt der Linien, während die Linien ausgelegt werden. Wir überspringen den Teil, wie der Textumbruch funktioniert.

2. Sequenzen von Leerzeichen am Anfang einer Zeile werden entfernt, sodass das Beispiel wird:

   ```html-nolint
   <body>

   <div>Hello◦</div>

   <div>World!◦</div>

   </body>
   ```

3. Jeder Tab, der zu diesem Zeitpunkt erhalten bleibt, wird gemäß {{cssxref("tab-size")}} dargestellt. Dies kann nur mit `white-space-collapse` auf `preserve` oder `break-spaces` geschehen, da alle anderen Einstellungen Tabs in Leerzeichen umwandeln.
4. Sequenzen von Leerzeichen am Ende einer Zeile werden entfernt, sodass das oben wird:

   ```html-nolint
   <body>

   <div>Hello</div>

   <div>World!</div>

   </body>
   ```

Die drei leeren Zeilen, die wir jetzt haben, werden in der endgültigen Darstellung keinen Platz beanspruchen, da sie keinen sichtbaren Inhalt enthalten. So enden wir mit nur zwei Zeilen, die auf der Seite Platz einnehmen. Menschen, die die Webseite besuchen, sehen die Wörter „Hello“ und „World!“ auf zwei separaten Zeilen, genauso wie man erwarten würde, dass zwei `<div>`s ausgelegt werden. Browser ignorieren im Wesentlichen alle Leerzeichen, die im HTML-Code enthalten waren.

Unterschiedliche {{cssxref("white-space-collapse")}}-Werte überspringen unterschiedliche Schritte dieses Algorithmus:

- `preserve` und `break-spaces`: Der gesamte Algorithmus wird bis auf Schritt 3 übersprungen, sodass keine Zusammenführung oder Transformation der Leerzeichen stattfindet.
- `preserve-spaces`: Der gesamte Algorithmus wird übersprungen, sodass Leerzeichen am Anfang und Ende von Zeilen erhalten bleiben.
- `preserve-breaks`: Der gleiche Algorithmus wird angewendet wie beim Wert `collapse`.

## Wie verarbeiten DOM-APIs Leerzeichen?

Wie zuvor erwähnt, werden [Leerzeichen im DOM bewahrt](#how_does_html_process_whitespace). Das bedeutet, dass, wenn Sie [`Node.textContent`](/de/docs/Web/API/Node/textContent) abrufen, Sie den Textinhalt genauso erhalten, wie Sie ihn im HTML-Quellcode geschrieben haben, und wenn Sie [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) abrufen, erhalten Sie alle Textknoten, einschließlich derjenigen, die nur Leerzeichen enthalten.

Nicht alle DOM-APIs bewahren Leerzeichen; einige APIs befassen sich designbedingt mit dem _gerenderten Text_. Beispielsweise gibt [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) den Text genau so zurück, wie er gerendert wird, wobei alle Leerzeichen zusammengefallen und getrimmt sind. [`Selection.toString()`](/de/docs/Web/API/Selection/toString) gibt den Text so zurück, wie er eingefügt würde, was im Allgemeinen bedeutet, dass Leerzeichen zusammengefallen sind. In Firefox (das Leerzeichen zwischen chinesischen Zeichen zusammenfaltet, wie im Abschnitt [Zusammenfallen und Transformation](#zusammenfallen_und_transformation) oben erwähnt), werden die zusammengefallenen Leerzeichen jedoch sowohl im von `toString()` zurückgegebenen String als auch im eingefügten Text weiterhin bewahrt.

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

## Lösen von häufigen Problemen mit Leerzeichenknoten

Leerzeichenknoten sind für den Webseitenbesucher aufgrund der CSS-Verarbeitungsregeln unsichtbar, aber sie können bestimmte Layouts und DOM-Manipulationen beeinträchtigen, die auf die genaue Struktur des DOMs angewiesen sind. Schauen wir uns einige häufige Probleme an und wie man sie löst.

### Leerzeichenverarbeitung zwischen Inline- und Inline-Block-Elementen

Betrachten wir ein Layoutproblem mit Leerzeichenknoten: Leerzeichen zwischen Inline- und Inline-Block-Elementen. Wie wir zuvor bei Inline- und Block-Elementen gesehen haben, werden die meisten Leerzeichen ignoriert, aber worttrennende Zeichen wie Leerzeichen bleiben bestehen. Das zusätzliche Leerzeichen, das im Layout bleibt, hilft, die Wörter im Satz zu trennen.

Mit `inline-block`-Elementen wird es interessanter: Diese Elemente verhalten sich nach außen wie Inline-Elemente und intern wie Blöcke. (Sie werden oft verwendet, um komplexere UI-Stücke nebeneinander auf derselben Zeile anzuzeigen, wie Navigationsmenüelemente.) Jedes Leerzeichen zwischen benachbarten Inline- oder Inline-Block-Elementen führt im Layout zu Leerzeichen, genau wie die Leerzeichen zwischen Wörtern im Text. (Dies kann Entwickler überraschen, weil es sich um Blöcke handelt und Blöcke normalerweise keine zusätzlichen Leerzeichen anzeigen.)

Betrachten Sie dieses Beispiel (wie zuvor haben wir einen Kommentar im HTML-Code hinzugefügt, um die Leerzeichenzeichen anzuzeigen):

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

Dies wird wie folgt dargestellt:

{{EmbedLiveSample('inline-block')}}

Sie möchten wahrscheinlich nicht die Abstände zwischen den Blöcken. Abhängig von Ihrem Anwendungsfall (wie einer Liste von Avataren oder einer horizontalen Reihe von Navigationsschaltflächen) möchten Sie wahrscheinlich, dass die Elemente direkt aneinander anschließen, und Sie möchten in der Lage sein, jeden Abstand selbst zu steuern.

Der HTML-Inspektor der Firefox DevTools kann Textknoten hervorheben und Ihnen auch genau den Bereich anzeigen, den die Elemente einnehmen. Dies ist nützlich, um zu überprüfen, ob Sie vermuten, dass zusätzliche Ränder oder unerwartete Leerzeichen Lücken verursachen.

![Beispiel für die Anzeige von Leerzeichen zwischen Blöcken im Firefox DevTools HTML-Inspektor](whitespace-devtools.png)

Es gibt ein paar Möglichkeiten, dieses Problem zu umgehen:

- Verwenden Sie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), um die horizontale Liste von Elementen zu erstellen, anstatt eine `inline-block`-Lösung zu versuchen. Flexbox kümmert sich für Sie um Abstände und Ausrichtungen und ist definitiv die bevorzugte Lösung:

  ```css
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  ```

- Falls Sie auf `inline-block` angewiesen sind, könnten Sie die {{cssxref("font-size")}} der Liste auf `0` setzen. Dies funktioniert nur, wenn die Blöcke nicht mit `em`-Einheiten skaliert sind (da `em` auf `font-size` basiert, würde die Blockgröße ebenfalls auf `0` gesetzt). Die Verwendung von `rem`-Einheiten wäre hier eine gute Wahl:

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

- Alternativ könnten Sie negative Abstände bei den Listenelementen setzen:

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

Wie bereits erwähnt, werden Leerzeichen beim Rendern [zusammengefallen und getrimmt](#zusammenfallen_und_transformation), im DOM jedoch bewahrt. Dies kann einige Fallstricke beim Versuch darstellen, [DOM](/de/docs/Web/API/Document_Object_Model)-Manipulationen in JavaScript durchzuführen. Wenn Sie zum Beispiel eine Referenz auf einen übergeordneten Knoten haben und dessen erstes Element-Kind mit [`Node.firstChild`](/de/docs/Web/API/Node/firstChild) manipulieren möchten, gibt Ihnen ein verirrter Leerzeichenknoten direkt nach dem öffnenden Eltern-Tag das falsche Ergebnis. Der Textknoten würde anstatt des gewünschten Elements ausgewählt.

Ein weiteres Beispiel: Wenn Sie bei einer Teilmenge von Elementen, basierend darauf, ob sie leer sind (keine Knoten haben), etwas tun möchten, könnten Sie [`Node.hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes) verwenden. Aber wenn eines dieser Elemente Textknoten enthält, könnten Sie falsche Ergebnisse erhalten.

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

Der folgende Code demonstriert die Verwendung der obigen Funktionen. Er iteriert über die Kinder eines Elements (dessen Kinder alle Elemente sind), um dasjenige zu finden, dessen Text `"This is the third paragraph"` ist, und ändert dann das Klassenattribut und den Inhalt dieses Absatzes.

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
