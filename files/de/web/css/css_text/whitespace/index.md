---
title: Umgang mit Leerzeichen
slug: Web/CSS/CSS_text/Whitespace
l10n:
  sourceCommit: d4a50b63d9afd826e61eb8833e8e6337b5059e8a
---

Das Vorhandensein von Leerzeichen im [DOM](/de/docs/Web/API/Document_Object_Model) kann zu Layoutproblemen führen und die Manipulation des Inhalt-Baums auf unerwartete Weise erschweren, abhängig davon, wo sie sich befinden. Dieser Artikel untersucht, wann Schwierigkeiten auftreten können, und beleuchtet, was getan werden kann, um die resultierenden Probleme abzumildern.

## Was sind Leerzeichen?

{{Glossary("Whitespace", "Leerzeichen")}} umfassen verschiedene Zeichen in unterschiedlichen Programmierkontexten. [_Dokumenten-Leerzeichen_](https://drafts.csswg.org/css-text-4/#white-space), soweit es die CSS-Verarbeitungsregeln für Leerzeichen betrifft, umfassen nur Leerzeichen (U+0020), Tabs (U+0009), Zeilenumbrüche (LF, U+000A) und Wagenrückläufe (CR, U+000D), wobei CR-Zeichen in jeder Hinsicht gleichwertig mit Leerzeichen sind. Diese Zeichen ermöglichen es Ihnen, Ihren Code zur besseren Lesbarkeit zu formatieren. Viel von unserem Quellcode ist voller dieser Leerzeichen und wir neigen dazu, sie nur als Teil eines Produktions-Build-Schrittes zu entfernen, um die Dateigröße zu reduzieren.

Beachten Sie, dass diese Liste keine geschützten Leerzeichen (U+00A0, `&nbsp;` in HTML) enthält. Diese Zeichen lösen kein [Zusammenfallen](#das_zusammenfallen_und_die_transformation) aus, weshalb sie häufig verwendet werden, um größere Abstände in HTML zu erzeugen.

CSS definiert auch das Konzept von [_Segmentumbrüchen_](https://drafts.csswg.org/css-text-4/#segment-break), die im Kontext von HTML den LF-Zeichen entsprechen.

## Wie verarbeitet HTML Leerzeichen?

Es ist ein verbreiteter Mythos, dass „HTML Leerzeichen ignoriert“, was nicht zutrifft: **HTML bewahrt alle Leerzeichentextinhalte so, wie Sie sie im Quellcode geschrieben haben.** Als Auszeichnungssprache erzeugt HTML ein {{Glossary("DOM", "DOM")}}, in dem alle Leerzeichen im Textinhalt erhalten bleiben, die über DOM-APIs wie [`Node.textContent`](/de/docs/Web/API/Node/textContent) abgerufen und manipuliert werden können. Wenn HTML Leerzeichen aus dem DOM entfernen würde, könnte CSS, eine nachgeschaltete Rendering-Engine, die auf dem DOM arbeitet, sie nicht mit der {{cssxref("white-space")}}-Eigenschaft erhalten.

> [!NOTE]
> Um klar zu sein, wir sprechen über Leerzeichen _zwischen HTML-Tags_, die im DOM zu Textknoten werden. Alle Leerzeichen _innerhalb eines Tags_ (zwischen den spitzen Klammern, aber nicht als Teil eines Attributwerts) sind nur Teil der HTML-Syntax und erscheinen nicht im DOM.

> [!NOTE]
> Aufgrund der Magie des HTML-Parsings (Zitat aus der [DOM-Spezifikation](https://dom.spec.whatwg.org/#introduction-to-the-dom)) gibt es bestimmte Stellen, an denen Leerzeichen ignoriert werden könnten. Zum Beispiel werden Leerzeichen zwischen den `<html>` und `<head>` öffnenden Tags oder zwischen den `</body>` und `</html>` schließenden Tags ignoriert und erscheinen nicht im DOM. Auch beim Parsen des Textinhalts des {{HTMLElement("pre")}}-Elements wird ein einzelnes führendes Zeilenumbruchszeichen entfernt. Wir ignorieren diese Grenzfälle.
>
> Darüber hinaus normalisiert der HTML-Parser bestimmte Leerzeichen](https://html.spec.whatwg.org/multipage/parsing.html#preprocessing-the-input-stream): er ersetzt CR- und {{Glossary("CRLF", "CRLF")}}-Sequenzen durch ein einzelnes LF. CR-Zeichen können jedoch auch entweder über {{Glossary("Character_reference", "Zeichenreferenzen")}} oder JavaScript in das DOM eingefügt werden, daher müssen die CSS-Verarbeitungsregeln für Leerzeichen definieren, wie sie gehandhabt werden.

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

Der DOM-Baum dafür sieht folgendermaßen aus:

![Der DOM-Baum, der ein einfaches HTML-Dokument darstellt](dom-string.png)

Beachten Sie:

- Einige Textknoten enthalten nur Leerzeichen.
- Andere Textknoten können Leerzeichen am Anfang oder Ende haben.

> [!NOTE]
> [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) unterstützt das Hervorheben von Textknoten, wodurch es einfacher wird, genau zu sehen, welche Knoten Leerzeichen enthalten. Reine Leerzeichen-Knoten sind mit einem "whitespace"-Label markiert.

Das Bewahren von Leerzeichen im DOM ist in vielerlei Hinsicht nützlich, kann jedoch auch bestimmte Layouts schwieriger zu implementieren machen und Probleme für Entwickler verursachen, die über DOM-Knoten iterieren möchten. Auf diese Probleme und einige Lösungen werden wir später in dem Abschnitt [Probleme mit Leerzeichen-Knoten lösen](#solving_problems_with_whitespace_nodes) eingehen.

## Wie verarbeitet CSS Leerzeichen?

Wenn das DOM zur Darstellung an CSS weitergegeben wird, werden die Leerzeichen größtenteils standardmäßig entfernt. Dies bedeutet, dass die Formatierung Ihres Codes für den Endbenutzer nicht sichtbar ist – das Erstellen von Abständen um und innerhalb von Elementen ist die Aufgabe von CSS.

```html-nolint live-sample___html-whitespace
<!doctype html>

  <h1>      Hello      World!     </h1>
```

Dieser Quellcode enthält ein paar Zeilenumbrüche nach dem `doctype` und jede Menge Leerzeichen vor, nach und innerhalb des `<h1>`-Elements. Aber der Browser ignoriert diese Leerzeichen und zeigt einfach die Wörter "Hello World!" an, als ob diese Zeichen überhaupt nicht existierten:

{{EmbedLiveSample("html-whitespace")}}

CSS ignoriert die meisten, aber nicht alle Leerzeichen. In diesem Beispiel existiert eines der Leerzeichen zwischen „Hello“ und „World!“ noch, wenn die Seite in einem Browser gerendert wird. CSS verwendet [einen spezifischen Algorithmus](https://drafts.csswg.org/css-text-4/#white-space-processing), um zu entscheiden, welche Leerzeichen für den Benutzer irrelevant sind und wie sie entfernt oder transformiert werden. Wir erklären, wie diese Verarbeitung in den nächsten Abschnitten funktioniert.

### Das Zusammenfallen und die Transformation

Schauen wir uns ein Beispiel an. Um die Leerzeichenzeichen deutlicher zu machen, haben wir auch einen Kommentar hinzugefügt, um alle Leerzeichen als ◦, alle Tabs als ⇥ und alle Zeilenumbrüche als ⏎ darzustellen:

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

Dieses Beispiel wird im Browser folgendermaßen gerendert:

{{EmbedLiveSample('ex-inline')}}

Das `<h1>`-Element enthält:

- Einen Textknoten (bestehend aus einigen Leerzeichen, dem Wort "Hello", einem Zeilenumbruch und einigen Tabs).
- Ein Inline-Element (`<span>`, das ein Leerzeichen und das Wort "World!" enthält).
- Einen weiteren Textknoten (mit einem Tab und Leerzeichen nach dem `<span>`).

Da dieses `<h1>`-Element nur Inline-Elemente enthält, stellt es einen [Inline-Formatierungskontext](/de/docs/Web/CSS/CSS_inline_layout/Inline_formatting_context) dar. Dies ist einer der mehreren Layout-Rendering-Kontexte, die Browser-Engines verwenden, um Inhalte auf der Seite anzuordnen.

Innerhalb dieses Inline-Formatierungskontextes werden Leerzeichen wie folgt verarbeitet:

> [!NOTE]
> Dieser Algorithmus kann über die {{cssxref("white-space-collapse")}}-Eigenschaft (oder ihre Kurzeigenschaft {{cssxref("white-space")}}) konfiguriert werden. Wir beginnen mit dem Standardwert (`white-space-collapse: collapse`) und sehen uns dann an, wie unterschiedliche Eigenschaftswerte diesen Algorithmus beeinflussen.

1. Zuerst werden alle Leerzeichen und Tabs, die sich unmittelbar vor und nach einem Zeilenumbruch befinden, ignoriert. Wenn wir also unser vorheriges Beispiel-Markup nehmen:

   ```html-nolint
   <h1>◦◦◦Hello◦⏎
   ⇥⇥⇥⇥<span>◦World!</span>⇥◦◦</h1>
   ```

   ...und diese erste Regel anwenden, erhalten wir:

   ```html-nolint
   <h1>◦◦◦Hello⏎
   <span>◦World!</span>⇥◦◦</h1>
   ```

2. Als nächstes werden aufeinanderfolgende Zeilenumbrüche zu einem einzigen Zeilenumbruch zusammengefasst. Wir haben in diesem Beispiel keine.
3. Als nächstes werden die Zeilen im Quellcode zu einzelnen Zeilen zusammengefügt, indem verbleibende Zeilenumbruchszeichen entfernt werden. Sie werden entweder in Leerzeichen (U+0020) umgewandelt oder je nach Kontext vor und nach dem Umbruch einfach entfernt. Die genaue Wahl zwischen den beiden ist browser- und sprachabhängig. In unserem Beispiel auf Englisch (wo Leerzeichen Wörter trennen), können wir erwarten, dass alle Zeilenumbrüche in Leerzeichen „transformiert“ werden. So landen wir bei:

   ```html-nolint
   <h1>◦◦◦Hello◦<span>◦World!</span>◦◦◦</h1>
   ```

   Bemerkenswert ist, dass in Sprachen, die keine Worttrennzeichen haben, wie Chinesisch, Zeilen ohne Zwischenräume verbunden werden. So:

   ```html-nolint
   <div>你好
   世界</div>
   ```

   könnte abhängig von den Heuristiken des Browsers als "你好世界" ohne Zwischenräume gerendert werden.

4. Als nächstes werden alle Tab-Zeichen in Leerzeichen umgewandelt, sodass das Beispiel wird zu:

   ```html-nolint
   <h1>◦◦◦Hello⏎
   <span>◦World!</span>◦◦◦</h1>
   ```

5. Danach wird jedes Leerzeichen, das direkt einem anderen Leerzeichen folgt (auch über zwei separate Inline-Elemente hinweg), ignoriert, sodass wir bei folgendem Ergebnis landen:

   ```html-nolint
   <h1>◦Hello◦<span>World!</span>◦</h1>
   ```

Deshalb sehen Besucher der Webseite den Satz "Hello World!" schön geschrieben oben auf der Seite anstatt ein seltsam eingerücktes "Hello", gefolgt von einem noch seltsamer eingerückten "World!" in der nächsten Zeile.

Nach diesen Schritten verarbeitet der Browser den Zeilenumbruch und bidirektionalen Text, auf die wir hier nicht näher eingehen. Beachten Sie, dass nach dem öffnenden `<h1>`-Tag und vor dem schließenden `</h1>`-Tag immer noch Leerzeichen übrig sind, aber diese werden nicht im Browser gerendert. Wir werden das als nächstes behandeln, während jede Zeile angelegt wird.

Verschiedene {{cssxref("white-space-collapse")}}-Werte überspringen verschiedene Schritte dieses Algorithmus:

- `preserve` und `break-spaces`: Der gesamte Algorithmus wird übersprungen, und es gibt keine Transformation oder kein Zusammenfallen von Leerzeichen.
- `preserve-breaks`: Schritte 2 und 3 werden übersprungen, und Zeilenumbrüche werden beibehalten.
- `preserve-spaces`: Der gesamte Algorithmus wird übersprungen und durch einen einzigen Schritt ersetzt, der jeden Tab oder Zeilenumbruch in ein Leerzeichen umwandelt.

Kurz gesagt, verschiedene Leerzeichen werden folgendermaßen zusammengefasst und transformiert:

- Tabs werden im Allgemeinen in Leerzeichen umgewandelt.
- Wenn Segmentumbrüche zusammenfallen sollen:
  - Folgen von Segmentumbrüchen werden zu einem einzigen Segmentumbruch zusammengefasst.
  - Sie werden in Sprachen, die Wörter mit Leerzeichen trennen (wie Englisch), in Leerzeichen umgewandelt oder in Sprachen, die Wörter nicht mit Leerzeichen trennen (wie Chinesisch), vollständig entfernt.
- Wenn Leerzeichen zusammenfallen sollen:
  - Leerzeichen oder Tabs vor oder nach Segmentumbrüchen werden entfernt.
  - Folgen von Leerzeichen werden auf ein einziges Leerzeichen reduziert.
- Wenn Leerzeichen beibehalten werden, werden Folgen von Leerzeichen als nicht umbrochen behandelt, außer dass sie am Ende jeder Folge weich umbrochen werden - das heißt, die nächste Zeile beginnt immer mit dem nächsten Nicht-Leerzeichen-Zeichen. Im Fall des `break-spaces`-Wertes könnte jedoch nach jedem Leerzeichen ein weicher Umbruch auftreten, sodass die nächste Zeile mit einem oder mehreren Leerzeichen beginnen kann.

### Kürzen und Positionieren

In sowohl [Inline-](/de/docs/Web/CSS/CSS_inline_layout/Inline_formatting_context) als auch [Blockformatierungs-](/de/docs/Web/CSS/CSS_display/Block_formatting_context) Kontexten werden Elemente in _Zeilen_ angeordnet. In einem Inline-Formatierungskontext werden Zeilen durch Textumbruch erstellt. In einem Block-Formatierungskontext hingegen bildet jeder Block seine eigene Zeile. Während jede Zeile festgelegt wird, werden Leerzeichen weiterverarbeitet. Lassen Sie uns ein Beispiel anschauen, um zu erklären, wie dies funktioniert.

In diesem Beispiel haben wir, wie zuvor, die Leerzeichenzeichen in einem Kommentar markiert. Wir haben drei Textknoten, die nur Leerzeichen enthalten: einen vor dem ersten `<div>`, einen zwischen den beiden `<div>`s und einen nach dem zweiten `<div>`.

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

Dies wird folgendermaßen gerendert:

{{EmbedLiveSample('ex-block')}}

Die Leerzeichen in diesem Beispiel werden folgendermaßen behandelt:

> [!NOTE]
> Dieser Algorithmus kann über die {{cssxref("white-space-collapse")}}-Eigenschaft (oder ihre Kurzeigenschaft {{cssxref("white-space")}}) konfiguriert werden. Wir beginnen mit dem Standardwert (`white-space-collapse: collapse`) und sehen uns dann an, wie unterschiedliche Eigenschaftswerte diesen Algorithmus beeinflussen.

1. Zuerst werden die Leerzeichen [zusammengefasst](#das_zusammenfallen_und_die_transformation) auf die gleiche Weise, wie wir es im vorherigen Abschnitt gesehen haben, was dies in das verwandelt:

   ```html-nolint
   <body>⏎
   ⇥<div>⇥Hello⇥</div>⏎
   ⏎
   ◦◦◦<div>◦◦World!◦◦</div>◦◦⏎
   </body>
   ```

   ...in dies:

   ```html-nolint
   <body>◦<div>◦Hello◦</div>◦<div>◦World!◦</div>◦</body>
   ```

   Zeilen werden dann gemäß dem von `<body>` etablierten Block-Formatierungskontext festgelegt. In diesem Beispiel wird jeder der fünf Knoten von `<body>` als separate Zeile angeordnet. (Jede Zeile in diesem Codeblock stellt eine Zeile im gerenderten Layout dar, nicht eine Zeile in unserem ursprünglichen HTML-Code):

   ```html-nolint
   <body>
   ◦
   <div>◦Hello◦</div>
   ◦
   <div>◦World!◦</div>
   ◦
   </body>
   ```

   Beachten Sie, dass, wenn die Zeilen zu lang werden, jede Zeile umbrochen werden und mehr Zeilen erstellt werden können. In Wirklichkeit bestimmen Browser den Inhalt der Zeilen, während die Zeilen angeordnet werden. Wir überspringen den Teil darüber, wie Textumbruch funktioniert.

2. Folgen von Leerzeichen am Anfang einer Zeile werden entfernt, sodass das Beispiel wird zu:

   ```html-nolint
   <body>

   <div>Hello◦</div>

   <div>World!◦</div>

   </body>
   ```

3. Jedes Tab, das zu diesem Zeitpunkt erhalten bleibt, wird entsprechend {{cssxref("tab-size")}} gerendert. Dies kann nur mit `white-space-collapse` auf `preserve` oder `break-spaces` passieren, da alle anderen Einstellungen Tabs in Leerzeichen umwandeln.
4. Folgen von Leerzeichen am Ende einer Zeile werden entfernt, sodass das oben genannte wird zu:

   ```html-nolint
   <body>

   <div>Hello</div>

   <div>World!</div>

   </body>
   ```

Die drei leeren Zeilen, die wir jetzt haben, werden im endgültigen Layout keinen Platz einnehmen, da sie keinen sichtbaren Inhalt enthalten. So landen wir schließlich bei nur zwei Zeilen, die Platz auf der Seite einnehmen. Die Leute, die die Webseite ansehen, sehen die Wörter "Hello" und "World!" auf zwei separaten Zeilen, genau so, wie Sie erwarten würden, dass zwei `<div>`s angeordnet sind. Browser ignorieren im Wesentlichen alle Leerzeichen, die im HTML-Code enthalten waren.

Verschiedene {{cssxref("white-space-collapse")}}-Werte überspringen verschiedene Schritte dieses Algorithmus:

- `preserve` und `break-spaces`: Der gesamte Algorithmus wird mit Ausnahme von Schritt 3 übersprungen, sodass keine Transformation oder kein Zusammenfallen von Leerzeichen erfolgt.
- `preserve-spaces`: Der gesamte Algorithmus wird übersprungen, sodass Leerzeichen am Anfang und Ende von Zeilen erhalten bleiben.
- `preserve-breaks`: Der gleiche Algorithmus wird mit dem `collapse`-Wert angewendet.

## Wie verarbeiten DOM-APIs Leerzeichen?

Wie bereits erwähnt, werden [Leerzeichen im DOM beibehalten](#how_does_html_process_whitespace). Das bedeutet, dass Sie, wenn Sie [`Node.textContent`](/de/docs/Web/API/Node/textContent) abrufen, den Textinhalt so erhalten, wie Sie ihn im HTML-Quellcode geschrieben haben, und wenn Sie [`Node.childNodes`](/de/docs/Web/API/Node/childNodes) abrufen, erhalten Sie alle Textknoten, einschließlich derjenigen, die nur Leerzeichen enthalten.

Nicht alle DOM-APIs bewahren Leerzeichen; einige APIs befassen sich von Haus aus mit dem _gerenderten Text_. Zum Beispiel gibt [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) den Text genauso zurück, wie er gerendert wurde, mit allen zusammengefallenen und getrimmten Leerzeichen. [`Selection.toString()`](/de/docs/Web/API/Selection/toString) gibt den Text so zurück, wie er eingefügt würde, was im Allgemeinen bedeutet, dass Leerzeichen zusammengefallen sind. In Firefox (das Leerzeichen zwischen chinesischen Zeichen zusammenfallen lässt, wie im Abschnitt [Zusammenfallen und Transformation](#das_zusammenfallen_und_die_transformation) oben erwähnt), bleiben die zusammengefallenen Leerzeichen sowohl in der von `toString()` zurückgegebenen Zeichenkette als auch im eingefügten Text erhalten.

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

## Häufige Probleme mit Leerzeichen-Knoten lösen

Leerzeichen-Knoten sind aufgrund der CSS-Verarbeitungsregeln für den Website-Besucher unsichtbar, aber sie können bestimmte Layouts und DOM-Manipulationen beeinträchtigen, die auf die genaue Struktur des DOMs angewiesen sind. Lassen Sie uns einige häufige Probleme und wie man sie lösen kann betrachten.

### Verarbeitung von Leerzeichen zwischen Inline- und Inline-Block-Elementen

Betrachten wir ein Layoutproblem mit Leerzeichen-Knoten: Leerzeichen zwischen Inline- und Inline-Block-Elementen. Wie wir zuvor bei Inline- und Blockelementen gesehen haben, werden die meisten Leerzeichen ignoriert, aber worttrennende Zeichen wie Leerzeichen bleiben erhalten. Die zusätzlichen Leerzeichen, die es in das Layout schaffen, helfen, die Wörter im Satz zu trennen.

Bei `inline-block`-Elementen wird es interessanter: Diese Elemente verhalten sich nach außen hin wie Inline-Elemente und nach innen hin wie Blöcke. (Sie werden oft verwendet, um komplexere UI-Teile anzuzeigen, die Seite an Seite auf derselben Zeile platziert sind, wie beispielsweise Elemente eines Navigationsmenüs.) Jedes Leerzeichen zwischen benachbarten Inline- oder Inline-Block-Elementen führt zu Leerzeichen im Layout, genau wie die Abstände zwischen Wörtern im Text. (Dies kann Entwickler überraschen, weil es sich um Blöcke handelt und Blöcke normalerweise keine zusätzlichen Leerzeichen anzeigen.)

Betrachten Sie dieses Beispiel (wie zuvor haben wir einen Kommentar im HTML-Code eingefügt, um die Leerzeichenzeichen zu zeigen):

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

Sie möchten wahrscheinlich nicht die Lücken zwischen den Blöcken. Je nach Anwendungsfall (wie eine Liste von Avataren oder eine horizontale Reihe von Navigationsschaltflächen) möchten Sie möglicherweise, dass die Elemente direkt nebeneinander platziert werden und Sie jeden Abstand selbst steuern können.

Der HTML-Inspektor von Firefox DevTools kann Textknoten hervorheben und Ihnen zeigen, welcher Bereich von den Elementen eingenommen wird. Dies ist nützlich, um zu überprüfen, ob es unerwartete Abstände oder zusätzliche Leerzeichen gibt, die Lücken verursachen.

![Beispiel für die Anzeige von Leerzeichen zwischen Blöcken im HTML-Inspektor der Firefox DevTools](whitespace-devtools.png)

Es gibt einige Möglichkeiten, dieses Problem zu umgehen:

- Verwenden Sie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), um die horizontale Liste von Elementen zu erstellen, anstatt eine `inline-block`-Lösung zu versuchen. Flexbox kümmert sich für Sie um Abstände und Ausrichtung und ist definitiv die bevorzugte Lösung:

  ```css
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  ```

- Wenn Sie auf `inline-block` angewiesen sein müssen, könnten Sie die [`font-size`](/de/docs/Web/CSS/font-size) der Liste auf `0` setzen. Dies funktioniert nur, wenn die Blöcke nicht mit `em`-Einheiten dimensioniert werden (da `em` auf `font-size` basiert, würden die Blockgrößen ebenfalls auf `0` dimensioniert werden). Die Verwendung von `rem`-Einheiten wäre hier eine gute Wahl:

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

- Alternativ könnten Sie negative Margins auf den Listenelementen setzen:

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

Wie bereits erwähnt, werden Leerzeichen [zusammengefasst und gekürzt](#das_zusammenfallen_und_die_transformation), wenn sie gerendert werden, aber im DOM beibehalten. Dies kann einige Fallstricke beim Versuch der Manipulation des [DOM](/de/docs/Web/API/Document_Object_Model) in JavaScript darstellen. Zum Beispiel, wenn Sie eine Referenz zu einem übergeordneten Knoten haben und dessen erstes Elementkind mit [`Node.firstChild`](/de/docs/Web/API/Node/firstChild) manipulieren möchten, gibt Ihnen ein unerwarteter Leerzeichen-Knoten direkt nach dem öffnenden übergeordneten Tag das falsche Ergebnis. Der Textknoten würde ausgewählt, anstatt das Element, das Sie ansprechen möchten.

Als weiteres Beispiel, wenn Sie etwas mit einer Teilmenge von Elementen basierend darauf machen möchten, ob sie leer sind (keine Knoten haben), könnten Sie [`Node.hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes) verwenden. Aber wenn eines dieser Elemente Textknoten enthält, könnten Sie falsche Ergebnisse erhalten.

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

Der folgende Code demonstriert die Verwendung der obigen Funktionen. Er iteriert über die Kinder eines Elements (dessen Kinder alle Elemente sind), um das Element zu finden, dessen Text `"This is the third paragraph"` ist, und ändert dann das `class`-Attribut und den Inhalt dieses Absatzes.

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
