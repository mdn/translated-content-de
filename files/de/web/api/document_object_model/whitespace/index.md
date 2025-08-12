---
title: Wie Leerzeichen von HTML, CSS und im DOM behandelt werden
slug: Web/API/Document_Object_Model/Whitespace
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{DefaultAPISidebar("DOM")}}

Das Vorhandensein von Leerzeichen im [DOM](/de/docs/Web/API/Document_Object_Model) kann Layoutprobleme verursachen und die Manipulation des Inhaltsbaums auf unerwartete Weise erschweren, abhängig davon, wo sie sich befinden. Dieser Artikel untersucht, wann Schwierigkeiten auftreten können, und was getan werden kann, um die resultierenden Probleme zu mildern.

## Was sind Leerzeichen?

Leerzeichen sind eine beliebige Zeichenkette, die nur aus Leerzeichen, Tabs oder Zeilenumbrüchen besteht (genauer gesagt, CRLF-Sequenzen, Wagenrückläufe oder Zeilenfeeds). Diese Zeichen ermöglichen es Ihnen, Ihren Code so zu formatieren, dass er für Sie und andere leicht lesbar ist. Tatsächlich enthält ein großer Teil unseres Quellcodes diese Leerzeichen, und wir neigen dazu, sie in einem Produktions-Build-Schritt zu entfernen, um die Download-Größen des Codes zu reduzieren.

### Ignoriert HTML Leerzeichen weitgehend?

Im Fall von HTML werden Leerzeichen weitgehend ignoriert — Leerzeichen zwischen Wörtern werden als einzelnes Zeichen behandelt, und Leerzeichen am Anfang und Ende von Elementen sowie außerhalb von Elementen werden ignoriert. Betrachten Sie das folgende Minimalbeispiel:

```html-nolint
<!doctype html>

  <h1>      Hello      World!     </h1>
```

Dieser Quellcode enthält ein paar Zeilenumbrüche nach dem `doctype` und eine Reihe von Leerzeichen vor, nach und innerhalb des `<h1>`-Elements, aber der Browser scheint sich nicht darum zu kümmern und zeigt einfach die Worte "Hello World!" an, als ob diese Zeichen überhaupt nicht existieren würden:

{{EmbedLiveSample('HTML_largely_ignores_whitespace')}}

Dies ist so, damit Leerzeichen nicht das Layout Ihrer Seite beeinträchtigen. Das Erstellen von Abstand um und innerhalb von Elementen ist die Aufgabe von CSS.

### Was passiert mit Leerzeichen?

Sie verschwinden jedoch nicht einfach.

Alle Leerzeichen, die sich in dem ursprünglichen Dokument außerhalb von HTML-Elementen befinden, sind im DOM vertreten. Dies ist intern notwendig, damit der Editor die Formatierung von Dokumenten beibehalten kann. Das bedeutet, dass:

- Es einige Textknoten geben wird, die nur Leerzeichen enthalten, und
- Einige Textknoten Leerzeichen am Anfang oder Ende haben werden.

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

Der DOM-Baum sieht so aus:

![Der DOM-Baum, der ein einfaches HTML-Dokument darstellt](dom-string.png)

Leerzeichen im DOM zu speichern, ist auf viele Arten nützlich, aber es gibt bestimmte Orte, an denen dies bestimmte Layouts schwieriger macht und Probleme für Entwickler verursacht, die durch die Knoten im DOM iterieren möchten. Wir werden diese und einige Lösungen später untersuchen.

### Wie verarbeitet CSS Leerzeichen?

