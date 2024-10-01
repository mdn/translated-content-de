---
title: Begriffe mit HTML definieren
slug: Learn/HTML/Howto/Define_terms_with_HTML
l10n:
  sourceCommit: 76c1e86a6bf1fd58aa6b0e627842a3c1161add28
---

{{QuickLinksWithSubpages("/de/docs/Learn/HTML/Howto")}}

HTML bietet verschiedene Möglichkeiten, Semantik zur Beschreibung zu vermitteln, sei es inline oder als strukturierte Glossare. In diesem Artikel behandeln wir, wie Sie Begriffe korrekt kennzeichnen, wenn Sie sie definieren.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten wissen, wie Sie ein
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >einfaches HTML-Dokument erstellen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie Sie neue Begriffe einführen und wie Sie Beschreibungslisten erstellen.
      </td>
    </tr>
  </tbody>
</table>

Wenn Sie einen Begriff definiert brauchen, schauen Sie wahrscheinlich direkt in ein Wörterbuch oder Glossar. Wörterbücher und Glossare verbinden _formal_ Schlüsselwörter mit einer oder mehreren Beschreibungen, wie in diesem Fall:

> - Blue (_Adjektiv_)
>   - : Von einer Farbe wie der Himmel an einem sonnigen Tag.
>     _"Der klare blaue Himmel"_

Aber wir definieren ständig Schlüsselwörter informell, wie hier:

> **Firefox** ist der Webbrowser, der von der Mozilla Foundation erstellt wurde.

Um mit diesen Anwendungsfällen umzugehen, bietet {{Glossary("HTML", "HTML")}} {{Glossary("tag", "Tags")}}, um Beschreibungen und beschriebene Worte zu kennzeichnen, sodass Ihre Bedeutung ordnungsgemäß an Ihre Leser vermittelt wird.

## Anleitung zur Markierung informeller Beschreibungen

In Lehrbüchern ist es häufig, das Schlüsselwort beim ersten Auftreten fett zu markieren und sofort zu definieren.

Das machen wir auch in HTML, allerdings ist HTML kein visuelles Medium und daher verwenden wir kein Fettdruck. Wir verwenden {{htmlelement("dfn")}}, welches ein spezielles Element ist, nur um das erste Auftreten von Schlüsselwörtern zu markieren. Beachten Sie, dass `<dfn>`-Tags um das _zu definierende Wort_ herum gehen, nicht um die Definition (die Definition besteht aus dem gesamten Absatz):

```html
<p><dfn>Firefox</dfn> is the web browser created by the Mozilla Foundation.</p>
```

