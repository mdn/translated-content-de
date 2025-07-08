---
title: "Vorwärts-Suche: (?=...), (?!...)"
slug: Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Eine **Vorwärts-Suche** "schaut voraus": Sie versucht, die nachfolgende Eingabe mit dem angegebenen Muster abzugleichen, aber sie verbraucht keinen Teil der Eingabe — wenn der Abgleich erfolgreich ist, bleibt die aktuelle Position in der Eingabe gleich.

## Syntax

```regex
(?=pattern)
(?!pattern)
```

### Parameter

- `pattern`
  - : Ein Muster, das aus allem bestehen kann, was Sie in einem Regex-Literal verwenden können, einschließlich einer [Disjunktion](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Beschreibung

Ein regulärer Ausdruck gleicht im Allgemeinen von links nach rechts ab. Aus diesem Grund werden Vorwärts- und [Rückwärts-Suchen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) so genannt — Vorwärts-Suchen prüfen, was rechts liegt, und Rückwärts-Suchen prüfen, was links liegt.

Damit eine `(?=pattern)`-Suche erfolgreich ist, muss das `pattern` den Text nach der aktuellen Position abgleichen, aber die aktuelle Position wird nicht verändert. Die `(?!pattern)`-Form negiert die Suche — sie ist erfolgreich, wenn das `pattern` an der aktuellen Position nicht übereinstimmt.

Das `pattern` kann [erfassende Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) enthalten. Weitere Informationen zum Verhalten in diesem Fall finden Sie auf der Seite zu erfassenden Gruppen.

Im Gegensatz zu anderen regulären Ausdrucks-Operatoren gibt es kein Backtracking in eine Vorwärts-Suche — dieses Verhalten wird von Perl übernommen. Dies ist nur von Bedeutung, wenn das `pattern` [erfassende Gruppen](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) enthält und das dem Vorwärts-Suchen folgende Muster [Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) auf diese Erfassungen enthält. Zum Beispiel:

```js
/(?=(a+))a*b\1/.exec("baabac"); // ['aba', 'a']
// Not ['aaba', 'a']
```

Das Abgleichen des oben genannten Musters erfolgt wie folgt:

1. Die Vorwärts-Suche `(a+)` ist erfolgreich vor dem ersten `"a"` in `"baabac"`, und `"aa"` wird erfasst, da der Quantor gierig ist.
2. `a*b` stimmt mit dem `"aab"` in `"baabac"` überein, weil Vorwärts-Suchen ihre abgeglichenen Zeichenfolgen nicht verbrauchen.
3. `\1` stimmt nicht mit der folgenden Zeichenfolge überein, weil das 2 `"a"`s erfordert, aber nur 1 verfügbar ist. Der Matcher geht also zurück, aber nicht in die Vorwärts-Suche, sodass die erfassende Gruppe nicht auf 1 `"a"` reduziert werden kann, und der gesamte Abgleich scheitert an diesem Punkt.
4. `exec()` versucht erneut, ab der nächsten Position abzugleichen — vor dem zweiten `"a"`. Dieses Mal stimmt die Vorwärts-Suche mit `"a"` überein, und `a*b` stimmt mit `"ab"` überein. Der Rückverweis `\1` stimmt mit dem erfassten `"a"` überein, und der Abgleich ist erfolgreich.

Wenn der Regex in der Lage wäre, in die Vorwärts-Suche zurückzugehen und die Wahl dort zu überarbeiten, würde der Abgleich in Schritt 3 erfolgreich sein, indem `(a+)` mit dem ersten `"a"` (anstatt der ersten beiden `"a"`s) übereinstimmt und `a*b` mit `"aab"` übereinstimmt, ohne überhaupt die nächste Eingabeposition erneut zu versuchen.

Negative Vorwärts-Suchen können ebenfalls erfassende Gruppen enthalten, aber Rückverweise machen nur innerhalb des `pattern` Sinn, denn wenn der Abgleich fortgesetzt wird, würde `pattern` notwendigerweise nicht übereinstimmen (ansonsten schlägt die Suche fehl). Das bedeutet, dass außerhalb des `pattern` Rückverweise auf diese erfassenden Gruppen in negativen Vorwärts-Suchen immer erfolgreich sind. Zum Beispiel:

```js
/(.*?)a(?!(a+)b\2c)\2(.*)/.exec("baaabaac"); // ['baaabaac', 'ba', undefined, 'abaac']
```

Das Abgleichen des oben genannten Musters erfolgt wie folgt:

1. Das `(.*?)`-Muster ist nicht gierig, also beginnt es damit, nichts abzugleichen. Das nächste Zeichen ist jedoch `a`, was nicht mit `"b"` in der Eingabe übereinstimmt.
2. Das `(.*?)`-Muster stimmt mit `"b"` überein, sodass das `a` im Muster mit dem ersten `"a"` in `"baaabaac"` übereinstimmt.
3. An dieser Position ist die Vorwärts-Suche erfolgreich, weil wenn `(a+)` mit `"aa"` übereinstimmt, dann `(a+)b\2c` mit `"aabaac"` übereinstimmt. Dies führt dazu, dass die Suche fehlschlägt, und der Matcher geht zurück.
4. Das `(.*?)`-Muster stimmt mit dem `"ba"` überein, sodass das `a` im Muster mit dem zweiten `"a"` in `"baaabaac"` übereinstimmt.
5. An dieser Position ist die Vorwärts-Suche nicht erfolgreich, da der verbleibende Input nicht dem Muster "beliebig viele `"a"`s, ein `"b"`, die gleiche Anzahl von `"a"`s, ein `c`" folgt. Dies führt dazu, dass die Suche erfolgreich ist.
6. Da jedoch nichts innerhalb der Suche abgeglichen wurde, hat der Rückverweis `\2` keinen Wert, sodass er mit dem leeren Zeichenfolge übereinstimmt. Dies führt dazu, dass der Rest des Input vom `(.*)` am Ende verbraucht wird.

Normalerweise können Suchausdrücke nicht [quantifiziert](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) werden. Allerdings können Vorwärts-Suchen im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) quantifiziert werden. Dies ist eine [veraltete Syntax für Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), und Sie sollten sich nicht darauf verlassen.

