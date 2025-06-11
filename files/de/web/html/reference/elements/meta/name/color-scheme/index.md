---
title: <meta name="color-scheme">
short-title: color-scheme
slug: Web/HTML/Reference/Elements/meta/name/color-scheme
l10n:
  sourceCommit: d9b6cad3b5e14b42061608fb5283e32c75808a3d
---

{{HTMLSidebar}}

Der **`color-scheme`**-Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta#name)-Attribut des {{htmlelement("meta")}}-Elements gibt ein vorgeschlagenes Farbschema an, das Benutzeragenten für eine Seite verwenden sollten. Wenn angegeben, definieren Sie das Farbschema mithilfe eines [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attributs im `<meta>`-Element mit einem gültigen CSS {{cssxref("color-scheme")}}-Wert.

Die Themenfarbe funktioniert auf _Dokumentebene_ auf die gleiche Weise, wie die CSS {{cssxref("color-scheme")}}-Eigenschaft die bevorzugten und akzeptierten Farbschemata _einzelner Elemente_ angibt. Der Hauptzweck von `<meta name="color-scheme">` besteht darin, die Kompatibilität und die Reihenfolge der Präferenz für helle und dunkle Farbmodi anzuzeigen. Zum Beispiel, um anzugeben, dass ein Dokument den Dunkelmodus bevorzugt, aber auch den Hellmodus unterstützt:

```html
<meta name="color-scheme" content="dark light" />
```

Ihre Styles können sich mithilfe des CSS-Media-Features {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} an das aktuelle Farbschema anpassen.

## Verwendungshinweise

Ein `<meta name="color-scheme">`-Element hat die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Ein `<meta>`-Element mit `name=color-scheme` muss ein `content`-Attribut haben, das das Farbschema als CSS {{cssxref("color-scheme")}}-Wert definiert.
    Das `content`-Attribut kann eines der folgenden sein:
    - `normal`
      - : Das Dokument ist sich Farbschemata nicht bewusst und sollte mit der Standardfarbpalette gerendert werden.
    - `light`, `dark`, `light dark`, `dark light`
      - : Eines oder mehrere vom Dokument unterstützte Farbschemata.
        Mehrere Farbschemata bedeuten, dass das erste Schema vom Dokument bevorzugt wird, das zweite Schema jedoch akzeptabel ist, wenn es vom Benutzer bevorzugt wird.
        Dasselbe Farbschema mehrmals anzugeben hat denselben Effekt, als würde es einmal angegeben werden.
    - `only light`
      - : Gibt an, dass das Dokument _nur_ den Hellmodus unterstützt, mit einem hellen Hintergrund und dunklen Vordergrundfarben.
        `only dark` _ist ungültig_, da das Erzwingen eines Dokuments im Dunkelmodus, wenn es nicht kompatibel ist, zu unlesbarem Inhalt führen kann und alle großen Browser standardmäßig den Hellmodus verwenden, wenn nicht anders konfiguriert.
- `media` {{optional_inline}}
  - : Jeder gültige Medientyp oder Abfrage.
    Wenn angegeben, werden die im `content`-Attribut definierten Optionen für das Farbschema des Dokuments dem Browser vorgeschlagen, wenn die Medienabfrage übereinstimmt.
    Dies ist hauptsächlich nützlich für das CSS-Media-Feature {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}.

## Beispiele

### Verwenden eines color-scheme-Schlüsselwortes

Das folgende Beispiel gibt dem Browser an, dass die Seite sowohl helle als auch dunkle Themen unterstützt. Ob das helle oder dunkle Farbschema verwendet wird, hängt von Benutzereinstellungen wie Betriebssystemeinstellungen oder Browsereinstellungen ab:

```html
<meta name="color-scheme" content="light dark" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-Eigenschaft {{cssxref("color-scheme")}}
- [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienabfrage
