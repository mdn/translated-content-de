---
title: "Dokument: caretPositionFromPoint() Methode"
short-title: caretPositionFromPoint()
slug: Web/API/Document/caretPositionFromPoint
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("CSSOM View")}}

Die **`caretPositionFromPoint()`** Methode der [`Document`](/de/docs/Web/API/Document) Schnittstelle gibt ein [`CaretPosition`](/de/docs/Web/API/CaretPosition) Objekt zurück, das das DOM-Element sowie die Einfügemarke und den Zeichenoffset der Einfügemarke innerhalb dieses Elements enthält.

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
      - : Ein Array von [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) Objekten.
        Die Methode kann eine Einfügemarkenposition für ein Element zurückgeben, das innerhalb des Shadow DOM eines bereitgestellten Shadow Roots definiert ist.
        Wenn sich die Einfügemarkenposition innerhalb eines nicht bereitgestellten Shadow Roots befindet, wird die zurückgegebene `CaretPosition` auf das Element abgebildet, das der Host des Shadow Roots ist.

### Rückgabewert

Ein [`CaretPosition`](/de/docs/Web/API/CaretPosition) Objekt oder `null`.

Der zurückgegebene Wert ist `null`, wenn kein Viewport mit dem Dokument assoziiert ist, wenn `x` oder `y` negativ oder außerhalb des Viewport-Bereichs liegen oder wenn die Koordinaten auf einen Punkt zeigen, an dem kein Texteinfügeposition-Indikator eingefügt werden könnte.

## Beispiele

### Textelemente im DOM an der Einfügemarkenposition aufteilen

