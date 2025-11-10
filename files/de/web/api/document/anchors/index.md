---
title: "Dokument: anchors-Eigenschaft"
short-title: anchors
slug: Web/API/Document/anchors
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}} {{Deprecated_Header}}

Die schreibgeschützte **`anchors`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interface gibt eine Liste aller Anker im Dokument zurück.

## Wert

Ein [`HTMLCollection`](/de/docs/Web/API/HTMLCollection).

## Beispiele

### Grundlegende Nutzung

```js
if (document.anchors.length >= 5) {
  console.log("found too many anchors");
}
```

### Erstellen eines Inhaltsverzeichnisses

Das folgende Beispiel füllt ein Inhaltsverzeichnis automatisch mit jedem Anker auf der Seite:

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

Aus Gründen der Rückwärtskompatibilität enthält die zurückgegebene Menge an Ankern nur diejenigen Anker, die mit dem `name`-Attribut erstellt wurden, nicht diejenigen, die mit dem `id`-Attribut erstellt wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
