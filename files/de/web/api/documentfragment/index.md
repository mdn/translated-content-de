---
title: DocumentFragment
slug: Web/API/DocumentFragment
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{ APIRef("DOM") }}

Das **`DocumentFragment`** Interface repräsentiert ein minimales Dokumentobjekt, das keinen Elternteil hat.

Es wird als schlankere Version von {{domxref("Document")}} verwendet, die ein Dokumentsegment mit einem Aufbau aus Knoten speichert, ähnlich einem Standarddokument. Der Hauptunterschied besteht darin, dass das Dokument-Fragment nicht Teil der aktiven Dokumentstruktur ist. Änderungen am Fragment haben keine Auswirkungen auf das Dokument.

{{InheritanceDiagram}}

## Konstruktor

- {{ domxref("DocumentFragment.DocumentFragment()", "DocumentFragment()") }}
  - : Erstellt und gibt ein neues `DocumentFragment` Objekt zurück.

## Instanzeigenschaften

_Dieses Interface hat keine spezifischen Eigenschaften, erbt jedoch jene seines Elternteils, {{domxref("Node")}}._

- {{ domxref("DocumentFragment.childElementCount") }} {{ReadOnlyInline}}
  - : Gibt die Anzahl der Kind-{{domxref("Element","elemente")}} des `DocumentFragment` zurück.
- {{ domxref("DocumentFragment.children") }} {{ReadOnlyInline}}
  - : Gibt eine lebendige {{domxref("HTMLCollection")}} zurück, die alle Objekte vom Typ {{domxref("Element")}} enthält, die Kinder des `DocumentFragment` Objekts sind.
- {{ domxref("DocumentFragment.firstElementChild") }} {{ReadOnlyInline}}
  - : Gibt das {{domxref("Element")}} zurück, das das erste Kind des `DocumentFragment` Objekts ist, oder `null`, wenn keines vorhanden ist.
- {{ domxref("DocumentFragment.lastElementChild") }} {{ReadOnlyInline}}
  - : Gibt das {{domxref("Element")}} zurück, das das letzte Kind des `DocumentFragment` Objekts ist, oder `null`, wenn keines vorhanden ist.

## Instanzmethoden

_Dieses Interface erbt die Methoden seines Elternteils, {{domxref("Node")}}._

- {{DOMxRef("DocumentFragment.append()")}}
  - : Fügt eine Menge von {{domxref("Node")}} Objekten oder Strings nach dem letzten Kind des Dokumentfragments ein.
- {{DOMxRef("DocumentFragment.prepend()")}}
  - : Fügt eine Menge von {{domxref("Node")}} Objekten oder Strings vor dem ersten Kind des Dokumentfragments ein.
- {{domxref("DocumentFragment.querySelector()")}}
  - : Gibt den ersten {{domxref("Element")}} Knoten innerhalb des `DocumentFragment` in Dokumentreihenfolge zurück, der die angegebenen Selektoren erfüllt.
- {{domxref("DocumentFragment.querySelectorAll()")}}
  - : Gibt eine {{domxref("NodeList")}} aller {{domxref("Element")}} Knoten innerhalb des `DocumentFragment` zurück, die die angegebenen Selektoren erfüllen.
- {{DOMxRef("DocumentFragment.replaceChildren()")}}
  - : Ersetzt die bestehenden Kinder eines `DocumentFragment` durch eine angegebene neue Menge von Kindern.
- {{domxref("DocumentFragment.getElementById()")}}
  - : Gibt den ersten {{domxref("Element")}} Knoten innerhalb des `DocumentFragment` in Dokumentreihenfolge zurück, der die angegebene ID erfüllt. Funktionell gleichwertig zu {{domxref("Document.getElementById()")}}.

## Benutzungshinweise

Ein häufiges Anwendungsbeispiel für `DocumentFragment` ist die Erstellung eines solchen, die Zusammenstellung eines DOM-Unterbaus darin und anschließendem Anhängen oder Einfügen des Fragments in das DOM mittels Methoden der {{domxref("Node")}} Schnittstelle wie {{domxref("Node.appendChild", "appendChild()")}}, {{domxref("Element.append", "append()")}} oder {{domxref("Node.insertBefore", "insertBefore()")}}. Dies verschiebt die Knoten des Fragments in das DOM und hinterlässt ein leeres `DocumentFragment`.

Dieses Interface ist auch bei Webkomponenten sehr nützlich: {{HTMLElement("template")}} Elemente enthalten ein `DocumentFragment` in ihrer {{domxref("HTMLTemplateElement.content")}} Eigenschaft.

Ein leeres `DocumentFragment` kann mit der Methode {{domxref("document.createDocumentFragment()")}} oder dem Konstruktor erstellt werden.

## Leistung

Der Leistungsnutzen von `DocumentFragment` wird oft überschätzt. In einigen Engines ist die Verwendung eines `DocumentFragment` sogar langsamer als das Anhängen an das Dokument in einer Schleife, wie in [diesem Benchmark](https://jsbench.me/02l63eic9j/1) gezeigt. Der Unterschied zwischen diesen Beispielen ist jedoch so marginal, dass es besser ist, die Lesbarkeit als die Leistung zu optimieren.

## Beispiel

### HTML

```html
<ul></ul>
```

### JavaScript

```js
const ul = document.querySelector("ul");
const fruits = ["Apple", "Orange", "Banana", "Melon"];

const fragment = new DocumentFragment();

for (const fruit of fruits) {
  const li = document.createElement("li");
  li.textContent = fruit;
  fragment.append(li);
}

ul.append(fragment);
```

### Ergebnis

{{EmbedLiveSample('Example')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
