---
title: "HTMLElement: offsetHeight-Eigenschaft"
short-title: offsetHeight
slug: Web/API/HTMLElement/offsetHeight
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{ APIRef("HTML DOM") }}

Die schreibgeschützte Eigenschaft **`HTMLElement.offsetHeight`** gibt die Höhe eines Elements zurück, einschließlich vertikaler Innenabstände (Padding) und Rahmen (Borders), als ganze Zahl.

Typischerweise ist `offsetHeight` eine Messung in Pixeln der CSS-Höhe des Elements, einschließlich jeglicher Rahmen, Innenabstände und horizontaler Scrollbalken (falls vorhanden). Sie umfasst nicht die Höhe von Pseudo-Elementen wie `::before` oder `::after`. Für das Dokument-Body-Objekt umfasst die Messung die gesamte lineare Inhaltshöhe anstelle der CSS-Höhe des Elements. Schwimmend platzierte Elemente, die unterhalb anderer linearer Inhalte hinausgehen, werden ignoriert.

Wenn das Element versteckt ist (zum Beispiel durch Setzen von `style.display` auf dem Element oder einem seiner Vorfahren auf `"none"`), wird `0` zurückgegeben.

> [!NOTE]
> Diese Eigenschaft rundet den Wert auf eine ganze Zahl. Wenn Sie einen Bruchwert benötigen, verwenden Sie {{ domxref("element.getBoundingClientRect()") }}.

## Wert

Eine Zahl.

## Beispiele

![Ein Beispiel eines Elements mit großem Innenabstand, Rahmen und Rand. `offsetHeight` ist die Layout-Höhe des Elements einschließlich seines Innenabstandes und Rahmens, jedoch ohne Rand.](dimensions-offset.png)

Das obere Beispielbild zeigt einen Scrollbalken und einen `offsetHeight`, der im Fenster passt. Nicht scrollbare Elemente können jedoch große `offsetHeight`-Werte haben, die viel größer sind als der sichtbare Inhalt. Diese Elemente befinden sich typischerweise innerhalb von scrollbaren Elementen; folglich können diese nicht scrollbaren Elemente je nach `scrollTop`-Einstellung des scrollbaren Containers komplett oder teilweise unsichtbar sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.clientHeight")}}
- {{domxref("Element.scrollHeight")}}
- {{domxref("HTMLElement.offsetWidth")}}
- [Bestimmen der Abmessungen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
