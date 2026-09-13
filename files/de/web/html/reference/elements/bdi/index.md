---
title: "`<bdi>` HTML Bidirektionales Isolierungselement"
short-title: <bdi>
slug: Web/HTML/Reference/Elements/bdi
l10n:
  sourceCommit: da275ce3eae1d8d250f1079b4643213a7a2bbb90
---

Das **`<bdi>`**-[HTML](/de/docs/Web/HTML)-Element weist den bidirektionalen Algorithmus des Browsers an, den enthaltenen Text isoliert von seinem umgebenden Text zu behandeln. Dies ist besonders nützlich, wenn eine Website dynamisch Text einfügt und die Richtung des eingefügten Textes unbekannt ist.

{{InteractiveExample("HTML Demo: &lt;bdi&gt;", "tabbed-standard")}}

```html interactive-example
<h1>World wrestling championships</h1>

<ul>
  <li><bdi class="name">Evil Steven</bdi>: 1st place</li>
  <li><bdi class="name">François fatale</bdi>: 2nd place</li>
  <li><span class="name">سما</span>: 3rd place</li>
  <li><bdi class="name">الرجل القوي إيان</bdi>: 4th place</li>
  <li><span class="name" dir="auto">سما</span>: 5th place</li>
</ul>
```

```css interactive-example
html {
  font-family: sans-serif;
}

bdi {
  /* Add your styles here */
}

.name {
  color: red;
}
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

Wenn das [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)-Attribut nicht angegeben ist, verhält sich das Element dennoch so, als wäre `dir="auto"` angegeben.

## Nutzungshinweise

Bidirektionaler Text ist Text, der sowohl Zeichenfolgen enthalten kann, die von links nach rechts (LTR) als auch von rechts nach links (RTL) angeordnet sind, wie z. B. ein arabisches Zitat in einem englischen Satz. Browser implementieren den [Unicode-Bidirektional-Algorithmus](https://www.w3.org/International/articles/inline-bidi-markup/uba-basics), um damit umzugehen. In diesem Algorithmus erhalten die Zeichen eine implizite Richtung: Zum Beispiel werden lateinische Zeichen als LTR behandelt, während arabische Zeichen als RTL behandelt werden. Einige andere Zeichen (wie Leerzeichen und einige Satzzeichen) werden als neutral behandelt und erhalten ihre Richtung basierend auf den sie umgebenden Zeichen.

Normalerweise macht der bidirektionale Algorithmus das Richtige, ohne dass der Autor spezielle Markups bereitstellen muss. Gelegentlich benötigt der Algorithmus jedoch Unterstützung. Hier kommt `<bdi>` ins Spiel.

Das `<bdi>`-Element wird verwendet, um einen Textabschnitt zu umschließen und den bidirektionalen Algorithmus anzuweisen, diesen Text isoliert von seiner Umgebung zu behandeln. Dies funktioniert auf zwei Arten:

- Die Richtung des in `<bdi>` eingebetteten Textes _beeinflusst nicht_ die Richtung des umgebenden Textes.
- Die Richtung des in `<bdi>` eingebetteten Textes _wird nicht von_ der Richtung des umgebenden Textes beeinflusst.

Zum Beispiel betrachten Sie einen Text wie:

```plain
EMBEDDED-TEXT - 1st place
```

Wenn `EMBEDDED-TEXT` LTR ist, funktioniert das gut. Wenn `EMBEDDED-TEXT` jedoch RTL ist, wird `- 1` als RTL-Text behandelt (da es sich aus neutralen und schwachen Zeichen zusammensetzt). Das Ergebnis wird durcheinander geraten:

```plain
1 - EMBEDDED-TEXTst place
```

Wenn Sie die Richtung von `EMBEDDED-TEXT` im Voraus kennen, können Sie dieses Problem beheben, indem Sie `EMBEDDED-TEXT` in ein {{HTMLElement("span")}} mit dem Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) umschließen, das auf die bekannte Richtung gesetzt ist. Aber wenn Sie die Richtung nicht kennen - zum Beispiel, weil `EMBEDDED-TEXT` aus einer Datenbank gelesen oder vom Benutzer eingegeben wird - sollten Sie `<bdi>` verwenden, um zu verhindern, dass die Richtung von `EMBEDDED-TEXT` seine Umgebung beeinflusst.

Obwohl derselbe visuelle Effekt durch die Verwendung der CSS-Regel {{cssxref("unicode-bidi", "unicode-bidi: isolate")}} auf einem {{HTMLElement("span")}} oder einem anderen Textformatierungselement erreicht werden kann, sollten HTML-Autoren diesen Ansatz nicht verwenden, da er nicht semantisch ist und Browser das CSS-Styling ignorieren dürfen.

Wenn ein semantisches Element wie {{HTMLElement("cite")}} angemessen ist, bevorzugen Sie die Verwendung von `<cite dir="auto">` anstelle von `<bdi>`. Wenn kein semantisches Element geeignet ist und die beabsichtigte Richtung `auto` (aus dem Inhalt ableiten) ist, ist `<bdi>` kürzer als `<span dir="auto">` und vermittelt die Absicht des Autors besser. Beim Festlegen expliziter Richtungen wie `ltr` sind `<bdi dir="ltr">` und `<span dir="ltr">` genau gleichwertig.

## Beispiele

### Kein bdi mit nur LTR

Dieses Beispiel listet die Gewinner eines Wettbewerbs unter Verwendung von {{HTMLElement("span")}}-Elementen auf. Wenn die Namen nur LTR-Text enthalten, sehen die Ergebnisse in Ordnung aus:

```html
<ul>
  <li><span class="name">Henrietta Boffin</span> - 1st place</li>
  <li><span class="name">Jerry Cruncher</span> - 2nd place</li>
