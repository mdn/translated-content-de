---
title: Begriffe mit HTML definieren
slug: Learn/HTML/Howto/Define_terms_with_HTML
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{QuickLinksWithSubpages("/de/docs/Learn/HTML/Howto")}}

HTML bietet mehrere Möglichkeiten, Beschreibungseinheiten darzustellen, sei es inline oder als strukturierte Glossare. In diesem Artikel behandeln wir, wie man Schlüsselwörter korrekt auszeichnet, wenn man sie definiert.

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
        Lernen Sie, wie man neue Schlüsselwörter einführt und wie man Beschreibungslisten erstellt.
      </td>
    </tr>
  </tbody>
</table>

Wenn Sie einen Begriff definiert brauchen, greifen Sie wahrscheinlich direkt zu einem Wörterbuch oder Glossar. Wörterbücher und Glossare verknüpfen _formell_ Schlüsselwörter mit einer oder mehreren Beschreibungen, wie in diesem Fall:

> - Blau (_Adjektiv_)
>   - : Von einer Farbe wie der Himmel an einem sonnigen Tag.
>     _"Der klare blaue Himmel"_

Aber wir definieren ständig Schlüsselwörter informell, wie hier:

> **Firefox** ist der Webbrowser, der von der Mozilla Foundation erstellt wurde.

Um mit diesen Anwendungsfällen umzugehen, bietet {{Glossary("HTML", "HTML")}} {{Glossary("tag", "Tags")}}, um Beschreibungen und beschriebene Wörter zu markieren, damit Ihre Bedeutung den Lesern korrekt vermittelt wird.

## Anleitung zur Markierung informeller Beschreibungen

In Lehrbüchern ist es üblich, das Schlüsselwort beim ersten Auftreten fett gedruckt darzustellen und es sofort zu definieren.

Wir tun dies auch in HTML, mit dem Unterschied, dass HTML kein visuelles Medium ist und wir daher kein Fett verwenden. Wir verwenden {{htmlelement("dfn")}}, ein spezielles Element nur zur Markierung des ersten Auftretens von Schlüsselwörtern. Beachten Sie, dass `<dfn>`-Tags um das _zu definierende Wort_ und nicht um die Definition gehen (die Definition besteht aus dem gesamten Absatz):

```html
<p><dfn>Firefox</dfn> is the web browser created by the Mozilla Foundation.</p>
```

> [!NOTE]
> Eine weitere Verwendung für Fett ist, um Inhalte zu betonen. Fett an sich ist ein HTML fremdes Konzept, aber es gibt [Tags zur Angabe von Betonung.](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#emphasis_and_importance)

### Sonderfall: Abkürzungen

Es ist am besten, [Abkürzungen speziell zu markieren](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#abbreviations) mit {{htmlelement("abbr")}}, damit Bildschirmleser sie angemessen lesen und Sie auf alle Abkürzungen einheitlich zugreifen können. Genau wie bei jedem neuen Schlüsselwort sollten Sie Ihre Abkürzungen beim ersten Auftreten definieren.

```html
<p>
  <dfn><abbr>HTML</abbr> (hypertext markup language)</dfn>
  is a description language used to structure documents on the web.
</p>
```

> [!NOTE]
> Die HTML-Spezifikation [legt tatsächlich das `title`-Attribut zurück](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element) für die Erweiterung der Abkürzung. Dies ist jedoch keine akzeptable Alternative zur Bereitstellung einer inline-Erweiterung. Die Inhalte von `title` sind völlig vor Ihren Benutzern verborgen, es sei denn, sie verwenden eine Maus und fahren zufällig über die Abkürzung. Die Spezifikation erkennt dies auch entsprechend [an.](https://html.spec.whatwg.org/multipage/dom.html#attr-title)

### Verbesserung der Barrierefreiheit

{{HTMLElement('dfn')}} markiert das definierte Schlüsselwort und zeigt an, dass der aktuelle Absatz das Schlüsselwort definiert. Mit anderen Worten besteht eine implizite Beziehung zwischen dem `<dfn>`-Element und seinem Container. Wenn Sie eine formellere Beziehung möchten oder Ihre Definition aus nur einem Satz und nicht dem gesamten Absatz besteht, können Sie das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)-Attribut verwenden, um einen Begriff formeller mit seiner Definition zu verknüpfen:

```html
<p>
  <span id="ff">
    <dfn aria-describedby="ff">Firefox</dfn>
    is the web browser created by the Mozilla Foundation.
  </span>
  You can download it at <a href="https://www.mozilla.org">mozilla.org</a>
</p>
```

Hilfstechnologien können oft dieses Attribut verwenden, um eine Textalternative zu einem gegebenen Begriff zu finden. Sie können `aria-describedby` auf jedem Tag verwenden, der ein zu definierendes Schlüsselwort umschließt (nicht nur auf dem `<dfn>`-Element). `aria-describedby` referenziert die [`id`](/de/docs/Web/HTML/Global_attributes/id) des Elements, das die Beschreibung enthält.

## Anleitung zum Erstellen einer Beschreibungs-Liste

Beschreibungslisten sind genau das, was der Name sagt: eine Liste von Begriffen und deren passenden Beschreibungen (z.B. Definitionslisten, Wörterbucheinträge, FAQs und Schlüssel-Wert-Paare).

> [!NOTE]
> Beschreibungslisten sind [nicht geeignet für die Auszeichnung von Dialogen,](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element) da Konversationen die Sprecher nicht direkt beschreiben. Hier sind [Empfehlungen zur Auszeichnung von Dialogen](https://html.spec.whatwg.org/multipage/semantics-other.html#conversations).

Die beschriebenen Begriffe gehen in {{htmlelement("dt")}}-Elemente. Die passende Beschreibung folgt sofort, enthalten in einem oder mehreren {{htmlelement("dd")}}-Elementen. Schließen Sie die gesamte Beschreibungs-Liste mit einem {{htmlelement("dl")}}-Element ein.

### Ein einfaches Beispiel

Hier ist ein einfaches Beispiel zur Beschreibung von Arten von Lebensmitteln und Getränken:

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
> Das grundlegende Muster, wie Sie sehen können, ist, `<dt>`-Begriffe mit `<dd>`-Beschreibungen abzuwechseln. Wenn zwei oder mehr Begriffe nacheinander auftreten, gilt die folgende Beschreibung für alle von ihnen. Wenn zwei oder mehr Beschreibungen nacheinander auftreten, gelten sie alle für den zuletzt angegebenen Begriff.

### Verbesserung der visuellen Darstellung

So sieht ein grafischer Browser die obige Liste an:

{{EmbedLiveSample("A_simple_example", 600, 180)}}

Wenn Sie möchten, dass die Schlüsselwörter besser hervorgehoben werden, könnten Sie versuchen, sie fett darzustellen. Denken Sie daran, HTML ist kein visuelles Medium; wir benötigen {{Glossary("CSS", "CSS")}} für alle visuellen Effekte. Die CSS-Eigenschaft {{cssxref("font-weight")}} benötigen Sie hier:

```css
dt {
  font-weight: bold;
}
```

Dies erzeugt das unten etwas besser lesbare Ergebnis:

{{EmbedLiveSample("How_to_build_a_description_list", 600, 180)}}

## Mehr erfahren

- {{htmlelement("dfn")}}
- {{htmlelement("dl")}}
- {{htmlelement("dt")}}
- {{htmlelement("dd")}}
- [Anleitung zur Verwendung des aria-describedby-Attributs](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
