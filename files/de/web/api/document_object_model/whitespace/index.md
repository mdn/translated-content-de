---
title: Wie Leerzeichen von HTML, CSS und im DOM behandelt werden
slug: Web/API/Document_Object_Model/Whitespace
l10n:
  sourceCommit: 76303349ea46786d9cc2bb276bbc18e822d2c3e8
---

{{DefaultAPISidebar("DOM")}}

Das Vorhandensein von Leerzeichen im [DOM](/de/docs/Web/API/Document_Object_Model) kann Layoutprobleme verursachen und die Manipulation des Inhaltsbaumes auf unerwartete Weise erschweren, je nachdem, wo sie sich befinden. Dieser Artikel untersucht, wann Schwierigkeiten auftreten können und was unternommen werden kann, um die daraus resultierenden Probleme zu mildern.

## Was sind Leerzeichen?

Leerzeichen sind jede Zeichenfolge, die nur aus Leerzeichen, Tabs oder Zeilenumbrüchen besteht (genauer gesagt CRLF-Sequenzen, Wagenrückläufe oder Zeilenfeeds). Diese Zeichen ermöglichen es, Ihren Code so zu formatieren, dass er für Sie und andere Personen gut lesbar ist. Tatsächlich ist ein Großteil unseres Quellcodes voll von diesen Leerzeichen, und wir tendieren dazu, es nur in einem Produktionsbuild-Schritt zu entfernen, um die Größe des Code-Downloads zu reduzieren.

### Ignoriert HTML größtenteils Leerzeichen?

Im Fall von HTML werden Leerzeichen größtenteils ignoriert – Leerzeichen zwischen Wörtern werden als ein einziges Zeichen behandelt, und Leerzeichen am Anfang und Ende von Elementen sowie außerhalb von Elementen werden ignoriert. Betrachten Sie das folgende minimale Beispiel:

```html-nolint
<!doctype html>

  <h1>      Hello      World!     </h1>
```

Dieser Quellcode enthält ein paar Zeilenumbrüche nach dem `doctype` und eine Menge Leerzeichen vor, nach und innerhalb des `<h1>`-Elements, aber der Browser scheint sich überhaupt nicht darum zu kümmern und zeigt einfach die Wörter "Hello World!" an, als ob diese Zeichen überhaupt nicht existieren würden:

{{EmbedLiveSample('HTML_largely_ignores_whitespace')}}

Dies geschieht, damit Leerzeichen das Layout Ihrer Seite nicht beeinflussen. Das Erstellen von Raum um und innerhalb von Elementen ist die Aufgabe von CSS.

### Was passiert mit Leerzeichen?

Sie verschwinden jedoch nicht einfach.

Alle Leerzeichen, die sich außerhalb von HTML-Elementen im Originaldokument befinden, sind im DOM repräsentiert. Dies ist intern erforderlich, damit der Editor die Formatierung von Dokumenten beibehalten kann. Das bedeutet:

- Es wird einige Textknoten geben, die nur Leerzeichen enthalten, und
- Einige Textknoten werden Leerzeichen am Anfang oder Ende haben.

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

Das Bewahren von Leerzeichen im DOM ist auf viele Arten nützlich, aber es gibt bestimmte Stellen, an denen dies bestimmte Layouts schwieriger umsetzbar macht und Probleme für Entwickler verursacht, die durch Knoten im DOM iterieren möchten. Wir werden diese und einige Lösungen später betrachten.

### Wie verarbeitet CSS Leerzeichen?

