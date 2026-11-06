---
title: "Lookahead-Assertion: (?=...), (?!...)"
slug: Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion
l10n:
  sourceCommit: 288e644117c29285df2acf37a2ac97f57546a146
---

Eine **Lookahead-Assertion** „blickt voraus“: Sie versucht, die nachfolgende Eingabe mit dem angegebenen Muster abzugleichen, verbraucht dabei aber keinen Teil der Eingabe. Wenn der Abgleich erfolgreich ist, bleibt die aktuelle Position in der Eingabe unverändert.

## Syntax

```regex
(?=pattern)
(?!pattern)
```

### Parameter

- `pattern`
  - : Ein Muster, das alles enthalten kann, was in einem Regex-Literal zulässig ist, einschließlich einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Beschreibung

Ein regulärer Ausdruck gleicht die Eingabe im Allgemeinen von links nach rechts ab. Daher heißen Lookahead- und [Lookbehind-Assertions](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) so: Lookahead prüft, was rechts von der aktuellen Position steht, und Lookbehind prüft, was links davon steht.

Damit eine `(?=pattern)`-Assertion erfolgreich ist, muss `pattern` mit dem Text nach der aktuellen Position übereinstimmen. Die aktuelle Position wird dabei nicht verändert. Die Form `(?!pattern)` kehrt die Bedingung um: Sie ist erfolgreich, wenn `pattern` an der aktuellen Position nicht übereinstimmt.

`pattern` kann [Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) enthalten. Weitere Informationen zum Verhalten in diesem Fall finden Sie auf der Seite zu Erfassungsgruppen.

Anders als bei anderen Operatoren regulärer Ausdrücke findet kein Backtracking in eine Lookahead-Assertion hinein statt – dieses Verhalten wurde von Perl übernommen. Das ist nur relevant, wenn `pattern` [Erfassungsgruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) enthält und das Muster nach der Lookahead-Assertion [Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) auf diese Gruppen enthält. Zum Beispiel:

```js
/(?=(a+))a*b\1/.exec("baabac"); // ['aba', 'a']
// Not ['aaba', 'a']
```

Der Abgleich des obigen Musters läuft wie folgt ab:

1. Die Lookahead-Assertion `(a+)` ist vor dem ersten `"a"` in `"baabac"` erfolgreich. Da der Quantifizierer gierig ist, wird `"aa"` erfasst.
2. `a*b` stimmt mit `"aab"` in `"baabac"` überein, weil Lookahead-Assertions die Zeichenfolgen, mit denen sie übereinstimmen, nicht verbrauchen.
3. `\1` stimmt nicht mit der folgenden Zeichenfolge überein: Dafür wären zwei `"a"` erforderlich, aber es ist nur eines vorhanden. Der Matcher führt daher Backtracking aus, geht jedoch nicht in die Lookahead-Assertion zurück. Die Erfassungsgruppe kann somit nicht auf ein `"a"` reduziert werden, und der gesamte Abgleich schlägt an dieser Stelle fehl.
4. `exec()` versucht den Abgleich an der nächsten Position erneut – vor dem zweiten `"a"`. Diesmal stimmt die Lookahead-Assertion mit `"a"` überein und `a*b` mit `"ab"`. Der Rückverweis `\1` stimmt mit dem erfassten `"a"` überein, und der Abgleich ist erfolgreich.

Wenn der reguläre Ausdruck durch Backtracking in die Lookahead-Assertion zurückkehren und die dort getroffene Entscheidung ändern könnte, wäre der Abgleich bereits in Schritt 3 erfolgreich: `(a+)` würde mit dem ersten `"a"` übereinstimmen (statt mit den ersten beiden `"a"`), und `a*b` würde mit `"aab"` übereinstimmen. Ein erneuter Versuch an der nächsten Eingabeposition wäre dann nicht nötig.

Negative Lookahead-Assertions können ebenfalls Erfassungsgruppen enthalten. Rückverweise auf diese Gruppen sind jedoch nur innerhalb von `pattern` sinnvoll: Wenn der Abgleich fortgesetzt wird, darf `pattern` nicht übereingestimmt haben, da die Assertion sonst fehlschlagen würde. Deshalb sind Rückverweise auf solche Erfassungsgruppen außerhalb von `pattern` immer erfolgreich. Zum Beispiel:

```js
/(.*?)a(?!(a+)b\2c)\2(.*)/.exec("baaabaac"); // ['baaabaac', 'ba', undefined, 'abaac']
```

Der Abgleich des obigen Musters läuft wie folgt ab:

