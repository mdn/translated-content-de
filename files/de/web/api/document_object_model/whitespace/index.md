---
title: Wie Whitespace von HTML, CSS und im DOM behandelt wird
slug: Web/API/Document_Object_Model/Whitespace
l10n:
  sourceCommit: 8417bff6e7d518ec1548f8af6a85be3fc5f4950c
---

{{DefaultAPISidebar("DOM")}}

Das Vorhandensein von Whitespace im [DOM](/de/docs/Web/API/Document_Object_Model) kann Layoutprobleme verursachen und die Manipulation des Inhaltbaums auf unerwartete Weise erschweren, abhängig davon, wo es sich befindet. Dieser Artikel untersucht, wann Schwierigkeiten auftreten können und was getan werden kann, um die daraus resultierenden Probleme zu mildern.

## Was ist Whitespace?

Whitespace ist jede Zeichenfolge, die nur aus Leerzeichen, Tabs oder Zeilenumbrüchen besteht (genauer gesagt CRLF-Sequenzen, Wagenrückläufen oder Zeilenfeeds). Diese Zeichen ermöglichen es Ihnen, Ihren Code so zu formatieren, dass er für Sie und andere leicht lesbar ist. Tatsächlich ist ein Großteil unseres Quellcodes voller dieser Whitespace-Zeichen, und wir neigen dazu, ihn in einem Produktionsschritt zu entfernen, um die Code-Download-Größen zu reduzieren.

### Ignoriert HTML weitgehend Whitespace?

Im Fall von HTML wird Whitespace weitgehend ignoriert — Whitespace zwischen Wörtern wird als einzelnes Zeichen behandelt, und Whitespace am Anfang und Ende von Elementen und außerhalb von Elementen wird ignoriert. Nehmen Sie das folgende minimale Beispiel:

```html-nolint
<!doctype html>

  <h1>      Hello      World!     </h1>
```

Dieser Quellcode enthält ein paar Zeilenumbrüche nach dem `doctype` und eine Reihe von Leerzeichen vor, nach und innerhalb des `<h1>`-Elements, aber der Browser scheint sich überhaupt nicht darum zu kümmern und zeigt einfach die Worte "Hello World!" an, als ob diese Zeichen überhaupt nicht existierten:

{{EmbedLiveSample('HTML_largely_ignores_whitespace')}}

Dies soll verhindern, dass Whitespace-Zeichen das Layout Ihrer Seite beeinflussen. Platz um und innerhalb von Elementen zu schaffen, ist die Aufgabe von CSS.

### Was passiert mit Whitespace?

Sie verschwinden jedoch nicht einfach.

Alle Whitespace-Zeichen, die sich außerhalb von HTML-Elementen im ursprünglichen Dokument befinden, werden im DOM dargestellt. Dies ist intern erforderlich, damit der Editor die Formatierung von Dokumenten beibehalten kann. Das bedeutet, dass:

- Es einige Textknoten geben wird, die nur Whitespace enthalten, und
- Einige Textknoten Whitespace am Anfang oder Ende haben werden.

Nehmen Sie beispielsweise das folgende Dokument:

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

Das Bewahren von Whitespace-Zeichen im DOM ist auf viele Arten nützlich, aber es gibt bestimmte Stellen, an denen dies bestimmte Layouts schwieriger umsetzbar macht und Probleme für Entwickler verursacht, die durch Knoten im DOM iterieren möchten. Wir werden uns diese und einige Lösungen später noch genauer ansehen.

### Wie verarbeitet CSS Whitespace?

