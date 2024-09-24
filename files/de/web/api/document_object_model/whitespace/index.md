---
title: Wie Leerzeichen von HTML, CSS und im DOM behandelt werden
slug: Web/API/Document_Object_Model/Whitespace
l10n:
  sourceCommit: 8417bff6e7d518ec1548f8af6a85be3fc5f4950c
---

{{DefaultAPISidebar("DOM")}}

Die Präsenz von Leerzeichen im [DOM](/de/docs/Web/API/Document_Object_Model) kann je nach Position Layoutprobleme verursachen und die Manipulation des Inhaltsbaums auf unerwartete Weise erschweren. Dieser Artikel untersucht, wann Schwierigkeiten auftreten können, und zeigt auf, was getan werden kann, um daraus resultierende Probleme zu mindern.

## Was sind Leerzeichen?

Leerzeichen sind alle Zeichenfolgen, die nur aus Leerzeichen, Tabulatoren oder Zeilenumbrüchen (genauer gesagt, CRLF-Sequenzen, Wagenrückläufen oder Zeilenvorschüben) bestehen. Diese Zeichen ermöglichen es Ihnen, Ihren Code so zu formatieren, dass er für Sie und andere leicht lesbar ist. Tatsächlich ist ein Großteil unseres Quellcodes voller dieser Leerzeichen, und wir neigen dazu, sie nur in einem Produktionserstellungsschritt zu entfernen, um die Größe des herunterzuladenden Codes zu reduzieren.

### HTML ignoriert überwiegend Leerzeichen?

Im Fall von HTML werden Leerzeichen größtenteils ignoriert — Leerzeichen zwischen Wörtern werden als ein Zeichen behandelt, und Leerzeichen am Anfang und Ende von Elementen sowie außerhalb von Elementen werden ignoriert. Betrachten Sie das folgende Minimalbeispiel:

```html-nolint
<!doctype html>

  <h1>      Hello      World!     </h1>
```

Dieser Quellcode enthält einige Zeilenumbrüche nach dem `doctype` und eine Menge Leerzeichen vor, nach und innerhalb des `<h1>`-Elements, aber der Browser scheint sich überhaupt nicht darum zu kümmern und zeigt einfach die Wörter "Hello World!" an, als ob diese Zeichen gar nicht existieren würden:

{{EmbedLiveSample('HTML_largely_ignores_whitespace')}}

Dies sorgt dafür, dass Leerzeichen keine Auswirkungen auf das Layout Ihrer Seite haben. Das Erstellen von Abständen um und innerhalb von Elementen ist die Aufgabe von CSS.

### Was passiert mit Leerzeichen?

Sie verschwinden jedoch nicht einfach.

Alle Leerzeichen, die sich im Originaldokument außerhalb von HTML-Elementen befinden, sind im DOM vertreten. Dies ist intern erforderlich, damit der Editor die Formatierung von Dokumenten beibehalten kann. Das bedeutet:

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

Der DOM-Baum für dieses Dokument sieht so aus:

![Der DOM-Baum, der ein einfaches HTML-Dokument darstellt](dom-string.png)

Das Beibehalten von Leerzeichen im DOM ist in vielerlei Hinsicht nützlich, aber es gibt bestimmte Bereiche, in denen dies bestimmte Layouts schwerer umsetzbar macht und Probleme für Entwickler verursacht, die durch Knoten im DOM iterieren möchten. Später werden wir diese und einige Lösungen genauer betrachten.

### Wie verarbeitet CSS Leerzeichen?

