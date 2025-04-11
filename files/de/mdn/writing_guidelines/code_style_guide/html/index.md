---
title: Richtlinien zum Schreiben von HTML-Codebeispielen
short-title: HTML examples
slug: MDN/Writing_guidelines/Code_style_guide/HTML
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die folgenden Richtlinien behandeln das Schreiben von HTML-Beispielcode für MDN Web Docs.

## Allgemeine Richtlinien für HTML-Codebeispiele

### Auswahl eines Formats

Meinungen über korrekte Einrückung, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen über diese Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Stil des Codes konsistent zu halten (und um von themenfremden Diskussionen abzulenken). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um mehr über die aktuellen Regeln zu erfahren, und die [Dokumentation von Prettier](https://prettier.io/docs/index.html) lesen.

Prettier formatiert den gesamten Code und sorgt für einen konsistenten Stil. Dennoch gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

## Vollständiges HTML-Dokument

> [!NOTE]
> Die Richtlinien in diesem Abschnitt gelten nur, wenn Sie ein vollständiges HTML-Dokument zeigen müssen. Ein Ausschnitt reicht normalerweise aus, um ein Feature zu demonstrieren. Wenn Sie das [EmbedLiveSample-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#live_samples) verwenden, fügen Sie einfach den HTML-Ausschnitt ein; er wird automatisch in ein vollständiges HTML-Dokument eingefügt, wenn er angezeigt wird.

### Doctype

Sie sollten den HTML5-{{Glossary("Doctype", "Doctype")}} verwenden.

```html example-good
<!doctype html>
```

### Dokumentensprache

Setzen Sie die Dokumentensprache mithilfe des [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attributs auf Ihrem {{htmlelement("html")}}-Element:

```html example-good
<html lang="en-US"></html>
```

Dies ist gut für die Barrierefreiheit und Suchmaschinen, hilft bei der Lokalisierung von Inhalten und erinnert die Menschen daran, bewährte Praktiken zu verwenden.

### Dokument-Zeichensatz

Sie sollten auch den Zeichensatz Ihres Dokuments wie folgt definieren:

```html example-good
<meta charset="utf-8" />
```

Verwenden Sie UTF-8, es sei denn, Sie haben einen sehr guten Grund, dies nicht zu tun; es deckt alle Zeichenbedürfnisse ab, unabhängig davon, welche Sprache Sie in Ihrem Dokument verwenden.

### Viewport-Meta-Tag

Zuletzt sollten Sie immer das Viewport-Meta-Tag in Ihr HTML {{HTMLElement("head")}} einfügen, um dem Codebeispiel eine bessere Chance zu geben, auf mobilen Geräten zu funktionieren. Sie sollten mindestens Folgendes in Ihrem Dokument einfügen, das später bei Bedarf angepasst werden kann:

```html example-good
<meta name="viewport" content="width=device-width" />
```

Weitere Details finden Sie unter [Verwendung des Viewport-Meta-Tags zur Steuerung des Layouts auf mobilen Browsern](/de/docs/Web/HTML/Guides/Viewport_meta_element).

## Attribute

Sie sollten alle Attributwerte in doppelte Anführungszeichen setzen. Es ist verlockend, Anführungszeichen wegzulassen, da HTML5 dies erlaubt, aber das Markup ist ordentlicher und leichter zu lesen, wenn Sie sie einschließen. Zum Beispiel ist dies besser:

```html example-good
<img src="images/logo.jpg" alt="A circular globe icon" class="no-border" />
```

…als das:

```html-nolint example-bad
<img src=images/logo.jpg alt=A circular globe icon class=no-border>
```

Das Weglassen von Anführungszeichen kann auch Probleme verursachen. Im obigen Beispiel wird das `alt`-Attribut als mehrere Attribute interpretiert, da keine Anführungszeichen angeben, dass "A circular globe icon" ein einzelner Attributwert ist.

## Boolesche Attribute

Geben Sie keine Werte für boolesche Attribute an (aber geben Sie Werte für {{Glossary("enumerated", "enumerierte")}} Attribute an); Sie können einfach den Attributnamen schreiben, um ihn zu setzen. Zum Beispiel können Sie schreiben:

```html example-good
<input required />
```

Dies ist perfekt verständlich und funktioniert einwandfrei. Wenn ein boolesches HTML-Attribut vorhanden ist, ist der Wert wahr. Während das Einschließen eines Werts funktionieren wird, ist es nicht notwendig und inkorrekt:

```html example-bad
<input required="required" />
```

## Groß-/Kleinschreibungskonvention auf MDN

Verwenden Sie Kleinbuchstaben für alle nicht groß-/kleinschreibungsempfindlichen Konstrukte, einschließlich der Doctype-Deklaration, der Elementnamen und der Attributnamen/-werte. Dies schafft ein einheitliches Erscheinungsbild und ermöglicht schnelleres Schreiben von Markup.

```html example-good
<p class="nice">This looks nice and neat</p>
```

```html-nolint example-bad
<P CLASS="WHOA-THERE">Why is my markup shouting?</P>
```

## Klassen- und ID-Namen

Verwenden Sie semantische Klassen-/ID-Namen und trennen Sie mehrere Wörter mit Bindestrichen ({{Glossary("kebab_case", "kebab case")}}). Verwenden Sie kein {{Glossary("camel_case", "camel case")}}. Zum Beispiel:

```html example-good
<p class="editorial-summary">Blah blah blah</p>
```

```html example-bad
<p class="bigRedBox">Blah blah blah</p>
```

## Zeichenreferenzen

Verwenden Sie {{Glossary("character_reference", "Zeichenreferenzen")}} nicht unnötigerweise — verwenden Sie das tatsächliche Zeichen, wo immer möglich (Sie müssen weiterhin Zeichen wie spitze Klammern und Anführungszeichen escapen).

Zum Beispiel könnten Sie einfach schreiben:

```html example-good
<p>© 2018 Me</p>
```

Anstatt:

```html example-bad
<p>&copy; 2018 Me</p>
```

## HTML-Elemente

Es gibt einige Regeln zum Schreiben über HTML-Elemente auf MDN Web Docs. Die Einhaltung dieser Regeln führt zu konsistenten Beschreibungen von Elementen und ihren Komponenten und gewährleistet auch die korrekte Verlinkung zu detaillierter Dokumentation.

- **Elementnamen**: Verwenden Sie das [`HTMLElement`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs)-Makro, das einen Link zur MDN Web Docs-Seite für dieses Element erstellt. Zum Beispiel erzeugt das Schreiben von `\{{HTMLElement("title")}}` "{{HTMLElement("title")}}".
  Wenn Sie keinen Link erstellen wollen, **umschließen Sie den Namen in spitzen Klammern** und verwenden Sie den "Inline-Code"-Stil (z. B. `<title>`).
- **Attributnamen**: Verwenden Sie den "Inline-Code"-Stil, um Attributnamen in `Code-Schrift` zu setzen.
  Zusätzlich setzen Sie sie in **`fetter Schrift`**, wenn das Attribut in Verbindung mit einer Erklärung, was es tut, erwähnt wird oder wenn es zum ersten Mal auf der Seite verwendet wird.
- **Attributwerte**: Verwenden Sie den "Inline-Code"-Stil, um `<code>` auf Attributwerte anzuwenden, und verwenden Sie keine Anführungszeichen um Zeichenfolgenwerte, es sei denn, dies wird durch die Syntax eines Codebeispiels benötigt. Zum Beispiel: "Wenn das `type`-Attribut eines `<input>`-Elements auf `email` oder `tel` gesetzt ist ...".
