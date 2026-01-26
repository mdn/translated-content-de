---
title: rule-list
slug: Web/CSS/Reference/Values/rule-list
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Der **`<rule-list>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert eine Sequenz von **null oder mehr CSS-Regeln**. Er wird verwendet, um Stellen in CSS zu definieren, an denen mehrere Regeln erscheinen können, wie zum Beispiel die oberste Ebene eines Stylesheets oder innerhalb von Gruppen-At-Regeln wie `@media` oder `@supports`.

Ein `<rule-list>` wird nicht direkt geschrieben. Vielmehr beschreibt es, wie der CSS-Parser Regeln innerhalb eines Blocks oder Stylesheets sammelt und interpretiert.

## Syntax

Ein `<rule-list>` ist definiert als eine Sequenz von **null oder mehr**:

- **Stilregeln** (z. B. `p { color: red; }`).
- **Qualifizierte At-Regeln** (z. B. `@media (width < 600px) { ... }`).
- **Ignorierte Anweisungen** (z. B. Parse-Fehler, die vom Parser behandelt und automatisch übersprungen werden).

Alle Leerzeichen, Kommentare und ungültigen oder fehlerhaften Konstrukte werden gemäß den CSS-Parser-Regeln behandelt.

## Beschreibung

Der `<rule-list>`-Typ erscheint in der Spezifikation überall dort, wo CSS definiert ist, um eine "Liste von Regeln" zu enthalten.

Beispiele sind:

- Die **oberste Ebene** eines Stylesheets.
- Der Body von **Gruppen-At-Regeln** wie `@media`, `@custom-media`, `@supports`, `@layer`, `@container`.
- Der Inhalt von **verschachtelten Selektoren** (CSS-Nesting).

Obwohl Autoren `<rule-list>` nicht explizit schreiben können, ist das Verständnis davon entscheidend, wenn es darum geht, wie CSS verschachtelte Strukturen parst, wie ungültige Regeln entfernt werden und wie sich die Kaskade innerhalb bedingter Blöcke formt.

## Beispiele

### Ein `<rule-list>` in einem Stylesheet

Das folgende Stylesheet wird als `<rule-list>` behandelt, das zwei Stilregeln und eine At-Regel enthält.

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

### Ein `<rule-list>` innerhalb von `@media` At-Regel

Der Block innerhalb einer `@media` At-Regel ist ein `<rule-list>`, das eine oder mehrere Stilregeln enthält. Das folgende Beispiel enthält zwei Stilregeln.

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

### Ungültige Regeln innerhalb eines `<rule-list>`

Die ungültige Token-Sequenz (`!invalid-rule`) wird vom Parser ignoriert. Die restlichen Regeln bilden eine gültige `<rule-list>`.

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
