---
title: Globales HTML-Attribut `dir`
short-title: dir
slug: Web/HTML/Reference/Global_attributes/dir
l10n:
  sourceCommit: 8ed465762d06fa17f7cc6adb3e2be9b57df03e9b
---

Das globale Attribut **`dir`** ist ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das die _grundlegende Textrichtung_ des Elements festlegt und dessen Inhalt richtungsbezogen von umgebendem Text isoliert.

{{InteractiveExample("HTML Demo: dir", "tabbed-standard")}}

```html interactive-example
<p dir="rtl">
  This paragraph is in English but incorrectly goes right to left.
</p>
<p dir="ltr">This paragraph is in English and correctly goes left to right.</p>

<hr />

<p lang="ar">هذه الفقرة باللغة العربية ولكن بشكل خاطئ من اليسار إلى اليمين.</p>
<p lang="ar" dir="auto">
  هذه الفقرة باللغة العربية ، لذا يجب الانتقال من اليمين إلى اليسار.
</p>
```

## Werte

Es kann die folgenden Werte haben:

- `ltr`, das eine grundlegende Richtung _von links nach rechts_ festlegt;
- `rtl`, das eine grundlegende Richtung _von rechts nach links_ festlegt;
- `auto`, das dem User-Agent erlaubt, die grundlegende Richtung anhand des Textes zu bestimmen, üblicherweise unter Verwendung des ersten Zeichens mit starker Richtungswirkung (wobei `<bdi>`, `<script>`, `<style>`, `<textarea>` und Elemente mit gültigen `dir`-Attributen übersprungen werden). Bei {{HTMLElement("textarea")}} und {{HTMLElement("pre")}} wird die Darstellungsrichtung für jeden Textabsatz separat bestimmt.

> [!NOTE]
> Der Wert `auto` sollte für Daten mit unbekannter Richtungswirkung verwendet werden, beispielsweise Daten aus Benutzereingaben oder externe Daten.
>
> Wenn das Attribut [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname) verwendet wird, wenn Benutzer Eingaben übermitteln, kann es möglich sein, die Daten mit einer festgelegten Richtungswirkung darzustellen, anstatt sich auf die automatische Erkennung zu verlassen.

