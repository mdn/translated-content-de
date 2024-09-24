---
title: RegExp.prototype.exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`exec()`**-Methode von {{jsxref("RegExp")}}-Instanzen führt eine Suche mit diesem regulären Ausdruck in einem angegebenen String aus und gibt ein Ergebnisarray oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.

{{EmbedInteractiveExample("pages/js/regexp-prototype-exec.html")}}

## Syntax

```js-nolint
exec(str)
```

### Parameter

- `str`
  - : Der String, gegen den der reguläre Ausdruck abgeglichen werden soll. Alle Werte werden [zu Strings gezwungen](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Weglassen oder Übergeben von `undefined` dazu, dass `exec()` nach dem String `"undefined"` sucht, was selten gewünscht ist.

### Rückgabewert

Wenn der Abgleich fehlschlägt, gibt die Methode `exec()` [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück und setzt den [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) des regulären Ausdrucks auf `0`.

Wenn der Abgleich erfolgreich ist, gibt die Methode `exec()` ein Array zurück und aktualisiert die [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)-Eigenschaft des regulären Ausdrucksobjekts. Das zurückgegebene Array enthält den gefundenen Text als erstes Element und dann ein Element für jede Erfassungsgruppe des gefundenen Textes. Das Array hat auch die folgenden zusätzlichen Eigenschaften:

- `index`
  - : Der nullbasierte Index des Treffers im String.
- `input`
  - : Der ursprüngliche String, gegen den abgeglichen wurde.
- `groups`
  - : Ein [`null`-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) benannter Erfassungsgruppen, deren Schlüssel die Namen und deren Werte die Erfassungsgruppen sind, oder {{jsxref("undefined")}}, wenn keine benannten Erfassungsgruppen definiert wurden. Siehe [Erfassungsgruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) für weitere Informationen.
- `indices` {{optional_inline}}

  - : Diese Eigenschaft ist nur vorhanden, wenn das [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)-Flag gesetzt ist. Es handelt sich um ein Array, bei dem jeder Eintrag die Grenzen eines Substring-Treffers darstellt. Der Index jedes Elements in diesem Array entspricht dem Index des jeweiligen Substring-Treffers im von `exec()` zurückgegebenen Array. Mit anderen Worten: Der erste `indices`-Eintrag stellt den gesamten Treffer dar, der zweite `indices`-Eintrag stellt die erste Erfassungsgruppe dar usw. Jeder Eintrag selbst ist ein zweielementiges Array, wobei die erste Zahl den Startindex des Treffers und die zweite Zahl seinen Endindex darstellt.

    Das `indices`-Array verfügt zusätzlich über eine `groups`-Eigenschaft, die ein [`null`-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) aller benannten Erfassungsgruppen enthält. Die Schlüssel sind die Namen der Erfassungsgruppen, und jeder Wert ist ein zweielementiges Array, wobei die erste Zahl den Startindex und die zweite Zahl den Endindex der Erfassungsgruppe darstellt. Wenn der reguläre Ausdruck keine benannten Erfassungsgruppen enthält, ist `groups` `undefined`.

## Beschreibung

JavaScript {{jsxref("RegExp")}}-Objekte sind _zustandsbehaftet_, wenn sie die [globalen](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) oder [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) Flags gesetzt haben (z.B. `/foo/g` oder `/foo/y`). Sie speichern einen [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) vom vorherigen Abgleich. Durch die interne Verwendung kann `exec()` verwendet werden, um über mehrere Treffer in einem Textstring zu iterieren (mit Erfassungsgruppen), anstatt nur die übereinstimmenden Strings mit {{jsxref("String.prototype.match()")}} zu erhalten.

Beim Verwenden von `exec()` hat das globale Flag keinen Effekt, wenn das sticky-Flag gesetzt ist – der Abgleich ist immer sticky.

`exec()` ist die primitive Methode von regulären Ausdrücken. Viele andere Methoden für reguläre Ausdrücke rufen intern `exec()` auf – einschließlich der Methoden, die von String-Methoden aufgerufen werden, wie zum Beispiel [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace). Während `exec()` selbst leistungsstark ist (und am effizientesten), vermittelt es oft nicht am deutlichsten die Absicht.

- Wenn Sie sich nur darum kümmern, ob das Regex einen String trifft, aber nicht, was tatsächlich übereinstimmt, verwenden Sie stattdessen {{jsxref("RegExp.prototype.test()")}}.
- Wenn Sie alle Vorkommen eines globalen Regex finden und sich nicht für Informationen wie Erfassungsgruppen interessieren, verwenden Sie stattdessen {{jsxref("String.prototype.match()")}}. Zudem hilft {{jsxref("String.prototype.matchAll()")}} dabei, das Abgleichen mehrerer Teile eines Strings (mit Erfassungsgruppen) zu vereinfachen, indem Sie über die Treffer iterieren können.
- Wenn Sie einen Abgleich ausführen, um seine Indexposition im String zu finden, verwenden Sie stattdessen die {{jsxref("String.prototype.search()")}}-Methode.

## Beispiele

### Verwendung von exec()

Betrachten Sie das folgende Beispiel:

```js
// Übereinstimmung mit "quick brown" gefolgt von "jumps", ignoriert Zeichen dazwischen
// Merken Sie sich "brown" und "jumps"
// Groß-/Kleinschreibung ignorieren
const re = /quick\s(?<color>brown).+?(jumps)/dgi;
const result = re.exec("The Quick Brown Fox Jumps Over The Lazy Dog");
```

Die folgende Tabelle zeigt den Zustand von `result` nach Ausführung dieses Skripts:

| Eigenschaft | Wert                                                              |
| ----------- | ----------------------------------------------------------------- |
| `[0]`       | `"Quick Brown Fox Jumps"`                                         |
| `[1]`       | `"Brown"`                                                         |
| `[2]`       | `"Jumps"`                                                         |
| `index`     | `4`                                                               |
| `indices`   | `[[4, 25], [10, 15], [20, 25]]`<br />`groups: { color: [10, 15 ]}`|
| `input`     | `"The Quick Brown Fox Jumps Over The Lazy Dog"`                   |
| `groups`    | `{ color: "brown" }`                                              |

Zusätzlich wird `re.lastIndex` auf `25` gesetzt, da dieser Regex global ist.

### Aufeinanderfolgende Treffer finden

Wenn Ihr regulärer Ausdruck das [`g`](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags)-Flag verwendet, können Sie die `exec()`-Methode mehrmals aufrufen, um aufeinanderfolgende Treffer im selben String zu finden. Wenn Sie dies tun, beginnt die Suche am Substring von `str`, der durch die {{jsxref("RegExp/lastIndex", "lastIndex")}}-Eigenschaft des regulären Ausdrucks angegeben ist ({{jsxref("RegExp/test", "test()")}} wird die {{jsxref("RegExp/lastIndex", "lastIndex")}}-Eigenschaft ebenfalls vorantreiben). Beachten Sie, dass die {{jsxref("RegExp/lastIndex", "lastIndex")}}-Eigenschaft nicht zurückgesetzt wird, wenn nach einem anderen String gesucht wird; die Suche beginnt bei ihrem bestehenden {{jsxref("RegExp/lastIndex", "lastIndex")}}-Wert.

Zum Beispiel, nehmen Sie folgendes Skript an:

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
> Es gibt viele Fallstricke, die dazu führen können, dass dies zu einer Endlosschleife wird!
>
> - Platzieren Sie den regulären Ausdrucksliteral (oder den {{jsxref("RegExp")}}-Konstruktor) _nicht_ innerhalb der `while`-Bedingung — dies würde den Regex für jede Iteration neu erstellen und {{jsxref("RegExp/lastIndex", "lastIndex")}} zurücksetzen.
> - Stellen Sie sicher, dass das [globale (`g`) Flag](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) gesetzt ist, oder `lastIndex` wird nie fortgeschoben.
> - Wenn der Regex möglicherweise zeichenlose Übereinstimmungen trifft (z.B. `/^/gm`), erhöhen Sie dessen {{jsxref("RegExp/lastIndex", "lastIndex")}} manuell bei jedem Mal, um zu vermeiden, an derselben Stelle festzustecken.

Sie können normalerweise diese Art von Code mit {{jsxref("String.prototype.matchAll()")}} ersetzen, um ihn weniger fehleranfällig zu machen.

### Verwenden von exec() mit RegExp-Literalen

Sie können `exec()` auch ohne die explizite Erstellung eines {{jsxref("RegExp")}}-Objekts verwenden:

```js
const matches = /(hello \S+)/.exec("This is a hello world!");
console.log(matches[1]);
```

Dies wird eine Nachricht mit `'hello world!'` ausgeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("RegExp")}}