Die meisten Leerzeichen werden ignoriert, nicht alle von ihnen. Im früheren Beispiel existiert eines der Leerzeichen zwischen "Hello" und "World!" immer noch, wenn die Seite in einem Browser gerendert wird. Es gibt Regeln in der Browser-Engine, die entscheiden, welche Leerzeichen nützlich sind und welche nicht – diese sind zumindest teilweise im [CSS Text Module Level 3](https://www.w3.org/TR/css-text-3/) spezifiziert, insbesondere die Teile, die sich mit der [CSS `white-space` Eigenschaft](https://www.w3.org/TR/css-text-3/#white-space-property) und [Detailinformationen zur Leerzeichen-Verarbeitung](https://www.w3.org/TR/css-text-3/#white-space-processing) befassen, aber wir bieten unten auch eine einfachere Erklärung.

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

wird im Browser folgendermaßen gerendert:

{{EmbedLiveSample('Example')}}

#### Erklärung

Das `<h1>`-Element enthält nur Inline-Elemente. Tatsächlich enthält es:

- Einen Textknoten (bestehend aus einigen Leerzeichen, dem Wort "Hello" und einigen Tabs).
- Ein Inline-Element (das `<span>`, das ein Leerzeichen und das Wort "World!" enthält).
- Einen weiteren Textknoten (der nur aus Tabs und Leerzeichen besteht).

Deshalb etabliert es, was als [Inline-Formatierungskontext](/de/docs/Web/CSS/Inline_formatting_context) bezeichnet wird. Dies ist einer der möglichen Layout-Rendering-Kontexte, mit denen Browser-Engines arbeiten.

Innerhalb dieses Kontextes kann die Verarbeitung von Leerzeichen wie folgt zusammengefasst werden:

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

2. Als nächstes werden alle Tab-Zeichen als Leerzeichen behandelt, sodass das Beispiel wird:

   ```html-nolint
   <h1>◦◦◦Hello⏎
   <span>◦World!</span>◦◦◦</h1>
   ```

3. Als nächstes werden Zeilenumbrüche zu Leerzeichen konvertiert:

   ```html-nolint
   <h1>◦◦◦Hello◦<span>◦World!</span>◦◦◦</h1>
   ```

4. Danach wird jedes Leerzeichen, das unmittelbar auf ein anderes Leerzeichen folgt (auch über zwei separate Inline-Elemente hinweg), ignoriert, sodass wir enden bei:

   ```html-nolint
   <h1>◦Hello◦<span>World!</span>◦</h1>
   ```

5. Schließlich werden Leerraumsequenzen am Anfang und Ende eines Elements entfernt, sodass wir letztendlich dies erhalten:

   ```html-nolint
   <h1>Hello◦<span>World!</span></h1>
   ```

Deshalb sehen Personen, die die Webseite besuchen, den Satz "Hello World!" schön geschrieben oben auf der Seite, anstatt eines merkwürdig eingedruckten "Hello" gefolgt von einem noch merkwürdiger eingedrückten "World!" auf der darunterliegenden Zeile.

> **Hinweis:** [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) unterstützt seit Version 52 das Hervorheben von Textknoten, was es einfacher macht, genau zu sehen, in welchen Knoten sich Leerzeichenzeichen befindet. Reine Leerzeichenelemente sind mit einem "whitespace"-Label markiert.

### Leerzeichen in Block-Formatierungskontexten

Oben haben wir uns Elemente angeschaut, die Inline-Elemente enthalten, und Inline-Formatkontexte. Wenn ein Element mindestens ein Block-Element enthält, dann etabliert es stattdessen, was als [Block-Formatkontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) bezeichnet wird.

Innerhalb dieses Kontextes werden Leerzeichen ganz anders behandelt.

#### Beispiel

Werfen wir einen Blick auf ein Beispiel, um zu erklären, wie dies funktioniert. Wir haben die Leerzeichen wie zuvor markiert.

Wir haben drei Textknoten, die nur Leerzeichen enthalten, einen vor dem ersten `<div>`, einen zwischen den zwei `<div>`s und einen nach dem zweiten `<div>`.

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

Dies wird folgendermaßen gerendert:

{{EmbedLiveSample('Example_2')}}

#### Erklärung

Wir können zusammenfassen, wie die Leerzeichen hier gehandhabt werden, wodurch (es können kleine Unterschiede im genauen Verhalten zwischen Browsern auftreten, aber im Wesentlichen funktioniert es so):

1. Da wir uns in einem Block-Formatkontext befinden, muss alles ein Block sein, also werden unsere drei Textknoten auch zu Blöcken, genau wie die zwei `<div>`s. Blöcke nehmen die volle verfügbare Breite ein und sind übereinander gestapelt, was bedeutet, dass wir ausgehend vom obigen Beispiel:

   ```html-nolint
   <body>⏎
   ⇥<div>◦◦Hello◦◦</div>⏎
   ⏎
   ◦◦◦<div>◦◦World!◦◦</div>◦◦⏎
   </body>
   ```

   ...bei diesem Layout mit dieser Liste von Blöcken landen:

   ```html
   <block>⏎⇥</block>
   <block>◦◦Hello◦◦</block>
   <block>⏎⏎◦◦◦</block>
   <block>◦◦World!◦◦</block>
   <block>◦◦⏎</block>
   ```

2. Dies wird dann weiter vereinfacht, indem die Verarbeitungsregeln für Leerzeichen in Inline-Formatkontexten auf diese Blöcke angewendet werden:

   ```html
   <block></block>
   <block>Hello</block>
   <block></block>
   <block>World!</block>
   <block></block>
   ```

3. Die drei leeren Blöcke, die wir jetzt haben, werden im endgültigen Layout keinen Raum einnehmen, da sie nichts enthalten. Wir haben also nur noch zwei Blöcke, die Raum auf der Seite einnehmen. Personen, die die Webseite sehen, sehen die Wörter "Hello" und "World!" auf zwei getrennten Linien, wie man es von zwei `<div>`s erwarten würde. Die Browser-Engine hat im Wesentlichen alle Leerzeichen, die im Quellcode hinzugefügt wurden, ignoriert.

## Leerzeichen zwischen Inline- und Inline-Block-Elementen

Lassen Sie uns nun auf einige Probleme eingehen, die durch Leerzeichen entstehen können und was dagegen getan werden kann. Zuerst schauen wir uns an, was mit Leerzeichen zwischen Inline- und Inline-Block-Elementen passiert. Tatsächlich haben wir dies bereits in unserem allerersten Beispiel gesehen, als wir beschrieben haben, wie Leerzeichen in Inline-Formatkontexten verarbeitet werden.

Wir sagten, dass es Regeln gibt, die die meisten Zeichen ignorieren, aber dass worttrennende Zeichen bleiben. Wenn Sie nur mit Block-Level-Elementen wie `<p>` arbeiten, die nur Inline-Elemente wie `<em>`, `<strong>`, `<span>`, usw. enthalten, stören Sie sich normalerweise nicht daran, weil die zusätzlichen Leerzeichen, die zum Layout gelangen, hilfreich sind, um die Wörter im Satz zu trennen.

Es wird jedoch interessanter, wenn Sie beginnen, `inline-block`-Elemente zu verwenden. Diese Elemente verhalten sich äußerlich wie Inline-Elemente und innen wie Blöcke und werden häufig verwendet, um komplexere UI-Teile als nur Text nebeneinander auf derselben Linie anzuzeigen, zum Beispiel Navigationsmenüelemente.

Weil sie Blöcke sind, erwarten viele Leute, dass sie sich auch so verhalten, aber das tun sie nicht wirklich. Wenn es zwischen benachbarten Inline-Elementen formatierungsbedingte Leerzeichen gibt, wird dies im Layout als Leerraum dargestellt, genau wie die Leerzeichen zwischen Wörtern im Text.

### Beispiel

Betrachten Sie dieses Beispiel (wiederum haben wir einen HTML-Kommentar eingefügt, der die Leerzeichenzeichen im HTML anzeigt):

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

Sie möchten wahrscheinlich nicht die Lücken zwischen den Blöcken – abhängig vom Anwendungsfall (ist dies eine Liste von Avataren oder horizontale Navigationsschaltflächen?), möchten Sie wahrscheinlich die Elementseiten bündig zueinander haben und jeden Abstand selbst steuern können.

Der HTML-Inspektor der Firefox DevTools hebt Textknoten hervor und zeigt Ihnen auch genau an, welchen Bereich die Elemente einnehmen – nützlich, wenn Sie sich fragen, was das Problem verursacht und vielleicht denken, dass Sie da drinnen eine zusätzliche Rand existiert oder so etwas!

![Beispiel für die Anzeige von Leerzeichen zwischen den Blöcken im Firefox DevTools HTML-Inspektor](whitespace-devtools.png)

### Lösungen

Es gibt einige Möglichkeiten, dieses Problem zu umgehen:

Verwenden Sie [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox), um die horizontale Liste der Elemente zu erstellen, anstatt eine `inline-block`-Lösung zu versuchen. Das erledigt alles für Sie und ist definitiv die bevorzugte Lösung:

```css
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}
```

Wenn Sie sich auf `inline-block` verlassen müssen, können Sie die [`font-size`](/de/docs/Web/CSS/font-size) der Liste auf 0 setzen. Dies funktioniert nur, wenn Ihre Blöcke nicht in ems (basierend auf der `font-size`, sodass die Blockgröße auch Null wäre) dimensioniert sind. Rems wären hier eine gute Wahl:

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

Oder Sie könnten eine negative Marge auf die Listenelemente anwenden:

```css
li {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin-right: -0.25rem;
}
```

Sie können dieses Problem auch lösen, indem Sie Ihre Listenelemente alle auf derselben Zeile im Quellcode platzieren, was dazu führt, dass die Leerzeichenknoten erst gar nicht erstellt werden:

```html-nolint
<li></li><li></li><li></li><li></li><li></li>
```

## DOM-Durchquerung und Leerzeichen

Beim Versuch, eine [DOM](/de/docs/Web/API/Document_Object_Model)-Manipulation in JavaScript durchzuführen, können auch Probleme aufgrund von Leerzeichenknoten auftreten. Beispielsweise, wenn Sie eine Referenz auf einen übergeordneten Knoten haben und dessen erstes Elementchild mit [`Node.firstChild`](/de/docs/Web/API/Node/firstChild) verändern möchten, erhalten Sie bei einem unerwarteten Leerzeichenknoten direkt nach dem öffnenden übergeordneten Tag nicht das erwartete Ergebnis. Der Textknoten würde ausgewählt, anstatt des Elements, das Sie ändern möchten.

Ein weiteres Beispiel: Wenn Sie eine bestimmte Untermenge von Elementen haben, an denen Sie etwas ändern wollen, basierend darauf, ob sie leer sind (keine Kindknoten haben) oder nicht, könnten Sie überprüfen, ob jedes Element leer ist, indem Sie etwas wie [`Node.hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes) verwenden, aber erneut, wenn Ziel-Elemente Textknoten enthalten, könnten Sie falsche Ergebnisse erhalten.

## Helferfunktionen für Leerzeichen

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

Der folgende Code zeigt die Verwendung der oben genannten Funktionen. Er iteriert über die Kinder eines Elements (dessen Kinder alle Elemente sind), um dasjenige zu finden, dessen Text `"This is the third paragraph"` ist, und ändert dann das class-Attribut und den Inhalt dieses Absatzes.

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
