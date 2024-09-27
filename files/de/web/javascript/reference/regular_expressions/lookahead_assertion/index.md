---
title: "Lookahead assertion: (?=...), (?!...)"
slug: Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion
l10n:
  sourceCommit: 542709c06aeb4983329edd5f186689c5401ac522
---

{{jsSidebar}}

Eine **Lookahead-Assertion** "blickt voraus": Sie versucht, den nachfolgenden Input mit dem angegebenen Muster abzugleichen, konsumiert jedoch keinen Teil des Inputs – wenn der Abgleich erfolgreich ist, bleibt die aktuelle Position im Input unverändert.

## Syntax

```regex
(?=pattern)
(?!pattern)
```

### Parameter

- `pattern`
  - : Ein Muster, das alles enthalten kann, was in einem Regex-Literal verwendet werden kann, einschließlich einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Beschreibung

Ein regulärer Ausdruck wird im Allgemeinen von links nach rechts abgeglichen. Deshalb werden Lookahead und [Lookbehind](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) als solche bezeichnet – Lookahead sichert, was rechts ist, und Lookbehind sichert, was links ist.

Damit eine `(?=pattern)`-Assertion erfolgreich ist, muss das `pattern` den Text nach der aktuellen Position abgleichen, aber die aktuelle Position wird nicht verändert. Die Form `(?!pattern)` negiert die Aussage – sie ist erfolgreich, wenn das `pattern` an der aktuellen Position nicht übereinstimmt.

Das `pattern` kann [Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) enthalten. Siehe die Seite zu Erfassungsgruppen für weitere Informationen über das Verhalten in diesem Fall.

Im Gegensatz zu anderen Operatoren regulärer Ausdrücke gibt es kein Zurückverfolgen in ein Lookahead – dieses Verhalten wird von Perl geerbt. Dies ist nur von Bedeutung, wenn das `pattern` [Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) enthält und das `pattern`, das dem Lookahead folgt, [Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) auf diese Erfassen enthält. Zum Beispiel:

```js
/(?=(a+))a*b\1/.exec("baabac"); // ['aba', 'a']
// Not ['aaba', 'a']
```

Das Abgleichen des obigen Musters erfolgt wie folgt:

1. Der Lookahead `(a+)` ist vor dem ersten `"a"` in `"baabac"` erfolgreich, und `"aa"` wird erfasst, weil der Quantor gierig ist.
2. `a*b` stimmt mit dem `"aab"` in `"baabac"` überein, weil Lookaheads ihre abgeglichenen Zeichenfolgen nicht konsumieren.
3. `\1` stimmt nicht mit der folgenden Zeichenfolge überein, da dies 2 `"a"`s erfordert, aber nur 1 verfügbar ist. Daher schlägt das gesamte Match an diesem Punkt fehl.
4. `exec()` versucht erneut, an der nächsten Position abzugleichen – vor dem zweiten `"a"`. Diesmal stimmt das Lookahead mit `"a"` überein, und `a*b` stimmt mit `"ab"` überein. Der Rückverweis `\1` stimmt mit dem erfassten `"a"` überein, und der Abgleich ist erfolgreich.

Wenn das Regex in der Lage wäre, in das Lookahead zurückzuverfolgen und die dort getroffene Wahl zu revidieren, würde das Match in Schritt 3 durch `(a+)`, das das erste `"a"` (anstatt der ersten zwei `"a"`s) abgleicht, und `a*b`, das `"aab"` abgleicht, erfolgreich sein, ohne die nächste Eingabeposition erneut zu versuchen.

Negative Lookaheads können ebenfalls Erfassungsgruppen enthalten, aber Rückverweise machen nur innerhalb des `pattern` Sinn, denn wenn das Matching fortgesetzt wird, wäre das `pattern` notwendigerweise nicht abgeglichen (ansonsten schlägt die Assertion fehl). Das bedeutet, dass Rückverweise auf diese Erfassungsgruppen in negativen Lookaheads außerhalb des `pattern` immer erfolgreich sind. Zum Beispiel:

```js
/(.*?)a(?!(a+)b\2c)\2(.*)/.exec("baaabaac"); // ['baaabaac', 'ba', undefined, 'abaac']
```

Das Matching des obigen Musters erfolgt wie folgt:

1. Das `(.*?)` Muster ist nicht gierig, startet also damit, nichts abzugleichen. Das nächste Zeichen ist jedoch `a`, das nicht mit `"b"` im Input übereinstimmt.
2. Das `(.*?)` Muster stimmt mit `"b"` überein, sodass das `a` im Muster mit dem ersten `"a"` in `"baaabaac"` übereinstimmt.
3. An dieser Position ist das Lookahead erfolgreich, weil, wenn `(a+)` mit `"aa"` übereinstimmt, dann `(a+)b\2c` mit `"aabaac"` übereinstimmt. Dies führt dazu, dass die Assertion fehlschlägt, also geht der Matcher zurück.
4. Das `(.*?)` Muster stimmt mit `"ba"` überein, sodass das `a` im Muster mit dem zweiten `"a"` in `"baaabaac"` übereinstimmt.
5. An dieser Position schlägt das Lookahead fehl, weil der verbleibende Input nicht dem Muster "beliebig viele `"a"`s, ein `"b"`, die gleiche Anzahl von `"a"`s, ein `c`" folgt. Dies führt dazu, dass die Assertion erfolgreich ist.
6. Da jedoch innerhalb der Assertion nichts abgeglichen wurde, hat der Rückverweis `\2` keinen Wert, sodass er mit dem leeren String übereinstimmt. Dies führt dazu, dass der Rest des Inputs vom `(.*)` am Ende konsumiert wird.

Normalerweise können Assertions nicht [quantifiziert](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) werden. Im [Unicode-ignoranten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) können Lookahead-Assertions jedoch quantifiziert werden. Dies ist eine [veraltete Syntax für die Webkompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) und sollte nicht verwendet werden.

```js
/(?=a)?b/.test("b"); // true; the lookahead is matched 0 time
```

## Beispiele

### Zeichenfolgen abgleichen, ohne sie zu konsumieren

Manchmal ist es nützlich zu überprüfen, dass die übereinstimmende Zeichenfolge von etwas gefolgt wird, ohne dass dies als Ergebnis zurückgegeben wird. Im folgenden Beispiel wird eine Zeichenfolge abgeglichen, die von einem Komma/Punkt gefolgt wird, aber die Zeichensetzung ist nicht im Ergebnis enthalten:

```js
function getFirstSubsentence(str) {
  return /^.*?(?=[,.])/.exec(str)?.[0];
}

getFirstSubsentence("Hello, world!"); // "Hello"
getFirstSubsentence("Thank you."); // "Thank you"
```

Ein ähnlicher Effekt kann erzielt werden, indem die Teilübereinstimmung, an der Sie interessiert sind, [erfasst](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) wird.

### Muster Subtraktion und Schnittmenge

Mit Lookahead können Sie eine Zeichenfolge mit verschiedenen Mustern mehrfach abgleichen, was es Ihnen ermöglicht, komplexe Beziehungen wie Subtraktion (ist X, aber nicht Y) und Schnittmenge (ist sowohl X als auch Y) auszudrücken.

Im folgenden Beispiel wird ein beliebiger [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) abgeglichen, der kein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ist (hier werden nur drei reservierte Wörter zur Vereinfachung gezeigt; es können weitere reservierte Wörter zu dieser Disjunktion hinzugefügt werden). Die Syntax `[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*` beschreibt genau die Menge an Bezeichnerzeichenfolgen in der Sprachspezifikation; mehr über Bezeichner erfahren Sie in der [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) und dem `\p`-Escape in [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape).

```js
function isValidIdentifierName(str) {
  const re =
    /^(?!(?:break|case|catch)$)[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*$/u;
  return re.test(str);
}

isValidIdentifierName("break"); // false
isValidIdentifierName("foo"); // true
isValidIdentifierName("cases"); // true
```

Das folgende Beispiel stimmt mit einer Zeichenfolge überein, die sowohl ASCII ist als auch als Teil eines Bezeichners verwendet werden kann:

```js
function isASCIIIDPart(char) {
  return /^(?=\p{ASCII}$)\p{ID_Start}$/u.test(char);
}

isASCIIIDPart("a"); // true
isASCIIIDPart("α"); // false
isASCIIIDPart(":"); // false
```

Wenn Sie Schnittmengen und Subtraktionen mit endlich vielen Zeichen machen, könnte es sinnvoll sein, die [Zeichenmengen-Schnittmenge](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) Syntax zu verwenden, die mit dem `v`-Flag aktiviert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
- [Regular expressions](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Input boundary assertion: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Word boundary assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Lookbehind assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Capturing group: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
