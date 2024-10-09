---
title: FontFace
slug: Web/API/FontFace
l10n:
  sourceCommit: 3b7232826ab98368d06ebf8b021886e4a544de93
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Das **`FontFace`**-Interface der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) repräsentiert einen einzelnen nutzbaren Schriftschnitt.

Dieses Interface definiert die Quelle eines Schriftschnitts, entweder eine URL zu einer externen Ressource oder ein Puffer, sowie Schriftmerkmale wie `style`, `weight` und so weiter.
Für URL-Schriftquellen ermöglicht es den Autoren, den Abruf und das Laden der entfernten Schrift auszulösen und den Ladezustand zu verfolgen.

## Konstruktor

- [`FontFace()`](/de/docs/Web/API/FontFace/FontFace)
  - : Konstruiert und gibt ein neues `FontFace`-Objekt zurück, das aus einer externen Ressource, die durch eine URL beschrieben wird, oder aus einem {{jsxref("ArrayBuffer")}} gebaut wird.

## Instanz-Eigenschaften

- [`FontFace.ascentOverride`](/de/docs/Web/API/FontFace/ascentOverride)
  - : Ein String, der die _ascent-Metrik_ der Schrift abruft oder festlegt. Es entspricht dem {{cssxref("@font-face/ascent-override", "ascent-override")}} Deskriptor.
- [`FontFace.descentOverride`](/de/docs/Web/API/FontFace/descentOverride)
  - : Ein String, der die _descent-Metrik_ der Schrift abruft oder festlegt. Es entspricht dem {{cssxref("@font-face/descent-override", "descent-override")}} Deskriptor.
- [`FontFace.display`](/de/docs/Web/API/FontFace/display)
  - : Ein String, der bestimmt, wie ein Schriftschnitt basierend darauf angezeigt wird, ob und wann er heruntergeladen und verwendet werden kann.
- [`FontFace.family`](/de/docs/Web/API/FontFace/family)
  - : Ein String, der die _family_ der Schrift abruft oder festlegt. Es entspricht dem {{cssxref("@font-face/font-family", "font-family")}} Deskriptor.
- [`FontFace.featureSettings`](/de/docs/Web/API/FontFace/featureSettings)
  - : Ein String, der selten verwendete Schriftmerkmale abruft oder festlegt, die von den Variantenmerkmalen einer Schrift nicht verfügbar sind. Es entspricht der CSS-Eigenschaft {{cssxref("font-feature-settings")}}.
- [`FontFace.lineGapOverride`](/de/docs/Web/API/FontFace/lineGapOverride)
  - : Ein String, der die _Linienabstandsmetrik_ der Schrift abruft oder festlegt. Es entspricht dem {{cssxref("@font-face/line-gap-override", "line-gap-override")}} Deskriptor.
- [`FontFace.loaded`](/de/docs/Web/API/FontFace/loaded) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit dem aktuellen `FontFace`-Objekt auflöst, wenn die Schrift, die im Konstruktor des Objekts angegeben ist, fertig geladen ist, oder mit einem `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt wird.
- [`FontFace.status`](/de/docs/Web/API/FontFace/status) {{ReadOnlyInline}}
  - : Gibt einen enumerierten Wert zurück, der den Status der Schrift angibt, einen von `"unloaded"`, `"loading"`, `"loaded"` oder `"error"`.
- [`FontFace.stretch`](/de/docs/Web/API/FontFace/stretch)
  - : Ein String, der abruft oder festlegt, wie die Schrift _gestreckt_ wird. Es entspricht dem {{cssxref("@font-face/font-stretch", "font-stretch")}} Deskriptor.
- [`FontFace.style`](/de/docs/Web/API/FontFace/style)
  - : Ein String, der den _style_ der Schrift abruft oder festlegt. Es entspricht dem {{cssxref("@font-face/font-style", "font-style")}} Deskriptor.
- [`FontFace.unicodeRange`](/de/docs/Web/API/FontFace/unicodeRange)
  - : Ein String, der den _Bereich der Unicode-Codepunkte_ abruft oder festlegt, den die Schrift umfasst. Es entspricht dem {{cssxref("@font-face/unicode-range", "unicode-range")}} Deskriptor.
- [`FontFace.variant`](/de/docs/Web/API/FontFace/variant) {{non-standard_inline}}
  - : Ein String, der die _variante_ der Schrift abruft oder festlegt.
- [`FontFace.variationSettings`](/de/docs/Web/API/FontFace/variationSettings) {{Experimental_Inline}}
  - : Ein String, der die _variation settings_ der Schrift abruft oder festlegt. Es entspricht dem {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} Deskriptor.
- [`FontFace.weight`](/de/docs/Web/API/FontFace/weight)
  - : Ein String, der das _Gewicht_ der Schrift enthält. Es entspricht dem {{cssxref("@font-face/font-weight", "font-weight")}} Deskriptor.
- [`FontFace.load()`](/de/docs/Web/API/FontFace/load)
  - : Lädt eine Schrift basierend auf den im Konstruktor des aktuellen Objekts übergebenen Anforderungen, einschließlich eines Standorts oder einer Quellenpuffer, und gibt ein {{jsxref('Promise')}} zurück, das sich mit dem aktuellen `FontFace`-Objekt auflöst.

## Beispiele

Der folgende Code definiert ein Schriftschnitt mithilfe der Daten unter der URL "myfont.woff" mit einigen Schriftdeskriptoren.
Um zu zeigen, wie es funktioniert, definieren wir dann den `stretch`-Deskriptor durch eine Eigenschaft.

```js
//Define a FontFace
const font = new FontFace("myfont", "url(myfont.woff)", {
  style: "italic",
  weight: "400",
});

font.stretch = "condensed";
```

Als nächstes laden wir die Schrift mit [`FontFace.load()`](/de/docs/Web/API/FontFace/load) und verwenden das zurückgegebene Versprechen, um den Abschluss zu verfolgen oder einen Fehler zu melden.

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

Um die Schrift tatsächlich _zu verwenden_, müssen wir sie zu einem [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) hinzufügen.
Dies können wir vor oder nach dem Laden der Schrift tun.

Für weitere Beispiele siehe [CSS Font Loading API > Beispiele](/de/docs/Web/API/CSS_Font_Loading_API#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [@font-face](/de/docs/Web/CSS/@font-face)
