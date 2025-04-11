---
title: "HTML-Attribut: dirname"
short-title: dirname
slug: Web/HTML/Reference/Attributes/dirname
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`dirname`**-Attribut kann auf dem {{htmlelement("textarea")}}-Element und mehreren {{htmlelement("input")}}-Typen verwendet werden und beschreibt die Direktionalität des Textinhalts des Elements während der Formularübertragung.
Der Browser verwendet den Wert dieses Attributs, um zu bestimmen, ob der vom Benutzer eingegebene Text von links nach rechts oder von rechts nach links orientiert ist.
Wenn es verwendet wird, wird der Direktionalitätswert des Elements zusammen mit dem Wert des `dirname`-Attributs als Name des Feldes in den Formulardaten bei der Übertragung aufgenommen.

## Hinweise zur Nutzung

Das `dirname`-Attribut kann auf jedem {{htmlelement("textarea")}}-Element oder jedem {{htmlelement("input")}}-Element mit dem Typ {{htmlelement("input/hidden", "hidden")}}, {{htmlelement("input/text", "text")}}, {{htmlelement("input/search", "search")}}, {{htmlelement("input/tel", "tel")}}, {{htmlelement("input/url", "url")}}, {{htmlelement("input/email", "email")}}, {{htmlelement("input/password", "password")}}, {{htmlelement("input/submit", "submit")}}, {{htmlelement("input/reset", "reset")}} oder {{htmlelement("input/button", "button")}} verwendet werden.

Das Format der übermittelten Daten ist `{dirname_value}={direction}`, wobei `{dirname_value}` der Wert des `dirname`-Attributs und `{direction}` die Direktionalität des Textes ist.
Zum Beispiel, wenn der Benutzer "Hello" in ein Element mit den Attributen `name="comment"` und `dirname="comment-direction"` eingibt, werden die URL-kodierten Formulardaten für `GET`-Anfragen `comment=Hello&comment-direction=ltr` sein.
Die Direktionalität ist eine der folgenden:

- `rtl`
  - : Der von Benutzer eingegebene Text ist in einer Schrift-Richtung von rechts nach links.
- `ltr`
  - : Der von Benutzer eingegebene Text ist in einer Schrift-Richtung von links nach rechts.

Wenn keine Textdirektionalität angegeben ist, verwendet der Benutzeragent die Direktionalität des übergeordneten Elements, das das Formular enthält, und falls dies nicht angegeben ist, die Standarddirektionalität des Benutzeragents.

## Beispiele

### Direktionalität des Textarea-Elements

In diesem Beispiel ermöglicht das `dir="auto"`-Attribut auf dem textarea-Element, dass die Textdirektionalität automatisch basierend auf dem vom Benutzer eingegebenen Text bestimmt wird:

```html
<form method="get" action="https://www.example.com/submit">
  <textarea name="comment" dir="auto" dirname="comment-direction">سيب</textarea>
  <button type="submit">Send my greetings</button>
</form>
```

Wenn der Benutzer das Formular absendet, beinhaltet der Benutzeragent zwei Felder, eines namens `comment` mit dem Wert "سيب" und eines namens `comment-direction` mit dem Wert "rtl".
Der URL-kodierte Übermittlungskörper sieht folgendermaßen aus:

```url
https://www.example.com/submit?comment=%D8%B3%D9%8A%D8%A8&comment-direction=rtl
```

### Direktionalität des Input-Elements

In diesem Beispiel ermöglicht das `dir="auto"`-Attribut auf dem input-Element, dass die Textdirektionalität automatisch basierend auf dem vom Benutzer eingegebenen Text bestimmt wird:

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

Wenn der Benutzer das Formular absendet, beinhaltet der Benutzeragent zwei Felder, eines namens `comment-input` mit dem Wert "Hello" und eines namens `comment-direction` mit dem Wert "ltr":

```url
https://www.example.com/submit?comment-input=Hello&comment-direction=ltr
```

### Vererbung der Direktionalität

Die folgenden `<input>`- und `<textarea>`-Elemente haben kein `dir`-Attribut, sodass sie die explizite Direktionalität ihres übergeordneten Elements erben, welches `rtl` ist:

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

- [`dir`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/dir)
- {{htmlelement("input")}}
- {{htmlelement("textarea")}}
