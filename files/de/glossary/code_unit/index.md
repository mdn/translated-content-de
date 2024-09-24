---
title: Code-Einheit
slug: Glossary/Code_unit
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Eine **Code-Einheit** ist die grundlegende Komponente, die von einem Zeichencodierungssystem (wie UTF-8 oder UTF-16) verwendet wird. Ein Zeichencodierungssystem verwendet eine oder mehrere Code-Einheiten, um einen Unicode-{{Glossary("code point", "Codepunkt")}} zu kodieren.

In UTF-16 (dem Codierungssystem, das für JavaScript-Strings verwendet wird) sind Code-Einheiten 16-Bit-Werte. Dies bedeutet, dass Operationen wie das Indexieren in eine Zeichenkette oder das Abrufen der Länge einer Zeichenkette auf diesen 16-Bit-Einheiten basieren. Diese Einheiten stimmen nicht immer 1-1 mit dem überein, was wir als Zeichen betrachten könnten.

Beispielsweise können Zeichen mit diakritischen Zeichen wie Akzenten manchmal durch zwei Unicode-Codepunkte dargestellt werden:

```js
const myString = "\u006E\u0303";
console.log(myString); // ñ
console.log(myString.length); // 2
```

Da jedoch nicht alle von Unicode definierten Codepunkte in 16 Bit passen, werden viele Unicode-Codepunkte als Paar von UTF-16-Code-Einheiten kodiert, was als _Surrogate-Paar_ bezeichnet wird:

```js
const face = "🥵";
console.log(face.length); // 2
```

Die {{jsxref("String/codePointAt", "codePointAt()")}}-Methode des JavaScript-{{jsxref("String")}}-Objekts ermöglicht es Ihnen, den Unicode-Codepunkt aus seiner kodierten Form abzurufen:

```js
const face = "🥵";
console.log(face.codePointAt(0)); // 129397
```

## Siehe auch

- [Unicode-Encoding FAQ](https://www.unicode.org/faq/utf_bom.html)
