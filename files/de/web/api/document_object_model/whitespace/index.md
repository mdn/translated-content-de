---
title: Wie Leerzeichen von HTML, CSS und im DOM behandelt werden
slug: Web/API/Document_Object_Model/Whitespace
l10n:
  sourceCommit: 8417bff6e7d518ec1548f8af6a85be3fc5f4950c
---

{{DefaultAPISidebar("DOM")}}

Das Vorhandensein von Leerzeichen im [DOM](/de/docs/Web/API/Document_Object_Model) kann zu Layoutproblemen führen und die Manipulation des Inhaltbaums auf unerwartete Weise erschweren, je nachdem, wo sie sich befinden. Dieser Artikel untersucht, wann Schwierigkeiten auftreten können und welche Maßnahmen ergriffen werden können, um die daraus resultierenden Probleme zu mildern.

## Was sind Leerzeichen?

Leerzeichen sind jede Zeichenfolge, die nur aus Leerzeichen, Tabs oder Zeilenumbrüchen besteht (genauer gesagt, CRLF-Sequenzen, Wagenrücklauf oder Zeilenvorschübe). Diese Zeichen ermöglichen es Ihnen, Ihren Code so zu formatieren, dass er für Sie und andere Personen leicht lesbar ist. Tatsächlich ist ein großer Teil unseres Quellcodes voller dieser Leerzeichen, und wir neigen dazu, sie nur in einem Produktions-Build-Schritt zu entfernen, um die Größe des Code-Downloads zu reduzieren.

### Ignoriert HTML weitgehend Leerzeichen?

Im Fall von HTML werden Leerzeichen weitgehend ignoriert – Leerzeichen zwischen Wörtern werden als einzelnes Zeichen behandelt, und Leerzeichen am Anfang und Ende von Elementen sowie außerhalb von Elementen werden ignoriert. Betrachten Sie das folgende minimale Beispiel:

```html-nolint
<!doctype html>

  <h1>      Hello      World!     </h1>
```

Dieser Quellcode enthält ein paar Zeilenumbrüche nach dem `doctype` und eine Menge Leerzeichen vor, nach und innerhalb des `<h1>`-Elements, aber der Browser scheint es überhaupt nicht zu bemerken und zeigt einfach die Worte "Hello World!" an, als ob diese Zeichen überhaupt nicht existieren würden:

{{EmbedLiveSample('HTML_largely_ignores_whitespace')}}

Dies geschieht, damit Leerzeichenzeichen das Layout Ihrer Seite nicht beeinflussen. Das Erstellen von Platz um und innerhalb von Elementen ist die Aufgabe von CSS.

### Was passiert mit Leerzeichen?

Sie verschwinden jedoch nicht einfach.

Alle Leerzeichen, die sich im ursprünglichen Dokument außerhalb von HTML-Elementen befinden, sind im DOM vertreten. Dies ist intern erforderlich, damit der Editor die Formatierung von Dokumenten beibehalten kann. Das bedeutet, dass:

- Es einige Textknoten geben wird, die nur Leerzeichen enthalten, und
- Einige Textknoten Leerzeichen am Anfang oder Ende haben.

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

Der DOM-Baum dafür sieht so aus:

![Der DOM-Baum, der ein einfaches HTML-Dokument darstellt](dom-string.png)

Die Bewahrung von Leerzeichen im DOM ist in vielerlei Hinsicht nützlich, aber es gibt bestimmte Stellen, an denen dies bestimmte Layouts schwieriger zu implementieren macht und Probleme für Entwickler verursacht, die durch Knoten im DOM iterieren möchten. Wir werden uns diese später ansehen und einige Lösungen betrachten.

### Wie verarbeitet CSS Leerzeichen?

