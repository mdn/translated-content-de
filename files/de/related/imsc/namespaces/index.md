---
title: Namespaces in IMSC
slug: Related/IMSC/Namespaces
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Dieser Artikel behandelt das Thema XML-Namensräume und gibt Ihnen genügend Informationen, um deren Verwendung in IMSC zu erkennen und effektive Nutzung zu ermöglichen.

## Was sind XML-Namensräume?

Namensräume sind im Grunde der Mechanismus, den Sie in XML verwenden, um verschiedene Familien von Markups zu unterscheiden (die möglicherweise Features mit demselben Namen haben) und sie in demselben Dokument nutzen zu können.

Um zu verdeutlichen, was wir damit meinen, verwenden wir ein Beispiel aus der realen Welt — menschliche Familiennamen. Es gibt viele Menschen auf der Welt, die Mary heißen. Eine Möglichkeit, sie zu unterscheiden, ist durch ihre vollständigen Namen — es kann eine Mary Smith und eine Mary Jones geben.

In XML können Sie Elementen und Attributen ebenfalls einen "Familiennamen" geben, nämlich ihren Namensraum. Namensräume definieren, zu welcher Familie ein XML-Vokabular gehört, und bestehen im Allgemeinen aus einer identifizierenden Zeichenkette. Das `<p>`-Element ist sowohl in HTML als auch in IMSC verfügbar. Vielleicht könnten Sie den Namensraum `html` verwenden, um das `<p>` von HTML zu spezifizieren und `imsc` für das `<p>` von IMSC?

Wie bei vielen Dingen ist es nicht so einfach. Es könnte ein anderes XML-Vokabular namens IMSC geben, das möglicherweise nicht mit Untertiteln verwandt ist. Gleiches gilt für Mary Smith — es gibt viele Mary Smiths auf der Welt, also sind mehr Informationen erforderlich, um sie zu unterscheiden — ihr Geburtstag, Haarfarbe, Adresse usw.

Normalerweise verwendet man daher längere Zeichenfolgen als Namensraum-Namen. Eine URL ist eine sehr beliebte Form eines Namensraums. Sie ist leicht zu merken und kann auch auf weitere Informationen zu diesem XML-Vokabular verweisen.

