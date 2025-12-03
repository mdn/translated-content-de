---
title: "@custom-media"
slug: Web/CSS/Reference/At-rules/@custom-media
l10n:
  sourceCommit: dd868507df863ab4f37d53c960c76e20e9ee365f
---

{{CSSRef}}{{SeeCompatTable}}

Die **`@custom-media`** CSS-[At-Regel](/de/docs/Web/CSS/Reference/At-rules) definiert Aliase für lange oder komplexe [Media Queries](/de/docs/Web/CSS/Guides/Media_queries). Anstatt die gleiche festkodierte `<media-query-list>` in mehreren [`@media`](/de/docs/Web/CSS/Reference/At-rules/@media) At-Regeln zu wiederholen, kann sie einmal in einer `@custom-media` At-Regel definiert und bei Bedarf im gesamten Stylesheet referenziert werden.

## Syntax

```css
@custom-media <extension-name> [<media-query-list> | true | false ];

@custom-media --media-query-name (width < 1200px);
@custom-media --media-query-name (width < 1200px), (orientation: portrait);
```

### Werte

- `<extension-name>`
  - : Ein [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident); der Name, der die benutzerdefinierte Media Query identifiziert.
- Repräsentierter Wert
  - : Der Wert, der durch die benutzerdefinierte Media Query als Alias verwendet wird. Mögliche Werte sind:
    - `<media-query-list>`
      - : Eine kommagetrennte [Liste von `<media-query>` Werten](/de/docs/Web/CSS/Reference/At-rules/@media#description).
    - `true`
      - : Der `@custom-media` Wert wird immer als `true` ausgewertet.
    - `false`
      - : Der `@custom-media` Wert wird immer als `false` ausgewertet.

## Beschreibung

Beim Erstellen von responsiven Oberflächen muss dieselbe Medienbedingung oft über mehrere [`@media`](/de/docs/Web/CSS/Reference/At-rules/@media) At-Regeln hinweg wiederholt werden, manchmal sogar über verschiedene Dateien und Teams hinweg. Das Duplizieren von Media Queries erhöht das Risiko von Fehlern, erschwert die Umstrukturierung und erzeugt unnötigen Wartungsaufwand. Jedes Mal, wenn sich eine Media Query ändert, muss jede Instanz manuell gefunden und aktualisiert werden — ein Prozess, der fehleranfällig und schwer nachvollziehbar in großen Codebasen sein kann.

Die `@custom-media` At-Regel löst dieses Problem, indem Sie **benannte Aliase** für Media Queries definieren können. Anstatt die vollständige Media Query überall zu wiederholen, deklarieren Sie die Medienbedingung einmal als benutzerdefinierte Media Query und verweisen im gesamten Stylesheet auf deren Alias. Wenn dies eingerichtet ist, erfordert das Aktualisieren der zugrunde liegenden Media Query nur eine einzige Änderung an einer Stelle.

Benutzerdefinierte Media Queries können aus anderen zusammengesetzt werden, indem deren Aliasnamen innerhalb der Media Query Features referenziert werden. Dies ermöglicht den Aufbau ausdrucksstärkerer, gestaffelter Bedingungen. Eine benutzerdefinierte Media Query kann jedoch nicht auf sich selbst verweisen, noch kann sie Teil einer zirkulären Referenzkette sein. Jede zirkuläre Abhängigkeit — direkt oder indirekt — macht alle benutzerdefinierten Media Queries ungültig, die in dieser Schleife beteiligt sind.

Wenn mehrere `@custom-media` Regeln denselben `<dashed-ident>` Namen definieren, gilt nur die letzte Deklaration in der Quellreihenfolge. Alle früheren Deklarationen werden ignoriert.

### Auswertung von Media Queries mit logischen Operatoren

Benutzerdefinierte Media Queries akzeptieren die gesamte Bandbreite der logischen CSS-Operatoren — `not`, `and` und `or` (kommagetrennt oder mit dem `or`-Schlüsselwort).

Da ein `@custom-media` Wert nur eine normale `<media-query-list>` ist, können Sie Bedingungen kombinieren, invertieren oder gruppieren, genau wie in einer regulären `@media` Regel.

#### Verwendung des `not` Operators

Der `not` Operator negiert eine gesamte Medienbedingung. Dies ist nützlich, wenn Sie möchten, dass eine Regel nur dann angewendet wird, wenn eine bestimmte Bedingung `false` ist.

```css
@custom-media --no-script not (script);

@media (--no-script) {
}
```

#### Verwendung des `and` Operators

Der `and` Operator ermöglicht es Ihnen, mehrere Bedingungen zu kombinieren, die alle `true` sein müssen.

```css
@custom-media --medium-screen (min-width: 40em) and (max-width: 60em);

@media (--medium-screen) {
}
```

Dieser Alias trifft nur zu, wenn der Viewport innerhalb des angegebenen Größenbereichs liegt.

#### Verwendung des `or` Operators

Der logische `or` Operator (oder dessen Komma-Alias) erstellt eine Media Query, die zutrifft, wenn eine der aufgelisteten Bedingungen `true` ist.

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

In diesem Beispiel wird die `@custom-media` At-Regel in einer responsiven Website verwendet, die an mehreren Stellen einen bestimmten Breakpoint verwendet:

```css
@custom-media --narrow-window (width < 32em);

@media (--narrow-window) {
}

@media (--narrow-window) and (hover) {
}

@media (--narrow-window) and (orientation: portrait) {
}
```

Wenn der Breakpoint geändert werden muss, kann er an einer Stelle aktualisiert werden, um alle abhängigen Media Queries auf der gesamten Website anzupassen.

### Gruppierung mehrerer responsiver Breakpoints

Hier wird die `@custom-media` At-Regel verwendet, um mehrere Breakpoints an einer einzigen Stelle festzulegen, was die Wartbarkeit verbessert und das Management des responsiven Designs über mehrere Stylesheets hinweg vereinfacht:

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

Das Gruppieren aller Breakpoints an einem einzigen Ort erleichtert die Verwaltung des responsiven Designs. Wenn ein Breakpoint angepasst werden muss, erfordert dies nur eine einzige Aktualisierung der zugehörigen `@custom-media` Definition, was Konsistenz über alle Stylesheets hinweg gewährleistet.

### Verwendung der `true` und `false` Schlüsselwörter

Das folgende Beispiel zeigt, wie die Schlüsselwörter `true` und `false` mit `@custom-media` verwendet werden können, um Media Queries zu erstellen, die immer oder nie zutreffen.

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

Dies kann für Feature-Flags oder bedingte Logik innerhalb von Stylesheets nützlich sein.

### Überschreiben bestehender `@custom-media` Regeln

In diesem Beispiel wird eine `@custom-media` Regel von einer anderen `@custom-media` Regel mit demselben `<dashed-ident>` Namen überschrieben.

```css
@custom-media --mobile-breakpoint (width < 320px);

@media (--mobile-breakpoint) {
  .container {
    grid-template-columns: 2fr 1fr;
  }
}

@custom-media --mobile-breakpoint (width < 480px);
```

Die anfängliche Definition von `--mobile-breakpoint` wird überschrieben und daher ignoriert. Die endgültige Deklaration wird zum aktiven Wert, der von allen Verweisen auf diese benutzerdefinierte Media Query verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS [`@media`](/de/docs/Web/CSS/Reference/At-rules/@media) At-Regel
- CSS [`@import`](/de/docs/Web/CSS/Reference/At-rules/@import) At-Regel
- [Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- [CSS Media Queries](/de/docs/Web/CSS/Guides/Media_queries) Modul
