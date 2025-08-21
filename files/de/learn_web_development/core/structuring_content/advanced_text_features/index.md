---
title: Erweiterte Textmerkmale
slug: Learn_web_development/Core/Structuring_content/Advanced_text_features
l10n:
  sourceCommit: 27f34d8b137f9bb2b467f9f9a1c4e1d04e12ed89
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text", "Learn_web_development/Core/Structuring_content")}}

Es gibt viele weitere Elemente in HTML zur Definition von Textsemantik, die wir im Artikel [Betonung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance) nicht behandelt haben. Die in diesem Artikel beschriebenen Elemente sind weniger bekannt, aber dennoch nützlich zu kennen (und dies ist keineswegs eine vollständige Liste). Hier lernen Sie, wie man Zitate, Computercode und andere verwandte Texte, Tief- und Hochstellungen, Kontaktdaten und mehr auszeichnet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt. Textsemantik auf Ebene wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >Überschriften und Absätze</a
        > und <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists"
          >Listen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Zitate.</li>
          <li>Abkürzungen und Akronyme.</li>
          <li>Adressen.</li>
          <li>Zeitangaben und Daten.</li>
          <li>Hoch- und Tiefstellung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Zitate

HTML enthält Werkzeuge für die Auszeichnung von Zitaten; welches Element Sie verwenden, hängt davon ab, ob Sie ein Block- oder Inline-Zitat auszeichnen.

### Blockzitate

