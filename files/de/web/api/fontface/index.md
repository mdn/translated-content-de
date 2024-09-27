---
title: FontFace
slug: Web/API/FontFace
l10n:
  sourceCommit: c28529c0cc75eb5d2de857c923f0a1ebd5145313
---

{{APIRef("CSS Font Loading API")}}

Die **`FontFace`** Schnittstelle der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) repräsentiert eine einzelne verwendbare Schriftart.

Diese Schnittstelle definiert die Quelle einer Schriftart, entweder eine URL zu einer externen Ressource oder ein Puffer, und Schriftarteigenschaften wie `style`, `weight` usw. Für URL-Schriftquellen ermöglicht es Autoren zu steuern, wann die entfernte Schriftart abgerufen und geladen wird, und den Ladefortschritt zu verfolgen.

## Konstruktor

- [`FontFace()`](/de/docs/Web/API/FontFace/FontFace)
  - : Erstellt und gibt ein neues `FontFace`-Objekt zurück, das entweder aus einer externen Ressource, die durch eine URL beschrieben wird, oder aus einem {{jsxref("ArrayBuffer")}} gebildet wird.

## Instanz-Eigenschaften

- [`FontFace.ascentOverride`](/de/docs/Web/API/FontFace/ascentOverride)
  - : Ein String, der die _Höhenmetrik_ der Schrift abruft oder setzt. Es entspricht dem {{cssxref("@font-face/ascent-override", "ascent-override")}} Deskriptor.
- [`FontFace.descentOverride`](/de/docs/Web/API/FontFace/descentOverride)
  - : Ein String, der die _Tiefenmetrik_ der Schrift abruft oder setzt. Es entspricht dem {{cssxref("@font-face/descent-override", "descent-override")}} Deskriptor.
- [`FontFace.display`](/de/docs/Web/API/FontFace/display)
  - : Ein String, der bestimmt, wie eine Schriftart basierend darauf angezeigt wird, ob und wann sie heruntergeladen und gebrauchsfertig ist.
- [`FontFace.family`](/de/docs/Web/API/FontFace/family)
  - : Ein String, der die _Familie_ der Schrift abruft oder setzt. Es entspricht dem {{cssxref("@font-face/font-family", "font-family")}} Deskriptor.
- [`FontFace.featureSettings`](/de/docs/Web/API/FontFace/featureSettings)
  - : Ein String, der selten verwendete Schrifteigenschaften abruft oder setzt, die nicht aus den Varianten der Schrift verfügbar sind. Es entspricht der CSS {{cssxref("font-feature-settings")}} Eigenschaft.
- [`FontFace.lineGapOverride`](/de/docs/Web/API/FontFace/lineGapOverride)
  - : Ein String, der die _Zeilenabstandmetrik_ der Schrift abruft oder setzt. Es entspricht dem {{cssxref("@font-face/line-gap-override", "line-gap-override")}} Deskriptor.
- [`FontFace.loaded`](/de/docs/Web/API/FontFace/loaded) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit dem aktuellen `FontFace`-Objekt aufgelöst wird, wenn die im Konstruktor des Objekts spezifizierte Schriftart fertig geladen ist, oder mit einem `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt wird.
- [`FontFace.status`](/de/docs/Web/API/FontFace/status) {{ReadOnlyInline}}
  - : Gibt einen enumerierten Wert zurück, der den Status der Schriftart angibt, einer von `"unloaded"`, `"loading"`, `"loaded"` oder `"error"`.
- [`FontFace.stretch`](/de/docs/Web/API/FontFace/stretch)
  - : Ein String, der angibt, wie die Schrift _gestreckt_ wird. Es entspricht dem {{cssxref("@font-face/font-stretch", "font-stretch")}} Deskriptor.
- [`FontFace.style`](/de/docs/Web/API/FontFace/style)
  - : Ein String, der den _Stil_ der Schrift abruft oder setzt. Es entspricht dem {{cssxref("@font-face/font-style", "font-style")}} Deskriptor.
- [`FontFace.unicodeRange`](/de/docs/Web/API/FontFace/unicodeRange)
  - : Ein String, der den _Bereich der Unicode-Codepunkte_ abruft oder setzt, die die Schrift einschließen. Es entspricht dem {{cssxref("@font-face/unicode-range", "unicode-range")}} Deskriptor.
- [`FontFace.variant`](/de/docs/Web/API/FontFace/variant) {{non-standard_inline}}
  - : Ein String, der die _Variante_ der Schrift abruft oder setzt.
- [`FontFace.variationSettings`](/de/docs/Web/API/FontFace/variationSettings) {{Experimental_Inline}}
  - : Ein String, der die _Variations-Einstellungen_ der Schrift abruft oder setzt. Es entspricht dem {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} Deskriptor.
- [`FontFace.weight`](/de/docs/Web/API/FontFace/weight)
  - : Ein String, der das _Gewicht_ der Schrift enthält. Es entspricht dem {{cssxref("@font-face/font-weight", "font-weight")}} Deskriptor.
- [`FontFace.load()`](/de/docs/Web/API/FontFace/load)
  - : Lädt eine Schriftart basierend auf den im Konstruktor des aktuellen Objekts übergebenen Anforderungen, einschließlich eines Standorts oder Quellpuffers, und gibt ein {{jsxref('Promise')}} zurück, das mit dem aktuellen FontFace-Objekt aufgelöst wird.

## Beispiele

Der untenstehende Code definiert eine Schriftart, die Daten unter der URL "myfont.woff" mit einigen Schriftdeskriptoren verwendet.
Um zu zeigen, wie es funktioniert, definieren wir dann den `stretch`-Deskriptor mit einer Eigenschaft.

```js
//Define a FontFace
const font = new FontFace("myfont", "url(myfont.woff)", {
  style: "italic",
  weight: "400",
});

font.stretch = "condensed";
```

Danach laden wir die Schriftart mit [`FontFace.load()`](/de/docs/Web/API/FontFace/load) und verwenden das zurückgegebene Versprechen, um den Abschluss zu verfolgen oder einen Fehler zu melden.

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

Um die Schriftart tatsächlich _zu verwenden_, müssen wir sie zu einem [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) hinzufügen.
Wir könnten dies vor oder nach dem Laden der Schriftart tun.

Für zusätzliche Beispiele siehe [CSS Font Loading API > Beispiele](/de/docs/Web/API/CSS_Font_Loading_API#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [@font-face](/de/docs/Web/CSS/@font-face)
