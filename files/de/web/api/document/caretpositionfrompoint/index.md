---
title: "Dokumentation: caretPositionFromPoint() Methode"
short-title: caretPositionFromPoint()
slug: Web/API/Document/caretPositionFromPoint
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("CSSOM view API")}}

Die **`caretPositionFromPoint()`** Methode der [`Document`](/de/docs/Web/API/Document) Schnittstelle gibt ein [`CaretPosition`](/de/docs/Web/API/CaretPosition)-Objekt zurück, das das DOM-Knoten enthält, zusammen mit dem Kursor und dem Zeichenoffset innerhalb dieses Knotens.

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
        Die Methode kann eine Kursorposition für einen Knoten zurückgeben, der innerhalb des Shadow DOM einer angegebenen Shadow-Root definiert ist.
        Wenn die Kursorposition innerhalb einer nicht angegebenen Shadow-Root liegt, wird die zurückgegebene `CaretPosition` auf den Knoten abgebildet, der der Host der Shadow-Root ist.

### Rückgabewert

Ein [`CaretPosition`](/de/docs/Web/API/CaretPosition)-Objekt oder `null`.

Der zurückgegebene Wert ist `null`, wenn kein Viewport mit dem Dokument verbunden ist, wenn `x` oder `y` negativ oder außerhalb des Viewport-Bereichs sind, oder wenn die Koordinaten einen Punkt anzeigen, an dem keine Textcursor-Einfügepunkt-Anzeige eingefügt werden kann.

## Beispiele

### Textknoten an der Kursorposition im DOM aufteilen