Die meisten Leerzeichen werden ignoriert, jedoch nicht alle. In dem früheren Beispiel existiert eines der Leerzeichen zwischen "Hello" und "World!" immer noch, wenn die Seite in einem Browser gerendert wird. Es gibt Regeln in der Browser-Engine, die entscheiden, welche Leerzeichen nützlich sind und welche nicht — diese sind zumindest teilweise im [CSS Text Module Level 3](https://drafts.csswg.org/css-text-3/) spezifiziert, besonders die Teile über die [CSS `white-space`-Eigenschaft](https://drafts.csswg.org/css-text-3/#white-space-property) und [Details zur Leerzeichenverarbeitung](https://drafts.csswg.org/css-text-3/#white-space-processing), aber wir bieten auch eine einfachere Erklärung unten an.

#### Beispiel

Nehmen wir ein weiteres Beispiel. Um es einfacher zu machen, haben wir einen Kommentar hinzugefügt, der alle Leerzeichen mit ◦, alle Tabs mit ⇥ und alle Zeilenumbrüche mit ⏎ zeigt:

Dieses Beispiel:

```html-nolint
<h1>   Hello
        <span> World!</span>   </h1>

<!--
<h1>◦◦◦Hello◦⏎
⇥⇥⇥⇥<span>◦World!</span>⇥◦◦</h1>
-->
```

wird im Browser wie folgt gerendert:

{{EmbedLiveSample('Example')}}

#### Erklärung

Das `<h1>`-Element enthält nur Inline-Elemente. Tatsächlich enthält es:

- Einen Textknoten (bestehend aus einigen Leerzeichen, dem Wort "Hello" und einigen Tabs).
- Ein Inline-Element (das `<span>`, das ein Leerzeichen und das Wort "World!" enthält).
- Einen anderen Textknoten (bestehend nur aus Tabs und Leerzeichen).

Deshalb etabliert es, was als [inline formatting context](/de/docs/Web/CSS/CSS_inline_layout/Inline_formatting_context) bezeichnet wird. Dies ist einer der möglichen Layoutdarstellungskontexte, mit denen Browser-Engines arbeiten.

Innerhalb dieses Kontexts kann die Verarbeitung von Leerzeichen wie folgt zusammengefasst werden:

1. Zuerst werden alle Leerzeichen und Tabs unmittelbar vor und nach einem Zeilenumbruch ignoriert, also nehmen wir unser vorheriges Beispiel-Markup:

   ```html-nolint
   <h1>◦◦◦Hello◦⏎
   ⇥⇥⇥⇥<span>◦World!</span>⇥◦◦</h1>
   ```

   ...und wenden diese erste Regel an, erhalten wir:

   ```html-nolint
   <h1>◦◦◦Hello⏎
   <span>◦World!</span>⇥◦◦</h1>
   ```

2. Als Nächstes werden alle Tab-Zeichen als Leerzeichen behandelt, sodass das Beispiel wird zu:

   ```html-nolint
   <h1>◦◦◦Hello⏎
   <span>◦World!</span>◦◦◦</h1>
   ```

3. Danach werden Zeilenumbrüche in Leerzeichen umgewandelt:

   ```html-nolint
   <h1>◦◦◦Hello◦<span>◦World!</span>◦◦◦</h1>
   ```

4. Danach wird jedes Leerzeichen, das unmittelbar auf ein anderes Leerzeichen folgt (sogar über zwei separate Inline-Elemente hinweg), ignoriert, sodass wir enden mit:

   ```html-nolint
   <h1>◦Hello◦<span>World!</span>◦</h1>
   ```

5. Schließlich werden Sequenzen von Leerzeichen am Anfang und Ende eines Elements entfernt, sodass wir letztendlich dies erhalten:

   ```html-nolint
   <h1>Hello◦<span>World!</span></h1>
   ```

Deshalb sehen Besucher der Webseite am oberen Rand der Seite den Satz "Hello World!" schön geschrieben, und nicht ein seltsam eingerücktes "Hello", gefolgt von einem noch seltsamer eingerückten "World!" in der Zeile darunter.

> [!NOTE]
> [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) unterstützen seit Version 52 das Hervorheben von Textknoten, was es einfacher macht zu sehen, in welchen Knoten Leerzeichen enthalten sind. Reine Leerzeichenknoten sind mit einem "whitespace"-Label markiert.

### Leerzeichen in Block-Formatierungskontexten

Oben haben wir nur Elemente betrachtet, die Inline-Elemente enthalten, und Inline-Formatierungskontexte. Wenn ein Element mindestens ein Blockelement enthält, etabliert es stattdessen, was als [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) bezeichnet wird.

In diesem Kontext werden Leerzeichen sehr unterschiedlich behandelt.

#### Beispiel

Sehen wir uns ein Beispiel an, um zu erklären, wie das funktioniert. Wir haben die Leerzeichen wie zuvor markiert.

Wir haben 3 Textknoten, die nur Leerzeichen enthalten, einen vor dem ersten `<div>`, einen zwischen den 2 `<div>`s und einen nach dem zweiten `<div>`.

```html-nolint
<body>
  <div>  Hello  </div>

   <div>  World!   </div>
</body>

<!--
<body>⏎
⇥<div>◦◦Hello◦◦</div>⏎
⏎
◦◦◦<div>◦◦World!◦◦</div>◦◦⏎
</body>
-->
```

Das wird so gerendert:

{{EmbedLiveSample('Example_2')}}

#### Erklärung

Wir können zusammenfassen, wie die Leerzeichen hier behandelt werden, wie folgt (es kann einige geringfügige Unterschiede im genauen Verhalten zwischen den Browsern geben, aber das funktioniert im Wesentlichen so):

1. Da wir uns in einem Block-Formatierungskontext befinden, muss alles ein Block sein, also werden unsere 3 Textknoten auch zu Blöcken, ebenso wie die 2 `<div>`s. Blöcke belegen die gesamte verfügbare Breite und werden übereinander gestapelt, was bedeutet, dass, ausgehend von dem obigen Beispiel:

   ```html-nolint
   <body>⏎
   ⇥<div>◦◦Hello◦◦</div>⏎
   ⏎
   ◦◦◦<div>◦◦World!◦◦</div>◦◦⏎
   </body>
   ```

   ...wir mit einem Layout enden, das aus dieser Liste von Blöcken besteht:

   ```html
   <block>⏎⇥</block>
   <block>◦◦Hello◦◦</block>
   <block>⏎⏎◦◦◦</block>
   <block>◦◦World!◦◦</block>
   <block>◦◦⏎</block>
   ```

2. Dies wird dann weiter vereinfacht, indem die Verarbeitungsregeln für Leerzeichen in Inline-Formatierungskontexten auf diese Blöcke angewendet werden:

   ```html
   <block></block>
   <block>Hello</block>
   <block></block>
   <block>World!</block>
   <block></block>
   ```

3. Die 3 leeren Blöcke, die wir jetzt haben, werden im endgültigen Layout keinen Platz einnehmen, weil sie nichts enthalten, sodass wir am Ende nur 2 Blöcke haben, die Platz auf der Seite einnehmen. Leute, die die Webseite anschauen, sehen die Wörter "Hello" und "World!" auf 2 separaten Linien, wie man es bei 2 `<div>`s erwarten würde. Die Browser-Engine hat im Wesentlichen alle Leerzeichen ignoriert, die im Quellcode hinzugefügt wurden.

## Leerzeichen zwischen Inline- und Inline-Block-Elementen

Schauen wir uns einige Probleme an, die aufgrund von Leerzeichen auftreten können, und was man dagegen tun kann. Zunächst werden wir uns ansehen, was mit Leerzeichen zwischen Inline- und Inline-Block-Elementen passiert. Tatsächlich haben wir dies bereits in unserem allerersten Beispiel gesehen, als wir beschrieben haben, wie Leerzeichen in Inline-Formatierungskontexten verarbeitet werden.

Wir haben gesagt, dass es Regeln gibt, die die meisten Zeichen ignorieren, aber worttrennende Zeichen bleiben bestehen. Wenn Sie es nur mit Block-Level-Elementen wie `<p>` zu tun haben, die nur Inline-Elemente wie `<em>`, `<strong>`, `<span>`, usw. enthalten, kümmert es normalerweise nicht, weil die zusätzlichen Leerzeichen, die im Layout erscheinen, nützlich sind, um die Wörter im Satz zu trennen.

Es wird jedoch interessanter, wenn Sie beginnen, `inline-block`-Elemente zu verwenden. Diese Elemente verhalten sich wie Inline-Elemente von außen und Blöcke von innen und werden oft verwendet, um komplexere UI-Stücke als nur Text nebeneinander auf derselben Linie anzuzeigen, wie zum Beispiel Navigationselemente.

Da sie Blöcke sind, erwarten viele, dass sie sich auch so verhalten, aber das tun sie nicht wirklich. Wenn es formatierungsbedingte Leerzeichen zwischen benachbarten Inline-Elementen gibt, führt das zu Leerstellen im Layout, genau wie die Leerzeichen zwischen Wörtern im Text.

### Beispiel

Betrachten Sie dieses Beispiel (wiederum haben wir einen HTML-Kommentar hinzugefügt, der die Leerzeichen im HTML anzeigt):

```css
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

```html
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

{{EmbedLiveSample('Example_3')}}

Sie wollen wahrscheinlich nicht die Lücken zwischen den Blöcken — je nach Anwendungsfall (ist dies eine Liste von Avataren oder horizontale Navigationsschaltflächen?), möchten Sie wahrscheinlich, dass die Elemente aneinander anliegen und dass Sie den Abstand selbst kontrollieren können.

Der HTML-Inspektor von Firefox DevTools hebt Textknoten hervor und zeigt Ihnen auch genau, welchen Bereich die Elemente einnehmen — nützlich, wenn Sie sich fragen, was das Problem verursacht, und vielleicht denken, dass Sie dort zusätzlichen Rand haben oder so etwas!

![Beispiel für die Anzeige von Leerzeichen zwischen Blöcken im Firefox DevTools HTML-Inspektor](whitespace-devtools.png)

### Lösungen

Es gibt einige Möglichkeiten, dieses Problem zu umgehen:

Verwenden Sie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), um die horizontale Liste von Elementen zu erstellen, anstatt eine `inline-block`-Lösung zu versuchen. Dies erledigt alles für Sie und ist definitiv die bevorzugte Lösung:

