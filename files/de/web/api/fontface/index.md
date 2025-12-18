---
title: FontFace
slug: Web/API/FontFace
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Das **`FontFace`** Interface der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) repräsentiert ein einzelnes nutzbares Schriftbild.

Dieses Interface definiert die Quelle eines Schriftbildes, entweder eine URL zu einer externen Ressource oder ein Puffer, sowie Schrifteigenschaften wie `style`, `weight` und so weiter. Bei URL-Schriftquellen ermöglicht es Autoren, festzulegen, wann die entfernte Schrift abgerufen und geladen wird, und den Ladezustand zu verfolgen.

## Konstruktor

- [`FontFace()`](/de/docs/Web/API/FontFace/FontFace)
  - : Erzeugt und gibt ein neues `FontFace` Objekt zurück, das aus einer externen Ressource, beschrieben durch eine URL, oder aus einem {{jsxref("ArrayBuffer")}} erstellt wurde.

## Instanzeigenschaften

- [`FontFace.ascentOverride`](/de/docs/Web/API/FontFace/ascentOverride)
  - : Ein String, der die _Ascent-Metrik_ der Schrift abruft oder festlegt. Es entspricht dem {{cssxref("@font-face/ascent-override", "ascent-override")}} Deskriptor.
- [`FontFace.descentOverride`](/de/docs/Web/API/FontFace/descentOverride)
  - : Ein String, der die _Descent-Metrik_ der Schrift abruft oder festlegt. Es entspricht dem {{cssxref("@font-face/descent-override", "descent-override")}} Deskriptor.
- [`FontFace.display`](/de/docs/Web/API/FontFace/display)
  - : Ein String, der bestimmt, wie ein Schriftbild basierend darauf angezeigt wird, ob und wann es heruntergeladen und bereit zur Verwendung ist.
- [`FontFace.family`](/de/docs/Web/API/FontFace/family)
  - : Ein String, der die _Familie_ der Schrift abruft oder festlegt. Es entspricht dem {{cssxref("@font-face/font-family", "font-family")}} Deskriptor.
- [`FontFace.featureSettings`](/de/docs/Web/API/FontFace/featureSettings)
  - : Ein String, der selten verwendete Schriftmerkmale abruft oder festlegt, die aus den Varianten-Eigenschaften einer Schrift nicht verfügbar sind. Es entspricht der CSS-Eigenschaft {{cssxref("font-feature-settings")}}.
- [`FontFace.lineGapOverride`](/de/docs/Web/API/FontFace/lineGapOverride)
  - : Ein String, der die _Line-Gap-Metrik_ der Schrift abruft oder festlegt. Es entspricht dem {{cssxref("@font-face/line-gap-override", "line-gap-override")}} Deskriptor.
- [`FontFace.loaded`](/de/docs/Web/API/FontFace/loaded) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit dem aktuellen `FontFace` Objekt aufgelöst wird, wenn die in dem Objekt angegebene Schrift geladen ist, oder mit einem `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt wird.
- [`FontFace.status`](/de/docs/Web/API/FontFace/status) {{ReadOnlyInline}}
  - : Gibt einen enumerierten Wert zurück, der den Status der Schrift angibt, einer von `"unloaded"`, `"loading"`, `"loaded"` oder `"error"`.
- [`FontFace.stretch`](/de/docs/Web/API/FontFace/stretch)
  - : Ein String, der abruft oder festlegt, wie die Schrift _gestreckt_ wird. Es entspricht dem {{cssxref("@font-face/font-stretch", "font-stretch")}} Deskriptor.
- [`FontFace.style`](/de/docs/Web/API/FontFace/style)
  - : Ein String, der den _Stil_ der Schrift abruft oder festlegt. Es entspricht dem {{cssxref("@font-face/font-style", "font-style")}} Deskriptor.
- [`FontFace.unicodeRange`](/de/docs/Web/API/FontFace/unicodeRange)
  - : Ein String, der den _Bereich der Unicode-Codepunkte_ abruft oder festlegt, die die Schrift umfassen. Es entspricht dem {{cssxref("@font-face/unicode-range", "unicode-range")}} Deskriptor.
- [`FontFace.variant`](/de/docs/Web/API/FontFace/variant) {{non-standard_inline}}
  - : Ein String, der die _Variante_ der Schrift abruft oder festlegt.
- [`FontFace.variationSettings`](/de/docs/Web/API/FontFace/variationSettings)
  - : Ein String, der die _Variationseinstellungen_ der Schrift abruft oder festlegt. Es entspricht dem {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} Deskriptor.
- [`FontFace.weight`](/de/docs/Web/API/FontFace/weight)
  - : Ein String, der das _Gewicht_ der Schrift enthält. Es entspricht dem {{cssxref("@font-face/font-weight", "font-weight")}} Deskriptor.
- [`FontFace.load()`](/de/docs/Web/API/FontFace/load)
  - : Lädt eine Schrift basierend auf den im Konstruktor des aktuellen Objekts übergebenen Anforderungen, einschließlich eines Standorts oder Quellpuffers, und gibt ein {{jsxref('Promise')}} zurück, das mit dem aktuellen `FontFace` Objekt aufgelöst wird.

## Beispiele

Der untenstehende Code definiert ein Schriftbild unter Verwendung der Daten der URL "my-font.woff" mit einigen Schriftbezeichnern. Um zu zeigen, wie es funktioniert, definieren wir dann den `stretch` Bezeichner mithilfe einer Eigenschaft.

```js
// Define a FontFace
const font = new FontFace("my-font", 'url("my-font.woff")', {
  style: "italic",
  weight: "400",
});

font.stretch = "condensed";
```

Als nächstes laden wir die Schrift mit [`FontFace.load()`](/de/docs/Web/API/FontFace/load) und verwenden das zurückgegebene Versprechen, um die Fertigstellung zu verfolgen oder einen Fehler zu melden.

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

Um die Schrift tatsächlich zu _verwenden_, müssen wir sie zu einem [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) hinzufügen. Wir könnten dies vor oder nach dem Laden der Schrift tun.

Für zusätzliche Beispiele siehe [CSS Font Loading API > Beispiele](/de/docs/Web/API/CSS_Font_Loading_API#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face")}}