Wenn ein Abschnitt von Blockinhalt (sei es ein Absatz, mehrere Absätze, eine Liste usw.) von anderswo zitiert wird, sollten Sie ihn in ein {{htmlelement("blockquote")}}-Element einfügen, um dies anzuzeigen, und eine URL, die auf die Quelle des Zitats verweist, in einem [`cite`](/de/docs/Web/HTML/Reference/Elements/blockquote#cite)-Attribut angeben. Zum Beispiel ist das folgende Markup von der MDN-Seite zum `<blockquote>`-Element entnommen:

```html
<p>
  The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
  <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an
  extended quotation.
</p>
```

Um das in ein Blockzitat zu verwandeln, würden wir einfach so vorgehen:

```html
<p>Here is a blockquote:</p>
<blockquote
  cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>
```

Die Standardeinstellung des Browsers wird dies als eingerückten Absatz darstellen, als Hinweis darauf, dass es sich um ein Zitat handelt; der Absatz über dem Zitat dient dazu, das zu demonstrieren.

{{EmbedLiveSample('Blockquotes', '100%', '200px')}}

### Inline-Zitate

Inline-Zitate funktionieren genauso, verwenden jedoch das {{htmlelement("q")}}-Element. Zum Beispiel enthält der folgende Markup-Abschnitt ein Zitat von der MDN-Seite zum `<q>`-Element:

```html
<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q
    cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/q">
    intended for short quotations that don't require paragraph breaks.
  </q>
</p>
```

Die Standardeinstellung des Browsers wird dies als normalen Text in Anführungszeichen darstellen, um ein Zitat anzuzeigen, so wie hier:

{{EmbedLiveSample('Inline_quotations', '100%', '78px')}}

### Zitate

Der Inhalt des [`cite`](/de/docs/Web/HTML/Reference/Elements/blockquote#cite)-Attributs klingt nützlich, aber leider machen Browser, Screenreader usw. nicht viel damit. Es gibt keine Möglichkeit, den Browser dazu zu bringen, den Inhalt von `cite` anzuzeigen, ohne eine eigene Lösung mit JavaScript oder CSS zu schreiben. Wenn Sie die Quelle des Zitats auf der Seite verfügbar machen möchten, müssen Sie sie über einen Link oder eine andere geeignete Methode im Text verfügbar machen.

Es gibt ein {{htmlelement("cite")}}-Element, das jedoch zur Aufnahme des Titels der zitierten Ressource gedacht ist, z. B. den Namen eines Buches. Es gibt jedoch keinen Grund, warum Sie den Text innerhalb von `<cite>` nicht auf irgendeine Weise mit der Zitatquelle verlinken könnten:

```html-nolint
<p>
  According to the
  <a href="/en-US/docs/Web/HTML/Reference/Elements/blockquote">
    <cite>MDN blockquote page</cite></a>:
</p>

<blockquote
  cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>

<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/q">
    intended for short quotations that don't require paragraph breaks.
  </q>
  — <a href="/en-US/docs/Web/HTML/Reference/Elements/q"><cite>MDN q page</cite></a>.
</p>
```

Zitate werden standardmäßig in kursiver Schrift angezeigt.

{{EmbedLiveSample('Citations', '100%', '179px')}}

### Wer hat das gesagt? Blockquote-Übung

Zeit für eine weitere Aufgabe! In diesem Beispiel möchten wir, dass Sie:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Verwandeln Sie den mittleren Absatz in ein Blockquote, das ein `cite`-Attribut enthält.
3. Verwandeln Sie "The Need To Eliminate Negative Self Talk" im dritten Absatz in ein Inline-Zitat und fügen Sie ein `cite`-Attribut hinzu.
4. Umwickeln Sie den Titel jeder Quelle mit `<cite>`-Tags und verwandeln Sie jede in einen Link zu dieser Quelle.

Die benötigten Quellen sind:

- `http://www.brainyquote.com/quotes/authors/c/confucius.html` für das Zitat von Konfuzius
- `http://example.com/affirmationsforpositivethinking` für "The Need To Eliminate Negative Self Talk".

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unter dem Codeblock ansehen.

```html live-sample___advanced-text-1
<p>Hello and welcome to my motivation page. As Confucius' quotes site says:</p>
<p>It does not matter how slowly you go as long as you do not stop.</p>
<p>
  I also love the concept of positive thinking, and The Need To Eliminate
  Negative Self Talk (as mentioned in Affirmations for Positive Thinking.)
</p>
```

{{ EmbedLiveSample('advanced-text-1', "100%", 200) }}

<details>
<summary>Hier klicken, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

```html
<p>
  Hello and welcome to my motivation page. As
  <a href="http://www.brainyquote.com/quotes/authors/c/confucius.html"
    ><cite>Confucius' quotes site</cite></a
  >
  says:
</p>

<blockquote cite="http://www.brainyquote.com/quotes/authors/c/confucius.html">
  <p>It does not matter how slowly you go as long as you do not stop.</p>
</blockquote>

<p>
  I also love the concept of positive thinking, and
  <q cite="http://example.com/affirmationsforpositivethinking"
    >The Need To Eliminate Negative Self Talk</q
  >
  (as mentioned in
  <a href="http://example.com/affirmationsforpositivethinking"
    ><cite>Affirmations for Positive Thinking</cite></a
  >.)
</p>
```

</details>

## Abkürzungen

Ein weiteres recht häufiges Element, das Ihnen beim Surfen im Web begegnen wird, ist {{htmlelement("abbr")}} — dies wird verwendet, um eine Abkürzung oder ein Akronym zu kennzeichnen. Bei der Verwendung geben Sie bei der ersten Erwähnung eine vollständige Entfaltung des Begriffs im Klartext an, zusammen mit dem `<abbr>`, um die Abkürzung hervorzuheben. Dies gibt den Benutzeragenten einen Hinweis darauf, wie der Inhalt angekündigt/dargestellt werden soll, während es alle Benutzer über die Bedeutung der Abkürzung informiert.

Wenn die Entfaltung zusätzlich zur Abkürzung wenig Sinn ergibt und die Abkürzung oder das Akronym ein kaum verkürzter Begriff ist, geben Sie die vollständige Entfaltung des Begriffs als Wert des [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attributs an:

### Beispiel für Abkürzungen

Sehen wir uns ein Beispiel an.

```html
<p>
  We use <abbr>HTML</abbr>, Hypertext Markup Language, to structure our web
  documents.
</p>

<p>
  I think <abbr title="Reverend">Rev.</abbr> Green did it in the kitchen with
  the chainsaw.
</p>
```

Diese werden wie folgt dargestellt:

{{EmbedLiveSample('Abbreviation_example', '100%', '90')}}

> [!NOTE]
> Frühere Versionen von HTML unterstützten auch das {{htmlelement("acronym")}}-Element, aber es wurde aus der HTML-Spezifikation entfernt, um `<abbr>` sowohl für Abkürzungen als auch für Akronyme zu verwenden. `<acronym>` sollte nicht verwendet werden.

### Lassen Sie uns eine Abkürzung auszeichnen

Für diese Lernaufgabe möchten wir, dass Sie eine Abkürzung markieren.

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Markieren Sie die enthaltenen Abkürzungen mit geeignetem HTML. Sie können sie auch durch eine eigene ersetzen und versuchen, diese stattdessen zu markieren.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unter dem Codeblock ansehen.

```html-nolint live-sample___advanced-text-2
<p>NASA sure does some exciting work.</p>

<p>The new user interface design LGTM!</p>
```

{{ EmbedLiveSample('advanced-text-2', "100%", 90) }}

<details>
<summary>Hier klicken, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte in etwa wie der folgende Codeausschnitt aussehen:

```html
<p>
  <abbr>NASA</abbr> (the National Aeronautics and Space Administration) sure
  does some exciting work.
</p>

<p>The new user interface design <abbr title="Looks good to me">LGTM</abbr>!</p>
```

- Man könnte argumentieren, dass NASA beim ersten Erwähnen im Text ausgeschrieben werden sollte, da es eine nützliche Information ist, die im Text verfügbar sein sollte.
- Akronyme wie "LGTM" hingegen sind rein dazu da, Platz und Zeit zu sparen, daher würde es keinen Sinn ergeben, es auch auszuschreiben, weshalb die Entfaltung im `title`-Attribut erfolgt. In einer realen Anwendung würden Sie dies wahrscheinlich nicht von Hand tun — Sie würden eine Art Skript verwenden, um es für bekannte Begriffe automatisch hinzuzufügen.

</details>

## Kontaktdaten auszeichnen

HTML hat ein Element zur Auszeichnung von Kontaktdaten — {{htmlelement("address")}}. Dies umschließt Ihre Kontaktdaten, zum Beispiel:

```html
<address>Chris Mills, Manchester, The Grim North, UK</address>
```

Es könnte auch eine komplexere Auszeichnung und andere Arten von Kontaktinformationen beinhalten, zum Beispiel:

```html
<address>
  <p>
    Chris Mills<br />
    Manchester<br />
    The Grim North<br />
    UK
  </p>

  <ul>
    <li>Tel: 01234 567 890</li>
    <li>Email: me@grim-north.co.uk</li>
  </ul>
</address>
```

Beachten Sie, dass so etwas auch in Ordnung wäre, wenn die verlinkte Seite die Kontaktdaten enthält:

```html
<address>
  Page written by <a href="../authors/chris-mills/">Chris Mills</a>.
</address>
```

> [!NOTE]
> Das {{htmlelement("address")}}-Element sollte nur verwendet werden, um Kontaktinformationen für das Dokument bereitzustellen, das vom nächsten {{htmlelement("article")}}- oder {{htmlelement("body")}}-Element enthalten ist. Es wäre korrekt, es im Footer einer Website zu verwenden, um die Kontaktdaten der gesamten Site einzuschließen, oder innerhalb eines Artikels für die Kontaktdaten des Autors, aber nicht, um eine Liste von Adressen zu markieren, die nicht mit dem Inhalt dieser Seite zu tun haben.

## Hoch- und Tiefstellung

Gelegentlich müssen Sie Hoch- und Tiefstellungen verwenden, um Elemente wie Daten, chemische Formeln und mathematische Gleichungen so auszuzeichnen, dass sie die richtige Bedeutung haben. Die Elemente {{htmlelement("sup")}} und {{htmlelement("sub")}} übernehmen diese Aufgabe. Zum Beispiel:

```html
<p>My birthday is on the 25<sup>th</sup> of May 2001.</p>
<p>
  Caffeine's chemical formula is
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
</p>
<p>If x<sup>2</sup> is 9, x must equal 3 or -3.</p>
```

Die Ausgabe dieses Codes sieht so aus:

{{ EmbedLiveSample('Superscript_and_subscript', '100%', 160) }}

## Computercode darstellen

Es gibt eine Reihe von Elementen, die zur Auszeichnung von Computercode mit HTML zur Verfügung stehen:

- {{htmlelement("code")}}: Zur Auszeichnung allgemeiner Stücke von Computercode.
- {{htmlelement("pre")}}: Zur Beibehaltung von Leerzeichen (im Allgemeinen Codeblöcken) — wenn Sie Einrückungen oder übermäßige Leerzeichen in Ihrem Text verwenden, ignorieren Browser diese und Sie werden sie nicht auf Ihrer gerenderten Seite sehen. Wenn Sie den Text jedoch in `<pre></pre>`-Tags einfügen, werden Ihre Leerzeichen identisch zu dem dargestellt, was Sie in Ihrem Texteditor sehen.
- {{htmlelement("var")}}: Zur spezifischen Auszeichnung von Variablennamen.
- {{htmlelement("kbd")}}: Zur Auszeichnung von Tastatur- (und anderen Arten von) Eingaben, die in den Computer eingegeben wurden.
- {{htmlelement("samp")}}: Zur Auszeichnung der Ausgabe eines Computerprogramms.

Sehen wir uns Beispiele für diese Elemente an und wie sie verwendet werden, um Computercode darzustellen. Wenn Sie die vollständige Datei sehen möchten, werfen Sie einen Blick auf die [other-semantics.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/advanced-text-formatting/other-semantics.html)-Beispieldatei. Sie können die Datei herunterladen und in Ihrem Browser öffnen, um es selbst zu sehen, aber hier ist ein Ausschnitt des Codes:

```html
<pre><code>const para = document.querySelector('p');

para.onclick = function() {
  alert('Owww, stop poking me!');
}</code></pre>

<p>
  You shouldn't use presentational elements like <code>&lt;font&gt;</code> and
  <code>&lt;center&gt;</code>.
</p>

<p>
  In the above JavaScript example, <var>para</var> represents a paragraph
  element.
</p>

<p>Select all the text with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
```

Der obige Code wird wie folgt aussehen:

{{ EmbedLiveSample('Representing_computer_code','100%',350) }}

## Zeiten und Daten auszeichnen

HTML stellt auch das {{htmlelement("time")}}-Element zur Verfügung, um Zeiten und Daten in einem maschinenlesbaren Format auszuzeichnen. Zum Beispiel:

```html
<time datetime="2016-01-20">20 January 2016</time>
```

Warum ist das nützlich? Nun, es gibt viele verschiedene Arten, wie Menschen Daten aufschreiben. Das obige Datum könnte so geschrieben werden:

<!-- markdownlint-disable MD033 -->

- 20\. Januar 2016
- 20\. Januar 2016
- Jan 20 2016
- 20/01/16
- 01/20/16
- Der 20. des nächsten Monats
- <span lang="fr">20e Janvier 2016</span>
- <span lang="ja">2016 年 1 月 20 日</span>
- Und so weiter.

<!-- markdownlint-enable MD033 -->

Diese unterschiedlichen Formen können jedoch nicht einfach von Computern erkannt werden — was wäre, wenn Sie automatisch die Daten aller Ereignisse auf einer Seite erfassen und in einen Kalender einfügen möchten? Das {{htmlelement("time")}}-Element ermöglicht es Ihnen, ein eindeutiges, maschinenlesbares Datum/Zeit für diesen Zweck anzuhängen.

Das einfache Beispiel oben bietet nur ein einfaches, maschinenlesbares Datum, aber es gibt viele andere mögliche Optionen, zum Beispiel:

```html
<!-- Standard simple date -->
<time datetime="2016-01-20">20 January 2016</time>
<!-- Just year and month -->
<time datetime="2016-01">January 2016</time>
<!-- Just month and day -->
<time datetime="01-20">20 January</time>
<!-- Just time, hours and minutes -->
<time datetime="19:30">19:30</time>
<!-- You can do seconds and milliseconds too! -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- Date and time -->
<time datetime="2016-01-20T19:30">7.30pm, 20 January 2016</time>
<!-- Date and time with timezone offset -->
<time datetime="2016-01-20T19:30+01:00">
  7.30pm, 20 January 2016 is 8.30pm in France
</time>
<!-- Calling out a specific week number -->
<time datetime="2016-W04">The fourth week of 2016</time>
```

## Zusammenfassung

Damit endet unser Studium der weniger bekannten HTML-Textsemantik. Was Sie in diesem Kurs gesehen haben, ist keine vollständige Liste von HTML-Text-Elementen — wir wollten die wesentlichen und einige der häufigeren, die Sie in der Praxis sehen werden, behandeln.

Als Nächstes werden wir Ihnen einige Tests zur Verfügung stellen, mit denen Sie überprüfen können, wie gut Sie die Informationen zu weniger häufig verwendeten HTML-Textfunktionen verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text", "Learn_web_development/Core/Structuring_content")}}
