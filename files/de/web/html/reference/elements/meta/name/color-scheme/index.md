---
title: <meta name="color-scheme">
short-title: color-scheme
slug: Web/HTML/Reference/Elements/meta/name/color-scheme
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Der Wert **`color-scheme`** für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut des {{htmlelement("meta")}}-Elements gibt ein vorgeschlagenes Farbschema an, das Benutzeragenten für eine Seite verwenden sollten. Wenn angegeben, definieren Sie das Farbschema mit einem [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut im `<meta>`-Element mit einem gültigen CSS {{cssxref("color-scheme")}}-Wert.

Die Themenerstellfarbe funktioniert auf der _Dokumentebene_ auf die gleiche Weise wie die CSS-{{cssxref("color-scheme")}}-Eigenschaft die bevorzugten und akzeptierten Farbschemata einzelner Elemente angibt. Der Hauptzweck von `<meta name="color-scheme">` besteht darin, die Kompatibilität und die Reihenfolge der Präferenzen für helle und dunkle Farbmodi anzugeben. Zum Beispiel, um anzuzeigen, dass ein Dokument den Dunkelmodus bevorzugt, jedoch auch den Hellmodus unterstützt:

```html
<meta name="color-scheme" content="dark light" />
```

Ihre Styles können sich mit dem CSS-Medienmerkmal {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} an das aktuelle Farbschema anpassen.

## Verwendungshinweise

Ein `<meta name="color-scheme">`-Element hat die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Ein `<meta>`-Element mit `name=color-scheme` muss ein `content`-Attribut haben, das das Farbschema als CSS-{{cssxref("color-scheme")}}-Wert definiert.
    Das `content`-Attribut kann eines der folgenden sein:
    - `normal`
      - : Das Dokument ist sich der Farbschemata nicht bewusst und sollte mit der Standardfarbpalette gerendert werden.
    - `light`, `dark`, `light dark`, `dark light`
      - : Eines oder mehrere vom Dokument unterstützte Farbschemata. Mehrere Farbschemata geben an, dass das erste Schema vom Dokument bevorzugt wird, das zweite jedoch akzeptabel ist, wenn es der Benutzer bevorzugt. Die Angabe desselben Farbschemas mehrmals hat den gleichen Effekt wie die Angabe einmal.
    - `only light`
      - : Gibt an, dass das Dokument _nur_ den Hellmodus unterstützt, mit einem hellen Hintergrund und dunklen Vordergrundfarben. `only dark` _ist ungültig_, da das Erzwingen der Darstellung eines Dokuments im Dunkelmodus, wenn es nicht kompatibel ist, zu unlesbarem Inhalt führen kann und alle großen Browser standardmäßig auf den Hellmodus eingestellt sind, wenn keine andere Konfiguration vorgenommen wird.
- `media` {{optional_inline}}
  - : Jeder gültige Medientyp oder jede gültige Medienabfrage. Wenn angegeben, werden die im `content`-Attribut definierten Optionen des Dokuments für das Farbschema dem Browser vorgeschlagen, wenn die Medienabfrage zutrifft. Dies ist hauptsächlich nützlich für das {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} CSS-Medienmerkmal.

## Beispiele

### Verwendung eines color-scheme Schlüssels

Das folgende Beispiel informiert den Browser darüber, dass die Seite sowohl helle als auch dunkle Themen unterstützt. Ob das helle oder dunkle Farbschema verwendet wird, hängt von den Benutzereinstellungen wie Betriebssystemeinstellungen oder den Browsereinstellungen ab:

```html
<meta name="color-scheme" content="light dark" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("color-scheme")}} CSS-Eigenschaft
- [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) Medienabfrage
