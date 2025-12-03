---
title: rule-list
slug: Web/CSS/Reference/Values/rule-list
l10n:
  sourceCommit: 3ee2355c3c90cf92c3119b82f8ebfa5d16c91c53
---

Der **`<rule-list>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert eine Sequenz von **null oder mehr CSS-Regeln**. Er wird verwendet, um Stellen in CSS zu definieren, an denen mehrere Regeln erscheinen können, wie beispielsweise die oberste Ebene eines Stylesheets oder innerhalb von Gruppierungs-Atrules wie `@media` oder `@supports`.

Ein `<rule-list>` wird nicht direkt geschrieben. Stattdessen beschreibt er, wie der CSS-Parser Regeln innerhalb eines Blocks oder Stylesheets sammelt und interpretiert.

## Syntax

Ein `<rule-list>` ist definiert als eine Sequenz von **null oder mehr**:

- **Stilregeln** (z.B. `p { color: red; }`).
- **Qualifizierte At-Rules** (z.B. `@media (width < 600px) { ... }`).
- **Ignorierte Anweisungen** (z.B. vom Parser behandelte Parserfehler, die der Parser automatisch überspringt).

Alle Leerzeichen, Kommentare und ungültigen oder fehlerhaften Konstrukte werden gemäß den CSS-Parser-Regeln behandelt.

## Beschreibung

Der `<rule-list>`-Typ erscheint in der Spezifikation überall dort, wo CSS definiert ist, um eine "Liste von Regeln" zu enthalten.

Beispiele umfassen:

- Die **oberste Ebene** eines Stylesheets.
- Den Körper von **Gruppierungs-At-Rules** wie `@media`, `@custom-media`, `@supports`, `@layer`, `@container`.
- Den Inhalt von **Verschachtelungsselektoren** (CSS-Verschachtelung).

Obwohl Autoren nicht explizit `<rule-list>` schreiben können, ist es wichtig, ihn zu verstehen, wenn man interpretiert, wie CSS verschachtelte Strukturen analysiert, wie ungültige Regeln verworfen werden und wie der Kaskade innerhalb von bedingten Blöcken gebildet wird.

## Beispiele

### Eine `<rule-list>` in einem Stylesheet

Das folgende Stylesheet wird als `<rule-list>` behandelt, das zwei Stilregeln und ein At-Rule enthält.

```css
p {
  margin: 0;
}

h1 {
  font-size: 2rem;
}

@media (width < 600px) {
  body {
    background: lightgray;
  }
}
```

### Eine `<rule-list>` innerhalb einer `@media` At-Rule

Der Block, der innerhalb einer `@media` At-Rule enthalten ist, ist eine `<rule-list>`, die eine oder mehrere Stilregeln enthält. Das folgende Beispiel enthält zwei Stilregeln.

```css
@media (prefers-color-scheme: dark) {
  main {
    background: black;
    color: white;
  }

  a {
    color: skyblue;
  }
}
```

### Ungültige Regeln innerhalb einer `<rule-list>`

Die ungültige Token-Sequenz (`!invalid-rule`) wird vom Parser ignoriert. Der Rest der Regeln bildet eine gültige `<rule-list>`.

```plain
body {
  color: black;
}

!invalid-rule

@supports (display: grid) {
  section {
    display: grid;
  }
}
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS [`@supports`](/de/docs/Web/CSS/Reference/At-rules/@supports) At-Rule
- CSS [`@media`](/de/docs/Web/CSS/Reference/At-rules/@media) At-Rule
- CSS [`@custom-media`](/de/docs/Web/CSS/Reference/At-rules/@custom-media) At-Rule
