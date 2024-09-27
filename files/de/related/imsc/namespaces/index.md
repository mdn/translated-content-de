---
title: Namespaces in IMSC
slug: Related/IMSC/Namespaces
l10n:
  sourceCommit: 6c8d96e2744b36a2daf045420363c629f6781540
---

Dieser Artikel behandelt das Thema der XML-Namensräume und bietet Ihnen genug Informationen, um deren Verwendung in IMSC zu erkennen und effektiv anzuwenden.

## Was sind XML-Namensräume?

Namensräume sind im Grunde das Mechanismus, den Sie in XML verwenden, um verschiedene Familien von Markups zu unterscheiden (die Merkmale mit denselben Namen haben können) und es ihnen zu ermöglichen, im selben Dokument verwendet zu werden.

Um Ihnen zu helfen, zu verstehen, was wir damit meinen, verwenden wir ein Beispiel aus der realen Welt — menschliche Familiennamen. Es gibt viele Menschen auf der Welt, die Mary heißen. Eine Möglichkeit, sie zu unterscheiden, ist durch ihre vollständigen Namen — es kann eine Mary Smith und eine Mary Jones geben.

In XML können Sie Elementen und Attributen auch einen „Familiennamen“ geben, der ihr Namensraum ist. Namensräume definieren, zu welcher Familie ein XML-Vokabular gehört und bestehen im Allgemeinen aus einer identifizierenden Zeichenkette. Das `<p>`-Element ist sowohl in HTML als auch in IMSC verfügbar, daher könnten Sie vielleicht den Namensraum `html` verwenden, um das `<p>` von HTML anzugeben, und `imsc`, um das `<p>` von IMSC anzugeben?

Wie bei vielen Dingen ist es nicht so einfach. Es könnte ein anderes XML-Vokabular namens IMSC geben, das nicht mit Untertiteln in Verbindung steht. Dies ist dasselbe wie bei Mary Smith — es gibt viele Mary Smiths auf der Welt, daher werden mehr Informationen benötigt, um sie zu unterscheiden — ihre Geburtstage, Haarfarbe, Adresse usw.

Normalerweise verwenden Sie deshalb längere Zeichenfolgen als Namensraumnamen. Eine URL ist eine sehr beliebte Form eines Namensraums. Sie ist leicht zu merken und kann auch auf weitere Informationen über dieses XML-Vokabular verweisen.

