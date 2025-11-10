---
title: "Dokument: caretPositionFromPoint() Methode"
short-title: caretPositionFromPoint()
slug: Web/API/Document/caretPositionFromPoint
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("CSSOM view API")}}

Die **`caretPositionFromPoint()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt ein [`CaretPosition`](/de/docs/Web/API/CaretPosition)-Objekt zurück, das den DOM-Knoten zusammen mit dem Cursor und dem Zeichenoffset des Cursors innerhalb dieses Knotens enthält.

## Syntax

```js-nolint
caretPositionFromPoint(x, y)
caretPositionFromPoint(x, y, options)
```

### Parameter

- `x`
  - : Die horizontale Koordinate eines Punkts.
- `y`
  - : Die vertikale Koordinate eines Punkts.
- `options` {{optional_inline}}
  - : Die folgenden optionalen Eigenschaften können ebenfalls angegeben werden.
    - `shadowRoots` {{optional_inline}}
      - : Ein Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten.
        Die Methode kann eine Cursorposition für einen Knoten zurückgeben, der innerhalb des Shadow DOMs einer bereitgestellten Shadow-Root definiert ist.
        Wenn die Cursorposition in eine nicht bereitgestellte Shadow-Root fällt, wird die zurückgegebene `CaretPosition` auf den Knoten abgebildet, der der Host der Shadow-Root ist.

### Rückgabewert

Ein [`CaretPosition`](/de/docs/Web/API/CaretPosition)-Objekt oder `null`.

Der zurückgegebene Wert ist `null`, wenn kein Viewport mit dem Dokument verknüpft ist, wenn `x` oder `y` negativ oder außerhalb des Viewport-Bereichs liegen oder wenn die Koordinaten einen Punkt anzeigen, an dem kein Textinsertion-Punkt-Indikator eingefügt werden konnte.

## Beispiele

### Textknoten an der Cursorposition im DOM aufteilen

Dieses Beispiel demonstriert, wie man die Cursorposition von einem ausgewählten DOM-Knoten erhält, die Position verwendet, um den Knoten zu teilen, und einen Zeilenumbruch zwischen den beiden Knoten einfügt.
Das Beispiel nutzt `caretPositionFromPoint()`, um die Cursorposition zu erhalten, sofern unterstützt, mit der nicht standardmäßigen [`Document.caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint)-Methode als Fallback.

Beachten Sie, dass einige Teile des Codes ausgeblendet sind, einschließlich des Codes, der zum Protokollieren verwendet wird, da dies nicht zum Verständnis dieser Methode beiträgt.

#### HTML

Das HTML definiert einen Textabsatz.

```html hidden
<div id="message">
  This browser supports neither document.caretRangeFromPoint nor
  document.caretPositionFromPoint
</div>
```

```html hidden
<button id="reset" type="button">Reset</button>
```

```html
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</p>
```

```html hidden
<pre id="log">Log</pre>
```

```css hidden
#log {
  height: 30px;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}

const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

```css hidden
#message {
  color: red;
  font-weight: bold;
}

#message.fallback {
  color: darkorange;
}

