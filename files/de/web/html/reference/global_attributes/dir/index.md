---
title: Globales HTML-Attribut `dir`
short-title: dir
slug: Web/HTML/Reference/Global_attributes/dir
l10n:
  sourceCommit: 0af116bebeb388d977338b4072664b4e1c068960
---

Das **`dir`**-[globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "Attribut mit vorgegebenen Werten")}}, das die _Basis-Textrichtung_ eines Elements festlegt und seinen Inhalt hinsichtlich der Schreibrichtung vom umgebenden Text isoliert.

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

Es kann folgende Werte haben:

- `ltr` legt die Basisrichtung _von links nach rechts_ fest;
- `rtl` legt die Basisrichtung _von rechts nach links_ fest;
- `auto` lässt den User Agent die Basisrichtung anhand des Textes bestimmen. Dabei wird in der Regel das erste Zeichen mit einer eindeutigen Schreibrichtung verwendet (`<bdi>`, `<script>`, `<style>`, `<textarea>` und Elemente mit gültigen `dir`-Attributen werden übersprungen). Bei {{HTMLElement("textarea")}} und {{HTMLElement("pre")}} wird die Darstellungsrichtung für jeden Textabsatz einzeln bestimmt.

> [!NOTE]
> Der Wert `auto` sollte für Daten verwendet werden, deren Schreibrichtung unbekannt ist, etwa für Benutzereingaben oder externe Daten.
>
> Wenn bei der Übermittlung von Benutzereingaben das Attribut [`dirname`](/de/docs/Web/HTML/Reference/Attributes/dirname) verwendet wird, lassen sich die Daten möglicherweise mit einer festgelegten Schreibrichtung darstellen, statt sich auf die automatische Erkennung zu verlassen.

