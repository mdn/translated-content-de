---
title: "<abbr>: Das Abkürzungselement"
slug: Web/HTML/Element/abbr
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das **`<abbr>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine Abkürzung oder ein Akronym.

Wenn Sie eine Abkürzung oder ein Akronym einfügen, geben Sie beim ersten Auftreten der Begriffs eine vollständige Entfaltung des Begriffs im Klartext an und kennzeichnen Sie die Abkürzung mit dem `<abbr>`. Dies informiert den Benutzer darüber, was die Abkürzung oder das Akronym bedeutet.

Das optionale [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut kann eine Erweiterung für die Abkürzung oder das Akronym bereitstellen, wenn keine vollständige Entfaltung vorliegt. Dies gibt Benutzeragenten einen Hinweis darauf, wie der Inhalt angekündigt/angezeigt werden soll, während es alle Benutzer darüber informiert, was die Abkürzung bedeutet. Wenn vorhanden, muss `title` diese vollständige Beschreibung enthalten und nichts anderes.

{{EmbedInteractiveExample("pages/tabbed/abbr.html", "tabbed-shorter")}}

## Attribute

Dieses Element unterstützt nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes). Das [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut hat eine spezifische semantische Bedeutung, wenn es mit dem `<abbr>`-Element verwendet wird; es _muss_ eine vollständige, menschenlesbare Beschreibung oder Entfaltung der Abkürzung enthalten. Dieser Text wird häufig von Browsern als Tooltip angezeigt, wenn der Mauszeiger über das Element bewegt wird.

Jedes verwendete `<abbr>`-Element ist unabhängig von allen anderen; das Bereitstellen eines `title` für eines bindet nicht automatisch denselben Erweiterungstext an andere Elemente mit demselben Inhaltstext.

## Nutzungshinweise

### Typische Anwendungsfälle

Es ist sicherlich nicht erforderlich, dass alle Abkürzungen mit `<abbr>` markiert werden. Es gibt jedoch einige Fälle, in denen dies hilfreich ist:

- Wenn eine Abkürzung verwendet wird und Sie eine Entfaltung oder Definition außerhalb des Dokumenteninhalts bereitstellen möchten, verwenden Sie `<abbr>` mit einem geeigneten [`title`](/de/docs/Web/HTML/Global_attributes/title).
- Um eine Abkürzung zu definieren, die dem Leser möglicherweise unbekannt ist, präsentieren Sie den Begriff mit `<abbr>` und einbettetem Text, der die Definition liefert. Fügen Sie nur dann ein `title`-Attribut hinzu, wenn die Erweiterung oder Definition im Text nicht verfügbar ist.
- Wenn das Vorhandensein einer Abkürzung im Text semantisch notiert werden muss, ist das `<abbr>`-Element nützlich. Dies kann dann zu Stil- oder Skriptzwecken verwendet werden.
- Sie können `<abbr>` in Verbindung mit {{HTMLElement("dfn")}} verwenden, um Definitionen für Begriffe zu erstellen, die Abkürzungen oder Akronyme sind. Siehe das Beispiel [Defining an abbreviation](#eine_abkürzung_definieren) unten.

### Grammatikalische Überlegungen

In Sprachen mit [grammatischem Numerus](https://de.wikipedia.org/wiki/Grammatischer_Numerus) (das heißt, Sprachen, bei denen die Anzahl der Elemente die Grammatik des Satzes beeinflusst), verwenden Sie denselben grammatischen Numerus in Ihrem `title`-Attribut wie im `<abbr>`-Element. Dies ist besonders wichtig in Sprachen mit mehr als zwei Numeri, wie Arabisch, ist aber auch im Englischen relevant.

## Standardstil

Der Zweck dieses Elements liegt rein im Komfort des Autors und alle Browser zeigen es standardmäßig inline an ({{cssxref("display", "display: inline")}}), obwohl sein Standardstil von einem Browser zum anderen variiert:

Einige Browser fügen dem Inhalt des Elements eine gepunktete Unterstreichung hinzu. Andere fügen eine gepunktete Unterstreichung hinzu, während sie den Inhalt in Kapitälchen umwandeln. Andere gestalten ihn möglicherweise nicht anders als ein {{HTMLElement("span")}}-Element. Um diese Gestaltung zu kontrollieren, verwenden Sie {{cssxref('text-decoration')}} und {{cssxref('font-variant')}}.

## Barrierefreiheit

Das Ausschreiben des Akronyms oder der Abkürzung beim ersten Mal, dass es auf einer Seite verwendet wird, ist hilfreich, um Menschen das Verständnis zu erleichtern, insbesondere wenn der Inhalt technisch ist oder Fachjargon enthält.

Fügen Sie nur dann ein `title` hinzu, wenn es nicht möglich ist, die Abkürzung oder das Akronym im Text zu erweitern. Ein Unterschied zwischen dem angekündigten Wort oder Ausdruck und dem, was auf dem Bildschirm angezeigt wird, insbesondere wenn es sich um Fachjargon handelt, mit dem der Leser möglicherweise nicht vertraut ist, kann irritierend sein.

```html
<p>
  JavaScript Object Notation (<abbr>JSON</abbr>) is a lightweight
  data-interchange format.
</p>
```

{{EmbedLiveSample("Accessibility")}}

Dies ist besonders hilfreich für Menschen, die mit den im Inhalt diskutierten Begriffen oder Konzepten nicht vertraut sind, Neulinge in der Sprache und Menschen mit kognitiven Einschränkungen.

## Beispiele

### Eine Abkürzung semantisch markieren

Um eine Abkürzung zu markieren, ohne eine Erweiterung oder Beschreibung bereitzustellen, verwenden Sie `<abbr>` ohne Attribute, wie in diesem Beispiel zu sehen ist.

#### HTML

```html
<p>Using <abbr>HTML</abbr> is fun and easy!</p>
```

#### Ergebnis

{{EmbedLiveSample("Marking_up_an_abbreviation_semantically")}}

### Abkürzungen stilisieren

Sie können CSS verwenden, um einen benutzerdefinierten Stil für Abkürzungen festzulegen, wie in diesem einfachen Beispiel zu sehen ist.

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

### Eine Erweiterung bereitstellen

Das Hinzufügen eines [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attributs ermöglicht es Ihnen, eine Erweiterung oder Definition für die Abkürzung oder das Akronym bereitzustellen.

#### HTML

```html
<p>Ashok's joke made me <abbr title="Laugh Out Loud">LOL</abbr> big time.</p>
```

#### Ergebnis

{{EmbedLiveSample("Providing_an_expansion")}}

### Eine Abkürzung definieren

Sie können `<abbr>` zusammen mit {{HTMLElement("dfn")}} verwenden, um eine Abkürzung formell zu definieren, wie hier gezeigt.

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
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >, greifbarer Inhalt
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Ausschluss</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        > akzeptiert
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

- [Verwendung des `<abbr>`-Elements](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations)