#message.supported {
  color: green;
}
```

#### JavaScript

Die Methode unten überprüft zuerst die Unterstützung von `document.caretPositionFromPoint` und verwendet sie, um den Textknoten und den Offset an der Cursorposition zu erhalten.
Wenn der Browser diese Methode nicht unterstützt, prüft der Code als nächstes [`document.caretRangeFromPoint`](/de/docs/Web/API/Document/caretRangeFromPoint) und verwendet diese stattdessen.

Wenn der Knoten an der Cursorposition ein Textknoten ist, teilt der Code den Knoten an dem ausgewählten Offset und fügt einen Zeilenumbruch zwischen den beiden Knoten ein.

```js
function insertBreakAtPoint(e) {
  let range;
  let textNode;
  let offset;

  if (document.caretPositionFromPoint) {
    range = document.caretPositionFromPoint(e.clientX, e.clientY);
    textNode = range.offsetNode;
    offset = range.offset;
  } else if (document.caretRangeFromPoint) {
    // Use WebKit-proprietary fallback method
    range = document.caretRangeFromPoint(e.clientX, e.clientY);
    textNode = range.startContainer;
    offset = range.startOffset;
  } else {
    // Neither method is supported, do nothing
    return;
  }

  // Logging code (uses hidden method to get substring with ^ at offset)
  if (textNode?.nodeType === 3) {
    const caretInText = getSubstringAroundOffset(textNode.textContent, offset);
    log(
      `node: ${textNode.nodeName}, offset: ${offset}, insert: ${caretInText}`,
    );
  }

  // Only split TEXT_NODEs
  if (textNode?.nodeType === 3) {
    let replacement = textNode.splitText(offset);
    let br = document.createElement("br");
    textNode.parentNode.insertBefore(br, replacement);
  }
}
```

Die Methode wird dann als Klickereignis-Handler für beliebige Absatzelemente hinzugefügt.

```js
const paragraphs = document.getElementsByTagName("p");
for (const paragraph of paragraphs) {
  paragraph.addEventListener("click", insertBreakAtPoint);
}
```

```js hidden
// Inserts ^ at offset and gets a substring for log
function getSubstringAroundOffset(text, offset, length = 10) {
  const start = Math.max(0, offset - length);
  const end = Math.min(text.length, offset + length + 1);
  // Insert the caret character at the offset
  const modifiedText = `${text.substring(0, offset)}^${text.substring(offset)}`;
  return `...${modifiedText.substring(start, end)}...`;
}
```

```js hidden
let message = document.getElementById("message");
if (document.caretPositionFromPoint) {
  message.textContent =
    "This browser supports the standard document.caretPositionFromPoint";
  message.classList.add("supported");
} else if (document.caretRangeFromPoint) {
  message.textContent =
    "This browser supports the non-standard document.caretRangeFromPoint";
  message.classList.add("supported");
}
```

#### Ergebnisse

Klicken Sie irgendwo im **Lorem ipsum ...**-Absatz unten, um einen Zeilenumbruch an der Stelle einzufügen, an der Sie klicken.
Beachten Sie, dass das Protokoll den `nodeName`, den Offset und ein Fragment des ausgewählten Knotens mit einem `^`-Zeichen am Offset anzeigt.

{{EmbedLiveSample('Split text nodes at caret position in DOM','100%','400px')}}

### Textknoten an Cursorpositionen in einem Shadow DOM aufteilen

Dieses Beispiel zeigt, wie man die Cursorposition von einem ausgewählten Knoten innerhalb einer Shadow-Root erhält.
Das Beispiel ist dem ausschließlich DOM-basierten Beispiel oben sehr ähnlich, außer dass ein Teil des Textes innerhalb einer Shadow-Root liegt.
Wir stellen einen Button zur Verfügung, um Ihnen den Unterschied zu zeigen, wenn eine Shadow-Root zu `caretPositionFromPoint()` übergeben wird oder nicht.

Beachten Sie, dass einige Teile des Codes ausgeblendet sind, einschließlich des Codes, der zum Protokollieren verwendet wird, da dies nicht zum Verständnis dieser Methode beiträgt.

#### HTML

Das HTML definiert einen Textabsatz innerhalb eines {{htmlelement("div")}}-Elements.
Der Absatz enthält ein {{htmlelement("span")}}-Element mit der `id` "host", das wir als Host für eine Shadow-Root verwenden werden.
Es gibt auch einige Buttons, die wir verwenden werden, um das Beispiel zurückzusetzen und das Shadow-Root-Option-Argument zu `caretPositionFromPoint()` hinzuzufügen/entfernen.

```html hidden
<div id="message">
  This browser supports neither document.caretRangeFromPoint nor
  document.caretPositionFromPoint
