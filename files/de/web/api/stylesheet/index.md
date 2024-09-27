---
title: StyleSheet
slug: Web/API/StyleSheet
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("CSSOM")}}

Ein Objekt, das die `StyleSheet`-Schnittstelle implementiert, repräsentiert ein einzelnes Stylesheet. CSS-Stylesheets implementieren zusätzlich die spezialisiertere [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Schnittstelle.

## Instanz-Eigenschaften

- [`StyleSheet.disabled`](/de/docs/Web/API/StyleSheet/disabled)
  - : Ein boolescher Wert, der anzeigt, ob das aktuelle Stylesheet angewendet wurde oder nicht.
- [`StyleSheet.href`](/de/docs/Web/API/StyleSheet/href) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Ort des Stylesheets repräsentiert.
- [`StyleSheet.media`](/de/docs/Web/API/StyleSheet/media) {{ReadOnlyInline}}
  - : Gibt eine [`MediaList`](/de/docs/Web/API/MediaList) zurück, die das vorgesehene Zielmedium für Stilinformationen repräsentiert.
- [`StyleSheet.ownerNode`](/de/docs/Web/API/StyleSheet/ownerNode) {{ReadOnlyInline}}
  - : Gibt einen [`Node`](/de/docs/Web/API/Node) zurück, der dieses Stylesheet mit dem aktuellen Dokument assoziiert.
- [`StyleSheet.parentStyleSheet`](/de/docs/Web/API/StyleSheet/parentStyleSheet) {{ReadOnlyInline}}
  - : Gibt ein `StyleSheet` zurück, das dieses enthält, falls vorhanden; gibt `null` zurück, wenn keines existiert.
- [`StyleSheet.title`](/de/docs/Web/API/StyleSheet/title) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den beratenen Titel des aktuellen Stylesheets repräsentiert.
- [`StyleSheet.type`](/de/docs/Web/API/StyleSheet/type) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Stylesheet-Sprache für dieses Stylesheet repräsentiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)
