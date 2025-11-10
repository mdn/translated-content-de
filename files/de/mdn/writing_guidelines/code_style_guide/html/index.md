---
title: Richtlinien zum Schreiben von HTML-Codebeispielen
short-title: HTML examples
slug: MDN/Writing_guidelines/Code_style_guide/HTML
l10n:
  sourceCommit: c7a8b2584452bcd5d2c135b637f4ec659ff74b99
---

Die folgenden Richtlinien behandeln, wie man HTML-Beispielcode für MDN Web Docs schreibt.

## Allgemeine Richtlinien für HTML-Codebeispiele

### Auswahl eines Formats

Meinungen zur korrekten Einrückung, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) konsultieren, um mehr über die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Trotzdem gibt es ein paar zusätzliche Regeln, die Sie befolgen müssen.

## Vollständiges HTML-Dokument

> [!NOTE]
> Die Richtlinien in diesem Abschnitt gelten nur, wenn Sie ein vollständiges HTML-Dokument zeigen müssen. Ein Schnipsel reicht normalerweise aus, um ein Feature zu demonstrieren. Wenn Sie das [EmbedLiveSample-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#live_samples) verwenden, fügen Sie einfach den HTML-Schnipsel ein; er wird automatisch in ein vollständiges HTML-Dokument eingefügt, wenn er angezeigt wird.

### Doctype

Sie sollten den HTML5-{{Glossary("Doctype", "Doctype")}} verwenden.

```html example-good
<!doctype html>
```

### Dokumentensprache

Legen Sie die Sprache des Dokuments fest, indem Sie das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut an Ihrem {{htmlelement("html")}}-Element verwenden:

```html example-good
<html lang="en-US"></html>
```

Dies ist gut für die Zugänglichkeit und Suchmaschinen, hilft bei der Lokalisierung von Inhalten und erinnert daran, bewährte Praktiken zu verwenden.

### Zeichensatz des Dokuments

Sie sollten auch den Zeichensatz Ihres Dokuments wie folgt definieren:

```html example-good
<meta charset="utf-8" />
```

Verwenden Sie UTF-8, es sei denn, Sie haben einen sehr guten Grund, es nicht zu tun; es wird nahezu alle Zeichensatzanforderungen abdecken, unabhängig davon, welche Sprache Sie in Ihrem Dokument verwenden.

### Viewport-Meta-Tag

Schließlich sollten Sie immer das Viewport-Meta-Tag in Ihrem HTML-{{HTMLElement("head")}} hinzufügen, um dem Code-Beispiel eine bessere Chance zu geben, auf Mobilgeräten zu funktionieren. Sie sollten mindestens Folgendes in Ihrem Dokument einschließen, das später nach Bedarf modifiziert werden kann:

```html example-good
<meta name="viewport" content="width=device-width" />
```

Weitere Details finden Sie unter [`<meta name="viewport">`](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport).

## Attribute

Sie sollten alle Attributwerte in doppelte Anführungszeichen setzen. Es ist verlockend, die Anführungszeichen wegzulassen, da HTML5 dies erlaubt, aber das Markup ist ordentlicher und leichter lesbar, wenn Sie sie einschließen. Zum Beispiel ist dies besser:

```html example-good
<img src="images/logo.jpg" alt="A circular globe icon" class="no-border" />
```

…als das:

```html-nolint example-bad
<img src=images/logo.jpg alt=A circular globe icon class=no-border>
```

Das Weglassen von Anführungszeichen kann auch Probleme verursachen. Im obigen Beispiel wird das `alt`-Attribut als mehrere Attribute interpretiert, weil es keine Anführungszeichen gibt, die spezifizieren, dass "A circular globe icon" ein einzelner Attributwert ist.

## Boolesche Attribute

Fügen Sie keine Werte für boolesche Attribute hinzu (aber fügen Sie Werte für {{Glossary("enumerated", "enumerierte")}} Attribute hinzu); Sie können einfach den Attributnamen schreiben, um es zu setzen. Zum Beispiel können Sie schreiben:

```html example-good
<input required />
```

Dies ist völlig verständlich und funktioniert einwandfrei. Wenn ein boolesches HTML-Attribut vorhanden ist, ist der Wert wahr. Während das Hinzufügen eines Wertes funktionieren wird, ist es nicht notwendig und falsch:

```html example-bad
<input required="required" />
```

## Groß- und Kleinschreibungskonvention auf MDN

Verwenden Sie Kleinbuchstaben für alle nicht unterscheidbaren Konstrukte, einschließlich der Doctype-Erklärung, Elementnamen und Attributnamen/-werte. Dies schafft ein konsistentes Erscheinungsbild und erlaubt schnelleres Schreiben des Markups.

```html example-good
<p class="nice">This looks nice and neat</p>
```

```html-nolint example-bad
<P CLASS="WHOA-THERE">Why is my markup shouting?</P>
```

## Klassen- und ID-Namen

Verwenden Sie semantische Klassen-/ID-Namen und trennen Sie mehrere Wörter mit Bindestrichen ({{Glossary("kebab_case", "Kebab Case")}}). Verwenden Sie nicht das {{Glossary("camel_case", "Camel Case")}}. Zum Beispiel:

```html example-good
<p class="editorial-summary">Blah blah blah</p>
```

```html example-bad
<p class="bigRedBox">Blah blah blah</p>
```

## Zeichenreferenzen

Verwenden Sie unnötige {{Glossary("character_reference", "Zeichenreferenzen")}} nicht — verwenden Sie das tatsächliche Zeichen, wo immer möglich (Sie müssen dennoch Zeichen wie spitze Klammern und Anführungszeichen maskieren).

Zum Beispiel könnten Sie einfach schreiben:

```html example-good
<p>© 2018 Me</p>
```

Stattdessen:

```html example-bad
<p>&copy; 2018 Me</p>
```

## HTML-Elemente

Es gibt einige Regeln für das Schreiben über HTML-Elemente auf MDN Web Docs. Die Einhaltung dieser Regeln sorgt für konsistente Beschreibungen von Elementen und deren Komponenten und gewährleistet auch korrekte Verlinkungen zu detaillierten Dokumentationen.

- **Elementnamen**: Verwenden Sie das [`HTMLElement`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs)-Makro, das einen Link zur MDN Web Docs-Seite für dieses Element erstellt. Zum Beispiel erzeugt das Schreiben von `\{{HTMLElement("title")}}` "{{HTMLElement("title")}}".
  Wenn Sie keinen Link erstellen möchten, **umgeben Sie den Namen mit spitzen Klammern** und verwenden Sie den Stil "Inlinecode" (z. B. `<title>`).
- **Attributnamen**: Verwenden Sie den Stil "Inlinecode", um Attributnamen in `Code-Schriftart` zu setzen.
  Zusätzlich setzen Sie sie in **`fetten` Stil**, wenn das Attribut in Verbindung mit einer Erklärung, was es tut, erwähnt wird oder wenn es zum ersten Mal auf der Seite verwendet wird.
- **Attributwerte**: Verwenden Sie den "Inlinecode"-Stil, um `<code>` auf Attributwerte anzuwenden, und verwenden Sie keine Anführungszeichen um String-Werte, es sei denn, es wird von der Syntax eines Codebeispiels benötigt. Zum Beispiel: "Wenn das `type`-Attribut eines `<input>`-Elements auf `email` oder `tel` gesetzt ist ...".
