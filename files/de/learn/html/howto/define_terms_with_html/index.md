---
title: Begriffe mit HTML definieren
slug: Learn/HTML/Howto/Define_terms_with_HTML
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{QuickLinksWithSubpages("/de/docs/Learn/HTML/Howto")}}

HTML bietet mehrere Möglichkeiten, Semantiken zu beschreiben, sei es inline oder als strukturierte Glossare. In diesem Artikel behandeln wir, wie Sie Schlüsselwörter richtig kennzeichnen, wenn Sie sie definieren.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten damit vertraut sein, wie man
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >ein grundlegendes HTML-Dokument erstellt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie Sie neue Schlüsselwörter einführen und wie Sie Beschreibungslisten erstellen können.
      </td>
    </tr>
  </tbody>
</table>

Wenn Sie einen Begriff definiert haben möchten, schauen Sie wahrscheinlich direkt in einem Wörterbuch oder Glossar nach. Wörterbücher und Glossare verknüpfen _formal_ Schlüsselwörter mit einer oder mehreren Beschreibungen, wie in diesem Fall:

> - Blau (_Adjektiv_)
>   - : Von einer Farbe wie der Himmel an einem sonnigen Tag.
>     _"Der klare blaue Himmel"_

Aber wir definieren ständig Schlüsselwörter informell, wie hier:

> **Firefox** ist der Webbrowser, der von der Mozilla Foundation erstellt wurde.

Um mit diesen Anwendungsfällen umzugehen, bietet {{Glossary("HTML", "HTML")}} {{Glossary("tag", "Tags")}} an, um Beschreibungen und beschriebene Wörter zu markieren, damit Ihre Bedeutung ordnungsgemäß bei Ihren Lesern ankommt.

## Anleitung zur Markierung informeller Beschreibungen

In Lehrbüchern ist es üblich, das erste Auftreten eines Schlüsselworts fett zu drucken und es sofort zu definieren.

Das machen wir im HTML auch, nur dass HTML kein visuelles Medium ist, und deshalb verwenden wir nicht fett. Wir verwenden {{htmlelement("dfn")}}, was ein spezielles Element ist, um das erste Auftreten von Schlüsselwörtern zu markieren. Beachten Sie, dass `<dfn>`-Tags um das _Wort, das definiert werden soll,_ angeordnet werden und nicht um die Definition (die Definition besteht aus dem gesamten Absatz):

```html
<p><dfn>Firefox</dfn> is the web browser created by the Mozilla Foundation.</p>
```

