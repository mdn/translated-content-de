---
title: "@document"
slug: Web/CSS/@document
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}{{Deprecated_header}}{{Non-standard_header}}

Die **`@document`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) schränkt die darin enthaltenen Stilregeln basierend auf der URL des Dokuments ein. Sie ist primär für benutzerdefinierte Stylesheets gedacht (siehe [userchrome.org](https://www.userchrome.org/) für weitere Informationen), kann jedoch auch in autoren-definierten Stylesheets verwendet werden.

```css
@document url("https://www.example.com/")
{
  h1 {
    color: green;
  }
}
```

## Syntax

Eine `@document`-Regel kann eine oder mehrere passende Funktionen festlegen. Wenn eine der Funktionen auf eine bestimmte URL zutrifft, wird die Regel auf diese URL angewendet. Die verfügbaren Funktionen sind:

- `url()`
  - : Passt auf eine exakte URL.
- `url-prefix()`
  - : Passt, wenn die Dokument-URL mit dem angegebenen Wert beginnt.
- `domain()`
  - : Passt, wenn die Dokument-URL zu der angegebenen Domain (oder einer Subdomain davon) gehört.
- `media-document()`
  - : Passt das Medium entsprechend der im Parameter angegebenen Zeichenkette, eine der Optionen `video`, `image`, `plugin` oder `all`.
- `regexp()`
  - : Passt, wenn die Dokument-URL durch den angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) übereinstimmt. Der Ausdruck muss die gesamte URL abgleichen.

Die in den Funktionen `url()`, `url-prefix()`, `domain()` und `media-document()` bereitgestellten Werte können optional in einfache oder doppelte Anführungszeichen gesetzt werden. Die in der Funktion `regexp()` bereitgestellten Werte _müssen_ in Anführungszeichen gesetzt werden.

Escapete Werte, die der Funktion `regexp()` übergeben werden, müssen zusätzlich in der CSS-Syntax escaped werden. Ein Beispiel: Ein `.` (Punkt) passt in regulären Ausdrücken auf jedes beliebige Zeichen. Um auf einen wörtlichen Punkt zu passen, müsste er zunächst gemäß der Regeln für reguläre Ausdrücke escaped werden (zu `\.`) und anschließend gemäß der CSS-Regeln erneut escaped werden (zu `\\.`).

`@document` wird derzeit nur in Firefox unterstützt. Wenn Sie eine ähnliche Funktionalität in einem nicht-Firefox-Browser replizieren möchten, können Sie [dieses Polyfill](https://github.com/An-Error94/Handy-Scripts/tree/master/%40document-polyfill) von @An-Error94 verwenden, das eine Kombination aus einem Benutzerskript, [data-\* Attributen](/de/docs/Web/HTML/Global_attributes/data-*), und [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) nutzt.

> [!NOTE]
> Es gibt eine -moz-präfixierte Version dieser Eigenschaft — `@-moz-document`. Diese wurde ab Firefox 59 in Nightly und Beta auf die Verwendung nur in Benutzer- und UA-Stylesheets beschränkt – ein Experiment, um mögliche CSS-Injection-Angriffe zu entschärfen (siehe [Firefox-Bug 1035091](https://bugzil.la/1035091)).

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

### Dokument für CSS-Regel festlegen

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

[Zunächst](https://www.w3.org/TR/2012/WD-css3-conditional-20120911/#at-document) in Level 3 eingeführt, wurde `@document` [zurückgestellt](https://www.w3.org/TR/2012/WD-css3-conditional-20121213/#changes) auf Level 4 und dann schließlich entfernt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Regeln für benutzerdefinierte Stylesheets pro Seite](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135) in der www-style-Mailingliste.