- Der W3C-Standard IMSC verwendet die URL [`http://www.w3.org/ns/ttml`](https://www.w3.org/ns/ttml/) als Namensraum für das `<p>`-Element.
- Für das `<p>` in HTML ist der Namensraum [`http://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml/).

Wenn Sie den Namensraum `http://www.w3.org/ns/ttml` verwenden, ist es ziemlich sicher anzunehmen, dass Sie sich auf Elemente des IMSC-Vokabulars beziehen.

## Festlegen von Namensräumen in Dokumenten

Wie drücken Sie also in einem IMSC-Dokument aus, dass das `<p>`-Element zum Namensraum `http://www.w3.org/ns/ttml` gehört? Sie müssen den Namensraum im Dokument einfügen. Der einfachste Weg dies zu tun könnte sein, ihn in jedes Element und Attribut aufzunehmen, das aus diesem Namensraum stammt. Sie legen den Namensraum eines Elements fest, indem Sie den Namensraum-Identifikator innerhalb seines `xmlns`-Attributs angeben:

```xml
<tt xmlns="http://www.w3.org/ns/ttml" xml:lang="en">
  <body xmlns="http://www.w3.org/ns/ttml">
    <div xmlns="http://www.w3.org/ns/ttml">
      <p xmlns="http://www.w3.org/ns/ttml">Hello world</p>
    </div>
  </body>
</tt>
```

Aber das ist nicht sehr effizient. Stellen Sie sich ein Dokument mit hunderten von Untertiteln vor. Das wäre sehr umständlich.

### Standard-Namensräume

Glücklicherweise müssen Sie das oben Beschriebene nicht tun — stattdessen können Sie einfach einen Standardnamensraum verwenden. Wenn Sie das Attribut `xmlns` im Stamm-Element des Dokuments auf den Wert `http://www.w3.org/ns/ttml` setzen, erben alle innerhalb des Stamms geschachtelten Elemente diesen Namensraum — sie haben alle auch diesen Namensraum.

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

Da nahezu alle XML-Elemente, die Sie in einem IMSC-Dokument benötigen, im Namensraum `http://www.w3.org/ns/ttml` sind, wird das Leben dadurch erheblich vereinfacht. Wenn Sie ein Element aus einem anderen Vokabular innerhalb eines IMSC-Dokuments verwenden möchten, können Sie den Standardnamensraum dennoch überschreiben.

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

Das Element `<documentPublisher>` stammt aus dem [EBU Part M metadata](https://tech.ebu.ch/publications/tech3390) Vokabular. Die Elemente in diesem Vokabular haben den Namensraum `urn:ebu:tt:metadata`. Durch das Festlegen des Attributs `xmlns` auf dem Element `<documentPublisher>` auf `urn:ebu:tt:metadata`, wird der Namensraum `http://www.w3.org/ns/ttml` überschrieben. Nun haben das `<documentPublisher>`-Element und alle seine Nachkommen den Namensraum `urn:ebu:tt:metadata`.

Eine bessere Methode, einen Standardnamensraum zu überschreiben, ist die Verwendung von Präfixen.

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

Im nächsten Abschnitt erklären wir, wie XML-Namensraum-Präfixe funktionieren.

## Namensraum-Attribute

Wir haben uns Elemente angesehen, aber wie können wir den Namensraum von IMSC-Attributen angeben, ohne zu umständlich zu sein? Im Gegensatz zu XML-Elementen gibt es keinen Standardnamensraum für Attribute.

Zudem sind IMSC-Attribute in mehr als einem Namensraum enthalten. Lassen Sie uns näher erklären — in IMSC gibt es verschiedene Kategorien von Attributen, beispielsweise Stilattribute. Die verschiedenen Kategorien haben unterschiedliche Namensräume. Zum Beispiel haben alle Stilattribute den Namensraum `http://www.w3.org/ns/ttml#styling`.

Wie bei XML-Elementen wäre es zu umständlich, immer den vollständigen Namensraum für jedes Attribut zu schreiben, z. B. `color_http://www.w3.org/ns/ttml#styling="yellow"`.

Glücklicherweise hat XML das Konzept von Präfixen. Ein Präfix kann als "Abkürzung" für einen Namensraum gesehen werden. Zum Beispiel können wir einen Attribut-Namensraum im Stamm-Element definieren:

```xml
<tt xmlns="http://www.w3.org/ns/ttml" xml:lang="en"
 xmlns:tts="http://www.w3.org/ns/ttml#styling"/>
```

Indem Sie `xmlns:tts="http://www.w3.org/ns/ttml#styling` auf dem `<tt>`-Element definieren, "binden" Sie das Präfix `tts` an den Styling-Namensraum. Jedes Mal, wenn Sie ein Attribut (oder Element) mit `tts` (plus einem Doppelpunkt) prefixen, erhält es den Namensraum `http://www.w3.org/ns/ttml#styling`. Auf diese Weise können Sie das Präfix im gesamten Dokument verwenden, nicht jedes Mal den gesamten Namensraum.

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
> Das Namensraum-/Präfix-Match ist nur eine dokumentenweite Vereinbarung. Theoretisch können Sie ein anderes Präfix als `tts` verwenden, um den Styling-Namensraum zu binden. Es ist vollkommen legal, `xmlns:foo="http://www.w3.org/ns/ttml#styling"` zu definieren und dann `<p foo:color="yellow">` zu schreiben. Aber es macht Ihr IMSC-Dokument viel lesbarer, wenn Sie die offiziellen Präfixe verwenden, die im [Namensraum-Abschnitt](https://www.w3.org/TR/ttml-imsc1.0.1/#namespaces) des IMSC-Standards aufgeführt sind.

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Related/IMSC/"><strong>IMSC</strong></a></li>
    <li class="toggle">
      <details open>
        <summary>IMSC-Leitfäden</summary>
        <ol>
          <li><a href="/de/docs/Related/IMSC/Basics">IMSC-Grundlagen</a></li>
          <li><a href="/de/docs/Related/IMSC/Using_the_imscJS_polyfill">Verwendung des imscJS-Polyfills</a></li>
          <li><a href="/de/docs/Related/IMSC/Styling">Styling von IMSC-Dokumenten</a></li>
          <li><a href="/de/docs/Related/IMSC/Subtitle_placement">Untertitel-Platzierung in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Namespaces">Namensräume in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Timing_in_IMSC">Timing in IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/Mapping_video_time_codes_to_IMSC">Abbildung von Video-Zeitcodes auf IMSC</a></li>
          <li><a href="/de/docs/Related/IMSC/IMSC_and_other_standards">IMSC und andere Standards</a></li>
        </ol>
      </details>
    </li>
  </ol>
</section>
