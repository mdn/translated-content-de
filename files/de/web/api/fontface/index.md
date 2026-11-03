---
title: FontFace
slug: Web/API/FontFace
l10n:
  sourceCommit: 106f215d6fb32a7ee0afe09f01a82323d39cd1f0
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die **`FontFace`**-Schnittstelle der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) repräsentiert eine einzelne verwendbare Schriftart.

Diese Schnittstelle definiert die Quelle einer Schriftart – entweder eine URL zu einer externen Ressource oder einen Puffer – sowie Schrifteigenschaften wie `style`, `weight` und weitere.
Bei URL-basierten Schriftquellen können Entwickler steuern, wann die entfernte Schriftart abgerufen und geladen wird, und den Ladestatus verfolgen.

## Konstruktor

- [`FontFace()`](/de/docs/Web/API/FontFace/FontFace)
  - : Erstellt ein neues `FontFace`-Objekt aus einer externen Ressource, die durch eine URL beschrieben wird, oder aus einem {{jsxref("ArrayBuffer")}} und gibt es zurück.

## Instanzeigenschaften

- [`FontFace.ascentOverride`](/de/docs/Web/API/FontFace/ascentOverride)
  - : Ein String, der die _Aufstiegsmetrik_ der Schriftart abruft oder festlegt. Er entspricht dem Deskriptor {{cssxref("@font-face/ascent-override", "ascent-override")}}.
- [`FontFace.descentOverride`](/de/docs/Web/API/FontFace/descentOverride)
  - : Ein String, der die _Abstiegsmetrik_ der Schriftart abruft oder festlegt. Er entspricht dem Deskriptor {{cssxref("@font-face/descent-override", "descent-override")}}.
- [`FontFace.display`](/de/docs/Web/API/FontFace/display)
  - : Ein String, der bestimmt, wie eine Schriftart angezeigt wird – abhängig davon, ob und wann sie heruntergeladen wurde und einsatzbereit ist.
- [`FontFace.family`](/de/docs/Web/API/FontFace/family)
  - : Ein String, der die _Schriftfamilie_ abruft oder festlegt. Er entspricht dem Deskriptor {{cssxref("@font-face/font-family", "font-family")}}.
- [`FontFace.featureSettings`](/de/docs/Web/API/FontFace/featureSettings)
  - : Ein String, der selten verwendete Schriftfunktionen abruft oder festlegt, die nicht über die Varianteneigenschaften einer Schriftart verfügbar sind. Er entspricht der CSS-Eigenschaft {{cssxref("font-feature-settings")}}.
- [`FontFace.lineGapOverride`](/de/docs/Web/API/FontFace/lineGapOverride)
  - : Ein String, der die _Zeilenabstandsmetrik_ der Schriftart abruft oder festlegt. Er entspricht dem Deskriptor {{cssxref("@font-face/line-gap-override", "line-gap-override")}}.
- [`FontFace.loaded`](/de/docs/Web/API/FontFace/loaded) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit dem aktuellen `FontFace`-Objekt erfüllt wird, sobald die im Konstruktor des Objekts angegebene Schriftart vollständig geladen ist, oder mit einer `SyntaxError`-[`DOMException`](/de/docs/Web/API/DOMException) abgelehnt wird.
- [`FontFace.sizeAdjust`](/de/docs/Web/API/FontFace/sizeAdjust)
  - : Ein String, der einen Multiplikator für die Glyphenumrisse und Metriken der Schriftart abruft oder festlegt. Er entspricht dem Deskriptor {{cssxref("@font-face/size-adjust", "size-adjust")}}.
- [`FontFace.status`](/de/docs/Web/API/FontFace/status) {{ReadOnlyInline}}
  - : Gibt einen Aufzählungswert zurück, der den Status der Schriftart angibt: `"unloaded"`, `"loading"`, `"loaded"` oder `"error"`.
- [`FontFace.stretch`](/de/docs/Web/API/FontFace/stretch)
  - : Ein String, der abruft oder festlegt, wie die Schriftart _gestreckt_ wird. Er entspricht dem Deskriptor {{cssxref("@font-face/font-stretch", "font-stretch")}}.
- [`FontFace.style`](/de/docs/Web/API/FontFace/style)
  - : Ein String, der den _Stil_ der Schriftart abruft oder festlegt. Er entspricht dem Deskriptor {{cssxref("@font-face/font-style", "font-style")}}.
- [`FontFace.unicodeRange`](/de/docs/Web/API/FontFace/unicodeRange)
  - : Ein String, der den _Bereich der Unicode-Codepunkte_ abruft oder festlegt, den die Schriftart umfasst. Er entspricht dem Deskriptor {{cssxref("@font-face/unicode-range", "unicode-range")}}.
- [`FontFace.variant`](/de/docs/Web/API/FontFace/variant) {{non-standard_inline}}
  - : Ein String, der die _Variante_ der Schriftart abruft oder festlegt.
- [`FontFace.variationSettings`](/de/docs/Web/API/FontFace/variationSettings)
  - : Ein String, der die _Variationseinstellungen_ der Schriftart abruft oder festlegt. Er entspricht dem Deskriptor {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}.
- [`FontFace.weight`](/de/docs/Web/API/FontFace/weight)
  - : Ein String, der die _Schriftstärke_ enthält. Er entspricht dem Deskriptor {{cssxref("@font-face/font-weight", "font-weight")}}.
- [`FontFace.load()`](/de/docs/Web/API/FontFace/load)
  - : Lädt eine Schriftart anhand der Anforderungen, die dem Konstruktor des aktuellen Objekts übergeben wurden, einschließlich eines Speicherorts oder Quellpuffers. Die Methode gibt ein {{jsxref('Promise')}} zurück, das mit dem aktuellen `FontFace`-Objekt erfüllt wird.

## Beispiele

Der folgende Code definiert eine Schriftart anhand der Daten unter der URL „my-font.woff“ und einiger Schriftdeskriptoren.
Um die Funktionsweise zu veranschaulichen, definieren wir anschließend den Deskriptor `stretch` über eine Eigenschaft.

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

Um die Schriftart tatsächlich zu _verwenden_, müssen wir sie einem [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) hinzufügen.
Das können wir vor oder nach dem Laden der Schriftart tun.

Weitere Beispiele finden Sie unter [CSS Font Loading API > Beispiele](/de/docs/Web/API/CSS_Font_Loading_API#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@font-face")}}
