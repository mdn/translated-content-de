---
title: <meta name="theme-color">
short-title: theme-color
slug: Web/HTML/Reference/Elements/meta/name/theme-color
l10n:
  sourceCommit: 469c8961cfd28fb4d2d59769ab7c4e0433824c21
---

{{HTMLSidebar}}

Der **`theme-color`** Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name)-Attribut des {{htmlelement("meta")}}-Elements gibt eine vorgeschlagene Farbe an, die von Benutzeragenten verwendet werden sollte, um die Anzeige der Seite oder die umgebende Benutzeroberfläche anzupassen. Wenn angegeben, definieren Sie eine Themenfarbe mithilfe eines [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attributs im `<meta>`-Element als CSS {{cssxref("&lt;color&gt;")}} Wert.

Um beispielsweise anzugeben, dass ein Dokument `cornflowerblue` als Themenfarbe verwenden sollte, setzen Sie das `<meta>` wie folgt:

```html
<meta name="theme-color" content="cornflowerblue" />
```

Um die Medien festzulegen, auf die sich die Metadaten der Themenfarbe beziehen, fügen Sie das [`media`](/de/docs/Web/HTML/Reference/Elements/meta#media)-Attribut mit einer gültigen Medienabfrage-Liste ein (siehe das [`theme-color` Medienabfrage-Beispiel](#using_a_media_query_with_theme-color)).

## Nutzungsnotizen

Ein `<meta name="theme-color">` Element hat die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Ein `<meta>`-Element mit `name=theme-color` muss ein `content`-Attribut haben, das die Themenfarbe definiert. Der Wert des `content`-Attributs ist wie folgt:
    - {{cssxref("&lt;color&gt;")}} Wert
      - : Ein gültiger Farbwert, wie zum Beispiel hexadezimal, RGB, benannte Farbe usw.
- `media` {{optional_inline}}
  - : Jeder gültige Medientyp oder jede gültige Abfrage. Wenn angegeben, werden die im `content`-Attribut definierten Optionen für die Themenfarbe des Dokuments dem Browser vorgeschlagen, wenn die Medienabfrage zutrifft.

## Beispiele

### Setzen eines Farbwerts

Betrachten Sie den folgenden Code, der `<meta>` verwendet, um eine Themenfarbe festzulegen:

```html
<meta name="theme-color" content="#4285f4" />
```

Das folgende Bild zeigt die Wirkung dieser Einstellung in Chrome auf einem Android-Mobilgerät:

![Bild zeigt die Wirkung der Verwendung von theme-color](theme-color.png)

_Bildnachweis: von [Icons & Browser Colors](https://web.dev/articles/icons-and-browser-colors), erstellt und geteilt von Google und verwendet gemäß den Bedingungen der [Creative Commons 4.0 Namensnennungslizenz](https://creativecommons.org/licenses/by/4.0/)._

### Verwendung einer Medienabfrage mit `theme-color`

Sie können einen Medientyp oder eine Abfrage innerhalb des [`media`](/de/docs/Web/HTML/Reference/Elements/meta#media)-Attributs angeben. Die `theme-color` wird dann nur gesetzt, wenn die Medienbedingung zutrifft. Zum Beispiel:

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
- {{cssxref("color-scheme")}} CSS-Eigenschaft
- [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienabfrage
