---
title: "<abbr>: Das Abkürzungselement"
slug: Web/HTML/Element/abbr
l10n:
  sourceCommit: 38cdfeff63f67ebea8effa2866d5a18efdf7e62a
---

{{HTMLSidebar}}

Das **`<abbr>`**-[HTML](/de/docs/Web/HTML)-Element stellt eine Abkürzung oder ein Akronym dar.

Wenn Sie eine Abkürzung oder ein Akronym einfügen, stellen Sie beim ersten Gebrauch eine vollständige Entfaltung des Begriffs im Klartext bereit und markieren Sie die Abkürzung mit `<abbr>`. Dies informiert den Benutzer darüber, was die Abkürzung oder das Akronym bedeutet.

Das optionale [`title`](/de/docs/Web/HTML/Global_attributes#title) Attribut kann eine Entfaltung für die Abkürzung oder das Akronym bereitstellen, wenn keine vollständige Entfaltung vorhanden ist. Dies bietet den Benutzeragenten einen Hinweis, wie der Inhalt angekündigt/angezeigt werden soll, während alle Benutzer darüber informiert werden, was die Abkürzung bedeutet. Wenn vorhanden, muss `title` diese vollständige Beschreibung und nichts anderes enthalten.

{{EmbedInteractiveExample("pages/tabbed/abbr.html", "tabbed-shorter")}}

## Attribute

Dieses Element unterstützt nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes). Das [`title`](/de/docs/Web/HTML/Global_attributes#title)-Attribut hat eine spezifische semantische Bedeutung, wenn es mit dem `<abbr>`-Element verwendet wird; es _muss_ eine vollständige menschenlesbare Beschreibung oder Entfaltung der Abkürzung enthalten. Dieser Text wird oft von Browsern als Tooltip dargestellt, wenn der Mauszeiger über das Element bewegt wird.

Jedes von Ihnen verwendete `<abbr>`-Element ist unabhängig von allen anderen; das Bereitstellen eines `title` für eines verknüpft nicht automatisch denselben Entfaltungstext mit anderen mit demselben Inhaltstext.

## Nutzungshinweise

### Typische Anwendungsfälle

Es ist sicherlich nicht erforderlich, dass alle Abkürzungen mit `<abbr>` ausgezeichnet werden. Es gibt jedoch einige Fälle, in denen dies hilfreich ist:

- Wenn eine Abkürzung verwendet wird und Sie eine Entfaltung oder Definition außerhalb des Inhaltsflusses des Dokuments bereitstellen möchten, verwenden Sie `<abbr>` mit einem passenden [`title`](/de/docs/Web/HTML/Global_attributes#title).
- Um eine Abkürzung zu definieren, die dem Leser möglicherweise unbekannt ist, präsentieren Sie den Begriff mithilfe von `<abbr>` und Inline-Text, der die Definition bereitstellt. Fügen Sie ein `title`-Attribut nur hinzu, wenn die Inline-Entfaltung oder Definition nicht verfügbar ist.
- Wenn die Anwesenheit einer Abkürzung im Text semantisch notiert werden muss, ist das `<abbr>`-Element nützlich. Dies kann wiederum für Styling- oder Skripting-Zwecke verwendet werden.
- Sie können `<abbr>` zusammen mit {{HTMLElement("dfn")}} verwenden, um Definitionen für Begriffe zu erstellen, die Abkürzungen oder Akronyme sind. Siehe das Beispiel [Definieren einer Abkürzung](#eine_abkürzung_definieren) unten.

### Grammatikalische Überlegungen

In Sprachen mit [grammatikalischer Zahl](https://de.wikipedia.org/wiki/Grammatikalische_Zahl) (d. h., Sprachen, in denen die Anzahl der Elemente die Grammatik eines Satzes beeinflusst), verwenden Sie dieselbe grammatikalische Zahl in Ihrem `title`-Attribut wie innerhalb Ihres `<abbr>`-Elements. Dies ist besonders in Sprachen mit mehr als zwei Zahlen, wie Arabisch, wichtig, aber auch im Englischen relevant.

## Standard-Styling

Der Zweck dieses Elements besteht ausschließlich darin, den Autor zu unterstützen, und alle Browser zeigen es standardmäßig inline an ({{cssxref("display", "display: inline")}}), obwohl sein Standard-Styling von einem Browser zum anderen variiert:

Einige Browser fügen dem Inhalt des Elements eine gepunktete Unterstreichung hinzu. Andere fügen eine gepunktete Unterstreichung hinzu, während die Inhalte in Kapitälchen umgewandelt werden. Andere könnten es nicht anders stylen als ein {{HTMLElement("span")}}-Element. Um dieses Styling zu steuern, verwenden Sie {{cssxref('text-decoration')}} und {{cssxref('font-variant')}}.

## Barrierefreiheit

Das erste Mal, dass ein Akronym oder eine Abkürzung auf einer Seite verwendet wird, sollte sie vollständig ausgeschrieben werden, um Menschen das Verständnis zu erleichtern, besonders wenn der Inhalt technisch oder Fachjargon ist.

Fügen Sie nur dann ein `title` ein, wenn die Entfaltung der Abkürzung oder des Akronyms im Text nicht möglich ist. Ein Unterschied zwischen dem angekündigten Wort oder Ausdruck und dem, was auf dem Bildschirm angezeigt wird, kann besonders verstörend sein, insbesondere wenn es sich um Fachjargon handelt, mit dem der Leser möglicherweise nicht vertraut ist.

```html
<p>
  JavaScript Object Notation (<abbr>JSON</abbr>) is a lightweight
  data-interchange format.
</p>
```

{{EmbedLiveSample("Accessibility")}}

Dies ist besonders hilfreich für Menschen, die mit der im Inhalt besprochenen Terminologie oder den Konzepten nicht vertraut sind, für Menschen, die neu in der Sprache sind, und für Menschen mit kognitiven Bedenken.

## Beispiele

### Eine Abkürzung semantisch auszeichnen

Um eine Abkürzung ohne Entfaltung oder Beschreibung auszuzeichnen, verwenden Sie `<abbr>` ohne Attribute, wie in diesem Beispiel zu sehen ist.

#### HTML

```html
<p>Using <abbr>HTML</abbr> is fun and easy!</p>
```

#### Ergebnis

{{EmbedLiveSample("Marking_up_an_abbreviation_semantically")}}

### Abkürzungen stylen

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

### Eine Entfaltung bereitstellen

Das Hinzufügen eines [`title`](/de/docs/Web/HTML/Global_attributes#title)-Attributs ermöglicht Ihnen, eine Entfaltung oder Definition für die Abkürzung oder das Akronym bereitzustellen.

#### HTML

```html
<p>Ashok's joke made me <abbr title="Laugh Out Loud">LOL</abbr> big time.</p>
```

#### Ergebnis

{{EmbedLiveSample("Providing_an_expansion")}}

### Eine Abkürzung definieren

Sie können `<abbr>` zusammen mit {{HTMLElement("dfn")}} verwenden, um eine Abkürzung formeller zu definieren, wie hier gezeigt.

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, greifbarer Inhalt
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >
        akzeptiert
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
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
