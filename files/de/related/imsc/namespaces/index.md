---
title: Namensräume in IMSC
slug: Related/IMSC/Namespaces
l10n:
  sourceCommit: 6c8d96e2744b36a2daf045420363c629f6781540
---

Dieser Artikel behandelt das Thema XML-Namensräume und gibt Ihnen genügend Informationen, um deren Verwendung in IMSC zu erkennen und effektiv anwenden zu können.

## Was sind XML-Namensräume?

Namensräume sind im Wesentlichen der Mechanismus, den Sie in XML verwenden, um zwischen verschiedenen Markup-Familien zu unterscheiden (die möglicherweise Funktionen mit demselben Namen haben) und deren gemeinsame Nutzung in einem Dokument zu ermöglichen.

Um Ihnen das verständlich zu machen, verwenden wir ein Beispiel aus der realen Welt – menschliche Familiennamen. Es gibt viele Menschen auf der Welt, die Mary heißen. Eine Möglichkeit, sie voneinander zu unterscheiden, besteht darin, ihre vollständigen Namen zu verwenden – es kann eine Mary Smith und eine Mary Jones geben.

In XML können Sie Elementen und Attributen auch einen "Familiennamen" geben, der ihr Namensraum ist. Namensräume definieren, zu welcher Familie ein XML-Vokabular gehört, und bestehen im Allgemeinen aus einer identifizierenden Zeichenfolge. Das `<p>`-Element ist sowohl in HTML als auch in IMSC verfügbar, daher könnten Sie den Namensraum `html` verwenden, um `<p>` aus HTML anzugeben, und `imsc`, um `<p>` aus IMSC anzugeben?

Wie bei vielen Dingen ist es nicht so einfach. Möglicherweise gibt es ein anderes XML-Vokabular namens IMSC, das nicht mit Untertiteln zu tun hat. Dies ist ähnlich wie bei Mary Smith – es gibt viele Mary Smiths auf der Welt, daher sind weitere Informationen erforderlich, um sie zu unterscheiden – ihre Geburtstage, Haarfarbe, Adresse usw.

Normalerweise verwenden Sie längere Zeichenfolgen als Namensraum-Namen. Eine URL ist eine sehr beliebte Form eines Namensraums. Es ist leicht zu merken und kann auch auf weitere Informationen über dieses XML-Vokabular verweisen.

