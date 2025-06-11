---
title: Namensräume in IMSC
slug: Related/IMSC/Namespaces
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Dieser Artikel behandelt das Thema XML-Namensräume und gibt Ihnen genügend Informationen, um deren Verwendung in IMSC zu erkennen und effektiv zu nutzen.

## Was sind XML-Namensräume?

Namensräume sind im Grunde genommen der Mechanismus, den Sie in XML verwenden, um verschiedene Markup-Familien zu unterscheiden (die möglicherweise Funktionen mit demselben Namen haben) und es ihnen zu ermöglichen, im selben Dokument verwendet zu werden.

Um Ihnen zu verdeutlichen, was wir damit meinen, verwenden wir ein Beispiel aus der realen Welt – menschliche Familiennamen. Es gibt viele Menschen auf der Welt, die Mary heißen. Eine Möglichkeit, sie auseinanderzuhalten, ist ihre vollständigen Namen — es kann eine Mary Smith und eine Mary Jones geben.

In XML können Sie Elementen und Attributen ebenfalls einen "Familiennamen" geben, nämlich ihren Namensraum. Namensräume definieren, zu welcher Familie ein XML-Vokabular gehört, und bestehen im Allgemeinen aus einer identifizierenden Zeichenfolge. Das `<p>`-Element ist sowohl in HTML als auch in IMSC verfügbar, daher könnten Sie den Namensraum `html` verwenden, um das HTML-`<p>` anzugeben, und `imsc`, um das IMSC-`<p>` anzugeben?

Wie bei vielen Dingen ist es nicht so einfach. Es könnte ein weiteres XML-Vokabular mit dem Namen IMSC geben, das möglicherweise nicht mit Untertiteln in Verbindung steht. Das gleiche gilt für Mary Smith — es gibt viele Mary Smiths auf der Welt, daher sind weitere Informationen erforderlich, um sie auseinanderzuhalten — ihre Geburtstage, Haarfarbe, Adresse usw.

Normalerweise verwenden Sie also längere Zeichenfolgen als Namensraum-Namen. Eine URL ist eine sehr beliebte Form eines Namensraums. Sie ist leicht zu merken und kann auch auf weitere Informationen über dieses XML-Vokabular verweisen.

- Der W3C-Standard IMSC verwendet die URL [`http://www.w3.org/ns/ttml`](https://www.w3.org/ns/ttml/) als Namensraum für das `<p>`-Element.
- Für das `<p>` in HTML ist der Namensraum [`http://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml/).

Wenn Sie den Namensraum `http://www.w3.org/ns/ttml` verwenden, können Sie ziemlich sicher sein, dass Sie sich auf Elemente aus dem IMSC-Vokabular beziehen.

## Festlegen von Namensräumen in Dokumenten

Wie drücken Sie in einem IMSC-Dokument aus, dass das `<p>`-Element zum Namensraum `http://www.w3.org/ns/ttml` gehört? Sie müssen den Namensraum im Dokument einschließen. Der einfache Weg, dies zu tun, könnte darin bestehen, ihn in jedes Element und Attribut aufzunehmen, das aus diesem Namensraum stammt. Sie setzen den Namensraum eines Elements, indem Sie den Namensraum-Identifikator innerhalb seines `xmlns`-Attributs angeben:

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

### Standardnamensräume

Glücklicherweise müssen Sie das oben Genannte nicht tun — stattdessen können Sie einfach einen Standardnamensraum verwenden. Wenn Sie das Attribut `xmlns` auf dem Wurzelelement des Dokuments auf den Wert `http://www.w3.org/ns/ttml` setzen, erben alle innerhalb der Wurzel verschachtelten Elemente diesen Namensraum — sie haben ebenfalls alle diesen Namensraum.

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

Da fast alle XML-Elemente, die Sie in einem IMSC-Dokument benötigen, im Namensraum `http://www.w3.org/ns/ttml` liegen, macht dies das Leben viel einfacher. Wenn Sie ein Element aus einem anderen Vokabular innerhalb eines IMSC-Dokuments verwenden möchten, können Sie den Standardnamensraum trotzdem überschreiben.

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

Das Element `<documentPublisher>` stammt aus dem [EBU Part M metadata](https://tech.ebu.ch/publications/tech3390) Vokabular. Die Elemente in diesem Vokabular haben den Namensraum `urn:ebu:tt:metadata`. Indem Sie das `xmlns`-Attribut auf dem Element `<documentPublisher>` auf `urn:ebu:tt:metadata` setzen, wird der Namensraum `http://www.w3.org/ns/ttml` überschrieben. Nun haben das `<documentPublisher>`-Element und all seine Nachkommen den Namensraum `urn:ebu:tt:metadata`.

Eine bessere Möglichkeit, einen Standardnamensraum zu überschreiben, ist die Verwendung von Präfixen.

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

Wir haben uns die Elemente angesehen, aber wie können wir den Namensraum von IMSC-Attributen angeben, ohne zu umständlich zu sein? Im Gegensatz zu XML-Elementen gibt es keinen Standardnamensraum für Attribute.

Zudem sind IMSC-Attribute in mehr als einem Namensraum enthalten. Lassen Sie uns dies näher erläutern — in IMSC gibt es verschiedene Kategorien von Attributen, zum Beispiel Styling-Attribute. Die verschiedenen Kategorien haben unterschiedliche Namensräume. Zum Beispiel haben alle Styling-Attribute den Namensraum `http://www.w3.org/ns/ttml#styling`.

Wie bei XML-Elementen wäre es zu umständlich, immer den vollständigen Namensraum für jedes Attribut zu schreiben, z.B. `color_http://www.w3.org/ns/ttml#styling="yellow"`.

Zum Glück hat XML das Konzept der Präfixe. Ein Präfix kann als "Abkürzung" für einen Namensraum betrachtet werden. Zum Beispiel können wir einen Attribut-Namensraum auf dem Wurzelelement definieren:

```xml
<tt xmlns="http://www.w3.org/ns/ttml" xml:lang="en"
 xmlns:tts="http://www.w3.org/ns/ttml#styling"/>
```

Indem Sie `xmlns:tts="http://www.w3.org/ns/ttml#styling` auf dem `<tt>`-Element definieren, "binden" Sie das Präfix `tts` an den Styling-Namensraum. Sobald Sie ein Attribut (oder Element) mit `tts` (plus einem Doppelpunkt) versehen, erhält es den Namensraum `http://www.w3.org/ns/ttml#styling`. Auf diese Weise können Sie das Präfix in Ihrem gesamten Dokument schreiben, nicht jedes Mal den gesamten Namensraum.

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

Viel lesbarer, oder?

> [!NOTE]
> Die Namensraum/Präfix-Zuordnung ist nur eine dokumentweite Vereinbarung. Theoretisch können Sie ein anderes Präfix als `tts` verwenden, um den Styling-Namensraum zu binden. Es ist völlig legal, `xmlns:foo="http://www.w3.org/ns/ttml#styling"` zu definieren und dann `<p foo:color="yellow">` zu schreiben. Aber es macht Ihr IMSC-Dokument viel lesbarer, wenn Sie die offiziellen Präfixe verwenden, die im Abschnitt [namespace section](https://w3c.github.io/imsc/imsc1/spec/ttml-ww-profiles.html#namespaces) des IMSC-Standards aufgeführt sind.

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
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Platzierung von Untertiteln in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namensräume in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Mapping von Video-Zeitcodes zu IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
