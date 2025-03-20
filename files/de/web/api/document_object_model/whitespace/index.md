---
title: Wie Leerzeichen von HTML, CSS und im DOM behandelt werden
slug: Web/API/Document_Object_Model/Whitespace
l10n:
  sourceCommit: 113279ab09692d869866519106e25cba8a20abb8
---

{{DefaultAPISidebar("DOM")}}

Das Vorhandensein von Leerzeichen im [DOM](/de/docs/Web/API/Document_Object_Model) kann Layoutprobleme verursachen und die Manipulation des Inhaltsbaums unerwartet erschweren, abhängig davon, wo sie sich befinden. Dieser Artikel untersucht, wann Schwierigkeiten auftreten können, und zeigt Wege auf, um die daraus resultierenden Probleme zu mindern.

## Was sind Leerzeichen?

Leerzeichen sind jede Zeichenfolge, die nur aus Leerzeichen, Tabs oder Zeilenumbrüchen besteht (genauer gesagt, CRLF-Sequenzen, Wagenrückläufe oder Zeilenvorschübe). Diese Zeichen ermöglichen es Ihnen, Ihren Code so zu formatieren, dass er für Sie und andere leicht lesbar ist. Tatsächlich ist ein Großteil unseres Quellcodes voller dieser Leerzeichen, und wir neigen dazu, sie erst in einem Produktionsbuild-Schritt zu entfernen, um die Code-Downloadgrößen zu reduzieren.

### HTML ignoriert Leerzeichen größtenteils?

Im Fall von HTML werden Leerzeichen weitgehend ignoriert – Leerzeichen zwischen Wörtern werden als ein einzelnes Zeichen behandelt, und Leerzeichen am Anfang und Ende von Elementen sowie außerhalb von Elementen werden ignoriert. Nehmen Sie das folgende Minimalbeispiel:

```html-nolint
<!doctype html>

  <h1>      Hello      World!     </h1>
```

Dieser Quellcode enthält ein paar Zeilenvorschübe nach dem `doctype` und eine Menge Leerzeichen vor, nach und innerhalb des `<h1>`-Elements, aber der Browser scheint überhaupt nicht darauf zu achten und zeigt einfach die Wörter "Hello World!" so an, als ob diese Zeichen überhaupt nicht existieren würden:

{{EmbedLiveSample('HTML_largely_ignores_whitespace')}}

Das dient dazu, dass Leerzeichenzeichen das Layout Ihrer Seite nicht beeinflussen. Das Erstellen von Abständen um und innerhalb von Elementen ist die Aufgabe von CSS.

### Was passiert mit Leerzeichen?

Sie verschwinden jedoch nicht einfach.

Alle Leerzeichenzeichen, die sich außerhalb von HTML-Elementen im Originaldokument befinden, sind im DOM vorhanden. Dies ist intern notwendig, damit der Editor die Formatierung von Dokumenten beibehalten kann. Das bedeutet:

- Es wird einige Textknoten geben, die nur Leerzeichen enthalten, und
- Einige Textknoten werden Leerzeichen am Anfang oder Ende haben.

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

Der DOM-Baum dafür sieht so aus:

![Der DOM-Baum, der ein einfaches HTML-Dokument darstellt](dom-string.png)

Das Bewahren von Leerzeichen im DOM ist auf viele Arten nützlich, aber es gibt bestimmte Stellen, an denen dies bestimmte Layouts schwieriger zu implementieren macht und Probleme für Entwickler verursacht, die durch Knoten im DOM iterieren möchten. Wir werden später darauf eingehen und einige Lösungen betrachten.

### Wie verarbeitet CSS Leerzeichen?

