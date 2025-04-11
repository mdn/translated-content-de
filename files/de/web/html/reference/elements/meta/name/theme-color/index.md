---
title: <meta name="theme-color">
slug: Web/HTML/Reference/Elements/meta/name/theme-color
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Der **`theme-color`**-Wert für das [`name`](/de/docs/Web/HTML/Reference/Elements/meta#name)-Attribut des {{htmlelement("meta")}}-Elements gibt eine vorgeschlagene Farbe an, die Benutzeragenten verwenden sollten, um die Darstellung der Seite oder der umgebenden Benutzeroberfläche anzupassen. Wenn angegeben, muss das [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut einen gültigen CSS {{cssxref("&lt;color&gt;")}} enthalten.

## Beispiel

```html
<meta name="theme-color" content="#4285f4" />
```

Das folgende Bild zeigt die Auswirkung, die das oben stehende {{htmlelement("meta")}}-Element auf ein Dokument hat, das in Chrome auf einem Android-Mobilgerät angezeigt wird.

![Bild, das die Wirkung der Verwendung von theme-color zeigt](theme-color.png)

_Bildnachweis: von [Icons & Browser Colors](https://web.dev/articles/icons-and-browser-colors), erstellt und geteilt von Google und verwendet gemäß den im [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/) beschriebenen Bedingungen._

Sie können einen Medientyp oder eine Medienabfrage innerhalb des [`media`](/de/docs/Web/HTML/Reference/Elements/meta#media)-Attributs angeben; die Farbe wird dann nur gesetzt, wenn die Medienbedingung erfüllt ist. Zum Beispiel:

```html
<meta name="theme-color" media="(prefers-color-scheme: light)" content="cyan" />
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("color-scheme")}} CSS-Eigenschaft
- [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) Medienabfrage
