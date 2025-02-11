---
title: RegExp.prototype.exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`exec()`** von {{jsxref("RegExp")}}-Instanzen führt eine Suche mit diesem regulären Ausdruck in einer angegebenen Zeichenkette durch und gibt ein Ergebnis-Array oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.exec()")}}

```js interactive-example
const regex1 = RegExp("foo*", "g");
const str1 = "table football, foosball";
let array1;

while ((array1 = regex1.exec(str1)) !== null) {
  console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
  // Expected output: "Found foo. Next starts at 9."
  // Expected output: "Found foo. Next starts at 19."
}
```

## Syntax

```js-nolint
exec(str)
```

### Parameter

- `str`
  - : Die Zeichenkette, gegen die der reguläre Ausdruck abgeglichen werden soll. Alle Werte werden [zu Zeichenketten konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher bewirkt das Weglassen oder Übergeben von `undefined`, dass `exec()` nach der Zeichenkette `"undefined"` sucht, was selten gewünscht ist.

### Rückgabewert

Schlägt der Abgleich fehl, gibt die Methode `exec()` [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück und setzt die [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)-Eigenschaft der Regex auf `0`.

Bei einem erfolgreichen Abgleich gibt die Methode `exec()` ein Array zurück und aktualisiert die [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)-Eigenschaft des regulären Ausdruck-Objekts. Das zurückgegebene Array enthält den abgeglichenen Text als erstes Element und dann ein Element für jede erfasste Gruppe des abgeglichenen Textes. Das Array hat auch die folgenden zusätzlichen Eigenschaften:

- `index`
  - : Der nullbasierte Index des Abgleichs in der Zeichenkette.
- `input`
  - : Die ursprüngliche Zeichenkette, die abgeglichen wurde.
- `groups`
  - : Ein [`Null-Prototyp-Objekt`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) von benannten Erfassungsgruppen, deren Schlüssel die Namen und Werte die Gruppen sind, oder {{jsxref("undefined")}}, wenn keine benannten Erfassungsgruppen definiert wurden. Weitere Informationen finden Sie unter [Erfassungsgruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).
- `indices` {{optional_inline}}

  - : Diese Eigenschaft ist nur vorhanden, wenn das [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)-Flag gesetzt ist. Es handelt sich um ein Array, bei dem jeder Eintrag die Grenzen eines Teilzeichenketten-Abgleichs darstellt. Der Index jedes Elements in diesem Array entspricht dem Index des jeweiligen Teilzeichenketten-Abgleichs im von `exec()` zurückgegebenen Array. Anders ausgedrückt repräsentiert der erste `indices`-Eintrag den gesamten Abgleich, der zweite Eintrag repräsentiert die erste Erfassungsgruppe usw. Jeder Eintrag selbst ist ein Array mit zwei Elementen, wobei die erste Zahl den Startindex und die zweite Zahl den Endindex des Abgleichs darstellt.

    Das `indices`-Array hat zusätzlich eine `groups`-Eigenschaft, die ein [`Null-Prototyp-Objekt`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) aller benannten Erfassungsgruppen enthält. Die Schlüssel sind die Namen der Erfassungsgruppen, und jeder Wert ist ein Array mit zwei Elementen, wobei die erste Zahl den Startindex und die zweite Zahl den Endindex der Erfassungsgruppe darstellt. Enthält der reguläre Ausdruck keine benannten Erfassungsgruppen, ist `groups` `undefined`.

## Beschreibung

JavaScript-{{jsxref("RegExp")}}-Objekte sind _zustandsbehaftet_, wenn die [global](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)- oder [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)-Flags gesetzt sind (z. B. `/foo/g` oder `/foo/y`). Sie speichern einen [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) des vorherigen Abgleichs. Mithilfe dieses internen Werts kann `exec()` verwendet werden, um mehrere Abgleiche in einer Zeichenkette mit Text (mit Erfassungsgruppen) zu durchlaufen, anstatt nur die übereinstimmenden Zeichenfolgen mit {{jsxref("String.prototype.match()")}} zu erhalten.

Wenn Sie `exec()` verwenden, hat das globale Flag keine Auswirkung, wenn das Sticky-Flag gesetzt ist — der Abgleich ist immer sticky.

`exec()` ist die grundlegende Methode von Regexps. Viele andere Regex-Methoden rufen intern `exec()` auf — einschließlich der Methoden, die von Zeichenkettenmethoden wie [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace) verwendet werden. Obwohl `exec()` leistungsstark (und am effizientesten) ist, wird die Absicht oft nicht am klarsten ausgedrückt.

- Wenn Sie nur überprüfen möchten, ob der reguläre Ausdruck eine Zeichenkette abgleicht, aber nicht, was genau gematcht wird, verwenden Sie stattdessen {{jsxref("RegExp.prototype.test()")}}.
- Wenn Sie alle Vorkommen eines globalen Regex finden und Informationen wie Erfassungsgruppen uninteressant sind, verwenden Sie stattdessen {{jsxref("String.prototype.match()")}}. Darüber hinaus vereinfacht {{jsxref("String.prototype.matchAll()")}} das Abgleichen mehrerer Teile einer Zeichenkette (mit Erfassungsgruppen), indem Sie über die Abgleiche iterieren können.
- Wenn Sie einen Abgleich ausführen, um dessen Indexposition in der Zeichenkette zu finden, verwenden Sie stattdessen die Methode {{jsxref("String.prototype.search()")}}.

`exec()` ist nützlich für komplexe Operationen, die nicht einfach mit einer der oben genannten Methoden durchgeführt werden können, insbesondere wenn Sie den [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) manuell anpassen müssen. ({{jsxref("String.prototype.matchAll()")}} kopiert die Regex, sodass das Ändern von `lastIndex` während der Iteration über `matchAll` die Iteration nicht beeinflusst.) Ein solches Beispiel finden Sie unter [Zurücksetzen von `lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex#rewinding_lastindex).

## Beispiele

### Verwendung von exec()

Betrachten Sie das folgende Beispiel:

```js
// Match "quick brown" followed by "jumps", ignoring characters in between
// Remember "brown" and "jumps"
// Ignore case
const re = /quick\s(?<color>brown).+?(jumps)/dgi;
const result = re.exec("The Quick Brown Fox Jumps Over The Lazy Dog");
```

Die folgende Tabelle zeigt den Zustand von `result`, nachdem dieses Skript ausgeführt wurde:

| Eigenschaft | Wert                                                               |
| ----------- | ------------------------------------------------------------------ |
| `[0]`       | `"Quick Brown Fox Jumps"`                                          |
| `[1]`       | `"Brown"`                                                          |
| `[2]`       | `"Jumps"`                                                          |
| `index`     | `4`                                                                |
| `indices`   | `[[4, 25], [10, 15], [20, 25]]`<br />`groups: { color: [10, 15 ]}` |
| `input`     | `"The Quick Brown Fox Jumps Over The Lazy Dog"`                    |
| `groups`    | `{ color: "brown" }`                                               |

Zusätzlich wird `re.lastIndex` auf `25` gesetzt, da dieser Regex global ist.

### Aufeinanderfolgende Abgleiche finden

Wenn Ihr regulärer Ausdruck das [`g`](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags)-Flag verwendet, können Sie die Methode `exec()` mehrmals verwenden, um aufeinanderfolgende Abgleiche in derselben Zeichenkette zu finden. In diesem Fall beginnt die Suche an der Teilzeichenkette von `str`, die durch die {{jsxref("RegExp/lastIndex", "lastIndex")}}-Eigenschaft des regulären Ausdrucks angegeben wird ({{jsxref("RegExp/test", "test()")}} wird ebenfalls die {{jsxref("RegExp/lastIndex", "lastIndex")}}-Eigenschaft voranstellen). Beachten Sie, dass die {{jsxref("RegExp/lastIndex", "lastIndex")}}-Eigenschaft beim Suchen in einer anderen Zeichenkette nicht zurückgesetzt wird; sie beginnt ihre Suche bei ihrem bestehenden {{jsxref("RegExp/lastIndex", "lastIndex")}}.

Angenommen, Sie haben dieses Skript:

```js
const myRe = /ab*/g;
const str = "abbcdefabh";
let myArray;
while ((myArray = myRe.exec(str)) !== null) {
  let msg = `Found ${myArray[0]}. `;
  msg += `Next match starts at ${myRe.lastIndex}`;
  console.log(msg);
}
```

Dieses Skript zeigt den folgenden Text an:

```plain
Found abb. Next match starts at 3
Found ab. Next match starts at 9
```

> [!WARNING]
> Es gibt viele Fallstricke, die dazu führen können, dass dies zu einer Endlosschleife wird!
>
> - Platzieren Sie den regulären Ausdruck-Literal (oder den {{jsxref("RegExp")}}-Konstruktor) _nicht_ innerhalb der `while`-Bedingung – dies würde den Regex bei jeder Iteration neu erstellen und {{jsxref("RegExp/lastIndex", "lastIndex")}} zurücksetzen.
> - Stellen Sie sicher, dass das [globale (`g`) Flag](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) gesetzt ist, oder `lastIndex` wird nie vorangestellt.
> - Wenn der Regex möglicherweise Zeichen mit null Länge abgleicht (z. B. `/^/gm`), erhöhen Sie dessen {{jsxref("RegExp/lastIndex", "lastIndex")}} manuell bei jeder Iteration, um zu vermeiden, dass er an derselben Stelle hängen bleibt.

Solchen Code können Sie meist durch {{jsxref("String.prototype.matchAll()")}} ersetzen, um ihn weniger fehleranfällig zu machen.

### Verwendung von exec() mit RegExp-Literalen

Sie können `exec()` auch verwenden, ohne explizit ein {{jsxref("RegExp")}}-Objekt zu erstellen:

```js
const matches = /(hello \S+)/.exec("This is a hello world!");
console.log(matches[1]);
```

Dies gibt eine Nachricht aus, die `'hello world!'` enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("RegExp")}}
