---
title: "@document"
slug: Web/CSS/@document
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}{{Deprecated_header}}{{Non-standard_header}}

Die **`@document`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) beschränkt die darin enthaltenen Stilregeln basierend auf der URL des Dokuments. Sie ist in erster Linie für benutzerdefinierte Stylesheets gedacht, kann aber auch in autordefinierten Stylesheets verwendet werden.

```css
@document url("https://www.example.com/")
{
  h1 {
    color: green;
  }
}
```

## Syntax

Eine `@document`-Regel kann eine oder mehrere passende Funktionen angeben. Wenn eine der Funktionen auf eine gegebene URL zutrifft, wird die Regel auf diese URL angewendet. Die verfügbaren Funktionen sind:

- `url()`
  - : Passt auf eine genaue URL.
- `url-prefix()`
  - : Passt, wenn die Dokument-URL mit dem angegebenen Wert beginnt.
- `domain()`
  - : Passt, wenn die Dokument-URL auf der angegebenen Domain (oder einer Subdomain davon) liegt.
- `media-document()`
  - : Passt auf Medien gemäß der im Parameter angegebenen Zeichenfolge, eines von `video`, `image`, `plugin` oder `all`.
- `regexp()`
  - : Passt, wenn die Dokument-URL mit dem angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) übereinstimmt. Der Ausdruck muss die gesamte URL abdecken.

Die zu den Funktionen `url()`, `url-prefix()`, `domain()` und `media-document()` gegebenen Werte können optional in einfachen oder doppelten Anführungszeichen stehen. Die zu der Funktion `regexp()` gegebenen Werte _müssen_ in Anführungszeichen stehen.

Escape-Werte, die der Funktion `regexp()` gegeben werden, müssen zusätzlich aus dem CSS heraus escapen werden. Beispielsweise entspricht ein `.` (Punkt) in regulären Ausdrücken jedem Zeichen. Um einem tatsächlichen Punkt zu entsprechen, müssten Sie ihn zunächst gemäß den Regeln der regulären Ausdrücke escapen (zu `\.`) und dann diesen String gemäß den CSS-Regeln escapen (zu `\\.`).

`@document` wird derzeit nur in Firefox unterstützt; wenn Sie versuchen möchten, eine solche Funktionalität in Ihrem nicht-Firefox-Browser zu replizieren, können Sie [dieses Polyfill](https://github.com/An-Error94/Handy-Scripts/tree/master/%40document-polyfill) von @An-Error94 verwenden, das eine Kombination aus einem Nutzer-Skript, [data-\* Attributen](/de/docs/Web/HTML/Global_attributes/data-*), und [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) verwendet.

> [!NOTE]
> Es gibt eine -moz-präfixierte Version dieser Eigenschaft — `@-moz-document`. Diese wurde in Firefox 59 auf Nightly und Beta darauf beschränkt, nur in Benutzer- und UA-Sheets verwendet zu werden — ein Experiment, das darauf abzielt, potenzielle CSS-Injektionsangriffe abzuschwächen (siehe [Firefox Fehler 1035091](https://bugzil.la/1035091)).

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

### Dokument für CSS-Regel angeben

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

[Ursprünglich](https://www.w3.org/TR/2012/WD-css3-conditional-20120911/#at-document) in Level 3 vorgesehen, wurde `@document` [verschoben](https://www.w3.org/TR/2012/WD-css3-conditional-20121213/#changes) auf Level 4, aber dann letztendlich entfernt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Regeln für benutzerdefinierte Stylesheets pro Website](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135) in der www-style Mailing-Liste.
