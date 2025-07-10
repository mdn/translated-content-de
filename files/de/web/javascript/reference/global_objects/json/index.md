---
title: JSON
slug: Web/JavaScript/Reference/Global_Objects/JSON
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Das **`JSON`** Namespace-Objekt enthält statische Methoden zum Parsen von Werten aus und Umwandeln von Werten in [JavaScript Object Notation](https://json.org/) ({{Glossary("JSON", "JSON")}}).

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `JSON` kein Konstruktor. Sie können es nicht mit dem [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das `JSON`-Objekt als eine Funktion aufrufen. Alle Eigenschaften und Methoden von `JSON` sind statisch (genauso wie das {{jsxref("Math")}} Objekt).

### Unterschiede zwischen JavaScript und JSON

JSON ist eine Syntax zur Serialisierung von Objekten, Arrays, Zahlen, Zeichenfolgen, booleschen Werten und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null). Sie basiert auf der JavaScript-Syntax, ist jedoch von JavaScript unterschiedlich: Der Großteil von JavaScript ist _nicht_ JSON. Zum Beispiel:

- Objekte und Arrays
  - : Eigenschaftsnamen müssen doppelt-angeführte Zeichenfolgen sein; [nachgestellte Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) sind verboten.
- Zahlen
  - : Führende Nullen sind untersagt. Ein Dezimalpunkt muss von mindestens einer Ziffer gefolgt werden. `NaN` und `Infinity` werden nicht unterstützt.

Jeder JSON-Text ist ein gültiger JavaScript-Ausdruck, aber nur nach der [JSON-Superset](https://github.com/tc39/proposal-json-superset)-Revision. Vor der Revision sind U+2028 LINIENTRENNER und U+2029 ABSATZTRENNER in Zeichenfolgenliteralen und Eigenschaftsschlüsseln in JSON erlaubt; die gleiche Verwendung in JavaScript-Zeichenfolgenliteralen führt zu einem {{jsxref("SyntaxError")}}.

Andere Unterschiede sind, dass nur doppelt-angeführte Zeichenfolgen zulässig sind und keine Unterstützung für {{jsxref("undefined")}} oder Kommentare existiert. Für diejenigen, die ein benutzerfreundlicheres Konfigurationsformat auf Basis von JSON verwenden möchten, gibt es [JSON5](https://json5.org/), das vom Babel-Compiler verwendet wird, und das häufiger verwendete [YAML](https://en.wikipedia.org/wiki/YAML).

Der gleiche Text kann auch unterschiedliche Werte in JavaScript-Objektliteralen im Vergleich zu JSON darstellen. Weitere Informationen finden Sie unter [Objektliterale-Syntax vs. JSON](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#object_literal_syntax_vs._json).

### Vollständige JSON-Grammatik

Die gültige JSON-Syntax ist formal durch die folgende Grammatik definiert, ausgedrückt in [ABNF](https://en.wikipedia.org/wiki/Augmented_Backus%E2%80%93Naur_form), und entnommen aus dem [IETF JSON Standard (RFC)](https://datatracker.ietf.org/doc/html/rfc8259):

```plain
JSON-text = object / array
begin-array     = ws %x5B ws  ; [ left square bracket
begin-object    = ws %x7B ws  ; { left curly bracket
end-array       = ws %x5D ws  ; ] right square bracket
end-object      = ws %x7D ws  ; } right curly bracket
name-separator  = ws %x3A ws  ; : colon
value-separator = ws %x2C ws  ; , comma
ws = *(
     %x20 /              ; Space
     %x09 /              ; Horizontal tab
     %x0A /              ; Line feed or New line
     %x0D                ; Carriage return
     )
value = false / null / true / object / array / number / string
false = %x66.61.6c.73.65   ; false
null  = %x6e.75.6c.6c      ; null
true  = %x74.72.75.65      ; true
object = begin-object [ member *( value-separator member ) ]
         end-object
member = string name-separator value
array = begin-array [ value *( value-separator value ) ] end-array
number = [ minus ] int [ frac ] [ exp ]
decimal-point = %x2E       ; .
digit1-9 = %x31-39         ; 1-9
e = %x65 / %x45            ; e E
exp = e [ minus / plus ] 1*DIGIT
frac = decimal-point 1*DIGIT
int = zero / ( digit1-9 *DIGIT )
minus = %x2D               ; -
plus = %x2B                ; +
zero = %x30                ; 0
string = quotation-mark *char quotation-mark
char = unescaped /
    escape (
        %x22 /          ; "    quotation mark  U+0022
        %x5C /          ; \    reverse solidus U+005C
        %x2F /          ; /    solidus         U+002F
        %x62 /          ; b    backspace       U+0008
        %x66 /          ; f    form feed       U+000C
        %x6E /          ; n    line feed       U+000A
        %x72 /          ; r    carriage return U+000D
        %x74 /          ; t    tab             U+0009
        %x75 4HEXDIG )  ; uXXXX                U+XXXX
escape = %x5C              ; \
quotation-mark = %x22      ; "
unescaped = %x20-21 / %x23-5B / %x5D-10FFFF
HEXDIG = DIGIT / %x41-46 / %x61-66   ; 0-9, A-F, or a-f
       ; HEXDIG equivalent to HEXDIG rule in [RFC5234]
DIGIT = %x30-39            ; 0-9
      ; DIGIT equivalent to DIGIT rule in [RFC5234]
```

Unbedeutende {{Glossary("whitespace", "Leerzeichen")}} können überall vorhanden sein, außer innerhalb eines `JSONNumber` (Zahlen dürfen keine Leerzeichen enthalten) oder `JSONString` (wo es als das entsprechende Zeichen in der Zeichenfolge interpretiert wird oder einen Fehler verursachen würde). Die Tabulatorzeichen (U+0009), Wagenrücklaufzeichen (U+000D), Zeilenumbruch (U+000A) und Leerzeichen (U+0020) sind die einzigen gültigen Leerzeichen-Zeichen.

## Statische Eigenschaften

- `JSON[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist die Zeichenfolge `"JSON"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("JSON.isRawJSON()")}}
  - : Testet, ob ein Wert ein von {{jsxref("JSON.rawJSON()")}} zurückgegebenes Objekt ist.
- {{jsxref("JSON.parse()")}}
  - : Parst einen Zeichenfolgen-Text als JSON, transformiert optional den erzeugten Wert und seine Eigenschaften und gibt den Wert zurück.
- {{jsxref("JSON.rawJSON()")}}
  - : Erstellt ein "raw JSON"-Objekt, das ein Stück JSON-Text enthält. Beim Serialisieren zu JSON wird das raw JSON-Objekt behandelt, als ob es bereits ein Stück JSON wäre. Dieser Text muss gültiges JSON sein.
- {{jsxref("JSON.stringify()")}}
  - : Gibt eine JSON-Zeichenfolge zurück, die dem angegebenen Wert entspricht, und schließt optional nur bestimmte Eigenschaften ein oder ersetzt Eigenschaftswerte auf benutzerdefinierte Weise.

## Beispiele

### JSON-Beispiel

```json
{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}
```

Sie können die {{jsxref("JSON.parse()")}}-Methode verwenden, um die obige JSON-Zeichenfolge in ein JavaScript-Objekt umzuwandeln:

```js
const jsonText = `{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}`;

console.log(JSON.parse(jsonText));
```

### Verlustfreie Zahlen-Serialisierung

JSON kann Zahlenliterale mit beliebiger Genauigkeit enthalten. Allerdings ist es nicht möglich, alle JSON-Zahlen exakt in JavaScript darzustellen, da JavaScript eine Gleitkommadarstellung verwendet, die eine feste Genauigkeit hat. Zum Beispiel gilt `12345678901234567890 === 12345678901234567000` in JavaScript, weil sie dieselbe Gleitkommadarstellung haben. Das bedeutet, dass es keine JavaScript-Zahl gibt, die exakt der `12345678901234567890` JSON-Zahl entspricht.

Angenommen, Sie haben eine exakte Repräsentation einer Zahl (entweder über {{jsxref("BigInt")}} oder eine benutzerdefinierte Bibliothek):

```js
const data = {
  // Using a BigInt here to store the exact value,
  // but it can also be a custom high-precision number library,
  // if the number might not be an integer.
  gross_gdp: 12345678901234567890n,
};
```

Sie möchten sie serialisieren und dann zur exakt gleichen Zahl parsen. Es gibt verschiedene Schwierigkeiten:

- Auf der Serialisierungsseite, um eine Zahl in JSON zu erhalten, müssen Sie eine Zahl an `JSON.stringify` übergeben, entweder über die `replacer`-Funktion oder die `toJSON`-Methode. Aber in beiden Fällen haben Sie bereits die Genauigkeit bei der Zahlenkonvertierung verloren. Wenn Sie eine Zeichenfolge an `JSON.stringify` übergeben, wird sie als Zeichenfolge, nicht als Zahl serialisiert.
- Auf der Parsingseite können nicht alle Zahlen exakt dargestellt werden. Zum Beispiel gibt `JSON.parse("12345678901234567890")` `12345678901234568000` zurück, weil die Zahl auf die nächste darstellbare Zahl gerundet wird. Selbst wenn Sie eine `reviver`-Funktion verwenden, wird die Zahl vor dem Aufruf der `reviver`-Funktion bereits gerundet.

Es gibt im Allgemeinen zwei Möglichkeiten, sicherzustellen, dass Zahlen verlustfrei in JSON umgewandelt und zurückgeparsed werden: eine umfasst eine JSON-Zahl, die andere eine JSON-Zeichenfolge. JSON ist ein _Kommunikationsformat_, daher kommunizieren Sie wahrscheinlich mit einem anderen System (HTTP-Anfrage, Speicherung in einer Datenbank usw.), wenn Sie JSON verwenden. Die beste Lösung hängt vom empfangenden System ab.

#### Verwenden von JSON-Zeichenfolgen

Wenn das empfangende System nicht dieselben JSON-Verarbeitungsfähigkeiten wie JavaScript hat und keine hochpräzisen Zahlen unterstützt, möchten Sie die Zahl möglicherweise als Zeichenfolge serialisieren und sie dann als Zeichenfolge auf der Empfangsseite behandeln. Dies ist auch die einzige Option in älteren JavaScript-Versionen.

Um anzugeben, wie benutzerdefinierte Datentypen (einschließlich `BigInt`) zu JSON serialisiert werden sollen, fügen Sie entweder eine `toJSON`-Methode zu Ihrem Datentyp hinzu oder verwenden Sie die `replacer`-Funktion von {{jsxref("JSON.stringify()")}}.

```js
// Using toJSON() method
BigInt.prototype.toJSON = function () {
  return this.toString();
};
const str1 = JSON.stringify(data);

// Using JSON.stringify() with replacer
const str2 = JSON.stringify(data, (key, value) => {
  if (key === "gross_gdp") {
    return value.toString();
  }
  return value;
});
```

In beiden Fällen sieht der JSON-Text aus wie `{"gross_gdp":"12345678901234567890"}`, wobei der Wert eine Zeichenfolge, keine Zahl ist. Auf der Empfangsseite können Sie dann das JSON parsen und die Zeichenfolge verarbeiten.

#### Verwenden von JSON-Zahlen

Wenn der Empfänger dieser Nachricht nativ hochpräzise Zahlen unterstützt (wie z.B. Python Integer), ist es offensichtlich besser, Zahlen als JSON-Zahlen zu übermitteln, da sie direkt in den hochpräzisen Typ geparst werden können, anstelle einer Zeichenfolge aus JSON zu parsen und dann eine Zahl aus der Zeichenfolge zu parsen. In JavaScript können Sie beliebige Datentypen zu JSON-Zahlen serialisieren, ohne zuerst einen Zahlenwert zu erzeugen (was zu einem Verlust der Genauigkeit führen würde), indem Sie {{jsxref("JSON.rawJSON()")}} verwenden, um genau anzugeben, wie der JSON-Quelltext aussehen sollte.

```js
// Using toJSON() method
BigInt.prototype.toJSON = function () {
  return JSON.rawJSON(this.toString());
};
const str1 = JSON.stringify(data);

// Using JSON.stringify() with replacer
const str2 = JSON.stringify(data, (key, value) => {
  if (key === "gross_gdp") {
    return JSON.rawJSON(value.toString());
  }
  return value;
});
```

Der an `JSON.rawJSON` übergebene Text wird behandelt, als wäre er bereits ein JSON-Stück, sodass er nicht erneut als Zeichenfolge serialisiert wird. Daher sieht der JSON-Text wie `{"gross_gdp":12345678901234567890}` aus, wobei der Wert eine Zahl ist. Dieses JSON kann dann vom Empfänger ohne zusätzliche Verarbeitung geparst werden, vorausgesetzt, dass das empfangende System nicht dieselben Präzisionsbeschränkungen wie JavaScript hat.

Bei der Interpretation von JSON mit hochpräzisen Zahlen in JavaScript ist besondere Vorsicht geboten, da, wenn `JSON.parse()` die `reviver`-Funktion aufruft, der empfangene Wert bereits geparst (und in der Genauigkeit verloren) wurde. Sie können den `context.source`-Parameter der `reviver`-Funktion von {{jsxref("JSON.parse()")}} verwenden, um die Zahl selbst erneut zu parsen.

```js
const parsedData = JSON.parse(str, (key, value, context) => {
  if (key === "gross_gdp") {
    // Or use the constructor of your custom high-precision number library
    return BigInt(context.source);
  }
  return value;
});
// { gross_gdp: 12345678901234567890n }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JSON Diff](https://json-diff.com/)
- [JSON Beautifier/Editor](https://jsonbeautifier.org/)
- [JSON Parser](https://jsonparser.org/)
- [JSON Validator](https://tools.learningcontainer.com/json-validator/)
