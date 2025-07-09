---
title: <meta name="color-scheme">
short-title: color-scheme
slug: Web/HTML/Reference/Elements/meta/name/color-scheme
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Der **`color-scheme`**-Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut des {{htmlelement("meta")}}-Elements gibt ein vorgeschlagenes Farbschema an, das von Benutzeragenten für eine Seite verwendet werden sollte. Wenn angegeben, definieren Sie das Farbschema mithilfe eines [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attributs im `<meta>`-Element mit einem gültigen CSS-{{cssxref("color-scheme")}}-Wert.

Die Themenfarbe funktioniert auf Dokumentenebene auf die gleiche Weise, wie die CSS-{{cssxref("color-scheme")}}-Eigenschaft die bevorzugten und akzeptierten Farbschemata einzelner Elemente spezifiziert. Die Hauptverwendung für `<meta name="color-scheme">` besteht darin, die Kompatibilität und Reihenfolge der Präferenz für helle und dunkle Farbmodi anzugeben. Zum Beispiel, um anzuzeigen, dass ein Dokument den dunklen Modus bevorzugt, aber auch den hellen Modus unterstützt:

```html
<meta name="color-scheme" content="dark light" />
```

Ihre Stile können sich mithilfe des CSS-Media-Features {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} an das aktuelle Farbschema anpassen.

## Verwendungshinweise

Ein `<meta name="color-scheme">`-Element hat die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Ein `<meta>`-Element mit `name=color-scheme` muss ein `content`-Attribut haben, das das Farbschema als CSS-{{cssxref("color-scheme")}}-Wert definiert.
    Das `content`-Attribut kann einer der folgenden Werte sein:
    - `normal`
      - : Das Dokument ist sich Farbschemata nicht bewusst und sollte mit der Standardfarbpalette gerendert werden.
    - `light`, `dark`, `light dark`, `dark light`
      - : Eines oder mehrere vom Dokument unterstützte Farbschemata. Mehrere Farbschemata zeigen an, dass das erste Schema vom Dokument bevorzugt wird, aber das zweite Schema akzeptabel ist, wenn der Benutzer es bevorzugt. Die mehrfache Angabe desselben Farbschemas hat den gleichen Effekt wie die einmalige Angabe.
    - `only light`
      - : Gibt an, dass das Dokument _nur_ den hellen Modus unterstützt, mit einem hellen Hintergrund und dunklen Vordergrundfarben. `only dark` _ist ungültig_, da das Erzwingen, ein Dokument im dunklen Modus zu rendern, wenn es nicht kompatibel ist, zu unlesbarem Inhalt führen kann, und alle großen Browser standardmäßig den hellen Modus verwenden, wenn nicht anders konfiguriert.
- `media` {{optional_inline}}
  - : Jeder gültige Medientyp oder jede gültige Abfrage. Wenn angegeben, werden die im `content`-Attribut definierten Optionen für das Farbschema des Dokuments dem Browser vorgeschlagen, wenn die Medienabfrage übereinstimmt. Dies ist hauptsächlich für das CSS-Media-Feature {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} nützlich.

## Beispiele

### Verwendung eines color-scheme-Schlüsselworts

Das folgende Beispiel zeigt dem Browser an, dass die Seite sowohl helle als auch dunkle Themen unterstützt. Ob das helle oder dunkle Farbschema verwendet wird, hängt von den Benutzereinstellungen wie OS-Einstellungen oder den Browsereinstellungen ab:

```html
<meta name="color-scheme" content="light dark" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-Eigenschaft {{cssxref("color-scheme")}}
- Medienabfrage [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme)
