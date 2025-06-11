---
title: Wie Whitespace von HTML, CSS und im DOM behandelt wird
slug: Web/API/Document_Object_Model/Whitespace
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{DefaultAPISidebar("DOM")}}

Das Vorhandensein von Whitespace im [DOM](/de/docs/Web/API/Document_Object_Model) kann Layoutprobleme verursachen und die Manipulation des Inhaltsbaums auf unerwartete Weise erschweren, je nachdem, wo es sich befindet. Dieser Artikel untersucht, wann Schwierigkeiten auftreten können und was getan werden kann, um die resultierenden Probleme zu mildern.

## Was ist Whitespace?

Whitespace ist jede Zeichenkette, die nur aus Leerzeichen, Tabs oder Zeilenumbrüchen (genauer gesagt CRLF-Sequenzen, Wagenrückläufen oder Zeilenwechseln) besteht. Diese Zeichen ermöglichen es Ihnen, Ihren Code so zu formatieren, dass er leicht lesbar ist, sowohl für Sie selbst als auch für andere. Tatsächlich ist ein Großteil unseres Quellcodes voll von diesen Whitespace-Zeichen, und wir neigen dazu, sie in einem Produktions-Build-Schritt zu entfernen, um die Downloadgrößen des Codes zu reduzieren.

### HTML ignoriert Whitespace größtenteils?

Bei HTML wird Whitespace größtenteils ignoriert – Whitespace zwischen Wörtern wird als einzelnes Zeichen behandelt, und Whitespace am Anfang und Ende von Elementen sowie außerhalb von Elementen wird ignoriert. Betrachten Sie das folgende Minimalbeispiel:

```html-nolint
<!doctype html>

  <h1>      Hello      World!     </h1>
```

Dieser Quellcode enthält ein paar Zeilenumbrüche nach dem `doctype` und eine Menge Leerzeichen vor, nach und innerhalb des `<h1>`-Elements, aber der Browser scheint sich überhaupt nicht dafür zu interessieren und zeigt einfach die Worte "Hello World!" an, als gäbe es diese Zeichen überhaupt nicht:

{{EmbedLiveSample('HTML_largely_ignores_whitespace')}}

Dies dient dazu, dass Whitespace-Zeichen das Layout Ihrer Seite nicht beeinträchtigen. Das Erstellen von Platz um und in Elementen ist die Aufgabe von CSS.

### Was passiert mit Whitespace?

Sie verschwinden jedoch nicht einfach.

Alle Whitespace-Zeichen, die in dem ursprünglichen Dokument außerhalb von HTML-Elementen stehen, werden im DOM dargestellt. Dies ist intern erforderlich, damit der Editor die Formatierung von Dokumenten beibehalten kann. Das bedeutet, dass:

- Einige Textknoten nur Whitespace enthalten, und
- Einige Textknoten Whitespace am Anfang oder Ende haben werden.

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

Der DOM-Baum dafür sieht folgendermaßen aus:

![Der DOM-Baum, der ein einfaches HTML-Dokument darstellt](dom-string.png)

Das Konservieren von Whitespace-Zeichen im DOM ist auf viele Arten nützlich, es gibt jedoch bestimmte Stellen, an denen dies einige Layouts schwieriger umsetzbar macht und Probleme für Entwickler verursacht, die durch die Knoten im DOM iterieren wollen. Wir werden uns diese und einige Lösungen später genauer ansehen.

### Wie verarbeitet CSS Whitespace?

