---
title: "Document: querySelectorAll()-Methode"
short-title: querySelectorAll()
slug: Web/API/Document/querySelectorAll
l10n:
  sourceCommit: 379af5c68d85abee004bba8163fb48546b5e388f
---

{{APIRef("DOM")}}

Die [`Document`](/de/docs/Web/API/Document)-Methode **`querySelectorAll()`** gibt eine statische (nicht dynamische) [`NodeList`](/de/docs/Web/API/NodeList) zurück, die eine Liste der Elemente des Dokuments repräsentiert, die mit der angegebenen Gruppe von Selektoren übereinstimmen.

## Syntax

```js-nolint
querySelectorAll(selectors)
```

### Parameter

- `selectors`

  - : Ein String, der einen oder mehrere Selektoren zum Abgleichen enthält. Dieser String muss ein gültiger CSS-Selektor-String sein; wenn dies nicht der Fall ist, wird eine `SyntaxError`-Ausnahme ausgelöst.

    Beachten Sie, dass die HTML-Spezifikation nicht verlangt, dass Attributwerte gültige CSS-Bezeichner sind. Wenn ein [`class`](/de/docs/Web/HTML/Global_attributes/class)- oder [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attributwert kein gültiger CSS-Bezeichner ist, müssen Sie ihn vor der Verwendung in einem Selektor escapen, entweder indem Sie [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) auf den Wert anwenden oder eine der in [Escaping characters](/de/docs/Web/CSS/ident#escaping_characters) beschriebenen Techniken verwenden. Siehe [Escaping von Attributwerten](#attributwerte_escapen) für ein Beispiel.

### Rückgabewert

Eine nicht dynamische [`NodeList`](/de/docs/Web/API/NodeList), die ein [`Element`](/de/docs/Web/API/Element)-Objekt für jedes Element enthält, das mit mindestens einem der angegebenen Selektoren übereinstimmt, oder eine leere [`NodeList`](/de/docs/Web/API/NodeList), falls keine Übereinstimmungen gefunden wurden. Die Elemente sind in Dokumentreihenfolge, d.h. Eltern vor Kindern, frühere Geschwister vor späteren Geschwistern.

> [!NOTE]
> Wenn die angegebenen `selectors` ein [CSS-Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) enthalten, ist die zurückgegebene Liste immer leer.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Syntax des angegebenen `selectors`-Strings nicht gültig ist.

## Beispiele

### Eine Liste von Übereinstimmungen erhalten

Um eine [`NodeList`](/de/docs/Web/API/NodeList) aller {{HTMLElement("p")}}-Elemente im Dokument zu erhalten:

```js
const matches = document.querySelectorAll("p");
```

Dieses Beispiel gibt eine Liste aller {{HTMLElement("div")}}-Elemente im Dokument zurück, die entweder die Klasse `note` oder `alert` haben:

```js
const matches = document.querySelectorAll("div.note, div.alert");
```

Hier erhalten wir eine Liste von `<p>`-Elementen, deren unmittelbares Elternelement ein {{HTMLElement("div")}} mit der Klasse `highlighted` ist und die sich in einem Container mit der ID `test` befinden.

```js
const container = document.querySelector("#test");
const matches = container.querySelectorAll("div.highlighted > p");
```

Dieses Beispiel verwendet einen [Attributselektor](/de/docs/Web/CSS/Attribute_selectors), um eine Liste der {{HTMLElement("iframe")}}-Elemente im Dokument zurückzugeben, die ein Attribut namens `data-src` enthalten:

```js
const matches = document.querySelectorAll("iframe[data-src]");
```

Hier wird ein Attributselektor verwendet, um eine Liste der Listenelemente innerhalb einer Liste mit der ID `userlist` zurückzugeben, die ein `data-active`-Attribut haben, dessen Wert `1` ist:

```js
const container = document.querySelector("#userlist");
const matches = container.querySelectorAll("li[data-active='1']");
```

### Auf die Übereinstimmungen zugreifen

Sobald die [`NodeList`](/de/docs/Web/API/NodeList) der übereinstimmenden Elemente zurückgegeben wird, können Sie sie wie jedes Array untersuchen. Wenn das Array leer ist (d.h., seine `length`-Eigenschaft ist 0), wurden keine Übereinstimmungen gefunden.

Andernfalls können Sie die Standard-Array-Notation verwenden, um auf die Inhalte der Liste zuzugreifen. Sie können jede übliche Schleife verwenden, wie zum Beispiel:

```js
const highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach((userItem) => {
  deleteUser(userItem);
});
```

### Attributwerte escapen

Dieses Beispiel zeigt, dass wir, wenn ein HTML-Dokument eine [`id`](/de/docs/Web/HTML/Global_attributes/id) enthält, die kein gültiger [CSS-Bezeichner](/de/docs/Web/CSS/ident) ist, den Attributwert escapen müssen, bevor wir ihn in `querySelectorAll()` verwenden.

#### HTML

Im folgenden Code hat ein {{htmlelement("div")}}-Element eine `id` von `"this?element"`, die kein gültiger CSS-Bezeichner ist, weil das Zeichen `"?"` in CSS-Bezeichnern nicht erlaubt ist.

Wir haben auch drei Buttons und ein {{htmlelement("pre")}}-Element zum Protokollieren von Fehlern.

```html
<div id="this?element"></div>

<button id="no-escape">No escape</button>
<button id="css-escape">CSS.escape()</button>
<button id="manual-escape">Manual escape</button>

<pre id="log"></pre>
```

#### CSS

```css
div {
  background-color: blue;
  margin: 1rem 0;
  height: 100px;
  width: 200px;
}
```

#### JavaScript

Alle drei Buttons versuchen, wenn sie geklickt werden, das `<div>` auszuwählen und dann seine Hintergrundfarbe in einen Zufallswert zu ändern.

- Der erste Button verwendet den Wert `"this?element"` direkt.
- Der zweite Button escapet den Wert mit [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static).
- Der dritte Button escapet explizit das Zeichen `"?"` mit einem Backslash. Beachten Sie, dass wir auch den Backslash selbst escapen müssen, indem wir einen weiteren Backslash verwenden, wie: `"\\?"`.

```js
const log = document.querySelector("#log");

function random(number) {
  return Math.floor(Math.random() * number);
}

function setBackgroundColor(id) {
  log.textContent = "";

  try {
    const elements = document.querySelectorAll(`#${id}`);
    const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    elements[0].style.backgroundColor = randomColor;
  } catch (e) {
    log.textContent = e;
  }
}

document.querySelector("#no-escape").addEventListener("click", () => {
  setBackgroundColor("this?element");
});

document.querySelector("#css-escape").addEventListener("click", () => {
  setBackgroundColor(CSS.escape("this?element"));
});

document.querySelector("#manual-escape").addEventListener("click", () => {
  setBackgroundColor("this\\?element");
});
```

#### Ergebnis

Durch Klicken auf den ersten Button wird ein Fehler angezeigt, während die zweiten und dritten Buttons ordnungsgemäß funktionieren.

{{embedlivesample("escaping_attribute_values", "", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [DOM-Elemente mit Selektoren lokalisieren](/de/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) im CSS-Leitfaden
- [Attributselektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) im MDN Learning-Bereich
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector) und [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector)
- [`DocumentFragment.querySelector()`](/de/docs/Web/API/DocumentFragment/querySelector) und [`DocumentFragment.querySelectorAll()`](/de/docs/Web/API/DocumentFragment/querySelectorAll)
