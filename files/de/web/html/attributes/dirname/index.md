---
title: "HTML-Attribut: dirname"
short-title: dirname
slug: Web/HTML/Attributes/dirname
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das **`dirname`**-Attribut kann auf dem {{htmlelement("textarea")}}-Element und mehreren {{htmlelement("input")}}-Typen verwendet werden und beschreibt die Richtung des Textinhalts des Elements bei der Formularübermittlung.
Der Browser verwendet den Wert dieses Attributs, um zu bestimmen, ob der vom Benutzer eingegebene Text links-nach-rechts oder rechts-nach-links ausgerichtet ist.
Wenn das Attribut verwendet wird, wird der Textausrichtungswert des Elements zusammen mit dem Wert des `dirname`-Attributs als Name des Feldes in den Formulardaten enthalten.

## Verwendungshinweise

Das `dirname`-Attribut kann bei jedem {{htmlelement("textarea")}}-Element oder jedem {{htmlelement("input")}}-Element mit den Typen {{htmlelement("input/hidden", "hidden")}}, {{htmlelement("input/text", "text")}}, {{htmlelement("input/search", "search")}}, {{htmlelement("input/tel", "tel")}}, {{htmlelement("input/url", "url")}}, {{htmlelement("input/email", "email")}}, {{htmlelement("input/password", "password")}}, {{htmlelement("input/submit", "submit")}}, {{htmlelement("input/reset", "reset")}} oder {{htmlelement("input/button", "button")}} verwendet werden.

Das Format der übermittelten Daten ist `{dirname_value}={direction}`, wobei `{dirname_value}` der Wert des `dirname`-Attributs und `{direction}` die Ausrichtung des Textes ist.
Zum Beispiel, wenn der Benutzer "Hello" in ein Element mit den Attributen `name="comment"` und `dirname="comment-direction"` eingibt, werden die URL-kodierten Formulardaten für `GET`-Anfragen `comment=Hello&comment-direction=ltr` sein.
Die Richtungen sind:

- `rtl`
  - : Der vom Benutzer eingegebene Text hat eine rechts-nach-links Schreibrichtung.
- `ltr`
  - : Der vom Benutzer eingegebene Text hat eine links-nach-rechts Schreibrichtung.

Wenn keine Textrichtung spezifiziert ist, verwendet der Benutzeragent die Richtungsangabe des Elternelements, das das Formular enthält, und falls diese nicht spezifiziert ist, die Standardrichtung des Benutzeragents.

## Beispiele

### Richtung des Textarea-Elements

In diesem Beispiel ermöglicht das Attribut `dir="auto"` beim Textarea-Element, dass die Textrichtung automatisch basierend auf dem vom Benutzer eingegebenen Text bestimmt wird:

```html
<form method="get" action="https://www.example.com/submit">
  <textarea name="comment" dir="auto" dirname="comment-direction">سيب</textarea>
  <button type="submit">Send my greetings</button>
</form>
```

Wenn der Benutzer das Formular abschickt, enthält der Benutzeragent zwei Felder, eines namens `comment` mit dem Wert "سيب" und eines namens `comment-direction` mit dem Wert "rtl".
Der URL-kodierte Übermittlungskörper sieht folgendermaßen aus:

```url
https://www.example.com/submit?comment=%D8%B3%D9%8A%D8%A8&comment-direction=rtl
```

### Richtung des Input-Elements

In diesem Beispiel ermöglicht das Attribut `dir="auto"` beim Input-Element, dass die Textrichtung automatisch basierend auf dem vom Benutzer eingegebenen Text bestimmt wird:

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

Wenn der Benutzer das Formular abschickt, enthält der Benutzeragent zwei Felder, eines namens `comment-input` mit dem Wert "Hello" und eines namens `comment-direction` mit dem Wert "ltr":

```url
https://www.example.com/submit?comment-input=Hello&comment-direction=ltr
```

### Vererbte Richtung

Die folgenden `<input>` und `<textarea>`-Elemente haben kein `dir`-Attribut, daher erben sie die explizite Richtungsangabe ihres Elternelements, die `rtl` ist:

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

Der URL-kodierte Übermittlungskörper sieht folgendermaßen aus:

```url
https://www.example.com/submit?user=LTR+Username&user-direction=rtl&comment=LTR+Comment&comment-direction=rtl
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`dir` Attribut](/de/docs/Web/HTML/Global_attributes/dir)
- {{htmlelement("input")}}
- {{htmlelement("textarea")}}
