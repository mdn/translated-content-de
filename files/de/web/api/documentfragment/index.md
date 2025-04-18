---
title: DocumentFragment
slug: Web/API/DocumentFragment
l10n:
  sourceCommit: fd1081dbbecd338a3ea55b03c187b6a60500408f
---

{{ APIRef("DOM") }}

Das **`DocumentFragment`**-Interface repräsentiert ein minimales Dokumentobjekt, das keinen Elternknoten hat.

Es wird als eine leichtgewichtige Version von [`Document`](/de/docs/Web/API/Document) verwendet, die ein Segment einer Dokumentstruktur speichert, das aus Knoten wie ein Standarddokument besteht. Der wesentliche Unterschied besteht darin, dass das Dokumentfragment nicht Teil der aktiven Dokumentbaumstruktur ist. Änderungen am Fragment wirken sich nicht auf das Dokument aus.

{{InheritanceDiagram}}

## Konstruktor

- [`DocumentFragment()`](/de/docs/Web/API/DocumentFragment/DocumentFragment)
  - : Erstellt und gibt ein neues `DocumentFragment`-Objekt zurück.

## Instanz-Eigenschaften

_Dieses Interface hat keine spezifischen Eigenschaften, erbt jedoch die seines Elternteils, [`Node`](/de/docs/Web/API/Node)._

- [`DocumentFragment.childElementCount`](/de/docs/Web/API/DocumentFragment/childElementCount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Kind-[`Elemente`](/de/docs/Web/API/Element) zurück, die das `DocumentFragment` hat.
- [`DocumentFragment.children`](/de/docs/Web/API/DocumentFragment/children) {{ReadOnlyInline}}
  - : Gibt eine Live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle Objekte vom Typ [`Element`](/de/docs/Web/API/Element) enthält, die Kinder des `DocumentFragment`-Objekts sind.
- [`DocumentFragment.firstElementChild`](/de/docs/Web/API/DocumentFragment/firstElementChild) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das das erste Kind des `DocumentFragment`-Objekts ist, oder `null`, wenn keines vorhanden ist.
- [`DocumentFragment.lastElementChild`](/de/docs/Web/API/DocumentFragment/lastElementChild) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das das letzte Kind des `DocumentFragment`-Objekts ist, oder `null`, wenn keines vorhanden ist.

## Instanz-Methoden

_Dieses Interface erbt die Methoden seines Elternteils, [`Node`](/de/docs/Web/API/Node)._

- [`DocumentFragment.append()`](/de/docs/Web/API/DocumentFragment/append)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenketten nach dem letzten Kind des Dokumentfragments ein.
- [`DocumentFragment.prepend()`](/de/docs/Web/API/DocumentFragment/prepend)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenketten vor dem ersten Kind des Dokumentfragments ein.
- [`DocumentFragment.querySelector()`](/de/docs/Web/API/DocumentFragment/querySelector)
  - : Gibt den ersten [`Element`](/de/docs/Web/API/Element)-Knoten innerhalb des `DocumentFragment` in Dokumentreihenfolge zurück, der den angegebenen Selektoren entspricht.
- [`DocumentFragment.querySelectorAll()`](/de/docs/Web/API/DocumentFragment/querySelectorAll)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) aller [`Element`](/de/docs/Web/API/Element)-Knoten innerhalb des `DocumentFragment` zurück, die den angegebenen Selektoren entsprechen.
- [`DocumentFragment.moveBefore()`](/de/docs/Web/API/DocumentFragment/moveBefore) {{Experimental_Inline}}
  - : Verschiebt einen gegebenen [`Node`](/de/docs/Web/API/Node) als direktes Kind innerhalb des aufrufenden `DocumentFragment` vor einem angegebenen Referenzknoten, ohne den Knoten zu entfernen und dann einzufügen.
- [`DocumentFragment.replaceChildren()`](/de/docs/Web/API/DocumentFragment/replaceChildren)
  - : Ersetzt die bestehenden Kinder eines `DocumentFragment` durch eine angegebene neue Menge von Kindern.
- [`DocumentFragment.getElementById()`](/de/docs/Web/API/DocumentFragment/getElementById)
  - : Gibt den ersten [`Element`](/de/docs/Web/API/Element)-Knoten innerhalb des `DocumentFragment` in Dokumentreihenfolge zurück, der der angegebenen ID entspricht. Funktionell gleichwertig mit [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById).

## Verwendungshinweise

Ein gängiger Einsatz für `DocumentFragment` ist es, eines zu erstellen, ein DOM-Teilbaum darin zu assemblieren und dann das Fragment in das DOM einzufügen oder anzuhängen, indem Methoden des [`Node`](/de/docs/Web/API/Node)-Interfaces wie [`appendChild()`](/de/docs/Web/API/Node/appendChild), [`append()`](/de/docs/Web/API/Element/append) oder [`insertBefore()`](/de/docs/Web/API/Node/insertBefore) verwendet werden. Dabei werden die Knoten des Fragments in das DOM verschoben, sodass ein leeres `DocumentFragment` zurückbleibt.

Dieses Interface ist auch bei Webkomponenten sehr nützlich: {{HTMLElement("template")}}-Elemente enthalten ein `DocumentFragment` in ihrer [`HTMLTemplateElement.content`](/de/docs/Web/API/HTMLTemplateElement/content)-Eigenschaft.

Ein leeres `DocumentFragment` kann durch die Methode [`document.createDocumentFragment()`](/de/docs/Web/API/Document/createDocumentFragment) oder den Konstruktor erstellt werden.

## Leistung

Der Leistungsnutzen von `DocumentFragment` wird oft überschätzt. Tatsächlich ist die Verwendung eines `DocumentFragment` in einigen Engines langsamer als das Anhängen an das Dokument in einer Schleife, wie in [diesem Benchmark](https://jsbench.me/02l63eic9j/1) gezeigt. Der Unterschied zwischen diesen Beispielen ist jedoch so marginal, dass es besser ist, die Lesbarkeit gegenüber der Leistung zu optimieren.

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