> [!NOTE]
> Eine andere Verwendung für Fett ist es, Inhalte zu betonen. Fett selbst ist ein HTML-fremdes Konzept, aber es gibt [Tags zur Angabe von Betonung.](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#emphasis_and_importance)

### Sonderfall: Abkürzungen

Es ist am besten, [Abkürzungen speziell zu markieren](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#abbreviations) mit {{htmlelement("abbr")}}, damit Bildschirmleser sie entsprechend lesen und damit Sie alle Abkürzungen einheitlich bearbeiten können. Genau wie bei jedem neuen Schlüsselwort sollten Sie Ihre Abkürzungen beim ersten Auftreten definieren.

```html
<p>
  <dfn><abbr>HTML</abbr> (hypertext markup language)</dfn>
  is a description language used to structure documents on the web.
</p>
```

> [!NOTE]
> Die HTML-Spezifikation [reserviert zwar das `title`-Attribut](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element) zur Erweiterung der Abkürzung. Dies ist jedoch keine akzeptable Alternative zur Bereitstellung einer Inline-Erweiterung. Die Inhalte von `title` sind vollständig vor Ihren Nutzern verborgen, es sei denn, sie verwenden eine Maus und bewegen sie zufällig über die Abkürzung. Die Spezifikation [erkennt dies ebenfalls an.](https://html.spec.whatwg.org/multipage/dom.html#attr-title)

### Verbesserung der Zugänglichkeit

{{HTMLElement('dfn')}} markiert das definierte Schlüsselwort und zeigt an, dass der aktuelle Absatz das Schlüsselwort definiert. Mit anderen Worten besteht eine implizite Beziehung zwischen dem `<dfn>`-Element und seinem Container. Wenn Sie eine formellere Beziehung wünschen oder Ihre Definition aus nur einem Satz statt des ganzen Absatzes besteht, können Sie das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)-Attribut verwenden, um einen Begriff formeller mit seiner Definition zu verknüpfen:

```html
<p>
  <span id="ff">
    <dfn aria-describedby="ff">Firefox</dfn>
    is the web browser created by the Mozilla Foundation.
  </span>
  You can download it at <a href="https://www.mozilla.org">mozilla.org</a>
</p>
```

Hilfstechnologien können dieses Attribut oft verwenden, um eine Textalternative zu einem gegebenen Begriff zu finden. Sie können `aria-describedby` auf jedem Tag verwenden, der ein zu definierendes Schlüsselwort umschließt (nicht nur das `<dfn>`-Element). `aria-describedby` bezieht sich auf die [`id`](/de/docs/Web/HTML/Global_attributes#id) des Elements, das die Beschreibung enthält.

## Anleitung zur Erstellung einer Beschreibungs-Liste

Beschreibungslisten sind genau das, was sie behaupten: eine Liste von Begriffen und ihren passenden Beschreibungen (z. B. Definitionslisten, Wörterbucheinträge, FAQs und Schlüssel-Wert-Paare).

> [!NOTE]
> Beschreibungslisten sind [nicht geeignet zur Kennzeichnung von Dialogen,](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element) da Gespräche die Sprecher nicht direkt beschreiben. Hier sind [Empfehlungen zur Kennzeichnung von Dialogen](https://html.spec.whatwg.org/multipage/semantics-other.html#conversations).

Die beschriebenen Begriffe kommen in {{htmlelement("dt")}}-Elementen. Die passende Beschreibung folgt sofort, eingeschlossen in einem oder mehreren {{htmlelement("dd")}}-Elementen. Die gesamte Beschreibungs-Liste wird mit einem {{htmlelement("dl")}}-Element umschlossen.

### Ein einfaches Beispiel

Hier ist ein einfaches Beispiel, das Arten von Lebensmitteln und Getränken beschreibt:

```html
<dl>
  <dt>jambalaya</dt>
  <dd>
    rice-based entree typically containing chicken, sausage, seafood, and spices
  </dd>

  <dt>sukiyaki</dt>
  <dd>
    Japanese specialty consisting of thinly sliced meat, vegetables, and
    noodles, cooked in sake and soy sauce
  </dd>

  <dt>chianti</dt>
  <dd>dry Italian red wine originating in Tuscany</dd>
</dl>
```

> [!NOTE]
> Das Grundmuster, wie Sie sehen können, ist, `<dt>`-Begriffe mit `<dd>`-Beschreibungen abzuwechseln. Wenn zwei oder mehr Begriffen in einer Reihe auftreten, gilt die folgende Beschreibung für alle von ihnen. Wenn zwei oder mehr Beschreibungen in einer Reihe vorkommen, gelten sie alle für den zuletzt angegebenen Begriff.

### Verbesserung der visuellen Ausgabe

So zeigt ein grafischer Browser die obige Liste an:

{{EmbedLiveSample("A_simple_example", 600, 180)}}

Wenn Sie möchten, dass die Schlüsselwörter besser hervorgehoben werden, könnten Sie versuchen, sie fett zu setzen. Denken Sie daran, HTML ist kein visuelles Medium; für alle visuellen Effekte benötigen wir {{Glossary("CSS", "CSS")}}. Die CSS-Eigenschaft {{cssxref("font-weight")}} ist das, was Sie hier brauchen:

```css
dt {
  font-weight: bold;
}
```

Dies führt zu dem etwas besser lesbaren Ergebnis unten:

{{EmbedLiveSample("How_to_build_a_description_list", 600, 180)}}

## Mehr erfahren

- {{htmlelement("dfn")}}
- {{htmlelement("dl")}}
- {{htmlelement("dt")}}
- {{htmlelement("dd")}}
- [Anleitung zur Verwendung des aria-describedby Attributs](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
