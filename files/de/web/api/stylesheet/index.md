---
title: Stylesheet
slug: Web/API/StyleSheet
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("CSSOM")}}

Ein Objekt, das das `StyleSheet`-Interface implementiert, repräsentiert ein einzelnes Stylesheet. CSS-Stylesheets werden darüber hinaus das spezialisiertere {{domxref("CSSStyleSheet")}} Interface implementieren.

## Instanz-Eigenschaften

- {{domxref("StyleSheet.disabled")}}
  - : Ein boolescher Wert, der angibt, ob das aktuelle Stylesheet angewendet wurde oder nicht.
- {{domxref("StyleSheet.href")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Speicherort des Stylesheets darstellt.
- {{domxref("StyleSheet.media")}} {{ReadOnlyInline}}
  - : Gibt eine {{domxref("MediaList")}} zurück, die das beabsichtigte Zielmedium für die Stilinformationen repräsentiert.
- {{domxref("StyleSheet.ownerNode")}} {{ReadOnlyInline}}
  - : Gibt einen {{domxref("Node")}} zurück, der dieses Stylesheet mit dem aktuellen Dokument verbindet.
- {{domxref("StyleSheet.parentStyleSheet")}} {{ReadOnlyInline}}
  - : Gibt ein `StyleSheet` zurück, das dieses beinhaltet, falls verfügbar; gibt `null` zurück, wenn es keine gibt.
- {{domxref("StyleSheet.title")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Empfehlungstitel des aktuellen Stylesheets darstellt.
- {{domxref("StyleSheet.type")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Stylesheet-Sprache für dieses Stylesheet darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CSSStyleSheet")}}
