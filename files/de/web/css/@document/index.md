---
title: "@document"
slug: Web/CSS/@document
l10n:
  sourceCommit: 960a94a198ca60fb04fe63857ea61d7306465791
---

{{CSSRef}}{{Deprecated_header}}{{Non-standard_header}}

Die **`@document`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) schränkt die darin enthaltenen Stilregeln basierend auf der URL des Dokuments ein. Sie ist hauptsächlich für benutzerdefinierte Stylesheets gestaltet (siehe [userchrome.org](https://www.userchrome.org/) für weitere Informationen), kann jedoch auch in autordefinierten Stylesheets verwendet werden.

```css
@document url("https://www.example.com/")
{
  h1 {
    color: green;
  }
}
```

## Syntax

Eine `@document`-Regel kann eine oder mehrere Abgleichfunktionen spezifizieren. Wenn eine der Funktionen auf eine gegebene URL zutrifft, wird die Regel auf diese URL angewendet. Die verfügbaren Funktionen sind:

- `url()`
  - : Passt exakt zu einer URL.
- `url-prefix()`
  - : Passt, wenn die Dokument-URL mit dem angegebenen Wert beginnt.
- `domain()`
  - : Passt, wenn die Dokument-URL auf der angegebenen Domain (oder einer ihrer Subdomains) liegt.
- `media-document()`
  - : Passt das Medium gemäß dem Parameter-String an, einer von `video`, `image`, `plugin` oder `all`.
- `regexp()`
  - : Passt, wenn die Dokument-URL durch den angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) gematcht wird. Der Ausdruck muss die gesamte URL matchen.

Die an die Funktionen `url()`, `url-prefix()`, `domain()` und `media-document()` übergebenen Werte können optional in einfachen oder doppelten Anführungszeichen stehen. Die an die Funktion `regexp()` übergebenen Werte _müssen_ in Anführungszeichen stehen.

Entkommene Werte, die an die Funktion `regexp()` übergeben werden, müssen zusätzlich aus dem CSS heraus escaped werden. Zum Beispiel matcht ein `.` (Punkt) jedes Zeichen in regulären Ausdrücken. Um einen tatsächlichen Punkt zu matchen, müssen Sie ihn zuerst mit regulären Ausdrucksregeln escapen (zu `\.`), dann diesen String mit CSS-Regeln escapen (zu `\\.`).

`@document` wird derzeit nur in Firefox unterstützt; wenn Sie versuchen möchten, solche Funktionalität in Ihrem eigenen Nicht-Firefox-Browser zu replizieren, könnten Sie [dieses Polyfill](https://github.com/An-Error94/Handy-Scripts/tree/master/%40document-polyfill) von @An-Error94 ausprobieren, das eine Kombination aus einem Benutzerskript, [data-\* Attributen](/de/docs/Web/HTML/Reference/Global_attributes/data-*), und [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) verwendet.

> [!NOTE]
> Es gibt eine -moz-präfixierte Version dieser Eigenschaft — `@-moz-document`. Diese wurde auf die Verwendung in Benutzer- und UA-Sheets in Firefox 59 in Nightly und Beta beschränkt — ein Experiment, das darauf abzielt, potenzielle CSS-Injektionsangriffe zu mildern (siehe [Firefox Bug 1035091](https://bugzil.la/1035091)).

## Formale Syntax

```plain
@document [ <url>                    |
            url-prefix(<string>)     |
            domain(<string>)         |
            media-document(<string>) |
            regexp(<string>)
          ]# {
  <group-rule-body>
}
```

## Beispiele

### Dokument für CSS-Regel spezifizieren

```css
@document url("http://www.w3.org/"),
          url-prefix("http://www.w3.org/Style/"),
          domain("mozilla.org"),
          media-document("video"),
          regexp("https:.*") {
  /* CSS rules here apply to:
     - The page "http://www.w3.org/"
     - Any page whose URL begins with "http://www.w3.org/Style/"
     - Any page whose URL's host is "mozilla.org"
       or ends with ".mozilla.org"
     - Any standalone video
     - Any page whose URL starts with "https:" */

  /* Make the above-mentioned pages really ugly */
  body {
    color: purple;
    background: yellow;
  }
}
```

## Spezifikationen

[Ursprünglich](https://www.w3.org/TR/2012/WD-css3-conditional-20120911/#at-document) in Level 3, wurde `@document` auf Level 4 [verschoben](https://www.w3.org/TR/2012/WD-css3-conditional-20121213/#changes), dann aber anschließend entfernt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Regeln für benutzerdefinierte Stylesheets pro Website](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135) in der www-style-Mailingliste.
