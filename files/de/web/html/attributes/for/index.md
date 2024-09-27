---
title: "HTML-Attribut: for"
short-title: for
slug: Web/HTML/Attributes/for
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das **`for`**-Attribut ist ein zulässiges Attribut für {{htmlelement("label")}} und {{htmlelement("output")}}. Wenn es in einem `<label>`-Element verwendet wird, gibt es das Formular-Element an, das durch dieses Label beschrieben wird. Bei Verwendung in einem `<output>`-Element ermöglicht es eine explizite Beziehung zwischen den Elementen, die Werte repräsentieren, die im Output verwendet werden.

{{EmbedInteractiveExample("pages/tabbed/attribute-for.html", "tabbed-shorter")}}

## Verwendung

Wenn das `for`-Attribut als Attribut von `<label>` verwendet wird, hat es einen Wert, der die `id` des Formular-Elements ist, auf das es sich bezieht.

```html
<label for="username">Your name</label> <input type="text" id="username" />
```

Wenn das `for`-Attribut als Attribut von `<output>` verwendet wird, hat es einen Wert, der eine durch Leerzeichen getrennte Liste der `id`-Werte der Elemente ist, die verwendet werden, um den Output zu erzeugen.

```html
<input type="range" id="b" name="b" value="50" /> +
<input type="number" id="a" name="a" value="10" /> =
<output name="result" for="a b">60</output>
```

## Beispiele

Siehe Beispiele zur Verwendung auf den Elementseiten für {{htmlelement("label")}} und {{htmlelement("output")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
