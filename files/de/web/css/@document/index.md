---
title: "@document"
slug: Web/CSS/@document
l10n:
  sourceCommit: a3fa3aa839515195aca021ec7a8371863eb5fd67
---

{{CSSRef}}{{Deprecated_header}}{{Non-standard_header}}

Die **`@document`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/At-rule) beschränkt die darin enthaltenen Stilregeln basierend auf der URL des Dokuments. Sie ist in erster Linie für vom Benutzer definierte Stylesheets konzipiert (siehe [userchrome.org](https://www.userchrome.org/) für weitere Informationen), kann jedoch auch in vom Autor definierten Stylesheets verwendet werden.

```css
@document url("https://www.example.com/")
{
  h1 {
    color: green;
  }
}
```

## Syntax

Eine `@document`-Regel kann eine oder mehrere passende Funktionen spezifizieren. Wenn eine der Funktionen auf eine gegebene URL zutrifft, wirkt die Regel auf diese URL. Die verfügbaren Funktionen sind:

- `url()`
  - : Passt zu einer exakten URL.
- `url-prefix()`
  - : Passt, wenn die Dokument-URL mit dem angegebenen Wert beginnt.
- `domain()`
  - : Passt, wenn die Dokument-URL auf der angegebenen Domain (oder einer Subdomain davon) liegt.
- `media-document()`
  - : Passt das Medium entsprechend dem Parameterwert, einer von `video`, `image`, `plugin` oder `all`.
- `regexp()`
  - : Passt, wenn die Dokument-URL mit dem angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) übereinstimmt. Der Ausdruck muss die gesamte URL abdecken.

Die an die Funktionen `url()`, `url-prefix()`, `domain()` und `media-document()` übergebenen Werte können optional in Einzel- oder Doppelte Anführungszeichen eingeschlossen werden. Die an die Funktion `regexp()` übergebenen Werte _müssen_ in Anführungszeichen eingeschlossen sein.

Entkommene Werte, die an die Funktion `regexp()` übergeben werden, müssen zusätzlich aus dem CSS entkommen werden. Zum Beispiel passt ein `.` (Punkt) in regulären Ausdrücken zu jedem Zeichen. Um einen Punkt wörtlich zu erfassen, müssten Sie ihn zunächst mit regulären Ausdruckregeln entkommen (zu `\.`) und dann diesen String mit CSS-Regeln entkommen (zu `\\.`).

`@document` wird derzeit nur in Firefox unterstützt; wenn Sie diese Funktionalität in Ihrem eigenen Nicht-Firefox-Browser replizieren möchten, könnten Sie versuchen, [diesen Polyfill](https://github.com/An-Error94/Handy-Scripts/tree/master/%40document-polyfill) von @An-Error94 zu verwenden, der eine Kombination aus einem Benutzerskript, [data-\* Attributen](/de/docs/Web/HTML/Global_attributes/data-*) und [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) verwendet.

> [!NOTE]
> Es gibt eine moz-präfixierte Version dieser Eigenschaft — `@-moz-document`. Diese wurde in Firefox 59 in Nightly und Beta auf die Verwendung in Benutzer- und UA-Blättern beschränkt — ein Experiment, das dazu gedacht ist, potenzielle CSS-Injektionsangriffe zu entschärfen (siehe [Firefox-Bug 1035091](https://bugzil.la/1035091)).

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

[Ursprünglich](https://www.w3.org/TR/2012/WD-css3-conditional-20120911/#at-document) in Level 3, wurde `@document` auf Level 4 [verschoben](https://www.w3.org/TR/2012/WD-css3-conditional-20121213/#changes), dann jedoch anschließend entfernt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Regeln für benutzerdefinierte Stylesheets pro Seite](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135) in der www-style-Mailingliste.
