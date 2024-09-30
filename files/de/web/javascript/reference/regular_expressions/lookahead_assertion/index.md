---
title: "Lookahead-Assertion: (?=...), (?!...)"
slug: Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion
l10n:
  sourceCommit: 542709c06aeb4983329edd5f186689c5401ac522
---

{{jsSidebar}}

Eine **Lookahead-Assertion** "blickt voraus": Sie versucht, den nachfolgenden Input mit dem gegebenen Muster abzugleichen, aber sie verbraucht keinen Teil des Inputs — wenn der Abgleich erfolgreich ist, bleibt die aktuelle Position im Input gleich.

## Syntax

```regex
(?=pattern)
(?!pattern)
```

### Parameter

- `pattern`
  - : Ein Muster, das alles enthalten kann, was Sie in einem Regex-Literal verwenden können, einschließlich einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Beschreibung

Ein regulärer Ausdruck wird im Allgemeinen von links nach rechts abgeglichen. Deshalb werden Lookahead und [Lookbehind](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) als solche bezeichnet — Lookahead bestätigt, was rechts liegt, und Lookbehind bestätigt, was links liegt.

Damit eine `(?=pattern)`-Assertion erfolgreich ist, muss das `pattern` den Text nach der aktuellen Position treffen, aber die aktuelle Position wird nicht verändert. Die `(?!pattern)`-Form negiert die Assertion — sie ist erfolgreich, wenn das `pattern` an der aktuellen Position nicht übereinstimmt.

Das `pattern` kann [Gruppen für den Abgleich](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) enthalten. Siehe die Seite zu den Gruppen für mehr Informationen über das Verhalten in diesem Fall.

Im Gegensatz zu anderen Operatoren regulärer Ausdrücke gibt es kein Zurücksetzen in einem Lookahead — dieses Verhalten wird von Perl geerbt. Dies ist nur von Bedeutung, wenn das `pattern` [Gruppen für den Abgleich](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) enthält und das Muster nach dem Lookahead [Backreferences](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) zu diesen Erfassungen enthält. Zum Beispiel:

```js
/(?=(a+))a*b\1/.exec("baabac"); // ['aba', 'a']
// Not ['aaba', 'a']
```

Das Abgleichen des obigen Musters erfolgt wie folgt:

1. Das Lookahead `(a+)` ist erfolgreich vor dem ersten `"a"` in `"baabac"`, und `"aa"` wird erfasst, da der Quantor gierig ist.
2. `a*b` stimmt mit dem `"aab"` in `"baabac"` überein, da Lookaheads ihre abgeglichenen Zeichenfolgen nicht verbrauchen.
3. `\1` stimmt nicht mit der folgenden Zeichenfolge überein, da dies 2 `"a"`s erfordert, aber nur 1 verfügbar ist. Der Matcher geht also zurück, aber er geht nicht in das Lookahead zurück, sodass die erfasste Gruppe nicht auf 1 `"a"` reduziert werden kann, und der gesamte Abgleich schlägt an diesem Punkt fehl.
4. `exec()` versucht, den Abgleich an der nächsten Position erneut — vor dem zweiten `"a"`. Diesmal stimmt das Lookahead mit `"a"` überein, und `a*b` stimmt mit `"ab"` überein. Der Backreference `\1` stimmt mit dem erfassten `"a"` überein, und der Abgleich ist erfolgreich.

Wenn der Regex in das Lookahead zurücksetzen und die dort getroffene Wahl überarbeiten könnte, würde der Abgleich im Schritt 3 erfolgreich sein, indem `(a+)` mit dem ersten `"a"` übereinstimmt (anstatt mit den ersten beiden `"a"`s) und `a*b` mit `"aab"` übereinstimmt, ohne dass die nächste Eingabeposition sogar erneut versucht wird.

Negative Lookaheads können auch erfasste Gruppen enthalten, aber Backreferences machen nur innerhalb des `pattern` Sinn, da wenn das Abgleichen fortgesetzt wird, das `pattern` notwendigerweise nicht übereinstimmen würde (anderfalls schlägt die Assertion fehl). Das bedeutet, außerhalb des `pattern` sind Backreferences zu diesen erfassten Gruppen in negativen Lookaheads immer erfolgreich. Zum Beispiel:

```js
/(.*?)a(?!(a+)b\2c)\2(.*)/.exec("baaabaac"); // ['baaabaac', 'ba', undefined, 'abaac']
```

Das Abgleichen des obigen Musters erfolgt wie folgt:

1. Das `(.*?)`-Muster ist nicht gierig, beginnt also damit, nichts zu erfassen. Das nächste Zeichen ist jedoch `a`, das nicht mit `"b"` im Input übereinstimmt.
2. Das `(.*?)`-Muster erfasst `"b"`, sodass das `a` im Muster mit dem ersten `"a"` in `"baaabaac"` übereinstimmt.
3. An dieser Position ist das Lookahead erfolgreich, weil wenn `(a+)` mit `"aa"` übereinstimmt, dann `(a+)b\2c` mit `"aabaac"` übereinstimmt. Dies verursacht, dass die Assertion fehlschlägt, sodass der Matcher zurücksetzt.
4. Das `(.*?)`-Muster erfasst das `"ba"`, sodass das `a` im Muster mit dem zweiten `"a"` in `"baaabaac"` übereinstimmt.
5. An dieser Position schlägt das Lookahead fehl, da der verbleibende Input nicht dem Muster "beliebige Anzahl von `"a"`s, ein `"b"`, die gleiche Anzahl von `"a"`s, ein `c`" folgt. Dies verursacht, dass die Assertion erfolgreich ist.
6. Da jedoch nichts innerhalb der Assertion abgeglichen wurde, hat der `\2` Backreference keinen Wert, sodass er dem leeren String entspricht. Dies führt dazu, dass der Rest des Inputs durch das `(.*)` am Ende verbraucht wird.

Normalerweise können Assertions nicht [quantifiziert](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) werden. Im [Unicode-unaware Mode](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode), können Lookahead-Assertions jedoch quantifiziert werden. Dies ist eine [veraltete Syntax für Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und Sie sollten sich nicht darauf verlassen.

```js
/(?=a)?b/.test("b"); // true; the lookahead is matched 0 time
```

## Beispiele

### Zeichenfolgen abgleichen, ohne sie zu konsumieren

Manchmal ist es nützlich, zu validieren, dass die abgeglichene Zeichenfolge von etwas gefolgt wird, ohne das als Ergebnis zurückzugeben. Das folgende Beispiel passt eine Zeichenfolge, die von einem Komma/Punkt gefolgt wird, aber die Interpunktion ist nicht im Ergebnis enthalten:

```js
function getFirstSubsentence(str) {
  return /^.*?(?=[,.])/.exec(str)?.[0];
}

getFirstSubsentence("Hello, world!"); // "Hello"
getFirstSubsentence("Thank you."); // "Thank you"
```

Ein ähnlicher Effekt kann erzielt werden, indem man den Teilstring erfasst, an dem man interessiert ist.

### Musterabzug und Schnittmenge

Mit Lookahead können Sie eine Zeichenfolge mehrmals mit unterschiedlichen Mustern abgleichen, was es Ihnen ermöglicht, komplexe Beziehungen wie Subtraktion (ist X, aber nicht Y) und Schnittmenge (ist sowohl X als auch Y) auszudrücken.

Das folgende Beispiel passt jedes [Identifikator](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers), das kein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ist (nur drei reservierte Wörter sind hier zur Kürze gezeigt; mehr reservierte Wörter können zu dieser Disjunktion hinzugefügt werden). Die `[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*`-Syntax beschreibt genau die Menge der Identifikatorzeichenfolgen in der Sprachspezifikation; Sie können mehr über Identifikatoren im [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) und die `\p`-Escape in der [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) nachlesen.

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

Das folgende Beispiel passt eine Zeichenfolge, die sowohl ASCII ist als auch als Identifikator verwendet werden kann:

```js
function isASCIIIDPart(char) {
  return /^(?=\p{ASCII}$)\p{ID_Start}$/u.test(char);
}

isASCIIIDPart("a"); // true
isASCIIIDPart("α"); // false
isASCIIIDPart(":"); // false
```

Wenn Sie Schnittmenge und Subtraktion mit endlich vielen Zeichen machen, möchten Sie vielleicht die [Zeichensatz-Schnittmenge](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class)-Syntax verwenden, die mit dem `v`-Flag aktiviert ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Assertionen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Eingangsgrenzen-Assertion: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Wortgrenzen-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Erfassungsgruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
