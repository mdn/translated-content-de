---
title: "Lookahead-Assertion: (?=...), (?!...)"
slug: Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion
l10n:
  sourceCommit: a53528ac568364c33c348d64bba264a4e01f236d
---

{{jsSidebar}}

Eine **Lookahead-Assertion** "blickt voraus": Sie versucht, den nachfolgenden Input mit dem gegebenen Muster zu vergleichen, aber sie verbraucht keinen Teil des Inputs – bei einem erfolgreichen Match bleibt die aktuelle Position im Input unverändert.

## Syntax

```regex
(?=pattern)
(?!pattern)
```

### Parameter

- `pattern`
  - : Ein Muster, das aus allem bestehen kann, was Sie in einem Regex-Literal verwenden dürfen, einschließlich einer [Disjunction](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Beschreibung

Ein regulärer Ausdruck vergleicht normalerweise von links nach rechts. Dies ist der Grund, warum Lookahead und [Lookbehind](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) Assertions so genannt werden – Lookahead bestätigt, was rechts liegt, und Lookbehind bestätigt, was links liegt.

Damit eine `(?=pattern)`-Assertion erfolgreich ist, muss das `pattern` dem Text nach der aktuellen Position entsprechen, aber die aktuelle Position ändert sich nicht. Die `(?!pattern)`-Form negiert die Assertion – sie ist erfolgreich, wenn das `pattern` an der aktuellen Position nicht passt.

Das `pattern` kann [capturing groups](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) enthalten. Weitere Informationen zum Verhalten in diesem Fall finden Sie auf der Seite zu Capturing Groups.

Im Gegensatz zu anderen Operatoren für reguläre Ausdrücke gibt es kein Backtracking in ein Lookahead – dieses Verhalten wird von Perl übernommen. Dies ist nur relevant, wenn das `pattern` [capturing groups](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) enthält und das auf das Lookahead folgende Muster [backreferences](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) auf diese Erfassungen enthält. Zum Beispiel:

```js
/(?=(a+))a*b\1/.exec("baabac"); // ['aba', 'a']
// Not ['aaba', 'a']
```

Das Matching des obigen Musters erfolgt wie folgt:

1. Das Lookahead `(a+)` ist erfolgreich vor dem ersten `"a"` in `"baabac"`, und `"aa"` wird erfasst, da der Quantor gierig ist.
2. `a*b` passt auf das `"aab"` in `"baabac"`, da Lookaheads ihre gematchten Zeichenfolgen nicht verbrauchen.
3. `\1` passt nicht zur folgenden Zeichenkette, weil dazu 2 `"a"`s erforderlich wären, aber nur 1 verfügbar ist. Der Matcher führt ein Backtracking durch, geht jedoch nicht in das Lookahead, sodass die Capturing Group nicht auf 1 `"a"` reduziert werden kann, und der gesamte Match schlägt an dieser Stelle fehl.
4. `exec()` versucht ein erneutes Matching an der nächsten Position – vor dem zweiten `"a"`. Dieses Mal passt das Lookahead auf `"a"`, und `a*b` passt auf `"ab"`. Der Backreference `\1` passt auf das erfasste `"a"`, und der Match ist erfolgreich.

Wenn das Regex Backtracking in das Lookahead durchführen und die dort getroffene Entscheidung revidieren könnte, dann würde der Match in Schritt 3 erfolgreich sein, indem `(a+)` auf das erste `"a"` passt (anstatt auf die ersten zwei `"a"`s) und `a*b` auf `"aab"` passt, ohne die nächste Eingabeposition erneut zu prüfen.

Negative Lookaheads können ebenfalls Capturing Groups enthalten, aber Backreferences machen nur innerhalb des `pattern` Sinn, weil, wenn das Matching fortgesetzt wird, `pattern` notwendigerweise nicht gematcht werden würde (ansonsten schlägt die Assertion fehl). Das bedeutet, außerhalb des `pattern` sind Backreferences zu diesen Capturing Groups in negativen Lookaheads immer erfolgreich. Zum Beispiel:

```js
/(.*?)a(?!(a+)b\2c)\2(.*)/.exec("baaabaac"); // ['baaabaac', 'ba', undefined, 'abaac']
```

Das Matching des obigen Musters erfolgt wie folgt:

1. Das Muster `(.*?)` ist nicht gierig, daher beginnt es damit, nichts zu matchen. Das nächste Zeichen ist jedoch `a`, was nicht mit `"b"` im Input übereinstimmt.
2. Das Muster `(.*?)` passt auf `"b"`, damit das `a` im Muster mit dem ersten `"a"` in `"baaabaac"` übereinstimmt.
3. An dieser Position ist das Lookahead erfolgreich, denn wenn `(a+)` auf `"aa"` passt, dann passt `(a+)b\2c` auf `"aabaac"`. Dies führt dazu, dass die Assertion fehlschlägt, sodass der Matcher ein Backtracking durchführt.
4. Das Muster `(.*?)` passt auf das `"ba"`, damit das `a` im Muster mit dem zweiten `"a"` in `"baaabaac"` übereinstimmt.
5. An dieser Position schlägt das Lookahead fehl, weil der restliche Input nicht dem Muster "beliebige Anzahl von `"a"`s, ein `"b"`, dieselbe Anzahl von `"a"`s, ein `c`" folgt. Dies führt dazu, dass die Assertion erfolgreich ist.
6. Da jedoch nichts innerhalb der Assertion gematcht wurde, hat der Backreference `\2` keinen Wert, sodass er die leere Zeichenkette matcht. Dies führt dazu, dass der restliche Input durch das `(.*)` am Ende verbraucht wird.

Normalerweise können Assertions nicht [quantifiziert](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) werden. Im [Unicode-unaware mode](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) können Lookahead-Assertions jedoch quantifiziert werden. Dies ist eine [veraltete Syntax für Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) und sollte nicht verwendet werden.

```js
/(?=a)?b/.test("b"); // true; the lookahead is matched 0 time
```

## Beispiele

### Zeichenfolgen matchen, ohne sie zu verbrauchen

Manchmal ist es nützlich zu validieren, dass die gematchte Zeichenfolge von etwas gefolgt wird, ohne dieses als Ergebnis zurückzugeben. Das folgende Beispiel matched eine Zeichenfolge, die von einem Komma/Punkt gefolgt wird, jedoch wird das Satzzeichen nicht im Ergebnis enthalten:

```js
function getFirstSubsentence(str) {
  return /^.*?(?=[,.])/.exec(str)?.[0];
}

getFirstSubsentence("Hello, world!"); // "Hello"
getFirstSubsentence("Thank you."); // "Thank you"
```

Ein ähnlicher Effekt kann erzielt werden, indem man das Submatch, das Sie interessiert, [erfasst](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group).

### Muster-Subtraktion und Schnittmenge

Mit Lookahead können Sie eine Zeichenfolge mit mehreren unterschiedlichen Mustern matchen, wodurch Sie komplexe Beziehungen wie Subtraktion (ist X, aber nicht Y) und Schnittmenge (ist sowohl X als auch Y) ausdrücken können.

Das folgende Beispiel matched jeden [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers), der kein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ist (hier werden aus Gründen der Kürze nur drei reservierte Wörter gezeigt; weitere reservierte Wörter können in dieser Disjunktion hinzugefügt werden). Die Syntax `[$_\p{ID_Start}][$\p{ID_Continue}]*` beschreibt exakt die Menge von Bezeichner-Strings in der Sprachspezifikation; mehr über Bezeichner finden Sie in der [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) und die `\p`-Escape in [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape).

```js
function isValidIdentifierName(str) {
  const re = /^(?!(?:break|case|catch)$)[$_\p{ID_Start}][$\p{ID_Continue}]*$/u;
  return re.test(str);
}

isValidIdentifierName("break"); // false
isValidIdentifierName("foo"); // true
isValidIdentifierName("cases"); // true
```

Das folgende Beispiel matched eine Zeichenfolge, die sowohl ASCII ist als auch als Bezeichnerteil verwendet werden kann:

```js
function isASCIIIDPart(char) {
  return /^(?=\p{ASCII}$)\p{ID_Start}$/u.test(char);
}

isASCIIIDPart("a"); // true
isASCIIIDPart("α"); // false
isASCIIIDPart(":"); // false
```

Wenn Sie Schnittmenge und Subtraktion mit endlich vielen Zeichen durchführen, könnten Sie die Syntax der [Zeichenmengen-Schnittmenge](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) verwenden, die mit dem `v`-Flag aktiviert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Input-Grenz-Assertion: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Wortgrenzen-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Capturing Group: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