- Der W3C-Standard IMSC verwendet die URL [`http://www.w3.org/ns/ttml`](https://www.w3.org/ns/ttml/) als Namensraum für das `<p>`-Element.
- Für das `<p>` in HTML ist der Namensraum [`http://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml/).

Wenn Sie den Namensraum `http://www.w3.org/ns/ttml` verwenden, können Sie ziemlich sicher sein, dass Sie sich auf Elemente aus dem IMSC-Vokabular beziehen.

## Festlegen von Namensräumen in Dokumenten

Wie drücken Sie in einem IMSC-Dokument aus, dass das `<p>`-Element zum Namensraum `http://www.w3.org/ns/ttml` gehört? Sie müssen den Namensraum im Dokument einschließen. Der einfache Weg, dies zu tun, könnte darin bestehen, ihn in jedem Element und Attribut aufzunehmen, das aus diesem Namensraum stammt. Sie setzen den Namensraum eines Elements, indem Sie den Namensraum-Identifikator in seinem `xmlns` Attribut angeben:

```xml
<tt xmlns="http://www.w3.org/ns/ttml" xml:lang="en">
  <body xmlns="http://www.w3.org/ns/ttml">
    <div xmlns="http://www.w3.org/ns/ttml">
      <p xmlns="http://www.w3.org/ns/ttml">Hello world</p>
    </div>
  </body>
</tt>
```

Aber das ist nicht sehr effizient. Stellen Sie sich ein Dokument mit Hunderten von Untertiteln vor. Das wäre sehr umfangreich.

### Standard-Namensräume

Glücklicherweise müssen Sie das Obige nicht tun — stattdessen können Sie einfach einen Standard-Namensraum verwenden. Wenn Sie das Attribut `xmlns` auf dem Stamm-Element des Dokuments auf den Wert `http://www.w3.org/ns/ttml` setzen, erben alle im Stamm verschachtelten Elemente diesen Namensraum — sie haben alle auch diesen Namensraum.

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

Da fast alle XML-Elemente, die Sie in einem IMSC-Dokument benötigen, im Namensraum `http://www.w3.org/ns/ttml` sind, erleichtert das das Leben erheblich. Wenn Sie ein Element aus einem anderen Vokabular in einem IMSC-Dokument verwenden möchten, können Sie den Standard-Namensraum immer noch überschreiben.

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

Das Element `<documentPublisher>` stammt aus dem [EBU Part M Metadata](https://tech.ebu.ch/publications/tech3390) Vokabular. Die Elemente in diesem Vokabular haben den Namensraum `urn:ebu:tt:metadata`. Indem Sie das `xmlns` Attribut auf dem Element `<documentPublisher>` auf `urn:ebu:tt:metadata` setzen, wird der Namensraum `http://www.w3.org/ns/ttml` überschrieben. Nun haben das `<documentPublisher>`-Element und alle seine Nachkommen den Namensraum `urn:ebu:tt:metadata`.

Ein besserer Weg, einen Standard-Namensraum zu überschreiben, ist die Verwendung von Präfixen.

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

## Namensraum-Attribute

Wir haben uns die Elemente angesehen, aber wie können wir den Namensraum von IMSC-Attributen angeben, ohne zu umfangreich zu sein? Im Gegensatz zu XML-Elementen gibt es keinen Standard-Namensraum für Attribute.

Darüber hinaus sind IMSC-Attribute in mehr als einem Namensraum enthalten. Lassen Sie uns weiter erklären — in IMSC gibt es verschiedene Kategorien von Attributen, beispielsweise Stil-Attribute. Die verschiedenen Kategorien haben unterschiedliche Namensräume. Zum Beispiel haben alle Stil-Attribute den Namensraum `http://www.w3.org/ns/ttml#styling`.

Wie bei XML-Elementen wäre es zu umfangreich, immer den kompletten Namensraum für jedes Attribut zu schreiben, z.B. `color_http://www.w3.org/ns/ttml#styling="yellow"`.

Glücklicherweise hat XML das Konzept der Präfixe. Ein Präfix kann als „Abkürzung“ für einen Namensraum betrachtet werden. Zum Beispiel können wir einen Attribut-Namensraum auf dem Stamm-Element definieren:

```xml
<tt xmlns="http://www.w3.org/ns/ttml" xml:lang="en"
 xmlns:tts="http://www.w3.org/ns/ttml#styling"/>
```

Indem Sie `xmlns:tts="http://www.w3.org/ns/ttml#styling` auf dem `<tt>`-Element definieren, „binden“ Sie das Präfix `tts` an den Styling-Namensraum. Jedes Mal, wenn Sie ein Attribut (oder Element) mit `tts` (plus einem Doppelpunkt) präfixen, wird ihm der Namensraum `http://www.w3.org/ns/ttml#styling` zugewiesen. Auf diese Weise können Sie im gesamten Dokument das Präfix schreiben, nicht den gesamten Namensraum jedes Mal.

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
> Die Zuordnung Namensraum/Präfix ist nur eine dokumentenweite Vereinbarung. Theoretisch können Sie ein anderes Präfix als `tts` verwenden, um den Styling-Namensraum zu binden. Es ist völlig legal, `xmlns:foo="http://www.w3.org/ns/ttml#styling"` zu definieren und dann `<p foo:color="yellow">` zu schreiben. Aber es macht Ihr IMSC-Dokument viel lesbarer, wenn Sie die offiziellen Präfixe verwenden, die im [Namensraum-Abschnitt](https://www.w3.org/TR/ttml-imsc1.0.1/#namespaces) des IMSC-Standards aufgeführt sind.

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC-Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC-Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS-Polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">IMSC-Dokumente stylen</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Untertitelplatzierung in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namespaces in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Anpassung von Videocodecs an IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
