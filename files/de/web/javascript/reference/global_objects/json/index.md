---
title: JSON
slug: Web/JavaScript/Reference/Global_Objects/JSON
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Das **`JSON`**-Namensraumobjekt enthält statische Methoden zum Parsen von Werten aus und Konvertieren von Werten in [JavaScript Object Notation](https://json.org/) ({{Glossary("JSON", "JSON")}}).

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `JSON` kein Konstruktor. Sie können es nicht mit dem [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das `JSON`-Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `JSON` sind statisch (genau wie das {{jsxref("Math")}}-Objekt).

### Unterschiede zwischen JavaScript und JSON

JSON ist eine Syntax zur Serialisierung von Objekten, Arrays, Zahlen, Zeichenfolgen, Booleans und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null). Es basiert auf JavaScript-Syntax, ist jedoch von JavaScript zu unterscheiden: der größte Teil von JavaScript ist _nicht_ JSON. Zum Beispiel:

- Objekte und Arrays
  - : Eigenschaftsnamen müssen doppelt-umrandete Zeichenfolgen sein; [nachgestellte Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) sind verboten.
- Zahlen
  - : Führende Nullen sind nicht erlaubt. Ein Dezimalpunkt muss von mindestens einer Ziffer gefolgt werden. `NaN` und `Infinity` werden nicht unterstützt.

Jeder JSON-Text ist ein gültiger JavaScript-Ausdruck, aber erst nach der [JSON superset](https://github.com/tc39/proposal-json-superset)-Revision. Vor der Revision sind U+2028 LINE SEPARATOR und U+2029 PARAGRAPH SEPARATOR in Zeichenfolgenliteralen und Eigenschaftsschlüsseln in JSON erlaubt; aber die gleiche Verwendung in JavaScript-Zeichenfolgenliteralen führt zu einem {{jsxref("SyntaxError")}}.

Weitere Unterschiede beinhalten die Erlaubnis nur doppelt-umrandeter Zeichenfolgen und keine Unterstützung für {{jsxref("undefined")}} oder Kommentare. Für diejenigen, die ein benutzerfreundlicheres Konfigurationsformat basierend auf JSON verwenden möchten, gibt es [JSON5](https://json5.org/), das vom Babel-Compiler verwendet wird, und das häufiger genutzte [YAML](https://de.wikipedia.org/wiki/YAML).

Dasselbe Text kann auch unterschiedliche Werte in JavaScript-Objektliteralen vs. JSON darstellen. Für weitere Informationen siehe [Objektliteral-Syntax vs. JSON](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#object_literal_syntax_vs._json).

### Vollständige JSON-Grammatik

Gültige JSON-Syntax wird formal durch die folgende Grammatik definiert, ausgedrückt in [ABNF](https://de.wikipedia.org/wiki/Augmented_Backus-Naur-Form), und aus dem [IETF JSON-Standard (RFC)](https://datatracker.ietf.org/doc/html/rfc8259) übernommen:

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

Unwesentliche {{Glossary("whitespace", "Leerzeichen")}} dürfen überall außer in einem `JSONNumber` (Zahlen dürfen keine Leerzeichen enthalten) oder `JSONString` (wo sie als das entsprechende Zeichen in der Zeichenfolge interpretiert werden oder einen Fehler verursachen würden) vorhanden sein. Die Tabulator- (U+0009), Wagenrücklauf- (U+000D), Zeilenumbruch- (U+000A) und Leerzeichen- (U+0020) Zeichen sind die einzigen gültigen Leerzeichenzeichen.

## Statische Eigenschaften

- `JSON[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"JSON"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("JSON.isRawJSON()")}}
  - : Prüft, ob ein Wert ein von {{jsxref("JSON.rawJSON()")}} zurückgegebenes Objekt ist.
- {{jsxref("JSON.parse()")}}
  - : Analysiert ein Stück Zeichenfolgen-Text als JSON, transformiert optional den erzeugten Wert und seine Eigenschaften, und gibt den Wert zurück.
- {{jsxref("JSON.rawJSON()")}}
  - : Erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält. Bei der Serialisierung zu JSON wird das rohe JSON-Objekt behandelt, als wäre es bereits ein Stück JSON. Dieser Text muss gültiges JSON sein.
- {{jsxref("JSON.stringify()")}}
  - : Gibt einen JSON-String zurück, der dem angegebenen Wert entspricht, und schließt optional nur bestimmte Eigenschaften ein oder ersetzt Eigenschaftswerte auf benutzerdefinierte Weise.

## Beispiele

### Beispiel-JSON

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

Sie können die {{jsxref("JSON.parse()")}}-Methode verwenden, um den obigen JSON-String in ein JavaScript-Objekt zu konvertieren:

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

### Verlustfreie Zahlenspeicherung

JSON kann Zahlenliterale von beliebiger Genauigkeit enthalten. Es ist jedoch nicht möglich, alle JSON-Zahlen exakt in JavaScript darzustellen, da JavaScript eine Gleitkomma-Darstellung verwendet, die eine feste Genauigkeit hat. Zum Beispiel, `12345678901234567890 === 12345678901234567000` in JavaScript, weil sie die gleiche Gleitkomma-Darstellung haben. Das bedeutet, dass es keine JavaScript-Zahl gibt, die genau der JSON-Zahl `12345678901234567890` entspricht.

Angenommen, Sie haben eine genaue Darstellung einer Zahl (entweder über {{jsxref("BigInt")}} oder eine benutzerdefinierte Bibliothek):

```js
const data = {
  // Using a BigInt here to store the exact value,
  // but it can also be a custom high-precision number library,
  // if the number might not be an integer.
  gross_gdp: 12345678901234567890n,
};
```

Sie möchten sie serialisieren und dann zur gleichen genauen Zahl parsen. Es gibt mehrere Schwierigkeiten:

- Auf der Serialisierungsseite müssen Sie, um eine Zahl in JSON zu erhalten, eine Zahl an `JSON.stringify` übergeben, entweder über die `replacer`-Funktion oder über die `toJSON`-Methode. Aber in jedem Fall haben Sie bereits während der Zahlkonvertierung Genauigkeit verloren. Wenn Sie eine Zeichenfolge an `JSON.stringify` übergeben, wird sie als Zeichenfolge und nicht als Zahl serialisiert.
- Auf der Parsing-Seite können nicht alle Zahlen exakt dargestellt werden. Zum Beispiel gibt `JSON.parse("12345678901234567890")` `12345678901234568000` zurück, weil die Zahl auf die nächste darstellbare Zahl gerundet wird. Auch wenn Sie eine `reviver`-Funktion verwenden, wird die Zahl bereits gerundet, bevor die `reviver`-Funktion aufgerufen wird.

Es gibt grundsätzlich zwei Möglichkeiten, um sicherzustellen, dass Zahlen verlustfrei in JSON konvertiert und zurückgeparst werden: eine davon beinhaltet eine JSON-Zahl, die andere eine JSON-Zeichenfolge. JSON ist ein _Kommunikationsformat_, also wenn Sie JSON verwenden, kommunizieren Sie wahrscheinlich mit einem anderen System (HTTP-Anfrage, Speicherung in einer Datenbank usw.). Die beste Lösung hängt vom empfangenden System ab.

#### Verwendung von JSON-Zeichenfolgen

Wenn das empfangende System nicht die gleichen JSON-Verarbeitungskapazitäten wie JavaScript hat und keine hochpräzisen Zahlen unterstützt, möchten Sie die Zahl möglicherweise als Zeichenfolge serialisieren und sie dann auf der Empfängerseite als Zeichenfolge behandeln. Dies ist auch die einzige Option in älterem JavaScript.

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

In jedem Fall wird der JSON-Text wie `{"gross_gdp":"12345678901234567890"}` aussehen, wobei der Wert eine Zeichenfolge und keine Zahl ist. Dann können Sie auf der Empfängerseite die JSON parsen und die Zeichenfolge verarbeiten.

#### Verwendung von JSON-Zahlen

Wenn der Empfänger dieser Nachricht nativ hochpräzise Zahlen unterstützt (wie z.B. Python-Integer), dann ist es offensichtlich besser, Zahlen als JSON-Zahlen zu übergeben, da sie direkt in den hochpräzisen Typ geparst werden können, anstatt eine Zeichenfolge aus JSON zu parsen und dann eine Zahl aus der Zeichenfolge zu parsen. In JavaScript können Sie willkürliche Datentypen zu JSON-Zahlen serialisieren, ohne zuvor einen Zahlenwert zu produzieren (was zu einem Verlust an Genauigkeit führt), indem Sie {{jsxref("JSON.rawJSON()")}} verwenden, um genau festzulegen, was der JSON-Quelltext sein soll.

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

Der an `JSON.rawJSON` übergebene Text wird behandelt, als wäre er bereits ein Stück JSON, sodass er nicht erneut als Zeichenfolge serialisiert wird. Daher wird der JSON-Text wie `{"gross_gdp":12345678901234567890}` aussehen, wobei der Wert eine Zahl ist. Dieses JSON kann dann vom Empfänger ohne zusätzliche Verarbeitung geparst werden, sofern das Empfängersystem nicht die gleichen Genauigkeitsbeschränkungen wie JavaScript hat.

Beim Parsen von JSON mit hochpräzisen Zahlen in JavaScript ist besondere Vorsicht geboten, da wenn `JSON.parse()` die `reviver`-Funktion aufruft, der Wert, den Sie erhalten, bereits geparst (und dadurch an Genauigkeit verloren hat) ist. Sie können den Parameter `context.source` der {{jsxref("JSON.parse()")}} `reviver`-Funktion verwenden, um die Zahl selbst erneut zu parsen.

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
- [JSON Beautifier/editor](https://jsonbeautifier.org/)
- [JSON Parser](https://jsonparser.org/)
- [JSON Validator](https://tools.learningcontainer.com/json-validator/)
