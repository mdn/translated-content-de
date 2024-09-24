---
title: "@document"
slug: Web/CSS/@document
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}{{Deprecated_header}}{{Non-standard_header}}

Die **`@document`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/At-rule) schränkt die darin enthaltenen Stilregeln basierend auf der URL des Dokuments ein. Sie ist hauptsächlich für benutzerdefinierte Stylesheets konzipiert, kann jedoch auch in autorendefinierten Stylesheets verwendet werden.

```css
@document url("https://www.example.com/")
{
  h1 {
    color: green;
  }
}
```

## Syntax

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
  - : Passt, wenn die Dokument-URL mit dem angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) übereinstimmt. Der Ausdruck muss mit der gesamten URL übereinstimmen.

Die an die Funktionen `url()`, `url-prefix()`, `domain()` und `media-document()` übergebenen Werte können optional in einfachen oder doppelten Anführungszeichen eingeschlossen werden. Die an die Funktion `regexp()` übergebenen Werte _müssen_ in Anführungszeichen eingeschlossen werden.

Entkommene Werte, die an die Funktion `regexp()` übergeben werden, müssen zusätzlich aus dem CSS entkommen werden. Zum Beispiel, ein `.` (Punkt) passt auf jedes Zeichen in regulären Ausdrücken. Um einen literalen Punkt zu matchen, müssten Sie ihn zuerst mit regulären Ausdrucksregeln entkommen (zu `\.`), dann diesen String mit CSS-Regeln entkommen (zu `\\.`).

`@document` wird derzeit nur in Firefox unterstützt; wenn Sie versuchen möchten, eine solche Funktionalität in Ihrem eigenen Nicht-Firefox-Browser zu replizieren, könnten Sie versuchen, [diese Polyfill](https://github.com/An-Error94/Handy-Scripts/tree/master/%40document-polyfill) von @An-Error94 zu verwenden, die eine Kombination aus einem Benutzer-Script, [data-\* Attributen](/de/docs/Web/HTML/Global_attributes/data-*), und [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) verwendet.

> [!NOTE]
> Es gibt eine -moz-Präfixversion dieser Eigenschaft — `@-moz-document`. Diese wurde in Firefox 59 in Nightly und Beta darauf beschränkt, nur in Benutzer- und UA-Stilen verwendet zu werden – ein Experiment, um potenzielle CSS-Injektionen zu mildern (Siehe [Firefox Bug 1035091](https://bugzil.la/1035091)).

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
  /* CSS-Regeln hier gelten für:
     - Die Seite "http://www.w3.org/"
     - Jede Seite, deren URL mit "http://www.w3.org/Style/" beginnt
     - Jede Seite, deren URL-Host "mozilla.org" ist
       oder mit ".mozilla.org" endet
     - Jedes eigenständige Video
     - Jede Seite, deren URL mit "https:" beginnt */

  /* Machen Sie die oben genannten Seiten wirklich hässlich */
  body {
    color: purple;
    background: yellow;
  }
}
```

## Spezifikationen

[Ursprünglich](https://www.w3.org/TR/2012/WD-css3-conditional-20120911/#at-document) in Level 3 wurde `@document` [verschoben](https://www.w3.org/TR/2012/WD-css3-conditional-20121213/#changes) zu Level 4, aber dann anschließend entfernt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Per-site user style sheet rules](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135) auf der www-style-Mailingliste.
