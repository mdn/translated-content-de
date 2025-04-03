---
title: RegExp.prototype.exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

Die **`exec()`**-Methode von {{jsxref("RegExp")}}-Instanzen führt eine Suche mit diesem regulären Ausdruck nach einem Treffer in einem angegebenen String aus und gibt ein Ergebnisarray oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.

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
  - : Der String, gegen den der reguläre Ausdruck geprüft werden soll. Alle Werte werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Weglassen oder Übergeben von `undefined` dazu, dass `exec()` nach dem String `"undefined"` sucht, was selten gewünscht ist.

### Rückgabewert

Wenn der Abgleich fehlschlägt, gibt die `exec()`-Methode [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück und setzt den [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) des Regex auf `0`.

Wenn der Abgleich erfolgreich ist, gibt die `exec()`-Methode ein Array zurück und aktualisiert die [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)-Eigenschaft des regulären Ausdruck-Objekts. Das zurückgegebene Array enthält den abgeglichenen Text als erstes Element und dann ein Element für jede Erfassungsgruppe des abgeglichenen Textes. Das Array hat auch die folgenden zusätzlichen Eigenschaften:

- `index`
  - : Der nullbasierte Index des Treffers im String.
- `input`
  - : Der Original-String, gegen den abgeglichen wurde.
- `groups`
  - : Ein [`null`-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) von benannten Erfassungsgruppen, deren Schlüssel die Namen und deren Werte die Erfassungsgruppen sind, oder {{jsxref("undefined")}}, wenn keine benannten Erfassungsgruppen definiert wurden. Weitere Informationen finden Sie unter [Erfassungsgruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).
- `indices` {{optional_inline}}

  - : Diese Eigenschaft ist nur vorhanden, wenn das [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)-Flag gesetzt ist. Es handelt sich um ein Array, bei dem jeder Eintrag die Grenzen eines Teilstring-Treffers darstellt. Der Index jedes Elements in diesem Array entspricht dem Index des jeweiligen Teilstring-Treffers im von `exec()` zurückgegebenen Array. Mit anderen Worten: Der erste `indices`-Eintrag repräsentiert den gesamten Abgleich, der zweite `indices`-Eintrag die erste Erfassungsgruppe usw. Jeder Eintrag selbst ist ein Zwei-Elemente-Array, wobei die erste Zahl den Startindex des Treffers und die zweite Zahl das Ende des Treffers darstellt.

    Das `indices`-Array hat zusätzlich eine `groups`-Eigenschaft, die ein [`null`-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) aller benannten Erfassungsgruppen hält. Die Schlüssel sind die Namen der Erfassungsgruppen, und jeder Wert ist ein Zwei-Elemente-Array, bei dem die erste Zahl den Startindex und die zweite Zahl den Endindex der Erfassungsgruppe darstellt. Wenn der reguläre Ausdruck keine benannten Erfassungsgruppen enthält, ist `groups` `undefined`.

## Beschreibung

JavaScript {{jsxref("RegExp")}}-Objekte sind _zustandsbehaftet_, wenn die [global](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)- oder [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)-Flags gesetzt sind (z. B. `/foo/g` oder `/foo/y`). Sie speichern einen [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) vom vorherigen Abgleich. `exec()` kann intern verwendet werden, um über mehrere Treffer in einem Textstring zu iterieren (mit Erfassungsgruppen), im Gegensatz dazu, lediglich die übereinstimmenden Strings mit {{jsxref("String.prototype.match()")}} zu erhalten.

Beim Verwenden von `exec()` hat das globale Flag keine Wirkung, wenn das Sticky-Flag gesetzt ist – der Abgleich ist immer sticky.

`exec()` ist die primitive Methode von Regexps. Viele andere Regexp-Methoden rufen intern `exec()` auf – einschließlich derjenigen, die von String-Methoden aufgerufen werden, wie [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace). Während `exec()` selbst mächtig ist (und am effizientesten), vermittelt es oft nicht am deutlichsten die Absicht.

- Wenn es Ihnen nur darauf ankommt, ob der Regex einen String trifft, und nicht darauf, was tatsächlich abgeglichen wird, verwenden Sie stattdessen {{jsxref("RegExp.prototype.test()")}}.
- Wenn Sie alle Vorkommen eines globalen Regex finden und Ihnen Informationen wie Erfassungsgruppen egal sind, verwenden Sie stattdessen {{jsxref("String.prototype.match()")}}. Darüber hinaus hilft {{jsxref("String.prototype.matchAll()")}} dabei, das Matching mehrerer Teile eines Strings (mit Erfassungsgruppen) zu vereinfachen, indem es Ihnen ermöglicht, über die Treffer zu iterieren.
- Wenn Sie einen Abgleich ausführen, um seine Positionsposition im String zu finden, verwenden Sie stattdessen die {{jsxref("String.prototype.search()")}}-Methode.

`exec()` ist nützlich für komplexe Operationen, die nicht einfach über eine der oben genannten Methoden erreicht werden können, oft wenn Sie [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) manuell anpassen müssen. ({{jsxref("String.prototype.matchAll()")}} kopiert den Regex, sodass das Ändern von `lastIndex` beim Iterieren über `matchAll` keine Auswirkungen auf die Iteration hat.) Für solch ein Beispiel siehe [Zurückspulen von `lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex#rewinding_lastindex).

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

Zusätzlich wird `re.lastIndex` aufgrund dieses globalen Regex auf `25` gesetzt.

### Aufeinanderfolgende Treffer finden

Wenn Ihr regulärer Ausdruck das [`g`](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags)-Flag verwendet, können Sie die `exec()`-Methode mehrmals verwenden, um aufeinanderfolgende Treffer im selben String zu finden. Wenn Sie dies tun, beginnt die Suche bei dem Teilstring von `str`, das durch die {{jsxref("RegExp/lastIndex", "lastIndex")}}-Eigenschaft des regulären Ausdrucks angegeben wird ({{jsxref("RegExp/test", "test()")}} wird die {{jsxref("RegExp/lastIndex", "lastIndex")}}-Eigenschaft ebenfalls vorantreiben). Beachten Sie, dass die {{jsxref("RegExp/lastIndex", "lastIndex")}}-Eigenschaft nicht zurückgesetzt wird, wenn nach einem anderen String gesucht wird; die Suche beginnt am bestehenden {{jsxref("RegExp/lastIndex", "lastIndex")}}.

Nehmen Sie zum Beispiel an, Sie haben dieses Skript:

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
> - Platzieren Sie den regulären Ausdruck-Literal (oder den {{jsxref("RegExp")}}-Konstruktor) _nicht_ innerhalb der `while`-Bedingung — es wird der Regex bei jeder Iteration neu erstellen und {{jsxref("RegExp/lastIndex", "lastIndex")}} zurücksetzen.
> - Stellen Sie sicher, dass das [globale (`g`) Flag](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) gesetzt ist, oder `lastIndex` wird niemals vorangetrieben.
> - Wenn der Regex möglicherweise zeichenlose Zeichen abgleichen kann (z. B. `/^/gm`), erhöhen Sie jedes Mal dessen {{jsxref("RegExp/lastIndex", "lastIndex")}} manuell, um nicht an derselben Stelle festzustecken.

In der Regel können Sie diesen Code durch {{jsxref("String.prototype.matchAll()")}} ersetzen, um ihn weniger fehleranfällig zu machen.

### Verwendung von exec() mit RegExp-Literalen

Sie können auch `exec()` verwenden, ohne explizit ein {{jsxref("RegExp")}}-Objekt zu erstellen:

```js
const matches = /(hello \S+)/.exec("This is a hello world!");
console.log(matches[1]);
```

Das wird eine Nachricht protokollieren, die `'hello world!'` enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("RegExp")}}
