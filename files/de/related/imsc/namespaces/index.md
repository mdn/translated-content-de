---
title: Namensräume in IMSC
slug: Related/IMSC/Namespaces
l10n:
  sourceCommit: 95e0fbb78a16450188753d0b53ca02a9fbd2a641
---

Dieser Artikel behandelt das Thema XML-Namensräume und gibt Ihnen genügend Informationen, um deren Verwendung in IMSC zu erkennen und sie effektiv zu nutzen.

## Was sind XML-Namensräume?

Namensräume sind im Wesentlichen der Mechanismus, den Sie in XML verwenden, um verschiedene Familien von Markup zu unterscheiden (die möglicherweise über gleichnamige Merkmale verfügen) und es ihnen zu ermöglichen, im selben Dokument verwendet zu werden.

Um Ihnen zu verdeutlichen, was wir damit meinen, verwenden wir ein Beispiel aus der realen Welt — menschliche Familiennamen. Es gibt viele Menschen auf der Welt namens Mary. Eine Möglichkeit, sie zu unterscheiden, sind ihre vollständigen Namen — es gibt eine Mary Smith und eine Mary Jones.

In XML können Sie Elementen und Attributen ebenfalls einen "Familiennamen" geben, das ist ihr Namensraum. Namensräume definieren, zu welcher Familie ein XML-Vokabular gehört und bestehen im Allgemeinen aus einer kennzeichnenden Zeichenkette. Das `<p>`-Element ist sowohl in HTML als auch in IMSC verfügbar, daher könnten Sie vielleicht den Namensraum `html` verwenden, um auf das `<p>` von HTML zu verweisen und `imsc`, um auf das `<p>` von IMSC zu verweisen?

Wie bei vielen Dingen ist es nicht so einfach. Es könnte ein anderes XML-Vokabular namens IMSC geben, das nicht mit Untertiteln zusammenhängt. Das ist dasselbe wie bei Mary Smith — es gibt viele Mary Smiths auf der Welt, daher sind weitere Informationen erforderlich, um sie zu unterscheiden — deren Geburtsdaten, Haarfarbe, Adresse usw.

Daher verwenden Sie normalerweise längere Zeichenketten als Namensraum-Namen. Eine URL ist eine sehr beliebte Form von Namensraum. Sie ist leicht zu merken und kann auch auf weitere Informationen über dieses XML-Vokabular verweisen.

