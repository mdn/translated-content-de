---
title: "Selection: modify() Methode"
short-title: modify()
slug: Web/API/Selection/modify
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("DOM")}}

Die **`Selection.modify()`** Methode wendet eine Änderung auf die
aktuelle Auswahl oder die Cursorposition an, indem einfache Textbefehle verwendet werden.

## Syntax

```js-nolint
modify(alter, direction, granularity)
```

### Parameter

- `alter`
  - : Der Änderungstyp, der angewendet werden soll. Geben Sie `"move"` an, um die aktuelle Cursorposition zu verschieben, oder `"extend"`, um die aktuelle Auswahl zu erweitern.
- `direction`
  - : Die Richtung, in die die aktuelle Auswahl angepasst werden soll. Sie können
    `"forward"` oder `"backward"` angeben, um die Auswahl basierend auf der Sprache an der Auswahlposition in die entsprechende Richtung anzupassen. Wenn Sie in eine bestimmte Richtung anpassen möchten, können Sie `"left"` oder `"right"` angeben.
- `granularity`
  - : Die Entfernung, um die die aktuelle Auswahl oder Cursorposition angepasst werden soll. Sie können nach `"character"`, `"word"`, `"sentence"`, `"line"`, `"paragraph"`, `"lineboundary"`, `"sentenceboundary"`, `"paragraphboundary"` oder `"documentboundary"` verschieben.

> [!NOTE]
> Firefox implementiert **nicht** `"sentence"`, `"paragraph"`, `"sentenceboundary"`, `"paragraphboundary"` oder `"documentboundary"`. WebKit und Blink dagegen schon.

> [!NOTE]
> Ab Firefox 5 umfasst die Granularität `"word"` nicht mehr den folgenden Leerraum, unabhängig vom Standardplattformverhalten. Dies macht das Verhalten konsistenter und gleicht es der früheren Funktionsweise von WebKit an, obwohl sie ihr Verhalten kürzlich geändert haben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel zeigt die verschiedenen `granularity` Optionen für das Ändern einer Auswahl. Klicken Sie irgendwo innerhalb des Beispiels (optional, indem Sie etwas Text auswählen) und klicken Sie dann auf die Schaltfläche, um die Auswahl zu erweitern.

### HTML

```html
<p>
  Click somewhere in this example. Then click the button below to expand the
  selection. Watch what happens!
</p>
<p>
  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
  cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
  maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
  repellendus.
</p>

<label for="granularity">Granularity:</label>
<select id="granularity">
  <option value="character">Character</option>
  <option value="word">Word</option>
  <option value="sentence">Sentence</option>
  <option value="line">Line</option>
  <option value="paragraph">Paragraph</option>
  <option value="lineboundary">Line Boundary</option>
  <option value="sentenceboundary">Sentence Boundary</option>
  <option value="paragraphboundary">Paragraph Boundary</option>
  <option value="documentboundary">Document Boundary</option>
</select>

<br /><br />

<button>Extend selection</button>
```

### JavaScript

```js
let select = document.querySelector("select");
let button = document.querySelector("button");

button.addEventListener("click", modify);

function modify() {
  let selection = window.getSelection();
  selection.modify("extend", "forward", select.value);
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 700, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Selection`](/de/docs/Web/API/Selection), die Schnittstelle, zu der es gehört.
