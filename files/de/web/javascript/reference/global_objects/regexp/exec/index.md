---
title: RegExp.prototype.exec()
short-title: exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`exec()`** Methode der {{jsxref("RegExp")}} Instanzen führt eine Suche mit diesem regulären Ausdruck nach einem Treffer in einem angegebenen String durch und gibt ein Ergebnisarray zurück oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

{{InteractiveExample("JavaScript Demo: RegExp.prototype.exec()")}}

```js interactive-example
const regex1 = /fo+/g;
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
  - : Der String, gegen den der reguläre Ausdruck gematcht werden soll. Alle Werte werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Weglassen oder Übergeben von `undefined` dazu, dass `exec()` nach dem String `"undefined"` sucht, was selten gewünscht ist.

### Rückgabewert

Wenn der Abgleich fehlschlägt, gibt die `exec()` Methode [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück und setzt den `lastIndex` des Regex auf `0`.

Wenn der Abgleich erfolgreich ist, gibt die `exec()` Methode ein Array zurück und aktualisiert die [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) Eigenschaft des regulären Ausdruck-Objekts. Das zurückgegebene Array enthält den gematchten Text als erstes Element und dann ein Element für jede erfasste Gruppe des gematchten Textes. Das Array hat auch die folgenden zusätzlichen Eigenschaften:

- `index`
  - : Der 0-basierte Index des Treffers im String.
- `input`
  - : Der ursprüngliche String, gegen den gematcht wurde.
- `groups`
  - : Ein [`null`-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) von benannten Erfassungsgruppen, dessen Schlüssel die Namen und Werte die Erfassungsgruppen sind, oder {{jsxref("undefined")}}, wenn keine benannten Erfassungsgruppen definiert wurden. Weitere Informationen finden Sie unter [Erfassungsgruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).
- `indices` {{optional_inline}}
  - : Diese Eigenschaft ist nur vorhanden, wenn das [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) Flag gesetzt ist. Es ist ein Array, bei dem jeder Eintrag die Grenzen eines Substring-Treffers darstellt. Der Index jedes Elements in diesem Array entspricht dem Index des jeweiligen Substring-Treffers im Array, das von `exec()` zurückgegeben wird. Mit anderen Worten, der erste `indices` Eintrag repräsentiert den gesamten Treffer, der zweite `indices` Eintrag die erste Erfassungsgruppe, usw. Jeder Eintrag selbst ist ein Array mit zwei Elementen, wobei die erste Zahl den Startindex und die zweite Zahl das Endindex des Treffers darstellt.

    Das `indices` Array hat zudem eine `groups` Eigenschaft, die ein [`null`-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) aller benannten Erfassungsgruppen hält. Die Schlüssel sind die Namen der Erfassungsgruppen, und jeder Wert ist ein Array mit zwei Elementen, wobei die erste Zahl den Startindex und die zweite Zahl den Endindex der Erfassungsgruppe darstellt. Wenn der reguläre Ausdruck keine benannten Erfassungsgruppen enthält, ist `groups` `undefined`.

## Beschreibung

JavaScript {{jsxref("RegExp")}} Objekte sind _zustandsbehaftet_, wenn sie die [global](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) oder [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) Flags gesetzt haben (z.B. `/foo/g` oder `/foo/y`). Sie speichern einen [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) vom vorherigen Treffer. Mithilfe dessen kann `exec()` verwendet werden, um über mehrere Treffer in einem Text-String (mit Erfassungsgruppen) zu iterieren, im Gegensatz dazu, nur die übereinstimmenden Strings mit {{jsxref("String.prototype.match()")}} zu bekommen.

Beim Verwenden von `exec()` hat das globale Flag keine Wirkung, wenn das Sticky-Flag gesetzt ist — der Match ist immer sticky.

`exec()` ist die primitive Methode von Regexps. Viele andere Regexp-Methoden rufen `exec()` intern auf — auch jene, die von String-Methoden aufgerufen werden, wie [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace). Obwohl `exec()` selbst mächtig (und die effizienteste Methode) ist, vermittelt es oft nicht am klarsten die Absicht.

- Wenn Sie nur wissen möchten, ob der Regex einen String trifft, aber nicht, was tatsächlich gematcht wird, verwenden Sie stattdessen {{jsxref("RegExp.prototype.test()")}}.
- Wenn Sie alle Vorkommen eines globalen Regex finden und sich nicht um Informationen wie Erfassungsgruppen kümmern, verwenden Sie stattdessen {{jsxref("String.prototype.match()")}}. Darüber hinaus hilft {{jsxref("String.prototype.matchAll()")}}, das Matching mehrerer Teile eines Strings (mit Erfassungsgruppen) zu vereinfachen, indem es Ihnen ermöglicht, über die Treffer zu iterieren.
- Wenn Sie eine Übereinstimmung ausführen, um deren Indexposition im String zu finden, verwenden Sie stattdessen die {{jsxref("String.prototype.search()")}} Methode.

`exec()` ist nützlich für komplexe Operationen, die sich nicht einfach über eine der obigen Methoden erreichen lassen, oft wenn Sie `lastIndex` manuell anpassen müssen. ({{jsxref("String.prototype.matchAll()")}} kopiert den Regex, sodass das Ändern von `lastIndex` beim Iterieren über `matchAll` die Iteration nicht beeinflusst.) Ein solches Beispiel finden Sie bei [rewinding `lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex#rewinding_lastindex).

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

