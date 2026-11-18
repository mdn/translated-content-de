---
title: Intl.Locale.prototype.script
short-title: script
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/script
l10n:
  sourceCommit: ce52c645165d849cbe3bee97c35ee1ad6877ed8e
---

Die Accessor-Eigenschaft **`script`** von {{jsxref("Intl.Locale")}}-Instanzen gibt die Schrift zurück, mit der die Sprache dieser Locale geschrieben wird.

## Beschreibung

Die Schrift, auch Schriftsystem genannt, ist eines der zentralen Merkmale einer Locale. Sie bezeichnet die Menge von Zeichen oder Glyphen, die zum Schreiben einer bestimmten Sprache verwendet werden. Die mit Englisch verbundene Schrift ist beispielsweise Lateinisch, während Koreanisch üblicherweise mit Hangul geschrieben wird. In vielen Fällen ist die Angabe einer Schrift nicht unbedingt erforderlich, da die Sprache (deren Angabe erforderlich ist) nur in einer einzigen Schrift geschrieben wird. Es gibt jedoch Ausnahmen von dieser Regel. Wenn für eine Sprache mehrere Schriften infrage kommen, ist die Angabe der Schrift wichtig.

Der Wert der Eigenschaft `script` wird beim Erstellen der Instanz festgelegt: entweder durch den Teil des Locale-Identifikators nach `language` oder durch die Option `script` des Konstruktors {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}. Wenn beides angegeben ist, hat die Option Vorrang. Wenn keines von beiden angegeben ist, hat die Eigenschaft den Wert `undefined`.

Der Set-Accessor von `script` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags kann die Schrift dem {{jsxref("Intl.Locale")}}-Objekt über den Locale-String oder über ein Konfigurationsobjekt als Argument des Konstruktors hinzugefügt werden.

### Eine Schrift über den Locale-String hinzufügen

Falls eine Schrift angegeben ist, steht sie an zweiter Stelle in einem gültigen Unicode-Sprachidentifikator. Sie kann dem Locale-Identifikator hinzugefügt werden, der an den Konstruktor {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} übergeben wird. Beachten Sie, dass die Schrift kein erforderlicher Bestandteil eines Locale-Identifikators ist.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.script); // "Latn"
```

### Eine Schrift über das Konfigurationsobjekt hinzufügen

Der Konstruktor {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} akzeptiert optional ein Konfigurationsobjekt als Argument. Legen Sie dessen Eigenschaft `script` auf die gewünschte Schrift fest und übergeben Sie es anschließend an den Konstruktor.

```js
const locale = new Intl.Locale("fr-FR", { script: "Latn" });
console.log(locale.script); // "Latn"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [Unicode-Subtag für Schriften](https://www.unicode.org/reports/tr35/#unicode_script_subtag_validity) in der Spezifikation der Unicode Locale Data Markup Language
