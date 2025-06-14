---
title: <meta name="theme-color">
short-title: theme-color
slug: Web/HTML/Reference/Elements/meta/name/theme-color
l10n:
  sourceCommit: 0b8f00bb9ece33c6964eea886b2f7db8711d7b62
---

{{HTMLSidebar}}

Der **`theme-color`** Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name) Attribut des {{htmlelement("meta")}} Elements gibt eine vorgeschlagene Farbe an, die Benutzeragenten verwenden sollten, um die Anzeige der Seite oder der umgebenden Benutzeroberfläche anzupassen. Wenn angegeben, definieren Sie eine Themenfarbe mithilfe eines [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content) Attributs im `<meta>` Element als CSS {{cssxref("&lt;color&gt;")}} Wert.

Um das Medium festzulegen, auf das sich die Themenfarbmetadaten beziehen, fügen Sie das [`media`](/de/docs/Web/HTML/Reference/Elements/meta#media) Attribut mit einer gültigen Media-Query-Liste hinzu. Zum Beispiel, um anzugeben, dass ein Dokument `cornflowerblue` als Themenfarbe verwenden soll, setzen Sie das `<meta>` wie folgt:

```html
<meta name="theme-color" content="cornflowerblue" />
```

## Nutzungshinweise

Ein `<meta name="theme-color">` Element hat die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Ein `<meta>` Element mit `name=theme-color` muss ein `content` Attribut haben, das die Themenfarbe definiert. Der Wert des `content` Attributs ist wie folgt:
    - {{cssxref("&lt;color&gt;")}} Wert
      - : Ein gültiger Farbwert, wie zum Beispiel Hexadezimal, RGB, benannte Farbe usw.
- `media` {{optional_inline}}
  - : Jeder gültige Mediatyp oder jede gültige Abfrage. Wenn angegeben, werden die im `content` Attribut definierten Optionen für die Themenfarbe des Dokuments dem Browser vorgeschlagen, wenn die Medienabfrage zutrifft.

## Beispiele

### Festlegen eines Farbwerts

Betrachten Sie den folgenden Code, der `<meta>` verwendet, um eine Themenfarbe festzulegen:

```html
<meta name="theme-color" content="#4285f4" />
```

Das folgende Bild zeigt die Auswirkung dieser Einstellung in Chrome auf einem Android-Mobilgerät:

![Bild zeigt die Auswirkung der Nutzung von theme-color](theme-color.png)

_Bildnachweis: von [Icons & Browser Colors](https://web.dev/articles/icons-and-browser-colors), erstellt und geteilt von Google und verwendet gemäß den Bedingungen der [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/)._

### Verwenden einer Medienabfrage mit `theme-color`

Sie können einen Medientyp oder eine Abfrage innerhalb des [`media`](/de/docs/Web/HTML/Reference/Elements/meta#media) Attributs angeben. Die `theme-color` wird dann nur gesetzt, wenn die Medienbedingung wahr ist. Zum Beispiel:

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

- `<meta>` `name` Attribut [`color-scheme`](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme) Wert
- {{cssxref("color-scheme")}} CSS Eigenschaft
- [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Media Query