Die meisten Leerzeichenzeichen werden ignoriert, aber nicht alle von ihnen. Im vorherigen Beispiel existiert eines der Leerzeichen zwischen "Hello" und "World!" weiterhin, wenn die Seite in einem Browser gerendert wird. Es gibt Regeln in der Browser-Engine, die entscheiden, welche Leerzeichenzeichen nützlich sind und welche nicht – diese sind zumindest teilweise im [CSS Text Module Level 3](https://www.w3.org/TR/css-text-3/) spezifiziert, insbesondere die Teile über die [CSS `white-space` Eigenschaft](https://www.w3.org/TR/css-text-3/#white-space-property) und [Details zur Leerzeichenverarbeitung](https://www.w3.org/TR/css-text-3/#white-space-processing), aber wir bieten unten auch eine einfachere Erklärung.

#### Beispiel

Nehmen wir ein weiteres Beispiel. Zur Vereinfachung haben wir einen Kommentar hinzugefügt, der alle Leerzeichen mit ◦, alle Tabs mit ⇥ und alle Zeilenumbrüche mit ⏎ anzeigt:

Dieses Beispiel:

```html-nolint
<h1>   Hello
        <span> World!</span>   </h1>

<!--
<h1>◦◦◦Hello◦⏎
⇥⇥⇥⇥<span>◦World!</span>⇥◦◦</h1>
-->
```

wird im Browser wie folgt dargestellt:

{{EmbedLiveSample('Example')}}

#### Erklärung

Das `<h1>`-Element enthält nur Inline-Elemente. Tatsächlich enthält es:

- Einen Textknoten (bestehend aus einigen Leerzeichen, dem Wort "Hello" und einigen Tabs).
- Ein Inline-Element (das `<span>`, welches ein Leerzeichen und das Wort "World!" enthält).
- Einen weiteren Textknoten (bestehend nur aus Tabulatoren und Leerzeichen).

Deshalb etabliert es, was als [Inline-Formatierungskontext](/de/docs/Web/CSS/CSS_inline_layout/Inline_formatting_context) bezeichnet wird. Dies ist einer der möglichen Layout-Rendering-Kontexte, mit denen Browser-Engines arbeiten.

Innerhalb dieses Kontexts kann die Verarbeitung von Leerzeichen wie folgt zusammengefasst werden:

1. Zuerst werden alle Leerzeichen und Tabs unmittelbar vor und nach einem Zeilenumbruch ignoriert, sodass, wenn wir das Beispiel-Markup von zuvor nehmen:

   ```html-nolint
   <h1>◦◦◦Hello◦⏎
   ⇥⇥⇥⇥<span>◦World!</span>⇥◦◦</h1>
   ```

   ... und diese erste Regel anwenden, erhalten wir:

   ```html-nolint
   <h1>◦◦◦Hello⏎
   <span>◦World!</span>⇥◦◦</h1>
   ```

2. Als nächstes werden alle Tabulator-Zeichen als Leerzeichen behandelt, sodass das Beispiel wird:

   ```html-nolint
   <h1>◦◦◦Hello⏎
   <span>◦World!</span>◦◦◦</h1>
   ```

3. Danach werden Zeilenumbrüche in Leerzeichen umgewandelt:

   ```html-nolint
   <h1>◦◦◦Hello◦<span>◦World!</span>◦◦◦</h1>
   ```

4. Danach wird jedes Leerzeichen, das unmittelbar auf ein anderes folgt (sogar über zwei separate Inline-Elemente hinweg), ignoriert, sodass wir enden mit:

   ```html-nolint
   <h1>◦Hello◦<span>World!</span>◦</h1>
   ```

5. Und schließlich werden Sequenzen von Leerzeichen am Anfang und Ende eines Elements entfernt, sodass wir schließlich dies erhalten:

   ```html-nolint
   <h1>Hello◦<span>World!</span></h1>
   ```

Deshalb sehen Besucher der Webseite den Satz "Hello World!" schön geschrieben oben auf der Seite, anstatt eines merkwürdig eingerückten "Hello", gefolgt von einem noch merkwürdiger eingerückten "World!" in der Zeile darunter.

> **Note:** [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) unterstützen seit Version 52 das Hervorheben von Textknoten, was es einfacher macht zu sehen, in welchen Knoten sich Leerzeichen befinden. Reine Leerzeichennoten sind mit einem "whitespace"-Label markiert.

### Leerzeichen in Block-Formatierungskontexten

Oben haben wir uns nur Elemente angesehen, die Inline-Elemente enthalten, sowie Inline-Formatierungskontexte. Wenn ein Element mindestens ein Blockelement enthält, dann etabliert es stattdessen, was als [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) bezeichnet wird.

In diesem Kontext werden Leerzeichen sehr unterschiedlich behandelt.

#### Beispiel

Schauen wir uns ein Beispiel an, um zu erklären, wie. Wir haben die Leerzeichen wie zuvor markiert.

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

Das wird wie folgt gerendert:

{{EmbedLiveSample('Example_2')}}

#### Erklärung

Wir können zusammenfassen, wie die Leerzeichen hier behandelt werden (es kann einige geringfügige Unterschiede im genauen Verhalten zwischen verschiedenen Browsern geben, aber grundsätzlich funktioniert es):

1. Da wir uns in einem Block-Formatierungskontext befinden, muss alles ein Block sein, also werden unsere 3 Textknoten auch zu Blöcken, genau wie die 2 `<div>`s. Blöcke nehmen die volle verfügbare Breite ein und werden übereinander gestapelt, was bedeutet, dass wir mit dem obigen Beispiel beginnen:

   ```html-nolint
   <body>⏎
   ⇥<div>◦◦Hello◦◦</div>⏎
   ⏎
   ◦◦◦<div>◦◦World!◦◦</div>◦◦⏎
   </body>
   ```

   ... und enden mit einem Layout, das aus dieser Liste von Blöcken besteht:

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

3. Die 3 leeren Blöcke, die wir jetzt haben, werden im endgültigen Layout keinen Platz einnehmen, da sie nichts enthalten, sodass wir nur 2 Blöcke haben, die auf der Seite Platz einnehmen. Menschen, die die Webseite sehen, sehen die Wörter "Hello" und "World!" in 2 separaten Zeilen, wie Sie erwarten würden, dass 2 `<div>`s angeordnet sind. Die Browser-Engine hat im Wesentlichen alle Leerzeichen ignoriert, die im Quellcode hinzugefügt wurden.

## Abstände zwischen Inline- und Inline-Block-Elementen

Schauen wir uns nun einige Probleme an, die aufgrund von Leerzeichen auftreten können, und was dagegen getan werden kann. Zuerst schauen wir uns an, was mit Abständen zwischen Inline- und Inline-Block-Elementen passiert. Tatsächlich haben wir dies bereits in unserem allerersten Beispiel gesehen, als wir beschrieben, wie Leerzeichen in Inline-Formatierungskontexten verarbeitet werden.

Wir sagten, dass es Regeln gibt, um die meisten Zeichen zu ignorieren, aber dass zeilentrennende Zeichen bleiben. Wenn Sie nur mit Blockebenen-Elementen wie `<p>` arbeiten, die nur Inline-Elemente wie `<em>`, `<strong>`, `<span>` usw. enthalten, kümmern Sie sich normalerweise nicht darum, da der zusätzliche Leerraum, der tatsächlich ins Layout gelangt, hilfreich ist, um die Wörter im Satz zu trennen.

Es wird jedoch interessanter, wenn Sie anfangen, `inline-block`-Elemente zu verwenden. Diese Elemente verhalten sich nach außen wie Inline-Elemente und nach innen wie Blöcke und werden häufig verwendet, um komplexere UI-Teile als nur Text auf derselben Linie anzuzeigen, zum Beispiel Navigationsmenüpunkte.

Da sie Blöcke sind, erwarten viele Leute, dass sie sich auch so verhalten, aber das tun sie wirklich nicht. Wenn es zwischen benachbarten Inline-Elementen Leerzeichen gibt, führt dies zu einem Abstand im Layout, genau wie die Abstände zwischen Wörtern im Text.

### Beispiel

Betrachten Sie dieses Beispiel (wiederum haben wir einen HTML-Kommentar hinzugefügt, der die Leerzeichenzeichen im HTML zeigt):

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
  background: #f06;
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

Sie möchten wahrscheinlich nicht die Lücken zwischen den Blöcken — je nach Anwendungsfall (ist dies eine Liste von Avataren oder horizontale Navigationsschaltflächen?), möchten Sie wahrscheinlich, dass die Elemente bündig zueinander sind und den Abstand selbst steuern können.

Der HTML-Inspektor der Firefox DevTools wird Textknoten hervorheben und Ihnen auch genau zeigen, welchen Bereich die Elemente einnehmen — nützlich, wenn Sie sich fragen, was das Problem verursacht, und vielleicht denken, Sie hätten da einen zusätzlichen Rand oder ähnliches!

![Beispiel der Anzeige von Leerzeichen zwischen Blöcken im Firefox DevTools HTML Inspector](whitespace-devtools.png)

### Lösungen

Es gibt einige Möglichkeiten, dieses Problem zu umgehen:

Verwenden Sie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), um die horizontale Liste von Elementen zu erstellen, anstatt eine `inline-block`-Lösung zu versuchen. Dies übernimmt alles für Sie und ist definitiv die bevorzugte Lösung:

```css
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}
```

Wenn Sie sich auf `inline-block` verlassen müssen, könnten Sie die [`font-size`](/de/docs/Web/CSS/font-size) der Liste auf 0 setzen. Dies funktioniert nur, wenn Ihre Blöcke nicht mit ems bemessen sind (basierend auf der `font-size`, sodass die Blockgröße auch 0 wäre). Rems wären hier eine gute Wahl:

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

Oder Sie könnten negative Margen auf die Listenelemente anwenden:

```css
li {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin-right: -0.25rem;
}
```

Sie können dieses Problem auch lösen, indem Sie Ihre Listenelemente alle in derselben Zeile im Quellcode belassen, was dazu führt, dass die Leerzeichen-Knoten erst gar nicht erstellt werden:

```html-nolint
<li></li><li></li><li></li><li></li><li></li>
```

## DOM-Durchlauf und Leerzeichen

Beim Versuch, [DOM](/de/docs/Web/API/Document_Object_Model)-Manipulation in JavaScript durchzuführen, können Sie ebenfalls auf Probleme stoßen, weil die Leerzeichenknoten darin sind. Wenn Sie beispielsweise eine Referenz zu einem übergeordneten Knoten haben und dessen erstes Elementkind mit [`Node.firstChild`](/de/docs/Web/API/Node/firstChild) beeinflussen möchten, erhalten Sie nicht das gewünschte Ergebnis, wenn sich ein unbedeutender Leerzeichenknoten direkt nach dem öffnenden Eltern-Tag befindet. Der Textknoten würde ausgewählt, anstatt des Elements, das Sie beeinflussen möchten.

Ein weiteres Beispiel ist, wenn Sie einen bestimmten Teil von Elementen haben, den Sie basierend darauf, ob sie leer sind (keine Knoten haben) oder nicht, etwas machen möchten. Sie könnten überprüfen, ob jedes Element leer ist, indem Sie etwas wie [`Node.hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes) verwenden, aber auch in diesem Fall könnte es, wenn die Ziel-Elemente Textknoten enthalten, zu falschen Ergebnissen kommen.

## Hilfsfunktionen für Leerzeichen

Der folgende JavaScript-Code definiert mehrere Funktionen, die es erleichtern, mit Leerzeichen im DOM umzugehen:

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

Der folgende Code demonstriert die Verwendung der obenstehenden Funktionen. Er iteriert über die Kinder eines Elements (dessen Kinder alle Elemente sind), um dasjenige zu finden, dessen Text `"This is the third paragraph"` ist, und ändert dann das Klassenattribut und den Inhalt dieses Absatzes.

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
