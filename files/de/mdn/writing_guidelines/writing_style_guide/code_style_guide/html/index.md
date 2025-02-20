---
title: Richtlinien zum Schreiben von HTML-Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

Die folgenden Richtlinien beschreiben, wie HTML-Codebeispiele für MDN Web Docs geschrieben werden sollen.

## Allgemeine Richtlinien für HTML-Codebeispiele

### Format auswählen

Meinungen über die richtige Einrückung, Leerzeichen und Zeilenlängen waren schon immer umstritten. Diskussionen über diese Themen lenken vom Erstellen und Pflegen von Inhalten ab.

Auf MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um Off-Topic-Diskussionen zu vermeiden). Sie können in unserer [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) die aktuellen Regeln einsehen und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und sorgt für einen einheitlichen Stil. Dennoch gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

## Vollständiges HTML-Dokument

> [!NOTE]
> Die Richtlinien in diesem Abschnitt gelten nur, wenn Sie ein vollständiges HTML-Dokument zeigen müssen. Ein Codeausschnitt reicht in der Regel aus, um eine Funktion zu demonstrieren. Wenn Sie das [EmbedLiveSample-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#live_samples) verwenden, fügen Sie einfach den HTML-Ausschnitt ein. Dieser wird automatisch in ein vollständiges HTML-Dokument eingefügt, wenn er angezeigt wird.

### Doctype

Sie sollten den Doctype für HTML5 verwenden. Er ist kurz, leicht zu merken und abwärtskompatibel.

```html example-good
<!doctype html>
```

### Sprache des Dokuments

Setzen Sie die Sprache des Dokuments mit dem [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attribut im {{htmlelement("html")}}-Element:

```html example-good
<html lang="en-US"></html>
```

Dies ist gut für Barrierefreiheit und Suchmaschinen, hilft bei der Lokalisierung von Inhalten und erinnert daran, Best Practices einzuhalten.

### Zeichensatz des Dokuments

Sie sollten auch den Zeichensatz Ihres Dokuments wie folgt definieren:

```html example-good
<meta charset="utf-8" />
```

Verwenden Sie UTF-8, es sei denn, Sie haben dafür einen sehr guten Grund. UTF-8 deckt nahezu alle Zeichenanforderungen ab, unabhängig davon, welche Sprache in Ihrem Dokument verwendet wird.

### Viewport-Meta-Tag

Fügen Sie immer das Viewport-Meta-Tag in den {{HTMLElement("head")}} Ihres HTML-Dokuments ein, um sicherzustellen, dass das Codebeispiel auf mobilen Geräten besser funktioniert. Sie sollten mindestens das Folgende in Ihr Dokument einfügen, welches später nach Bedarf angepasst werden kann:

```html example-good
<meta name="viewport" content="width=device-width" />
```

Weitere Einzelheiten finden Sie unter [Using the viewport meta tag to control layout on mobile browsers](/de/docs/Web/HTML/Viewport_meta_tag).

## Attribute

Sie sollten alle Attributwerte in doppelte Anführungszeichen setzen. Es ist verlockend, die Anführungszeichen wegzulassen, da HTML5 dies erlaubt, aber der Markup-Code ist ordentlicher und leichter zu lesen, wenn Sie diese einschließen. Zum Beispiel ist dies besser:

```html example-good
<img src="images/logo.jpg" alt="A circular globe icon" class="no-border" />
```

…als dies:

```html-nolint example-bad
<img src=images/logo.jpg alt=A circular globe icon class=no-border>
```

Das Weglassen von Anführungszeichen kann auch Probleme verursachen. Im obigen Beispiel wird das `alt`-Attribut als mehrere Attribute interpretiert, da keine Anführungszeichen angeben, dass "A circular globe icon" ein einzelner Attributwert ist.

## Boolean-Attribute

Geben Sie keine Werte für Boolean-Attribute an (aber geben Sie Werte für {{Glossary("enumerated", "enumerierte")}} Attribute an); Sie können einfach den Namen des Attributs schreiben, um es zu setzen. Zum Beispiel:

```html example-good
<input required />
```

Dies ist vollkommen verständlich und funktioniert einwandfrei. Wenn ein Boolean-HTML-Attribut vorhanden ist, ist der Wert wahr. Das Einschließen eines Wertes funktioniert zwar, ist aber nicht notwendig und falsch:

```html example-bad
<input required="required" />
```

## Groß- und Kleinschreibung

Verwenden Sie Kleinbuchstaben für alle Element- und Attributnamen/Werte, da dies ordentlicher aussieht und Sie Markup schneller schreiben können. Zum Beispiel:

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

Verwenden Sie {{Glossary("character_reference", "Zeichenreferenzen")}} nur dann, wenn es unbedingt notwendig ist — verwenden Sie sofern möglich das tatsächliche Zeichen (Sie müssen dennoch Zeichen wie spitze Klammern und Anführungszeichen escapen).

Zum Beispiel könnten Sie einfach schreiben:

```html example-good
<p>© 2018 Me</p>
```

Anstatt:

```html example-bad
<p>&copy; 2018 Me</p>
```

## HTML-Elemente

Es gibt einige Regeln für das Schreiben über HTML-Elemente auf MDN Web Docs. Das Einhalten dieser Regeln sorgt für konsistente Beschreibungen von Elementen und deren Komponenten und stellt außerdem sicher, dass Verlinkungen zu detaillierter Dokumentation korrekt sind.

- **Elementnamen**: Verwenden Sie das [`HTMLElement`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs)-Makro, das einen Link zur MDN Web Docs-Seite für dieses Element erstellt. Zum Beispiel erzeugt `\{{HTMLElement("title")}}` "{{HTMLElement("title")}}".
  Wenn Sie keinen Link erstellen möchten, **umschließen Sie den Namen mit spitzen Klammern** und verwenden Sie den "Inline Code"-Stil (z. B. `<title>`).
- **Attributnamen**: Verwenden Sie den "Inline Code"-Stil, um Attributnamen in `code font` darzustellen.
  Zusätzlich setzen Sie sie in **`fettgedruckt`**, wenn das Attribut in Verbindung mit einer Erklärung seiner Funktion erwähnt wird oder wenn es zum ersten Mal auf der Seite benutzt wird.
- **Attributwerte**: Verwenden Sie den "Inline Code"-Stil, um `<code>` auf Attributwerte anzuwenden, und verwenden Sie keine Anführungszeichen um Zeichenfolgenwerte, es sei denn, sie sind durch die Syntax eines Codesamples erforderlich. Zum Beispiel: "Wenn das `type`-Attribut eines `<input>`-Elements auf `email` oder `tel` gesetzt ist ...".
