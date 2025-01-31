---
title: Richtlinien zum Schreiben von HTML-Codebeispielen
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/HTML
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Die folgenden Richtlinien behandeln, wie man HTML-Beispielcode für MDN Web Docs schreibt.

## Allgemeine Richtlinien für HTML-Codebeispiele

### Format auswählen

Meinungen zur korrekten Einrückung, Leerzeichen und Zeilenlängen sind stets umstritten. Diskussionen über diese Themen lenken von der Erstellung und Pflege des Inhalts ab.

Auf den MDN Web Docs verwenden wir [Prettier](https://prettier.io/) als Code-Formatter, um den Code-Stil konsistent zu halten (und um Off-Topic-Diskussionen zu vermeiden). Sie können unsere [Konfigurationsdatei](https://github.com/mdn/content/blob/main/.prettierrc.json) einsehen, um die aktuellen Regeln kennenzulernen, und die [Prettier-Dokumentation](https://prettier.io/docs/en/index.html) lesen.

Prettier formatiert den gesamten Code und hält den Stil konsistent. Dennoch gibt es einige zusätzliche Regeln, die Sie befolgen müssen.

## Komplettes HTML-Dokument

> [!NOTE]
> Die Richtlinien in diesem Abschnitt gelten nur, wenn Sie ein komplettes HTML-Dokument anzeigen müssen. Ein Ausschnitt reicht in der Regel aus, um eine Funktion zu demonstrieren. Wenn Sie das [EmbedLiveSample-Makro](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#traditional_live_samples) verwenden, fügen Sie einfach den HTML-Ausschnitt ein; er wird automatisch in ein vollständiges HTML-Dokument eingefügt, wenn er angezeigt wird.

### Doctype

Sie sollten den HTML5-Doctype verwenden. Er ist kurz, leicht zu merken und abwärtskompatibel.

```html example-good
<!doctype html>
```

### Dokumentensprache

Setzen Sie die Dokumentensprache mit dem `lang`-Attribut auf Ihrem {{htmlelement("html")}}-Element:

```html example-good
<html lang="en-US"></html>
```

Dies ist gut für die Barrierefreiheit und Suchmaschinen, hilft bei der Lokalisierung von Inhalten und erinnert die Menschen daran, Best Practices zu verwenden.

### Zeichensatz des Dokuments

Sie sollten auch den Zeichensatz Ihres Dokuments wie folgt definieren:

```html example-good
<meta charset="utf-8" />
```

Verwenden Sie UTF-8, es sei denn, Sie haben einen sehr guten Grund, dies nicht zu tun; es wird alle Zeichensatzanforderungen abdecken, unabhängig davon, welche Sprache Sie in Ihrem Dokument verwenden.

### Viewport-Meta-Tag

Schließlich sollten Sie immer das Viewport-Meta-Tag in Ihren HTML-{{HTMLElement("head")}} einfügen, um dem Codebeispiel eine bessere Chance zu geben, auf mobilen Geräten zu funktionieren. Sie sollten mindestens Folgendes in Ihr Dokument aufnehmen, das bei Bedarf später bearbeitet werden kann:

```html example-good
<meta name="viewport" content="width=device-width" />
```

Weitere Details finden Sie unter [Verwendung des Viewport-Meta-Tags zur Steuerung des Layouts in mobilen Browsern](/de/docs/Web/HTML/Viewport_meta_tag).

## Attribute

Sie sollten alle Attributwerte in Anführungszeichen setzen. Es ist verlockend, die Anführungszeichen wegzulassen, da HTML5 dies zulässt, aber das Markup ist ordentlicher und leichter lesbar, wenn Sie sie verwenden. Zum Beispiel ist dies besser:

```html example-good
<img src="images/logo.jpg" alt="A circular globe icon" class="no-border" />
```

…als das:

```html-nolint example-bad
<img src=images/logo.jpg alt=A circular globe icon class=no-border>
```

Das Weglassen von Anführungszeichen kann auch Probleme verursachen. Im obigen Beispiel wird das `alt`-Attribut als mehrere Attribute interpretiert, da keine Anführungszeichen vorhanden sind, um anzugeben, dass "A circular globe icon" ein einzelner Attributwert ist.

## Boolesche Attribute

Für boolesche Attribute sollten keine Werte angegeben werden (aber geben Sie Werte für {{Glossary("enumerated", "enumerierte")}} Attribute an); Sie können einfach den Attributnamen schreiben, um es zu setzen. Zum Beispiel können Sie schreiben:

```html example-good
<input required />
```

Dies ist völlig verständlich und funktioniert einwandfrei. Wenn ein boolesches HTML-Attribut vorhanden ist, ist der Wert wahr. Auch wenn das Angeben eines Wertes funktioniert, ist es nicht notwendig und falsch:

```html example-bad
<input required="required" />
```

## Groß- und Kleinschreibung

Verwenden Sie Kleinbuchstaben für alle Elementnamen sowie Attributnamen/-werte, da es ordentlicher aussieht und man das Markup schneller schreiben kann. Zum Beispiel:

```html example-good
<p class="nice">This looks nice and neat</p>
```

```html-nolint example-bad
<P CLASS="WHOA-THERE">Why is my markup shouting?</P>
```

## Klassen- und ID-Namen

Verwenden Sie semantische Klassennamen/IDs, und trennen Sie mehrere Wörter durch Bindestriche ({{Glossary("kebab_case", "kebab case")}}). Verwenden Sie kein {{Glossary("camel_case", "camel case")}}. Zum Beispiel:

```html example-good
<p class="editorial-summary">Blah blah blah</p>
```

```html example-bad
<p class="bigRedBox">Blah blah blah</p>
```

## Zeichenreferenzen

Verwenden Sie keine {{Glossary("character_reference", "Zeichenreferenzen")}} unnötigerweise — verwenden Sie das echte Zeichen, wo immer möglich (Sie müssen dennoch Zeichen wie Winkelklammern und Anführungszeichen escapen).

Zum Beispiel könnten Sie einfach schreiben:

```html example-good
<p>© 2018 Me</p>
```

Stattdessen:

```html example-bad
<p>&copy; 2018 Me</p>
```

## HTML-Elemente

Es gibt einige Regeln für das Schreiben über HTML-Elemente auf MDN Web Docs. Das Einhalten dieser Regeln führt zu konsistenten Beschreibungen der Elemente und ihrer Komponenten und gewährleistet auch die korrekte Verlinkung zu detaillierter Dokumentation.

- **Elementnamen**: Verwenden Sie das `\{{HTMLElement}}`-Makro, das einen Link zur MDN-Webseite für dieses Element erstellt. Zum Beispiel erzeugt `\{{HTMLElement("title")}}` "{{HTMLElement("title")}}".
  Wenn Sie keinen Link erstellen möchten, **umgeben Sie den Namen mit Winkelklammern** und verwenden Sie den "Inline Code"-Stil (z.B. `<title>`).
- **Attributnamen**: Verwenden Sie den "Inline Code"-Stil, um Attributnamen in `Code-Schriftart` zu setzen.
  Setzen Sie sie zusätzlich in **`Fettdruck`**, wenn das Attribut in Verbindung mit einer Erklärung erwähnt wird, was es tut, oder wenn es zum ersten Mal auf der Seite verwendet wird.
- **Attributwerte**: Verwenden Sie den "Inline Code"-Stil, um `<code>` auf Attributwerte anzuwenden, und verwenden Sie keine Anführungszeichen um Zeichenfolgenwerte, es sei denn, es wird durch die Syntax eines Codebeispiels benötigt. Zum Beispiel: "Wenn das `type`-Attribut eines `<input>`-Elements auf `email` oder `tel` gesetzt ist ...".