Die meisten Whitespace-Zeichen werden ignoriert, jedoch nicht alle. Im vorherigen Beispiel existiert eines der Leerzeichen zwischen "Hello" und "World!" noch, wenn die Seite in einem Browser gerendert wird. Es gibt Regeln in der Browser-Engine, die entscheiden, welche Whitespace-Zeichen nützlich sind und welche nicht – diese sind zumindest teilweise im [CSS Text Module Level 3](https://drafts.csswg.org/css-text-3/) festgelegt, insbesondere in den Teilen über die [CSS `white-space` Eigenschaft](https://drafts.csswg.org/css-text-3/#white-space-property) und [Whitespace-Verarbeitungsdetails](https://drafts.csswg.org/css-text-3/#white-space-processing), aber wir bieten unten eine einfachere Erklärung an.

#### Beispiel

Nehmen wir ein weiteres Beispiel. Um es einfacher zu machen, haben wir einen Kommentar hinzugefügt, der alle Leerzeichen mit ◦, alle Tabs mit ⇥ und alle Zeilenumbrüche mit ⏎ anzeigt:

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
- Ein Inline-Element (den `<span>`, der ein Leerzeichen und das Wort "World!" enthält).
- Einen weiteren Textknoten (bestehend nur aus Tabs und Leerzeichen).

Aus diesem Grund etabliert es, was man einen [Inline-Formatierungskontext](/de/docs/Web/CSS/CSS_inline_layout/Inline_formatting_context) nennt. Das ist einer der möglichen Layout-Rendering-Kontexte, mit denen Browser-Engines arbeiten.

Innerhalb dieses Kontexts kann die Whitespace-Zeichenverarbeitung wie folgt zusammengefasst werden:

1. Zuerst werden alle Leerzeichen und Tabs unmittelbar vor und nach einem Zeilenumbruch ignoriert. Wenn wir also unser vorheriges Beispiel-Markup nehmen:

   ```html-nolint
   <h1>◦◦◦Hello◦⏎
   ⇥⇥⇥⇥<span>◦World!</span>⇥◦◦</h1>
   ```

   ... und diese erste Regel anwenden, erhalten wir:

   ```html-nolint
   <h1>◦◦◦Hello⏎
   <span>◦World!</span>⇥◦◦</h1>
   ```

2. Als Nächstes werden alle Tab-Zeichen als Leerzeichen behandelt, sodass das Beispiel wird:

   ```html-nolint
   <h1>◦◦◦Hello⏎
   <span>◦World!</span>◦◦◦</h1>
   ```

3. Danach werden Zeilenumbrüche in Leerzeichen umgewandelt:

   ```html-nolint
   <h1>◦◦◦Hello◦<span>◦World!</span>◦◦◦</h1>
   ```

4. Dann wird jedes Leerzeichen, das einem anderen Leerzeichen unmittelbar folgt (auch über zwei separate Inline-Elemente hinweg), ignoriert, sodass wir dies erhalten:

   ```html-nolint
   <h1>◦Hello◦<span>World!</span>◦</h1>
   ```

5. Schließlich werden Sequenzen von Leerzeichen am Anfang und Ende eines Elements entfernt, sodass wir schließlich dies erhalten:

   ```html-nolint
   <h1>Hello◦<span>World!</span></h1>
   ```

Deshalb sehen Besucher der Webseite den Satz "Hello World!" schön geschrieben oben auf der Seite, anstatt eines seltsam eingerückten "Hello", gefolgt von einem noch seltsamer eingerückten "World!" in der Zeile darunter.

> **Note:** [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) unterstützen seit Version 52 die Hervorhebung von Textknoten, was es einfacher macht, genau zu sehen, in welchen Knoten sich Whitespace-Zeichen befinden. Reine Whitespace-Knoten sind mit einem "whitespace" Label gekennzeichnet.

### Whitespace in Block-Formatierungskontexten

Oben haben wir uns nur Elemente angesehen, die Inline-Elemente enthalten, und Inline-Formatierungskontexte. Wenn ein Element mindestens ein Block-Element enthält, dann etabliert es stattdessen, was man einen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) nennt.

Innerhalb dieses Kontexts wird Whitespace sehr unterschiedlich behandelt.

#### Beispiel

Schauen wir uns ein Beispiel an, um zu erklären, wie. Wir haben die Whitespace-Zeichen wie zuvor markiert.