```js
/(?=a)?b/.test("b"); // true; the lookahead is matched 0 time
```

## Beispiele

### Zeichenfolgen abgleichen, ohne sie zu verbrauchen

Manchmal ist es nützlich zu überprüfen, dass die abgeglichene Zeichenfolge von etwas gefolgt wird, ohne das als Ergebnis zurückzugeben. Im folgenden Beispiel stimmt eine Zeichenfolge überein, die von einem Komma oder Punkt gefolgt wird, aber die Interpunktion ist nicht im Ergebnis enthalten:

```js
function getFirstSubsentence(str) {
  return /^.*?(?=[,.])/.exec(str)?.[0];
}

getFirstSubsentence("Hello, world!"); // "Hello"
getFirstSubsentence("Thank you."); // "Thank you"
```

Ein ähnlicher Effekt kann erzielt werden, indem der Teilabgleich, an dem Sie interessiert sind, [erfasst](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) wird.

### Muster-Subtraktion und -Schnittmenge

Mit Vorwärts-Suchen können Sie eine Zeichenfolge mehrfach mit verschiedenen Mustern abgleichen, was es Ihnen ermöglicht, komplexe Beziehungen wie Subtraktion (ist X, aber nicht Y) und Schnittmenge (ist sowohl X als auch Y) auszudrücken.

Im folgenden Beispiel stimmt jedes [Identifier](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) überein, das kein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ist (hier werden nur drei reservierte Wörter der Kürze halber angezeigt; weitere reservierte Wörter können zu dieser Disjunktion hinzugefügt werden). Die `[$_\p{ID_Start}][$\p{ID_Continue}]*`-Syntax beschreibt genau die Menge der Identifier-Zeichenfolgen in der Sprachspezifikation; Sie können mehr über Identifier in der [lexikalischen Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) und den `\p`-Escape in der [Unicode-Zeichenklassen-Escape](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) lesen.

```js
function isValidIdentifierName(str) {
  const re = /^(?!(?:break|case|catch)$)[$_\p{ID_Start}][$\p{ID_Continue}]*$/u;
  return re.test(str);
}

isValidIdentifierName("break"); // false
isValidIdentifierName("foo"); // true
isValidIdentifierName("cases"); // true
```

Im folgenden Beispiel stimmt eine Zeichenfolge überein, die sowohl ASCII ist als auch als Identifier-Teil verwendet werden kann:

```js
function isASCIIIDPart(char) {
  return /^(?=\p{ASCII}$)\p{ID_Start}$/u.test(char);
}

isASCIIIDPart("a"); // true
isASCIIIDPart("α"); // false
isASCIIIDPart(":"); // false
```

Wenn Sie eine Schnittmenge und Subtraktion mit endlich vielen Zeichen durchführen, möchten Sie möglicherweise die [Zeichensatz-Schnittmenge](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class)-Syntax verwenden, die mit dem `v`-Flag aktiviert ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Eingabegrenzen-Assertion: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Wortgrenzen-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Rückwärts-Suche: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Erfassende Gruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
