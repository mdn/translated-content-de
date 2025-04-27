---
title: FontFace
slug: Web/API/FontFace
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Das **`FontFace`**-Interface der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) repräsentiert eine einzelne verwendbare Schriftart.

Dieses Interface definiert die Quelle einer Schriftart, entweder eine URL zu einer externen Ressource oder ein Puffer, sowie Schrifteigenschaften wie `style`, `weight` usw. Für URL-Schriftquellen ermöglicht es Autoren, zu steuern, wann die entfernte Schriftart abgerufen und geladen wird, und den Ladezustand nachzuverfolgen.

## Konstruktor

- [`FontFace()`](/de/docs/Web/API/FontFace/FontFace)
  - : Erzeugt und gibt ein neues `FontFace`-Objekt zurück, das aus einer externen Ressource, die durch eine URL beschrieben wird, oder aus einem {{jsxref("ArrayBuffer")}} erstellt wird.

## Instanzeigenschaften

- [`FontFace.ascentOverride`](/de/docs/Web/API/FontFace/ascentOverride)
  - : Ein String, der die _Ascent-Metrik_ der Schriftart abruft oder festlegt. Es ist äquivalent zum {{cssxref("@font-face/ascent-override", "ascent-override")}}-Deskriptor.
- [`FontFace.descentOverride`](/de/docs/Web/API/FontFace/descentOverride)
  - : Ein String, der die _Descent-Metrik_ der Schriftart abruft oder festlegt. Es ist äquivalent zum {{cssxref("@font-face/descent-override", "descent-override")}}-Deskriptor.
- [`FontFace.display`](/de/docs/Web/API/FontFace/display)
  - : Ein String, der bestimmt, wie eine Schriftart angezeigt wird, basierend darauf, ob und wann sie heruntergeladen und verwendet werden kann.
- [`FontFace.family`](/de/docs/Web/API/FontFace/family)
  - : Ein String, der die _Familie_ der Schriftart abruft oder festlegt. Es ist äquivalent zum {{cssxref("@font-face/font-family", "font-family")}}-Deskriptor.
- [`FontFace.featureSettings`](/de/docs/Web/API/FontFace/featureSettings)
  - : Ein String, der selten verwendete Schriftmerkmale abruft oder festlegt, die nicht über die Varianten-Eigenschaften einer Schrift verfügbar sind. Es ist äquivalent zur CSS-Eigenschaft {{cssxref("font-feature-settings")}}.
- [`FontFace.lineGapOverride`](/de/docs/Web/API/FontFace/lineGapOverride)
  - : Ein String, der die _Zeilenabstand-Metrik_ der Schriftart abruft oder festlegt. Es ist äquivalent zum {{cssxref("@font-face/line-gap-override", "line-gap-override")}}-Deskriptor.
- [`FontFace.loaded`](/de/docs/Web/API/FontFace/loaded) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die in der Konstruktor-Methode des Objekts angegebene Schriftart geladen ist, oder mit einem `SyntaxError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt wird.
- [`FontFace.status`](/de/docs/Web/API/FontFace/status) {{ReadOnlyInline}}
  - : Gibt einen enumerierten Wert zurück, der den Status der Schriftart angibt, einer von `"unloaded"`, `"loading"`, `"loaded"` oder `"error"`.
- [`FontFace.stretch`](/de/docs/Web/API/FontFace/stretch)
  - : Ein String, der abruft oder festlegt, wie die Schriftart _gestreckt_ wird. Es ist äquivalent zum {{cssxref("@font-face/font-stretch", "font-stretch")}}-Deskriptor.
- [`FontFace.style`](/de/docs/Web/API/FontFace/style)
  - : Ein String, der den _Stil_ der Schriftart abruft oder festlegt. Es ist äquivalent zum {{cssxref("@font-face/font-style", "font-style")}}-Deskriptor.
- [`FontFace.unicodeRange`](/de/docs/Web/API/FontFace/unicodeRange)
  - : Ein String, der den _Bereich der Unicode-Codepunkte_ abruft oder festlegt, der die Schrift umfasst. Es ist äquivalent zum {{cssxref("@font-face/unicode-range", "unicode-range")}}-Deskriptor.
- [`FontFace.variant`](/de/docs/Web/API/FontFace/variant) {{non-standard_inline}}
  - : Ein String, der die _Variante_ der Schriftart abruft oder festlegt.
- [`FontFace.variationSettings`](/de/docs/Web/API/FontFace/variationSettings) {{Experimental_Inline}}
  - : Ein String, der die _Einstellung der Variationen_ der Schrift abruft oder festlegt. Es ist äquivalent zum {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}-Deskriptor.
- [`FontFace.weight`](/de/docs/Web/API/FontFace/weight)
  - : Ein String, der das _Gewicht_ der Schriftart enthält. Es ist äquivalent zum {{cssxref("@font-face/font-weight", "font-weight")}}-Deskriptor.
- [`FontFace.load()`](/de/docs/Web/API/FontFace/load)
  - : Lädt eine Schriftart basierend auf den im Konstruktor des aktuellen Objekts übergebenen Anforderungen, einschließlich eines Speicherorts oder Quellpuffers, und gibt ein {{jsxref('Promise')}} zurück, das mit dem aktuellen FontFace-Objekt aufgelöst wird.

## Beispiele

Der untenstehende Code definiert eine Schriftart mit Daten von der URL "my-font.woff" mit einigen Schrift-Deskriptoren. Um zu zeigen, wie es funktioniert, weisen wir dann den `stretch`-Deskriptor durch eine Eigenschaft zu.

```js
// Define a FontFace
const font = new FontFace("my-font", "url(my-font.woff)", {
  style: "italic",
  weight: "400",
});

font.stretch = "condensed";
```

Anschließend laden wir die Schriftart mithilfe von [`FontFace.load()`](/de/docs/Web/API/FontFace/load) und verwenden das zurückgegebene Promise, um die Fertigstellung nachzuverfolgen oder einen Fehler zu melden.

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

Um die Schrift tatsächlich zu _verwenden_, müssen wir sie zu einer [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) hinzufügen. Dies könnte vor oder nach dem Laden der Schriftart geschehen.

Für weitere Beispiele siehe [CSS Font Loading API > Examples](/de/docs/Web/API/CSS_Font_Loading_API#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [@font-face](/de/docs/Web/CSS/@font-face)