Wenn `dir` fehlt oder einen ungültigen Wert hat, wird die Richtung im Allgemeinen vom übergeordneten Element [geerbt](#vererbung). Das Weglassen von `dir` aktiviert keine automatische Erkennung der Schreibrichtung.

### Vererbung

Wenn ein Element kein `dir`-Attribut hat, erbt es die Richtung im Allgemeinen von seinem [übergeordneten Element](/de/docs/Web/API/Node/parentElement) oder vom [`host`](/de/docs/Web/API/ShadowRoot/host), falls der übergeordnete Knoten eine [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) ist. Wenn kein Vorgängerelement eine Richtung festlegt, ist die Standardrichtung von links nach rechts.

Es gibt Ausnahmen:

- Ein {{HTMLElement("bdi")}}-Element bestimmt seine Richtung anhand seines Inhalts, als wäre `dir="auto"` gesetzt.
- Ein [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel)-Element verwendet die Richtung von links nach rechts.

## Hinweise zur Verwendung

Die Basisrichtung wird vom Unicode Bidirectional Algorithm ({{Glossary("BiDi", "BiDi")}}) verwendet. Zeichen mit einer eindeutigen LTR- oder RTL-Richtung (etwa lateinische, hebräische oder arabische Buchstaben) bestimmen die Schreibrichtung für sich selbst und alle dazwischenliegenden neutralen Zeichen und bilden so Textläufe. Die Basisrichtung wird in zwei Fällen benötigt:

- Sie wird für neutrale Zeichen (wie Leerzeichen oder Satzzeichen) an den Grenzen von Textläufen mit unterschiedlichen Schreibrichtungen angenommen, häufig auch ganz am Anfang oder Ende.
- Sie bestimmt die Reihenfolge der Textläufe.

Betrachten Sie beispielsweise den ersten englischen Absatz in der Demo [Ausprobieren](#try_it). Er enthält zwei Textläufe: den englischen Text (aufgrund der lateinischen Zeichen in LTR-Richtung) und den abschließenden Punkt (der am Ende des `p`-Elements steht und daher die RTL-Basisrichtung annimmt). Diese Textläufe werden von rechts nach links angeordnet: Der Text erscheint zuerst am rechten Rand, der Punkt links davon. Ebenso erbt der erste arabische Absatz die LTR-Basisrichtung des HTML-Dokuments. Daher erscheint der arabische RTL-Text am linken Rand und der Punkt (mit LTR-Richtung) rechts davon. Beide Absätze sind typografisch falsch.

Auch für Dokumente, die nur eine einzige Schrift verwenden, wird empfohlen, `dir` ausdrücklich am Wurzelelement zu setzen. Das ist besonders bei RTL-Schriften wichtig, da die voreingestellte LTR-Basisrichtung falsch ist. Das Attribut [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) gibt die Sprache an, legt aber keine Basisrichtung fest.

Dieses Attribut kann durch die CSS-Eigenschaften {{ cssxref("direction") }} und {{ cssxref("unicode-bidi") }} überschrieben werden, sofern CSS auf der Seite aktiv ist und das Element diese Eigenschaften unterstützt.

Da die Schreibrichtung des Textes semantisch zu seinem Inhalt und nicht zu seiner Darstellung gehört, sollten Webentwickler nach Möglichkeit dieses Attribut statt der entsprechenden CSS-Eigenschaften verwenden. So wird der Text auch in einem Browser korrekt angezeigt, der CSS nicht unterstützt oder in dem CSS deaktiviert ist.

Die `dir`-Eigenschaft eines Bildes kann auf `"rtl"` gesetzt werden. In diesem Fall werden die HTML-Attribute `title` und `alt` in RTL-Richtung formatiert und interpretiert.

Wenn `dir` bei einer Tabelle auf `"rtl"` gesetzt ist, werden die Spalten von rechts nach links angeordnet.

Das {{HTMLElement("bdo")}}-Element erfordert `dir="ltr"` oder `dir="rtl"`. Bei diesem Element überschreibt das Attribut die den Zeichen eigene Schreibrichtung, statt nur eine Basisrichtung festzulegen.

Browser können Benutzern ermöglichen, die Schreibrichtung von {{ HTMLElement("input") }}- und {{ HTMLElement("textarea") }}-Elementen zu ändern, um das Verfassen von Inhalten zu erleichtern.
Chrome und Safari bieten im Kontextmenü von Eingabefeldern eine Option für die Schreibrichtung.
In Firefox lässt sich die Textrichtung innerhalb eines `<textarea>` mit <kbd>Strg</kbd> (Windows)/<kbd>Cmd</kbd> (macOS) + <kbd>Umschalt</kbd> + <kbd>X</kbd> umschalten.
Diese Funktionen wechseln den Wert des `dir`-Attributs zwischen `ltr` und `rtl`.

## Beispiele

### Schreibrichtung für das gesamte Dokument festlegen

Setzen Sie `dir="rtl"` auf dem {{HTMLElement("html")}}-Element, wenn die Seite überwiegend in einer von rechts nach links geschriebenen Schrift verfasst ist, etwa auf Arabisch oder Hebräisch. Verwenden Sie `dir` für einen Bereich innerhalb der Seite, wenn dieser eine andere Basisrichtung benötigt.

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

### Textrichtung ausdrücklich festlegen

In diesem Beispiel wird die Basisrichtung für zwei Absätze ausdrücklich festgelegt. Sie beeinflusst die Standardausrichtung und die Platzierung von Satzzeichen.

```html
<p dir="ltr" lang="en">This sentence is in English and reads left to right.</p>
<p dir="rtl" lang="ar">هذه الجملة باللغة العربية وتُقرأ من اليمين إلى اليسار.</p>
```

### Bidirektionaler Text innerhalb einer Zeile

Wenn eine Phrase innerhalb einer Zeile eine andere Basisrichtung als der umgebende Text hat, umschließen Sie die gesamte Phrase mit einem Element, dessen `dir`-Wert passend gesetzt ist. Dadurch wird die Schreibrichtung der Phrase zugleich von ihrer Umgebung isoliert, sodass Satzzeichen und Zahlen außerhalb des Elements nicht als Teil der Phrase behandelt werden. Verwenden Sie ein geeignetes semantisches Element, etwa {{HTMLElement("cite")}} für einen Buchtitel, oder {{HTMLElement("bdi")}}, wenn kein anderes Element geeignet ist.

```html
<p dir="rtl" lang="ar">
  اقرأ <cite dir="ltr" lang="en">How the Grinch Stole Christmas!</cite> اليوم.
</p>
```

Beachten Sie, dass das Ausrufezeichen als Teil des Titels innerhalb des `<cite>`-Elements steht. Stünde es außerhalb, würde es die Basisrichtung übernehmen und daher am linken Rand des Titels erscheinen.

### dir="auto" für benutzergenerierte Inhalte verwenden

Wenn die Schreibrichtung eines Textes im Voraus nicht bekannt ist, etwa bei Benutzerkommentaren, verwenden Sie `dir="auto"`. Der Browser bestimmt die Basisrichtung des Elements anhand des ersten Zeichens mit eindeutiger Schreibrichtung. Dies ist eine Heuristik und keine Spracherkennung: Ein Kommentar, der mit einem englischen Namen beginnt und auf Arabisch fortgesetzt wird, erhält eine Basisrichtung von links nach rechts. Verwenden Sie eine ausdrücklich festgelegte Richtung, wenn sie bekannt ist.

Hier stellen die Absätze zwei mögliche Kommentare dar. Da die Kommentare von Benutzern verfasst werden, sind der Website ihre Sprachen zum Zeitpunkt der Darstellung nicht bekannt.

```html
<p dir="auto">This comment is in English.</p>
<p dir="auto">هذا التعليق باللغة العربية.</p>
```

Das {{HTMLElement("bdi")}}-Element hat denselben Effekt und ist für die Isolation innerhalb einer Zeile kürzer, insbesondere wenn kein semantisches Element geeignet ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir), das dieses Attribut widerspiegelt.
- [Umgang mit unterschiedlichen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions)
- [HTML-Seiten in Arabisch, Hebräisch und anderen von rechts nach links geschriebenen Schriften erstellen](https://www.w3.org/International/tutorials/bidi-xhtml/index.en.html) auf w3.org
