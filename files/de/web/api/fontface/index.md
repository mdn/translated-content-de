---
title: FontFace
slug: Web/API/FontFace
l10n:
  sourceCommit: 6dfc254e98ad1708a851d06f2a45b3a58a32ad06
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Das **`FontFace`**-Interface der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) repräsentiert einen einzelnen verwendbaren Schriftschnitt.

Dieses Interface definiert die Quelle eines Schriftschnitts, entweder eine URL zu einer externen Ressource oder ein Puffer, und Schriftarten-Eigenschaften wie `style`, `weight` usw.
Für URL-Schriftquellen ermöglicht es den Autoren zu steuern, wann die entfernte Schriftart abgerufen und geladen wird, und den Ladezustand zu verfolgen.

## Konstruktor

- [`FontFace()`](/de/docs/Web/API/FontFace/FontFace)
  - : Erstellt und gibt ein neues `FontFace`-Objekt zurück, das aus einer externen Ressource beschrieben durch eine URL oder einem {{jsxref("ArrayBuffer")}} erstellt wurde.

## Instanz-Eigenschaften

- [`FontFace.ascentOverride`](/de/docs/Web/API/FontFace/ascentOverride)
  - : Ein String, der das _ascent-Maß_ der Schriftart abruft oder festlegt. Es entspricht dem {{cssxref("@font-face/ascent-override", "ascent-override")}}-Deskriptor.
- [`FontFace.descentOverride`](/de/docs/Web/API/FontFace/descentOverride)
  - : Ein String, der das _descent-Maß_ der Schriftart abruft oder festlegt. Es entspricht dem {{cssxref("@font-face/descent-override", "descent-override")}}-Deskriptor.
- [`FontFace.display`](/de/docs/Web/API/FontFace/display)
  - : Ein String, der bestimmt, wie ein Schriftschnitt basierend darauf angezeigt wird, ob und wann er heruntergeladen und einsatzbereit ist.
- [`FontFace.family`](/de/docs/Web/API/FontFace/family)
  - : Ein String, der die _Familie_ der Schriftart abruft oder festlegt. Es entspricht dem {{cssxref("@font-face/font-family", "font-family")}}-Deskriptor.
- [`FontFace.featureSettings`](/de/docs/Web/API/FontFace/featureSettings)
  - : Ein String, der selten genutzte Schriftarten-Features abruft oder festlegt, die nicht über die Varianteneigenschaften einer Schrift verfügbar sind. Es entspricht der CSS-Eigenschaft {{cssxref("font-feature-settings")}}.
- [`FontFace.lineGapOverride`](/de/docs/Web/API/FontFace/lineGapOverride)
  - : Ein String, der das _line-gap-Maß_ der Schriftart abruft oder festlegt. Es entspricht dem {{cssxref("@font-face/line-gap-override", "line-gap-override")}}-Deskriptor.
- [`FontFace.loaded`](/de/docs/Web/API/FontFace/loaded) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit dem aktuellen `FontFace`-Objekt auflöst, wenn die im Konstruktor des Objekts angegebene Schriftart geladen wurde, oder bricht mit einem `SyntaxError`-[`DOMException`](/de/docs/Web/API/DOMException) ab.
- [`FontFace.status`](/de/docs/Web/API/FontFace/status) {{ReadOnlyInline}}
  - : Gibt einen enumerierten Wert zurück, der den Status der Schriftart angibt: einer von `"unloaded"`, `"loading"`, `"loaded"` oder `"error"`.
- [`FontFace.stretch`](/de/docs/Web/API/FontFace/stretch)
  - : Ein String, der abruft oder festlegt, wie die Schrift _gestreckt_ wird. Es entspricht dem {{cssxref("@font-face/font-stretch", "font-stretch")}}-Deskriptor.
- [`FontFace.style`](/de/docs/Web/API/FontFace/style)
  - : Ein String, der den _Stil_ der Schriftart abruft oder festlegt. Es entspricht dem {{cssxref("@font-face/font-style", "font-style")}}-Deskriptor.
- [`FontFace.unicodeRange`](/de/docs/Web/API/FontFace/unicodeRange)
  - : Ein String, der den Bereich der _Unicode-Codepunkte_ umschließt, die die Schriftart umfassen. Es entspricht dem {{cssxref("@font-face/unicode-range", "unicode-range")}}-Deskriptor.
- [`FontFace.variant`](/de/docs/Web/API/FontFace/variant) {{non-standard_inline}}
  - : Ein String, der die _Variante_ der Schriftart abruft oder festlegt.
- [`FontFace.variationSettings`](/de/docs/Web/API/FontFace/variationSettings)
  - : Ein String, der die _Variations-Einstellungen_ der Schriftart abruft oder festlegt. Es entspricht dem {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}-Deskriptor.
- [`FontFace.weight`](/de/docs/Web/API/FontFace/weight)
  - : Ein String, der das _Gewicht_ der Schriftart enthält. Es entspricht dem {{cssxref("@font-face/font-weight", "font-weight")}}-Deskriptor.
- [`FontFace.load()`](/de/docs/Web/API/FontFace/load)
  - : Lädt eine Schriftart basierend auf den im Konstruktor des aktuellen Objekts übergebenen Anforderungen, einschließlich eines Standorts oder Quellpuffers, und gibt ein {{jsxref('Promise')}} zurück, das mit dem aktuellen FontFace-Objekt auflöst.

## Beispiele

Der untenstehende Code definiert eine Schriftart anhand von Daten unter der URL "my-font.woff" mit einigen Schriftart-Deskriptoren.
Nur um zu zeigen, wie es funktioniert, definieren wir dann den `stretch`-Deskriptor mit einer Eigenschaft.

```js
// Define a FontFace
const font = new FontFace("my-font", 'url("my-font.woff")', {
  style: "italic",
  weight: "400",
});

font.stretch = "condensed";
```

Als nächstes laden wir die Schrift mit [`FontFace.load()`](/de/docs/Web/API/FontFace/load) und verwenden das zurückgegebene Versprechen, um den Abschluss zu verfolgen oder einen Fehler zu melden.

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

Um die Schrift tatsächlich _zu verwenden_, müssen wir sie zu einem [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) hinzufügen.
Wir könnten das vor oder nach dem Laden der Schrift tun.

Für weitere Beispiele siehe [CSS Font Loading API > Examples](/de/docs/Web/API/CSS_Font_Loading_API#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [@font-face](/de/docs/Web/CSS/@font-face)
