---
title: Umgang mit Leerzeichen
slug: Web/CSS/Guides/Text/Whitespace
l10n:
  sourceCommit: 32bdfdb82cf91ce9942b694286dec62be2cc20aa
---

Das Vorhandensein von Leerzeichen im [DOM](/de/docs/Web/API/Document_Object_Model) kann Layoutprobleme verursachen und die Manipulation des Inhaltsbaums auf unerwartete Weise erschweren, je nachdem, wo sie sich befinden. Dieser Artikel untersucht, wann Schwierigkeiten auftreten können, und was getan werden kann, um die resultierenden Probleme zu verringern.

## Was sind Leerzeichen?

{{Glossary("Whitespace", "Leerzeichen")}}-Zeichen bestehen in unterschiedlichen Programmierkontexten aus verschiedenen Zeichen. [_Dokument-Leerzeichen-Zeichen_](https://drafts.csswg.org/css-text-4/#white-space) im Hinblick auf die CSS-Leerzeichenbearbeitungsregeln umfassen nur Leerzeichen (U+0020), Tabulatoren (U+0009), Zeilenumbrüche (LF, U+000A) und Wagenrücklaufzeichen (CR, U+000D), wobei CR-Zeichen in jeder Hinsicht Leerzeichen entsprechen. Diese Zeichen erlauben es Ihnen, Ihren Code zur besseren Lesbarkeit zu formatieren. Ein Großteil unseres Quellcodes ist voll von diesen Leerzeichen, und wir neigen dazu, sie nur als Teil eines Produktions-Build-Schritts zu entfernen, um die Dateigröße zu reduzieren.

Beachten Sie, dass diese Liste nicht die nicht umbruchenden Leerzeichen (U+00A0, `&nbsp;` in HTML) enthält. Solche Zeichen führen zu keinem [Zusammenfallen](#zusammenfallen_und_umwandlung), weshalb sie häufig verwendet werden, um längere Leerzeichen in HTML zu erzeugen.

CSS definiert auch das Konzept der [_Segmentumbruch_](https://drafts.csswg.org/css-text-4/#segment-break), die im Kontext von HTML den LF-Zeichen entsprechen.

## Wie verarbeitet HTML Leerzeichen?

Es ist ein weit verbreiteter Mythos, dass "HTML Leerzeichen ignoriert", was nicht der Fall ist: **HTML bewahrt alle Leerzeichen im Textinhalt so, wie Sie sie im Quellcode geschrieben haben.** Als Auszeichnungssprache erzeugt HTML ein {{Glossary("DOM", "DOM")}}, in dem alle Leerzeichen im Textinhalt erhalten bleiben und über DOM-APIs wie [`Node.textContent`](/de/docs/Web/API/Node/textContent) abgerufen und manipuliert werden können. Wenn HTML Leerzeichen aus dem DOM entfernen würde, dann könnte CSS, eine nachgeschaltete Rendering-Engine, die auf dem DOM arbeitet, diese nicht über die {{cssxref("white-space")}}-Eigenschaft bewahren.

> [!NOTE]
> Um klar zu sein, wir sprechen über Leerzeichen _zwischen HTML-Tags_, die im DOM zu Textknoten werden. Jegliche Leerzeichen _innerhalb eines Tags_ (zwischen den spitzen Klammern, aber nicht als Teil eines Attributwertes) sind nur Teil der HTML-Syntax und erscheinen nicht im DOM.

> [!NOTE]
> Aufgrund der Magie des HTML-Parsings (Zitat aus [DOM-Spezifikation](https://dom.spec.whatwg.org/#introduction-to-the-dom)) gibt es bestimmte Stellen, an denen Leerzeichen ignoriert werden könnten. Beispielsweise werden Leerzeichen zwischen dem `<html>`- und dem `<head>`-Eröffnungstag oder zwischen dem `</body>`- und dem `</html>`-Schlusstag ignoriert und erscheinen nicht im DOM. Auch beim Parsen des Textinhalts des {{HTMLElement("pre")}}-Elements wird ein einzelnes führendes Zeilenumbruchszeichen entfernt. Diese Randfälle ignorieren wir.
>
> Darüber hinaus normalisiert der HTML-Parser bestimmte Leerzeichen ([Normalize certain whitespaces](https://html.spec.whatwg.org/multipage/parsing.html#preprocessing-the-input-stream)): Er ersetzt CR und {{Glossary("CRLF", "CRLF")}}-Sequenzen durch ein einzelnes LF. CR-Zeichen können jedoch entweder über {{Glossary("Character_reference", "Zeichenreferenzen")}} oder JavaScript ins DOM eingefügt werden, sodass die CSS-Leerzeichenbearbeitungsregeln dennoch definieren müssen, wie sie behandelt werden.

Nehmen wir zum Beispiel das folgende Dokument:

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

Der DOM-Baum sieht dann so aus:

![Der DOM-Baum, der ein einfaches HTML-Dokument darstellt](dom-string.png)

Beachten Sie, dass:

- Einige Textknoten nur aus Leerzeichen bestehen.
- Andere Textknoten möglicherweise Leerzeichen am Anfang oder Ende haben.

> [!NOTE]
> [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) unterstützt das Hervorheben von Textknoten, wodurch Sie genau sehen können, welche Knoten Leerzeichen enthalten. Reine Leerzeichenknoten sind mit einem "whitespace"-Label gekennzeichnet.

Das Beibehalten von Leerzeichen im DOM ist auf viele Arten nützlich, kann jedoch bestimmte Layouts schwieriger umsetzbar machen und Probleme für Entwickler verursachen, die über DOM-Knoten iterieren möchten. Wir werden uns später in dem Abschnitt [Lösungen für häufige Probleme mit Leerzeichenknoten](#lösungen_für_häufige_probleme_mit_leerzeichenknoten) mit diesen Problemen und einigen Lösungen befassen.

## Wie verarbeitet CSS Leerzeichen?

Wenn das DOM an CSS zur Darstellung übergeben wird, werden die Leerzeichen standardmäßig größtenteils entfernt. Das bedeutet, dass die Art und Weise, wie Ihr Code formatiert ist, für den Endbenutzer nicht sichtbar ist — das Schaffen von Platz um und innerhalb von Elementen ist die Aufgabe von CSS.

```html-nolint live-sample___html-whitespace
<!doctype html>

  <h1>      Hello      World!     </h1>
```

Dieser Quellcode enthält ein paar Zeilenumbrüche nach dem `doctype` sowie einige Leerzeichen vor, nach und innerhalb des `<h1>`-Elements. Doch der Browser ignoriert diese Leerzeichen und zeigt einfach die Worte "Hello World!" an, als ob diese Zeichen überhaupt nicht existierten:

{{EmbedLiveSample("html-whitespace")}}

CSS ignoriert die meisten, aber nicht alle Leerzeichen. In diesem Beispiel bleibt eines der Leerzeichen zwischen "Hello" und "World!" erhalten, wenn die Seite im Browser gerendert wird. CSS verwendet [einen spezifischen Algorithmus](https://drafts.csswg.org/css-text-4/#white-space-processing), um zu entscheiden, welche Leerzeichen für den Benutzer irrelevant sind und wie sie entfernt oder umgewandelt werden. Wir werden in den nächsten Abschnitten erklären, wie diese Verarbeitung funktioniert.

### Zusammenfallen und Umwandlung

Schauen wir uns ein Beispiel an. Um die Leerzeichen hervorzuheben, haben wir auch einen Kommentar hinzugefügt, um alle Leerzeichen als ◦, alle Tabs als ⇥ und alle Zeilenumbrüche als ⏎ anzuzeigen:

<!-- markdownlint-disable no-hard_tabs -->

```html-nolint live-sample___ex-inline
<h1>   Hello
        <span> World!</span>    </h1>

<!--
<h1>◦◦◦Hello◦⏎
⇥⇥⇥⇥<span>◦World!</span>⇥◦◦</h1>
-->
```

<!-- markdownlint-enable no-hard_tabs -->

Dieses Beispiel wird im Browser wie folgt dargestellt:

{{EmbedLiveSample('ex-inline')}}

Das `<h1>`-Element enthält:

- Einen Textknoten (bestehend aus einigen Leerzeichen, dem Wort "Hello", einem Zeilenumbruch und einigen Tabs).
- Ein Inline-Element (`<span>`, das ein Leerzeichen und das Wort "World!" enthält).
- Einen weiteren Textknoten (mit einem Tab und Leerzeichen nach dem `<span>`).

Da dieses `<h1>`-Element nur inline-Elemente enthält, wird ein [inline-Formatierungskontext](/de/docs/Web/CSS/Guides/Inline_layout/Inline_formatting_context) erstellt. Dies ist einer der mehreren Layout-Rendering-Kontexte, die Browser-Engines verwenden, um Inhalte auf der Seite anzuordnen.

Innerhalb dieses inline-Formatierungskontexts werden Leerzeichenzeichen wie folgt verarbeitet:

> [!NOTE]
> Dieser Algorithmus kann über die {{cssxref("white-space-collapse")}}-Eigenschaft (oder deren Kurzform {{cssxref("white-space")}}) konfiguriert werden. Wir beginnen mit dem Standardwert (`white-space-collapse: collapse`) und schauen dann, wie sich verschiedene Eigenschaftswerte auf diesen Algorithmus auswirken.

1. Zuerst werden alle Leerzeichen und Tabs unmittelbar vor und nach einem Zeilenumbruch ignoriert. Wenn wir also unser Beispiel-Markup von vorher nehmen:

   ```html-nolint
   <h1>◦◦◦Hello◦⏎
   ⇥⇥⇥⇥<span>◦World!</span>⇥◦◦</h1>
   ```

   ...und diese erste Regel anwenden, erhalten wir:

   ```html-nolint
   <h1>◦◦◦Hello⏎
   <span>◦World!</span>⇥◦◦</h1>
   ```

2. Als Nächstes werden aufeinanderfolgende Zeilenumbrüche zu einem einzigen Zeilenumbruch zusammengefasst. In diesem Beispiel haben wir keine.
3. Danach werden die Zeilen im Quellcode zu einer einzigen Zeile verbunden, indem alle verbleibenden Zeilenumbrüche entfernt werden. Sie werden entweder in Leerzeichen (U+0020) umgewandelt oder einfach entfernt, abhängig vom Kontext vor und nach dem Umbruch. Die genaue Auswahl zwischen den beiden ist browser- und sprachabhängig. In unserem Beispiel hier auf Englisch (wo Leerzeichen Wörter trennen), können wir erwarten, dass alle Zeilenumbrüche in Leerzeichen "umgewandelt" werden. Wir enden also mit:

   ```html-nolint
   <h1>◦◦◦Hello◦<span>◦World!</span>⇥◦◦</h1>
   ```

   Bemerkenswert ist, dass in Sprachen, die keine Worttrennzeichen haben, wie Chinesisch, Zeilen ohne trennendes Leerzeichen verbunden werden. Also könnte:

   ```html-nolint
   <div>你好
   世界</div>
   ```

   als "你好世界" ohne Leerzeichen dazwischen dargestellt werden, abhängig von den Heuristiken des Browsers.

4. Als Nächstes werden alle Tabulator-Zeichen in Leerzeichen umgewandelt, sodass das Beispiel wird:

   ```html-nolint
   <h1>◦◦◦Hello◦<span>◦World!</span>◦◦◦</h1>
   ```

5. Danach werden alle Leerzeichen, die unmittelbar auf ein anderes Leerzeichen folgen (auch über zwei separate inline-Elemente hinweg), ignoriert, sodass wir enden mit:

   ```html-nolint
   <h1>◦Hello◦<span>World!</span>◦</h1>
   ```

Deshalb sehen die Besucher der Webseite die Phrase "Hello World!" schön geschrieben oben auf der Seite, anstatt eines seltsam eingerückten "Hello", gefolgt von einem noch seltsamer eingepassten "World!" in der nächsten Zeile.

Nach diesen Schritten verarbeitet der Browser den Zeilenumbruch und den bidirektionalen Text, die wir hier ignorieren werden. Beachten Sie, dass immer noch Leerzeichen nach dem öffnenden `<h1>`-Tag und vor dem schließenden `</h1>`-Tag übrig sind, diese aber im Browser nicht angezeigt werden. Wir werden das im nächsten Abschnitt behandeln, wenn jede Zeile ausgelegt wird.

Verschiedene {{cssxref("white-space-collapse")}}-Werte überspringen unterschiedliche Schritte dieses Algorithmus:

- `preserve` und `break-spaces`: Der gesamte Algorithmus wird übersprungen und es erfolgt kein Zusammenfallen oder Transformation der Leerzeichen.
- `preserve-breaks`: Schritte 2 und 3 werden übersprungen, und Zeilenumbrüche bleiben erhalten.
- `preserve-spaces`: Der gesamte Algorithmus wird übersprungen und durch einen einzigen Schritt ersetzt, um jeden Tab oder Zeilenumbruch in ein Leerzeichen umzuwandeln.

Zusammengefasst werden verschiedene Leerzeichen in folgender Weise zusammengefallen und transformiert:

- Tabs werden generell in Leerzeichen umgewandelt.
- Wenn Segmentumbrüche zusammengefallen werden sollen:
  - Werden sie zu einem einzigen Segmentumbruch zusammengefasst.
  - Sie werden in Sprachen, die Wörter mit Leerzeichen trennen (wie Englisch), zu Leerzeichen umgewandelt oder in Sprachen, die Wörter nicht mit Leerzeichen trennen (wie Chinesisch), vollständig entfernt.
- Wenn Leerzeichen zusammengefallen werden sollen:
  - Werden Leerzeichen oder Tabs vor oder nach Segmentumbrüchen entfernt.
  - Sequentielle Leerzeichen werden zu einem einzigen Leerzeichen zusammengefasst.
- Wenn Leerzeichen beibehalten werden, werden Reihen von Leerzeichen als nicht umbrechend behandelt, außer dass sie am Ende jeder Sequenz weich umschlagen - das heißt, die nächste Zeile beginnt immer mit dem nächsten Nicht-Leerzeichen-Zeichen. Im Falle des `break-spaces`-Werts könnte jedoch ein weiches Umbruchpotential nach jedem Leerzeichen auftreten, sodass die nächste Zeile mit einem oder mehreren Leerzeichen beginnen könnte.

### Kürzen und Positionieren

Sowohl in [inline](/de/docs/Web/CSS/Guides/Inline_layout/Inline_formatting_context)- als auch in [block](/de/docs/Web/CSS/Guides/Display/Block_formatting_context)-Formatierungskontexten werden Elemente in _Zeilen_ angeordnet. In einem inline-Formatierungskontext werden Zeilen durch Textumbruch erstellt. In einem block-Formatierungskontext hingegen bildet jeder Block seine eigene Zeile. Während jede Zeile angeordnet wird, werden Leerzeichen weiterverarbeitet. Schauen wir uns ein Beispiel an, um zu erklären, wie dies funktioniert.

In diesem Beispiel, wie zuvor, haben wir die Leerzeichen in einem Kommentar gekennzeichnet. Wir haben drei Textknoten, die nur aus Leerzeichen bestehen: einen vor dem ersten `<div>`, einen zwischen den 2 `<div>`s und einen nach dem zweiten `<div>`.

<!-- markdownlint-disable no-hard_tabs -->

```html-nolint live-sample___ex-block
<body>
  <div>  Hello  </div>

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

<!-- markdownlint-enable no-hard_tabs -->

Dies wird wie folgt gerendert:

{{EmbedLiveSample('ex-block')}}

Die Leerzeichen in diesem Beispiel werden wie folgt behandelt:

> [!NOTE]
> Dieser Algorithmus kann über die {{cssxref("white-space-collapse")}}-Eigenschaft (oder deren Kurzform {{cssxref("white-space")}}) konfiguriert werden. Wir beginnen mit dem Standardwert (`white-space-collapse: collapse`) und schauen dann, wie sich verschiedene Eigenschaftswerte auf diesen Algorithmus auswirken.

1. Zuerst werden die Leerzeichen [zusammengefallen](#zusammenfallen_und_umwandlung), und zwar auf die gleiche Weise wie im vorherigen Abschnitt, sodass sich dies:

   ```html-nolint
   <body>⏎
   ⇥<div>⇥Hello⇥</div>⏎
   ⏎
   ◦◦◦<div>◦◦World!◦◦</div>◦◦⏎
   </body>
   ```

   ...in dies umwandelt:

   ```html-nolint
   <body>◦<div>◦Hello◦</div>◦<div>◦World!◦</div>◦</body>
   ```

   Zeilen werden dann entsprechend dem block-Formatierungskontext, der durch `<body>` erstellt wird, angeordnet. In diesem Beispiel wird jedes der fünf Kindelemente von `<body>` als separate Zeile dargestellt. (Jede Zeile in diesem Codeblock entspricht einer Zeile im gerenderten Layout, nicht einer Zeile in unserem ursprünglichen HTML-Code):

   ```html-nolint
   <body>
   ◦
   <div>◦Hello◦</div>
   ◦
   <div>◦World!◦</div>
   ◦
   </body>
   ```

   Beachten Sie, dass, wenn die Zeilen zu lang werden, jede Zeile umgebrochen werden kann, wodurch mehr Zeilen erstellt werden. In der Realität bestimmen Browser den Inhalt der Zeilen, während sie ausgelegt werden. Wir überspringen den Teil über den Textumbruch.

2. Reihen von Leerzeichen am Anfang einer Zeile werden entfernt, sodass das Beispiel wird:

   ```html-nolint
   <body>

   <div>Hello◦</div>

   <div>World!◦</div>

   </body>
   ```

3. Jedes Tab, das zu diesem Zeitpunkt beibehalten wird, wird entsprechend {{cssxref("tab-size")}} dargestellt. Dies kann nur bei `white-space-collapse` auf `preserve` oder `break-spaces` eingestellt geschehen, da alle anderen Einstellungen Tabs in Leerzeichen umwandeln.
4. Reihen von Leerzeichen am Ende einer Zeile werden entfernt, sodass das oben genannte zu dies wird:

   ```html-nolint
   <body>

   <div>Hello</div>

   <div>World!</div>

   </body>
   ```

Die drei leeren Zeilen, die wir jetzt haben, nehmen im endgültigen Layout keinen Platz ein, da sie keinen sichtbaren Inhalt enthalten. Wir enden also mit nur zwei Zeilen, die Platz auf der Seite beanspruchen. Die Besucher der Webseite sehen die Worte "Hello" und "World!" in zwei separaten Zeilen, genau so, wie man es von zwei `<div>`s erwarten würde. Browser ignorieren im Wesentlichen alle Leerzeichen, die im HTML-Code enthalten waren.

Verschiedene {{cssxref("white-space-collapse")}}-Werte überspringen unterschiedliche Schritte dieses Algorithmus:

- `preserve` und `break-spaces`: Der gesamte Algorithmus wird mit Ausnahme von Schritt 3 übersprungen, sodass keine Leerzeichen zusammengefaltet oder transformiert werden.
- `preserve-spaces`: Der gesamte Algorithmus wird übersprungen, sodass Leerzeichen am Anfang und Ende von Zeilen erhalten bleiben.
- `preserve-breaks`: Der gleiche Algorithmus wird wie beim `collapse`-Wert angewendet.

## Wie verarbeiten DOM-APIs Leerzeichen?

Wie zuvor erwähnt, werden [Leerzeichen im DOM beibehalten](#how_does_html_process_whitespace). Das bedeutet, dass, wenn Sie [`Node.textContent`](/de/docs/Web/API/Node/textContent) abrufen, Sie den Textinhalt so erhalten, wie Sie ihn im HTML-Quellcode geschrieben haben, und wenn Sie [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) abrufen, Sie alle Textknoten erhalten, einschließlich derer, die nur aus Leerzeichen bestehen.

Nicht alle DOM-APIs bewahren Leerzeichen; einige APIs befassen sich von Haus aus mit dem _angezeigten Text_. Zum Beispiel, [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) gibt den Text genauso zurück, wie er dargestellt wird, mit allen zusammengefallenen und gekürzten Leerzeichen. [`Selection.toString()`](/de/docs/Web/API/Selection/toString) gibt den Text so zurück, wie er eingefügt würde, was im Allgemeinen bedeutet, dass Leerzeichen zusammengefallen sind. In Firefox (das Leerzeichen zwischen chinesischen Zeichen zusammenfallen lässt, wie im Abschnitt [Zusammenfallen und Umwandlung](#zusammenfallen_und_umwandlung) oben erwähnt), bleiben die zusammengefallenen Leerzeichen sowohl in der durch `toString()` zurückgegebenen Zeichenkette als auch im eingefügten Text beibehalten.

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

Leerzeichenknoten sind für den Webseitenbesucher aufgrund der CSS-Verarbeitungsregeln unsichtbar, können jedoch bestimmte Layouts und DOM-Manipulationen stören, die auf der genauen Struktur des DOMs basieren. Schauen wir uns einige häufige Probleme und deren Lösungen an.

### Leerzeichenverarbeitung zwischen inline- und inline-block-Elementen

Schauen wir uns ein Layoutproblem mit Leerzeichenknoten an: Leerzeichen zwischen inline- und inline-block-Elementen. Wie wir zuvor bei inline- und Blockelementen gesehen haben, werden die meisten Leerzeichen ignoriert, aber worttrennende Zeichen wie Leerzeichen bleiben bestehen. Der zusätzliche Leerraum, der das Layout erreicht, ist hilfreich, um die Wörter in einem Satz zu trennen.

Mit `inline-block`-Elementen wird es interessanter: Diese Elemente verhalten sich außen wie inline-Elemente und innen wie Blöcke. (Sie werden häufig verwendet, um komplexere UI-Teile darzustellen, die nebeneinander auf derselben Zeile platziert sind, wie Navigationsmenüelemente.) Jegliche Leerzeichen zwischen benachbarten inline- oder inline-block-Elementen führen zu Leerzeichen im Layout, genau wie die Leerzeichen zwischen Wörtern im Text. (Dies kann Entwickler überraschen, da es sich um Blöcke handelt und Blöcke normalerweise keine zusätzlichen Leerzeichen anzeigen.)

Betrachten wir dieses Beispiel (wie zuvor haben wir einen Kommentar im HTML-Code aufgenommen, um die Leerzeichenzeichen darzustellen):

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

Sie möchten wahrscheinlich nicht die Lücken zwischen den Blöcken. Je nach Anwendungsfall (wie eine Liste von Avataren oder eine horizontale Reihe von Navigationsschaltflächen) möchten Sie wahrscheinlich, dass die Elemente bündig zueinander stehen und Sie den Abstand selbst steuern können.

Der HTML-Inspektor in den Firefox DevTools kann Textknoten hervorheben und Ihnen auch genau den Bereich zeigen, den die Elemente beanspruchen. Das ist nützlich, um zu überprüfen, ob es dort unerwartete Leerzeichen oder zusätzliche Abstände gibt, die Lücken verursachen.

![Beispiel für das Anzeigen von Leerzeichen zwischen Blöcken im HTML-Inspektor der Firefox DevTools](whitespace-devtools.png)

Es gibt einige Möglichkeiten, dieses Problem zu umgehen:

- Verwenden Sie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), um die horizontale Liste der Elemente zu erstellen, anstatt eine `inline-block`-Lösung zu versuchen. Flexbox behandelt Abstände und Ausrichtungen für Sie und ist definitiv die bevorzugte Lösung:

  ```css
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  ```

- Wenn Sie sich auf `inline-block` verlassen müssen, können Sie die {{cssxref("font-size")}} der Liste auf `0` setzen. Dies funktioniert nur, wenn die Blöcke nicht mit `em`-Einheiten dimensioniert sind (da `em` auf `font-size` basiert, würde die Blockgröße auch auf `0` enden). `rem`-Einheiten wären hier eine gute Wahl:

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

- Alternativ könnten Sie negative Margen bei den Listenelementen festlegen:

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

Wie zuvor erwähnt, werden Leerzeichen beim Rendern [zusammengefallen und gekürzt](#zusammenfallen_und_umwandlung), aber im DOM beibehalten. Dies kann einige Fallstricke mit sich bringen, wenn versucht wird, [DOM](/de/docs/Web/API/Document_Object_Model)-Manipulationen in JavaScript durchzuführen. Beispielsweise, wenn Sie einen Referenz auf einen übergeordneten Knoten haben und dessen erstes Kinderelement mit [`Node.firstChild`](/de/docs/Web/API/Node/firstChild) manipulieren möchten, gibt Ihnen ein fehlgeleiteter Leerzeichenknoten direkt nach dem öffnenden Elterntag das falsche Ergebnis. Der Textknoten würde ausgewählt werden, anstelle des Elements, das Sie anvisieren möchten.

Als weiteres Beispiel, wenn Sie etwas mit einer Untermenge von Elementen basierend darauf tun möchten, ob sie leer sind (keine Kindknoten haben), könnten Sie [`Node.hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes) verwenden. Aber wenn eines dieser Elemente Textknoten enthält, könnten Sie falsche Ergebnisse erhalten.

Der folgende JavaScript-Code zeigt mehrere Funktionen, die mit Leerzeichen im DOM umgehen:

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

Der folgende Code zeigt die Verwendung der obigen Funktionen. Er iteriert über die Kinder eines Elements (dessen Kinder alle Elemente sind), um dasjenige zu finden, dessen Text "This is the third paragraph" ist, und ändert dann das Klassenattribut und den Inhalt dieses Absatzes.

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
