---
title: HTML-Spickzettel für Syntax und häufige Aufgaben
short-title: HTML cheatsheet
slug: Web/HTML/Guides/Cheatsheet
l10n:
  sourceCommit: 600382ef110a36643b1f94d9ea2ae4779f8978cd
---

{{HTMLSidebar}}

Beim Verwenden von {{Glossary("HTML", "HTML")}} kann es sehr hilfreich sein, eine einfache Möglichkeit zu haben, sich daran zu erinnern, wie man HTML-Tags richtig verwendet und anwendet. MDN bietet Ihnen eine umfassende [HTML-Referenzdokumentation](/de/docs/Web/HTML/Reference/Elements) sowie eine tiefgehende [Reihe von HTML-Leitfäden](/de/docs/Learn_web_development/Core/Structuring_content). In vielen Fällen benötigen wir jedoch nur einige schnelle Hinweise, während wir arbeiten. Das ist der gesamte Zweck des Spickzettels: Ihnen einige schnelle, genaue und einsatzbereite Codeausschnitte für gängige Verwendungen bereitzustellen.

> [!NOTE]
> HTML-Tags müssen für ihren semantischen Wert und nicht ihr Erscheinungsbild verwendet werden. Es ist immer möglich, das Erscheinungsbild eines gegebenen Tags mit {{Glossary("CSS", "CSS")}} vollständig zu ändern. Wenn Sie HTML verwenden, nehmen Sie sich also die Zeit, sich auf die Bedeutung und nicht auf das Aussehen zu konzentrieren.

## Inline-Elemente

Ein "Element" ist ein einzelner Teil einer Webseite. Einige Elemente sind groß und enthalten kleinere Elemente wie Container. Einige Elemente sind klein und "verschachtelt" in größeren. Standardmäßig erscheinen "Inline-Elemente" nebeneinander auf einer Webseite. Sie nehmen nur so viel Breite ein, wie sie auf einer Seite benötigen, und fügen sich horizontal wie Wörter in einem Satz oder Bücher, die nebeneinander in einem Regal stehen, zusammen. Alle Inline-Elemente können innerhalb des `<body>`-Elements platziert werden.

<table class="standard-table">
  <caption>Inline-Elemente: Verwendung und Beispiele</caption>
  <thead>
    <tr>
      <th scope="col">Verwendung</th>
      <th scope="col">Element</th>
      <th scope="col">Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ein Link</td>
      <td>{{HTMLElement("a")}}</td>
      <td id="a-example">
        <pre class="brush: html">