Die meisten Whitespace-Zeichen werden ignoriert, aber nicht alle. Im vorherigen Beispiel existiert einer der Leerzeichen zwischen "Hello" und "World!" immer noch, wenn die Seite in einem Browser gerendert wird. Es gibt Regeln in der Browser-Engine, die entscheiden, welche Whitespace-Zeichen nützlich sind und welche nicht — diese sind zumindest teilweise im [CSS Text Module Level 3](https://www.w3.org/TR/css-text-3/) spezifiziert, insbesondere die Teile über die [CSS `white-space` Eigenschaft](https://www.w3.org/TR/css-text-3/#white-space-property) und [Whitespace-Verarbeitungsdetails](https://www.w3.org/TR/css-text-3/#white-space-processing), aber wir bieten unten auch eine einfachere Erklärung.

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
- Einen weiteren Textknoten (bestehend nur aus Tabs und Leerzeichen).

Da es dies tut, wird ein Kontext namens [Inline-Formatierungskontext](/de/docs/Web/CSS/Inline_formatting_context) geschaffen. Dies ist einer der möglichen Layout-Rendering-Kontexte, mit denen Browser-Engines arbeiten.

Innerhalb dieses Kontexts kann die Verarbeitung von Whitespace-Zeichen wie folgt zusammengefasst werden:

1. Zuerst werden alle Leerzeichen und Tabs, die unmittelbar vor und nach einem Zeilenumbruch stehen, ignoriert, also, wenn wir unser Beispiel-Markup von vorher nehmen:

   ```html-nolint
   <h1>◦◦◦Hello◦⏎
   ⇥⇥⇥⇥<span>◦World!</span>⇥◦◦</h1>
   ```

   ...und diese erste Regel anwenden, erhalten wir:

   ```html-nolint
   <h1>◦◦◦Hello⏎
   <span>◦World!</span>⇥◦◦</h1>
   ```

2. Als nächstes werden alle Tab-Zeichen wie Leerzeichen behandelt, also wird das Beispiel zu:

   ```html-nolint
   <h1>◦◦◦Hello⏎
   <span>◦World!</span>◦◦◦</h1>
   ```

3. Als nächstes werden Zeilenumbrüche in Leerzeichen konvertiert:

   ```html-nolint
   <h1>◦◦◦Hello◦<span>◦World!</span>◦◦◦</h1>
   ```

4. Danach wird jedes Leerzeichen, das unmittelbar auf ein anderes Leerzeichen folgt (auch über zwei getrennte Inline-Elemente hinweg), ignoriert, sodass wir am Ende Folgendes haben:

   ```html-nolint
   <h1>◦Hello◦<span>World!</span>◦</h1>
   ```

5. Und schließlich werden Folgen von Leerzeichen am Anfang und Ende eines Elements entfernt, sodass wir schließlich dies erhalten:

   ```html-nolint
   <h1>Hello◦<span>World!</span></h1>
   ```

Aus diesem Grund sehen Besucher der Webseite den Satz "Hello World!" schön oben auf der Seite geschrieben, anstatt ein merkwürdig eingerücktes "Hello" gefolgt von einem noch ungewöhnlicher eingerückten "World!" in der Zeile darunter.

> **Note:** Die [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) unterstützen seit Version 52 das Hervorheben von Textknoten, was es einfacher macht, genau zu sehen, in welchen Knoten sich Whitespace-Zeichen befinden. Reine Whitespace-Knoten sind mit einem "whitespace"-Label markiert.

### Whitespace in Block-Formatierungskontexten

Oben haben wir nur Elemente betrachtet, die Inline-Elemente enthalten, und Inline-Formatierungskontexte. Wenn ein Element mindestens ein Block-Element enthält, dann etabliert es stattdessen, was als [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) bezeichnet wird.

Innerhalb dieses Kontexts wird Whitespace ganz anders behandelt.

#### Beispiel

Schauen wir uns ein Beispiel an, um zu erklären, wie. Wir haben die Whitespace-Zeichen wie zuvor markiert.

Wir haben 3 Textknoten, die nur Whitespace enthalten: einen vor dem ersten `<div>`, einen zwischen den 2 `<div>`s und einen nach dem zweiten `<div>`.

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

Wir können zusammenfassen, wie der Whitespace hier behandelt wird (es gibt möglicherweise einige geringfügige Unterschiede im genauen Verhalten zwischen verschiedenen Browsern, aber im Grunde funktioniert es so):

1. Da wir uns in einem Block-Formatierungskontext befinden, muss alles ein Block sein, also werden unsere 3 Textknoten ebenfalls zu Blöcken, ähnlich wie die 2 `<div>`s. Blöcke besetzen die gesamte verfügbare Breite und werden übereinander gestapelt, was bedeutet, dass wir, beginnend mit dem obigen Beispiel:

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

2. Dies wird dann weiter vereinfacht, indem die Verarbeitungsregeln für Whitespace in Inline-Formatierungskontexten auf diese Blöcke angewendet werden:

   ```html
   <block></block>
   <block>Hello</block>
   <block></block>
   <block>World!</block>
   <block></block>
   ```

3. Die 3 leeren Blöcke, die wir jetzt haben, werden im endgültigen Layout keinen Platz einnehmen, da sie nichts enthalten, so dass wir am Ende nur 2 Blöcke haben, die auf der Seite Platz einnehmen. Die Leute, die die Webseite besuchen, sehen die Wörter "Hello" und "World!" auf 2 separaten Zeilen, so wie man es erwarten würde, dass 2 `<div>`s angeordnet sind. Die Browser-Engine hat im Wesentlichen den gesamten Whitespace ignoriert, der im Quellcode hinzugefügt wurde.

## Leerzeichen zwischen Inline- und Inline-Block-Elementen

Kommen wir nun zu einigen Problemen, die durch Whitespace entstehen können, und was dagegen getan werden kann. Zuerst schauen wir uns an, was mit Leerzeichen zwischen Inline- und Inline-Block-Elementen passiert. Tatsächlich haben wir dies bereits in unserem allerersten Beispiel gesehen, als wir beschrieben haben, wie Whitespace in Inline-Formatierungskontexten verarbeitet wird.

Wir sagten, dass es Regeln gibt, um die meisten Zeichen zu ignorieren, aber dass worttrennende Zeichen verbleiben. Wenn Sie nur mit Block-Level-Elementen wie `<p>` arbeiten, die nur Inline-Elemente wie `<em>`, `<strong>`, `<span>`, usw. enthalten, kümmern Sie sich normalerweise nicht darum, da der zusätzliche Whitespace, der tatsächlich ins Layout gelangt, hilfreich ist, um die Wörter im Satz zu trennen.

Es wird jedoch interessanter, wenn Sie beginnen, `inline-block`-Elemente zu verwenden. Diese Elemente verhalten sich von außen wie Inline-Elemente und von innen wie Blöcke und werden oft verwendet, um komplexere UI-Stücke als nur Text nebeneinander auf derselben Linie anzuzeigen, beispielsweise Navigationsmenüpunkte.

Da sie Blöcke sind, erwarten viele Leute, dass sie sich entsprechend verhalten, aber in Wirklichkeit tun sie das nicht. Wenn zwischen benachbarten Inline-Elementen Format-Whitespace vorhanden ist, führt dies zu Platz im Layout, genau wie die Leerzeichen zwischen Wörtern im Text.

### Beispiel

Betrachten Sie dieses Beispiel (wir haben erneut einen HTML-Kommentar eingefügt, der die Whitespace-Zeichen im HTML zeigt):

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

Wahrscheinlich möchten Sie die Lücken zwischen den Blöcken nicht — je nach Anwendungsfall (ist dies eine Liste von Avataren oder horizontale Navigationsschaltflächen?), möchten Sie wahrscheinlich, dass die Elementseiten bündig nebeneinander liegen und dass Sie jegliche Abstände selbst steuern können.

Der HTML-Inspektor von Firefox DevTools hebt Textknoten hervor und zeigt Ihnen genau, welchen Bereich die Elemente einnehmen — nützlich, wenn Sie sich fragen, was das Problem verursacht und vielleicht denken, dass Sie da irgendwelche zusätzlichen Ränder drin haben oder so etwas!

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

Wenn Sie sich auf `inline-block` verlassen müssen, könnten Sie die [`font-size`](/de/docs/Web/CSS/font-size) der Liste auf 0 setzen. Dies funktioniert nur, wenn Ihre Blöcke nicht mit ems (basiert auf der `font-size`, sodass die Blockgröße auch 0 wäre) dimensioniert sind. Rems wären hier eine gute Wahl:

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

Oder Sie könnten negativen Rand auf den Listenelementen setzen:

```css
li {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin-right: -0.25rem;
}
```

Sie können dieses Problem auch lösen, indem Sie Ihre Listenelemente alle auf derselben Linie im Quellcode platzieren, wodurch die Whitespace-Knoten erst gar nicht erstellt werden:

```html-nolint
<li></li><li></li><li></li><li></li><li></li>
```

## DOM-Traversierung und Whitespace

Beim Versuch, in JavaScript [DOM](/de/docs/Web/API/Document_Object_Model)-Manipulationen durchzuführen, können Sie ebenfalls auf Probleme stoßen, weil Whitespace-Knoten vorhanden sind. Wenn Sie beispielsweise eine Referenz zu einem übergeordneten Knoten haben und dessen erstes Kind-Element mit [`Node.firstChild`](/de/docs/Web/API/Node/firstChild) beeinflussen möchten, erhalten Sie, falls sich direkt nach dem öffnenden Elterntag ein ungewollter Whitespace-Knoten befindet, nicht das erwartete Ergebnis. Der Textknoten würde statt des Elements, das Sie beeinflussen möchten, ausgewählt.

Ein weiteres Beispiel: Wenn Sie über einen bestimmten Satz von Elementen verfügen, auf die Sie basierend darauf etwas tun möchten, ob sie leer sind (keine Kindknoten haben) oder nicht, könnten Sie überprüfen, ob jedes Element leer ist, indem Sie beispielsweise [`Node.hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes) verwenden, aber erneut, wenn Ziel-Elemente Textknoten enthalten, könnten Sie falsche Ergebnisse erhalten.

## Whitespace-Hilfsfunktionen

Der folgende JavaScript-Code definiert mehrere Funktionen, die den Umgang mit Whitespace im DOM erleichtern:

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

Der folgende Code demonstriert die Verwendung der obigen Funktionen. Es iteriert über die Kinder eines Elements (dessen Kinder alle Elemente sind), um dasjenige zu finden, dessen Text `"This is the third paragraph"` ist, und dann das Klassenattribut und den Inhalt dieses Absatzes zu ändern.

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