1. Das Muster `(.*?)` ist nicht gierig und versucht daher zunächst, mit keinem Zeichen übereinzustimmen. Das nächste Zeichen im Muster ist jedoch `a`, das nicht mit `"b"` in der Eingabe übereinstimmt.
2. Das Muster `(.*?)` stimmt mit `"b"` überein, sodass das `a` im Muster mit dem ersten `"a"` in `"baaabaac"` übereinstimmt.
3. An dieser Position findet die Lookahead-Assertion eine Übereinstimmung: Wenn `(a+)` mit `"aa"` übereinstimmt, dann stimmt `(a+)b\2c` mit `"aabaac"` überein. Dadurch schlägt die negative Assertion fehl, und der Matcher führt Backtracking aus.
4. Das Muster `(.*?)` stimmt mit `"ba"` überein, sodass das `a` im Muster mit dem zweiten `"a"` in `"baaabaac"` übereinstimmt.
5. An dieser Position findet die Lookahead-Assertion keine Übereinstimmung, weil die verbleibende Eingabe nicht dem Muster „beliebig viele `"a"`, ein `"b"`, dieselbe Anzahl von `"a"`, ein `c`“ folgt. Dadurch ist die negative Assertion erfolgreich.
6. Da innerhalb der Assertion jedoch nichts erfasst wurde, hat der Rückverweis `\2` keinen Wert und stimmt mit der leeren Zeichenfolge überein. Der Rest der Eingabe wird deshalb vom abschließenden `(.*)` verbraucht.

Normalerweise können Assertions nicht [quantifiziert](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) werden. Im [Modus ohne Unicode-Unterstützung](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) können Lookahead-Assertions jedoch quantifiziert werden. Dies ist eine [veraltete Syntax aus Gründen der Webkompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), auf die Sie sich nicht verlassen sollten.

```js
/(?=a)?b/.test("b"); // true; the lookahead is matched 0 times
```

## Beispiele

### Zeichenfolgen abgleichen, ohne sie zu verbrauchen

Manchmal ist es nützlich zu prüfen, ob auf eine übereinstimmende Zeichenfolge etwas Bestimmtes folgt, ohne dieses Etwas in das Ergebnis aufzunehmen. Das folgende Beispiel gleicht eine Zeichenfolge ab, auf die ein Komma oder Punkt folgt. Das Satzzeichen ist jedoch nicht im Ergebnis enthalten:

```js
function getFirstSubsentence(str) {
  return /^.*?(?=[,.])/.exec(str)?.[0];
}

getFirstSubsentence("Hello, world!"); // "Hello"
getFirstSubsentence("Thank you."); // "Thank you"
```

Ein ähnlicher Effekt lässt sich erzielen, indem Sie den gewünschten Teilabgleich mit einer [Erfassungsgruppe](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) erfassen.

### Subtraktion und Schnittmenge von Mustern

Mit einer Lookahead-Assertion können Sie eine Zeichenfolge mehrfach mit verschiedenen Mustern abgleichen. So lassen sich komplexe Beziehungen wie eine Subtraktion (X, aber nicht Y) oder eine Schnittmenge (sowohl X als auch Y) ausdrücken.

Das folgende Beispiel gleicht jeden [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) ab, der kein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ist. Der Kürze halber werden hier nur drei reservierte Wörter gezeigt; weitere können der Disjunktion hinzugefügt werden. Die Syntax `[$_\p{ID_Start}][$\p{ID_Continue}]*` beschreibt genau die Menge der Zeichenfolgen, die laut Sprachspezifikation als Bezeichner zulässig sind. Weitere Informationen finden Sie unter [lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) sowie zum Escape `\p` unter [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape).

```js
function isValidIdentifierName(str) {
  const re = /^(?!(?:break|case|catch)$)[$_\p{ID_Start}][$\p{ID_Continue}]*$/u;
  return re.test(str);
}

isValidIdentifierName("break"); // false
isValidIdentifierName("foo"); // true
isValidIdentifierName("cases"); // true
```

Das folgende Beispiel gleicht eine Zeichenfolge ab, die aus ASCII-Zeichen besteht und als Bestandteil eines Bezeichners verwendet werden kann:

```js
function isASCIIIDPart(char) {
  return /^(?=\p{ASCII}$)[$\p{ID_Continue}]$/u.test(char);
}

isASCIIIDPart("a"); // true
isASCIIIDPart("α"); // false
isASCIIIDPart(":"); // false
```

Wenn Sie eine Schnittmenge oder Subtraktion für eine endliche Anzahl von Zeichen bilden möchten, können Sie die durch das Flag `v` aktivierte Syntax für [Schnittmengen von Zeichensätzen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Assertion für Eingabegrenzen: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Assertion für Wortgrenzen: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Erfassungsgruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
