---
title: <meta name="theme-color">
short-title: theme-color
slug: Web/HTML/Reference/Elements/meta/name/theme-color
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

Der **`theme-color`** Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name) Attribut des {{htmlelement("meta")}} Elements gibt eine vorgeschlagene Farbe an, die Benutzeragenten verwenden sollten, um die Anzeige der Seite oder der umgebenden Benutzeroberfläche anzupassen. Wenn angegeben, definieren Sie eine Themenfarbe durch ein [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content) Attribut im `<meta>` Element als CSS {{cssxref("&lt;color&gt;")}} Wert.

Um beispielsweise anzugeben, dass ein Dokument `cornflowerblue` als Themenfarbe verwenden soll, setzen Sie das `<meta>` wie folgt fest:

```html
<meta name="theme-color" content="cornflowerblue" />
```

Um das Medium festzulegen, auf das sich die Themenfarbe-Metadaten beziehen, fügen Sie das [`media`](/de/docs/Web/HTML/Reference/Elements/meta#media) Attribut mit einer gültigen Medienabfrage-Liste hinzu (siehe das [`theme-color` Medienabfrage-Beispiel](#using_a_media_query_with_theme-color)).

## Nutzungshinweise

Ein `<meta name="theme-color">` Element hat die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Ein `<meta>` Element mit `name=theme-color` muss ein `content` Attribut haben, das die Themenfarbe definiert. Der Wert des `content` Attributs ist wie folgt:
    - {{cssxref("&lt;color&gt;")}} Wert
      - : Ein gültiger Farbwert, wie zum Beispiel hexadezimal, RGB, benannte Farbe usw.
- `media` {{optional_inline}}
  - : Jeder gültige Medientyp oder Abfrage. Wenn bereitgestellt, werden die im `content` Attribut definierten Optionen für die Themenfarbe des Dokuments dem Browser vorgeschlagen, wenn die Medienabfrage übereinstimmt.

## Beispiele

### Einen Farbwert festlegen

Betrachten Sie den folgenden Code, der `<meta>` verwendet, um eine Themenfarbe festzulegen:

```html
<meta name="theme-color" content="#4285f4" />
```

Das folgende Bild zeigt die Wirkung dieser Einstellung in Chrome auf einem Android-Mobilgerät:

![Bild, das die Wirkung von theme-color zeigt](theme-color.png)

_Bildnachweis: von [Icons & Browser Colors](https://web.dev/articles/icons-and-browser-colors), erstellt und geteilt von Google und verwendet gemäß den in der [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/) beschriebenen Bedingungen._

### Eine Medienabfrage mit `theme-color` verwenden

Sie können einen Medientyp oder eine Abfrage im [`media`](/de/docs/Web/HTML/Reference/Elements/meta#media) Attribut bereitstellen. Die `theme-color` wird dann nur gesetzt, wenn die Medienbedingung wahr ist. Zum Beispiel:

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
- {{cssxref("@media/prefers-color-scheme")}} Medienabfrage
