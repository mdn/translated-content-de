---
title: Wie Leerzeichen von HTML, CSS und im DOM behandelt werden
slug: Web/API/Document_Object_Model/Whitespace
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{DefaultAPISidebar("DOM")}}

Das Vorhandensein von Leerzeichen im [DOM](/de/docs/Web/API/Document_Object_Model) kann je nach Platzierung Layoutprobleme verursachen und die Manipulation des Inhaltsbaums auf unerwartete Weise erschweren. Dieser Artikel untersucht, wann Schwierigkeiten auftreten können, und welche Maßnahmen getroffen werden können, um die daraus resultierenden Probleme zu mildern.

## Was ist ein Leerzeichen?

Ein Leerzeichen ist eine beliebige Textzeichenfolge, die nur aus Leerzeichen, Tabs oder Zeilenumbrüchen (genauer gesagt CRLF-Sequenzen, Wagenrücklauf oder Zeilenfeed) besteht. Diese Zeichen ermöglichen es Ihnen, Ihren Code so zu formatieren, dass er von Ihnen selbst und anderen Personen leicht lesbar ist. Tatsächlich ist viel unseres Quellcodes voll von diesen Leerzeichenzeichen, und wir neigen dazu, sie in einem Produktions-Build-Schritt zu entfernen, um die Größen der Code-Downloads zu reduzieren.

### Ignoriert HTML weitgehend Leerzeichen?

Im Fall von HTML werden Leerzeichen weitgehend ignoriert — Leerzeichen zwischen Wörtern werden als ein einzelnes Zeichen behandelt, und Leerzeichen am Anfang und Ende von Elementen sowie außerhalb von Elementen werden ignoriert. Betrachten Sie das folgende minimale Beispiel:

```html-nolint
<!doctype html>

  <h1>      Hello      World!     </h1>
```

Dieser Quellcode enthält ein paar Zeilenumbrüche nach dem `doctype` und eine Menge Leerzeichen vor, nach und innerhalb des `<h1>`-Elements, aber der Browser scheint sich überhaupt nicht darum zu kümmern und zeigt einfach die Worte "Hello World!" an, als ob diese Zeichen überhaupt nicht vorhanden wären:

{{EmbedLiveSample('HTML_largely_ignores_whitespace')}}

Dies ist so, damit Leerzeichenzeichen das Layout Ihrer Seite nicht beeinflussen. Das Erstellen von Abständen um und innerhalb von Elementen ist die Aufgabe von CSS.

### Was passiert mit Leerzeichen?

Sie verschwinden jedoch nicht einfach.

Alle Leerzeichen, die sich in der Originaldokumentation außerhalb von HTML-Elementen befinden, werden im DOM dargestellt. Dies ist intern erforderlich, damit der Editor die Formatierung von Dokumenten beibehalten kann. Das bedeutet, dass:

- Es einige Textknoten gibt, die nur Leerzeichen enthalten, und
- Einige Textknoten am Anfang oder Ende Leerzeichen haben werden.

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

Das Beibehalten von Leerzeichen im DOM ist in vielerlei Hinsicht nützlich, aber es gibt bestimmte Stellen, an denen dies bestimmte Layouts schwieriger zu implementieren macht und Probleme für Entwickler verursacht, die durch die Knoten im DOM iterieren möchten. Wir werden uns später diese Probleme und einige Lösungen ansehen.

### Wie verarbeitet CSS Leerzeichen?

Die meisten Leerzeichen werden ignoriert, aber nicht alle. Im vorherigen Beispiel existiert eines der Leerzeichen zwischen "Hello" und "World!" noch, wenn die Seite in einem Browser gerendert wird. Es gibt Regeln in der Browser-Engine, die entscheiden, welche Leerzeichen nützlich sind und welche nicht — diese sind zumindest teilweise im [CSS Text Module Level 3](https://www.w3.org/TR/css-text-3/) festgelegt, insbesondere die Teile über die [CSS `white-space` Eigenschaft](https://www.w3.org/TR/css-text-3/#white-space-property) und [Details zur Leerzeichen-Verarbeitung](https://www.w3.org/TR/css-text-3/#white-space-processing), aber wir bieten unten auch eine einfachere Erklärung.

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

wird im Browser folgendermaßen gerendert:

{{EmbedLiveSample('Example')}}

#### Erklärung

Das `<h1>`-Element enthält nur Block-Elemente. Tatsächlich enthält es:

- Einen Textknoten (bestehend aus einigen Leerzeichen, dem Wort "Hello" und einigen Tabs).
- Ein Inline-Element (das `<span>`, das ein Leerzeichen und das Wort "World!" enthält).
- Einen weiteren Textknoten (bestehend nur aus Tabs und Leerzeichen).

Deshalb wird es als eine sogenannte [Inline-Formatierungs-Kontext](/de/docs/Web/CSS/Inline_formatting_context) etabliert. Dies ist einer der möglichen Layout-Rendering-Kontexte, mit denen Browser-Engines arbeiten.

Innerhalb dieses Kontexts kann die Verarbeitung von Leerzeichen wie folgt zusammengefasst werden:

1. Zunächst werden alle Leerzeichen und Tabs unmittelbar vor und nach einem Zeilenumbruch ignoriert, wenn wir also unser Beispiel-Markup von davor nehmen:

   ```html-nolint
   <h1>◦◦◦Hello◦⏎
   ⇥⇥⇥⇥<span>◦World!</span>⇥◦◦</h1>
   ```

   ...und diese erste Regel anwenden, erhalten wir:

   ```html-nolint
   <h1>◦◦◦Hello⏎
   <span>◦World!</span>⇥◦◦</h1>
   ```

2. Als nächstes werden alle Tabulatorzeichen wie Leerzeichen behandelt, sodass das Beispiel wird:

   ```html-nolint
   <h1>◦◦◦Hello⏎
   <span>◦World!</span>◦◦◦</h1>
   ```

3. Im nächsten Schritt werden Zeilenumbrüche in Leerzeichen umgewandelt:

   ```html-nolint
   <h1>◦◦◦Hello◦<span>◦World!</span>◦◦◦</h1>
   ```

4. Danach wird jedes sofort auf ein weiteres Leerzeichen folgende Leerzeichen ignoriert, selbst über zwei separate Inline-Elemente hinweg, sodass wir Folgendes erhalten:

   ```html-nolint
   <h1>◦Hello◦<span>World!</span>◦</h1>
   ```

5. Schließlich werden Leerzeichenfolgen am Anfang und Ende eines Elements entfernt, sodass wir schließlich dies erhalten:

   ```html-nolint
   <h1>Hello◦<span>World!</span></h1>
   ```

Deshalb sehen Personen, die die Webseite besuchen, den Satz "Hello World!" schön oben auf der Seite geschrieben, anstatt ein seltsam eingerücktes "Hello", gefolgt von einem noch seltsamer eingerückten "World!" auf der darunter liegenden Zeile.

> **Hinweis:** [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) unterstützen das Hervorheben von Textknoten seit Version 52, was es einfacher macht, genau zu sehen, in welchen Knoten Leerzeichenzeichen enthalten sind. Reine Leerzeichensknoten sind mit einem "whitespace"-Label gekennzeichnet.

### Leerzeichen in Block-Formatierungskontexten

Oben haben wir uns nur Elemente angesehen, die Inline-Elemente enthalten, und Inline-Formatierungskontexte. Wenn ein Element mindestens ein Block-Element enthält, etabliert es stattdessen einen sogenannten [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context).

Innerhalb dieses Kontexts werden Leerzeichen sehr unterschiedlich behandelt.

#### Beispiel

Lassen Sie uns ein Beispiel betrachten, um zu erklären, wie. Wir haben die Leerzeichen wie zuvor markiert.

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

Dies wird so gerendert:

{{EmbedLiveSample('Example_2')}}

#### Erklärung

Wir können zusammenfassen, wie die Leerzeichen hier behandelt werden (es kann einige geringe Unterschiede im genauen Verhalten zwischen Browsern geben, aber das funktioniert im Wesentlichen):

1. Da wir uns in einem Block-Formatierungskontext befinden, muss alles ein Block sein, sodass unsere 3 Textknoten ebenfalls Blöcke werden, genau wie die 2 `<div>`s. Blöcke nehmen die volle verfügbare Breite ein und stapeln sich übereinander, was bedeutet, dass wir, beginnend mit dem obigen Beispiel:

   ```html-nolint
   <body>⏎
   ⇥<div>◦◦Hello◦◦</div>⏎
   ⏎
   ◦◦◦<div>◦◦World!◦◦</div>◦◦⏎
   </body>
   ```

   ...mit einem Layout enden, das aus dieser Liste von Blöcken besteht:

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

3. Die 3 leeren Blöcke, die wir jetzt haben, nehmen im endgültigen Layout keinen Platz ein, da sie nichts enthalten, sodass wir am Ende nur 2 Blöcke haben, die Platz auf der Seite einnehmen. Personen, die die Webseite betrachten, sehen die Worte "Hello" und "World!" auf 2 separaten Zeilen, so wie Sie erwarten würden, dass 2 `<div>`s angeordnet sind. Die Browser-Engine hat im Wesentlichen alle Leerzeichen, die im Quellcode hinzugefügt wurden, ignoriert.

## Leerraum zwischen Inline- und Inline-Block-Elementen

Lassen Sie uns weitergehen und einige Probleme betrachten, die durch Leerzeichen auftreten können, und was dagegen getan werden kann. Zunächst werden wir uns ansehen, was mit Leerzeichen zwischen Inline- und Inline-Block-Elementen passiert. Tatsächlich haben wir das bereits in unserem allerersten Beispiel gesehen, als wir beschrieben haben, wie Leerzeichen innerhalb von Inline-Formatierungskontexten verarbeitet werden.

Wir sagten, dass es Regeln gibt, um die meisten Zeichen zu ignorieren, aber dass Zeichen zur Worttrennung verbleiben. Wenn Sie nur mit Block-Level-Elemente wie `<p>` zu tun haben, die nur Inline-Elemente wie `<em>`, `<strong>`, `<span>`, usw. enthalten, kümmert es Sie normalerweise nicht, da das zusätzliche Leerzeichen, das im Layout verbleibt, hilfreich ist, um die Wörter im Satz zu trennen.

Es wird jedoch interessanter, wenn Sie beginnen, `inline-block`-Elemente zu verwenden. Diese Elemente verhalten sich außen wie Inline-Elemente und innen wie Blöcke und werden oft verwendet, um komplexere UI-Komponenten als nur Text nebeneinander in derselben Zeile anzuzeigen, beispielsweise Navigationsmenüpunkte.

Da sie Blöcke sind, erwarten viele Menschen, dass sie sich auch als solche verhalten, doch das tun sie nicht. Wenn zwischen benachbarten Inline-Elementen Formatierungsleerzeichen vorhanden sind, führt dies zu Leerraum im Layout, genau wie die Leerzeichen zwischen Wörtern im Text.

### Beispiel

Betrachten Sie dieses Beispiel (wir haben erneut einen HTML-Kommentar hinzugefügt, der die Leerzeichen im HTML anzeigt):

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

Sie möchten wahrscheinlich nicht die Lücken zwischen den Blöcken — je nach Anwendungsfall (ist dies eine Liste von Avataren oder horizontale Navigationsschaltflächen?), möchten Sie wahrscheinlich, dass die Elementseiten bündig zueinander sind und dass Sie jeden Abstand selbst steuern können.

Der HTML-Inspektor der Firefox DevTools wird Textknoten hervorheben und Ihnen genau zeigen, welchen Bereich die Elemente einnehmen — nützlich, wenn Sie sich fragen, was das Problem verursacht, und vielleicht denken, dass Sie dort eine zusätzliche Margin haben oder etwas Ähnliches!

![Beispiel für die Anzeige von Leerzeichen zwischen Blöcken im HTML-Inspektor der Firefox DevTools](whitespace-devtools.png)

### Lösungen

Es gibt mehrere Möglichkeiten, dieses Problem zu lösen:

Verwenden Sie [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox), um die horizontale Liste von Elementen zu erstellen, anstatt eine `inline-block`-Lösung zu versuchen. Dies erledigt alles für Sie und ist definitiv die bevorzugte Lösung:

```css
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}
```

Wenn Sie sich auf `inline-block` verlassen müssen, könnten Sie die [`font-size`](/de/docs/Web/CSS/font-size) der Liste auf 0 setzen. Dies funktioniert nur, wenn Ihre Blöcke nicht mit ems Größen bemessen sind (basierend auf der `font-size`, sodass die Blockgröße ebenfalls 0 wäre). rems wären hier eine gute Wahl:

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

Oder Sie könnten einen negativen Rand für die Listenelemente festlegen:

```css
li {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin-right: -0.25rem;
}
```

Sie können dieses Problem auch lösen, indem Sie Ihre Listenelemente alle in derselben Zeile im Quelltext platzieren, was dazu führt, dass die Leerzeichenknoten erst gar nicht erstellt werden:

```html-nolint
<li></li><li></li><li></li><li></li><li></li>
```

## DOM-Durchlauf und Leerzeichen

Beim Versuch, [DOM](/de/docs/Web/API/Document_Object_Model) Manipulationen in JavaScript durchzuführen, können auch Probleme aufgrund von Leerzeichenknoten auftreten. Wenn Sie beispielsweise eine Referenz zu einem übergeordneten Knoten haben und dessen erstes Elementkind mit [`Node.firstChild`](/de/docs/Web/API/Node/firstChild) beeinflussen möchten, erhalten Sie möglicherweise nicht das erwartete Ergebnis, wenn sich unmittelbar nach dem öffnenden übergeordneten Tag ein überflüssiger Leerzeichenknoten befindet. Der Textknoten würde ausgewählt, anstelle des Elements, das Sie verändern möchten.

Als weiteres Beispiel: Wenn Sie einen bestimmten Satz von Elementen haben, auf die Sie basierend darauf, ob sie leer sind (keine Kindknoten haben) oder nicht, etwas tun möchten, könnten Sie überprüfen, ob jedes Element leer ist, indem Sie etwas wie [`Node.hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes) verwenden, aber erneut, wenn Ziel-Elemente Textknoten enthalten, könnten Sie falsche Ergebnisse erhalten.

## Leerzeichen-Hilfsfunktionen

Der folgende JavaScript-Code definiert mehrere Funktionen, die es einfacher machen, mit Leerzeichen im DOM umzugehen:

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

Der folgende Code demonstriert die Verwendung der oben genannten Funktionen. Er iteriert über die Kinder eines Elements (dessen Kinder allesamt Elemente sind), um das Element zu finden, dessen Text `"This is the third paragraph"` ist, und ändert dann das Klassenattribut und den Inhalt dieses Absatzes.

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
