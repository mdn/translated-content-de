---
title: "`@custom-media` CSS at-rule"
short-title: "@custom-media"
slug: Web/CSS/Reference/At-rules/@custom-media
l10n:
  sourceCommit: d9ed0d5c39f33dcc48cd7b5710ab59a9701bafd9
---

{{SeeCompatTable}}

Die **`@custom-media`** CSS-[At-Regel](/de/docs/Web/CSS/Reference/At-rules) definiert Aliase für lange oder komplexe [Media Queries](/de/docs/Web/CSS/Guides/Media_queries). Anstatt dieselbe fest codierte `<media-query-list>` in mehreren {{cssxref("@media")}}-At-Regeln zu wiederholen, kann sie einmal in einer `@custom-media`-At-Regel definiert und bei Bedarf im gesamten Stylesheet referenziert werden.

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
  - : Der Wert, der durch die benutzerdefinierte Media Query aliasiert wird. Mögliche Werte sind:
    - `<media-query-list>`
      - : Eine kommagetrennte [Liste von `<media-query>`-Werten](/de/docs/Web/CSS/Reference/At-rules/@media#description).
    - `true`
      - : Der `@custom-media`-Wert wird immer als `true` ausgewertet.
    - `false`
      - : Der `@custom-media`-Wert wird immer als `false` ausgewertet.

## Beschreibung

Beim Erstellen von responsiven Benutzeroberflächen muss dieselbe Medienbedingung oft in mehreren {{cssxref("@media")}}-At-Regeln wiederholt werden, manchmal in verschiedenen Dateien und Teams. Das Duplizieren von Media Queries erhöht das Fehlerrisiko, erschwert Refactoring und schafft unnötigen Wartungsaufwand. Jedes Mal, wenn eine Media Query geändert wird, müssen alle Instanzen manuell gefunden und aktualisiert werden – ein Prozess, der in großen Codebasen fehleranfällig und schwer nachzuverfolgen sein kann.

Die `@custom-media`-At-Regel löst dieses Problem, indem sie es ermöglicht, **benannte Aliase** für Media Queries zu definieren. Anstatt die vollständige Media Query überall zu wiederholen, deklarieren Sie die Medienbedingung einmal als benutzerdefinierte Media Query und referenzieren deren Alias in Ihren Stylesheets. Dadurch ist eine Aktualisierung der zugrunde liegenden Media Query mit nur einer Änderung an einem Ort erforderlich.

Benutzerdefinierte Media Queries können durch Referenzierung ihrer Aliasnamen innerhalb der Medienabfrage-Funktionen aus anderen zusammengesetzt werden. Dies ermöglicht es, ausdrucksstärkere, geschichtete Bedingungen zu erstellen. Eine benutzerdefinierte Media Query kann jedoch nicht auf sich selbst verweisen, noch kann sie Teil einer zirkulären Referenzkette sein. Jede zirkuläre Abhängigkeit – direkt oder indirekt – invalidiert alle benutzerdefinierten Media Queries, die an dieser Schleife beteiligt sind.

Wenn mehrere `@custom-media`-Regeln denselben `<dashed-ident>`-Namen definieren, wird die Regel verwendet, die zum Zeitpunkt der Auswertung einer `@media`-Regel im Geltungsbereich ist. Frühere Referenzen werden nicht rückwirkend aktualisiert, wenn später eine `@custom-media`-Regel deklariert wird.

### Auswertung von Media Queries mit logischen Operatoren

Benutzerdefinierte Media Queries akzeptieren die gesamte Bandbreite der CSS-logischen Operatoren – `not`, `and` und `or` (kommagetrennt oder mit dem `or`-Schlüsselwort).

Da ein `@custom-media`-Wert nur eine normale `<media-query-list>` ist, können Sie Bedingungen genauso kombinieren, invertieren oder gruppieren, wie Sie es in einer regulären `@media`-Regel tun würden.

#### Verwendung des `not`-Operators

Der `not`-Operator negiert eine gesamte Medienbedingung. Dies ist nützlich, wenn Sie möchten, dass eine Regel nur gilt, wenn eine bestimmte Bedingung `false` ist.

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

Dieser Alias passt nur, wenn das Ansichtsfenster innerhalb des angegebenen Breitenbereichs liegt.

#### Verwendung des `or`-Operators

Der logische `or`-Operator (oder sein Komma-Alias) erstellt eine Medienabfrage, die übereinstimmt, wenn eine der aufgeführten Bedingungen `true` ist.

```css
@custom-media --screen-or-print-1 screen, print;
@custom-media --screen-or-print-2 screen or print;

@media (--screen-or-print-1) {
}

@media (--screen-or-print-2) {
}
```

Die beiden Aliase sind identisch. Sie werden sowohl für Bildschirm- als auch Druckumgebungen aktiviert.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aktualisierung mehrerer Media Queries

In diesem Beispiel wird die `@custom-media`-At-Regel auf einer responsiven Website verwendet, die einen bestimmten Breakpoint an mehreren Stellen verwendet:

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

Hier wird die `@custom-media`-At-Regel verwendet, um mehrere Breakpoints an einem einzigen Ort festzulegen, was die Wartbarkeit verbessert und das Management des responsiven Designs über mehrere Stylesheets vereinfacht:

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

Das Gruppieren aller Breakpoints an einem Standort erleichtert die Wartung des responsiven Designs. Wenn ein Breakpoint angepasst werden muss, erfordert es nur eine einzige Aktualisierung der zugehörigen `@custom-media`-Definition, um Konsistenz über alle Stylesheets hinweg sicherzustellen.

### Verwendung der Schlüsselwörter `true` und `false`

Das folgende Beispiel zeigt, wie die Schlüsselwörter `true` und `false` mit `@custom-media` verwendet werden können, um Media Queries zu erstellen, die immer oder niemals übereinstimmen.

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

Dies kann nützlich für Feature-Flags oder bedingte Logik innerhalb von Stylesheets sein.

### Überschreiben vorhandener `@custom-media`-Regeln

In diesem Beispiel wird eine `@custom-media`-Regel durch eine andere `@custom-media`-Regel überschrieben, die denselben `<dashed-ident>`-Namen verwendet.

```css
@custom-media --mobile-breakpoint (width < 320px);

@media (--mobile-breakpoint) {
  .container {
    grid-template-columns: 2fr 1fr;
  }
}

@custom-media --mobile-breakpoint (width < 480px);
```

Wenn mehrere `@custom-media`-Regeln denselben Namen verwenden, wird die Regel verwendet, die zum Zeitpunkt der Auswertung einer `@media`-Regel im Geltungsbereich ist. Frühere Referenzen werden nicht rückwirkend aktualisiert, wenn später eine `@custom-media`-Regel deklariert wird.

Zum Beispiel wird im obigen Code die `--mobile-breakpoint`-Referenz innerhalb der
`@media`-Regel als `(width < 320px)` ausgewertet, sodass die `.container`-Regel nur angewendet wird, wenn die Ansicht weniger als 320px breit ist, obwohl `--mobile-breakpoint` später im Stylesheet als `(width < 480px)` neu definiert wird.

> [!NOTE]
> Das Überschreibverhalten von `@custom-media` wird in der CSS-Spezifikation noch diskutiert und könnte sich in Zukunft ändern. Siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für den aktuellen Unterstützungsstatus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-{{cssxref("@media")}}-At-Regel
- CSS-{{cssxref("@import")}}-At-Regel
- [Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- [CSS-Media-Queries](/de/docs/Web/CSS/Guides/Media_queries) Modul
