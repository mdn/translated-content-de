---
title: "Document: caretPositionFromPoint() Methode"
short-title: caretPositionFromPoint()
slug: Web/API/Document/caretPositionFromPoint
l10n:
  sourceCommit: ae524b0c327f8aaea51cc6a5c59e0301bde646c0
---

{{APIRef("CSSOM View")}}

Die **`caretPositionFromPoint()`**-Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt ein [`CaretPosition`](/de/docs/Web/API/CaretPosition)-Objekt zurück, das das DOM-Element sowie den Cursor und dessen Zeichenoffset in diesem Element enthält.

## Syntax

```js-nolint
caretPositionFromPoint(x, y)
caretPositionFromPoint(x, y, options)
```

### Parameter

- `x`
  - : Die horizontale Koordinate eines Punktes.
- `y`
  - : Die vertikale Koordinate eines Punktes.
- `options` {{optional_inline}}

  - : Die folgenden optionalen Eigenschaften können ebenfalls angegeben werden.

    - `shadowRoots` {{optional_inline}}
      - : Ein Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)-Objekten.
        Die Methode kann eine Cursorposition für ein Element zurückgeben, das innerhalb des Shadow-DOM eines angegebenen Shadow-Roots definiert ist.
        Wenn sich die Cursorposition innerhalb eines nicht angegebenen Shadow-Roots befindet, wird die zurückgegebene `CaretPosition` auf das Element abgebildet, das der Host des Shadow-Roots ist.

### Rückgabewert

Ein [`CaretPosition`](/de/docs/Web/API/CaretPosition)-Objekt oder `null`.

Der zurückgegebene Wert ist `null`, falls kein Viewport mit dem Dokument verknüpft ist, wenn `x` oder `y` negativ oder außerhalb des Viewport-Bereichs liegen, oder wenn die Koordinaten einen Punkt angeben, an dem kein Textcursor-Indikator eingefügt werden kann.

## Beispiele

### Textknoten an Cursorposition im DOM teilen

