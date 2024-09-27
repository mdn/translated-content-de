---
title: Richtlinien für das Schreiben von HTML-Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Die folgenden Richtlinien erläutern, wie HTML-Beispielcode für MDN Web Docs geschrieben werden sollte.

## Allgemeine Richtlinien für HTML-Codebeispiele

### Ausgabe eines Formats

Meinungen über die richtige Einrückung, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen zu diesen Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf den MDN Web Docs nutzen wir [Prettier](https://prettier.io/) als Code-Formatierer, um den Stil des Codes konsistent zu halten (und um ablenkende Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) konsultieren, um mehr über die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Trotzdem gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

## Vollständiges HTML-Dokument

> [!NOTE]
> Die Richtlinien in diesem Abschnitt gelten nur, wenn Sie ein vollständiges HTML-Dokument anzeigen müssen. Ein Codeausschnitt genügt in der Regel, um ein Feature zu demonstrieren. Wenn Sie das [EmbedLiveSample-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#traditional_live_samples) verwenden, fügen Sie einfach den HTML-Codeausschnitt ein; er wird automatisch in ein vollständiges HTML-Dokument eingefügt, wenn er angezeigt wird.

### Doctype

Sie sollten den HTML5-Doctype verwenden. Er ist kurz, leicht zu merken und abwärtskompatibel.

```html example-good
<!doctype html>
```

### Dokumentensprache

Setzen Sie die Dokumentensprache mit dem [`lang`](/de/docs/Web/HTML/Global_attributes#lang)-Attribut in Ihrem {{htmlelement("html")}}-Element:

```html example-good
<html lang="en-US"></html>
```

Dies ist gut für die Zugänglichkeit und Suchmaschinen, hilft bei der Lokalisierung von Inhalten und erinnert daran, bewährte Praktiken zu verwenden.

### Dokumentenzeichensatz

Sie sollten auch den Zeichensatz Ihres Dokuments wie folgt definieren:

```html example-good
<meta charset="utf-8" />
```

Verwenden Sie UTF-8, es sei denn, Sie haben einen sehr guten Grund, dies nicht zu tun; es deckt alle Zeichenbedürfnisse ab, unabhängig davon, welche Sprache Sie in Ihrem Dokument verwenden.

### Viewport-Meta-Tag

Schließlich sollten Sie immer das Viewport-Meta-Tag in Ihrem HTML {{htmlelement("head")}} hinzufügen, um dem Codebeispiel eine bessere Chance zu geben, auf mobilen Geräten zu funktionieren. Sie sollten mindestens Folgendes in Ihr Dokument aufnehmen, das bei Bedarf später modifiziert werden kann:

```html example-good
<meta name="viewport" content="width=device-width" />
```

Siehe [Using the viewport meta tag to control layout on mobile browsers](/de/docs/Web/HTML/Viewport_meta_tag) für weitere Details.

## Attribute

Sie sollten alle Attributwerte in doppelte Anführungszeichen setzen. Es ist verlockend, die Anführungszeichen wegzulassen, da HTML5 dies zulässt, aber das Markup ist sauberer und leichter zu lesen, wenn Sie sie einfügen. Zum Beispiel ist dies besser:

```html example-good
<img src="images/logo.jpg" alt="A circular globe icon" class="no-border" />
```

…als dies:

```html-nolint example-bad
<img src=images/logo.jpg alt=A circular globe icon class=no-border>
```

Das Weglassen von Anführungszeichen kann auch Probleme verursachen. Im obigen Beispiel wird das `alt`-Attribut als mehrere Attribute interpretiert, weil keine Anführungszeichen vorhanden sind, um anzugeben, dass "Ein rundes Globussymbol" ein einzelner Attributwert ist.

## Boolesche Attribute

Geben Sie keine Werte für boolesche Attribute an (aber geben Sie Werte für [aufgezählte](/de/docs/Glossary/enumerated) Attribute an); Sie können einfach den Attributnamen schreiben, um ihn zu setzen. Beispielsweise können Sie schreiben:

```html example-good
<input required />
```

Dies ist vollkommen verständlich und funktioniert einwandfrei. Wenn ein boolesches HTML-Attribut vorhanden ist, ist der Wert wahr. Während das Einfügen eines Wertes funktionieren wird, ist es nicht notwendig und falsch:

```html example-bad
<input required="required" />
```

## Groß-/Kleinschreibung

Verwenden Sie Kleinbuchstaben für alle Elementnamen und Attributnamen/-werte, da es ordentlicher aussieht und Sie Markup schneller schreiben können. Zum Beispiel:

```html example-good
<p class="nice">This looks nice and neat</p>
```

```html-nolint example-bad
<P CLASS="WHOA-THERE">Why is my markup shouting?</P>
```

## Klassen- und ID-Namen

Verwenden Sie semantische Klassen-/ID-Namen und trennen Sie mehrere Wörter mit Bindestrichen ([Kebab-Schreibweise](/de/docs/Glossary/kebab_case)). Verwenden Sie nicht die [Camel-Schreibweise](/de/docs/Glossary/camel_case). Zum Beispiel:

```html example-good
<p class="editorial-summary">Blah blah blah</p>
```

```html example-bad
<p class="bigRedBox">Blah blah blah</p>
```

## Zeichenreferenzen

Verwenden Sie [Zeichenreferenzen](/de/docs/Glossary/character_reference) nicht unnötig — verwenden Sie das tatsächliche Zeichen, wo immer möglich (Sie müssen dennoch Zeichen wie Winkelklammern und Anführungszeichen escapen).

Beispielsweise könnten Sie einfach schreiben:

```html example-good
<p>© 2018 Me</p>
```

Anstatt von:

```html example-bad
<p>&copy; 2018 Me</p>
```

## HTML-Elemente

Es gibt einige Regeln für das Schreiben über HTML-Elemente auf MDN Web Docs. Die Einhaltung dieser Regeln sorgt für konsistente Beschreibungen von Elementen und ihren Komponenten und stellt auch sicher, dass korrekt auf detaillierte Dokumentation verlinkt wird.

- **Elementnamen**: Verwenden Sie das [`HTMLElement`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLElement.ejs)-Makro, das einen Link zur MDN-Web-Dokumentationsseite für dieses Element erstellt. Zum Beispiel erzeugt das Schreiben von `\{{HTMLElement("title")}}` "{{HTMLElement("title")}}".
  Wenn Sie keinen Link erstellen möchten, **schließen Sie den Namen in Winkelklammern ein** und verwenden Sie den Stil "Inline-Code" (z. B. `<title>`).
- **Attributnamen**: Verwenden Sie den Stil "Inline-Code", um Attributnamen in `Code-Schriftart` zu setzen.
  Zusätzlich setzen Sie sie in **`Fettschrift`**, wenn das Attribut in Verbindung mit einer Erklärung dessen, was es tut, erwähnt wird oder wenn es zum ersten Mal auf der Seite verwendet wird.
- **Attributwerte**: Verwenden Sie den Stil "Inline-Code", um `<code>` auf Attributwerte anzuwenden, und setzen Sie keine Anführungszeichen um Zeichenfolgenwerte, es sei denn, sie werden durch die Syntax eines Codebeispiels benötigt. Zum Beispiel: "Wenn das `type`-Attribut eines `<input>`-Elements auf `email` oder `tel` gesetzt ist ...".