Wir haben 3 Textknoten, die nur Whitespace enthalten, einen vor dem ersten `<div>`, einen zwischen den 2 `<div>`s und einen nach dem zweiten `<div>`.

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

Dies wird so gerendert:

{{EmbedLiveSample('Example_2')}}

#### Erklärung

Wir können zusammenfassen, wie der Whitespace hier behandelt wird, wie folgt (es kann einige leichte Unterschiede im genauen Verhalten zwischen Browsern geben, aber im Wesentlichen funktioniert es folgendermaßen):

1. Da wir uns in einem Block-Formatierungskontext befinden, muss alles ein Block sein, sodass unsere 3 Textknoten auch zu Blöcken werden, genau wie die 2 `<div>`s. Blöcke nehmen die gesamte verfügbare Breite ein und sind übereinander gestapelt, was bedeutet, dass wir, beginnend mit dem obigen Beispiel:

   ```html-nolint
   <body>⏎
   ⇥<div>◦◦Hello◦◦</div>⏎
   ⏎
   ◦◦◦<div>◦◦World!◦◦</div>◦◦⏎
   </body>
   ```

   ... letztendlich ein Layout aus dieser Liste von Blöcken erhalten:

   ```html
   <block>⏎⇥</block>
   <block>◦◦Hello◦◦</block>
   <block>⏎⏎◦◦◦</block>
   <block>◦◦World!◦◦</block>
   <block>◦◦⏎</block>
   ```

2. Dies wird dann weiter vereinfacht, indem die Verarbeitungsregeln für Whitespace in Inline-Formatierungskontexten auf diese Blöcke angewendet werden:

   ```html
   <block></block>
   <block>Hello</block>
   <block></block>
   <block>World!</block>
   <block></block>
   ```

3. Die 3 leeren Blöcke, die wir jetzt haben, werden im endgültigen Layout keinen Platz einnehmen, da sie nichts enthalten. Wir enden also mit nur 2 Blöcken, die auf der Seite Platz einnehmen. Besucher der Webseite sehen die Worte "Hello" und "World!" auf 2 separaten Zeilen, wie man es erwarten würde, dass 2 `<div>`s angeordnet sind. Die Browser-Engine hat im Wesentlichen den gesamten Whitespace ignoriert, der im Quellcode hinzugefügt wurde.

## Leerzeichen zwischen Inline- und Inline-Block-Elementen

Wir gehen nun über zu einigen Problemen, die durch Whitespace auftreten können, und was dagegen getan werden kann. Zunächst betrachten wir, was passiert mit Leerzeichen zwischen Inline- und Inline-Block-Elementen. Tatsächlich haben wir dies bereits in unserem allerersten Beispiel gesehen, als wir beschrieben haben, wie Whitespace innerhalb von Inline-Formatierungskontexten verarbeitet wird.

Wir sagten, dass es Regeln gibt, die die meisten Zeichen ignorieren, aber dass worttrennende Zeichen bleiben. Wenn Sie nur mit Block-Level-Elementen wie `<p>` arbeiten, die nur Inline-Elemente wie `<em>`, `<strong>`, `<span>`, usw. enthalten, ist Ihnen das normalerweise egal, weil der zusätzliche Whitespace, der im Layout angezeigt wird, hilfreich ist, um die Wörter im Satz zu trennen.

Es wird jedoch interessanter, wenn Sie beginnen, `inline-block` Elemente zu verwenden. Diese Elemente verhalten sich wie Inline-Elemente nach außen und wie Blöcke nach innen und werden oft verwendet, um komplexere UI-Elemente als reinen Text nebeneinander in der gleichen Zeile anzuzeigen, beispielsweise Navigationsmenüelemente.

Weil sie Blöcke sind, erwarten viele Leute, dass sie sich als solche verhalten, aber das tun sie wirklich nicht. Wenn zwischen benachbarten Inline-Elementen Formatierungs-Whitespace vorhanden ist, führt dies zu einem Leerraum im Layout, genau wie die Leerzeichen zwischen Wörtern im Text.