Die meisten Leerzeichenzeichen werden ignoriert, nicht alle jedoch. Im früheren Beispiel existiert eines der Leerzeichen zwischen "Hello" und "World!" noch, wenn die Seite in einem Browser gerendert wird. Im Browser-Engine gibt es Regeln, die entscheiden, welche Leerzeichen nützlich und welche nicht sind – diese sind mindestens zum Teil im [CSS Text Module Level 3](https://www.w3.org/TR/css-text-3/) spezifiziert, insbesondere die Teile über die [CSS `white-space`-Eigenschaft](https://www.w3.org/TR/css-text-3/#white-space-property) und [Details zur Leerzeichenverarbeitung](https://www.w3.org/TR/css-text-3/#white-space-processing), aber wir bieten unten auch eine einfachere Erklärung.

#### Beispiel

Betrachten wir ein weiteres Beispiel. Um es einfacher zu machen, haben wir einen Kommentar hinzugefügt, der alle Leerzeichen mit ◦, alle Tabs mit ⇥ und alle Zeilenumbrüche mit ⏎ anzeigt:

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
- Einen weiteren Textknoten (bestehend nur aus Tabs und Leerzeichen).

Aus diesem Grund bildet es einen sogenannten [Inline-Formatierungskontext](/de/docs/Web/CSS/Inline_formatting_context). Dies ist einer der möglichen Layout-Rendering-Kontexte, mit denen Browser-Engines arbeiten.

Innerhalb dieses Kontexts kann die Verarbeitung von Leerzeichencharakteren wie folgt zusammengefasst werden:

1. Zuerst werden alle Leerzeichen und Tabs sofort vor und nach einem Zeilenumbruch ignoriert, also wenn wir unser Beispiel-Markup von zuvor nehmen:

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

3. Danach werden Zeilenumbrüche in Leerzeichen umgewandelt:

   ```html-nolint
   <h1>◦◦◦Hello◦<span>◦World!</span>◦◦◦</h1>
   ```

4. Danach wird jedes Leerzeichen, das unmittelbar auf ein anderes Leerzeichen folgt (auch über zwei separate Inline-Elemente hinweg), ignoriert, sodass wir auf Folgendes enden:

   ```html-nolint
   <h1>◦Hello◦<span>World!</span>◦</h1>
   ```

5. Und schließlich werden Folgen von Leerzeichen am Anfang und Ende eines Elements entfernt, sodass wir letztendlich Folgendes erhalten:

   ```html-nolint
   <h1>Hello◦<span>World!</span></h1>
   ```

Deshalb sehen Personen, die die Webseite besuchen, den Satz "Hello World!" schön geschrieben oben auf der Seite, anstatt ein seltsam eingerücktes "Hello", gefolgt von einem noch seltsamer eingerückten "World!" in der Zeile darunter.

> **Hinweis:** [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) unterstützen das Hervorheben von Textknoten seit Version 52, was es einfacher macht, genau zu sehen, welche Knoten Leerzeichenzeichen enthalten. Reine Leerzeichenknoten sind mit einem "whitespace"-Label gekennzeichnet.

### Leerzeichen in Block-Formatierungskontexten

Oben haben wir uns nur Elemente angesehen, die Inline-Elemente enthalten, sowie Inline-Formatierungskontexte. Wenn ein Element mindestens ein Block-Element enthält, bildet es stattdessen einen sogenannten [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context).

Innerhalb dieses Kontexts werden Leerzeichen sehr unterschiedlich behandelt.

#### Beispiel

Schauen wir uns ein Beispiel an, um zu erklären, wie. Wir haben wie zuvor die Leerzeichenzeichen markiert.

Wir haben 3 Textknoten, die nur Leerzeichen enthalten: einen vor dem ersten `<div>`, einen zwischen den beiden `<div>`s und einen nach dem zweiten `<div>`.

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

Dies wird wie folgt gerendert:

{{EmbedLiveSample('Example_2')}}

#### Erklärung

Wir können zusammenfassen, wie hier die Leerzeichen behandelt werden (es können einige geringfügige Unterschiede im genauen Verhalten zwischen Browsern bestehen, aber grundsätzlich funktioniert es so):

1. Weil wir uns in einem Block-Formatierungskontext befinden, muss alles ein Block sein, also werden auch unsere 3 Textknoten zu Blöcken, genau wie die 2 `<div>`s. Blöcke nehmen die volle verfügbare Breite ein und sind übereinander gestapelt, was bedeutet, dass, ausgehend vom obigen Beispiel:

   ```html-nolint
   <body>⏎
   ⇥<div>◦◦Hello◦◦</div>⏎
   ⏎
   ◦◦◦<div>◦◦World!◦◦</div>◦◦⏎
   </body>
   ```

   ...wir mit einem Layout mit dieser Liste von Blöcken enden:

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

3. Die 3 leeren Blöcke, die wir jetzt haben, werden im endgültigen Layout keinen Platz einnehmen, da sie nichts enthalten, also werden wir nur 2 Blöcke haben, die Platz auf der Seite beanspruchen. Personen, die die Webseite ansehen, sehen die Wörter "Hello" und "World!" auf 2 getrennten Zeilen, wie man erwartet, dass 2 `<div>`s angeordnet sind. Die Browser-Engine hat im Grunde alle Leerzeichen ignoriert, die im Quellcode hinzugefügt wurden.

## Leerzeichen zwischen Inline- und Inline-Block-Elementen

Schauen wir uns nun ein paar Probleme an, die durch Leerzeichen auftreten können, und was dagegen getan werden kann. Zuerst werden wir uns ansehen, was mit Leerzeichen zwischen Inline- und Inline-Block-Elementen passiert. Tatsächlich haben wir dies bereits in unserem allerersten Beispiel gesehen, als wir beschrieben haben, wie Leerzeichen in Inline-Formatierungskontexten verarbeitet werden.

Wir haben gesagt, dass es Regeln gibt, um die meisten Zeichen zu ignorieren, aber dass Zeichen, die Wörter trennen, erhalten bleiben. Wenn Sie nur mit Block-Level-Elementen wie `<p>` zu tun haben, die nur Inline-Elemente wie `<em>`, `<strong>`, `<span>` usw. enthalten, kümmert Sie das normalerweise nicht, weil der zusätzliche Leerraum, der im Layout entsteht, hilfreich ist, um die Wörter im Satz zu trennen.

Es wird jedoch interessanter, wenn Sie anfangen, `inline-block`-Elemente zu verwenden. Diese Elemente verhalten sich von außen wie Inline-Elemente und von innen wie Blöcke und werden oft verwendet, um komplexere UI-Elemente als nur Text nebeneinander auf derselben Linie anzuzeigen, beispielsweise Navigationselemente.

Weil sie Blöcke sind, erwarten viele Menschen, dass sie sich auch so verhalten, aber das tun sie nicht. Wenn es Formatierungsleerzeichen zwischen benachbarten Inline-Elementen gibt, führt dies zu Leerraum im Layout, genau wie die Leerzeichen zwischen Wörtern im Text.

### Beispiel

Betrachten Sie dieses Beispiel (nochmals, wir haben einen HTML-Kommentar hinzugefügt, der die Leerzeichenzeichen im HTML anzeigt):

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

Sie möchten wahrscheinlich nicht die Lücken zwischen den Blöcken – abhängig vom Anwendungsfall (ist dies eine Liste von Avataren oder horizontale Nav-Buttons?), möchten Sie wahrscheinlich, dass die Elementseiten bündig aneinander liegen und dass Sie jeden Abstand selbst kontrollieren können.

Der HTML-Inspektor der Firefox DevTools hebt Textknoten hervor und zeigt Ihnen auch genau an, welchen Bereich die Elemente einnehmen – nützlich, wenn Sie sich wundern, was das Problem verursacht, und vielleicht denken, Sie hätten dort einen zusätzlichen Rand oder so etwas!

![Beispiel für die Anzeige von Leerzeichen zwischen Blöcken im Firefox DevTools HTML-Inspektor](whitespace-devtools.png)

### Lösungen

Es gibt einige Möglichkeiten, dieses Problem zu umgehen:

Verwenden Sie [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox), um die horizontale Liste von Elementen zu erstellen, anstatt eine `inline-block`-Lösung zu versuchen. Dies erledigt alles für Sie und ist definitiv die bevorzugte Lösung:

```css
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}
```

Wenn Sie sich auf `inline-block` verlassen müssen, könnten Sie die [`font-size`](/de/docs/Web/CSS/font-size) der Liste auf 0 setzen. Dies funktioniert nur, wenn Ihre Blöcke nicht mit ems (basierend auf `font-size`, sodass die Blockgröße auch null wird) dimensioniert sind. rems wären hier eine gute Wahl:

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

Oder Sie könnten negative Margen auf die Listenelemente setzen:

```css
li {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin-right: -0.25rem;
}
```

Sie können dieses Problem auch lösen, indem Sie Ihre Listenelemente alle in einer Zeile im Quellcode platzieren, wodurch die Leerzeichenknoten erst gar nicht erstellt werden:

```html-nolint
<li></li><li></li><li></li><li></li><li></li>
```

## DOM-Traversierung und Leerzeichen

Bei der [DOM](/de/docs/Web/API/Document_Object_Model)-Manipulation in JavaScript können Sie auch Probleme durch Leerzeichenknoten begegnen. Wenn Sie beispielsweise eine Referenz auf einen übergeordneten Knoten haben und dessen erstes Element-Kind mit [`Node.firstChild`](/de/docs/Web/API/Node/firstChild) beeinflussen möchten, aber sich nur ein Leerzeichenknoten direkt nach dem öffnenden Eltern-Tag befindet, erhalten Sie nicht das erwartete Ergebnis. Der Textknoten würde anstelle des gewünschten Elements ausgewählt.

Als ein weiteres Beispiel: Wenn Sie ein bestimmtes Subset von Elementen haben, an denen Sie basierend darauf etwas tun möchten, ob sie leer sind (keine Kindknoten haben) oder nicht, könnten Sie überprüfen, ob jedes Element leer ist, indem Sie etwas wie [`Node.hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes) verwenden, aber wenn Ziel-Elemente Textknoten enthalten, könnten Sie falsche Ergebnisse erhalten.

## Hilfsfunktionen für Leerzeichen

Der folgende JavaScript-Code definiert mehrere Funktionen, die den Umgang mit Leerzeichen im DOM erleichtern:

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
 * @param nod  A node implementing the |CharacterData| interface (i.e.,
 *             a |Text|, |Comment|, or |CDATASection| node
 * @return     True if all of the text content of |nod| is whitespace,
 *             otherwise false.
 */
function is_all_ws(nod) {
  return !/[^\t\n\r ]/.test(nod.textContent);
}

/**
 * Determine if a node should be ignored by the iterator functions.
 *
 * @param nod  An object implementing the DOM1 |Node| interface.
 * @return     true if the node is:
 *                1) A |Text| node that is all whitespace
 *                2) A |Comment| node
 *             and otherwise false.
 */

function is_ignorable(nod) {
  return (
    nod.nodeType === 8 || // A comment node
    (nod.nodeType === 3 && is_all_ws(nod))
  ); // a text node, all ws
}

/**
 * Version of |previousSibling| that skips nodes that are entirely
 * whitespace or comments. (Normally |previousSibling| is a property
 * of all DOM nodes that gives the sibling node, the node that is
 * a child of the same parent, that occurs immediately before the
 * reference node.)
 *
 * @param sib  The reference node.
 * @return     Either:
 *               1) The closest previous sibling to |sib| that is not
 *                  ignorable according to |is_ignorable|, or
 *               2) null if no such node exists.
 */
function node_before(sib) {
  while ((sib = sib.previousSibling)) {
    if (!is_ignorable(sib)) {
      return sib;
    }
  }
  return null;
}

/**
 * Version of |nextSibling| that skips nodes that are entirely
 * whitespace or comments.
 *
 * @param sib  The reference node.
 * @return     Either:
 *               1) The closest next sibling to |sib| that is not
 *                  ignorable according to |is_ignorable|, or
 *               2) null if no such node exists.
 */
function node_after(sib) {
  while ((sib = sib.nextSibling)) {
    if (!is_ignorable(sib)) {
      return sib;
    }
  }
  return null;
}

/**
 * Version of |lastChild| that skips nodes that are entirely
 * whitespace or comments. (Normally |lastChild| is a property
 * of all DOM nodes that gives the last of the nodes contained
 * directly in the reference node.)
 *
 * @param sib  The reference node.
 * @return     Either:
 *               1) The last child of |sib| that is not
 *                  ignorable according to |is_ignorable|, or
 *               2) null if no such node exists.
 */
function last_child(par) {
  let res = par.lastChild;
  while (res) {
    if (!is_ignorable(res)) {
      return res;
    }
    res = res.previousSibling;
  }
  return null;
}

/**
 * Version of |firstChild| that skips nodes that are entirely
 * whitespace and comments.
 *
 * @param sib  The reference node.
 * @return     Either:
 *               1) The first child of |sib| that is not
 *                  ignorable according to |is_ignorable|, or
 *               2) null if no such node exists.
 */
function first_child(par) {
  let res = par.firstChild;
  while (res) {
    if (!is_ignorable(res)) {
      return res;
    }
    res = res.nextSibling;
  }
  return null;
}

/**
 * Version of |data| that doesn't include whitespace at the beginning
 * and end and normalizes all whitespace to a single space. (Normally
 * |data| is a property of text nodes that gives the text of the node.)
 *
 * @param txt  The text node whose data should be returned
 * @return     A string giving the contents of the text node with
 *             whitespace collapsed.
 */
function data_of(txt) {
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

Der folgende Code zeigt die Nutzung der obigen Funktionen. Er iteriert über die Kinder eines Elements (dessen Kinder alle Elemente sind), um dasjenige zu finden, dessen Text `"This is the third paragraph"` ist, und ändert dann das Klassenattribut und den Inhalt dieses Absatzes.

```js
let cur = first_child(document.getElementById("test"));
while (cur) {
  if (data_of(cur.firstChild) === "This is the third paragraph.") {
    cur.className = "magic";
    cur.firstChild.textContent = "This is the magic paragraph.";
  }
  cur = node_after(cur);
}
```
