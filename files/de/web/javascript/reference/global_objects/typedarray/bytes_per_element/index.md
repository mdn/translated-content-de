---
title: TypedArray.BYTES_PER_ELEMENT
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT
l10n:
  sourceCommit: fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{JSRef}}

Die statische Dateneigenschaft **`TypedArray.BYTES_PER_ELEMENT`** gibt die Größe in Bytes jedes Elements in einem TypedArray an.

{{EmbedInteractiveExample("pages/js/typedarray-bytes-per-element.html", "shorter")}}

## Wert

Eine Zahl, deren Wert vom Typ des `TypedArray` abhängt.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`TypedArray`-Objekte unterscheiden sich in der Anzahl der Bytes pro Element und in der Art und Weise, wie die Bytes interpretiert werden. Die Konstante `BYTES_PER_ELEMENT` enthält die Anzahl der Bytes, die jedes Element im gegebenen `TypedArray` hat.

Die Eigenschaft `BYTES_PER_ELEMENT` ist sowohl eine _Instanzeigenschaft_ als auch eine _statische Eigenschaft_. Sie ist sowohl auf den Unterklassenkonstruktoren von `TypedArray` als auch auf den Instanzen dieser Konstruktoren verfügbar.

Als Instanzeigenschaft ist `BYTES_PER_ELEMENT` auf dem `prototype` des Konstruktors definiert.

## Beispiele

### Verwendung von BYTES_PER_ELEMENT

Als statische Eigenschaft:

Als Instanzeigenschaft:

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden für JavaScript-Typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
