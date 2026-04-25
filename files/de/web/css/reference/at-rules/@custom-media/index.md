---
title: "`@custom-media` CSS at-rule"
short-title: "@custom-media"
slug: Web/CSS/Reference/At-rules/@custom-media
l10n:
  sourceCommit: e328268bb418551ab451881845881b5837c9da83
---

{{SeeCompatTable}}

Die **`@custom-media`** CSS-[at-Regel](/de/docs/Web/CSS/Reference/At-rules) definiert Aliase für lange oder komplexe [Media-Queries](/de/docs/Web/CSS/Guides/Media_queries). Anstatt dieselbe hardcodierte `<media-query-list>` in mehreren {{cssxref("@media")}}-At-Regeln zu wiederholen, kann sie einmal in einer `@custom-media`-At-Regel definiert und bei Bedarf im gesamten Stylesheet referenziert werden.

## Syntax

```css
@custom-media <extension-name> [<media-query-list> | true | false ];

@custom-media --media-query-name (width < 1200px);
@custom-media --media-query-name (width < 1200px), (orientation: portrait);
```

### Werte

- `<extension-name>`
  - : Ein {{cssxref("dashed-ident")}}; der Name, der die benutzerdefinierte Media-Query identifiziert.
- Repräsentierter Wert
  - : Der durch die benutzerdefinierte Media-Query aliasierte Wert. Mögliche Werte sind:
    - `<media-query-list>`
      - : Eine kommagetrennte [Liste von `<media-query>`-Werten](/de/docs/Web/CSS/Reference/At-rules/@media#description).
    - `true`
      - : Der `@custom-media`-Wert wird immer als `true` bewertet.
    - `false`
      - : Der `@custom-media`-Wert wird immer als `false` bewertet.

## Beschreibung

Beim Erstellen responsiver Interfaces muss dieselbe Mediabedingung oft über mehrere {{cssxref("@media")}}-At-Regeln hinweg, manchmal in verschiedenen Dateien und Teams, wiederholt werden. Das Duplizieren von Media-Queries erhöht das Risiko von Fehlern, erschwert das Refactoring und schafft unnötigen Wartungsaufwand. Jedes Mal, wenn sich eine Media-Query ändert, muss jede Instanz manuell gefunden und aktualisiert werden — ein Prozess, der sowohl fehleranfällig als auch schwierig zu verfolgen ist in großen Codebasen.

Die `@custom-media`-At-Regel löst dieses Problem, indem sie Ihnen ermöglicht, **benannte Aliase** für Media-Queries zu definieren. Anstatt die vollständige Media-Query überall zu wiederholen, deklarieren Sie die Mediabedingung einmal als benutzerdefinierte Media-Query und verweisen darauf in Ihren Stylesheets. Mit dieser Methode erfordert das Aktualisieren der zugrunde liegenden Media-Query nur eine einzige Änderung an einem Ort.

Benutzerdefinierte Media-Queries können aus anderen zusammengesetzt werden, indem ihre Aliasnamen innerhalb der Media-Query-Features referenziert werden. Dies ermöglicht den Aufbau von ausdrucksstärkeren, mehrschichtigen Bedingungen. Eine benutzerdefinierte Media-Query kann sich jedoch nicht auf sich selbst beziehen, noch kann sie Teil einer zirkulären Referenzkette sein. Jede zirkuläre Abhängigkeit — direkt oder indirekt — hebt alle beteiligten benutzerdefinierten Media-Queries in dieser Schleife auf.

Wenn mehrere `@custom-media`-Regeln denselben `<dashed-ident>` Namen definieren, wird die Regel verwendet, die zum Zeitpunkt der Evaluierung einer `@media`-Regel in Reichweite ist. Früher deklarierte Referenzen werden nicht rückwirkend aktualisiert, wenn eine spätere `@custom-media`-Regel deklariert wird.

### Evaluierung von Media-Queries mit logischen Operatoren

Benutzerdefinierte Media-Queries akzeptieren die vollständige Palette an logischen CSS-Operatoren — `not`, `and` und `or` (kommagetrennt oder mit dem `or`-Schlüsselwort).

Da ein `@custom-media`-Wert lediglich eine normale `<media-query-list>` ist, können Sie Bedingungen kombinieren, invertieren oder gruppieren, genau wie in einer regulären `@media`-Regel.

#### Verwendung des `not`-Operators

Der `not`-Operator negiert eine gesamte Mediabedingung. Dies ist nützlich, wenn Sie möchten, dass eine Regel nur angewendet wird, wenn eine bestimmte Bedingung `false` ist.

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

Dieser Alias wird nur übereinstimmen, wenn der Viewport innerhalb des angegebenen Breitenbereichs liegt.

#### Verwendung des `or`-Operators

Der logische `or`-Operator (oder sein Komma-Alias) erstellt eine Media-Query, die zutrifft, wenn eine der aufgelisteten Bedingungen `true` ist.

```css
@custom-media --screen-or-print-1 screen, print;
@custom-media --screen-or-print-2 screen or print;

@media (--screen-or-print-1) {
}

@media (--screen-or-print-2) {
}
```

Die beiden Aliase sind identisch. Sie werden für Bildschirm- und Druckumgebungen aktiviert.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Aktualisierung mehrerer Media-Queries

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

Wenn der Breakpoint geändert werden muss, kann er an einer Stelle aktualisiert werden, um alle abhängigen Media-Queries auf der ganzen Website anzupassen.

### Gruppierung mehrerer responsiver Breakpoints

Hier wird die `@custom-media`-At-Regel verwendet, um mehrere Breakpoints an einer Stelle festzulegen, was die Wartbarkeit verbessert und die Verwaltung des responsiven Designs über mehrere Stylesheets hinweg vereinfacht:

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

Die Gruppierung aller Breakpoints an einem einzigen Ort erleichtert die Wartung des responsiven Designs. Wenn ein Breakpoint angepasst werden muss, erfordert dies nur ein einmaliges Update der zugehörigen `@custom-media`-Definition, wodurch Konsistenz über alle Stylesheets hinweg sichergestellt wird.

### Verwendung der Schlüsselwörter `true` und `false`

Das folgende Beispiel zeigt, wie die Schlüsselwörter `true` und `false` mit `@custom-media` verwendet werden können, um Media-Queries zu erstellen, die immer oder niemals zutreffen.

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

In diesem Beispiel wird eine `@custom-media`-Regel durch eine andere `@custom-media`-Regel überschrieben, die denselben `<dashed-ident>` Namen verwendet.

```css
@custom-media --mobile-breakpoint (width < 320px);

@media (--mobile-breakpoint) {
  .container {
    grid-template-columns: 2fr 1fr;
  }
}

@custom-media --mobile-breakpoint (width < 480px);
```

Wenn mehrere `@custom-media`-Regeln denselben Namen verwenden, wird die Regel verwendet, die zum Zeitpunkt der Evaluierung einer `@media`-Regel in Reichweite ist. Früher deklarierte Referenzen werden nicht rückwirkend aktualisiert, wenn eine spätere `@custom-media`-Regel deklariert wird.

Zum Beispiel wird im obigen Code die `--mobile-breakpoint`-Referenz innerhalb der
`@media`-Regel als `(width < 320px)` ausgewertet, sodass die `.container`-Regel nur angewendet wird, wenn der Viewport weniger als 320px breit ist, obwohl `--mobile-breakpoint` später im Stylesheet als `(width < 480px)` neu definiert wird.

> [!NOTE]
> Das Überschreibungsverhalten von `@custom-media` wird noch in der CSS-Spezifikation diskutiert und kann sich in Zukunft ändern. Siehe den
> Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für den aktuellen Unterstützungsstatus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref("@media")}}-At-Regel
- CSS {{cssxref("@import")}}-At-Regel
- [Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- [CSS Media Queries](/de/docs/Web/CSS/Guides/Media_queries)-Modul
