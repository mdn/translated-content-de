---
title: Erweiterte Textmerkmale
slug: Learn_web_development/Core/Structuring_content/Advanced_text_features
l10n:
  sourceCommit: 65c873fda639b035b94db77dd0f9373f38549aa0
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics", "Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text", "Learn_web_development/Core/Structuring_content")}}

Es gibt viele weitere Elemente in HTML zur Definition von Textsemantik, die wir im Artikel [Hervorhebung und Wichtigkeit](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance) nicht angesprochen haben. Die in diesem Artikel beschriebenen Elemente sind weniger bekannt, aber dennoch nützlich (und das ist keineswegs eine vollständige Liste). Hier lernen Sie, wie Sie Zitate, Computercode und andere verwandte Texte, Tief- und Hochstellung, Kontaktinformationen und mehr kennzeichnen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Text-Level-Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Zeiten und Daten.</li>
          <li>Hoch- und Tiefstellung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Zitate

HTML enthält Funktionen zum Kennzeichnen von Zitaten; welches Element Sie verwenden, hängt davon ab, ob Sie einen Block oder ein Inline-Zitat kennzeichnen.

### Blockzitate

Wenn ein Abschnitt von Block-Content (sei es ein Absatz, mehrere Absätze, eine Liste usw.) von woanders zitiert wird, sollten Sie ihn in ein {{htmlelement("blockquote")}}-Element einfügen, um dies zu kennzeichnen, und eine URL, die auf die Quelle des Zitats verweist, in einem [`cite`](/de/docs/Web/HTML/Reference/Elements/blockquote#cite)-Attribut angeben. Zum Beispiel stammt das folgende Markup von der MDN `<blockquote>`-Elementseite:

```html
<p>
  The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
  <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an
  extended quotation.
</p>
```

Um dies in ein Blockzitat zu verwandeln, würden wir einfach Folgendes tun:

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

Die Standardformatierung des Browsers zeigt dies als eingerückten Absatz an, um anzuzeigen, dass es sich um ein Zitat handelt; der Absatz über dem Zitat dient dazu, dies zu demonstrieren.

{{EmbedLiveSample('Blockquotes', '100%', '200px')}}

### Inline-Zitate

Inline-Zitate funktionieren genau auf die gleiche Weise, außer dass sie das {{htmlelement("q")}}-Element verwenden. Zum Beispiel enthält das unten stehende Markup ein Zitat von der MDN `<q>`-Seite:

```html
<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q
    cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/q">
    intended for short quotations that don't require paragraph breaks.
  </q>
</p>
```

Die Standardformatierung des Browsers rendert dies als normalen Text, der durch Anführungszeichen als Zitat gekennzeichnet wird, wie folgt:

{{EmbedLiveSample('Inline_quotations', '100%', '78px')}}

### Zitate

Der Inhalt des [`cite`](/de/docs/Web/HTML/Reference/Elements/blockquote#cite)-Attributs klingt nützlich, aber leider tun Browser, Bildschirmleser usw. damit nicht wirklich viel. Es gibt keine Möglichkeit, den Browser dazu zu bringen, den Inhalt von `cite` anzuzeigen, ohne eine eigene Lösung mit JavaScript oder CSS zu schreiben. Wenn Sie die Quelle des Zitats auf der Seite verfügbar machen möchten, müssen Sie sie über einen Link oder eine andere angemessene Weise verfügbar machen.

Es gibt ein {{htmlelement("cite")}}-Element, aber dieses soll den Titel der zitierten Ressource enthalten, z.B. den Namen des Buches. Es gibt jedoch keinen Grund, warum Sie den Text innerhalb von `<cite>` nicht in irgendeiner Weise mit der Zitierquelle verlinken könnten:

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

Zitate werden standardmäßig in kursiver Schrift formatiert.

{{EmbedLiveSample('Citations', '100%', '179px')}}

### Wer hat das gesagt? Übung zu Blockzitaten

Zeit für eine weitere Aufgabe! In diesem Beispiel möchten wir, dass Sie:

1. Klicken Sie auf **"Play"** im unten stehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Verwandeln Sie den mittleren Absatz in ein Blockzitat, das ein `cite`-Attribut enthält.
3. Verwandeln Sie "The Need To Eliminate Negative Self Talk" im dritten Absatz in ein Inline-Zitat und fügen Sie ein `cite`-Attribut hinzu.
4. Verfassen Sie den Titel jeder Quelle in `<cite>`-Tags und verwandeln Sie jeden in einen Link zu dieser Quelle.

Die Zitatquellen, die Sie benötigen, sind:

- `http://www.brainyquote.com/quotes/authors/c/confucius.html` für das Konfuzius-Zitat
- `http://example.com/affirmationsforpositivethinking` für "The Need To Eliminate Negative Self Talk".

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Neu setzen_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb des Codeblocks ansehen.

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

Ein weiteres ziemlich häufiges Element, das Sie im Web antreffen werden, ist {{htmlelement("abbr")}} — es wird verwendet, um eine Abkürzung oder ein Akronym zu umschließen. Beim Einschließen eines solchen, geben Sie eine vollständige Ausführung des Begriffs in Klartext bei der ersten Verwendung an und kennzeichnen Sie die Abkürzung mit `<abbr>`. Dies bietet Agenten einen Hinweis darauf, wie der Inhalt angekündigt/angezeigt werden soll, während alle Nutzer darüber informiert werden, was die Abkürzung bedeutet.

Wenn die Angabe der Ausführung zusätzlich zur Abkürzung wenig Sinn ergibt und die Abkürzung oder das Akronym ein recht kurzer Begriff ist, geben Sie die vollständige Ausführung des Begriffs als Wert des [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attributs an:

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
> Frühere Versionen von HTML unterstützten auch das {{htmlelement("acronym")}}-Element, aber es wurde aus der HTML-Spezifikation entfernt zugunsten der Verwendung von `<abbr>`, um sowohl Abkürzungen als auch Akronyme darzustellen. `<acronym>` sollte nicht verwendet werden.

### Lassen Sie uns eine Abkürzung kennzeichnen

Für diese Übung möchten wir, dass Sie eine Abkürzung kennzeichnen.

1. Klicken Sie **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Kennzeichnen Sie die enthaltenen Abkürzungen mit angemessenem HTML. Fühlen Sie sich frei, diese auch durch eine eigene zu ersetzen und versuchen Sie, diese stattdessen zu kennzeichnen.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Neu setzen_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb des Codeblocks ansehen.

```html-nolint live-sample___advanced-text-2
<p>NASA sure does some exciting work.</p>

<p>The new user interface design LGTM!</p>
```

{{ EmbedLiveSample('advanced-text-2', "100%", 90) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte ungefähr wie der folgende Code-Schnipsel aussehen:

```html
<p>
  <abbr>NASA</abbr> (the National Aeronautics and Space Administration) sure
  does some exciting work.
</p>

<p>The new user interface design <abbr title="Looks good to me">LGTM</abbr>!</p>
```

- Man könnte argumentieren, dass NASA beim ersten Erwähnen im Text ausgeschrieben werden sollte, da es eine nützliche Information für alle ist, die im Text verfügbar ist.
- Akronyme wie "LGTM" hingegen werden rein aus Platz- und Zeitgründen geschrieben, daher würde es keinen Sinn machen, es ebenfalls auszuschreiben, und daher steht die Ausführung im `title`-Attribut. In einer realen Anwendung würden Sie dies wahrscheinlich nicht von Hand tun — Sie würden eine Art Skript verwenden, um es automatisch für bekannte Begriffe hinzuzufügen.

</details>

## Kontaktinformationen kennzeichnen

HTML hat ein Element zum Kennzeichnen von Kontaktdaten — {{htmlelement("address")}}. Dies umschließt Ihre Kontaktdaten, zum Beispiel:

```html
<address>Chris Mills, Manchester, The Grim North, UK</address>
```

Es könnte auch komplexeres Markup und andere Formen von Kontaktinformationen enthalten, zum Beispiel:

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

Beachten Sie, dass so etwas auch in Ordnung wäre, wenn die verlinkte Seite die Kontaktinformationen enthielte:

```html
<address>
  Page written by <a href="../authors/chris-mills/">Chris Mills</a>.
</address>
```

> [!NOTE]
> Das {{htmlelement("address")}}-Element sollte nur verwendet werden, um Kontaktinformationen für das Dokument bereitzustellen, das am nächsten beim {{htmlelement("article")}}- oder {{htmlelement("body")}}-Element enthalten ist. Es wäre korrekt, es im Footer einer Seite zu verwenden, um die Kontaktinformationen der gesamten Seite einzuschließen, oder innerhalb eines Artikels für die Kontaktdaten des Autors, jedoch nicht, um eine Liste von Adressen zu kennzeichnen, die nicht mit dem Inhalt dieser Seite zusammenhangen.

## Hoch- und Tiefstellung

Gelegentlich müssen Sie Hoch- und Tiefstellung verwenden, wenn Sie Elemente wie Daten, chemische Formeln und mathematische Gleichungen kennzeichnen, damit sie die richtige Bedeutung haben. Die {{htmlelement("sup")}}- und {{htmlelement("sub")}}-Elemente übernehmen diese Aufgabe. Zum Beispiel:

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

## Computercode darstellen

Es gibt eine Anzahl von Elementen, die für das Kennzeichnen von Computercode mit HTML verfügbar sind:

- {{htmlelement("code")}}: Für die Kennzeichnung generischer Teile von Computercode.
- {{htmlelement("pre")}}: Zum Beibehalten von Leerzeichen (in der Regel Codeblöcke) — wenn Sie Einrückungen oder übermäßige Leerzeichen in Ihrem Text verwenden, ignorieren Browser diese und Sie werden sie nicht auf Ihrer gerenderten Seite sehen. Wenn Sie den Text jedoch in `<pre></pre>`-Tags einwickeln, werden Ihre Leerzeichen genauso gerendert, wie Sie sie in Ihrem Texteditor sehen.
- {{htmlelement("var")}}: Für die spezielle Kennzeichnung von Variablennamen.
- {{htmlelement("kbd")}}: Für die Kennzeichnung von Tastatur- (und anderen Arten von) Eingaben, die in den Computer eingegeben werden.
- {{htmlelement("samp")}}: Für die Kennzeichnung der Ausgabe eines Computerprogramms.

Lassen Sie uns Beispiele dieser Elemente ansehen und wie sie verwendet werden, um Computercode darzustellen. Wenn Sie die vollständige Datei sehen möchten, schauen Sie sich die [other-semantics.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/advanced-text-formatting/other-semantics.html) Beispieldatei an. Sie können die Datei herunterladen und in Ihrem Browser öffnen, um es sich selbst anzusehen, aber hier ist ein Ausschnitt des Codes:

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

## Zeiten und Daten kennzeichnen

HTML bietet auch das {{htmlelement("time")}}-Element zum Kennzeichnen von Zeiten und Daten in einem maschinenlesbaren Format. Zum Beispiel:

```html
<time datetime="2016-01-20">20 January 2016</time>
```

Warum ist das nützlich? Nun, es gibt viele verschiedene Arten, wie Menschen Daten aufschreiben. Das obige Datum könnte geschrieben werden als:

<!-- markdownlint-disable MD033 -->

- 20\. Januar 2016
- 20\. Januar 2016
- 20\. Jan. 2016
- 20/01/16
- 01/20/16
- Der 20. des nächsten Monats
- <span lang="fr">20e Janvier 2016</span>
- <span lang="ja">2016 年 1 月 20 日</span>
- Und so weiter.

<!-- markdownlint-enable MD033 -->

Aber diese verschiedenen Formen können von Computern nicht leicht erkannt werden — was, wenn Sie automatisch die Daten aller Ereignisse auf einer Seite erfassen und in einen Kalender einfügen möchten? Das {{htmlelement("time")}}-Element ermöglicht es Ihnen, eine eindeutige, maschinenlesbare Zeit/Datum für diesen Zweck anzuhängen.

Das Grundbeispiel oben gibt nur ein einfaches maschinenlesbares Datum an, aber es gibt viele andere Möglichkeiten, die möglich sind, zum Beispiel:

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

Damit endet unser Studium der weniger bekannten HTML-Textsemantik. Was Sie in diesem Kurs gesehen haben, ist keine vollständige Liste der HTML-Text-Elemente — wir wollten versuchen, die wesentlichen und einige der häufigeren zu behandeln, die Sie in der Praxis sehen werden.

Als nächstes werden wir Ihnen einige Tests geben, mit denen Sie überprüfen können, wie gut Sie die Informationen, die wir zu den weniger bekannten HTML-Text-Funktionen bereitgestellt haben, verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics", "Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text", "Learn_web_development/Core/Structuring_content")}}
