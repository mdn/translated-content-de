---
title: "SyntaxError: JSON.parse: Fehlerhafte Analyse"
slug: Web/JavaScript/Reference/Errors/JSON_bad_parse
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die von {{jsxref("JSON.parse()")}} ausgelösten JavaScript-Ausnahmen treten auf, wenn ein String nicht als JSON geparst werden konnte.

## Meldung

```plain
SyntaxError: JSON.parse: unterbrochener Zeichenfolgenliteral
SyntaxError: JSON.parse: falsches Steuerzeichen im Zeichenfolgenliteral
SyntaxError: JSON.parse: falsches Zeichen im Zeichenfolgenliteral
SyntaxError: JSON.parse: ungültige Unicode-Escape-Sequenz
SyntaxError: JSON.parse: ungültiges Escape-Zeichen
SyntaxError: JSON.parse: nicht abgeschlossene Zeichenfolge
SyntaxError: JSON.parse: keine Zahl nach Minuszeichen
SyntaxError: JSON.parse: unerwartetes Nicht-Zahlen-Zeichen
SyntaxError: JSON.parse: fehlende Ziffern nach Dezimalpunkt
SyntaxError: JSON.parse: nicht abgerundete Bruchzahl
SyntaxError: JSON.parse: fehlende Ziffern nach Exponentenzeichen
SyntaxError: JSON.parse: fehlende Ziffern nach Exponenten-Vorzeichen
SyntaxError: JSON.parse: Exponententeil fehlt eine Zahl
SyntaxError: JSON.parse: unerwartetes Ende der Daten
SyntaxError: JSON.parse: unerwartetes Schlüsselwort
SyntaxError: JSON.parse: unerwartetes Zeichen
SyntaxError: JSON.parse: Ende der Daten beim Lesen von Objektinhalten
SyntaxError: JSON.parse: erwarteter Eigenschaftsname oder '}'
SyntaxError: JSON.parse: Ende der Daten als ',' oder ']' erwartet wurde
SyntaxError: JSON.parse: erwartetes ',' oder ']' nach Array-Element
SyntaxError: JSON.parse: Ende der Daten als Eigenschaftsname erwartet wurde
SyntaxError: JSON.parse: erwarteter doppelter Anführungszeichen-Eigenschaftsname
SyntaxError: JSON.parse: Ende der Daten nach Eigenschaftsname, als ':' erwartet wurde
SyntaxError: JSON.parse: erwartetes ':' nach Eigenschaftsname in Objekt
SyntaxError: JSON.parse: Ende der Daten nach Eigenschaftswert in Objekt
SyntaxError: JSON.parse: erwartetes ',' oder '}' nach Eigenschaftswert in Objekt
SyntaxError: JSON.parse: erwartetes ',' oder '}' nach Eigenschaft-Wert-Paar in Objektliteral
SyntaxError: JSON.parse: Eigenschaftsnamen müssen doppel-quoted Strings sein
SyntaxError: JSON.parse: erwarteter Eigenschaftsname oder '}'
SyntaxError: JSON.parse: unerwartetes Zeichen
SyntaxError: JSON.parse: unerwartetes Nicht-Leerzeichen-Zeichen nach JSON-Daten
```

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist schiefgelaufen?

{{jsxref("JSON.parse()")}} parst einen String als JSON. Dieser String muss gültiges JSON sein und wird diesen Fehler auslösen, wenn falsche Syntax gefunden wird.

## Beispiele

### JSON.parse() erlaubt keine nachgestellten Kommata

Beide Zeilen werfen einen SyntaxError:

```js example-bad
JSON.parse("[1, 2, 3, 4,]");
JSON.parse('{"foo": 1,}');
// SyntaxError JSON.parse: unerwartetes Zeichen
// in Zeile 1 Spalte 14 der JSON-Daten
```

Lassen Sie die nachgestellten Kommata weg, um das JSON korrekt zu parsen:

```js example-good
JSON.parse("[1, 2, 3, 4]");
JSON.parse('{"foo": 1}');
```

### Eigenschaftsnamen müssen doppel-quoted Strings sein

Sie können keine einfachen Anführungszeichen um Eigenschaften verwenden, wie 'foo'.

```js example-bad
JSON.parse("{'foo': 1}");
// SyntaxError: JSON.parse: erwarteter Eigenschaftsname oder '}'
// in Zeile 1 Spalte 2 der JSON-Daten
```

Stattdessen schreiben Sie "foo":

```js example-good
JSON.parse('{"foo": 1}');
```

### Führende Nullen und Dezimalpunkte

Sie können keine führenden Nullen, wie 01, verwenden und Dezimalpunkte müssen von mindestens einer Ziffer gefolgt werden.

```js example-bad
JSON.parse('{"foo": 01}');
// SyntaxError: JSON.parse: erwarteter ',' oder '}' nach Eigenschaftswert
// im Objekt in Zeile 1 Spalte 2 der JSON-Daten

JSON.parse('{"foo": 1.}');
// SyntaxError: JSON.parse: nicht abgeschlossene Bruchzahl
// in Zeile 1 Spalte 2 der JSON-Daten
```

Stattdessen schreiben Sie einfach 1 ohne Null und verwenden Sie mindestens eine Ziffer nach einem Dezimalpunkt:

```js example-good
JSON.parse('{"foo": 1}');
JSON.parse('{"foo": 1.0}');
```

## Siehe auch

- {{jsxref("JSON")}}
- {{jsxref("JSON.parse()")}}
- {{jsxref("JSON.stringify()")}}
