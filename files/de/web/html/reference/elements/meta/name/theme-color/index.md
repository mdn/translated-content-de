---
title: <meta name="theme-color">
short-title: theme-color
slug: Web/HTML/Reference/Elements/meta/name/theme-color
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Der **`theme-color`** Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta/name) Attribut des {{htmlelement("meta")}} Elements gibt eine empfohlene Farbe an, die von Benutzeragenten verwendet werden sollte, um die Anzeige der Seite oder der umliegenden Benutzeroberfläche anzupassen.
Falls angegeben, definieren Sie eine Themenfarbe mit einem [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content) Attribut im `<meta>` Element als CSS {{cssxref("&lt;color&gt;")}} Wert.

Zum Beispiel, um anzugeben, dass ein Dokument `cornflowerblue` als Themenfarbe verwenden soll, setzen Sie das `<meta>` wie folgt:

```html
<meta name="theme-color" content="cornflowerblue" />
```

Um das Medium festzulegen, auf das die Metadaten der Themenfarbe angewendet werden sollen, fügen Sie das [`media`](/de/docs/Web/HTML/Reference/Elements/meta#media) Attribut mit einer gültigen Medienabfrageliste hinzu (siehe das Beispiel für [`theme-color` mit einer Media Query](#using_a_media_query_with_theme-color)).

## Nutzungshinweise

Ein `<meta name="theme-color">` Element hat die folgenden zusätzlichen Attribute:

- [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)
  - : Ein `<meta>` Element mit `name=theme-color` muss ein `content` Attribut haben, das die Themenfarbe definiert.
    Der Wert des `content` Attributs ist wie folgt:
    - {{cssxref("&lt;color&gt;")}} Wert
      - : Ein gültiger Farbwert, wie zum Beispiel hexadezimal, RGB, benannte Farbe, etc.
- `media` {{optional_inline}}
  - : Jeder gültige Medientyp oder Abfrage.
    Falls angegeben, werden die im `content` Attribut definierten Optionen für die Themenfarbe des Dokuments dem Browser empfohlen, wenn die Medienabfrage zutrifft.

## Beispiele

### Festlegen eines Farbwerts

Betrachten Sie den folgenden Code, der `<meta>` verwendet, um eine Themenfarbe festzulegen:

```html
<meta name="theme-color" content="#4285f4" />
```

Das folgende Bild zeigt die Wirkung dieser Einstellung in Chrome auf einem Android-Mobilgerät:

![Bild, das die Wirkung der Verwendung von theme-color zeigt](theme-color.png)

_Bildnachweis: von [Icons & Browser Colors](https://web.dev/articles/icons-and-browser-colors), erstellt und geteilt von Google und verwendet gemäß den Bedingungen der [Creative Commons 4.0 Lizenz für Namensnennung](https://creativecommons.org/licenses/by/4.0/)._

### Verwendung einer Media Query mit `theme-color`

Sie können einen Medientyp oder eine Abfrage im [`media`](/de/docs/Web/HTML/Reference/Elements/meta#media) Attribut angeben.
Die `theme-color` wird dann nur gesetzt, wenn die Medienbedingung wahr ist.
Zum Beispiel:

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
- [`prefers-color-scheme`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) Media Query