Wenn es nicht angegeben oder ungültig ist, wird die Richtung im Allgemeinen vom übergeordneten Element [geerbt](#vererbung). Das Weglassen von `dir` aktiviert keine automatische Richtungserkennung.

### Vererbung

Wenn ein Element kein `dir`-Attribut hat, erbt es im Allgemeinen die Richtung seines [übergeordneten Elements](/de/docs/Web/API/Node/parentElement) oder des [`host`](/de/docs/Web/API/ShadowRoot/host), wenn der übergeordnete Knoten ein [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) ist. Wenn kein Vorgängerelement eine Richtung festlegt, ist die Standardrichtung von links nach rechts.

Es gibt Ausnahmen:

- Ein {{HTMLElement("bdi")}}-Element bestimmt seine Richtung anhand seines Inhalts, als wäre `dir="auto"` festgelegt.
- Ein [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel)-Element verwendet die Richtung von links nach rechts.

## Hinweise zur Verwendung

Die grundlegende Richtung wird vom Unicode Bidirectional Algorithm ({{Glossary("BiDi", "BiDi")}}) verwendet. Während Zeichen, die stark als LTR oder RTL typisiert sind (etwa lateinische, hebräische oder arabische Buchstaben), die Richtung für sich selbst und alle neutralen Zeichen dazwischen festlegen (wodurch Text-„Läufe“ entstehen), ist die grundlegende Richtung in zwei Szenarien erforderlich:

- Sie wird von neutralen Zeichen (wie Leerzeichen oder Satzzeichen) an den Grenzen von Textläufen mit unterschiedlichen Richtungen angenommen, häufig auch ganz am Anfang oder Ende.
- Sie wird verwendet, um Textläufe zu ordnen.

Betrachten Sie beispielsweise den ersten englischen Absatz in der Demo [Ausprobieren](#try_it). Es gibt zwei Textläufe: den englischen Text (aufgrund der lateinischen Zeichen LTR) und den abschließenden Punkt (der sich am Ende des `p`-Elements befindet und daher die grundlegende Richtung RTL annimmt). Diese Textläufe werden von rechts nach links angeordnet, sodass der Text zuerst am rechten Rand erscheint, gefolgt von dem Punkt links davon. Ebenso erbt der erste arabische Absatz die grundlegende Richtung LTR vom HTML-Dokument, sodass der arabische RTL-Text am linken Rand erscheint, gefolgt von dem Punkt rechts davon (mit LTR-Richtung). Beide Absätze sind typografisch falsch.

Selbst für Dokumente in einer einzigen Schrift wird empfohlen, `dir` explizit auf dem Wurzelelement festzulegen. Dies ist besonders für RTL-Schriften wichtig, weil die standardmäßige grundlegende Richtung LTR falsch ist. Das Attribut [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) deklariert die Sprache, impliziert aber nicht die grundlegende Richtung.

Dieses Attribut kann durch die CSS-Eigenschaften {{ cssxref("direction") }} und {{ cssxref("unicode-bidi") }} überschrieben werden, wenn eine CSS-Seite aktiv ist und das Element diese Eigenschaften unterstützt.

Da die Richtungswirkung des Textes semantisch mit seinem Inhalt und nicht mit seiner Darstellung zusammenhängt, wird Webentwicklern empfohlen, dieses Attribut nach Möglichkeit anstelle der zugehörigen CSS-Eigenschaften zu verwenden. Auf diese Weise wird der Text selbst in einem Browser korrekt dargestellt, der CSS nicht unterstützt oder bei dem CSS deaktiviert ist.

Bei einem Bild kann die Eigenschaft `dir` auf `"rtl"` gesetzt werden. In diesem Fall werden die HTML-Attribute `title` und `alt` als `"rtl"` formatiert und definiert.

Wenn bei einer Tabelle `dir` auf `"rtl"` gesetzt ist, wird die Spaltenreihenfolge von rechts nach links angeordnet.

Das {{HTMLElement("bdo")}}-Element erfordert `dir="ltr"` oder `dir="rtl"`. Bei diesem Element überschreibt das Attribut die intrinsische Richtungswirkung der Zeichen, anstatt nur eine grundlegende Richtung festzulegen.

Browser können Benutzern erlauben, die Richtungswirkung von {{ HTMLElement("input") }}- und {{ HTMLElement("textarea") }}-Elementen zu ändern, um sie beim Erstellen von Inhalten zu unterstützen.
Chrome und Safari bieten im Kontextmenü von Eingabefeldern eine Option für die Richtungswirkung.
Firefox verwendet <kbd>Ctrl</kbd> (Windows)/<kbd>Cmd</kbd> (macOS) + <kbd>Shift</kbd> + <kbd>X</kbd> innerhalb eines `<textarea>`, um die Textrichtung umzuschalten.
Diese Funktionen schalten den Wert des `dir`-Attributs zwischen `ltr` und `rtl` um.

## Beispiele

### Richtung auf Dokumentebene festlegen

Setzen Sie `dir="rtl"` auf dem {{HTMLElement("html")}}-Element, wenn die Seite überwiegend in einer Schrift von rechts nach links geschrieben ist, etwa Arabisch oder Hebräisch. Verwenden Sie `dir` für einen Block innerhalb der Seite, wenn dieser Block eine andere grundlegende Richtung benötigt.

In diesem arabischen Dokument benötigt der englische Absatz sowohl `dir="ltr"` als auch `lang="en"`.

```html
<!doctype html>
<html dir="rtl" lang="ar">
  <head>
    <meta charset="utf-8" />
    <title>صفحة عربية</title>
  </head>
  <body>
    <p>محتوى الصفحة باللغة العربية.</p>
    <p dir="ltr" lang="en">This paragraph is in English.</p>
  </body>
</html>
```

### Textrichtung explizit festlegen

Dieses Beispiel legt die grundlegende Richtung von zwei Absätzen explizit fest. Die grundlegende Richtung beeinflusst die Standardausrichtung und die Platzierung von Satzzeichen.

```html
<p dir="ltr" lang="en">This sentence is in English and reads left to right.</p>
<p dir="rtl" lang="ar">
  هذه الجملة باللغة العربية وتُقرأ من اليمين إلى اليسار.
</p>
```

### Inline-Text mit bidirektionaler Schreibrichtung

Wenn eine Inline-Phrase eine andere grundlegende Richtung als der umgebende Text hat, umschließen Sie die gesamte Phrase eng mit einem Element, das den passenden `dir`-Wert hat. Dadurch wird die Richtung der Phrase auch von ihrer Umgebung isoliert, sodass Satzzeichen und Zahlen außerhalb nicht als Teil der Phrase behandelt werden. Verwenden Sie ein vorhandenes semantisches Element, etwa {{HTMLElement("cite")}} für einen Buchtitel, oder ein {{HTMLElement("bdi")}}, wenn kein anderes Element geeignet ist.

```html
<p dir="rtl" lang="ar">
  اقرأ <cite dir="ltr" lang="en">How the Grinch Stole Christmas!</cite> اليوم.
</p>
```

Beachten Sie, dass sich das Ausrufezeichen, das Teil des Titels ist, innerhalb des `<cite>`-Elements befindet. Wenn es sich außerhalb befände, würde es die grundlegende Richtung übernehmen und daher am linken Rand des Titels erscheinen.

### `dir="auto"` für benutzergenerierte Inhalte verwenden

Wenn die Richtung eines Textes nicht im Voraus bekannt ist, etwa bei Benutzerkommentaren, verwenden Sie `dir="auto"`. Der Browser verwendet das erste stark richtungsbestimmende Zeichen, um die grundlegende Richtung des Elements zu bestimmen. Dies ist eine Heuristik und keine Spracherkennung: Ein Kommentar, der mit einem englischen Namen beginnt und auf Arabisch fortgesetzt wird, erhält eine grundlegende Richtung von links nach rechts. Verwenden Sie eine explizite Richtung, wenn sie bekannt ist.

Hier stellen die Absätze zwei mögliche Kommentare dar. Die Kommentare werden von Benutzern geschrieben, daher kennt die Website ihre Sprachen während der Darstellung nicht.

```html
<p dir="auto">This comment is in English.</p>
<p dir="auto">هذا التعليق باللغة العربية.</p>
```

Das {{HTMLElement("bdi")}}-Element bietet denselben Effekt und ist für die Inline-Isolation kürzer, insbesondere wenn kein semantisches Element geeignet ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir), das dieses Attribut widerspiegelt.
- [Umgang mit unterschiedlichen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
- [Erstellen von HTML-Seiten auf Arabisch, Hebräisch und anderen Schriften von rechts nach links](https://www.w3.org/International/tutorials/bidi-xhtml/index.en.html) auf w3.org