> [!NOTE]
> Eine weitere Verwendung von Fett ist, um den Inhalt zu betonen. Fett an sich ist ein Konzept, das HTML fremd ist, aber es gibt [Tags zur Kennzeichnung von Betonung.](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#emphasis_and_importance)

### Spezieller Fall: Abkürzungen

Es ist am besten, [Abkürzungen speziell zu markieren](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#abbreviations) mit {{htmlelement("abbr")}}, damit Bildschirmlesegeräte sie angemessen lesen und Sie alle Abkürzungen einheitlich behandeln können. Genau wie bei jedem neuen Schlüsselwort sollten Sie Ihre Abkürzungen beim ersten Auftreten definieren.

```html
<p>
  <dfn><abbr>HTML</abbr> (hypertext markup language)</dfn>
  is a description language used to structure documents on the web.
</p>
```

> [!NOTE]
> Die HTML-Spezifikation [reserviert tatsächlich das `title`-Attribut](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element) für die Erweiterung der Abkürzung. Dies ist jedoch keine akzeptable Alternative, um eine Inline-Erweiterung bereitzustellen. Der Inhalt von `title` ist für Ihre Nutzer vollkommen unsichtbar, es sei denn, sie verwenden eine Maus und fahren zufällig mit dem Cursor über die Abkürzung. Die Spezifikation erkennt dies ebenfalls [dank dessen an.](https://html.spec.whatwg.org/multipage/dom.html#attr-title)

### Verbesserung der Barrierefreiheit

{{HTMLElement('dfn')}} kennzeichnet das definierte Schlüsselwort und zeigt an, dass der aktuelle Absatz das Schlüsselwort definiert. Mit anderen Worten, es gibt eine implizite Beziehung zwischen dem `<dfn>`-Element und seinem Container. Wenn Sie eine formalere Beziehung möchten oder Ihre Definition nur aus einem Satz statt dem ganzen Absatz besteht, können Sie das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)-Attribut verwenden, um einen Begriff formeller mit seiner Definition zu verknüpfen:

```html
<p>
  <span id="ff">
    <dfn aria-describedby="ff">Firefox</dfn>
    is the web browser created by the Mozilla Foundation.
  </span>
  You can download it at <a href="https://www.mozilla.org">mozilla.org</a>
</p>
```

Assistive Technologien können dieses Attribut oft verwenden, um eine Textalternative zu einem gegebenen Begriff zu finden. Sie können `aria-describedby` auf jedem Tag verwenden, welches ein zu definierendes Schlüsselwort umschließt (nicht nur das `<dfn>`-Element). `aria-describedby` referenziert die [`id`](/de/docs/Web/HTML/Global_attributes/id) des Elements, das die Beschreibung enthält.

## Anleitung zum Erstellen einer Beschreibungslisten

Beschreibungslisten sind genau das, was sie angeben: eine Liste von Begriffen und deren passenden Beschreibungen (z. B. Definitionslisten, Wörterbucheinträge, FAQs und Schlüssel-Werte-Paare).

> [!NOTE]
> Beschreibungslisten sind [nicht geeignet zur Kennzeichnung von Dialog,](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element) da Gespräche die Sprecher nicht direkt beschreiben. Hier sind [Empfehlungen zur Auszeichnung von Dialogen](https://html.spec.whatwg.org/multipage/semantics-other.html#conversations).

Die beschriebenen Begriffe kommen in {{htmlelement("dt")}}-Elemente. Die passende Beschreibung folgt unmittelbar, eingefasst in einem oder mehreren {{htmlelement("dd")}}-Elementen. Umschließen Sie die gesamte Beschreibungslisten mit einem {{htmlelement("dl")}}-Element.

### Ein einfaches Beispiel

Hier ist ein Beispiel, das Arten von Lebensmitteln und Getränken beschreibt:

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
> Das grundlegende Muster, wie Sie sehen können, ist das abwechselnde Verwenden von `<dt>`-Begriffen und `<dd>`-Beschreibungen. Wenn zwei oder mehr Begriffe hintereinander auftreten, gilt die folgende Beschreibung für alle. Wenn zwei oder mehr Beschreibungen hintereinander auftreten, gelten sie alle für den zuletzt gegebenen Begriff.

### Verbesserung der visuellen Ausgabe

So zeigt ein grafischer Browser die obige Liste an:

{{EmbedLiveSample("A_simple_example", 600, 180)}}

Wenn Sie möchten, dass die Schlüsselwörter besser hervorgehoben werden, könnten Sie versuchen, sie fett zu kennzeichnen. Denken Sie daran, HTML ist kein visuelles Medium; wir benötigen {{Glossary("CSS", "CSS")}} für alle visuellen Effekte. Die CSS-Eigenschaft {{cssxref("font-weight")}} ist das, was Sie hier benötigen:

```css
dt {
  font-weight: bold;
}
```

Dies erzeugt das leicht besser lesbare Ergebnis unten:

{{EmbedLiveSample("How_to_build_a_description_list", 600, 180)}}

## Mehr erfahren

- {{htmlelement("dfn")}}
- {{htmlelement("dl")}}
- {{htmlelement("dt")}}
- {{htmlelement("dd")}}
- [Anleitung zur Verwendung des aria-describedby Attributs](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
