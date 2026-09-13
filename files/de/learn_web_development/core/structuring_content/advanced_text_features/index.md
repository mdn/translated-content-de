---
title: Erweiterte Textmerkmale
slug: Learn_web_development/Core/Structuring_content/Advanced_text_features
l10n:
  sourceCommit: 2066cc916dfdcbb782340bf0ce562b230e947cba
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics", "Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text", "Learn_web_development/Core/Structuring_content")}}

Es gibt viele andere Elemente in HTML zur Definition von Textsemantik, die wir im Artikel [Betonung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance) nicht behandelt haben. Die in diesem Artikel beschriebenen Elemente sind weniger bekannt, aber dennoch nützlich zu kennen (und dies ist bei weitem noch keine vollständige Liste). Hier lernen Sie, wie man Zitate, Computercode und andere verwandte Texte, Subskript oder Superskript, Kontaktinformationen und mehr kennzeichnet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Kenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Semantiken auf Text-Ebene wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >Überschriften und Absätze</a
        > sowie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists"
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
          <li>Zeiten und Daten.</li>
          <li>Superskript und Subskript.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Zitate

HTML enthält Funktionen zur Kennzeichnung von Zitaten; welches Element Sie verwenden, hängt davon ab, ob Sie ein Block- oder Inline-Zitat kennzeichnen.

### Blockzitate