Dieses Beispiel demonstriert, wie die Einfügemarkenposition von einem ausgewählten DOM-Element erhalten, das Element aufgeteilt und ein Zeilenumbruch zwischen den beiden Elementen eingefügt wird.
Das Beispiel verwendet `caretPositionFromPoint()`, um die Einfügemarkenposition zu erhalten, falls unterstützt, und fällt andernfalls auf die nicht standardisierte [`Document.caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) Methode zurück.

Beachten Sie, dass einige Teile des Codes verborgen sind, einschließlich des Codes, der für das Logging verwendet wird, da dies für das Verständnis dieser Methode nicht nützlich ist.

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

Die Methode unten prüft zuerst die Unterstützung für `document.caretPositionFromPoint` und verwendet diese, um das Textelement und den Offset an der Einfügemarkenposition zu erhalten.
Wenn der Browser diese Methode nicht unterstützt, überprüft der Code dann [`document.caretRangeFromPoint`](/de/docs/Web/API/Document/caretRangeFromPoint) und verwendet diese stattdessen.

Wenn das Element an der Einfügemarkenposition ein Textelement ist, teilt der Code dann das Element an dem ausgewählten Offset und fügt zwischen den beiden ein Zeilenumbruch ein.

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

Die Methode wird dann als Klick-Event-Handler für alle Absatz-Elemente hinzugefügt.

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

Klicken Sie irgendwo in den **Lorem ipsum ...** Absatz unten, um einen Zeilenumbruch an der Stelle einzufügen, an der Sie klicken.
Beachten Sie, dass das Protokoll den `nodeName`, den Offset und ein Fragment des ausgewählten Elements mit einem `^` Zeichen am Offset zeigt.

{{EmbedLiveSample('Split text nodes at caret position in DOM','100%','400px')}}

### Textknoten an Einfügemarkenpositionen im Shadow DOM aufteilen

Dieses Beispiel zeigt, wie man die Einfügemarkenposition von einem ausgewählten Knoten innerhalb eines Shadow Roots erhält.
Das Beispiel ist dem oben genannten DOM-only Beispiel sehr ähnlich, außer dass einige der Texte innerhalb eines Shadow Roots liegen.
Wir stellen eine Schaltfläche zur Verfügung, mit der Sie den Unterschied sehen können, wenn ein Shadow Root an `caretPositionFromPoint()` übergeben oder nicht übergeben wird.

Beachten Sie, dass einige Teile des Codes verborgen sind, einschließlich des Codes, der für das Logging verwendet wird, da dies für das Verständnis dieser Methode nicht nützlich ist.

#### HTML

Das HTML definiert einen Absatz von Text innerhalb eines {{htmlelement("div")}} Elements.
Der Absatz enthält ein {{htmlelement("span")}} Element mit der `id` "host", das wir als Host für ein Shadow Root verwenden werden.
Es gibt auch einige Schaltflächen, die wir verwenden werden, um das Beispiel zurückzusetzen und die Shadow Root-Option zu `caretPositionFromPoint()` hinzuzufügen oder zu entfernen.

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

Hier verwenden wir CSS, um das `#host` Element rot und fett darzustellen.
Dies erleichtert die Unterscheidung zwischen Text im DOM und Text im Shadow DOM.

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
Wir verwenden JavaScript, um ein Shadow Root dynamisch zu verknüpfen, da das MDN-Beispielsystem uns nicht erlaubt, dies deklarativ mit dem {{htmlelement("template")}} Element zu tun.
Der Inhalt des Shadow DOM ist ein {{htmlelement("span")}} Element, das den Text "I'm in the shadow DOM" enthält.

```js
const host = document.querySelector("#host");
const shadow = host.attachShadow({ mode: "open" });
const shadowSpan = document.createElement("span");
shadowSpan.textContent = "I'm in the shadow DOM";
shadow.appendChild(shadowSpan);
```

Als nächstes fügen wir einen Handler für unsere "Enable/Disable shadow" Schaltfläche hinzu.
Dieser Code schaltet den Wert der `useShadows` Variablen um und aktualisiert den Schaltflächentext entsprechend.

```js
let useShadows = false;

const shadowButton = document.querySelector("#shadowButton");
shadowButton.addEventListener("click", () => {
  useShadows = !useShadows;
  shadowButton.innerText = useShadows ? "Remove Shadow" : "Add Shadow";
});
```

Die Methode unten überprüft zuerst die Unterstützung von `document.caretPositionFromPoint` und verwendet sie, um das Textelement und den Offset an der Einfügemarkenposition zu erhalten.
Der Wert der `useShadows` Variablen wird verwendet, um zu bestimmen, ob das Shadow Root in unserem Text an `caretPositionFromPoint()` übergeben wird.

- Wenn der Browser diese Methode nicht unterstützt, überprüft der Code dann [`document.caretRangeFromPoint`](/de/docs/Web/API/Document/caretRangeFromPoint) und verwendet diese stattdessen.
- Wenn das Element an der Einfügemarkenposition ein Textelement ist, teilt der Code dann das Element an dem ausgewählten Offset und fügt zwischen ihnen einen Zeilenumbruch ein.
- Wenn das Element ein Elementknoten ist, fügt der Code an dieser Stelle ein Zeilenumbruch-Elementknoten ein.

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

Abschließend fügen wir zwei Klick-Event-Handler für Absatzelemente im DOM und im Shadow Root hinzu.
Beachten Sie, dass wir spezifisch die Elemente innerhalb des `shadowRoot` abfragen müssen, da sie für normale DOM-Abfragemethoden nicht sichtbar sind.

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

Klicken Sie im **Lorem ipsum ...** Absatz vor oder nach dem Shadow DOM-Text, um an der Stelle, an der Sie klicken, einen Zeilenumbruch hinzuzufügen.
Beachten Sie, dass in diesem Fall das Protokoll anzeigt, dass Sie einen `TEXT_NODE` ausgewählt haben, den Offset und ein Fragment des ausgewählten Elements mit einem `^` Zeichen am Offset.

Anfangs wird das Shadow Root nicht an `caretPositionFromPoint()` übergeben, sodass, wenn Sie auf den Text "I'm in the shadow DOM" klicken, der zurückgegebene Einfügemarkenpositionsknoten das übergeordnete Element des Hosts ist, am Offset des Shadow Roots.
Der Zeilenumbruch wird daher vor dem Element hinzugefügt, anstatt an dem Punkt, den Sie ausgewählt haben.
Beachten Sie, dass der Einfügemarkenpositionsknoten in diesem Fall den Typ `ELEMENT_NODE` hat.

Wenn Sie die "Add shadow" Taste klicken, wird das Shadow Root an `caretPositionFromPoint()` übergeben, sodass die zurückgegebene Einfügemarkenposition der spezifische ausgewählte Knoten innerhalb des Shadow DOM ist.
Dadurch verhält sich der Shadow-DOM-Text wie der andere Absatztext.

{{EmbedLiveSample('Split text nodes at caret positions in a Shadow DOM','100%','400px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CaretPosition`](/de/docs/Web/API/CaretPosition)
