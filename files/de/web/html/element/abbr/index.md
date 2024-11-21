---
title: "<abbr>: Das Abkürzungselement"
slug: Web/HTML/Element/abbr
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

Das **`<abbr>`** [HTML](/de/docs/Web/HTML) Element repräsentiert eine Abkürzung oder ein Akronym.

Wenn Sie eine Abkürzung oder ein Akronym einschließen, geben Sie bei deren erster Verwendung eine vollständige Ausschreibung des Begriffs in einfachem Text an und verwenden Sie `<abbr>`, um die Abkürzung zu kennzeichnen. Dies informiert den Benutzer darüber, was die Abkürzung oder das Akronym bedeutet.

Das optionale [`title`](/de/docs/Web/HTML/Global_attributes/title) Attribut kann eine Erweiterung für die Abkürzung oder das Akronym bereitstellen, wenn eine vollständige Ausschreibung nicht vorhanden ist. Dies gibt den Benutzeragenten einen Hinweis darauf, wie der Inhalt angezeigt oder mitgeteilt werden soll, und informiert alle Benutzer darüber, was die Abkürzung bedeutet. Falls vorhanden, muss `title` diese vollständige Beschreibung und nichts anderes enthalten.

{{EmbedInteractiveExample("pages/tabbed/abbr.html", "tabbed-shorter")}}

## Attribute

Dieses Element unterstützt nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes). Das [`title`](/de/docs/Web/HTML/Global_attributes/title) Attribut hat eine spezifische semantische Bedeutung, wenn es mit dem `<abbr>` Element verwendet wird; es _muss_ eine vollständige menschenlesbare Beschreibung oder Ausschreibung der Abkürzung enthalten. Dieser Text wird oft von Browsern als Tooltip angezeigt, wenn der Mauszeiger über das Element bewegt wird.

Jedes von Ihnen verwendete `<abbr>` Element ist unabhängig von allen anderen; die Bereitstellung eines `title` für eines hängt nicht automatisch den gleichen Erweiterungstext an andere mit demselben Inhaltstext an.

## Anwendungshinweise

### Typische Anwendungsfälle

Es ist sicherlich nicht erforderlich, dass alle Abkürzungen mit `<abbr>` gekennzeichnet werden. Es gibt jedoch einige Fälle, in denen dies hilfreich ist:

- Wenn eine Abkürzung verwendet wird und Sie eine Ausschreibung oder Definition außerhalb des Dokumenteninhaltsflusses bereitstellen möchten, verwenden Sie `<abbr>` mit einem geeigneten [`title`](/de/docs/Web/HTML/Global_attributes/title).
- Um eine Abkürzung zu definieren, die dem Leser möglicherweise unbekannt ist, präsentieren Sie den Begriff mit `<abbr>` und einem eingefügten Text, der die Definition liefert. Fügen Sie ein `title` Attribut nur dann hinzu, wenn die Inline-Ausschreibung oder Definition nicht verfügbar ist.
- Wenn die Anwesenheit einer Abkürzung im Text semantisch notiert werden muss, ist das `<abbr>` Element nützlich. Dies kann wiederum zu Styling- oder Skriptzwecken verwendet werden.
- Sie können `<abbr>` in Verbindung mit {{HTMLElement("dfn")}} verwenden, um Definitionen für Begriffe zu erstellen, die Abkürzungen oder Akronyme sind. Siehe das Beispiel [Defining an abbreviation](#definition_einer_abkürzung) unten.

### Grammatische Überlegungen

In Sprachen mit [grammatischem Numerus](https://en.wikipedia.org/wiki/Grammatical_number) (d. h. Sprachen, in denen die Anzahl der Gegenstände die Grammatik eines Satzes beeinflusst), verwenden Sie die gleiche grammatische Anzahl in Ihrem `title` Attribut wie in Ihrem `<abbr>` Element. Dies ist besonders wichtig in Sprachen mit mehr als zwei Nummern, wie Arabisch, aber auch relevant im Englischen.

## Standardstil

Der Zweck dieses Elements liegt rein im Komfort des Autors und alle Browser zeigen es standardmäßig inline an ({{cssxref("display", "display: inline")}}), obwohl sich ihr Standardstil von einem Browser zum anderen unterscheidet:

Einige Browser fügen dem Inhalt des Elements eine gepunktete Unterstreichung hinzu. Andere fügen eine gepunktete Unterstreichung hinzu, während sie den Inhalt in Kapitälchen umwandeln. Andere könnten es nicht anders als ein {{HTMLElement("span")}} Element stylen. Um dieses Styling zu kontrollieren, verwenden Sie {{cssxref('text-decoration')}} und {{cssxref('font-variant')}}.

## Barrierefreiheit

Die vollständige Ausschreibung eines Akronyms oder einer Abkürzung bei der ersten Nutzung auf einer Seite ist von Vorteil, um das Verständnis zu erleichtern, insbesondere wenn der Inhalt technisch oder branchenspezifisch ist.

Fügen Sie nur dann ein `title` hinzu, wenn es im Text nicht möglich ist, die Abkürzung oder das Akronym auszuschreiben. Ein Unterschied zwischen dem mitgeteilten Wort oder Satz und dem, was auf dem Bildschirm angezeigt wird - insbesondere wenn es sich um branchenspezifischen Jargon handelt, mit dem der Leser möglicherweise nicht vertraut ist - kann verwirrend sein.

```html
<p>
  JavaScript Object Notation (<abbr>JSON</abbr>) is a lightweight
  data-interchange format.
</p>
```

{{EmbedLiveSample("Accessibility")}}

Dies ist besonders hilfreich für Menschen, die mit den im Inhalt diskutierten Begriffen oder Konzepten nicht vertraut sind, Personen, die neu in der Sprache sind, und Menschen mit kognitiven Bedenken.

## Beispiele

### Markierung einer Abkürzung mit Bedeutung

Um eine Abkürzung ohne Bereitstellung einer Ausschreibung oder Beschreibung zu kennzeichnen, verwenden Sie `<abbr>` ohne Attribute, wie in diesem Beispiel gezeigt.

#### HTML

```html
<p>Using <abbr>HTML</abbr> is fun and easy!</p>
```

#### Ergebnis

{{EmbedLiveSample("Marking_up_an_abbreviation_semantically")}}

### Formatieren von Abkürzungen

Sie können CSS verwenden, um einen benutzerdefinierten Stil für Abkürzungen festzulegen, wie in diesem grundlegenden Beispiel gezeigt.

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

### Bereitstellung einer Ausschreibung

Das Hinzufügen eines [`title`](/de/docs/Web/HTML/Global_attributes/title) Attributs ermöglicht Ihnen, eine Ausschreibung oder Definition für die Abkürzung oder das Akronym bereitzustellen.

#### HTML

```html
<p>Ashok's joke made me <abbr title="Laugh Out Loud">LOL</abbr> big time.</p>
```

#### Ergebnis

{{EmbedLiveSample("Providing_an_expansion")}}

### Definition einer Abkürzung

Sie können `<abbr>` in Verbindung mit {{HTMLElement("dfn")}} verwenden, um formeller eine Abkürzung zu definieren, wie hier gezeigt.

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >, greifbarer Inhalt
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tagauslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >
        akzeptiert
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebige</td>
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

- [Verwendung des `<abbr>` Elements](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#abbreviations)
