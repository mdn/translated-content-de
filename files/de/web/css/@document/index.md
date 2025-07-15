---
title: "@document"
slug: Web/CSS/@document
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Deprecated_header}}{{Non-standard_header}}

Die **`@document`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) beschränkt die darin enthaltenen Stilregeln basierend auf der URL des Dokuments. Sie ist in erster Linie für benutzerdefinierte Stylesheets gedacht (siehe [userchrome.org](https://www.userchrome.org/) für weitere Informationen), kann jedoch auch für autorendefinierte Stylesheets verwendet werden.

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
  - : Passt, wenn die Dokument-URL auf der angegebenen Domain (oder einer Subdomain davon) ist.
- `media-document()`
  - : Passt das Medium entsprechend der Zeichenkette im Parameter, eines von `video`, `image`, `plugin` oder `all`.
- `regexp()`
  - : Passt, wenn die Dokument-URL mit dem angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) übereinstimmt. Der Ausdruck muss die gesamte URL matchen.

Die Werte, die den Funktionen `url()`, `url-prefix()`, `domain()` und `media-document()` übergeben werden, können optional in einfache oder doppelte Anführungszeichen eingeschlossen werden. Die Werte, die der Funktion `regexp()` übergeben werden, _müssen_ in Anführungszeichen eingeschlossen sein.

Escapierte Werte, die der Funktion `regexp()` übergeben werden, müssen zusätzlich aus dem CSS heraus escapiert werden. Zum Beispiel steht ein `.` (Punkt) in regulären Ausdrücken für jedes Zeichen. Um einen echten Punkt zu matchen, müssen Sie ihn zuerst mit regulären Ausdrucksregeln escapen (zu `\.`) und dann diese Zeichenfolge mit CSS-Regeln escapen (zu `\\.`).

`@document` wird derzeit nur in Firefox unterstützt; wenn Sie dieselbe Funktionalität in einem anderen Browser als Firefox replizieren möchten, könnten Sie versuchen, [diesen Polyfill](https://github.com/An-Error94/Handy-Scripts/tree/master/%40document-polyfill) von @An-Error94 zu verwenden, der eine Kombination aus einem Benutzer-Skript, [data-\* Attributen](/de/docs/Web/HTML/Reference/Global_attributes/data-*) und [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) nutzt.

> [!NOTE]
> Es gibt eine -moz-angepasste Version dieser Eigenschaft — `@-moz-document`. Diese wurde in Firefox 59 in Nightly und Beta auf die Verwendung nur in Benutzer- und UA-Sheets beschränkt — ein Experiment, das potenzielle CSS-Injection-Angriffe mindern soll. (Siehe [Firefox Bug 1035091](https://bugzil.la/1035091)).

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

- [Per-site user style sheet rules](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135) in der www-style-Mailingliste.