```css
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}
```

Wenn Sie `inline-block` benötigen, könnten Sie die [`font-size`](/de/docs/Web/CSS/font-size) der Liste auf 0 setzen. Dies funktioniert nur, wenn Ihre Blöcke nicht mit `em`s (basierend auf der `font-size`, sodass die Blockgröße ebenfalls 0 wäre) dimensioniert sind. `rem`s wären hier eine gute Wahl:

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

Oder Sie könnten einen negativen Rand an den Listenelementen setzen:

```css
li {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin-right: -0.25rem;
}
```

Sie können dieses Problem auch lösen, indem Sie Ihre Listenelemente alle in einer Zeile in der Quelle platzieren, wodurch die Leerzeichenknoten gar nicht erst erstellt werden:

```html-nolint
<li></li><li></li><li></li><li></li><li></li>
```

## DOM-Traversierung und Leerzeichen

Wenn Sie versuchen, [DOM](/de/docs/Web/API/Document_Object_Model)-Manipulationen in JavaScript durchzuführen, können Sie auch auf Probleme aufgrund von Leerzeichenknoten stoßen. Beispielsweise, wenn Sie eine Referenz auf einen Elternknoten haben und dessen erstes Kind-Element mit [`Node.firstChild`](/de/docs/Web/API/Node/firstChild) beeinflussen wollen, wenn es einen störenden Leerzeichenknoten direkt nach dem öffnenden Elternelement gibt, erhalten Sie nicht das erwartete Ergebnis. Der Textknoten würde ausgewählt, anstatt des Elements, das Sie beeinflussen möchten.

Ein weiteres Beispiel ist, wenn Sie mit bestimmten Elementen etwas tun möchten, basierend darauf, ob sie leer sind (keine Kindknoten haben) oder nicht. Sie könnten prüfen, ob jedes Element leer ist, indem Sie etwas wie [`Node.hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes) verwenden, aber erneut, wenn Ziel-Elemente Textknoten enthalten, könnten Sie falsche Ergebnisse bekommen.

## Hilfsfunktionen für Leerzeichen

Der untenstehende JavaScript-Code definiert mehrere Funktionen, die den Umgang mit Leerzeichen im DOM erleichtern:

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

### Beispiel

Der folgende Code demonstriert die Verwendung der obigen Funktionen. Es wird über die Kinder eines Elements iteriert (deren Kinder alle Elemente sind), um das zu finden, dessen Text `"This is the third paragraph"` lautet, und dann das Klassenattribut und die Inhalte dieses Absatzes ändern.

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
