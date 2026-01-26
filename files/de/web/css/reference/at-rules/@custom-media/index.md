---
title: "@custom-media"
slug: Web/CSS/Reference/At-rules/@custom-media
l10n:
  sourceCommit: 4b6027efb86db472ca6c37390fe9402b16b2716c
---

{{SeeCompatTable}}

Die **`@custom-media`** CSS-[At-Regel](/de/docs/Web/CSS/Reference/At-rules) definiert Aliase für lange oder komplexe [Media Queries](/de/docs/Web/CSS/Guides/Media_queries). Anstatt die gleiche fest codierte `<media-query-list>` in mehreren {{cssxref("@media")}} At-Regeln zu wiederholen, kann sie einmal in einer `@custom-media` At-Regel definiert und im Stylesheet überall dort referenziert werden, wo sie benötigt wird.

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
      - : Eine durch Kommas getrennte [Liste von `<media-query>` Werten](/de/docs/Web/CSS/Reference/At-rules/@media#description).
    - `true`
      - : Der `@custom-media` Wert wird immer als `true` ausgewertet.
    - `false`
      - : Der `@custom-media` Wert wird immer als `false` ausgewertet.

## Beschreibung

Beim Erstellen reaktionsfähiger Oberflächen muss dieselbe Medienbedingung häufig über mehrere {{cssxref("@media")}} At-Regeln hinweg, manchmal über verschiedene Dateien und Teams, wiederholt werden. Das Duplizieren von Media Queries erhöht das Risiko von Fehlern, erschwert Refactoring und verursacht unnötige Wartungsaufwände. Wann immer sich eine Media Query ändert, muss jeder Einzelfall manuell gefunden und aktualisiert werden — ein Prozess, der in großen Codebasen sowohl fehleranfällig als auch schwer nachvollziehbar sein kann.

Die `@custom-media` At-Regel löst dieses Problem, indem Sie **benannte Aliase** für Media Queries definieren können. Anstatt die gesamte Media Query überall zu wiederholen, erklären Sie die Medienbedingung einmal als benutzerdefinierte Media Query und verweisen in Ihren Stylesheets auf ihren Alias. Mit dieser Methode erfordert das Aktualisieren der zugrunde liegenden Media Query eine einzige Änderung an einem Ort.

Benutzerdefinierte Media Queries können aus anderen zusammengesetzt werden, indem ihre Aliasnamen innerhalb der Media-Query-Features referenziert werden. Dies ermöglicht es, ausdrucksstärkere, geschichtete Bedingungen zu erstellen. Eine benutzerdefinierte Media Query kann jedoch nicht auf sich selbst verweisen, noch kann sie Teil einer zirkulären Referenzkette sein. Jeder zirkuläre Abhängigkeitskreis — direkt oder indirekt — macht alle daran beteiligten benutzerdefinierten Media Queries ungültig.

Wenn mehrere `@custom-media`-Regeln denselben `<dashed-ident>`-Namen definieren, gilt nur die letzte Deklaration in der Quellreihenfolge. Alle früheren Deklarationen werden ignoriert.

### Auswertung von Media Queries mit logischen Operatoren

Benutzerdefinierte Media Queries akzeptieren das gesamte Spektrum der logischen CSS-Operatoren — `not`, `and` und `or` (durch Kommas getrennt oder mit dem `or` Schlüsselwort).

Da ein `@custom-media` Wert nur eine normale `<media-query-list>` ist, können Sie Bedingungen kombinieren, negieren oder gruppieren, genau wie in einer regulären `@media`-Regel.

#### Verwendung des `not` Operators

Der `not` Operator negiert eine ganze Medienbedingung. Dies ist nützlich, wenn Sie möchten, dass eine Regel nur angewendet wird, wenn eine bestimmte Bedingung `false` ist.

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

Dieser Alias trifft nur dann zu, wenn sich der Viewport innerhalb des angegebenen Breitenbereichs befindet.

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

Die beiden Aliase sind identisch. Sie werden sowohl für Bildschirm- als auch für Druckumgebungen aktiviert.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aktualisierung mehrerer Media Queries

In diesem Beispiel wird die `@custom-media` At-Regel auf einer responsiven Website verwendet, die in mehreren Stellen einen bestimmten Breakpoint verwendet:

```css
@custom-media --narrow-window (width < 32em);

@media (--narrow-window) {
}

@media (--narrow-window) and (hover) {
}

@media (--narrow-window) and (orientation: portrait) {
}
```

Wenn der Breakpoint geändert werden muss, kann er an einer Stelle aktualisiert werden, um alle abhängigen Media Queries auf der gesamten Site anzupassen.

### Gruppierung mehrerer responsiver Breakpoints

Hier wird die `@custom-media` At-Regel verwendet, um mehrere Breakpoints an einem einzigen Ort zu setzen, was die Wartung erleichtert und das Management des responsiven Designs über mehrere Stylesheets hinweg vereinfacht:

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

Die Gruppierung aller Breakpoints an einem einzigen Ort erleichtert die Wartung des responsiven Designs. Wenn ein Breakpoint angepasst werden muss, erfordert es nur ein Update der zugehörigen `@custom-media`-Definition, um Konsistenz über alle Stylesheets hinweg sicherzustellen.

### Verwendung der `true` und `false` Schlüsselwörter

Das folgende Beispiel zeigt, wie die `true` und `false` Schlüsselwörter mit `@custom-media` verwendet werden können, um Media Queries zu erstellen, die immer oder nie zutreffen.

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

### Überschreibung bestehender `@custom-media` Regeln

In diesem Beispiel wird eine `@custom-media` Regel durch eine andere `@custom-media` Regel mit demselben `<dashed-ident>` Namen überschrieben.

```css
@custom-media --mobile-breakpoint (width < 320px);

@media (--mobile-breakpoint) {
  .container {
    grid-template-columns: 2fr 1fr;
  }
}

@custom-media --mobile-breakpoint (width < 480px);
```

Die initiale Definition von `--mobile-breakpoint` wird überschrieben und daher ignoriert. Die endgültige Deklaration wird der aktive Wert, der von allen Verweisen auf diese benutzerdefinierte Media Query verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("@media")}} At-Regel
- CSS {{cssxref("@import")}} At-Regel
- [Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- [CSS Media Queries](/de/docs/Web/CSS/Guides/Media_queries) Modul