### Beispiel

Betrachten Sie dieses Beispiel (auch hier haben wir einen HTML-Kommentar hinzugefügt, der die Whitespace-Zeichen im HTML zeigt):

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

Sie möchten wahrscheinlich nicht die Lücken zwischen den Blöcken – abhängig vom Anwendungsfall (ist dies eine Liste von Avataren oder horizontale Navigationstasten?), möchten Sie wahrscheinlich, dass die Seiten der Elemente bündig zueinander stehen und dass Sie jeden Abstand selbst kontrollieren können.

Die Firefox DevTools HTML Inspector wird Textknoten hervorheben und Ihnen auch genau zeigen, welchen Bereich die Elemente einnehmen – nützlich, wenn Sie sich fragen, was das Problem verursacht, und vielleicht denken, dass Sie dort eine zusätzliche Marge haben oder so!

![Beispiel für die Anzeige von Leerzeichen zwischen Blöcken im Firefox DevTools HTML Inspector](whitespace-devtools.png)

### Lösungen

Es gibt einige Möglichkeiten, dieses Problem zu umgehen:

Verwenden Sie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), um die horizontale Liste der Elemente zu erstellen, anstatt eine `inline-block` Lösung zu versuchen. Dies erledigt alles für Sie und ist definitiv die bevorzugte Lösung:

```css
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}
```

Wenn Sie auf `inline-block` angewiesen sind, können Sie die [`font-size`](/de/docs/Web/CSS/font-size) der Liste auf 0 setzen. Dies funktioniert nur, wenn Ihre Blöcke nicht mit ems (basierend auf der `font-size`, sodass die Blockgröße auch 0 wäre) dimensioniert sind. rems wären hier eine gute Wahl:

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

Oder Sie könnten eine negative Marge auf die Listenelemente setzen:

```css
li {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin-right: -0.25rem;
}
```

Sie können dieses Problem auch lösen, indem Sie Ihre Listenelemente alle in derselben Zeile im Quellcode platzieren, was dazu führt, dass die Whitespace-Knoten gar nicht erst erstellt werden:

```html-nolint
<li></li><li></li><li></li><li></li><li></li>
```

## DOM-Durchlauf und Whitespace

Wenn Sie versuchen, DOM-Manipulationen im [DOM](/de/docs/Web/API/Document_Object_Model) in JavaScript durchzuführen, können Sie ebenfalls auf Probleme stoßen, weil von Whitespace-Knoten. Beispielweise, wenn Sie eine Referenz zu einem Elterknoten haben und dessen erstes Kindelement mit [`Node.firstChild`](/de/docs/Web/API/Node/firstChild) beeinflussen möchten, und sich direkt nach dem öffnenden Elterntag ein "verirrter" Whitespace-Knoten befindet, erhalten Sie nicht das erwartete Ergebnis. Der Textknoten würde stattdessen ausgewählt, anstatt des Elements, das Sie beeinflussen möchten.

Ein weiteres Beispiel: Wenn Sie einen bestimmten Satz von Elementen haben, bei dem Sie basierend darauf, ob sie leer sind (keine Kindknoten haben) oder nicht, etwas tun möchten, könnten Sie überprüfen, ob jedes Element leer ist, indem Sie etwas wie [`Node.hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes) verwenden, aber auch hier könnten, wenn irgendwelche Zielknoten Textknoten enthalten, falsche Ergebnisse erhalten werden.

## Whitespace-Hilfsfunktionen

Der folgende JavaScript-Code definiert mehrere Funktionen, die es erleichtern, mit Whitespace im DOM umzugehen:

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

Der folgende Code zeigt die Verwendung der obigen Funktionen. Er iteriert über die Kinder eines Elements (dessen Kinder alle Elemente sind), um dasjenige zu finden, dessen Text `"This is the third paragraph"` ist, und ändert dann die `class`-Eigenschaft und den Inhalt dieses Absatzes.

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
