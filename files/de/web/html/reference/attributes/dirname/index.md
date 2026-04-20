---
title: "`dirname` HTML-Attribut"
short-title: dirname
slug: Web/HTML/Reference/Attributes/dirname
l10n:
  sourceCommit: b50ed7ac1c2ca21b4b5cfb594474a17da3f2e6c2
---

Das **`dirname`**-Attribut kann auf das {{htmlelement("textarea")}}-Element und mehrere {{htmlelement("input")}}-Typen angewendet werden und beschreibt die Ausrichtung des Textelements bei der Formularübermittlung.
Der Browser verwendet den Wert dieses Attributs, um zu bestimmen, ob der vom Benutzer eingegebene Text von links nach rechts oder von rechts nach links orientiert ist.
Wird es verwendet, wird der Wert der Textelement-Ausrichtung zusammen mit dem Wert des `dirname`-Attributs als Name des Feldes in die Formulardaten aufgenommen.

## Anwendungsnotizen

Das `dirname`-Attribut kann auf jedes {{htmlelement("textarea")}}-Element oder jedes {{htmlelement("input")}}-Element mit einem der folgenden Typen angewendet werden: {{htmlelement("input/hidden", "hidden")}}, {{htmlelement("input/text", "text")}}, {{htmlelement("input/search", "search")}}, {{htmlelement("input/tel", "tel")}}, {{htmlelement("input/url", "url")}}, {{htmlelement("input/email", "email")}}, {{htmlelement("input/password", "password")}}, {{htmlelement("input/submit", "submit")}}, {{htmlelement("input/reset", "reset")}} oder {{htmlelement("input/button", "button")}}.

Das Format der übermittelten Daten ist `{dirname_value}={direction}`, wobei `{dirname_value}` der Wert des `dirname`-Attributs und `{direction}` die Richtung des Textes ist.
Zum Beispiel, wenn der Benutzer "Hello" in ein Element mit den Attributen `name="comment"` und `dirname="comment-direction"` eingibt, sehen die URL-kodierten Formulardaten für `GET`-Anfragen folgendermaßen aus: `comment=Hello&comment-direction=ltr`.
Die Richtung ist eine der folgenden:

- `rtl`
  - : Der vom Benutzer eingegebene Text hat eine Schreibrichtung von rechts nach links.
- `ltr`
  - : Der vom Benutzer eingegebene Text hat eine Schreibrichtung von links nach rechts.

Wenn keine Textausrichtung angegeben ist, verwendet der Benutzeragent die Ausrichtung des übergeordneten Elements, das das Formular enthält, und wenn diese nicht angegeben ist, die Standardausrichtung des Benutzeragents.

## Beispiele

### Textarea-Element-Ausrichtung

In diesem Beispiel erlaubt das `dir="auto"`-Attribut auf dem textarea-Element, dass die Textelement-Ausrichtung automatisch basierend auf dem vom Benutzer eingegebenen Text bestimmt wird:

```html
<form method="get" action="https://www.example.com/submit">
  <textarea name="comment" dir="auto" dirname="comment-direction">سيب</textarea>
  <button type="submit">Send my greetings</button>
</form>
```

Wenn der Benutzer das Formular abschickt, fügt der Benutzeragent zwei Felder ein, eines namens `comment` mit dem Wert "سيب" und eines namens `comment-direction` mit dem Wert "rtl".
Der URL-kodierte Übermittlungstext sieht so aus:

```url
https://www.example.com/submit?comment=%D8%B3%D9%8A%D8%A8&comment-direction=rtl
```

### Eingabeelement-Ausrichtung

In diesem Beispiel erlaubt das `dir="auto"`-Attribut auf dem Eingabeelement, dass die Textelement-Ausrichtung automatisch basierend auf dem vom Benutzer eingegebenen Text bestimmt wird:

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

Wenn der Benutzer das Formular abschickt, fügt der Benutzeragent zwei Felder ein, eines namens `comment-input` mit dem Wert "Hello" und eines namens `comment-direction` mit dem Wert "ltr":

```url
https://www.example.com/submit?comment-input=Hello&comment-direction=ltr
```

### Vererbung der Ausrichtung

Die folgenden `<input>`- und `<textarea>`-Elemente haben kein `dir`-Attribut, daher erben sie die explizite Ausrichtung ihres übergeordneten Elements, das `rtl` ist:

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

Der URL-kodierte Übermittlungstext sieht so aus:

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