Wenn ein Abschnitt von Block-Inhalten (sei es ein Absatz, mehrere Absätze, eine Liste usw.) von irgendwo anders zitiert wird, sollten Sie ihn innerhalb eines {{htmlelement("blockquote")}}-Elements einfügen, um dies anzuzeigen, und eine URL, die auf die Quelle des Zitats verweist, innerhalb eines [`cite`](/de/docs/Web/HTML/Reference/Elements/blockquote#cite)-Attributs inkludieren. Zum Beispiel ist das folgende Markup der MDN `<blockquote>`-Elementseite entnommen:

```html
<p>
  The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
  <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an
  extended quotation.
</p>
```

Um dies in ein Blockzitat zu verwandeln, würden wir einfach dies tun:

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

Der Standardstil des Browsers wird dies als eingerückten Absatz rendern, als Indikator, dass es sich um ein Zitat handelt; der Absatz über dem Zitat dient dazu, dies zu demonstrieren.

{{EmbedLiveSample('Blockquotes', '100%', '200px')}}

### Inline-Zitate

Inline-Zitate funktionieren auf genau die gleiche Weise, außer dass sie das {{htmlelement("q")}}-Element verwenden. Zum Beispiel enthält das untenstehende Markup ein Zitat von der MDN `<q>`-Seite:

```html
<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q
    cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/q">
    intended for short quotations that don't require paragraph breaks.
  </q>
</p>
```

Der Standardstil des Browsers wird dies als normalen Text darstellen, der in Anführungszeichen gesetzt wird, um ein Zitat anzuzeigen, wie folgt:

{{EmbedLiveSample('Inline_quotations', '100%', '78px')}}

### Zitationen

Der Inhalt des [`cite`](/de/docs/Web/HTML/Reference/Elements/blockquote#cite)-Attributs klingt nützlich, aber leider tun Browser, Screenreader usw. nicht viel damit. Es gibt keine Möglichkeit, den Browser dazu zu bringen, den Inhalt von `cite` anzuzeigen, ohne Ihre eigene Lösung mit JavaScript oder CSS zu schreiben. Wenn Sie die Quelle des Zitats auf der Seite verfügbar machen möchten, müssen Sie es im Text über einen Link oder eine andere geeignete Weise verfügbar machen.

Es gibt ein {{htmlelement("cite")}}-Element, aber dieses soll den Titel der zitierten Ressource enthalten, z. B. den Namen des Buches. Es gibt jedoch keinen Grund, warum Sie den Text innerhalb von `<cite>` nicht auf irgendeine Weise mit der Zitatquelle verknüpfen könnten:

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

Zitationen werden standardmäßig in kursiver Schrift dargestellt.

{{EmbedLiveSample('Citations', '100%', '179px')}}

### Wer hat das gesagt? Blockzitat-Übung

Zeit für eine weitere Aufgabe! In diesem Beispiel möchten wir, dass Sie:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Verwandeln Sie den mittleren Absatz in ein Blockzitat, das ein `cite`-Attribut enthält.
3. Verwandeln Sie "The Need To Eliminate Negative Self Talk" im dritten Absatz in ein Inline-Zitat und fügen Sie ein `cite`-Attribut hinzu.
4. Umschließen Sie den Titel jeder Quelle mit `<cite>`-Tags und verwandeln Sie jeden in einen Link zu dieser Quelle.

Die Quellen der Zitationen, die Sie benötigen, sind:

- `http://www.brainyquote.com/quotes/authors/c/confucius.html` für das Konfuzius-Zitat
- `http://example.com/affirmationsforpositivethinking` für "The Need To Eliminate Negative Self Talk".

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter dem Codeblock ansehen.

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

Ein weiteres recht häufiges Element, das Ihnen beim Surfen im Web begegnen wird, ist {{htmlelement("abbr")}} — dies wird verwendet, um eine Abkürzung oder ein Akronym zu kennzeichnen. Bei der Verwendung sollten Sie eine vollständige Ausschreibung des Begriffs im Klartext bei der ersten Verwendung bereitstellen, zusammen mit dem `<abbr>`, um die Abkürzung zu kennzeichnen. Dies gibt den Benutzeragenten einen Hinweis darauf, wie der Inhalt angekündigt/dargestellt wird, während alle Benutzer informiert werden, was die Abkürzung bedeutet.

Wenn die Bereitstellung der Ausschreibung zusätzlich zur Abkürzung wenig Sinn ergibt und die Abkürzung oder das Akronym ein recht kurzer Begriff ist, geben Sie die vollständige Ausschreibung des Begriffs als Wert des [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attributs an:

### Abkürzungsbeispiel

Schauen wir uns ein Beispiel an.

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

Diese werden wie folgt gerendert:

{{EmbedLiveSample('Abbreviation_example', '100%', '90')}}

> [!NOTE]
> Frühere Versionen von HTML unterstützten auch das {{htmlelement("acronym")}}-Element, aber es wurde aus der HTML-Spezifikation entfernt, zugunsten der Verwendung von `<abbr>`, um sowohl Abkürzungen als auch Akronyme darzustellen. `<acronym>` sollte nicht verwendet werden.

### Lassen Sie uns eine Abkürzung kennzeichnen

Für diese Lernaufgabe möchten wir, dass Sie eine Abkürzung kennzeichnen.

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Kennzeichnen Sie die enthaltenen Abkürzungen mit dem entsprechenden HTML. Sie können es auch durch eine eigene Abkürzung ersetzen und versuchen, diese stattdessen zu kennzeichnen.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter dem Codeblock ansehen.

```html-nolint live-sample___advanced-text-2
<p>NASA sure does some exciting work.</p>

<p>The new user interface design LGTM!</p>
```

{{ EmbedLiveSample('advanced-text-2', "100%", 90) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte in etwa wie der folgende Code-Snippet aussehen:

```html
<p>
  <abbr>NASA</abbr> (the National Aeronautics and Space Administration) sure
  does some exciting work.
</p>

<p>The new user interface design <abbr title="Looks good to me">LGTM</abbr>!</p>
```

- NASA sollte möglicherweise im Text bei der ersten Erwähnung ausgeschrieben werden, da dies eine nützliche Information ist, die im Text für alle verfügbar sein sollte.
- Akronyme wie "LGTM" hingegen sind rein geschrieben, um Platz und Zeit zu sparen, daher wäre es nicht sinnvoll, es ebenfalls auszuschreiben, daher wird die Ausschreibung im `title`-Attribut eingefügt. In einer echten Anwendung würden Sie dies wahrscheinlich nicht von Hand tun — Sie würden eine Art Skript verwenden, um es automatisch für bekannte Begriffe hinzuzufügen.

</details>

## Kennzeichnen von Kontaktdaten

HTML hat ein Element zum Kennzeichnen von Kontaktdaten — {{htmlelement("address")}}. Dieses wird um Ihre Kontaktdaten herum verwendet, beispielsweise:

```html
<address>Chris Mills, Manchester, The Grim North, UK</address>
```

Es könnte auch komplexere Markup und andere Formen von Kontaktinformationen beinhalten, zum Beispiel:

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

Beachten Sie, dass auch etwas wie dies in Ordnung wäre, wenn die verlinkte Seite die Kontaktinformationen enthielte:

```html
<address>
  Page written by <a href="../authors/chris-mills/">Chris Mills</a>.
</address>
```

> [!NOTE]
> Das {{htmlelement("address")}}-Element sollte nur verwendet werden, um Kontaktinformationen für das Dokument bereitzustellen, das sich im nächsten {{htmlelement("article")}}- oder {{htmlelement("body")}}-Element befindet. Es wäre korrekt, es im Footer einer Website zu verwenden, um die Kontaktinformationen der gesamten Seite einzuschließen, oder innerhalb eines Artikels für die Kontaktdaten des Autors, aber nicht, um eine Liste von Adressen zu kennzeichnen, die nicht mit dem Inhalt dieser Seite zusammenhängen.

## Superskript und Subskript

Sie werden gelegentlich Superskript und Subskript verwenden müssen, wenn Sie Elemente wie Daten, chemische Formeln und mathematische Gleichungen kennzeichnen, damit sie die richtige Bedeutung haben. Die {{htmlelement("sup")}}- und {{htmlelement("sub")}}-Elemente übernehmen diese Aufgabe. Zum Beispiel:

```html
<p>My birthday is on the 25<sup>th</sup> of May 2001.</p>
<p>
  Caffeine's chemical formula is
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
</p>
<p>If x<sup>2</sup> is 9, x must equal 3 or -3.</p>
```

Die Ausgabe dieses Codes sieht wie folgt aus:

{{ EmbedLiveSample('Superscript_and_subscript', '100%', 160) }}

## Darstellung von Computercode

Es gibt eine Reihe von Elementen, die in HTML für die Kennzeichnung von Computercode zur Verfügung stehen:

- {{htmlelement("code")}}: Zum Kennzeichnen von generischen Computercodestücken.
- {{htmlelement("pre")}}: Um Leerzeichen beizubehalten (im Allgemeinen Codeblöcke) — wenn Sie Einrückungen oder übermäßige Leerzeichen in Ihrem Text verwenden, ignorieren Browser diese, und Sie sehen sie nicht auf Ihrer gerenderten Seite. Wenn Sie den Text jedoch in `<pre></pre>`-Tags einschließen, werden Ihre Leerzeichen genau so gerendert, wie Sie sie in Ihrem Texteditor sehen.
- {{htmlelement("var")}}: Zum spezifischen Kennzeichnen von Variablennamen.
- {{htmlelement("kbd")}}: Zum Kennzeichnen von Tastatureingaben (und anderen Arten von Eingaben), die in den Computer eingegeben wurden.
- {{htmlelement("samp")}}: Zum Kennzeichnen der Ausgabe eines Computerprogramms.

Lassen Sie uns Beispiele für diese Elemente anschauen und wie sie verwendet werden, um Computercode darzustellen:

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

Der obige Code wird wie folgt gerendert:

{{ EmbedLiveSample('Representing_computer_code','100%',350) }}

## Kennzeichnen von Zeiten und Daten

HTML stellt auch das {{htmlelement("time")}}-Element zur Verfügung, um Zeiten und Daten in einem maschinenlesbaren Format zu kennzeichnen. Zum Beispiel:

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

Aber diese verschiedenen Formen können von Computern nicht leicht erkannt werden — was, wenn Sie die Daten aller Ereignisse auf einer Seite automatisch erfassen und in einen Kalender einfügen möchten? Das {{htmlelement("time")}}-Element ermöglicht es Ihnen, ein eindeutiges, maschinenlesbares Zeit-/Datum anzuhängen, um dieses Ziel zu erreichen.

Das grundlegende Beispiel oben bietet nur ein einfaches maschinenlesbares Datum, aber es gibt viele andere Optionen, die möglich sind, beispielsweise:

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

Damit endet unser Studium der weniger bekannten HTML-Textsemantiken. Was Sie in diesem Kurs gesehen haben, ist keine erschöpfende Liste von HTML-Text-Elementen — wir wollten die wesentlichen und einige der häufigeren abdecken, die Sie in freier Wildbahn sehen werden.

Als nächstes werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu überprüfen, wie gut Sie die Informationen verstanden und behalten haben, die wir über weniger häufige HTML-Texteigenschaften bereitgestellt haben.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics", "Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text", "Learn_web_development/Core/Structuring_content")}}
