---
title: Richtlinien zum Schreiben von HTML-Code-Beispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Die folgenden Richtlinien behandeln, wie HTML-Codebeispiele für MDN Web Docs erstellt werden sollten.

## Allgemeine Richtlinien für HTML-Codebeispiele

### Format wählen

Meinungen zur richtigen Einrückung, Leerzeichenverwendung und Zeilenlänge waren schon immer umstritten. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) zu Rate ziehen, um die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

## Vollständiges HTML-Dokument

> [!NOTE]
> Die Richtlinien in diesem Abschnitt gelten nur, wenn Sie ein vollständiges HTML-Dokument zeigen müssen. Ein Schnipsel reicht normalerweise aus, um ein Feature zu demonstrieren. Wenn Sie das [EmbedLiveSample-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#traditional_live_samples) verwenden, fügen Sie einfach den HTML-Schnipsel ein; er wird beim Anzeigen automatisch in ein vollständiges HTML-Dokument eingefügt.

### Doctype

Sie sollten den HTML5-Doctype verwenden. Er ist kurz, leicht zu merken und rückwärtskompatibel.

```html example-good
<!doctype html>
```

### Dokumentensprache

Legen Sie die Dokumentensprache mit dem [`lang`](/de/docs/Web/HTML/Global_attributes#lang)-Attribut an Ihrem {{htmlelement("html")}}-Element fest:

```html example-good
<html lang="en-US"></html>
```

Dies ist gut für die Barrierefreiheit und Suchmaschinen, hilft bei der Lokalisierung von Inhalten und erinnert die Menschen daran, bewährte Praktiken zu verwenden.

### Zeichensatz des Dokuments

Sie sollten auch den Zeichensatz Ihres Dokuments wie folgt definieren:

```html example-good
<meta charset="utf-8" />
```

Verwenden Sie UTF-8, es sei denn, Sie haben einen triftigen Grund, dies nicht zu tun; er deckt nahezu alle Zeichenanforderungen ab, unabhängig davon, welche Sprache Sie in Ihrem Dokument verwenden.

### Viewport-Meta-Tag

Schließlich sollten Sie immer das Viewport-Meta-Tag in Ihrem HTML-{{HTMLElement("head")}} hinzufügen, um dem Code-Beispiel eine bessere Chance zu geben, auf Mobilgeräten zu funktionieren. Sie sollten mindestens das Folgende in Ihr Dokument aufnehmen, das bei Bedarf später angepasst werden kann:

```html example-good
<meta name="viewport" content="width=device-width" />
```

Weitere Details finden Sie unter [Using the viewport meta tag to control layout on mobile browsers](/de/docs/Web/HTML/Viewport_meta_tag).

## Attribute

Sie sollten alle Attributwerte in Anführungszeichen setzen. Es ist verlockend, Anführungszeichen wegzulassen, da HTML5 dies erlaubt, aber das Markup ist ordentlicher und leichter zu lesen, wenn Sie sie doch setzen. Zum Beispiel ist dies besser:

```html example-good
<img src="images/logo.jpg" alt="A circular globe icon" class="no-border" />
```

…als dies:

```html-nolint example-bad
<img src=images/logo.jpg alt=A circular globe icon class=no-border>
```

Das Weglassen von Anführungszeichen kann ebenfalls Probleme verursachen. Im obigen Beispiel wird das `alt`-Attribut als mehrere Attribute interpretiert, da keine Anführungszeichen angeben, dass "A circular globe icon" ein einziger Attributwert ist.

## Boolesche Attribute

Setzen Sie keine Werte für boolesche Attribute (aber setzen Sie Werte für {{glossary("enumerated")}}-Attribute); Sie können einfach den Attributnamen schreiben, um es zu setzen. Zum Beispiel können Sie schreiben:

```html example-good
<input required />
```

Dies ist vollkommen verständlich und funktioniert einwandfrei. Wenn ein boolesches HTML-Attribut vorhanden ist, ist der Wert wahr. Während das Hinzufügen eines Wertes funktionieren wird, ist es nicht notwendig und nicht korrekt:

```html example-bad
<input required="required" />
```

## Groß- und Kleinschreibung

Verwenden Sie Kleinbuchstaben für alle Elementnamen und Attributnamen/-werte, da es ordentlicher aussieht und Sie schneller Markup schreiben können. Zum Beispiel:

```html example-good
<p class="nice">This looks nice and neat</p>
```

```html-nolint example-bad
<P CLASS="WHOA-THERE">Why is my markup shouting?</P>
```

## Klassen- und ID-Namen

Verwenden Sie semantische Klassen-/ID-Namen und trennen Sie mehrere Wörter mit Bindestrichen ({{Glossary("kebab_case", "kebab case")}}). Verwenden Sie nicht {{Glossary("camel_case", "camel case")}}. Zum Beispiel:

```html example-good
<p class="editorial-summary">Blah blah blah</p>
```

```html example-bad
<p class="bigRedBox">Blah blah blah</p>
```

## Zeichenreferenzen

Verwenden Sie {{glossary("character reference", "Zeichenreferenzen")}} nicht unnötigerweise — verwenden Sie das tatsächliche Zeichen, wo immer möglich (Sie müssen dennoch Zeichen wie spitze Klammern und Anführungszeichen maskieren).

Zum Beispiel könnten Sie einfach schreiben:

```html example-good
<p>© 2018 Me</p>
```

Stattdessen:

```html example-bad
<p>&copy; 2018 Me</p>
```

## HTML-Elemente

Es gibt einige Regeln zum Schreiben über HTML-Elemente auf MDN Web Docs. Die Einhaltung dieser Regeln sorgt für konsistente Beschreibungen von Elementen und ihren Komponenten und gewährleistet auch die korrekte Verlinkung zu detaillierter Dokumentation.

- **Elementnamen**: Verwenden Sie das [`HTMLElement`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLElement.ejs)-Makro, das einen Link zur MDN Web Docs-Seite für dieses Element erstellt. Wenn Sie zum Beispiel `\{{HTMLElement("title")}}` schreiben, erhalten Sie "{{HTMLElement("title")}}".
  Wenn Sie keinen Link erstellen möchten, **fassen Sie den Namen in spitze Klammern ein** und verwenden Sie den "Inline-Code"-Stil (z. B. `<title>`).
- **Attributnamen**: Verwenden Sie den "Inline-Code"-Stil, um Attributnamen in `Code-Schriftart` zu setzen.
  Außerdem setzen Sie sie in **`fette Schrift`**, wenn das Attribut im Zusammenhang mit einer Erklärung dessen, was es tut, erwähnt wird oder wenn es zum ersten Mal auf der Seite verwendet wird.
- **Attributwerte**: Verwenden Sie den "Inline-Code"-Stil, um `<code>` auf Attributwerte anzuwenden, und verwenden Sie keine Anführungszeichen um Zeichenfolgenwerte, es sei denn, sie werden durch die Syntax eines Codebeispiels benötigt. Zum Beispiel: "Wenn das `type`-Attribut eines `<input>`-Elements auf `email` oder `tel` gesetzt ist ...".