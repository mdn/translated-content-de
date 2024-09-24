---
title: FontFace
slug: Web/API/FontFace
l10n:
  sourceCommit: c28529c0cc75eb5d2de857c923f0a1ebd5145313
---

{{APIRef("CSS Font Loading API")}}

Die **`FontFace`**-Schnittstelle der [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API) repräsentiert eine einzelne verwendbare Schriftart.

Diese Schnittstelle definiert die Quelle einer Schriftart, entweder eine URL zu einer externen Ressource oder ein Puffer, sowie Schriftarteigenschaften wie `style`, `weight` und so weiter. Für URL-Schriftquellen ermöglicht sie es Autoren, auszulösen, wann die entfernte Schriftart abgerufen und geladen wird, und um den Ladezustand zu verfolgen.

## Konstruktor

- {{domxref("FontFace.FontFace", "FontFace()")}}
  - : Erstellt und gibt ein neues `FontFace`-Objekt zurück, das aus einer externen Ressource, die durch eine URL beschrieben wird, oder aus einem {{jsxref("ArrayBuffer")}} erstellt wurde.

## Instanzeigenschaften

- {{domxref("FontFace.ascentOverride")}}
  - : Ein String, der die _Aufwärtsmetrik_ der Schriftart abruft oder festlegt. Es ist äquivalent zum {{cssxref("@font-face/ascent-override", "ascent-override")}} Deskriptor.
- {{domxref("FontFace.descentOverride")}}
  - : Ein String, der die _Abwärtsmetrik_ der Schriftart abruft oder festlegt. Es ist äquivalent zum {{cssxref("@font-face/descent-override", "descent-override")}} Deskriptor.
- {{domxref("FontFace.display")}}
  - : Ein String, der bestimmt, wie eine Schriftart basierend darauf angezeigt wird, ob und wann sie heruntergeladen und bereit zur Verwendung ist.
- {{domxref("FontFace.family")}}
  - : Ein String, der die _Familie_ der Schriftart abruft oder festlegt. Es ist äquivalent zum {{cssxref("@font-face/font-family", "font-family")}} Deskriptor.
- {{domxref("FontFace.featureSettings")}}
  - : Ein String, der selten genutzte Schriftmerkmale abruft oder festlegt, die nicht von den Varianten-Eigenschaften einer Schriftart verfügbar sind. Es ist äquivalent zur CSS-Eigenschaft {{cssxref("font-feature-settings")}}.
- {{domxref("FontFace.lineGapOverride")}}
  - : Ein String, der die _Zeilenabstands-Metrik_ der Schriftart abruft oder festlegt. Es ist äquivalent zum {{cssxref("@font-face/line-gap-override", "line-gap-override")}} Deskriptor.
- {{domxref("FontFace.loaded")}} {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit dem aktuellen `FontFace`-Objekt aufgelöst wird, wenn die im Konstruktor des Objekts angegebene Schriftart geladen ist, oder mit einem `SyntaxError` {{domxref("DOMException")}} abgelehnt wird.
- {{domxref("FontFace.status")}} {{ReadOnlyInline}}
  - : Gibt einen enumerierten Wert zurück, der den Status der Schriftart angibt, einer von `"unloaded"`, `"loading"`, `"loaded"` oder `"error"`.
- {{domxref("FontFace.stretch")}}
  - : Ein String, der abruft oder festlegt, wie die Schriftart _gedehnt_ wird. Es ist äquivalent zum {{cssxref("@font-face/font-stretch", "font-stretch")}} Deskriptor.
- {{domxref("FontFace.style")}}
  - : Ein String, der den _Stil_ der Schriftart abruft oder festlegt. Es ist äquivalent zum {{cssxref("@font-face/font-style", "font-style")}} Deskriptor.
- {{domxref("FontFace.unicodeRange")}}
  - : Ein String, der den _Bereich der Unicode-Code-Punkte_, die die Schriftart umfassen, abruft oder festlegt. Es ist äquivalent zum {{cssxref("@font-face/unicode-range", "unicode-range")}} Deskriptor.
- {{domxref("FontFace.variant")}} {{non-standard_inline}}
  - : Ein String, der die _Variante_ der Schriftart abruft oder festlegt.
- {{domxref("FontFace.variationSettings")}} {{Experimental_Inline}}
  - : Ein String, der die _Variations-Einstellungen_ der Schriftart abruft oder festlegt. Es ist äquivalent zum {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} Deskriptor.
- {{domxref("FontFace.weight")}}
  - : Ein String, der das _Gewicht_ der Schriftart enthält. Es ist äquivalent zum {{cssxref("@font-face/font-weight", "font-weight")}} Deskriptor.
- {{domxref("FontFace.load()")}}
  - : Lädt eine Schriftart basierend auf den Anforderungen, die dem Konstruktor des aktuellen Objekts übergeben wurden, einschließlich eines Speicherorts oder Quellpuffers, und gibt ein {{jsxref('Promise')}} zurück, das mit dem aktuellen FontFace-Objekt aufgelöst wird.

## Beispiele

Der untenstehende Code definiert eine Schriftart mit den Daten unter der URL "myfont.woff" mit einigen Schriftart-Deskriptoren. Um zu zeigen, wie es funktioniert, definieren wir dann den `stretch` Deskriptor mit einer Eigenschaft.

```js
//Define a FontFace
const font = new FontFace("myfont", "url(myfont.woff)", {
  style: "italic",
  weight: "400",
});

font.stretch = "condensed";
```

Als nächstes laden wir die Schriftart mit {{domxref("FontFace.load()")}} und verwenden das zurückgegebene Versprechen, um den Abschluss zu verfolgen oder einen Fehler zu melden.

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

Um die Schriftart tatsächlich zu _verwenden_, müssen wir sie zu einem {{domxref("FontFaceSet")}} hinzufügen. Das könnten wir vor oder nach dem Laden der Schriftart tun.

Für weitere Beispiele siehe [CSS Font Loading API > Examples](/de/docs/Web/API/CSS_Font_Loading_API#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [@font-face](/de/docs/Web/CSS/@font-face)
