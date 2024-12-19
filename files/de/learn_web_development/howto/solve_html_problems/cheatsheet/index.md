---
title: HTML-Spickzettel
slug: Learn_web_development/Howto/Solve_HTML_problems/Cheatsheet
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Beim Verwenden von {{Glossary("HTML", "HTML")}} kann es sehr hilfreich sein, eine einfache Möglichkeit zu haben, sich daran zu erinnern, wie HTML-Tags richtig verwendet werden und wie man sie anwendet. MDN bietet Ihnen umfangreiche [HTML-Referenzdokumentation](/de/docs/Web/HTML/Element) sowie eine tiefgehende instruktive [Reihe von HTML-Leitfäden](/de/docs/Learn_web_development/Core/Structuring_content). In vielen Fällen benötigen wir jedoch nur ein paar schnelle Hinweise. Genau dafür ist der Spickzettel gedacht: Ihnen schnell genaue und gebrauchsfertige Code-Snippets für häufige Anwendungen bereitzustellen.

> [!NOTE]
> HTML-Tags müssen für ihren semantischen Wert verwendet werden, nicht für ihr Aussehen. Es ist immer möglich, das Aussehen eines gegebenen Tags mithilfe von {{Glossary("CSS", "CSS")}} vollständig zu ändern. Konzentrieren Sie sich daher bei der Verwendung von HTML auf die Bedeutung und nicht auf das Aussehen.

## Inline-Elemente

