---
title: "`@document` CSS at-rule"
short-title: "@document"
slug: Web/CSS/Reference/At-rules/@document
l10n:
  sourceCommit: e328268bb418551ab451881845881b5837c9da83
---

{{Deprecated_header}}{{Non-standard_header}}

Die **`@document`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) schränkt die darin enthaltenen Stilregeln basierend auf der URL des Dokuments ein. Sie ist primär für benutzerdefinierte Stylesheets vorgesehen (siehe [userchrome.org](https://www.userchrome.org/) für mehr Informationen), kann jedoch auch in autoren-definierten Stylesheets verwendet werden.

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
  - : Passt zu einer genauen URL.
- `url-prefix()`
  - : Passt, wenn die Dokument-URL mit dem angegebenen Wert beginnt.
- `domain()`
  - : Passt, wenn die Dokument-URL auf der angegebenen Domäne (oder einer Subdomäne davon) ist.
- `media-document()`
  - : Passt das Medium entsprechend der Zeichenkette im Parameter an, eine von `video`, `image`, `plugin` oder `all`.
- `regexp()`
  - : Passt, wenn die Dokument-URL durch den angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) übereinstimmt. Der Ausdruck muss mit der gesamten URL übereinstimmen.

Die Werte, die den Funktionen `url()`, `url-prefix()`, `domain()` und `media-document()` übergeben werden, können optional in Einzel- oder Doppelkoten eingeschlossen werden. Die Werte für die Funktion `regexp()` _müssen_ in Anführungszeichen eingeschlossen werden.

Escape-Werte, die der Funktion `regexp()` übergeben werden, müssen zusätzlich vor dem CSS escaped werden. Zum Beispiel passt ein `.` (Punkt) in regulären Ausdrücken auf jedes Zeichen. Um einen tatsächlichen Punkt zu matchen, müssen Sie ihn zuerst nach den Regeln für reguläre Ausdrücke escapen (zu `\.`) und dann diese Zeichenfolge nach CSS-Regeln escapen (zu `\\.`).

`@document` wird derzeit nur in Firefox unterstützt; wenn Sie diese Funktionalität in Ihrem eigenen Nicht-Firefox-Browser nachbilden möchten, können Sie versuchen, [diesen Polyfill](https://github.com/An-Error94/Handy-Scripts/tree/master/%40document-polyfill) von @An-Error94 zu verwenden, der eine Kombination aus einem Benutzer-Skript, [data-\* Attributen](/de/docs/Web/HTML/Reference/Global_attributes/data-*), und [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) nutzt.

> [!NOTE]
> Es gibt eine -moz-geprefixten Version dieser Eigenschaft — `@-moz-document`. Diese wurde in Firefox 59 in Nightly und Beta auf die Verwendung nur in Benutzer- und UA-Stylesheets beschränkt - ein Experiment, das entwickelt wurde, um potenzielle CSS-Injektionsangriffe zu mildern (siehe [Firefox-Bug 1035091](https://bugzil.la/1035091)).

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

### Spezifizierung eines Dokuments für CSS-Regel

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

`@document` wurde [ursprünglich](https://www.w3.org/TR/2012/WD-css3-conditional-20120911/#at-document) in Stufe 3 eingeführt, wurde jedoch [verschoben](https://www.w3.org/TR/2012/WD-css3-conditional-20121213/#changes) auf Stufe 4 und anschließend entfernt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Seitenbezogene Benutzerstylesheet-Regeln](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135) auf der www-style Mailingliste.
