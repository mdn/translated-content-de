---
title: SVGAnimatedRect
slug: Web/API/SVGAnimatedRect
l10n:
  sourceCommit: d678295b8c67d19354bca1db406af1b6bc8cf1c6
---

{{APIRef("SVG")}}

Die Schnittstelle **`SVGAnimatedRect`** repräsentiert ein [`SVGRect`](/de/docs/Web/API/SVGRect)-Attribut, das animiert werden kann.

## Instanzeigenschaften

- [`baseVal`](/de/docs/Web/API/SVGAnimatedRect/baseVal) {{ReadOnlyInline}}
  - : Der Basiswert des angegebenen Attributs, bevor Animationen angewendet werden.
- [`animVal`](/de/docs/Web/API/SVGAnimatedRect/animVal) {{ReadOnlyInline}}
  - : Der aktuelle animierte Wert des angegebenen Attributs als schreibgeschütztes [`SVGRect`](/de/docs/Web/API/SVGRect). Wenn das angegebene Attribut derzeit nicht animiert wird, hat das [`SVGRect`](/de/docs/Web/API/SVGRect) denselben Inhalt wie `baseVal`. Das Objekt, auf das `animVal` verweist, unterscheidet sich immer von dem Objekt, auf das `baseVal` verweist, selbst wenn das Attribut nicht animiert wird.

## Instanzmethoden

_Die Schnittstelle `SVGAnimatedRect` stellt keine spezifischen Methoden bereit._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