&#x3C;a href="https://example.org">
Ein Link zu example.org&#x3C;/a>.</pre
        >
        {{EmbedLiveSample("a-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Ein Bild</td>
      <td>{{HTMLElement("img")}}</td>
      <td id="img-example">
        <pre class="brush: html">&#x3C;img src="beast.png" width="50" /></pre>
        {{EmbedLiveSample("img-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Ein Inline-Container</td>
      <td>{{HTMLElement("span")}}</td>
      <td id="span-example">
        <pre class="brush: html">
Wird verwendet, um Elemente zu gruppieren: zum Beispiel, um sie &#x3C;span style="color:blue">zu stylen&#x3C;/span>.</pre
        >
        {{EmbedLiveSample("span-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Text hervorheben</td>
      <td>{{HTMLElement("em")}}</td>
      <td id="em-example">
        <pre class="brush: html">&#x3C;em>Ich bin kultiviert&#x3C;/em>.</pre>
        {{EmbedLiveSample("em-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Kursiver Text</td>
      <td>{{HTMLElement("i")}}</td>
      <td id="i-example">
        <pre class="brush: html">
Einen Satz in &#x3C;i>Kursivschrift&#x3C;/i> kennzeichnen.</pre
        >
        {{EmbedLiveSample("i-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Fetter Text</td>
      <td>{{HTMLElement("b")}}</td>
      <td id="b-example">
        <pre class="brush: html">Fett &#x3C;b>ein Wort oder einen Satz&#x3C;/b>.</pre>
        {{EmbedLiveSample("b-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Wichtiger Text</td>
      <td>{{HTMLElement("strong")}}</td>
      <td id="strong-example">
        <pre class="brush: html">&#x3C;strong>Ich bin wichtig!&#x3C;/strong></pre>
        {{EmbedLiveSample("strong-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Text hervorheben</td>
      <td>{{HTMLElement("mark")}}</td>
      <td id="mark-example">
        <pre class="brush: html">&#x3C;mark>Beachte mich!&#x3C;/mark></pre>
        {{EmbedLiveSample("mark-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Durchgestrichener Text</td>
      <td>{{HTMLElement("s")}}</td>
      <td id="s-example">
        <pre class="brush: html">&#x3C;s>Ich bin irrelevant.&#x3C;/s></pre>
        {{EmbedLiveSample("s-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Tiefgestellt</td>
      <td>{{HTMLElement("sub")}}</td>
      <td id="sub-example">
        <pre class="brush: html">H&#x3C;sub>2&#x3C;/sub>O</pre>
        {{EmbedLiveSample("sub-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Kleiner Text</td>
      <td>{{HTMLElement("small")}}</td>
      <td id="small-example">
        <pre class="brush: html">
Wird verwendet, um den &#x3C;small>Kleingedruckten
Druck&#x3C;/small> eines Dokuments darzustellen.</pre
        >
        {{EmbedLiveSample("small-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Adresse</td>
      <td>{{HTMLElement("address")}}</td>
      <td id="address-example">
        <pre class="brush: html">
&#x3C;address>Hauptstraße 67&#x3C;/address></pre
        >
        {{EmbedLiveSample("address-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Textzitat</td>
      <td>{{HTMLElement("cite")}}</td>
      <td id="cite-example">
        <pre class="brush: html">
Für weitere Monster, siehe &#x3C;cite>Das Monsterbuch der Monster&#x3C;/cite>.</pre
        >
        {{EmbedLiveSample("cite-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Hochgestellt</td>
      <td>{{HTMLElement("sup")}}</td>
      <td id="sup-example">
        <pre class="brush: html">x&#x3C;sup>2&#x3C;/sup></pre>
        {{EmbedLiveSample("sup-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Inline-Zitat</td>
      <td>{{HTMLElement("q")}}</td>
      <td id="q-example">
        <pre class="brush: html">&#x3C;q>Ich?&#x3C;/q>, sagte sie.</pre>
        {{EmbedLiveSample("q-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Ein Zeilenumbruch</td>
      <td>{{HTMLElement("br")}}</td>
      <td id="br-example">
        <pre class="brush: html">Zeile 1&#x3C;br>Zeile 2</pre>
        {{EmbedLiveSample("br-example", 100, 80)}}
      </td>
    </tr>
    <tr>
      <td>Ein möglicher Zeilenumbruch</td>
      <td>{{HTMLElement("wbr")}}</td>
      <td id="wbr-example">
        <pre class="brush: html">
&#x3C;div style="width: 200px">
  Llanfair&#x3C;wbr>pwllgwyngyll&#x3C;wbr>gogerychwyrndrobwllllantysiliogogogoch.
&#x3C;/div></pre
        >
        {{EmbedLiveSample("wbr-example", 100, 80)}}
      </td>
    </tr>
    <tr>
      <td>Datum</td>
      <td>{{HTMLElement("time")}}</td>
      <td id="time-example">
        <pre class="brush: html">
Wird verwendet, um das Datum zu formatieren. Zum Beispiel:
&#x3C;time datetime="2020-05-24">
veröffentlicht am 23-05-2020&#x3C;/time>.</pre
        >
        {{EmbedLiveSample("time-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Codeformat</td>
      <td>{{HTMLElement("code")}}</td>
      <td id="code-example">
        <pre class="brush: html">
Dieser Text ist im normalen Format,
aber &#x3C;code>dieser Text ist im Codeformat
&#x3C;/code>.</pre
        >
        {{EmbedLiveSample("code-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Audio</td>
      <td>{{HTMLElement("audio")}}</td>
      <td id="audio-example">
        <pre class="brush: html">
&#x3C;audio controls>
  &#x3C;source src="/shared-assets/audio/t-rex-roar.mp3" type="audio/mpeg">
&#x3C;/audio>
        </pre>
        {{EmbedLiveSample("audio-example", 100, 80)}}
      </td>
    </tr>
    <tr>
      <td>Video</td>
      <td>{{HTMLElement("video")}}</td>
      <td id="video-example">
        <pre class="brush: html">
&#x3C;video controls width="250"
  src="/shared-assets/videos/flower.webm" >
  &#x3C;a href="/shared-assets/videos/flower.webm">WebM-Video downloaden&#x3C;/a>
&#x3C;/video></pre
        >
        {{EmbedLiveSample("video-example", 100, 200)}}
      </td>
    </tr>
  </tbody>
</table>

## Block-Elemente

"Block-Elemente" hingegen nehmen die gesamte Breite einer Webseite ein. Sie beanspruchen auch eine vollständige Zeile einer Webseite und passen nicht nebeneinander. Stattdessen stapeln sie sich wie Absätze in einem Aufsatz oder Bauklötze in einem Turm.

> [!NOTE]
> Da dieser Spickzettel auf einige Elemente beschränkt ist, die spezifische Strukturen darstellen oder besondere Semantiken haben, wird das [`div`](/de/docs/Web/HTML/Reference/Elements/div)-Element bewusst nicht aufgenommen – da das `div`-Element nichts darstellt und keine besonderen Semantiken hat.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Verwendung</th>
      <th scope="col">Element</th>
      <th scope="col">Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ein einfacher Absatz</td>
      <td>{{HTMLElement("p")}}</td>
      <td id="p-example">
        <pre class="brush: html">
&#x3C;p>Ich bin ein Absatz&#x3C;/p>
&#x3C;p>Ich bin ein weiterer Absatz&#x3C;/p></pre
        >
        {{EmbedLiveSample("p-example", 100, 150)}}
      </td>
    </tr>
    <tr>
      <td>Ein erweitertes Zitat</td>
      <td>{{HTMLElement("blockquote")}}</td>
      <td id="blockquote-example">
        <pre class="brush: html">
Sie sagten:
&#x3C;blockquote>Das Blockzitat-Element kennzeichnet
ein erweitertes Zitat.&#x3C;/blockquote></pre
        >
        {{EmbedLiveSample("blockquote-example", 100, 100)}}
      </td>
    </tr>
    <tr>
      <td>Zusätzliche Informationen</td>
      <td>{{HTMLElement("details")}}</td>
      <td id="details-example">
        <pre class="brush: html">
&#x3C;details>
  &#x3C;summary>HTML-Spickzettel&#x3C;/summary>
  &#x3C;p>Inline-Elemente&#x3C;/p>
  &#x3C;p>Block-Elemente&#x3C;/p>
&#x3C;/details></pre
        >
        {{EmbedLiveSample("details-example", 100, 150)}}
      </td>
    </tr>
    <tr>
      <td>Eine ungeordnete Liste</td>
      <td>{{HTMLElement("ul")}}</td>
      <td id="ul-example">
        <pre class="brush: html">&#x3C;ul>
  &#x3C;li>Ich bin ein Element&#x3C;/li>
  &#x3C;li>Ich bin ein weiteres Element&#x3C;/li>
&#x3C;/ul></pre>
        {{EmbedLiveSample("ul-example", 100, 100)}}
      </td>
    </tr>
    <tr>
      <td>Eine geordnete Liste</td>
      <td>{{HTMLElement("ol")}}</td>
      <td id="ol-example">
        <pre class="brush: html">&#x3C;ol>
  &#x3C;li>Ich bin das erste Element&#x3C;/li>
  &#x3C;li>Ich bin das zweite Element&#x3C;/li>
&#x3C;/ol></pre>
        {{EmbedLiveSample("ol-example", 100, 100)}}
      </td>
    </tr>
    <tr>
      <td>Eine Definitionsliste</td>
      <td>{{HTMLElement("dl")}}</td>
      <td id="dl-example">
        <pre class="brush: html">&#x3C;dl>
  &#x3C;dt>Ein Begriff&#x3C;/dt>
  &#x3C;dd>Definition eines Begriffs&#x3C;/dd>
  &#x3C;dt>Ein weiterer Begriff&#x3C;/dt>
  &#x3C;dd>Definition eines weiteren Begriffs&#x3C;/dd>
&#x3C;/dl></pre>
        {{EmbedLiveSample("dl-example", 100, 150)}}
      </td>
    </tr>
    <tr>
      <td>Eine horizontale Linie</td>
      <td>{{HTMLElement("hr")}}</td>
      <td id="hr-example">
        <pre class="brush: html">vorher&#x3C;hr>nachher</pre>
        {{EmbedLiveSample("hr-example", 100, 100)}}
      </td>
    </tr>
    <tr>
      <td>Textüberschrift</td>
      <td>
        {{HTMLElement("Heading_Elements", "&lt;h1&gt;-&lt;h6&gt;")}}
      </td>
      <td id="h1-h6-example">
        <pre class="brush: html">
&#x3C;h1> Das ist Überschrift 1 &#x3C;/h1>
&#x3C;h2> Das ist Überschrift 2 &#x3C;/h2>
&#x3C;h3> Das ist Überschrift 3 &#x3C;/h3>
&#x3C;h4> Das ist Überschrift 4 &#x3C;/h4>
&#x3C;h5> Das ist Überschrift 5 &#x3C;/h5>
&#x3C;h6> Das ist Überschrift 6 &#x3C;/h6></pre
        >
        {{EmbedLiveSample("h1-h6-example", 100, 350)}}
      </td>
    </tr>
  </tbody>
</table>
