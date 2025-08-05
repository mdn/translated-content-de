---
title: FontFace
slug: Web/API/FontFace
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Das **`FontFace`**-Interface der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) repräsentiert eine einzelne nutzbare Schriftart.

Dieses Interface definiert die Quelle einer Schriftart, entweder eine URL zu einer externen Ressource oder ein Puffer, sowie Schrifteigenschaften wie `style`, `weight` usw. Für Schriftquellen über eine URL ermöglicht es den Autoren zu bestimmen, wann die entfernte Schrift abgerufen und geladen wird, und den Ladezustand zu verfolgen.

## Konstruktor

- [`FontFace()`](/de/docs/Web/API/FontFace/FontFace)
  - : Konstruktiert und gibt ein neues `FontFace`-Objekt zurück, das aus einer durch eine URL beschriebenen externen Ressource oder einem {{jsxref("ArrayBuffer")}} erstellt wurde.

## Instanz-Eigenschaften

- [`FontFace.ascentOverride`](/de/docs/Web/API/FontFace/ascentOverride)
  - : Ein String, der die _Ascent-Metrik_ der Schriftart abruft oder festlegt. Er entspricht dem {{cssxref("@font-face/ascent-override", "ascent-override")}}-Deskriptor.
- [`FontFace.descentOverride`](/de/docs/Web/API/FontFace/descentOverride)
  - : Ein String, der die _Descent-Metrik_ der Schriftart abruft oder festlegt. Er entspricht dem {{cssxref("@font-face/descent-override", "descent-override")}}-Deskriptor.
- [`FontFace.display`](/de/docs/Web/API/FontFace/display)
  - : Ein String, der bestimmt, wie eine Schriftart angezeigt wird, basierend darauf, ob und wann sie heruntergeladen und einsatzbereit ist.
- [`FontFace.family`](/de/docs/Web/API/FontFace/family)
  - : Ein String, der die _Familie_ der Schriftart abruft oder festlegt. Er entspricht dem {{cssxref("@font-face/font-family", "font-family")}}-Deskriptor.
- [`FontFace.featureSettings`](/de/docs/Web/API/FontFace/featureSettings)
  - : Ein String, der nicht häufig verwendete Schriftmerkmale abruft oder festlegt, die nicht über die Varianten-Eigenschaften einer Schrift verfügbar sind. Er entspricht der CSS-Eigenschaft {{cssxref("font-feature-settings")}}.
- [`FontFace.lineGapOverride`](/de/docs/Web/API/FontFace/lineGapOverride)
  - : Ein String, der die _Line-Gap-Metrik_ der Schriftart abruft oder festlegt. Er entspricht dem {{cssxref("@font-face/line-gap-override", "line-gap-override")}}-Deskriptor.
- [`FontFace.loaded`](/de/docs/Web/API/FontFace/loaded) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit dem aktuellen `FontFace`-Objekt aufgelöst wird, wenn die im Konstruktor des Objekts angegebene Schriftart geladen ist, oder mit einem `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt wird.
- [`FontFace.status`](/de/docs/Web/API/FontFace/status) {{ReadOnlyInline}}
  - : Gibt einen enumerierten Wert zurück, der den Status der Schriftart angibt, einer von `"unloaded"`, `"loading"`, `"loaded"` oder `"error"`.
- [`FontFace.stretch`](/de/docs/Web/API/FontFace/stretch)
  - : Ein String, der angibt, wie die Schriftart _gestreckt_ wird. Er entspricht dem {{cssxref("@font-face/font-stretch", "font-stretch")}}-Deskriptor.
- [`FontFace.style`](/de/docs/Web/API/FontFace/style)
  - : Ein String, der den _Stil_ der Schrift abruft oder festlegt. Er entspricht dem {{cssxref("@font-face/font-style", "font-style")}}-Deskriptor.
- [`FontFace.unicodeRange`](/de/docs/Web/API/FontFace/unicodeRange)
  - : Ein String, der den _Bereich der Unicode-Codepunkte_ angibt, die die Schriftart umfassen. Er entspricht dem {{cssxref("@font-face/unicode-range", "unicode-range")}}-Deskriptor.
- [`FontFace.variant`](/de/docs/Web/API/FontFace/variant) {{non-standard_inline}}
  - : Ein String, der die _Variante_ der Schrift abruft oder festlegt.
- [`FontFace.variationSettings`](/de/docs/Web/API/FontFace/variationSettings) {{Experimental_Inline}}
  - : Ein String, der die _Variations-Einstellungen_ der Schriftart abruft oder festlegt. Er entspricht dem {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}-Deskriptor.
- [`FontFace.weight`](/de/docs/Web/API/FontFace/weight)
  - : Ein String, der das _Gewicht_ der Schrift enthält. Er entspricht dem {{cssxref("@font-face/font-weight", "font-weight")}}-Deskriptor.
- [`FontFace.load()`](/de/docs/Web/API/FontFace/load)
  - : Lädt eine Schrift basierend auf den im Konstruktor des aktuellen Objekts übergebenen Anforderungen, einschließlich eines Standorts oder Quellenpuffers, und gibt ein {{jsxref('Promise')}} zurück, das mit dem aktuellen `FontFace`-Objekt aufgelöst wird.

## Beispiele

Der folgende Code definiert eine Schriftart mit den Daten an der URL "my-font.woff" mit einigen Schrift-Deskriptoren.
Um zu zeigen, wie es funktioniert, definieren wir dann den `stretch`-Deskriptor mittels einer Eigenschaft.

```js
// Define a FontFace
const font = new FontFace("my-font", 'url("my-font.woff")', {
  style: "italic",
  weight: "400",
});

font.stretch = "condensed";
```

Als nächstes laden wir die Schriftart mit [`FontFace.load()`](/de/docs/Web/API/FontFace/load) und verwenden das zurückgegebene Promise, um den Abschluss zu überwachen oder einen Fehler zu melden.

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

Um die Schrift tatsächlich _zu verwenden_, müssen wir sie einem [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) hinzufügen.
Wir könnten dies vor oder nach dem Laden der Schrift tun.

Für zusätzliche Beispiele siehe [CSS Font Loading API > Examples](/de/docs/Web/API/CSS_Font_Loading_API#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [@font-face](/de/docs/Web/CSS/@font-face)
