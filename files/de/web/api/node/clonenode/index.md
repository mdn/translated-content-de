---
title: "Node: cloneNode()-Methode"
short-title: cloneNode()
slug: Web/API/Node/cloneNode
l10n:
  sourceCommit: 730741c750cc299b85798f1adbaf7adbd6e2016d
---

{{APIRef("DOM")}}

Die **`cloneNode()`**-Methode der [`Node`](/de/docs/Web/API/Node)-Schnittstelle gibt eine Kopie des Knotens zurück, auf dem diese Methode aufgerufen wurde. Ihr Parameter steuert, ob auch der im Knoten enthaltene Unterbaum geklont wird oder nicht.

Standardmäßig kopiert das Klonen eines Knotens alle seine Attribute und deren Werte, einschließlich Ereignis-Listener, die über Attribute spezifiziert wurden. Durch das Setzen des `deep`-Parameters können Sie auch den im Knoten enthaltenen Unterbaum kopieren. Es wird _keine_ anderen internen Daten kopiert, wie z.B. mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzugefügte Ereignis-Listener oder `onevent`-Eigenschaften (z.B. `node.onclick = someFunction`), oder das gemalte Bild für ein {{HTMLElement("canvas")}}-Element.

Die Methode [`Document.importNode()`](/de/docs/Web/API/Document/importNode) erstellt ebenfalls eine Kopie eines Knotens. Der Unterschied besteht darin, dass `importNode()` den Knoten im Kontext des aufrufenden Dokuments klont, während `cloneNode()` das Dokument des geklonten Knotens verwendet. Der Dokumentenkontext bestimmt das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) für die Konstruktion von benutzerdefinierten Elementen. Aus diesem Grund sollten Sie `importNode()` auf dem Zieldokument verwenden, um Knoten zu klonen, die in einem anderen Dokument verwendet werden sollen. Der [`HTMLTemplateElement.content`](/de/docs/Web/API/HTMLTemplateElement/content) gehört zu einem separaten Dokument, daher sollte er auch mit `document.importNode()` geklont werden, damit benutzerdefinierte Elemente mit den im aktuellen Dokument definierten Definitionen konstruiert werden.

> [!WARNING]
> `cloneNode()` kann zu doppelten Element-IDs in einem Dokument führen! Wenn der ursprüngliche Knoten ein `id`-Attribut hat und die Kopie im selben Dokument platziert wird, sollten Sie die ID der Kopie ändern, um sie eindeutig zu machen.
>
> Auch `name`-Attribute müssen möglicherweise geändert werden, je nachdem, ob doppelte Namen erwartet werden.

## Syntax

```js-nolint
cloneNode()
cloneNode(deep)
```

### Parameter

- `deep` {{optional_inline}}
  - : Wenn `true`, dann wird der Knoten und sein gesamter Unterbaum,
    einschließlich Text, der sich in untergeordneten [`Text`](/de/docs/Web/API/Text)-Knoten befinden kann,
    ebenfalls kopiert.

    Wenn `false` oder weggelassen, wird nur der Knoten geklont.
    Der Unterbaum, einschließlich des Textes, den der Knoten enthält, wird nicht geklont.

    Beachten Sie, dass `deep` keine Auswirkung auf {{Glossary("void_element", "leere Elemente")}} hat,
    wie z.B. die {{HTMLElement("img")}}- und {{HTMLElement("input")}}-Elemente.

### Rückgabewert

Der neue geklonte [`Node`](/de/docs/Web/API/Node).
Der geklonte Knoten hat keinen Elternteil und ist nicht Teil des Dokuments,
_bis_ er zu einem anderen Knoten hinzugefügt wird, der Teil des Dokuments ist,
unter Verwendung von [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) oder einer ähnlichen Methode.

## Beispiel

### Verwendung von cloneNode()

```js
const p = document.getElementById("para1");
const p2 = p.cloneNode(true);
```

### Verwendung von cloneNode() mit Templates

Vermeiden Sie die Verwendung von `cloneNode()` für den Inhalt eines {{htmlelement("template")}}-Elements, da benutzerdefinierte Elemente im Template nicht aktualisiert werden, bis sie in das Dokument eingefügt werden.

```js
class MyElement extends HTMLElement {
  constructor() {
    super();
    console.log("MyElement created");
  }
}
customElements.define("my-element", MyElement);

const template = document.createElement("template");
template.innerHTML = `<my-element></my-element>`;

const clone = template.content.cloneNode(true);
// No log here; my-element is undefined in the template's document
customElements.upgrade(clone);
// Still no log; my-element is still undefined in the template's document
document.body.appendChild(clone);
// Logs "MyElement created"; my-element is now upgraded
```

Verwenden Sie stattdessen `document.importNode()`, um den Template-Inhalt zu klonen, sodass alle benutzerdefinierten Elemente unter Verwendung der Definitionen im aktuellen Dokument aktualisiert werden:

```js
const clone = document.importNode(template.content, true);
// Logs "MyElement created"; my-element is upgraded using document's definitions
document.body.appendChild(clone);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
