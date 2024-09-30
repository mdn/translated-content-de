---
title: "HTML-Attribut: dirname"
short-title: dirname
slug: Web/HTML/Attributes/dirname
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das **`dirname`**-Attribut kann bei dem {{htmlelement("textarea")}}-Element sowie bei mehreren {{htmlelement("input")}}-Typen verwendet werden und beschreibt die Leserichtung des Textinhalts des Elements während der Formularübermittlung.
Der Browser verwendet den Wert dieses Attributs, um zu bestimmen, ob der vom Benutzer eingegebene Text links-nach-rechts oder rechts-nach-links orientiert ist.
Wenn es verwendet wird, wird der Leserichtungswert des Elements zusammen mit dem Wert des `dirname`-Attributs als Name des Feldes in den Formulardaten übermittelt.

## Verwendungshinweise

Das `dirname`-Attribut kann bei jedem {{htmlelement("textarea")}}-Element oder bei jedem {{htmlelement("input")}}-Element mit {{htmlelement("input/hidden", "hidden")}}, {{htmlelement("input/text", "text")}}, {{htmlelement("input/search", "search")}}, {{htmlelement("input/tel", "tel")}}, {{htmlelement("input/url", "url")}}, {{htmlelement("input/email", "email")}}, {{htmlelement("input/password", "password")}}, {{htmlelement("input/submit", "submit")}}, {{htmlelement("input/reset", "reset")}} oder {{htmlelement("input/button", "button")}} Typ verwendet werden.

Das Format der übermittelten Daten ist `{dirname_value}={direction}`, wobei `{dirname_value}` der Wert des `dirname`-Attributs und `{direction}` die Leserichtung des Textes ist.
Zum Beispiel, wenn der Benutzer "Hello" in ein Element mit den Attributen `name="comment"` und `dirname="comment-direction"` eingibt, sind die URL-codierten Formulardaten für `GET`-Anfragen `comment=Hello&comment-direction=ltr`.
Die Leserichtung ist eine der folgenden:

- `rtl`
  - : Der vom Benutzer eingegebene Text hat eine rechts-nach-links Schriftrichtung.
- `ltr`
  - : Der vom Benutzer eingegebene Text hat eine links-nach-rechts Schriftrichtung.

Wenn keine Textausrichtung angegeben wird, verwendet der Benutzeragent die Leserichtung des übergeordneten Elements, das das Formular enthält, und wenn diese nicht angegeben ist, die Standardleserichtung des Benutzeragenten.

## Beispiele

### Leserichtung des Textarea-Elements

In diesem Beispiel ermöglicht das `dir="auto"`-Attribut auf dem textarea-Element, dass die Leserichtung automatisch basierend auf dem vom Benutzer eingegebenen Text bestimmt wird:

```html
<form method="get" action="https://www.example.com/submit">
  <textarea name="comment" dir="auto" dirname="comment-direction">سيب</textarea>
  <button type="submit">Send my greetings</button>
</form>
```

Wenn der Benutzer das Formular abschickt, inkludiert der Benutzeragent zwei Felder, eines namens `comment` mit dem Wert "سيب", und eines namens `comment-direction` mit dem Wert "rtl".
Der URL-codierte Übermittlungskörper sieht folgendermaßen aus:

```url
https://www.example.com/submit?comment=%D8%B3%D9%8A%D8%A8&comment-direction=rtl
```

### Leserichtung des Input-Elements

In diesem Beispiel ermöglicht das `dir="auto"`-Attribut auf dem input-Element, dass die Leserichtung automatisch basierend auf dem vom Benutzer eingegebenen Text bestimmt wird:

```html
<form method="get" action="https://www.example.com/submit">
  <input
    type="text"
    name="comment-input"
    dir="auto"
    dirname="comment-direction"
    value="Hello" />
  <button type="submit">Send my greetings</button>
</form>
```

Wenn der Benutzer das Formular abschickt, inkludiert der Benutzeragent zwei Felder, eines namens `comment-input` mit dem Wert "Hello", und eines namens `comment-direction` mit dem Wert "ltr":

```url
https://www.example.com/submit?comment-input=Hello&comment-direction=ltr
```

### Vererbung der Leserichtung

Die folgenden `<input>` und `<textarea>`-Elemente haben kein `dir`-Attribut, daher erben sie die explizite Leserichtung ihres übergeordneten Elements, das `rtl` ist:

```html
<div dir="rtl">
  <form method="get" action="https://www.example.com/submit">
    <input
      type="text"
      name="user"
      dirname="user-direction"
      value="LTR Username" />
    <textarea name="comment" dirname="comment-direction">LTR Comment</textarea>
    <button type="submit">Post Comment</button>
  </form>
</div>
```

Der URL-codierte Übermittlungskörper sieht folgendermaßen aus:

```url
https://www.example.com/submit?user=LTR+Username&user-direction=rtl&comment=LTR+Comment&comment-direction=rtl
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`dir`-Attribut](/de/docs/Web/HTML/Global_attributes/dir)
- {{htmlelement("input")}}
- {{htmlelement("textarea")}}
