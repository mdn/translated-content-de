---
title: "@custom-media"
slug: Web/CSS/Reference/At-rules/@custom-media
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

{{CSSRef}}{{SeeCompatTable}}

Die **`@custom-media`** CSS [At-Regel](/de/docs/Web/CSS/Reference/At-rules) definiert Aliasse für lange oder komplexe [Media Queries](/de/docs/Web/CSS/Guides/Media_queries). Anstatt die gleiche fest codierte `<media-query-list>` in mehreren {{cssxref("@media")}} At-Regeln zu wiederholen, kann sie einmal in einer `@custom-media` At-Regel definiert und bei Bedarf im Stylesheet referenziert werden.

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
  - : Der Wert, der von der benutzerdefinierten Media Query aliasiert wird. Mögliche Werte sind:
    - `<media-query-list>`
      - : Eine kommagetrennte [Liste von `<media-query>` Werten](/de/docs/Web/CSS/Reference/At-rules/@media#description).
    - `true`
      - : Der `@custom-media` Wert evaluiert immer zu `true`.
    - `false`
      - : Der `@custom-media` Wert evaluiert immer zu `false`.

## Beschreibung

Beim Erstellen von responsiven Schnittstellen muss die gleiche Abfragebedingung oft in mehreren {{cssxref("@media")}} At-Regeln wiederholt werden, manchmal über verschiedene Dateien und Teams hinweg. Das Duplizieren von Media Queries erhöht das Fehlerrisiko, erschwert das Refactoring und führt zu unnötigem Wartungsaufwand. Jedes Mal, wenn sich eine Media Query ändert, muss jede Instanz manuell gefunden und aktualisiert werden — ein Prozess, der in großen Codebasen fehleranfällig und schwer nachzuverfolgen sein kann.

Die `@custom-media` At-Regel löst dieses Problem, indem Sie **benannte Aliasse** für Media Queries definieren lässt. Anstatt überall die vollständige Media Query zu wiederholen, deklarieren Sie die Media-Bedingung einmal als benutzerdefinierte Media Query und referenzieren ihren Alias in Ihren Stylesheets. Mit dieser Einrichtung erfordert die Aktualisierung der zugrunde liegenden Media Query nur eine einzige Änderung an einem Punkt.

Benutzerdefinierte Media Queries können von anderen zusammengesetzt werden, indem deren Alias-Namen in den Media Query-Funktionen referenziert werden. Dies ermöglicht das Erstellen ausdrucksstärkerer, geschichteter Bedingungen. Eine benutzerdefinierte Media Query kann sich jedoch nicht auf sich selbst beziehen, noch kann sie Teil einer zirkulären Referenzkette sein. Jede zirkuläre Abhängigkeit — direkt oder indirekt — macht alle benutzerdefinierten Media Queries ungültig, die in dieser Schleife enthalten sind.

Wenn mehrere `@custom-media` Regeln denselben `<dashed-ident>` Namen definieren, gilt nur die letzte Deklaration in der Quellordnung. Alle vorherigen Deklarationen werden ignoriert.

### Auswerten von Media Queries mit logischen Operatoren

Benutzerdefinierte Media Queries akzeptieren die gesamte Bandbreite der CSS-logischen Operatoren — `not`, `and` und `or` (durch Kommas getrennt oder unter Verwendung des `or` Schlüsselworts).

Da ein `@custom-media` Wert nur eine normale `<media-query-list>` ist, können Sie Bedingungen genau wie in einer regulären `@media`-Regel kombinieren, invertieren oder gruppieren.

#### Verwendung des `not` Operators

Der `not` Operator negiert eine gesamte Mediabedingung. Dies ist nützlich, wenn Sie möchten, dass eine Regel nur angewendet wird, wenn eine spezifische Bedingung `false` ist.

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

Dieser Alias passt nur, wenn das Ansichtsfenster im angegebenen Breitenbereich liegt.

#### Verwendung des `or` Operators

Der logische `or` Operator (oder dessen Komma-Alias) erstellt eine Media Query, die zutrifft, wenn eine der aufgeführten Bedingungen `true` ist.

```css
@custom-media --screen-or-print-1 screen, print;
@custom-media --screen-or-print-2 screen or print;

@media (--screen-or-print-1) {
}

@media (--screen-or-print-2) {
}
```

Die beiden Aliasse sind identisch. Sie werden sowohl für Bildschirm- als auch Druckumgebungen aktiviert.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aktualisierung mehrerer Media Queries

In diesem Beispiel wird die `@custom-media` At-Regel auf einer responsiven Website verwendet, die an mehreren Stellen einen bestimmten Breakpoint verwendet:

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

Hier wird die `@custom-media` At-Regel verwendet, um mehrere Breakpoints an einem Ort festzulegen, wodurch die Wartbarkeit verbessert und das Management des responsiven Designs über mehrere Stylesheets vereinfacht wird:

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

Das Gruppieren aller Breakpoints an einem einzigen Ort erleichtert die Wartung des responsiven Designs. Wenn ein Breakpoint angepasst werden muss, erfordert dies nur eine einzige Aktualisierung der zugehörigen `@custom-media` Definition, was Konsistenz über alle Stylesheets hinweg sicherstellt.

### Verwendung von `true` und `false` Schlüsselwörtern

Das folgende Beispiel zeigt, wie die Schlüsselwörter `true` und `false` mit `@custom-media` verwendet werden können, um Media Queries zu erstellen, die immer beziehungsweise nie zutreffen.

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

Dies kann nützlich für Feature-Flags oder bedingte Logik in Stylesheets sein.

### Überschreiben vorhandener `@custom-media` Regeln

In diesem Beispiel wird eine `@custom-media` Regel von einer anderen `@custom-media` Regel überschrieben, die denselben `<dashed-ident>` Namen verwendet.

```css
@custom-media --mobile-breakpoint (width < 320px);

@media (--mobile-breakpoint) {
  .container {
    grid-template-columns: 2fr 1fr;
  }
}

@custom-media --mobile-breakpoint (width < 480px);
```

Die anfängliche Definition von `--mobile-breakpoint` wird überschrieben und daher ignoriert. Die letzte Deklaration wird zum aktiven Wert, der von allen Referenzen zu dieser benutzerdefinierten Media Query verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("@media")}} At-Regel
- CSS {{cssxref("@import")}} At-Regel
- [Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- [CSS Media Queries](/de/docs/Web/CSS/Guides/Media_queries) Modul
