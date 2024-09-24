---
title: Richtlinien für das Schreiben von HTML-Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{MDNSidebar}}

Die folgenden Richtlinien beschreiben, wie HTML-Beispielcode für MDN Web Docs geschrieben werden sollte.

## Allgemeine Richtlinien für HTML-Codebeispiele

### Auswahl eines Formats

Meinungen über korrekte Einrückungen, Leerzeichen und Zeilenlängen sind stets kontrovers gewesen. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

Bei MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Codestil konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) konsultieren, um die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es ein paar zusätzliche Regeln, die Sie befolgen müssen.

## Vollständiges HTML-Dokument

> [!NOTE]
> Die Richtlinien in diesem Abschnitt gelten nur, wenn Sie ein vollständiges HTML-Dokument anzeigen müssen. Ein Snippet reicht normalerweise aus, um eine Funktion zu demonstrieren. Wenn Sie das [EmbedLiveSample-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#traditional_live_samples) verwenden, fügen Sie einfach das HTML-Snippet ein; es wird automatisch in ein vollständiges HTML-Dokument eingefügt, wenn es angezeigt wird.

### Doctype

Sie sollten den HTML5-Doctype verwenden. Er ist kurz, leicht zu merken und abwärtskompatibel.

```html example-good
<!doctype html>
```

### Dokumentensprache

Legen Sie die Dokumentensprache mit dem [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attribut auf Ihrem {{htmlelement("html")}}-Element fest:

```html example-good
<html lang="en-US"></html>
```

Dies ist gut für Barrierefreiheit und Suchmaschinen, hilft bei der Lokalisierung von Inhalten und erinnert die Menschen daran, bewährte Praktiken zu verwenden.

### Zeichensatz des Dokuments

Sie sollten auch den Zeichensatz Ihres Dokuments wie folgt definieren:

```html example-good
<meta charset="utf-8" />
```

Verwenden Sie UTF-8, es sei denn, Sie haben einen sehr guten Grund, es nicht zu tun; es deckt alle Zeichenbedürfnisse so ziemlich unabhängig von der Sprache ab, die Sie in Ihrem Dokument verwenden.

### Viewport-Meta-Tag

Schließlich sollten Sie immer das Viewport-Meta-Tag in Ihrem HTML-{{HTMLElement("head")}} hinzufügen, um dem Codebeispiel eine bessere Chance zu geben, auf Mobilgeräten zu funktionieren. Sie sollten mindestens das Folgende in Ihr Dokument aufnehmen, das bei Bedarf später modifiziert werden kann:

```html example-good
<meta name="viewport" content="width=device-width" />
```

Weitere Details finden Sie unter [Using the viewport meta tag to control layout on mobile browsers](/de/docs/Web/HTML/Viewport_meta_tag).

## Attribute

Sie sollten alle Attributwerte in doppelte Anführungszeichen setzen. Es ist verlockend, Anführungszeichen wegzulassen, da HTML5 dies zulässt, aber das Markup ist ordentlicher und einfacher zu lesen, wenn Sie sie einschließen. Zum Beispiel ist dies besser:

```html example-good
<img src="images/logo.jpg" alt="A circular globe icon" class="no-border" />
```

…als dies:

```html-nolint example-bad
<img src=images/logo.jpg alt=A circular globe icon class=no-border>
```

Das Weglassen von Anführungszeichen kann auch Probleme verursachen. Im obigen Beispiel wird das `alt`-Attribut als mehrere Attribute interpretiert, da keine Anführungszeichen vorhanden sind, um anzugeben, dass "A circular globe icon" ein einzelner Attributwert ist.

## Boolean-Attribute

Schließen Sie keine Werte für Boolean-Attribute ein (aber schließen Sie Werte für {{Glossary("enumerated", "enumerierte")}} Attribute ein); Sie können einfach den Attributnamen schreiben, um ihn festzulegen. Zum Beispiel können Sie schreiben:

```html example-good
<input required />
```

Dies ist vollkommen verständlich und funktioniert einwandfrei. Wenn ein Boolean-HTML-Attribut vorhanden ist, ist der Wert true. Während das Einfügen eines Wertes funktionieren wird, ist es nicht notwendig und fehlerhaft:

```html example-bad
<input required="required" />
```

## Groß- und Kleinschreibung

Verwenden Sie Kleinbuchstaben für alle Element- und Attributnamen/-werte, da es ordentlicher aussieht und Sie Markup schneller schreiben können. Zum Beispiel:

```html example-good
<p class="nice">This looks nice and neat</p>
```

```html-nolint example-bad
<P CLASS="WHOA-THERE">Why is my markup shouting?</P>
```

## Klassen- und ID-Namen

Verwenden Sie semantische Klassen-/ID-Namen und trennen Sie mehrere Wörter mit Bindestrichen ({{Glossary("kebab_case", "kebab-case")}}). Verwenden Sie nicht das {{Glossary("camel_case", "camel-case")}}. Zum Beispiel:

```html example-good
<p class="editorial-summary">Blah blah blah</p>
```

```html example-bad
<p class="bigRedBox">Blah blah blah</p>
```

## Zeichenreferenzen

Verwenden Sie keine {{Glossary("character_reference", "Zeichenreferenzen")}} unnötigerweise - verwenden Sie das tatsächliche Zeichen, wo immer möglich (Sie müssen immer noch Zeichen wie spitze Klammern und Anführungszeichen maskieren).

Zum Beispiel könnten Sie einfach schreiben:

```html example-good
<p>© 2018 Me</p>
```

Stattdessen von:

```html example-bad
<p>&copy; 2018 Me</p>
```

## HTML-Elemente

Es gibt einige Regeln für das Schreiben über HTML-Elemente auf MDN Web Docs. Das Einhalten dieser Regeln sorgt für konsistente Beschreibungen von Elementen und ihren Komponenten und stellt außerdem sicher, dass korrekt auf detaillierte Dokumentation verlinkt wird.

- **Elementnamen**: Verwenden Sie das [`HTMLElement`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLElement.ejs)-Makro, das einen Link zur MDN Web Docs-Seite für dieses Element erstellt. Zum Beispiel erzeugt das Schreiben von `\{{HTMLElement("title")}}` "{{HTMLElement("title")}}".
  Wenn Sie keinen Link erstellen möchten, **schließen Sie den Namen in spitze Klammern ein** und verwenden Sie das Format "Inline-Code" (z.B. `<title>`).
- **Attributnamen**: Verwenden Sie das Format "Inline-Code", um Attributnamen in `Code-Schriftart` zu setzen.
  Zusätzlich setzen Sie sie in **`fett`**, wenn das Attribut im Zusammenhang mit einer Erklärung erwähnt wird, was es tut oder wenn es erstmals auf der Seite erwähnt wird.
- **Attributwerte**: Verwenden Sie das Format "Inline-Code", um `<code>` auf Attributwerte anzuwenden, und verwenden Sie keine Anführungszeichen um Zeichenfolgenwerte, es sei denn, sie sind durch die Syntax eines Code-Beispiels erforderlich. Zum Beispiel: "Wenn das `type`-Attribut eines `<input>`-Elements auf `email` oder `tel` gesetzt ist ...".
