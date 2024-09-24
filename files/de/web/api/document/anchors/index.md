---
title: "Dokument: anchors Eigenschaft"
short-title: anchors
slug: Web/API/Document/anchors
l10n:
  sourceCommit: 10609d35e92f68f2dacbb1be07d31e736a2b487a
---

{{APIRef("DOM")}} {{Deprecated_Header}}

Die schreibgeschützte **`anchors`** Eigenschaft des {{domxref("Document")}} Interfaces gibt eine Liste aller Anker im Dokument zurück.

## Wert

Eine {{domxref("HTMLCollection")}}.

## Beispiele

```js
if (document.anchors.length >= 5) {
  console.log("zu viele Anker gefunden");
}
```

Das folgende Beispiel zeigt, wie ein Inhaltsverzeichnis automatisch mit jedem Anker auf der Seite gefüllt wird:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Test</title>
    <script>
      function init() {
        const toc = document.getElementById("toc");
        for (const anchor of document.anchors) {
          const li = document.createElement("li");
          const newAnchor = document.createElement("a");
          newAnchor.href = "#" + anchor.name;
          newAnchor.textContent = anchor.text;
          li.appendChild(newAnchor);
          toc.appendChild(li);
        }
      }
    </script>
  </head>
  <body onload="init()">
    <h1>Titel</h1>
    <h2><a name="contents">Inhalt</a></h2>
    <ul id="toc"></ul>

    <h2><a name="plants">Pflanzen</a></h2>
    <ol>
      <li>Äpfel</li>
      <li>Orangen</li>
      <li>Birnen</li>
    </ol>

    <h2><a name="veggies">Gemüse</a></h2>
    <ol>
      <li>Karotten</li>
      <li>Sellerie</li>
      <li>Rüben</li>
    </ol>
  </body>
</html>
```

[Auf JSFiddle ansehen](https://jsfiddle.net/S4yNp)

## Hinweise

Aus Gründen der Abwärtskompatibilität enthält die zurückgegebene Menge an Ankern nur diejenigen, die mit dem `name`-Attribut erstellt wurden, nicht diejenigen, die mit dem `id`-Attribut erstellt wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
