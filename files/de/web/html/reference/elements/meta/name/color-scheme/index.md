---
title: '`<meta name="color-scheme">` HTML-Attributwert'
short-title: color-scheme
slug: Web/HTML/Reference/Elements/meta/name/color-scheme
l10n:
  sourceCommit: 3a7da595860e07c871e243e58a8fe8b7043e305a
---

Der **`color-scheme`** Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut des {{htmlelement("meta")}}-Elements gibt ein vorgeschlagenes Farbschema an, das Benutzeragenten für eine Seite verwenden sollten.
Falls angegeben, definieren Sie das Farbschema mithilfe eines [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attributs im `<meta>`-Element mit einem gültigen CSS {{cssxref("color-scheme")}}-Wert.

Die Themenfarbe funktioniert auf _Dokument-Ebene_ auf die gleiche Weise wie die CSS-Eigenschaft {{cssxref("color-scheme")}}, die die bevorzugten und akzeptierten Farbschemata von _einzelnen Elementen_ angibt.
Der Hauptzweck von `<meta name="color-scheme">` besteht darin, die Kompatibilität und Reihenfolge der Präferenz für helle und dunkle Farbschemata anzugeben.
Um beispielsweise anzugeben, dass ein Dokument den Dunkelmodus bevorzugt, aber auch den Hellmodus unterstützt:

```html
<meta name="color-scheme" content="dark light" />
```

Ihre Stile können sich mithilfe der CSS-Medienfunktion {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} an das aktuelle Farbschema anpassen.

## Verwendungshinweise

Ein `<meta name="color-scheme">`-Element hat die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Ein `<meta>`-Element mit `name=color-scheme` muss ein `content`-Attribut haben, das das Farbschema als CSS {{cssxref("color-scheme")}}-Wert definiert.
    Das `content`-Attribut kann einer der folgenden Werte sein:
    - `normal`
      - : Das Dokument ist sich der Farbschemata nicht bewusst und sollte mit der Standardfarbpalette gerendert werden.
    - `light`, `dark`, `light dark`, `dark light`
      - : Ein oder mehrere Farbschemata, die vom Dokument unterstützt werden.
        Mehrere Farbschemata zeigen an, dass das erste Schema vom Dokument bevorzugt wird, aber dass das zweite Schema akzeptabel ist, wenn es der Benutzer bevorzugt.
        Die mehrfache Angabe des gleichen Farbschemas hat denselben Effekt wie die einmalige Angabe.
    - `only light`
      - : Zeigt an, dass das Dokument _nur_ den Hellmodus unterstützt, mit einem hellen Hintergrund und dunklen Vordergrundfarben.
        `only dark` _ist ungültig_, da das Erzwingen eines Dokuments in den Dunkelmodus, wenn es nicht kompatibel ist, zu unlesbarem Inhalt führen kann und alle gängigen Browser standardmäßig den Hellmodus verwenden, falls nicht anders konfiguriert.

## Beispiele

### Verwendung eines `color-scheme`-Schlüsselworts

Das folgende Beispiel gibt dem Browser an, dass die Seite sowohl helle als auch dunkle Themen unterstützt.
Ob das helle oder dunkle Farbschema verwendet wird, hängt von Benutzereinstellungen wie den Betriebssystemeinstellungen oder den Browsereinstellungen ab:

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