</ul>
```

```css hidden
body {
  border: 1px solid #3f87a6;
  max-width: calc(100% - 40px - 6px);
  padding: 20px;
  width: calc(100% - 40px - 6px);
  border-width: 1px 1px 1px 5px;
}
```

{{ EmbedLiveSample('No_bdi_with_only_LTR','','120') }}

### Kein bdi mit RTL-Text

Dieses Beispiel listet die Gewinner eines Wettbewerbs unter Verwendung von {{HTMLElement("span")}}-Elementen auf, und einer der Gewinner hat einen Namen, der aus RTL-Text besteht. In diesem Fall wird das `- 1`, welches aus Zeichen mit neutraler oder schwacher Richtung besteht, die Richtung des RTL-Textes übernehmen, und das Ergebnis wird durcheinander geraten:

```html
<ul>
  <li><span class="name">اَلأَعْشَى</span> - 1st place</li>
  <li><span class="name">Jerry Cruncher</span> - 2nd place</li>
</ul>
```

```css hidden
body {
  border: 1px solid #3f87a6;
  max-width: calc(100% - 40px - 6px);
  padding: 20px;
  width: calc(100% - 40px - 6px);
  border-width: 1px 1px 1px 5px;
}
```

{{ EmbedLiveSample('No_bdi_with_RTL_text','','120') }}

### Verwendung von bdi mit LTR- und RTL-Text

Dieses Beispiel listet die Gewinner eines Wettbewerbs unter Verwendung von `<bdi>`-Elementen auf. Diese Elemente weisen den Browser an, den Namen isoliert von seinem Einbettungskontext zu behandeln, sodass die Beispielausgabe richtig angeordnet ist:

```html
<ul>
  <li><bdi class="name">اَلأَعْشَى</bdi> - 1st place</li>
  <li><bdi class="name">Jerry Cruncher</bdi> - 2nd place</li>
</ul>
```

```css hidden
body {
  border: 1px solid #3f87a6;
  max-width: calc(100% - 40px - 6px);
  padding: 20px;
  width: calc(100% - 40px - 6px);
  border-width: 1px 1px 1px 5px;
}
```

{{ EmbedLiveSample('Using_bdi_with_LTR_and_RTL_text','','120') }}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das Endtag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role">generisch</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Jede</td>
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

- [Inline-Markup und bidirektionaler Text in HTML](https://www.w3.org/International/articles/inline-bidi-markup/)
- [Unicode-Bidirektional-Algorithmus Grundlagen](https://www.w3.org/International/articles/inline-bidi-markup/uba-basics)
- {{Glossary("Localization", "Lokalisierung")}}
- Verwandtes HTML-Element: {{HTMLElement("bdo")}}
- Verwandte CSS-Eigenschaften: {{cssxref("direction")}}, {{cssxref("unicode-bidi")}}
