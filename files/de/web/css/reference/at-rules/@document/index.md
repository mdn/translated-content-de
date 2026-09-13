---
title: "`@document` CSS at-rule"
short-title: "@document"
slug: Web/CSS/Reference/At-rules/@document
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{Non-standard_header}}

Die **`@document`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) beschränkt die darin enthaltenen Stilregeln basierend auf der URL des Dokuments. Sie ist primär für benutzerdefinierte Stylesheets konzipiert (siehe [userchrome.org](https://www.userchrome.org/) für weitere Informationen), kann aber auch in von Autoren definierten Stylesheets verwendet werden.

## Syntax

```css
@document url("https://www.example.com/")
{
  h1 {
    color: green;
  }
}
```

Ein `@document`-Regel kann eine oder mehrere passende Funktionen spezifizieren. Wenn eine der Funktionen auf eine gegebene URL zutrifft, wird die Regel auf diese URL angewendet. Die verfügbaren Funktionen sind:

- `url()`
  - : Passt auf eine exakte URL.
- `url-prefix()`
  - : Passt, wenn die Dokument-URL mit dem angegebenen Wert beginnt.
- `domain()`
  - : Passt, wenn die Dokument-URL in der angegebenen Domain (oder einer Subdomain davon) liegt.
- `media-document()`
  - : Passt auf das Medium gemäß dem Parameterstring, einer von `video`, `image`, `plugin` oder `all`.
- `regexp()`
  - : Passt, wenn die Dokument-URL mit dem angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) übereinstimmt. Der Ausdruck muss der gesamten URL entsprechen.

Die an die Funktionen `url()`, `url-prefix()`, `domain()`, und `media-document()` übergebenen Werte können optional in einfachen oder doppelten Anführungszeichen eingeschlossen werden. Die an die Funktion `regexp()` übergebenen Werte _müssen_ in Anführungszeichen eingeschlossen sein.

Entkommene Werte, die der Funktion `regexp()` übergeben werden, müssen zusätzlich aus dem CSS entkommen werden. Zum Beispiel stimmt ein `.` (Punkt) in regulären Ausdrücken auf jedes Zeichen. Um einen wörtlichen Punkt zu matchen, müssten Sie ihn zuerst gemäß den Regeln der regulären Ausdrücke entkommen (`\.`), dann diesen String gemäß den CSS-Regeln entkommen (`\\.`).

`@document` wird derzeit nur von Firefox unterstützt; wenn Sie eine solche Funktionalität in Ihrem eigenen Nicht-Firefox-Browser nachahmen möchten, könnten Sie versuchen, [diesen Polyfill](https://github.com/An-Error94/Handy-Scripts/tree/master/%40document-polyfill) von @An-Error94 zu verwenden, der eine Kombination aus einem Benutzerskript, [data-\* Attributen](/de/docs/Web/HTML/Reference/Global_attributes/data-*), und [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) nutzt.

> [!NOTE]
> Es gibt eine -moz-präfixierte Version dieser Eigenschaft — `@-moz-document`. Diese wurde in Firefox 59 in Nightly und Beta auf die Nutzung nur in Benutzer- und UA-Sheets beschränkt — ein Experiment, das entwickelt wurde, um potenzielle CSS-Injektionsangriffe zu mindern (siehe [Firefox Bug 1035091](https://bugzil.la/1035091)).

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

[Zunächst](https://www.w3.org/TR/2012/WD-css3-conditional-20120911/#at-document) in Level 3, wurde `@document` [verschoben](https://www.w3.org/TR/2012/WD-css3-conditional-20121213/#changes) auf Level 4, dann jedoch schließlich entfernt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Pro-Site benutzerdefinierte Stylesheet-Regeln](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135) in der www-style-Mailingliste.