Ein "Element" ist ein einzelner Bestandteil einer Webseite. Manche Elemente sind groß und enthalten kleinere Elemente wie Container. Einige Elemente sind klein und sind in größere Elemente "eingebettet". Standardmäßig erscheinen "Inline-Elemente" nebeneinander auf einer Webseite. Sie nehmen nur so viel Breite ein, wie sie benötigen, und passen sich horizontal wie Wörter in einem Satz oder Bücher, die in einer Reihe nebeneinander gestellt sind, zusammen. Alle Inline-Elemente können innerhalb des `<body>`-Elements platziert werden.

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
A link to example.org&#x3C;/a>.</pre
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
Used to group elements: for example,
to &#x3C;span style="color:blue">style
them&#x3C;/span>.</pre
        >
        {{EmbedLiveSample("span-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Text hervorheben</td>
      <td>{{HTMLElement("em")}}</td>
      <td id="em-example">
        <pre class="brush: html">&#x3C;em>I'm posh&#x3C;/em>.</pre>
        {{EmbedLiveSample("em-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Kursiver Text</td>
      <td>{{HTMLElement("i")}}</td>
      <td id="i-example">
        <pre class="brush: html">
Mark a phrase in &#x3C;i>italics&#x3C;/i>.</pre
        >
        {{EmbedLiveSample("i-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Fetter Text</td>
      <td>{{HTMLElement("b")}}</td>
      <td id="b-example">
        <pre class="brush: html">Bold &#x3C;b>a word or phrase&#x3C;/b>.</pre>
        {{EmbedLiveSample("b-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Wichtiger Text</td>
      <td>{{HTMLElement("strong")}}</td>
      <td id="strong-example">
        <pre class="brush: html">&#x3C;strong>I'm important!&#x3C;/strong></pre>
        {{EmbedLiveSample("strong-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Text hervorheben</td>
      <td>{{HTMLElement("mark")}}</td>
      <td id="mark-example">
        <pre class="brush: html">&#x3C;mark>Notice me!&#x3C;/mark></pre>
        {{EmbedLiveSample("mark-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Durchgestrichener Text</td>
      <td>{{HTMLElement("s")}}</td>
      <td id="s-example">
        <pre class="brush: html">&#x3C;s>I'm irrelevant.&#x3C;/s></pre>
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
Used to represent the &#x3C;small>small
print &#x3C;/small>of a document.</pre
        >
        {{EmbedLiveSample("small-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Adresse</td>
      <td>{{HTMLElement("address")}}</td>
      <td id="address-example">
        <pre class="brush: html">
&#x3C;address>Main street 67&#x3C;/address></pre
        >
        {{EmbedLiveSample("address-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Textzitat</td>
      <td>{{HTMLElement("cite")}}</td>
      <td id="cite-example">
        <pre class="brush: html">
For more monsters,
see &#x3C;cite>The Monster Book of Monsters&#x3C;/cite>.</pre
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
        <pre class="brush: html">&#x3C;q>Me?&#x3C;/q>, she said.</pre>
        {{EmbedLiveSample("q-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Ein Zeilenumbruch</td>
      <td>{{HTMLElement("br")}}</td>
      <td id="br-example">
        <pre class="brush: html">Line 1&#x3C;br>Line 2</pre>
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
Used to format the date. For example:
&#x3C;time datetime="2020-05-24">
published on 23-05-2020&#x3C;/time>.</pre
        >
        {{EmbedLiveSample("time-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Code-Format</td>
      <td>{{HTMLElement("code")}}</td>
      <td id="code-example">
        <pre class="brush: html">
This text is in normal format,
but &#x3C;code>this text is in code
format&#x3C;/code>.</pre
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
  &#x3C;source src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3" type="audio/mpeg">
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
  src="https://archive.org/download/ElephantsDream/ed_hd.ogv" >
  &#x3C;a href="https://archive.org/download/ElephantsDream/ed_hd.ogv">Download OGV video&#x3C;/a>
&#x3C;/video></pre
        >
        {{EmbedLiveSample("video-example", 100, 200)}}
      </td>
    </tr>
  </tbody>
</table>

## Block-Elemente

"Block-Elemente" hingegen nehmen die gesamte Breite einer Webseite ein. Sie belegen auch eine vollständige Zeile auf einer Webseite; sie passen nicht nebeneinander. Stattdessen stapeln sie sich wie Absätze in einem Aufsatz oder Bauklötze in einem Turm.

> [!NOTE]
> Da sich dieser Spickzettel auf einige Elemente beschränkt, die bestimmte Strukturen darstellen oder spezielle Semantik haben, ist das [`div`](/de/docs/Web/HTML/Element/div)-Element absichtlich nicht enthalten, da das `div`-Element nichts darstellt und keine spezielle Semantik hat.

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
&#x3C;p>I'm a paragraph&#x3C;/p>
&#x3C;p>I'm another paragraph&#x3C;/p></pre
        >
        {{EmbedLiveSample("p-example", 100, 150)}}
      </td>
    </tr>
    <tr>
      <td>Ein erweitertes Zitat</td>
      <td>{{HTMLElement("blockquote")}}</td>
      <td id="blockquote-example">
        <pre class="brush: html">
They said:
&#x3C;blockquote>The blockquote element indicates
an extended quotation.&#x3C;/blockquote></pre
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
  &#x3C;summary>HTML Cheat Sheet&#x3C;/summary>
  &#x3C;p>Inline elements&#x3C;/p>
  &#x3C;p>Block elements&#x3C;/p>
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
  &#x3C;li>I'm an item&#x3C;/li>
  &#x3C;li>I'm another item&#x3C;/li>
&#x3C;/ul></pre>
        {{EmbedLiveSample("ul-example", 100, 100)}}
      </td>
    </tr>
    <tr>
      <td>Eine geordnete Liste</td>
      <td>{{HTMLElement("ol")}}</td>
      <td id="ol-example">
        <pre class="brush: html">&#x3C;ol>
  &#x3C;li>I'm the first item&#x3C;/li>
  &#x3C;li>I'm the second item&#x3C;/li>
&#x3C;/ol></pre>
        {{EmbedLiveSample("ol-example", 100, 100)}}
      </td>
    </tr>
    <tr>
      <td>Eine Definitionsliste</td>
      <td>{{HTMLElement("dl")}}</td>
      <td id="dl-example">
        <pre class="brush: html">&#x3C;dl>
  &#x3C;dt>A Term&#x3C;/dt>
  &#x3C;dd>Definition of a term&#x3C;/dd>
  &#x3C;dt>Another Term&#x3C;/dt>
  &#x3C;dd>Definition of another term&#x3C;/dd>
&#x3C;/dl></pre>
        {{EmbedLiveSample("dl-example", 100, 150)}}
      </td>
    </tr>
    <tr>
      <td>Ein horizontaler Strich</td>
      <td>{{HTMLElement("hr")}}</td>
      <td id="hr-example">
        <pre class="brush: html">before&#x3C;hr>after</pre>
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
&#x3C;h1> This is Heading 1 &#x3C;/h1>
&#x3C;h2> This is Heading 2 &#x3C;/h2>
&#x3C;h3> This is Heading 3 &#x3C;/h3>
&#x3C;h4> This is Heading 4 &#x3C;/h4>
&#x3C;h5> This is Heading 5 &#x3C;/h5>
&#x3C;h6> This is Heading 6 &#x3C;/h6></pre
        >
        {{EmbedLiveSample("h1-h6-example", 100, 350)}}
      </td>
    </tr>
  </tbody>
</table>
