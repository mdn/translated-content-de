---
title: Erweiterte Textfunktionen
slug: Learn_web_development/Core/Structuring_content/Advanced_text_features
l10n:
  sourceCommit: 918980658f51fb35915afe39ad3b31934276fea3
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content")}}

Es gibt viele andere Elemente in HTML zur Definition von Textsemantik, die wir im Artikel [Hervorhebung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance) nicht behandelt haben. Die in diesem Artikel beschriebenen Elemente sind weniger bekannt, aber dennoch nützlich zu wissen (und dies ist immer noch keine vollständige Liste). Hier lernen Sie das Markieren von Zitaten, Computercode und anderen verwandten Texten, Tief- und Hochstellen, Kontaktinformationen und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textsemantik auf Textebene wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Zeit- und Datumsangaben.</li>
          <li>Hoch- und Tiefstellen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Zitate

HTML enthält Funktionen zum Markieren von Zitaten; welches Element Sie verwenden, hängt davon ab, ob Sie ein Block- oder Inline-Zitat markieren.

### Blockzitate

Wenn ein Abschnitt auf Blockebene (sei es ein Absatz, mehrere Absätze, eine Liste usw.) von einer anderen Quelle zitiert wird, sollten Sie ihn in ein {{htmlelement("blockquote")}}-Element einfügen, um dies zu kennzeichnen, und eine URL, die auf die Quelle des Zitats verweist, in einem [`cite`](/de/docs/Web/HTML/Reference/Elements/blockquote#cite)-Attribut angeben. Zum Beispiel stammt das folgende Markup von der MDN-Seite zum `<blockquote>`-Element:

```html
<p>
  The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
  <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an
  extended quotation.
</p>
```

Um dies in ein Blockzitat zu verwandeln, würden wir einfach das tun:

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

Die Standard-Browserformatierung stellt dies als eingerückten Absatz dar, um anzuzeigen, dass es sich um ein Zitat handelt; der Absatz über dem Zitat ist dort, um dies zu demonstrieren.

{{EmbedLiveSample('Blockquotes', '100%', '200px')}}

### Inline-Zitate

Inline-Zitate funktionieren genau wie Blockzitate, außer dass sie das {{htmlelement("q")}}-Element verwenden. Zum Beispiel enthält das folgende kleine Markup ein Zitat von der MDN-Seite zum `<q>`-Element:

```html
<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q
    cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/q">
    intended for short quotations that don't require paragraph breaks.
  </q>
</p>
```

Die Standard-Browserformatierung stellt dies als normalen Text dar, der zur Kennzeichnung eines Zitats in Anführungszeichen gesetzt wird, etwa so:

{{EmbedLiveSample('Inline_quotations', '100%', '78px')}}

### Zitationen

Der Inhalt des [`cite`](/de/docs/Web/HTML/Reference/Elements/blockquote#cite)-Attributs klingt nützlich, aber leider machen Browser, Screenreader usw. nicht wirklich viel damit. Es gibt keine Möglichkeit, den Browser dazu zu bringen, den Inhalt von `cite` anzuzeigen, ohne eine eigene Lösung mit JavaScript oder CSS zu schreiben. Wenn Sie die Quelle des Zitats auf der Seite verfügbar machen möchten, müssen Sie es im Text über einen Link oder eine andere geeignete Weise verfügbar machen.

Es gibt ein {{htmlelement("cite")}}-Element, das ist jedoch dafür gedacht, den Titel der Quelle zu enthalten, die zitiert wird, z. B. den Namen des Buches. Es gibt jedoch keinen Grund, warum Sie den Text innerhalb von `<cite>` nicht auf die Quote-Quelle in irgendeiner Weise verlinken könnten:

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

Zitationen sind standardmäßig in kursiver Schriftart formatiert.

{{EmbedLiveSample('Citations', '100%', '179px')}}

### Wer hat das gesagt? Übung zu Blockzitat

Zeit für eine weitere Aufgabe! In diesem Beispiel möchten wir, dass Sie:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Verwandeln Sie den mittleren Absatz in ein Blockzitat, das ein `cite`-Attribut enthält.
3. Verwandeln Sie "The Need To Eliminate Negative Self Talk" im dritten Absatz in ein Inline-Zitat und fügen Sie ein `cite`-Attribut hinzu.
4. Umgeben Sie den Titel jeder Quelle mit `<cite>`-Tags und verwandeln Sie jeden in einen Link zu dieser Quelle.

Die erforderlichen Zitationsquellen sind:

- `http://www.brainyquote.com/quotes/authors/c/confucius.html` für das Konfuzius-Zitat
- `http://example.com/affirmationsforpositivethinking` für "The Need To Eliminate Negative Self Talk".

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter dem Codeblock anzeigen.

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
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiger HTML-Code sollte so aussehen:

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

Ein weiteres relativ häufiges Element, das Sie beim Surfen im Web antreffen werden, ist {{htmlelement("abbr")}} — dies wird verwendet, um eine Abkürzung oder ein Akronym zu umschließen. Wenn Sie eines einschließen, geben Sie bei der ersten Verwendung eine vollständige Erweiterung des Begriffs im Klartext sowie die `<abbr>`-Markierung der Abkürzung an. Dies gibt Benutzeragenten einen Hinweis, wie der Inhalt angekündigt/angezeigt werden soll, während allen Benutzern mitgeteilt wird, was die Abkürzung bedeutet.

Wenn es wenig Sinn macht, die Erweiterung zusätzlich zur Abkürzung bereitzustellen, und die Abkürzung oder das Akronym ein recht kurzer Begriff ist, geben Sie die vollständige Erweiterung des Begriffs als Wert des [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attributs an:

### Abkürzungsbeispiel

Lassen Sie uns ein Beispiel betrachten.

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
> Frühere Versionen von html enthielten auch Unterstützung für das {{htmlelement("acronym")}}-Element, aber es wurde aus der HTML-Spezifikation entfernt, zugunsten der Verwendung von `<abbr>`, um sowohl Abkürzungen als auch Akronyme darzustellen. `<acronym>` sollte nicht verwendet werden.

### Lassen Sie uns eine Abkürzung markieren

Für diese Lernaufgabe möchten wir, dass Sie eine Abkürzung markieren.

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Markieren Sie die enthaltenen Abkürzungen mit geeignetem HTML. Sie können es auch gerne durch eine eigene Abkürzung ersetzen und versuchen, diese stattdessen zu markieren.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter dem Codeblock anzeigen.

```html-nolint live-sample___advanced-text-2
<p>NASA sure does some exciting work.</p>

<p>The new user interface design LGTM!</p>
```

{{ EmbedLiveSample('advanced-text-2', "100%", 90) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiger HTML-Code sollte etwa wie der folgende Codeausschnitt aussehen:

```html
<p>
  <abbr>NASA</abbr> (the National Aeronautics and Space Administration) sure
  does some exciting work.
</p>

<p>The new user interface design <abbr title="Looks good to me">LGTM</abbr>!</p>
```

- Arguably, NASA sollte beim ersten Erwähnen textuell erweitert werden, da es eine nützliche Information ist, die für alle im Text verfügbar sein sollte.
- Akronyme wie "LGTM" hingegen sind rein geschrieben, um Platz und Zeit zu sparen, daher wäre es sinnlos, es auch auszuschreiben, weshalb die Erweiterung im `title`-Attribut steht. In einer realen Anwendung würden Sie dies wahrscheinlich nicht von Hand tun – Sie würden eine Art Skript verwenden, um es automatisch für bekannte Begriffe hinzuzufügen.

</details>

## Kontaktinformationen markieren

HTML verfügt über ein Element zum Markieren von Kontaktinformationen — {{htmlelement("address")}}. Dies umschließt Ihre Kontaktdaten, zum Beispiel:

```html
<address>Chris Mills, Manchester, The Grim North, UK</address>
```

Es könnte auch komplexere Markups und andere Kontaktinformationsformen enthalten, zum Beispiel:

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

Bitte beachten Sie, dass so etwas auch in Ordnung wäre, wenn die verlinkte Seite die Kontaktinformationen enthalten würde:

```html
<address>
  Page written by <a href="../authors/chris-mills/">Chris Mills</a>.
</address>
```

> [!NOTE]
> Das {{htmlelement("address")}}-Element sollte nur dazu verwendet werden, Kontaktinformationen für das Dokument bereitzustellen, das vom nächstgelegenen {{htmlelement("article")}}- oder {{htmlelement("body")}}-Element enthalten ist. Es wäre korrekt, es im Footer einer Website zu verwenden, um die Kontaktinformationen der gesamten Website einzuschließen, oder innerhalb eines Artikels für die Kontaktdaten des Autors, aber nicht, um eine Liste von Adressen zu markieren, die in keinem Zusammenhang mit dem Inhalt dieser Seite stehen.

## Hoch- und Tiefstellen

Gelegentlich müssen Sie Hoch- und Tiefstellen verwenden, wenn Sie Elemente wie Daten, chemische Formeln und mathematische Gleichungen markieren, damit sie die richtige Bedeutung haben. Die {{htmlelement("sup")}}- und {{htmlelement("sub")}}-Elemente übernehmen diese Aufgabe. Zum Beispiel:

```html
<p>My birthday is on the 25<sup>th</sup> of May 2001.</p>
<p>
  Caffeine's chemical formula is
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
</p>
<p>If x<sup>2</sup> is 9, x must equal 3 or -3.</p>
```

Die Ausgabe dieses Codes sieht folgendermaßen aus:

{{ EmbedLiveSample('Superscript_and_subscript', '100%', 160) }}

## Darstellung von Computercode

Es gibt eine Reihe von Elementen, die zur Markierung von Computercode mit HTML zur Verfügung stehen:

- {{htmlelement("code")}}: Zum Markieren von allgemeinen Teilen von Computercode.
- {{htmlelement("pre")}}: Zur Beibehaltung von Leerzeichen (in der Regel Codeblöcke) — wenn Sie Einrückungen oder übermäßige Leerzeichen in Ihrem Text verwenden, ignorieren Browser dies und Sie sehen es nicht auf Ihrer gerenderten Seite. Wenn Sie den Text jedoch in `<pre></pre>`-Tags einschließen, werden Ihre Leerzeichen identisch mit dem angezeigt, wie Sie es in Ihrem Texteditor sehen.
- {{htmlelement("var")}}: Zum speziellen Markieren von Variablennamen.
- {{htmlelement("kbd")}}: Zum Markieren von Tastatur- (und anderen Arten von) Eingaben, die in den Computer eingegeben werden.
- {{htmlelement("samp")}}: Zum Markieren der Ausgabe eines Computerprogramms.

Lassen Sie uns Beispiele für diese Elemente und deren Verwendung zur Darstellung von Computercode betrachten.
Wenn Sie die vollständige Datei sehen möchten, schauen Sie sich die Beispieldatei [other-semantics.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/advanced-text-formatting/other-semantics.html) an.
Sie können die Datei herunterladen und in Ihrem Browser öffnen, um sie selbst zu sehen, aber hier ist ein Ausschnitt des Codes:

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

Der obige Code wird so aussehen:

{{ EmbedLiveSample('Representing_computer_code','100%',350) }}

## Markierung von Zeitangaben und Daten

HTML stellt auch das {{htmlelement("time")}}-Element zur Markierung von Zeitangaben und Daten im maschinenlesbaren Format bereit. Zum Beispiel:

```html
<time datetime="2016-01-20">20 January 2016</time>
```

Warum ist das nützlich? Nun, es gibt viele verschiedene Möglichkeiten, wie Menschen Daten aufschreiben. Das obige Datum könnte geschrieben werden als:

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

Aber diese verschiedenen Formen können von Computern nicht leicht erkannt werden — was, wenn Sie die Termine aller Ereignisse auf einer Seite automatisch erfassen und in einen Kalender einfügen möchten? Das {{htmlelement("time")}}-Element ermöglicht es Ihnen, für diesen Zweck ein eindeutiges, maschinenlesbares Zeit-/Datumselement anzuhängen.

Das grundlegende obige Beispiel bietet nur ein einfaches maschinenlesbares Datum, aber es gibt viele weitere Möglichkeiten, die möglich sind, zum Beispiel:

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

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Erweiterter HTML-Text](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text).

## Zusammenfassung

Damit endet unser Studium weniger gebräuchlicher HTML-Textsemantik. Was Sie in diesem Kurs gesehen haben, ist keine erschöpfende Liste von HTML-Text-Elementen — wir wollten die wesentlichen Merkmale und einige der häufigeren, die Sie in freier Wildbahn sehen werden, abdecken. Als Nächstes schauen wir uns Links an, eine der wichtigsten Funktionen des Webs.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content")}}
