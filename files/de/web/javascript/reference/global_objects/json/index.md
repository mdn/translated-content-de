---
title: JSON
slug: Web/JavaScript/Reference/Global_Objects/JSON
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{JSRef}}

Das **`JSON`** Namespace-Objekt enthält statische Methoden zum Parsen von Werten aus und Konvertieren von Werten in [JavaScript Object Notation](https://json.org/) ({{Glossary("JSON")}}).

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `JSON` kein Konstruktor. Sie können es nicht mit dem [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das `JSON` Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `JSON` sind statisch (genau wie das {{jsxref("Math")}} Objekt).

### Unterschiede zwischen JavaScript und JSON

JSON ist eine Syntax zur Serialisierung von Objekten, Arrays, Zahlen, Zeichenfolgen, Booleschen Werten und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null). Es basiert auf der JavaScript-Syntax, ist jedoch von JavaScript unterschieden: der größte Teil von JavaScript ist _nicht_ JSON. Zum Beispiel:

- Objekte und Arrays
  - : Eigenschaftsnamen müssen Zeichenfolgen in doppelten Anführungszeichen sein; [abschließende Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) sind verboten.
- Zahlen
  - : Führende Nullen sind nicht erlaubt. Ein Dezimalpunkt muss von mindestens einer Ziffer gefolgt werden. `NaN` und `Infinity` werden nicht unterstützt.

Jeder JSON-Text ist ein gültiger JavaScript-Ausdruck, jedoch erst nach der [JSON-Superset](https://github.com/tc39/proposal-json-superset) Revision. Vor der Revision sind U+2028 LINETRENNER und U+2029 ABSATZTRENNER in Zeichenfolgenliteralen und Eigenschaftsschlüsseln in JSON erlaubt; dieselbe Verwendung in JavaScript-Zeichenfolgenliteralen führt zu einem {{jsxref("SyntaxError")}}.

Weitere Unterschiede sind, dass nur Zeichenfolgen in doppelten Anführungszeichen erlaubt sind und es keine Unterstützung für {{jsxref("undefined")}} oder Kommentare gibt. Für diejenigen, die ein benutzerfreundlicheres Konfigurationsformat basierend auf JSON verwenden möchten, gibt es [JSON5](https://json5.org/), das vom Babel-Compiler genutzt wird, und das häufiger verwendete [YAML](https://de.wikipedia.org/wiki/YAML).

Gleicher Text kann unterschiedliche Werte in JavaScript-Objektliteralen vs. JSON darstellen. Weitere Informationen finden Sie unter [Objektliteral-Syntax vs. JSON](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#object_literal_syntax_vs._json).

### Volle JSON-Grammatik

Gültige JSON-Syntax wird formal von der folgenden Grammatik definiert, ausgedrückt in [ABNF](https://de.wikipedia.org/wiki/Augmented_Backus-Naur-Form), und aus dem [IETF JSON-Standard (RFC)](https://datatracker.ietf.org/doc/html/rfc8259) kopiert:

```plain
JSON-text = object / array
begin-array     = ws %x5B ws  ; [ linke eckige Klammer
begin-object    = ws %x7B ws  ; { linke geschweifte Klammer
end-array       = ws %x5D ws  ; ] rechte eckige Klammer
end-object      = ws %x7D ws  ; } rechte geschweifte Klammer
name-separator  = ws %x3A ws  ; : Doppelpunkt
value-separator = ws %x2C ws  ; , Komma
ws = *(
     %x20 /              ; Leerzeichen
     %x09 /              ; Horizontaler Tab
     %x0A /              ; Zeilenumbruch oder neue Zeile
     %x0D                ; Wagenrücklauf
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
        %x22 /          ; "    Anführungszeichen  U+0022
        %x5C /          ; \    Rückwärtsschrägstrich U+005C
        %x2F /          ; /    Schrägstrich       U+002F
        %x62 /          ; b    Rückschritt        U+0008
        %x66 /          ; f    Formularvorschub   U+000C
        %x6E /          ; n    Zeilenumbruch      U+000A
        %x72 /          ; r    Wagenrücklauf      U+000D
        %x74 /          ; t    Tabulator          U+0009
        %x75 4HEXDIG )  ; uXXXX                 U+XXXX
escape = %x5C              ; \
quotation-mark = %x22      ; "
unescaped = %x20-21 / %x23-5B / %x5D-10FFFF
HEXDIG = DIGIT / %x41-46 / %x61-66   ; 0-9, A-F oder a-f
       ; HEXDIG äquivalent zu HEXDIG-Regel in [RFC5234]
DIGIT = %x30-39            ; 0-9
      ; DIGIT äquivalent zu DIGIT-Regel in [RFC5234]
```

Unbedeutende {{Glossary("whitespace")}} können überall anwesend sein, außer innerhalb eines `JSONNumber` (Zahlen dürfen keinen Leerraum enthalten) oder `JSONString` (wo es als das entsprechende Zeichen in der Zeichenfolge interpretiert wird oder einen Fehler verursachen würde). Die Tabulatortaste (U+0009), der Wagenrücklauf (U+000D), der Zeilenumbruch (U+000A) und das Leerzeichen (U+0020) sind die einzigen gültigen Leerzeichenzeichen.

## Statische Eigenschaften

- `JSON[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"JSON"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("JSON.isRawJSON()")}} {{experimental_inline}}
  - : Testet, ob ein Wert ein Objekt ist, das von {{jsxref("JSON.rawJSON()")}} zurückgegeben wird.
- {{jsxref("JSON.parse()")}}
  - : Parst ein Stück Zeichenfolgentext als JSON, transformiert optional den erzeugten Wert und seine Eigenschaften und gibt den Wert zurück.
- {{jsxref("JSON.rawJSON()")}} {{experimental_inline}}
  - : Erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält. Beim Serialisieren zu JSON wird das rohe JSON-Objekt behandelt, als wäre es bereits ein Stück JSON. Dieser Text muss gültiges JSON sein.
- {{jsxref("JSON.stringify()")}}
  - : Gibt eine JSON-Zeichenfolge zurück, die dem angegebenen Wert entspricht, und schließt optional nur bestimmte Eigenschaften ein oder ersetzt Eigenschaftswerte in einer benutzerdefinierten Weise.

## Beispiele

### Beispiel JSON

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

Sie können die {{jsxref("JSON.parse()")}} Methode verwenden, um die obige JSON-Zeichenfolge in ein JavaScript-Objekt zu konvertieren:

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

JSON kann Zahlenliterale in beliebiger Genauigkeit enthalten. Es ist jedoch nicht möglich, alle JSON-Zahlen exakt in JavaScript darzustellen, da JavaScript eine Gleitkommadarstellung verwendet, die eine feste Genauigkeit hat. Zum Beispiel ist `12345678901234567890 === 12345678901234567000` in JavaScript, weil sie die gleiche Gleitkommadarstellung haben. Das bedeutet, dass es keine JavaScript-Zahl gibt, die genau der `12345678901234567890` JSON-Zahl entspricht.

Angenommen, Sie haben eine genaue Darstellung einer Zahl (entweder über {{jsxref("BigInt")}} oder eine benutzerdefinierte Bibliothek):

```js
const data = {
  // Verwenden eines BigInt hier, um den genauen Wert zu speichern,
  // aber es kann auch eine benutzerdefinierte hochpräzise Zahlenbibliothek sein,
  // wenn die Zahl möglicherweise kein Ganzzahlwert ist.
  gross_gdp: 12345678901234567890n,
};
```

Sie möchten es serialisieren und dann auf dieselbe genaue Zahl parsen. Es gibt einige Schwierigkeiten:

- Auf der Serialisierungsseite müssen Sie, um eine Zahl in JSON zu erhalten, eine Zahl an `JSON.stringify` übergeben, entweder über die `replacer`-Funktion oder über die `toJSON`-Methode. In beiden Fällen haben Sie jedoch bereits Präzision beim Zahlentyp verloren. Wenn Sie einen String an `JSON.stringify` übergeben, wird er als Zeichenfolge und nicht als Zahl serialisiert.
- Auf der Parseseite können nicht alle Zahlen exakt dargestellt werden. Zum Beispiel gibt `JSON.parse("12345678901234567890")` `12345678901234568000` zurück, weil die Zahl auf die nächste darstellbare Zahl gerundet wird. Selbst wenn Sie eine `reviver`-Funktion verwenden, wird die Zahl bereits gerundet, bevor die `reviver`-Funktion aufgerufen wird.

Es gibt im Allgemeinen zwei Möglichkeiten, um sicherzustellen, dass Zahlen verlustfrei in JSON konvertiert und zurückgeparst werden: die eine betrifft eine JSON-Zahl, die andere betrifft eine JSON-Zeichenfolge. JSON ist ein _Kommunikationsformat_, also wenn Sie JSON verwenden, kommunizieren Sie wahrscheinlich mit einem anderen System (HTTP-Anfrage, Speicherung in einer Datenbank, etc.). Die beste Lösung hängt vom Empfängersystem ab.

#### Verwendung von JSON-Zeichenfolgen

Wenn das Empfängersystem nicht über dieselben JSON-Verarbeitungsfähigkeiten wie JavaScript verfügt und keine hochpräzisen Zahlen unterstützt, sollten Sie die Zahl als Zeichenfolge serialisieren und dann als String auf der Empfängerseite handhaben. Dies ist auch die einzige Option in älteren JavaScript-Versionen.

Um anzugeben, wie benutzerdefinierte Datentypen (einschließlich `BigInt`) in JSON serialisiert werden sollen, fügen Sie entweder Ihrem Datentyp eine `toJSON`-Methode hinzu oder verwenden Sie die `replacer`-Funktion von {{jsxref("JSON.stringify()")}}.

```js
// Verwendung der Methode toJSON()
BigInt.prototype.toJSON = function () {
  return this.toString();
};
const str1 = JSON.stringify(data);

// Verwendung von JSON.stringify() mit replacer
const str2 = JSON.stringify(data, (key, value) => {
  if (key === "gross_gdp") {
    return value.toString();
  }
  return value;
});
```

In beiden Fällen sieht der JSON-Text so aus: `{"gross_gdp":"12345678901234567890"}`, wobei der Wert eine Zeichenfolge und keine Zahl ist. Anschließend können Sie auf der Empfängerseite das JSON parsen und die Zeichenfolge handhaben.

#### Verwendung von JSON-Zahlen

Wenn der Empfänger dieser Nachricht hochpräzise Zahlen (wie Python-Ganzzahlen) nativ unterstützt, ist es offensichtlich besser, Zahlen als JSON-Zahlen zu übergeben, da sie direkt zum hochpräzisen Typ geparst werden können, anstatt eine Zeichenfolge aus JSON zu parsen und dann eine Zahl aus dem String zu parsen. In JavaScript können Sie willkürliche Datentypen zu JSON-Zahlen serialisieren, ohne zuerst einen Zahlenwert zu erzeugen (was zu Präzisionsverlust führt), indem Sie {{jsxref("JSON.rawJSON()")}} verwenden, um genau anzugeben, wie der JSON-Quelltext aussehen soll.

```js
// Verwendung der Methode toJSON()
BigInt.prototype.toJSON = function () {
  return JSON.rawJSON(this.toString());
};
const str1 = JSON.stringify(data);

// Verwendung von JSON.stringify() mit replacer
const str2 = JSON.stringify(data, (key, value) => {
  if (key === "gross_gdp") {
    return JSON.rawJSON(value.toString());
  }
  return value;
});
```

Der an `JSON.rawJSON` übergebene Text wird behandelt, als wäre er bereits ein Teil von JSON, sodass er nicht erneut als Zeichenfolge serialisiert wird. Daher sieht der JSON-Text so aus: `{"gross_gdp":12345678901234567890}`, wobei der Wert eine Zahl ist. Dieses JSON kann dann vom Empfänger ohne weitere Verarbeitung geparst werden, vorausgesetzt, dass das Empfängersystem nicht dieselben Präzisionsbeschränkungen wie JavaScript hat.

Beim Parsen von JSON, das hochpräzise Zahlen in JavaScript enthält, ist besondere Vorsicht geboten. Wenn `JSON.parse()` die `reviver`-Funktion aufruft, ist der Wert, den Sie erhalten, bereits geparst (und hat Präzision verloren). Sie können den Parameter `context.source` der {{jsxref("JSON.parse()")}} `reviver`-Funktion verwenden, um die Zahl selbst neu zu parsen.

```js
const parsedData = JSON.parse(str, (key, value, context) => {
  if (key === "gross_gdp") {
    // Oder verwenden Sie den Konstruktor Ihrer benutzerdefinierten hochpräzisen Zahlenbibliothek
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

- {{jsxref("Date.prototype.toJSON()")}}
- [JSON Diff](https://json-diff.com/)
- [JSON Beautifier/editor](https://jsonbeautifier.org/)
- [JSON Parser](https://jsonparser.org/)
- [JSON Validator](https://tools.learningcontainer.com/json-validator/)