Die meisten Leerzeichen werden ignoriert, jedoch nicht alle. Im früheren Beispiel bleibt eines der Leerzeichen zwischen "Hello" und "World!" bestehen, wenn die Seite in einem Browser gerendert wird. Im Browser-Rendering gibt es Regeln, die entscheiden, welche Leerzeichen nützlich sind und welche nicht — diese sind zumindest teilweise im [CSS Text Module Level 3](https://www.w3.org/TR/css-text-3/) festgelegt, insbesondere die Teile über die [CSS `white-space`-Eigenschaft](https://www.w3.org/TR/css-text-3/#white-space-property) und [Einzelheiten zur Leerzeichenverarbeitung](https://www.w3.org/TR/css-text-3/#white-space-processing), aber wir bieten auch eine einfachere Erklärung unten an.

#### Beispiel

Betrachten wir ein weiteres Beispiel. Um es zu erleichtern, haben wir einen Kommentar hinzugefügt, der alle Leerzeichen mit ◦, alle Tabulatoren mit ⇥ und alle Zeilenumbrüche mit ⏎ darstellt:

Dieses Beispiel:

```html-nolint
<h1>   Hello
        <span> World!</span>   </h1>

<!--
<h1>◦◦◦Hello◦⏎
⇥⇥⇥⇥<span>◦World!</span>⇥◦◦</h1>
-->
```

wird im Browser so gerendert:

{{EmbedLiveSample('Example')}}

#### Erklärung

Das `<h1>`-Element enthält nur Inline-Elemente. Tatsächlich enthält es:

- Einen Textknoten (bestehend aus einigen Leerzeichen, dem Wort "Hello" und einigen Tabulatoren).
- Ein Inline-Element (das `<span>`, welches ein Leerzeichen und das Wort "World!" enthält).
- Einen weiteren Textknoten (bestehend nur aus Tabulatoren und Leerzeichen).

Auf diese Weise wird ein sogenannter [Inline-Formatierungskontext](/de/docs/Web/CSS/Inline_formatting_context) etabliert. Dies ist einer der möglichen Layout-Rendering-Kontexte, mit denen Browser-Engines arbeiten.

Innerhalb dieses Kontexts kann die Verarbeitung von Leerzeichen wie folgt zusammengefasst werden:

1. Zuerst werden alle Leerzeichen und Tabulatoren, die unmittelbar vor und nach einem Zeilenumbruch stehen, ignoriert. Nehmen wir unser Beispiel-Markup von zuvor:

   ```html-nolint
   <h1>◦◦◦Hello◦⏎
   ⇥⇥⇥⇥<span>◦World!</span>⇥◦◦</h1>
   ```

   ...und wenden diese erste Regel an, erhalten wir:

   ```html-nolint
   <h1>◦◦◦Hello⏎
   <span>◦World!</span>⇥◦◦</h1>
   ```

2. Als nächstes werden alle Tabulatorzeichen wie Leerzeichen behandelt, das Beispiel wird:

   ```html-nolint
   <h1>◦◦◦Hello⏎
   <span>◦World!</span>◦◦◦</h1>
   ```

3. Als nächstes werden Zeilenumbrüche in Leerzeichen umgewandelt:

   ```html-nolint
   <h1>◦◦◦Hello◦<span>◦World!</span>◦◦◦</h1>
   ```

4. Danach wird jedes Leerzeichen, das unmittelbar einem anderen folgt (selbst über zwei separate Inline-Elemente hinweg), ignoriert, sodass wir erhalten:

   ```html-nolint
   <h1>◦Hello◦<span>World!</span>◦</h1>
   ```

5. Und schließlich werden Sequenzen von Leerzeichen am Anfang und Ende eines Elements entfernt, sodass wir schließlich Folgendes erhalten:

   ```html-nolint
   <h1>Hello◦<span>World!</span></h1>
   ```

Daher sehen die Besucher der Webseite den Ausdruck "Hello World!" schön am oberen Teil der Seite geschrieben, anstatt eines seltsam eingerückten "Hello" gefolgt von einem noch seltsamer eingerückten "World!" in der Zeile darunter.

> **Hinweis:** [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html) unterstützen seit Version 52 das Hervorheben von Textknoten, was es erleichtert zu sehen, innerhalb welcher Knoten sich Leerzeichen befinden. Reine Leerzeichenknoten sind mit einem "whitespace"-Label gekennzeichnet.

### Leerzeichen im Block-Formatierungskontext

Oben haben wir uns Elemente angesehen, die Inline-Elemente enthalten, sowie Inline-Formatierungskontexte. Wenn ein Element mindestens ein Block-Element enthält, etabliert es stattdessen einen sogenannten [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context).

Innerhalb dieses Kontexts werden Leerzeichen sehr unterschiedlich behandelt.

#### Beispiel

Sehen wir uns ein Beispiel an, um zu erklären, wie. Wir haben die Leerzeichen wie zuvor markiert.

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

Dieses wird folgendermaßen gerendert:

{{EmbedLiveSample('Example_2')}}

#### Erklärung

Wir können zusammenfassen, wie die Leerzeichen hier behandelt werden (es kann leichte Unterschiede im Verhalten zwischen Browsern geben, aber das funktioniert im Wesentlichen):

1. Da wir uns in einem Block-Formatierungskontext befinden, muss alles ein Block sein, daher werden unsere 3 Textknoten ebenfalls zu Blöcken, genau wie die 2 `<div>`s. Blöcke beanspruchen die volle verfügbare Breite und werden übereinander gestapelt, was bedeutet, dass wir, ausgehend vom obigen Beispiel:

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

3. Die 3 leeren Blöcke, die wir jetzt haben, werden im endgültigen Layout keinen Platz beanspruchen, da sie nichts enthalten, sodass wir schließlich nur 2 Blöcke haben werden, die Platz auf der Seite einnehmen. Personen, die die Webseite sehen, sehen die Wörter "Hello" und "World!" auf 2 separaten Zeilen, wie Sie es von 2 `<div>`s erwarten würden. Die Browser-Engine hat im Wesentlichen alle im Quellcode hinzugefügten Leerzeichen ignoriert.

## Leerzeichen zwischen Inline- und Inline-Block-Elementen

Kommen wir zu einigen Problemen, die durch Leerzeichen entstehen können, und was dagegen getan werden kann. Zuerst betrachten wir, was mit Leerzeichen zwischen Inline- und Inline-Block-Elementen passiert. Tatsächlich haben wir dies bereits in unserem allerersten Beispiel gesehen, als wir beschrieben haben, wie Leerzeichen innerhalb von Inline-Formatierungskontexten verarbeitet werden.

Wir haben gesagt, dass es Regeln gibt, um die meisten Zeichen zu ignorieren, aber dass worttrennende Zeichen verbleiben. Wenn Sie nur mit Blockelementen wie `<p>` arbeiten, die nur Inline-Elemente wie `<em>`, `<strong>`, `<span>`, usw. enthalten, kümmern Sie sich normalerweise nicht darum, da die zusätzlichen Leerzeichen, die ins Layout gelangen, hilfreich sind, um die Wörter im Satz zu trennen.

Es wird jedoch interessanter, wenn Sie beginnen, `inline-block`-Elemente zu verwenden. Diese Elemente verhalten sich nach außen wie Inline-Elemente und nach innen wie Blöcke und werden oft verwendet, um komplexere UI-Stücke als nur Text nebeneinander in derselben Zeile anzuzeigen, z. B. Navigationselemente.

Da es sich um Blöcke handelt, erwarten viele Menschen, dass sie sich entsprechend verhalten, aber wirklich tun sie das nicht. Wenn Formatierungsleerzeichen zwischen benachbarten Inline-Elementen vorhanden sind, führt dies zu einem Abstand im Layout, genau wie die Abstände zwischen Wörtern im Text.

### Beispiel

Betrachten Sie dieses Beispiel (wir haben erneut einen HTML-Kommentar hinzugefügt, der die Leerzeichenzeichen im HTML zeigt):

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

Dieses wird folgendermaßen gerendert:

{{EmbedLiveSample('Example_3')}}

Sie möchten wahrscheinlich nicht die Lücken zwischen den Blöcken — je nach Anwendungsfall (ist dies eine Liste von Avataren oder horizontale Navigationsschaltflächen?), möchten Sie wahrscheinlich, dass die Elementränder bündig sind und den Abstand selbst kontrollieren können.

Der HTML-Inspektor der Firefox DevTools hebt Textknoten hervor und zeigt Ihnen auch genau, welchen Bereich die Elemente einnehmen — nützlich, wenn Sie sich fragen, was das Problem verursacht, und vielleicht denken, dass Sie dort einen zusätzlichen Rand haben oder so!

![Beispiel für die Anzeige von Leerzeichen zwischen Blöcken im HTML-Inspektor der Firefox DevTools](whitespace-devtools.png)

### Lösungen

Es gibt einige Möglichkeiten, dieses Problem zu umgehen:

Verwenden Sie [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox), um die horizontale Liste von Elementen zu erstellen, anstatt eine `inline-block`-Lösung zu versuchen. Damit wird alles für Sie gehandhabt, und es ist definitiv die bevorzugte Lösung:

```css
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}
```

Wenn Sie sich auf `inline-block` verlassen müssen, könnten Sie die [`font-size`](/de/docs/Web/CSS/font-size) der Liste auf 0 setzen. Dies funktioniert nur, wenn Ihre Blöcke nicht mit ems (basierend auf der `font-size`, sodass die Blockgröße auch 0 wäre) dimensioniert sind. rems wären hier eine gute Wahl:

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

Oder Sie könnten einen negativen Rand auf die Listenelemente setzen:

```css
li {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin-right: -0.25rem;
}
```

Sie können dieses Problem auch lösen, indem Sie Ihre Listenelemente alle in derselben Zeile im Quelltext platzieren, wodurch die Leerzeichensknoten von vornherein nicht erstellt werden:

```html-nolint
<li></li><li></li><li></li><li></li><li></li>
```

## DOM-Durchlauf und Leerzeichen

Beim Versuch, Manipulationen im [DOM](/de/docs/Web/API/Document_Object_Model) in JavaScript durchzuführen, können Probleme auftreten, da Leerzeichensknoten vorhanden sind. Wenn Sie beispielsweise eine Referenz zu einem übergeordneten Knoten haben und dessen erstes Element-Kind mit [`Node.firstChild`](/de/docs/Web/API/Node/firstChild) beeinflussen möchten, erhalten Sie, wenn sich ein unerwünschter Leerzeichensknoten direkt nach dem öffnenden Elterntag befindet, nicht das erwartete Ergebnis. Der Textknoten würde stattdessen ausgewählt, anstatt des Elements, das Sie beeinflussen möchten.

Ein weiteres Beispiel: Wenn Sie eine bestimmte Untermenge von Elementen haben, mit der Sie basierend darauf, ob sie leer sind (keine Kindknoten haben) oder nicht, eine bestimmte Aktion durchführen möchten, könnten Sie prüfen, ob jedes Element leer ist, indem Sie etwas wie [`Node.hasChildNodes()`](/de/docs/Web/API/Node/hasChildNodes) verwenden, aber erneut, wenn irgendwelche Zielelemente Textknoten enthalten, könnten Sie falsche Ergebnisse erhalten.

## Hilfsfunktionen für Leerzeichen

Der folgende JavaScript-Code definiert mehrere Funktionen, die den Umgang mit Leerzeichen im DOM erleichtern:

```js
/**
 * Im Folgenden wird Leerzeichen definiert als eines der Zeichen
 *  "\t" TAB \u0009
 *  "\n" LF  \u000A
 *  "\r" CR  \u000D
 *  " "  SPC \u0020
 *
 * Dies verwendet nicht das JavaScript-"\s", da dies geschützte Leerzeichen
 * und auch einige andere Zeichen umfasst.
 */

/**
 * Bestimmt, ob der Textinhalt eines Knotens komplett aus Leerzeichen besteht.
 *
 * @param nod  Ein Knoten, der die |CharacterData|-Schnittstelle implementiert (d.h.,
 *             ein |Text|-, |Comment|-, oder |CDATASection|-Knoten
 * @return     True, wenn der gesamte Textinhalt von |nod| Leerzeichen ist,
 *             andernfalls false.
 */
function is_all_ws(nod) {
  return !/[^\t\n\r ]/.test(nod.textContent);
}

/**
 * Bestimmt, ob ein Knoten von den Iteratorfunktionen ignoriert werden sollte.
 *
 * @param nod  Ein Objekt, das die DOM1-|Node|-Schnittstelle implementiert.
 * @return     true, wenn der Knoten:
 *                1) Ein |Text|-Knoten ist, der komplett aus Leerzeichen besteht
 *                2) Ein |Comment|-Knoten ist
 *             und andernfalls false.
 */

function is_ignorable(nod) {
  return (
    nod.nodeType === 8 || // Ein Kommentar-Knoten
    (nod.nodeType === 3 && is_all_ws(nod))
  ); // Ein Textknoten, der nur Leerzeichen enthält
}

/**
 * Version von |previousSibling|, die Knoten überspringt, die komplett
 * aus Leerzeichen oder Kommentaren bestehen. (Normalerweise ist |previousSibling|
 * eine Eigenschaft aller DOM-Knoten, die das Geschwisterknoten-Element, das
 * ein Kind desselben Elternteils ist und unmittelbar vor dem
 * Referenzknoten auftritt, angibt.)
 *
 * @param sib  Der Referenzknoten.
 * @return     Entweder:
 *               1) Das nächstgelegene vorherige Geschwister zu |sib|, das nicht
 *                  ignorable ist gemäß |is_ignorable|, oder
 *               2) null, wenn kein solcher Knoten vorhanden ist.
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
 * Version von |nextSibling|, die Knoten überspringt, die komplett
 * aus Leerzeichen oder Kommentaren bestehen.
 *
 * @param sib  Der Referenzknoten.
 * @return     Entweder:
 *               1) Das nächstgelegene nächste Geschwister zu |sib|, das nicht
 *                  ignorable ist gemäß |is_ignorable|, oder
 *               2) null, wenn kein solcher Knoten vorhanden ist.
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
 * Version von |lastChild|, die Knoten überspringt, die komplett
 * aus Leerzeichen oder Kommentaren bestehen. (Normalerweise ist |lastChild|
 * eine Eigenschaft aller DOM-Knoten, die das letzte der in
 * dem Referenzknoten enthaltenen Knoten angibt.)
 *
 * @param sib  Der Referenzknoten.
 * @return     Entweder:
 *               1) Das letzte Kind von |sib|, das nicht
 *                  ignorable ist gemäß |is_ignorable|, oder
 *               2) null, wenn kein solcher Knoten vorhanden ist.
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
 * Version von |firstChild|, die Knoten überspringt, die komplett
 * aus Leerzeichen und Kommentaren bestehen.
 *
 * @param sib  Der Referenzknoten.
 * @return     Entweder:
 *               1) Das erste Kind von |sib|, das nicht
 *                  ignorable ist gemäß |is_ignorable|, oder
 *               2) null, wenn kein solcher Knoten vorhanden ist.
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
 * Version von |data|, die keine Leerzeichen am Anfang
 * und Ende enthält und alle Leerzeichen auf ein einziges
 * Leerzeichen normalisiert. (Normalerweise ist |data|
 * eine Eigenschaft von Textknoten, die den Text des
 * Knotens angibt.)
 *
 * @param txt  Der Textknoten, dessen Daten zurückgegeben werden sollen
 * @return     Ein String, der den Inhalt des Textknotens mit
 *             komprimierten Leerzeichen angibt.
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

Der folgende Code demonstriert die Verwendung der oben genannten Funktionen. Er iteriert über die Kinder eines Elements (dessen Kinder alle Elemente sind), um dasjenige zu finden, dessen Text `"This is the third paragraph"` ist, und ändert dann das class-Attribut und den Inhalt dieses Absatzes.

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
