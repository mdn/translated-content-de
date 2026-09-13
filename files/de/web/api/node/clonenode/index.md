---
title: "Knoten: Methode cloneNode()"
short-title: cloneNode()
slug: Web/API/Node/cloneNode
l10n:
  sourceCommit: 11ec5c2a7635fd5a724abf59e4088075a940bdb6
---

{{APIRef("DOM")}}

Die **`cloneNode()`** Methode des [`Node`](/de/docs/Web/API/Node) Interfaces gibt eine Kopie des Knotens zurück, auf dem diese Methode aufgerufen wurde. Ihr Parameter steuert, ob auch die im Knoten enthaltene Unterstruktur geklont wird oder nicht.

Standardmäßig kopiert das Klonen eines Knotens alle seine Attribute und deren Werte einschließlich der über Attribute spezifizierten Event-Listener. Durch Setzen des `deep`-Parameters kann auch die im Knoten enthaltene Unterstruktur kopiert werden. Sie kopiert _nicht_ andere interne Daten, wie Event-Listener, die mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder `onevent` Eigenschaften (z. B. `node.onclick = someFunction`) hinzugefügt wurden, oder das gemalte Bild für ein {{HTMLElement("canvas")}} Element.

Die [`Document.importNode()`](/de/docs/Web/API/Document/importNode) Methode erstellt ebenfalls eine Kopie eines Knotens. Der Unterschied besteht darin, dass `importNode()` den Knoten im Kontext des aufrufenden Dokuments klont, während `cloneNode()` das Dokument des zu klonenden Knotens verwendet. Der Dokumentenkontext bestimmt das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) für die Konstruktion aller benutzerdefinierten Elemente. Aus diesem Grund sollte `importNode()` im Ziel-Dokument verwendet werden, um Knoten zu klonen, die in einem anderen Dokument verwendet werden sollen. Der [`HTMLTemplateElement.content`](/de/docs/Web/API/HTMLTemplateElement/content) gehört zu einem separaten Dokument, daher sollte er ebenfalls mit `document.importNode()` geklont werden, damit benutzerdefinierte Elementnachfahren mit den Definitionen im aktuellen Dokument konstruiert werden.

> [!WARNING]
> `cloneNode()` kann zu doppelten Element-IDs in einem Dokument führen! Wenn der ursprüngliche Knoten ein `id`-Attribut hat und die Kopie im selben Dokument platziert wird, sollten Sie die ID der Kopie ändern, um eindeutig zu sein.
>
> Auch `name`-Attribute müssen möglicherweise geändert werden, abhängig davon, ob doppelte Namen erwartet werden.

## Syntax

```js-nolint
cloneNode()
cloneNode(deep)
```

### Parameter

- `deep` {{optional_inline}}
  - : Wenn `true`, dann wird der Knoten und seine gesamte Unterstruktur,
    einschließlich des Textes, der sich in untergeordneten [`Text`](/de/docs/Web/API/Text) Knoten befinden kann,
    ebenfalls kopiert.

    Wenn `false` oder weggelassen, wird nur der Knoten geklont.
    Die Unterstruktur, einschließlich eines Textes, den der Knoten enthält, wird nicht geklont.

    Beachten Sie, dass `deep` keine Auswirkung auf {{Glossary("void_element", "void elements")}} hat,
    wie {{HTMLElement("img")}} und {{HTMLElement("input")}} Elemente.

    Standardmäßig auf `false` gesetzt.

### Rückgabewert

Der neue geklonte [`Node`](/de/docs/Web/API/Node).
Der geklonte Knoten hat keinen Elternknoten und ist kein Bestandteil des Dokuments,
_bis_ er zu einem anderen Knoten hinzugefügt wird, der Teil des Dokuments ist,
indem [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) oder eine ähnliche Methode verwendet wird.

## Beispiel

### Verwenden von cloneNode()

```js
const p = document.getElementById("para1");
const p2 = p.cloneNode(true);
```

### Verwenden von cloneNode() mit Vorlagen

Vermeiden Sie die Verwendung von `cloneNode()` auf dem Inhalt eines {{htmlelement("template")}} Elements, da benutzerdefinierte Elemente in der Vorlage nicht aktualisiert werden, bis sie in das Dokument eingefügt sind.

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

Verwenden Sie stattdessen `document.importNode()`, um den Vorlageninhalt zu klonen, sodass alle benutzerdefinierten Elemente mit den Definitionen im aktuellen Dokument aktualisiert werden:

```js
const clone = document.importNode(template.content, true);
// Logs "MyElement created"; my-element is upgraded using document's definitions
document.body.appendChild(clone);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
