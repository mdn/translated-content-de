---
title: '`<meta name="color-scheme">` HTML-Attributwert'
short-title: color-scheme
slug: Web/HTML/Reference/Elements/meta/name/color-scheme
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

Der **`color-scheme`** Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut des {{htmlelement("meta")}} Elements gibt ein vorgeschlagenes Farbschema an, das Benutzeragenten für eine Seite verwenden sollten. Wenn angegeben, definieren Sie das Farbschema mit einem [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut im `<meta>` Element mit einem gültigen CSS {{cssxref("color-scheme")}} Wert.

Die Themenfarbe funktioniert auf Dokumentenebene auf die gleiche Weise wie die CSS-Eigenschaft {{cssxref("color-scheme")}}, die die bevorzugten und akzeptierten Farbschemata von individuellen Elementen angibt. Der Hauptzweck von `<meta name="color-scheme">` ist es, die Kompatibilität und Reihenfolge der Präferenz für helle und dunkle Farbmodes anzugeben. Zum Beispiel, um anzuzeigen, dass ein Dokument den Dunkelmodus bevorzugt, aber auch den Hellmodus unterstützt:

```html
<meta name="color-scheme" content="dark light" />
```

Ihre Stile können sich mithilfe des CSS-Media-Features {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} an das aktuelle Farbschema anpassen.

## Anwendungshinweise

Ein `<meta name="color-scheme">` Element hat die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Ein `<meta>` Element mit `name=color-scheme` muss ein `content` Attribut haben, das das Farbschema als CSS {{cssxref("color-scheme")}} Wert definiert. Das `content` Attribut kann eines der folgenden sein:
    - `normal`
      - : Das Dokument ist sich der Farbschemata nicht bewusst und sollte mit der Standardfarbpalette gerendert werden.
    - `light`, `dark`, `light dark`, `dark light`
      - : Eines oder mehrere vom Dokument unterstützte Farbschemata. Mehrere Farbschemata bedeuten, dass das erste vom Dokument bevorzugt wird, aber das zweite akzeptabel ist, wenn der Benutzer es bevorzugt. Dasselbe Farbschema mehrmals anzugeben hat denselben Effekt, als es einmal anzugeben.
    - `only light`
      - : Gibt an, dass das Dokument _nur_ den Hellmodus unterstützt, mit einem hellen Hintergrund und dunklen Vordergrundfarben. `only dark` _ist ungültig_, da das Erzwingen des Renderns eines Dokuments im Dunkelmodus, wenn es nicht kompatibel ist, zu unlesbarem Inhalt führen kann und alle großen Browser standardmäßig auf den Hellmodus einstellen, wenn nicht anders konfiguriert.
- `media` {{optional_inline}}
  - : Jeder gültige Medientyp oder Abfrage. Wenn angegeben, werden die im `content` Attribut definierten Optionen für das Farbschema des Dokuments dem Browser vorgeschlagen, wenn die Medienabfrage zutrifft. Dies ist hauptsächlich nützlich für das CSS-Media-Feature {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}.

## Beispiele

### Verwendung eines color-scheme Schlüsselworts

Das folgende Beispiel zeigt dem Browser an, dass die Seite sowohl helle als auch dunkle Themen unterstützt. Ob das helle oder dunkle Farbschema verwendet wird, hängt von den Benutzerpräferenzen wie den Betriebssystemeinstellungen oder den Browsereinstellungen ab:

```html
<meta name="color-scheme" content="light dark" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("color-scheme")}} CSS-Eigenschaft
- {{cssxref("@media/prefers-color-scheme")}} Medienabfrage
