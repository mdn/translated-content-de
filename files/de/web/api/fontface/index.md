---
title: FontFace
slug: Web/API/FontFace
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Das **`FontFace`**-Interface der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) repräsentiert einen einzelnen verwendbaren Font-Face.

Dieses Interface definiert die Quelle eines Font-Face, entweder eine URL zu einer externen Ressource oder ein Puffer, sowie Font-Eigenschaften wie `style`, `weight` und andere. Bei URL-Font-Quellen ermöglicht es Autoren, den Zeitpunkt des Abrufs und Ladens der entfernten Schriftart auszulösen und den Ladefortschritt zu verfolgen.

## Konstruktor

- [`FontFace()`](/de/docs/Web/API/FontFace/FontFace)
  - : Konstruiert und gibt ein neues `FontFace`-Objekt zurück, das aus einer von einer URL beschriebenen externen Ressource oder aus einem {{jsxref("ArrayBuffer")}} aufgebaut ist.

## Instanz-Eigenschaften

- [`FontFace.ascentOverride`](/de/docs/Web/API/FontFace/ascentOverride)
  - : Ein String, der das _Ascent-Metrik_ der Schrift abruft oder festlegt. Es entspricht dem {{cssxref("@font-face/ascent-override", "ascent-override")}} Deskriptor.
- [`FontFace.descentOverride`](/de/docs/Web/API/FontFace/descentOverride)
  - : Ein String, der das _Descent-Metrik_ der Schrift abruft oder festlegt. Es entspricht dem {{cssxref("@font-face/descent-override", "descent-override")}} Deskriptor.
- [`FontFace.display`](/de/docs/Web/API/FontFace/display)
  - : Ein String, der bestimmt, wie ein Font-Face angezeigt wird, basierend darauf, ob und wann es heruntergeladen und gebrauchsfertig ist.
- [`FontFace.family`](/de/docs/Web/API/FontFace/family)
  - : Ein String, der die _Familie_ der Schrift abruft oder festlegt. Es entspricht dem {{cssxref("@font-face/font-family", "font-family")}} Deskriptor.
- [`FontFace.featureSettings`](/de/docs/Web/API/FontFace/featureSettings)
  - : Ein String, der selten genutzte Schrifteigenschaften abruft oder festlegt, die nicht aus den Varianteigenschaften einer Schrift verfügbar sind. Es entspricht der CSS-{{cssxref("font-feature-settings")}} Eigenschaft.
- [`FontFace.lineGapOverride`](/de/docs/Web/API/FontFace/lineGapOverride)
  - : Ein String, der die _Zeilenabstand-Metrik_ der Schrift abruft oder festlegt. Es entspricht dem {{cssxref("@font-face/line-gap-override", "line-gap-override")}} Deskriptor.
- [`FontFace.loaded`](/de/docs/Web/API/FontFace/loaded) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit dem aktuellen `FontFace`-Objekt aufgelöst wird, wenn die Schriftart, die im Konstruktor des Objekts angegeben ist, vollständig geladen ist, oder mit einem `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException) zurückgewiesen wird.
- [`FontFace.status`](/de/docs/Web/API/FontFace/status) {{ReadOnlyInline}}
  - : Gibt einen enumerierten Wert zurück, der den Status der Schriftart angibt, einer von `"unloaded"`, `"loading"`, `"loaded"` oder `"error"`.
- [`FontFace.stretch`](/de/docs/Web/API/FontFace/stretch)
  - : Ein String, der abruft oder festlegt, wie die Schrift _gestreckt_ wird. Es entspricht dem {{cssxref("@font-face/font-stretch", "font-stretch")}} Deskriptor.
- [`FontFace.style`](/de/docs/Web/API/FontFace/style)
  - : Ein String, der den _Stil_ der Schrift abruft oder festlegt. Es entspricht dem {{cssxref("@font-face/font-style", "font-style")}} Deskriptor.
- [`FontFace.unicodeRange`](/de/docs/Web/API/FontFace/unicodeRange)
  - : Ein String, der den _Bereich der Unicode-Zeichen_ der Schrift abruft oder festlegt. Es entspricht dem {{cssxref("@font-face/unicode-range", "unicode-range")}} Deskriptor.
- [`FontFace.variant`](/de/docs/Web/API/FontFace/variant) {{non-standard_inline}}
  - : Ein String, der die _Variante_ der Schrift abruft oder festlegt.
- [`FontFace.variationSettings`](/de/docs/Web/API/FontFace/variationSettings)
  - : Ein String, der die _Variationseinstellungen_ der Schrift abruft oder festlegt. Es entspricht dem {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} Deskriptor.
- [`FontFace.weight`](/de/docs/Web/API/FontFace/weight)
  - : Ein String, der das _Gewicht_ der Schrift enthält. Es entspricht dem {{cssxref("@font-face/font-weight", "font-weight")}} Deskriptor.
- [`FontFace.load()`](/de/docs/Web/API/FontFace/load)
  - : Lädt eine Schriftart basierend auf den im Konstruktor des aktuellen Objekts übergebenen Anforderungen, einschließlich eines Standorts oder eines Quellpuffers, und gibt ein {{jsxref('Promise')}} zurück, das mit dem aktuellen FontFace-Objekt aufgelöst wird.

## Beispiele

Der folgende Code definiert ein Font-Face unter Verwendung von Daten der URL "my-font.woff" mit einigen Schrift-Deskriptoren.
Um zu zeigen, wie es funktioniert, definieren wir dann den `stretch` Deskriptor über eine Eigenschaft.

```js
// Define a FontFace
const font = new FontFace("my-font", 'url("my-font.woff")', {
  style: "italic",
  weight: "400",
});

font.stretch = "condensed";
```

Als Nächstes laden wir die Schriftart mit [`FontFace.load()`](/de/docs/Web/API/FontFace/load) und verwenden das zurückgegebene Promise, um den Abschluss zu verfolgen oder einen Fehler zu melden.

```js
// Load the font
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
Wir könnten das vor oder nach dem Laden der Schrift tun.

Für weitere Beispiele siehe [CSS Font Loading API > Examples](/de/docs/Web/API/CSS_Font_Loading_API#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [@font-face](/de/docs/Web/CSS/Reference/At-rules/@font-face)