- Der W3C-Standard IMSC verwendet die URL [`http://www.w3.org/ns/ttml`](https://www.w3.org/ns/ttml/) als Namensraum für das `<p>`-Element.
- Für das `<p>` in HTML ist der Namensraum [`http://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml/).

Wenn Sie den Namensraum `http://www.w3.org/ns/ttml` verwenden, können Sie ziemlich sicher davon ausgehen, dass Sie sich auf Elemente des IMSC-Vokabulars beziehen.

## Festlegen von Namensräumen in Dokumenten

Wie drücken Sie in einem IMSC-Dokument aus, dass das `<p>`-Element zum Namensraum `http://www.w3.org/ns/ttml` gehört? Sie müssen den Namensraum im Dokument einfügen. Der einfache Weg, dies zu tun, könnte darin bestehen, ihn in jedes Element und Attribut einzufügen, das aus diesem Namensraum stammt. Sie setzen den Namensraum eines Elements, indem Sie den Namensraum-Identifikator in seinem `xmlns`-Attribut angeben:

```xml
<tt xmlns="http://www.w3.org/ns/ttml" xml:lang="en">
  <body xmlns="http://www.w3.org/ns/ttml">
    <div xmlns="http://www.w3.org/ns/ttml">
      <p xmlns="http://www.w3.org/ns/ttml">Hello world</p>
    </div>
  </body>
</tt>
```

Aber das ist nicht sehr effizient. Stellen Sie sich ein Dokument mit Hunderten von Untertiteln vor. Das wäre sehr umständlich.

### Standard-Namensräume

Glücklicherweise müssen Sie das nicht tun — stattdessen können Sie einfach einen Standard-Namensraum verwenden. Wenn Sie das Attribut `xmlns` am Wurzelelement des Dokuments auf den Wert `http://www.w3.org/ns/ttml` setzen, erben alle im Wurzelelement verschachtelten Elemente diesen Namensraum — sie haben dann alle denselben Namensraum.

```xml
<tt xmlns="http://www.w3.org/ns/ttml" xml:lang="en">
  <body>
    <div>
      <p>Hello world</p>
    </div>
  </body>
</tt>
```

In diesem Beispiel haben die Elemente `<tt>`, `<body>`, `<div>` und `<p>` alle den Namensraum `http://www.w3.org/ns/ttml`.

Da fast alle XML-Elemente, die Sie in einem IMSC-Dokument benötigen, im Namensraum `http://www.w3.org/ns/ttml` sind, macht dies das Leben viel einfacher. Wenn Sie ein Element aus einem anderen Vokabular innerhalb eines IMSC-Dokuments verwenden möchten, können Sie den Standard-Namensraum dennoch überschreiben.

```xml
<tt xmlns="http://www.w3.org/ns/ttml" xml:lang="en">
  <head>
   <metadata>
     <documentPublisher xmlns="urn:ebu:tt:metadata">MDN</documentPublisher>
   </metadata>
  </head>
  <body>
    <div>
      <p>Hello world</p>
    </div>
  </body>
</tt>
```

Das Element `<documentPublisher>` stammt aus dem [EBU Part M Metadata](https://tech.ebu.ch/publications/tech3390)-Vokabular. Die Elemente in diesem Vokabular haben den Namensraum `urn:ebu:tt:metadata`. Durch das Setzen des `xmlns`-Attributs auf dem Element `<documentPublisher>` auf `urn:ebu:tt:metadata`, wird der Namensraum `http://www.w3.org/ns/ttml` überschrieben. Jetzt haben das `<documentPublisher>`-Element und alle seine Nachkommen den Namensraum `urn:ebu:tt:metadata`.

Ein besserer Weg, um einen Standard-Namensraum zu überschreiben, ist die Verwendung von Präfixen.

```xml
<tt xmlns="http://www.w3.org/ns/ttml" xml:lang="en"
 xmlns:ebuttm="urn:ebu:tt:metadata">
  <head>
   <metadata>
     <ebuttm:documentPublisher>MDN</ebuttm:documentPublisher>
   </metadata>
  </head>
  <body>
    <div>
      <p>Hello world</p>
    </div>
  </body>
</tt>
```

Wir erklären im folgenden Abschnitt, wie XML-Namensraum-Präfixe funktionieren.

## Attribut-Namensräume

Wir haben uns Elemente angesehen, aber wie können wir den Namensraum von IMSC-Attributen spezifizieren, ohne zu umständlich zu werden? Im Gegensatz zu XML-Elementen gibt es keinen Standard-Namensraum für Attribute.

Darüber hinaus sind IMSC-Attribute in mehr als einem Namensraum enthalten. Lassen Sie uns dies weiter erklären — in IMSC gibt es verschiedene Kategorien von Attributen, z. B. Styling-Attribute. Die verschiedenen Kategorien haben unterschiedliche Namensräume. Zum Beispiel haben alle Styling-Attribute den Namensraum `http://www.w3.org/ns/ttml#styling`.

Ähnlich wie bei XML-Elementen wäre es zu umständlich, den vollständigen Namensraum immer für jedes Attribut zu schreiben, z. B., `color_http://www.w3.org/ns/ttml#styling="yellow"`.

Zum Glück hat XML das Konzept von Präfixen. Ein Präfix kann als "Abkürzung" für einen Namensraum angesehen werden. Zum Beispiel können wir einen Attribut-Namensraum am Wurzelelement definieren:

```xml
<tt xmlns="http://www.w3.org/ns/ttml" xml:lang="en"
 xmlns:tts="http://www.w3.org/ns/ttml#styling"/>
```

Indem Sie `xmlns:tts="http://www.w3.org/ns/ttml#styling` auf dem `<tt>`-Element definieren, "binden" Sie das Präfix `tts` an den Styling-Namensraum. Danach wird jedes Mal, wenn Sie ein Attribut (oder Element) mit `tts` (plus einem Doppelpunkt) voranstellen, ihm der Namensraum `http://www.w3.org/ns/ttml#styling` zugewiesen. Auf diese Weise können Sie das Präfix in Ihrem Dokument schreiben, nicht jedes Mal den gesamten Namensraum.

```xml
<tt xmlns="http://www.w3.org/ns/ttml" xml:lang="en"
 xmlns:tts="http://www.w3.org/ns/ttml#styling" >
  <body>
    <div>
      <p tts:color="yellow" tts:fontSize="120%">
        Hello world
      </p>
     <p tts:color="white" tts:fontSize="120%">
        Hi!
     </p>
    </div>
  </body>
</tt>
```

Viel lesbarer, nicht wahr?

> [!NOTE]
> Die Übereinstimmung zwischen Namensraum und Präfix ist nur eine dokumentweite Vereinbarung. Theoretisch können Sie ein anderes Präfix als `tts` verwenden, um den Styling-Namensraum zu binden. Es ist völlig legitim, `xmlns:foo="http://www.w3.org/ns/ttml#styling"` zu definieren und dann `<p foo:color="yellow">` zu schreiben. Aber es macht Ihr IMSC-Dokument viel lesbarer, wenn Sie die offiziellen Präfixe verwenden, die im [Namensraum-Abschnitt](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html#namespaces) des IMSC-Standards aufgeführt sind.
