---
title: Richtlinien zum Schreiben von HTML-Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML
l10n:
  sourceCommit: aa0a90e2011d66e62e68c2a9e0f4e744186d643b
---

Die folgenden Richtlinien beschreiben, wie HTML-Beispielcode für die MDN Web Docs geschrieben werden soll.

## Allgemeine Richtlinien für HTML-Codebeispiele

### Auswahl eines Formats

Meinungen zur korrekten Einrückung, zu Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen zu diesen Themen lenken von der Erstellung und Pflege von Inhalten ab.

Auf den MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatierer, um den Code-Stil konsistent zu halten (und um themenfremde Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um mehr über die aktuellen Regeln zu erfahren, und die [Prettier-Dokumentation](https://prettier.io/docs/index.html) lesen.

Prettier formatiert den gesamten Code und sorgt für einen konsistenten Stil. Dennoch gibt es einige zusätzliche Regeln, die Sie beachten müssen.

## Vollständiges HTML-Dokument

> [!NOTE]
> Die Richtlinien in diesem Abschnitt gelten nur, wenn Sie ein vollständiges HTML-Dokument zeigen müssen. Ein Fragment reicht in der Regel aus, um ein Merkmal zu demonstrieren. Wenn Sie das [EmbedLiveSample macro](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#live_samples) verwenden, fügen Sie einfach das HTML-Fragment ein; es wird automatisch in ein vollständiges HTML-Dokument eingefügt, wenn es angezeigt wird.

### Doctype

Sie sollten den HTML5-{{Glossary("Doctype", "doctype")}} verwenden.

```html example-good
<!doctype html>
```

### Dokumentensprache

Setzen Sie die Dokumentensprache mit dem [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attribut auf Ihrem {{htmlelement("html")}}-Element:

```html example-good
<html lang="en-US"></html>
```

Dies ist gut für die Barrierefreiheit und Suchmaschinen, hilft bei der Lokalisierung von Inhalten und erinnert die Menschen daran, bewährte Praktiken zu verwenden.

### Zeichensatz des Dokuments

Sie sollten den Zeichensatz Ihres Dokuments wie folgt definieren:

```html example-good
<meta charset="utf-8" />
```

Verwenden Sie UTF-8, es sei denn, es gibt einen sehr guten Grund dagegen; es deckt so gut wie alle Zeichenanforderungen ab, unabhängig davon, welche Sprache Sie in Ihrem Dokument verwenden.

### Meta-Tag für das Viewport

Schließlich sollten Sie immer das Meta-Tag für das Viewport in Ihrem HTML-{{HTMLElement("head")}} hinzufügen, um dem Codebeispiel eine bessere Chance zu geben, auf Mobilgeräten zu funktionieren. Sie sollten mindestens das Folgende in Ihr Dokument aufnehmen, das später bei Bedarf angepasst werden kann:

```html example-good
<meta name="viewport" content="width=device-width" />
```

Weitere Details finden Sie unter [Using the viewport meta tag to control layout on mobile browsers](/de/docs/Web/HTML/Viewport_meta_tag).

## Attribute

Sie sollten alle Attributwerte in doppelte Anführungszeichen setzen. Es ist verlockend, die Anführungszeichen wegzulassen, da HTML5 dies erlaubt, aber das Markup ist ordentlicher und leichter zu lesen, wenn Sie sie einschließen. Zum Beispiel ist dies besser:

```html example-good
<img src="images/logo.jpg" alt="A circular globe icon" class="no-border" />
```

…als das:

```html-nolint example-bad
<img src=images/logo.jpg alt=A circular globe icon class=no-border>
```

Das Weglassen von Anführungszeichen kann auch Probleme verursachen. Im obigen Beispiel wird das `alt`-Attribut als mehrere Attribute interpretiert, da keine Anführungszeichen angeben, dass "A circular globe icon" ein einzelner Attributwert ist.

## Boolesche Attribute

Geben Sie keine Werte für boolesche Attribute an (aber geben Sie Werte für {{Glossary("enumerated", "enumerierte")}} Attribute an); Sie können einfach den Attributnamen schreiben, um es zu setzen. Zum Beispiel können Sie schreiben:

```html example-good
<input required />
```

Dies ist vollkommen verständlich und funktioniert einwandfrei. Wenn ein boolesches HTML-Attribut vorhanden ist, ist der Wert true. Während das Hinzufügen eines Wertes funktionieren wird, ist es nicht erforderlich und falsch:

```html example-bad
<input required="required" />
```

## Groß- und Kleinschreibungskonvention auf MDN

Verwenden Sie Kleinschreibung für alle nicht auf Groß- und Kleinschreibung achtenden Konstrukte, einschließlich der Doctype-Deklaration, Elementnamen und Attributnamen/-werte. Dies sorgt für ein einheitliches Erscheinungsbild und ermöglicht schnelleres Schreiben von Markup.

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

Verwenden Sie {{Glossary("character_reference", "Zeichenreferenzen")}} nicht unnötig — verwenden Sie das tatsächliche Zeichen, wo immer möglich (Sie müssen dennoch Zeichen wie spitze Klammern und Anführungszeichen maskieren).

Als Beispiel könnten Sie einfach schreiben:

```html example-good
<p>© 2018 Me</p>
```

Anstatt:

```html example-bad
<p>&copy; 2018 Me</p>
```

## HTML-Elemente

Es gibt einige Regeln für das Schreiben über HTML-Elemente auf den MDN Web Docs. Die Einhaltung dieser Regeln sorgt für einheitliche Beschreibungen von Elementen und ihren Komponenten und stellt auch sicher, dass die Verlinkung zur detaillierten Dokumentation korrekt erfolgt.

- **Elementnamen**: Verwenden Sie das [`HTMLElement`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs)-Macro, das einen Link zur MDN Web Docs-Seite für dieses Element erstellt. Zum Beispiel erzeugt `\{{HTMLElement("title")}}` "{{HTMLElement("title")}}".
  Wenn Sie keinen Link erstellen möchten, **umschließen Sie den Namen mit spitzen Klammern** und verwenden Sie den "Inline-Code"-Stil (z.B. `<title>`).
- **Attributnamen**: Verwenden Sie den "Inline-Code"-Stil, um Attributnamen in `Code-Schriftart` zu setzen.
  Außerdem setzen Sie sie in **`Fettdruck`**, wenn das Attribut in Verbindung mit einer Erklärung, was es tut, erwähnt wird oder wenn es zum ersten Mal auf der Seite verwendet wird.
- **Attributwerte**: Verwenden Sie den "Inline-Code"-Stil, um `<code>` auf Attributwerte anzuwenden, und verwenden Sie keine Anführungszeichen um Zeichenfolgenwerte, es sei denn, dies ist durch die Syntax eines Code-Beispiels erforderlich. Zum Beispiel: "When the `type` attribute of an `<input>` element is set to `email` or `tel` ...".
