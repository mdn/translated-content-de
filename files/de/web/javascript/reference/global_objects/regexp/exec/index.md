---
title: RegExp.prototype.exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{JSRef}}

Die **`exec()`**-Methode von {{jsxref("RegExp")}}-Instanzen führt eine Suche mit diesem regulären Ausdruck nach einem Treffer in einem angegebenen String durch und gibt ein Ergebnisarray oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.exec()")}}

```js interactive-example
const regex1 = RegExp("fo+", "g");
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
  - : Der String, gegen den der reguläre Ausdruck abgeglichen wird. Alle Werte werden [in Strings konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Weglassen oder Übergeben von `undefined` dazu, dass `exec()` nach dem String `"undefined"` sucht, was selten gewünscht ist.

### Rückgabewert

Wenn der Abgleich fehlschlägt, gibt die `exec()`-Methode [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück und setzt den [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) des regulären Ausdrucks auf `0`.

Wenn der Abgleich erfolgreich ist, gibt die `exec()`-Methode ein Array zurück und aktualisiert die [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)-Eigenschaft des regulären Ausdrucksobjekts. Das zurückgegebene Array enthält den abgeglichenen Text als erstes Element und dann ein Element für jede Erfassungsgruppe des abgeglichenen Textes. Das Array verfügt auch über die folgenden zusätzlichen Eigenschaften:

- `index`
  - : Der nullbasierte Index des Treffers im String.
- `input`
  - : Der ursprüngliche String, gegen den abgeglichen wurde.
- `groups`
  - : Ein [`null`-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) von benannten Erfassungsgruppen, deren Schlüssel die Namen und deren Werte die Erfassungsgruppen sind, oder {{jsxref("undefined")}}, wenn keine benannten Erfassungsgruppen definiert wurden. Weitere Informationen finden Sie unter [Erfassungsgruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).
- `indices` {{optional_inline}}

  - : Diese Eigenschaft ist nur vorhanden, wenn das [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)-Flag gesetzt ist. Es ist ein Array, in dem jeder Eintrag die Grenzen eines Teilstring-Abgleichs darstellt. Der Index jedes Elements in diesem Array entspricht dem Index des jeweiligen Teilstring-Abgleichs im Array, das von `exec()` zurückgegeben wird. Mit anderen Worten: Der erste `indices`-Eintrag repräsentiert den gesamten Abgleich, der zweite `indices`-Eintrag repräsentiert die erste Erfassungsgruppe usw. Jeder Eintrag selbst ist ein Array aus zwei Elementen, wobei die erste Zahl den Startindex und die zweite Zahl das Ende des Abgleichs darstellt.

    Das `indices`-Array hat zusätzlich eine `groups`-Eigenschaft, die ein [`null`-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) aller benannten Erfassungsgruppen enthält. Die Schlüssel sind die Namen der Erfassungsgruppen, und jeder Wert ist ein Array aus zwei Elementen, wobei die erste Zahl der Startindex und die zweite Zahl der Endindex der Erfassungsgruppe ist. Wenn der reguläre Ausdruck keine benannten Erfassungsgruppen enthält, ist `groups` `undefined`.

## Beschreibung

JavaScript {{jsxref("RegExp")}}-Objekte sind _zustandsbehaftet_, wenn sie die [global](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)- oder [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)-Flags gesetzt haben (z. B. `/foo/g` oder `/foo/y`). Sie speichern einen [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) aus dem vorherigen Abgleich. Durch die Verwendung dieser Eigenschaft kann `exec()` verwendet werden, um über mehrere Abgleiche in einem Textstring zu iterieren (mit Erfassungsgruppen), im Gegensatz dazu, nur die abgeglichenen Strings mit {{jsxref("String.prototype.match()")}} zu erhalten.

Beim Verwenden von `exec()` hat das globale Flag keine Auswirkung, wenn das sticky-Flag gesetzt ist — der Abgleich ist immer sticky.

`exec()` ist die primitive Methode von regulären Ausdrücken. Viele andere Methoden von regulären Ausdrücken rufen intern `exec()` auf — darunter auch Methoden, die von String-Methoden aufgerufen werden, wie [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace). Während `exec()` selbst mächtig ist (und am effizientesten), vermittelt es oft nicht am klarsten die Absicht.

- Wenn Sie nur wissen möchten, ob der reguläre Ausdruck mit einem String übereinstimmt, aber nicht, was tatsächlich übereinstimmt, verwenden Sie stattdessen {{jsxref("RegExp.prototype.test()")}}.
- Wenn Sie alle Vorkommen eines globalen regulären Ausdrucks finden und sich nicht um Informationen wie Erfassungsgruppen kümmern, verwenden Sie stattdessen {{jsxref("String.prototype.match()")}}. Zusätzlich vereinfacht {{jsxref("String.prototype.matchAll()")}} das Abgleichen mehrerer Teile eines Strings (mit Erfassungsgruppen), indem ermöglicht wird, über die Abgleiche zu iterieren.
- Wenn Sie einen Abgleich ausführen, um dessen Indexposition im String zu finden, verwenden Sie stattdessen die {{jsxref("String.prototype.search()")}}-Methode.

`exec()` ist nützlich für komplexe Operationen, die mit keiner der obigen Methoden leicht erreicht werden können, oft wenn Sie [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) manuell anpassen müssen. ({{jsxref("String.prototype.matchAll()")}} kopiert das reguläre Ausdruck, daher hat die Änderung von `lastIndex` während des Iterierens über `matchAll` keinen Einfluss auf die Iteration.) Für ein solches Beispiel siehe [Zurücksetzen von `lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex#rewinding_lastindex).

