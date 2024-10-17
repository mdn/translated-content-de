---
title: Richtlinien zum Schreiben von HTML-Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{MDNSidebar}}

Die folgenden Richtlinien beschreiben, wie HTML-Beispielcode für die MDN Web Docs geschrieben werden soll.

## Allgemeine Richtlinien für HTML-Codebeispiele

### Format wählen

Meinungen über die richtige Einrückung, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen zu diesen Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf den MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um sich über die aktuellen Regeln zu informieren und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) zu lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

## Vollständiges HTML-Dokument

> [!NOTE]
> Die Richtlinien in diesem Abschnitt gelten nur, wenn Sie ein vollständiges HTML-Dokument anzeigen müssen. Ein Snippet ist normalerweise ausreichend, um ein Feature zu demonstrieren. Wenn Sie das [EmbedLiveSample-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#traditional_live_samples) verwenden, fügen Sie einfach das HTML-Snippet ein; es wird beim Anzeigen automatisch in ein vollständiges HTML-Dokument eingefügt.

### Doctype

Sie sollten den HTML5-Doctype verwenden. Er ist kurz, leicht zu merken und abwärtskompatibel.

```html example-good
<!doctype html>
```

### Dokumentensprache

Setzen Sie die Dokumentensprache mit dem [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attribut an Ihrem {{htmlelement("html")}}-Element:

```html example-good
<html lang="en-US"></html>
```

Dies ist gut für die Barrierefreiheit und Suchmaschinen, hilft bei der Lokalisierung von Inhalten und erinnert daran, bewährte Praktiken zu verwenden.

### Zeichensatz des Dokuments

Sie sollten auch den Zeichensatz Ihres Dokuments wie folgt definieren:

```html example-good
<meta charset="utf-8" />
```

Verwenden Sie UTF-8, es sei denn, Sie haben einen sehr guten Grund, dies nicht zu tun; es deckt nahezu alle Zeichenbedürfnisse unabhängig von der verwendeten Sprache im Dokument ab.

### Viewport-Meta-Tag

Schließlich sollten Sie immer das Viewport-Meta-Tag in Ihrem HTML-{{HTMLElement("head")}} hinzufügen, um dem Codebeispiel eine bessere Chance zu geben, auf mobilen Geräten zu funktionieren. Sie sollten mindestens Folgendes in Ihrem Dokument enthalten, was später nach Bedarf angepasst werden kann:

```html example-good
<meta name="viewport" content="width=device-width" />
```

Siehe [Verwendung des Viewport-Meta-Tags zur Steuerung des Layouts auf mobilen Browsern](/de/docs/Web/HTML/Viewport_meta_tag) für weitere Details.

## Attribute

Sie sollten alle Attributwerte in Anführungszeichen setzen. Es ist verlockend, Anführungszeichen wegzulassen, da HTML5 dies erlaubt, aber Markup ist übersichtlicher und leichter zu lesen, wenn Sie sie einfügen. Zum Beispiel ist dies besser:

```html example-good
<img src="images/logo.jpg" alt="A circular globe icon" class="no-border" />
```

…als dies:

```html-nolint example-bad
<img src=images/logo.jpg alt=A circular globe icon class=no-border>
```

Das Weglassen von Anführungszeichen kann auch Probleme verursachen. Im obigen Beispiel wird das `alt`-Attribut als mehrere Attribute interpretiert, da keine Anführungszeichen angeben, dass "A circular globe icon" ein einzelner Attributwert ist.

## Boolean-Attribute

Setzen Sie keine Werte für Boolean-Attribute (aber setzen Sie Werte für {{Glossary("enumerated", "enumerierte")}} Attribute); Sie können einfach den Attributnamen schreiben, um es zu setzen. Zum Beispiel können Sie schreiben:

```html example-good
<input required />
```

Dies ist vollkommen verständlich und funktioniert einwandfrei. Ist ein Boolean-HTML-Attribut vorhanden, ist der Wert wahr. Auch wenn das Hinzufügen eines Wertes funktionieren würde, ist es nicht notwendig und falsch:

```html example-bad
<input required="required" />
```

## Groß-/Kleinschreibung

Verwenden Sie Kleinbuchstaben für alle Elementnamen und Attributnamen/-werte, weil es übersichtlicher aussieht und Sie Markup schneller schreiben können. Zum Beispiel:

```html example-good
<p class="nice">This looks nice and neat</p>
```

```html-nolint example-bad
<P CLASS="WHOA-THERE">Why is my markup shouting?</P>
```

## Klassen- und ID-Namen

Verwenden Sie semantische Klassen/ID-Namen und trennen Sie mehrere Wörter mit Bindestrichen ({{Glossary("kebab_case", "kebab case")}}). Verwenden Sie nicht {{Glossary("camel_case", "camel case")}}. Zum Beispiel:

```html example-good
<p class="editorial-summary">Blah blah blah</p>
```

```html example-bad
<p class="bigRedBox">Blah blah blah</p>
```

## Zeichenreferenzen

Verwenden Sie keine {{Glossary("character_reference", "Zeichenreferenzen")}} unnötig — verwenden Sie soweit möglich das Literalzeichen (Sie müssen immer noch Zeichen wie spitze Klammern und Anführungszeichen escapen).

Zum Beispiel könnten Sie einfach schreiben:

```html example-good
<p>© 2018 Me</p>
```

Anstatt:

```html example-bad
<p>&copy; 2018 Me</p>
```

## HTML-Elemente

Es gibt einige Regeln für das Schreiben über HTML-Elemente auf MDN Web Docs. Die Einhaltung dieser Regeln sorgt für konsistente Beschreibungen von Elementen und ihren Komponenten und gewährleistet korrekte Verlinkungen zu detaillierter Dokumentation.

- **Elementnamen**: Verwenden Sie das [`HTMLElement`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLElement.ejs)-Makro, das einen Link zur entsprechenden MDN Web Docs-Seite für dieses Element erstellt. Zum Beispiel erzeugt das Schreiben von `\{{HTMLElement("title")}}` "{{HTMLElement("title")}}".
  Wenn Sie keinen Link erstellen möchten, **setzen Sie den Namen in spitze Klammern** und verwenden Sie den Stil "Inline Code" (z. B. `<title>`).
- **Attributnamen**: Verwenden Sie den Stil "Inline Code", um Attributnamen in `code font` zu formatieren.
  Setzen Sie sie zusätzlich in **`fett`**, wenn das Attribut im Zusammenhang mit einer Erklärung erwähnt wird, was es bewirkt oder wenn es zum ersten Mal auf der Seite verwendet wird.
- **Attributwerte**: Verwenden Sie den Stil "Inline Code", um `<code>` auf Attributwerte anzuwenden, und verwenden Sie keine Anführungszeichen um Zeichenfolgenwerte, es sei denn, sie sind durch die Syntax eines Codesamples erforderlich. Zum Beispiel: "Wenn das `type`-Attribut eines `<input>`-Elements auf `email` oder `tel` gesetzt ist ...".
