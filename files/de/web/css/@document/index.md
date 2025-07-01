---
title: "@document"
slug: Web/CSS/@document
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

{{CSSRef}}{{Deprecated_header}}{{Non-standard_header}}

Die **`@document`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) schränkt die darin enthaltenen Stilregeln basierend auf der URL des Dokuments ein. Sie ist in erster Linie für benutzerdefinierte Stylesheets gedacht (siehe [userchrome.org](https://www.userchrome.org/) für weitere Informationen), kann aber auch in autorendefinierten Stylesheets verwendet werden.

## Syntax

```css
@document url("https://www.example.com/")
{
  h1 {
    color: green;
  }
}
```

Eine `@document`-Regel kann eine oder mehrere passende Funktionen angeben. Wenn eine der Funktionen auf eine bestimmte URL zutrifft, wird die Regel auf diese URL angewendet. Die verfügbaren Funktionen sind:

- `url()`
  - : Passt auf eine genaue URL.
- `url-prefix()`
  - : Passt, wenn die Dokument-URL mit dem angegebenen Wert beginnt.
- `domain()`
  - : Passt, wenn die Dokument-URL auf der angegebenen Domain (oder einer Subdomain davon) liegt.
- `media-document()`
  - : Passt die Medien entsprechend der Zeichenkette im Parameter an, eine von `video`, `image`, `plugin` oder `all`.
- `regexp()`
  - : Passt, wenn die Dokument-URL mit dem angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) übereinstimmt. Der Ausdruck muss mit der gesamten URL übereinstimmen.

Die Werte, die den Funktionen `url()`, `url-prefix()`, `domain()` und `media-document()` übergeben werden, können optional in einfache oder doppelte Anführungszeichen eingeschlossen werden. Die den `regexp()`-Funktionen übergebenen Werte _müssen_ in Anführungszeichen eingeschlossen werden.

Escape-Werte, die an die `regexp()`-Funktion übergeben werden, müssen zusätzlich aus dem CSS entkommen. Beispielsweise stimmt ein `.` (Punkt) in regulären Ausdrücken mit jedem Zeichen überein. Um einen tatsächlichen Punkt zu finden, müssten Sie ihn zunächst mit regulären Ausdruckregeln entkommen (zu `\.`), dann diesen Zeichenfolge mit CSS-Regeln entkommen (zu `\\.`).

`@document` wird derzeit nur in Firefox unterstützt; wenn Sie ähnliche Funktionen in einem anderen Browser als Firefox nachbilden möchten, können Sie versuchen, [dieses Polyfill](https://github.com/An-Error94/Handy-Scripts/tree/master/%40document-polyfill) von @An-Error94 zu verwenden, das eine Kombination aus einem Benutzer-Skript, [data-\* Attributen](/de/docs/Web/HTML/Reference/Global_attributes/data-*), und [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) verwendet.

> [!NOTE]
> Es gibt eine -moz-präfixierte Version dieses Eigenschafts — `@-moz-document`. Diese wurde auf die Verwendung nur in Benutzer- und UA-Sheets in Firefox 59 in Nightly und Beta beschränkt – ein Experiment, um potenzielle CSS-Injektionsangriffe zu mildern (siehe [Firefox bug 1035091](https://bugzil.la/1035091)).

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

[Ursprünglich](https://www.w3.org/TR/2012/WD-css3-conditional-20120911/#at-document) in Level 3, wurde `@document` auf Level 4 [verschoben](https://www.w3.org/TR/2012/WD-css3-conditional-20121213/#changes), aber dann anschließend entfernt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Regeln für benutzerdefinierte Stylesheets pro Seite](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135) in der www-style-Mailingliste.