## Beispiele

### Verwenden von exec()

Betrachten Sie das folgende Beispiel:

```js
// Match "quick brown" followed by "jumps", ignoring characters in between
// Remember "brown" and "jumps"
// Ignore case
const re = /quick\s(?<color>brown).+?(jumps)/dgi;
const result = re.exec("The Quick Brown Fox Jumps Over The Lazy Dog");
```

Die folgende Tabelle zeigt den Zustand von `result` nach der Ausführung dieses Skripts:

| Eigenschaft | Wert                                                               |
| ----------- | ------------------------------------------------------------------ |
| `[0]`       | `"Quick Brown Fox Jumps"`                                          |
| `[1]`       | `"Brown"`                                                          |
| `[2]`       | `"Jumps"`                                                          |
| `index`     | `4`                                                                |
| `indices`   | `[[4, 25], [10, 15], [20, 25]]`<br />`groups: { color: [10, 15 ]}` |
| `input`     | `"The Quick Brown Fox Jumps Over The Lazy Dog"`                    |
| `groups`    | `{ color: "Brown" }`                                               |

Zusätzlich wird `re.lastIndex` auf `25` gesetzt, da dieser reguläre Ausdruck global ist.

### Aufeinanderfolgende Abgleiche finden

Wenn Ihr regulärer Ausdruck das [`g`](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags)-Flag verwendet, können Sie die `exec()`-Methode mehrfach verwenden, um aufeinanderfolgende Abgleiche im selben String zu finden. Wenn Sie dies tun, beginnt die Suche bei dem Teilstring von `str`, der durch die {{jsxref("RegExp/lastIndex", "lastIndex")}}-Eigenschaft des regulären Ausdrucks angegeben ist ({{jsxref("RegExp/test", "test()")}} wird auch die {{jsxref("RegExp/lastIndex", "lastIndex")}}-Eigenschaft weiterführen). Beachten Sie, dass die {{jsxref("RegExp/lastIndex", "lastIndex")}}-Eigenschaft beim Suchen eines anderen Strings nicht zurückgesetzt wird und seine Suche an seinem bestehenden {{jsxref("RegExp/lastIndex", "lastIndex")}} beginnt.

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
> - Platzieren Sie den regulären Ausdrückliteral (oder den {{jsxref("RegExp")}}-Konstruktor) _nicht_ innerhalb der `while`-Bedingung — dies würde den regulären Ausdruck bei jeder Iteration neu erstellen und den {{jsxref("RegExp/lastIndex", "lastIndex")}} zurücksetzen.
> - Stellen Sie sicher, dass das [globale (`g`) Flag](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) gesetzt ist, oder `lastIndex` wird nie weitergeführt.
> - Wenn der reguläre Ausdruck möglicherweise zeichenlose Übereinstimmungen zulässt (z. B. `/^/gm`), erhöhen Sie seinen {{jsxref("RegExp/lastIndex", "lastIndex")}} manuell bei jedem Mal, um ein Feststecken an der gleichen Stelle zu vermeiden.

Sie können diese Art von Code meist durch {{jsxref("String.prototype.matchAll()")}} ersetzen, um es weniger fehleranfällig zu machen.

### Verwenden von exec() mit RegExp-Literalen

Sie können `exec()` auch verwenden, ohne explizit ein {{jsxref("RegExp")}}-Objekt zu erstellen:

```js
const matches = /(hello \S+)/.exec("This is a hello world!");
console.log(matches[1]);
```

Dies wird eine Nachricht mit `'hello world!'` protokollieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("RegExp")}}
