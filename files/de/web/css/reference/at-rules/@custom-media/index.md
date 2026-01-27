---
title: "@custom-media"
slug: Web/CSS/Reference/At-rules/@custom-media
l10n:
  sourceCommit: ad20400adefa435897ee28e55cb8dfa7419e29f8
---

{{SeeCompatTable}}

Die **`@custom-media`** CSS-[At-Regel](/de/docs/Web/CSS/Reference/At-rules) definiert Aliase für lange oder komplexe [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries). Anstatt die gleiche fest codierte `<media-query-list>` in mehreren {{cssxref("@media")}}-At-Regeln zu wiederholen, kann sie einmal in einer `@custom-media`-At-Regel definiert und bei Bedarf im Stylesheet referenziert werden.

## Syntax

```css
@custom-media <extension-name> [<media-query-list> | true | false ];

@custom-media --media-query-name (width < 1200px);
@custom-media --media-query-name (width < 1200px), (orientation: portrait);
```

### Werte

- `<extension-name>`
  - : Ein {{cssxref("dashed-ident")}}; der Name zur Identifizierung der benutzerdefinierten Medienabfrage.
- Repräsentierter Wert
  - : Der Wert, der von der benutzerdefinierten Medienabfrage aliasiert wird. Mögliche Werte sind:
    - `<media-query-list>`
      - : Eine kommagetrennte [Liste von `<media-query>`-Werten](/de/docs/Web/CSS/Reference/At-rules/@media#description).
    - `true`
      - : Der `@custom-media`-Wert wird immer als `true` ausgewertet.
    - `false`
      - : Der `@custom-media`-Wert wird immer als `false` ausgewertet.

## Beschreibung

Beim Erstellen von responsiven Schnittstellen muss oft die gleiche Medienbedingung in mehreren {{cssxref("@media")}}-At-Regeln wiederholt werden, manchmal über verschiedene Dateien und Teams hinweg. Das Duplizieren von Medienabfragen erhöht das Risiko von Fehlern, erschwert das Refactoring und erzeugt unnötigen Wartungsaufwand. Jedes Mal, wenn sich eine Medienabfrage ändert, muss jede Instanz manuell gefunden und aktualisiert werden—ein Prozess, der in großen Codebasen sowohl fehleranfällig als auch schwer nachvollziehbar sein kann.

Die `@custom-media`-At-Regel löst dieses Problem, indem sie **benannte Aliase** für Medienabfragen ermöglicht. Anstatt die vollständige Medienabfrage überall zu wiederholen, deklarieren Sie die Medienbedingung einmal als benutzerdefinierte Medienabfrage und beziehen sich im gesamten Stylesheet auf deren Alias. Mit dieser Einrichtung erfordert das Aktualisieren der zugrunde liegenden Medienabfrage nur eine Änderung an einer Stelle.

Benutzerdefinierte Medienabfragen können aus anderen zusammengesetzt werden, indem auf deren Alias-Namen innerhalb der Medienabfrage-Funktionen verwiesen wird. Dies ermöglicht den Aufbau von ausdrucksstärkeren, geschichteten Bedingungen. Eine benutzerdefinierte Medienabfrage kann sich jedoch nicht auf sich selbst beziehen, noch kann sie Teil einer zirkulären Referenzkette sein. Jede zirkuläre Abhängigkeit—direkt oder indirekt—macht alle benutzerdefinierten Medienabfragen ungültig, die in dieser Schleife beteiligt sind.

Wenn mehrere `@custom-media`-Regeln denselben `<dashed-ident>`-Namen definieren, wird die Regel verwendet, die zum Zeitpunkt der Auswertung einer `@media`-Regel im Geltungsbereich steht. Frühere Referenzen werden nicht rückwirkend aktualisiert, wenn später eine `@custom-media`-Regel deklariert wird.

### Auswerten von Medienabfragen mit logischen Operatoren

Benutzerdefinierte Medienabfragen akzeptieren das vollständige Spektrum an CSS-Logikoperatoren—`not`, `and` und `or` (kommagetrennt oder mit dem `or`-Schlüsselwort).

Da ein `@custom-media`-Wert nur eine normale `<media-query-list>` ist, können Sie Bedingungen kombinieren, invertieren oder gruppieren, genau wie in einer regulären `@media`-Regel.

#### Verwendung des `not`-Operators

Der `not`-Operator negiert eine gesamte Medienbedingung. Dies ist nützlich, wenn Sie möchten, dass eine Regel nur dann gilt, wenn eine bestimmte Bedingung `false` ist.

```css
@custom-media --no-script not (script);

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

Dieser Alias passt nur, wenn der Ansichtsbereich innerhalb des angegebenen Breitenbereichs liegt.

#### Verwendung des `or`-Operators

Der logische `or`-Operator (oder sein Komma-Alias) erstellt eine Medienabfrage, die übereinstimmt, wenn eine der aufgelisteten Bedingungen `true` ist.

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

### Aktualisieren mehrerer Medienabfragen

In diesem Beispiel wird die `@custom-media`-At-Regel auf einer responsiven Website verwendet, die an mehreren Stellen einen bestimmten Breakpoint verwendet:

```css
@custom-media --narrow-window (width < 32em);

@media (--narrow-window) {
}

@media (--narrow-window) and (hover) {
}

@media (--narrow-window) and (orientation: portrait) {
}
```

Wenn der Breakpoint geändert werden muss, kann er an einer Stelle aktualisiert werden, um alle abhängigen Medienabfragen auf der gesamten Site anzupassen.

### Gruppierung mehrerer responsiver Breakpoints

Hier wird die `@custom-media`-At-Regel verwendet, um mehrere Breakpoints an einem Ort festzulegen, wodurch die Wartbarkeit verbessert und das Management des responsiven Designs über mehrere Stylesheets vereinfacht wird:

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

Alle Breakpoints an einem einzigen Ort zu gruppieren, erleichtert die Wartung des responsiven Designs. Wenn ein Breakpoint angepasst werden muss, erfordert dies nur ein einziges Update der zugehörigen `@custom-media`-Definition, um Konsistenz über alle Stylesheets hinweg sicherzustellen.

### Verwendung der Schlüsselwörter `true` und `false`

Das folgende Beispiel zeigt, wie die Schlüsselwörter `true` und `false` mit `@custom-media` verwendet werden können, um Medienabfragen zu erstellen, die immer oder nie übereinstimmen.

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

### Überschreiben bestehender `@custom-media`-Regeln

In diesem Beispiel wird eine `@custom-media`-Regel durch eine andere `@custom-media`-Regel mit demselben `<dashed-ident>`-Namen überschrieben.

```css
@custom-media --mobile-breakpoint (width < 320px);

@media (--mobile-breakpoint) {
  .container {
    grid-template-columns: 2fr 1fr;
  }
}

@custom-media --mobile-breakpoint (width < 480px);
```

Wenn mehrere `@custom-media`-Regeln denselben Namen verwenden, wird die Regel verwendet, die zum Zeitpunkt der Auswertung einer `@media`-Regel im Geltungsbereich steht. Frühere Referenzen werden nicht rückwirkend aktualisiert, wenn später eine `@custom-media`-Regel deklariert wird.

Zum Beispiel wird im obigen Code die `--mobile-breakpoint`-Referenz innerhalb der `@media`-Regel als `(width < 320px)` ausgewertet, sodass die `.container`-Regel nur angewendet wird, wenn der Ansichtsbereich weniger als 320px breit ist, obwohl `--mobile-breakpoint` später im Stylesheet als `(width < 480px)` neu definiert wird.

> [!NOTE]
> Das Überschreibungsverhalten von `@custom-media` wird in der CSS-Spezifikation noch diskutiert und könnte sich in Zukunft ändern. Siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für den aktuellen Unterstützungsstatus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("@media")}} At-Regel
- CSS {{cssxref("@import")}} At-Regel
- [Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- [CSS Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries) Modul
