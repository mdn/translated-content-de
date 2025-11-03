---
title: "@document"
slug: Web/CSS/@document
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Deprecated_header}}{{Non-standard_header}}

Die **`@document`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) beschränkt die darin enthaltenen Stilregeln basierend auf der URL des Dokuments. Sie wurde hauptsächlich für benutzerdefinierte Stylesheets entworfen (siehe [userchrome.org](https://www.userchrome.org/) für weitere Informationen), kann aber auch in autorendefinierten Stylesheets verwendet werden.

## Syntax

```css
@document url("https://www.example.com/")
{
  h1 {
    color: green;
  }
}
```

Eine `@document`-Regel kann eine oder mehrere Übereinstimmungsfunktionen spezifizieren. Wenn eine der Funktionen auf eine gegebene URL zutrifft, wird die Regel auf diese URL angewendet. Die verfügbaren Funktionen sind:

- `url()`
  - : Passt zu einer exakten URL.
- `url-prefix()`
  - : Passt, wenn die Dokument-URL mit dem angegebenen Wert beginnt.
- `domain()`
  - : Passt, wenn die Dokument-URL auf der angegebenen Domain (oder einer Subdomain davon) ist.
- `media-document()`
  - : Passt das Medium gemäß dem Parameterstring, einer von `video`, `image`, `plugin` oder `all`.
- `regexp()`
  - : Passt, wenn die Dokument-URL von dem angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) übereinstimmt. Der Ausdruck muss die gesamte URL abgleichen.

Die Werte, die den Funktionen `url()`, `url-prefix()`, `domain()`, und `media-document()` übergeben werden, können optional mit einfachen oder doppelten Anführungszeichen eingeschlossen werden. Die Werte, die der Funktion `regexp()` übergeben werden, _müssen_ in Anführungszeichen eingeschlossen sein.

Escape-Werte, die der Funktion `regexp()` übergeben werden, müssen zusätzlich für das CSS escaped werden. Zum Beispiel steht ein Punkt `.` für ein beliebiges Zeichen in regulären Ausdrücken. Um einen Punkt buchstäblich abzubilden, müssten Sie ihn zuerst gemäß den Regeln für reguläre Ausdrücke escapen (zu `\.`), und dann diesen String gemäß den CSS-Regeln escapen (zu `\\.`).

`@document` wird derzeit nur in Firefox unterstützt; wenn Sie eine solche Funktionalität in Ihrem nicht-Firefox-Browser nachbilden möchten, könnten Sie versuchen, [dieses Polyfill](https://github.com/An-Error94/Handy-Scripts/tree/master/%40document-polyfill) von @An-Error94 zu verwenden, das eine Kombination aus einem Benutzerskript, [data-\* Attributen](/de/docs/Web/HTML/Reference/Global_attributes/data-*), und [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) verwendet.

> [!NOTE]
> Es gibt eine -moz-präfixierte Version dieser Eigenschaft — `@-moz-document`. Diese wurde auf die Verwendung nur in Benutzer- und UA-Blättern in Firefox 59 in Nightly und Beta beschränkt — ein Experiment, das dazu gedacht war, potenzielle CSS-Injektionsangriffe zu mildern (siehe [Firefox Bug 1035091](https://bugzil.la/1035091)).

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

Anfangs in Level 3 [entworfen](https://www.w3.org/TR/2012/WD-css3-conditional-20120911/#at-document), wurde `@document` auf Level 4 [verschoben](https://www.w3.org/TR/2012/WD-css3-conditional-20121213/#changes), aber dann anschließend entfernt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Regeln für benutzerdefinierte Stylesheets pro Seite](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135) auf der www-style Mailingliste.
