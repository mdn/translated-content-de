---
title: "@document"
slug: Web/CSS/Reference/At-rules/@document
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{Deprecated_header}}{{Non-standard_header}}

Die **`@document`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules) schränkt die darin enthaltenen Stilregeln basierend auf der URL des Dokuments ein. Sie ist hauptsächlich für benutzerdefinierte Stylesheets vorgesehen (siehe [userchrome.org](https://www.userchrome.org/) für weitere Informationen), kann jedoch auch in autor-definierten Stylesheets verwendet werden.

## Syntax

```css
@document url("https://www.example.com/")
{
  h1 {
    color: green;
  }
}
```

Eine `@document`-Regel kann eine oder mehrere übereinstimmende Funktionen angeben. Wenn eine der Funktionen auf eine bestimmte URL zutrifft, wird die Regel auf diese URL angewendet. Die verfügbaren Funktionen sind:

- `url()`
  - : Passt auf eine exakte URL.
- `url-prefix()`
  - : Passt, wenn die Dokument-URL mit dem angegebenen Wert beginnt.
- `domain()`
  - : Passt, wenn die Dokument-URL auf der angegebenen Domain (oder einer Subdomain davon) liegt.
- `media-document()`
  - : Passt das Medium gemäß dem im Parameter angegebenen String an, eines von `video`, `image`, `plugin` oder `all`.
- `regexp()`
  - : Passt, wenn die Dokument-URL mit dem angegebenen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) übereinstimmt. Der Ausdruck muss die gesamte URL abdecken.

Die Werte, die den Funktionen `url()`, `url-prefix()`, `domain()` und `media-document()` übergeben werden, können optional in einfache oder doppelte Anführungszeichen eingeschlossen werden. Die Werte, die der Funktion `regexp()` übergeben werden, _müssen_ in Anführungszeichen eingeschlossen werden.

Escape-Zeichen in den der Funktion `regexp()` übergebenen Werten müssen zusätzlich im CSS escaped werden. Zum Beispiel ein `.` (Punkt) passt in regulären Ausdrücken auf jedes Zeichen. Um einen tatsächlichen Punkt zu erfassen, muss man ihn zunächst gemäß den Regeln für reguläre Ausdrücke escapen (zu `\.`) und dann diesen String gemäß den CSS-Regeln escapen (zu `\\.`).

`@document` wird derzeit nur in Firefox unterstützt. Wenn Sie eine ähnliche Funktionalität in Ihrem eigenen Nicht-Firefox-Browser replizieren möchten, könnten Sie versuchen, [dieses Polyfill](https://github.com/An-Error94/Handy-Scripts/tree/master/%40document-polyfill) von @An-Error94 zu verwenden, das eine Kombination aus einem Benutzerskript, [data-\* Attributen](/de/docs/Web/HTML/Reference/Global_attributes/data-*), und [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) nutzt.

> [!NOTE]
> Es gibt eine -moz-vorangestellte Version dieser Eigenschaft — `@-moz-document`. Dies wurde in Firefox 59 experimentell auf die Verwendung nur in Benutzer- und UA-Blättern in Nightly und Beta beschränkt, um potenzielle CSS-Injection-Angriffe zu mindern (Siehe [Firefox-Bug 1035091](https://bugzil.la/1035091)).

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

Ursprünglich in [Level 3](https://www.w3.org/TR/2012/WD-css3-conditional-20120911/#at-document) eingeführt, wurde `@document` [aufgeschoben](https://www.w3.org/TR/2012/WD-css3-conditional-20121213/#changes) in Level 4 und dann anschließend entfernt.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Benutzerdefinierte Stylesheet-Regeln pro Seite](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135) auf der www-style-Mailingliste.