Die folgende Tabelle zeigt den Zustand von `result` nach dem Ausführen dieses Skripts:

| Eigenschaft | Wert                                                               |
| ----------- | ------------------------------------------------------------------ |
| `[0]`       | `"Quick Brown Fox Jumps"`                                          |
| `[1]`       | `"Brown"`                                                          |
| `[2]`       | `"Jumps"`                                                          |
| `index`     | `4`                                                                |
| `indices`   | `[[4, 25], [10, 15], [20, 25]]`<br />`groups: { color: [10, 15 ]}` |
| `input`     | `"The Quick Brown Fox Jumps Over The Lazy Dog"`                    |
| `groups`    | `{ color: "Brown" }`                                               |

Zusätzlich wird `re.lastIndex` auf `25` gesetzt, da dieser Regex global ist.

### Aufeinanderfolgende Treffer finden

Wenn Ihr regulärer Ausdruck das [`g`](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) Flag verwendet, können Sie die `exec()` Methode mehrmals verwenden, um aufeinanderfolgende Treffer im gleichen String zu finden. Wenn Sie das tun, beginnt die Suche am Substring von `str`, der durch die `lastIndex` Eigenschaft des regulären Ausdrucks angegeben ist ({{jsxref("RegExp/lastIndex", "lastIndex")}} ({{jsxref("RegExp/test", "test()")}} wird auch die {{jsxref("RegExp/lastIndex", "lastIndex")}} Eigenschaft vorantreiben)). Beachten Sie, dass die {{jsxref("RegExp/lastIndex", "lastIndex")}} Eigenschaft nicht zurückgesetzt wird, wenn ein anderer String durchsucht wird, sie startet die Suche an ihrem bestehenden {{jsxref("RegExp/lastIndex", "lastIndex")}}.

Zum Beispiel, nehmen Sie an, Sie haben dieses Skript:

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
> - Platzieren Sie _nicht_ den regulären Ausdruck Literal (oder den {{jsxref("RegExp")}} Konstruktor) innerhalb der `while` Bedingung — er generiert den Regexp für jede Iteration neu und setzt {{jsxref("RegExp/lastIndex", "lastIndex")}} zurück.
> - Stellen Sie sicher, dass das [globale (`g`) Flag](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) gesetzt ist, andernfalls wird `lastIndex` niemals vorangetrieben.
> - Wenn der Regex möglicherweise Zeichen mit Null-Länge trifft (z.B. `/^/gm`), erhöhen Sie seinen {{jsxref("RegExp/lastIndex", "lastIndex")}} manuell jedes Mal, um zu vermeiden, dass Sie an derselben Stelle steckenbleiben.

Normalerweise können Sie diese Art von Code durch {{jsxref("String.prototype.matchAll()")}} ersetzen, um es weniger fehleranfällig zu machen.

### Verwendung von exec() mit RegExp Literalen

Sie können `exec()` auch verwenden, ohne explizit ein {{jsxref("RegExp")}} Objekt zu erstellen:

```js
const matches = /(hello \S+)/.exec("This is a hello world!");
console.log(matches[1]);
```

Dies wird eine Nachricht protokollieren, die `'hello world!'` enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- {{jsxref("RegExp")}}
