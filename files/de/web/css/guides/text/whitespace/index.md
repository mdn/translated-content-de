---
title: Umgang mit Leerzeichen
slug: Web/CSS/Guides/Text/Whitespace
l10n:
  sourceCommit: 54baa6465f5efbf27bc49f1ee2ed570a48a04e05
---

Das Vorhandensein von Leerzeichen im [DOM](/de/docs/Web/API/Document_Object_Model) kann zu Layoutproblemen führen und die Manipulation des Inhaltsbaums auf unerwartete Weise erschweren, abhängig davon, wo sie sich befinden. Dieser Artikel untersucht, wann Schwierigkeiten auftreten können, und betrachtet, was unternommen werden kann, um daraus resultierende Probleme zu mindern.

## Was sind Leerzeichen?

{{Glossary("Whitespace", "Leerzeichen")}} bestehen aus verschiedenen Zeichen in unterschiedlichen Programmierkontexten. [_Dokument-Leerzeichen_](https://drafts.csswg.org/css-text-4/#white-space), soweit die CSS-Regeln zur Leerzeichenverarbeitung betroffen sind, umfassen nur Leerzeichen (U+0020), Tabs (U+0009), Zeilenumbrüche (LF, U+000A) und Wagenrückläufe (CR, U+000D), wobei CR-Zeichen in jeder Hinsicht äquivalent zu Leerzeichen sind. Mit diesen Zeichen können Sie Ihren Code zur besseren Lesbarkeit formatieren. Ein Großteil unseres Quellcodes ist voll von diesen Leerzeichen, und wir neigen dazu, sie nur im Rahmen eines Produktions-Build-Schritts zu entfernen, um die Dateigröße zu verringern.

Beachten Sie, dass diese Liste keine geschützten Leerzeichen (U+00A0, `&nbsp;` in HTML) enthält. Diese Zeichen lösen also kein [Zusammenfallen](#zusammenfallen_und_transformation) aus, weshalb sie häufig verwendet werden, um längere Abstände in HTML zu erzeugen.

CSS definiert auch das Konzept von [_Abschnittswechseln_](https://drafts.csswg.org/css-text-4/#segment-break), die im HTML-Kontext äquivalent zu LF-Zeichen sind.

## Wie verarbeitet HTML Leerzeichen?

Es ist ein weit verbreiteter Mythos, dass "HTML Leerzeichen ignoriert", was nicht stimmt: **HTML bewahrt alle Leerzeichen im Textinhalt so, wie Sie sie im Quellcode geschrieben haben.** Als Markup-Sprache erzeugt HTML ein {{Glossary("DOM", "DOM")}}, in dem alle Leerzeichen im Textinhalt erhalten bleiben und über DOM-APIs wie [`Node.textContent`](/de/docs/Web/API/Node/textContent) abgerufen und manipuliert werden können. Wenn HTML Leerzeichen aus dem DOM entfernen würde, könnte CSS, eine nachgelagerte Rendering-Engine, die auf dem DOM arbeitet, sie nicht mit der {{cssxref("white-space")}}-Eigenschaft erhalten.

> [!NOTE]
> Um klar zu sein: Wir sprechen über Leerzeichen _zwischen HTML-Tags_, die im DOM zu Textknoten werden. Alle Leerzeichen _innerhalb eines Tags_ (zwischen den spitzen Klammern, aber nicht als Teil eines Attributwerts) sind nur Teil der HTML-Syntax und erscheinen nicht im DOM.

> [!NOTE]
> Aufgrund der Magie des HTML-Parsings (Zitat aus der [DOM-Spezifikation](https://dom.spec.whatwg.org/#introduction-to-the-dom)) gibt es bestimmte Stellen, an denen Leerzeichen tatsächlich ignoriert werden könnten. Zum Beispiel werden Leerzeichen zwischen den `<html>`- und `<head>`-Öffnungstags oder zwischen den `</body>`- und `</html>`-Schlusstags ignoriert und erscheinen nicht im DOM. Auch beim Parsen des Textinhalts des {{HTMLElement("pre")}}-Elements wird ein einzelnes führendes Zeilenumbruchzeichen entfernt. Wir ignorieren diese Randfälle.
>
> Darüber hinaus normalisiert der HTML-Parser [gewisse Leerzeichen](https://html.spec.whatwg.org/multipage/parsing.html#preprocessing-the-input-stream): Er ersetzt CR- und {{Glossary("CRLF", "CRLF")}}-Sequenzen durch einen einzelnen LF. Allerdings können CR-Zeichen auch über {{Glossary("Character_reference", "Zeichenreferenzen")}} oder JavaScript ins DOM eingefügt werden, weshalb die CSS-Leerzeichen-Verarbeitungsregeln weiterhin definieren müssen, wie sie zu handhaben sind.

Nehmen Sie zum Beispiel das folgende Dokument:

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

Der DOM-Baum dazu sieht so aus:

![Der DOM-Baum, der ein einfaches HTML-Dokument darstellt](dom-string.png)

Beachten Sie, dass:

- Einige Textknoten nur Leerzeichen enthalten.
- Andere Textknoten Leerzeichen am Anfang oder Ende haben können.

> [!NOTE]
> [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) unterstützt das Hervorheben von Textknoten, was es einfacher macht, genau zu erkennen, welche Knoten Leerzeichen enthalten. Reine Leerzeichennoten sind mit einem "Leerzeichen"-Label markiert.

Das Beibehalten von Leerzeichen im DOM ist in vielerlei Hinsicht nützlich, kann aber auch bestimmte Layouts erschweren und Probleme für Entwickler verursachen, die über DOM-Knoten iterieren möchten. Diese Probleme und einige Lösungen werden wir später im Abschnitt [Lösungen für häufige Probleme mit Leerzeichenknoten](#lösungen_für_häufige_probleme_mit_leerzeichenknoten) betrachten.

## Wie verarbeitet CSS Leerzeichen?

Wenn das DOM zur Darstellung an CSS übergeben wird, werden die Leerzeichen standardmäßig weitgehend entfernt. Das bedeutet, dass die Formatierung Ihres Codes für den Endbenutzer nicht sichtbar ist—das Erstellen von Platz um und innerhalb von Elementen ist die Aufgabe von CSS.

```html-nolint live-sample___html-whitespace
<!doctype html>

  <h1>      Hello      World!     </h1>
```

Dieser Quellcode enthält ein paar Zeilenumbrüche nach dem `doctype` und eine Menge Leerzeichen vor, nach und innerhalb des `<h1>`-Elements. Aber der Browser ignoriert diese Leerzeichen und zeigt einfach die Wörter "Hello World!" an, als ob diese Zeichen überhaupt nicht existierten:

{{EmbedLiveSample("html-whitespace")}}

CSS ignoriert die meisten, aber nicht alle Leerzeichen. In diesem Beispiel existiert eines der Leerzeichen zwischen "Hello" und "World!" weiterhin, wenn die Seite im Browser gerendert wird. CSS verwendet [einen bestimmten Algorithmus](https://drafts.csswg.org/css-text-4/#white-space-processing), um zu entscheiden, welche Leerzeichen für den Benutzer irrelevant sind und wie sie entfernt oder transformiert werden. Wie diese Verarbeitung funktioniert, werden wir in den nächsten Abschnitten erläutern.

### Zusammenfallen und Transformation

Schauen wir uns ein Beispiel an. Um die Leerzeichen deutlicher zu machen, haben wir auch einen Kommentar hinzugefügt, der alle Leerzeichen als ◦, alle Tabs als ⇥ und alle Zeilenumbrüche als ⏎ zeigt:

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

- Einen Textknoten (bestehend aus einigen Leerzeichen, dem Wort "Hello", einem Zeilenumbruch und einigen Tabs).
- Ein Inline-Element (`<span>`, das ein Leerzeichen und das Wort "World!" enthält).
- Einen weiteren Textknoten (mit einem Tab und Leerzeichen nach dem `<span>`).

Da dieses `<h1>`-Element nur inline-Elemente enthält, erstellt es einen [Inline-Formatierungskontext](/de/docs/Web/CSS/Guides/Inline_layout/Inline_formatting_context). Dies ist einer der mehreren Layout-Rendering-Kontexte, die Browser-Engines verwenden, um Inhalte auf der Seite anzuordnen.

In diesem Inline-Formatierungskontext werden Leerzeichen wie folgt verarbeitet:

> [!NOTE]
> Dieser Algorithmus kann über die {{cssxref("white-space-collapse")}}-Eigenschaft (oder deren Kurzschreibweise {{cssxref("white-space")}}) konfiguriert werden. Wir beginnen damit, den Standardwert (`white-space-collapse: collapse`) anzunehmen und sehen dann, wie sich verschiedene Eigenschaftswerte auf diesen Algorithmus auswirken.

1. Zuerst werden alle Leerzeichen und Tabs unmittelbar vor und nach einem Zeilenumbruch ignoriert. Wenn wir also unser vorheriges Markup-Beispiel nehmen:

   ```html-nolint
   <h1>◦◦◦Hello◦⏎
   ⇥⇥⇥⇥<span>◦World!</span>⇥◦◦</h1>
   ```

   ...und diese erste Regel anwenden, erhalten wir:

   ```html-nolint
   <h1>◦◦◦Hello⏎
   <span>◦World!</span>⇥◦◦</h1>
   ```

2. Als Nächstes werden aufeinanderfolgende Zeilenumbrüche zu einem einzigen Zeilenumbruch zusammengefasst. Wir haben keine in diesem Beispiel.
3. Danach werden Zeilen im Quellcode durch Entfernen verbleibender Zeilenumbruchzeichen zu einzelnen Zeilen zusammengefügt. Sie werden entweder in Leerzeichen (U+0020) umgewandelt oder einfach entfernt, abhängig vom Kontext vor und nach der Unterbrechung. Die genaue Wahl zwischen den beiden ist browser- und sprachabhängig. In unserem Beispiel hier auf Englisch (wo Leerzeichen Worte trennen), können wir erwarten, dass alle Zeilenumbrüche in Leerzeichen "transformiert" werden. Daher enden wir mit:

   ```html-nolint
   <h1>◦◦◦Hello◦<span>◦World!</span>⇥◦◦</h1>
   ```

   Bemerkenswerterweise werden in Sprachen, die keine Worttrenner haben, wie Chinesisch, Zeilen ohne dazwischenliegendes Leerzeichen zusammengefügt. Daher:

   ```html-nolint
   <div>你好
   世界</div>
   ```

   könnte je nach Heuristik des Browsers als "你好世界" ohne Leerzeichen dazwischen gerendert werden.

4. Danach werden alle Tab-Zeichen in Leerzeichen umgewandelt, sodass das Beispiel wird:

   ```html-nolint
   <h1>◦◦◦Hello◦<span>◦World!</span>◦◦◦</h1>
   ```

5. Danach wird jedes Leerzeichen, das unmittelbar einem anderen Leerzeichen folgt (sogar über zwei separate Inline-Elemente hinweg), ignoriert, sodass wir enden mit:

   ```html-nolint
   <h1>◦Hello◦<span>World!</span>◦</h1>
   ```

Deshalb sehen die Besucher der Webseite den Ausdruck "Hello World!" schön oben auf der Seite, anstatt ein merkwürdig eingerücktes "Hello", gefolgt von einem noch merkwürdiger eingerückten "World!" in der nächsten Zeile.

Nach diesen Schritten verarbeitet der Browser Zeilenumbruch und bidirektionalen Text, was wir hier ignorieren werden. Beachten Sie, dass immer noch Leerzeichen nach dem öffnenden `<h1>`-Tag und vor dem schließenden `</h1>`-Tag verbleiben, aber diese werden im Browser nicht gerendert. Das behandeln wir als Nächstes, da jede Zeile angeordnet wird.

Verschiedene {{cssxref("white-space-collapse")}}-Werte überspringen unterschiedliche Schritte dieses Algorithmus:

- `preserve` und `break-spaces`: Der gesamte Algorithmus wird übersprungen, und es findet kein Zusammenfallen oder Transformieren von Leerzeichen statt.
- `preserve-breaks`: Schritte 2 und 3 werden übersprungen, und Zeilenumbrüche werden beibehalten.
- `preserve-spaces`: Der gesamte Algorithmus wird übersprungen und durch einen einzigen Schritt ersetzt, um jedes Tab- oder Zeilenumbruchzeichen in ein Leerzeichen zu konvertieren.

Im Wesentlichen werden verschiedene Leerzeichen wie folgt zusammengefasst und transformiert:

- Tabs werden in der Regel in Leerzeichen umgewandelt.
- Wenn Abschnittswechsel reduziert werden sollen:
  - Abfolgen von Abschnittswechseln werden zu einem einzigen Abschnittswechsel reduziert.
  - Sie werden in Sprachen, die Wörter mit Leerzeichen trennen (wie Englisch), in Leerzeichen umgewandelt oder in Sprachen, die Wörter nicht mit Leerzeichen trennen (wie Chinesisch), vollständig entfernt.
- Wenn Leerzeichen reduziert werden sollen:
  - Leerzeichen oder Tabs vor oder nach Abschnittswechseln werden entfernt.
  - Abfolgen von Leerzeichen werden zu einem einzigen Leerzeichen zusammengefasst.
- Wenn Leerzeichen beibehalten werden, werden Abfolgen von Leerzeichen als nicht trennend behandelt, außer dass sie am Ende jeder Sequenz weich umgebrochen werden — das heißt, die nächste Zeile beginnt immer mit dem nächsten Nicht-Leerzeichen-Zeichen. Im Fall des `break-spaces`-Werts könnte jedoch ein weicher Umbruch potenziell nach jedem Leerzeichen erfolgen, sodass die nächste Zeile mit einem oder mehreren Leerzeichen beginnen kann.

### Trimmen und Positionieren

In sowohl [Inline-](/de/docs/Web/CSS/Guides/Inline_layout/Inline_formatting_context) als auch [Block-](/de/docs/Web/CSS/Guides/Display/Block_formatting_context)-Formatierungskontexten werden Elemente in _Zeilen_ angeordnet. In einem Inline-Formatierungskontext werden Zeilen durch Umbruch des Textes erstellt. In einem Block-Formatierungskontext hingegen bildet jeder Block seine eigene Zeile. Während jede Zeile angeordnet wird, werden Leerzeichen weiter verarbeitet. Sehen wir uns ein Beispiel an, um zu erklären, wie das funktioniert.

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

Das wird wie folgt dargestellt:

{{EmbedLiveSample('ex-block')}}

Die Leerzeichen in diesem Beispiel werden wie folgt gehandhabt:

> [!NOTE]
> Dieser Algorithmus kann über die {{cssxref("white-space-collapse")}}-Eigenschaft (oder deren Kurzschreibweise {{cssxref("white-space")}}) konfiguriert werden. Wir beginnen damit, den Standardwert (`white-space-collapse: collapse`) anzunehmen und sehen dann, wie sich verschiedene Eigenschaftswerte auf diesen Algorithmus auswirken.

1. Zuerst werden die Leerzeichen [zusammengefasst](#zusammenfallen_und_transformation), wie wir es im vorherigen Abschnitt gesehen haben, was bewirkt, dass dies:

   ```html-nolint
   <body>⏎
   ⇥<div>⇥Hello⇥</div>⏎
   ⏎
   ◦◦◦<div>◦◦World!◦◦</div>◦◦⏎
   </body>
   ```

   ...in das hier verwandelt wird:

   ```html-nolint
   <body>◦<div>◦Hello◦</div>◦<div>◦World!◦</div>◦</body>
   ```

   Zeilen werden dann gemäß dem Block-Formatierungskontext angeordnet, der durch `<body>` etabliert wird. In diesem Beispiel wird jeder der fünf Kindknoten von `<body>` als separate Zeile angeordnet. (Jede Zeile in diesem Codeblock stellt eine Zeile im gerenderten Layout dar, nicht eine Zeile in unserem ursprünglichen HTML-Code):

   ```html-nolint
   <body>
   ◦
   <div>◦Hello◦</div>
   ◦
   <div>◦World!◦</div>
   ◦
   </body>
   ```

   Beachten Sie, dass, wenn die Zeilen zu lang werden, jede Linie umgebrochen und mehrzeilige Linien erstellt werden können. In Wirklichkeit bestimmen Browser den Inhalt der Zeilen, während die Zeilen angeordnet werden. Wir überspringen den Teil über das Arbeiten mit Textumbruch.

2. Abfolgen von Leerzeichen am Anfang einer Zeile werden entfernt, sodass das Beispiel wird:

   ```html-nolint
   <body>

   <div>Hello◦</div>

   <div>World!◦</div>

   </body>
   ```

3. Jedes Tab, das zu diesem Zeitpunkt erhalten bleibt, wird entsprechend {{cssxref("tab-size")}} gerendert. Dies kann nur mit `white-space-collapse`, das auf `preserve` oder `break-spaces` gesetzt ist, passieren, weil alle anderen Einstellungen Tabs in Leerzeichen umwandeln.
4. Abfolgen von Leerzeichen am Ende einer Zeile werden entfernt, sodass das Obige wird:

   ```html-nolint
   <body>

   <div>Hello</div>

   <div>World!</div>

   </body>
   ```

Die drei leeren Zeilen, die wir jetzt haben, werden im endgültigen Layout keinen Platz einnehmen, da sie keinen sichtbaren Inhalt enthalten. Wir enden also mit nur zwei Zeilen, die auf der Seite Platz einnehmen. Die Leute, die die Webseite besuchen, sehen die Wörter "Hello" und "World!" auf zwei separaten Zeilen, genauso wie man es erwarten würde, dass zwei `<div>`s angeordnet werden. Browser ignorieren im Grunde alle Leerzeichen, die im HTML-Code enthalten waren.

Verschiedene {{cssxref("white-space-collapse")}}-Werte überspringen unterschiedliche Schritte dieses Algorithmus:

- `preserve` und `break-spaces`: Der gesamte Algorithmus wird übersprungen, außer Schritt 3, sodass kein Zusammenfallen oder Transformation von Leerzeichen stattfindet.
- `preserve-spaces`: Der gesamte Algorithmus wird übersprungen, sodass Leerzeichen am Beginn und Ende von Zeilen erhalten bleiben.
- `preserve-breaks`: Der gleiche Algorithmus wird angewendet wie mit dem `collapse`-Wert.

## Wie verarbeiten DOM-APIs Leerzeichen?

Wie bereits erwähnt, werden [Leerzeichen im DOM erhalten](#how_does_html_process_whitespace). Das bedeutet, dass, wenn Sie [`Node.textContent`](/de/docs/Web/API/Node/textContent) abrufen, Sie den Textinhalt genau so erhalten, wie Sie ihn im HTML-Quellcode geschrieben haben, und wenn Sie [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) abrufen, erhalten Sie alle Textknoten, einschließlich jener, die nur Leerzeichen enthalten.

Nicht alle DOM-APIs bewahren Leerzeichen; einige APIs befassen sich explizit mit dem _dargestellten Text_. Beispielsweise gibt [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) den Text genau so zurück, wie er gerendert wird, mit allen zusammengefalteten und getrimmten Leerzeichen. [`Selection.toString()`](/de/docs/Web/API/Selection/toString) gibt den Text zurück, wie er eingefügt würde, was in der Regel bedeutet, dass Leerzeichen zusammengefaltet werden. In Firefox (wo Leerzeichen zwischen chinesischen Zeichen zusammengefaltet werden, wie im Abschnitt [Zusammenfallen und Transformation](#zusammenfallen_und_transformation) oben erwähnt) werden die zusammengefalteten Leerzeichen jedoch sowohl in dem von `toString()` zurückgegebenen String als auch im eingefügten Text weiterhin erhalten.

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

## Lösungen für häufige Probleme mit Leerzeichenknoten

Leerzeichenknoten sind für den Website-Besucher aufgrund der CSS-Verarbeitungsregeln unsichtbar, können jedoch bestimmte Layouts und DOM-Manipulationen behindern, die auf die genaue Struktur des DOM angewiesen sind. Lassen Sie uns einige häufige Probleme und deren Lösungen betrachten.

### Verarbeitung von Leerzeichen zwischen Inline- und Inline-Block-Elementen

Betrachten wir ein Layoutproblem mit Leerzeichenknoten: Leerzeichen zwischen Inline- und Inline-Block-Elementen. Wie wir zuvor bei Inline- und Block-Elementen gesehen haben, werden die meisten Leerzeichen ignoriert, aber worttrennende Zeichen wie Leerzeichen bleiben erhalten. Die zusätzlichen Leerzeichen, die ins Layout gelangen, sind hilfreich, um die Wörter im Satz zu trennen.

Mit `inline-block`-Elementen wird es interessanter: Diese Elemente verhalten sich außen wie Inline-Elemente und innen wie Blöcke. (Sie werden häufig verwendet, um komplexere Benutzeroberflächenelemente anzuzeigen, die nebeneinander auf derselben Linie angeordnet sind, wie z.B. Menüpunkte in Navigationsleisten.) Jedes Leerzeichen zwischen benachbarten Inline- oder Inline-Block-Elementen führt zu Leerzeichen im Layout, ähnlich wie die Leerzeichen zwischen Wörtern im Text. (Das kann Entwickler überraschen, da es sich um Blöcke handelt und Blöcke normalerweise keine zusätzlichen Leerzeichen zeigen.)

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

Das wird wie folgt angezeigt:

{{EmbedLiveSample('inline-block')}}

Sie wollen wahrscheinlich nicht die Lücken zwischen den Blöcken. Je nach Anwendungsfall (wie eine Liste von Avataren oder eine horizontale Reihe von Navigationsschaltflächen) möchten Sie wahrscheinlich, dass die Elemente aneinander angrenzen und den Abstand selbst kontrollieren können.

Der HTML-Inspektor von Firefox DevTools kann Textknoten hervorheben und zeigt Ihnen genau den Bereich, den die Elemente einnehmen. Das ist nützlich, um zu überprüfen, ob es extra Ränder oder unerwartete Leerzeichen gibt, die Lücken verursachen.

![Beispiel für die Anzeige von Leerzeichen zwischen Blöcken im HTML-Inspektor der Firefox DevTools](whitespace-devtools.png)

Es gibt einige Möglichkeiten, dieses Problem zu umgehen:

- Verwenden Sie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), um die horizontale Liste von Elementen zu erstellen, anstatt eine `inline-block`-Lösung zu versuchen. Flexbox kümmert sich um Abstände und Ausrichtung für Sie und ist definitiv die bevorzugte Lösung:

  ```css
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  ```

- Wenn Sie auf `inline-block` angewiesen sein müssen, könnten Sie die [`schriftgröße`](/de/docs/Web/CSS/Reference/Properties/font-size) der Liste auf `0` setzen. Das funktioniert nur, wenn die Blöcke nicht mit `em`-Einheiten (da `em` auf der `font-size` basiert, würde auch die Blockgröße letztendlich als `0` gesetzt) dimensioniert sind. Hier wäre die Verwendung von `rem`-Einheiten eine gute Wahl:

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

- Alternativ könnten Sie negative Margen auf den Listenelementen einstellen:

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

Wie bereits erwähnt, werden Leerzeichen beim Rendern [zusammengefallen und getrimmt](#zusammenfallen_und_transformation), im DOM jedoch beibehalten. Das kann einige Tücken präsentieren, wenn man versucht, DOM-Manipulationen mit JavaScript durchzuführen. Angenommen, Sie haben einen Verweis auf einen übergeordneten Knoten und möchten sein erstes Elemente-Kind mit [`Node.firstChild`](/de/docs/Web/API/Node/firstChild) manipulieren, dann gibt ein unvorhergesehener Leerzeichenknoten direkt nach dem öffnenden übergeordneten Tag das falsche Ergebnis. Der Textknoten würde ausgewählt, anstatt das gewünschte Element zu zielen.

Ein weiteres Beispiel: Wenn Sie etwas mit einem Subset von Elementen basierend auf der Tatsache tun möchten, ob sie leer sind (keine Kindknoten haben), könnten Sie [`Node.hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes) verwenden. Aber wenn eines dieser Elemente Textknoten enthält, könnten Sie zu falschen Ergebnissen kommen.

Der folgende JavaScript-Code zeigt mehrere Funktionen, die es erleichtern, mit Leerzeichen im DOM umzugehen:

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

Der folgende Code demonstriert die Verwendung der obigen Funktionen. Er iteriert über die Kinder eines Elements (dessen Kinder alle Elemente sind), um dasjenige zu finden, dessen Text `"This is the third paragraph"` ist, und ändert dann das Klassenattribut und den Inhalt dieses Abschnitts.

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
