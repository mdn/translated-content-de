---
title: "<abbr>: Das Abkürzungselement"
slug: Web/HTML/Element/abbr
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{HTMLSidebar}}

Das **`<abbr>`**-[HTML](/de/docs/Web/HTML) Element repräsentiert eine Abkürzung oder ein Akronym.

Wenn Sie eine Abkürzung oder ein Akronym einschließen, geben Sie bei der ersten Verwendung eine vollständige Ausführung des Begriffs im Klartext zusammen mit dem `<abbr>`-Element an, um die Abkürzung zu kennzeichnen. Dies informiert den Benutzer darüber, was die Abkürzung oder das Akronym bedeutet.

Das optionale [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut kann eine Ausführung für die Abkürzung oder das Akronym bereitstellen, wenn keine vollständige Ausführung vorhanden ist. Dies gibt Benutzeragenten einen Hinweis darauf, wie der Inhalt angekündigt/angezeigt werden soll, während alle Benutzer darüber informiert werden, was die Abkürzung bedeutet. Wenn vorhanden, muss `title` diese vollständige Beschreibung und nichts anderes enthalten.

{{EmbedInteractiveExample("pages/tabbed/abbr.html", "tabbed-shorter")}}

## Attribute

Dieses Element unterstützt nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes). Das [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut hat eine spezifische semantische Bedeutung, wenn es mit dem `<abbr>`-Element verwendet wird; es _muss_ eine vollständige lesbare Beschreibung oder Ausführung der Abkürzung enthalten. Dieser Text wird von Browsern häufig als Tooltip angezeigt, wenn der Mauszeiger über das Element schwebt.

Jedes verwendete `<abbr>`-Element ist unabhängig von allen anderen; die Bereitstellung eines `title` für eines bedeutet nicht automatisch, dass derselbe Ausführungstext an andere mit demselben Inhaltstext angehängt wird.

## Verwendungshinweise

### Typische Anwendungsfälle

Es ist sicherlich nicht erforderlich, dass alle Abkürzungen mit `<abbr>` gekennzeichnet werden. Es gibt jedoch einige Fälle, in denen es hilfreich ist:

- Wenn eine Abkürzung verwendet wird und Sie eine Ausführung oder Definition außerhalb des Flusses des Dokuments bereitstellen möchten, verwenden Sie `<abbr>` mit einem geeigneten [`title`](/de/docs/Web/HTML/Global_attributes/title).
- Um eine Abkürzung zu definieren, die dem Leser möglicherweise nicht vertraut ist, präsentieren Sie den Begriff mit `<abbr>` und einem in den Text eingefügten, die Definition bereitstellenden Text. Schließen Sie ein `title`-Attribut nur ein, wenn die inline-Ausführung oder Definition nicht verfügbar ist.
- Wenn das Vorhandensein einer Abkürzung im Text semantisch notiert werden muss, ist das `<abbr>`-Element nützlich. Dies kann wiederum für Style- oder Skripting-Zwecke verwendet werden.
- Sie können `<abbr>` in Verbindung mit {{HTMLElement("dfn")}} verwenden, um Definitionen für Begriffe festzulegen, die Abkürzungen oder Akronyme sind. Siehe das Beispiel [Definieren einer Abkürzung](#definieren_einer_abkürzung) unten.

### Grammatikalische Überlegungen

In Sprachen mit [grammatikalischem Zahl](https://de.wikipedia.org/wiki/Grammatikalischer_Zahl) (also Sprachen, bei denen die Anzahl der Objekte die Grammatik eines Satzes beeinflusst), verwenden Sie denselben grammatikalischen Zahl in Ihrem `title`-Attribut wie in Ihrem `<abbr>`-Element. Dies ist besonders wichtig in Sprachen mit mehr als zwei Zahlwerten, wie Arabisch, aber auch im Englischen relevant.

## Standard-Styling

Der Zweck dieses Elements dient ausschließlich der Bequemlichkeit des Autors und alle Browser zeigen es standardmäßig inline an ({{cssxref("display", "display: inline")}}), obwohl sein Standard-Styling von Browser zu Browser variiert:

Einige Browser fügen dem Inhalt des Elements eine gepunktete Unterstreichung hinzu. Andere fügen eine gepunktete Unterstreichung hinzu, während sie den Inhalt in Kapitälchen konvertieren. Andere wiederum könnten es nicht anders als ein {{HTMLElement("span")}}-Element gestalten. Um dieses Styling zu kontrollieren, verwenden Sie {{cssxref('text-decoration')}} und {{cssxref('font-variant')}}.

## Barrierefreiheit

Das erste Mal, wenn das Akronym oder die Abkürzung auf einer Seite verwendet wird, in voller Länge auszuschreiben, ist hilfreich, um den Menschen beim Verstehen zu helfen, insbesondere wenn der Inhalt technischer oder branchenspezifischer Fachjargon ist.

Fügen Sie nur dann ein `title` hinzu, wenn die Ausweitung der Abkürzung oder des Akronyms im Text nicht möglich ist. Ein Unterschied zwischen dem angekündigten Wort oder Ausdruck und dem, was auf dem Bildschirm angezeigt wird, insbesondere wenn es technischer Fachjargon ist, den der Leser möglicherweise nicht kennt, kann verwirrend sein.

```html
<p>
  JavaScript Object Notation (<abbr>JSON</abbr>) is a lightweight
  data-interchange format.
</p>
```

{{EmbedLiveSample("Accessibility")}}

Dies ist besonders hilfreich für Menschen, die mit der im Inhalt diskutierten Terminologie oder den Konzepten nicht vertraut sind, Menschen, die neu in der Sprache sind, und Menschen mit kognitiven Bedenken.

## Beispiele

### Semantische Kennzeichnung einer Abkürzung

Um eine Abkürzung zu kennzeichnen, ohne eine Ausweitung oder Beschreibung bereitzustellen, verwenden Sie `<abbr>` ohne jegliche Attribute, wie in diesem Beispiel gezeigt.

#### HTML

```html
<p>Using <abbr>HTML</abbr> is fun and easy!</p>
```

#### Ergebnis

{{EmbedLiveSample("Marking_up_an_abbreviation_semantically")}}

### Styling von Abkürzungen

Sie können CSS verwenden, um einen benutzerdefinierten Stil für Abkürzungen festzulegen, wie in diesem einfachen Beispiel gezeigt.

#### HTML

```html
<p>Using <abbr>CSS</abbr>, you can style your abbreviations!</p>
```

#### CSS

```css
abbr {
  font-variant: all-small-caps;
}
```

#### Ergebnis

{{EmbedLiveSample("Styling_abbreviations")}}

### Bereitstellung einer Ausweitung

Das Hinzufügen eines [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attributs ermöglicht es Ihnen, eine Ausweitung oder Definition für die Abkürzung oder das Akronym bereitzustellen.

#### HTML

```html
<p>Ashok's joke made me <abbr title="Laugh Out Loud">LOL</abbr> big time.</p>
```

#### Ergebnis

{{EmbedLiveSample("Providing_an_expansion")}}

### Definieren einer Abkürzung

Sie können `<abbr>` in Verbindung mit {{HTMLElement("dfn")}} verwenden, um eine Abkürzung formell zu definieren, wie hier gezeigt.

#### HTML

```html
<p>
  <dfn id="html"><abbr title="HyperText Markup Language">HTML</abbr> </dfn> is a
  markup language used to create the semantics and structure of a web page.
</p>

<p>
  A <dfn id="spec">Specification</dfn> (<abbr>spec</abbr>) is a document that
  outlines in detail how a technology or API is intended to function and how it
  is accessed.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Defining_an_abbreviation", 600, 120)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Satzinhalt</a>, greifbarer Inhalt
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Satzinhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Satzinhalt</a> akzeptiert
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLElement`](/de/docs/Web/API/HTMLElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung des `<abbr>`-Elements](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#abbreviations)
