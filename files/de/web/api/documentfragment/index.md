---
title: DocumentFragment
slug: Web/API/DocumentFragment
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{ APIRef("DOM") }}

Die **`DocumentFragment`**-Schnittstelle repräsentiert ein minimales Dokumentobjekt, das keinen übergeordneten Knoten hat.

Es wird als eine leichtgewichtige Version des [`Document`](/de/docs/Web/API/Document) verwendet, die ein Segment einer Dokumentstruktur speichert, das aus Knoten besteht, ähnlich wie ein Standarddokument. Der Hauptunterschied besteht darin, dass das Dokumentfragment nicht Teil der aktiven Dokumentbaumstruktur ist. Änderungen am Fragment beeinflussen das Dokument nicht.

{{InheritanceDiagram}}

## Konstruktor

- [`DocumentFragment()`](/de/docs/Web/API/DocumentFragment/DocumentFragment)
  - : Erstellt und gibt ein neues `DocumentFragment`-Objekt zurück.

## Instanz-Eigenschaften

_Diese Schnittstelle hat keine spezifischen Eigenschaften, erbt jedoch die ihres Elternteils, [`Node`](/de/docs/Web/API/Node)._

- [`DocumentFragment.childElementCount`](/de/docs/Web/API/DocumentFragment/childElementCount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Kind-[`Elemente`](/de/docs/Web/API/Element) zurück, die das `DocumentFragment` hat.
- [`DocumentFragment.children`](/de/docs/Web/API/DocumentFragment/children) {{ReadOnlyInline}}
  - : Gibt ein Live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, das alle Objekte vom Typ [`Element`](/de/docs/Web/API/Element) enthält, die Kinder des `DocumentFragment`-Objekts sind.
- [`DocumentFragment.firstElementChild`](/de/docs/Web/API/DocumentFragment/firstElementChild) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das das erste Kind des `DocumentFragment`-Objekts ist, oder `null`, wenn kein solches existiert.
- [`DocumentFragment.lastElementChild`](/de/docs/Web/API/DocumentFragment/lastElementChild) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das das letzte Kind des `DocumentFragment`-Objekts ist, oder `null`, wenn kein solches existiert.

## Instanz-Methoden

_Diese Schnittstelle erbt die Methoden ihres Elternteils, [`Node`](/de/docs/Web/API/Node)._

- [`DocumentFragment.append()`](/de/docs/Web/API/DocumentFragment/append)
  - : Fügt eine Menge von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen nach dem letzten Kind des Dokumentfragments ein.
- [`DocumentFragment.prepend()`](/de/docs/Web/API/DocumentFragment/prepend)
  - : Fügt eine Menge von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen vor dem ersten Kind des Dokumentfragments ein.
- [`DocumentFragment.querySelector()`](/de/docs/Web/API/DocumentFragment/querySelector)
  - : Gibt den ersten [`Element`](/de/docs/Web/API/Element)-Knoten innerhalb des `DocumentFragment` in Dokumentreihenfolge zurück, der die angegebenen Selektoren erfüllt.
- [`DocumentFragment.querySelectorAll()`](/de/docs/Web/API/DocumentFragment/querySelectorAll)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) aller [`Element`](/de/docs/Web/API/Element)-Knoten innerhalb des `DocumentFragment` zurück, die die angegebenen Selektoren erfüllen.
- [`DocumentFragment.replaceChildren()`](/de/docs/Web/API/DocumentFragment/replaceChildren)
  - : Ersetzt die vorhandenen Kinder eines `DocumentFragment` durch eine angegebene neue Menge von Kindern.
- [`DocumentFragment.getElementById()`](/de/docs/Web/API/DocumentFragment/getElementById)
  - : Gibt den ersten [`Element`](/de/docs/Web/API/Element)-Knoten innerhalb des `DocumentFragment` in Dokumentreihenfolge zurück, der die angegebene ID erfüllt. Funktional äquivalent zu [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById).

## Verwendungshinweise

Eine häufige Verwendung für `DocumentFragment` besteht darin, eines zu erstellen, einen DOM-Teilbaum darin zusammenzubauen und dann das Fragment in den DOM mit Methoden der [`Node`](/de/docs/Web/API/Node) Schnittstelle wie [`appendChild()`](/de/docs/Web/API/Node/appendChild), [`append()`](/de/docs/Web/API/Element/append) oder [`insertBefore()`](/de/docs/Web/API/Node/insertBefore) anzuhängen oder einzufügen. Dadurch werden die Knoten des Fragments in den DOM verschoben, wodurch ein leeres `DocumentFragment` zurückbleibt.

Diese Schnittstelle ist auch bei Web-Komponenten sehr nützlich: {{HTMLElement("template")}}-Elemente enthalten ein `DocumentFragment` in ihrer [`HTMLTemplateElement.content`](/de/docs/Web/API/HTMLTemplateElement/content)-Eigenschaft.

Ein leeres `DocumentFragment` kann mit der Methode [`document.createDocumentFragment()`](/de/docs/Web/API/Document/createDocumentFragment) oder dem Konstruktor erstellt werden.

## Leistung

Der Leistungsvorteil von `DocumentFragment` wird oft überschätzt. Tatsächlich ist in einigen Engines die Verwendung eines `DocumentFragment` langsamer als das Anhängen an das Dokument in einer Schleife, wie in diesem [Benchmark](https://jsbench.me/02l63eic9j/1) gezeigt. Der Unterschied zwischen diesen Beispielen ist jedoch so gering, dass es besser ist, die Lesbarkeit als die Leistung zu optimieren.

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
