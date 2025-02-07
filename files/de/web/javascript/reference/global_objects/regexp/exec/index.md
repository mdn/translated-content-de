---
title: RegExp.prototype.exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
l10n:
  sourceCommit: 4e21ab343030c6b842394266247db7cb0274f037
---

{{JSRef}}

Die Methode **`exec()`** von {{jsxref("RegExp")}}-Instanzen führt eine Suche mit diesem regulären Ausdruck nach einem Übereinstimmungstreffer in einem angegebenen String aus und gibt ein Ergebnis-Array oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.

{{EmbedInteractiveExample("pages/js/regexp-prototype-exec.html")}}

## Syntax

```js-nolint
exec(str)
```

### Parameter

- `str`
  - : Der String, mit dem der reguläre Ausdruck abgeglichen werden soll. Alle Werte werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Weglassen oder die Übergabe von `undefined` dazu, dass `exec()` nach dem String `"undefined"` sucht, was selten gewünscht ist.

### Rückgabewert

Wenn keine Übereinstimmung gefunden wird, gibt die Methode `exec()` [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück und setzt die [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)-Eigenschaft des regulären Ausdrucks auf `0`.

Wenn eine Übereinstimmung gefunden wird, gibt die Methode `exec()` ein Array zurück und aktualisiert die [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)-Eigenschaft des regulären Ausdrucksobjekts. Das zurückgegebene Array enthält den gefundenen Text als erstes Element und danach je ein Element für jede Gruppe des gefundenen Textes. Das Array besitzt zusätzlich folgende Eigenschaften:

- `index`
  - : Der nullbasierte Index der Übereinstimmung im String.
- `input`
  - : Der ursprüngliche String, der mit dem regulären Ausdruck abgeglichen wurde.
- `groups`
  - : Ein [`null`-Prototype-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) der benannten Gruppen, dessen Schlüssel die Namen und Werte die Gruppen oder {{jsxref("undefined")}} sind, wenn keine benannten Gruppen definiert wurden. Weitere Informationen finden Sie unter [Gruppen in regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).
- `indices` {{optional_inline}}

  - : Diese Eigenschaft ist nur vorhanden, wenn das [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)-Flag gesetzt ist. Es handelt sich um ein Array, bei dem jeder Eintrag die Grenzen eines Teilstring-Treffers darstellt. Der Index jedes Elements in diesem Array entspricht dem Index des jeweiligen Teilstring-Treffers im von `exec()` zurückgegebenen Array. Mit anderen Worten repräsentiert der erste `indices`-Eintrag den gesamten Treffer, der zweite `indices`-Eintrag die erste Gruppe und so weiter. Jeder Eintrag ist selbst ein zweielementiges Array, wobei die erste Zahl den Startindex und die zweite Zahl den Endindex des Treffers darstellt.

    Das `indices`-Array hat zusätzlich eine `groups`-Eigenschaft, die ein [`null`-Prototype-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) aller benannten Gruppen enthält. Die Schlüssel sind die Namen der Gruppen, und jeder Wert ist ein zweielementiges Array mit dem Start- und Endindex der Gruppe. Wenn der reguläre Ausdruck keine benannten Gruppen enthält, ist `groups` `undefined`.

## Beschreibung

JavaScript-{{jsxref("RegExp")}}-Objekte sind _zustandsbehaftet_, wenn die [global](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)- oder [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)-Flags gesetzt sind (z. B. `/foo/g` oder `/foo/y`). Sie speichern den [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) des vorherigen Treffers. Mithilfe dieser internen Eigenschaft kann `exec()` verwendet werden, um über mehrere Treffer in einem Text (mit Gruppen) zu iterieren, anstatt nur die Übereinstimmungen mit {{jsxref("String.prototype.match()")}} zu erhalten.

Wenn `exec()` verwendet wird, hat das globale Flag keinen Effekt, wenn das Sticky-Flag gesetzt ist — der Treffer ist immer "sticky".

`exec()` ist die grundlegende Methode von regulären Ausdrücken. Viele andere Methoden für reguläre Ausdrücke rufen intern `exec()` auf — einschließlich der Methoden, die von String-Methoden aufgerufen werden, wie [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace). Obwohl `exec()` selbst leistungsstark ist (und am effizientesten), vermittelt es oft nicht am klarsten die Absicht.

- Wenn Sie nur überprüfen möchten, ob der reguläre Ausdruck mit einem String übereinstimmt, aber nicht, was tatsächlich übereinstimmt, verwenden Sie stattdessen {{jsxref("RegExp.prototype.test()")}}.
- Wenn Sie alle Vorkommen eines globalen regulären Ausdrucks finden möchten und keine Informationen wie Gruppen benötigen, verwenden Sie {{jsxref("String.prototype.match()")}}. Darüber hinaus vereinfacht {{jsxref("String.prototype.matchAll()")}} das Finden mehrerer Teile eines Strings (mit Gruppen), indem es Ihnen ermöglicht, über die Treffer zu iterieren.
- Wenn Sie einen Treffer suchen, um dessen Indexposition im String zu finden, verwenden Sie stattdessen die Methode {{jsxref("String.prototype.search()")}}.

`exec()` ist nützlich für komplexe Operationen, die sich mit keiner der oben genannten Methoden leicht erreichen lassen, insbesondere wenn Sie [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) manuell anpassen müssen. ({{jsxref("String.prototype.matchAll()")}} kopiert den regulären Ausdruck, sodass Änderungen an `lastIndex` während der Iteration über `matchAll` die Iteration nicht beeinflussen.) Ein solches Beispiel finden Sie unter [lastIndex zurücksetzen](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex#rewinding_lastindex).

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

Die folgende Tabelle zeigt den Status von `result` nach Ausführung dieses Skripts:

| Eigenschaft | Wert                                                              |
| ----------- | ----------------------------------------------------------------- |
| `[0]`       | `"Quick Brown Fox Jumps"`                                         |
| `[1]`       | `"Brown"`                                                         |
| `[2]`       | `"Jumps"`                                                         |
| `index`     | `4`                                                               |
| `indices`   | `[[4, 25], [10, 15], [20, 25]]`<br />`groups: { color: [10, 15]}` |
| `input`     | `"The Quick Brown Fox Jumps Over The Lazy Dog"`                   |
| `groups`    | `{ color: "brown" }`                                              |

Zusätzlich wird `re.lastIndex` auf `25` gesetzt, da dieser reguläre Ausdruck global ist.

### Aufeinanderfolgende Treffer finden

Wenn Ihr regulärer Ausdruck das [`g`](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags)-Flag verwendet, können Sie die Methode `exec()` mehrmals verwenden, um aufeinanderfolgende Treffer im selben String zu finden. Dabei startet die Suche beim Teilstring von `str`, der durch die {{jsxref("RegExp/lastIndex", "lastIndex")}}-Eigenschaft des regulären Ausdrucks angegeben ist ({{jsxref("RegExp/test", "test()")}} setzt die {{jsxref("RegExp/lastIndex", "lastIndex")}}-Eigenschaft ebenfalls fort). Beachten Sie, dass die {{jsxref("RegExp/lastIndex", "lastIndex")}}-Eigenschaft nicht zurückgesetzt wird, wenn ein anderer String durchsucht wird – sie startet die Suche am bestehenden {{jsxref("RegExp/lastIndex", "lastIndex")}}.

Zum Beispiel:

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

Dieses Skript zeigt folgenden Text:

```plain
Found abb. Next match starts at 3
Found ab. Next match starts at 9
```

> [!WARNING]
> Es gibt viele Fallstricke, die dazu führen können, dass dies zu einer Endlosschleife wird!
>
> - Platzieren Sie _nicht_ den regulären Ausdruck-Literal (oder den {{jsxref("RegExp")}}-Konstruktor) in der `while`-Bedingung – er wird den regulären Ausdruck bei jeder Iteration neu erstellen und {{jsxref("RegExp/lastIndex", "lastIndex")}} zurücksetzen.
> - Stellen Sie sicher, dass das [globale (`g`) Flag](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) gesetzt ist, andernfalls wird `lastIndex` niemals vorgerückt.
> - Falls der reguläre Ausdruck möglicherweise Treffer mit leerer Zeichenlänge liefert (zum Beispiel `/^/gm`), erhöhen Sie seine {{jsxref("RegExp/lastIndex", "lastIndex")}} manuell bei jeder Iteration, um zu vermeiden, dass Sie an derselben Stelle hängen bleiben.

Sie können diese Art von Code in der Regel durch {{jsxref("String.prototype.matchAll()")}} ersetzen, um ihn weniger fehleranfällig zu machen.

### Verwendung von exec() mit RegExp-Literalen

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

- [Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("RegExp")}}
