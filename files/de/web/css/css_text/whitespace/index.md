---
title: Umgang mit Leerraum
slug: Web/CSS/CSS_text/Whitespace
l10n:
  sourceCommit: 4c2c5febdf57cb0b5bdd5d55fc44b965ff41b10f
---

Das Vorhandensein von Leerraum im [DOM](/de/docs/Web/API/Document_Object_Model) kann je nach Position zu Layoutproblemen führen und die Manipulation des Inhaltsbaums auf unerwartete Weise erschweren. Dieser Artikel untersucht, wann Schwierigkeiten auftreten können, und zeigt, was getan werden kann, um die daraus resultierenden Probleme zu mildern.

## Was ist Leerraum?

{{Glossary("Whitespace", "Leerzeichen")}} bestehen aus unterschiedlichen Zeichen in verschiedenen Programmiersprachen-Kontexten. [_Leerzeichen in Dokumenten_](https://drafts.csswg.org/css-text-4/#white-space) umfassen im Hinblick auf die CSS-Leerraumverarbeitungsregeln nur Leerzeichen (U+0020), Tabulatoren (U+0009), Zeilenumbrüche (LF, U+000A) und Wagenrückläufe (CR, U+000D), wobei CR-Zeichen in jeder Hinsicht den Leerzeichen entsprechen. Diese Zeichen ermöglichen es Ihnen, Ihren Code für die Lesbarkeit zu formatieren. Ein Großteil unseres Quellcodes ist voller dieser Leerzeichen, und wir neigen dazu, sie nur im Rahmen eines Produktions-Build-Schritts zu entfernen, um die Dateigröße zu reduzieren.

Beachten Sie, dass diese Liste keine geschützten Leerzeichen (U+00A0, `&nbsp;` in HTML) enthält. Daher lösen diese Zeichen kein [Zusammenklappen](#zusammenfassen_und_umwandeln) aus, weswegen sie oft verwendet werden, um längere Abstände in HTML zu erzeugen.

CSS definiert auch das Konzept von [_Segmentumbrüchen_](https://drafts.csswg.org/css-text-4/#segment-break), die im Kontext von HTML LF-Zeichen entsprechen.

## Wie verarbeitet HTML Leerraum?

Es ist ein weit verbreiteter Mythos, dass "HTML Leerraum ignoriert", was nicht stimmt: **HTML bewahrt alle Leerzeichen im Textgehalt so, wie Sie sie im Quellcode geschrieben haben.** Als Markup-Sprache produziert HTML ein {{Glossary("DOM", "DOM")}}, in dem alle Leerzeichen im Textgehalt beibehalten werden, die über DOM-APIs wie [`Node.textContent`](/de/docs/Web/API/Node/textContent) abgerufen und manipuliert werden können. Wenn HTML Leerzeichen aus dem DOM entfernen würde, könnte CSS, eine nachgeschaltete Rendering-Engine, die auf dem DOM arbeitet, sie nicht mit der {{cssxref("white-space")}}-Eigenschaft bewahren.

> [!NOTE]
> Um klarzustellen: Wir sprechen von Leerzeichen _zwischen HTML-Tags_, die zu Textknoten im DOM werden. Alle Leerzeichen _innerhalb eines Tags_ (zwischen den spitzen Klammern, aber nicht als Teil eines Attributwerts) sind einfach Teil der HTML-Syntax und erscheinen nicht im DOM.

> [!NOTE]
> Aufgrund der Magie des HTML-Parsings (Zitat aus der [DOM-Spezifikation](https://dom.spec.whatwg.org/#introduction-to-the-dom)) gibt es bestimmte Stellen, an denen Leerzeichen ignoriert werden könnten. Beispielsweise werden Leerzeichen zwischen den öffnenden Tags `<html>` und `<head>` oder zwischen den schließenden Tags `</body>` und `</html>` ignoriert und erscheinen nicht im DOM. Auch beim Parsen des Textinhalts des {{HTMLElement("pre")}}-Elements wird ein einzelnes führendes Zeilenumbruchzeichen entfernt. Diese Randfälle ignorieren wir.
>
> Darüber hinaus normalisiert der HTML-Parser [_bestimmte Leerzeichen_](https://html.spec.whatwg.org/multipage/parsing.html#preprocessing-the-input-stream): Er ersetzt CR- und {{Glossary("CRLF", "CRLF")}}-Sequenzen durch ein einzelnes LF. CR-Zeichen können jedoch entweder über {{Glossary("Character_reference", "Zeichenreferenzen")}} oder JavaScript in das DOM eingefügt werden, sodass die CSS-Leerraumverarbeitungsregeln immer noch definieren müssen, wie diese behandelt werden.

Betrachten Sie das folgende Dokument als Beispiel:

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

Der DOM-Baum für dieses Dokument sieht so aus:

![Der DOM-Baum, der ein einfaches HTML-Dokument darstellt](dom-string.png)

Beachten Sie, dass:

- Einige Textknoten nur Leerzeichen enthalten.
- Andere Textknoten können Leerzeichen am Anfang oder Ende enthalten.

> [!NOTE]
> [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) unterstützt das Hervorheben von Textknoten, was es einfacher macht, genau zu sehen, welche Knoten Leerzeichen enthalten. Reine Leerzeichen-Knoten sind mit einem "whitespace"-Label gekennzeichnet.

Das Beibehalten von Leerzeichen im DOM ist in vielerlei Hinsicht nützlich, kann aber auch bestimmte Layouts schwieriger machen und Probleme für Entwickler verursachen, die über DOM-Knoten iterieren möchten. Wir werden später in diesem Artikel auf diese Probleme und einige Lösungen eingehen, im Abschnitt [Lösen häufiger Probleme mit Leerzeichen-Knoten](#lösen_häufiger_probleme_mit_leerzeichen-knoten).

## Wie verarbeitet CSS Leerraum?

Wenn das DOM an CSS zur Darstellung übergeben wird, wird der Leerraum standardmäßig größtenteils entfernt. Dies bedeutet, dass das Format Ihres Codes für den Endbenutzer nicht sichtbar ist – das Erstellen von Abständen um und in Elementen ist die Aufgabe von CSS.

```html-nolint live-sample___html-whitespace
<!doctype html>

  <h1>      Hello      World!     </h1>
```

Dieser Quellcode enthält ein paar Zeilenumbrüche nach dem `doctype` und eine Menge Leerzeichen vor, nach und innerhalb des `<h1>`-Elements. Aber der Browser ignoriert diese Leerzeichen und zeigt nur die Wörter "Hello World!" an, als ob diese Zeichen überhaupt nicht existierten:

{{EmbedLiveSample("html-whitespace")}}

CSS ignoriert die meisten, aber nicht alle Leerzeichenzeichen. In diesem Beispiel existiert eines der Leerzeichen zwischen "Hello" und "World!" noch, wenn die Seite in einem Browser angezeigt wird. CSS verwendet [einen spezifischen Algorithmus](https://drafts.csswg.org/css-text-4/#white-space-processing), um zu entscheiden, welche Leerzeichen für den Benutzer irrelevant sind und wie sie entfernt oder transformiert werden. Wir werden in den nächsten Abschnitten erklären, wie diese Verarbeitung funktioniert.

### Zusammenfassen und Umwandeln

Schauen wir uns ein Beispiel an. Um die Leerzeichenzeichen deutlicher darzustellen, haben wir auch einen Kommentar hinzugefügt, um alle Leerzeichen als ◦, alle Tabulatoren als ⇥ und alle Zeilenumbrüche als ⏎ zu zeigen:

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

- Einen Textknoten (bestehend aus einigen Leerzeichen, dem Wort "Hello", einem Zeilenumbruch und einigen Tabulatoren).
- Ein Inline-Element (`<span>`, das ein Leerzeichen und das Wort "World!" enthält).
- Einen weiteren Textknoten (mit einem Tabulator und Leerzeichen nach der `<span>`).

Da dieses `<h1>`-Element nur Inline-Elemente enthält, bildet es einen [Inline-Formatierungskontext](/de/docs/Web/CSS/CSS_inline_layout/Inline_formatting_context). Dies ist einer der mehreren Layout-Rendering-Kontexte, die Browser-Engines verwenden, um Inhalte auf der Seite anzuordnen.

Innerhalb dieses Inline-Formatierungskontexts werden Leerzeichenzeichen wie folgt verarbeitet:

> [!NOTE]
> Dieser Algorithmus kann über die Eigenschaft {{cssxref("white-space-collapse")}} konfiguriert werden (oder ihre Kurzform {{cssxref("white-space")}}). Wir beginnen mit dem Standardwert (`white-space-collapse: collapse`), bevor wir ansehen, wie verschiedene Eigenschaftswerte diesen Algorithmus beeinflussen.

1. Zuerst werden alle Leerzeichen und Tabulatoren direkt vor und nach einem Zeilenumbruch ignoriert. Wenn wir unser vorheriges Markup-Beispiel nehmen:

   ```html-nolint
   <h1>◦◦◦Hello◦⏎
   ⇥⇥⇥⇥<span>◦World!</span>⇥◦◦</h1>
   ```

   ...und diese erste Regel anwenden, erhalten wir:

   ```html-nolint
   <h1>◦◦◦Hello⏎
   <span>◦World!</span>⇥◦◦</h1>
   ```

2. Als nächstes werden aufeinanderfolgende Zeilenumbrüche zu einem einzigen Zeilenumbruch zusammengefasst. In diesem Beispiel gibt es keine.
3. Danach werden Zeilen im Quellcode zu Einzelzeilen verbunden, indem alle verbleibenden Zeilenumbruchzeichen entfernt werden. Sie werden entweder in Leerzeichen (U+0020) umgewandelt oder einfach entfernt, abhängig vom Kontext vor und nach dem Umbruch. Die genaue Wahl zwischen den beiden ist browser- und sprachabhängig. In unserem Beispiel hier in Englisch (wo Leerzeichen Wörter trennen), können wir erwarten, dass alle Zeilenumbrüche in Leerzeichen "verwandelt" werden. So enden wir mit:

   ```html-nolint
   <h1>◦◦◦Hello◦<span>◦World!</span>◦◦◦</h1>
   ```

   Bemerkenswerterweise werden in Sprachen, die keine Worttrennzeichen haben, wie Chinesisch, Zeilen ohne Leerzeichen dazwischen verbunden. So könnte:

   ```html-nolint
   <div>你好
   世界</div>
   ```

   je nach den Heuristiken des Browsers als "你好世界" ohne Leerzeichen dazwischen angezeigt werden.

4. Als nächstes werden alle Tabulatorzeichen in Leerzeichen umgewandelt, sodass das Beispiel zu:

   ```html-nolint
   <h1>◦◦◦Hello⏎
   <span>◦World!</span>◦◦◦</h1>
   ```

5. Danach wird jedes Leerzeichen direkt nach einem anderen Leerzeichen (sogar über zwei separate Inline-Elemente hinweg) ignoriert, sodass wir mit:

   ```html-nolint
   <h1>◦Hello◦<span>World!</span>◦</h1>
   ```

Das ist der Grund, warum Besucher der Webseite den Ausdruck "Hello World!" schön an der Spitze der Seite geschrieben sehen, anstatt ein seltsam eingerücktes "Hello" gefolgt von einem noch seltsamer eingerückten "World!" auf der nächsten Linie.

Nach diesen Schritten verarbeitet der Browser Zeilenumbruch- und bidirektionalen Text, auf die wir hier nicht eingehen werden. Beachten Sie, dass noch Leerzeichen nach dem öffnenden `<h1>`-Tag und vor dem schließenden `</h1>`-Tag übrig sind, diese aber im Browser nicht angezeigt werden. Wir behandeln das als Nächstes, während jede Zeile angeordnet wird.

Verschiedene {{cssxref("white-space-collapse")}}-Werte überspringen unterschiedliche Schritte dieses Algorithmus:

- `preserve` und `break-spaces`: Der gesamte Algorithmus wird übersprungen und es findet keine Zuammenfassung oder Umwandlung des Leerzeichens statt.
- `preserve-breaks`: Schritte 2 und 3 werden übersprungen und Zeilenumbrüche werden beibehalten.
- `preserve-spaces`: Der gesamte Algorithmus wird übersprungen und durch einen einzigen Schritt ersetzt, der jeden Tabulator oder Zeilenumbruch in ein Leerzeichen umwandelt.

Zusammengefasst werden verschiedene Leerzeichen auf folgende Weise zusammengefasst und umgewandelt:

- Tabulatoren werden im Allgemeinen in Leerzeichen umgewandelt.
- Wenn Segmentumbrüche zusammengefasst werden sollen:
  - Sequenzen von Segmentumbrüchen werden zu einem einzigen Segmentumbruch zusammengefasst.
  - Sie werden in Sprachen, die Wörter mit Leerzeichen trennen (wie Englisch), in Leerzeichen umgewandelt oder in Sprachen, die Wörter ohne Leerzeichen trennen (wie Chinesisch), vollständig entfernt.
- Wenn Leerzeichen zusammengefasst werden sollen:
  - Leerzeichen oder Tabulatoren vor oder nach Segmentumbrüchen werden entfernt.
  - Sequenzen von Leerzeichen werden zu einem einzigen Leerzeichen zusammengefasst.
- Wenn Leerzeichen beibehalten werden, werden Leerzeichensequenzen als nicht-unterbrechend behandelt, außer dass sie am Ende jeder Sequenz weich umbrochen werden — das bedeutet, dass die nächste Zeile immer mit dem nächsten Nicht-Leerzeichen-Zeichen beginnt. Im Falle des `break-spaces`-Werts könnte jedoch ein weicher Umbruch nach jedem Leerzeichen auftreten, sodass die nächste Zeile mit einem oder mehreren Leerzeichen beginnen kann.

### Kürzen und Positionieren

In sowohl [Inline-](/de/docs/Web/CSS/CSS_inline_layout/Inline_formatting_context) als auch [Block-](/de/docs/Web/CSS/CSS_display/Block_formatting_context) Formatierungskontexten werden Elemente in _Zeilen_ angeordnet. In einem Inline-Formatierungskontext werden Zeilen durch Textumbruch erstellt. In einem Block-Formatierungskontext bildet dagegen jeder Block seine eigene Linie. Während jede Zeile angelegt wird, werden Leerzeichen weiter verarbeitet. Schauen wir uns ein Beispiel an, um zu erklären, wie das funktioniert.

In diesem Beispiel haben wir wie zuvor die Leerzeichenzeichen in einem Kommentar markiert. Wir haben drei Textknoten, die nur Leerzeichen enthalten: einen vor dem ersten `<div>`, einen zwischen den 2 `<div>`s und einen nach dem zweiten `<div>`.

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
> Dieser Algorithmus kann über die Eigenschaft {{cssxref("white-space-collapse")}} konfiguriert werden (oder ihre Kurzform {{cssxref("white-space")}}). Wir beginnen mit dem Standardwert (`white-space-collapse: collapse`), bevor wir ansehen, wie verschiedene Eigenschaftswerte diesen Algorithmus beeinflussen.

1. Zuerst wird der Leerraum [zusammengefasst](#zusammenfassen_und_umwandeln) auf die gleiche Weise wie im vorherigen Abschnitt, wodurch dies:

   ```html-nolint
   <body>⏎
   ⇥<div>⇥Hello⇥</div>⏎
   ⏎
   ◦◦◦<div>◦◦World!◦◦</div>◦◦⏎
   </body>
   ```

   ...zu diesem wird:

   ```html-nolint
   <body>◦<div>◦Hello◦</div>◦<div>◦World!◦</div>◦</body>
   ```

   Die Zeilen werden dann entsprechend dem Block-Formatierungskontext angeordnet, der durch `<body>` gebildet wird. In diesem Beispiel wird jeder der fünf Kindknoten von `<body>` als separate Zeile angelegt. (Jede Zeile in diesem Codeblock stellt eine Zeile im gerenderten Layout dar, nicht eine Zeile in unserem ursprünglichen HTML-Code):

   ```html-nolint
   <body>
   ◦
   <div>◦Hello◦</div>
   ◦
   <div>◦World!◦</div>
   ◦
   </body>
   ```

   Beachten Sie, dass, wenn die Zeilen zu lang werden, jede Zeile umbricht und mehr Zeilen erstellt. In der Realität bestimmen Browser den Inhalt der Zeilen, während die Zeilen angeordnet werden. Wir überspringen den Teil, wie der Textumbruch funktioniert.

2. Leerzeichensequenzen am Anfang einer Zeile werden entfernt, also wird das Beispiel zu:

   ```html-nolint
   <body>

   <div>Hello◦</div>

   <div>World!◦</div>

   </body>
   ```

3. Jeder Tabulator, der zu diesem Zeitpunkt beibehalten wird, wird gemäß {{cssxref("tab-size")}} dargestellt. Dies kann nur geschehen, wenn `white-space-collapse` auf `preserve` oder `break-spaces` gesetzt ist, da alle anderen Einstellungen Tabs in Leerzeichen umwandeln.
4. Leerzeichensequenzen am Ende einer Zeile werden entfernt, sodass das oben genannte zu:

   ```html-nolint
   <body>

   <div>Hello</div>

   <div>World!</div>

   </body>
   ```

Die drei leeren Zeilen, die wir jetzt haben, werden im endgültigen Layout keinen Platz einnehmen, da sie keinen sichtbaren Inhalt enthalten. Wir erhalten also nur zwei Zeilen, die Platz auf der Seite beanspruchen. Personen, die die Webseite besuchen, sehen die Wörter "Hello" und "World!" auf zwei getrennten Zeilen, genauso wie Sie es erwarten würden, dass zwei `<div>`s angeordnet werden. Browser ignorieren im Wesentlichen alle Leerzeichen, die im HTML-Code enthalten waren.

Verschiedene {{cssxref("white-space-collapse")}}-Werte überspringen unterschiedliche Schritte dieses Algorithmus:

- `preserve` und `break-spaces`: Der gesamte Algorithmus wird übersprungen, mit Ausnahme von Schritt 3, sodass keine Zusammenfassung oder Umwandlung des Leerraums stattfindet.
- `preserve-spaces`: Der gesamte Algorithmus wird übersprungen, sodass Leerzeichen am Anfang und Ende von Zeilen erhalten bleiben.
- `preserve-breaks`: Der gleiche Algorithmus wird angewendet wie mit dem Wert `collapse`.

## Wie verarbeiten DOM-APIs Leerzeichen?

Wie bereits erwähnt, [werden Leerzeichen im DOM beibehalten](#how_does_html_process_whitespace). Das bedeutet, dass Sie, wenn Sie [`Node.textContent`](/de/docs/Web/API/Node/textContent) abrufen, den Textinhalt genauso erhalten, wie Sie ihn im HTML-Quellcode geschrieben haben, und wenn Sie [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) abrufen, erhalten Sie alle Textknoten, einschließlich derjenigen, die nur Leerzeichen enthalten.

Nicht alle DOM-APIs bewahren Leerzeichen; einige APIs befassen sich mit dem _gerenderten Text_ aufgrund ihres Designs. Zum Beispiel gibt [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) den Text genauso zurück, wie er dargestellt wird, mit allen zusammengefassten und gekürzten Leerzeichen. [`Selection.toString()`](/de/docs/Web/API/Selection/toString) gibt den Text so zurück, wie er eingefügt würde, was im Allgemeinen bedeutet, dass Leerzeichen zusammengefasst werden. In Firefox (das Leerzeichen zwischen chinesischen Zeichen zusammenklappt, wie im Abschnitt [Zusammenfassen und Umwandeln](#zusammenfassen_und_umwandeln) oben erwähnt) werden die zusammengefassten Leerzeichen sowohl in der Zeichenkette, die von `toString()` zurückgegeben wird, als auch im eingefügten Text beibehalten.

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

## Lösen häufiger Probleme mit Leerzeichen-Knoten

Leerzeichen-Knoten sind für Webseitenbesucher aufgrund der CSS-Verarbeitungsregeln unsichtbar, aber sie können in bestimmten Layouts und DOM-Manipulationen, die auf die genaue Struktur des DOMs angewiesen sind, stören. Lassen Sie uns einige häufige Probleme betrachten und wie sie gelöst werden können.

### Leerraumverarbeitung zwischen Inline- und Inline-Block-Elementen

Betrachten wir ein Layoutproblem mit Leerraumknoten: Leerzeichen zwischen Inline- und Inline-Block-Elementen. Wie wir zuvor bei Inline- und Block-Elementen gesehen haben, werden die meisten Leerraumzeichen ignoriert, aber worttrennende Zeichen wie Leerzeichen bleiben bestehen. Der zusätzliche Leerraum, der zum Layout gelangt, ist hilfreich, um die Wörter im Satz zu trennen.

Mit `inline-block`-Elementen wird es interessanter: Diese Elemente verhalten sich äußerlich wie Inline-Elemente und innerlich wie Blöcke. (Sie werden oft verwendet, um komplexere UI-Elemente darzustellen, die nebeneinander auf derselben Zeile angeordnet sind, wie Navigationsmenüpunkte.) Jeder Leerraum zwischen benachbarten Inline- oder Inline-Block-Elementen resultiert in Leerzeichen im Layout, genau wie die Leerzeichen zwischen Wörtern im Text. (Das kann Entwickler überraschen, weil es sich um Blöcke handelt und Blöcke normalerweise keine zusätzlichen Leerzeichen zeigen.)

Betrachten Sie dieses Beispiel (wie zuvor haben wir einen Kommentar im HTML-Code eingefügt, um die Leerzeichen zu zeigen):

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

Sie wollen wahrscheinlich nicht die Lücken zwischen den Blöcken. Abhängig von Ihrem Anwendungsfall (wie eine Liste von Avataren oder eine horizontale Reihe von Navigationsknöpfen) möchten Sie wahrscheinlich, dass die Elemente bündig zueinander stehen und den Abstand selbst kontrollieren können.

Der HTML-Inspektor von Firefox DevTools kann Textknoten hervorheben und Ihnen auch genau den Bereich zeigen, den die Elemente einnehmen. Dies ist nützlich, um zu überprüfen, ob Sie vermuten, dass es zusätzlichen Rand oder unerwarteten Leerraum gibt, der Lücken verursacht.

![Beispiel für das Anzeigen von Leerzeichen zwischen Blöcken im Firefox DevTools HTML-Inspektor](whitespace-devtools.png)

Es gibt einige Möglichkeiten, dieses Problem zu umgehen:

- Verwenden Sie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), um die horizontale Liste von Elementen zu erstellen, anstatt einer `inline-block`-Lösung. Flexbox behandelt Abstände und Ausrichtung für Sie und ist definitiv die bevorzugte Lösung:

  ```css
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  ```

- Wenn Sie auf `inline-block` angewiesen sein müssen, könnten Sie die [`font-size`](/de/docs/Web/CSS/font-size) der Liste auf `0` setzen. Dies funktioniert nur, wenn die Blöcke nicht mit `em`-Einheiten dimensioniert sind (da `em` auf `font-size` basiert, wäre die Blockgröße auch auf `0` dimensioniert). Die Verwendung von `rem`-Einheiten wäre hier eine gute Wahl:

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

- Alternativ könnten Sie den negativen Rand auf die Listenelemente setzen:

  ```css
  li {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    margin-right: -0.25rem;
  }
  ```

- Sie können dieses Problem auch lösen, indem Sie Leerzeichen-Knoten zwischen `<li>`-Elementen vermeiden:

  ```html-nolint
  <li>
    ...
  </li><li>
    ...
  </li>
  ```

### Arbeiten mit Leerzeichen im DOM

Wie bereits erwähnt, werden Leerzeichen beim Rendern [zusammengefasst und gekürzt](#zusammenfassen_und_umwandeln), im DOM aber beibehalten. Dies kann einige Fallstricke mit sich bringen, wenn man versucht, [DOM](/de/docs/Web/API/Document_Object_Model)-Manipulationen in JavaScript durchzuführen. Wenn Sie beispielsweise eine Referenz auf einen Elternknoten haben und sein erstes untergeordnetes Element mit [`Node.firstChild`](/de/docs/Web/API/Node/firstChild) manipulieren möchten, führt ein unerwarteter Leerraumknoten direkt nach dem öffnenden Elterntag zum falschen Ergebnis. Der Textknoten würde ausgewählt, anstatt des Elements, das Sie anvisieren möchten.

Ein weiteres Beispiel: Wenn Sie etwas mit einer Teilmenge von Elementen basierend darauf machen möchten, ob sie leer sind (keine untergeordneten Knoten haben), könnten Sie [`Node.hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes) verwenden. Wenn jedoch eines dieser Elemente Textknoten enthält, könnten Sie falsche Ergebnisse erhalten.

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

Der folgende Code demonstriert die Verwendung der obigen Funktionen. Er durchläuft die Kinder eines Elements (dessen Kinder alle Elemente sind), um dasjenige zu finden, dessen Text `"Dies ist der dritte Absatz"` ist, und ändert das `class`-Attribut sowie den Inhalt dieses Absatzes.

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