Dieses Beispiel demonstriert, wie man die Kursorposition von einem ausgewählten DOM-Knoten erhält, die Position nutzt, um den Knoten zu teilen, und einen Zeilenumbruch zwischen den beiden Knoten einfügt. Das Beispiel verwendet `caretPositionFromPoint()`, um die Kursorposition zu erhalten, falls unterstützt, mit der nicht standardmäßigen [`Document.caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) Methode als Fallback.

Beachten Sie, dass einige Teile des Codes ausgeblendet sind, einschließlich des zum Protokollieren verwendeten Codes, da dies nicht zum Verständnis dieser Methode beiträgt.

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

Die folgende Methode prüft zunächst die Unterstützung für `document.caretPositionFromPoint` und verwendet es, um den Textknoten und den Offset an der Kursorposition zu erhalten.
Wenn der Browser diese Methode nicht unterstützt, prüft der Code dann auf [`document.caretRangeFromPoint`](/de/docs/Web/API/Document/caretRangeFromPoint) und verwendet diese stattdessen.

Wenn der Knoten an der Kursorposition ein Textknoten ist, dann [teilt der Code den Knoten](/de/docs/Web/API/Text/splitText) an dem ausgewählten Offset und fügt einen Zeilenumbruch zwischen den beiden Knoten ein.

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

Die Methode wird dann als Klick-Event-Handler für alle Paragrafen-Elemente hinzugefügt.

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

Klicken Sie irgendwo im **Lorem ipsum ...** Absatz unten, um einen Zeilenumbruch an der Stelle einzufügen, an der Sie klicken. Beachten Sie, dass das Protokoll `nodeName`, den Offset und ein Fragment des ausgewählten Knotens mit einem `^` Zeichen am Offset anzeigt.

{{EmbedLiveSample('Split text nodes at caret position in DOM','100%','400px')}}

### Textknoten an Kursorpositionen in einem Shadow DOM aufteilen

Dieses Beispiel zeigt, wie man die Kursorposition von einem ausgewählten Knoten innerhalb einer Shadow-Root erhält. Das Beispiel ist sehr ähnlich wie das nur-DOM-Beispiel oben, außer dass einige der Texte innerhalb einer Shadow-Root sind.
Wir bieten einen Button an, mit dem Sie den Unterschied sehen können, wenn eine Shadow-Root an `caretPositionFromPoint()` übergeben oder nicht übergeben wird.

Beachten Sie, dass einige Teile des Codes ausgeblendet sind, einschließlich des zum Protokollieren verwendeten Codes, da dies nicht zum Verständnis dieser Methode beiträgt.

#### HTML

Das HTML definiert einen Absatz mit Text innerhalb eines {{htmlelement("div")}} Elements. Der Absatz enthält ein {{htmlelement("span")}} Element mit der `id` "host", das wir als Host für eine Shadow-Root verwenden werden. Es gibt auch einige Buttons, die wir verwenden werden, um das Beispiel zurückzusetzen und um das Shadow-Root-Optionsargument zu `caretPositionFromPoint()` hinzuzufügen/entfernen.

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

Hier verwenden wir CSS, um das `#host`-Element rot und fett darzustellen. Dies erleichtert das Unterscheiden zwischen Text im DOM und Text im Shadow DOM.

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

Zuerst haben wir etwas Code, um unser Shadow DOM zu füllen. Wir verwenden JavaScript, um programmatisch eine Shadow-Root zu verbinden, da das MDN-Beispielsystem uns nicht erlaubt, dies deklarativ mit dem {{htmlelement("template")}} Element zu tun. Der Inhalt des Shadow DOM ist ein {{htmlelement("span")}} Element, das den Text "I'm in the shadow DOM" enthält.

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const shadowSpan = document.createElement("span");
shadowSpan.textContent = "I'm in the shadow DOM";
shadow.appendChild(shadowSpan);
```

Als Nächstes fügen wir einen Handler für unseren "Enable/Disable shadow" Button hinzu. Dieser Code schaltet den Wert der Variablen `useShadows` um und aktualisiert den Button-Text entsprechend.

```js
let useShadows = false;

const shadowButton = document.querySelector("#shadowButton");
shadowButton.addEventListener("click", () => {
  useShadows = !useShadows;
  shadowButton.innerText = useShadows ? "Remove Shadow" : "Add Shadow";
});
```

Die Methode unten prüft zunächst die Unterstützung für `document.caretPositionFromPoint` und verwendet es, um den Textknoten und Offset an der Kursorposition zu erhalten. Der Wert der Variablen `useShadows` wird verwendet, um zu bestimmen, ob die Shadow-Root, die in unserem Text gehostet wird, an `caretPositionFromPoint()` übergeben wird.

- Wenn der Browser diese Methode nicht unterstützt, prüft der Code dann auf [`document.caretRangeFromPoint`](/de/docs/Web/API/Document/caretRangeFromPoint) und verwendet diese stattdessen.
- Wenn der Knoten an der Kursorposition ein Textknoten ist, dann teilt der Code den Knoten an dem ausgewählten Offset und fügt einen Zeilenumbruch zwischen ihnen ein.
- Wenn der Knoten ein Elementknoten ist, dann fügt der Code ein Zeilenumbruchelement an dem Offset ein.

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

Abschließend fügen wir zwei Klick-Event-Handler für die Paragrafen-Elemente im DOM und in der Shadow-Root hinzu. Beachten Sie, dass wir die Elemente innerhalb des `shadowRoot` spezifisch abfragen müssen, da sie für normale DOM-Abfragemethoden nicht sichtbar sind.

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

Klicken Sie in den **Lorem ipsum ...** Absatz vor oder nachdem Shadow DOM-Text, um einen Zeilenumbruch an der Stelle einzufügen, an der Sie klicken. Beachten Sie, dass in diesem Fall das Protokoll zeigt, dass Sie einen `TEXT_NODE` ausgewählt haben, den Offset und ein Fragment des ausgewählten Knotens mit einem `^` Zeichen am Offset.

Zunächst wird die Shadow-Root nicht an `caretPositionFromPoint()` übergeben, also wenn Sie auf den Text "I'm in the shadow DOM" klicken, ist der zurückgegebene Kursorpositionsknoten der übergeordnete Knoten des Hosts, am Offset der Shadow-Root. Der Zeilenumbruch wird daher vor dem Knoten hinzugefügt und nicht an der ausgewählten Stelle. Beachten Sie, dass der Kursorpositionsknoten in diesem Fall den Typ `ELEMENT_NODE` hat.

Wenn Sie den "Add shadow" Button klicken, wird die Shadow-Root an `caretPositionFromPoint()` übergeben, sodass die zurückgegebene Kursorposition der spezifische ausgewählte Knoten innerhalb des Shadow DOM ist. Dadurch verhält sich der Text im Shadow DOM wie der andere Absatztext.

{{EmbedLiveSample('Split text nodes at caret positions in a Shadow DOM','100%','400px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CaretPosition`](/de/docs/Web/API/CaretPosition)
