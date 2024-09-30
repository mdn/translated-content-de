---
title: Code unit
slug: Glossary/Code_unit
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Eine **Code-Einheit** ist die grundlegende Komponente, die von einem Zeichencodierungssystem (wie UTF-8 oder UTF-16) verwendet wird. Ein Zeichencodierungssystem verwendet eine oder mehrere Code-Einheiten, um einen Unicode-[Codepunkt](/de/docs/Glossary/code_point) zu kodieren.

In UTF-16 (dem Codierungssystem, das für JavaScript-Strings verwendet wird) sind Code-Einheiten 16-Bit-Werte. Das bedeutet, dass Operationen wie das Indizieren in einen String oder das Ermitteln der Länge eines Strings auf diesen 16-Bit-Einheiten basieren. Diese Einheiten stimmen nicht immer 1-zu-1 mit dem überein, was wir als Zeichen ansehen könnten.

Zum Beispiel können Zeichen mit diakritischen Zeichen wie Akzenten manchmal mit zwei Unicode-Codepunkten dargestellt werden:

```js
const myString = "\u006E\u0303";
console.log(myString); // ñ
console.log(myString.length); // 2
```

Außerdem passen nicht alle von Unicode definierten Codepunkte in 16 Bits, viele Unicode-Codepunkte werden als Paar von UTF-16-Code-Einheiten kodiert, was als _Surrogatpaar_ bezeichnet wird:

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

- [Häufig gestellte Fragen zur Unicode-Codierung](https://www.unicode.org/faq/utf_bom.html)
