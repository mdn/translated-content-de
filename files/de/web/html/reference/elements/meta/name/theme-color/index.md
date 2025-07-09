---
title: <meta name="theme-color">
short-title: theme-color
slug: Web/HTML/Reference/Elements/meta/name/theme-color
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Der **`theme-color`** Wert des [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name) Attributs des {{htmlelement("meta")}} Elements zeigt eine vorgeschlagene Farbe an, die Benutzeragenten verwenden sollten, um die Anzeige der Seite oder der umgebenden Benutzeroberfläche anzupassen. Wenn angegeben, definieren Sie eine Thema-Farbe durch ein [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content) Attribut im `<meta>` Element als CSS {{cssxref("&lt;color&gt;")}} Wert.

Um beispielsweise anzugeben, dass ein Dokument `cornflowerblue` als Thema-Farbe verwenden soll, setzen Sie das `<meta>` wie folgt:

```html
<meta name="theme-color" content="cornflowerblue" />
```

Um das Medium festzulegen, auf das sich die Thema-Farbmetadaten beziehen, fügen Sie das [`media`](/de/docs/Web/HTML/Reference/Elements/meta#media) Attribut mit einer gültigen Medienabfragenliste hinzu (siehe das [`theme-color` Medienabfrage-Beispiel](#using_a_media_query_with_theme-color)).

## Verwendungshinweise

Ein `<meta name="theme-color">` Element hat die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Ein `<meta>` Element mit `name=theme-color` muss ein `content` Attribut haben, das die Thema-Farbe definiert.
    Der Wert des `content` Attributs ist wie folgt:
    - {{cssxref("&lt;color&gt;")}} Wert
      - : Ein gültiger Farbwert wie Hexadezimal, RGB, benannte Farbe usw.
- `media` {{optional_inline}}
  - : Jeder gültige Medientyp oder -abfrage.
    Wenn angegeben, werden die im `content` Attribut definierten Optionen für die Thema-Farbe des Dokuments dem Browser vorgeschlagen, wenn die Medienabfrage zutrifft.

## Beispiele

### Einstellung eines Farbwertes

Betrachten Sie den folgenden Code, der `<meta>` verwendet, um eine Thema-Farbe festzulegen:

```html
<meta name="theme-color" content="#4285f4" />
```

Das folgende Bild zeigt die Wirkung dieser Einstellung in Chrome auf einem Android-Mobilgerät:

![Bild zeigt die Wirkung der Verwendung von theme-color](theme-color.png)

_Bildquelle: von [Icons & Browser Colors](https://web.dev/articles/icons-and-browser-colors), erstellt und geteilt von Google und verwendet gemäß den in der [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/) beschriebenen Bedingungen._

### Verwendung einer Medienabfrage mit `theme-color`

Sie können einen Medientyp oder eine Abfrage im [`media`](/de/docs/Web/HTML/Reference/Elements/meta#media) Attribut angeben. Die `theme-color` wird dann nur gesetzt, wenn die Medienbedingung wahr ist. Zum Beispiel:

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
- [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienabfrage
