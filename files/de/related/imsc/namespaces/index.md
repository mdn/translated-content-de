---
title: Namespaces in IMSC
slug: Related/IMSC/Namespaces
l10n:
  sourceCommit: 6c8d96e2744b36a2daf045420363c629f6781540
---

Dieser Artikel behandelt das Thema XML-Namespaces und gibt Ihnen genügend Informationen, um deren Verwendung in IMSC zu erkennen und effektiv anzuwenden.

## Was sind XML-Namespaces?

Namespaces sind im Grunde das Mechanismus, den Sie in XML verwenden, um verschiedene Familien von Markup (die möglicherweise gleichnamige Merkmale haben) zu unterscheiden und um sie im selben Dokument verwenden zu können.

Um Ihnen zu verdeutlichen, was wir damit meinen, nutzen wir ein Beispiel aus der realen Welt — menschliche Familiennamen. Es gibt viele Menschen auf der Welt, die Mary heißen. Eine Möglichkeit, sie auseinanderzuhalten, ist durch ihre vollständigen Namen — es kann eine Mary Smith und eine Mary Jones geben.

In XML können Sie Elementen und Attributen ebenfalls einen „Familiennamen“ geben, der ihr Namespace ist. Namespaces definieren, zu welcher Familie ein XML-Vokabular gehört, und bestehen im Allgemeinen aus einer identifizierenden Zeichenfolge. Das `<p>`-Element ist sowohl in HTML als auch in IMSC verfügbar, daher könnten Sie vielleicht den Namespace `html` verwenden, um das `<p>` von HTML anzugeben, und `imsc`, um das `<p>` von IMSC anzugeben?

Wie bei vielen Dingen ist es nicht so einfach. Es könnte ein weiteres XML-Vokabular namens IMSC geben, das möglicherweise nicht mit Untertiteln verwandt ist. Dies ist das Gleiche wie bei Mary Smith — es gibt viele Mary Smiths auf der Welt, daher sind mehr Informationen nötig, um sie auseinanderzuhalten — ihre Geburtstage, Haarfarben, Adressen usw.

Normalerweise verwenden Sie daher längere Zeichenfolgen als Namespace-Namen. Eine URL ist eine sehr beliebte Form eines Namespace. Sie ist leicht zu merken und kann auch auf weitere Informationen über dieses XML-Vokabular hinweisen.

- Der W3C-Standard IMSC verwendet die URL [`http://www.w3.org/ns/ttml`](https://www.w3.org/ns/ttml/) als Namespace für das `<p>`-Element.
- Für das `<p>` in HTML lautet der Namespace [`http://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml/).

Wenn Sie den Namespace `http://www.w3.org/ns/ttml` verwenden, können Sie ziemlich sicher sein, dass Sie sich auf Elemente aus dem IMSC-Vokabular beziehen.

## Setzen von Namespaces in Dokumenten

Wie bringen Sie in einem IMSC-Dokument zum Ausdruck, dass das `<p>`-Element zum Namespace `http://www.w3.org/ns/ttml` gehört? Sie müssen den Namespace im Dokument einfügen. Der einfachste Weg dies zu tun, könnte darin bestehen, ihn in jedes Element und Attribut einzuschließen, das aus diesem Namespace stammt. Sie setzen den Namespace eines Elements, indem Sie den Namespace-Bezeichner innerhalb seines `xmlns`-Attributs angeben:

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

### Standard-Namespaces

Glücklicherweise müssen Sie dies nicht tun — stattdessen können Sie einfach einen Standard-Namespace verwenden. Wenn Sie das Attribut `xmlns` auf dem Stammdokumentelement auf den Wert `http://www.w3.org/ns/ttml` setzen, erben alle in der Wurzel verschachtelten Elemente diesen Namespace — sie alle haben diesen Namespace.

```xml
<tt xmlns="http://www.w3.org/ns/ttml" xml:lang="en">
  <body>
    <div>
      <p>Hello world</p>
    </div>
  </body>
</tt>
```

In diesem Beispiel haben die Elemente `<tt>`, `<body>`, `<div>` und `<p>` alle den Namespace `http://www.w3.org/ns/ttml`.

Da fast alle XML-Elemente, die Sie in einem IMSC-Dokument benötigen, im Namespace `http://www.w3.org/ns/ttml` sind, macht dies vieles einfacher. Wenn Sie ein Element aus einem anderen Vokabular in einem IMSC-Dokument verwenden möchten, können Sie den Standard-Namespace dennoch überschreiben.

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

Das Element `<documentPublisher>` stammt aus dem [EBU Part M metadata](https://tech.ebu.ch/publications/tech3390)-Vokabular. Die Elemente in diesem Vokabular haben den Namespace `urn:ebu:tt:metadata`. Indem Sie das `xmlns`-Attribut auf dem `<documentPublisher>`-Element auf `urn:ebu:tt:metadata` setzen, wird der Namespace `http://www.w3.org/ns/ttml` überschrieben. Jetzt hat das `<documentPublisher>`-Element und alle seine Nachkommen den Namespace `urn:ebu:tt:metadata`.

Ein besserer Weg, einen Standard-Namespace zu überschreiben, ist die Verwendung von Präfixen.

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

Wir erklären im folgenden Abschnitt, wie XML-Namespaces-Präfixe funktionieren.

## Namespaced-Attribute

Wir haben uns Elemente angeschaut, aber wie können wir den Namespace von IMSC-Attributen spezifizieren, ohne dabei zu ausführlich zu sein? Im Gegensatz zu XML-Elementen gibt es keinen Standard-Namespace für Attribute.

Darüber hinaus sind IMSC-Attribute in mehr als einem Namespace enthalten. Lassen Sie uns das weiter erklären — in IMSC gibt es verschiedene Kategorien von Attributen, beispielsweise Stil-Attribute. Die verschiedenen Kategorien haben unterschiedliche Namespaces. Zum Beispiel haben alle Stil-Attribute den Namespace `http://www.w3.org/ns/ttml#styling`.

Wie bei XML-Elementen wäre es zu ausführlich, den vollständigen Namespace für jedes Attribut zu schreiben, z.B. `color_http://www.w3.org/ns/ttml#styling="yellow"`.

Glücklicherweise hat XML das Konzept der Präfixe. Ein Präfix kann als „Abkürzung“ für einen Namespace angesehen werden. Zum Beispiel können wir einen Attribut-Namespace auf dem Stammdokumentelement definieren:

```xml
<tt xmlns="http://www.w3.org/ns/ttml" xml:lang="en"
 xmlns:tts="http://www.w3.org/ns/ttml#styling"/>
```

Indem Sie `xmlns:tts="http://www.w3.org/ns/ttml#styling"` auf dem `<tt>`-Element definieren, „binden“ Sie das Präfix `tts` an den Styling-Namespace. Anschließend wird immer, wenn Sie einem Attribut (oder Element) das Präfix `tts` (plus einem Doppelpunkt) voranstellen, der Namespace `http://www.w3.org/ns/ttml#styling` zugewiesen. Auf diese Weise können Sie im gesamten Dokument das Präfix schreiben, nicht jedes Mal den ganzen Namespace.

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
> Die Übereinstimmung von Namespace und Präfix ist nur eine dokumentweite Vereinbarung. Theoretisch können Sie ein anderes Präfix als `tts` verwenden, um den Styling-Namespace zu binden. Es ist völlig legal, `xmlns:foo="http://www.w3.org/ns/ttml#styling"` zu definieren und dann `<p foo:color="yellow">` zu schreiben. Aber es macht Ihr IMSC-Dokument viel lesbarer, wenn Sie die offiziellen Präfixe verwenden, die im [Namespaces-Abschnitt](https://www.w3.org/TR/ttml-imsc1.0.1/#namespaces) des IMSC-Standards aufgelistet sind.

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS Polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Styling von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Platzierung von Untertiteln in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namespaces in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Zuordnung von Videotimecodes zu IMSC</a>
          </li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
