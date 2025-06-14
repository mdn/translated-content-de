---
title: \<meta name="color-scheme">
short-title: color-scheme
slug: Web/HTML/Reference/Elements/meta/name/color-scheme
l10n:
  sourceCommit: 0b8f00bb9ece33c6964eea886b2f7db8711d7b62
---

{{HTMLSidebar}}

Der **`color-scheme`**-Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut des {{htmlelement("meta")}} Elements gibt ein vorgeschlagenes Farbschema an, das Benutzeragenten für eine Seite verwenden sollten. Wenn angegeben, definieren Sie das Farbschema mit einem [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut im `<meta>` Element mit einem gültigen CSS {{cssxref("color-scheme")}}-Wert.

Die Farbauswahl funktioniert auf Dokument-Ebene auf die gleiche Weise wie die CSS-Eigenschaft {{cssxref("color-scheme")}}, die die bevorzugten und akzeptierten Farbschemata einzelner Elemente angibt. Der Hauptzweck von `<meta name="color-scheme">` besteht darin, die Kompatibilität und die Präferenzreihenfolge für helle und dunkle Farbmodi anzugeben. Zum Beispiel, um anzugeben, dass ein Dokument den Dunkelmodus bevorzugt, aber auch den Hellmodus unterstützt:

```html
<meta name="color-scheme" content="dark light" />
```

Ihre Stile können sich an das aktuelle Farbschema anpassen, indem Sie das CSS-Media-Feature {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} verwenden.

## Nutzungshinweise

Ein `<meta name="color-scheme">` Element hat die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Ein `<meta>`-Element mit `name=color-scheme` muss ein `content`-Attribut haben, das das Farbschema als CSS {{cssxref("color-scheme")}}-Wert definiert. Das `content`-Attribut kann eines der folgenden sein:
    - `normal`
      - : Das Dokument ist nicht auf Farbschemata ausgerichtet und sollte mit der Standard-Farbpalette gerendert werden.
    - `light`, `dark`, `light dark`, `dark light`
      - : Eines oder mehrere Farbschemata, die vom Dokument unterstützt werden. Mehrere Farbschemata bedeuten, dass das erste Schema vom Dokument bevorzugt wird, das zweite aber akzeptabel ist, wenn der Benutzer es bevorzugt. Dasselbe Farbschema mehrfach anzugeben hat denselben Effekt, als es einmal anzugeben.
    - `only light`
      - : Gibt an, dass das Dokument _nur_ den Hellmodus unterstützt, mit einem hellen Hintergrund und dunklen Vordergrundfarben. `only dark` _ist ungültig_, da das Erzwingen eines Dokuments im Dunkelmodus, wenn es nicht kompatibel ist, zu unlesbarem Inhalt führen kann, und alle großen Browser standardmäßig auf den Hellmodus zurückgreifen, wenn nicht anders konfiguriert.
- `media` {{optional_inline}}
  - : Jeder gültige Medientyp oder jede Medientypabfrage. Falls angegeben, werden die im `content`-Attribut definierten Optionen für das Farbschema des Dokuments dem Browser vorgeschlagen, wenn die Medienabfrage zutrifft. Dies ist hauptsächlich nützlich für das CSS-Media-Feature {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}.

## Beispiele

### Verwendung eines color-scheme-Schlüsselworts

Das folgende Beispiel gibt dem Browser an, dass die Seite sowohl helle als auch dunkle Themen unterstützt. Ob das helle oder das dunkle Farbschema verwendet wird, hängt von den Benutzereinstellungen wie Betriebssystemeinstellungen oder den Browsereinstellungen ab:

```html
<meta name="color-scheme" content="light dark" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("color-scheme")}} CSS-Eigenschaft
- [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienabfrage
