---
title: Leitfaden für das Schreiben von HTML-Codebeispielen
short-title: HTML examples
slug: MDN/Writing_guidelines/Code_style_guide/HTML
l10n:
  sourceCommit: 0e7eafea05cd771c86e77947639f3396e7a59b2b
---

Die folgenden Richtlinien decken ab, wie HTML-Beispielcode für MDN Web Docs geschrieben wird.

## Allgemeine Richtlinien für HTML-Codebeispiele

### Wahl eines Formats

Meinungen über die richtige Einrückung, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen zu diesen Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Codelayout konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um mehr über die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

## Vollständiges HTML-Dokument

> [!NOTE]
> Die Richtlinien in diesem Abschnitt gelten nur, wenn Sie ein vollständiges HTML-Dokument zeigen müssen. Ein Snippet reicht normalerweise aus, um ein Feature zu demonstrieren. Wenn Sie den [EmbedLiveSample-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#live_samples) verwenden, fügen Sie einfach das HTML-Snippet ein; es wird automatisch in ein vollständiges HTML-Dokument eingefügt, wenn es angezeigt wird.

### Doctype

Sie sollten den HTML5-{{Glossary("Doctype", "Doctype")}} verwenden.

```html example-good
<!doctype html>
```

### Dokumentensprache

Setzen Sie die Dokumentensprache mit dem [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attribut in Ihrem {{htmlelement("html")}}-Element:

```html example-good
<html lang="en-US"></html>
```

Dies ist gut für die Barrierefreiheit und Suchmaschinen, hilft bei der Lokalisierung von Inhalten und erinnert die Menschen daran, bewährte Praktiken zu verwenden.

### Zeichensatz des Dokuments

Sie sollten auch den Zeichensatz Ihres Dokuments wie folgt definieren:

```html example-good
<meta charset="utf-8" />
```

Verwenden Sie UTF-8, es sei denn, Sie haben einen sehr guten Grund dies nicht zu tun; es deckt alle Zeichenanforderungen ab, unabhängig davon, welche Sprache Sie in Ihrem Dokument verwenden.

### Viewport-Meta-Tag

Schließlich sollten Sie immer das Viewport-Meta-Tag in Ihrem HTML-{{HTMLElement("head")}} hinzufügen, um dem Codebeispiel eine bessere Chance zu geben, auf mobilen Geräten zu funktionieren. Sie sollten zumindest das Folgende in Ihr Dokument einfügen, das später bei Bedarf modifiziert werden kann:

```html example-good
<meta name="viewport" content="width=device-width" />
```

Siehe [Verwendung des Viewport-Meta-Tags zur Steuerung des Layouts auf mobilen Browsern](/de/docs/Web/HTML/Viewport_meta_tag) für weitere Details.

## Attribute

Sie sollten alle Attributwerte in Anführungszeichen setzen. Es ist verlockend, die Anführungszeichen wegzulassen, da HTML5 dies erlaubt, aber das Markup ist ordentlicher und leichter zu lesen, wenn Sie sie einfügen. Zum Beispiel ist dies besser:

```html example-good
<img src="images/logo.jpg" alt="A circular globe icon" class="no-border" />
```

…als dies:

```html-nolint example-bad
<img src=images/logo.jpg alt=A circular globe icon class=no-border>
```

Das Weglassen von Anführungszeichen kann auch Probleme verursachen. Im obigen Beispiel wird das `alt`-Attribut als mehrere Attribute interpretiert, da keine Anführungszeichen angeben, dass "A circular globe icon" ein einzelner Attributwert ist.

## Boolesche Attribute

Geben Sie keine Werte für boolesche Attribute an (aber für {{Glossary("enumerated", "auflistbare")}} Attribute schon); Sie können einfach den Namen des Attributs schreiben, um es zu setzen. Zum Beispiel können Sie schreiben:

```html example-good
<input required />
```

Dies ist völlig verständlich und funktioniert einwandfrei. Wenn ein boolesches HTML-Attribut vorhanden ist, ist der Wert wahr. Während die Angabe eines Wertes funktionieren wird, ist es nicht notwendig und inkorrekt:

```html example-bad
<input required="required" />
```

## Schreibkonvention auf MDN

Verwenden Sie Kleinbuchstaben für alle insensitiven Konstrukte, einschließlich der Doctype-Deklaration, Elementnamen und Attributnamen/-werte. Dies schafft ein einheitliches Erscheinungsbild und ermöglicht schnelleres Schreiben von Markup.

```html example-good
<p class="nice">This looks nice and neat</p>
```

```html-nolint example-bad
<P CLASS="WHOA-THERE">Why is my markup shouting?</P>
```

## Klassen- und ID-Namen

Verwenden Sie semantische Klassen-/ID-Namen und trennen Sie mehrere Wörter mit Bindestrichen ({{Glossary("kebab_case", "Kebab-Schreibweise")}}). Verwenden Sie nicht die {{Glossary("camel_case", "Camel-Schreibweise")}}. Zum Beispiel:

```html example-good
<p class="editorial-summary">Blah blah blah</p>
```

```html example-bad
<p class="bigRedBox">Blah blah blah</p>
```

## Zeichenreferenzen

Verwenden Sie {{Glossary("character_reference", "Zeichenreferenzen")}} nicht unnötig — verwenden Sie, wo immer möglich, das tatsächliche Zeichen (Sie müssen dennoch Zeichen wie Winkelklammern und Anführungszeichen escapen).

Als Beispiel könnten Sie einfach schreiben:

```html example-good
<p>© 2018 Me</p>
```

Anstelle von:

```html example-bad
<p>&copy; 2018 Me</p>
```

## HTML-Elemente

Es gibt einige Regeln für das Schreiben über HTML-Elemente auf MDN Web Docs. Das Einhalten dieser Regeln führt zu konsistenten Beschreibungen von Elementen und deren Komponenten und sorgt auch für die korrekte Verlinkung zu ausführlicher Dokumentation.

- **Elementnamen**: Verwenden Sie den [`HTMLElement`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs)-Makro, der einen Link zur MDN Web Docs-Seite für dieses Element erstellt. Wenn Sie zum Beispiel `\{{HTMLElement("title")}}` schreiben, ergibt das "{{HTMLElement("title")}}".
  Wenn Sie keinen Link erstellen möchten, **schließen Sie den Namen in spitze Klammern ein** und verwenden Sie den "Inline Code"-Stil (z.B. `<title>`).
- **Attributnamen**: Verwenden Sie den "Inline Code"-Stil, um Attributnamen in `code-Schriftart` zu setzen. Zusätzlich setzen Sie sie in **`fetter Schrift`**, wenn das Attribut in Verbindung mit einer Erklärung dessen, was es tut, erwähnt wird oder wenn es auf der Seite zum ersten Mal verwendet wird.
- **Attributwerte**: Verwenden Sie den "Inline Code"-Stil, um `<code>` auf Attributwerte anzuwenden, und setzen Sie keine Anführungszeichen um Zeichenfolgenwerte, es sei denn, dies wird von der Syntax eines Codebeispiels benötigt. Zum Beispiel: "Wenn das `type`-Attribut eines `<input>`-Elements auf `email` oder `tel` gesetzt ist ...".
