---
title: "`@custom-media` CSS at-rule"
short-title: "@custom-media"
slug: Web/CSS/Reference/At-rules/@custom-media
l10n:
  sourceCommit: 6b0dc010f6c32a23b54aef95094cee9ec0e1b7b5
---

{{SeeCompatTable}}

Die **`@custom-media`** CSS-[Regel](/de/docs/Web/CSS/Reference/At-rules) definiert Aliase für lange oder komplexe [Media Queries](/de/docs/Web/CSS/Guides/Media_queries). Anstatt in mehreren {{cssxref("@media")}}-Regeln dieselbe fest kodierte `<media-query-list>` zu wiederholen, kann sie einmal in einer `@custom-media`-Regel definiert und bei Bedarf im gesamten Stylesheet referenziert werden.

## Syntax

```css
@custom-media <extension-name> [<media-query-list> | true | false ];

@custom-media --media-query-name (width < 1200px);
@custom-media --media-query-name (width < 1200px), (orientation: portrait);
```

### Werte

- `<extension-name>`
  - : Ein {{cssxref("dashed-ident")}}; der Name, der die benutzerdefinierte Media Query identifiziert.
- Repräsentierter Wert
  - : Der von der benutzerdefinierten Media Query aliasierte Wert. Mögliche Werte sind:
    - `<media-query-list>`
      - : Eine kommagetrennte [Liste von `<media-query>`-Werten](/de/docs/Web/CSS/Reference/At-rules/@media#description).
    - `true`
      - : Der `@custom-media`-Wert wird immer zu `true` ausgewertet.
    - `false`
      - : Der `@custom-media`-Wert wird immer zu `false` ausgewertet.

## Beschreibung

Beim Erstellen von responsiven Interfaces muss dieselbe Media-Bedingung häufig in mehreren {{cssxref("@media")}}-Regeln wiederholt werden, manchmal in verschiedenen Dateien und Teams. Die Duplizierung von Media Queries erhöht das Fehlerpotenzial, erschwert Refactoring und schafft unnötige Wartungskosten. Jedes Mal, wenn sich eine Media Query ändert, muss jede Instanz manuell gefunden und aktualisiert werden — ein Prozess, der in großen Codebasen anfällig für Fehler sein und schwer nachzuverfolgen sein kann.

Die `@custom-media`-Regel löst dieses Problem, indem Sie die Möglichkeit bietet, **benannte Aliase** für Media Queries zu definieren. Anstatt die vollständige Media Query überall zu wiederholen, deklarieren Sie die Media-Bedingung einmal als benutzerdefinierte Media Query und referenzieren deren Alias in Ihren Stylesheets. Mit dieser Einrichtung erfordert das Aktualisieren der zugrunde liegenden Media Query nur eine einzige Änderung an einem Ort.

Benutzerdefinierte Media Queries können aus anderen zusammengesetzt werden, indem ihre Aliasnamen innerhalb der Media-Bedingungsmerkmale referenziert werden. Dies ermöglicht den Aufbau von ausdrucksstärkeren, mehrschichtigen Bedingungen. Eine benutzerdefinierte Media Query kann jedoch nicht auf sich selbst verweisen, noch kann sie Teil einer zirkulären Referenzkette sein. Jede zirkuläre Abhängigkeit — direkt oder indirekt — macht alle an dieser Schleife beteiligten benutzerdefinierten Media Queries ungültig.

Wenn mehrere `@custom-media`-Regeln denselben `<dashed-ident>`-Namen definieren, wird die Regel verwendet, die im Geltungsbereich ist, wenn eine `@media`-Regel ausgewertet wird. Frühere Referenzen werden nicht rückwirkend aktualisiert, wenn später eine `@custom-media`-Regel deklariert wird.

### Auswertung von Media Queries mit logischen Operatoren

Benutzerdefinierte Media Queries akzeptieren das vollständige Spektrum an logischen CSS-Operatoren — `not`, `and` und `or` (kommagetrennt oder unter Verwendung des `or`-Schlüsselworts).

Da ein `@custom-media`-Wert nur eine normale `<media-query-list>` ist, können Sie Bedingungen kombinieren, umkehren oder gruppieren, genau wie Sie es in einer regulären `@media`-Regel tun würden.

#### Verwendung des `not`-Operators

Der `not`-Operator negiert eine komplette Media-Bedingung. Dies ist nützlich, wenn Sie möchten, dass eine Regel nur angewendet wird, wenn eine bestimmte Bedingung `false` ist.

```css
@custom-media --no-script not (scripting);

@media (--no-script) {
}
```

#### Verwendung des `and`-Operators

Der `and`-Operator ermöglicht es Ihnen, mehrere Bedingungen zu kombinieren, die alle `true` sein müssen.

```css
@custom-media --medium-screen (min-width: 40em) and (max-width: 60em);

@media (--medium-screen) {
}
```

Dieser Alias trifft nur zu, wenn das Ansichtsfenster innerhalb des angegebenen Breitenbereichs liegt.

#### Verwendung des `or`-Operators

Der logische `or`-Operator (oder sein Komma-Alias, wenn Medientypen kombiniert werden) erstellt eine Media Query, die zutrifft, wenn eine der aufgelisteten Bedingungen `true` ist.

```css
@custom-media --screen-or-print screen, print;
@custom-media --narrow-or-tall (width < 600px) or (height > 800px);

@media (--screen-or-print) {
}

@media (--narrow-or-tall) {
}
```

Der `--screen-or-print`-Alias verwendet ein Komma, um entweder den `screen`- oder `print`-Medientyp zu entsprechen. Der `--narrow-or-tall`-Alias verwendet das `or`-Schlüsselwort, um zwei Media-Features zu kombinieren, die zutreffen, wenn das Ansichtsfenster schmaler als 600px, höher als 800px oder beides ist.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aktualisierung mehrerer Media Queries

In diesem Beispiel wird die `@custom-media`-Regel auf einer responsiven Website verwendet, die einen bestimmten Breakpoint an mehreren Stellen nutzt:

```css
@custom-media --narrow-window (width < 32em);

@media (--narrow-window) {
}

@media (--narrow-window) and (hover) {
}

@media (--narrow-window) and (orientation: portrait) {
}
```

Wenn der Breakpoint geändert werden muss, kann er an einem Ort aktualisiert werden, um alle abhängigen Media Queries auf der gesamten Website anzupassen.

### Gruppierung mehrerer responsiver Breakpoints

Hier wird die `@custom-media`-Regel verwendet, um mehrere Breakpoints an einem Ort festzulegen, was die Wartbarkeit verbessert und das Management des responsiven Designs über mehrere Stylesheets hinweg vereinfacht:

```css
/* general.css */

@custom-media --mobile-screen (width < 480px);
@custom-media --tablet-screen (width < 768px);
@custom-media --laptop-screen (width < 1024px);
@custom-media --desktop-screen (width < 1440px);
@custom-media --widescreen (width > 1441px);
```

```css
/* layout.css */

.container {
  padding: 1rem;
}

@media (--mobile-screen) {
  .container {
    padding: 0.5rem;
  }
}

@media (--laptop-screen) {
  .container {
    max-width: 1200px;
  }
}

@media (--widescreen) {
  .container {
    max-width: 1400px;
    padding: 2rem;
  }
}
```

```css
/* typography.css */

@media (--tablet-screen) {
  .container {
    font-size: 0.9rem;
  }
}

@media (--laptop-screen) {
  .container {
    font-size: 1rem;
  }
}

@media (--widescreen) {
  .container {
    font-size: 1.1rem;
  }
}
```

Die Gruppierung aller Breakpoints an einem einzigen Ort erleichtert die Wartung des responsiven Designs. Wenn ein Breakpoint angepasst werden muss, erfordert es nur eine einzelne Aktualisierung der zugehörigen `@custom-media`-Definition und stellt die Konsistenz über alle Stylesheets hinweg sicher.

### Verwendung von `true`- und `false`-Schlüsselwörtern

Das folgende Beispiel zeigt, wie die `true`- und `false`-Schlüsselwörter mit `@custom-media` verwendet werden können, um Media Queries zu erstellen, die immer oder nie zutreffen.

```css
@custom-media --enabled true;
@custom-media --disabled false;

@media (--enabled) {
  /* These styles always apply */
  body {
    background-color: blue;
  }
}

@media (--disabled) {
  /* These styles never apply */
  body {
    background-color: red;
  }
}
```

Dies kann bei Feature-Flags oder bedingter Logik innerhalb von Stylesheets nützlich sein.

### Überschreiben bestehender `@custom-media`-Regeln

In diesem Beispiel wird eine `@custom-media`-Regel von einer anderen `@custom-media`-Regel mit demselben `<dashed-ident>`-Namen überschrieben.

```css
@custom-media --mobile-breakpoint (width < 320px);

@media (--mobile-breakpoint) {
  .container {
    grid-template-columns: 2fr 1fr;
  }
}

@custom-media --mobile-breakpoint (width < 480px);
```

Wenn mehrere `@custom-media`-Regeln denselben Namen verwenden, wird die Regel verwendet, die im Geltungsbereich ist, wenn eine `@media`-Regel ausgewertet wird. Frühere Referenzen werden nicht rückwirkend aktualisiert, wenn später eine `@custom-media`-Regel deklariert wird.

Zum Beispiel wird im obigen Code die `--mobile-breakpoint`-Referenz innerhalb der
`@media`-Regel als `(width < 320px)` ausgewertet, sodass die `.container`-Regel nur
angewendet wird, wenn das Ansichtsfenster weniger als 320px breit ist, obwohl
`--mobile-breakpoint` später im Stylesheet als `(width < 480px)` neu definiert wird.

> [!NOTE]
> Das Überschreibeverhalten von `@custom-media` wird in der CSS-Spezifikation noch diskutiert und kann sich in Zukunft ändern. Siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für den aktuellen Unterstützungsstatus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("@media")}}-Regel
- CSS {{cssxref("@import")}}-Regel
- [Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- [CSS Media Queries](/de/docs/Web/CSS/Guides/Media_queries)-Modul
