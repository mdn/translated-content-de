---
title: "HTML-Attribut: for"
short-title: for
slug: Web/HTML/Attributes/for
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das **`for`**-Attribut ist ein zulässiges Attribut für {{htmlelement("label")}} und {{htmlelement("output")}}. Wenn es in einem `<label>`-Element verwendet wird, zeigt es das Formularelement an, das dieses Label beschreibt. Bei Verwendung in einem `<output>`-Element ermöglicht es eine explizite Beziehung zwischen den Elementen, welche die Werte repräsentieren, die in der Ausgabe verwendet werden.

{{EmbedInteractiveExample("pages/tabbed/attribute-for.html", "tabbed-shorter")}}

## Verwendung

Wenn es als Attribut innerhalb von `<label>` verwendet wird, hat das `for`-Attribut einen Wert, der die `id` des zugehörigen Formularelements ist.

```html
<label for="username">Your name</label> <input type="text" id="username" />
```

Wird es als Attribut innerhalb von `<output>` verwendet, hat das `for`-Attribut einen Wert, der eine durch Leerzeichen getrennte Liste der `id`-Werte der Elemente ist, die zur Erstellung der Ausgabe verwendet werden.

```html
<input type="range" id="b" name="b" value="50" /> +
<input type="number" id="a" name="a" value="10" /> =
<output name="result" for="a b">60</output>
```

## Beispiele

Siehe Anwendungsbeispiele auf den Elementseiten für {{htmlelement("label")}} und {{htmlelement("output")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
