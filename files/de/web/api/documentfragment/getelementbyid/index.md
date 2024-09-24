---
title: "DocumentFragment: getElementById() Methode"
short-title: getElementById()
slug: Web/API/DocumentFragment/getElementById
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{ ApiRef("DOM") }}

Die **`getElementById()`** Methode des {{domxref("DocumentFragment")}} gibt ein {{domxref("Element")}} Objekt zurück, das das Element darstellt, dessen {{domxref("Element.id", "id")}} Eigenschaft mit dem angegebenen String übereinstimmt. Da Element-IDs, wenn sie angegeben sind, eindeutig sein müssen, sind sie eine nützliche Möglichkeit, sofortigen Zugriff auf ein bestimmtes Element zu erhalten.

Wenn Sie auf ein Element zugreifen müssen, das keine ID hat, können Sie {{domxref("Document.querySelector", "querySelector()")}} verwenden, um das Element mit einem beliebigen {{Glossary("CSS selector", "Selektor")}} zu finden.

> [!NOTE]
> IDs sollten innerhalb eines Dokumentfragments eindeutig sein. Wenn zwei oder mehr Elemente in einem Dokumentfragment dieselbe ID haben, gibt diese Methode das erste gefundene Element zurück.

## Syntax

```js-nolint
getElementById(id)
```

> [!NOTE]
> Die Großschreibung von `"Id"` im Namen dieser Methode _muss_ korrekt sein, damit der Code funktioniert; `getElementByID()` ist _nicht_ gültig und wird nicht funktionieren, so natürlich es auch erscheinen mag.

### Parameter

- `id`
  - : Die ID des zu lokalisierenden Elements. Die ID ist ein groß-/kleinschreibungssensitiver String, der innerhalb des Dokumentfragments eindeutig ist: Nur ein Element sollte eine bestimmte ID haben.

### Rückgabewert

Ein {{domxref("Element")}} Objekt, das das DOM-Element beschreibt, das mit der angegebenen ID übereinstimmt, oder `null`, wenn kein entsprechendes Element im Dokumentfragment gefunden wurde.

## Beispiele

### Liste von Elementen erweitern

In diesem Beispiel enthält das Dokument eine Liste mit einem einzigen Element `Cherry`. Wir erstellen außerdem ein Dokumentfragment, das vier weitere Elemente enthält: `Apple`, `Orange`, `Banana` und `Melon`.

Wir protokollieren dann das Ergebnis der Verwendung von `getElementById()`, um nach `Apple` und `Cherry` im Dokument und im Fragment zu suchen. Zu diesem Zeitpunkt erscheint `Cherry` nur im Dokument, während `Apple` nur im Fragment vorkommt.

Wenn Sie auf "Fragment zum Dokument hinzufügen" klicken, fügen wir das Fragment der Liste im Dokument hinzu und protokollieren erneut das Ergebnis der Suche nach `Apple` und `Cherry` im Dokument und im Fragment. Dieses Mal erscheinen sowohl `Apple` als auch `Cherry` im Dokument und keines von beiden im Fragment.

Dies liegt daran, dass das Anhängen eines Fragments an ein Dokument die Knoten des Fragments in das DOM verschiebt und ein leeres `DocumentFragment` zurücklässt.

#### HTML

```html
<button id="add">Fragment zum Dokument hinzufügen</button>
<button id="reset">Beispiel zurücksetzen</button> <br />
Listeninhalt:
<ul>
  <li id="Cherry">Cherry</li>
</ul>
Fragmentinhalt:
<ul id="fragment"></ul>
Aktueller Status:
<pre id="log" />
```

```css hidden
button {
  margin-bottom: 10px;
}
```

#### JavaScript

```js
// Erstellen Sie das Dokumentfragment mit seinem anfänglichen Inhalt
const fragment = new DocumentFragment();
["Apple", "Orange", "Banana", "Melon"].forEach((fruit) => {
  const li = document.createElement("li");
  li.textContent = fruit;
  li.id = fruit;
  fragment.append(li);
});

// Wenn die Schaltfläche geklickt wird, fügen Sie das Fragment der Liste hinzu
document.getElementById("add").addEventListener("click", () => {
  document.querySelector("ul").append(fragment);
  displayStatus();
});

// Protokollieren Sie die Ergebnisse von beide getElementById()
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

  // Leeren Sie den Fragment-Viewer und füllen ihn mit dem aktuellen Inhalt
  const fragmentViewer = document.getElementById("fragment");
  while (fragmentViewer.hasChildNodes()) {
    fragmentViewer.removeChild(fragmentViewer.lastChild);
  }
  for (entry of fragment.children) {
    fragmentViewer.appendChild(entry.cloneNode(true));
  }
}

// Protokollieren Sie den Anfangszustand
displayStatus();

// Schließen Sie die Zurücksetzen-Schaltfläche an
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

- {{domxref("Document.getElementById()")}}
