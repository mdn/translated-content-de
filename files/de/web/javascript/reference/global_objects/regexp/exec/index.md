---
title: RegExp.prototype.exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
l10n:
  sourceCommit: 44b6d9ecf39b184b57b9c7edc4814b7a50c6cf1c
---

{{JSRef}}

Die **`exec()`** Methode von {{jsxref("RegExp")}} Instanzen führt eine Suche mit diesem regulären Ausdruck in einem angegebenen String durch und gibt ein Ergebnisarray oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.

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
  - : Der String, gegen den der reguläre Ausdruck abgeglichen werden soll. Alle Werte werden [zu Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Weglassen oder Übergeben von `undefined` dazu, dass `exec()` nach dem String `"undefined"` sucht, was selten gewünscht ist.

### Rückgabewert

Wenn der Abgleich fehlschlägt, gibt die `exec()` Methode [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück und setzt den [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) des regulären Ausdrucks auf `0`.

Wenn der Abgleich erfolgreich ist, gibt die `exec()` Methode ein Array zurück und aktualisiert die [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) Eigenschaft des regulären Ausdrucksobjekts. Das zurückgegebene Array enthält den abgeglichenen Text als erstes Element und dann ein Element für jede erfasste Gruppe des abgeglichenen Textes. Das Array verfügt außerdem über die folgenden zusätzlichen Eigenschaften:

- `index`
  - : Der nullbasierte Index des Abgleichs im String.
- `input`
  - : Der ursprüngliche String, gegen den abgeglichen wurde.
- `groups`
  - : Ein [`null`-Prototype-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) von benannten Erfassungsgruppen, deren Schlüssel die Namen und Werte die Erfassungsgruppen sind, oder {{jsxref("undefined")}}, wenn keine benannten Erfassungsgruppen definiert wurden. Siehe [Erfassungsgruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) für weitere Informationen.
- `indices` {{optional_inline}}

  - : Diese Eigenschaft ist nur vorhanden, wenn das [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) Flag gesetzt ist. Es ist ein Array, bei dem jeder Eintrag die Grenzen eines Teilstring-Abgleichs darstellt. Der Index jedes Elements in diesem Array entspricht dem Index des jeweiligen Teilstring-Abgleichs im von `exec()` zurückgegebenen Array. Anders ausgedrückt repräsentiert der erste `indices`-Eintrag den gesamten Abgleich, der zweite `indices`-Eintrag die erste Erfassungsgruppe usw. Jeder Eintrag selbst ist ein Array mit zwei Elementen, wobei die erste Zahl den Startindex des Abgleichs darstellt und die zweite Zahl das Ende des Abgleichs.

    Das `indices`-Array hat zusätzlich eine `groups` Eigenschaft, die ein [`null`-Prototype-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) aller benannten Erfassungsgruppen enthält. Die Schlüssel sind die Namen der Erfassungsgruppen, und jeder Wert ist ein Array mit zwei Elementen, wobei die erste Zahl der Startindex und die zweite Zahl das Ende der Erfassungsgruppe ist. Wenn der reguläre Ausdruck keine benannten Erfassungsgruppen enthält, ist `groups` `undefined`.

## Beschreibung

JavaScript {{jsxref("RegExp")}} Objekte sind _zustandsbehaftet_, wenn die [global](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) oder [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) Flags gesetzt sind (z.B. `/foo/g` oder `/foo/y`). Sie speichern einen [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) vom vorherigen Abgleich. Intern verwendet, kann `exec()` dazu genutzt werden, über mehrere Abgleiche innerhalb eines Textstrings zu iterieren (mit Erfassungsgruppen), im Gegensatz zum Abrufen nur der übereinstimmenden Strings mit {{jsxref("String.prototype.match()")}}.

Beim Verwenden von `exec()` hat das Global-Flag keine Wirkung, wenn das Sticky-Flag gesetzt ist – der Abgleich ist immer sticky.

`exec()` ist die primitive Methode von Regexps. Viele andere Regexp-Methoden rufen `exec()` intern auf – einschließlich jener, die von String-Methoden aufgerufen werden, wie [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace). Während `exec()` selbst mächtig ist (und die effizienteste ist), vermittelt sie oft nicht am klarsten die Absicht.

- Wenn Sie nur wissen möchten, ob der Regex mit einem String übereinstimmt, aber nicht, was genau abgestimmt wird, verwenden Sie stattdessen {{jsxref("RegExp.prototype.test()")}}.
- Wenn Sie alle Vorkommen eines globalen Regex finden und Ihnen Informationen wie Erfassungsgruppen egal sind, verwenden Sie stattdessen {{jsxref("String.prototype.match()")}}. Zusätzlich hilft {{jsxref("String.prototype.matchAll()")}} beim Vereinfachen des Abgleichs mehrerer Teile eines Strings (mit Erfassungsgruppen), indem Sie über die Abgleiche iterieren können.
- Wenn Sie einen Abgleich ausführen, um die Indexposition im String zu finden, verwenden Sie stattdessen die {{jsxref("String.prototype.search()")}} Methode.

`exec()` ist nützlich für komplexe Operationen, die nicht einfach über eine der obigen Methoden erreicht werden können, häufig wenn Sie [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) manuell anpassen müssen. ({{jsxref("String.prototype.matchAll()")}} kopiert den Regex, sodass das Ändern von `lastIndex` während des Iterierens über `matchAll` die Iteration nicht beeinflusst.) Für ein solches Beispiel sehen Sie [Zurückspulen des `lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex#rewinding_lastindex).

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

Die folgende Tabelle zeigt den Zustand von `result` nach Ausführung dieses Skripts:

| Eigenschaft | Wert                                                               |
| ----------- | ------------------------------------------------------------------ |
| `[0]`       | `"Quick Brown Fox Jumps"`                                          |
| `[1]`       | `"Brown"`                                                          |
| `[2]`       | `"Jumps"`                                                          |
| `index`     | `4`                                                                |
| `indices`   | `[[4, 25], [10, 15], [20, 25]]`<br />`groups: { color: [10, 15 ]}` |
| `input`     | `"The Quick Brown Fox Jumps Over The Lazy Dog"`                    |
| `groups`    | `{ color: "Brown" }`                                               |

Zudem wird `re.lastIndex` auf `25` gesetzt, da dieser Regex global ist.

### Nachfolgende Übereinstimmungen finden

Wenn Ihr regulärer Ausdruck das [`g`](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) Flag verwendet, können Sie die `exec()` Methode mehrfach verwenden, um nachfolgende Übereinstimmungen im selben String zu finden. Wenn Sie dies tun, beginnt die Suche bei dem Substring von `str`, der durch die {{jsxref("RegExp/lastIndex", "lastIndex")}} Eigenschaft des regulären Ausdrucks angegeben wird ({{jsxref("RegExp/test", "test()")}} wird ebenfalls die {{jsxref("RegExp/lastIndex", "lastIndex")}} Eigenschaft vorantreiben). Beachten Sie, dass die {{jsxref("RegExp/lastIndex", "lastIndex")}} Eigenschaft nicht zurückgesetzt wird, wenn in einem anderen String gesucht wird. Sie beginnt die Suche an ihrem existierenden {{jsxref("RegExp/lastIndex", "lastIndex")}}.

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

Dieses Skript zeigt den folgenden Text:

```plain
Found abb. Next match starts at 3
Found ab. Next match starts at 9
```

> [!WARNING]
> Es gibt viele Fallen, die zu einer Endlosschleife führen können!
>
> - Platzieren Sie den regulären Ausdruck Literal (oder den {{jsxref("RegExp")}} Konstruktor) _nicht_ innerhalb der `while`-Bedingung — es wird den Regex für jede Iteration neu erstellen und {{jsxref("RegExp/lastIndex", "lastIndex")}} zurücksetzen.
> - Stellen Sie sicher, dass das [globale (`g`) Flag](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) gesetzt ist, oder `lastIndex` wird niemals fortgeschritten.
> - Wenn der Regex möglicherweise Zeichen mit Null-Länge abgleicht (z.B. `/^/gm`), erhöhen Sie manuell seinen {{jsxref("RegExp/lastIndex", "lastIndex")}} jedes Mal, um zu vermeiden, an der gleichen Stelle festzustecken.

Sie können diesen Code normalerweise mit {{jsxref("String.prototype.matchAll()")}} ersetzen, um ihn weniger fehleranfällig zu machen.

### exec() mit RegExp-Literalen verwenden

Sie können `exec()` auch verwenden, ohne ein {{jsxref("RegExp")}} Objekt explizit zu erstellen:

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

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- {{jsxref("RegExp")}}
