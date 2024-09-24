---
title: "Lookahead-Assertion: (?=...), (?!...)"
slug: Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion
l10n:
  sourceCommit: 542709c06aeb4983329edd5f186689c5401ac522
---

{{jsSidebar}}

Eine **Lookahead-Assertion** "blickt voraus": Sie versucht, die nachfolgende Eingabe mit dem gegebenen Muster abzugleichen, aber sie verbraucht keinen Teil der Eingabe — wenn der Abgleich erfolgreich ist, bleibt die aktuelle Position in der Eingabe gleich.

## Syntax

```regex
(?=pattern)
(?!pattern)
```

### Parameter

- `pattern`
  - : Ein Muster, das aus allem bestehen kann, was Sie in einem Regex-Literal verwenden können, einschließlich einer [Verzweigung](/de/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Beschreibung

Ein regulärer Ausdruck gleicht im Allgemeinen von links nach rechts ab. Deshalb werden Lookahead- und [Lookbehind-](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) Assertions so genannt — Lookahead behauptet, was rechts liegt, und Lookbehind behauptet, was links liegt.

Damit eine `(?=pattern)` Assertion erfolgreich ist, muss das `pattern` den Text nach der aktuellen Position abgleichen, aber die aktuelle Position wird nicht geändert. Die Form `(?!pattern)` negiert die Assertion — sie ist erfolgreich, wenn das `pattern` an der aktuellen Position nicht übereinstimmt.

Das `pattern` kann [Gruppen für die Erfassung](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) enthalten. Weitere Informationen zum Verhalten in diesem Fall finden Sie auf der Seite zu den Erfassungsgruppen.

Im Gegensatz zu anderen Operatoren für reguläre Ausdrücke gibt es kein Backtracking in ein Lookahead — dieses Verhalten wird aus Perl übernommen. Dies ist nur relevant, wenn das `pattern` [Gruppen für die Erfassung](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) enthält und das Muster nach dem Lookahead [Rückverweise](/de/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) auf diese Erfassungen enthält. Zum Beispiel:

```js
/(?=(a+))a*b\1/.exec("baabac"); // ['aba', 'a']
// Nicht ['aaba', 'a']
```

Das Matching des obigen Musters erfolgt wie folgt:

1. Das Lookahead `(a+)` ist vor dem ersten `"a"` in `"baabac"` erfolgreich, und `"aa"` wird erfasst, weil der Quantifizierer gierig ist.
2. `a*b` gleicht dem `"aab"` in `"baabac"` ab, da Lookaheads ihre abgeglichenen Zeichenketten nicht verbrauchen.
3. `\1` stimmt nicht mit der folgenden Zeichenkette überein, da dafür 2 `"a"`s erforderlich wären, aber nur 1 verfügbar ist. Daher geht der Matcher zurück, aber er geht nicht in das Lookahead zurück, sodass die Erfassungsgruppe nicht auf 1 `"a"` reduziert werden kann und das gesamte Matching an diesem Punkt fehlschlägt.
4. `exec()` versucht das Matching an der nächsten Position erneut — vor dem zweiten `"a"`. Diesmal gleicht das Lookahead `"a"` ab und `a*b` gleicht `"ab"` ab. Der Rückverweis `\1` gleicht dem erfassten `"a"` ab und das Matching ist erfolgreich.

Wenn das Regex in das Lookahead zurückgehen und die dort getroffene Auswahl revidieren könnte, würde das Matching in Schritt 3 erfolgreich sein, indem `(a+)` das erste `"a"` (statt der ersten zwei `"a"`s) abgleicht und `a*b` `"aab"` abgleicht, ohne die nächste Eingabeposition erneut zu versuchen.

Auch negative Lookaheads können Erfassungsgruppen enthalten, aber Rückverweise machen nur innerhalb des `pattern` Sinn, denn wenn das Matching fortgesetzt wird, muss das `pattern` notwendigerweise nicht übereinstimmen (sonst scheitert die Assertion). Das bedeutet, dass außerhalb des `pattern` Rückverweise auf diese Erfassungsgruppen in negativen Lookaheads immer erfolgreich sind. Zum Beispiel:

```js
/(.*?)a(?!(a+)b\2c)\2(.*)/.exec("baaabaac"); // ['baaabaac', 'ba', undefined, 'abaac']
```

Das Matching des obigen Musters erfolgt wie folgt:

1. Das `(.*?)` Muster ist nicht gierig, beginnt also damit, nichts abzugleichen. Das nächste Zeichen ist jedoch `a`, das nicht mit `"b"` in der Eingabe übereinstimmt.
2. Das `(.*?)` Muster gleicht `"b"` ab, sodass das `a` im Muster mit dem ersten `"a"` in `"baaabaac"` übereinstimmt.
3. An dieser Position gelingt das Lookahead-Matching, da wenn `(a+)` mit `"aa"` übereinstimmt, dann `(a+)b\2c` mit `"aabaac"` übereinstimmt. Dies führt zum Scheitern der Assertion und der Matcher geht zurück.
4. Das `(.*?)` Muster gleicht `"ba"` ab, sodass das `a` im Muster mit dem zweiten `"a"` in `"baaabaac"` übereinstimmt.
5. An dieser Position scheitert das Lookahead-Matching, da die verbleibende Eingabe nicht dem Muster "beliebige Anzahl von `"a"`s, ein `"b"`, dieselbe Anzahl von `"a"`s, ein `c`" folgt. Die Assertion kann damit erfolgreich sein.
6. Da jedoch innerhalb der Assertion nichts abgestimmt wurde, hat der `\2` Rückverweis keinen Wert, sodass er mit dem leeren String übereinstimmt. Dies führt dazu, dass der Rest der Eingabe durch das `(.*)` am Ende verbraucht wird.

Normalerweise können keine Assertions [quantifiziert](/de/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) werden. Im [Unicode-unbewussten Modus](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode) können Lookahead-Assertions jedoch quantifiziert werden. Dies ist eine [veraltete Syntax für Web-Kompatibilität](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp) und Sie sollten sich nicht darauf verlassen.

```js
/(?=a)?b/.test("b"); // true; das Lookahead wird 0-mal abgeglichen
```

## Beispiele

### Zeichenketten abgleichen, ohne sie zu verbrauchen

Manchmal ist es nützlich zu überprüfen, dass die abgeglichene Zeichenkette von etwas gefolgt wird, ohne dies als Ergebnis zurückzugeben. Das folgende Beispiel gleicht eine Zeichenkette ab, die von einem Komma/Punkt gefolgt wird, aber die Zeichensetzung wird nicht im Ergebnis enthalten:

```js
function getFirstSubsentence(str) {
  return /^.*?(?=[,.])/.exec(str)?.[0];
}

getFirstSubsentence("Hello, world!"); // "Hello"
getFirstSubsentence("Thank you."); // "Thank you"
```

Ein ähnlicher Effekt kann erzielt werden, indem Sie den submatch erfassen, an dem Sie interessiert sind.

### Muster-Subtraktion und -Schnittmenge

Mit Lookahead können Sie eine Zeichenkette mehrfach mit verschiedenen Mustern abgleichen, was es ermöglicht, komplexe Beziehungen wie Subtraktion (ist X, aber nicht Y) und Schnittmenge (ist sowohl X als auch Y) auszudrücken.

Das folgende Beispiel gleicht jeden [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) ab, der kein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ist (hier nur drei reservierte Wörter für die Kürze; mehr reservierte Wörter können dieser Verzweigung hinzugefügt werden). Die `[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*`-Syntax beschreibt genau die Menge an Bezeichner-Zeichenketten in der Sprachspecifikation; Sie können mehr über Bezeichner im [lexikalischen Grammatiker](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) und das `\p`-Escape in der [Unicode-Zeichenklassenflucht](/de/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) lesen.

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

Das folgende Beispiel gleicht eine Zeichenkette ab, die sowohl ASCII ist als auch als Teil eines Bezeichners verwendet werden kann:

```js
function isASCIIIDPart(char) {
  return /^(?=\p{ASCII}$)\p{ID_Start}$/u.test(char);
}

isASCIIIDPart("a"); // true
isASCIIIDPart("α"); // false
isASCIIIDPart(":"); // false
```

Wenn Sie Schnittmengen und Subtraktionen mit endlich vielen Zeichen durchführen, sollten Sie die [Zeichenmengen-Schnittmenge](/de/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class)-Syntax verwenden, die mit dem `v`-Flag aktiviert ist.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Assertions](/de/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) Leitfaden
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Reference/Regular_expressions)
- [Eingabebereichs-Assertion: `^`, `$`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Wortgrenzen-Assertion: `\b`, `\B`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Lookbehind-Assertion: `(?<=...)`, `(?<!...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Erfassungsgruppe: `(...)`](/de/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