</div>
```

```html
<button id="reset" type="button">Reset</button>
<button id="shadowButton" type="button">Add Shadow</button>
<div>
  <p>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut <span id="host"></span> labore et dolore magna
    aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
    dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
    Lorem ipsum dolor sit amet.
  </p>
</div>
```

```html hidden
<pre id="log">Log</pre>
```

#### CSS

Hier verwenden wir CSS, um das `#host`-Element rot und fett zu machen.
Dies erleichtert das Unterscheiden zwischen Text im DOM und Text im Shadow DOM.

```css
#host {
  color: red;
  font-weight: bold;
}
```

```css hidden
#log {
  height: 30px;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```css hidden
#message {
  color: red;
  font-weight: bold;
}

#message.fallback {
  color: darkorange;
}

#message.supported {
  color: green;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}

const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

Zuerst haben wir etwas Code, um unser Shadow DOM zu befüllen.
Wir verwenden JavaScript, um eine Shadow-Root dynamisch anzuhängen, da das MDN-Beispielsystem uns dies nicht deklarativ mit dem {{htmlelement("template")}}-Element tun lässt.
Der Inhalt des Shadow DOM ist ein {{htmlelement("span")}}-Element, das den Text "I'm in the shadow DOM" enthält.

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const shadowSpan = document.createElement("span");
shadowSpan.textContent = "I'm in the shadow DOM";
shadow.appendChild(shadowSpan);
```

Als nächstes fügen wir einen Handler für unseren "Enable/Disable shadow"-Button hinzu.
Dieser Code schaltet den Wert der `useShadows`-Variable um und aktualisiert den Button-Text entsprechend.

```js
let useShadows = false;

const shadowButton = document.querySelector("#shadowButton");
shadowButton.addEventListener("click", () => {
  useShadows = !useShadows;
  shadowButton.innerText = useShadows ? "Remove Shadow" : "Add Shadow";
});
```

Die Methode unten überprüft zuerst die Unterstützung von `document.caretPositionFromPoint` und verwendet sie, um den Textknoten und den Offset an der Cursorposition zu erhalten.
Der Wert der `useShadows`-Variable wird verwendet, um zu bestimmen, ob die im Text gehostete Shadow-Root an `caretPositionFromPoint()` übergeben wird.

- Wenn der Browser diese Methode nicht unterstützt, prüft der Code als nächstes [`document.caretRangeFromPoint`](/de/docs/Web/API/Document/caretRangeFromPoint) und verwendet diese stattdessen.
- Wenn der Knoten an der Cursorposition ein Textknoten ist, teilt der Code dann den Knoten an dem ausgewählten Offset und fügt einen Zeilenumbruch zwischen ihnen ein.
- Wenn der Knoten ein Elementknoten ist, fügt der Code einen Zeilenumbruch-Elementknoten an dem Offset ein.

```js
function insertBreakAtPoint(e) {
  let range;
  let textNode;
  let offset;

  if (document.caretPositionFromPoint) {
    range = document.caretPositionFromPoint(
      e.clientX,
      e.clientY,
      useShadows ? { shadowRoots: [shadow] } : null,
    );
    textNode = range.offsetNode;
    offset = range.offset;
  } else if (document.caretRangeFromPoint) {
    // Use WebKit-proprietary fallback method
    range = document.caretRangeFromPoint(e.clientX, e.clientY);
    textNode = range.startContainer;
    offset = range.startOffset;
  } else {
    // Neither method is supported, do nothing
    return;
  }

  // Logging code (uses hidden method to get substring with ^ at offset)
  if (textNode) {
    if (textNode.nodeType === 3) {
      const caretInText = getSubstringAroundOffset(
        textNode.textContent,
        offset,
      );
      log(
        `type: TEXT_NODE, name: ${textNode.nodeName}, offset: ${offset}:
${caretInText}`,
      );
    } else if (textNode.nodeType === 1) {
      log(`type: ELEMENT_NODE, name: ${textNode.nodeName}, offset: ${offset}`);
    } else {
      log(
        `type: ${textNode.nodeType}, name: ${textNode.nodeName}, offset: ${offset}`,
      );
    }
  }

  // Insert line at caret
  if (textNode?.nodeType === 3) {
    // TEXT_NODE - split text at offset and add br
    let replacement = textNode.splitText(offset);
    let br = document.createElement("br");
    textNode.parentNode.insertBefore(br, replacement);
  } else if (textNode?.nodeType === 1) {
    // ELEMENT_NODE - Add br node at offset node
    let br = document.createElement("br");
    const targetNode = textNode.childNodes[offset];
    textNode.insertBefore(br, targetNode);
  } else {
    // Do nothing
  }
}
```

Zum Schluss fügen wir zwei Klickereignis-Handler für Absatzelemente im DOM und im Shadow-Root hinzu.
Beachten Sie, dass wir die Elemente innerhalb des `shadowRoot` spezifisch abfragen müssen, da sie für normale DOM-Abfragemethoden nicht sichtbar sind.

```js
// Click event handler <p> elements in the DOM
const paragraphs = document.getElementsByTagName("p");
for (const paragraph of paragraphs) {
  paragraph.addEventListener("click", insertBreakAtPoint);
}

