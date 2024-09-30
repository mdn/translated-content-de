---
title: theme-color
slug: Web/HTML/Element/meta/name/theme-color
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{HTMLSidebar}}

Der Wert **`theme-color`** für das [`name`](/de/docs/Web/HTML/Element/meta#name)-Attribut des {{htmlelement("meta")}}-Elements gibt eine vorgeschlagene Farbe an, die Benutzeragenten verwenden sollten, um die Darstellung der Seite oder der umgebenden Benutzeroberfläche anzupassen. Falls angegeben, muss das [`content`](/de/docs/Web/HTML/Element/meta#content)-Attribut eine gültige CSS {{cssxref("&lt;color&gt;")}} enthalten.

## Beispiel

```html
<meta name="theme-color" content="#4285f4" />
```

Das folgende Bild zeigt den Effekt, den das obenstehende {{htmlelement("meta")}}-Element auf ein in Chrome auf einem Android-Mobilgerät angezeigtes Dokument haben wird.

![Bild, das den Effekt der Verwendung von theme-color zeigt](theme-color.png)

_Bildnachweis: von [Icons & Browser Colors](https://web.dev/articles/icons-and-browser-colors), erstellt und geteilt von Google und verwendet gemäß den Bedingungen der [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/)._

Sie können einen Medientyp oder eine Abfrage im [`media`](/de/docs/Web/HTML/Element/meta#media)-Attribut angeben; die Farbe wird dann nur gesetzt, wenn die Medienbedingung wahr ist. Zum Beispiel:

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
