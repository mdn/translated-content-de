---
title: "Dokument: anchors-Eigenschaft"
short-title: anchors
slug: Web/API/Document/anchors
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}

Die schreibgeschützte **`anchors`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt eine Liste aller Anker im Dokument zurück.

## Wert

Eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection).

## Beispiele

### Grundlegende Nutzung

```js
if (document.anchors.length >= 5) {
  console.log("found too many anchors");
}
```

### Erstellen eines Inhaltsverzeichnisses

Das folgende Beispiel zeigt, wie ein Inhaltsverzeichnis automatisch mit jedem Anker auf der Seite gefüllt wird:

```html
<h1>Title</h1>
<h2><a name="contents">Contents</a></h2>
<ul id="toc"></ul>

<h2><a name="plants">Plants</a></h2>
<ol>
  <li>Apples</li>
  <li>Oranges</li>
  <li>Pears</li>
</ol>

<h2><a name="veggies">Veggies</a></h2>
<ol>
  <li>Carrots</li>
  <li>Celery</li>
  <li>Beats</li>
</ol>
```

```js
const toc = document.getElementById("toc");
for (const anchor of document.anchors) {
  const li = document.createElement("li");
  const newAnchor = document.createElement("a");
  newAnchor.href = `#${anchor.name}`;
  newAnchor.textContent = anchor.text;
  li.appendChild(newAnchor);
  toc.appendChild(li);
}
```

{{EmbedLiveSample("Erstellen eines Inhaltsverzeichnisses", "", 500)}}

## Hinweise

Aus Gründen der Abwärtskompatibilität enthält die zurückgegebene Menge von Ankern nur jene, die mit dem `name`-Attribut erstellt wurden, nicht jene, die mit dem `id`-Attribut erstellt wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