Dieses Beispiel zeigt, wie man die Cursorposition von einem ausgewählten DOM-Knoten erhält, die Position verwendet, um den Knoten zu teilen, und einen Zeilenumbruch zwischen den beiden Knoten einfügt. Das Beispiel nutzt `caretPositionFromPoint()`, um die Cursorposition zu erhalten, falls unterstützt, mit der nicht standardmäßigen Methode [`Document.caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) als Fallback.

Beachten Sie, dass einige Teile des Codes ausgeblendet sind, einschließlich Code für das Protokollieren, da dies zum Verständnis dieser Methode nicht erforderlich ist.

#### HTML

Das HTML definiert einen Absatz mit Text.

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

Die Methode prüft zunächst die Unterstützung von `document.caretPositionFromPoint` und verwendet diese, um den Textknoten und den Offset an der Cursorposition zu erhalten. Wenn der Browser diese Methode nicht unterstützt, prüft der Code dann auf [`document.caretRangeFromPoint`](/de/docs/Web/API/Document/caretRangeFromPoint) und verwendet stattdessen diese.

Wenn der Knoten an der Cursorposition ein Textknoten ist, teilt der Code den Knoten an dem gewählten Offset und fügt einen Zeilenumbruch dazwischen.

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

Die Methode wird dann als Klick-Ereignishandler für alle Absatz-Elemente hinzugefügt.

```js
const paragraphs = document.getElementsByTagName("p");
for (const paragraph of paragraphs) {
  paragraph.addEventListener("click", insertBreakAtPoint, false);
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

Klicken Sie irgendwo im **Lorem ipsum ...** Absatz unten, um an der Stelle, an der Sie klicken, einen Zeilenumbruch einzufügen. Beachten Sie, dass das Protokoll den `nodeName`, den Offset und einen Ausschnitt des ausgewählten Knotens mit einem `^` Zeichen bei dem Offset zeigt.

{{EmbedLiveSample('Split text nodes at caret position in DOM','100%','400px')}}

### Textknoten an Cursorpositionen in einem Shadow-DOM teilen

Dieses Beispiel zeigt, wie man die Cursorposition von einem ausgewählten Knoten innerhalb eines Shadow-Roots erhält. Das Beispiel ist dem oben beschriebenen DOM-nur Beispiel sehr ähnlich, außer dass ein Teil des Textes innerhalb eines Shadow-Roots liegt. Wir bieten eine Schaltfläche an, mit der Sie den Unterschied sehen können, wenn ein Shadow-Root an `caretPositionFromPoint()` übergeben wird oder nicht.

Beachten Sie, dass einige Teile des Codes ausgeblendet sind, einschließlich Code für das Protokollieren, da dies zum Verständnis dieser Methode nicht erforderlich ist.

#### HTML

Das HTML definiert einen Absatz von Text innerhalb eines {{htmlelement("div")}} Elements. Der Absatz enthält ein {{htmlelement("span")}} Element mit der `id` "host", das wir als Host für einen Shadow-Root verwenden. Es gibt auch einige Schaltflächen, die wir verwenden werden, um das Beispiel zurückzusetzen und das Shadow-Root-Optionsargument zu `caretPositionFromPoint()` hinzuzufügen/zu entfernen.

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

Hier verwenden wir CSS, um das `#host` Element rot und fett zu machen. Dies erleichtert die Unterscheidung zwischen Text im DOM und Text im Shadow-DOM.

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

Zuerst haben wir etwas Code, um unser Shadow-DOM zu befüllen. Wir verwenden JavaScript, um ein Shadow-Root dynamisch anzuhängen, da das MDN-Beispielsystem nicht erlaubt, dies deklarativ mit dem {{htmlelement("template")}} Element zu tun. Der Inhalt des Shadow-DOM ist ein {{htmlelement("span")}} Element, das den Text "I'm in the shadow DOM" enthält.

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const shadowSpan = document.createElement("span");
shadowSpan.textContent = "I'm in the shadow DOM";
shadow.appendChild(shadowSpan);
```

Als nächstes fügen wir einen Handler für unsere "Enable/Disable shadow" Schaltfläche hinzu. Dieser Code schaltet den Wert der Variablen `useShadows` um und aktualisiert den Schaltflächentext entsprechend.

```js
let useShadows = false;

const shadowButton = document.querySelector("#shadowButton");
shadowButton.addEventListener("click", () => {
  useShadows = !useShadows;
  shadowButton.innerText = useShadows ? "Remove Shadow" : "Add Shadow";
});
```

Die Methode prüft zunächst die Unterstützung von `document.caretPositionFromPoint` und verwendet diese, um den Textknoten und den Offset an der Cursorposition zu erhalten. Der Wert der Variablen `useShadows` wird verwendet, um zu bestimmen, ob der im Text gehostete Shadow-Root an `caretPositionFromPoint()` übergeben wird.

- Wenn der Browser diese Methode nicht unterstützt, prüft der Code dann auf [`document.caretRangeFromPoint`](/de/docs/Web/API/Document/caretRangeFromPoint) und verwendet stattdessen diese.
- Wenn der Knoten an der Cursorposition ein Textknoten ist, teilt der Code den Knoten an dem gewählten Offset und fügt einen Zeilenumbruch dazwischen.
- Wenn der Knoten ein Elementknoten ist, fügt der Code an dem Offset einen Elementknoten für den Zeilenumbruch ein.

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

Schließlich fügen wir zwei Klick-Ereignishandler für Absatzelemente im DOM und im Shadow-Root hinzu. Beachten Sie, dass wir die Elemente innerhalb des `shadowRoot` speziell abfragen müssen, da sie nicht für normale DOM-Abfragemethoden sichtbar sind.

```js
// Click event handler <p> elements in the DOM
const paragraphs = document.getElementsByTagName("p");
for (const paragraph of paragraphs) {
  paragraph.addEventListener("click", insertBreakAtPoint, false);
}

// Click event handler <p> elements in the Shadow DOM
const shadowParagraphs = host.shadowRoot.querySelectorAll("p");
for (const paragraph of shadowParagraphs) {
  console.log(paragraph);
  paragraph.addEventListener("click", insertBreakAtPoint, false);
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

Klicken Sie im **Lorem ipsum ...** Absatz vor oder nach dem Shadow-DOM-Text, um an der Stelle, an der Sie klicken, einen Zeilenumbruch einzufügen. Beachten Sie, dass in diesem Fall das Protokoll zeigt, dass Sie einen `TEXT_NODE` ausgewählt haben, den Offset und einen Ausschnitt des ausgewählten Knotens mit einem `^` Zeichen bei dem Offset.

Zunächst wird der Shadow-Root nicht an `caretPositionFromPoint()` übergeben. Wenn Sie auf den Text "I'm in the shadow DOM" klicken, ist der zurückgegebene Cursorpositionsknoten der übergeordnete Knoten des Hosts am Offset des Shadow-Roots. Der Zeilenumbruch wird daher vor dem Knoten statt an der ausgewählten Stelle hinzugefügt. Beachten Sie, dass der Cursorpositionsknoten in diesem Fall den Typ `ELEMENT_NODE` hat.

Wenn Sie die Schaltfläche "Add shadow" klicken, wird der Shadow-Root an `caretPositionFromPoint()` übergeben, so dass die zurückgegebene Cursorposition der spezifische ausgewählte Knoten innerhalb des Shadow-DOM ist. Dadurch verhält sich der Shadow-DOM-Text wie der andere Absatztext.

{{EmbedLiveSample('Split text nodes at caret positions in a Shadow DOM','100%','400px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CaretPosition`](/de/docs/Web/API/CaretPosition)
