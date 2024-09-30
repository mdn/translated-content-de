---
title: Richtlinien für das Schreiben von HTML-Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Die folgenden Richtlinien behandeln, wie HTML-Beispielcode für MDN Web Docs geschrieben wird.

## Allgemeine Richtlinien für HTML-Codebeispiele

### Auswahl eines Formats

Meinungen zur korrekten Einrückung, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen zu diesen Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatierer, um den Code-Stil konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) konsultieren, um mehr über die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

## Vollständiges HTML-Dokument

> [!NOTE]
> Die Richtlinien in diesem Abschnitt gelten nur, wenn Sie ein vollständiges HTML-Dokument zeigen müssen. Ein Schnipsel reicht normalerweise aus, um ein Feature zu demonstrieren. Wenn Sie das [EmbedLiveSample-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#traditional_live_samples) verwenden, fügen Sie einfach den HTML-Schnipsel ein; dieser wird beim Anzeigen automatisch in ein vollständiges HTML-Dokument eingefügt.

### Doctype

Sie sollten den HTML5-Doctype verwenden. Er ist kurz, leicht zu merken und rückwärts kompatibel.

```html example-good
<!doctype html>
```

### Dokumentensprache

Setzen Sie die Dokumentensprache mit dem [`lang`](/de/docs/Web/HTML/Global_attributes#lang)-Attribut an Ihrem {{htmlelement("html")}}-Element:

```html example-good
<html lang="en-US"></html>
```

Dies ist gut für die Barrierefreiheit und Suchmaschinen, hilft bei der Lokalisierung von Inhalten und erinnert die Menschen daran, bewährte Praktiken zu verwenden.

### Dokumentzeichensatz

Sie sollten den Zeichensatz Ihres Dokuments wie folgt definieren:

```html example-good
<meta charset="utf-8" />
```

Verwenden Sie UTF-8, es sei denn, Sie haben einen sehr guten Grund, es nicht zu tun; es wird alle Zeichenanforderungen größtenteils unabhängig von der Sprache, die Sie in Ihrem Dokument verwenden, abdecken.

### Viewport-Meta-Tag

Schließlich sollten Sie immer das Viewport-Meta-Tag in Ihrem HTML-{{HTMLElement("head")}} hinzufügen, um dem Codebeispiel eine bessere Chance zu geben, auf mobilen Geräten zu funktionieren. Sie sollten mindestens das Folgende in Ihr Dokument aufnehmen, welches später bei Bedarf angepasst werden kann:

```html example-good
<meta name="viewport" content="width=device-width" />
```

Weitere Details finden Sie unter [Verwendung des Viewport-Meta-Tags zur Steuerung des Layouts auf mobilen Browsern](/de/docs/Web/HTML/Viewport_meta_tag).

## Attribute

Sie sollten alle Attributwerte in doppelte Anführungszeichen setzen. Es ist verlockend, Anführungszeichen wegzulassen, da HTML5 dies erlaubt, aber das Markup ist ordentlicher und leichter zu lesen, wenn Sie sie einschließen. Beispielsweise ist dies besser:

```html example-good
<img src="images/logo.jpg" alt="A circular globe icon" class="no-border" />
```

…als dies:

```html-nolint example-bad
<img src=images/logo.jpg alt=A circular globe icon class=no-border>
```

Das Weglassen von Anführungszeichen kann auch Probleme verursachen. Im obigen Beispiel wird das `alt`-Attribut als mehrere Attribute interpretiert, da keine Anführungszeichen vorhanden sind, um anzugeben, dass "A circular globe icon" ein einzelner Attributwert ist.

## Boolesche Attribute

Geben Sie keine Werte für boolesche Attribute an (aber geben Sie Werte für [enumerierte](/de/docs/Glossary/enumerated) Attribute an); Sie können einfach den Attributnamen schreiben, um es zu setzen. Zum Beispiel können Sie schreiben:

```html example-good
<input required />
```

Dies ist absolut verständlich und funktioniert einwandfrei. Wenn ein boolesches HTML-Attribut vorhanden ist, ist der Wert wahr. Während das Einschließen eines Wertes funktionieren wird, ist es nicht notwendig und falsch:

```html example-bad
<input required="required" />
```

## Groß- und Kleinschreibung

Verwenden Sie Kleinbuchstaben für alle Elementnamen und Attributnamen/-werte, da es ordentlicher aussieht und Sie Markup schneller schreiben können. Zum Beispiel:

```html example-good
<p class="nice">This looks nice and neat</p>
```

```html-nolint example-bad
<P CLASS="WHOA-THERE">Why is my markup shouting?</P>
```

## Klassennamen und IDs

Verwenden Sie semantische Klassen-/ID-Namen und trennen Sie mehrere Wörter mit Bindestrichen ([kebab case](/de/docs/Glossary/kebab_case)). Verwenden Sie nicht [camel case](/de/docs/Glossary/camel_case). Zum Beispiel:

```html example-good
<p class="editorial-summary">Blah blah blah</p>
```

```html example-bad
<p class="bigRedBox">Blah blah blah</p>
```

## Zeichenreferenzen

Verwenden Sie [Zeichenreferenzen](/de/docs/Glossary/character_reference) nicht unnötigerweise — verwenden Sie das tatsächliche Zeichen, wo immer möglich (Sie müssen jedoch Zeichen wie Winkelklammern und Anführungszeichen weiterhin escapen).

Als Beispiel könnten Sie einfach schreiben:

```html example-good
<p>© 2018 Me</p>
```

Anstatt:

```html example-bad
<p>&copy; 2018 Me</p>
```

## HTML-Elemente

Es gibt einige Regeln für das Schreiben über HTML-Elemente in den MDN Web Docs. Die Einhaltung dieser Regeln sorgt für konsistente Beschreibungen der Elemente und ihrer Komponenten und gewährleistet auch die korrekte Verlinkung zu detaillierten Dokumentationen.

- **Elementnamen**: Verwenden Sie das [`HTMLElement`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLElement.ejs)-Makro, das einen Link zur MDN Web Docs-Seite für dieses Element erstellt. Wenn Sie beispielsweise `\{{HTMLElement("title")}}` schreiben, wird "{{HTMLElement("title")}}" erzeugt.
  Wenn Sie keinen Link erstellen möchten, **umschließen Sie den Namen in spitzen Klammern** und verwenden Sie den "Inline Code"-Stil (z. B. `<title>`).
- **Attributnamen**: Verwenden Sie den "Inline Code"-Stil, um Attributnamen in `code font` zu setzen. Darüber hinaus setzen Sie sie in **`Fettdruck`**, wenn das Attribut in Verbindung mit einer Erklärung, was es bewirkt, erwähnt wird oder wenn es zum ersten Mal auf der Seite verwendet wird.
- **Attributwerte**: Verwenden Sie den "Inline Code"-Stil, um `<code>` auf Attributwerte anzuwenden, und verwenden Sie keine Anführungszeichen um Zeichenfolgenwerte, es sei denn, sie sind für die Syntax eines Codebeispiels erforderlich. Zum Beispiel: "Wenn das `type`-Attribut eines `<input>`-Elements auf `email` oder `tel` gesetzt ist ...".
