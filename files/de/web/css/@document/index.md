---
title: "@document"
slug: Web/CSS/@document
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}{{Deprecated_header}}{{Non-standard_header}}

Die **`@document`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/At-rule) schränkt die darin enthaltenen Stilregeln basierend auf der URL des Dokuments ein. Sie wurde hauptsächlich für benutzerdefinierte Stylesheets entwickelt, kann jedoch auch in autorenspezifischen Stylesheets verwendet werden.

```css
@document url("https://www.example.com/")
{
  h1 {
    color: green;
  }
}
```

## Syntax

Eine `@document`-Regel kann eine oder mehrere übereinstimmende Funktionen spezifizieren. Wenn eine der Funktionen auf eine gegebene URL zutrifft, wird die Regel für diese URL wirksam. Die verfügbaren Funktionen sind:

- `url()`
  - : Passt auf eine genaue URL.
- `url-prefix()`
  - : Passt, wenn die Dokument-URL mit dem angegebenen Wert beginnt.
- `domain()`
  - : Passt, wenn die Dokument-URL auf der angegebenen Domain (oder einer Subdomain davon) liegt.
- `media-document()`
  - : Passt die Medien gemäß dem im Parameter angegebenen String, einer von `video`, `image`, `plugin` oder `all`.
- `regexp()`
  - : Passt, wenn die Dokument-URL mit dem angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) übereinstimmt. Der Ausdruck muss mit der gesamten URL übereinstimmen.

Die Werte, die den Funktionen `url()`, `url-prefix()`, `domain()` und `media-document()` übergeben werden, können optional von einfachen oder doppelten Anführungszeichen umschlossen werden. Die Werte, die der Funktion `regexp()` übergeben werden, _müssen_ in Anführungszeichen gesetzt sein.

Escape-Zeichen, die der Funktion `regexp()` übergeben werden, müssen zusätzlich aus dem CSS heraus entzogen werden. Beispielsweise entspricht ein `.` (Punkt) in regulären Ausdrücken jedem Zeichen. Um einen tatsächlichen Punkt zu matchen, müssen Sie ihn zuerst mit den Regeln für reguläre Ausdrücke entziehen (zu `\.`) und dann diesen String mit CSS-Regeln entziehen (zu `\\.`).

`@document` wird derzeit nur in Firefox unterstützt; wenn Sie versuchen möchten, diese Funktionalität in Ihrem eigenen Nicht-Firefox-Browser zu replizieren, könnten Sie [dieses Polyfill](https://github.com/An-Error94/Handy-Scripts/tree/master/%40document-polyfill) von @An-Error94 verwenden, das eine Kombination aus einem Benutzerskript, [data-\* Attributen](/de/docs/Web/HTML/Global_attributes/data-*) und [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) nutzt.

> [!NOTE]
> Es gibt eine -moz-präfixierte Version dieser Eigenschaft — `@-moz-document`. Diese wurde in Firefox 59 in Nightly und Beta auf die Verwendung in Benutzer- und UA-Sheets beschränkt — ein Experiment, das darauf abzielt, potenzielle CSS-Injektionsangriffe zu entschärfen (Siehe [Firefox bug 1035091](https://bugzil.la/1035091)).

## Formal syntax

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

### Spezifizierung eines Dokuments für eine CSS-Regel

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

[Ursprünglich](https://www.w3.org/TR/2012/WD-css3-conditional-20120911/#at-document) in Level 3, wurde `@document` zu Level 4 [verschoben](https://www.w3.org/TR/2012/WD-css3-conditional-20121213/#changes), jedoch anschließend entfernt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Regeln für benutzerdefinierte Stylesheets pro Website](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135) auf der www-style-Mailingliste.
