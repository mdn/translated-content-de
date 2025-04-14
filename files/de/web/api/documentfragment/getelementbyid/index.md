---
title: "DocumentFragment: getElementById()-Methode"
short-title: getElementById()
slug: Web/API/DocumentFragment/getElementById
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

{{ ApiRef("DOM") }}

Die **`getElementById()`**-Methode des [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) gibt ein [`Element`](/de/docs/Web/API/Element)-Objekt zurück, das das Element darstellt, dessen [`id`](/de/docs/Web/API/Element/id)-Eigenschaft mit dem angegebenen String übereinstimmt. Da Element-IDs, wenn sie angegeben sind, einzigartig sein müssen, sind sie eine nützliche Möglichkeit, schnell auf ein bestimmtes Element zuzugreifen.

Wenn Sie auf ein Element zugreifen müssen, das keine ID hat, können Sie [`querySelector()`](/de/docs/Web/API/Document/querySelector) verwenden, um das Element mit einem beliebigen {{Glossary("CSS_selector", "Selector")}} zu finden.

> [!NOTE]
> IDs sollten innerhalb eines Dokumentfragments eindeutig sein. Wenn zwei oder mehr Elemente in einem Dokumentfragment die gleiche ID haben, gibt diese Methode das erste gefundene Element zurück.

## Syntax

```js-nolint
getElementById(id)
```

> [!NOTE]
> Die Großschreibung von `"Id"` im Namen dieser Methode _muss_ korrekt sein, damit der Code funktioniert; `getElementByID()` ist _nicht_ gültig und wird nicht funktionieren, so natürlich es auch erscheinen mag.

### Parameter

- `id`
  - : Die ID des zu lokalisierenden Elements. Die ID ist ein case-sensitiver String, der innerhalb des Dokumentfragments eindeutig ist: Nur ein Element sollte eine gegebene ID haben.

### Rückgabewert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt, das das DOM-Elementobjekt beschreibt, das mit der angegebenen ID übereinstimmt, oder `null`, wenn kein übereinstimmendes Element im Dokumentfragment gefunden wurde.

## Beispiele

### Eine Liste von Elementen erweitern

In diesem Beispiel enthält das Dokument eine Liste mit einem einzigen Eintrag `Cherry`. Wir erstellen außerdem ein Dokumentfragment, das vier weitere Einträge enthält: `Apple`, `Orange`, `Banana` und `Melon`.

Wir protokollieren dann das Ergebnis der Verwendung von `getElementById()`, um nach `Apple` und `Cherry` im Dokument und im Fragment zu suchen. Zu diesem Zeitpunkt erscheint `Cherry` nur im Dokument, während `Apple` nur im Fragment erscheint.

Wenn Sie auf „Fragment zum Dokument hinzufügen“ klicken, fügen wir das Fragment der Liste im Dokument hinzu und protokollieren erneut das Ergebnis der Suche nach sowohl `Apple` als auch `Cherry` im Dokument und im Fragment. Dieses Mal erscheinen sowohl `Apple` als auch `Cherry` im Dokument und keines von beiden im Fragment.

Dies liegt daran, dass das Anhängen eines Fragments an ein Dokument die Knoten des Fragments in das DOM verschiebt, was ein leeres `DocumentFragment` hinterlässt.

#### HTML

```html
<button id="add">Add fragment to document</button>
<button id="reset">Reset example</button> <br />
List content:
<ul>
  <li id="Cherry">Cherry</li>
</ul>
Fragment content:
<ul id="fragment"></ul>
Current status:
<pre id="log"></pre>
```

```css hidden
button {
  margin-bottom: 10px;
}
```

#### JavaScript

```js
// Create the document fragment with its initial content
const fragment = new DocumentFragment();
["Apple", "Orange", "Banana", "Melon"].forEach((fruit) => {
  const li = document.createElement("li");
  li.textContent = fruit;
  li.id = fruit;
  fragment.append(li);
});

// When the button is clicked, add the fragment to the list
document.getElementById("add").addEventListener("click", () => {
  document.querySelector("ul").append(fragment);
  displayStatus();
});

// Log the results of both getElementById()
function displayStatus() {
  const log = document.getElementById("log");
  log.textContent = "";
  ["Apple", "Cherry"].forEach((id) => {
    log.textContent += `document.getElementById("${id}") ${
      document.getElementById(id) ? "Yes" : "No"
    }\n`;
    log.textContent += `fragment.getElementById("${id}") ${
      fragment.getElementById(id) ? "Yes" : "No"
    }\n`;
  });

  // Empty the fragment viewer and fill it with the current content
  const fragmentViewer = document.getElementById("fragment");
  while (fragmentViewer.hasChildNodes()) {
    fragmentViewer.removeChild(fragmentViewer.lastChild);
  }
  for (entry of fragment.children) {
    fragmentViewer.appendChild(entry.cloneNode(true));
  }
}

// Log the initial state
displayStatus();

// Hook the reset button
document.getElementById("reset").addEventListener("click", () => {
  document.location.reload();
});
```

#### Ergebnis

{{EmbedLiveSample('Examples', '100%', '410px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById)