// Click event handler <p> elements in the Shadow DOM
const shadowParagraphs = host.shadowRoot.querySelectorAll("p");
for (const paragraph of shadowParagraphs) {
  console.log(paragraph);
  paragraph.addEventListener("click", insertBreakAtPoint);
}
```

```js hidden
// Inserts ^ at offset and gets a substring for log
function getSubstringAroundOffset(text, offset, length = 10) {
  const start = Math.max(0, offset - length);
  const end = Math.min(text.length, offset + length + 1);
  // Insert the caret character at the offset
  const modifiedText = `${text.substring(0, offset)}^${text.substring(offset)}`;
  return `...${modifiedText.substring(start, end)}...`;
}
```

```js hidden
let message = document.getElementById("message");
if (document.caretPositionFromPoint) {
  message.textContent =
    "This browser supports the standard document.caretPositionFromPoint";
  message.classList.add("supported");
} else if (document.caretRangeFromPoint) {
  message.textContent =
    "This browser supports the non-standard document.caretRangeFromPoint";
  message.classList.add("supported");
}
```

#### Ergebnisse

Klicken Sie im **Lorem ipsum ...**-Absatz vor oder nach dem Shadow DOM-Text, um einen Zeilenumbruch an der Stelle einzufügen, an der Sie klicken.
Beachten Sie, dass in diesem Fall das Protokoll zeigt, dass Sie einen `TEXT_NODE`, den Offset und ein Fragment des ausgewählten Knotens mit einem `^`-Zeichen am Offset ausgewählt haben.

Anfangs wird die Shadow-Root nicht an `caretPositionFromPoint()` übergeben, daher ist der zurückgegebene Cursorposition-Knoten beim Klicken auf den Text "I'm in the shadow DOM" der übergeordnete Knoten des Hosts, mit dem Offset der Shadow-Root.
Der Zeilenumbruch wird daher vor dem Knoten hinzugefügt und nicht an dem ausgewählten Punkt.
Beachten Sie, dass der Cursorposition-Knoten in diesem Fall den Typ `ELEMENT_NODE` hat.

Wenn Sie den "Add shadow"-Button klicken, wird die Shadow-Root an `caretPositionFromPoint()` übergeben, sodass die zurückgegebene Cursorposition der spezifische ausgewählte Knoten innerhalb des Shadow DOMs ist.
Dadurch verhält sich der Shadow DOM-Text wie der andere Absatztext.

{{EmbedLiveSample('Split text nodes at caret positions in a Shadow DOM','100%','400px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CaretPosition`](/de/docs/Web/API/CaretPosition)
