---
title: FontFace
slug: Web/API/FontFace
l10n:
  sourceCommit: c28529c0cc75eb5d2de857c923f0a1ebd5145313
---

{{APIRef("CSS Font Loading API")}}

Das **`FontFace`**-Interface der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) repräsentiert eine einzelne nutzbare Schriftart.

Dieses Interface definiert die Quelle einer Schriftart, entweder eine URL zu einer externen Ressource oder ein Puffer, sowie Schriftarteigenschaften wie `style`, `weight` usw. Für URL-Schriftquellen ermöglicht es Autoren, den Abruf und das Laden der entfernten Schriftart auszulösen und den Ladezustand zu verfolgen.

## Konstruktor

- [`FontFace()`](/de/docs/Web/API/FontFace/FontFace)
  - : Konstruiert und gibt ein neues `FontFace`-Objekt zurück, das aus einer externen Ressource, die durch eine URL beschrieben wird, oder aus einem {{jsxref("ArrayBuffer")}} erstellt wurde.

## Instanzeigenschaften

- [`FontFace.ascentOverride`](/de/docs/Web/API/FontFace/ascentOverride)
  - : Ein String, der das _ascent-Metrik_ der Schriftart abruft oder festlegt. Es ist gleichwertig mit dem {{cssxref("@font-face/ascent-override", "ascent-override")}} Deskriptor.
- [`FontFace.descentOverride`](/de/docs/Web/API/FontFace/descentOverride)
  - : Ein String, der das _descent-Metrik_ der Schriftart abruft oder festlegt. Es ist gleichwertig mit dem {{cssxref("@font-face/descent-override", "descent-override")}} Deskriptor.
- [`FontFace.display`](/de/docs/Web/API/FontFace/display)
  - : Ein String, der bestimmt, wie eine Schriftart basierend darauf angezeigt wird, ob und wann sie heruntergeladen und einsatzbereit ist.
- [`FontFace.family`](/de/docs/Web/API/FontFace/family)
  - : Ein String, der die _Familie_ der Schriftart abruft oder festlegt. Es ist gleichwertig mit dem {{cssxref("@font-face/font-family", "font-family")}} Deskriptor.
- [`FontFace.featureSettings`](/de/docs/Web/API/FontFace/featureSettings)
  - : Ein String, der selten genutzte Schriftmerkmale, die nicht über die Varianten-Eigenschaften einer Schrift zugänglich sind, abruft oder festlegt. Es ist gleichwertig mit der CSS {{cssxref("font-feature-settings")}} Eigenschaft.
- [`FontFace.lineGapOverride`](/de/docs/Web/API/FontFace/lineGapOverride)
  - : Ein String, der das _line-gap-Metrik_ der Schriftart abruft oder festlegt. Es ist gleichwertig mit dem {{cssxref("@font-face/line-gap-override", "line-gap-override")}} Deskriptor.
- [`FontFace.loaded`](/de/docs/Web/API/FontFace/loaded) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit dem aktuellen `FontFace`-Objekt aufgelöst wird, wenn die im Objektkonstruktor angegebene Schriftart fertig geladen ist, oder mit einem `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt wird.
- [`FontFace.status`](/de/docs/Web/API/FontFace/status) {{ReadOnlyInline}}
  - : Gibt einen enumerierten Wert zurück, der den Status der Schriftart angibt, einer von `"unloaded"`, `"loading"`, `"loaded"`, oder `"error"`.
- [`FontFace.stretch`](/de/docs/Web/API/FontFace/stretch)
  - : Ein String, der abruft oder festlegt, wie die Schrift _gestreckt_ wird. Es ist gleichwertig mit dem {{cssxref("@font-face/font-stretch", "font-stretch")}} Deskriptor.
- [`FontFace.style`](/de/docs/Web/API/FontFace/style)
  - : Ein String, der den _Stil_ der Schriftart abruft oder festlegt. Es ist gleichwertig mit dem {{cssxref("@font-face/font-style", "font-style")}} Deskriptor.
- [`FontFace.unicodeRange`](/de/docs/Web/API/FontFace/unicodeRange)
  - : Ein String, der den _Bereich der Unicode-Codepunkte_ abruft oder festlegt, die die Schriftart umfassen. Es ist gleichwertig mit dem {{cssxref("@font-face/unicode-range", "unicode-range")}} Deskriptor.
- [`FontFace.variant`](/de/docs/Web/API/FontFace/variant) {{non-standard_inline}}
  - : Ein String, der die _Variante_ der Schriftart abruft oder festlegt.
- [`FontFace.variationSettings`](/de/docs/Web/API/FontFace/variationSettings) {{Experimental_Inline}}
  - : Ein String, der die _Variations-Einstellungen_ der Schriftart abruft oder festlegt. Es ist gleichwertig mit dem {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} Deskriptor.
- [`FontFace.weight`](/de/docs/Web/API/FontFace/weight)
  - : Ein String, der das _Gewicht_ der Schriftart enthält. Es ist gleichwertig mit dem {{cssxref("@font-face/font-weight", "font-weight")}} Deskriptor.
- [`FontFace.load()`](/de/docs/Web/API/FontFace/load)
  - : Lädt eine Schrift basierend auf den Anforderungen des aktuellen Objekt-Konstruktors, einschließlich eines Standorts oder Quellenpuffers, und gibt ein {{jsxref('Promise')}} zurück, das mit dem aktuellen FontFace-Objekt aufgelöst wird.

## Beispiele

Der folgende Code definiert eine Schriftart unter Verwendung von Daten an der URL "myfont.woff" mit einigen Schriftbeschreibungen.
Um zu zeigen, wie es funktioniert, definieren wir dann den `stretch`-Deskriptor mit einer Eigenschaft.

```js
//Define a FontFace
const font = new FontFace("myfont", "url(myfont.woff)", {
  style: "italic",
  weight: "400",
});

font.stretch = "condensed";
```

Als Nächstes laden wir die Schriftart mithilfe von [`FontFace.load()`](/de/docs/Web/API/FontFace/load) und verwenden das zurückgegebene Promise, um den Abschluss zu verfolgen oder einen Fehler zu melden.

```js
//Load the font
font.load().then(
  () => {
    // Resolved - add font to document.fonts
  },
  (err) => {
    console.error(err);
  },
);
```

Um die Schrift tatsächlich zu _verwenden_, müssen wir sie einem [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) hinzufügen.
Wir könnten das tun, bevor oder nachdem wir die Schrift geladen haben.

Für weitere Beispiele siehe [CSS Font Loading API > Beispiele](/de/docs/Web/API/CSS_Font_Loading_API#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [@font-face](/de/docs/Web/CSS/@font-face)
