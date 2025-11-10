---
title: "@document"
slug: Web/CSS/Reference/At-rules/@document
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{Deprecated_header}}{{Non-standard_header}}

Die **`@document`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) schränkt die darin enthaltenen Stilregeln basierend auf der URL des Dokuments ein. Sie ist hauptsächlich für benutzerdefinierte Stylesheets konzipiert (siehe [userchrome.org](https://www.userchrome.org/) für weitere Informationen), kann aber auch in autordefinierten Stylesheets verwendet werden.

## Syntax

```css
@document url("https://www.example.com/")
{
  h1 {
    color: green;
  }
}
```

Eine `@document`-Regel kann eine oder mehrere passende Funktionen spezifizieren. Wenn eine der Funktionen auf eine gegebene URL zutrifft, wird die Regel auf diese URL angewendet. Die verfügbaren Funktionen sind:

- `url()`
  - : Passt zu einer exakten URL.
- `url-prefix()`
  - : Passt, wenn die Dokument-URL mit dem angegebenen Wert beginnt.
- `domain()`
  - : Passt, wenn die Dokument-URL auf der angegebenen Domain (oder einer Subdomain davon) liegt.
- `media-document()`
  - : Passt die Medien gemäß dem String im Parameter an, einer von `video`, `image`, `plugin` oder `all`.
- `regexp()`
  - : Passt, wenn die Dokument-URL durch den angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) übereinstimmt. Der Ausdruck muss die gesamte URL abgleichen.

Die in den Funktionen `url()`, `url-prefix()`, `domain()` und `media-document()` angegebenen Werte können optional in einfache oder doppelte Anführungszeichen eingeschlossen werden. Die an die `regexp()`-Funktion übergebenen Werte _müssen_ in Anführungszeichen eingeschlossen sein.

Escape-Werte, die an die `regexp()`-Funktion übergeben werden, müssen zusätzlich aus dem CSS herausgefluchtet werden. Zum Beispiel: Ein `.` (Punkt) entspricht jedem Zeichen in regulären Ausdrücken. Um einen tatsächlichen Punkt abzugleichen, müssten Sie ihn zuerst mit regulären Ausdrücken regeln (zu `\.`), dann diesen String mit CSS-Regeln (zu `\\.`) escapen.

`@document` wird derzeit nur von Firefox unterstützt; wenn Sie versuchen möchten, eine solche Funktionalität in Ihrem eigenen Nicht-Firefox-Browser zu replizieren, könnten Sie [dieses Polyfill](https://github.com/An-Error94/Handy-Scripts/tree/master/%40document-polyfill) von @An-Error94 verwenden, das eine Kombination aus einem Benutzerskript, [data-\* Attributen](/de/docs/Web/HTML/Reference/Global_attributes/data-*) und [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) verwendet.

> [!NOTE]
> Es gibt eine -moz-Präfix-Version dieser Eigenschaft — `@-moz-document`. Diese wurde auf die Verwendung nur in Benutzer- und UA-Stylesheets in Firefox 59 in Nightly und Beta beschränkt — ein Experiment, das darauf abzielt, potenzielle CSS-Injektionsangriffe zu mildern (Siehe [Firefox Bug 1035091](https://bugzil.la/1035091)).

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

[Ursprünglich](https://www.w3.org/TR/2012/WD-css3-conditional-20120911/#at-document) in Level 3, wurde `@document` auf Level 4 [verschoben](https://www.w3.org/TR/2012/WD-css3-conditional-20121213/#changes), jedoch anschließend entfernt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Regeln für benutzerspezifische Stylesheets pro Seite](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135) auf der www-style Mailingliste.
