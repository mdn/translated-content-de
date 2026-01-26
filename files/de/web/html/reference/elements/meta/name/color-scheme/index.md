---
title: <meta name="color-scheme">
short-title: color-scheme
slug: Web/HTML/Reference/Elements/meta/name/color-scheme
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

Der **`color-scheme`**-Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut des {{htmlelement("meta")}}-Elements gibt ein vorgeschlagenes Farbschema an, das von Benutzeragenten für eine Seite verwendet werden sollte. Wenn angegeben, definieren Sie das Farbschema mit einem [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut im `<meta>`-Element mit einem gültigen CSS-{{cssxref("color-scheme")}}-Wert.

Die Themenfarbe funktioniert auf _Dokumentebene_ auf dieselbe Weise, wie die CSS-{{cssxref("color-scheme")}}-Eigenschaft die bevorzugten und akzeptierten Farbschemata von _individuellen Elementen_ festlegt. Der Hauptzweck von `<meta name="color-scheme">` besteht darin, die Kompatibilität und Reihenfolge der Präferenz für helle und dunkle Farbmodi anzugeben. Zum Beispiel, um anzugeben, dass ein Dokument den Dunkelmodus bevorzugt, aber auch den Hellmodus unterstützt:

```html
<meta name="color-scheme" content="dark light" />
```

Ihre Stile können sich an das aktuelle Farbschema mit dem {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} CSS-Media-Feature anpassen.

## Anmerkungen zur Verwendung

Ein `<meta name="color-scheme">`-Element hat die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Ein `<meta>`-Element mit `name=color-scheme` muss ein `content`-Attribut haben, das das Farbschema als CSS-{{cssxref("color-scheme")}}-Wert definiert. Das `content`-Attribut kann einer der folgenden sein:
    - `normal`
      - : Das Dokument ist sich Farbpaletten nicht bewusst und sollte mit der Standardfarbpalette gerendert werden.
    - `light`, `dark`, `light dark`, `dark light`
      - : Eines oder mehrere vom Dokument unterstützte Farbschemata. Mehrere Farbschemata zeigen an, dass das erste Schema vom Dokument bevorzugt wird, aber das zweite akzeptabel ist, wenn der Benutzer es bevorzugt. Eine wiederholte Angabe desselben Farbschemas hat denselben Effekt wie dessen einmalige Angabe.
    - `only light`
      - : Gibt an, dass das Dokument _nur_ den Hellmodus unterstützt, mit einem hellen Hintergrund und dunklen Vordergrundfarben. `only dark` _ist ungültig_, da das Erzwingen eines Dokumentes zur Darstellung im Dunkelmodus, wenn es nicht kompatibel ist, zu unlesbarem Inhalt führen kann und alle großen Browser standardmäßig auf den Hellmodus eingestellt sind, wenn nichts anderes konfiguriert ist.
- `media` {{optional_inline}}
  - : Jeder gültige Medientyp oder -abfrage. Wenn angegeben, werden die im `content`-Attribut definierten Optionen für das Farbschema des Dokuments dem Browser vorgeschlagen, wenn die Medienabfrage zutrifft. Dies ist vor allem für das {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} CSS-Media-Feature nützlich.

## Beispiele

### Verwendung eines color-scheme-Schlüsselworts

Das folgende Beispiel zeigt dem Browser an, dass die Seite sowohl helle als auch dunkle Themen unterstützt. Ob das helle oder das dunkle Farbschema verwendet wird, hängt von Benutzereinstellungen wie Betriebssystemeinstellungen oder den Browsereinstellungen ab:

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
