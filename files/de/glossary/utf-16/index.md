---
title: UTF-16
slug: Glossary/UTF-16
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{GlossarySidebar}}

UTF-16 ist ein {{Glossary("character_encoding", "Zeichenkodierungsstandard")}} für {{Glossary("Unicode", "Unicode")}}. Es kodiert jeden Unicode-{{Glossary("code_point", "Codepunkt")}} mit entweder einer oder zwei {{Glossary("code_unit", "Codeeinheiten")}}. Jede Codeeinheit ist ein 16-Bit-Wert.

Codepunkte mit Werten kleiner als 2<sup>16</sup> werden als eine einzelne Codeeinheit kodiert, die numerisch dem Wert des Codepunkts entspricht. Diese Codepunkte umfassen die [Basic Multilingual Plane (BMP)](<https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane>) und beinhalten die gebräuchlichsten Zeichen, einschließlich lateinischer, griechischer, kyrillischer und vieler ostasiatischer Zeichen.

Zum Beispiel wird das lateinische Zeichen "A" im Unicode der Codepunkt `U+0041` zugewiesen und wird in UTF-16 als die einzelne Codeeinheit `41` dargestellt.

Codepunkte mit Werten größer als 2<sup>16</sup> werden mit einem Paar von Codeeinheiten kodiert, das als _Surrogatpaar_ bezeichnet wird. Die für Surrogatpaare verwendeten Werte werden nicht für Unicode-Codepunkte verwendet, um Mehrdeutigkeiten zu vermeiden.

Zum Beispiel wird dem Emoji-Zeichen "🦊" (Fuchsgesicht) im Unicode der Codepunkt `U+1F98A` zugewiesen und in UTF-16 als das Surrogatpaar `d83e dd8a` dargestellt.

## UTF-16 in JavaScript

Zeichenketten in JavaScript werden mit UTF-16 dargestellt, und viele {{jsxref("String")}}-APIs arbeiten auf Codeeinheiten, nicht auf Codepunkten. Zum Beispiel gibt {{jsxref("String.length")}} `2` zurück für eine Zeichenkette, die ein einzelnes Unicode-Zeichen enthält, welches nicht in der BMP ist:

```js
const string = "🦊"; // U+1F98A
console.log(string.length); // 2
```

Die Methode {{jsxref("String.charCodeAt()")}} gibt die Codeeinheit an dem angegebenen Index zurück, während die Methode {{jsxref("String.codePointAt()")}} den Codepunkt an dem gegebenen Index zurückgibt:

```js
const string = "🦊"; // U+1F98A

console.log(string.charCodeAt(0).toString(16)); // d83e
console.log(string.charCodeAt(1).toString(16)); // dd8a

console.log(string.codePointAt(0).toString(16)); // 1f98a
```

Siehe [UTF-16-Zeichen, Unicode-Codepunkte und Graphemcluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) um mehr darüber zu erfahren, wie man mit UTF-16-Zeichenketten in JavaScript arbeitet.

## UTF-16 und UTF-8

{{Glossary("UTF-8", "UTF-8")}} ist eine alternative Kodierung für Unicode, die ein bis vier Bytes für jeden Unicode-Codepunkt verwendet. UTF-8 ist eine weitaus häufigere Kodierung für Dokumente im Web als UTF-16.

## UTF-16 und UCS-2

UCS-2 ist eine veraltete Kodierung für Unicode. Sie ist dasselbe wie UTF-16, außer dass sie keine Surrogatpaare unterstützt, daher ist sie nicht in der Lage, Codepunkte außerhalb der BMP zu kodieren.

## Siehe auch

- [UTF-16-Zeichen, Unicode-Codepunkte und Graphemcluster](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)
- {{Glossary("UTF-8", "UTF-8")}}
- [UTF-16](https://en.wikipedia.org/wiki/UTF-16) auf Wikipedia
