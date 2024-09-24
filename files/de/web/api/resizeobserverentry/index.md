---
title: ResizeObserverEntry
slug: Web/API/ResizeObserverEntry
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Resize Observer API")}}

Die **`ResizeObserverEntry`**-Schnittstelle repräsentiert das Objekt, das an die Rückruffunktion des Konstruktors {{domxref('ResizeObserver.ResizeObserver','ResizeObserver()')}} übergeben wird, und ermöglicht Ihnen den Zugriff auf die neuen Abmessungen des beobachteten {{domxref("Element")}} oder {{domxref("SVGElement")}}.

## Instanzeigenschaften

- {{domxref('ResizeObserverEntry.borderBoxSize')}} {{ReadOnlyInline}}
  - : Ein Array von Objekten, das die neue Größe der Umrandungsbox des beobachteten Elements enthält, wenn der Rückruf ausgeführt wird.
- {{domxref('ResizeObserverEntry.contentBoxSize')}} {{ReadOnlyInline}}
  - : Ein Array von Objekten, das die neue Größe der Inhaltsbox des beobachteten Elements enthält, wenn der Rückruf ausgeführt wird.
- {{domxref('ResizeObserverEntry.devicePixelContentBoxSize')}} {{ReadOnlyInline}}
  - : Ein Array von Objekten, das die neue Größe der Inhaltsbox in Gerätepixeln des beobachteten Elements enthält, wenn der Rückruf ausgeführt wird.
- {{domxref('ResizeObserverEntry.contentRect')}} {{ReadOnlyInline}}
  - : Ein {{domxref('DOMRectReadOnly')}}-Objekt, das die neue Größe des beobachteten Elements enthält, wenn der Rückruf ausgeführt wird. Beachten Sie, dass diese Eigenschaft jetzt ein veraltetes Merkmal ist, das aus Gründen der Abwärtskompatibilität in der Spezifikation beibehalten wird.
- {{domxref('ResizeObserverEntry.target')}} {{ReadOnlyInline}}
  - : Eine Referenz auf das beobachtete {{domxref('Element')}} oder {{domxref("SVGElement")}}.

> [!NOTE]
> Die Inhaltsbox ist die Box, in der der Inhalt platziert werden kann, d.h. die Umrandungsbox minus der Auffüllung und Randbreite. Die Umrandungsbox umfasst den Inhalt, die Auffüllung und den Rand. Siehe [Das Box-Modell](/de/docs/Learn/CSS/Building_blocks/The_box_model) für weitere Erläuterung.

## Instanzmethoden

Keine.

## Beispiele

Der folgende Ausschnitt stammt aus dem Beispiel [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([Quellcode ansehen](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)).

Beachten Sie, dass der Code drei verschiedene Kompatibilitätsfälle abdeckt:

- Einige alte Browser können `contentRect` unterstützen, aber nicht `contentBoxSize`.
- Alte Versionen von Firefox unterstützen `contentBoxSize`, haben es aber fälschlicherweise als einzelnes Objekt statt als Array implementiert.
- Moderne Browser unterstützen `contentBoxSize` als Array von Objekten, um die Berichterstattung von Boxgrößen für fragmentierte Elemente zu ermöglichen (zum Beispiel in einem Szenario mit mehreren Spalten).

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    if (entry.contentBoxSize) {
      // Der Standard macht contentBoxSize zu einem Array...
      if (entry.contentBoxSize[0]) {
        h1Elem.style.fontSize =
          Math.max(1.5, entry.contentBoxSize[0].inlineSize / 200) + "rem";
        pElem.style.fontSize =
          Math.max(1, entry.contentBoxSize[0].inlineSize / 600) + "rem";
      } else {
        // ...aber alte Versionen von Firefox behandeln es als einzelnes Element
        h1Elem.style.fontSize =
          Math.max(1.5, entry.contentBoxSize.inlineSize / 200) + "rem";
        pElem.style.fontSize =
          Math.max(1, entry.contentBoxSize.inlineSize / 600) + "rem";
      }
    } else {
      h1Elem.style.fontSize =
        Math.max(1.5, entry.contentRect.width / 200) + "rem";
      pElem.style.fontSize = Math.max(1, entry.contentRect.width / 600) + "rem";
    }
  }
  console.log("Size changed");
});

resizeObserver.observe(divElem);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
