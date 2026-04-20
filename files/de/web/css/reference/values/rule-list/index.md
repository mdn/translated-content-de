---
title: "`<rule-list>` CSS-Typ"
short-title: <rule-list>
slug: Web/CSS/Reference/Values/rule-list
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Der **`<rule-list>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert eine Sequenz von **null oder mehr CSS-Regeln**. Er wird verwendet, um Stellen in CSS zu definieren, an denen mehrere Regeln erscheinen können, wie zum Beispiel auf der obersten Ebene eines Stylesheets oder innerhalb von gruppierenden At-Regeln wie `@media` oder `@supports`.

Ein `<rule-list>` wird nicht direkt geschrieben. Stattdessen beschreibt er, wie der CSS-Parser Regeln innerhalb eines Blockes oder Stylesheets sammelt und interpretiert.

## Syntax

Ein `<rule-list>` wird als eine Sequenz von **null oder mehr** definiert:

- **Stilregeln** (z. B. `p { color: red; }`).
- **Qualifizierte At-Regeln** (z. B. `@media (width < 600px) { ... }`).
- **Ignorierte Anweisungen** (z. B. Parse-Fehler, die vom Parser verarbeitet werden, die der Parser automatisch überspringt).

Alle Leerzeichen, Kommentare und ungültigen oder fehlerhaften Konstrukte werden gemäß den CSS-Parserregeln behandelt.

## Beschreibung

Der `<rule-list>`-Typ erscheint in der Spezifikation überall dort, wo CSS definiert ist, um eine "Liste von Regeln" zu enthalten.

Beispiele umfassen:

- Die **oberste Ebene** eines Stylesheets.
- Den Körper von **gruppierenden At-Regeln** wie `@media`, `@custom-media`, `@supports`, `@layer`, `@container`.
- Die Inhalte von **Verschachtelungsselektoren** (CSS-Nesting).

Obwohl Autoren `<rule-list>` nicht explizit schreiben können, ist es entscheidend, es zu verstehen, wenn es darum geht, wie CSS verschachtelte Strukturen parst, wie ungültige Regeln verworfen werden und wie die Kaskade innerhalb bedingter Blöcke gebildet wird.

## Beispiele

### Eine `<rule-list>` in einem Stylesheet

Das folgende Stylesheet wird als `<rule-list>` behandelt, die zwei Stilregeln und eine At-Regel enthält.

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

### Eine `<rule-list>` innerhalb einer `@media` At-Regel

Der Block innerhalb einer `@media` At-Regel ist eine `<rule-list>`, die eine oder mehrere Stilregeln enthält. Das folgende Beispiel enthält zwei Stilregeln.

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

- CSS {{cssxref("@supports")}} At-Regel
- CSS {{cssxref("@media")}} At-Regel
- CSS {{cssxref("@custom-media")}} At-Regel