- Der W3C-Standard IMSC verwendet die URL [`http://www.w3.org/ns/ttml`](https://www.w3.org/ns/ttml/) als Namensraum für das `<p>`-Element.
- Für das `<p>` in HTML ist der Namensraum [`http://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml/).

Wenn Sie den Namensraum `http://www.w3.org/ns/ttml` verwenden, können Sie ziemlich sicher sein, dass Sie sich auf Elemente aus dem IMSC-Vokabular beziehen.

## Namensräume in Dokumenten festlegen

Wie drücken Sie also in einem IMSC-Dokument aus, dass das `<p>`-Element zum Namensraum `http://www.w3.org/ns/ttml` gehört? Sie müssen den Namensraum im Dokument einschließen. Der einfache Weg könnte sein, ihn in jedem Element und Attribut, das aus diesem Namensraum stammt, einzuschließen. Sie setzen den Namensraum eines Elements, indem Sie den Namensraum-Identifier in seinem `xmlns`-Attribut angeben:

```xml
<tt xmlns="http://www.w3.org/ns/ttml" xml:lang="en">
  <body xmlns="http://www.w3.org/ns/ttml">
    <div xmlns="http://www.w3.org/ns/ttml">
      <p xmlns="http://www.w3.org/ns/ttml">Hello world</p>
    </div>
  </body>
</tt>
```

Aber das ist nicht sehr effizient. Stellen Sie sich ein Dokument mit Hunderten von Untertiteln vor. Das wäre sehr ausführlich.

### Standard-Namensräume

Glücklicherweise müssen Sie das oben Genannte nicht tun – stattdessen können Sie einfach einen Standard-Namensraum verwenden. Wenn Sie das Attribut `xmlns` im Wurzelelement des Dokuments auf den Wert `http://www.w3.org/ns/ttml` setzen, erben alle innerhalb der Wurzel verschachtelten Elemente diesen Namensraum – sie werden ebenfalls diesen Namensraum haben.

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

Da fast alle XML-Elemente, die Sie in einem IMSC-Dokument benötigen, im Namensraum `http://www.w3.org/ns/ttml` sind, macht dies das Leben viel einfacher. Wenn Sie ein Element aus einem anderen Vokabular in einem IMSC-Dokument verwenden möchten, können Sie immer noch den Standard-Namensraum überschreiben.

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

Das Element `<documentPublisher>` stammt aus dem [EBU Part M Metadata](https://tech.ebu.ch/publications/tech3390)-Vokabular. Die Elemente in diesem Vokabular haben den Namensraum `urn:ebu:tt:metadata`. Indem Sie das `xmlns`-Attribut auf dem `<documentPublisher>`-Element auf `urn:ebu:tt:metadata` setzen, wird der Namensraum `http://www.w3.org/ns/ttml` überschrieben. Jetzt haben das `<documentPublisher>`-Element und alle seine Nachkommen den Namensraum `urn:ebu:tt:metadata`.

Eine bessere Möglichkeit, einen Standard-Namensraum zu überschreiben, besteht darin, Präfixe zu verwenden.

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

Wir erklären im folgenden Abschnitt, wie XML-Namensraumprefixe funktionieren.

## Namensraum-Attribute

Wir haben uns Elemente angesehen, aber wie können wir den Namensraum von IMSC-Attributen festlegen, ohne zu ausführlich zu sein? Im Gegensatz zu XML-Elementen gibt es für Attribute keinen Standard-Namensraum.

Darüber hinaus sind IMSC-Attribute in mehr als einem Namensraum enthalten. Lassen Sie uns das weiter erklären – in IMSC gibt es verschiedene Kategorien von Attributen, zum Beispiel Stilattribute. Die verschiedenen Kategorien haben unterschiedliche Namensräume. Zum Beispiel haben alle Stilattribute den Namensraum `http://www.w3.org/ns/ttml#styling`.

Wie bei XML-Elementen wäre es zu ausführlich, immer den vollständigen Namensraum für jedes Attribut zu schreiben, z. B. `color_http://www.w3.org/ns/ttml#styling="yellow"`.

Glücklicherweise hat XML das Konzept von Präfixen. Ein Präfix kann als "Abkürzung" für einen Namensraum betrachtet werden. Beispielsweise können wir einen Attribut-Namensraum im Wurzelelement definieren:

```xml
<tt xmlns="http://www.w3.org/ns/ttml" xml:lang="en"
 xmlns:tts="http://www.w3.org/ns/ttml#styling"/>
```

Indem Sie `xmlns:tts="http://www.w3.org/ns/ttml#styling` auf dem `<tt>`-Element definieren, "binden" Sie das Präfix `tts` an den Stil-Namensraum. Anschließend wird jedes Mal, wenn Sie ein Attribut (oder Element) mit `tts` (plus einem Doppelpunkt) präfixieren, der Namensraum `http://www.w3.org/ns/ttml#styling` zugewiesen. Auf diese Weise können Sie das Präfix in Ihrem gesamten Dokument verwenden, nicht jedes Mal den gesamten Namensraum.

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
> Die Zuordnung von Namensraum/Präfix ist nur eine dokumentweite Vereinbarung. Theoretisch können Sie ein anderes Präfix als `tts` verwenden, um den Stil-Namensraum zu binden. Es ist völlig legal, `xmlns:foo="http://www.w3.org/ns/ttml#styling"` zu definieren und dann `<p foo:color="yellow">` zu schreiben. Aber es macht Ihr IMSC-Dokument viel lesbarer, wenn Sie die offiziellen Präfixe verwenden, die im [Namensraum-Abschnitt](https://www.w3.org/TR/ttml-imsc1.0.1/#namespaces) des IMSC-Standards aufgeführt sind.

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC-Anleitungen</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC-Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS-Polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Styling von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Untertitelplatzierung in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namensräume in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Zeitsteuerung in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Zuordnung von Videozeitcodes zu IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
