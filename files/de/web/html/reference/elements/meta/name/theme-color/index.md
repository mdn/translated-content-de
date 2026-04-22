---
title: '`<meta name="theme-color">` HTML-Attributwert'
short-title: theme-color
slug: Web/HTML/Reference/Elements/meta/name/theme-color
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

Der **`theme-color`**-Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut des {{htmlelement("meta")}}-Elements gibt eine vorgeschlagene Farbe an, die Benutzeragenten verwenden sollten, um die Anzeige der Seite oder der umgebenden Benutzeroberfläche anzupassen. Wenn angegeben, definieren Sie eine Themenfarbe mithilfe eines [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attributs im `<meta>`-Element als CSS {{cssxref("&lt;color&gt;")}}-Wert.

Um beispielsweise anzugeben, dass ein Dokument `cornflowerblue` als Themenfarbe verwenden soll, setzen Sie das `<meta>` wie folgt:

```html
<meta name="theme-color" content="cornflowerblue" />
```

Um die Medien festzulegen, auf die sich die Themenfarbmetadaten beziehen, fügen Sie das [`media`](/de/docs/Web/HTML/Reference/Elements/meta#media)-Attribut mit einer gültigen Medienabfrageliste ein (siehe das Beispiel zur [`theme-color`-Medienabfrage](#using_a_media_query_with_theme-color)).

## Anwendungshinweise

Ein `<meta name="theme-color">`-Element hat die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Ein `<meta>`-Element mit `name=theme-color` muss ein `content`-Attribut haben, das die Themenfarbe definiert.
    Der Wert des `content`-Attributs ist wie folgt:
    - {{cssxref("&lt;color&gt;")}}-Wert
      - : Ein gültiger Farbwert, wie z.B. Hexadezimal, RGB, benannter Farbe usw.
- `media` {{optional_inline}}
  - : Jeder gültige Medientyp oder Abfrage.
    Falls angegeben, werden die im `content`-Attribut definierten Optionen für die Themenfarbe des Dokuments dem Browser vorgeschlagen, sobald die Medienabfrage zutrifft.

## Beispiele

### Setzen eines Farbwerts

Betrachten Sie den folgenden Code, der `<meta>` verwendet, um eine Themenfarbe festzulegen:

```html
<meta name="theme-color" content="#4285f4" />
```

Das folgende Bild zeigt die Auswirkung dieser Einstellung in Chrome auf einem Android-Mobilgerät:

![Bild, das die Wirkung der Verwendung von theme-color zeigt](theme-color.png)

_Bildnachweis: von [Icons & Browser Colors](https://web.dev/articles/icons-and-browser-colors), erstellt und geteilt von Google und verwendet gemäß den in der [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/) beschriebenen Bedingungen._

### Verwendung einer Medienabfrage mit `theme-color`

Sie können einen Medientyp oder eine Abfrage im [`media`](/de/docs/Web/HTML/Reference/Elements/meta#media)-Attribut angeben. Die `theme-color` wird dann nur gesetzt, wenn die Medienbedingung wahr ist. Zum Beispiel:

```html
<meta
  name="theme-color"
  content="cornflowerblue"
  media="(prefers-color-scheme: light)" />
<meta
  name="theme-color"
  content="dimgray"
  media="(prefers-color-scheme: dark)" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- `<meta>` `name`-Attribut [`color-scheme`](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme)-Wert
- {{cssxref("color-scheme")}} CSS-Eigenschaft
- {{cssxref("@media/prefers-color-scheme")}} Medienabfrage
